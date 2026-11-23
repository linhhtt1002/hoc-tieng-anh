# Bổ sung kiến thức theo giáo án của LinhT (3 file Word ngày 23/11):
#   "Thì hiện tại đơn.docx", "hiện tại tiếp diễn.docx" (kèm quá khứ đơn), "4.docx" (số thứ tự)
# Chỉ thêm phần app CHƯA có, sửa các chỗ trong giáo án bị sai. Chạy lại nhiều lần không bị nhân đôi
# (mục nào đã có cùng tiêu đề thì thay bằng bản mới; dòng đánh dấu GA đã có thì không thêm lại).
import json, os, sys
sys.stdout.reconfigure(encoding='utf-8')
ND = os.path.dirname(os.path.abspath(__file__))

def V(en, vi): return {'en': en, 'vi': vi}

def muc(tieu_de, y, vd=()):
    return {'tieu_de': tieu_de, 'y': list(y), 'vd': list(vd), 'nguon': 'giao-an'}

# ---- thêm mục mới (đặt trước "Lỗi hay gặp") ----
MUC_MOI = {
 (1, 1): [
  muc('Danh từ số nhiều: quy tắc đầy đủ', [
    'Tận cùng **s, ss, sh, ch, x, z** thêm -es: bus → buses, dish → dishes, box → boxes.',
    'Phụ âm + **o** thêm -es: potato → potatoes, tomato → tomatoes. Nguyên âm + o chỉ thêm -s: radio → radios, video → videos. Ngoại lệ hay gặp: photo → photos, piano → pianos.',
    'Phụ âm + **y** → bỏ y thêm -ies: baby → babies, city → cities. Nguyên âm + y chỉ thêm -s: boy → boys, day → days.',
    'Tận cùng **f / fe** → đổi thành -ves: knife → knives, leaf → leaves, wife → wives (ngoại lệ: roof → roofs).',
    'Bất quy tắc phải học thuộc: man → men, woman → women, child → children, person → people, tooth → teeth, foot → feet, mouse → mice.',
    'Giữ nguyên ở số nhiều: fish → fish, sheep → sheep, deer → deer, aircraft → aircraft, species → species.',
  ], [V('There are two knives on the table.', 'Có hai con dao trên bàn.'), V('The children are in the garden.', 'Bọn trẻ đang ở trong vườn.')]),
 ],
 (1, 2): [
  muc('Thêm từ để hỏi với to be', [
    '**Why**: tại sao. **When**: khi nào. **Which**: cái nào (chọn trong số đã biết). **How**: thế nào, ra sao.',
    'Công thức vẫn là: Từ để hỏi + am / is / are + S?',
    'How + tính từ để hỏi mức độ: How old (bao nhiêu tuổi), How tall (cao bao nhiêu), How long (dài / lâu bao nhiêu).',
  ], [V('Who is she in the picture?', 'Cô ấy trong bức ảnh là ai?'), V('Which is your pen?', 'Cái bút nào là của bạn?'),
      V('How is your mother today?', 'Hôm nay mẹ bạn thế nào?'), V('Why are they in the kitchen?', 'Tại sao họ ở trong bếp?'),
      V('Where is Pedro from?', 'Pedro đến từ đâu?')]),
 ],
 (1, 4): [
  muc('in / on / at: thêm trường hợp', [
    '**at** + bữa ăn: at breakfast, at lunch, at dinner. at + tuổi: at the age of five. at + dịp lễ ngắn: at Christmas, at New Year, at Easter.',
    '**at** trong cụm cố định: at the moment (lúc này), at the end of (cuối), at the beginning of (đầu), at that time (lúc đó).',
    '**on** + một ngày lễ cụ thể: on Christmas Day, on Christmas Eve, on New Year\'s Day, on my birthday. (Nói at Christmas nhưng on Christmas Eve.)',
    '**in** + mùa, thế kỷ: in the summer, in the 21st century. in + khoảng thời gian = sau bao lâu nữa: in two weeks, in a few minutes.',
    'KHÔNG dùng in / on / at trước **next, last, this, every, each, all, some, today, tomorrow, yesterday**: I see her every Monday (không nói on every Monday).',
  ], [V('Bella started school at the age of five.', 'Bella bắt đầu đi học lúc năm tuổi.'),
      V('We have a big dinner on Christmas Eve.', 'Chúng tôi có bữa tối lớn vào đêm Giáng sinh.'),
      V('I visit my grandparents every Sunday.', 'Chủ nhật nào tôi cũng thăm ông bà.')]),
  muc('Giới từ thời gian khác', [
    '**from ... to**: từ ... đến: The store is open from 9 a.m. to 5 p.m.',
    '**between ... and**: trong khoảng giữa: I go to the gym between 6 and 7 p.m.',
    '**before** (trước) / **after** (sau) một giờ hoặc một việc: before dinner, after work.',
    '**until**: cho đến khi: The store is open until 9 p.m.',
    '**during**: trong suốt (một sự việc): I read a book during my lunch break.',
    '**on time**: đúng giờ (như đã hẹn). **in time**: kịp lúc (không bị muộn).',
    '**by**: chậm nhất là, không muộn hơn: Please send it by Friday.',
    'for và since (dùng với thì hiện tại hoàn thành) sẽ học kỹ ở giai đoạn 3 và 4.',
  ], [V('The bus is always on time.', 'Xe buýt luôn đến đúng giờ.'),
      V('I do my homework after dinner.', 'Tôi làm bài tập sau bữa tối.')]),
  muc('Số thứ tự và cách đọc ngày tháng', [
    'Số thứ tự: first (1st), second (2nd), third (3rd), fourth (4th), fifth (5th), sixth, seventh, eighth, ninth, tenth, eleventh, **twelfth**, thirteenth ... twentieth, twenty-first, twenty-second, twenty-third, thirtieth.',
    'Chú ý chính tả: five → **fifth**, nine → **ninth**, twelve → **twelfth**, twenty → **twentieth**.',
    'Ngày tháng đọc bằng **số thứ tự**. Ngày 23/9: kiểu Anh viết 23 September, đọc **the twenty-third of September**; kiểu Mỹ viết September 23, đọc **September twenty-third**.',
    'Sinh nhật, ngày kỷ niệm: My birthday is on the twenty-third of April. Their tenth wedding anniversary.',
    'Thứ hạng, vị trí: Our team finished in **third place**. The library is the **second** building on the left.',
    '**Tầng nhà**: kiểu Anh tầng trệt là ground floor, first floor là tầng ngay trên. Kiểu Mỹ first floor thường chính là tầng trệt.',
    'Trước số thứ tự thường có **the**; nếu đã có my, his, their hoặc \'s thì bỏ the: the first question, my first job. Có a khi nghĩa là "thêm một": a second chance.',
    'Con số đứng **sau** danh từ chỉ là nhãn, đọc bằng số đếm: Chapter 4 = chapter four, Lesson 2 = lesson two (nhưng the fourth chapter, the second lesson).',
  ], [V('She lives on the fourth floor.', 'Cô ấy sống ở tầng bốn.'),
      V('Please answer the fifth question.', 'Hãy trả lời câu hỏi thứ năm.'),
      V('My birthday is on the twenty-third of April.', 'Sinh nhật tôi vào ngày hai mươi ba tháng Tư.')]),
 ],
 (1, 5): [
  muc('Đại từ sở hữu và sở hữu cách nâng cao', [
    'Đại từ sở hữu = tính từ sở hữu + danh từ, đứng **một mình**, không có danh từ theo sau: mine, yours, his, hers, ours, theirs (it không có đại từ sở hữu).',
    'my pen → mine, your book → yours, her house → hers. Dùng để khỏi lặp lại danh từ: Her house is pink. **Mine** is white. (Mine = my house)',
    'Sở hữu **chung** (nhiều người cùng có một thứ): chỉ thêm \'s vào người cuối: Tom and Lan\'s car (một chiếc xe của cả hai).',
    'Sở hữu **riêng** (mỗi người có một thứ): thêm \'s vào từng người: Tom\'s and Lan\'s cars (mỗi người một chiếc).',
    'Tên riêng số ít tận cùng bằng s: thêm \'s hoặc chỉ dấu \': James\'s car hoặc James\' car.',
    'Danh từ số nhiều bất quy tắc (không có s) vẫn thêm \'s: the children\'s toys, the women\'s room.',
  ], [V('This book is mine, not yours.', 'Quyển sách này là của tôi, không phải của bạn.'),
      V('Tom and Lan\'s house is near the park.', 'Nhà của Tom và Lan ở gần công viên.')]),
 ],
 (1, 8): [
  muc('Động từ bất quy tắc hay gặp', [
    'Động từ bất quy tắc không thêm -ed mà có dạng quá khứ riêng, phải học thuộc.',
    'go → went, have → had, do → did, get → got, see → saw, eat → ate, come → came, take → took.',
    'make → made, buy → bought, leave → left, forget → forgot, write → wrote, meet → met.',
    'read → read (viết giống nhưng quá khứ đọc là /red/).',
    'Câu phủ định và câu hỏi vẫn dùng did + nguyên mẫu: I didn\'t go. Did you see it? (không nói didn\'t went).',
  ], [V('I went to school by bus.', 'Tôi đã đi học bằng xe buýt.'),
      V('She left home at seven.', 'Cô ấy đã rời nhà lúc bảy giờ.'),
      V('Did you see my key?', 'Bạn có thấy chìa khoá của tôi không?')]),
 ],
 (2, 9): [
  muc('Phân số, phần trăm, thế kỷ', [
    'Phân số: tử số đọc bằng số đếm, mẫu số đọc bằng **số thứ tự**: 1/5 = one fifth, 1/3 = one third, 7/10 = seven tenths.',
    'Tử số lớn hơn 1 thì mẫu số thêm **-s**: 2/3 = two thirds, 4/5 = four fifths.',
    'Đặc biệt: 1/2 = a half / one half, 1/4 = a quarter / one quarter, 3/4 = three quarters.',
    'Phần trăm dùng **số đếm** + percent: 25% = twenty-five percent (không đọc twenty-fifth percent); 0.5% = zero point five percent.',
    'Thế kỷ dùng số thứ tự: the twentieth century (the 20th century), the twenty-first century.',
    'Đứng trước danh từ thì có gạch nối: a nineteenth-century painting; đứng một mình thì không: It is from the nineteenth century.',
  ], [V('Two thirds of the students are girls.', 'Hai phần ba số học sinh là nữ.'),
      V('Fifty percent of the shirts are on sale.', 'Năm mươi phần trăm số áo đang giảm giá.')]),
 ],
 (3, 3): [
  muc('Lần đầu tiên: for the first time / It is the first time', [
    '**for the first time**: lần đầu tiên làm gì (thường ở cuối câu): I flew abroad for the first time last year.',
    '**It\'s the first time + hiện tại hoàn thành**: đây là lần đầu tiên: It\'s the first time I have visited Da Nang.',
    '**first** đứng trước động từ = lần đầu: I first met her in 2019.',
    'Nói về lần thứ mấy: It\'s the second time she has been here.',
  ], [V('It\'s the first time I have eaten sushi.', 'Đây là lần đầu tiên tôi ăn sushi.'),
      V('I first met my husband at university.', 'Tôi gặp chồng tôi lần đầu ở trường đại học.')]),
 ],
 (4, 6): [
  muc('Kể các bước của một quy trình', [
    'Dùng **First, Second, Next, Then, After that, Finally** để chia các bước cho dễ theo dõi.',
    'Đổi từ nối để không lặp: First ... Then ... Next ... Finally ...',
    'Có thể dùng cụm danh từ: the first step, the second stage, the final stage.',
    'Mô tả quy trình rất hay đi với câu bị động: First, the coffee is put into the filter.',
  ], [V('First, add two spoons of coffee to the filter.', 'Đầu tiên, cho hai thìa cà phê vào phin.'),
      V('Next, pour in a little hot water and wait.', 'Tiếp theo, rót một chút nước nóng vào và đợi.'),
      V('Finally, stir the coffee and add ice.', 'Cuối cùng, khuấy cà phê và thêm đá.')]),
 ],
}

