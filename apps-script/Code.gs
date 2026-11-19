/**
 * App học tiếng Anh: nơi lưu KIẾN THỨC BỔ SUNG do giáo viên thêm trong app.
 * Cài một lần theo file HUONG-DAN.md (mục "Cho phép thêm kiến thức trong app").
 */

// ĐỔI mã này thành mã riêng của bạn (chỉ người biết mã mới thêm / xoá được kiến thức)
var MA_GIAO_VIEN = 'doi-ma-nay';

var TAB = 'Bo_sung';
var COT = ['Mã dòng', 'Thời gian', 'Giai đoạn', 'Buổi', 'Mục', 'Nội dung (mỗi dòng 1 ý)', 'Ví dụ (mỗi dòng: câu tiếng Anh = nghĩa)'];

/** Chạy hàm này MỘT LẦN trong trình biên tập. */
function caiDat() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  PropertiesService.getScriptProperties().setProperty('SHEET_ID', ss.getId());
  ss.setSpreadsheetTimeZone('Asia/Ho_Chi_Minh');
  var sh = ss.getSheetByName(TAB) || ss.insertSheet(TAB);
  if (sh.getLastRow() === 0) {
    sh.appendRow(COT);
    sh.getRange(1, 1, 1, COT.length).setFontWeight('bold').setBackground('#e8edff').setWrap(true);
    sh.setFrozenRows(1);
    sh.getRange('B:B').setNumberFormat('dd/MM/yyyy HH:mm');
    sh.setColumnWidth(5, 180); sh.setColumnWidth(6, 420); sh.setColumnWidth(7, 380);
  }
  Logger.log('Xong. Tab "' + TAB + '" đã sẵn sàng.');
}

function bang() {
  var id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  var ss = id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(TAB);
}

function traJson(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** App hỏi: lấy toàn bộ kiến thức bổ sung */
function doGet(e) {
  var sh = bang();
  if (!sh || sh.getLastRow() < 2) return traJson({ ds: [] });
  var ds = sh.getRange(2, 1, sh.getLastRow() - 1, COT.length).getDisplayValues()
    .filter(function (r) { return r[0] && r[2] && r[3] && (r[5] || r[6]); })
    .map(function (r) { return { id: r[0], gd: r[2], buoi: r[3], muc: r[4], noi_dung: r[5], vd: r[6] }; });
  return traJson({ ds: ds });
}

/** App gửi: kiểm tra mã / thêm / xoá */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var g = JSON.parse(e.postData.contents);
    if (String(g.ma || '') !== MA_GIAO_VIEN) return traJson({ ok: false, loi: 'sai_ma' });
    if (g.a === 'kiem') return traJson({ ok: true });
    var sh = bang();
    if (g.a === 'them') {
      var id = Utilities.getUuid().slice(0, 8);
      sh.appendRow([id, new Date(), Number(g.gd), Number(g.buoi), String(g.muc || '').slice(0, 120),
                    String(g.noi_dung || '').slice(0, 4000), String(g.vd || '').slice(0, 4000)]);
      return traJson({ ok: true, id: id });
    }
    if (g.a === 'xoa') {
      var ma = sh.getRange(2, 1, Math.max(sh.getLastRow() - 1, 1), 1).getDisplayValues();
      for (var i = 0; i < ma.length; i++) {
        if (ma[i][0] === String(g.id)) { sh.deleteRow(i + 2); return traJson({ ok: true }); }
      }
      return traJson({ ok: false, loi: 'khong_thay' });
    }
    return traJson({ ok: false, loi: 'khong_ro' });
  } catch (err) {
    return traJson({ ok: false, loi: String(err) });
  } finally {
    lock.releaseLock();
  }
}
