(() => {
  'use strict';

  const WHATSAPP_NUMBER = '212627025271';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const copy = {
    en: {
      skip: 'Skip to content', announcement: 'MAKE YOUR WALLS FEEL LIKE YOU', announcement2: 'PREMIUM PLEXIGLASS ART · MADE FOR YOUR SPACE',
      navAnime: 'Anime', navGaming: 'Gaming', navMovies: 'Movies & Series', navCustom: 'Personalized Art',
      searchPlaceholder: 'Find your favourite…', searchTitle: 'Popular matches', searching: 'Search the collection', noSuggestions: 'No artwork found. Try another character or title.',
      loading: 'Setting the scene…', heroEyebrow: 'WALL ART FOR YOUR WORLD', heroTitleA: 'Your space.', heroTitleB: 'Your fandom.', heroTitleC: 'Your aura.', heroDescription: 'Premium plexiglass wall art for the stories, worlds and characters you carry with you. Find the one that feels like you.',
      explore: 'Explore the collection', makeCustom: 'Make it personal', heroNote: 'A little piece of what you love. Made for your space.', stickerTop: 'YOUR WALL', stickerBottom: 'YOUR STORY', heroCaption: 'AURA WALL · ART THAT FEELS LIKE YOU',
      trust1: 'Premium plexiglass look', trust2: 'Made to feel personal', trust3: 'Easy WhatsApp ordering', trust4: 'Morocco-based brand',
      categoriesEyebrow: 'PICK YOUR UNIVERSE', categoriesTitle: 'Find your kind of magic.', categoriesText: 'From legendary anime moments to your favourite screen worlds — choose the collection that feels like home.', categoryExplore: 'EXPLORE COLLECTION', categoryAnime: 'Anime', categoryGaming: 'Gaming', categoryMovies: 'Movies & Series', categoryCustom: 'Personalized Art',
      featuredEyebrow: 'THE AURA EDIT', featuredTitle: 'Art worth looking twice at.', featuredText: 'A few favourites from the collection. The right piece changes the whole feel of a room.', viewCollection: 'View collection', viewArtwork: 'View artwork', orderWhatsApp: 'Enquire on WhatsApp', featuredTag: 'FEATURED ARTWORK',
      customEyebrow: 'MADE A LITTLE MORE YOU', customTitle: 'Your idea deserves a wall.', customText: 'A favourite character, a memory, a photo, a name — tell us the idea and we’ll talk through a design made around you.', startCustom: 'Create personalized art', customBadge: 'ONE OF A KIND',
      howEyebrow: 'THE EASY PART', howTitle: 'From idea to wall.', howText: 'No complicated checkout. Just the art you love and a simple conversation to get the details right.', step1Title: 'Find your piece', step1Text: 'Browse the collection or bring us an idea that is uniquely yours.', step2Title: 'Tell us on WhatsApp', step2Text: 'Send the artwork or your custom request and ask any questions you have.', step3Title: 'Sort the details', step3Text: 'We’ll discuss the options and next steps with you directly.',
      finalTitle: 'Got a wall in mind?', finalText: 'Let’s find the piece that belongs there.', talkWhatsApp: 'Talk to us on WhatsApp',
      footerBlurb: 'Art for the things that make you, you.', footerExplore: 'Explore', footerHaveIdea: 'Got an idea?', footerCustomText: 'Tell us what you imagine. Let’s make it wall-worthy.', footerMade: 'Made for your space, in Morocco.', backTop: 'Back to the top ↑',
      breadcrumbHome: 'Home', breadcrumbCollections: 'Collections', collectionEyebrow: 'FIND YOUR NEXT FAVOURITE', collectionAllAnime: 'Anime, your way.', collectionAnimeDesc: 'A growing collection of bold anime-inspired art. Pick your universe and find the artwork that speaks your language.', collectionNarutoDesc: 'The shinobi, symbols and high-energy moments of the Naruto universe.', collectionOnePieceDesc: 'Pirates, iconic characters and adventurous energy from the One Piece world.', collectionDBZDesc: 'Saiyan transformations, legendary fighters and Dragon Ball Z energy.', collectionMoreAnimeDesc: 'More worlds, more characters, more anime to make your own.', collectionGamingTitle: 'Level up your walls.', collectionGamingDesc: 'Gaming art inspired by unforgettable characters, neon worlds and legendary quests.', collectionMoviesTitle: 'Bring your screen worlds home.', collectionMoviesDesc: 'Artwork inspired by the films and series that stay with you long after the credits.',
      allAnime: 'All Anime', naruto: 'Naruto', onePiece: 'One Piece', dbz: 'Dragon Ball Z', moreAnime: 'More Anime', allArtwork: 'All artwork', showing: 'Showing', of: 'of', artworks: 'artworks', sortBy: 'Sort by', recommended: 'Recommended', titleAZ: 'Title: A–Z', showMore: 'Show more artwork', showLess: 'Back to top',
      searchPageTitle: 'Search the collection', searchFor: 'Results for', searchDesc: 'Find artwork by character, franchise, game, film or series title.', noResultsTitle: 'Nothing on that wall… yet.', noResultsText: 'Try a different spelling, character name or franchise. You can also browse one of the collections below.', clearSearch: 'Browse all artwork',
      modalIntro: 'A piece from the AURA WALL collection.', modalCategory: 'COLLECTION', modalOrder: 'Ask about this artwork', modalCustom: 'Ask about your custom design',
      customPageEyebrow: 'YOUR IDEA, YOUR RULES', customPageTitle1: 'Not just art.', customPageTitle2: 'Your story.', customPageDescription: 'Turn a photo, a character, a favourite moment or a completely new idea into wall art that feels personal. Tell us what you’re imagining and let’s talk it through.', customPageCTA: 'Tell us your idea', customHeroStamp: 'PERSONALIZED FOR YOU',
      customFormEyebrow: 'LET’S MAKE IT PERSONAL', customFormTitle: 'Start with an idea.', customFormText: 'Share a few details below. It opens a WhatsApp message so we can understand what you have in mind — no automatic design editor, no complicated steps.', customPromise: 'A real conversation, tailored to your idea.', formName: 'Your name', formNamePlaceholder: 'What should we call you?', formStyle: 'What are you imagining?', formStylePlaceholder: 'Choose a style', formAnime: 'Anime character', formGaming: 'Gaming artwork', formPortrait: 'Personal portrait', formCouple: 'Couple / family', formPhoto: 'Photo or memory', formTypography: 'Name / quote / typography', formOther: 'Something else', formSubject: 'Who or what is it about?', formSubjectPlaceholder: 'Character, person, game, memory…', formDetails: 'Tell us a little more', formDetailsPlaceholder: 'Colours, mood, text, image, reference link — anything helpful.', formReference: 'Reference link (optional)', formReferencePlaceholder: 'Paste a link to an image if you have one', formSubmit: 'Discuss my design on WhatsApp', formPrivacy: 'Your details are used to prepare this message only. You can also message us directly.', examplesEyebrow: 'A FEW WAYS TO MAKE IT YOURS', examplesTitle: 'Same idea. Personal touch.', exampleOne: 'From a photo to a personal display piece', exampleTwo: 'A portrait transformed into a statement for your space',
      footerContact: 'Contact', pageMissing: 'We couldn’t find that page.', goHome: 'Back to home', thanks: 'Opening WhatsApp with your message…', filterAll: 'All',
    },
    ar: {
      skip: 'انتقل إلى المحتوى', announcement: 'اجعل جدرانك تعبر عنك', announcement2: 'فن أكريليك فاخر · مصمم لمساحتك',
      navAnime: 'أنمي', navGaming: 'ألعاب', navMovies: 'أفلام ومسلسلات', navCustom: 'فن مخصص',
      searchPlaceholder: 'ابحث عن المفضل لديك…', searchTitle: 'نتائج مقترحة', searching: 'ابحث في المجموعة', noSuggestions: 'لم نجد أعمالاً مطابقة. جرّب اسماً أو عنواناً آخر.',
      loading: 'نجهّز المشهد…', heroEyebrow: 'فن جداري لعالمك', heroTitleA: 'مساحتك.', heroTitleB: 'عالمك المفضل.', heroTitleC: 'بصمتك.', heroDescription: 'لوحات أكريليك فاخرة للعوالم والشخصيات والقصص التي تحبها. اكتشف القطعة التي تشبهك.',
      explore: 'اكتشف المجموعة', makeCustom: 'صمّمها بطريقتك', heroNote: 'قطعة صغيرة من الأشياء التي تحبها، لمساحتك.', stickerTop: 'جدارك', stickerBottom: 'حكايتك', heroCaption: 'AURA WALL · فن يشبهك',
      trust1: 'مظهر أكريليك فاخر', trust2: 'لمسة شخصية', trust3: 'طلب سهل عبر واتساب', trust4: 'علامة مغربية',
      categoriesEyebrow: 'اختر عالمك', categoriesTitle: 'اعثر على سحرك الخاص.', categoriesText: 'من لحظات الأنمي الأسطورية إلى عوالم الشاشة المفضلة لديك. اختر المجموعة الأقرب إليك.', categoryExplore: 'اكتشف المجموعة', categoryAnime: 'أنمي', categoryGaming: 'ألعاب', categoryMovies: 'أفلام ومسلسلات', categoryCustom: 'فن مخصص',
      featuredEyebrow: 'اختيارات AURA', featuredTitle: 'فن يستحق نظرة ثانية.', featuredText: 'مجموعة مختارة من أعمالنا. القطعة المناسبة تغيّر إحساس المكان بالكامل.', viewCollection: 'عرض المجموعة', viewArtwork: 'عرض العمل', orderWhatsApp: 'استفسر عبر واتساب', featuredTag: 'عمل مميز',
      customEyebrow: 'لمسة تشبهك أكثر', customTitle: 'فكرتك تستحق مكاناً على الجدار.', customText: 'شخصية تحبها، ذكرى، صورة أو اسم — أخبرنا بفكرتك ولنناقش تصميماً يناسبك.', startCustom: 'أنشئ فناً مخصصاً', customBadge: 'قطعة فريدة',
      howEyebrow: 'الأمر بسيط', howTitle: 'من الفكرة إلى الجدار.', howText: 'لا حاجة إلى خطوات شراء معقدة. اختر العمل الذي تحبه وتواصل معنا لتأكيد التفاصيل.', step1Title: 'اختر العمل', step1Text: 'تصفّح المجموعة أو شاركنا فكرة خاصة بك.', step2Title: 'راسلنا عبر واتساب', step2Text: 'أرسل العمل أو طلبك المخصص واطرح أسئلتك.', step3Title: 'ناقش التفاصيل', step3Text: 'سنتحدث معك مباشرة حول الخيارات والخطوات التالية.',
      finalTitle: 'هل لديك جدار في بالك؟', finalText: 'دعنا نعثر على القطعة المناسبة له.', talkWhatsApp: 'تواصل معنا عبر واتساب',
      footerBlurb: 'فن للأشياء التي تجعلك أنت.', footerExplore: 'اكتشف', footerHaveIdea: 'لديك فكرة؟', footerCustomText: 'أخبرنا بما تتخيله، ولنحوّله إلى عمل يستحق الجدار.', footerMade: 'مصمم لمساحتك، من المغرب.', backTop: 'العودة إلى الأعلى ↑',
      breadcrumbHome: 'الرئيسية', breadcrumbCollections: 'المجموعات', collectionEyebrow: 'اكتشف المفضّل القادم', collectionAllAnime: 'الأنمي بطريقتك.', collectionAnimeDesc: 'مجموعة متجددة من فنون الأنمي المميزة. اختر عالمك واكتشف العمل الذي يناسب ذوقك.', collectionNarutoDesc: 'شخصيات ورموز ولحظات مليئة بالطاقة من عالم ناروتو.', collectionOnePieceDesc: 'القراصنة والشخصيات الأيقونية وروح المغامرة من عالم ون بيس.', collectionDBZDesc: 'تحولات السايان والمقاتلون الأسطوريون وطاقة دراغون بول زد.', collectionMoreAnimeDesc: 'عوالم أكثر وشخصيات أكثر وأعمال أنمي متنوعة.', collectionGamingTitle: 'ارفع مستوى جدرانك.', collectionGamingDesc: 'فن مستوحى من شخصيات الألعاب والعوالم النيونية والمغامرات الأسطورية.', collectionMoviesTitle: 'اجلب عوالم الشاشة إلى منزلك.', collectionMoviesDesc: 'أعمال مستوحاة من الأفلام والمسلسلات التي تبقى في ذاكرتك بعد النهاية.',
      allAnime: 'كل الأنمي', naruto: 'ناروتو', onePiece: 'ون بيس', dbz: 'دراغون بول زد', moreAnime: 'المزيد من الأنمي', allArtwork: 'كل الأعمال', showing: 'عرض', of: 'من', artworks: 'عمل', sortBy: 'ترتيب حسب', recommended: 'مقترح', titleAZ: 'العنوان: أ–ي', showMore: 'عرض المزيد', showLess: 'العودة إلى الأعلى',
      searchPageTitle: 'ابحث في المجموعة', searchFor: 'نتائج البحث عن', searchDesc: 'ابحث باسم الشخصية أو العمل أو اللعبة أو الفيلم أو المسلسل.', noResultsTitle: 'لم نجد ما تبحث عنه بعد.', noResultsText: 'جرّب كتابة الاسم بطريقة أخرى أو ابحث عن شخصية أو سلسلة مختلفة. يمكنك أيضاً استكشاف المجموعات.', clearSearch: 'تصفّح كل الأعمال',
      modalIntro: 'قطعة من مجموعة AURA WALL.', modalCategory: 'المجموعة', modalOrder: 'استفسر عن هذا العمل', modalCustom: 'استفسر عن تصميمك الخاص',
      customPageEyebrow: 'فكرتك، بطريقتك', customPageTitle1: 'ليس مجرد فن.', customPageTitle2: 'إنها حكايتك.', customPageDescription: 'حوّل صورة أو شخصية أو لحظة مفضلة أو فكرة جديدة إلى فن جداري يحمل لمستك. أخبرنا بما تتخيله ولنناقشه معاً.', customPageCTA: 'شاركنا فكرتك', customHeroStamp: 'مصمم خصيصاً لك',
      customFormEyebrow: 'لنصممها بطريقتك', customFormTitle: 'ابدأ بفكرة.', customFormText: 'أضف بعض التفاصيل أدناه. سنفتح محادثة واتساب لفهم فكرتك — من دون محرر تصميم آلي أو خطوات معقدة.', customPromise: 'محادثة حقيقية تناسب فكرتك.', formName: 'اسمك', formNamePlaceholder: 'بماذا نناديك؟', formStyle: 'ما الذي تتخيله؟', formStylePlaceholder: 'اختر نوع التصميم', formAnime: 'شخصية أنمي', formGaming: 'تصميم ألعاب', formPortrait: 'صورة شخصية', formCouple: 'ثنائي / عائلة', formPhoto: 'صورة أو ذكرى', formTypography: 'اسم / اقتباس / كتابة', formOther: 'فكرة أخرى', formSubject: 'عن من أو ماذا يتحدث التصميم؟', formSubjectPlaceholder: 'شخصية، شخص، لعبة، ذكرى…', formDetails: 'أخبرنا المزيد', formDetailsPlaceholder: 'الألوان، الأجواء، النص أو رابط مرجعي — أي تفصيل يساعدنا.', formReference: 'رابط مرجعي (اختياري)', formReferencePlaceholder: 'أضف رابط الصورة إن توفّر', formSubmit: 'ناقش تصميمي عبر واتساب', formPrivacy: 'ستُستخدم التفاصيل لإعداد هذه الرسالة فقط. يمكنك مراسلتنا مباشرة أيضاً.', examplesEyebrow: 'طرق مختلفة لتصميمها لك', examplesTitle: 'الفكرة نفسها، بلمستك الخاصة.', exampleOne: 'تحويل صورة إلى قطعة شخصية للعرض', exampleTwo: 'تحويل صورة شخصية إلى قطعة مميزة لمساحتك',
      footerContact: 'تواصل', pageMissing: 'لم نتمكن من العثور على هذه الصفحة.', goHome: 'العودة للرئيسية', thanks: 'جارٍ فتح واتساب مع رسالتك…', filterAll: 'الكل',
    }
  };

  let lang = 'en';
  let products = [];
  let visibleCount = 12;
  let activeSort = 'recommended';
  let lastFocus = null;
  let toastTimer = null;

  const t = key => (copy[lang] && copy[lang][key]) || copy.en[key] || key;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const waUrl = message => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim().replace(/\s+/g, ' ');
  const categoryLabel = p => {
    if (p.category === 'anime') return t('categoryAnime');
    if (p.category === 'gaming') return t('categoryGaming');
    if (p.category === 'movies') return t('categoryMovies');
    return p.category;
  };
  const subcategoryLabel = name => ({
    'Naruto': t('naruto'), 'One Piece': t('onePiece'), 'Dragon Ball Z': t('dbz'), 'More Anime': t('moreAnime'),
    'Gaming': t('categoryGaming'), 'Movies & Series': t('categoryMovies')
  }[name] || name);

  function applyTranslations() {
    $$('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if (t(key)) el.textContent = t(key); });
    $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $('#languageToggle').textContent = lang === 'en' ? 'العربية' : 'English';
    $('#languageToggle').setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');
    $('#currentYear').textContent = new Date().getFullYear();
  }

  function setLanguage(next) {
    lang = next;
    try { localStorage.setItem('aurawall-lang', lang); } catch (_) {}
    applyTranslations();
    hideSuggestions();
    renderRoute();
  }

  function route() {
    const raw = location.hash.replace(/^#/, '') || '/';
    const splitAt = raw.indexOf('?');
    const path = (splitAt < 0 ? raw : raw.slice(0, splitAt)).replace(/\/$/, '') || '/';
    const params = new URLSearchParams(splitAt < 0 ? '' : raw.slice(splitAt + 1));
    return { path, params };
  }

  function go(path) {
    const next = `#${path.startsWith('/') ? path : `/${path}`}`;
    if (location.hash === next) renderRoute();
    else location.hash = next;
    closeMobileMenu();
    hideSuggestions();
  }

  function searchProducts(query) {
    const normalized = normalize(query);
    if (!normalized) return [];
    const terms = normalized.split(' ').filter(Boolean);
    return products.filter(p => {
      const text = normalize([p.title, p.category, p.subcategory, ...(p.tags || [])].join(' '));
      return terms.every(term => text.includes(term));
    });
  }

  function categoryPath(category, subcategory) {
    if (category === 'anime') {
      if (!subcategory || subcategory === 'all') return '/anime';
      const map = { 'Naruto': 'naruto', 'One Piece': 'one-piece', 'Dragon Ball Z': 'dbz', 'More Anime': 'more-anime' };
      return `/anime/${map[subcategory] || 'more-anime'}`;
    }
    if (category === 'gaming') return '/gaming';
    if (category === 'movies') return '/movies-series';
    return '/';
  }

  function productCard(p) {
    return `<article class="product-card">
      <div class="product-image-wrap">
        <button class="image-button" data-open-product="${esc(p.id)}" aria-label="${esc(t('viewArtwork'))}: ${esc(p.title)}" style="display:block;width:100%;padding:0;border:0;background:transparent;cursor:pointer">
          <img src="${esc(p.image)}" alt="${esc(p.alt || p.title)}" loading="lazy" width="801" height="801">
        </button>
        <button class="button button-dark product-quick-view" type="button" data-open-product="${esc(p.id)}">${esc(t('viewArtwork'))} <span class="button-arrow" aria-hidden="true">↗</span></button>
      </div>
      <div class="product-meta">
        <p class="product-category">${esc(subcategoryLabel(p.subcategory))}</p>
        <h3 class="product-title">${esc(p.title)}</h3>
        <button class="product-order-link" type="button" data-wa-product="${esc(p.id)}"><span>${esc(t('orderWhatsApp'))}</span><span class="mini-arrow" aria-hidden="true">↗</span></button>
      </div>
    </article>`;
  }

  function categoryCard(titleKey, count, image, path, kicker) {
    return `<a class="category-card" href="#${path}" aria-label="${esc(t(titleKey))}">
      <img src="${image}" alt="${esc(t(titleKey))} plexiglass wall art collection" loading="lazy" width="1200" height="600">
      <div class="category-info"><div><small>${esc(kicker || t('categoryExplore'))}</small><h3>${esc(t(titleKey))}</h3></div><span class="category-arrow" aria-hidden="true">↗</span></div>
    </a>`;
  }

  function collectionDescription(type) {
    const descriptions = {
      anime: t('collectionAnimeDesc'), naruto: t('collectionNarutoDesc'), 'one-piece': t('collectionOnePieceDesc'), dbz: t('collectionDBZDesc'), 'more-anime': t('collectionMoreAnimeDesc'), gaming: t('collectionGamingDesc'), movies: t('collectionMoviesDesc')
    };
    return descriptions[type] || '';
  }

  function renderHome() {
    const featured = products.filter(p => p.featured).slice(0, 8);
    return `
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-copy">
            <p class="eyebrow">${esc(t('heroEyebrow'))}</p>
            <h1>${esc(t('heroTitleA'))}<br><span class="accent">${esc(t('heroTitleB'))}</span><br><span class="underlined">${esc(t('heroTitleC'))}</span></h1>
            <p class="hero-description">${esc(t('heroDescription'))}</p>
            <div class="hero-actions"><a class="button button-primary" href="#/anime">${esc(t('explore'))}<span class="button-arrow" aria-hidden="true">↗</span></a><a class="button button-secondary" href="#/personalized-art">${esc(t('makeCustom'))}</a></div>
            <div class="hero-note"><span class="hero-note-icon" aria-hidden="true">✳</span><span>${esc(t('heroNote'))}</span></div>
          </div>
          <div class="hero-visual" aria-label="A preview of AURA WALL artwork">
            <div class="hero-halo" aria-hidden="true"></div>
            <span class="hero-spark hero-spark-one" aria-hidden="true">✳</span><span class="hero-spark hero-spark-two" aria-hidden="true">✦</span>
            <div class="hero-poster hero-poster-one"><img src="assets/artwork/naruto-04.jpg" alt="Naruto Uzumaki blue energy artwork" fetchpriority="high" width="801" height="801"></div>
            <div class="hero-poster hero-poster-two"><img src="assets/artwork/gaming-04.jpg" alt="Cyberpunk-inspired gaming artwork" fetchpriority="high" width="801" height="801"></div>
            <div class="hero-poster hero-poster-three"><img src="assets/artwork/movies-series-04.jpg" alt="Joker-inspired cinematic artwork" fetchpriority="high" width="801" height="801"></div>
            <div class="hero-sticker"><span>${esc(t('stickerTop'))}<br>${esc(t('stickerBottom'))}</span></div>
            <div class="hero-caption">${esc(t('heroCaption'))}</div>
          </div>
        </div>
      </section>
      <div class="trust-strip"><div class="trust-strip-inner">
        <div class="trust-item"><span class="trust-icon" aria-hidden="true">✧</span><span>${esc(t('trust1'))}</span></div>
        <div class="trust-item"><span class="trust-icon" aria-hidden="true">✳</span><span>${esc(t('trust2'))}</span></div>
        <div class="trust-item"><span class="trust-icon" aria-hidden="true">↗</span><span>${esc(t('trust3'))}</span></div>
        <div class="trust-item"><span class="trust-icon" aria-hidden="true">⌁</span><span>${esc(t('trust4'))}</span></div>
      </div></div>
      <section class="section container" id="collections">
        <div class="section-heading"><div><p class="eyebrow">${esc(t('categoriesEyebrow'))}</p><h2>${esc(t('categoriesTitle'))}</h2><p>${esc(t('categoriesText'))}</p></div><a class="section-link" href="#/anime">${esc(t('viewCollection'))} <span aria-hidden="true">↗</span></a></div>
        <div class="category-grid">
          ${categoryCard('categoryAnime','', 'assets/anime-cover.jpg','/anime', '01 / COLLECTION')}
          ${categoryCard('categoryGaming','', 'assets/gaming-cover.jpg','/gaming', '02 / COLLECTION')}
          ${categoryCard('categoryMovies','', 'assets/movies-series-cover.jpg','/movies-series', '03 / COLLECTION')}
          ${categoryCard('categoryCustom','', 'assets/personalized-cover.jpg','/personalized-art', '04 / MADE FOR YOU')}
        </div>
      </section>
      <section class="section featured-section">
        <div class="container"><div class="section-heading"><div><p class="eyebrow">${esc(t('featuredEyebrow'))}</p><h2>${esc(t('featuredTitle'))}</h2><p>${esc(t('featuredText'))}</p></div><a class="section-link" href="#/anime">${esc(t('viewCollection'))} <span aria-hidden="true">↗</span></a></div>
          <div class="product-grid">${featured.map(productCard).join('')}</div>
          <div class="center-cta"><a class="button button-primary" href="#/anime">${esc(t('allArtwork'))}<span class="button-arrow" aria-hidden="true">↗</span></a></div>
        </div>
      </section>
      <section class="custom-promo"><div class="custom-promo-inner"><div><p class="eyebrow">${esc(t('customEyebrow'))}</p><h2>${esc(t('customTitle'))}</h2><p>${esc(t('customText'))}</p><a class="button button-light" href="#/personalized-art">${esc(t('startCustom'))}<span class="button-arrow" aria-hidden="true">↗</span></a></div><div class="custom-promo-art"><span class="custom-label">${esc(t('customBadge'))}</span><img src="assets/custom-examples/custom-1.jpg" alt="Example of personalized portrait wall art" loading="lazy" width="1000" height="500"><img src="assets/custom-examples/custom-2.jpg" alt="Example of a personal photo reimagined as wall art" loading="lazy" width="1000" height="500"></div></div></section>
      <section class="steps-section container"><div class="section-heading"><div><p class="eyebrow">${esc(t('howEyebrow'))}</p><h2>${esc(t('howTitle'))}</h2><p>${esc(t('howText'))}</p></div></div><div class="steps-grid">
        <article class="step-card"><span class="step-number">01</span><h3>${esc(t('step1Title'))}</h3><p>${esc(t('step1Text'))}</p></article>
        <article class="step-card"><span class="step-number">02</span><h3>${esc(t('step2Title'))}</h3><p>${esc(t('step2Text'))}</p></article>
        <article class="step-card"><span class="step-number">03</span><h3>${esc(t('step3Title'))}</h3><p>${esc(t('step3Text'))}</p></article>
      </div></section>
      <section class="bottom-cta"><div><h2>${esc(t('finalTitle'))}</h2><p>${esc(t('finalText'))}</p></div><a class="button button-dark" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener noreferrer">${esc(t('talkWhatsApp'))}<span class="button-arrow" aria-hidden="true">↗</span></a></section>
    `;
  }

  function sortProducts(list) {
    const sorted = [...list];
    if (activeSort === 'title') sorted.sort((a,b) => a.title.localeCompare(b.title));
    else sorted.sort((a,b) => Number(b.featured) - Number(a.featured) || a.id.localeCompare(b.id, undefined, {numeric:true}));
    return sorted;
  }

  function renderFilterChips(active) {
    const links = [
      ['all',t('allAnime'),'/anime'],['Naruto',t('naruto'),'/anime/naruto'],['One Piece',t('onePiece'),'/anime/one-piece'],['Dragon Ball Z',t('dbz'),'/anime/dbz'],['More Anime',t('moreAnime'),'/anime/more-anime']
    ];
    return `<div class="filter-row" aria-label="Anime collections">${links.map(([key,label,path]) => `<a href="#${path}" class="filter-chip ${active === key ? 'active' : ''}" ${active === key ? 'aria-current="page"' : ''}>${esc(label)}</a>`).join('')}</div>`;
  }

  function renderCollection(info) {
    let pool = products;
    let title = '', description = '', crumb = '', category = '', activeSubcategory = '';
    const { path, params } = info;
    if (path.startsWith('/anime')) {
      category = 'anime';
      if (path === '/anime/naruto') { activeSubcategory = 'Naruto'; title = t('naruto'); description = collectionDescription('naruto'); }
      else if (path === '/anime/one-piece') { activeSubcategory = 'One Piece'; title = t('onePiece'); description = collectionDescription('one-piece'); }
      else if (path === '/anime/dbz') { activeSubcategory = 'Dragon Ball Z'; title = t('dbz'); description = collectionDescription('dbz'); }
      else if (path === '/anime/more-anime') { activeSubcategory = 'More Anime'; title = t('moreAnime'); description = collectionDescription('more-anime'); }
      else { activeSubcategory = 'all'; title = t('collectionAllAnime'); description = collectionDescription('anime'); }
      crumb = t('categoryAnime');
      pool = products.filter(p => p.category === 'anime' && (!activeSubcategory || activeSubcategory === 'all' || p.subcategory === activeSubcategory));
    } else if (path === '/gaming') {
      category = 'gaming'; title = t('collectionGamingTitle'); description = collectionDescription('gaming'); crumb = t('categoryGaming'); pool = products.filter(p => p.category === 'gaming');
    } else {
      category = 'movies'; title = t('collectionMoviesTitle'); description = collectionDescription('movies'); crumb = t('categoryMovies'); pool = products.filter(p => p.category === 'movies');
    }
    const sorted = sortProducts(pool);
    const shown = sorted.slice(0, visibleCount);
    const countText = `${t('showing')} ${Math.min(visibleCount, sorted.length)} ${t('of')} ${sorted.length} ${t('artworks')}`;
    const subFilters = category === 'anime' ? renderFilterChips(activeSubcategory) : `<div class="filter-row"><a href="#${category === 'gaming' ? '/gaming' : '/movies-series'}" class="filter-chip active">${esc(t('allArtwork'))}</a></div>`;
    return `<section class="collection-hero container">
      <div class="breadcrumbs"><a href="#/">${esc(t('breadcrumbHome'))}</a><span class="crumb-separator">/</span><a href="#${category === 'anime' ? '/anime' : category === 'gaming' ? '/gaming' : '/movies-series'}">${esc(crumb)}</a>${activeSubcategory && activeSubcategory !== 'all' ? `<span class="crumb-separator">/</span><span>${esc(title)}</span>` : ''}</div>
      <div class="page-heading"><div><p class="eyebrow">${esc(t('collectionEyebrow'))}</p><h1>${esc(title)}</h1><p>${esc(description)}</p></div><div class="collection-count">${sorted.length} ${esc(t('artworks'))}</div></div>
    </section>
    <div class="container collection-controls">${subFilters}<label class="sort-label">${esc(t('sortBy'))}<select id="sortProducts" aria-label="${esc(t('sortBy'))}"><option value="recommended" ${activeSort==='recommended'?'selected':''}>${esc(t('recommended'))}</option><option value="title" ${activeSort==='title'?'selected':''}>${esc(t('titleAZ'))}</option></select></label></div>
    <section class="collection-products container">${shown.length ? `<div class="product-grid">${shown.map(productCard).join('')}</div>` : renderEmptyState()}${sorted.length > visibleCount ? `<div class="center-cta"><button class="button button-secondary" type="button" id="showMore">${esc(t('showMore'))}<span class="button-arrow" aria-hidden="true">＋</span></button></div>` : ''}</section>`;
  }

  function renderEmptyState() {
    return `<div class="empty-state"><div class="empty-state-icon" aria-hidden="true">✳</div><h2>${esc(t('noResultsTitle'))}</h2><p>${esc(t('noResultsText'))}</p><a class="button button-primary" href="#/anime">${esc(t('clearSearch'))}</a></div>`;
  }

  function renderSearch(info) {
    const query = info.params.get('q') || '';
    const results = sortProducts(searchProducts(query));
    const shown = results.slice(0, visibleCount);
    const queryLabel = query ? ` “${query}”` : '';
    return `<section class="search-page-intro container"><p class="eyebrow">${esc(t('searchPageTitle'))}</p><h1>${esc(t('searchFor'))}<span class="search-query-label">${esc(queryLabel)}</span></h1><p style="max-width:570px;color:var(--muted);font-size:13px">${esc(t('searchDesc'))}</p><p class="collection-count" style="text-align:start;margin-top:17px">${results.length} ${esc(t('artworks'))}</p></section>
      <section class="collection-products container">${results.length ? `<div class="product-grid">${shown.map(productCard).join('')}</div>${results.length > visibleCount ? `<div class="center-cta"><button class="button button-secondary" type="button" id="showMore">${esc(t('showMore'))}<span class="button-arrow" aria-hidden="true">＋</span></button></div>` : ''}` : renderEmptyState()}<div class="center-cta"><a class="button button-secondary" href="#/anime">${esc(t('clearSearch'))}</a></div></section>`;
  }

  function renderPersonalized() {
    return `<section class="custom-hero container"><div class="breadcrumbs"><a href="#/">${esc(t('breadcrumbHome'))}</a><span class="crumb-separator">/</span><span>${esc(t('categoryCustom'))}</span></div><div class="custom-hero-grid">
      <div class="custom-intro"><p class="eyebrow">${esc(t('customPageEyebrow'))}</p><h1>${esc(t('customPageTitle1'))}<br><span class="highlight">${esc(t('customPageTitle2'))}</span></h1><p>${esc(t('customPageDescription'))}</p><a class="button button-primary" href="#customFormSection">${esc(t('customPageCTA'))}<span class="button-arrow" aria-hidden="true">↘</span></a></div>
      <div class="custom-hero-image"><img src="assets/personalized-cover.jpg" alt="Examples of personal photographs transformed into plexiglass wall art" width="1600" height="615"><div class="custom-image-stamp"><span aria-hidden="true">✳</span>${esc(t('customHeroStamp'))}</div></div>
    </div></section>
    <section class="custom-form-section" id="customFormSection"><div class="container custom-form-layout"><div class="custom-form-copy"><p class="eyebrow">${esc(t('customFormEyebrow'))}</p><h2>${esc(t('customFormTitle'))}</h2><p>${esc(t('customFormText'))}</p><div class="custom-promise"><span class="custom-promise-mark" aria-hidden="true">↗</span><span>${esc(t('customPromise'))}</span></div></div>
      <form id="customForm" class="custom-form">
        <div class="form-row"><div class="form-field"><label for="customName">${esc(t('formName'))}</label><input id="customName" name="name" autocomplete="name" placeholder="${esc(t('formNamePlaceholder'))}"></div><div class="form-field"><label for="customStyle">${esc(t('formStyle'))}</label><select id="customStyle" name="style"><option value="">${esc(t('formStylePlaceholder'))}</option><option value="anime">${esc(t('formAnime'))}</option><option value="gaming">${esc(t('formGaming'))}</option><option value="portrait">${esc(t('formPortrait'))}</option><option value="couple or family">${esc(t('formCouple'))}</option><option value="photo or memory">${esc(t('formPhoto'))}</option><option value="typography">${esc(t('formTypography'))}</option><option value="other">${esc(t('formOther'))}</option></select></div></div>
        <div class="form-field"><label for="customSubject">${esc(t('formSubject'))}</label><input id="customSubject" name="subject" placeholder="${esc(t('formSubjectPlaceholder'))}"></div>
        <div class="form-field"><label for="customDetails">${esc(t('formDetails'))}</label><textarea id="customDetails" name="details" placeholder="${esc(t('formDetailsPlaceholder'))}"></textarea></div>
        <div class="form-field"><label for="customReference">${esc(t('formReference'))}</label><input id="customReference" name="reference" type="url" placeholder="${esc(t('formReferencePlaceholder'))}"></div>
        <button class="button button-primary" type="submit" style="width:100%">${esc(t('formSubmit'))}<span class="button-arrow" aria-hidden="true">↗</span></button><p class="form-note">${esc(t('formPrivacy'))}</p>
      </form>
    </div></section>
    <section class="custom-examples container"><div class="section-heading"><div><p class="eyebrow">${esc(t('examplesEyebrow'))}</p><h2>${esc(t('examplesTitle'))}</h2></div></div><div class="example-grid"><article class="example-card"><img src="assets/custom-examples/custom-1.jpg" alt="Personal photo transformed into custom wall art" loading="lazy" width="1000" height="500"><p>${esc(t('exampleOne'))}</p></article><article class="example-card"><img src="assets/custom-examples/custom-2.jpg" alt="Personal portrait displayed as plexiglass wall art" loading="lazy" width="1000" height="500"><p>${esc(t('exampleTwo'))}</p></article></div></section>`;
  }

  function updateMeta(path) {
    const meta = $('meta[name="description"]');
    let title = 'AURA WALL — Art that feels like you';
    if (path.startsWith('/anime')) { const animeTitles = {'/anime':'Anime','/anime/naruto':t('naruto'),'/anime/one-piece':t('onePiece'),'/anime/dbz':t('dbz'),'/anime/more-anime':t('moreAnime')}; title = `${animeTitles[path] || 'Anime'} | AURA WALL`; }
    else if (path === '/gaming') title = 'Gaming Wall Art | AURA WALL';
    else if (path === '/movies-series') title = 'Movies & Series Wall Art | AURA WALL';
    else if (path === '/personalized-art') title = 'Personalized Plexiglass Art | AURA WALL';
    else if (path === '/search') title = 'Search AURA WALL Artwork';
    document.title = title;
    if (meta) meta.content = lang === 'ar' ? 'اكتشف فنون أكريليك فاخرة مستوحاة من الأنمي والألعاب والأفلام والمسلسلات أو اطلب تصميماً مخصصاً من AURA WALL المغرب.' : 'Discover premium plexiglass wall art inspired by anime, gaming, movies and series — or create a design that feels completely yours with AURA WALL Morocco.';
  }

  function renderRoute() {
    if (!products.length) return;
    const info = route();
    visibleCount = 12;
    activeSort = activeSort || 'recommended';
    let content;
    if (info.path === '/') content = renderHome();
    else if (info.path === '/personalized-art') content = renderPersonalized();
    else if (info.path === '/search') content = renderSearch(info);
    else if (info.path === '/anime' || info.path.startsWith('/anime/') || info.path === '/gaming' || info.path === '/movies-series') content = renderCollection(info);
    else content = `<section class="container section"><div class="empty-state"><div class="empty-state-icon">✳</div><h2>${esc(t('pageMissing'))}</h2><a class="button button-primary" href="#/">${esc(t('goHome'))}</a></div></section>`;
    $('#main').innerHTML = content;
    applyTranslations();
    updateMeta(info.path);
    $$('.desktop-nav a, .mobile-nav a').forEach(a => { if (a.getAttribute('href') === `#${info.path}`) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
    $('#mobileNav').hidden = true;
    $('#mobileMenuToggle').setAttribute('aria-expanded','false');
  }

  function openProduct(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;
    lastFocus = document.activeElement;
    $('#productModalContent').innerHTML = `<div class="modal-product-layout"><div class="modal-product-image"><img src="${esc(p.image)}" alt="${esc(p.alt || p.title)}" width="801" height="801"></div><div class="modal-product-copy"><p class="eyebrow">${esc(t('modalCategory'))} · ${esc(subcategoryLabel(p.subcategory))}</p><h2 id="modalProductTitle">${esc(p.title)}</h2><p>${esc(t('modalIntro'))}</p><div class="modal-tags"><span>${esc(categoryLabel(p))}</span><span>${esc(subcategoryLabel(p.subcategory))}</span><span>AURA WALL</span></div><a class="button button-primary" href="${esc(waUrl(productMessage(p)))}" target="_blank" rel="noopener noreferrer">${esc(t('modalOrder'))}<span class="button-arrow" aria-hidden="true">↗</span></a></div></div>`;
    $('#productModal').hidden = false;
    document.body.classList.add('modal-open');
    $('[data-close-modal]').focus();
  }

  function closeProduct() {
    $('#productModal').hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  function productMessage(p) {
    return lang === 'ar'
      ? `مرحباً AURA WALL، أرغب في الاستفسار عن العمل الفني: ${p.title}. هل يمكنكم تزويدي بمزيد من التفاصيل؟`
      : `Hello AURA WALL, I'm interested in the artwork: ${p.title}. Could you please share more details?`;
  }

  function orderProduct(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;
    window.open(waUrl(productMessage(p)), '_blank', 'noopener,noreferrer');
  }

  function showSuggestions(query) {
    const panel = $('#searchSuggestions');
    const cleanQuery = query.trim();
    if (cleanQuery.length < 2 || !products.length) { panel.hidden = true; panel.innerHTML = ''; return; }
    const matches = searchProducts(cleanQuery).slice(0, 5);
    panel.innerHTML = `<p class="suggestion-heading">${esc(t('searchTitle'))}</p>${matches.length ? matches.map(p => `<button class="suggestion" type="button" data-open-product="${esc(p.id)}"><img src="${esc(p.image)}" alt="" loading="lazy"><span><strong>${esc(p.title)}</strong><small>${esc(subcategoryLabel(p.subcategory))}</small></span></button>`).join('') : `<div class="suggestion-empty">${esc(t('noSuggestions'))}</div>`}`;
    panel.hidden = false;
  }

  function hideSuggestions() { const panel = $('#searchSuggestions'); if (panel) panel.hidden = true; }
  function closeMobileMenu() { const nav = $('#mobileNav'); if (!nav) return; nav.hidden = true; $('#mobileMenuToggle').setAttribute('aria-expanded','false'); }

  function showToast(message) {
    const el = $('#toast');
    el.textContent = message;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
  }

  document.addEventListener('click', event => {
    const openButton = event.target.closest('[data-open-product]');
    const waButton = event.target.closest('[data-wa-product]');
    const closeButton = event.target.closest('[data-close-modal]');
    if (openButton) { event.preventDefault(); openProduct(openButton.dataset.openProduct); return; }
    if (waButton) { event.preventDefault(); event.stopPropagation(); orderProduct(waButton.dataset.waProduct); return; }
    if (closeButton) { closeProduct(); return; }
    if (event.target === $('#productModal')) { closeProduct(); return; }
    if (!event.target.closest('.header-search-wrap')) hideSuggestions();
  });

  $('#headerSearch').addEventListener('submit', event => {
    event.preventDefault();
    const input = $('#searchInput');
    const query = input.value.trim();
    if (!query && window.matchMedia('(max-width: 640px)').matches) { input.focus(); return; }
    if (!query) return;
    go(`/search?q=${encodeURIComponent(query)}`);
    input.blur();
  });

  $('#searchInput').addEventListener('input', event => showSuggestions(event.target.value));
  $('#searchInput').addEventListener('focus', event => { if (event.target.value.trim().length >= 2) showSuggestions(event.target.value); });
  $('#languageToggle').addEventListener('click', () => setLanguage(lang === 'en' ? 'ar' : 'en'));
  $('#mobileMenuToggle').addEventListener('click', () => {
    const nav = $('#mobileNav');
    const open = nav.hidden;
    nav.hidden = !open;
    $('#mobileMenuToggle').setAttribute('aria-expanded', String(open));
    $('#mobileMenuToggle').setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  $('#mobileNav').addEventListener('click', event => { if (event.target.closest('a')) closeMobileMenu(); });
  $('#main').addEventListener('change', event => {
    if (event.target.id === 'sortProducts') { activeSort = event.target.value; renderRoute(); }
  });
  $('#main').addEventListener('click', event => {
    if (event.target.closest('#showMore')) {
      visibleCount += 12;
      // Re-render the current route without resetting the expanded result count.
      const info = route();
      if (info.path === '/search') $('#main').innerHTML = renderSearch(info);
      else if (info.path.startsWith('/anime') || info.path === '/gaming' || info.path === '/movies-series') $('#main').innerHTML = renderCollection(info);
      applyTranslations();
    }
  });
  $('#main').addEventListener('submit', event => {
    if (event.target.id !== 'customForm') return;
    event.preventDefault();
    const form = event.target;
    const fields = new FormData(form);
    const name = String(fields.get('name') || '').trim();
    const styleValue = String(fields.get('style') || '').trim();
    const subject = String(fields.get('subject') || '').trim();
    const details = String(fields.get('details') || '').trim();
    const reference = String(fields.get('reference') || '').trim();
    const styleLabels = {
      anime: t('formAnime'), gaming: t('formGaming'), portrait: t('formPortrait'), 'couple or family': t('formCouple'), 'photo or memory': t('formPhoto'), typography: t('formTypography'), other: t('formOther')
    };
    const lines = lang === 'ar' ? [
      'مرحباً AURA WALL، أود الاستفسار عن تصميم فني مخصص.',
      name ? `الاسم: ${name}` : '', styleValue ? `نوع التصميم: ${styleLabels[styleValue] || styleValue}` : '', subject ? `الفكرة أو الموضوع: ${subject}` : '', details ? `التفاصيل: ${details}` : '', reference ? `رابط مرجعي: ${reference}` : ''
    ] : [
      'Hello AURA WALL, I’d like to discuss a personalized wall-art design.',
      name ? `Name: ${name}` : '', styleValue ? `Style: ${styleLabels[styleValue] || styleValue}` : '', subject ? `Subject or idea: ${subject}` : '', details ? `Details: ${details}` : '', reference ? `Reference link: ${reference}` : ''
    ];
    window.open(waUrl(lines.filter(Boolean).join('\n')), '_blank', 'noopener,noreferrer');
    showToast(t('thanks'));
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (!$('#productModal').hidden) closeProduct();
      hideSuggestions();
      closeMobileMenu();
    }
  });

  window.addEventListener('hashchange', () => { activeSort = 'recommended'; renderRoute(); window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}); });

  async function init() {
    try {
      const savedLang = (() => { try { return localStorage.getItem('aurawall-lang'); } catch (_) { return null; } })();
      if (savedLang === 'ar' || savedLang === 'en') lang = savedLang;
      applyTranslations();
      const response = await fetch('./data/products.json');
      if (!response.ok) throw new Error(`Catalog request failed (${response.status})`);
      products = await response.json();
      renderRoute();
    } catch (error) {
      console.error('AURA WALL failed to load its product catalog:', error);
      $('#main').innerHTML = `<section class="container section"><div class="empty-state"><div class="empty-state-icon">✳</div><h2>We couldn’t load the collection.</h2><p>Refresh the page and try again. If the problem continues, check that the website files were uploaded together to GitHub Pages.</p><button class="button button-primary" type="button" onclick="location.reload()">Refresh page</button></div></section>`;
    }
  }

  init();
})();
