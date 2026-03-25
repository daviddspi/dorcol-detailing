export interface Service {
  name: string;
  desc: string;
  longDesc: string;
  duration: string;
  price?: string;
  prices?: number[];
  note?: string;
  targetId?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export interface BusinessConfig {
  name: string;
  logo: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  philosophy: {
    quote: string;
    author: string;
  };
  stats: Array<{ label: string; value: string }>;
  contact: {
    phones: string[];
    emails: string[];
    locations: Array<{ name: string; address: string; mapUrl: string }>;
    workingHours: string;
    social: {
      instagram: string;
    };
  };
  services: Array<{ title: string; description: string; price: string; duration: string; targetId: string }>;
  serviceCategories: ServiceCategory[];
  packages: Array<{
    title: string;
    subtitle: string;
    recommended?: boolean;
    badge?: string;
    items: string[];
    duration: string;
    price?: string;
    prices?: number[];
    currency: string;
  }>;
  reviews: Array<{ name: string; location: string; vehicle: string; service: string; text: string; rating: number }>;
  faqs: Array<{ q: string; a: string }>;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Auto Detailing Dorćol",
  logo: "/logo.svg",
  slug: "dorcol-detailing",
  tagline: "Vrhunski Detailing za Vaš Automobil u Srcu Beograda. DEPLOY TEST",
  shortDescription: "Specijalizovan studio na Dorćolu za kompletnu negu: od premium pranja i dubinskog čišćenja, do poliranja i vrhunske keramičke zaštite.",
  longDescription: "Smešten u Jevrejskoj 12 na Dorćolu, naš studio pruža beskompromisni kvalitet u svetu auto-detailinga. Naš pristup podrazumeva upotrebu najsavremenijih tehnologija i materijala, uz strogu pažnju na svaki milimetar vašeg vozila. Bez obzira na to da li je reč o osvežavanju enterijera ili potpunoj restauraciji sjaja karoserije, garantujemo rezultat koji nadilazi očekivanja.",
  philosophy: {
    quote: "Detailing Dorćol - Transformacija i zaštita vašeg automobila uz vrhunsku pažnju.",
    author: "Tim Auto Detailing Dorćol"
  },
  stats: [
    { label: 'Rating', value: '5.0' },
    { label: 'Reviews', value: '27+' },
    { label: 'Lokacija', value: 'Beograd' },
    { label: 'Iskustvo', value: 'Profesionalno' },
  ],
  contact: {
    phones: ["060 115 13 10"],
    emails: ["detailingdorcol@gmail.com"],
    locations: [
      {
        name: "Auto Detailing Dorćol",
        address: "Jevrejska 12, Beograd",
        mapUrl: "https://www.google.com/maps/place/Auto+Detailing+Dor%C4%87ol+-+Auto+perionica/@44.8264004,20.4573719,800m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475a65d826b1061d:0x2f1c692ae5324e2!8m2!3d44.8264004!4d20.4573719!16s%2Fg%2F11xdrn17y_?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
      }
    ],
    workingHours: "Pon-Pet: 09:00 - 18:00 | Sub: 09:00 - 15:00",
    social: {
      instagram: "https://www.instagram.com/autodetailing__dorcol"
    }
  },
  services: [
    {
      title: 'Standardno Pranje',
      description: 'Premium pranje spolja i unutra uz korišćenje PH neutralnih preparata.',
      price: 'od 2.000 RSD',
      duration: '1-2h',
      targetId: 'cat-pranje'
    },
    {
      title: 'Dubinsko Pranje',
      description: 'Temeljno čišćenje enterijera, sedišta, poda i neba uz dezinfekciju parom.',
      price: 'od 12.000 RSD',
      duration: '1-2 dana',
      targetId: 'cat-dubinsko'
    },
    { 
      title: 'Poliranje i Zaštita', 
      description: 'Korekcija laka u više faza i keramička zaštita za dugotrajan sjaj.',
      price: 'Na upit',
      duration: '2 dana',
      targetId: 'cat-poliranje'
    }
  ],
  serviceCategories: [
    {
      id: "cat-pranje",
      title: "Standardno Pranje",
      services: [
        { 
          name: "Standardno pranje (spolja i unutra)", 
          prices: [2000, 2400, 3000], 
          desc: "Premium pranje vozila sa detaljnim čišćenjem enterijera.",
          longDesc: "Naša usluga standardnog pranja obuhvata detaljno spoljašnje pranje aktivnom penom i PH neutralnim šamponima, sušenje mikro-fiber peškirima, i temeljno unutrašnje čišćenje (usisavanje, brisanje prašine, pranje stakala).",
          duration: "1-2h"
        }
      ]
    },
    {
      id: "cat-dubinsko",
      title: "Dubinsko Pranje",
      services: [
        { 
          name: "Dubinsko pranje (Detailing enterijera)", 
          prices: [12000, 12000, 15000], 
          desc: "Kompletna revitalizacija unutrašnjosti vozila.",
          longDesc: "Usluga obuhvata: Premium Wash uslugu, vađenje sedišta van automobila, dubinsko pranje sedišta, patosa i patosnica, dubinsko pranje gepeka, detailing instrument table, suvo pranje neba, dezinfekciju ventilacije parom i mašinsko sušenje vozila.",
          duration: "1-2 dana",
          note: "Cena: Manji auto 80€, Limuzina 100€, SUV/Džip 130€"
        }
      ]
    },
    {
      id: "cat-poliranje",
      title: "Poliranje i Zaštita",
      services: [
        { 
          name: "Poliranje i keramička zaštita", 
          prices: [0, 0, 0], 
          desc: "Korekcija laka i dugotrajna zaštita (Kontakt za cenu).",
          longDesc: "Proces uključuje: Premium Wash spolja, dekontaminaciju laka, poliranje u 3 faze (lak, hromirani delovi, farovi, auspuh izduv) i nanošenje keramičke zaštite (lak, stakla, farovi).",
          duration: "2 dana"
        }
      ]
    }
  ],
  packages: [
    {
      title: "Standardno Pranje",
      subtitle: "Osvežavanje vozila",
      items: [
        "Pranje spolja i unutra",
        "PH neutralni šamponi",
        "Sušenje mikro-fiberom",
        "Detaljno usisavanje",
        "Pranje stakala"
      ],
      duration: "1-2h",
      prices: [2000, 2400, 3000],
      currency: "RSD"
    },
    {
      title: "Dubinsko Pranje",
      subtitle: "Enterijer kao nov",
      recommended: true,
      badge: "Najpopularnije",
      items: [
        "Premium wash+",
        "Vađenje sedišta",
        "Dubinsko pranje svih površina",
        "Dezinfekcija ventilacije parom",
        "Mašinsko sušenje"
      ],
      duration: "1-2 dana",
      prices: [12000, 12000, 15000],
      currency: "RSD"
    },
    {
      title: "Ultimate Protection",
      subtitle: "Vrhunski sjaj i zaštita",
      badge: "Premium",
      items: [
        "Dekontaminacija laka",
        "Poliranje u 3 faze",
        "Keramička zaštita laka",
        "Keramička zaštita stakala",
        "Zaštita farova"
      ],
      duration: "2 dana",
      price: "Upit",
      currency: ""
    }
  ],
  reviews: [
    { 
      name: 'Nemanja Arsić', 
      location: 'Beograd', 
      vehicle: 'Audi A6',
      service: 'Poliranje i keramika',
      text: 'Vrhunska usluga i posvećenost detaljima. Auto je bukvalno kao nov, keramička zaštita je odrađena perfektno. Sve preporuke za momke!', 
      rating: 5 
    },
    { 
      name: 'Neighbors Logistics', 
      location: 'Beograd', 
      vehicle: 'Business Fleet',
      service: 'Dubinsko pranje',
      text: 'Odvezao sam auto na kompletan servis za enterijer i potpuno su nadmasili moja ocekivanja. Kozna sedista su bila izlizana i izmrljana od godina koriscenja, ali su ih vratili u stanje kao nova.', 
      rating: 5 
    },
    { 
      name: 'Milosavljevic Mateja', 
      location: 'Beograd', 
      vehicle: 'Personal Car',
      service: 'Kompletan servis',
      text: 'Odlična usluga, moj auto je kao nov, ljubazan i fin momak, sve preporuke', 
      rating: 5 
    },
  ],
  faqs: [
    {
      q: 'Da li je potrebno zakazivanje?',
      a: 'Da, zbog velikog interesovanja i posvećenosti svakom vozilu, zakazivanje je obavezno.',
    },
    {
      q: 'Koliko traje dubinsko pranje?',
      a: 'Proces obično traje 1-2 dana u zavisnosti od stepena zaprljanosti i potrebnog vremena za sušenje.',
    },
    {
      q: 'Gde se nalazite?',
      a: 'Nalazimo se u srcu Dorćola, na adresi Jevrejska 12, Beograd.',
    },
    {
      q: 'Koje preparate koristite?',
      a: 'Koristimo isključivo PH neutralne i profesionalne preparate vodećih svetskih proizvođača.',
    },
  ]
};
