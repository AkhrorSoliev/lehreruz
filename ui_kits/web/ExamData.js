// Mock exam content — Goethe-style (Lesen · Hören · Schreiben · Sprechen). Sample material for the UI kit.
window.LZ_EXAMS = {
  A1: {
    title: 'Start Deutsch 1', cefr: 'A1', note: 'Goethe-Zertifikat A1 formatida',
    modules: [{ id: 'lesen', name: 'Lesen', uz: 'O‘qish', min: 25, icon: 'book-open' }, { id: 'horen', name: 'Hören', uz: 'Tinglash', min: 20, icon: 'headphones' }, { id: 'schreiben', name: 'Schreiben', uz: 'Yozish', min: 20, icon: 'notebook-pen' }, { id: 'sprechen', name: 'Sprechen', uz: 'Gapirish', min: 15, icon: 'mic' }],
    lesen: [
      { title: 'Teil 1 · E-Mail', passage: 'Hallo Anna,\nam Samstag mache ich eine kleine Party. Sie beginnt um 18 Uhr bei mir zu Hause, Bahnhofstraße 12. Bitte bring etwas zu trinken mit. Kommst du?\nViele Grüße\nLena', prompt: 'Richtig oder falsch?', qs: [
        { id: 'l1', type: 'tf', text: 'Die Party ist am Sonntag.', a: 1 }, { id: 'l2', type: 'tf', text: 'Die Party beginnt um 18 Uhr.', a: 0 }, { id: 'l3', type: 'tf', text: 'Anna soll Essen mitbringen.', a: 1 }, { id: 'l4', type: 'tf', text: 'Lena wohnt in der Bahnhofstraße.', a: 0 }] },
      { title: 'Teil 2 · Anzeige', passage: 'CAFÉ SONNE\nMontag bis Freitag: 8–18 Uhr\nSamstag: 9–14 Uhr\nSonntag: geschlossen\nFrühstück ab 3,50 €', prompt: 'Wählen Sie die richtige Antwort.', qs: [
        { id: 'l5', type: 'mc', text: 'Wann ist das Café am Sonntag geöffnet?', o: ['Von 9 bis 14 Uhr', 'Von 8 bis 18 Uhr', 'Gar nicht'], a: 2 }, { id: 'l6', type: 'mc', text: 'Was kostet das Frühstück?', o: ['Ab 3,50 €', 'Ab 5 €', 'Es ist kostenlos'], a: 0 }] },
    ],
    horen: [
      { title: 'Teil 1 · Im Café', say: 'Guten Tag, ich möchte einen Kaffee und ein Brötchen, bitte. — Das macht vier Euro fünfzig.', qs: [
        { id: 'h1', type: 'mc', text: 'Was bestellt die Frau?', o: ['Kaffee und Brötchen', 'Tee und Kuchen', 'Wasser und Brot'], a: 0 }, { id: 'h2', type: 'mc', text: 'Wie viel kostet es?', o: ['4,50 €', '5,40 €', '14,50 €'], a: 0 }] },
      { title: 'Teil 2 · Am Bahnhof', say: 'Achtung an Gleis fünf: Der Zug nach München fährt heute nicht um neun Uhr, sondern um neun Uhr dreißig.', qs: [
        { id: 'h3', type: 'mc', text: 'Wann fährt der Zug?', o: ['9:00 Uhr', '9:30 Uhr', '9:15 Uhr'], a: 1 }, { id: 'h4', type: 'mc', text: 'Von welchem Gleis fährt der Zug?', o: ['Gleis 3', 'Gleis 5', 'Gleis 9'], a: 1 }] },
    ],
    schreiben: { title: 'E-Mail an die Lehrerin', task: 'Sie sind krank und können morgen nicht zum Deutschkurs kommen. Schreiben Sie eine kurze E-Mail an Ihre Lehrerin (ca. 30 Wörter). Warum schreiben Sie? Wann kommen Sie wieder?', min: 25 },
    sprechen: [
      { title: 'Teil 1 · Sich vorstellen', task: 'Stellen Sie sich vor: Name, Land, Wohnort, Sprachen, Hobby.' },
      { title: 'Teil 2 · Fragen stellen', task: 'Stellen Sie eine Frage zum Stichwort: „Geburtstag?“ und antworten Sie auf die Frage Ihres Partners.' },
      { title: 'Teil 3 · Bitten', task: 'Formulieren Sie eine Bitte: „Sie sind im Restaurant. Bitten Sie um die Speisekarte.“' }],
  },
  B1: {
    title: 'Zertifikat B1', cefr: 'B1', note: 'Goethe-Zertifikat B1 formatida',
    modules: [{ id: 'lesen', name: 'Lesen', uz: 'O‘qish', min: 65, icon: 'book-open' }, { id: 'horen', name: 'Hören', uz: 'Tinglash', min: 40, icon: 'headphones' }, { id: 'schreiben', name: 'Schreiben', uz: 'Yozish', min: 60, icon: 'notebook-pen' }, { id: 'sprechen', name: 'Sprechen', uz: 'Gapirish', min: 15, icon: 'mic' }],
    lesen: [
      { title: 'Teil 1 · Zeitungsartikel', passage: 'Immer mehr Menschen in Deutschland fahren mit dem Fahrrad zur Arbeit. Das ist gesund und spart Geld. Allerdings fehlen in vielen Städten noch sichere Radwege. Deshalb fordern Verbände mehr Investitionen, damit das Fahrrad nicht nur ein Hobby, sondern ein echtes Verkehrsmittel wird.', prompt: 'Richtig oder falsch?', qs: [
        { id: 'l1', type: 'tf', text: 'Immer weniger Menschen fahren mit dem Rad zur Arbeit.', a: 1 }, { id: 'l2', type: 'tf', text: 'In vielen Städten gibt es noch zu wenige sichere Radwege.', a: 0 }, { id: 'l3', type: 'tf', text: 'Radfahren ist laut Text nur ein Hobby.', a: 1 }] },
      { title: 'Teil 2 · Leserbrief', passage: 'Ich arbeite seit zwei Jahren im Homeoffice und möchte es nicht mehr missen. Ich spare täglich anderthalb Stunden Fahrzeit und kann mich besser konzentrieren. Nur den Kontakt zu den Kollegen vermisse ich manchmal.', prompt: 'Wählen Sie die richtige Antwort.', qs: [
        { id: 'l4', type: 'mc', text: 'Was ist ein Vorteil des Homeoffice für den Schreiber?', o: ['Er spart Fahrzeit.', 'Er verdient mehr.', 'Er hat mehr Urlaub.'], a: 0 }, { id: 'l5', type: 'mc', text: 'Was vermisst er manchmal?', o: ['Das Büro-Essen', 'Den Kontakt zu Kollegen', 'Seinen Chef'], a: 1 }] },
    ],
    horen: [
      { title: 'Teil 1 · Ansage', say: 'Liebe Fahrgäste, wegen einer Baustelle fällt die Linie fünf zwischen Hauptbahnhof und Rathaus heute aus. Bitte nutzen Sie den Ersatzbus vor dem Haupteingang.', qs: [
        { id: 'h1', type: 'mc', text: 'Warum fällt die Linie fünf aus?', o: ['Wegen eines Streiks', 'Wegen einer Baustelle', 'Wegen des Wetters'], a: 1 }, { id: 'h2', type: 'mc', text: 'Wo fährt der Ersatzbus ab?', o: ['Am Rathaus', 'Am Hauptbahnhof, vor dem Haupteingang', 'An der Haltestelle Süd'], a: 1 }] },
    ],
    schreiben: { title: 'Forumsbeitrag', task: 'Im Internetforum diskutiert man über das Thema „Sollen Kinder früh eine Fremdsprache lernen?“ Schreiben Sie Ihre Meinung (ca. 80 Wörter). Begründen Sie Ihre Meinung und nennen Sie ein Beispiel.', min: 60 },
    sprechen: [
      { title: 'Teil 1 · Gemeinsam planen', task: 'Planen Sie mit Ihrem Partner eine Geburtstagsfeier für einen Freund: Ort, Essen, Programm.' },
      { title: 'Teil 2 · Präsentation', task: 'Halten Sie eine kurze Präsentation zum Thema „Mein Alltag mit der deutschen Sprache“.' },
      { title: 'Teil 3 · Reagieren', task: 'Reagieren Sie auf die Präsentation Ihres Partners: Frage stellen und kurz Feedback geben.' }],
  },
};
