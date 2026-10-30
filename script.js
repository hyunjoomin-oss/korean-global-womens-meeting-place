/* =========================================================
   Korean and Global Women’s Meetings Place
   Language switching, navigation, and gentle interactions
   ========================================================= */

(() => {
  "use strict";

  const STORAGE_KEY = "korean-global-women-language";
  const html = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  html.classList.add("js");

  const translations = {
    en: {
      "meta.title": "Korean and Global Women’s Meetings Place | Connecting Women Across Borders",
      "meta.description": "A free global women's community connecting Korean women and women around the world through friendship, cultural exchange, online meetings, and shared experiences.",
      "meta.locale": "en_US",

      "a11y.skip": "Skip to main content",
      "a11y.scroll": "Scroll to About Us",
      "a11y.scrollText": "Discover more",
      "a11y.backToTop": "Back to top",
      "a11y.langChanged": "Language changed to English.",

      "brand.name": "Korean and Global Women’s Meetings Place",
      "brand.sub": "Connecting women across borders",

      "nav.label": "Primary navigation",
      "nav.mobileLabel": "Mobile navigation",
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.mission": "Our Mission",
      "nav.activities": "Activities",
      "nav.join": "Join Us",
      "nav.contact": "Contact",

      "lang.label": "Choose language",
      "lang.enAria": "EN — Switch to English",
      "lang.koAria": "한국어 — Switch to Korean",

      "menu.open": "Open navigation menu",
      "menu.close": "Close navigation menu",
      "menu.note": "Free to join · Women 18+ · Worldwide",

      "hero.eyebrow": "A global community for women",
      "hero.title": "A Place Where Women<br> Around the World <em>Connect.</em>",
      "hero.lead": "A warm and welcoming global community connecting Korean women and women from around the world through friendship, cultural exchange, shared experiences, and mutual encouragement.",
      "hero.pillsLabel": "Community highlights",
      "hero.pillFree": "Free to join",
      "hero.pillWorld": "All nationalities",
      "hero.pillAge": "Women 18+",
      "hero.ctaPrimary": "Join Our Free Community",
      "hero.ctaSecondary": "Discover Our Community",
      "hero.status": "Registration opening soon · Online meetings planned",
      "hero.artAlt": "A green globe surrounded by hearts and botanical leaves, with a heart-shaped South Korean flag.",
      "hero.artNote": "Different countries. Different stories. One global sisterhood.",

      "about.eyebrow": "About our community",
      "about.title": "About Our Community",
      "about.lead": "Korean and Global Women’s Meetings Place is an international community created to bring women together across countries and cultures.",
      "about.p1": "We believe that every woman has a story worth sharing. Through friendly conversations, cultural exchange, and shared life experiences, we hope to create meaningful connections and friendships that cross borders.",
      "about.p2": "Our community welcomes women aged 18 and over, regardless of nationality, language, or cultural background.",
      "about.note": "From Korea to the world · A community built on listening and respect",
      "about.quote": "“Every woman has a story worth sharing.”",
      "about.quoteNote": "The belief at the heart of our community",
      "founder.kicker": "Meet our founder",
      "founder.role": "Founder · Korean and Global Women’s Meetings Place",

      "mission.eyebrow": "Our purpose",
      "mission.title": "Our Mission: Connecting Hearts Across Borders",
      "mission.lead": "Our mission is to connect Korean women with women around the world by creating a safe, welcoming, and supportive environment where women can:",
      "mission.seal": "Hearts across borders",
      "mission.listLabel": "Ways we connect",
      "mission.item1": "Share their life experiences.",
      "mission.item2": "Exchange cultures and traditions.",
      "mission.item3": "Express their thoughts and emotions.",
      "mission.item4": "Build international friendships.",
      "mission.item5": "Listen to and understand one another.",
      "mission.item6": "Encourage and support each other.",

      "activities.eyebrow": "What we do",
      "activities.title": "What We Do",
      "activities.lead": "Thoughtfully planned spaces for conversation, culture, and connection. Our activities are being prepared with care.",
      "activities.badge": "Planned activities · Registration coming soon",
      "activities.planned": "Planned",
      "activities.timing": "Dates to be announced",
      "activities.card1.title": "Free Online Meetings",
      "activities.card1.text": "Women can meet online, introduce themselves, share experiences, and make new international friends.",
      "activities.card2.title": "Cultural Exchange",
      "activities.card2.text": "Participants can introduce their countries, traditions, food, customs, and everyday lifestyles.",
      "activities.card3.title": "Group Conversations",
      "activities.card3.text": "Women can share life stories, thoughts, emotions, challenges, and encouragement in friendly group conversations.",
      "activities.note": "All activities are planned for the future. Meeting dates, platforms, and registration details will be announced when they are ready.",

      "who.eyebrow": "Who can join",
      "who.title": "Women Around the World Are Welcome",
      "who.lead": "Our community welcomes all women aged 18 and over from Korea and around the world.",
      "who.listIntro": "You are welcome regardless of:",
      "who.item1": "Nationality",
      "who.item2": "Country of residence",
      "who.item3": "Cultural background",
      "who.item4": "First language",
      "who.item5": "Personal life experience",
      "who.closing": "If you are interested in sharing stories, learning about other cultures, making international friends, and supporting other women, you belong here.",
      "who.cardKicker": "A place for you",
      "who.cardTitle": "Women · Worldwide",
      "who.chip1": "All nationalities",
      "who.chip2": "Any language",
      "who.chip3": "Every culture",
      "who.cardNote": "No prior experience is needed. Bring your curiosity, your stories, and your kindness.",
      "who.ageAria": "Women aged 18 and over",

      "values.eyebrow": "What guides us",
      "values.title": "Our Values",
      "values.lead": "Five simple values shape every conversation, every welcome, and every friendship.",
      "values.friendship.title": "Friendship",
      "values.friendship.text": "Building meaningful connections",
      "values.respect.title": "Respect",
      "values.respect.text": "Respecting different cultures and opinions",
      "values.understanding.title": "Understanding",
      "values.understanding.text": "Listening and learning from one another",
      "values.encouragement.title": "Encouragement",
      "values.encouragement.text": "Supporting and inspiring each other",
      "values.belonging.title": "Belonging",
      "values.belonging.text": "Creating a welcoming community",

      "join.eyebrow": "Join our community",
      "join.freeBadge": "Free community · 무료 참여",
      "join.title": "Your Story Matters. Your Friendship Starts Here.",
      "join.lead": "We are currently developing our global women’s community. Women aged 18 and over from around the world are welcome to join for free.",
      "join.point1": "Free participation for every member",
      "join.point2": "Women 18+ from every country and culture",
      "join.point3": "A kind, respectful space for every story",
      "join.cta": "See Contact & Updates",
      "join.note": "We look forward to welcoming you!",
      "join.status": "Coming soon",
      "join.registrationTitle": "Online Registration",
      "join.registrationText": "Online registration and contact information will be available soon. No registration form is open yet.",
      "join.registrationNote": "This website does not collect personal information.",

      "trust.label": "Our community commitments",
      "trust.kindnessTitle": "Kindness first",
      "trust.kindnessText": "Respectful communication, always.",
      "trust.privacyTitle": "Privacy respected",
      "trust.privacyText": "Share only what feels comfortable.",
      "trust.belongingTitle": "Everyone belongs",
      "trust.belongingText": "Every culture and every story matters.",

      "contact.eyebrow": "Contact",
      "contact.title": "Stay Connected With Us",
      "contact.lead": "Thank you for your interest in our community.",
      "contact.p1": "We are preparing a welcoming space where women from different countries can connect, share, and support one another.",
      "contact.p2": "Registration and contact information will be announced soon.",
      "contact.note": "We are building this community with care, one conversation at a time.",
      "contact.cardKicker": "Community information",
      "contact.inDevelopment": "In development",
      "contact.cardTitle": "Organization and contact details",
      "contact.orgLabel": "Organization",
      "contact.orgValue": "Korean and Global Women’s Meetings Place",
      "contact.founderLabel": "Founder",
      "contact.statusLabel": "Community status",
      "contact.statusValue": "Currently developing the global women’s community",
      "contact.registrationLabel": "Registration",
      "contact.registrationValue": "Coming soon",
      "contact.detailsLabel": "Contact details",
      "contact.detailsValue": "To be announced",
      "contact.footNote": "No contact details have been published yet. Please check back for updates.",

      "footer.name": "Korean and Global Women’s Meetings Place",
      "footer.mission": "Connecting Women’s Hearts Across Borders.",
      "footer.tagline": "Different countries. Different stories. One global sisterhood.",
      "footer.backTop": "Back to top",
      "footer.navLabel": "Footer navigation",
      "footer.copyright": "Korean and Global Women’s Meetings Place. All rights reserved.",
      "footer.privacy": "A free community for women aged 18 and over · No personal information is collected on this website."
    },

    ko: {
      "meta.title": "한국 여성과 세계 여성의 만남의 공간 | 국경을 넘어 여성의 마음을 잇다",
      "meta.description": "한국 여성과 세계 여러 나라의 여성들이 우정과 문화 교류, 온라인 만남, 삶의 경험을 나누며 서로를 이해하고 응원하는 무료 글로벌 여성 커뮤니티입니다.",
      "meta.locale": "ko_KR",

      "a11y.skip": "본문으로 바로가기",
      "a11y.scroll": "커뮤니티 소개로 이동",
      "a11y.scrollText": "더 알아보기",
      "a11y.backToTop": "맨 위로 이동",
      "a11y.langChanged": "언어가 한국어로 변경되었습니다.",

      "brand.name": "한국 여성과 세계 여성의 만남의 공간",
      "brand.sub": "국경을 넘어 여성의 마음을 잇다",

      "nav.label": "주요 메뉴",
      "nav.mobileLabel": "모바일 메뉴",
      "nav.home": "홈",
      "nav.about": "소개",
      "nav.mission": "우리의 사명",
      "nav.activities": "주요 활동",
      "nav.join": "참여하기",
      "nav.contact": "연락처",

      "lang.label": "언어 선택",
      "lang.enAria": "EN — 영어로 전환",
      "lang.koAria": "한국어로 전환",

      "menu.open": "메뉴 열기",
      "menu.close": "메뉴 닫기",
      "menu.note": "무료 참여 · 18세 이상 여성 · 전 세계",

      "hero.eyebrow": "여성들을 위한 글로벌 커뮤니티",
      "hero.title": "전 세계 여성들이<br> 마음으로 <em>연결되는 공간.</em>",
      "hero.lead": "한국 여성과 세계 여러 나라의 여성들이 우정과 문화 교류, 삶의 경험을 나누며 서로를 이해하고 응원하는 따뜻한 글로벌 커뮤니티입니다.",
      "hero.pillsLabel": "커뮤니티 주요 안내",
      "hero.pillFree": "무료 참여",
      "hero.pillWorld": "모든 국적 환영",
      "hero.pillAge": "18세 이상 여성",
      "hero.ctaPrimary": "무료 커뮤니티 참여하기",
      "hero.ctaSecondary": "커뮤니티 알아보기",
      "hero.status": "가입 안내 준비 중 · 온라인 모임 예정",
      "hero.artAlt": "하트와 자연을 담은 잎으로 둘러싸인 초록색 지구본과 하트 모양 태극기.",
      "hero.artNote": "서로 다른 나라, 서로 다른 이야기, 하나로 연결되는 세계 여성들의 우정.",

      "about.eyebrow": "커뮤니티 소개",
      "about.title": "우리의 커뮤니티를 소개합니다",
      "about.lead": "한국 여성과 세계 여성의 만남의 공간은 국가와 문화를 넘어 여성들이 서로 만나고 소통할 수 있도록 만들어진 국제 여성 커뮤니티입니다.",
      "about.p1": "모든 여성에게는 나누고 싶은 소중한 이야기가 있다고 믿습니다. 따뜻한 대화와 문화 교류, 삶의 경험을 통해 국경을 넘어 의미 있는 인연과 우정을 만들어 가고자 합니다.",
      "about.p2": "국적이나 문화적 배경에 관계없이 18세 이상의 모든 여성을 환영합니다.",
      "about.note": "한국에서 세계로 · 듣고 존중하는 마음으로 시작하는 커뮤니티",
      "about.quote": "“모든 여성에게는 나누고 싶은 소중한 이야기가 있습니다.”",
      "about.quoteNote": "우리 커뮤니티의 마음가짐",
      "founder.kicker": "설립자를 소개합니다",
      "founder.role": "설립자 · 한국 여성과 세계 여성의 만남의 공간",

      "mission.eyebrow": "우리의 목적",
      "mission.title": "우리의 사명: 국경을 넘어 마음을 연결합니다",
      "mission.lead": "우리의 사명은 한국 여성과 전 세계 여성들이 안전하고 따뜻하며 서로를 존중하는 공간에서 만날 수 있도록 연결하는 것입니다.",
      "mission.seal": "국경을 넘는 마음",
      "mission.listLabel": "우리가 연결되는 방식",
      "mission.item1": "서로의 삶과 경험을 나눕니다.",
      "mission.item2": "다양한 문화와 전통을 교류합니다.",
      "mission.item3": "자신의 생각과 감정을 자유롭게 표현합니다.",
      "mission.item4": "국제적인 우정을 만들어 갑니다.",
      "mission.item5": "서로의 이야기를 듣고 이해합니다.",
      "mission.item6": "서로에게 힘과 용기를 줍니다.",

      "activities.eyebrow": "주요 활동",
      "activities.title": "주요 활동",
      "activities.lead": "대화와 문화, 그리고 연결을 위한 공간을 정성스럽게 준비하고 있습니다. 모든 활동은 앞으로의 만남을 위해 계획 중입니다.",
      "activities.badge": "예정된 활동 · 가입 안내 준비 중",
      "activities.planned": "예정",
      "activities.timing": "일정 추후 안내",
      "activities.card1.title": "무료 온라인 만남",
      "activities.card1.text": "여성들이 온라인에서 만나 서로를 소개하고 경험을 나누며 새로운 국제적인 친구를 사귈 수 있습니다.",
      "activities.card2.title": "문화 교류",
      "activities.card2.text": "각자의 나라와 전통, 음식, 풍습, 일상생활 등을 소개하며 다양한 문화를 배울 수 있습니다.",
      "activities.card3.title": "그룹 대화와 경험 나누기",
      "activities.card3.text": "여성들이 친근한 그룹 대화 속에서 삶의 이야기와 생각, 감정, 어려움, 응원의 메시지를 나눌 수 있습니다.",
      "activities.note": "모든 활동은 향후 예정된 프로그램입니다. 모임 일정, 진행 방식, 가입 안내는 준비가 완료되는 대로 공지해 드리겠습니다.",

      "who.eyebrow": "참여 대상",
      "who.title": "전 세계 여성들을 환영합니다",
      "who.lead": "한국을 비롯해 전 세계 어디에 살고 있든 18세 이상의 여성이라면 누구나 환영합니다.",
      "who.listIntro": "다음과 관계없이 자유롭게 참여할 수 있습니다.",
      "who.item1": "국적",
      "who.item2": "거주 국가",
      "who.item3": "문화적 배경",
      "who.item4": "모국어",
      "who.item5": "개인적인 삶의 경험",
      "who.closing": "서로의 이야기를 나누고, 다양한 문화를 배우며, 국제적인 우정을 만들고, 서로를 응원하고 싶은 여성이라면 누구나 환영합니다.",
      "who.cardKicker": "당신을 위한 공간",
      "who.cardTitle": "전 세계 여성들",
      "who.chip1": "모든 국적",
      "who.chip2": "어떤 언어든",
      "who.chip3": "모든 문화",
      "who.cardNote": "특별한 경험이 없어도 괜찮습니다. 호기심과 이야기, 그리고 따뜻한 마음만 가지고 오세요.",
      "who.ageAria": "18세 이상 여성",

      "values.eyebrow": "우리를 이끄는 가치",
      "values.title": "우리의 가치",
      "values.lead": "다섯 가지 소중한 가치가 모든 대화와 환영, 그리고 우정을 만들어 갑니다.",
      "values.friendship.title": "우정",
      "values.friendship.text": "의미 있는 인연을 만들어 갑니다",
      "values.respect.title": "존중",
      "values.respect.text": "서로의 문화와 의견을 존중합니다",
      "values.understanding.title": "이해",
      "values.understanding.text": "서로의 이야기를 듣고 배웁니다",
      "values.encouragement.title": "응원",
      "values.encouragement.text": "서로를 지지하고 용기를 줍니다",
      "values.belonging.title": "소속감",
      "values.belonging.text": "누구나 환영받는 커뮤니티를 만듭니다",

      "join.eyebrow": "커뮤니티에 참여하세요",
      "join.freeBadge": "무료 커뮤니티 · Free to join",
      "join.title": "당신의 이야기는 소중합니다. 새로운 우정이 여기서 시작됩니다.",
      "join.lead": "현재 전 세계 여성들이 함께할 수 있는 글로벌 여성 커뮤니티를 준비하고 있습니다. 전 세계의 18세 이상 여성이라면 누구나 무료로 참여하실 수 있습니다.",
      "join.point1": "모든 회원에게 무료로 제공됩니다",
      "join.point2": "전 세계 모든 나라와 문화의 18세 이상 여성",
      "join.point3": "모든 이야기를 존중하는 따뜻한 공간",
      "join.cta": "연락처 및 소식 확인하기",
      "join.note": "여러분과 함께할 날을 기대합니다!",
      "join.status": "추후 안내",
      "join.registrationTitle": "온라인 가입",
      "join.registrationText": "온라인 가입 및 연락처 정보는 추후 안내해 드릴 예정입니다. 현재는 가입 신청서가 운영되지 않습니다.",
      "join.registrationNote": "이 웹사이트는 개인정보를 수집하지 않습니다.",

      "trust.label": "우리의 약속",
      "trust.kindnessTitle": "친절이 먼저입니다",
      "trust.kindnessText": "언제나 서로를 존중하는 대화를 나눕니다.",
      "trust.privacyTitle": "개인정보를 존중합니다",
      "trust.privacyText": "편안하게 나누고 싶은 만큼만 이야기하세요.",
      "trust.belongingTitle": "모두가 소속된 공간",
      "trust.belongingText": "모든 문화와 모든 이야기는 소중합니다.",

      "contact.eyebrow": "연락처",
      "contact.title": "우리와 함께해 주세요",
      "contact.lead": "저희 커뮤니티에 관심을 가져주셔서 감사합니다.",
      "contact.p1": "다양한 나라의 여성들이 서로 만나고, 이야기를 나누며, 함께 응원할 수 있는 따뜻한 공간을 준비하고 있습니다.",
      "contact.p2": "가입 및 연락처 정보는 추후 공지할 예정입니다.",
      "contact.note": "한 번의 대화, 한 번의 만남부터 정성으로 커뮤니티를 만들어 가고 있습니다.",
      "contact.cardKicker": "커뮤니티 정보",
      "contact.inDevelopment": "준비 중",
      "contact.cardTitle": "단체 및 연락처 정보",
      "contact.orgLabel": "단체명",
      "contact.orgValue": "한국 여성과 세계 여성의 만남의 공간",
      "contact.founderLabel": "설립자",
      "contact.statusLabel": "커뮤니티 현황",
      "contact.statusValue": "글로벌 여성 커뮤니티를 준비하고 있습니다",
      "contact.registrationLabel": "가입 안내",
      "contact.registrationValue": "추후 공지 예정",
      "contact.detailsLabel": "연락처",
      "contact.detailsValue": "추후 공지 예정",
      "contact.footNote": "아직 공개된 연락처가 없습니다. 추후 안내되는 소식을 다시 확인해 주세요.",

      "footer.name": "한국 여성과 세계 여성의 만남의 공간",
      "footer.mission": "국경을 넘어 여성들의 마음을 연결합니다.",
      "footer.tagline": "서로 다른 나라, 서로 다른 이야기, 하나로 연결되는 세계 여성들의 우정.",
      "footer.backTop": "맨 위로",
      "footer.navLabel": "하단 메뉴",
      "footer.copyright": "한국 여성과 세계 여성의 만남의 공간. 모든 권리 보유.",
      "footer.privacy": "18세 이상 여성을 위한 무료 커뮤니티 · 이 웹사이트는 개인정보를 수집하지 않습니다."
    }
  };

  const languageStatus = document.getElementById("language-status");
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const siteHeader = document.querySelector(".site-header");
  const brand = document.querySelector(".brand");
  const languageButtons = Array.from(document.querySelectorAll("[data-set-lang]"));
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
  const reveals = Array.from(document.querySelectorAll(".reveal"));
  const backToTop = document.getElementById("back-to-top");
  const yearTarget = document.getElementById("current-year");

  let currentLanguage = "en";
  let menuOpen = false;
  let scrollTicking = false;

  function getSavedLanguage() {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved === "ko" ? "ko" : "en";
    } catch (error) {
      return "en";
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      /* Local storage may be unavailable in private or restricted contexts. */
    }
  }

  function translation(language, key) {
    return translations[language]?.[key] ?? translations.en[key] ?? "";
  }

  function updateMeta(language) {
    const title = translation(language, "meta.title");
    const description = translation(language, "meta.description");
    const locale = translation(language, "meta.locale");
    const siteName = translation(language, "brand.name");

    document.title = title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.setAttribute("content", description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description);

    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (ogSiteName) ogSiteName.setAttribute("content", siteName);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", locale);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", description);
  }

  function updateToggleLabel() {
    const key = menuOpen ? "menu.close" : "menu.open";
    navToggle?.setAttribute("aria-label", translation(currentLanguage, key));
  }

  function applyLanguage(language, options = {}) {
    const nextLanguage = language === "ko" ? "ko" : "en";
    const shouldAnnounce = Boolean(options.announce);
    const shouldPersist = options.persist !== false;
    currentLanguage = nextLanguage;

    html.lang = nextLanguage;
    html.dataset.lang = nextLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = translation(nextLanguage, key);
      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.dataset.i18nHtml;
      const value = translation(nextLanguage, key);
      if (value) element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      const value = translation(nextLanguage, key);
      if (value) element.setAttribute("aria-label", value);
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.setLang === nextLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    updateMeta(nextLanguage);
    updateToggleLabel();

    if (shouldPersist) saveLanguage(nextLanguage);

    if (shouldAnnounce && languageStatus) {
      languageStatus.textContent = translation(nextLanguage, "a11y.langChanged");
    }
  }

  function setMenu(open, options = {}) {
    if (!navToggle || !mobileMenu) return;

    menuOpen = Boolean(open);
    mobileMenu.hidden = !menuOpen;
    navToggle.setAttribute("aria-expanded", String(menuOpen));
    updateToggleLabel();

    if (options.focusToggle) {
      navToggle.focus();
    }
  }

  function headerOffset() {
    return (siteHeader?.offsetHeight || 72) + 12;
  }

  function scrollToTarget(target) {
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset());
    window.scrollTo({
      top,
      behavior: reduceMotion.matches ? "auto" : "smooth"
    });

    if (target.matches("main, section") && !target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
    }

    if (target.matches("main, section")) {
      window.requestAnimationFrame(() => target.focus({ preventScroll: true }));
    }
  }

  function setActiveNavigation() {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const availableNavIds = new Set(navLinks.map((link) => link.dataset.navLink));
    const marker = window.scrollY + headerOffset() + Math.min(window.innerHeight * 0.2, 180);
    let activeId = "home";

    sections.forEach((section) => {
      if (marker >= section.offsetTop && availableNavIds.has(section.id)) {
        activeId = section.id;
      }
    });

    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
      activeId = "contact";
    }

    navLinks.forEach((link) => {
      if (link.dataset.navLink === activeId) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;

    window.requestAnimationFrame(() => {
      siteHeader?.classList.toggle("is-scrolled", window.scrollY > 16);
      setActiveNavigation();
      scrollTicking = false;
    });
  }

  function setupReveals() {
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      reveals.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px"
      }
    );

    reveals.forEach((element) => revealObserver.observe(element));
  }

  /* Language controls */
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.setLang;
      if (nextLanguage === currentLanguage) return;
      applyLanguage(nextLanguage, { announce: true, persist: true });
      if (menuOpen) setMenu(false);
    });
  });

  /* Mobile navigation */
  navToggle?.addEventListener("click", () => {
    setMenu(!menuOpen);
  });

  document.addEventListener("click", (event) => {
    if (!menuOpen) return;
    if (mobileMenu?.contains(event.target) || navToggle?.contains(event.target)) return;
    setMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuOpen) {
      setMenu(false, { focusToggle: true });
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 1041px)");
  const closeMenuOnDesktop = (event) => {
    if (event.matches && menuOpen) setMenu(false);
  };

  if (typeof desktopQuery.addEventListener === "function") {
    desktopQuery.addEventListener("change", closeMenuOnDesktop);
  } else if (typeof desktopQuery.addListener === "function") {
    desktopQuery.addListener(closeMenuOnDesktop);
  }

  /* Smooth in-page navigation */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      if (menuOpen) setMenu(false);
      scrollToTarget(target);

      try {
        window.history.pushState(null, "", href);
      } catch (error) {
        /* History updates may be restricted for local files. */
      }
    });
  });

  /* Back to top */
  backToTop?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion.matches ? "auto" : "smooth"
    });
    brand?.focus({ preventScroll: true });
  });

  /* Year */
  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }

  /* Active section + header state */
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  /* Initial setup */
  const initialLanguage = getSavedLanguage();
  applyLanguage(initialLanguage, { announce: false, persist: false });
  setupReveals();
  onScroll();
})();
