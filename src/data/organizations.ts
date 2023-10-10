/*
* DATA SCRAPPED FROM
* https://rekrutacjasspwr.glide.page/
* FOR EDUCATIONAL PURPOSES
*
* TEXT FOUND IN THIS FILE WAS NOT WRITTEN BY ME
* */

export interface Organization {
  name: string,
  description: string,
  longDescription: string | string[]
  bgStyle: string,
  slug: string
}

const organizations: Organization[] = [
  {
    name: "Komisja ds. Aktywności Studenckiej",
    description: "Działaj z Nami aktywnie!",
    longDescription: [
      "Studia to nie tylko nauka, ale też okazja do aktywnego działania na uczelni. Komisja ds. Aktywności Studenckiej promuje dodatkowe aktywności. Zajmujemy się organizacją Dni Aktywności Studenckiej - największego święta aktywnych studentów.  Wspieramy wszystkie dodatkowe aktywności!",
      "Chciałbyś mieć stały kontakt z przedstawicielami Kół Naukowych, Agend Kultury i organizacji studenckich? A może chciałbyś rozpowszechniać i brać udział w szkoleniach i programach wsparcia dla aktywnych studentów? Szukamy ludzi którzy nie lubią nudy i chcą działać!",
      "Szukamy właśnie Ciebie! 🔍"
    ],
    bgStyle: "/komisja-ds-aktywnosci.webp",
    slug: "komisja-aktywnosc"
  },
  {
    name: "Komisja ds. Dydaktyki i Praw Studenta",
    description: "Troszczysz się o wszystkich dookoła i zawsze wyciągasz pomocną dłoń?\n" +
      "Jesteś obrońcą praw innych i dbasz o to, żeby sprawiedliwości stało się zadość?\n" +
      "Chcesz nauczyć się interpretować regulaminy i ustawy? 👩‍⚖️",
    longDescription: "Jeżeli tak, to przestań przewijać w lewo, bo Komisja ds. Dydaktyki i Praw Studenta jest tym, czego szukasz.  Zadbajmy o poziom kształcenia na naszej Uczelni poprzez edukację studentów na temat ich praw oraz pracę przy nowelizacji m.in Regulaminu Studiów. Pomóżmy każdemu potrzebującemu i zbudujmy wspólnie świat w którym wszyscy będą wiedzieć, że student swoje prawa ma!",
    bgStyle: "/komisja-ds-dydaktyki.webp",
    slug: "komisja-dydaktyki"
  },
  {
    name: "Komisja  ds. Kultury i Projektów",
    description: "Chciałbyś zorganizować własne wydarzenie, które zachwyci wszystkich studentów? Pomożemy Ci w tym! 🥳",
    longDescription: [
      "Komisja ds. Kultury i Projektów jest miejscem, w którym powstają największe projekty studenckie, a pomysły na życie kulturalne studentów nabierają nowego znaczenia.  Członkowie komisji mają możliwość poznać tajniki organizacji takich wydarzeń jak bale, prelekcje, gry terenowe i mogą realizować swoje własne pomysły na wydarzenia! Naszym celem jest tworzenie wszystkiego, co zapewni pozytywne wspomnienia wszystkim studentom Politechniki.",
      "Poszukujemy osób chcących poszerzać swoje umiejętności w zakresie team buildingu, liderstwa, zarządzania czasem, planowania i delegacji zadań, ale przede wszystkim osób zaangażowanych i otwartych na działania!  Czy to właśnie Ty? 🤔"
    ],
    bgStyle: "/komisja-ds-kultury.webp",
    slug: "komisja-kultury"
  },
  {
    name: "Komisja ds. Organizacji",
    description: "Z nami możesz zdobyć wiedzę z zakresu liderstwa, zarządzania czasem i zespołem. Jeśli jesteś osobą otwartą na nowe zadania, zorganizowaną i komunikatywną to idealne miejsce na Ciebie. ",
    longDescription: [
      "Znajomi mówią o Tobie, że masz żyłkę organizatora?  Dobrze trafiłeś!  Tworzymy projekty takie jak 4S Leaders Camp, POLIgon wyjazdowy, Rejs Samorządowca, Szef&Adapciak czy Śniadanie z Rektorem. To właśnie członkowie Komisji ds. Organizacji są specjalistami od zarządzania czasem, projektami, a kwestie logistyki są dla nich jak bułka z masłem. 🍞Nie straszne im projekty wyjazdowe, a tym bardziej te stacjonarne - niczego się nie boją! 🦸‍♂️",
      "Czekamy na Twoje zgłoszenie!"
    ],
    bgStyle: "/komisja-ds-organizacji.webp",
    slug: "komisja-organizacji"
  },
  {
    name: "Komisja ds. Promocji",
    description: "Jesteśmy na każdym wydarzeniu, gdzie i Ciebie nie może zabraknąć i to właśnie my zajmujemy się oprawą graficzną i tekstową tych większych i tych mniejszych studenckich imprez, wyjazdów i wydarzeń. 🎉",
    longDescription: [
      "Lubisz spędzać czas na przeglądaniu social mediów, a viralowe piosenki grają Ci w duszy? Instagram nie ma przed Tobą żadnych tajemnic, a Facebooka obsłużysz nawet z zamkniętymi oczami? 👀 A może chcesz polepszyć umiejętności fotograficzne i filmowe? Czekamy na Ciebie!",
      "U naszego boku rozwiniesz swoje graficzne umiejętności, poznasz tajniki copywritingu, a co najważniejsze - spotkasz fantastycznych ludzi! Nic się nie martw, wszystkiego Cię nauczymy. Z nami żaden program graficzny nie będzie Ci straszny! Przesuń w prawo i dołącz do nas!"
    ],
    bgStyle: "/komisja-ds-promocji.webp",
    slug: "komisja-promocji"
  },
  {
    name: "Komisja ds. Socjalno-Społecznych",
    description: "Empatyczny - to słowo, którym można najlepiej Cię opisać?",
    longDescription: [
      "Komisja ds. Socjalno - Społecznych zajmuje się wszelkimi sprawami związanymi z  pomocą socjalną, akademikami oraz akcjami charytatywnymi. Z nami zdobędziesz wiedzę o rodzajach świadczeń przyznawanych studentom, zyskasz doświadczenie w organizacji wydarzeń, nauczysz się jak wspólnie działać i pracować w grupie. Wystarczy, że masz wielkie serce i lubisz pomagać, a do tego chcesz działać i podejmować wyzwania. 💗",
      "Nie czekaj, wypełnij formularz, bo my czekamy na Ciebie!"
    ],
    bgStyle: "/komisja-ds-socjalnych.webp",
    slug: "komisja-socjalnych"
  },
  {
    name: "Komisja ds. Współpracy Zewnętrznej",
    description: "Z nami nauczysz się jak tworzyć oferty partnerskie, jak zachować się na rozmowie o współpracę, jak wspierać projekty pod względem sponsorów i wiele więcej!",
    longDescription: [
      "Uwielbiasz pracę z ludźmi? Masz dar przekonywania że żaden rozmówca nie jest w stanie Ci odmówić? Chcesz nawiązywać kontakty z największymi firmami we Wrocławiu? Jeśli na wszystkie pytania odpowiedział*ś TAK! (A mogę się założyć że tak właśnie jest 😎) to Komisja ds. Współpracy Zewnętrznej to miejsce stworzone dla Ciebie!",
      "Nie zastanawiaj się długo!"
    ],
    bgStyle: "/komisja-ds-wspolpracy.webp",
    slug: "komisja-ds-wspolpracy"
  },
  {
    name: "Sekcja ds. Informatyzacji",
    description: "Jesteś pasjonatem technologii? My też! 👨‍💻",
    longDescription: ["Sekcja ds. Informatyzacji zajmuje się tworzeniem oprogramowania, szkoleniami i zarządzaniem infrastrukturą informatyczną. Nasze zadania obejmują zarządzanie domenami, aktualizowanie treści na stronie, zarządzanie skrzynkami pocztowymi oraz tworzenie nowych rozwiązań technologicznych. Nowy rekrut może nauczyć się od nas wielu praktycznych umiejętności, takich jak programowanie w React i Next, projektowanie interfejsów użytkownika z Chakra UI, zarządzanie kontenerami za pomocą Docker Compose oraz administracja systemami za pomocą Proxmox.  Jeżeli jesteś osobą, która, chce rozwijać swoje umiejętności programistyczne i technologiczne, ceni sobie pracę w zespole pełnym pasjonatów, chce zdobywać doświadczenie, pracując nad rzeczywistymi projektami i chce przyczynić się do rozwoju społeczności studenckiej. To Informatyzacja jest miejscem dla Ciebie! 💻",
      "Dołącz do nas i zyskaj możliwość pracy z najnowszymi technologiami, zdobądź cenne doświadczenie i rozwiń swoje umiejętności. Przyjdź i zobacz, jak możemy razem tworzyć rozwiązania, które naprawdę mają znaczenie!"],
    bgStyle: "/sekcja-informatyzacji.webp",
    slug: "sekcja-informatyzacji"
  },
  {
    name: "Sekcja ds. Sportu i Turystyki",
    description: "Lubisz aktywnie spędzać czas? Nie kręci Cię siedzenie w domu na tyłku? Masz swoją zajawkę sportową i uważasz, że każdy powinien jej spróbować? To bardzo dobrze trafiłeś! Sekcja ds. Sportu i Turystyki to właśnie miejsce dla ciebie. 🏔️",
    longDescription: [
      "Z nami dowiesz się od A do Z jak stworzyć udane wydarzenia sportowe i turystyczne, jak współpracować z ważnymi organami uczelnianymi i zewnętrznymi oraz jak dbać o zdrowie przede wszystkim swoje jak i innych. Razem wspomożemy rozwój twoich pasji. W otwartej atmosferze na wszystkie pomysły tworzymy najlepsze plany ich realizacji. Przyczyniamy się tym do wzrostu sprawności fizycznej wszystkich studentów.Masz jeszcze jakieś wątpliwości?",
      "W zdrowym ciele, zdrowy duch! Nie pozwolimy na to, żeby zdrowa aura opuszczała cię wśród nas. Twórz wspaniałe ligi, wydarzenia i obozy! Wkrocz do krainy Sekcji Sportu już dziś! 🤸‍♂️"
    ],
    bgStyle: "/sekcja-sportu.webp",
    slug: "sekcja-sportu"
  },
  {
    name: "Sekcja ds. Zrównoważonego Rozwoju",
    description: "Temat ochrony środowiska i zmian klimatycznych nie powinien być obcy żadnemu człowiekowi. 🍃",
    longDescription: [
      "Jako Sekcja ds. Zrównoważonego rozwoju, koncentrujemy się na podnoszeniu świadomości w kwestiach ochrony środowiska wśród społeczności studenckiej, promujemy działania ekologiczne.  Współpracujemy ściśle z instytucją uczelni w celu wspierania projektów związanych z dostępnością i wprowadzania praktyk dążących do stworzenia ekologicznej przestrzeni sprzyjającej społeczności akademickiej.",
      "Działalność w sekcji umożliwi Ci pogłębienie wiedzy na temat zrównoważonego rozwoju, ochrony środowiska, adaptacji do zmian klimatu i celów Agendy 2030 ONZ. Będziesz uczestniczył w inicjatywach społecznych i projektach związanych z ekologią i równością rozwijając umiejętności organizacyjne i projektowe. Będziesz uczestniczył w kampaniach edukacyjnych, gdzie poszerzysz swoją wiedzę i rozwiniesz myślenie analityczne.  Poszukujemy osób kreatywnych i mających innowacyjne pomysły, osób wykazujących zainteresowanie problematyką ochrony środowiska, zmianami klimatycznymi, efektywnością energetyczną. Jeżeli przyszłość naszego świata nie jest ci obojętna, dołącz do nas! 💚🌱"
    ],
    bgStyle: "/sekcja-rozwoju.webp",
    slug: "sekcja-rozwoju"
  }
];

export default organizations;