export type WorkCategory = 'film' | 'tv' | 'stage' | 'production';
export type FilterId = 'all' | WorkCategory;

export interface WorkPalette {
  paper: string;
  wash: string;
  glow: string;
  accent: string;
  deep: string;
  moss: string;
  swatches: string[];
  mood: string;
}

export interface WorkItem {
  id: string;
  year: string;
  title: string;
  category: WorkCategory;
  type: string;
  role: string;
  detail: string;
  note: string;
  expanded: string;
  focus: string;
  credits: string[];
  tags: string[];
  palette: WorkPalette;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export interface SpotlightItem {
  id: WorkCategory;
  label: string;
  summary: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  text: string;
}

export interface ProductionHighlight {
  year: string;
  title: string;
  text: string;
}

export const featuredPortrait = {
  url: 'images/elena-portrait.png',
  alt: 'Ritratto di Elena Arvigo',
  caption: 'Un ritratto di Elena Arvigo usato come ancora visiva del sito.'
} as const;

const palettes = {
  velvetRose: {
    paper: '#f7efe7',
    wash: '#ecd7d6',
    glow: '#e8b3bd',
    accent: '#b3475e',
    deep: '#4f1f34',
    moss: '#617157',
    swatches: ['#f7efe7', '#e8b3bd', '#ef8e77', '#b3475e'],
    mood: 'Velluto, memoria e tensione sentimentale.'
  },
  lilacNight: {
    paper: '#f3edf7',
    wash: '#d9d1eb',
    glow: '#c7b6e9',
    accent: '#8a5ac2',
    deep: '#352241',
    moss: '#607462',
    swatches: ['#f3edf7', '#c7b6e9', '#8a5ac2', '#352241'],
    mood: 'Notturno teatrale, intimo e febbrile.'
  },
  coralStage: {
    paper: '#f8efe7',
    wash: '#f2d7cb',
    glow: '#ef8e77',
    accent: '#d36454',
    deep: '#592b2d',
    moss: '#6f7351',
    swatches: ['#f8efe7', '#efc1b0', '#ef8e77', '#d36454'],
    mood: 'Luce di quinta, carne, coralita scenica.'
  },
  paperMoss: {
    paper: '#f5efe3',
    wash: '#dcd2bf',
    glow: '#cabd9f',
    accent: '#7e7554',
    deep: '#3a3429',
    moss: '#617157',
    swatches: ['#f5efe3', '#dcd2bf', '#7e7554', '#617157'],
    mood: 'Archivio, carta antica, natura trattenuta.'
  },
  orchidNoir: {
    paper: '#f6edf3',
    wash: '#ddc8d8',
    glow: '#c448a6',
    accent: '#902b74',
    deep: '#2c1730',
    moss: '#546355',
    swatches: ['#f6edf3', '#ddc8d8', '#c448a6', '#2c1730'],
    mood: 'Orchidea scura, desiderio e ferita.'
  },
  duskBlue: {
    paper: '#edf2f5',
    wash: '#d1dce8',
    glow: '#9eb9cf',
    accent: '#55789e',
    deep: '#223247',
    moss: '#65776a',
    swatches: ['#edf2f5', '#d1dce8', '#55789e', '#223247'],
    mood: 'Aria di sera, distanza, lucidita emotiva.'
  },
  blushSmoke: {
    paper: '#f8f0ee',
    wash: '#e8d6d4',
    glow: '#dca8b1',
    accent: '#9a5f78',
    deep: '#45273a',
    moss: '#697060',
    swatches: ['#f8f0ee', '#e8d6d4', '#dca8b1', '#9a5f78'],
    mood: 'Polvere rosa, malinconia e precisione.'
  },
  emberWine: {
    paper: '#f7eee9',
    wash: '#e6cbc4',
    glow: '#d47266',
    accent: '#9b344f',
    deep: '#401b2c',
    moss: '#6b6a52',
    swatches: ['#f7eee9', '#d47266', '#9b344f', '#401b2c'],
    mood: 'Brace, resistenza e voce politica.'
  }
} as const satisfies Record<string, WorkPalette>;

export const works: WorkItem[] = [
  {
    id: 'film-confidenza',
    year: '2024',
    title: 'Confidenza',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Daniele Luchetti',
    note: 'Un tassello recente nel cinema italiano contemporaneo.',
    expanded:
      'Nel cinema di Luchetti la sua presenza si colloca in una partitura emotiva trattenuta, fatta di tensioni interiori, memoria e ambiguita affettiva.',
    focus: 'Una presenza sottile dentro un racconto di intimita e segreti.',
    credits: ['Cinema', 'Daniele Luchetti', 'Produzione italiana contemporanea'],
    tags: ['tensione', 'segreto', 'autoriale'],
    palette: palettes.velvetRose
  },
  {
    id: 'film-scuola-cattolica',
    year: '2021',
    title: 'La scuola cattolica',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Stefano Mordini',
    note: 'Tratto dal romanzo di Edoardo Albinati.',
    expanded:
      'Qui il lavoro entra in un immaginario duro, storico e collettivo, dove il dettaglio umano convive con una materia narrativa ampia e perturbante.',
    focus: 'Un film che unisce trauma pubblico e osservazione privata.',
    credits: ['Cinema', 'Stefano Mordini', 'Da Edoardo Albinati'],
    tags: ['romanzo', 'storia italiana', 'tensione morale'],
    palette: palettes.paperMoss
  },
  {
    id: 'film-immensita',
    year: '2022',
    title: "L'immensita",
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Emanuele Crialese',
    note: "Una presenza in un'opera di forte respiro visivo e autobiografico.",
    expanded:
      'La delicatezza del film di Crialese si riflette in una tavolozza morbida e sospesa, dove il lavoro dell interprete si iscrive in una memoria luminosa ma inquieta.',
    focus: 'Atmosfera familiare e immaginazione come spazio di resistenza.',
    credits: ['Cinema', 'Emanuele Crialese', 'Dramma autobiografico'],
    tags: ['famiglia', 'identita', 'visione'],
    palette: palettes.blushSmoke
  },
  {
    id: 'film-senza-distanza',
    year: '2018',
    title: 'Senza Distanza',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Andrea Di Iorio',
    note: 'Film indipendente nel quale il tono intimo resta centrale.',
    expanded:
      'Una cornice indipendente che valorizza prossimita, silenzio e fragilita dei rapporti, con una presenza scenica affidata piu alla vibrazione che all enunciazione.',
    focus: 'Un lavoro raccolto, ravvicinato, quasi sussurrato.',
    credits: ['Cinema indipendente', 'Andrea Di Iorio', 'Drama intimista'],
    tags: ['vicinanza', 'indie', 'relazioni'],
    palette: palettes.duskBlue
  },
  {
    id: 'film-mangia-prega-ama',
    year: '2010',
    title: 'Mangia prega ama',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Ryan Murphy',
    note: 'Produzione internazionale con Julia Roberts.',
    expanded:
      'Un passaggio dentro una produzione internazionale che porta il suo lavoro in una geografia piu ampia, tra viaggio, trasformazione e cinema di grande diffusione.',
    focus: 'Internazionalita e presenza italiana dentro un racconto globale.',
    credits: ['Cinema internazionale', 'Ryan Murphy', 'Con Julia Roberts'],
    tags: ['viaggio', 'internazionale', 'trasformazione'],
    palette: palettes.coralStage
  },
  {
    id: 'film-tutta-la-vita-davanti',
    year: '2008',
    title: 'Tutta la vita davanti',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Paolo Virzi',
    note: 'Un titolo chiave del cinema italiano degli anni Duemila.',
    expanded:
      'Nel cinema di Virzi il tono sociale incontra ironia e malinconia. La scheda si muove quindi fra rosa elettrico, carta e accenti piu taglienti.',
    focus: 'Lavoro, precarieta e osservazione del presente.',
    credits: ['Cinema italiano', 'Paolo Virzi', 'Ritratto sociale'],
    tags: ['precarieta', 'virzi', 'anni duemila'],
    palette: palettes.emberWine
  },
  {
    id: 'film-bonjour-michel',
    year: '2005',
    title: 'Bonjour Michel',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Arcangelo Bonaccorso',
    note: 'Tra i primi incontri importanti con il grande schermo.',
    expanded:
      'Un titolo delle origini che conserva il sapore di un incontro formativo con il cinema, in una zona ancora aperta, mobile e di scoperta.',
    focus: 'Uno dei primi capitoli del rapporto con lo schermo.',
    credits: ['Cinema', 'Arcangelo Bonaccorso', 'Primo percorso autoriale'],
    tags: ['inizio', 'formazione', 'schermo'],
    palette: palettes.lilacNight,
    imageUrl: 'images/bonjour-michel.jpg',
    imageAlt: 'Elena Arvigo e Ben Gazzara in una foto di scena di Bonjour Michel',
    imageCaption: 'Foto di scena del film Bonjour Michel.'
  },
  {
    id: 'tv-fuochi-artificio',
    year: '2025',
    title: "Fuochi d'artificio",
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Regia di Susanna Nicchiarelli',
    note: 'Presenza recente nella serialita italiana.',
    expanded:
      'Una tappa recente nella serialita, segnata da un immaginario vivo e pulsante che suggerisce lampi, bagliori e un tono di attesa narrativa.',
    focus: 'Una serialita contemporanea con un ritmo piu acceso e corale.',
    credits: ['Serie TV', 'Susanna Nicchiarelli', 'Produzione recente'],
    tags: ['serialita', 'bagliore', 'contemporaneo'],
    palette: palettes.coralStage
  },
  {
    id: 'tv-caso-di-coscienza',
    year: '2013',
    title: 'Un caso di coscienza 5',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Regia di Luigi Perelli',
    note: 'Episodio della longeva produzione televisiva italiana.',
    expanded:
      'La forma della fiction classica italiana chiede precisione narrativa, leggibilita e una presenza capace di muoversi bene nel racconto seriale.',
    focus: 'Televisione generalista e costruzione limpida del personaggio.',
    credits: ['Serie TV', 'Luigi Perelli', 'Fiction italiana'],
    tags: ['fiction', 'generalista', 'televisione'],
    palette: palettes.paperMoss
  },
  {
    id: 'tv-restauratore',
    year: '2010',
    title: 'Il restauratore',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Miniserie TV',
    note: 'Parte della sua fase di intensa presenza in televisione.',
    expanded:
      'Un progetto televisivo che mescola racconto popolare, atmosfera e personaggi riconoscibili, dentro un impianto dal passo narrativo solido.',
    focus: 'Televisione di racconto con una grammatica ampia e accessibile.',
    credits: ['Miniserie TV', 'Produzione italiana', 'Anni dieci'],
    tags: ['racconto', 'seriale', 'atmosfera'],
    palette: palettes.blushSmoke
  },
  {
    id: 'tv-ladra',
    year: '2010',
    title: 'La ladra',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Regia di Francesco Vicario',
    note: 'Una tappa nella fiction italiana del decennio.',
    expanded:
      'La pagina lavora su toni piu vivaci e compatti, in linea con una narrazione di fiction che si muove fra leggerezza, tensione e riconoscibilita immediata.',
    focus: 'Una presenza che dialoga con il registro agile della fiction.',
    credits: ['Serie TV', 'Francesco Vicario', 'Fiction italiana'],
    tags: ['fiction', 'ritmo', 'racconto popolare'],
    palette: palettes.velvetRose
  },
  {
    id: 'tv-sotto-il-cielo-di-roma',
    year: '2010',
    title: 'Sotto il cielo di Roma',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Miniserie diretta da Christian Duguay',
    note: 'Progetto televisivo internazionale girato in piu lingue.',
    expanded:
      'Una miniserie che apre a un respiro internazionale e storico, con toni piu solenni e una tavolozza di carta, fumo e chiarori severi.',
    focus: 'Storia, lingua e coproduzione internazionale.',
    credits: ['Miniserie TV', 'Christian Duguay', 'Coproduzione internazionale'],
    tags: ['storia', 'coproduzione', 'lingue'],
    palette: palettes.duskBlue
  },
  {
    id: 'tv-mental',
    year: '2009',
    title: 'Mental',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Serie prodotta da Twentieth Century Fox',
    note: 'Esperienza statunitense nel ruolo di Sofia.',
    expanded:
      'L esperienza statunitense sposta il lavoro in un contesto produttivo differente, piu rapido e internazionale, senza perdere precisione di presenza.',
    focus: 'Una deviazione americana dentro il percorso televisivo.',
    credits: ['Serie TV USA', 'Twentieth Century Fox', 'Ruolo di Sofia'],
    tags: ['usa', 'fox', 'internazionale'],
    palette: palettes.orchidNoir
  },
  {
    id: 'tv-primi-anni',
    year: '2002-2003',
    title: 'Perlasca / Marcinelle / Commesse',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Miniserie e film TV italiani',
    note: 'Una fase che consolida la sua presenza sul piccolo schermo.',
    expanded:
      'Questa costellazione di titoli racconta un ingresso progressivo e costante nella TV italiana, tra racconti civili, popolari e storici.',
    focus: 'Una fase di consolidamento attraverso progetti diversi.',
    credits: ['Miniserie e film TV', 'Produzioni italiane', 'Primo consolidamento TV'],
    tags: ['primi anni', 'miniserie', 'presenza seriale'],
    palette: palettes.paperMoss
  },
  {
    id: 'tv-la-piovra',
    year: '2001',
    title: 'La piovra 10',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice protagonista',
    detail: 'Regia di Luigi Perelli',
    note: 'Debutto televisivo nel ruolo di Giulia Mercuri.',
    expanded:
      'Un esordio televisivo forte, subito dentro una saga molto nota, capace di darle un primo spazio netto e memorabile presso il grande pubblico.',
    focus: 'Il debutto sul piccolo schermo avviene gia in una produzione simbolica.',
    credits: ['Serie TV', 'Luigi Perelli', 'Ruolo di Giulia Mercuri'],
    tags: ['debutto', 'piovra', 'protagonista'],
    palette: palettes.emberWine
  },
  {
    id: 'stage-appunti',
    year: '2026',
    title: 'Appunti per il futuro',
    category: 'stage',
    type: 'Teatro',
    role: 'Di e con Elena Arvigo',
    detail: 'Da testi di Svetlana Aleksievic e Simone Weil',
    note: 'Un coro di memorie e sentimenti segnato dalla guerra.',
    expanded:
      'Una creazione che intreccia testimonianza, pensiero e fragilita umana. La scena si costruisce come quaderno aperto, materia del presente e responsabilita della memoria.',
    focus: 'Guerra, testimonianza e futuro immaginato dalla voce.',
    credits: ['Teatro', 'Svetlana Aleksievic', 'Simone Weil'],
    tags: ['memoria', 'guerra', 'testimonianza'],
    palette: palettes.duskBlue,
    imageUrl: 'images/appunti-per-il-futuro.jpg',
    imageAlt: 'Immagine di scena di Appunti per il futuro con Elena Arvigo',
    imageCaption: 'Immagine di scena scelta per Appunti per il futuro.'
  },
  {
    id: 'stage-elena',
    year: '2024',
    title: 'Elena',
    category: 'stage',
    type: 'Teatro',
    role: 'Regia e interpretazione',
    detail: 'Da Ghiannis Ritsos',
    note: 'Una figura mitica restituita come memoria viva e disincantata.',
    expanded:
      'Ritsos viene attraversato come rovina luminosa, confessione e consapevolezza. La tavolozza lavora su lilla, cipria e scuro per tenere insieme mito e corpo.',
    focus: 'Una Elena antica e contemporanea, fragile e lucidissima.',
    credits: ['Teatro', 'Ghiannis Ritsos', 'Regia e interpretazione'],
    tags: ['mito', 'ritsos', 'figura femminile'],
    palette: palettes.lilacNight,
    imageUrl: 'images/elena-ritsos.jpg',
    imageAlt: 'Elena Arvigo in scena nello spettacolo Elena',
    imageCaption: 'Immagine di scena dello spettacolo Elena.'
  },
  {
    id: 'stage-storia-al-contrario',
    year: '2023',
    title: 'Una storia al contrario',
    category: 'stage',
    type: 'Teatro',
    role: 'Regia e interpretazione',
    detail: 'Testo di Francesca De Sanctis',
    note: 'Una drammaturgia che tiene insieme civile e personale.',
    expanded:
      'La scrittura contemporanea incontra il lavoro registico in uno spazio che guarda al biografico, al politico e al movimento retrospettivo del racconto.',
    focus: 'Un testo contemporaneo condotto con sensibilita civile.',
    credits: ['Teatro', 'Francesca De Sanctis', 'Regia e interpretazione'],
    tags: ['drammaturgia', 'civile', 'contemporaneo'],
    palette: palettes.velvetRose
  },
  {
    id: 'stage-sogno',
    year: '2022',
    title: 'Sogno di una notte di mezza estate',
    category: 'stage',
    type: 'Teatro',
    role: 'Titania e Ippolita',
    detail: 'Regia di Giorgio Sangati',
    note: 'Shakespeare filtrato da un impianto di grande leggerezza scenica.',
    expanded:
      'Titania e Ippolita aprono un doppio spazio di regalita, ironia e trasparenza teatrale. La palette qui si fa piu fiabesca e vegetale.',
    focus: 'Shakespeare come gioco di luce, desiderio e metamorfosi.',
    credits: ['Teatro', 'William Shakespeare', 'Giorgio Sangati'],
    tags: ['shakespeare', 'fiaba', 'metamorfosi'],
    palette: palettes.paperMoss
  },
  {
    id: 'stage-troiane',
    year: '2019',
    title: 'Le troiane',
    category: 'stage',
    type: 'Teatro',
    role: 'Andromaca',
    detail: 'Regia di Muriel Mayette Holtz',
    note: 'Una tragedia corale e politica nel Teatro Greco di Siracusa.',
    expanded:
      'Andromaca vive dentro una coralita tragica, politica e antica. La scena evoca rovine, terra e un rosso trattenuto come brace storica.',
    focus: 'La ferita del mito come ferita pubblica.',
    credits: ['Teatro classico', 'Muriel Mayette Holtz', 'Siracusa'],
    tags: ['tragedia', 'siracusa', 'andromaca'],
    palette: palettes.emberWine
  },
  {
    id: 'stage-affinita-elettive',
    year: '2019',
    title: 'Le affinita elettive',
    category: 'stage',
    type: 'Teatro',
    role: 'Carlotta',
    detail: 'Regia di Andrea Baracco',
    note: 'Goethe in una forma tesa, sensibile, adulta.',
    expanded:
      'La geometria sentimentale di Goethe viene attraversata con una tavolozza di carta, fumo e rosa spento, piu mentale che illustrativa.',
    focus: 'Desiderio, equilibrio e attrazione dentro una macchina sentimentale.',
    credits: ['Teatro', 'Goethe', 'Andrea Baracco'],
    tags: ['goethe', 'desiderio', 'equilibrio'],
    palette: palettes.blushSmoke
  },
  {
    id: 'stage-yerma',
    year: '2016',
    title: 'Yerma',
    category: 'stage',
    type: 'Teatro',
    role: 'Yerma',
    detail: 'Regia di Gianluca Merolli',
    note: 'Una figura femminile assoluta tra desiderio e frattura.',
    expanded:
      'Yerma e una delle grandi presenze del repertorio femminile di Arvigo: corpo, mancanza e necessità poetica si stringono in una scena spoglia ma ardente.',
    focus: 'Lorca come luogo di desiderio negato e forza verticale.',
    credits: ['Teatro', 'Federico Garcia Lorca', 'Gianluca Merolli'],
    tags: ['lorca', 'desiderio', 'figura assoluta'],
    palette: palettes.coralStage,
    imageUrl: 'images/yerma.jpg',
    imageAlt: 'Immagine di scena di Yerma con Elena Arvigo',
    imageCaption: 'Immagine di scena di Yerma.'
  },
  {
    id: 'stage-448',
    year: '2011-2024',
    title: '4:48 Psychosis',
    category: 'stage',
    type: 'Teatro',
    role: 'Interprete',
    detail: 'Testo di Sarah Kane, regia di Valentina Calvani',
    note: 'Spettacolo-soglia, riconosciuto dalla critica e piu volte ripreso.',
    expanded:
      'Un lavoro cardine, esposto e radicale, dove il linguaggio di Sarah Kane diventa materia nervosa, interiore, quasi luminosa nel suo punto piu oscuro.',
    focus: 'Una soglia teatrale che ha segnato il suo percorso.',
    credits: ['Teatro', 'Sarah Kane', 'Valentina Calvani'],
    tags: ['sarah kane', 'radicale', 'culto'],
    palette: palettes.orchidNoir,
    imageUrl: 'images/448-psychosis.jpg',
    imageAlt: 'Elena Arvigo in scena in 4:48 Psychosis',
    imageCaption: 'Immagine di scena di 4:48 Psychosis.'
  },
  {
    id: 'stage-maternity-blues',
    year: '2012-2015',
    title: 'Maternity Blues',
    category: 'stage',
    type: 'Teatro',
    role: 'Eloisa',
    detail: 'Adattamento e regia di Elena Arvigo',
    note: 'Uno dei primi snodi chiari del suo lavoro registico.',
    expanded:
      'Un progetto fondamentale per il suo passaggio da interprete a costruttrice di scena: parola, regia e corpo si allineano in una materia insieme etica e sensibile.',
    focus: 'Il dolore femminile diventa architettura scenica.',
    credits: ['Teatro', 'Adattamento e regia di Elena Arvigo', 'Ruolo di Eloisa'],
    tags: ['regia', 'madri', 'snodo artistico'],
    palette: palettes.velvetRose
  },
  {
    id: 'stage-wilko',
    year: '2009-2010',
    title: 'Le signorine di Wilko',
    category: 'stage',
    type: 'Teatro',
    role: 'Kazia',
    detail: 'Regia di Alvis Hermanis',
    note: 'Tra i titoli che segnano la sua maturita sulla scena.',
    expanded:
      'La raffinatezza della regia di Hermanis richiede sfumatura, precisione e un uso delicato della memoria, in una tavolozza piu seppia e tessuta.',
    focus: 'Memoria, eleganza e maturazione del linguaggio scenico.',
    credits: ['Teatro', 'Alvis Hermanis', 'Ruolo di Kazia'],
    tags: ['hermanis', 'memoria', 'maturita'],
    palette: palettes.paperMoss
  },
  {
    id: 'stage-amleto',
    year: '2005',
    title: 'Amleto',
    category: 'stage',
    type: 'Teatro',
    role: 'Ofelia',
    detail: 'Regia di Giovanni Boncoddo',
    note: 'Una figura classica che torna anche nella sua poetica successiva.',
    expanded:
      'Ofelia prefigura gia molte delle future linee di ricerca: fragilita, visione, letteratura e un corpo attraversato dalla parola.',
    focus: 'Una delle radici classiche del suo immaginario scenico.',
    credits: ['Teatro', 'William Shakespeare', 'Giovanni Boncoddo'],
    tags: ['ofelia', 'classico', 'origine'],
    palette: palettes.duskBlue
  },
  {
    id: 'production-donna-non-rieducabile',
    year: '2015-2020',
    title: 'Donna non rieducabile',
    category: 'production',
    type: 'Produzione',
    role: 'Regia',
    detail: 'Da Stefano Massini',
    note: 'Teatro civile, essenziale, diretto.',
    expanded:
      'La regia si mette al servizio di una scrittura frontale e necessaria. La pagina visiva lavora su rosso, carta e severita per restituire la nettezza del progetto.',
    focus: 'Teatro civile come responsabilita di sguardo.',
    credits: ['Produzione', 'Stefano Massini', 'Regia'],
    tags: ['civile', 'massini', 'regia'],
    palette: palettes.emberWine
  },
  {
    id: 'production-atomica',
    year: '2016-2024',
    title: "I Monologhi dell'Atomica",
    category: 'production',
    type: 'Produzione',
    role: 'Progetto, regia e interpretazione',
    detail: 'Da Svetlana Aleksievic e Kyoko Hayashi',
    note: 'Lo spettacolo che le vale il Premio Le Maschere 2023.',
    expanded:
      'Uno dei nuclei piu forti del suo lavoro produttivo: testimonianza femminile, catastrofe storica e ascolto della parola come traccia che brucia ancora.',
    focus: 'Una creazione emblematica del suo teatro di testimonianza.',
    credits: ['Produzione', 'Svetlana Aleksievic', 'Kyoko Hayashi'],
    tags: ['atomica', 'premio', 'testimonianza'],
    palette: palettes.orchidNoir,
    imageUrl: 'images/monologhi-atomica.jpg',
    imageAlt: "Elena Arvigo in scena ne I Monologhi dell'Atomica",
    imageCaption: "Immagine di scena de I Monologhi dell'Atomica."
  },
  {
    id: 'production-ragazza-meta',
    year: '2017-2019',
    title: 'Una ragazza lasciata a meta',
    category: 'production',
    type: 'Produzione',
    role: 'Regia',
    detail: 'Dal romanzo di Eimear McBride',
    note: 'Un adattamento che muove tra parola spezzata e desiderio.',
    expanded:
      'Il testo di McBride porta in scena frammento, energia e desiderio. La costruzione visiva insiste su un rosa spezzato, quasi elettrico, ma ferito.',
    focus: 'Adattamento come attraversamento del linguaggio franto.',
    credits: ['Produzione', 'Eimear McBride', 'Regia'],
    tags: ['adattamento', 'frammento', 'desiderio'],
    palette: palettes.blushSmoke
  },
  {
    id: 'production-metafisica',
    year: '2018-2021',
    title: 'La metafisica della bellezza',
    category: 'production',
    type: 'Produzione',
    role: 'Progetto, drammaturgia e regia',
    detail: 'Lettere dalle case chiuse di Lina Merlin',
    note: 'Una scena che incrocia storia, corpo politico e intelligenza emotiva.',
    expanded:
      'Il progetto unisce ricerca storica, drammaturgia e sguardo politico in una tessitura di carta, carne e memoria femminile.',
    focus: 'Bellezza e politica tenute dentro la stessa stanza teatrale.',
    credits: ['Produzione', 'Lina Merlin', 'Drammaturgia e regia'],
    tags: ['storia', 'politica', 'archivio'],
    palette: palettes.paperMoss
  },
  {
    id: 'production-il-dolore',
    year: '2019-2022',
    title: 'Il dolore',
    category: 'production',
    type: 'Produzione',
    role: 'Di e con Elena Arvigo',
    detail: 'Da Marguerite Duras e Peter Weiss',
    note: 'Scrittura della guerra e della memoria come esperienza viva.',
    expanded:
      'Duras e Weiss aprono una zona di densita letteraria, memoria e ferita storica. La palette si chiude su toni bassi, rossi profondi e luce quasi cenere.',
    focus: 'Parola letteraria e trauma storico in una forma essenziale.',
    credits: ['Produzione', 'Marguerite Duras', 'Peter Weiss'],
    tags: ['duras', 'guerra', 'memoria'],
    palette: palettes.emberWine,
    imageUrl: 'images/il-dolore.jpg',
    imageAlt: 'Elena Arvigo in scena nello spettacolo Il dolore',
    imageCaption: 'Immagine di scena di Il dolore.'
  },
  {
    id: 'production-elena',
    year: '2024',
    title: 'Elena',
    category: 'production',
    type: 'Produzione',
    role: 'Regia, scene e costumi',
    detail: 'In collaborazione con Compagnia Elena Arvigo',
    note: 'Una forma matura del progetto sulle figure femminili del mito.',
    expanded:
      'Qui la costruzione e completa: regia, visione, immagine e materia della scena convergono in un lavoro pienamente autoriale e riconoscibile.',
    focus: 'Una firma scenica che cura anche immagine e spazio.',
    credits: ['Produzione', 'Compagnia Elena Arvigo', 'Regia, scene e costumi'],
    tags: ['autoriale', 'mito', 'scena'],
    palette: palettes.lilacNight,
    imageUrl: 'images/elena-ritsos.jpg',
    imageAlt: 'Elena Arvigo in scena nello spettacolo Elena',
    imageCaption: 'Immagine di scena usata anche per la scheda di produzione di Elena.'
  },
  {
    id: 'production-appunti',
    year: '2026',
    title: 'Appunti per il futuro',
    category: 'production',
    type: 'Produzione',
    role: 'Compagnia Elena Arvigo',
    detail: 'Produzione in collaborazione con Teatro Out Off',
    note: 'Una nuova tappa di creazione autonoma e teatrale.',
    expanded:
      'La produzione conferma la forza della compagnia nel costruire lavori nati da pensiero, testimonianza e cura artigianale dell impianto scenico.',
    focus: 'Compagnia e visione autonoma al servizio di un nuovo lavoro.',
    credits: ['Produzione', 'Compagnia Elena Arvigo', 'Teatro Out Off'],
    tags: ['compagnia', 'nuova creazione', 'out off'],
    palette: palettes.duskBlue,
    imageUrl: 'images/appunti-per-il-futuro.jpg',
    imageAlt: 'Elena Arvigo in Appunti per il futuro',
    imageCaption: 'Immagine di scena usata anche per la scheda di produzione di Appunti per il futuro.'
  }
];

export const filterDescriptions: Record<FilterId, string> = {
  all: 'Una selezione di opere pubbliche che attraversa quattro territori: cinema, serialita televisiva, palcoscenico e creazione indipendente.',
  film: 'Il versante cinema mette insieme film italiani, autoriali e internazionali, con un percorso che va da Bonjour Michel a Confidenza.',
  tv: 'La sezione Serie TV riunisce fiction italiane, miniserie e produzioni internazionali, a partire dal debutto in La piovra 10.',
  stage: 'Il percorso teatrale attraversa classici, drammaturgia contemporanea e monologhi, con una forte tensione poetica e politica.',
  production: 'Qui emergono i lavori in cui interpretazione, regia, adattamento e produzione di compagnia diventano un unico gesto artistico.'
};

export const spotlightItems: SpotlightItem[] = [
  {
    id: 'film',
    label: 'Cinema',
    summary: "Film d'autore, produzioni internazionali, ruoli sensibili e stratificati."
  },
  {
    id: 'tv',
    label: 'Serie TV',
    summary: 'Dalla fiction italiana alle produzioni internazionali.'
  },
  {
    id: 'stage',
    label: 'Teatrale',
    summary: 'Classici, drammaturgia contemporanea, monologhi e grandi regie.'
  },
  {
    id: 'production',
    label: 'Produzione e regia',
    summary: "Un teatro indipendente che nasce dall'autoproduzione e dalla ricerca."
  }
];

export const theatreMoments: TimelineItem[] = [
  {
    year: '2026',
    title: 'Appunti per il futuro',
    text: 'Una nuova creazione che passa attraverso memorie di guerra, sentimenti e testimonianze, cercando una forma corale e poetica.'
  },
  {
    year: '2024',
    title: 'Elena',
    text: 'Ritsos diventa confessione, rovina, bellezza che resiste. Il mito viene portato vicino, quasi a contatto con chi guarda.'
  },
  {
    year: '2023',
    title: "I Monologhi dell'Atomica",
    text: 'Una partitura civile e struggente che mette al centro la voce delle donne come testimoni della catastrofe.'
  },
  {
    year: '2019',
    title: 'Trilogia Arvigo',
    text: "Un ritratto d'artista dedicato dal Teatro di Roma con 4:48 Psychosis, Il dolore e Una ragazza lasciata a meta."
  },
  {
    year: '2016',
    title: 'Yerma / Edipo / Monologhi',
    text: 'Un periodo che intreccia classico, drammaturgia politica e messa a fuoco della propria firma scenica.'
  }
];

export const productionHighlights: ProductionHighlight[] = [
  {
    year: 'Autoproduzione',
    title: 'Teatro come costruzione completa',
    text: "Dal lavoro sul testo alla forma scenica, l'attivita produttiva prende corpo come gesto unitario: adattamento, regia, allestimento, interpretazione."
  },
  {
    year: 'Figure femminili',
    title: 'Una costellazione di testimoni',
    text: 'Da Sarah Kane a Marguerite Duras, da Lina Merlin a Ritsos, il repertorio mette al centro voci difficili, luminose, imperdonabili.'
  },
  {
    year: 'Compagnia',
    title: 'Produzioni indipendenti',
    text: 'La Compagnia Elena Arvigo sostiene progetti che vivono di precisione artigianale, tenuta poetica e rapporto ravvicinato con il pubblico.'
  }
];

export const awards = [
  '2023 - Premio Le Maschere del Teatro Italiano',
  '2019 - Candidatura Le Maschere per 4:48 Psychosis',
  '2014 - Premio Migliore Attrice, Asti Film Festival',
  '1999 - Segnalazione Premio Hystrio alla Vocazione'
];

export const profilePoints = [
  'Formazione tra Ginevra, Losanna, Londra e Milano',
  'Italiano, inglese, francese e tedesco in scena',
  'Una ricerca che intreccia mito, politica e intimita'
];

export const filters = [
  { id: 'all', label: 'Tutto' },
  { id: 'film', label: 'Cinema' },
  { id: 'tv', label: 'Serie TV' },
  { id: 'stage', label: 'Teatrale' },
  { id: 'production', label: 'Produzione' }
] as const satisfies ReadonlyArray<{ id: FilterId; label: string }>;

export function findWorkById(id: string): WorkItem | undefined {
  return works.find((work) => work.id === id);
}
