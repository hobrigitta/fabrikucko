import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Camera,
  Menu,
  Plus,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react'
import './styles.css'

const workshops = [
  { date: '14', key: 'wreath', art: 'wreath' },
  { date: '21', key: 'clay', art: 'clay' },
  { date: '05', key: 'print', art: 'print' },
]

const products = [
  { key: 'paper', art: 'paper' },
  { key: 'stamp', art: 'stamp' },
  { key: 'brush', art: 'brush' },
]

const languageOptions = [
  ['hu', 'Magyar', '🇭🇺'], ['de', 'Deutsch', '🇩🇪'], ['en', 'English', '🇬🇧'],
  ['es', 'Español', '🇪🇸'], ['fr', 'Français', '🇫🇷'], ['it', 'Italiano', '🇮🇹'], ['pt', 'Português', '🇵🇹'], ['nl', 'Nederlands', '🇳🇱'],
  ['pl', 'Polski', '🇵🇱'], ['cs', 'Čeština', '🇨🇿'], ['sk', 'Slovenčina', '🇸🇰'], ['sl', 'Slovenščina', '🇸🇮'], ['hr', 'Hrvatski', '🇭🇷'], ['sr', 'Srpski', '🇷🇸'],
  ['ro', 'Română', '🇷🇴'], ['bg', 'Български', '🇧🇬'], ['el', 'Ελληνικά', '🇬🇷'], ['tr', 'Türkçe', '🇹🇷'], ['uk', 'Українська', '🇺🇦'], ['ru', 'Русский', '🇷🇺'],
  ['sv', 'Svenska', '🇸🇪'], ['no', 'Norsk', '🇳🇴'], ['da', 'Dansk', '🇩🇰'], ['fi', 'Suomi', '🇫🇮'], ['is', 'Íslenska', '🇮🇸'], ['et', 'Eesti', '🇪🇪'],
  ['lv', 'Latviešu', '🇱🇻'], ['lt', 'Lietuvių', '🇱🇹'], ['ga', 'Gaeilge', '🇮🇪'], ['cy', 'Cymraeg', '🏴'], ['he', 'עברית', '🇮🇱'], ['ar', 'العربية', '🇸🇦'],
  ['hi', 'हिन्दी', '🇮🇳'], ['bn', 'বাংলা', '🇧🇩'], ['id', 'Bahasa Indonesia', '🇮🇩'], ['ms', 'Bahasa Melayu', '🇲🇾'], ['sw', 'Kiswahili', '🇰🇪'], ['af', 'Afrikaans', '🇿🇦']
]

