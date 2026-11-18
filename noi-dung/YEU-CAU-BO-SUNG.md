# Brief: extend one stage file (lý thuyết + 30 exercises per session)

Context: English-learning web app for Vietnamese adults who started from zero ("mất gốc": forget fast, know bits unsystematically). Each stage file `noi-dung/gdN.json` already has, per session: `ten`, `tu` (10 words), `luyen_am` (5), `cau` (6), `bai` (10 exercises: 4 chon, 3 dien, 3 sapxep). The roadmap for every session is in `noi-dung/lo-trinh.json` (fields ngu_phap, tu_vung, phat_am, bai_tap, nghe_doc, viet, bo_sung). The teacher said: too few exercises, and learners have no theory to look back at.

Your job: for EVERY session of your stage, KEEP all existing fields and items unchanged, and:

## 1. Add `ly_thuyet` (theory to review), written in Vietnamese for a beginner

```json
"ly_thuyet": [
  {"tieu_de": "Cách dùng", "y": ["Dùng thì hiện tại đơn để nói về thói quen, việc lặp lại hằng ngày.", "..."], "vd": [{"en": "I get up at six every day.", "vi": "Tôi dậy lúc sáu giờ mỗi ngày."}]},
  {"tieu_de": "Công thức", "y": ["(+) I / You / We / They + V: I work.", "(+) He / She / It + V-s/es: She works.", "(-) S + do not / does not + V", "(?) Do / Does + S + V?"], "vd": [...]},
  {"tieu_de": "Dấu hiệu nhận biết", "y": ["always, usually, often, sometimes, never", "every day, every week, on Mondays"], "vd": []},
  {"tieu_de": "Lỗi hay gặp", "y": ["Sai: She go to work. → Đúng: She goes to work. (He/She/It phải thêm -s/-es)", "..."], "vd": []},
  {"tieu_de": "Phát âm buổi này", "y": ["Đuôi -s/-es có 3 cách đọc: /s/ sau âm vô thanh p, t, k, f; /ɪz/ sau s, x, sh, ch; /z/ các trường hợp còn lại."], "vd": [{"en": "She watches TV.", "vi": "Cô ấy xem TV."}]}
]
```
- 4 to 6 sections. Always cover: how/when to use, the form (công thức) for every sentence type taught in that session, signal words / tips (if relevant), "Lỗi hay gặp" with 2–4 typical Vietnamese-learner mistakes written as "Sai: ... → Đúng: ... (why)", and a short "Phát âm buổi này" section explaining the session's pronunciation focus in plain Vietnamese (how to place mouth/tongue, what to listen for).
- Cover EVERY grammar point listed in the session's `ngu_phap` and its `bo_sung` note (the existing exercises already follow these; theory must match what exercises test). Also add a section "Từ vựng chủ đề" only if useful (e.g. collocations, word families) — optional.
- Each `y` item: one short line. Use `**bold**` sparingly for the key word. Formulas use S (chủ ngữ), V (động từ nguyên mẫu), V-ing, V2/V-ed, V3. Plain ASCII apostrophes, no em dashes (use → or :), no "…".
- 2–4 examples per section where examples help (`vd`), English + Vietnamese. Examples use only grammar learned so far.
- Review sessions (tổng ôn): short recap of each structure in the stage, one section per structure group.

## 2. Extend `bai` from 10 to exactly 30 items

Final mix per session: 10 "chon", 8 "dien", 6 "sapxep", 6 "tim_loi" (new type). Keep the existing 10 and add 20 new ones, all different from the existing items (different sentences, not near-copies). Same JSON shapes as the existing items:
- "chon": `{"dang":"chon","hoi":"... ___ ...","dap_an":"...","sai":["...","..."],"giai_thich":"..."}` — 2 or 3 plausible wrong options, exactly one correct answer.
- "dien": `{"dang":"dien","hoi":"... ___ (hint) ...","dap_an":"...","chap_nhan":["..."],"giai_thich":"..."}` — one blank; `chap_nhan` lowercase, lists EVERY acceptable answer incl. contractions and the full form.
- "sapxep": `{"dang":"sapxep","dap_an":"Correct sentence.","vi":"Nghĩa tiếng Việt","giai_thich":"..."}` — 4–12 words, only ONE valid word order (no movable time phrases / if-clauses / adverbs that can go in two places).
- NEW "tim_loi": `{"dang":"tim_loi","hoi":"She go to school every day.","tu_sai":"go","sua":"goes","giai_thich":"Chủ ngữ she dùng động từ thêm -es."}` — a sentence with EXACTLY ONE wrong word. `tu_sai` must appear exactly once in `hoi` as a whole word (spelled exactly as in hoi, without punctuation). `sua` is the correct replacement (may be 1–3 words, or "" if the right fix is to delete the word — avoid that case mostly). The rest of the sentence must be fully correct. Errors must be typical Vietnamese-learner mistakes on THIS session's grammar.
- Questions must test THIS session's grammar/vocabulary (review sessions: the whole stage). Only grammar learned so far. Sentence lengths appropriate for the stage. Plain ASCII apostrophes, no curly quotes, no em dashes, no "…". giai_thich: one short Vietnamese sentence explaining WHY.
- For reading/listening-skill sessions (stage 5), "chon" items may contain a short text then "Question: ...", answerable from the text alone.

## How to edit (file is large — do it session by session)

Write each session's additions with a small Python script that loads the JSON, updates ONE session (`ly_thuyet` + appended `bai` items), and saves with `ensure_ascii=False, indent=1`. Run `python -I` for scripts. Repeat for all sessions. Do not touch other stage files.

## Validate at the end

```
python -I -c "import json,re,collections;d=json.load(open(r'PATH',encoding='utf-8'));
for b in d['buoi']:
  c=collections.Counter(x['dang'] for x in b['bai']); bad=[x['hoi'] for x in b['bai'] if x['dang']=='tim_loi' and len(re.findall(r'(?<![A-Za-z\'])'+re.escape(x['tu_sai'])+r'(?![A-Za-z\'])',x['hoi']))!=1]
  print(b['buoi'],len(b['ly_thuyet']),len(b['bai']),dict(c),'tim_loi loi:',bad)"
```
Every session must show 30 items = chon 10, dien 8, sapxep 6, tim_loi 6, 4–6 theory sections, and no tim_loi problems. Then re-read your new items once for correctness (one answer only, English correct). Report back only: counts and anything you could not follow.
