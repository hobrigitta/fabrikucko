import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Camera,
  CreditCard,
  Minus,
  Menu,
  MapPin,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
  Truck,
  X,
} from 'lucide-react'
import './styles.css'

const workshops = [
  { date: '14', key: 'wreath', art: 'wreath' },
]

const products = [
  { key: 'paper', art: 'paper' },
  { key: 'stamp', art: 'stamp' },
  { key: 'brush', art: 'brush' },
]

const productCatalog = {
  paper: { price: 3490 },
  stamp: { price: 5990 },
  brush: { price: 4290 },
}

const languageOptions = [
  ['hu', 'Magyar', '🇭🇺'], ['at', 'Österreich', '🇦🇹'], ['de', 'Deutsch', '🇩🇪'], ['en', 'English', '🇬🇧'],
  ['sk', 'Slovenčina', '🇸🇰'], ['cs', 'Čeština', '🇨🇿'], ['uk', 'Українська', '🇺🇦'], ['ro', 'Română', '🇷🇴'], ['sr', 'Srpski', '🇷🇸'], ['hr', 'Hrvatski', '🇭🇷'], ['sl', 'Slovenščina', '🇸🇮'], ['el', 'Ελληνικά', '🇬🇷'],
  ['nl', 'Nederlands', '🇳🇱'], ['fr', 'Français', '🇫🇷'], ['es', 'Español', '🇪🇸'], ['pt', 'Português', '🇵🇹'], ['no', 'Norsk', '🇳🇴'], ['sv', 'Svenska', '🇸🇪'],
  ['da', 'Dansk', '🇩🇰'], ['fi', 'Suomi', '🇫🇮'], ['is', 'Íslenska', '🇮🇸'], ['ga', 'Gaeilge', '🇮🇪']
]
const commerceCopy = {
  hu: { cart: 'Kosár', empty: 'A kosarad még üres.', subtotal: 'Részösszeg', shipping: 'Szállítás', total: 'Végösszeg', checkout: 'Tovább a pénztárhoz', continue: 'Vásárlás folytatása', foxpost: 'Foxpost automata', gls: 'GLS házhozszállítás', transfer: 'Banki átutalás', transferNote: 'A rendelés leadása után elküldjük az átutalási adatokat.', order: 'Rendelés leadása', details: 'Szállítási adatok', name: 'Név', email: 'Email cím', phone: 'Telefonszám', address: 'Szállítási cím', locker: 'Automata / cím', note: 'Megjegyzés', close: 'Bezárás', success: 'Köszönjük a rendelésed! Hamarosan küldjük az átutalási adatokat.', processing: 'A rendelés elküldése jelenleg bemutató módban működik.' },
  de: { cart: 'Warenkorb', empty: 'Dein Warenkorb ist leer.', subtotal: 'Zwischensumme', shipping: 'Versand', total: 'Gesamt', checkout: 'Zur Kasse', continue: 'Weiter einkaufen', foxpost: 'Foxpost Paketstation', gls: 'GLS Lieferung', transfer: 'Banküberweisung', transferNote: 'Nach der Bestellung senden wir dir die Überweisungsdaten.', order: 'Bestellung absenden', details: 'Versanddaten', name: 'Name', email: 'E-Mail', phone: 'Telefon', address: 'Lieferadresse', locker: 'Station / Adresse', note: 'Notiz', close: 'Schließen', success: 'Danke für deine Bestellung! Die Überweisungsdaten folgen bald.', processing: 'Die Bestellung läuft derzeit im Demo-Modus.' },
  en: { cart: 'Cart', empty: 'Your cart is empty.', subtotal: 'Subtotal', shipping: 'Shipping', total: 'Total', checkout: 'Checkout', continue: 'Continue shopping', foxpost: 'Foxpost parcel locker', gls: 'GLS delivery', transfer: 'Bank transfer', transferNote: 'We will send bank details after your order is submitted.', order: 'Place order', details: 'Shipping details', name: 'Name', email: 'Email', phone: 'Phone', address: 'Shipping address', locker: 'Locker / address', note: 'Order note', close: 'Close', success: 'Thank you for your order! Bank details will follow shortly.', processing: 'Orders currently run in demo mode.' },
}

