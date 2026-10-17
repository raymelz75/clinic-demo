/* =========================================================
   Appointment demo (Clinic / Salon / Gym) — designed by Raymelz
   Renders the chosen industry, runs the booking flow and animations
   ========================================================= */

const S = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
const ICONS = {
  plus: `<svg ${S} stroke-width="2.6"><path d="M12 5v14M5 12h14"/></svg>`,
  scissors: `<svg ${S}><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"/></svg>`,
  dumbbell: `<svg ${S} stroke-width="2.2"><path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11"/></svg>`,
  clock: `<svg ${S}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  phone: `<svg ${S}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.8 2z"/></svg>`,
  alert: `<svg ${S}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  pin: `<svg ${S}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  gift: `<svg ${S}><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8S10.5 3 7.5 4 9 8 12 8zM12 8s1.5-5 4.5-4S15 8 12 8z"/></svg>`,
  live: `<svg ${S}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5 2 7.5L12 16.5 5.5 21l2-7.5L2 9h7z"/></svg>`,
  users: `<svg ${S}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8"/></svg>`,
  steth: `<svg ${S}><path d="M5 3v6a5 5 0 0010 0V3M5 3H3M15 3h2M10 14v2a5 5 0 0010 0v-3"/><circle cx="20" cy="11" r="2"/></svg>`,
  tooth: `<svg ${S}><path d="M7 3c-2.5 0-4 2-4 4.5 0 3 1.5 4.5 2 7.5.5 3 1 6 2.5 6s1.8-3 2.5-5c.4-1 1.6-1 2 0 .7 2 1 5 2.5 5s2-3 2.5-6c.5-3 2-4.5 2-7.5C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3z"/></svg>`,
  baby: `<svg ${S}><circle cx="12" cy="8" r="5"/><path d="M10 8h.01M14 8h.01M10.5 10.5a2 2 0 003 0M6 21v-2a6 6 0 0112 0v2"/></svg>`,
  heart: `<svg ${S}><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z"/></svg>`,
  flask: `<svg ${S}><path d="M9 3h6M10 3v6L4 19a2 2 0 001.7 3h12.6a2 2 0 001.7-3L14 9V3M7 15h10"/></svg>`,
  bone: `<svg ${S}><path d="M17 10c.7-.7 1.7-.6 2.5-.3a2.5 2.5 0 10-3.2-3.2c.3.8.4 1.8-.3 2.5l-6.3 6.3c-.7.7-1.7.6-2.5.3a2.5 2.5 0 103.2 3.2c-.3-.8-.4-1.8.3-2.5z"/></svg>`,
  drop: `<svg ${S}><path d="M12 2.7l5.7 5.6a8 8 0 11-11.4 0z"/></svg>`,
  sparkle: `<svg ${S}><path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2zM19 3v4M21 5h-4"/></svg>`,
  hand: `<svg ${S}><path d="M18 11V6a2 2 0 00-4 0v5M14 10V4a2 2 0 00-4 0v6M10 10.5V6a2 2 0 00-4 0v8a8 8 0 0016 0v-3a2 2 0 00-4 0"/></svg>`,
  crown: `<svg ${S}><path d="M2 18h20L19 7l-5 5-2-7-2 7-5-5zM2 21h20"/></svg>`,
  leaf: `<svg ${S}><path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/></svg>`,
  bolt: `<svg ${S}><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>`,
  target: `<svg ${S}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  music: `<svg ${S}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  apple: `<svg ${S}><path d="M12 7c-1.5-1-5-1.5-6.5 1.5S5 16 8 19c1.5 1.5 2.5 1 4 .5 1.5.5 2.5 1 4-.5 3-3 4-7.5 2.5-10.5S13.5 6 12 7zM12 7c0-2 1-4 3-4"/></svg>`,
  any: `<svg ${S}><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rupee = n => '₹' + n.toLocaleString('en-IN');
const priceLabel = n => (n ? rupee(n) : 'Included');
const setAll = (sel, fn) => $$(sel).forEach(fn);

let T;           // current theme data
let current;     // current theme key

/* ================= RENDER ================= */
function render(key) {
  current = key;
  T = THEMES[key];
  document.documentElement.dataset.theme = key;
  document.title = T.title;
  setAll('.sw-btns button', b => b.classList.toggle('on', b.dataset.type === key));

  setAll('[data-logo]', el => (el.innerHTML = ICONS[T.logo]));
  setAll('[data-brand]', el => (el.textContent = T.brand));
  setAll('[data-tagline]', el => (el.textContent = T.tagline));
  setAll('[data-book]', el => (el.textContent = T.book));
  setAll('[data-book-short]', el => (el.textContent = T.bookShort));
  setAll('[data-staff]', el => (el.textContent = T.staff));
  setAll('[data-staff-lower]', el => (el.textContent = T.staff.toLowerCase()));
  setAll('[data-staff-plural]', el => (el.textContent = T.staffPlural));
  setAll('[data-year]', el => (el.textContent = new Date().getFullYear()));

  // Hero
  $('[data-hero-eyebrow]').textContent = T.hero.eyebrow;
  $('[data-hero-title]').innerHTML = T.hero.title;
  $('[data-hero-sub]').textContent = T.hero.sub;
  const hImg = $('[data-hero-img]');
  hImg.src = T.hero.img;
  hImg.style.animation = 'none'; hImg.offsetHeight; hImg.style.animation = '';
  $('[data-hero-chips]').innerHTML = T.hero.chips.map(([i, b, s]) =>
    `<div class="chip"><span class="ci ${i === 'live' ? 'live' : ''}">${ICONS[i]}</span><div><b>${b}</b><span>${s}</span></div></div>`).join('');

  // Info bar
  $('[data-info]').innerHTML = T.info.map(([i, l, v]) =>
    `<div class="info-item"><span class="ii">${ICONS[i]}</span><div><span>${l}</span><b>${v}</b></div></div>`).join('');

  // Section heads
  $$('[data-head]').forEach(el => {
    const [eb, h, p] = T[el.dataset.head];
    el.innerHTML = `<span class="eyebrow">${eb}</span><h2>${h}</h2><p>${p}</p>`;
  });

  // Services
  $('[data-services]').innerHTML = T.services.map(([i, n, d, dur, p], idx) => `
    <div class="svc reveal" style="--d:${idx * 0.08}s">
      <div class="si">${ICONS[i]}</div>
      <h3>${n}</h3><p>${d}</p>
      <div class="svc-meta"><span>${dur} · <b>${priceLabel(p)}</b></span>
        <button class="book-link" data-pick-service="${idx}">Book ${ICONS.arrow}</button></div>
    </div>`).join('');

  // About
  const A = T.about;
  $('[data-about-head]').innerHTML = `<span class="eyebrow">${A.head[0]}</span><h2>${A.head[1]}</h2>`;
  $('[data-about-p]').innerHTML = A.p.map(t => `<p>${t}</p>`).join('');
  $('[data-about-points]').innerHTML = A.points.map(t => `<li>${t}</li>`).join('');
  $('[data-about-img1]').src = A.img1;
  $('[data-about-img2]').src = A.img2;
  $('[data-about-badge-n]').textContent = A.badge[0];
  $('[data-about-badge-l]').textContent = A.badge[1];
  $('[data-about-stats]').innerHTML = A.stats.map(([n, s, l]) =>
    `<div class="stat"><b data-count="${n}" data-suffix="${s}">0</b><span>${l}</span></div>`).join('');

  // Team
  $('[data-team]').innerHTML = T.team.map(([n, r, e, img], idx) => `
    <div class="member reveal" style="--d:${idx * 0.1}s">
      <div class="m-photo"><img src="${img}" alt="${n}" loading="lazy">
        <button class="btn btn-primary m-book" data-pick-staff="${idx}">Book with ${n.startsWith('Dr.') ? n.split(' ').slice(0, 2).join(' ') : n.split(' ')[0]}</button></div>
      <div class="m-body"><h3>${n}</h3><span class="role">${r}</span><span class="exp">${e}</span></div>
    </div>`).join('');

  // Plans
  $('[data-plans]').innerHTML = T.plans.map(([n, p, per, feats, feat], idx) => `
    <div class="plan reveal ${feat ? 'featured' : ''}" style="--d:${idx * 0.1}s">
      ${feat ? '<span class="tag">Most Popular</span>' : ''}
      <h3>${n}</h3>
      <div><span class="price">${rupee(p)}</span><span class="per">${per}</span></div>
      <ul>${feats.map(f => `<li>${f}</li>`).join('')}</ul>
      <a href="#book" class="btn btn-primary">${current === 'gym' ? 'Join Now' : 'Book Package'}</a>
    </div>`).join('');

  // Gallery marquee (duplicated for seamless loop)
  $('[data-gallery-head]').innerHTML = `<span class="eyebrow">${T.galleryHead[0]}</span><h2>${T.galleryHead[1]}</h2>`;
  const g = T.gallery.map(id => `<img src="${U(id, 700)}" alt="" loading="lazy">`).join('');
  $('[data-gallery]').innerHTML = g + g;

  // Reviews
  $('[data-reviews]').innerHTML = T.testimonials.map(([q, n, m, img], idx) => `
    <div class="review reveal" style="--d:${idx * 0.1}s"><div class="stars">★★★★★</div><p>"${q}"</p>
      <div class="who"><img src="${img}" alt=""><div><b>${n}</b><span>${m}</span></div></div></div>`).join('');

  // FAQ
  $('[data-faq]').innerHTML = T.faqs.map(([q, a], idx) => `
    <div class="faq-item${idx ? '' : ' open'}"><button class="faq-q">${q}<i>+</i></button><div class="faq-a"><p>${a}</p></div></div>`).join('');
  $$('.faq-item.open .faq-a').forEach(a => (a.style.maxHeight = a.scrollHeight + 'px'));

  $('[data-hours]').innerHTML = T.hours.map(([d, h]) => `<span>${d}: ${h}</span>`).join('');
  $('[data-cta-title]').innerHTML = current === 'gym' ? 'Your first week is <em>on us.</em>'
    : current === 'salon' ? 'Ready for your <em>glow-up?</em>' : 'Your health deserves the <em>best care.</em>';

  resetBooking();
  observeReveals();
}

/* ================= THEME SWITCHER ================= */
function getType() {
  const t = new URLSearchParams(location.search).get('type');
  return THEMES[t] ? t : 'clinic';
}
$$('.sw-btns button').forEach(b => b.addEventListener('click', () => {
  const key = b.dataset.type;
  if (key === current) return;
  const wipe = $('#wipe');
  wipe.style.background = getComputedStyle(document.documentElement).getPropertyValue('--accent');
  wipe.classList.remove('go'); wipe.offsetHeight; wipe.classList.add('go');
  setTimeout(() => {
    render(key);
    history.replaceState(null, '', `?type=${key}${location.hash}`);
  }, 420);
}));

/* ================= BOOKING ================= */
const bk = { step: 1, service: null, staff: null, date: null, time: null, view: null };
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const fmtDate = d => d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
const fmtTime = h => `${((h + 11) % 12) + 1}:00 ${h < 12 ? 'AM' : 'PM'}`;
const sameDay = (a, b) => a && b && a.toDateString() === b.toDateString();
// Pseudo-random but stable "already booked" slots
const isBooked = (d, h) => ((d.getDate() * 7 + d.getMonth() * 13 + h * 31 + (bk.staff ?? 9) * 5) % 5) === 0;

function resetBooking() {
  Object.assign(bk, { step: 1, service: null, staff: null, date: null, time: null });
  const now = new Date();
  bk.view = new Date(now.getFullYear(), now.getMonth(), 1);
  $('#bkForm').reset();
  renderBkOptions();
  goStep(1, true);
}

function renderBkOptions() {
  $('[data-bk-services]').innerHTML = T.services.map(([i, n, , dur, p], idx) =>
    `<button type="button" class="opt" data-svc="${idx}"><span class="oi">${ICONS[i]}</span><div><b>${n}</b><span>${dur} · ${priceLabel(p)}</span></div></button>`).join('');
  $('[data-bk-staff]').innerHTML =
    `<button type="button" class="opt" data-stf="-1"><span class="oi">${ICONS.any}</span><div><b>Any available</b><span>Fastest slot</span></div></button>` +
    T.team.map(([n, r, , img], idx) =>
      `<button type="button" class="opt" data-stf="${idx}"><img src="${img}" alt=""><div><b>${n}</b><span>${r}</span></div></button>`).join('');
}

function goStep(n, silent) {
  const back = n < bk.step;
  bk.step = n;
  $$('.bk-panel').forEach(p => {
    const on = +p.dataset.step === n;
    p.classList.toggle('on', on);
    p.classList.toggle('back', on && back);
  });
  $$('.bk-steps li').forEach((li, i) => {
    li.classList.toggle('on', i + 1 === n);
    li.classList.toggle('done', i + 1 < n);
  });
  $('.bk-progress i').style.width = `${Math.min(n, 4) * 25}%`;
  $('#bkBack').classList.toggle('show', n > 1 && n < 5);
  $('.bk-actions').classList.toggle('hide', n === 5);
  $('#bkNext').textContent = n === 4 ? 'Confirm Booking' : 'Continue';
  if (n === 3) renderCalendar();
  updateBk(silent);
}

function updateBk(silent) {
  $$('.opt[data-svc]').forEach(o => o.classList.toggle('sel', +o.dataset.svc === bk.service));
  $$('.opt[data-stf]').forEach(o => o.classList.toggle('sel', bk.staff !== null && +o.dataset.stf === bk.staff));
  const svc = bk.service !== null ? T.services[bk.service] : null;
  const vals = {
    service: svc ? svc[1] : '–',
    staff: bk.staff === null ? '–' : bk.staff < 0 ? 'Any available' : T.team[bk.staff][0],
    date: bk.date ? fmtDate(bk.date) : '–',
    time: bk.time !== null ? fmtTime(bk.time) : '–',
    dur: svc ? svc[3] : '–',
    price: svc ? (svc[4] ? rupee(svc[4]) : 'Free') : '–'
  };
  Object.entries(vals).forEach(([k, v]) => {
    const el = $(`[data-sum="${k}"]`);
    if (el.textContent !== v) {
      el.textContent = v;
      if (!silent) { el.classList.remove('flash'); el.offsetHeight; el.classList.add('flash'); }
    }
  });
  const ok = { 1: bk.service !== null, 2: bk.staff !== null, 3: bk.date && bk.time !== null, 4: true }[bk.step];
  $('#bkNext').disabled = !ok;
}

function renderCalendar() {
  const v = bk.view, today = new Date(); today.setHours(0, 0, 0, 0);
  const first = new Date(v.getFullYear(), v.getMonth(), 1);
  const days = new Date(v.getFullYear(), v.getMonth() + 1, 0).getDate();
  $('[data-cal-title]').textContent = `${MONTHS[v.getMonth()]} ${v.getFullYear()}`;
  const minView = new Date(today.getFullYear(), today.getMonth(), 1);
  const maxView = new Date(today.getFullYear(), today.getMonth() + 2, 1);
  $('[data-cal="-1"]').disabled = v <= minView;
  $('[data-cal="1"]').disabled = v >= maxView;
  let html = '<span class="empty"></span>'.repeat(first.getDay());
  for (let d = 1; d <= days; d++) {
    const date = new Date(v.getFullYear(), v.getMonth(), d);
    const closed = T.slots.closed.includes(date.getDay());
    const past = date < today;
    const cls = [sameDay(date, today) ? 'today' : '', sameDay(date, bk.date) ? 'sel' : ''].join(' ');
    html += `<button type="button" class="${cls}" data-day="${d}" ${past || closed ? 'disabled' : ''} title="${closed ? 'Closed' : ''}">${d}</button>`;
  }
  $('[data-cal-grid]').innerHTML = html;
  renderSlots();
}

function renderSlots() {
  const box = $('[data-slots]');
  if (!bk.date) {
    $('[data-slots-date]').textContent = 'Select a date';
    box.innerHTML = '<div class="slots-empty">Pick a date to see available times</div>';
    return;
  }
  $('[data-slots-date]').textContent = fmtDate(bk.date);
  const now = new Date();
  const groups = [['Morning', 0, 12], ['Afternoon', 12, 17], ['Evening', 17, 24]];
  box.innerHTML = groups.map(([label, a, b]) => {
    const hrs = [];
    for (let h = Math.max(a, T.slots.start); h < Math.min(b, T.slots.end); h++) hrs.push(h);
    if (!hrs.length) return '';
    return `<div class="slot-group"><small>${label}</small><div class="slot-list">${hrs.map(h => {
      const past = sameDay(bk.date, now) && h <= now.getHours();
      const off = past || isBooked(bk.date, h);
      return `<button type="button" data-hour="${h}" class="${bk.time === h ? 'sel' : ''}" ${off ? 'disabled' : ''}>${fmtTime(h)}</button>`;
    }).join('')}</div></div>`;
  }).join('') || '<div class="slots-empty">No slots left today. Try another date.</div>';
}

// Booking interactions (delegated)
document.addEventListener('click', e => {
  const svc = e.target.closest('[data-svc]');
  if (svc) { bk.service = +svc.dataset.svc; updateBk(); return; }
  const stf = e.target.closest('[data-stf]');
  if (stf) { bk.staff = +stf.dataset.stf; bk.time = null; updateBk(); return; }
  const day = e.target.closest('[data-day]');
  if (day) { bk.date = new Date(bk.view.getFullYear(), bk.view.getMonth(), +day.dataset.day); bk.time = null; renderCalendar(); updateBk(); return; }
  const hr = e.target.closest('[data-hour]');
  if (hr) { bk.time = +hr.dataset.hour; renderSlots(); updateBk(); return; }
  const nav = e.target.closest('[data-cal]');
  if (nav) { bk.view = new Date(bk.view.getFullYear(), bk.view.getMonth() + +nav.dataset.cal, 1); renderCalendar(); return; }

  // Shortcuts from service cards and team cards
  const ps = e.target.closest('[data-pick-service]');
  if (ps) { resetBooking(); bk.service = +ps.dataset.pickService; goStep(2); $('#book').scrollIntoView({ behavior: 'smooth' }); return; }
  const pt = e.target.closest('[data-pick-staff]');
  if (pt) { resetBooking(); bk.staff = +pt.dataset.pickStaff; updateBk(); $('#book').scrollIntoView({ behavior: 'smooth' }); return; }

  // FAQ
  const q = e.target.closest('.faq-q');
  if (q) {
    const item = q.parentElement, open = item.classList.contains('open');
    $$('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = 0; });
    if (!open) { item.classList.add('open'); item.querySelector('.faq-a').style.maxHeight = item.querySelector('.faq-a').scrollHeight + 'px'; }
  }
});

$('#bkBack').addEventListener('click', () => {
  // Skip the staff step on the way back if it was preselected? Keep it simple: go one back.
  goStep(bk.step - 1);
});
$('#bkNext').addEventListener('click', () => {
  if (bk.step === 1 && bk.staff !== null) return goStep(3);   // staff already chosen from a team card
  if (bk.step < 4) return goStep(bk.step + 1);
  const form = $('#bkForm');
  if (!form.reportValidity()) return;
  const name = form.elements.name.value.trim().split(' ')[0];
  const id = 'BK' + Math.random().toString(36).slice(2, 8).toUpperCase();
  const svc = T.services[bk.service][1];
  $('[data-done-id]').textContent = id;
  $('[data-done-text]').textContent = `Thanks ${name}! Your ${svc} is booked for ${fmtDate(bk.date)} at ${fmtTime(bk.time)}. We've sent the details to your phone.`;
  $('#waConfirm').href = `https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I've booked ${svc} on ${fmtDate(bk.date)} at ${fmtTime(bk.time)}. Booking ID: ${id}`)}`;
  bk.id = id;
  goStep(5);
});
$('#bkRestart').addEventListener('click', resetBooking);

// Add-to-calendar (.ics download) — works fully offline
$('#icsBtn').addEventListener('click', () => {
  const d = bk.date, pad = n => String(n).padStart(2, '0');
  const stamp = h => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(h)}0000`;
  const svc = T.services[bk.service][1];
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Raymelz Demo//EN', 'BEGIN:VEVENT',
    `UID:${bk.id}@demo`, `DTSTART:${stamp(bk.time)}`, `DTEND:${stamp(bk.time + 1)}`,
    `SUMMARY:${svc} at ${T.brand}`, 'LOCATION:Your Street Name, Your City', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = 'appointment.ics';
  a.click();
  URL.revokeObjectURL(a.href);
});

