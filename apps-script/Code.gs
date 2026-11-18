/**
 * App học tiếng Anh: nhận điểm học viên + đưa nội dung bài học cho trang web.
 * Cách dùng: xem file HUONG-DAN.md
 */

// Link file nội dung gốc trên trang web (dùng khi bấm chạy caiDat / napLaiNoiDung)
var LINK_NOI_DUNG = 'https://linhhtt1002.github.io/hoc-tieng-anh/noi-dung.json';

var TAB_TIEN_DO = 'Tien_do';
var TAB_NOI_DUNG = 'Noi_dung';
var TAB_TONG_HOP = 'Tong_hop';
var COT_TIEN_DO = ['Thời gian', 'Họ tên', 'Số điện thoại', 'Giai đoạn', 'Buổi', 'Tên buổi', 'Phần', 'Điểm', 'Tổng', '%', 'Cần ôn lại'];

/** BƯỚC 1 — chạy hàm này một lần trong trình biên tập. */
function caiDat() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  PropertiesService.getScriptProperties().setProperty('SHEET_ID', ss.getId());
  ss.setSpreadsheetTimeZone('Asia/Ho_Chi_Minh');

  var td = ss.getSheetByName(TAB_TIEN_DO) || ss.insertSheet(TAB_TIEN_DO);
  if (td.getLastRow() === 0) {
    td.appendRow(COT_TIEN_DO);
    td.getRange(1, 1, 1, COT_TIEN_DO.length).setFontWeight('bold').setBackground('#e8edff');
    td.setFrozenRows(1);
    td.getRange('A:A').setNumberFormat('dd/MM/yyyy HH:mm');
    td.getRange('C:C').setNumberFormat('@');
    td.setColumnWidth(6, 260); td.setColumnWidth(11, 420);
  }

  var nd = ss.getSheetByName(TAB_NOI_DUNG) || ss.insertSheet(TAB_NOI_DUNG);
  if (nd.getLastRow() <= 1) napLaiNoiDung();

  var th = ss.getSheetByName(TAB_TONG_HOP) || ss.insertSheet(TAB_TONG_HOP);
  th.clear();
  th.getRange('A1').setValue('Tổng hợp theo học viên (tự cập nhật)').setFontWeight('bold');
  th.getRange('A3').setFormula(
    "=IFERROR(QUERY(" + TAB_TIEN_DO + "!A2:K, \"select B, C, count(J), avg(J), max(A) where B is not null group by B, C " +
    "label B 'Họ tên', C 'Số điện thoại', count(J) 'Số lần nộp bài', avg(J) '% trung bình', max(A) 'Lần học gần nhất'\", 0), \"Chưa có học viên nào nộp bài\")");
  th.getRange('G1').setValue('Tổng hợp theo buổi').setFontWeight('bold');
  th.getRange('G3').setFormula(
    "=IFERROR(QUERY(" + TAB_TIEN_DO + "!A2:K, \"select D, E, G, count(J), avg(J) where B is not null group by D, E, G order by D, E " +
    "label D 'Giai đoạn', E 'Buổi', G 'Phần', count(J) 'Số lượt', avg(J) '% trung bình'\", 0), \"\")");

  var mac = ss.getSheetByName('Trang tính1') || ss.getSheetByName('Sheet1');
  if (mac && mac.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(mac);
  Logger.log('Xong. Các tab: ' + ss.getSheets().map(function (s) { return s.getName(); }).join(', '));
}

/** Nạp lại toàn bộ nội dung gốc vào tab Noi_dung (GHI ĐÈ những gì đang có). */
function napLaiNoiDung() {
  var ss = moSheet();
  var nd = ss.getSheetByName(TAB_NOI_DUNG) || ss.insertSheet(TAB_NOI_DUNG);
  var data = JSON.parse(UrlFetchApp.fetch(LINK_NOI_DUNG).getContentText('UTF-8'));
  nd.clear();
  var bang = [data.cot].concat(data.dong);
  nd.getRange(1, 1, bang.length, data.cot.length).setNumberFormat('@').setValues(bang);
  nd.getRange(1, 1, 1, data.cot.length).setFontWeight('bold').setBackground('#e8edff').setWrap(true);
  nd.setFrozenRows(1);
  nd.setColumnWidth(3, 110); nd.setColumnWidth(4, 340); nd.setColumnWidth(6, 220); nd.setColumnWidth(7, 160);
  nd.setColumnWidth(8, 180); nd.setColumnWidth(9, 300); nd.setColumnWidth(10, 260); nd.setColumnWidth(11, 220);
  var loai = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Tên buổi', 'Từ vựng', 'Luyện âm', 'Câu nói', 'Trắc nghiệm', 'Điền từ', 'Sắp xếp câu'], true).build();
  nd.getRange(2, 3, Math.max(bang.length + 500, 2000), 1).setDataValidation(loai);
  Logger.log('Đã nạp ' + data.dong.length + ' dòng nội dung.');
}

function moSheet() {
  var id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  return id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
}

function traJson(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Trang web hỏi nội dung bài học */
function doGet(e) {
  if (e && e.parameter && e.parameter.a === 'noidung') {
    var nd = moSheet().getSheetByName(TAB_NOI_DUNG);
    if (!nd || nd.getLastRow() < 2) return traJson({ dong: [] });
    var dong = nd.getRange(2, 1, nd.getLastRow() - 1, 11).getDisplayValues()
      .filter(function (r) { return r[0] && r[1] && r[2] && r[3]; });
    return traJson({ dong: dong });
  }
  return ContentService.createTextOutput('Đang chạy. Đây là phần nhận điểm của app học tiếng Anh.');
}

/** Trang web gửi điểm */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var goi = JSON.parse(e.postData.contents);
    var ds = goi.ds || [goi];
    var td = moSheet().getSheetByName(TAB_TIEN_DO);
    var dong = ds.map(function (x) {
      return [x.luc ? new Date(x.luc) : new Date(), String(x.ten || '').slice(0, 80), "'" + String(x.sdt || '').slice(0, 15),
              x.gd, x.buoi, x.ten_buoi, x.phan, x.diem, x.tong, x.phan_tram, String(x.chi_tiet || '').slice(0, 1500)];
    });
    if (dong.length) td.getRange(td.getLastRow() + 1, 1, dong.length, dong[0].length).setValues(dong);
    return traJson({ ok: true, so: dong.length });
  } catch (err) {
    return traJson({ ok: false, loi: String(err) });
  } finally {
    lock.releaseLock();
  }
}