const translations = {
  hu: {
    studio: 'kreatív műhely', nav: ['Workshopok', 'Webshop', 'Rólunk', 'Kapcsolat'], language: 'Nyelv választása', social: 'Közösségi oldalak', cart: 'Kosár', emptyCart: 'A kosarad még üres', items: 'termék',
    heroEyebrow: 'alkoss valami maradandót', heroTitle: <>Ahol a kezed<br /><em>mesélni kezd.</em></>, heroText: 'Kreatív workshopok, különleges alapanyagok és egy kis hely, ahol jólesik lelassulni.', workshopsButton: 'Megnézem a workshopokat', shopButton: 'Felfedezem a webshopot', makers: 'alkotó már velünk tart', crafted: <>szeretettel<br />készítve</>, slow: <>slow craft<br /><b>♡</b></>,
    next: 'következő alkalom', workshopTitle: 'Őszi dísz készítése', allWorkshops: 'Workshop részletei', join: 'Jelentkezés', saturday: 'szombat', illustration: 'A kép illusztráció · hasonló kisautó készülhet', months: ['SZEPT'], workshops: { wreath: { title: 'Őszi dísz készítése', detail: 'természetes anyagok · 5–6 óra', price: '20 000 Ft' }, clay: { title: 'Agyagozás kezdőknek', detail: 'korongozás · 2,5 óra', price: '16 500 Ft' }, print: { title: 'Linómetszet & nyomatok', detail: 'grafika · 3 óra', price: '13 900 Ft' } },
    favorites: 'a műhely kedvencei', shopTitle: 'Vidd haza az alkotás örömét', goShop: 'Irány a webshop', products: { paper: { name: 'Kreatív levélpapír szett', price: '3 490 Ft', type: 'papíráru' }, stamp: { name: 'Mini pecsétkészlet', price: '5 990 Ft', type: 'alkotócsomag' }, brush: { name: 'Fabrikuckó ecsetcsomag', price: '4 290 Ft', type: 'eszközök' } }, add: 'kosárba',
    storyEyebrow: 'egy kis kuckó története', storyTitle: 'Nem kell tökéletesnek lennie.', storyText: 'A Fabrikuckó azért született, hogy legyen egy hely, ahol az alkotás nem teljesítmény, hanem feltöltődés. Ahol belefér a félresikerült forma, a festékes kéz és az, hogy közben nagyokat beszélgetünk.', storyButton: 'Ismerj meg minket', storyStamp: 'kézzel · szívvel · neked', newsletterEyebrow: 'maradjunk kapcsolatban', newsletterTitle: 'Jó dolgok készülnek.', newsletterText: 'Havi egyszer küldünk egy kis inspirációt, új workshopokat és műhelyhíreket.', email: 'a te email címed', subscribe: 'Feliratkozom', subscribed: 'Köszönjük, feliratkoztál!', footer: 'alkoss · kapcsolódj · lassulj', added: 'bekerült a kosárba'
  },
  de: {
    studio: 'kreative Werkstatt', nav: ['Workshops', 'Shop', 'Über uns', 'Kontakt'], language: 'Sprache wählen', social: 'Social Media', cart: 'Warenkorb', emptyCart: 'Dein Warenkorb ist noch leer', items: 'Artikel',
    heroEyebrow: 'erschaffe etwas Bleibendes', heroTitle: <>Wo deine Hände<br /><em>zu erzählen beginnen.</em></>, heroText: 'Kreative Workshops, besondere Materialien und ein kleiner Ort zum Innehalten.', workshopsButton: 'Workshops ansehen', shopButton: 'Zum Webshop', makers: 'Kreative sind schon dabei', crafted: <>mit Liebe<br />gemacht</>, slow: <>slow craft<br /><b>♡</b></>,
    next: 'kommender Termin', workshopTitle: 'Herbstdekoration gestalten', allWorkshops: 'Workshop-Details', join: 'Anmeldung', saturday: 'Samstag', illustration: 'Illustration · ein ähnliches Auto kann entstehen', months: ['SEP'], workshops: { wreath: { title: 'Herbstdekoration gestalten', detail: 'Naturmaterialien · 5–6 Stunden', price: '20.000 Ft' }, clay: { title: 'Töpfern für Anfänger', detail: 'Töpferscheibe · 2,5 Stunden', price: '16,500 Ft' }, print: { title: 'Linolschnitt & Drucke', detail: 'Grafik · 3 Stunden', price: '13,900 Ft' } },
    favorites: 'Lieblinge aus der Werkstatt', shopTitle: 'Nimm die Freude am Machen mit', goShop: 'Zum Webshop', products: { paper: { name: 'Kreatives Briefpapier-Set', price: '3,490 Ft', type: 'Papierwaren' }, stamp: { name: 'Mini-Stempelset', price: '5,990 Ft', type: 'Kreativset' }, brush: { name: 'Fabrikuckó Pinselset', price: '4,290 Ft', type: 'Werkzeuge' } }, add: 'in den Warenkorb',
    storyEyebrow: 'die Geschichte einer kleinen Werkstatt', storyTitle: 'Es muss nicht perfekt sein.', storyText: 'Fabrikuckó ist ein Ort, an dem Kreativität keine Leistung, sondern Erholung ist. Wo misslungene Formen, farbige Hände und gute Gespräche ihren Platz haben.', storyButton: 'Lerne uns kennen', storyStamp: 'mit Händen · mit Herz · für dich', newsletterEyebrow: 'in Kontakt bleiben', newsletterTitle: 'Gute Dinge entstehen.', newsletterText: 'Einmal im Monat senden wir Inspiration, neue Workshops und Neuigkeiten aus der Werkstatt.', email: 'deine E-Mail-Adresse', subscribe: 'Anmelden', subscribed: 'Danke für deine Anmeldung!', footer: 'machen · verbinden · entschleunigen', added: 'wurde in den Warenkorb gelegt'
  },
  en: {
    studio: 'creative studio', nav: ['Workshops', 'Shop', 'About us', 'Contact'], language: 'Choose language', social: 'Social media', cart: 'Cart', emptyCart: 'Your cart is empty', items: 'items',
    heroEyebrow: 'make something lasting', heroTitle: <>Where your hands<br /><em>begin to tell a story.</em></>, heroText: 'Creative workshops, beautiful materials and a little place to slow down.', workshopsButton: 'Explore workshops', shopButton: 'Discover the shop', makers: 'makers already join us', crafted: <>made<br />with care</>, slow: <>slow craft<br /><b>♡</b></>,
    next: 'upcoming session', workshopTitle: 'Make an autumn decoration', allWorkshops: 'Workshop details', join: 'Book', saturday: 'Saturday', illustration: 'Illustration · a similar car may be created', months: ['SEP'], workshops: { wreath: { title: 'Make an autumn decoration', detail: 'natural materials · 5–6 hours', price: '20,000 Ft' }, clay: { title: 'Pottery for beginners', detail: 'wheel throwing · 2.5 hours', price: '16,500 Ft' }, print: { title: 'Linocut & prints', detail: 'printmaking · 3 hours', price: '13,900 Ft' } },
    favorites: 'studio favourites', shopTitle: 'Take the joy of making home', goShop: 'Go to the shop', products: { paper: { name: 'Creative letter set', price: '3,490 Ft', type: 'paper goods' }, stamp: { name: 'Mini stamp set', price: '5,990 Ft', type: 'maker kit' }, brush: { name: 'Fabrikuckó brush set', price: '4,290 Ft', type: 'tools' } }, add: 'add to cart',
    storyEyebrow: 'the story of a little studio', storyTitle: 'It does not have to be perfect.', storyText: 'Fabrikuckó was born as a place where making is not performance, but restoration. A place for imperfect shapes, paint-stained hands and long conversations.', storyButton: 'Meet the makers', storyStamp: 'by hand · with heart · for you', newsletterEyebrow: 'stay in touch', newsletterTitle: 'Good things are brewing.', newsletterText: 'Once a month we send a little inspiration, new workshops and studio news.', email: 'your email address', subscribe: 'Subscribe', subscribed: 'Thanks for subscribing!', footer: 'make · connect · slow down', added: 'was added to your cart'
  }
}

