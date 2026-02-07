export type Language = 'it' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    products: string;
    bread: string;
    focacciaRomana: string;
    focacciaLigure: string;
    otherProducts: string;
    sourdough: string;
    workWithUs: string;
    contact: string;
  };
  // Home
  home: {
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  // About
  about: {
    title: string;
    traditionTitle: string;
    traditionText1: string;
    traditionText2: string;
    rootsTitle: string;
    rootsText1: string;
    rootsText2: string;
    innovationTitle: string;
    innovationText: string;
    innovationList: string[];
    businessTitle: string;
    businessText: string;
    businessList: string[];
    productsTitle: string;
    productsText: string;
    futureTitle: string;
    futureText: string;
  };
  // Bread
  bread: {
    title: string;
    pillarsIntro: string;
    pillar1Title: string;
    pillar1Subtitle: string;
    pillar1Text: string;
    pillar1List: string[];
    pillar1Conclusion: string;
    pillar2Title: string;
    pillar2Subtitle: string;
    pillar2Text: string;
    pillar2List: string[];
    pillar2Conclusion: string;
    pillar3Title: string;
    pillar3Subtitle: string;
    pillar3Text: string;
    pillar3List: string[];
    pillar3Conclusion: string;
    pillar4Title: string;
    pillar4Subtitle: string;
    pillar4Text: string;
    evolvesTitle: string;
    evolvesText: string;
    judgedTitle: string;
    judgedIntro: string;
    faq1Q: string;
    faq1A: string;
    faq2Q: string;
    faq2A: string;
    faq3Q: string;
    faq3A: string;
    faq4Q: string;
    faq4A: string;
    tipsTitle: string;
    tip1: string;
    tip2: string;
    tip3: string;
    tip4: string;
    tip5: string;
  };
  // Focaccia Romana
  focacciaRomana: {
    title: string;
    subtitle: string;
    description: string;
    whatIsTitle: string;
    whatIsList: string[];
    processTitle: string;
    processDough: string;
    processLeavening: string;
    processStretching: string;
    processBaking: string;
    characteristicsTitle: string;
    characteristicsList: string[];
    targetTitle: string;
    targetList: string[];
  };
  // Focaccia Ligure
  focacciaLigure: {
    title: string;
    subtitle: string;
    description: string;
    whatIsTitle: string;
    whatIsList: string[];
    processTitle: string;
    processDough: string;
    processLeavening: string;
    processStretching: string;
    processBrine: string;
    processBaking: string;
    characteristicsTitle: string;
    characteristicsList: string[];
    targetTitle: string;
    targetList: string[];
  };
  // Other Products
  otherProducts: {
    title: string;
    comingSoon: string;
  };
  // Sourdough
  sourdough: {
    title: string;
    whatIsTitle: string;
    whatIsText: string;
    benefits: {
      title: string;
      description: string;
    }[];
  };
  // Work With Us
  workWithUs: {
    title: string;
    introTitle: string;
    introText: string;
    whoWeSeekTitle: string;
    whoWeSeekText: string;
    artisanArea: string;
    artisanList: string[];
    commercialArea: string;
    commercialList: string[];
    offerTitle: string;
    offerList: string[];
    applyTitle: string;
    applyText: string;
    applyEmail: string;
  };
  // Contact
  contact: {
    title: string;
    companyName: string;
    vatLabel: string;
    vatNumber: string;
    pecLabel: string;
    pecValue: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    phoneValue: string;
    hoursLabel: string;
    hoursValue: string;
    commercialLabel: string;
    commercialValue: string;
    ctaTitle: string;
    ctaText: string;
    faqTitle: string;
    faqItems: { question: string; answer: string; }[];
  };
  // Footer
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
  // Cookies
  cookies: {
    message: string;
    privacyLink: string;
    accept: string;
    decline: string;
  };
  // SEO
  seo: {
    siteTitle: string;
    siteDescription: string;
  };
}

