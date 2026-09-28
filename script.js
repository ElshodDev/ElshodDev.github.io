/* elshod.me — behaviour: language, theme, mobile nav, GitHub line, contact form */
(function () {
    'use strict';

    // ---------------------------------------------------------------------
    // Translations
    // ---------------------------------------------------------------------
    const T = {
        en: {
            skip: 'Skip to content',
            menu: 'Menu',
            nav_work: 'Work', nav_skills: 'Skills', nav_about: 'About', nav_contact: 'Contact',
            theme_to_light: 'Switch to light theme', theme_to_dark: 'Switch to dark theme',

            status: 'Open to junior .NET roles',
            lede: "Junior .NET developer. I build backends with ASP.NET Core, EF Core and PostgreSQL, and I'm learning Angular so I can ship the whole product.",
            cta_work: 'See my work', cta_contact: 'Get in touch',

            work_title: 'Work',
            work_sub: "One product I'm building for real users, and the projects that taught me the stack.",
            featured_label: 'Featured project',
            mulkchi_sub: 'Real-estate platform for Uzbekistan',
            mulkchi_desc: "A marketplace for buying, selling and renting homes, with a separate workflow for agents and AI-based price forecasts. I wrote the backend from scratch: ASP.NET Core 9 on a Clean Architecture layout, JWT authentication, PostgreSQL through EF Core, and Docker for deployment. The Angular front end is where I'm learning to own the full stack.",
            mulkchi_h1: 'Clean Architecture with separate domain, application, infrastructure and API layers',
            mulkchi_h2: 'JWT authentication with user and agent roles',
            mulkchi_h3: 'PostgreSQL with EF Core migrations, deployed with Docker',
            mulkchi_status: 'In progress since 2024',
            ff_status: 'Status', ff_role: 'My role', ff_users: 'Built for',
            mulkchi_role: 'Solo developer: backend, database, deployment, and the Angular front end',
            mulkchi_users: 'Buyers, renters and real-estate agents in Uzbekistan',
            btn_demo: 'Open live demo', btn_source: 'Source on GitHub',
            projects_title: 'More projects',
            type_bot: 'Telegram bot', type_api: 'REST API', type_web: 'Web app', type_game: 'Game',
            bot_desc: 'Telegram bot for office automation and digital services, written in Python with aiogram.',
            btn_bot: 'Open in Telegram',
            ecom_desc: 'RESTful API with JWT authentication, admin and customer roles, and full Swagger documentation. Runs in Docker.',
            task_title: 'Task Management System',
            task_desc: 'Multi-user task tracker on Clean Architecture with an EF Core repository layer and MS SQL Server. University project.',
            unity_desc: '3D football game built in Unity and C#, with physics-based ball handling and dynamic scenes.',

            skills_title: 'Skills',
            skills_sub: "What I use day to day, and what I'm adding next.",
            sk_lang: 'Languages', sk_backend: 'Backend', sk_db: 'Databases', sk_tools: 'Tools',
            sk_ai: 'AI tooling', sk_also: 'Also worked with', sk_learning: 'Learning now',
            sk_rest: 'REST API design', sk_jwt: 'JWT authentication',
            sk_prompt: 'Prompt engineering', sk_agents: 'AI agents',

            about_title: 'About',
            about_sub: 'Where I study, what I speak, and how I got here.',
            about_text: "I'm a final-year computer science student in Tashkent who has spent the last two years building web backends in C#. I care about clean architecture, clear API contracts and code the next person can read without asking. Right now I'm growing into a full-stack engineer through Angular and TypeScript, and I'm looking for a junior .NET role or a team I can learn from.",
            edu_title: 'Education',
            edu_school: 'National University of Uzbekistan',
            edu_degree: 'Bachelor of Science, Computer Science',
            lang_title: 'Languages',
            lang_uz: 'Uzbek', lang_uz_lvl: 'native',
            lang_en: 'English', lang_en_lvl: 'B1',
            lang_ru: 'Russian', lang_ru_lvl: 'basic',
            tl_2022: 'Started computer science at the National University of Uzbekistan',
            tl_2023: 'Task Management System — first serious web application',
            tl_2024: 'E-Commerce REST API; started building Mulkchi',
            tl_2026: 'Telegram bot and MiniFutbol; graduation year',

            contact_title: 'Contact',
            contact_sub: 'Have a role, a project or a question? Write here or on Telegram; I answer both.',
            f_name: 'Name', f_email: 'Email', f_subject: 'Subject', f_message: 'Message',
            ph_name: 'Your name', ph_email: 'you@company.com',
            ph_subject: 'Job offer, collaboration, question', ph_message: 'Hi Elshod, …',
            f_send: 'Send message', f_sending: 'Sending…',
            f_ok: "Sent. I'll reply soon.",
            f_err: "Couldn't send. Try again or write on Telegram.",
            f_invalid: 'Please fill in every field with a valid email.',
            direct_title: 'Directly', direct_phone: 'Phone',

            footer_built: 'Hand-built with HTML, CSS and plain JavaScript.',
            footer_source: 'Source on GitHub'
        },

        uz: {
            skip: "Asosiy qismga o'tish",
            menu: 'Menyu',
            nav_work: 'Ishlar', nav_skills: "Ko'nikmalar", nav_about: 'Haqimda', nav_contact: "Bog'lanish",
            theme_to_light: "Yorug' rejimga o'tish", theme_to_dark: "Qorong'i rejimga o'tish",

            status: 'Junior .NET ishlariga ochiqman',
            lede: "Junior .NET dasturchiman. ASP.NET Core, EF Core va PostgreSQL bilan backend yozaman; mahsulotni boshidan oxirigacha o'zim chiqara olishim uchun Angular o'rganyapman.",
            cta_work: "Ishlarimni ko'rish", cta_contact: "Bog'lanish",

            work_title: 'Ishlar',
            work_sub: "Haqiqiy foydalanuvchilar uchun qurayotgan bitta mahsulot va menga stekni o'rgatgan loyihalar.",
            featured_label: 'Asosiy loyiha',
            mulkchi_sub: "O'zbekiston uchun ko'chmas mulk platformasi",
            mulkchi_desc: "Uy-joy sotib olish, sotish va ijaraga berish maydonchasi: agentlar uchun alohida ish oqimi va sun'iy intellekt asosida narx bashorati bor. Backendni noldan o'zim yozdim — Clean Architecture asosidagi ASP.NET Core 9, JWT autentifikatsiya, EF Core orqali PostgreSQL va deploy uchun Docker. Angular'dagi frontend esa full-stack bo'lish yo'lidagi mashqim.",
            mulkchi_h1: "Clean Architecture: domain, application, infrastructure va API qatlamlari alohida",
            mulkchi_h2: "JWT autentifikatsiya, foydalanuvchi va agent rollari",
            mulkchi_h3: "EF Core migratsiyalari bilan PostgreSQL, Docker orqali deploy",
            mulkchi_status: '2024-yildan beri ishlanmoqda',
            ff_status: 'Holati', ff_role: 'Mening rolim', ff_users: 'Kimlar uchun',
            mulkchi_role: "Yagona dasturchi: backend, ma'lumotlar bazasi, deploy va Angular frontend",
            mulkchi_users: "O'zbekistondagi xaridorlar, ijarachilar va ko'chmas mulk agentlari",
            btn_demo: 'Jonli demoni ochish', btn_source: "Kodi GitHub'da",
            projects_title: 'Boshqa loyihalar',
            type_bot: 'Telegram bot', type_api: 'REST API', type_web: 'Veb-ilova', type_game: "O'yin",
            bot_desc: "Ofis ishlarini avtomatlashtirish va raqamli xizmatlar uchun Python (aiogram) da yozilgan Telegram bot.",
            btn_bot: 'Telegramda ochish',
            ecom_desc: "JWT autentifikatsiya, admin va mijoz rollari hamda to'liq Swagger hujjatlari bilan REST API. Docker'da ishlaydi.",
            task_title: 'Vazifalar boshqaruv tizimi',
            task_desc: "Clean Architecture asosidagi ko'p foydalanuvchili vazifa kuzatuvchisi: EF Core repository qatlami va MS SQL Server. Universitet loyihasi.",
            unity_desc: "Unity va C# da yozilgan 3D futbol o'yini: fizikaga asoslangan to'p boshqaruvi va dinamik sahnalar.",

            skills_title: "Ko'nikmalar",
            skills_sub: "Har kuni ishlatadigan va navbatda o'rganayotgan narsalarim.",
            sk_lang: 'Tillar', sk_backend: 'Backend', sk_db: "Ma'lumotlar bazasi", sk_tools: 'Vositalar',
            sk_ai: 'AI vositalari', sk_also: 'Yana ishlaganman', sk_learning: "Hozir o'rganyapman",
            sk_rest: 'REST API dizayni', sk_jwt: 'JWT autentifikatsiya',
            sk_prompt: 'Prompt engineering', sk_agents: 'AI agentlar',

            about_title: 'Haqimda',
            about_sub: "Qayerda o'qiyman, qaysi tillarda gaplashaman va bu yerga qanday keldim.",
            about_text: "Toshkentda kompyuter fanlari bo'yicha bitiruvchi kurs talabasiman; so'nggi ikki yilni C# da veb-backend yozishga sarfladim. Toza arxitektura, aniq API shartnomasi va keyingi odam so'ramasdan o'qiy oladigan kod men uchun muhim. Hozir Angular va TypeScript orqali full-stack tomon o'syapman; junior .NET dasturchi sifatida ishlashga yoki o'rganadigan jamoaga qo'shilishga tayyorman.",
            edu_title: "Ta'lim",
            edu_school: "O'zbekiston Milliy universiteti",
            edu_degree: 'Bakalavr, kompyuter fanlari',
            lang_title: 'Tillar',
            lang_uz: "O'zbek", lang_uz_lvl: 'ona tili',
            lang_en: 'Ingliz', lang_en_lvl: 'B1',
            lang_ru: 'Rus', lang_ru_lvl: "boshlang'ich",
            tl_2022: "O'zMUda kompyuter fanlari bo'yicha o'qishni boshladim",
            tl_2023: 'Vazifalar boshqaruv tizimi — birinchi jiddiy veb-ilovam',
            tl_2024: 'E-Commerce REST API; Mulkchi ustida ish boshlandi',
            tl_2026: 'Telegram bot va MiniFutbol; bitiruv yili',

            contact_title: "Bog'lanish",
            contact_sub: "Ish taklifi, loyiha yoki savolingiz bo'lsa — shu yerdan yoki Telegramdan yozing, ikkalasiga ham javob beraman.",
            f_name: 'Ism', f_email: 'Email', f_subject: 'Mavzu', f_message: 'Xabar',
            ph_name: 'Ismingiz', ph_email: 'siz@kompaniya.uz',
            ph_subject: 'Ish taklifi, hamkorlik, savol', ph_message: 'Salom Elshod, …',
            f_send: 'Xabar yuborish', f_sending: 'Yuborilmoqda…',
            f_ok: 'Yuborildi. Tez orada javob beraman.',
            f_err: "Yuborilmadi. Qayta urinib ko'ring yoki Telegramda yozing.",
            f_invalid: "Barcha maydonlarni to'ldiring va emailni tekshiring.",
            direct_title: "To'g'ridan-to'g'ri", direct_phone: 'Telefon',

            footer_built: "HTML, CSS va oddiy JavaScript bilan qo'lda yozilgan.",
            footer_source: "Kodi GitHub'da"
        },

        ru: {
            skip: 'К содержанию',
            menu: 'Меню',
            nav_work: 'Работы', nav_skills: 'Навыки', nav_about: 'Обо мне', nav_contact: 'Контакты',
            theme_to_light: 'Включить светлую тему', theme_to_dark: 'Включить тёмную тему',

            status: 'Открыт для junior .NET вакансий',
            lede: 'Junior .NET-разработчик. Пишу бэкенды на ASP.NET Core, EF Core и PostgreSQL и учу Angular, чтобы собирать продукт целиком.',
            cta_work: 'Смотреть работы', cta_contact: 'Написать мне',

            work_title: 'Работы',
            work_sub: 'Один продукт, который я делаю для реальных пользователей, и проекты, на которых учил стек.',
            featured_label: 'Главный проект',
            mulkchi_sub: 'Платформа недвижимости для Узбекистана',
            mulkchi_desc: 'Площадка для покупки, продажи и аренды жилья с отдельным сценарием для агентов и прогнозом цен на основе ИИ. Бэкенд написал с нуля: ASP.NET Core 9 на Clean Architecture, JWT-аутентификация, PostgreSQL через EF Core, Docker для деплоя. Фронтенд на Angular — моя практика на пути к full-stack.',
            mulkchi_h1: 'Clean Architecture: отдельные слои domain, application, infrastructure и API',
            mulkchi_h2: 'JWT-аутентификация с ролями пользователя и агента',
            mulkchi_h3: 'PostgreSQL с миграциями EF Core, деплой через Docker',
            mulkchi_status: 'В разработке с 2024 года',
            ff_status: 'Статус', ff_role: 'Моя роль', ff_users: 'Для кого',
            mulkchi_role: 'Единственный разработчик: бэкенд, база данных, деплой и фронтенд на Angular',
            mulkchi_users: 'Покупатели, арендаторы и агенты по недвижимости в Узбекистане',
            btn_demo: 'Открыть демо', btn_source: 'Код на GitHub',
            projects_title: 'Другие проекты',
            type_bot: 'Telegram-бот', type_api: 'REST API', type_web: 'Веб-приложение', type_game: 'Игра',
            bot_desc: 'Telegram-бот на Python (aiogram) для автоматизации офиса и цифровых услуг.',
            btn_bot: 'Открыть в Telegram',
            ecom_desc: 'REST API с JWT-аутентификацией, ролями администратора и клиента и полной документацией Swagger. Работает в Docker.',
            task_title: 'Система управления задачами',
            task_desc: 'Многопользовательский трекер задач на Clean Architecture: репозиторный слой EF Core и MS SQL Server. Университетский проект.',
            unity_desc: '3D-футбол на Unity и C#: физика мяча и динамические сцены.',

            skills_title: 'Навыки',
            skills_sub: 'Чем пользуюсь каждый день и что осваиваю дальше.',
            sk_lang: 'Языки', sk_backend: 'Бэкенд', sk_db: 'Базы данных', sk_tools: 'Инструменты',
            sk_ai: 'ИИ-инструменты', sk_also: 'Также работал с', sk_learning: 'Изучаю сейчас',
            sk_rest: 'Проектирование REST API', sk_jwt: 'JWT-аутентификация',
            sk_prompt: 'Промпт-инжиниринг', sk_agents: 'ИИ-агенты',

            about_title: 'Обо мне',
            about_sub: 'Где учусь, на каких языках говорю и как сюда пришёл.',
            about_text: 'Учусь на последнем курсе по компьютерным наукам в Ташкенте; последние два года пишу веб-бэкенды на C#. Мне важны чистая архитектура, понятные контракты API и код, который следующий разработчик прочитает без вопросов. Сейчас расту в сторону full-stack через Angular и TypeScript и ищу позицию junior .NET-разработчика или команду, у которой можно учиться.',
            edu_title: 'Образование',
            edu_school: 'Национальный университет Узбекистана',
            edu_degree: 'Бакалавр, компьютерные науки',
            lang_title: 'Языки',
            lang_uz: 'Узбекский', lang_uz_lvl: 'родной',
            lang_en: 'Английский', lang_en_lvl: 'B1',
            lang_ru: 'Русский', lang_ru_lvl: 'базовый',
            tl_2022: 'Поступил на компьютерные науки в НУУз',
            tl_2023: 'Система управления задачами — первое серьёзное веб-приложение',
            tl_2024: 'E-Commerce REST API; начал Mulkchi',
            tl_2026: 'Telegram-бот и MiniFutbol; выпускной год',

            contact_title: 'Контакты',
            contact_sub: 'Есть вакансия, проект или вопрос? Напишите здесь или в Telegram — отвечу и там, и там.',
            f_name: 'Имя', f_email: 'Email', f_subject: 'Тема', f_message: 'Сообщение',
            ph_name: 'Ваше имя', ph_email: 'vy@company.com',
            ph_subject: 'Вакансия, сотрудничество, вопрос', ph_message: 'Привет, Эльшод, …',
            f_send: 'Отправить', f_sending: 'Отправляю…',
            f_ok: 'Отправлено. Скоро отвечу.',
            f_err: 'Не отправилось. Попробуйте ещё раз или напишите в Telegram.',
            f_invalid: 'Заполните все поля и проверьте email.',
            direct_title: 'Напрямую', direct_phone: 'Телефон',

            footer_built: 'Сделано вручную на HTML, CSS и чистом JavaScript.',
            footer_source: 'Код на GitHub'
        }
    };

    const html = document.documentElement;
    const store = {
        get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
        set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode etc. */ } }
    };

    // ---------------------------------------------------------------------
    // Language
    // ---------------------------------------------------------------------
    let lang = 'en';

    function detectLang() {
        const saved = store.get('portfolio-lang');
        if (saved && T[saved]) return saved;
        const nav = (navigator.language || '').slice(0, 2).toLowerCase();
        return T[nav] ? nav : 'en';
    }

    function applyLang(next) {
        if (!T[next]) return;
        lang = next;
        const t = T[lang];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] != null) el.textContent = t[key];
        });
        document.querySelectorAll('[data-ph]').forEach(el => {
            const key = el.getAttribute('data-ph');
            if (t[key] != null) el.placeholder = t[key];
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
        });

        html.setAttribute('lang', lang);
        updateThemeLabel();
        store.set('portfolio-lang', lang);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });

    // ---------------------------------------------------------------------
    // Theme (initial value is set by the inline script in <head>)
    // ---------------------------------------------------------------------
    const themeBtn = document.getElementById('themeToggle');

    function updateThemeLabel() {
        if (!themeBtn) return;
        const dark = html.getAttribute('data-theme') !== 'light';
        const label = T[lang][dark ? 'theme_to_light' : 'theme_to_dark'];
        themeBtn.setAttribute('aria-label', label);
        themeBtn.setAttribute('title', label);
    }

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        store.set('portfolio-theme', theme);
        updateThemeLabel();
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        });
    }

    // ---------------------------------------------------------------------
    // Mobile navigation
    // ---------------------------------------------------------------------
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    function closeNav() {
        if (!navLinks) return;
        navLinks.classList.remove('open');
        navToggle && navToggle.setAttribute('aria-expanded', 'false');
    }

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(open));
        });
        navLinks.addEventListener('click', e => { if (e.target.closest('a')) closeNav(); });
        document.addEventListener('click', e => {
            if (!e.target.closest('.nav')) closeNav();
        });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
    }

    // Highlight the section currently in view
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    if ('IntersectionObserver' in window && sections.length && links.length) {
        const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                links.forEach(a => a.classList.remove('active'));
                const a = byId.get(entry.target.id);
                if (a) a.classList.add('active');
            });
        }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
        sections.forEach(s => io.observe(s));
    }

    // ---------------------------------------------------------------------
    // GitHub: add one real, live line to the code card
    // ---------------------------------------------------------------------
    async function loadGitHubLine() {
        const slot = document.getElementById('ghLine');
        if (!slot || !window.fetch) return;
        try {
            const res = await fetch('https://api.github.com/users/ElshodDev', {
                headers: { Accept: 'application/vnd.github+json' }
            });
            if (!res.ok) return;
            const u = await res.json();
            const repos = Number(u.public_repos);
            const followers = Number(u.followers);
            if (!Number.isFinite(repos) || !Number.isFinite(followers)) return;

            const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
            // .pad keeps the "=" column aligned on wide screens; .nl breaks the line on phones
            slot.innerHTML =
                ',\n    GitHub<span class="pad">    </span> = <span class="kw">new</span> { Repos = <span class="num">' + esc(repos) +
                '</span>,<span class="nl">\n                  </span> Followers = <span class="num">' + esc(followers) + '</span> }';
        } catch (e) {
            /* offline or rate-limited: the card is complete without this line */
        }
    }

    // ---------------------------------------------------------------------
    // Contact form (Formspree)
    // ---------------------------------------------------------------------
    const form = document.getElementById('contactForm');
    const note = document.getElementById('formNote');
    const submitBtn = document.getElementById('submitBtn');
    const ENDPOINT = 'https://formspree.io/f/xeerkgbl';

    function say(kind, text) {
        if (!note) return;
        note.className = 'form-note ' + kind;
        note.textContent = text;
    }

    if (form) {
        form.addEventListener('submit', async e => {
            e.preventDefault();
            const t = T[lang];
            let valid = true;

            form.querySelectorAll('[required]').forEach(field => {
                const ok = field.value.trim() !== '' &&
                    (field.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()));
                field.classList.toggle('invalid', !ok);
                if (!ok) valid = false;
            });
            if (!valid) { say('err', t.f_invalid); return; }

            submitBtn.classList.add('is-busy');
            say('', '');
            try {
                const res = await fetch(ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
                });
                if (!res.ok) throw new Error('formspree ' + res.status);
                form.reset();
                say('ok', t.f_ok);
            } catch (err) {
                say('err', t.f_err);
            } finally {
                submitBtn.classList.remove('is-busy');
            }
        });

        form.querySelectorAll('input, textarea').forEach(f => {
            f.addEventListener('input', () => f.classList.remove('invalid'));
        });
    }

    // ---------------------------------------------------------------------
    // Init
    // ---------------------------------------------------------------------
    applyLang(detectLang());
    updateThemeLabel();
    loadGitHubLine();
})();
