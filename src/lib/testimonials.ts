import type { Locale } from "@/lib/i18n";

export interface TestimonialReview {
  title: string;
  author: string;
  message: string;
}

export const SUPPORTED_TESTIMONIAL_LOCALES = [
  "ca",
  "de",
  "en",
  "fr",
  "it",
  "sv",
  "zh-Hans",
] as const;

export type SupportedTestimonialLocale =
  (typeof SUPPORTED_TESTIMONIAL_LOCALES)[number];

interface TestimonialsContent {
  sectionTitle: string;
  reviews: TestimonialReview[];
}

const TESTIMONIALS_BY_LOCALE: Record<
  SupportedTestimonialLocale,
  TestimonialsContent
> = {
  ca: {
    sectionTitle: "Això diuen els usuaris",
    reviews: [
      {
        title: "Totalment recomanable",
        author: "Mstein182",
        message:
          "La meva conclusió: totalment recomanable. El que més m'agrada és la vibració al canell de l'Apple Watch, que t'avisa quan has de començar i quan cal canviar de direcció.",
      },
      {
        title: "Genial",
        author: "Da.niel001",
        message:
          "Disseny molt guai, fàcil d'usar i sense anuncis pesats 👍",
      },
      {
        title: "Per fi una app per al meu entrenament",
        author: "Kehri 89",
        message:
          "Super app per al meu entrenament, no he trobat res millor fins ara.",
      },
      {
        title: "Molt bé",
        author: "HSIgk",
        message:
          "L'app és el complement perfecte per al Kieser Training amb l'Apple Watch! L'exportació dels exercicis també funciona de meravella.",
      },
      {
        title: "App top per entrenar amb bon suport",
        author: "TestSchreiber987",
        message:
          "Estic molt content en general. Sobretot amb l'Apple Watch, és super intuïtiva d'utilitzar. Crec que l'app fa que entrenar sigui molt més fàcil!",
      },
    ],
  },
  de: {
    sectionTitle: "Das sagen Nutzer:innen",
    reviews: [
      {
        title: "Absolut empfehlenswert",
        author: "Mstein182",
        message:
          "Mein Fazit: absolut empfehlenswert. Ganz besonders angenehm finde ich die Vibration am Handgelenk der Apple Watch, die signalisiert, wann es los geht und wann die Richtung geändert werden muss.",
      },
      {
        title: "Top",
        author: "Da.niel001",
        message:
          "Cooles Design, einfach zu bedienen und keine nervigen Werbeunterbrechungen 👍",
      },
      {
        title: "Endlich eine App für mein Training",
        author: "Kehri 89",
        message:
          "Super App für mein Training, bisher nichts besseres gefunden.",
      },
      {
        title: "Sehr gut",
        author: "HSIgk",
        message:
          "Die App ist die optimale Ergänzung zum Kieser Training mit der Apple Watch! Der Export der Übungen klappt auch super.",
      },
      {
        title: "Top App zum trainieren mit gutem Support",
        author: "TestSchreiber987",
        message:
          "Bin insgesamt sehr zufrieden. Gerade in Kombination mit der Apple Watch sehr intuitive Bedienung. Ich finde, die App erleichtert das Training!",
      },
    ],
  },
  en: {
    sectionTitle: "What users say",
    reviews: [
      {
        title: "Totally recommend it",
        author: "Mstein182",
        message:
          "My conclusion: totally recommend it. I especially love the vibration on the Apple Watch that lets you know when to start and when to switch directions.",
      },
      {
        title: "Awesome",
        author: "Da.niel001",
        message:
          "Cool design, super easy to use, and no annoying ads 👍",
      },
      {
        title: "Finally, an app for my training",
        author: "Kehri 89",
        message:
          "Great app for my workouts, haven't found anything better so far.",
      },
      {
        title: "Really good",
        author: "HSIgk",
        message:
          "The app is the perfect addition to Kieser Training with the Apple Watch! Exporting workouts works great too.",
      },
      {
        title: "Awesome app for working out with great support",
        author: "TestSchreiber987",
        message:
          "I'm really happy overall. Especially with the Apple Watch, it's super easy to use. I think the app really makes training easier!",
      },
    ],
  },
  fr: {
    sectionTitle: "Ce qu'en disent les utilisateurs",
    reviews: [
      {
        title: "Je recommande à 100%",
        author: "Mstein182",
        message:
          "Mon avis : je recommande à fond. Ce que j'aime vraiment, c'est la vibration sur le poignet de l'Apple Watch qui te dit quand commencer et quand changer de direction.",
      },
      {
        title: "Au top",
        author: "Da.niel001",
        message:
          "Design cool, super facile à utiliser et pas de pubs chiantes 👍",
      },
      {
        title: "Enfin une appli pour mon entraînement",
        author: "Kehri 89",
        message:
          "Super appli pour mon entraînement, j'ai rien trouvé de mieux jusqu'à présent.",
      },
      {
        title: "Vraiment top",
        author: "HSIgk",
        message:
          "L'app est le complément parfait au Kieser Training avec l'Apple Watch ! L'export des exercices marche aussi super bien.",
      },
      {
        title: "Super appli pour s'entraîner avec un bon support",
        author: "TestSchreiber987",
        message:
          "Je suis super content dans l'ensemble. Surtout avec l'Apple Watch, c'est super intuitif à utiliser. Franchement, l'app rend l'entraînement beaucoup plus simple !",
      },
    ],
  },
  it: {
    sectionTitle: "Cosa dicono gli utenti",
    reviews: [
      {
        title: "La consiglio assolutamente!",
        author: "Mstein182",
        message:
          "Il mio verdetto: assolutamente consigliata. Trovo super comoda la vibrazione al polso dell'Apple Watch che ti avvisa quando iniziare e quando cambiare direzione.",
      },
      {
        title: "Top!",
        author: "Da.niel001",
        message:
          "Design super figo, facilissima da usare e niente pubblicità fastidiose 👍",
      },
      {
        title: "Finalmente un'app per il mio allenamento!",
        author: "Kehri 89",
        message:
          "App fantastica per il mio allenamento, non ho trovato niente di meglio finora.",
      },
      {
        title: "Molto buona",
        author: "HSIgk",
        message:
          "L'app è il complemento perfetto per il Kieser Training con l'Apple Watch! Anche l'esportazione degli esercizi funziona alla grande.",
      },
      {
        title: "App top per allenarsi, con un supporto davvero buono",
        author: "TestSchreiber987",
        message:
          "Sono davvero molto soddisfatto. Soprattutto insieme all'Apple Watch, è super intuitiva da usare. Secondo me, l'app rende l'allenamento molto più semplice!",
      },
    ],
  },
  sv: {
    sectionTitle: "Vad användare säger",
    reviews: [
      {
        title: "Helt klart att rekommendera",
        author: "Mstein182",
        message:
          "Mitt omdöme: helt klart rekommenderas. Jag gillar verkligen vibrationerna på handleden från Apple Watch som säger till när det är dags att köra igång och när man ska byta riktning.",
      },
      {
        title: "Toppen",
        author: "Da.niel001",
        message:
          "Snygg design, superenkel att använda och inga störiga reklamavbrott 👍",
      },
      {
        title: "Äntligen en app för min träning",
        author: "Kehri 89",
        message:
          "Superbra app för min träning, har inte hittat något bättre hittills.",
      },
      {
        title: "Riktigt bra",
        author: "HSIgk",
        message:
          "Appen är det perfekta komplementet till Kieser Training med Apple Watch! Exporten av övningarna funkar också hur bra som helst.",
      },
      {
        title: "Toppenapp för träning med grym support",
        author: "TestSchreiber987",
        message:
          "Jag är riktigt nöjd totalt sett. Speciellt ihop med Apple Watch är det superenkelt att använda. Tycker appen gör träningen mycket smidigare!",
      },
    ],
  },
  "zh-Hans": {
    sectionTitle: "用户评价",
    reviews: [
      {
        title: "真的很推荐！",
        author: "Mstein182",
        message:
          "我的结论：真的很推荐！我特别喜欢Apple Watch手腕上的震动提醒，能告诉我什么时候开始、什么时候要换方向，超贴心。",
      },
      {
        title: "超棒",
        author: "Da.niel001",
        message: "设计很酷，操作简单，还没有烦人的广告打扰，赞👍",
      },
      {
        title: "终于有一款适合我训练的 App 了",
        author: "Kehri 89",
        message: "超级适合我训练的App，到现在还没找到比它更好的。",
      },
      {
        title: "非常棒！",
        author: "HSIgk",
        message:
          "这个 App 搭配 Apple Watch 简直是 Kieser Training 的最佳搭档！导出训练内容也很顺利。",
      },
      {
        title: "很棒的App，训练起来超方便，客服也很给力！",
        author: "TestSchreiber987",
        message:
          "我整体上很满意，特别是和 Apple Watch 搭配用起来超级直观。感觉这个 App 真的让训练变轻松了！",
      },
    ],
  },
};

export function getTestimonials(locale: Locale = "de") {
  return TESTIMONIALS_BY_LOCALE[locale];
}