# ---- thêm dòng vào mục đã có (khớp theo tiêu đề) ----
THEM_Y = {
 (1, 4): {
  'Phát âm buổi này': [
    'Số thứ tự kết thúc bằng âm **/θ/** (fourth, fifth, sixth): đặt đầu lưỡi giữa hai răng thổi hơi, đừng bỏ âm cuối kẻo four và fourth nghe giống nhau.',
    'Luyện 3 bước: **từ** (four – fourth, five – fifth) → **cụm** (the fourth floor, the fifth question) → **câu** (She lives on the fourth floor.).',
    'Bấm ⏺ Thu âm, nghe lại và kiểm tra 3 điều: có đọc rõ âm cuối không, nhấn đúng âm không, các từ có nối liền mạch không.',
  ],
 },
 (1, 3): {
  'Cách dùng': [
    'Nói về **lịch trình, thời gian biểu** (tàu xe, giờ học, giờ mở cửa): The train leaves at eight. Her shop opens at 8 a.m.',
    'Giới thiệu bản thân: tên, tuổi, nơi ở, nghề nghiệp, sở thích: I live in Hanoi. I like music.',
  ],
  'Dấu hiệu nhận biết': [
    'Thêm: rarely (hiếm khi), once a week (một lần một tuần), twice a week (hai lần một tuần), three times a month, every month, every year.',
    'Cụm như once a week, every day đứng **cuối câu**: I go swimming twice a week.',
  ],
  'Cách thêm -s / -es': [
    'Tận cùng e chỉ thêm -s: see → sees, like → likes.',
  ],
 },
 (1, 6): {
  'Cách dùng': [
    'Việc **đang diễn ra trong giai đoạn này**, không nhất thiết đúng lúc nói: She is quite busy these days. She is writing her thesis.',
    '**Kế hoạch đã sắp xếp** cho tương lai gần: What are you doing tomorrow? I am meeting my friend.',
    '**Sự thay đổi, xu hướng**: Her English is improving. These days most people are using email instead of letters.',
    'Đi với **always** để **phàn nàn** việc lặp lại gây khó chịu: He is always borrowing my pen and never gives it back.',
    'Việc thường đang làm vào một giờ cố định: At seven p.m. we are usually having dinner.',
  ],
  'Cách thêm -ing': [
    'Tận cùng **ee** giữ nguyên rồi thêm -ing: see → seeing, agree → agreeing.',
    'Tận cùng **ie** → đổi thành y + ing: lie → lying, die → dying, tie → tying.',
    'Tận cùng **c** → thêm k + ing: picnic → picnicking, panic → panicking.',
    'Không gấp đôi khi tận cùng là w: know → knowing, snow → snowing.',
  ],
 },
 (1, 7): {
  'Cách dùng': [
    'Thói quen hoặc việc **lặp lại trong quá khứ**: I walked to school every day when I was a child.',
    'Trạng thái, sự thật **kéo dài trong quá khứ** (nay không còn): My grandfather lived in Hue for ten years.',
    'Kể **chuỗi sự việc** nối tiếp nhau trong câu chuyện: She opened the door, looked out and smiled.',
  ],
  'Cách thêm -ed': [
    'Tận cùng **c** → thêm k + ed: panic → panicked, picnic → picnicked.',
  ],
 },
}
# mục mới riêng cho dấu hiệu + động từ trạng thái (GĐ1 buổi 6) và dấu hiệu quá khứ (buổi 7)
MUC_MOI[(1, 6)] = [
  muc('Dấu hiệu nhận biết đầy đủ', [
    'Trạng từ: now, right now, at the moment, at present, these days, at + giờ + now (It is 8 o\'clock now).',
    'Câu mệnh lệnh gây chú ý đứng trước: Look! (Nhìn kìa!), Listen! (Nghe này!), Keep silent! (Trật tự!), Watch out! / Look out! (Coi chừng!).',
  ], [V('Look! A girl is jumping into the river!', 'Nhìn kìa! Một cô gái đang nhảy xuống sông!'),
      V('Listen! Someone is knocking at the door.', 'Nghe này! Có ai đó đang gõ cửa.'),
      V('Keep silent! The teacher is coming.', 'Trật tự! Cô giáo đang đến.')]),
  muc('Động từ thường KHÔNG chia -ing', [
    'Đây là động từ chỉ **trạng thái**, không phải hành động, nên dù có now vẫn dùng hiện tại đơn.',
    'Giác quan: see, hear, smell, taste (nghĩa là thấy, nghe thấy, có mùi, có vị).',
    'Cảm xúc, mong muốn: like, love, hate, want, need, prefer.',
    'Suy nghĩ: know, understand, believe, remember, think (khi nghĩa là cho rằng).',
    'Sở hữu: have (nghĩa là có), own, belong, contain. Trạng thái khác: seem, mean, sound.',
    'Một số từ có hai nghĩa: I have a car (có, không -ing) nhưng I am having lunch (đang ăn). I think it is good (cho rằng) nhưng I am thinking about it (đang suy nghĩ).',
  ], [V('I want a cup of tea now.', 'Bây giờ tôi muốn một tách trà.'),
      V('This soup smells good.', 'Món súp này có mùi thơm.'),
      V('I know the answer.', 'Tôi biết câu trả lời.')]),
]
MUC_MOI[(1, 7)] = [
  muc('Dấu hiệu nhận biết đầy đủ', [
    'yesterday (hôm qua), last night / last week / last month / last year (... trước).',
    '... ago (cách đây ...): five days ago, two years ago.',
    'in the past (trong quá khứ), the day before (ngày hôm trước), in + năm đã qua: in 2020.',
    'this morning / this afternoon khi buổi đó **đã qua**: I drank coffee this morning (nói lúc buổi chiều).',
  ], [V('We were students five years ago.', 'Năm năm trước chúng tôi là học sinh.'),
      V('Lan didn\'t go to school last week.', 'Tuần trước Lan không đi học.')]),
]