/* ================= REVEAL + COUNTERS ================= */
const countUp = el => {
  const end = +el.dataset.count, suffix = el.dataset.suffix || '', t0 = performance.now();
  const tick = t => {
    const p = Math.min((t - t0) / 1500, 1);
    el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString('en-IN') + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add('in');
  if (en.target.dataset.count) countUp(en.target);
  io.unobserve(en.target);
}), { threshold: 0.12 });
function observeReveals() {
  $$('.sec-head, .about-imgs, .about-copy, .bk-main, .bk-summary, .contact-card, .faq, .cta-box').forEach(el => el.classList.add('reveal'));
  $$('.reveal:not(.in), [data-count]').forEach(el => io.observe(el));
}

/* ================= HEADER / MENU / RIBBON ================= */
const header = $('#header'), nav = $('#nav'), toggle = $('#menuToggle');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 60), { passive: true });
toggle.addEventListener('click', () => { nav.classList.toggle('open'); toggle.classList.toggle('open'); });
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.classList.remove('open'); } });

// Highlight nav link of the section in view
const navIO = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) $$('.nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => navIO.observe(s));

const ribbon = $('#ribbon');
try { if (sessionStorage.getItem('ribbonHidden')) ribbon.classList.add('hide'); } catch (e) {}
$('#ribbonClose').addEventListener('click', () => {
  ribbon.classList.add('hide');
  try { sessionStorage.setItem('ribbonHidden', '1'); } catch (e) {}
});

/* ================= START ================= */
render(getType());
