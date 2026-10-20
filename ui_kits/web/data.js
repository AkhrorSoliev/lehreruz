// lehrer.uz UI kit — sample data (German-language course catalogue)
window.LZ_DATA = (() => {
  const instructors = {
    dilnoza: { id: 'dilnoza', name: 'Dilnoza Karimova', role: 'Nemis tili o‘qituvchisi, Goethe-Institut sertifikati', students: 28400, courses: 4, rating: 4.8, bio: '9 yildan beri Toshkent va Berlinda nemis tilini o‘qitadi. Grammatikani o‘zbekcha misollar bilan oddiy tushuntiradi.' },
    anna: { id: 'anna', name: 'Anna Weber', role: 'Muttersprachlerin · DaF-o‘qituvchi, Leipzig', students: 9700, courses: 3, rating: 4.9, bio: 'Leipziglik ona tili sohibi. Imtihon formatlari va jonli gapirish bo‘yicha mutaxassis.' },
    bekzod: { id: 'bekzod', name: 'Bekzod Rahimov', role: 'Germaniyada 6 yil · Ausbildung bitiruvchisi', students: 15200, courses: 2, rating: 4.7, bio: 'Germaniyada o‘qish va ishlash tajribasini kurslarga olib kirgan. Hujjatlar, intervyu va ish tili.' },
    madina: { id: 'madina', name: 'Madina Yusupova', role: 'Filolog, B2–C1 tayyorlov markazi asoschisi', students: 11300, courses: 2, rating: 4.8, bio: 'Lug‘at va talaffuz bo‘yicha qisqa, kundalik mashqlar muallifi.' },
  };
  const courses = [
    { id: 'a1', title: 'Nemis tili A1: noldan boshlab', subtitle: 'Alifbodan birinchi suhbatgacha — 8 haftada A1 darajasi va sertifikat.', instructor: 'dilnoza', level: 'A1', cover: { tone: 'gold', word: 'Hallo!' }, rating: 4.8, reviews: 2418, students: 12840, price: 349000, oldPrice: 590000, lessons: 42, hours: 9.5, badge: 'Bestseller', topic: 'Umumiy', updated: '2026-yil sentabr' },
    { id: 'a2', title: 'A2: kundalik muloqot', subtitle: 'Do‘konda, shifokorda, ishda — real vaziyatlar uchun tayyor iboralar.', instructor: 'dilnoza', level: 'A2', cover: { tone: 'paper', word: 'Wie geht’s?' }, rating: 4.7, reviews: 1106, students: 6210, price: 399000, oldPrice: 650000, lessons: 48, hours: 11, topic: 'Umumiy', updated: '2026-yil avgust' },
    { id: 'b1', title: 'Goethe-Zertifikat B1: imtihonga tayyorlov', subtitle: 'Lesen, Hören, Schreiben, Sprechen — 4 modul, 6 ta to‘liq sinov imtihoni.', instructor: 'anna', level: 'B1', cover: { tone: 'ink', word: 'Prüfung? Kein Problem.' }, rating: 4.9, reviews: 874, students: 4120, price: 690000, oldPrice: 990000, lessons: 56, hours: 14.5, badge: 'Bestseller', topic: 'Imtihon', updated: '2026-yil oktabr' },
    { id: 'grammar', title: 'Grammatika: Akkusativ, Dativ va Perfekt', subtitle: 'Eng ko‘p xato qilinadigan mavzular — jadval va 300+ mashq bilan.', instructor: 'bekzod', level: 'A2', cover: { tone: 'blue', word: 'der · den · dem' }, rating: 4.8, reviews: 1530, students: 8930, price: 249000, oldPrice: 420000, lessons: 36, hours: 7, topic: 'Grammatika', updated: '2026-yil iyul' },
    { id: 'speak', title: 'Sprechen: gapirish to‘sig‘ini yengish', subtitle: 'Har kuni 15 daqiqa jonli mashq va talaffuz tahlili.', instructor: 'anna', level: 'B1', cover: { tone: 'red', word: 'Auf geht’s!' }, rating: 4.6, reviews: 402, students: 1980, price: 459000, lessons: 30, hours: 6, badge: 'Yangi', topic: 'Gapirish', updated: '2026-yil oktabr' },
    { id: 'job', title: 'Ish uchun nemis tili: Ausbildung va Job', subtitle: 'Rezyume, Anschreiben, intervyu va ish joyidagi muloqot.', instructor: 'bekzod', level: 'B1', cover: { tone: 'green', word: 'Ich bewerbe mich.' }, rating: 4.7, reviews: 318, students: 2650, price: 549000, oldPrice: 790000, lessons: 40, hours: 10, topic: 'Ish va karyera', updated: '2026-yil sentabr' },
    { id: 'vocab', title: '2000 ta eng kerakli so‘z', subtitle: 'Mavzular bo‘yicha lug‘at, audio va takrorlash kartochkalari.', instructor: 'madina', level: 'A1', cover: { tone: 'gold', word: 'Wortschatz' }, rating: 4.7, reviews: 3102, students: 17400, price: 149000, oldPrice: 290000, lessons: 60, hours: 5, topic: 'Lug‘at', updated: '2026-yil iyun' },
    { id: 'pflege', title: 'Pflege: hamshiralar uchun nemis tili', subtitle: 'Tibbiyot lug‘ati, bemor bilan muloqot va hujjatlar — B2 darajada.', instructor: 'madina', level: 'B2', cover: { tone: 'paper', word: 'Pflege auf Deutsch' }, rating: 4.8, reviews: 256, students: 1140, price: 790000, lessons: 44, hours: 12, badge: 'Yangi', topic: 'Ish va karyera', updated: '2026-yil oktabr' },
    { id: 'b2', title: 'B2: erkin gapirish va yozish', subtitle: 'Murakkab grammatika, esse va munozara — telc/Goethe B2 formatida.', instructor: 'anna', level: 'B2', cover: { tone: 'ink', word: 'Fließend.' }, rating: 4.9, reviews: 198, students: 860, price: 890000, oldPrice: 1190000, lessons: 64, hours: 18, topic: 'Imtihon', updated: '2026-yil avgust' },
    { id: 'aussprache', title: 'Nemis talaffuzi: bepul mini-kurs', subtitle: 'ä, ö, ü, ch va r tovushlari — 6 ta qisqa video.', instructor: 'madina', level: 'A1', cover: { tone: 'red', word: 'Ä · Ö · Ü' }, rating: 4.8, reviews: 5210, students: 31200, price: 0, free: true, lessons: 6, hours: 1, topic: 'Talaffuz', updated: '2026-yil may' },
  ];
  const curriculum = [
    { title: 'Erste Schritte — birinchi qadamlar', lessons: [
      { id: 1, title: 'Kursga xush kelibsiz', duration: '03:20', preview: true },
      { id: 2, title: 'Nemis alifbosi va talaffuz', duration: '11:30', preview: true },
      { id: 3, title: 'Salomlashish: Hallo, Guten Tag', duration: '08:12' },
      { id: 4, title: 'Mashq: salomlashish', duration: '8 savol', type: 'quiz' } ] },
    { title: 'Ich bin… — o‘zim haqimda', lessons: [
      { id: 5, title: 'Kishilik olmoshlari: ich, du, er, sie', duration: '10:45' },
      { id: 6, title: '“sein” fe’li va tanishuv', duration: '12:05' },
      { id: 7, title: 'Der, die, das — artikllar', duration: '12:40' },
      { id: 8, title: 'Raqamlar 1–100', duration: '09:05' },
      { id: 9, title: 'Mashq: artiklni toping', duration: '10 savol', type: 'quiz' } ] },
    { title: 'Alltag — kundalik hayot', lessons: [
      { id: 10, title: 'Kafeda buyurtma berish', duration: '13:10' },
      { id: 11, title: 'Vaqt va soat: Wie spät ist es?', duration: '09:50' },
      { id: 12, title: 'Audio mashq: dialogni tinglang', duration: '06:15', type: 'audio' } ] },
    { title: 'Abschluss — yakun', lessons: [
      { id: 13, title: 'Yakuniy test A1', duration: '30 savol', type: 'quiz' },
      { id: 14, title: 'Sertifikat va keyingi qadam', duration: '02:40' } ] },
  ];
  const outcomes = ['O‘zingiz, oilangiz va ishingiz haqida gapirish', 'Kafe, do‘kon va transportda muloqot', 'Der/die/das va asosiy fe’llar tuslanishi', 'Goethe A1 “Start Deutsch 1” formatidagi sinov', '600+ eng kerakli so‘z, audio bilan', 'Kurs oxirida lehrer.uz sertifikati'];
  const files = [
    { name: 'Lektion-07-Arbeitsblatt.pdf', size: '1,2 MB', kind: 'pdf' },
    { name: 'Artikel-Tabelle.pdf', size: '480 KB', kind: 'pdf' },
    { name: 'Lektion-07-Dialog.mp3', size: '8,4 MB', kind: 'audio' },
    { name: 'A1-Wortschatz-Karten.zip', size: '24 MB', kind: 'zip' },
  ];
  const comments = [
    { id: 1, author: 'Jasur Toshmatov', time: '2 soat oldin', timestamp: '04:12', text: 'Nega “Ich sehe den Tisch” bo‘ldi, “der Tisch” emas?', likes: 3, replies: [
      { id: 11, author: 'Dilnoza Karimova', instructor: true, time: '1 soat oldin', text: 'Akkusativda erkak jinsi artikli der → den ga o‘zgaradi. 9-darsda batafsil jadval bor.', likes: 12 } ] },
    { id: 2, author: 'Madina Aliyeva', time: 'kecha', text: 'Artikl jadvali PDF juda foydali bo‘ldi, rahmat! Telefonga saqlab oldim.', likes: 8, replies: [] },
    { id: 3, author: 'Sardor Qodirov', time: '3 kun oldin', timestamp: '09:30', text: '“das Mädchen” nega “das”? Qiz-ku…', likes: 21, replies: [] },
  ];
  const reviews = [
    { author: 'Nilufar S.', rating: 5, time: '2 hafta oldin', text: 'Noldan boshladim, 2 oyda A1 imtihonidan o‘tdim. Har bir dars qisqa va tushunarli.' },
    { author: 'Otabek M.', rating: 5, time: '1 oy oldin', text: 'Grammatika o‘zbekcha tushuntirilgani katta yordam. Audio mashqlar zo‘r.' },
    { author: 'Kamola R.', rating: 4, time: '1 oy oldin', text: 'Juda yaxshi kurs. Gapirish mashqlari ko‘proq bo‘lsa yanada yaxshi bo‘lardi.' },
  ];
  const levels = [
    { id: 'A1', name: 'Boshlang‘ich', weeks: '8 hafta', count: 24 },
    { id: 'A2', name: 'Elementar', weeks: '10 hafta', count: 18 },
    { id: 'B1', name: 'O‘rta', weeks: '12 hafta', count: 15 },
    { id: 'B2', name: 'O‘rtadan yuqori', weeks: '14 hafta', count: 9 },
    { id: 'C1', name: 'Ilg‘or', weeks: '16 hafta', count: 4 },
  ];
  const fmt = n => Math.round(n).toLocaleString('ru-RU').replace(/\u00a0/g, ' ');
  return { instructors, courses, curriculum, outcomes, files, comments, reviews, levels, fmt };
})();