const translations = {
  hu: {
    studio: 'kreatív műhely', nav: ['Workshopok', 'Webshop', 'Rólunk', 'Kapcsolat'], language: 'Nyelv választása', social: 'Közösségi oldalak', cart: 'Kosár', emptyCart: 'A kosarad még üres', items: 'termék',
    heroEyebrow: 'alkoss valami maradandót', heroTitle: <>Ahol a kezed<br /><em>mesélni kezd.</em></>, heroText: 'Kreatív workshopok, különleges alapanyagok és egy kis hely, ahol jólesik lelassulni.', workshopsButton: 'Megnézem a workshopokat', shopButton: 'Felfedezem a webshopot', makers: 'alkotó már velünk tart', crafted: <>szeretettel<br />készítve</>, slow: <>slow craft<br /><b>♡</b></>,
    next: 'következő alkalmak', workshopTitle: 'Találkozzunk a műhelyben', allWorkshops: 'Összes workshop', join: 'Jelentkezés', saturday: 'szombat', months: ['SZEPT', 'SZEPT', 'OKT'], workshops: { wreath: { title: 'Őszi koszorú workshop', detail: 'természetes anyagok · 3 óra', price: '14 900 Ft' }, clay: { title: 'Agyagozás kezdőknek', detail: 'korongozás · 2,5 óra', price: '16 500 Ft' }, print: { title: 'Linómetszet & nyomatok', detail: 'grafika · 3 óra', price: '13 900 Ft' } },
    favorites: 'a műhely kedvencei', shopTitle: 'Vidd haza az alkotás örömét', goShop: 'Irány a webshop', products: { paper: { name: 'Kreatív levélpapír szett', price: '3 490 Ft', type: 'papíráru' }, stamp: { name: 'Mini pecsétkészlet', price: '5 990 Ft', type: 'alkotócsomag' }, brush: { name: 'Fabrikuckó ecsetcsomag', price: '4 290 Ft', type: 'eszközök' } }, add: 'kosárba',
    storyEyebrow: 'egy kis kuckó története', storyTitle: 'Nem kell tökéletesnek lennie.', storyText: 'A Fabrikuckó azért született, hogy legyen egy hely, ahol az alkotás nem teljesítmény, hanem feltöltődés. Ahol belefér a félresikerült forma, a festékes kéz és az, hogy közben nagyokat beszélgetünk.', storyButton: 'Ismerj meg minket', storyStamp: 'kézzel · szívvel · neked', newsletterEyebrow: 'maradjunk kapcsolatban', newsletterTitle: 'Jó dolgok készülnek.', newsletterText: 'Havi egyszer küldünk egy kis inspirációt, új workshopokat és műhelyhíreket.', email: 'a te email címed', subscribe: 'Feliratkozom', subscribed: 'Köszönjük, feliratkoztál!', footer: 'alkoss · kapcsolódj · lassulj', added: 'bekerült a kosárba'
  },
  de: {
    studio: 'kreative Werkstatt', nav: ['Workshops', 'Shop', 'Über uns', 'Kontakt'], language: 'Sprache wählen', social: 'Social Media', cart: 'Warenkorb', emptyCart: 'Dein Warenkorb ist noch leer', items: 'Artikel',
    heroEyebrow: 'erschaffe etwas Bleibendes', heroTitle: <>Wo deine Hände<br /><em>zu erzählen beginnen.</em></>, heroText: 'Kreative Workshops, besondere Materialien und ein kleiner Ort zum Innehalten.', workshopsButton: 'Workshops ansehen', shopButton: 'Zum Webshop', makers: 'Kreative sind schon dabei', crafted: <>mit Liebe<br />gemacht</>, slow: <>slow craft<br /><b>♡</b></>,
    next: 'kommende Termine', workshopTitle: 'Treffen wir uns in der Werkstatt', allWorkshops: 'Alle Workshops', join: 'Anmeldung', saturday: 'Samstag', months: ['SEP', 'SEP', 'OKT'], workshops: { wreath: { title: 'Herbstkranz Workshop', detail: 'Naturmaterialien · 3 Stunden', price: '14,900 Ft' }, clay: { title: 'Töpfern für Anfänger', detail: 'Töpferscheibe · 2,5 Stunden', price: '16,500 Ft' }, print: { title: 'Linolschnitt & Drucke', detail: 'Grafik · 3 Stunden', price: '13,900 Ft' } },
    favorites: 'Lieblinge aus der Werkstatt', shopTitle: 'Nimm die Freude am Machen mit', goShop: 'Zum Webshop', products: { paper: { name: 'Kreatives Briefpapier-Set', price: '3,490 Ft', type: 'Papierwaren' }, stamp: { name: 'Mini-Stempelset', price: '5,990 Ft', type: 'Kreativset' }, brush: { name: 'Fabrikuckó Pinselset', price: '4,290 Ft', type: 'Werkzeuge' } }, add: 'in den Warenkorb',
    storyEyebrow: 'die Geschichte einer kleinen Werkstatt', storyTitle: 'Es muss nicht perfekt sein.', storyText: 'Fabrikuckó ist ein Ort, an dem Kreativität keine Leistung, sondern Erholung ist. Wo misslungene Formen, farbige Hände und gute Gespräche ihren Platz haben.', storyButton: 'Lerne uns kennen', storyStamp: 'mit Händen · mit Herz · für dich', newsletterEyebrow: 'in Kontakt bleiben', newsletterTitle: 'Gute Dinge entstehen.', newsletterText: 'Einmal im Monat senden wir Inspiration, neue Workshops und Neuigkeiten aus der Werkstatt.', email: 'deine E-Mail-Adresse', subscribe: 'Anmelden', subscribed: 'Danke für deine Anmeldung!', footer: 'machen · verbinden · entschleunigen', added: 'wurde in den Warenkorb gelegt'
  },
  en: {
    studio: 'creative studio', nav: ['Workshops', 'Shop', 'About us', 'Contact'], language: 'Choose language', social: 'Social media', cart: 'Cart', emptyCart: 'Your cart is empty', items: 'items',
    heroEyebrow: 'make something lasting', heroTitle: <>Where your hands<br /><em>begin to tell a story.</em></>, heroText: 'Creative workshops, beautiful materials and a little place to slow down.', workshopsButton: 'Explore workshops', shopButton: 'Discover the shop', makers: 'makers already join us', crafted: <>made<br />with care</>, slow: <>slow craft<br /><b>♡</b></>,
    next: 'upcoming sessions', workshopTitle: 'Meet us in the studio', allWorkshops: 'All workshops', join: 'Book', saturday: 'Saturday', months: ['SEP', 'SEP', 'OCT'], workshops: { wreath: { title: 'Autumn wreath workshop', detail: 'natural materials · 3 hours', price: '14,900 Ft' }, clay: { title: 'Pottery for beginners', detail: 'wheel throwing · 2.5 hours', price: '16,500 Ft' }, print: { title: 'Linocut & prints', detail: 'printmaking · 3 hours', price: '13,900 Ft' } },
    favorites: 'studio favourites', shopTitle: 'Take the joy of making home', goShop: 'Go to the shop', products: { paper: { name: 'Creative letter set', price: '3,490 Ft', type: 'paper goods' }, stamp: { name: 'Mini stamp set', price: '5,990 Ft', type: 'maker kit' }, brush: { name: 'Fabrikuckó brush set', price: '4,290 Ft', type: 'tools' } }, add: 'add to cart',
    storyEyebrow: 'the story of a little studio', storyTitle: 'It does not have to be perfect.', storyText: 'Fabrikuckó was born as a place where making is not performance, but restoration. A place for imperfect shapes, paint-stained hands and long conversations.', storyButton: 'Meet the makers', storyStamp: 'by hand · with heart · for you', newsletterEyebrow: 'stay in touch', newsletterTitle: 'Good things are brewing.', newsletterText: 'Once a month we send a little inspiration, new workshops and studio news.', email: 'your email address', subscribe: 'Subscribe', subscribed: 'Thanks for subscribing!', footer: 'make · connect · slow down', added: 'was added to your cart'
  }
}