translations.mt = {
  ...translations.en,
  studio: 'studjo kreattiv',
  nav: ['Workshops', 'Ħanut', 'Dwarna', 'Kuntatt'],
  language: 'Agħżel il-lingwa',
  heroEyebrow: 'oħloq xi ħaġa li tibqa’',
  heroTitle: <>Fejn idejk<br /><em>jibdew jirrakkuntaw.</em></>,
  heroText: 'Workshops kreattivi, materjali sbieħ u post żgħir fejn tnaqqas ir-ritmu.',
  workshopsButton: 'Ara l-workshops',
  shopButton: 'Skopri l-ħanut',
  makers: 'kreatur diġà magħna',
  next: 'sessjoni li jmiss',
  workshopTitle: 'Niltaqgħu fil-workshop',
  allWorkshops: 'Dettalji tal-workshop',
  join: 'Irreġistra',
  saturday: 'is-Sibt',
  illustration: 'Illustrazzjoni · tista’ tinħoloq karozza simili',
  months: ['SET'],
  workshops: { ...translations.en.workshops, wreath: { title: 'Oħloq dekorazzjoni tal-ħarifa', detail: 'materjali naturali · 5–6 sigħat', price: '20,000 Ft' } },
  favorites: 'favoriti mill-istudjo',
  shopTitle: 'Ħu d-ferħ tal-ħolqien id-dar',
  goShop: 'Mur fil-ħanut',
  storyEyebrow: 'l-istorja ta’ studjo żgħir',
  storyTitle: 'M’għandux ikun perfett.',
  storyText: 'Fabrikuckó huwa post fejn il-ħolqien iġib mistrieħ, mhux pressjoni.',
  storyButton: 'Sir af aktar',
  newsletterEyebrow: 'ibqa’ f’kuntatt',
  newsletterTitle: 'Affarijiet sbieħ qed jitwieldu.',
  newsletterText: 'Darba fix-xahar nibagħtu ispirazzjoni, workshops u aħbarijiet.',
  email: 'l-indirizz tal-email tiegħek',
  subscribe: 'Abbona',
  subscribed: 'Grazzi talli abbunajt!',
  footer: 'oħloq · qabbad · naqqas ir-ritmu'
}

