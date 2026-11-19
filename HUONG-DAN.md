# App học tiếng Anh: hướng dẫn

Link gửi học sinh: https://linhhtt1002.github.io/hoc-tieng-anh/

## App có gì

Học sinh mở link là vào học ngay, không cần đăng nhập. Điểm chỉ lưu trên máy của từng em. Trang chủ có mục **Phát âm 44 âm IPA** (nghe riêng từng âm, cách đặt miệng lưỡi, cặp từ dễ nhầm, luyện nghe) và 5 giai đoạn, 58 buổi. Mỗi buổi có:

| Phần | Học sinh làm gì |
|---|---|
| **Bài học** | Kiến thức để xem lại: cách dùng, công thức, dấu hiệu, lỗi hay sai, phát âm của buổi, ví dụ bấm nghe được. Có thêm phần **bổ sung** do giáo viên tự thêm |
| **Từ vựng** | 30 từ: lật thẻ xem nghĩa, nghe đọc mẫu, bấm 🎤 nói thử, cuối cùng làm bài kiểm tra |
| **Bài tập** | 30 câu: trắc nghiệm, điền từ, sắp xếp câu, tìm lỗi sai. Sai thì có giải thích |
| **Nói theo** | Nghe mẫu → bấm 🎤 đọc to → máy tô xanh từ đọc đúng, đỏ từ đọc sai, chấm % |
| **Nghe chép** | Nghe câu rồi gõ lại, máy so từng từ |

**Máy chấm giọng chạy được trên:** Chrome (Android, máy tính) và Safari (iPhone).

---

## Cho phép thêm kiến thức ngay trong app (cài 1 lần, khoảng 10 phút)

Trang học trên GitHub chỉ hiển thị, không tự lưu được. Phần kiến thức bạn thêm sẽ được lưu vào một Google Sheet của bạn, nhờ vậy mọi học sinh đều thấy.

1. Vào **sheets.new** → tạo bảng tính trống, đặt tên ví dụ "Kiến thức bổ sung – app tiếng Anh".
2. Trên thanh menu bấm **Tiện ích mở rộng → Apps Script**.
3. Mở link sau, bấm **Ctrl+A** rồi **Ctrl+C** để chép mã:
   https://raw.githubusercontent.com/linhhtt1002/hoc-tieng-anh/main/apps-script/Code.gs
   Quay lại Apps Script, xoá hết chữ có sẵn, dán mã vào (**Ctrl+V**).
4. **Đặt mã giáo viên:** ở dòng `var MA_GIAO_VIEN = 'doi-ma-nay';`, thay `doi-ma-nay` bằng mã riêng của bạn (ví dụ `cogiao2026`), giữ nguyên hai dấu nháy. Bấm 💾 **Lưu**.
   (Mã chỉ nằm trong Google Sheet của bạn, không ai xem được.)
5. Ở ô chọn hàm cạnh nút **▷ Chạy**, chọn **caiDat** → bấm **Chạy**.
   - Google hỏi quyền → **Xem xét quyền** → chọn tài khoản → nếu hiện "Google chưa xác minh ứng dụng": **Nâng cao → Đi tới … (không an toàn)** → tích **Chọn tất cả** → **Tiếp tục**.
   - Chạy xong, bảng tính có tab **Bo_sung**.
6. Bấm **Triển khai → Tùy chọn triển khai mới** → bánh răng ⚙ → **Ứng dụng web**:
   - Thực thi với tư cách: **Tôi**
   - Người có quyền truy cập: **Bất kỳ ai**
   - Bấm **Triển khai** → chép **URL ứng dụng web** (đuôi `/exec`) → gửi link đó cho Claude.

Claude gắn link vào app là xong.

## Cách thêm kiến thức

1. Mở app → chọn buổi → tab **Bài học** → kéo xuống cuối, bấm **"Giáo viên: thêm kiến thức"** → nhập mã giáo viên (máy nhớ mã, lần sau không phải nhập lại).
2. Mỗi mục hiện nút **✏️ Thêm vào mục này**, cuối trang có nút **+ Thêm mục mới**.
3. Gõ nội dung, **mỗi dòng là một ý**. Muốn in đậm thì bọc chữ bằng hai dấu sao: `**am**`.
4. Ví dụ (không bắt buộc), mỗi dòng một câu theo dạng: `I am a teacher. = Tôi là giáo viên.` App tự thêm nút 🔊 để nghe câu đó.
5. Bấm **Lưu**. Học sinh mở lại trang là thấy, phần bạn thêm có nhãn **"bổ sung"**.
6. Ghi nhầm thì bấm **Xoá** ở phần đó. Xong việc bấm **Thoát** để về chế độ học sinh.

Bạn cũng xem và sửa được trực tiếp trong tab **Bo_sung** của Google Sheet: mỗi dòng là một lần thêm. Ở cột "Ví dụ", mỗi câu ví dụ nằm trên một dòng riêng trong ô (xuống dòng bằng Alt+Enter).
