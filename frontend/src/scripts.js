// Frontend behavior & dynamic rendering
(function(){
  // Remove no-js class if present
  try { document.documentElement.classList.remove('no-js'); } catch {}
  const qs = sel => document.querySelector(sel);
  const qsa = sel => [...document.querySelectorAll(sel)];
  let githubReposLoading = false;
  const GITHUB_USER = 'Priyanshusahay12222301';

  const DATA = {
    socials: [
      { name:'GitHub', url:'https://github.com/Priyanshusahay12222301', icon:'github' },
      { name:'LinkedIn', url:'https://www.linkedin.com/in/priyanshu-sahay', icon:'linkedin' },
      { name:'Email', url:'mailto:priyanshusahay90@gmail.com', icon:'mail' },
      { name:'Phone', url:'tel:+919508611922', icon:'phone' }
    ],
    skills: [
      { name:'Python', level:'Advanced', description:'Data apps, ML integration, scripting' },
      { name:'C++', level:'Advanced', description:'DSA, performance optimization' },
      { name:'JavaScript', level:'Advanced', description:'Frontend & backend (Node.js) engineering' },
      { name:'C', level:'Intermediate', description:'Systems fundamentals & memory concepts' },
      { name:'PHP', level:'Intermediate', description:'Server-side scripting & integration' },
  { name:'C#', level:'Intermediate', description:'OOP, .NET ecosystem familiarity' },
  { name:'.NET Framework', level:'Intermediate', description:'Building server-side apps and services' },
  { name:'HTML & CSS', level:'Advanced', description:'Responsive, accessible UI with modern CSS' },
      { name:'Flask', level:'Intermediate', description:'ML inference APIs & lightweight web services' },
      { name:'React', level:'Advanced', description:'Hooks, state mgmt, component architecture' },
      { name:'Node.js', level:'Advanced', description:'RESTful APIs, real-time services, payments' },
  { name:'Express.js', level:'Advanced', description:'API design, middleware, auth, validation' },
  { name:'jQuery', level:'Intermediate', description:'Legacy DOM utilities and widgets' },
      { name:'NumPy / Pandas', level:'Intermediate', description:'Data processing & feature engineering' },
  { name:'MySQL', level:'Advanced', description:'Relational schema design and performance' },
  { name:'MongoDB', level:'Advanced', description:'Document modeling, indexing, aggregation' },
  { name:'Git', level:'Advanced', description:'Branching, PRs, rebasing, workflows' },
  { name:'GitHub', level:'Advanced', description:'Version control, CI basics, project boards' },
  { name:'Databases', level:'Advanced', description:'MySQL & MongoDB schema design and querying' },
      { name:'Generative AI', level:'Intermediate', description:'Prompt engineering, LLM API integration, agents' },
  { name:'Prompt Engineering', level:'Intermediate', description:'Task decomposition, instruction tuning' },
  { name:'LLMs', level:'Intermediate', description:'Model capabilities, context windows, limits' },
  { name:'RAG', level:'Intermediate', description:'Indexing, chunking, retrieval pipelines' },
  { name:'API Calling', level:'Intermediate', description:'Secure API integration and orchestration' },
  { name:'AI Agents', level:'Intermediate', description:'Tool-use, planning, guardrails' },
      { name:'RESTful APIs', level:'Advanced', description:'Design, security, scalability' },
  { name:'Soft Skills', level:'Core', description:'Team leadership, collaboration, agile delivery' },
  { name:'Team Leadership', level:'Core', description:'Driving outcomes, mentoring, ownership' },
  { name:'Cross-functional Collaboration', level:'Core', description:'Partnering with design, product, QA' },
  { name:'Agile Learning', level:'Core', description:'Iterative learning and rapid upskilling' },
    ],
    projects: [
      // Only keep these eight projects
      {
        title:'Heart Disease Prediction Web App',
        description:'Flask app serving ML model to predict heart disease risk with clean UI and deployment setup.',
        tags:['Python','Flask','scikit-learn','ML','HTML','CSS'],
        repo:'https://github.com/Priyanshusahay12222301/heart_Disease_Prediction',
        demo:'#',
        category:'featured'
      },
      {
        title:'Rent Wheels – Car Rental Platform',
        description:'Real-time car rental platform with booking, payments, and admin dashboard.',
        tags:['PHP','MySQL','JavaScript','Bootstrap','Payments'],
        repo:'https://github.com/Priyanshusahay12222301/Car-Rental',
        demo:'#',
        category:'featured'
      },
      {
        title:'AgriBuddy – Plant Disease Detection',
        description:'AI-powered plant disease detector via image uploads; highlights disease info and remedies.',
        tags:['Python','ML','AI','Computer Vision'],
        repo:'#',
        demo:'#',
        category:'featured'
      },
      {
        title:'Expence Tracker',
        description:'Personal expense tracker to log, categorize, and visualize spending trends.',
        tags:['JavaScript','CSS','LocalStorage'],
  repo:'https://github.com/Priyanshusahay12222301/Expence_Tracker',
        demo:'#',
        category:'featured'
      },
      {
        title:'RecipeBook',
        description:'Recipe management app for adding, searching, and organizing cooking instructions.',
        tags:['JavaScript','HTML','CSS'],
  repo:'https://github.com/Priyanshusahay12222301/RecipeBook',
        demo:'#',
        category:'featured'
      },
      {
        title:'EmployeeManagementSystem',
        description:'Full stack Java project demonstrating layered architecture and REST APIs for employee management.',
        tags:['Java','Spring','REST'],
        repo:'https://github.com/Priyanshusahay12222301/EmployeeManagementSystem',
        demo:'#',
        category:'featured'
      },
      {
        title:'E Wate Management',
        description:'e‑waste management solution focusing on collection workflows and user awareness.',
        tags:['Web','JavaScript','UI/UX'],
  repo:'https://github.com/Priyanshusahay12222301/E-Wate-management',
        demo:'#',
        category:'featured'
      },
      {
        title:'NeighborFit',
        description:'Community fitness app for neighborhood workouts, scheduling, and tracking.',
        tags:['Web','JavaScript','CSS'],
  repo:'https://github.com/Priyanshusahay12222301/NeighborFit',
        demo:'#',
        category:'featured'
      }
    ],
    experience: [
      { role:'Full-Stack Intern', company:'Natromac Technologies (Remote)', period:'May 2025 - Jul 2025', detail:'Engineered and launched company website (React, Node.js, MongoDB); built responsive UI, secure contact backend & deployed production stack.' }
    ],
    achievements: [
      { title:'Ranked among the top teams in BlockBash Hackathon', detail:'' },
      { title:'Solved 250+ problems across LeetCode, GeeksforGeeks, HackerRank, and CodeChef', detail:'' },
      { title:'Winner - Codefest 2.0 Hackathon', detail:'Secured 1st place delivering innovative solution among top teams.' },
      { title:'Top 5 Finalist - Arena Hackathon', detail:'Recognized for AI-driven solution design & implementation.' },
      { title:'Competitive Programming', detail:'CodeChef rating 1140 demonstrating algorithmic proficiency.' }
    ],
    education: [
      { title:'B.Tech Computer Science & Engineering', org:'Lovely Professional University, Punjab', period:'Aug 2022 - Present', detail:'CGPA: 6.8. Focus on software engineering, AI, data structures.' },
      { title:'Intermediate (Senior Secondary)', org:'SGD Modern School, Jharkhand', period:'Apr 2020 - Mar 2022', detail:'Percentage: 65%. STEM & foundational CS.' },
      { title:'Matriculation', org:'SGD Modern School, Jharkhand', period:'Apr 2018 - Mar 2020', detail:'Percentage: 83%. Core academics & early programming interest.' }
    ],
    certificates: [
  { name:'Data Structures & Algorithms (C++)', issuer:'GeeksforGeeks', year:'2025', url:'dsa.pdf' },
  { name:'Python Certification', issuer:'HackerRank', year:'2025', url:'https://www.hackerrank.com/certificates/2d0c3ac07061' },
  { name:'Cloud Computing', issuer:'NPTEL', year:'2024', url:'https://www.linkedin.com/posts/priyanshu-sahay_learningneverstops-cloudcomputing-nptel-activity-7267575362673369088-Odel?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD7gDhEBpUJZrjOt-R7zi4toBy0DmT5E1SM' },
  { name:'Generative AI', issuer:'Coursera', year:'2024', url:'https://www.linkedin.com/posts/priyanshu-sahay_courser-promptengineering-genai-activity-7157405168404230144-JIyv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD7gDhEBpUJZrjOt-R7zi4toBy0DmT5E1SM' }
    ]
  };

  // Manual overrides for GitHub repositories (edit these to refine descriptions & tech stack)
  const GITHUB_OVERRIDES = {
    'heart_Disease_Prediction': {
      description: 'Heart disease risk prediction application leveraging ML model; includes data preprocessing & Flask API.',
      tags: ['Python','Flask','ML','scikit-learn']
    },
    'Expence_Tracker': {
      description: 'Personal expense tracker to log, categorize and visualize spending trends.',
      tags: ['JavaScript','CSS','LocalStorage']
    },
    'RecipeBook': {
      description: 'Recipe management app for adding, searching and organizing cooking instructions.',
      tags: ['JavaScript','HTML','CSS']
    },
    'contactManagement': {
      description: 'Contact management CRUD tool to store, update and search contacts.',
      tags: ['HTML','CSS','JavaScript']
    },
    'javaFullStack_project': {
      description: 'Full stack Java project skeleton demonstrating layered architecture.',
      tags: ['Java','Spring','REST']
    },
   
  };

  // Exclude specific GitHub repositories from appearing in the Projects section
  // (edit this list to hide additional repos)
  const GITHUB_EXCLUDE = new Set([
    // Previously excluded repositories (now showing all projects)
    // 'pkconstructions', 'portfolio', 'portfoilomain'
  ]);

  document.addEventListener('DOMContentLoaded', init);

  function init(){
    try {
      renderYear();
      renderSkills();
      renderProjects();
      renderExperience();
      // renderProjectFilters(); // filter UI removed
      renderAchievements();
      renderEducation();
      renderCertificates();
      setupMenu();
      setupThemeToggle();
      setupScrollSpy();
      setupProjectModal();
      setupContactForm();
      observeFadeIns();
      enhanceLazyImages();
  initTilt();
      registerServiceWorker();
      logWebVitals();
      renderSocials();
    } catch(err){
      console.error('[Init] Failed:', err);
      // Ensure content is visible even if animations fail
      revealAnimationsFallback();
    } finally {
      // If any elements are still hidden after a short delay, reveal them
      setTimeout(()=>{
        const hidden = document.querySelector('[data-animate]:not(.in)');
        if(hidden) revealAnimationsFallback();
        // Contact section safety: ensure fields and title are visible
        const contact = document.getElementById('contact');
        if(contact){
          contact.querySelectorAll('[data-animate]').forEach(el=>el.classList.add('in'));
        }
      }, 400);
    }
    // GitHub auto-fetch disabled to keep only the selected projects
  }

  function initTilt(){
    const cards = qsa('[data-tilt]');
    if(!cards.length) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(prefersReduced) return;
    const maxRot = 8; // degrees
    const damp = 0.12;
    cards.forEach(card=>{
      let raf = null;
      let rx = 0, ry = 0, tx = 0, ty = 0;
      const onMove = (e)=>{
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width/2;
        const cy = rect.top + rect.height/2;
        const px = (e.clientX - cx) / (rect.width/2);
        const py = (e.clientY - cy) / (rect.height/2);
        rx = Math.max(-1, Math.min(1, py)) * maxRot; // tilt X by Y movement
        ry = Math.max(-1, Math.min(1, -px)) * maxRot; // tilt Y by X movement
        schedule();
      };
      const schedule = ()=>{
        if(raf) return;
        raf = requestAnimationFrame(()=>{
          const cur = getComputedStyle(card).transform;
          // combine with hover translateY if present by appending rotate
          card.style.transform = `perspective(800px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
          raf = null;
        });
      };
      const reset = ()=>{ card.style.transform = ''; };
      card.addEventListener('pointermove', onMove);
      card.addEventListener('pointerleave', reset);
      card.addEventListener('blur', reset, true);
    });
  }

  function setupScrollSpy(){
    const navLinks = qsa('.navbar nav a[href^="#"]');
    if(!navLinks.length) return;
    const sections = navLinks
      .map(a=>({ link:a, id:a.getAttribute('href').slice(1), el:qs(a.getAttribute('href')) }))
      .filter(o=>o.el);
    if(!sections.length) return; // guard: avoid errors if no matching sections
    let ticking=false;
    const activate = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.25; // offset for early highlight
      let current = sections[0];
      for(const s of sections){
        if(s.el.offsetTop <= scrollPos) current = s; else break;
      }
      navLinks.forEach(l=>l.classList.remove('active'));
      if(current && current.link) current.link.classList.add('active');
      ticking=false;
    };
    window.addEventListener('scroll', ()=>{ if(!ticking){ ticking=true; requestAnimationFrame(activate);} });
    activate();
  }

  function renderYear(){ const el = qs('#year'); if(el) el.textContent = new Date().getFullYear(); }

  function renderSkills(){
    const grid = qs('#skillsGrid'); if(!grid) return;
    grid.innerHTML = DATA.skills.map(s=>`<div class="skill" data-animate><h3>${s.name}<span class="level">${s.level}</span></h3><p>${s.description}</p></div>`).join('');
  }
  function renderProjects(){
    const grid = qs('#projectsGrid'); if(!grid) return;
    let list = DATA.projects;
    if(!list.length){
      grid.innerHTML = `<div class="empty-note">No projects yet.</div>`;
      return;
    }
    grid.innerHTML = list.map(p=>projectCard(p)).join('');
  }
  function projectCard(p){
    const badge = p.category==='github' ? '<span class="gh-badge" title="Imported from GitHub">GitHub</span>' : '';
    const meta = p.category==='github' ? projectMeta(p) : '';
    return `<article class="project" data-animate data-slug="${slugify(p.title)}">${badge}${projectThumb(p)}<h3>${formatTitle(p.title)}</h3><div class="project-tags">${p.tags.map(t=>`<span data-tag="${slugify(t)}">${t}</span>`).join('')}</div><p class="project-desc">${p.description}</p>${meta}<div class="project-links">${p.repo?`<a href="${p.repo}" target="_blank" rel="noopener">Code</a>`:''}${p.demo?`<a href="${p.demo}" target="_blank" rel="noopener">Live</a>`:''}<button type="button" class="details-btn" data-open="${slugify(p.title)}">Details</button></div></article>`;
  }
  function projectMeta(p){
    const parts=[];
    if(p.language) parts.push(`<span class="meta-pill" title="Primary language">${p.language}</span>`);
    if(p.stars!==undefined) parts.push(`<span class="meta-pill" title="Stars">★ ${p.stars}</span>`);
    if(p.updated) parts.push(`<span class="meta-pill" title="Last updated">${timeAgo(p.updated)}</span>`);
    return `<div class="project-meta">${parts.join('')}</div>`;
  }
  function timeAgo(iso){
    const t = Date.parse(iso);
    if(!t) return '';
    const diff = Date.now()-t;
    const sec = Math.floor(diff/1000), min=Math.floor(sec/60), hr=Math.floor(min/60), day=Math.floor(hr/24);
    if(day>30){ const mo=Math.floor(day/30); return mo+'mo ago'; }
    if(day>0) return day+'d ago';
    if(hr>0) return hr+'h ago';
    if(min>0) return min+'m ago';
    return 'now';
  }
  function formatTitle(str){ return str.replace(/[-_]/g,' ').replace(/\b\w/g,c=>c.toUpperCase()); }
  function projectThumb(p){
    const hasCustomImg = p.image && !p.image.includes('github-repo.svg');
    if(hasCustomImg){
      return `<div class="project-thumb blur-load"><img data-src="${p.image}" alt="${p.title}" loading="lazy"/></div>`;
    }
    const initials = p.title.replace(/[-_]/g,' ').split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase().slice(0,3);
    return `<div class="project-thumb placeholder"><div class="proj-initial" aria-hidden="true">${initials}</div></div>`;
  }
  // Project filter UI and logic removed
  function renderAchievements(){
    const list = qs('#achievementsList'); if(!list) return;
    list.innerHTML = DATA.achievements.map(a=>`<div class='card' data-animate><h3>${a.title}</h3><p>${a.detail}</p></div>`).join('');
  }
  function renderEducation(){
    const tl = qs('#educationTimeline'); if(!tl) return;
    tl.innerHTML = DATA.education.map(e=>`<div class='step' data-animate><h3>${e.title} – ${e.org}</h3><p class='meta'>${e.period}</p><p>${e.detail}</p></div>`).join('');
  }
  function renderCertificates(){
    const grid = qs('#certificatesGrid'); if(!grid) return;
    grid.innerHTML = DATA.certificates.map(c=>{
      const body = `<h3>${c.name}</h3><p>${c.issuer} • ${c.year}</p>`;
      return c.url
        ? `<a class='cert' data-animate href='${c.url}' target='_blank' rel='noopener' aria-label='Open certificate: ${c.name}'>${body}</a>`
        : `<div class='cert' data-animate>${body}</div>`;
    }).join('');
  }
  function renderExperience(){
    const tl = qs('#experienceTimeline'); if(!tl) return;
    tl.innerHTML = DATA.experience.map(e=>`<div class='step' data-animate><h3>${e.role} – ${e.company}</h3><p class='meta'>${e.period}</p><p>${e.detail}</p></div>`).join('');
  }
  function renderSocials(){
    const wrap = qs('#socialLinks'); if(!wrap) return;
    wrap.innerHTML = DATA.socials.map(s=>`<a href='${s.url}' target='_blank' rel='noopener' aria-label='${s.name}'>${icon(s.icon)}</a>`).join('');
  }

  function setupMenu(){
    const toggle = qs('#menuToggle'); const nav = qs('header nav');
    if(!toggle || !nav) return;
    toggle.addEventListener('click', ()=>{
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });
    qsa('header nav a').forEach(a=>a.addEventListener('click', ()=>{
      toggle.classList.remove('active');
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
    }));
    window.addEventListener('scroll', ()=>{
      const navBar = qs('#navbar');
      if(window.scrollY>40) navBar.classList.add('scrolled'); else navBar.classList.remove('scrolled');
    });
  }
  // Lightweight download toast for resume
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('#resumeButton');
    if(a){
      setTimeout(()=>showToast('Downloading resume…'), 80);
    }
  });

  function setupContactForm(){
    const form = qs('#contactForm'); if(!form) return;
    // Ensure inputs have name attributes for Formspree
    const nameEl = qs('#name'); if(nameEl && !nameEl.name) nameEl.name = 'name';
    const emailEl = qs('#email'); if(emailEl && !emailEl.name) emailEl.name = 'email';
  const subjectEl = qs('#subject');
  const msgEl = qs('#note'); if(msgEl && !msgEl.name) msgEl.name = 'message';
  const phoneEl = qs('#phone');
    const toastEl = qs('#toast');
    const subjectHidden = qs('#subjectHidden');
  const counterEl = qs('#noteCounter');
  const recruiterBtn = qs('#insertRecruiterNote');
    // Clear errors on input
  [nameEl, emailEl, msgEl, phoneEl, subjectEl].filter(Boolean).forEach(el=>{
      el.addEventListener('input', ()=>{
        const wrap = el.closest('.field');
        if(wrap){ const err = wrap.querySelector('.error'); if(err) err.textContent=''; }
      });
    });
    // Live character counter for message
    if(msgEl && counterEl){
      const updateCount = ()=> counterEl.textContent = `${msgEl.value.length} / ${msgEl.maxLength||1000}`;
      msgEl.addEventListener('input', updateCount);
      updateCount();
    }
    // Recruiter-friendly note insertion
  if(recruiterBtn && msgEl){
      recruiterBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        const name = (nameEl?.value || 'there');
        const company = (qs('#company')?.value || 'your company');
        const subject = (qs('#subject')?.value || 'Opportunity');
        const email = (qs('#email')?.value || 'my email');
        const lines = [
          `Hi ${company} team,`,
          '',
          `I’m ${name}, a full‑stack developer with experience across Java, JavaScript (Node.js/React), and Python. I’m reaching out regarding "${subject}".`,
          'I build clean, scalable web apps, integrate AI/ML where it adds value, and focus on performance and DX.',
          '',
          'Highlights:',
          '• Built ML‑backed Flask app for heart disease prediction.',
          '• Delivered car rental platform (payments, booking, admin).',
          '• Strong DSA foundation; ship reliable, readable code.',
          '',
          'Links:',
          '• Portfolio: (this page)',
          '• GitHub: https://github.com/Priyanshusahay12222301',
          '• LinkedIn: https://www.linkedin.com/in/priyanshu-sahay',
          '',
          `You can reach me at ${email}. Happy to share more or do a quick call.`,
          '',
          'Thanks for your time,',
          `${name}`
        ];
        msgEl.value = lines.join('\n');
        msgEl.dispatchEvent(new Event('input', { bubbles:true }));
      });
    }
    form.addEventListener('submit', (e)=>{
      // Client-side validation
      clearErrors(form);
      let valid = true;
      if(!nameEl.value.trim()) valid = fieldError('#name','Name required');
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailEl.value||'')) valid = fieldError('#email','Valid email required');
      if(!subjectEl.value.trim()) valid = fieldError('#subject','Subject is required');
      if(!msgEl.value.trim()) valid = fieldError('#note','Note cannot be empty');
      // Basic phone sanity check (international; optional)
      if(phoneEl && phoneEl.value && !/^\+?[0-9\s().-]{7,20}$/.test(phoneEl.value.trim())) valid = fieldError('#phone','Enter a valid phone number');
      if(!valid){ e.preventDefault(); return; }
      // Dynamic subject for better email threading
      if(subjectHidden){
        subjectHidden.value = `${subjectEl.value.trim()} (from ${nameEl.value.trim()})`;
      }
      // Keep message clean; no extra metadata auto-append
      // Button loading state
      const btn = form.querySelector('button[type="submit"]');
      if(btn){ btn.disabled = true; btn.dataset.prev = btn.textContent; btn.textContent = 'Sending...'; setTimeout(()=>{ if(btn){ btn.disabled=false; btn.textContent = btn.dataset.prev || 'Send Message'; } }, 3000); }
      if(toastEl){ showToast('Message sent!'); }
      // Native submit proceeds
    });
  }

  function ensureHiddenInput(form, name, value){
    let el = form.querySelector(`input[name="${name}"]`);
    if(!el){ el = document.createElement('input'); el.type = 'hidden'; el.name = name; form.appendChild(el); }
    el.value = value;
  }

  function showToast(msg){
    const el = qs('#toast'); if(!el) return;
    el.textContent = msg;
    el.hidden = false;
    setTimeout(()=>{ el.hidden = true; }, 2200);
  }

  function fieldError(sel,msg){ const wrap = qs(sel).closest('.field'); wrap.querySelector('.error').textContent = msg; return false; }
  function clearErrors(form){ form.querySelectorAll('.error').forEach(e=>e.textContent=''); }

  function observeFadeIns(){
    const els = qsa('[data-animate]');
    if(!('IntersectionObserver' in window)) { revealAnimationsFallback(); return; }
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); obs.unobserve(en.target);} });
    },{ threshold:.15 });
    els.forEach(el=>obs.observe(el));
  }
  function revealAnimationsFallback(){ qsa('[data-animate]').forEach(el=>el.classList.add('in')); }

  function setupThemeToggle(){
    const btn = qs('#themeToggle'); if(!btn) return;
    const stored = localStorage.getItem('theme');
    if(stored === 'light') document.documentElement.classList.add('light');
    updateThemeIcon();
    btn.addEventListener('click', ()=>{
      document.documentElement.classList.toggle('light');
      const mode = document.documentElement.classList.contains('light') ? 'light' : 'dark';
      localStorage.setItem('theme', mode);
      updateThemeIcon();
    });
    function updateThemeIcon(){
      btn.textContent = document.documentElement.classList.contains('light') ? '🌞' : '🌙';
    }
  }

  function setupProjectModal(){
    const modal = qs('#projectModal'); if(!modal) return;
    const body = qs('#projectModalBody');
    document.addEventListener('click', e=>{
      const openBtn = e.target.closest('[data-open]');
      if(openBtn){
        const slug = openBtn.getAttribute('data-open');
        const project = DATA.projects.find(p=>slugify(p.title)===slug);
        if(project){
          body.innerHTML = projectDetail(project);
          openModal(modal);
        }
      }
      if(e.target.matches('[data-close]') || e.target.classList.contains('modal-backdrop')) closeModal(modal);
    });
    window.addEventListener('keydown', e=>{ if(e.key==='Escape' && !modal.hasAttribute('hidden')) closeModal(modal); });
  }

  // (Removed resume download wiring for a simpler site.)

  // (Resume download is handled natively by the anchor with the `download` attribute.)
  function projectDetail(p){
    return `<h3 id="projectModalTitle">${p.title}</h3>
      <p>${p.description}</p>
      <ul class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</ul>
      <p><strong>Category:</strong> ${p.category}</p>
      <div class="project-links">${p.repo?`<a href='${p.repo}' target='_blank'>Repository</a>`:''} ${p.demo?`<a href='${p.demo}' target='_blank'>Live Demo</a>`:''}</div>`;
  }
  function openModal(modal){ modal.removeAttribute('hidden'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
  function closeModal(modal){ modal.setAttribute('hidden',''); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
  function slugify(str){ return str.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }

  function enhanceLazyImages(){
    const imgs = qsa('img[data-src]');
    const io = new IntersectionObserver(entries=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          const img = en.target;
          img.src = img.dataset.src;
          img.addEventListener('load', ()=> img.classList.add('loaded'));
          io.unobserve(img);
        }
      });
    },{ rootMargin:'200px' });
    imgs.forEach(i=>io.observe(i));
  }

  async function fetchGitHubRepos(){
    githubReposLoading = true;
    const activeBefore = qs('#projectFilters .active')?.dataset.cat || 'all';
    renderProjects(activeBefore);
    try {
      const repos = await fetchAllGitHubRepos(GITHUB_USER);
      const filtered = repos
        .filter(r=>!r.fork && !r.private)
        // Include all repos (no exclusions or slicing)
        .map(r=>({
        title:r.name,
  description: (GITHUB_OVERRIDES[r.name]?.description) || r.description || 'No description provided.',
  tags: (GITHUB_OVERRIDES[r.name]?.tags) || inferTags(r),
        image:`https://opengraph.githubassets.com/1/${GITHUB_USER}/${r.name}`,
        repo:r.html_url,
        demo:r.homepage || '',
        category:'github',
        stars:r.stargazers_count||0,
        language:r.language||'',
        updated:r.updated_at
      }));
      if(filtered.length){
        DATA.projects = [...DATA.projects, ...filtered];
        // Rebuild filters so github category appears
        renderProjectFilters();
        // Enrich with languages API for better tag list
        enrichGitHubLanguages(filtered.map(f=>f.title)).catch(()=>{});
      }
    } catch(err){ console.warn('GitHub repo fetch failed', err); }
    finally {
      githubReposLoading = false;
      const activeCat = qs('#projectFilters .active')?.dataset.cat || activeBefore;
      renderProjects(activeCat);
      observeFadeIns();
      enhanceLazyImages();
    }
  }

  async function fetchAllGitHubRepos(user){
    const perPage = 100;
    let page = 1;
    let all = [];
    // fetch up to 3 pages to be safe
    while(page <= 3){
      const url = `https://api.github.com/users/${user}/repos?per_page=${perPage}&sort=updated&page=${page}`;
      const res = await fetch(url, { headers:{ 'Accept':'application/vnd.github+json' }});
      if(!res.ok) throw new Error(`GitHub request failed (${res.status})`);
      const batch = await res.json();
      all = all.concat(batch);
      if(batch.length < perPage) break; // no more pages
      page++;
    }
    return all;
  }
  function inferTags(repo){
    const topics = repo.topics || [];
    if(topics.length) return topics.slice(0,5);
    const lang = repo.language ? [repo.language] : [];
    return [...lang,'GitHub'];
  }

  async function enrichGitHubLanguages(names){
  // limit sequentially to avoid rate limiting
    for(const name of names){
      try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${name}/languages`, { headers:{ 'Accept':'application/vnd.github+json' }});
        if(!res.ok) continue;
        const data = await res.json();
        const langs = Object.entries(data)
          .sort((a,b)=>b[1]-a[1])
          .map(([k])=>k)
          .slice(0,3);
        if(langs.length){
          const proj = DATA.projects.find(p=>p.title===name && p.category==='github');
          if(proj){
            // Merge without duplicates, preserve override priority
            const base = new Set(proj.tags.filter(t=>!['GitHub'].includes(t)));
            langs.forEach(l=>base.add(l));
            proj.tags = Array.from(base).slice(0,8);
          }
        }
      } catch { /* ignore */ }
    }
    // Re-render if GitHub projects currently visible
    const activeCat = qs('#projectFilters .active')?.dataset.cat || 'all';
    if(activeCat==='all' || activeCat==='github'){
      renderProjects(activeCat);
      observeFadeIns();
    }
  }

  // (Simplified loading: skeleton removed)

  function icon(name){
    const stroke = 'currentColor';
    switch(name){
      case 'github': return `<svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'><path fill='currentColor' d='M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.36-3.88-1.36-.52-1.3-1.27-1.65-1.27-1.65-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.18 1.75 1.18 1.03 1.77 2.7 1.26 3.36.96.1-.77.4-1.26.72-1.55-2.55-.29-5.23-1.29-5.23-5.74 0-1.27.45-2.3 1.18-3.11-.12-.3-.52-1.54.11-3.2 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.66.24 2.9.12 3.2.74.81 1.18 1.84 1.18 3.11 0 4.46-2.69 5.45-5.25 5.73.41.36.77 1.07.77 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z'/></svg>`;
      case 'linkedin': return `<svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'><path fill='currentColor' d='M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7.5 0h3.84v1.56h.06c.53-1 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.14V21H18v-5.26c0-1.26-.02-2.87-1.75-2.87-1.75 0-2.02 1.37-2.02 2.78V21h-4.73V9Z'/></svg>`;
      case 'mail': return `<svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'><path stroke='${stroke}' stroke-width='1.6' fill='none' d='M3 7.5 12 13l9-5.5M5 18h14a2 2 0 0 0 2-2V8.8a2 2 0 0 0-1.01-1.74l-7-3.89a2 2 0 0 0-1.98 0l-7 3.89A2 2 0 0 0 3 8.8V16a2 2 0 0 0 2 2Z' stroke-linecap='round' stroke-linejoin='round'/></svg>`;
      case 'phone': return `<svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'><path stroke='${stroke}' stroke-width='1.6' fill='none' d='M4.5 5.5c0 7.18 5.82 13 13 13l2.2-2.2a1 1 0 0 0 .24-1.02l-1-3a1 1 0 0 0-.95-.68h-2.8a1 1 0 0 0-.9.55l-.9 1.8a9 9 0 0 1-4.05-4.05l1.8-.9a1 1 0 0 0 .55-.9V6.01a1 1 0 0 0-.68-.95l-3-1a1 1 0 0 0-1.02.24L4.5 5.5Z' stroke-linecap='round' stroke-linejoin='round'/></svg>`;
      default: return '';
    }
  }

  function registerServiceWorker(){
    if('serviceWorker' in navigator){
      // add a version query to encourage updates during development
  const swUrl = `./service-worker.js?v=71`;
      navigator.serviceWorker.register(swUrl).catch(console.error);
    }
  }

  function logWebVitals(){
    if(!('PerformanceObserver' in window)) return;
    try {
      const po = new PerformanceObserver(list => {
        list.getEntries().forEach(e => {
          if(['largest-contentful-paint','first-input','layout-shift'].includes(e.entryType) || e.name==='FID'){
            console.log('[Metric]', e.entryType||e.name, e.value);
          }
        });
      });
      po.observe({ type:'largest-contentful-paint', buffered:true });
      po.observe({ type:'layout-shift', buffered:true });
      po.observe({ type:'first-input', buffered:true });
    } catch(err){ /* ignore */ }
  }
})();