const moreTranslations = {
  sk: { studio: 'kreatívna dielňa', nav: ['Workshopy', 'Obchod', 'O nás', 'Kontakt'], heroEyebrow: 'vytvor niečo trvalé', heroTitle: 'Tam, kde tvoje ruky začínajú rozprávať príbeh.', heroText: 'Kreatívne workshopy, krásne materiály a miesto na spomalenie.', workshopsButton: 'Pozrieť workshopy', shopButton: 'Objaviť obchod', next: 'nadchádzajúce stretnutie', workshopTitle: 'Stretnime sa v dielni', allWorkshops: 'Detaily workshopu', join: 'Prihlásiť sa', saturday: 'sobota', illustration: 'Ilustrácia · môže vzniknúť podobné auto', workshops: { wreath: { title: 'Vytvorenie jesennej dekorácie', detail: 'prírodné materiály · 5–6 hodín', price: '20 000 Ft' } }, favorites: 'obľúbené z dielne', shopTitle: 'Vezmi si radosť z tvorenia domov', goShop: 'Do obchodu', storyTitle: 'Nemusí to byť dokonalé.', storyText: 'Fabrikuckó je miesto, kde tvorenie prináša oddych.', storyButton: 'Spoznaj nás', newsletterTitle: 'Vznikajú krásne veci.', newsletterText: 'Raz mesačne posielame inšpiráciu, workshopy a novinky.', subscribe: 'Prihlásiť sa', footer: 'tvoriť · spájať · spomaliť' },
  cs: { studio: 'kreativní dílna', nav: ['Workshopy', 'Obchod', 'O nás', 'Kontakt'], heroEyebrow: 'vytvoř něco trvalého', heroTitle: 'Tam, kde tvé ruce začínají vyprávět příběh.', heroText: 'Kreativní workshopy, krásné materiály a místo, kde se dá zpomalit.', workshopsButton: 'Prohlédnout workshopy', shopButton: 'Objevit obchod', next: 'nadcházející setkání', workshopTitle: 'Potkejme se v dílně', allWorkshops: 'Detaily workshopu', join: 'Rezervovat', saturday: 'sobota', illustration: 'Ilustrace · může vzniknout podobné auto', workshops: { wreath: { title: 'Tvorba podzimní dekorace', detail: 'přírodní materiály · 5–6 hodin', price: '20 000 Ft' } }, favorites: 'oblíbené z dílny', shopTitle: 'Vezmi si radost z tvorby domů', goShop: 'Do obchodu', storyTitle: 'Nemusí to být dokonalé.', storyText: 'Fabrikuckó je místo, kde tvorba znamená odpočinek.', storyButton: 'Poznej nás', newsletterTitle: 'Vznikají krásné věci.', newsletterText: 'Jednou měsíčně posíláme inspiraci, workshopy a novinky.', subscribe: 'Přihlásit se', footer: 'tvořit · spojovat · zpomalit' },
  uk: { studio: 'творча майстерня', nav: ['Майстер-класи', 'Крамниця', 'Про нас', 'Контакти'], heroEyebrow: 'створи щось незабутнє', heroTitle: 'Там, де твої руки починають розповідати історію.', heroText: 'Творчі майстер-класи, особливі матеріали та місце для сповільнення.', workshopsButton: 'Переглянути майстер-класи', shopButton: 'Відкрити крамницю', next: 'найближча зустріч', workshopTitle: 'Зустріньмося в майстерні', allWorkshops: 'Деталі майстер-класу', join: 'Зареєструватися', saturday: 'субота', illustration: 'Ілюстрація · може бути створено схожий автомобіль', workshops: { wreath: { title: 'Створення осінньої декорації', detail: 'натуральні матеріали · 5–6 годин', price: '20 000 Ft' } }, favorites: 'улюблене з майстерні', shopTitle: 'Забери радість творчості додому', goShop: 'До крамниці', storyTitle: 'Не обов’язково ідеально.', storyText: 'Fabrikuckó — місце, де творчість приносить відпочинок.', storyButton: 'Познайомитися з нами', newsletterTitle: 'Народжуються красиві речі.', newsletterText: 'Раз на місяць надсилаємо натхнення, майстер-класи та новини.', subscribe: 'Підписатися', footer: 'твори · єднайся · сповільнюйся' },
  ro: { studio: 'atelier creativ', nav: ['Ateliere', 'Magazin', 'Despre noi', 'Contact'], heroEyebrow: 'creează ceva durabil', heroTitle: 'Acolo unde mâinile tale încep să spună o poveste.', heroText: 'Ateliere creative, materiale speciale și un loc unde poți încetini.', workshopsButton: 'Vezi atelierele', shopButton: 'Descoperă magazinul', next: 'următoarea sesiune', workshopTitle: 'Ne vedem în atelier', allWorkshops: 'Detaliile atelierului', join: 'Rezervă', saturday: 'sâmbătă', illustration: 'Ilustrație · poate fi creată o mașinuță similară', workshops: { wreath: { title: 'Creează o decorațiune de toamnă', detail: 'materiale naturale · 5–6 ore', price: '20 000 Ft' } }, favorites: 'preferatele atelierului', shopTitle: 'Ia bucuria creației acasă', goShop: 'Mergi la magazin', storyTitle: 'Nu trebuie să fie perfect.', storyText: 'Fabrikuckó este un loc unde creația aduce odihnă.', storyButton: 'Cunoaște-ne', newsletterTitle: 'Lucruri frumoase prind contur.', newsletterText: 'O dată pe lună trimitem inspirație, ateliere și noutăți.', subscribe: 'Abonează-te', footer: 'creează · conectează · încetinește' },
  hr: { studio: 'kreativni studio', nav: ['Radionice', 'Trgovina', 'O nama', 'Kontakt'], heroEyebrow: 'stvori nešto trajno', heroTitle: 'Tamo gdje tvoje ruke počinju pričati priču.', heroText: 'Kreativne radionice, lijepi materijali i mjesto za usporavanje.', workshopsButton: 'Pogledaj radionice', shopButton: 'Otkrij trgovinu', next: 'sljedeći susret', workshopTitle: 'Vidimo se u studiju', allWorkshops: 'Detalji radionice', join: 'Rezerviraj', saturday: 'subota', illustration: 'Ilustracija · može nastati sličan automobil', workshops: { wreath: { title: 'Izrada jesenske dekoracije', detail: 'prirodni materijali · 5–6 sati', price: '20 000 Ft' } }, favorites: 'omiljeno iz studija', shopTitle: 'Ponesi radost stvaranja kući', goShop: 'Idi u trgovinu', storyTitle: 'Ne mora biti savršeno.', storyText: 'Fabrikuckó je mjesto gdje stvaranje donosi odmor.', storyButton: 'Upoznaj nas', newsletterTitle: 'Lijepe stvari nastaju.', newsletterText: 'Jednom mjesečno šaljemo inspiraciju, radionice i novosti.', subscribe: 'Pretplati se', footer: 'stvaraj · poveži · uspori' },
  sl: { studio: 'ustvarjalni studio', nav: ['Delavnice', 'Trgovina', 'O nas', 'Stik'], heroEyebrow: 'ustvari nekaj trajnega', heroTitle: 'Tam, kjer tvoje roke začnejo pripovedovati zgodbo.', heroText: 'Ustvarjalne delavnice, čudoviti materiali in prostor za upočasnitev.', workshopsButton: 'Poglej delavnice', shopButton: 'Odkrij trgovino', next: 'prihajajoče srečanje', workshopTitle: 'Srečajmo se v studiu', allWorkshops: 'Podrobnosti delavnice', join: 'Prijava', saturday: 'sobota', illustration: 'Ilustracija · nastane lahko podoben avtomobil', workshops: { wreath: { title: 'Izdelava jesenske dekoracije', detail: 'naravni materiali · 5–6 ur', price: '20 000 Ft' } }, favorites: 'najljubše iz studia', shopTitle: 'Odnesi veselje ustvarjanja domov', goShop: 'V trgovino', storyTitle: 'Ni treba, da je popolno.', storyText: 'Fabrikuckó je prostor, kjer ustvarjanje pomeni počitek.', storyButton: 'Spoznaj nas', newsletterTitle: 'Nastajajo lepe stvari.', newsletterText: 'Enkrat na mesec pošljemo navdih, delavnice in novice.', subscribe: 'Naroči se', footer: 'ustvarjaj · poveži se · upočasni' },
  sr: { studio: 'kreativna radionica', nav: ['Radionice', 'Prodavnica', 'O nama', 'Kontakt'], heroEyebrow: 'napravi nešto trajno', heroTitle: 'Tamo gde tvoje ruke počinju da pričaju priču.', heroText: 'Kreativne radionice, posebni materijali i mesto za usporavanje.', workshopsButton: 'Pogledaj radionice', shopButton: 'Otkrij prodavnicu', next: 'naredni susret', workshopTitle: 'Vidimo se u radionici', allWorkshops: 'Detalji radionice', join: 'Prijavi se', saturday: 'subota', illustration: 'Ilustracija · može nastati sličan automobil', workshops: { wreath: { title: 'Izrada jesenje dekoracije', detail: 'prirodni materijali · 5–6 sati', price: '20.000 Ft' } }, favorites: 'omiljeno iz radionice', shopTitle: 'Ponesi radost stvaranja kući', goShop: 'Idi u prodavnicu', storyTitle: 'Ne mora biti savršeno.', storyText: 'Fabrikuckó je mesto gde stvaranje donosi predah.', storyButton: 'Upoznaj nas', newsletterTitle: 'Nastaju lepe stvari.', newsletterText: 'Jednom mesečno šaljemo inspiraciju, radionice i novosti.', subscribe: 'Prijavi se', footer: 'stvaraj · poveži · uspori' },
  nl: { studio: 'creatieve studio', nav: ['Workshops', 'Winkel', 'Over ons', 'Contact'], heroEyebrow: 'maak iets blijvends', heroTitle: 'Waar je handen een verhaal beginnen te vertellen.', heroText: 'Creatieve workshops, mooie materialen en een plek om te vertragen.', workshopsButton: 'Bekijk workshops', shopButton: 'Ontdek de winkel', next: 'komende sessie', workshopTitle: 'Ontmoet ons in de studio', allWorkshops: 'Workshopdetails', join: 'Boeken', saturday: 'zaterdag', illustration: 'Illustratie · een vergelijkbare auto kan ontstaan', workshops: { wreath: { title: 'Maak een herfstdecoratie', detail: 'natuurlijke materialen · 5–6 uur', price: '20.000 Ft' } }, favorites: 'favorieten uit de studio', shopTitle: 'Neem het maakplezier mee naar huis', goShop: 'Naar de winkel', storyTitle: 'Het hoeft niet perfect te zijn.', storyText: 'Fabrikuckó is een plek waar maken herstel brengt.', storyButton: 'Maak kennis', newsletterTitle: 'Mooie dingen krijgen vorm.', newsletterText: 'Elke maand sturen we inspiratie en nieuws.', subscribe: 'Aanmelden', footer: 'maken · verbinden · vertragen' },
  fr: { ...translations.fr || {}, nav: ['Ateliers', 'Boutique', 'À propos', 'Contact'], workshopTitle: 'Retrouvons-nous à l’atelier', workshopsButton: 'Voir les ateliers', shopButton: 'Découvrir la boutique', workshops: { wreath: { title: 'Créer une décoration d’automne', detail: 'matériaux naturels · 5–6 heures', price: '20 000 Ft' } } },
  es: { ...translations.es || {}, nav: ['Talleres', 'Tienda', 'Sobre nosotros', 'Contacto'], workshopTitle: 'Nos vemos en el taller', workshopsButton: 'Ver talleres', shopButton: 'Descubrir la tienda', workshops: { wreath: { title: 'Crear una decoración de otoño', detail: 'materiales naturales · 5–6 horas', price: '20.000 Ft' } } },
  pt: { ...translations.pt || {}, nav: ['Workshops', 'Loja', 'Sobre nós', 'Contacto'], workshopTitle: 'Encontramo-nos na oficina', workshopsButton: 'Ver workshops', shopButton: 'Descobrir a loja', workshops: { wreath: { title: 'Criar uma decoração de outono', detail: 'materiais naturais · 5–6 horas', price: '20.000 Ft' } } },
  no: { ...translations.en, studio: 'kreativt studio', nav: ['Workshops', 'Butikk', 'Om oss', 'Kontakt'], heroEyebrow: 'lag noe som varer', heroTitle: 'Der hendene dine begynner å fortelle en historie.', heroText: 'Kreative workshops, vakre materialer og et sted å senke tempoet.', workshopsButton: 'Se workshops', shopButton: 'Oppdag butikken', workshopTitle: 'Møt oss i studioet', workshops: { wreath: { title: 'Lag en høstdekorasjon', detail: 'naturmaterialer · 5–6 timer', price: '20 000 Ft' } }, storyTitle: 'Det trenger ikke være perfekt.', subscribe: 'Abonner' },
  sv: { ...translations.en, studio: 'kreativ studio', nav: ['Workshops', 'Butik', 'Om oss', 'Kontakt'], heroEyebrow: 'skapa något bestående', heroTitle: 'Där dina händer börjar berätta en historia.', heroText: 'Kreativa workshops, vackra material och en plats att sakta ner.', workshopsButton: 'Se workshops', shopButton: 'Upptäck butiken', workshopTitle: 'Möt oss i studion', workshops: { wreath: { title: 'Skapa en höstdekoration', detail: 'naturmaterial · 5–6 timmar', price: '20 000 Ft' } }, storyTitle: 'Det behöver inte vara perfekt.', subscribe: 'Prenumerera' },
  da: { ...translations.en, studio: 'kreativt værksted', nav: ['Workshops', 'Butik', 'Om os', 'Kontakt'], heroEyebrow: 'skab noget varigt', heroTitle: 'Hvor dine hænder begynder at fortælle en historie.', heroText: 'Kreative workshops, smukke materialer og et sted at sætte farten ned.', workshopsButton: 'Se workshops', shopButton: 'Opdag butikken', workshopTitle: 'Mød os i værkstedet', workshops: { wreath: { title: 'Skab en efterårsdekoration', detail: 'naturmaterialer · 5–6 timer', price: '20.000 Ft' } }, storyTitle: 'Det behøver ikke være perfekt.', subscribe: 'Tilmeld dig' },
  fi: { ...translations.en, studio: 'luova studio', nav: ['Työpajat', 'Kauppa', 'Meistä', 'Yhteys'], heroEyebrow: 'tee jotain kestävää', heroTitle: 'Siellä, missä kätesi alkavat kertoa tarinaa.', heroText: 'Luovia työpajoja, kauniita materiaaleja ja paikka hidastaa.', workshopsButton: 'Katso työpajat', shopButton: 'Tutustu kauppaan', workshopTitle: 'Tavataan studiossa', workshops: { wreath: { title: 'Tee syyskoriste', detail: 'luonnonmateriaalit · 5–6 tuntia', price: '20 000 Ft' } }, storyTitle: 'Sen ei tarvitse olla täydellistä.', subscribe: 'Tilaa' },
  is: { ...translations.en, studio: 'skapandi stúdíó', nav: ['Vinnustofur', 'Verslun', 'Um okkur', 'Hafa samband'], heroEyebrow: 'skapaðu eitthvað varanlegt', heroTitle: 'Þar sem hendurnar þínar byrja að segja sögu.', heroText: 'Skapandi vinnustofur, falleg efni og staður til að hægja á.', workshopsButton: 'Skoða vinnustofur', shopButton: 'Uppgötva verslunina', workshopTitle: 'Hittumst í stúdíóinu', workshops: { wreath: { title: 'Skapaðu haustskreytingu', detail: 'náttúruleg efni · 5–6 klukkustundir', price: '20.000 Ft' } }, storyTitle: 'Það þarf ekki að vera fullkomið.', subscribe: 'Gerast áskrifandi' },
  ga: { ...translations.en, studio: 'stiúideo cruthaitheach', nav: ['Ceardlanna', 'Siopa', 'Fúinn', 'Teagmháil'], heroEyebrow: 'cruthaigh rud buan', heroTitle: 'An áit a dtosaíonn do lámha ag insint scéil.', heroText: 'Ceardlanna cruthaitheacha, ábhair áille agus áit chun moilliú.', workshopsButton: 'Féach ar na ceardlanna', shopButton: 'Faigh amach faoin siopa', workshopTitle: 'Buail linn sa stiúideo', workshops: { wreath: { title: 'Cruthaigh maisiúchán fómhair', detail: 'ábhair nádúrtha · 5–6 uair an chloig', price: '20.000 Ft' } }, storyTitle: 'Ní gá go mbeadh sé foirfe.', subscribe: 'Liostáil' }
}