# ---- sửa dòng trong mục đã có (tìm đoạn chữ cũ → thay) ----
SUA = {
 (1, 7): [('Động từ bất quy tắc (go, have, see...) có dạng riêng, sẽ học ở giai đoạn sau.',
           'Động từ bất quy tắc (go → went, have → had, see → saw...) có dạng riêng, phải học thuộc (xem bảng ở buổi 8).')],
 (1, 7, 'Phát âm buổi này'): [('/t/ sau âm vô thanh /p/, /k/, /s/, /ʃ/, /tʃ/, /f/ (cả chữ x như fixed)',
                                '/t/ sau âm vô thanh /p/, /k/, /s/, /ʃ/, /tʃ/, /f/, /θ/ (cả chữ x như fixed)')],
}

THEM_VD = {
 (1, 4, 'Phát âm buổi này'): [V('four, fourth, five, fifth', 'bốn, thứ tư, năm, thứ năm'),
                              V('She lives on the fourth floor.', 'Cô ấy sống ở tầng bốn.')],
}

def chen_truoc_loi(ds, moi):
    tieu_de_moi = {m['tieu_de'] for m in moi}
    ds = [m for m in ds if m['tieu_de'] not in tieu_de_moi]
    vt = next((i for i, m in enumerate(ds) if m['tieu_de'].startswith('Lỗi hay gặp')), len(ds))
    return ds[:vt] + moi + ds[vt:]