const getInitialLanguage = () => {
  const saved = window.localStorage.getItem('fabrikucko-language')
  if (saved && languageOptions.some(([code]) => code === saved)) return saved
  const browserLanguage = navigator.language?.toLowerCase() || ''
  const detected = languageOptions.find(([code]) => browserLanguage.startsWith(code))
  return detected ? detected[0] : 'hu'
}

function Logo({ compact = false, studio = 'kreatív műhely' }) {
  return <a className={`logo ${compact ? 'logo--compact' : ''}`} href="#top" aria-label="Fabrikuckó főoldal">
    <span className="logo-mark" aria-hidden="true"><span /><span /><span /></span>
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
  const [cartCount, setCartCount] = useState(0)
  const [notice, setNotice] = useState('')
  const copy = translations[language] || translations.en
  const selectedLanguage = languageOptions.find(([code]) => code === language) || languageOptions[2]

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage)
    setLanguageOpen(false)
    window.localStorage.setItem('fabrikucko-language', nextLanguage)
  }

  const addToCart = (name) => {
    setCartCount((count) => count + 1)
    setNotice(`${name} ${copy.added}`)
    window.setTimeout(() => setNotice(''), 2600)
  }

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
          <button className="cart-button" type="button" aria-label={`${copy.cart}, ${cartCount} ${copy.items}`} onClick={() => setNotice(cartCount ? `${cartCount} ${copy.items}` : copy.emptyCart)}><ShoppingBag size={19} strokeWidth={1.8} /><span>{cartCount}</span></button>
          <button className="menu-button" type="button" aria-label="Menü megnyitása" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
    </header>

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
          <div className="sun-disc" /><div className="hero-label hero-label--top">{copy.crafted}</div><div className="hero-label hero-label--bottom">{copy.slow}</div>
          <div className="desk-scene"><div className="ceramic ceramic--large" /><div className="ceramic ceramic--small" /><div className="vase"><i /><i /><i /></div><div className="paint-brushes"><i /><i /><i /><i /></div><div className="greenery"><i /><i /><i /><i /><i /></div><div className="table-edge" /></div>
        </div>
      </section>

      <section className="workshops section" id="workshopok" aria-labelledby="workshop-title">
        <div className="section-heading"><div><p className="eyebrow">{copy.next}</p><h2 id="workshop-title">{copy.workshopTitle}</h2></div><a className="text-link text-link--desktop" href="#workshopok">{copy.allWorkshops} <ArrowRight size={16} /></a></div>
        <div className="workshop-grid">{workshops.map((workshop, index) => { const item = copy.workshops[workshop.key]; return <article className="workshop-card" key={workshop.key}><WorkshopArt art={workshop.art} /><div className="workshop-info"><div className="date-badge"><b>{copy.months[index]}</b><span>{workshop.date}</span></div><div className="workshop-meta"><span>{copy.saturday}</span><h3>{item.title}</h3><p>{item.detail}</p></div><div className="workshop-bottom"><strong>{item.price}</strong><a href="#kapcsolat" aria-label={`${copy.join}: ${item.title}`}><ArrowRight size={17} /></a></div></div></article> })}</div>
      </section>

      <section className="shop section" id="bolt" aria-labelledby="shop-title">
        <div className="section-heading"><div><p className="eyebrow">{copy.favorites}</p><h2 id="shop-title">{copy.shopTitle}</h2></div><a className="text-link text-link--desktop" href="#bolt">{copy.goShop} <ArrowRight size={16} /></a></div>
        <div className="product-grid">{products.map((product) => { const item = copy.products[product.key]; return <article className="product-card" key={product.key}><div className="product-image"><ProductArt art={product.art} /><span className="product-tag">{item.type}</span><button className="quick-add" type="button" aria-label={`${item.name} ${copy.add}`} onClick={() => addToCart(item.name)}><Plus size={18} /></button></div><div className="product-details"><h3>{item.name}</h3><strong>{item.price}</strong></div></article> })}</div>
      </section>

      <section className="story section" id="rolunk" aria-labelledby="story-title"><div className="story-image"><div className="story-stamp">F<br />K</div><span>{copy.storyStamp}</span></div><div className="story-copy"><p className="eyebrow">{copy.storyEyebrow}</p><h2 id="story-title">{copy.storyTitle}</h2><p>{copy.storyText}</p><a className="button button--outline" href="#kapcsolat">{copy.storyButton} <ArrowRight size={16} /></a></div></section>

      <section className="newsletter section" id="kapcsolat"><div><p className="eyebrow">{copy.newsletterEyebrow}</p><h2>{copy.newsletterTitle}</h2><p>{copy.newsletterText}</p></div><form className="signup-form" onSubmit={(event) => { event.preventDefault(); setNotice(copy.subscribed) }}><label className="sr-only" htmlFor="email">{copy.email}</label><input id="email" type="email" placeholder={copy.email} required /><button className="button button--dark" type="submit">{copy.subscribe} <ArrowRight size={16} /></button></form></section>
    </main>

    <footer className="site-footer"><Logo compact studio={copy.studio} /><p>{copy.footer}</p><span>© 2024 Fabrikuckó</span></footer>
    {notice && <div className="toast" role="status"><Check size={16} />{notice}<button type="button" aria-label="Értesítés bezárása" onClick={() => setNotice('')}><X size={14} /></button></div>}
  </div>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
