import React, {useEffect, useMemo, useState} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route, Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {Search, Menu, X, ArrowUpRight, ChevronRight, ChevronDown, MessageCircle, Sparkles, Globe2, SlidersHorizontal, ArrowLeft, ArrowRight, Instagram, Heart} from "lucide-react";
import {products} from "./data";
import "./styles.css";

const WA = "212627025271";
const wa = (message="Hello, I'd like to know more about AURA WALL.") =>
  `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

const covers = {
  anime: "/assets/anime-category-cover.jpg",
  gaming: "/assets/gaming-category-cover.jpg",
  movies: "/assets/movies-&-series-category-cover.jpg",
  personalized: "/assets/personalized-art-category-cover.jpg"
};

const copy = {
  en: {
    nav:{home:"Home",anime:"Anime",gaming:"Gaming",movies:"Movies & Series",personal:"Personalized Art"},
    heroTitle:"Give Your Walls an Aura.",
    heroSub:"Premium Plexiglass Wall Art inspired by the worlds you love.",
    explore:"Explore Artworks", create:"Create Your Art",
    featured:"Featured artworks", collections:"Explore the collections",
    collectionsSub:"A curated selection of worlds, characters and stories — made to live on your wall.",
    discover:"Discover collection", personalized:"Create Something That Is Yours",
    personalSub:"Your memories. Your characters. Your world. Your Aura.",
    how:"A simple creative process", whatsapp:"Order on WhatsApp", view:"View Artwork",
    showMore:"Show More", back:"Back to Collection", related:"You may also like",
    searchPlaceholder:"Search characters, anime, movies, games…",
    searchEmpty:"No artworks found. Try another character, anime, movie or game.",
    process:["Choose your idea","Send your reference","We create the artwork","Approve your design","Turn it into premium wall art"],
    brand:"AURA WALL is a Moroccan art studio turning the worlds you love into luminous objects for your space.",
    footer:"Premium plexiglass wall art, made for your space."
  },
  ar: {
    nav:{home:"الرئيسية",anime:"أنمي",gaming:"ألعاب",movies:"أفلام ومسلسلات",personal:"فن مخصص"},
    heroTitle:"امنح جدرانك هالة.",
    heroSub:"لوحات فاخرة من البليكسيغلاس مستوحاة من العوالم التي تحبها.",
    explore:"اكتشف الأعمال", create:"اصنع لوحتك",
    featured:"أعمال مختارة", collections:"اكتشف المجموعات",
    collectionsSub:"اختيار من الشخصيات والعوالم والقصص — صُمم ليعيش على جدارك.",
    discover:"اكتشف المجموعة", personalized:"اصنع شيئاً يخصك",
    personalSub:"ذكرياتك. شخصياتك. عالمك. هالتك.",
    how:"رحلة إبداعية بسيطة", whatsapp:"اطلب عبر واتساب", view:"شاهد العمل",
    showMore:"عرض المزيد", back:"العودة إلى المجموعة", related:"قد يعجبك أيضاً",
    searchPlaceholder:"ابحث عن شخصية، أنمي، فيلم، لعبة…",
    searchEmpty:"لم نجد أعمالاً. جرّب شخصية أو أنمي أو فيلماً أو لعبة أخرى.",
    process:["اختر فكرتك","أرسل مرجعك","نصنع العمل","وافق على التصميم","حوّله إلى لوحة فاخرة"],
    brand:"AURA WALL استوديو فني مغربي يحوّل العوالم التي تحبها إلى قطع فنية مضيئة لمساحتك.",
    footer:"لوحات بليكسيغلاس فاخرة، صُممت لمساحتك."
  }
};

function App(){
  const [lang,setLang]=useState(()=>localStorage.getItem("aura-lang")||"en");
  useEffect(()=>{localStorage.setItem("aura-lang",lang); document.documentElement.lang=lang; document.documentElement.dir=lang==="ar"?"rtl":"ltr"},[lang]);
  const t=copy[lang];
  return <div className="app">
    <Header lang={lang} setLang={setLang} t={t}/>
    <Routes>
      <Route path="/" element={<Home t={t} lang={lang}/>}/>
      <Route path="/anime" element={<CategoryPage category="anime" t={t} lang={lang}/>}/>
      <Route path="/anime/:sub" element={<CategoryPage category="anime" t={t} lang={lang}/>}/>
      <Route path="/gaming" element={<CategoryPage category="gaming" t={t} lang={lang}/>}/>
      <Route path="/movies" element={<CategoryPage category="movies" t={t} lang={lang}/>}/>
      <Route path="/personalized" element={<Personalized t={t} lang={lang}/>}/>
      <Route path="/search" element={<SearchPage t={t} lang={lang}/>}/>
      <Route path="/artwork/:slug" element={<ProductPage t={t} lang={lang}/>}/>
      <Route path="*" element={<Home t={t} lang={lang}/>}/>
    </Routes>
    <Footer t={t}/>
    <a className="floating-wa" href={wa("Hello, I'd like to discover AURA WALL.")} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={22}/></a>
  </div>
}

function Header({lang,setLang,t}){
  const [open,setOpen]=useState(false), [search,setSearch]=useState(false);
  const loc=useLocation();
  useEffect(()=>setOpen(false),[loc.pathname]);
  return <header className="site-header">
    <div className="nav-shell glass">
      <Link className="logo-wrap" to="/" aria-label="AURA WALL home"><img src="/assets/AURAWALL logo.png" alt="AURA WALL"/></Link>
      <nav className="desktop-nav">
        <Link to="/">{t.nav.home}</Link>
        <Link to="/anime">{t.nav.anime}</Link>
        <Link to="/gaming">{t.nav.gaming}</Link>
        <Link to="/movies">{t.nav.movies}</Link>
        <Link to="/personalized">{t.nav.personal}</Link>
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={()=>setSearch(true)} aria-label="Search"><Search size={19}/></button>
        <button className="lang-btn" onClick={()=>setLang(lang==="en"?"ar":"en")} aria-label="Switch language"><Globe2 size={17}/><span>{lang==="en"?"AR":"EN"}</span></button>
        <a className="nav-wa" href={wa()} target="_blank" rel="noreferrer"><MessageCircle size={16}/><span>WhatsApp</span></a>
        <button className="mobile-menu icon-btn" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
      </div>
    </div>
    {open && <div className="mobile-nav glass">
      <Link to="/">{t.nav.home}<ChevronRight size={16}/></Link>
      <Link to="/anime">{t.nav.anime}<ChevronRight size={16}/></Link>
      <Link to="/gaming">{t.nav.gaming}<ChevronRight size={16}/></Link>
      <Link to="/movies">{t.nav.movies}<ChevronRight size={16}/></Link>
      <Link to="/personalized">{t.nav.personal}<ChevronRight size={16}/></Link>
      <button onClick={()=>setSearch(true)}><Search size={16}/>{t.searchPlaceholder}</button>
    </div>}
    {search && <SearchOverlay t={t} onClose={()=>setSearch(false)}/>}
  </header>
}

function SearchOverlay({t,onClose}){
  const [q,setQ]=useState("");
  const nav=useNavigate();
  const results=useMemo(()=>{
    const term=q.trim().toLowerCase(); if(!term) return [];
    return products.filter(p=>[p.title,p.category,p.subcategory,p.franchise,...p.tags].join(" ").toLowerCase().includes(term)).slice(0,8);
  },[q]);
  return <div className="search-overlay" onMouseDown={onClose}>
    <div className="search-panel" onMouseDown={e=>e.stopPropagation()}>
      <div className="search-head"><div className="search-input"><Search/><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder={t.searchPlaceholder}/></div><button className="icon-btn" onClick={onClose}><X/></button></div>
      {q && <div className="search-results">
        {results.length?results.map(p=><button key={p.id} className="search-result" onClick={()=>{nav(`/artwork/${p.slug}`);onClose()}}>
          <img src={p.image} alt=""/><span><b>{p.title}</b><small>{p.franchise} · {p.subcategory}</small></span><ArrowUpRight size={17}/>
        </button>):<div className="empty-search"><Search size={26}/><p>{t.searchEmpty}</p></div>}
      </div>}
      {!q && <div className="search-hint"><Sparkles size={18}/><span>Search by character, franchise, category or artwork name.</span></div>}
    </div>
  </div>
}

function Home({t,lang}){
  const featured=products.slice(0,12);
  return <main>
    <section className="hero section">
      <div className="hero-copy">
        <span className="eyebrow"><span className="dot"/> MOROCCAN ART STUDIO</span>
        <h1>{t.heroTitle}</h1>
        <p>{t.heroSub}</p>
        <div className="hero-actions"><Link className="btn btn-dark" to="/anime">{t.explore}<ArrowUpRight size={17}/></Link><Link className="btn btn-soft" to="/personalized">{t.create}<Sparkles size={16}/></Link></div>
        <div className="hero-meta"><span>PLEXIGLASS</span><i/> <span>MADE FOR YOUR SPACE</span></div>
      </div>
      <div className="hero-art">
        <div className="hero-glow"/>
        <img src="/assets/hero image cover.png" alt="AURA WALL hero artwork"/>
        <div className="hero-badge glass"><Sparkles size={14}/><span>Premium wall art</span></div>
      </div>
    </section>

    <section className="section intro-section">
      <div className="section-kicker">01 / COLLECTIONS</div>
      <div className="section-title-row"><div><h2>{t.collections}</h2><p>{t.collectionsSub}</p></div></div>
      <CategoryPanels t={t}/>
    </section>

    <section className="section featured">
      <div className="section-kicker">02 / SELECTED WORKS</div>
      <div className="section-title-row"><h2>{t.featured}</h2><Link className="text-link" to="/anime">{t.discover}<ArrowUpRight size={16}/></Link></div>
      <ProductGrid items={featured} t={t}/>
    </section>

    <section className="section personal-feature">
      <div className="personal-copy">
        <div className="section-kicker">03 / PERSONAL STUDIO</div>
        <h2>{t.personalized}</h2><p>{t.personalSub}</p>
        <Link className="btn btn-dark" to="/personalized">{t.create}<ArrowUpRight size={17}/></Link>
      </div>
      <div className="personal-images">
        <img src="/assets/personalized art/personalized art1.png" alt="Personalized artwork example"/>
        <img src="/assets/personalized art/personalized art2.png" alt="Personalized artwork example"/>
      </div>
    </section>

    <section className="section statement">
      <div className="statement-mark">✦</div><p>{t.brand}</p>
      <a className="btn btn-soft" href={wa("Hello, I'd like to discover AURA WALL.")} target="_blank" rel="noreferrer">{t.whatsapp}<MessageCircle size={17}/></a>
    </section>
  </main>
}

function CategoryPanels({t}){
 const cats=[
  {key:"anime",to:"/anime",title:t.nav.anime,desc:"Iconic characters. Electric worlds.",img:covers.anime},
  {key:"gaming",to:"/gaming",title:t.nav.gaming,desc:"Legends built for your wall.",img:covers.gaming},
  {key:"movies",to:"/movies",title:t.nav.movies,desc:"Cinematic stories, reimagined.",img:covers.movies},
  {key:"personalized",to:"/personalized",title:t.nav.personal,desc:"Your idea, transformed into Aura.",img:covers.personalized}
 ];
 return <div className="category-panels">{cats.map((c,i)=><Link className={`category-panel cat-${c.key}`} to={c.to} key={c.key}>
   <img src={c.img} alt={c.title}/><div className="category-overlay"/><div className="category-content"><span>0{i+1}</span><div><h3>{c.title}</h3><p>{c.desc}</p></div><ArrowUpRight size={21}/></div>
 </Link>)}</div>
}

function ProductGrid({items,t}){
 return <div className="product-grid">{items.map(p=><ProductCard key={p.id} p={p} t={t}/>)}</div>
}
function ProductCard({p,t}){
 return <Link className="product-card" to={`/artwork/${p.slug}`}>
   <div className="product-image"><img src={p.image} alt={p.title} loading="lazy"/><span className="view-pill">{t.view}<ArrowUpRight size={14}/></span></div>
   <div className="product-info"><div><h3>{p.title}</h3><p>{p.franchise}</p></div><ArrowUpRight size={17}/></div>
 </Link>
}

function CategoryPage({category,t,lang}){
 const {sub}=useParams(); const [count,setCount]=useState(12);
 const filtered=products.filter(p=>p.category===category && (!sub || p.subcategory===decodeURIComponent(sub)));
 const title=category==="anime"?t.nav.anime:category==="gaming"?t.nav.gaming:t.nav.movies;
 const subs=category==="anime"?["naruto","one piece","dbz","more anime"]:category==="gaming"?[]:[];
 return <main className="page">
   <section className="category-hero section">
    <div><span className="eyebrow"><span className="dot"/> AURA WALL / {category.toUpperCase()}</span><h1>{sub?prettySub(sub):title}</h1><p>{category==="anime"?"Iconic anime characters and worlds, printed as premium wall art.":category==="gaming"?"Legendary games, characters and worlds for your setup.":"Cinematic icons and unforgettable stories for your space."}</p></div>
    <img src={covers[category]} alt={title}/>
   </section>
   {subs.length>0 && <div className="section subnav">{subs.map(s=><Link className={sub===s?"active":""} to={`/anime/${s}`} key={s}>{prettySub(s)}<ArrowUpRight size={14}/></Link>)}</div>}
   <section className="section catalog">
    <div className="catalog-head"><div><div className="section-kicker">COLLECTION / {filtered.length} WORKS</div><h2>{sub?prettySub(sub):title}</h2></div><span className="catalog-note">No prices shown — order directly on WhatsApp.</span></div>
    <ProductGrid items={filtered.slice(0,count)} t={t}/>
    {count<filtered.length && <button className="btn btn-soft show-more" onClick={()=>setCount(c=>c+12)}>{t.showMore}<ChevronDown size={16}/></button>}
   </section>
 </main>
}
function prettySub(s){return s.split("-").join(" ").replace(/\b\w/g,c=>c.toUpperCase())}

function ProductPage({t}){
 const {slug}=useParams(); const p=products.find(x=>x.slug===slug);
 if(!p) return <main className="page"><section className="section empty-page"><h1>Artwork not found.</h1><Link className="btn btn-dark" to="/anime">{t.back}</Link></section></main>;
 const related=products.filter(x=>x.id!==p.id && (x.franchise===p.franchise||x.subcategory===p.subcategory)).slice(0,4);
 const msg=`Hello, I'd like to order the artwork: ${p.title}.`;
 return <main className="page">
  <section className="section product-detail">
    <div className="detail-image"><img src={p.image} alt={p.title}/></div>
    <div className="detail-copy">
      <Link className="back-link" to={p.category==="anime"?`/anime/${p.subcategory}`:`/${p.category}`}>← {t.back}</Link>
      <span className="eyebrow"><span className="dot"/> {p.franchise}</span>
      <h1>{p.title}</h1>
      <p className="detail-desc">{p.description}</p>
      <div className="detail-tags">{p.tags.slice(0,4).map(x=><span key={x}>{x}</span>)}</div>
      <a className="btn btn-dark big-btn" href={wa(msg)} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{t.whatsapp}<ArrowUpRight size={17}/></a>
      <p className="microcopy">Chat with AURA WALL to choose your format, finish and delivery details.</p>
    </div>
  </section>
  {related.length>0 && <section className="section related"><div className="section-title-row"><h2>{t.related}</h2></div><ProductGrid items={related} t={t}/></section>}
 </main>
}