dem = {'muc': 0, 'y': 0, 'sua': 0}
for gd in range(1, 6):
    p = os.path.join(ND, f'gd{gd}.json')
    d = json.load(open(p, encoding='utf-8'))
    doi = False
    for b in d['buoi']:
        k = (gd, b['buoi'])
        if k in MUC_MOI:
            b['ly_thuyet'] = chen_truoc_loi(b['ly_thuyet'], MUC_MOI[k]); dem['muc'] += len(MUC_MOI[k]); doi = True
        for td, dong in THEM_Y.get(k, {}).items():
            m = next((m for m in b['ly_thuyet'] if m['tieu_de'] == td), None)
            if m is None: print('KHÔNG THẤY MỤC', k, td); continue
            for y in dong:
                if y not in m['y']: m['y'].append(y); dem['y'] += 1; doi = True
        for kk, ds in THEM_VD.items():
            if kk[:2] != k: continue
            m = next((m for m in b['ly_thuyet'] if m['tieu_de'] == kk[2]), None)
            for vd in ds:
                if m is not None and all(x['en'] != vd['en'] for x in m['vd']): m['vd'].append(vd); doi = True
        for kk, ds in SUA.items():
            if kk[:2] != k: continue
            for cu, moi in ds:
                for m in b['ly_thuyet']:
                    if len(kk) == 3 and m['tieu_de'] != kk[2]: continue
                    for i, y in enumerate(m['y']):
                        if cu in y: m['y'][i] = y.replace(cu, moi); dem['sua'] += 1; doi = True
    if doi:
        json.dump(d, open(p, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('Mục mới:', dem['muc'], '| dòng thêm:', dem['y'], '| dòng sửa:', dem['sua'])
