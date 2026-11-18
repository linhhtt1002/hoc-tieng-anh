# App học tiếng Anh: hướng dẫn

## App có gì

Học viên mở link trên điện thoại, nhập họ tên + số điện thoại một lần, rồi chọn Giai đoạn → Buổi. Mỗi buổi có 4 phần:

| Phần | Học viên làm gì |
|---|---|
| **Từ vựng** | Lật thẻ xem nghĩa, nghe đọc mẫu, bấm 🎤 nói thử. Cuối cùng làm bài kiểm tra: xem nghĩa chọn từ, nghe chọn nghĩa |
| **Bài tập** | Trắc nghiệm, điền từ, sắp xếp câu theo đúng ngữ pháp của buổi. Sai thì có giải thích |
| **Nói theo** | Nghe mẫu (thường / chậm) → bấm 🎤 đọc to → máy tô xanh từ đọc đúng, đỏ từ đọc sai, chấm % |
| **Nghe chép** | Nghe câu rồi gõ lại, máy so từng từ |

Làm xong mỗi phần, điểm tự gửi về Google Sheet của chị.

**Máy chấm giọng chạy được trên:** Chrome (Android, máy tính) và Safari (iPhone). Trình duyệt khác vẫn nghe được giọng mẫu, nhưng máy không chấm.

---

## Nối Google Sheet (làm 1 lần, khoảng 10 phút)

1. Vào sheets.google.com → tạo **bảng tính trống**, đặt tên ví dụ "App học tiếng Anh".
2. Trên thanh menu: **Tiện ích mở rộng → Apps Script**.
3. Xoá hết chữ có sẵn trong khung soạn, mở file `apps-script/Code.gs`, chép toàn bộ rồi dán vào. Bấm 💾 **Lưu**.
4. Ở ô chọn hàm cạnh nút **Chạy** (trên cùng), chọn **caiDat** → bấm **Chạy**.
   - Google hỏi quyền → **Xem xét quyền** → chọn tài khoản → (nếu hiện "Google chưa xác minh ứng dụng") **Nâng cao → Đi tới ... (không an toàn)** → tích **Chọn tất cả** → **Tiếp tục**.
   - Chạy xong, bảng tính có 3 tab: **Noi_dung** (khoảng 1.850 dòng bài học), **Tien_do**, **Tong_hop**.
5. Bấm **Triển khai → Tùy chọn triển khai mới** → bánh răng ⚙ → **Ứng dụng web**.
   - Thực thi với tư cách: **Tôi**
   - Người có quyền truy cập: **Bất kỳ ai**
   - Bấm **Triển khai** → chép **URL ứng dụng web** (đuôi `/exec`) → gửi link đó cho Claude.

Claude dán link vào trang học. Từ đó trang đọc nội dung từ tab Noi_dung và ghi điểm vào tab Tien_do.

---

## Sửa / thêm nội dung bài học

Sửa thẳng trong tab **Noi_dung**. Học viên mở lại trang là thấy nội dung mới, không cần triển khai lại.

| Cột | Ý nghĩa |
|---|---|
| Giai đoạn, Buổi | Số. Buổi mới (ví dụ GĐ 2 buổi 13) thì thêm dòng "Tên buổi" trước |
| Loại | Chọn trong danh sách: Tên buổi · Từ vựng · Luyện âm · Câu nói · Trắc nghiệm · Điền từ · Sắp xếp câu |
| Tiếng Anh / Câu hỏi | Từ, câu, hoặc câu hỏi có chỗ trống `___` |
| Phiên âm | Cho Từ vựng, Luyện âm |
| Nghĩa tiếng Việt | Cho Từ vựng, Câu nói, Sắp xếp câu (gợi ý nghĩa) |
| Đáp án | Trắc nghiệm, Điền từ. Điền từ có nhiều cách đúng thì ghi `is not \| isn't` |
| Phương án sai | Trắc nghiệm: 2–3 phương án, cách nhau bằng dấu `\|` |
| Giải thích / Ghi chú | Hiện ra sau khi học viên trả lời |
| Câu ví dụ, Nghĩa câu ví dụ | Cho Từ vựng |

**Lưu ý:**
- Một buổi đã có trong tab Noi_dung thì trang lấy **toàn bộ** buổi đó từ Sheet. Xoá dòng nào thì câu đó biến mất khỏi app.
- Sắp xếp câu: trang tự xáo các từ trong câu tiếng Anh. Câu nên dài 4–10 từ và chỉ có một cách xếp đúng.
- Câu nói: tránh tên riêng và số viết bằng chữ số. Máy nghe hay ghi lệch hai loại này nên chấm sai.
- Muốn khôi phục nội dung gốc: trong Apps Script chọn hàm **napLaiNoiDung** → Chạy. Lệnh này **ghi đè** mọi chỗ chị đã sửa.

## Xem kết quả học viên

- Tab **Tien_do**: mỗi lần học viên làm xong một phần là thêm một dòng (giờ Việt Nam, tên, SĐT, buổi, phần, điểm, các câu cần ôn).
- Tab **Tong_hop**: tự tính số lần nộp, % trung bình, lần học gần nhất của từng học viên, và % trung bình theo từng buổi.
- Học viên mất mạng lúc làm bài: điểm được giữ trên máy và tự gửi lại khi có mạng.
