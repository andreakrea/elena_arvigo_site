import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

type FilterId = 'all' | 'film' | 'tv' | 'stage' | 'production';

interface WorkItem {
  id: string;
  year: string;
  title: string;
  category: Exclude<FilterId, 'all'>;
  type: string;
  role: string;
  detail: string;
  note: string;
}

interface SpotlightItem {
  id: Exclude<FilterId, 'all'>;
  label: string;
  summary: string;
}

interface TimelineItem {
  year: string;
  title: string;
  text: string;
}

interface ProductionHighlight {
  year: string;
  title: string;
  text: string;
}

const works: WorkItem[] = [
  {
    id: 'film-confidenza',
    year: '2024',
    title: 'Confidenza',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Daniele Luchetti',
    note: 'Un tassello recente nel cinema italiano contemporaneo.'
  },
  {
    id: 'film-scuola-cattolica',
    year: '2021',
    title: 'La scuola cattolica',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Stefano Mordini',
    note: 'Tratto dal romanzo di Edoardo Albinati.'
  },
  {
    id: 'film-immensita',
    year: '2022',
    title: "L'immensita",
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Emanuele Crialese',
    note: "Una presenza in un'opera di forte respiro visivo e autobiografico."
  },
  {
    id: 'film-senza-distanza',
    year: '2018',
    title: 'Senza Distanza',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Andrea Di Iorio',
    note: 'Film indipendente nel quale il tono intimo resta centrale.'
  },
  {
    id: 'film-mangia-prega-ama',
    year: '2010',
    title: 'Mangia prega ama',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Ryan Murphy',
    note: 'Produzione internazionale con Julia Roberts.'
  },
  {
    id: 'film-tutta-la-vita-davanti',
    year: '2008',
    title: 'Tutta la vita davanti',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Paolo Virzi',
    note: 'Un titolo chiave del cinema italiano degli anni Duemila.'
  },
  {
    id: 'film-bonjour-michel',
    year: '2005',
    title: 'Bonjour Michel',
    category: 'film',
    type: 'Cinema',
    role: 'Attrice',
    detail: 'Regia di Arcangelo Bonaccorso',
    note: 'Tra i primi incontri importanti con il grande schermo.'
  },
  {
    id: 'tv-fuochi-artificio',
    year: '2025',
    title: "Fuochi d'artificio",
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Regia di Susanna Nicchiarelli',
    note: 'Presenza recente nella serialita italiana.'
  },
  {
    id: 'tv-caso-di-coscienza',
    year: '2013',
    title: 'Un caso di coscienza 5',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Regia di Luigi Perelli',
    note: 'Episodio della longeva produzione televisiva italiana.'
  },
  {
    id: 'tv-restauratore',
    year: '2010',
    title: 'Il restauratore',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Miniserie TV',
    note: 'Parte della sua fase di intensa presenza in televisione.'
  },
  {
    id: 'tv-ladra',
    year: '2010',
    title: 'La ladra',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Regia di Francesco Vicario',
    note: 'Una tappa nella fiction italiana del decennio.'
  },
  {
    id: 'tv-sotto-il-cielo-di-roma',
    year: '2010',
    title: 'Sotto il cielo di Roma',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Miniserie diretta da Christian Duguay',
    note: 'Progetto televisivo internazionale girato in piu lingue.'
  },
  {
    id: 'tv-mental',
    year: '2009',
    title: 'Mental',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Serie prodotta da Twentieth Century Fox',
    note: 'Esperienza statunitense nel ruolo di Sofia.'
  },
  {
    id: 'tv-primi-anni',
    year: '2002-2003',
    title: 'Perlasca / Marcinelle / Commesse',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice',
    detail: 'Miniserie e film TV italiani',
    note: 'Una fase che consolida la sua presenza sul piccolo schermo.'
  },
  {
    id: 'tv-la-piovra',
    year: '2001',
    title: 'La piovra 10',
    category: 'tv',
    type: 'Serie TV',
    role: 'Attrice protagonista',
    detail: 'Regia di Luigi Perelli',
    note: 'Debutto televisivo nel ruolo di Giulia Mercuri.'
  },
  {
    id: 'stage-appunti',
    year: '2026',
    title: 'Appunti per il futuro',
    category: 'stage',
    type: 'Teatro',
    role: 'Di e con Elena Arvigo',
    detail: 'Da testi di Svetlana Aleksievic e Simone Weil',
    note: 'Un coro di memorie e sentimenti segnato dalla guerra.'
  },
  {
    id: 'stage-elena',
    year: '2024',
    title: 'Elena',
    category: 'stage',
    type: 'Teatro',
    role: 'Regia e interpretazione',
    detail: 'Da Ghiannis Ritsos',
    note: 'Una figura mitica restituita come memoria viva e disincantata.'
  },
  {
    id: 'stage-storia-al-contrario',
    year: '2023',
    title: 'Una storia al contrario',
    category: 'stage',
    type: 'Teatro',
    role: 'Regia e interpretazione',
    detail: 'Testo di Francesca De Sanctis',
    note: 'Una drammaturgia che tiene insieme civile e personale.'
  },
  {
    id: 'stage-sogno',
    year: '2022',
    title: 'Sogno di una notte di mezza estate',
    category: 'stage',
    type: 'Teatro',
    role: 'Titania e Ippolita',
    detail: 'Regia di Giorgio Sangati',
    note: 'Shakespeare filtrato da un impianto di grande leggerezza scenica.'
  },
  {
    id: 'stage-troiane',
    year: '2019',
    title: 'Le troiane',
    category: 'stage',
    type: 'Teatro',
    role: 'Andromaca',
    detail: 'Regia di Muriel Mayette Holtz',
    note: 'Una tragedia corale e politica nel Teatro Greco di Siracusa.'
  },
  {
    id: 'stage-affinita-elettive',
    year: '2019',
    title: 'Le affinita elettive',
    category: 'stage',
    type: 'Teatro',
    role: 'Carlotta',
    detail: 'Regia di Andrea Baracco',
    note: 'Goethe in una forma tesa, sensibile, adulta.'
  },
  {
    id: 'stage-yerma',
    year: '2016',
    title: 'Yerma',
    category: 'stage',
    type: 'Teatro',
    role: 'Yerma',
    detail: 'Regia di Gianluca Merolli',
    note: 'Una figura femminile assoluta tra desiderio e frattura.'
  },
  {
    id: 'stage-448',
    year: '2011-2024',
    title: '4:48 Psychosis',
    category: 'stage',
    type: 'Teatro',
    role: 'Interprete',
    detail: 'Testo di Sarah Kane, regia di Valentina Calvani',
    note: 'Spettacolo-soglia, riconosciuto dalla critica e piu volte ripreso.'
  },
  {
    id: 'stage-maternity-blues',
    year: '2012-2015',
    title: 'Maternity Blues',
    category: 'stage',
    type: 'Teatro',
    role: 'Eloisa',
    detail: 'Adattamento e regia di Elena Arvigo',
    note: 'Uno dei primi snodi chiari del suo lavoro registico.'
  },
  {
    id: 'stage-wilko',
    year: '2009-2010',
    title: 'Le signorine di Wilko',
    category: 'stage',
    type: 'Teatro',
    role: 'Kazia',
    detail: 'Regia di Alvis Hermanis',
    note: 'Tra i titoli che segnano la sua maturita sulla scena.'
  },
  {
    id: 'stage-amleto',
    year: '2005',
    title: 'Amleto',
    category: 'stage',
    type: 'Teatro',
    role: 'Ofelia',
    detail: 'Regia di Giovanni Boncoddo',
    note: 'Una figura classica che torna anche nella sua poetica successiva.'
  },
  {
    id: 'production-donna-non-rieducabile',
    year: '2015-2020',
    title: 'Donna non rieducabile',
    category: 'production',
    type: 'Produzione',
    role: 'Regia',
    detail: 'Da Stefano Massini',
    note: 'Teatro civile, essenziale, diretto.'
  },
  {
    id: 'production-atomica',
    year: '2016-2024',
    title: "I Monologhi dell'Atomica",
    category: 'production',
    type: 'Produzione',
    role: 'Progetto, regia e interpretazione',
    detail: 'Da Svetlana Aleksievic e Kyoko Hayashi',
    note: 'Lo spettacolo che le vale il Premio Le Maschere 2023.'
  },
  {
    id: 'production-ragazza-meta',
    year: '2017-2019',
    title: 'Una ragazza lasciata a meta',
    category: 'production',
    type: 'Produzione',
    role: 'Regia',
    detail: 'Dal romanzo di Eimear McBride',
    note: 'Un adattamento che muove tra parola spezzata e desiderio.'
  },
  {
    id: 'production-metafisica',
    year: '2018-2021',
    title: 'La metafisica della bellezza',
    category: 'production',
    type: 'Produzione',
    role: 'Progetto, drammaturgia e regia',
    detail: 'Lettere dalle case chiuse di Lina Merlin',
    note: 'Una scena che incrocia storia, corpo politico e intelligenza emotiva.'
  },
  {
    id: 'production-il-dolore',
    year: '2019-2022',
    title: 'Il dolore',
    category: 'production',
    type: 'Produzione',
    role: 'Di e con Elena Arvigo',
    detail: 'Da Marguerite Duras e Peter Weiss',
    note: 'Scrittura della guerra e della memoria come esperienza viva.'
  },
  {
    id: 'production-elena',
    year: '2024',
    title: 'Elena',
    category: 'production',
    type: 'Produzione',
    role: 'Regia, scene e costumi',
    detail: 'In collaborazione con Compagnia Elena Arvigo',
    note: 'Una forma matura del progetto sulle figure femminili del mito.'
  },
  {
    id: 'production-appunti',
    year: '2026',
    title: 'Appunti per il futuro',
    category: 'production',
    type: 'Produzione',
    role: 'Compagnia Elena Arvigo',
    detail: 'Produzione in collaborazione con Teatro Out Off',
    note: 'Una nuova tappa di creazione autonoma e teatrale.'
  }
];

