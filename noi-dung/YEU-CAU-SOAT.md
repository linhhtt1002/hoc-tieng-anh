# Brief: 30 words per session + accuracy audit (one stage)

Context: English-learning web app for Vietnamese adults who started from zero ("mất gốc"). The stage file `noi-dung/gdN.json` has per session: `ten`, `ly_thuyet` (theory sections: tieu_de, y[], vd[{en,vi}]), `tu` (10 words: en, ipa, vi, vd, vd_vi), `luyen_am` (5: en, ipa, ghi_chu), `cau` (6: en, vi), `bai` (30 exercises: chon / dien / sapxep / tim_loi). Roadmap per session: `noi-dung/lo-trinh.json`. The teacher asked for (1) 30 vocabulary words per session and (2) every piece of knowledge to be correct. Learners will memorise what they see, so a wrong IPA, a wrong meaning or an exercise with two correct answers is a real harm.

## Task 1 — extend `tu` from 10 to exactly 30 words per session

- Keep the existing 10 (fix them if wrong, see Task 2) and add 20 new ones, same shape: `{"en","ipa","vi","vd","vd_vi"}`.
- On the session's vocabulary topic (`tu_vung` in the roadmap), useful, frequent, at the stage's level. Collocations/short phrases are fine (e.g. "take a shower"). Mix word classes (nouns, verbs, adjectives) where the topic allows.
- No duplicates inside the session, and avoid repeating a word already used in `tu` of an earlier session of the same stage (review sessions may reuse a few; prefer new ones).
- `vi`: the meaning used in this topic; give 1–2 common meanings, short. `ipa`: British, in slashes, with stress marks for 2+ syllables, matching Cambridge/Oxford dictionaries. `vd`: one short natural example sentence using only grammar learned up to this session; `vd_vi`: natural Vietnamese translation.
- Plain ASCII apostrophes, no curly quotes, no em dashes, no "…".

## Task 2 — audit EVERY existing item of the stage and fix errors in place

Check, item by item:
- **ly_thuyet**: rules and formulas correct and complete for what the exercises test; no over-generalised rule stated as absolute when it has common exceptions (mention the exception briefly); "Sai → Đúng" examples really wrong/right; Vietnamese clear and natural.
- **tu / luyen_am**: IPA correct (British dictionary transcription, stress), meaning correct, `ghi_chu` sound description correct (e.g. the sound named really is in the word), example correct English.
- **cau**: correct, natural English; Vietnamese translation accurate.
- **chon**: exactly one correct option; every wrong option definitely wrong in that context; answer key right; giai_thich correct.
- **dien**: `chap_nhan` contains every acceptable answer (incl. contractions/full forms, and alternatives a teacher would accept), all lowercase; hint matches; no other correct answer missing.
- **sapxep**: only one natural word order; Vietnamese hint matches.
- **tim_loi**: exactly one error; `tu_sai` appears once as a whole word; `sua` produces a fully correct sentence; nothing else in the sentence is wrong or debatable.
- Level: no grammar used in exercises before it is taught (stage order in the roadmap).

Fix by editing the item (rewrite the question or options rather than deleting; keep counts: bai stays 30 with the same type mix). Keep a log of every change.

## How to work

The file is large: work session by session with small Python scripts (`python -I -X utf8`) that load the JSON, change one session, save with `ensure_ascii=False, indent=1`. Do not touch other stage files.

## Validate and report

Run:
```
python -I -X utf8 -c "import json,collections;d=json.load(open(r'PATH',encoding='utf-8'));[print(b['buoi'],len(b['tu']),len(set(t['en'].lower() for t in b['tu'])),len(b['bai']),dict(collections.Counter(x['dang'] for x in b['bai']))) for b in d['buoi']]"
```
Every session: 30 words, 30 unique, 30 exercises with the same mix as before.

Also write your change log to `noi-dung/soat-gdN.md` (N = stage number), in Vietnamese, as a short list: session → what was wrong → what it is now. Report back: counts, number of fixes by type, and the most important fixes (max 10 lines).