Object.entries(moreTranslations).forEach(([code, seed]) => { translations[code] = { ...translations.en, ...seed, workshops: { ...translations.en.workshops, ...seed.workshops } } })

translations.ch = { ...translations.de, studio: 'kreatives Atelier', nav: ['Workshops', 'Shop', 'Über uns', 'Kontakt'], heroEyebrow: 'erschaffe etwas Bleibendes', heroTitle: <>Wo deine Hände<br /><em>eine Geschichte erzählen.</em></>, heroText: 'Kreative Workshops, besondere Materialien und ein Ort zum Innehalten.', workshopTitle: 'Herbstdekoration gestalten', workshops: { ...translations.de.workshops, wreath: { title: 'Herbstdekoration gestalten', detail: 'Naturmaterialien · 5–6 Stunden', price: '20.000 Ft' } }, illustration: 'Illustration · ein ähnliches Auto kann entstehen', products: { ...translations.de.products } }
translations.be = { ...translations.nl, studio: 'creatieve studio', nav: ['Workshops', 'Winkel', 'Over ons', 'Contact'], heroEyebrow: 'maak iets blijvends', heroTitle: <>Waar je handen<br /><em>een verhaal vertellen.</em></>, heroText: 'Creatieve workshops, bijzondere materialen en een plek om te vertragen.', workshopTitle: 'Maak een herfstdecoratie', workshops: { ...translations.en.workshops, wreath: { title: 'Maak een herfstdecoratie', detail: 'natuurlijke materialen · 5–6 uur', price: '20.000 Ft' } }, illustration: 'Illustratie · een vergelijkbare auto kan ontstaan', products: { ...translations.en.products } }
translations.el = { ...translations.en, studio: 'δημιουργικό εργαστήριο', nav: ['Εργαστήρια', 'Κατάστημα', 'Σχετικά', 'Επικοινωνία'], language: 'Επιλογή γλώσσας', heroEyebrow: 'δημιούργησε κάτι που μένει', heroTitle: <>Εκεί όπου τα χέρια σου<br /><em>αρχίζουν να αφηγούνται.</em></>, heroText: 'Δημιουργικά εργαστήρια, όμορφα υλικά και ένας χώρος για να χαλαρώσεις.', workshopsButton: 'Δες τα εργαστήρια', shopButton: 'Ανακάλυψε το κατάστημα', next: 'επόμενη συνάντηση', workshopTitle: 'Συναντιόμαστε στο εργαστήριο', allWorkshops: 'Λεπτομέρειες εργαστηρίου', join: 'Κράτηση', saturday: 'Σάββατο', illustration: 'Εικονογράφηση · μπορεί να δημιουργηθεί παρόμοιο αυτοκίνητο', workshops: { ...translations.en.workshops, wreath: { title: 'Δημιούργησε φθινοπωρινή διακόσμηση', detail: 'φυσικά υλικά · 5–6 ώρες', price: '20.000 Ft' } }, favorites: 'αγαπημένα του εργαστηρίου', shopTitle: 'Πάρε τη χαρά της δημιουργίας στο σπίτι', goShop: 'Στο κατάστημα', storyEyebrow: 'η ιστορία ενός μικρού εργαστηρίου', storyTitle: 'Δεν χρειάζεται να είναι τέλειο.', storyText: 'Το Fabrikuckó είναι ένας χώρος όπου η δημιουργία φέρνει ξεκούραση.', storyButton: 'Γνώρισέ μας', newsletterEyebrow: 'μείνε σε επαφή', newsletterTitle: 'Όμορφα πράγματα γεννιούνται.', newsletterText: 'Κάθε μήνα στέλνουμε έμπνευση, εργαστήρια και νέα.', email: 'το email σου', subscribe: 'Εγγραφή', footer: 'δημιούργησε · συνδέσου · χαλάρωσε' }