const filterDescriptions: Record<FilterId, string> = {
  all: 'Una selezione di opere pubbliche che attraversa quattro territori: cinema, serialita televisiva, palcoscenico e creazione indipendente.',
  film: 'Il versante cinema mette insieme film italiani, autoriali e internazionali, con un percorso che va da Bonjour Michel a Confidenza.',
  tv: 'La sezione Serie TV riunisce fiction italiane, miniserie e produzioni internazionali, a partire dal debutto in La piovra 10.',
  stage: 'Il percorso teatrale attraversa classici, drammaturgia contemporanea e monologhi, con una forte tensione poetica e politica.',
  production: 'Qui emergono i lavori in cui interpretazione, regia, adattamento e produzione di compagnia diventano un unico gesto artistico.'
};

const spotlightItems: SpotlightItem[] = [
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
    label: 'Produzione & regia',
    summary: "Un teatro indipendente che nasce dall'autoproduzione e dalla ricerca."
  }
];

const theatreMoments: TimelineItem[] = [
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

const productionHighlights: ProductionHighlight[] = [
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

const awards = [
  '2023 · Premio Le Maschere del Teatro Italiano',
  '2019 · Candidatura Le Maschere per 4:48 Psychosis',
  '2014 · Premio Migliore Attrice, Asti Film Festival',
  '1999 · Segnalazione Premio Hystrio alla Vocazione'
];

const profilePoints = [
  'Formazione tra Ginevra, Losanna, Londra e Milano',
  'Italiano, inglese, francese e tedesco in scena',
  'Una ricerca che intreccia mito, politica e intimita'
];

const filters = [
  { id: 'all', label: 'Tutto' },
  { id: 'film', label: 'Cinema' },
  { id: 'tv', label: 'Serie TV' },
  { id: 'stage', label: 'Teatrale' },
  { id: 'production', label: 'Produzione' }
] as const satisfies ReadonlyArray<{ id: FilterId; label: string }>;

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly filters = filters;
  readonly spotlightItems = spotlightItems;
  readonly theatreMoments = theatreMoments;
  readonly productionHighlights = productionHighlights;
  readonly awards = awards;
  readonly profilePoints = profilePoints;
  readonly selectedFilter = signal<FilterId>('all');

  readonly filteredWorks = computed(() => {
    const activeFilter = this.selectedFilter();
    return activeFilter === 'all'
      ? works
      : works.filter((work) => work.category === activeFilter);
  });

  readonly filterDescription = computed(() => filterDescriptions[this.selectedFilter()]);

  readonly stats = [
    { id: 'film', label: 'Cinema', count: works.filter((work) => work.category === 'film').length },
    { id: 'tv', label: 'Serie TV', count: works.filter((work) => work.category === 'tv').length },
    { id: 'stage', label: 'Teatro', count: works.filter((work) => work.category === 'stage').length },
    {
      id: 'production',
      label: 'Produzione',
      count: works.filter((work) => work.category === 'production').length
    }
  ] as const;

  setFilter(filter: FilterId): void {
    this.selectedFilter.set(filter);
  }

  isFilterActive(filter: FilterId): boolean {
    return this.selectedFilter() === filter;
  }
}
