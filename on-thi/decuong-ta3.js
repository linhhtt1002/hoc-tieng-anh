// Ôn theo đề cương "Tiếng Anh 3" (LinhT gửi 20/11): bám dạng đề + điểm ngữ pháp hay ra; câu bài tập tự soạn, không chép đề/đáp án gốc.
window.DECUONG3 = {
dang: [
 '<b>Bài thi viết gồm 3 phần</b> (theo bộ đề mẫu):<br><b>I. Listening</b> — 10 câu: câu 1–5 chọn A/B/C, câu 6–10 nghe và điền (tên, số, giờ, giá tiền, địa điểm).<br><b>II. Reading</b> — 10 câu: câu 1–5 chọn A/B/C, câu 6–10 nối (A–H).<br><b>III. Writing</b> — Phần 1: viết lại 5 câu giữ nguyên nghĩa. Phần 2: viết bài luận ít nhất 120 từ, đồng ý hoặc phản đối một ý kiến.',
 '<b>Bài thi nói gồm 3 phần:</b> Part 1 — trả lời 3 câu hỏi ngắn · Part 2 — nói 1–2 phút về một chủ đề · Part 3 — thảo luận 3 câu hỏi mở rộng.',
 '<b>Mẹo nghe phần điền:</b> chú ý đánh vần tên (S-H-I-R-L-E-Y), số điện thoại đọc từng số, giá tiền (£5.99), ngày tháng (21st May), giờ (8.30 p.m.). Viết đúng chính tả là được điểm.'
],
vietlai: [
 { ten:'Câu bị động', kt:'Đổi tân ngữ lên làm chủ ngữ, động từ thành <b>be + V3</b>, giữ nguyên thì:<br>hiện tại đơn → am/is/are + V3 · quá khứ đơn → was/were + V3 · quá khứ tiếp diễn → was/were <b>being</b> + V3 · should/can/must → should <b>be</b> + V3 · be going to → be going to <b>be</b> + V3',
   bt:[
    {q:'They clean this room every day.<br>→ This room ___ every day.',d:['is cleaned'],g:'Hiện tại đơn → is + V3.'},
    {q:'Someone stole my bike last night.<br>→ My bike ___ last night.',d:['was stolen'],g:'Quá khứ đơn → was + V3.'},
    {q:'My mum was making a cake when I came home.<br>→ A cake ___ by my mum when I came home.',d:['was being made'],g:'Quá khứ tiếp diễn → was being + V3.'},
    {q:'You should water these plants every day.<br>→ These plants ___ every day.',d:['should be watered'],g:'should + be + V3.'},
    {q:'They are going to build a new school here.<br>→ A new school ___ here.',d:['is going to be built'],g:'be going to + be + V3.'},
    {q:'They don\'t allow smoking in the cinema.<br>→ Smoking ___ in the cinema.',d:["isn't allowed",'is not allowed'],g:'Phủ định hiện tại đơn → isn\'t + V3.'}
   ]},
 { ten:'Câu tường thuật', kt:'Lùi thì (am/is → was, will → would, hiện tại đơn → quá khứ đơn), đổi đại từ và từ chỉ thời gian: tomorrow → <b>the next day / the following day</b>, today → <b>that day</b>, yesterday → <b>the day before</b>.<br>Câu hỏi: asked + (who/where…) + S + V (không đảo ngữ). Câu lệnh: told sb (not) <b>to</b> + V. Nhờ: asked sb <b>to</b> + V. Rủ: suggested + <b>V-ing</b>.',
   bt:[
    {q:'"I am tired," Lan said.<br>→ Lan said that she ___ tired.',d:['was'],g:'am → was.'},
    {q:'"I will call you tomorrow," he said to me.<br>→ He told me that he would call me ___.',d:['the next day','the following day'],g:'tomorrow → the next day.'},
    {q:'"Where do you live?" she asked me.<br>→ She asked me where I ___.',d:['lived'],g:'Câu hỏi tường thuật: không đảo ngữ, lùi thì.'},
    {q:'"Don\'t be late," the teacher said to us.<br>→ The teacher told us ___ late.',d:['not to be'],g:'Lệnh phủ định → told sb not to + V.'},
    {q:'"Please open the window," he said to me.<br>→ He asked me ___ the window.',d:['to open'],g:'Nhờ → asked sb to + V.'},
    {q:'"Let\'s go to the beach," Nam said.<br>→ Nam suggested ___ to the beach.',d:['going'],g:'suggest + V-ing.'}
   ]},
 { ten:'Câu điều kiện & Unless', kt:'<b>Unless = If … not</b> (trừ khi). Loại 1: If + hiện tại đơn, will + V. Loại 2: If + quá khứ đơn, would/could + V (trái với hiện tại). Điều kiện trộn: If + had + V3 (quá khứ), would + V (kết quả bây giờ).',
   bt:[
    {q:'If you don\'t hurry, you will miss the bus.<br>→ Unless you ___, you will miss the bus.',d:['hurry'],g:'Unless = If not → bỏ don\'t.'},
    {q:'Unless it rains, we\'ll go out.<br>→ If it ___ rain, we\'ll go out.',d:["doesn't",'does not'],g:'Unless → If … not.'},
    {q:'I don\'t have a car, so I can\'t drive to work.<br>→ If I ___ a car, I could drive to work.',d:['had'],g:'Trái với hiện tại → loại 2, quá khứ đơn.'},
    {q:'She is not tall, so she can\'t be a model.<br>→ If she ___ taller, she could be a model.',d:['were','was'],g:'Loại 2: If she were…'},
    {q:'I didn\'t sleep well last night, so I\'m tired now.<br>→ If I had slept well last night, I ___ tired now.',d:["wouldn't be",'would not be'],g:'Kết quả ở hiện tại → would (not) + V.'}
   ]},
 { ten:'Mệnh đề quan hệ', kt:'<b>who</b> (người, làm chủ ngữ) · <b>whom</b> (người, làm tân ngữ) · <b>which</b> (vật) · <b>that</b> (người/vật) · <b>whose</b> + danh từ (của người/vật đó) · <b>where</b> (nơi chốn).',
   bt:[
    {q:'I met a man. His son is a famous singer.<br>→ I met a man ___ son is a famous singer.',d:['whose'],g:'His son → whose son.'},
    {q:'This is the book. I bought it yesterday.<br>→ This is the book ___ I bought yesterday.',d:['which','that'],g:'Vật → which/that.'},
    {q:'The girl is my cousin. She is wearing a red dress.<br>→ The girl ___ is wearing a red dress is my cousin.',d:['who','that'],g:'Người làm chủ ngữ → who.'},
    {q:'That\'s the café. We first met there.<br>→ That\'s the café ___ we first met.',d:['where'],g:'Nơi chốn → where.'},
    {q:'The teacher is very kind. I talked to her yesterday.<br>→ The teacher ___ I talked to yesterday is very kind.',d:['whom','who','that'],g:'Người làm tân ngữ → whom (who/that cũng được).'}
   ]},
 { ten:'used to', kt:'<b>used to + V</b>: thói quen trong quá khứ, nay không còn. Phủ định: <b>didn\'t use to</b> + V.',
   bt:[
    {q:'My father often smoked, but he doesn\'t now.<br>→ My father ___ smoke.',d:['used to'],g:'Thói quen cũ → used to.'},
    {q:'I didn\'t like vegetables as a child, but now I do.<br>→ I ___ like vegetables as a child.',d:["didn't use to",'did not use to'],g:'Phủ định → didn\'t use to.'}
   ]},
 { ten:'so … that / such … that / too … to / enough', kt:'<b>so + tính từ + that</b>: <i>so boring that…</i> · <b>such (a/an) + tính từ + danh từ + that</b>: <i>such a hot day that…</i><br><b>too + tính từ + to V</b> (quá… không thể) · <b>(not) + tính từ + enough + to V</b> · <b>(not) enough + danh từ + to V</b>',
   bt:[
    {q:'The film was very boring. We left early.<br>→ The film was ___ boring that we left early.',d:['so'],g:'so + tính từ + that.'},
    {q:'It was a very hot day. We stayed at home.<br>→ It was ___ a hot day that we stayed at home.',d:['such'],g:'such + a + tính từ + danh từ.'},
    {q:'He is very young. He can\'t drive.<br>→ He is too young ___ drive.',d:['to'],g:'too + adj + to V.'},
    {q:'The coffee is too hot to drink.<br>→ The coffee isn\'t cool ___ to drink.',d:['enough'],g:'not + adj + enough.'},
    {q:'I don\'t have enough money to buy this car.<br>→ This car is ___ expensive for me to buy.',d:['too'],g:'too + adj + (for sb) + to V.'}
   ]},
 { ten:'Hiện tại hoàn thành (never / first time / for / since)', kt:'<i>I have never … before</i> = <i>This is the first time I have …</i><br><i>The last time I … was 2 years ago</i> = <i>I haven\'t … for 2 years</i><br><i>I started … 3 years ago</i> = <i>I have … for 3 years</i><br>for + khoảng thời gian · since + mốc thời gian',
   bt:[
    {q:'I have never eaten sushi before.<br>→ This is the first time I ___ sushi.',d:['have eaten',"'ve eaten"],g:'the first time + HTHT.'},
    {q:'The last time I saw her was two years ago.<br>→ I haven\'t seen her ___ two years.',d:['for'],g:'Khoảng thời gian → for.'},
    {q:'We started learning English three years ago.<br>→ We have learnt English ___ three years.',d:['for'],g:'for three years.'},
    {q:'I last went to Da Lat in 2020.<br>→ I haven\'t been to Da Lat ___ 2020.',d:['since'],g:'Mốc năm → since.'}
   ]},
 { ten:'because / because of', kt:'<b>because + mệnh đề (S + V)</b> · <b>because of + danh từ / cụm danh từ</b>',
   bt:[
    {q:'We stayed at home because of the rain.<br>→ We stayed at home because it ___ raining.',d:['was'],g:'because + S + V.'},
    {q:'He was late because the traffic was heavy.<br>→ He was late because of the ___ traffic.',d:['heavy'],g:'because of + cụm danh từ.'}
   ]}
],
tracnghiem: [
 {q:'When I arrived at the cinema, the film ___ already started.',o:['had','has','was','have'],g:'Việc xảy ra trước một việc khác trong quá khứ → quá khứ hoàn thành.'},
 {q:'I ___ TV when the phone rang.',o:['was watching','watched','am watching','have watched'],g:'Đang làm thì việc khác xen vào → quá khứ tiếp diễn + when + quá khứ đơn.'},
 {q:'If you heat ice, it ___.',o:['melts','will melted','melted','would melt'],g:'Sự thật luôn đúng → điều kiện loại 0: If + hiện tại đơn, hiện tại đơn.'},
 {q:'Since we moved to this city, we ___ very busy.',o:['have been','are','were','had been'],g:'since + HTHT.'},
 {q:'She ___ in three films already.',o:['has appeared','appeared','appears','is appearing'],g:'already + HTHT.'},
 {q:'I was ___ in the film, but my friend found it ___.',o:['interested / boring','interesting / bored','interested / bored','interesting / boring'],g:'-ed: cảm xúc của người; -ing: tính chất của vật.'},
 {q:'___ English every day is a good habit.',o:['Practising','Practise','To practising','Practised'],g:'V-ing làm chủ ngữ.'},
 {q:'___ it was raining, we went for a walk.',o:['Although','Because','So','But'],g:'Although = mặc dù.'},
 {q:'Always brush your teeth before ___ to bed.',o:['going','go','to go','went'],g:'Sau giới từ before → V-ing.'},
 {q:'Students ___ use their phones during the exam.',o:["aren't allowed to","don't allow","aren't allow","not allowed"],g:'be (not) allowed to + V.'},
 {q:'My alarm clock didn\'t go ___ this morning, so I was late.',o:['off','on','out','away'],g:'go off = (chuông) reo.'},
 {q:'I feel ___ going out for a walk.',o:['like','as','for','to'],g:'feel like + V-ing = muốn.'},
 {q:'She looks ___ her mother.',o:['like','as','after','for'],g:'look like = trông giống.'},
 {q:'I don\'t agree ___ you.',o:['with','to','on','at'],g:'agree with sb.'},
 {q:'Why ___ you laughing?',o:['are','do','is','does'],g:'Đang cười → hiện tại tiếp diễn.'},
 {q:'This exercise is ___ than the last one.',o:['more difficult','difficulter','most difficult','the more difficult'],g:'Tính từ dài → more + adj + than.'},
 {q:'Which word has a different sound for "ch"?',o:['school','chair','much','teacher'],g:'school đọc /k/, các từ khác /tʃ/.'},
 {q:'Which word has a silent "h"?',o:['hour','happy','house','hat'],g:'hour đọc /aʊə/, chữ h câm.'},
 {q:'Which "-ed" is pronounced differently?',o:['played','worked','watched','stopped'],g:'played /d/; các từ khác /t/.'},
 {q:'Which "-ed" is pronounced differently?',o:['lived','wanted','needed','decided'],g:'lived /d/; các từ khác /ɪd/.'},
 {q:'Which "ea" is pronounced differently?',o:['bean','bread','head','weather'],g:'bean /iː/; các từ khác /e/.'},
 {q:'Which "th" is pronounced differently?',o:['this','think','three','thank'],g:'this /ð/; các từ khác /θ/.'},
 {q:'Which one is NOT a person?',o:['cooker','doctor','driver','worker'],g:'cooker = cái bếp (đồ vật); người nấu ăn là cook.'}
],
luan: {
 khung: [
  '<b>Mở bài (2 câu):</b> nhắc lại đề bằng lời của mình + nêu rõ đồng ý hay không. <i>Some people think that… In my opinion, I agree / disagree with this idea.</i>',
  '<b>Thân bài 1:</b> <i>Firstly, …</i> + giải thích + ví dụ (<i>For example, …</i>)',
  '<b>Thân bài 2:</b> <i>Secondly / In addition, …</i> + giải thích + ví dụ',
  '<b>Kết bài:</b> <i>In conclusion, I believe that…</i> nhắc lại ý kiến.',
  '<b>Lưu ý:</b> ít nhất 120 từ · chỉ chọn MỘT phía · mỗi ý có ví dụ · dùng từ nối · kiểm tra lại thì động từ và số ít/số nhiều.'
 ],
 de: [
  {t:'Children should save some of their pocket money every week.',dong:['learn to manage money early','have money for things they really want'],phan:['children need to enjoy their childhood','parents should handle money for young children']},
  {t:'Sports should be taught at school.',dong:['students become healthier','learn teamwork'],phan:['takes time from main subjects','students can do sports outside school']},
  {t:'Online dating has become the trend amongst adults.',dong:['busy people can meet others easily','more choices'],phan:['people may lie online','not safe to meet strangers']},
  {t:'Students should have a part-time job.',dong:['earn their own money','gain real work experience'],phan:['less time to study','feel tired and stressed']},
  {t:'School holidays are too long.',dong:['students forget what they learnt','parents have to work and can\'t look after children'],phan:['students need rest','time for family, travel and hobbies']},
  {t:'Children should have lessons about spending and saving money at school.',dong:['important life skill','not all parents teach it'],phan:['parents should teach this at home','school timetable is already full']},
  {t:'Higher education should be free for everyone.',dong:['poor students get a chance','country gets more skilled workers'],phan:['very expensive for the government','students may not study seriously']},
  {t:'Everyone should have a credit card.',dong:['convenient for shopping online','safer than carrying cash'],phan:['easy to spend too much','some people get into debt']},
  {t:'Teenagers should fall in love during high school years.',dong:['learn about feelings and relationships','feel happier and more confident'],phan:['less time for studying','too young to make serious decisions']},
  {t:'Big shopping centres are better than street shops.',dong:['everything in one place','air-conditioned and comfortable'],phan:['street shops are cheaper','street shops help small local businesses']}
 ]
},
noi: [
 {t:'Your shopping habits',y:['Where and how often you go shopping','What you usually buy','Do you prefer shopping online or in shops? Why?'],lk:'10B, 10D'},
 {t:'Your favourite brand name',y:['What the brand is and what it sells','How long you have used it','Why you like it'],lk:'10A (bị động: It is made in…)'},
 {t:'Things you used to do when you were ten',y:['Games and hobbies','Things you used to do at school','Which of them you still do now'],lk:'10B (used to)'},
 {t:'A website you have bought something from',y:['What the website is','What you bought and how much it cost','Were you happy with it?'],lk:'10D, 11A'},
 {t:'Changes in shopping trends in Vietnam',y:['How people used to shop','How people shop now','Which way you prefer'],lk:'10B (used to)'},
 {t:'An accident you saw',y:['When and where it happened','What happened','How people helped'],lk:'11A, 12C (từ nối kể chuyện)'},
 {t:'A newspaper you read',y:['Which newspaper / website','What kind of news it has','A piece of news you remember'],lk:'11C'},
 {t:'A crime story you heard about',y:['What happened','Who the victim and the criminal were','What happened in the end'],lk:'11B (từ vựng tội phạm, who/which/where)'},
 {t:'Your future goal',y:['What your goal is','What you are doing to achieve it','How much money / time you need'],lk:'12A (từ vựng tiền), 12B'},
 {t:'A magician or a magic show',y:['Who the magician is','What tricks he/she does','What you think about magic'],lk:'12C'}
]
};