commerceCopy.mt = { ...commerceCopy.en, cart: 'Qoffa', empty: 'Il-qoffa tiegħek għadha vojta.', checkout: 'Kompli għall-ħlas', continue: 'Kompli tixtri', foxpost: 'Locker Foxpost', gls: 'Kunsinna GLS', transfer: 'Trasferiment bankarju', transferNote: 'Wara li tordna nibagħtulek id-dettalji tat-trasferiment.', order: 'Ibgħat l-ordni', details: 'Dettalji tal-kunsinna', name: 'Isem', email: 'Email', phone: 'Telefon', address: 'Indirizz tal-kunsinna', locker: 'Locker / indirizz', note: 'Nota', close: 'Agħlaq', success: 'Grazzi tal-ordni tiegħek!', processing: 'L-ordnijiet bħalissa jaħdmu fil-modalità demo.' }

const getInitialLanguage = () => {
  const saved = window.localStorage.getItem('fabrikucko-language')
  if (saved && languageOptions.some(([code]) => code === saved)) return saved
  const browserLanguage = navigator.language?.toLowerCase() || ''
  const detected = languageOptions.find(([code]) => browserLanguage.startsWith(code))
  return detected ? detected[0] : 'hu'
}

function Logo({ compact = false, studio = 'kreatív műhely' }) {
  return <a className={`logo ${compact ? 'logo--compact' : ''}`} href="#top" aria-label="Fabrikuckó főoldal">
    <img className="logo-image" src="./fabrikucko-logo.png" alt="" />
    <span className="logo-word">fabrikuckó<small>{studio}</small></span>
  </a>
}