function Personalized({t}){
 return <main className="page personal-page">
   <section className="section personal-hero">
    <div className="personal-copy"><span className="eyebrow"><span className="dot"/> PERSONAL STUDIO</span><h1>{t.personalized}</h1><p>{t.personalSub}</p><a className="btn btn-dark" href={wa("Hello, I want to create a personalized AURA WALL artwork.")} target="_blank" rel="noreferrer">{t.create}<MessageCircle size={17}/></a></div>
    <div className="personal-mosaic"><img src="/assets/personalized art/personalized art1.png" alt="Personalized art"/><img src="/assets/personalized art/personalized art2.png" alt="Personalized art"/></div>
   </section>
   <section className="section process"><div className="section-kicker">01 / HOW IT WORKS</div><h2>{t.how}</h2><div className="process-grid">{t.process.map((x,i)=><div className="process-step" key={x}><span>0{i+1}</span><div><Sparkles size={17}/><h3>{x}</h3></div></div>)}</div></section>
   <section className="section personal-options"><div><div className="section-kicker">02 / YOUR IDEA</div><h2>Make it unmistakably yours.</h2><p>Send us a photo, character, memory, concept or mood. We'll turn the idea into a polished visual designed for premium plexiglass.</p></div><div className="option-list">{["Personal photo","Couple artwork","Family artwork","Gaming setup","Anime-inspired","Custom poster","Custom concept"].map((x,i)=><span key={x}>{String(i+1).padStart(2,"0")} {x}</span>)}</div></section>
   <section className="section personal-cta"><Sparkles size={24}/><h2>Your world deserves its own Aura.</h2><a className="btn btn-dark" href={wa("Hello, I want to create a personalized AURA WALL artwork.")} target="_blank" rel="noreferrer">{t.create}<MessageCircle size={17}/></a></section>
 </main>
}

function SearchPage({t}){
 const [q,setQ]=useState(""); const results=products.filter(p=>[p.title,p.category,p.subcategory,p.franchise,...p.tags].join(" ").toLowerCase().includes(q.toLowerCase())).slice(0,48);
 return <main className="page"><section className="section search-page"><span className="eyebrow"><span className="dot"/> SEARCH</span><h1>Find your Aura.</h1><div className="full-search"><Search/><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder={t.searchPlaceholder}/></div>{q && <p className="results-count">{results.length} results</p>}{q && <ProductGrid items={results} t={t}/>}</section></main>
}

function Footer({t}){
 return <footer className="footer"><div className="footer-top"><div><img src="/assets/AURAWALL logo.png" alt="AURA WALL" className="footer-logo"/><p>{t.footer}</p></div><div className="footer-links"><div><b>Explore</b><Link to="/anime">{t.nav.anime}</Link><Link to="/gaming">{t.nav.gaming}</Link><Link to="/movies">{t.nav.movies}</Link><Link to="/personalized">{t.nav.personal}</Link></div><div><b>Contact</b><a href={wa()} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} AURA WALL</span><span>Made in Morocco · Where your walls get an Aura.</span></div></footer>
}

createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);
