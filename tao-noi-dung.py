# Gộp lộ trình + nội dung từng giai đoạn thành:
#   noi-dung.js   (trang học dùng khi chưa nối Google Sheet)
#   noi-dung.json (Apps Script đọc để nạp vào tab Noi_dung)
#   noi-dung.csv  (mở bằng Excel/Sheet để xem)
import json, csv, os, sys
sys.stdout.reconfigure(encoding='utf-8')

GOC = os.path.dirname(os.path.abspath(__file__))
ND = os.path.join(GOC, 'noi-dung')

lo_trinh = json.load(open(os.path.join(ND, 'lo-trinh.json'), encoding='utf-8'))
chi_tiet = {}
for gd in range(1, 6):
    p = os.path.join(ND, f'gd{gd}.json')
    if not os.path.exists(p):
        print('Chưa có', p); continue
    d = json.load(open(p, encoding='utf-8'))
    for b in d['buoi']:
        chi_tiet[(gd, b['buoi'])] = b

buoi = []
for r in lo_trinh:
    c = chi_tiet.get((r['gd'], r['buoi']), {})
    buoi.append({
        'gd': r['gd'], 'buoi': r['buoi'],
        'ten': c.get('ten') or r['ngu_phap'],
        'ngu_phap': r['ngu_phap'] or '', 'chu_de': r['tu_vung'] or '', 'phat_am': r['phat_am'] or '',
        'ly_thuyet': c.get('ly_thuyet', []),
        'tu': c.get('tu', []), 'luyen_am': c.get('luyen_am', []), 'cau': c.get('cau', []), 'bai': c.get('bai', []),
    })

# Bảng phẳng cho Google Sheet
COT = ['Giai đoạn', 'Buổi', 'Loại', 'Tiếng Anh / Câu hỏi', 'Phiên âm', 'Nghĩa tiếng Việt',
       'Đáp án (nhiều đáp án cách nhau |)', 'Phương án sai (cách nhau |)', 'Giải thích / Ghi chú', 'Câu ví dụ', 'Nghĩa câu ví dụ']
dong = []
for b in buoi:
    g, n = b['gd'], b['buoi']
    dong.append([g, n, 'Tên buổi', b['ten'], '', '', '', '', '', '', ''])
    for t in b['ly_thuyet']:
        vd = t.get('vd', [])
        dong.append([g, n, 'Lý thuyết', t['tieu_de'], '', '', '', '', ' | '.join(t.get('y', [])),
                     ' | '.join(x['en'] for x in vd), ' | '.join(x.get('vi', '') for x in vd)])
    for t in b['tu']:
        dong.append([g, n, 'Từ vựng', t['en'], t.get('ipa', ''), t.get('vi', ''), '', '', '', t.get('vd', ''), t.get('vd_vi', '')])
    for t in b['luyen_am']:
        dong.append([g, n, 'Luyện âm', t['en'], t.get('ipa', ''), '', '', '', t.get('ghi_chu', ''), '', ''])
    for t in b['cau']:
        dong.append([g, n, 'Câu nói', t['en'], '', t.get('vi', ''), '', '', '', '', ''])
    for t in b['bai']:
        if t['dang'] == 'chon':
            dong.append([g, n, 'Trắc nghiệm', t['hoi'], '', '', t['dap_an'], ' | '.join(t.get('sai', [])), t.get('giai_thich', ''), '', ''])
        elif t['dang'] == 'dien':
            ds = [t['dap_an']] + [x for x in t.get('chap_nhan', []) if x.lower() != t['dap_an'].lower()]
            dong.append([g, n, 'Điền từ', t['hoi'], '', '', ' | '.join(ds), '', t.get('giai_thich', ''), '', ''])
        elif t['dang'] == 'sapxep':
            dong.append([g, n, 'Sắp xếp câu', t['dap_an'], '', t.get('vi', ''), '', '', t.get('giai_thich', ''), '', ''])
        elif t['dang'] == 'tim_loi':
            dong.append([g, n, 'Tìm lỗi sai', t['hoi'], '', '', t['tu_sai'] + ' | ' + t.get('sua', ''), '', t.get('giai_thich', ''), '', ''])

ipa_p = os.path.join(ND, 'ipa.json')
ipa = json.load(open(ipa_p, encoding='utf-8')) if os.path.exists(ipa_p) else {'nhom': [], 'am': []}
with open(os.path.join(GOC, 'ipa.js'), 'w', encoding='utf-8') as f:
    f.write('window.IPA = ' + json.dumps(ipa, ensure_ascii=False) + ';\n')

with open(os.path.join(GOC, 'noi-dung.js'), 'w', encoding='utf-8') as f:
    f.write('window.NOI_DUNG = ' + json.dumps(buoi, ensure_ascii=False) + ';\n')
with open(os.path.join(GOC, 'noi-dung.json'), 'w', encoding='utf-8') as f:
    json.dump({'cot': COT, 'dong': dong}, f, ensure_ascii=False)
with open(os.path.join(GOC, 'noi-dung.csv'), 'w', encoding='utf-8-sig', newline='') as f:
    w = csv.writer(f); w.writerow(COT); w.writerows(dong)

print('Số buổi:', len(buoi), '| có nội dung:', sum(1 for b in buoi if b['tu']), '| số dòng bảng:', len(dong))