function WorkshopArt({ art }) {
  return <div className={`workshop-art workshop-art--${art}`} aria-hidden="true">
    {art === 'wreath' && <><span className="leaf leaf-a" /><span className="leaf leaf-b" /><span className="leaf leaf-c" /><span className="wreath-center" /></>}
    {art === 'clay' && <><span className="clay-shape" /><span className="clay-line" /></>}
    {art === 'print' && <><span className="print-sun" /><span className="print-hill" /><span className="print-tree" /></>}
  </div>
}

function ProductArt({ art }) {
  return <div className={`product-art product-art--${art}`} aria-hidden="true">
    {art === 'paper' && <><span className="paper-sheet sheet-one" /><span className="paper-sheet sheet-two" /><span className="paper-flower" /></>}
    {art === 'stamp' && <><span className="stamp-block" /><span className="stamp-handle" /><span className="stamp-star">✦</span></>}
    {art === 'brush' && <><span className="brush brush-one" /><span className="brush brush-two" /><span className="brush brush-three" /></>}
  </div>
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [shipping, setShipping] = useState('foxpost')
  const [notice, setNotice] = useState('')
  const copy = translations[language] || translations.en
  const commerce = commerceCopy[language] || commerceCopy.en
  const selectedLanguage = languageOptions.find(([code]) => code === language) || languageOptions[2]
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartSubtotal = cart.reduce((sum, item) => sum + productCatalog[item.key].price * item.quantity, 0)
  const shippingCost = shipping === 'foxpost' ? 1490 : 1990
  const cartTotal = cartSubtotal + (cart.length ? shippingCost : 0)

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage)
    setLanguageOpen(false)
    window.localStorage.setItem('fabrikucko-language', nextLanguage)
  }

  const addToCart = (key) => {
    const product = copy.products[key]
    setCart((items) => {
      const existing = items.find((item) => item.key === key)
      return existing ? items.map((item) => item.key === key ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { key, quantity: 1 }]
    })
    setCartOpen(true)
    setNotice(`${product.name} ${copy.added}`)
    window.setTimeout(() => setNotice(''), 2600)
  }

  const updateQuantity = (key, change) => setCart((items) => items.map((item) => item.key === key ? { ...item, quantity: item.quantity + change } : item).filter((item) => item.quantity > 0))
  const removeFromCart = (key) => setCart((items) => items.filter((item) => item.key !== key))

  return <div id="top" className="page-shell">
    <header className="site-header">
      <div className="header-inner">
        <Logo studio={copy.studio} />
        <nav className={menuOpen ? 'nav nav--open' : 'nav'} aria-label="Main navigation">
          <a href="#workshopok" onClick={() => setMenuOpen(false)}>{copy.nav[0]}</a>
          <a href="#bolt" onClick={() => setMenuOpen(false)}>{copy.nav[1]}</a>
          <a href="#rolunk" onClick={() => setMenuOpen(false)}>{copy.nav[2]}</a>
          <a href="#kapcsolat" onClick={() => setMenuOpen(false)}>{copy.nav[3]}</a>
        </nav>
        <div className="header-actions">
          <a className="instagram-link" href="#kapcsolat" aria-label="Közösségi oldalak"><Camera size={18} strokeWidth={1.8} /></a>
          <div className="language-menu">
            <button className="language-current" type="button" aria-label={copy.language} aria-expanded={languageOpen} onClick={() => setLanguageOpen(!languageOpen)}><span className={`language-flag flag--${selectedLanguage[0]}`} aria-hidden="true" /><span className="language-code">{selectedLanguage[0].toUpperCase()}</span><ChevronRight className={languageOpen ? 'language-chevron language-chevron--open' : 'language-chevron'} size={13} /></button>
            {languageOpen && <div className="language-dropdown" role="menu">{languageOptions.map(([code, name]) => <button className={language === code ? 'language-option language-option--active' : 'language-option'} type="button" role="menuitem" key={code} onClick={() => changeLanguage(code)}><span className={`language-flag flag--${code}`} aria-hidden="true" /><span>{name}</span>{language === code && <Check size={13} />}</button>)}</div>}
          </div>
          <button className="cart-button" type="button" aria-label={`${commerce.cart}, ${cartCount} ${copy.items}`} onClick={() => setCartOpen(true)}><ShoppingBag size={19} strokeWidth={1.8} /><span>{cartCount}</span></button>
          <button className="menu-button" type="button" aria-label="Menü megnyitása" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
    </header>

    {cartOpen && <div className="cart-layer" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) setCartOpen(false) }}>
      <aside className="cart-panel" aria-label={commerce.cart}>
        <div className="cart-panel-head"><div><p className="eyebrow"><ShoppingBag size={14} /> {commerce.cart}</p><h2>{cart.length ? `${cartCount} ${copy.items}` : commerce.empty}</h2></div><button className="icon-close" type="button" onClick={() => setCartOpen(false)} aria-label={commerce.close}><X size={19} /></button></div>
        {!cart.length ? <div className="cart-empty"><ShoppingBag size={40} strokeWidth={1.2} /><p>{commerce.empty}</p><button className="button button--outline" type="button" onClick={() => setCartOpen(false)}>{commerce.continue}</button></div> : <>
          <div className="cart-items">{cart.map((line) => { const item = copy.products[line.key]; return <div className="cart-line" key={line.key}><div className={`cart-thumb product-art--${products.find((product) => product.key === line.key).art}`}><ProductArt art={products.find((product) => product.key === line.key).art} /></div><div className="cart-line-main"><h3>{item.name}</h3><span>{item.price}</span><div className="quantity"><button type="button" onClick={() => updateQuantity(line.key, -1)} aria-label="Kevesebb"><Minus size={13} /></button><b>{line.quantity}</b><button type="button" onClick={() => updateQuantity(line.key, 1)} aria-label="Több"><Plus size={13} /></button><button className="remove-line" type="button" onClick={() => removeFromCart(line.key)} aria-label="Termék törlése"><Trash2 size={14} /></button></div></div></div> })}</div>
          <div className="shipping-box"><h3><Truck size={16} /> {commerce.shipping}</h3><label className={shipping === 'foxpost' ? 'shipping-option shipping-option--active' : 'shipping-option'}><input type="radio" name="shipping" value="foxpost" checked={shipping === 'foxpost'} onChange={() => setShipping('foxpost')} /><span>{commerce.foxpost}</span><strong>1 490 Ft</strong></label><label className={shipping === 'gls' ? 'shipping-option shipping-option--active' : 'shipping-option'}><input type="radio" name="shipping" value="gls" checked={shipping === 'gls'} onChange={() => setShipping('gls')} /><span>{commerce.gls}</span><strong>1 990 Ft</strong></label></div>
          <div className="cart-summary"><p><span>{commerce.subtotal}</span><strong>{cartSubtotal.toLocaleString('hu-HU')} Ft</strong></p><p><span>{commerce.shipping}</span><strong>{shippingCost.toLocaleString('hu-HU')} Ft</strong></p><p className="cart-total"><span>{commerce.total}</span><strong>{cartTotal.toLocaleString('hu-HU')} Ft</strong></p></div>
          <button className="button button--dark checkout-button" type="button" onClick={() => setCheckoutOpen(true)}><CreditCard size={16} /> {commerce.checkout}</button>
        </>}
      </aside>
    </div>}

    {checkoutOpen && <div className="modal-layer"><div className="checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title"><div className="cart-panel-head"><div><p className="eyebrow"><MapPin size={14} /> {commerce.details}</p><h2 id="checkout-title">{commerce.checkout}</h2></div><button className="icon-close" type="button" onClick={() => setCheckoutOpen(false)} aria-label={commerce.close}><X size={19} /></button></div><div className="payment-note"><CreditCard size={18} /><div><strong>{commerce.transfer}</strong><span>{commerce.transferNote}</span></div></div><form className="checkout-form" onSubmit={(event) => { event.preventDefault(); setCheckoutOpen(false); setCartOpen(false); setNotice(commerce.success) }}><label>{commerce.name}<input required name="name" /></label><label>{commerce.email}<input required type="email" name="email" /></label><label>{commerce.phone}<input required type="tel" name="phone" /></label><label>{commerce.address}<input required name="address" placeholder={commerce.locker} /></label><label>{commerce.note}<textarea name="note" rows="3" /></label><p className="demo-note">{commerce.processing}</p><button className="button button--dark" type="submit">{commerce.order} <ArrowRight size={16} /></button></form></div></div>}

    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={14} /> {copy.heroEyebrow}</p>
          <h1 id="hero-title">{copy.heroTitle}</h1>
          <p className="hero-text">{copy.heroText}</p>
          <div className="hero-buttons"><a className="button button--dark" href="#workshopok">{copy.workshopsButton} <ArrowRight size={17} /></a><a className="text-link" href="#bolt">{copy.shopButton} <ChevronRight size={16} /></a></div>
          <div className="hero-note"><div className="avatar-stack"><span>e</span><span>n</span><span>z</span></div><span><strong>587</strong> {copy.makers}</span></div>
        </div>
        <div className="hero-visual" aria-label="Kreatív műhely hangulata">
          <img className="hero-logo-image" src="./fabrikucko-logo.png" alt="Fabrikuckó kézműves alkotóműhely" />
        </div>
      </section>

      <section className="workshops section" id="workshopok" aria-labelledby="workshop-title">
        <div className="section-heading"><div><p className="eyebrow">{copy.next}</p><h2 id="workshop-title">{copy.workshopTitle}</h2></div><a className="text-link text-link--desktop" href="#workshopok">{copy.allWorkshops} <ArrowRight size={16} /></a></div>
        <div className="workshop-grid">{workshops.map((workshop, index) => { const item = copy.workshops[workshop.key]; return <article className="workshop-card" key={workshop.key}><img className="workshop-photo" src="./oszi-disz-workshop.jpg" alt={item.title} /><p className="image-caption">{copy.illustration}</p><div className="workshop-info"><div className="date-badge"><b>{copy.months[index]}</b><span>{workshop.date}</span></div><div className="workshop-meta"><span>{copy.saturday}</span><h3>{item.title}</h3><p>{item.detail}</p></div><div className="workshop-bottom"><strong>{item.price}</strong><a href="#kapcsolat" aria-label={`${copy.join}: ${item.title}`}><ArrowRight size={17} /></a></div></div></article> })}</div>
      </section>

      <section className="shop section" id="bolt" aria-labelledby="shop-title">
        <div className="section-heading"><div><p className="eyebrow">{copy.favorites}</p><h2 id="shop-title">{copy.shopTitle}</h2></div><a className="text-link text-link--desktop" href="#bolt">{copy.goShop} <ArrowRight size={16} /></a></div>
        <div className="product-grid">{products.map((product) => { const item = copy.products[product.key]; return <article className="product-card" key={product.key}><div className="product-image"><ProductArt art={product.art} /><span className="product-tag">{item.type}</span><button className="quick-add" type="button" aria-label={`${item.name} ${copy.add}`} onClick={() => addToCart(product.key)}><Plus size={18} /></button></div><div className="product-details"><h3>{item.name}</h3><strong>{item.price}</strong></div></article> })}</div>
      </section>

      <section className="story section" id="rolunk" aria-labelledby="story-title"><div className="story-image"><div className="story-stamp">F<br />K</div><span>{copy.storyStamp}</span></div><div className="story-copy"><p className="eyebrow">{copy.storyEyebrow}</p><h2 id="story-title">{copy.storyTitle}</h2><p>{copy.storyText}</p><a className="button button--outline" href="#kapcsolat">{copy.storyButton} <ArrowRight size={16} /></a></div></section>

      <section className="newsletter section" id="kapcsolat"><div><p className="eyebrow">{copy.newsletterEyebrow}</p><h2>{copy.newsletterTitle}</h2><p>{copy.newsletterText}</p></div><form className="signup-form" onSubmit={(event) => { event.preventDefault(); setNotice(copy.subscribed) }}><label className="sr-only" htmlFor="email">{copy.email}</label><input id="email" type="email" placeholder={copy.email} required /><button className="button button--dark" type="submit">{copy.subscribe} <ArrowRight size={16} /></button></form></section>
    </main>

    <footer className="site-footer"><Logo compact studio={copy.studio} /><p>{copy.footer}</p><span>© 2024 Fabrikuckó</span></footer>
    {notice && <div className="toast" role="status"><Check size={16} />{notice}<button type="button" aria-label="Értesítés bezárása" onClick={() => setNotice('')}><X size={14} /></button></div>}
  </div>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