export const translations: Record<Language, Translations> = {
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Siamo',
      products: 'Prodotti',
      bread: 'Il Nostro Pane',
      focacciaRomana: 'Focaccia Romana',
      focacciaLigure: 'Focaccia Ligure',
      otherProducts: 'Altri Prodotti',
      sourdough: 'Lievito Madre',
      workWithUs: 'Lavora con Noi',
      contact: 'Contatti & Info',
    },
    home: {
      heroTitle: 'LAB PRO',
      heroSubtitle: 'Tradizione artigianale che guarda al futuro',
      ctaPrimary: 'Scopri i nostri prodotti',
      ctaSecondary: 'Contattaci',
    },
    about: {
      title: 'Chi Siamo',
      traditionTitle: 'Tradizione che guarda al futuro',
      traditionText1: 'Siamo un\'azienda italiana specializzata nella produzione di prodotti da forno, nata dal rispetto per la tradizione artigianale e cresciuta con uno sguardo costante verso il futuro.',
      traditionText2: 'Ogni giorno lavoriamo per unire saperi antichi, qualità delle materie prime e spirito innovativo, creando prodotti che raccontano la nostra storia ma rispondono alle esigenze di un mercato in continua evoluzione.',
      rootsTitle: 'Le nostre radici',
      rootsText1: 'La nostra storia affonda le radici nella cultura del buon pane e dei prodotti da forno fatti con cura, tempo e passione. Ricette tramandate, gesti ripetuti con precisione e attenzione ai dettagli sono ancora oggi il cuore del nostro lavoro.',
      rootsText2: 'Crediamo che la tradizione non sia qualcosa di statico, ma un patrimonio da preservare e valorizzare, giorno dopo giorno.',
      innovationTitle: 'Innovazione e visione imprenditoriale',
      innovationText: 'Accanto alla tradizione, abbiamo sviluppato una visione moderna e imprenditoriale, capace di guardare avanti. Innovare per noi significa:',
      innovationList: [
        'migliorare costantemente i nostri prodotti',
        'ottimizzare i processi senza snaturare l\'artigianalità',
        'rispondere alle nuove esigenze di consumo e distribuzione',
      ],
      businessTitle: 'Il nostro modo di fare impresa',
      businessText: 'Siamo convinti che il successo di un\'azienda passi dalle persone, dalle competenze e dalla capacità di fare squadra. Per questo promuoviamo una cultura aziendale basata su:',
      businessList: [
        'responsabilità',
        'attenzione alla qualità',
        'rispetto del lavoro e delle persone',
        'orientamento al cliente',
      ],
      productsTitle: 'I nostri prodotti',
      productsText: 'Produciamo una gamma di prodotti da forno che nasce dall\'incontro tra artigianalità e innovazione: pane, focaccia romana, focaccia ligure, Viennoiserie, biscotti, pasticceria secca e specialità da forno realizzati con ingredienti selezionati e lavorazioni curate in ogni fase. Contraddistingue le nostre produzioni un ampio utilizzo del lievito madre che sviluppa aromi più complessi e intensi. Ogni prodotto è pensato per offrire gusto, affidabilità e coerenza qualitativa.',
      futureTitle: 'Uno sguardo al domani',
      futureText: 'Il nostro obiettivo è continuare a crescere, restando fedeli ai valori che ci contraddistinguono. Guardiamo al futuro con entusiasmo, pronti a cogliere nuove opportunità e a sviluppare il nostro progetto in modo sostenibile, solido e responsabile.',
    },
    bread: {
      title: 'Il Nostro Pane Naturale',
      pillarsIntro: 'Il nostro pane non nasce da una ricetta, ma da una scelta tecnica consapevole. Ogni parametro è portato al limite dell\'equilibrio per ottenere sapore, digeribilità e durata naturale, senza scorciatoie. Quattro pilastri sostengono questo pane. Ognuno è indispensabile. Togliendone uno solo, il risultato non sarebbe lo stesso.',
      pillar1Title: 'Primo Pilastro',
      pillar1Subtitle: 'Farina di Tipo 2 macinata a pietra',
      pillar1Text: 'Utilizziamo esclusivamente farina di Tipo 2 macinata a pietra, una farina che conserva la parte più autentica del chicco: crusca fine, germe, fibre e sali minerali. La macinazione a pietra, lenta e a bassa temperatura, preserva gli oli essenziali e l\'identità aromatica del grano, evitando l\'alterazione tipica delle lavorazioni industriali.',
      pillar1List: [
        'struttura nutrizionalmente più ricca',
        'maggiore sazietà',
        'profilo aromatico profondo e riconoscibile',
      ],
      pillar1Conclusion: 'È un pane più scuro nell\'anima, non per estetica, ma per composizione.',
      pillar2Title: 'Secondo Pilastro',
      pillar2Subtitle: '30% di lievito madre vivo',
      pillar2Text: 'Utilizziamo una percentuale volutamente elevata di lievito madre vivo: il 30% sull\'impasto. Non è una scelta simbolica, ma funzionale. Il lievito madre lavora nel tempo: attiva gli enzimi, predigiere i cereali, ristruttura gli amidi e rende il pane più accessibile all\'organismo.',
      pillar2List: [
        'maggiore digeribilità',
        'conservazione naturale prolungata',
        'profilo aromatico lattico, morbido e rotondo',
      ],
      pillar2Conclusion: 'Non acido, non aggressivo: equilibrato e persistente.',
      pillar3Title: 'Terzo Pilastro',
      pillar3Subtitle: 'Idratazione al 75%',
      pillar3Text: 'Spingere l\'idratazione al 75% su una farina di Tipo 2 richiede competenza e controllo. L\'acqua non è un riempitivo: è il mezzo attraverso cui la fermentazione si esprime. In questo pane, l\'acqua viene trattenuta dalla maglia glutinica e rilasciata lentamente nel tempo.',
      pillar3List: [
        'umida e vellutata',
        'elastica',
        'stabile anche dopo diversi giorni',
      ],
      pillar3Conclusion: 'Quella che può essere percepita come "umidità" è in realtà la firma di un pane che resta vivo, non un difetto.',
      pillar4Title: 'Quarto Pilastro',
      pillar4Subtitle: 'Sale integrale',
      pillar4Text: 'Non utilizziamo sale raffinato, ma sale integrale, naturalmente ricco di oligoelementi. Il suo ruolo non è coprire, ma sostenere il gusto del grano e della fermentazione. La sapidità è piena ma mai tagliente. Completa il profilo minerale del pane e ne rafforza l\'identità senza dominarla.',
      evolvesTitle: 'Un pane che evolve',
      evolvesText: 'Questo non è un pane statico. È un pane che respira, matura e cambia nel tempo. Dopo il taglio, lasciarlo riposare qualche minuto permette alla mollica di stabilizzarsi e agli aromi di aprirsi. Il giorno successivo, il profilo gustativo risulta ancora più armonico. Una leggera tostatura esalta ulteriormente il lavoro della farina di Tipo 2, sviluppando note di nocciola e caramello.',
      judgedTitle: 'Quando un pane è diverso, viene giudicato',
      judgedIntro: 'Un pane costruito su materia viva, alta idratazione e fermentazione profonda non può essere neutro. Ogni critica è la conseguenza diretta delle scelte tecniche fatte.',
      faq1Q: '"È un pane pesante"',
      faq1A: 'Questo pane pesa perché contiene tutto il grano. Il pane bianco industriale è leggero perché composto quasi esclusivamente da amidi raffinati e aria. Il nostro pane è più denso perché nutre davvero. Una fetta sazia. Non riempie: sostiene.',
      faq2Q: '"La mollica è troppo umida"',
      faq2A: 'L\'acqua viene trattenuta nella struttura e rilasciata lentamente. Non è un difetto, ma una riserva di freschezza. Questa mollica è cremosa, elastica, viva.',
      faq3Q: '"Ha un gusto troppo deciso / diverso"',
      faq3A: 'Questo non è pane neutro. È pane con identità. Chi cerca un supporto invisibile resterà spiazzato. Chi cerca un ingrediente scoprirà il pane come protagonista.',
      faq4Q: '"Non è il solito pane"',
      faq4A: 'Ed è esattamente il punto. Questo pane non nasce per imitare, ma per distinguersi. Non cerca consenso immediato, ma coerenza.',
      tipsTitle: 'Consigli di degustazione e utilizzo',
      tip1: 'Dopo il taglio, lasciarlo respirare 5–10 minuti.',
      tip2: 'Dopo 12–24 ore, gli aromi risultano più armonici.',
      tip3: 'Una leggera tostatura ne rivela il potenziale.',
      tip4: 'Olio extravergine, burro, latticini, formaggi, uova, verdure.',
      tip5: 'In carta traspirante, in ambiente asciutto.',
    },
    focacciaRomana: {
      title: 'Focaccia Romana in Pala',
      subtitle: 'Croccante sotto. Alveolata dentro.',
      description: 'Stesa a mano, cotta su pietra, come da tradizione romana. La focaccia romana in pala è una questione di equilibrio: acqua, farina, tempo e calore. Nel nostro laboratorio la produciamo ogni giorno con impasto ad alta idratazione, lievitazione controllata e cottura ad alta temperatura, per ottenere una focaccia leggera, fragrante e altamente digeribile.',
      whatIsTitle: 'Cos\'è la Focaccia Romana in Pala',
      whatIsList: [
        'Croccante alla base',
        'Soffice e alveolata all\'interno',
        'Leggera e digeribile',
        'Perfetta da gustare al naturale o farcita',
      ],
      processTitle: 'Come la produciamo',
      processDough: 'Farine selezionate, acqua, lievito, olio e sale.',
      processLeavening: 'Graduale e controllata per sviluppare aroma e struttura.',
      processStretching: 'Manuale, delicata, per non rompere l\'alveolatura.',
      processBaking: 'Forno ad alta temperatura su pietra refrattaria, per una base asciutta e croccante.',
      characteristicsTitle: 'Caratteristiche',
      characteristicsList: [
        'Croccantezza decisa',
        'Mollica aperta e leggera',
        'Profumo di grano e olio',
        'Ideale da servire farcita',
        'Alta digeribilità',
      ],
      targetTitle: 'Per chi è pensata',
      targetList: [
        'Gastronomie e panifici',
        'Bar, ristoranti e street food',
        'Catering ed eventi',
        'Vendita al trancio direttamente in laboratorio',
      ],
    },
    focacciaLigure: {
      title: 'Focaccia Ligure',
      subtitle: 'Soffice, dorata, ricca d\'olio.',
      description: 'Bassa, profumata, inconfondibile. La focaccia ligure è semplicità portata all\'eccellenza: farina, acqua, lievito, sale e olio extravergine. Nel nostro laboratorio la produciamo seguendo la tradizione ligure, con impasto morbido, riposo controllato e la classica salamoia in superficie, per una focaccia fragrante, elastica e intensamente aromatica.',
      whatIsTitle: 'Cos\'è la Focaccia Ligure',
      whatIsList: [
        'Struttura bassa e soffice',
        'Superficie leggermente croccante',
        'Alveolatura fine',
        'Sapore ricco di olio extravergine',
      ],
      processTitle: 'Come la produciamo',
      processDough: 'Farine selezionate, acqua, lievito, sale e olio extravergine di oliva.',
      processLeavening: 'Controllata per sviluppare aroma e struttura.',
      processStretching: 'Manuale, con la classica pressione delle dita che crea le caratteristiche fossette.',
      processBrine: 'Acqua, olio e sale distribuiti uniformemente prima della cottura.',
      processBaking: 'Forno caldo per una doratura uniforme e una superficie fragrante.',
      characteristicsTitle: 'Caratteristiche',
      characteristicsList: [
        'Soffice ed elastica',
        'Superficie dorata e profumata',
        'Ricca di olio extravergine',
        'Gusto equilibrato e rotondo',
        'Ottima sia semplice che farcita',
      ],
      targetTitle: 'Per chi è pensata',
      targetList: [
        'Panifici e gastronomie',
        'Bar e caffetterie',
        'Ristoranti',
        'Vendita al trancio direttamente in laboratorio',
      ],
    },
    otherProducts: {
      title: 'Gli Altri Nostri Prodotti',
      comingSoon: 'Viennoiserie, biscotti, pasticceria secca - Prossimamente',
    },
    sourdough: {
      title: 'Il Lievito Madre',
      whatIsTitle: 'Che cos\'è il lievito madre',
      whatIsText: 'Il lievito madre (o pasta madre) è una coltura naturale di lieviti selvatici e batteri lattici che fermenta lentamente l\'impasto, conferendo al pane e ai prodotti da forno un profilo aromatico unico e numerosi benefici rispetto all\'uso del lievito di birra commerciale.',
      benefits: [
        {
          title: 'Gusto ricco e profondo',
          description: 'La fermentazione naturale sviluppa aromi più complessi, intensi e caratteristici, con note leggermente acidule che rendono ogni prodotto unico.',
        },
        {
          title: 'Migliore digeribilità',
          description: 'La lunga fermentazione predigiere parte del glutine e di altri componenti difficili da metabolizzare, rendendo il pane più gentile sullo stomaco e più facilmente digeribile per molte persone.',
        },
        {
          title: 'Impatto positivo sulla glicemia',
          description: 'Il pane con lievito madre ha un indice glicemico inferiore rispetto ai prodotti lievitati con lievito commerciale, perché gli acidi organici rallentano la digestione dell\'amido.',
        },
        {
          title: 'Maggiore disponibilità di nutrienti',
          description: 'Durante la fermentazione, vengono ridotti composti come i fitati che possono ostacolare l\'assorbimento di minerali (ferro, zinco, magnesio).',
        },
        {
          title: 'Senza additivi e conservanti',
          description: 'I prodotti lievitati con lievito madre possono mantenersi morbidi e gustosi più a lungo senza l\'aggiunta di conservanti, grazie alla natura del processo fermentativo.',
        },
        {
          title: 'Sapore e consistenza superiori',
          description: 'La fermentazione lenta non solo arricchisce il sapore, ma migliora anche la testura del pane, con una crosta più aromatica e mollica più piacevole.',
        },
        {
          title: 'Tradizione e artigianalità',
          description: 'L\'utilizzo del lievito madre richiama un metodo di panificazione antico e autentico, valorizzando l\'esperienza artigianale del fornaio.',
        },
      ],
    },
    workWithUs: {
      title: 'Lavora con Noi',
      introTitle: 'Cresciamo assieme',
      introText: 'Ogni giorno lavoriamo per portare sulle tavole prodotti da forno di qualità, frutto di passione, competenza artigianale e attenzione al cliente. Per continuare a crescere, siamo sempre alla ricerca di persone motivate e talentuose che condividano i nostri valori e vogliano contribuire allo sviluppo del nostro progetto. Entrare a far parte del nostro team significa partecipare attivamente a un percorso di crescita, in cui ogni ruolo ha un impatto concreto sul risultato finale.',
      whoWeSeekTitle: 'Chi cerchiamo',
      whoWeSeekText: 'Cerchiamo persone che possano supportare il nostro progetto sia dal punto di vista artigianale che commerciale, in base alle proprie competenze ed esperienze.',
      artisanArea: 'Area Artigianale e Produzione',
      artisanList: [
        'Addetti alla produzione',
        'Figure con esperienza nei prodotti da forno (pane, focacce, croissant, biscotti)',
        'Persone appassionate del lavoro manuale e della qualità del prodotto',
      ],
      commercialArea: 'Area Commerciale e Sviluppo',
      commercialList: [
        'Agenti/Procacciatori di affari',
        'Distributori sul territorio nazionale',
        'Distributori per mercati esteri (in particolare UK, Polonia e Germania)',
      ],
      offerTitle: 'Cosa offriamo',
      offerList: [
        'Un ambiente di lavoro dinamico e collaborativo',
        'Un contesto che valorizza le competenze e la crescita professionale',
        'La possibilità di contribuire attivamente allo sviluppo di un progetto in evoluzione',
      ],
      applyTitle: 'Invia la tua candidatura',
      applyText: 'Se pensi di poter dare un contributo al nostro progetto, inviaci la tua candidatura',
      applyEmail: 'info@lab-pro.it',
    },
    contact: {
      title: 'Contatti',
      companyName: 'LAB PRO S.r.l.',
      vatLabel: 'Partita IVA',
      vatNumber: '13007570016',
      pecLabel: 'PEC',
      pecValue: 'labpro@pec.it',
      addressLabel: 'Sede Operativa',
      addressValue: 'Via Jonio 5, 10138 – Torino',
      phoneLabel: 'Telefono',
      phoneValue: 'XXXXXXXXXXX',
      hoursLabel: 'Orari',
      hoursValue: 'Lunedì – Venerdì: 8:00 – 18:00',
      commercialLabel: 'Informazioni commerciali',
      commercialValue: 'info@lab-pro.it',
      ctaTitle: 'Hai domande?',
      ctaText: 'Consulta le nostre FAQ qui sotto oppure scrivici per informazioni commerciali e collaborazioni.',
      faqTitle: 'Domande Frequenti',
      faqItems: [
        {
          question: 'Quali prodotti realizzate?',
          answer: 'Lab Pro produce pane naturale con lievito madre, focaccia romana in pala, focaccia ligure, Viennoiserie, biscotti e pasticceria secca. Tutti i nostri prodotti sono realizzati con ingredienti selezionati e lavorazioni artigianali.',
        },
        {
          question: 'Cos\'è il lievito madre e perché lo usate?',
          answer: 'Il lievito madre è una coltura naturale di lieviti e batteri lattici. Noi di Lab Pro lo utilizziamo al 30% negli impasti per garantire maggiore digeribilità, conservazione naturale prolungata e un profilo aromatico più ricco e complesso.',
        },
        {
          question: 'Il vostro pane è adatto a chi ha difficoltà digestive?',
          answer: 'Sì, la lunga fermentazione con lievito madre e altri componenti, rendono il pane di Lab Pro più gentile sullo stomaco. Inoltre ha un indice glicemico inferiore rispetto al pane tradizionale.',
        },
        {
          question: 'Come si conserva il vostro pane?',
          answer: 'Consigliamo di conservarlo in carta traspirante, in ambiente asciutto. Grazie all\'alta idratazione e al lievito madre, il pane di Lab Pro mantiene morbidezza e freschezza per diversi giorni.',
        },
        {
          question: 'Qual è la differenza tra focaccia romana e ligure?',
          answer: 'La focaccia romana in pala di Lab Pro è caratterizzata da una base croccante e una mollica alveolata e leggera, cotta su pietra. La focaccia ligure è più bassa e soffice, con la classica superficie dorata ricca di olio extravergine.',
        },
        {
          question: 'Dove posso acquistare i vostri prodotti?',
          answer: 'I nostri prodotti sono disponibili presso il laboratorio Lab Pro di Torino in Via Jonio n. 5 (dal lunedì al venerdì, dalle 8 alle 18) e attraverso distributori selezionati. Per informazioni commerciali contattaci a info@lab-pro.it.',
        },
        {
          question: 'Effettuate consegne in tutta Italia?',
          answer: 'Sì, collaboriamo con distributori sul territorio nazionale. Per forniture e collaborazioni commerciali, contattaci direttamente per valutare le soluzioni più adatte alle tue esigenze.',
        },
        {
          question: 'Siete aperti a distributori esteri?',
          answer: 'Assolutamente sì. Siamo attivamente alla ricerca di distributori per mercati esteri, in particolare Regno Unito, Polonia e Germania. Contattaci per discutere opportunità di collaborazione.',
        },
        {
          question: 'Posso visitare il vostro laboratorio?',
          answer: 'Certo! Siamo in Via Jonio 5 a Torino. Ti consigliamo di contattarci prima per fissare un appuntamento. Siamo aperti dal lunedì al venerdì, dalle 8:00 alle 18:00.',
        },
        {
          question: 'State cercando personale?',
          answer: 'Siamo sempre alla ricerca di persone motivate sia nell\'area produzione che commerciale. Visita la sezione "Lavora con Noi" o inviaci la tua candidatura a info@lab-pro.it.',
        },
      ],
    },
    footer: {
      rights: '© 2025 LAB PRO S.r.l. Tutti i diritti riservati.',
      privacy: 'Privacy Policy',
      terms: 'Termini e Condizioni',
    },
    cookies: {
      message: 'Utilizziamo cookie tecnici necessari per il funzionamento del sito. Nessun cookie di profilazione. Per maggiori informazioni, consulta la nostra',
      privacyLink: 'Privacy Policy',
      accept: 'Accetta',
      decline: 'Rifiuta',
    },
    seo: {
      siteTitle: 'LAB PRO - Prodotti da Forno Artigianali',
      siteDescription: 'Azienda italiana specializzata nella produzione di pane, focacce e prodotti da forno artigianali. Tradizione che guarda al futuro.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      bread: 'Our Natural Bread',
      focacciaRomana: 'Roman Focaccia',
      focacciaLigure: 'Ligurian Focaccia',
      otherProducts: 'Other Products',
      sourdough: 'Sourdough Starter',
      workWithUs: 'Work with Us',
      contact: 'Contact & FAQ',
    },
    home: {
      heroTitle: 'LAB PRO',
      heroSubtitle: 'Artisan tradition looking to the future',
      ctaPrimary: 'Discover our products',
      ctaSecondary: 'Contact us',
    },
    about: {
      title: 'About Us',
      traditionTitle: 'Tradition Looking to the Future',
      traditionText1: 'We are an Italian company specialising in the production of bakery products, born from respect for artisan tradition and grown with a constant eye towards the future.',
      traditionText2: 'Every day we work to combine ancient knowledge, quality raw materials and innovative spirit, creating products that tell our story whilst responding to the needs of a constantly evolving market.',
      rootsTitle: 'Our Roots',
      rootsText1: 'Our story is rooted in the culture of good bread and bakery products made with care, time and passion. Recipes passed down through generations, gestures repeated with precision and attention to detail are still the heart of our work today.',
      rootsText2: 'We believe that tradition is not something static, but a heritage to be preserved and enhanced, day after day.',
      innovationTitle: 'Innovation and Entrepreneurial Vision',
      innovationText: 'Alongside tradition, we have developed a modern and entrepreneurial vision, capable of looking ahead. For us, innovation means:',
      innovationList: [
        'constantly improving our products',
        'optimising processes without compromising craftsmanship',
        'responding to new consumption and distribution needs',
      ],
      businessTitle: 'Our Way of Doing Business',
      businessText: 'We are convinced that a company\'s success comes from people, skills and the ability to work as a team. For this reason, we promote a corporate culture based on:',
      businessList: [
        'responsibility',
        'attention to quality',
        'respect for work and people',
        'customer orientation',
      ],
      productsTitle: 'Our Products',
      productsText: 'We produce a range of bakery products born from the meeting of craftsmanship and innovation: bread, Roman focaccia, Ligurian focaccia, viennoiserie, biscuits, dry pastries and baked specialities made with selected ingredients and carefully crafted at every stage. Our productions are characterised by extensive use of sourdough starter, which develops more complex and intense aromas. Every product is designed to offer taste, reliability and quality consistency.',
      futureTitle: 'Looking Towards Tomorrow',
      futureText: 'Our objective is to continue growing, remaining faithful to the values that distinguish us. We look to the future with enthusiasm, ready to seize new opportunities and to develop our project in a sustainable, solid and responsible manner.',
    },
    bread: {
      title: 'Our Natural Bread',
      pillarsIntro: 'Our bread is not born from a recipe, but from a conscious technical choice. Every parameter is pushed to the limit of equilibrium to obtain flavour, digestibility and natural durability, without shortcuts. Four pillars support this bread. Each one is indispensable. Remove even one, and the result would not be the same.',
      pillar1Title: 'First Pillar',
      pillar1Subtitle: 'Type 2 Stone-Ground Flour',
      pillar1Text: 'We use exclusively Type 2 stone-ground flour, a flour that preserves the most authentic part of the grain: fine bran, germ, fibre and mineral salts. Stone grinding, slow and at low temperature, preserves the essential oils and aromatic identity of the wheat, avoiding the alteration typical of industrial processing.',
      pillar1List: [
        'nutritionally richer structure',
        'greater satiety',
        'deep and recognisable aromatic profile',
      ],
      pillar1Conclusion: 'It is a bread darker in its soul, not for aesthetics, but for composition.',
      pillar2Title: 'Second Pillar',
      pillar2Subtitle: '30% Live Sourdough Starter',
      pillar2Text: 'We use a deliberately high percentage of live sourdough starter: 30% of the dough. This is not a symbolic choice, but a functional one. Sourdough starter works over time: it activates enzymes, pre-digests cereals, restructures starches and makes the bread more accessible to the body.',
      pillar2List: [
        'greater digestibility',
        'prolonged natural preservation',
        'lactic aromatic profile, soft and rounded',
      ],
      pillar2Conclusion: 'Not acidic, not aggressive: balanced and persistent.',
      pillar3Title: 'Third Pillar',
      pillar3Subtitle: '75% Hydration',
      pillar3Text: 'Pushing hydration to 75% on Type 2 flour requires skill and control. Water is not filler: it is the medium through which fermentation expresses itself. In this bread, water is retained by the gluten network and slowly released over time.',
      pillar3List: [
        'moist and velvety',
        'elastic',
        'stable even after several days',
      ],
      pillar3Conclusion: 'What may be perceived as "moisture" is actually the signature of a bread that stays alive, not a defect.',
      pillar4Title: 'Fourth Pillar',
      pillar4Subtitle: 'Whole Salt',
      pillar4Text: 'We do not use refined salt, but whole salt, naturally rich in trace elements. Its role is not to cover, but to support the taste of the grain and the fermentation. The saltiness is full but never sharp. It completes the mineral profile of the bread and strengthens its identity without dominating it.',
      evolvesTitle: 'Bread That Evolves',
      evolvesText: 'This is not a static bread. It is a bread that breathes, matures and changes over time. After cutting, letting it rest for a few minutes allows the crumb to stabilise and the aromas to open. The following day, the flavour profile is even more harmonious. A light toasting further enhances the work of the Type 2 flour, developing notes of hazelnut and caramel.',
      judgedTitle: 'When Bread Is Different, It Gets Judged',
      judgedIntro: 'A bread built on living matter, high hydration and deep fermentation cannot be neutral. Every criticism is a direct consequence of the technical choices made.',
      faq1Q: '"It\'s heavy bread"',
      faq1A: 'This bread is heavy because it contains the whole grain. Industrial white bread is light because it is composed almost exclusively of refined starches and air. Our bread is denser because it truly nourishes. One slice satisfies. It doesn\'t fill: it sustains.',
      faq2Q: '"The crumb is too moist"',
      faq2A: 'Water is retained in the structure and slowly released. This is not a defect, but a reserve of freshness. This crumb is creamy, elastic, alive.',
      faq3Q: '"It has too strong / different a taste"',
      faq3A: 'This is not neutral bread. It is bread with identity. Those seeking an invisible support will be taken aback. Those seeking an ingredient will discover bread as the protagonist.',
      faq4Q: '"It\'s not the usual bread"',
      faq4A: 'And that is exactly the point. This bread is not born to imitate, but to distinguish itself. It does not seek immediate consensus, but coherence.',
      tipsTitle: 'Tasting and Usage Recommendations',
      tip1: 'After cutting, let it breathe for 5–10 minutes.',
      tip2: 'After 12–24 hours, the aromas are more harmonious.',
      tip3: 'A light toasting reveals its potential.',
      tip4: 'Extra virgin olive oil, butter, dairy products, cheeses, eggs, vegetables.',
      tip5: 'In breathable paper, in a dry environment.',
    },
    focacciaRomana: {
      title: 'Roman Focaccia in Pala',
      subtitle: 'Crispy underneath. Airy inside.',
      description: 'Hand-stretched, stone-baked, as per Roman tradition. Roman focaccia in pala is a question of balance: water, flour, time and heat. In our workshop we produce it every day with high-hydration dough, controlled leavening and high-temperature baking, to obtain a light, fragrant and highly digestible focaccia.',
      whatIsTitle: 'What is Roman Focaccia in Pala',
      whatIsList: [
        'Crispy at the base',
        'Soft and airy inside',
        'Light and digestible',
        'Perfect to enjoy plain or filled',
      ],
      processTitle: 'How We Produce It',
      processDough: 'Selected flours, water, yeast, oil and salt.',
      processLeavening: 'Gradual and controlled to develop aroma and structure.',
      processStretching: 'Manual, delicate, so as not to break the air pockets.',
      processBaking: 'High-temperature oven on refractory stone, for a dry and crispy base.',
      characteristicsTitle: 'Characteristics',
      characteristicsList: [
        'Decisive crispiness',
        'Open and light crumb',
        'Aroma of wheat and oil',
        'Ideal to serve filled',
        'High digestibility',
      ],
      targetTitle: 'Who It Is Designed For',
      targetList: [
        'Delicatessens and bakeries',
        'Bars, restaurants and street food',
        'Catering and events',
        'Sale by the slice directly in the workshop',
      ],
    },
    focacciaLigure: {
      title: 'Ligurian Focaccia',
      subtitle: 'Soft, golden, rich in oil.',
      description: 'Low, fragrant, unmistakable. Ligurian focaccia is simplicity brought to excellence: flour, water, yeast, salt and extra virgin olive oil. In our workshop we produce it following the Ligurian tradition, with soft dough, controlled resting and the classic brine on the surface, for a fragrant, elastic and intensely aromatic focaccia.',
      whatIsTitle: 'What is Ligurian Focaccia',
      whatIsList: [
        'Low and soft structure',
        'Slightly crispy surface',
        'Fine air pockets',
        'Rich flavour of extra virgin olive oil',
      ],
      processTitle: 'How We Produce It',
      processDough: 'Selected flours, water, yeast, salt and extra virgin olive oil.',
      processLeavening: 'Controlled to develop aroma and structure.',
      processStretching: 'Manual, with the classic pressure of the fingers that creates the characteristic dimples.',
      processBrine: 'Water, oil and salt distributed uniformly before baking.',
      processBaking: 'Hot oven for uniform browning and a fragrant surface.',
      characteristicsTitle: 'Characteristics',
      characteristicsList: [
        'Soft and elastic',
        'Golden and fragrant surface',
        'Rich in extra virgin olive oil',
        'Balanced and rounded taste',
        'Excellent both plain and filled',
      ],
      targetTitle: 'Who It Is Designed For',
      targetList: [
        'Bakeries and delicatessens',
        'Bars and cafés',
        'Restaurants',
        'Sale by the slice directly in the workshop',
      ],
    },
    otherProducts: {
      title: 'Our Other Products',
      comingSoon: 'Viennoiserie, biscuits, dry pastries - Coming Soon',
    },
    sourdough: {
      title: 'Sourdough Starter',
      whatIsTitle: 'What Sourdough Starter Is',
      whatIsText: 'Sourdough starter (or pasta madre) is a natural culture of wild yeasts and lactic acid bacteria that slowly ferments the dough, giving bread and bakery products a unique aromatic profile and numerous benefits compared to the use of commercial baker\'s yeast.',
      benefits: [
        {
          title: 'Rich and Deep Flavour',
          description: 'Natural fermentation develops more complex, intense and characteristic aromas, with slightly acidulous notes that make each product unique.',
        },
        {
          title: 'Better Digestibility',
          description: 'The long fermentation pre-digests part of the gluten and other components that are difficult to metabolise, making the bread gentler on the stomach and more easily digestible for many people.',
        },
        {
          title: 'Positive Impact on Blood Sugar',
          description: 'Bread with sourdough starter has a lower glycaemic index compared to products leavened with commercial yeast, because organic acids slow down the digestion of starch.',
        },
        {
          title: 'Greater Nutrient Availability',
          description: 'During fermentation, compounds such as phytates that can hinder the absorption of minerals (iron, zinc, magnesium) are reduced.',
        },
        {
          title: 'Without Additives and Preservatives',
          description: 'Products leavened with sourdough starter can stay soft and tasty for longer without the addition of preservatives, thanks to the nature of the fermentation process.',
        },
        {
          title: 'Superior Flavour and Texture',
          description: 'Slow fermentation not only enriches flavour, but also improves the texture of the bread, with a more aromatic crust and more pleasant crumb.',
        },
        {
          title: 'Tradition and Craftsmanship',
          description: 'The use of sourdough starter recalls an ancient and authentic bread-making method, enhancing the artisan experience of the baker.',
        },
      ],
    },
    workWithUs: {
      title: 'Work with Us',
      introTitle: 'Let\'s Grow Together',
      introText: 'Every day we work to bring quality bakery products to tables, the result of passion, artisan skill and attention to the customer. To continue growing, we are always looking for motivated and talented people who share our values and want to contribute to the development of our project. Becoming part of our team means actively participating in a growth path, in which every role has a concrete impact on the final result.',
      whoWeSeekTitle: 'Who We Are Looking For',
      whoWeSeekText: 'We are looking for people who can support our project both from an artisan and commercial point of view, based on their skills and experience.',
      artisanArea: 'Artisan and Production Area',
      artisanList: [
        'Production assistants',
        'Figures with experience in bakery products (bread, focaccia, croissants, biscuits)',
        'People passionate about manual work and product quality',
      ],
      commercialArea: 'Commercial and Development Area',
      commercialList: [
        'Sales agents/Business developers',
        'Distributors on the national territory',
        'Distributors for foreign markets (in particular UK, Poland and Germany)',
      ],
      offerTitle: 'What We Offer',
      offerList: [
        'A dynamic and collaborative working environment',
        'A context that values skills and professional growth',
        'The opportunity to actively contribute to the development of an evolving project',
      ],
      applyTitle: 'Send Your Application',
      applyText: 'If you think you can make a contribution to our project, send us your application to',
      applyEmail: 'info@lab-pro.it',
    },
    contact: {
      title: 'Contact',
      companyName: 'LAB PRO S.r.l.',
      vatLabel: 'VAT Number',
      vatNumber: '13007570016',
      pecLabel: 'PEC',
      pecValue: 'labpro@pec.it',
      addressLabel: 'Operational Headquarters',
      addressValue: 'Via Jonio 5, 10138 – Turin',
      phoneLabel: 'Telephone',
      phoneValue: 'XXXXXXXXXXX',
      hoursLabel: 'Opening Hours',
      hoursValue: 'Monday – Friday: 8:00 – 18:00',
      commercialLabel: 'Commercial Information',
      commercialValue: 'info@lab-pro.it',
      ctaTitle: 'Have questions?',
      ctaText: 'Check our FAQ below or write to us for commercial information and collaborations.',
      faqTitle: 'Frequently Asked Questions',
      faqItems: [
        {
          question: 'What products do you make?',
          answer: 'Lab Pro produces natural bread with sourdough starter, Roman focaccia in pala, Ligurian focaccia, Viennoiserie, biscuits and dry pastries. All our products are made with selected ingredients and artisan craftsmanship.',
        },
        {
          question: 'What is sourdough starter and why do you use it?',
          answer: 'Sourdough starter is a natural culture of yeasts and lactic acid bacteria. At Lab Pro, we use it at 30% in our doughs to ensure greater digestibility, prolonged natural preservation, and a richer, more complex aromatic profile.',
        },
        {
          question: 'Is your bread suitable for those with digestive difficulties?',
          answer: 'Yes, the long fermentation with sourdough starter and other components make Lab Pro bread gentler on the stomach. It also has a lower glycaemic index compared to traditional bread.',
        },
        {
          question: 'How should I store your bread?',
          answer: 'We recommend storing it in breathable paper, in a dry environment. Thanks to the high hydration and sourdough starter, Lab Pro bread maintains softness and freshness for several days.',
        },
        {
          question: 'What is the difference between Roman and Ligurian focaccia?',
          answer: 'Lab Pro\'s Roman focaccia in pala features a crispy base and a light, airy crumb, baked on stone. Ligurian focaccia is lower and softer, with the classic golden surface rich in extra virgin olive oil.',
        },
        {
          question: 'Where can I buy your products?',
          answer: 'Our products are available at the Lab Pro workshop in Turin at Via Jonio 5 (Monday to Friday, 8am to 6pm) and through selected distributors. For commercial information, contact us at info@lab-pro.it.',
        },
        {
          question: 'Do you deliver throughout Italy?',
          answer: 'Yes, we work with distributors across the national territory. For supplies and commercial collaborations, contact us directly to evaluate the solutions best suited to your needs.',
        },
        {
          question: 'Are you open to foreign distributors?',
          answer: 'Absolutely yes. We are actively looking for distributors for foreign markets, particularly the United Kingdom, Poland and Germany. Contact us to discuss collaboration opportunities.',
        },
        {
          question: 'Can I visit your workshop?',
          answer: 'Of course! We are located at Via Jonio 5 in Turin. We recommend contacting us beforehand to schedule an appointment. We are open Monday to Friday, from 8:00 to 18:00.',
        },
        {
          question: 'Are you looking for staff?',
          answer: 'We are always looking for motivated people in both production and commercial areas. Visit the "Work with Us" section or send your application to info@lab-pro.it.',
        },
      ],
    },
    footer: {
      rights: '© 2025 LAB PRO S.r.l. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
    },
    cookies: {
      message: 'We use technical cookies necessary for site operation. No profiling cookies. For more information, see our',
      privacyLink: 'Privacy Policy',
      accept: 'Accept',
      decline: 'Decline',
    },
    seo: {
      siteTitle: 'LAB PRO - Artisan Bakery Products',
      siteDescription: 'Italian company specialising in the production of bread, focaccia and artisan bakery products. Tradition looking to the future.',
    },
  },
};
