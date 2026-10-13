/* Is my doctor using AI? — page behavior
   Everything here is plain DOM scripting. No build step, no dependencies. */
"use strict";

const $ = (sel) => document.querySelector(sel);
const src = (n) => `<a href="#src-${n}" aria-label="Source ${n}">[${n}]</a>`;
const cite = (n) => `<sup class="cite">${src(n)}</sup>`;

/* ------------------------------------------------------------------
   Icons: small line drawings, 24x24, stroke only
   ------------------------------------------------------------------ */
const I = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
const ICONS = {
  scan: I('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 12h4l2-4 3 8 2-4h7"/>'),
  scope: I('<path d="M4 20c0-4 2-6 6-6h4a4 4 0 0 0 0-8h-2"/><circle cx="4" cy="20" r="1.5"/><circle cx="12" cy="6" r="2.5"/><path d="M16 14l2 2m1-5 1 1"/>'),
  slide: I('<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="9" cy="12" r="2.5"/><circle cx="15.5" cy="10.5" r="1"/><circle cx="16" cy="14" r="1.2"/>'),
  stetho: I('<path d="M5 3v6a4 4 0 0 0 8 0V3"/><path d="M9 13v3a5 5 0 0 0 10 0v-2"/><circle cx="19" cy="11" r="2"/>'),
  heart: I('<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/><path d="M5 11h3l1.5-3 2 6 1.5-3h3"/>'),
  eye: I('<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
  skin: I('<circle cx="12" cy="12" r="9"/><circle cx="10" cy="11" r="2.5"/><path d="M15 15.5h.01M16 9h.01M8 16h.01"/>'),
  bolt: I('<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'),
  monitor: I('<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M2 11h4l2-3 2 6 2-5 2 3h8M9 21h6"/>'),
  robot: I('<path d="M4 20h6l2-6-3-4 3-4"/><circle cx="12" cy="6" r="1.5"/><path d="M10 14h6l3 3M16 14l3-3"/>'),
  cell: I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>'),
  drop: I('<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9 14a3 3 0 0 0 3 3"/>'),
  flask: I('<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2.2h12.4a1.5 1.5 0 0 0 1.3-2.2L14 9V3"/><path d="M7 15h10"/>'),
  clipboard: I('<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>'),
};

const WP = (slug) => `https://en.wikipedia.org/wiki/${slug}`;

/* ------------------------------------------------------------------
   Specialties. level: 3 very likely, 2 likely, 1 emerging, 0 behind the scenes
   ------------------------------------------------------------------ */
const LEVELS = { 3: "Very likely", 2: "Likely", 1: "Emerging", 0: "Behind the scenes" };
const SPECIALTIES = [
  {
    id: "radiology", name: "Radiology", icon: "scan", level: 3,
    tag: "Reads scans alongside the radiologist.",
    how: `This is where medical AI lives. About three in four FDA-authorized AI devices are radiology tools.${cite(11)} Convolutional neural networks scan every CT, MRI, X-ray, and mammogram for bleeds, clots, fractures, and nodules, then sort the worklist so the urgent ones get read first. For lung cancer, AI sensitivity reaches 94%; for tumors on CT, one validation found 80.8% sensitivity and 90.9% specificity, sometimes catching early cancers a radiologist had passed over.`,
    example: `<strong>MASAI trial, Sweden.</strong> 80,033 women were randomized to AI-supported or standard mammography reading. The AI arm found 20% more cancers with 44% less radiologist reading work and no rise in false positives.${cite(13)}`,
    links: [
      ["FDA AI-enabled device list", "#src-11"],
      ["MASAI trial, Lancet Oncology", "#src-13"],
      ["Artificial intelligence in healthcare (Wikipedia)", WP("Artificial_intelligence_in_healthcare")],
      ["Convolutional neural network (Wikipedia)", WP("Convolutional_neural_network")],
    ],
  },
  {
    id: "gi", name: "Gastroenterology", icon: "scope", level: 3,
    tag: "Draws a green box around polyps in real time.",
    how: `Computer-aided detection watches the colonoscope's live video and boxes anything polyp-shaped within about 40 milliseconds. GI Genius was the first FDA-authorized system, in April 2021.${cite(2)} Across 44 randomized trials, adenoma detection rose from 36.7% to 44.7%, and the miss rate fell by more than half.${cite(3)}${cite(4)} It is the most thoroughly tested AI in medicine, and it has its own section below.`,
    example: `<strong>Danish multicenter trial.</strong> 795 patients; detection rose from 46.6% to 59.1% overall, and from 58.1% to 74.4% in the screening population.${cite(5)} <a href="#colonoscopy">Read the full deep dive.</a>`,
    links: [
      ["FDA authorization of GI Genius", "#src-2"],
      ["Meta-analysis of 44 trials", "#src-3"],
      ["Colonoscopy (Wikipedia)", WP("Colonoscopy")],
      ["Colorectal polyp (Wikipedia)", WP("Colorectal_polyp")],
    ],
  },
  {
    id: "pathology", name: "Pathology", icon: "slide", level: 2,
    tag: "Reads the biopsy slide before the pathologist does.",
    how: `Glass slides are scanned into gigapixel images, and whole-slide AI flags suspicious regions. For colorectal cancer it reaches an AUC of 0.988, above the 0.970 of expert pathologists, with near-perfect agreement between readers. Some models predict microsatellite instability, a marker that decides whether immunotherapy will work, straight from the slide with an AUC of 0.89, without genomic sequencing.${cite(18)}`,
    example: `<strong>Paige Prostate.</strong> In September 2021 the FDA authorized the first AI to help pathologists find prostate cancer on slides.${cite(19)} Adoption is growing but far from universal: many labs still read glass.`,
    links: [
      ["Kather et al., MSI from histology", "#src-18"],
      ["FDA authorization of Paige Prostate", "#src-19"],
      ["Digital pathology (Wikipedia)", WP("Digital_pathology")],
    ],
  },
  {
    id: "primary", name: "Primary care", icon: "stetho", level: 3,
    tag: "Listens to the visit and writes the note.",
    how: `Ambient scribes are the fastest-spreading AI in medicine. A phone on the desk records the conversation, a language model drafts the visit note, and the doctor edits it. Other NLP tools read the chart to pull out diagnoses, medications, and lab results so the clinician does not have to scroll. If your doctor looked at you instead of the screen during your last visit, this may be why.${cite(21)}`,
    example: `<strong>Permanente Medical Group.</strong> Thousands of physicians were given an ambient scribe in 2023; early evaluation reported less after-hours charting and better patient-facing time.${cite(21)} Pew finds 72% of people want to be told when AI takes notes in the background.${cite(9)}`,
    links: [
      ["Ambient AI scribes, NEJM Catalyst", "#src-21"],
      ["Pew Research on AI disclosure", "#src-9"],
      ["Natural language processing (Wikipedia)", WP("Natural_language_processing")],
      ["Electronic health record (Wikipedia)", WP("Electronic_health_record")],
    ],
  },
  {
    id: "cardiology", name: "Cardiology", icon: "heart", level: 2,
    tag: "Finds a failing heart on a normal-looking ECG.",
    how: `An AI-enabled electrocardiogram can spot a weak heart pump (low ejection fraction) from a routine 10-second ECG that looks normal to a cardiologist.${cite(16)} Smartwatches run irregular-rhythm algorithms that flag atrial fibrillation. In the echo lab, software now measures the heart's chambers automatically.`,
    example: `<strong>Mayo Clinic AI-ECG.</strong> Trained on tens of thousands of paired ECGs and echocardiograms, the model identified low ejection fraction with an AUC of 0.93, turning a cheap, universal test into a screening tool.${cite(16)}`,
    links: [
      ["Attia et al., Nature Medicine 2019", "#src-16"],
      ["Electrocardiography (Wikipedia)", WP("Electrocardiography")],
      ["Atrial fibrillation (Wikipedia)", WP("Atrial_fibrillation")],
    ],
  },
  {
    id: "ophtho", name: "Ophthalmology", icon: "eye", level: 2,
    tag: "Diagnoses diabetic eye disease without a specialist.",
    how: `In April 2018 the FDA authorized IDx-DR, the first AI allowed to make a diagnosis on its own: a camera in a primary care clinic photographs the retina and the software says whether to refer for diabetic retinopathy, no ophthalmologist required.${cite(14)} It was the first step from “adjunct” to “autonomous.”`,
    example: `<strong>IDx-DR.</strong> In its pivotal trial of 900 patients, the system correctly identified more-than-mild retinopathy 87% of the time and correctly cleared healthy eyes 90% of the time.${cite(14)}`,
    links: [
      ["FDA authorization of IDx-DR", "#src-14"],
      ["Diabetic retinopathy (Wikipedia)", WP("Diabetic_retinopathy")],
    ],
  },
  {
    id: "derm", name: "Dermatology", icon: "skin", level: 1,
    tag: "Classifies skin lesions at dermatologist level, in the lab.",
    how: `In 2017 a Stanford network trained on 129,450 images matched 21 board-certified dermatologists at telling cancer from benign lesions.${cite(15)} Handheld devices that score a mole have since been FDA-cleared for primary care. Consumer phone apps are a different story: unregulated and inconsistent.`,
    example: `<strong>Esteva et al., Nature 2017.</strong> The paper that put “dermatologist-level” into the vocabulary. Clinic use is still spreading slowly, so this one is emerging rather than routine.${cite(15)}`,
    links: [
      ["Esteva et al., Nature 2017", "#src-15"],
      ["Melanoma (Wikipedia)", WP("Melanoma")],
    ],
  },
  {
    id: "er", name: "Emergency & stroke", icon: "bolt", level: 2,
    tag: "Texts the stroke team before the radiologist opens the scan.",
    how: `When a CT angiogram shows a large blocked brain vessel, minutes decide how much brain survives. Viz.ai, authorized by the FDA in February 2018, scans the images as they come off the machine and pages the stroke team directly.${cite(20)} Similar tools triage for brain bleeds, pulmonary embolism, and collapsed lungs.`,
    example: `<strong>Viz.ai ContaCT.</strong> The first FDA-authorized clinical decision support software for stroke triage, now in well over a thousand hospitals.${cite(20)}`,
    links: [
      ["FDA authorization of Viz.ai", "#src-20"],
      ["Stroke (Wikipedia)", WP("Stroke")],
    ],
  },
  {
    id: "icu", name: "ICU & hospital wards", icon: "monitor", level: 2,
    tag: "Watches your vitals for sepsis before anyone else does.",
    how: `If you were admitted to a large hospital, a prediction model scored your risk of sepsis or sudden deterioration from vitals and labs, every few minutes. Smart alarm systems learn each patient's baseline so the monitor only shouts for trends that matter, a direct attack on alarm fatigue. In the ICU, these quietly shape who gets checked first.`,
    example: `<strong>Epic Sepsis Model, a cautionary tale.</strong> Used in hundreds of U.S. hospitals, but an independent 2021 validation found it caught only a third of sepsis cases while alerting on 18% of all patients.${cite(17)} Deployment outran evidence.`,
    links: [
      ["Wong et al., JAMA Internal Medicine 2021", "#src-17"],
      ["Sepsis (Wikipedia)", WP("Sepsis")],
      ["Alarm fatigue (Wikipedia)", WP("Alarm_fatigue")],
    ],
  },
  {
    id: "surgery", name: "Surgery", icon: "robot", level: 1,
    tag: "Steadies the hand; the surgeon is still the surgeon.",
    how: `Robots like da Vinci are not AI: a surgeon drives every motion. What is new is computer vision layered on top: real-time image recognition that outlines anatomy, motion control that scales and steadies the surgeon's hand, and haptic feedback. The results are better precision, less surgeon fatigue, and shorter recoveries.`,
    example: `<strong>Surgical video analysis.</strong> Models trained on thousands of recorded operations can now identify the steps of a procedure and flag when a critical structure is at risk, mostly in research and training settings so far.`,
    links: [
      ["Da Vinci Surgical System (Wikipedia)", WP("Da_Vinci_Surgical_System")],
      ["Robot-assisted surgery (Wikipedia)", WP("Robot-assisted_surgery")],
    ],
  },
  {
    id: "oncology", name: "Oncology", icon: "cell", level: 2,
    tag: "Plans radiation and matches you to trials.",
    how: `Before radiotherapy, someone has to outline the tumor and every organ to protect on each CT slice; AI auto-contouring does the first pass in minutes. Slide-reading models predict molecular markers that steer immunotherapy.${cite(18)} Language models comb records to match patients to clinical trials that a busy oncologist might never surface.`,
    example: `<strong>RECTIFIER at Mass General Brigham.</strong> A retrieval-augmented language model screened 4,476 patients for a heart-failure trial in a randomized test; enrollment nearly doubled versus manual screening.${cite(12)}`,
    links: [
      ["RECTIFIER trial-screening results", "#src-12"],
      ["Kather et al., Nature Medicine 2019", "#src-18"],
      ["Radiation therapy (Wikipedia)", WP("Radiation_therapy")],
    ],
  },
  {
    id: "endo", name: "Endocrinology", icon: "drop", level: 2,
    tag: "Predicts a blood-sugar crash before it happens.",
    how: `A continuous glucose monitor does not just report sugar; it learns a patient's patterns and warns of dangerous highs and lows ahead of time. Closed-loop insulin pumps go a step further and adjust dosing automatically. For a person with type 1 diabetes, this is AI you wear 24 hours a day.`,
    example: `<strong>Predictive low alerts.</strong> Modern CGMs warn users roughly 20 minutes before a projected low, and hybrid closed-loop systems have become standard of care for many patients with type 1 diabetes.`,
    links: [
      ["Continuous glucose monitor (Wikipedia)", WP("Continuous_glucose_monitor")],
      ["Artificial pancreas (Wikipedia)", WP("Artificial_pancreas")],
    ],
  },
  {
    id: "pharma", name: "Drug discovery", icon: "flask", level: 0,
    tag: "Designs molecules years before you take them.",
    how: `AI now designs candidate molecules, predicts how they bind their targets, and estimates toxicity in silico, compressing the earliest and costliest stage of drug development. DeepMind's AlphaFold solved the fifty-year problem of predicting a protein's 3-D shape from its sequence; its creators shared the 2024 Nobel Prize in Chemistry.${cite(22)}`,
    example: `<strong>AlphaFold.</strong> Over 200 million predicted protein structures, free to every lab on Earth. You will never see it, but the next generation of medicines will have been shaped by it.${cite(22)}`,
    links: [
      ["Nobel Prize in Chemistry 2024", "#src-22"],
      ["AlphaFold (Wikipedia)", WP("AlphaFold")],
      ["Drug design (Wikipedia)", WP("Drug_design")],
    ],
  },
  {
    id: "research", name: "Research & admin", icon: "clipboard", level: 2,
    tag: "Reads the chart so a human doesn't have to.",
    how: `Clinical notes are mostly free text, which is why natural language processing matters. Retrieval-augmented generation (RAG) lets a language model answer questions against a patient's actual record: is this person eligible for the trial, is there an urgent lab buried in yesterday's note. RECTIFIER flags such findings with up to 98% accuracy.${cite(12)}`,
    example: `<strong>Trial screening, randomized.</strong> 4,476 patients, AI versus manual screening: the AI arm enrolled 35 patients to the manual arm's 19, in a fraction of the time and cost.${cite(12)}`,
    links: [
      ["Mass General Brigham RECTIFIER", "#src-12"],
      ["Retrieval-augmented generation (Wikipedia)", WP("Retrieval-augmented_generation")],
    ],
  },
];

/* The directory groups departments into hospital wings; the grouping is
   a reading aid, not a claim about any real building. */
const WINGS = [
  ["imaging", "Imaging and labs", ["radiology", "pathology", "ophtho", "derm"]],
  ["procedures", "Procedures", ["gi", "cardiology", "surgery"]],
  ["acute", "Emergency and inpatient", ["er", "icu"]],
  ["clinics", "Clinics", ["primary", "oncology", "endo"]],
  ["behind", "Behind the scenes", ["research", "pharma"]],
];
const wingOf = (id) => WINGS.find(([, , ids]) => ids.includes(id))[0];

function renderSpecialties() {
  const grid = $("#spec-grid");
  const detail = $("#spec-detail");
  const arrow = `<svg class="go" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>`;

  const show = (id) => {
    const s = SPECIALTIES.find((x) => x.id === id);
    grid.querySelectorAll(".dir-row").forEach((b) => b.setAttribute("aria-pressed", b.dataset.id === id ? "true" : "false"));
    detail.innerHTML = `
      <div class="door-head w-${wingOf(id)}">
        <span class="tag">${ICONS[s.icon]}</span>
        <div><h3>${s.name}</h3><p>${s.tag}</p></div>
        <span class="lik">${LEVELS[s.level]}</span>
      </div>
      <div class="door-body">
        <p class="how">${s.how}</p>
        <div><h4>A real example</h4><div class="example">${s.example}</div></div>
        <div><h4>Read more</h4><ul class="links">${s.links.map(([t, u]) => `<li><a href="${u}"${u.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${t}</a></li>`).join("")}</ul></div>
      </div>`;
  };

  grid.innerHTML = WINGS.map(([w, label, ids]) => `
    <li class="wing w-${w}"><h3>${label}</h3><ul>${ids.map((id) => {
      const s = SPECIALTIES.find((x) => x.id === id);
      return `<li><button type="button" class="dir-row" data-id="${s.id}" aria-pressed="false"><span class="tag">${ICONS[s.icon]}</span><span class="name">${s.name}</span><span class="lik l${s.level}">${LEVELS[s.level]}</span>${arrow}</button></li>`;
    }).join("")}</ul></li>`).join("");
  grid.addEventListener("click", (e) => {
    const b = e.target.closest(".dir-row");
    if (!b) return;
    show(b.dataset.id);
    if (matchMedia("(max-width: 900px)").matches) detail.scrollIntoView({ block: "start" });
  });
  show("radiology");
}

/* ------------------------------------------------------------------
   Quiz
   ------------------------------------------------------------------ */
const QUIZ = [
  { id: "xray", w: 3, label: "Had an X-ray, CT, or MRI", why: "<strong>Very likely.</strong> About three in four FDA-authorized AI devices are radiology tools, and most large hospitals run AI triage on every scan." },
  { id: "mammo", w: 2, label: "Had a screening mammogram", why: "<strong>Likely.</strong> AI second readers are spreading fast; in the MASAI trial AI support found 20% more cancers with 44% less reading work." },
  { id: "colon", w: 3, label: "Had a colonoscopy since 2021", why: "<strong>Likely.</strong> Real-time polyp detection has been FDA-authorized since April 2021 and now runs in thousands of endoscopy rooms." },
  { id: "eye", w: 2, label: "Had a diabetes eye screening at a regular clinic", why: "<strong>Likely.</strong> Autonomous retinal cameras have been authorized since 2018 and are built for exactly that setting." },
  { id: "notes", w: 3, label: "Watched your doctor use a phone or microphone during the visit", why: "<strong>Almost certainly.</strong> That is an ambient AI scribe drafting the note while you talk." },
  { id: "hospital", w: 2, label: "Stayed overnight in a hospital", why: "<strong>Likely.</strong> Sepsis and deterioration models run silently on vitals and labs in most large hospital systems." },
  { id: "wearable", w: 3, label: "Wear a smartwatch or continuous glucose monitor", why: "<strong>Yes.</strong> Irregular-rhythm notifications and predictive glucose alerts are machine learning models on your wrist." },
  { id: "trial", w: 1, label: "Been asked about joining a clinical trial", why: "<strong>Possibly.</strong> Large systems now use language models to pre-screen charts for eligibility before a coordinator calls." },
  { id: "biopsy", w: 1, label: "Had a biopsy read by a pathologist", why: "<strong>Emerging.</strong> Digital pathology AI is authorized but many labs still read glass slides by eye." },
  { id: "chatbot", w: 3, label: "Asked a chatbot about a symptom", why: "<strong>Obviously yes,</strong> and you are in good company: 34% of U.S. adults do." },
];

function renderQuiz() {
  const box = $("#quiz-items");
  box.insertAdjacentHTML("beforeend", QUIZ.map((q) => `<label class="check"><input type="checkbox" id="q-${q.id}" name="${q.id}"><span>${q.label}</span></label>`).join(""));
  const verdict = $("#quiz-verdict"), empty = $("#quiz-empty"), why = $("#quiz-why");
  const update = () => {
    const picked = QUIZ.filter((q) => $("#q-" + q.id).checked);
    why.innerHTML = picked.map((q) => `<li>${q.why}</li>`).join("");
    if (!picked.length) {
      verdict.textContent = "Nothing checked yet";
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    const score = picked.reduce((a, q) => a + q.w, 0);
    const tier = score >= 5 ? "Very likely" : score >= 2 ? "Likely" : "Possibly";
    verdict.textContent = `${tier}: AI was part of ${picked.length === 1 ? "the one thing" : `all ${picked.length} things`} you checked`;
  };
  box.addEventListener("change", update);
  update();
}

/* ------------------------------------------------------------------
   ADR slider. Corley et al.: each +1 point of ADR ≈ 3% lower
   interval-cancer risk (HR 0.97 per point). Compounded vs 25%.
   ------------------------------------------------------------------ */
function initAdr() {
  const r = $("#adr");
  const val = $("#adr-val"), risk = $("#adr-risk"), tier = $("#adr-tier"), meter = $("#adr-meter");
  const update = () => {
    const adr = +r.value;
    const rel = Math.pow(0.97, adr - 25);
    const pct = Math.round((1 - rel) * 100);
    val.textContent = adr;
    risk.textContent = pct === 0 ? "same" : (pct > 0 ? `−${pct}%` : `+${Math.abs(pct)}%`);
    tier.textContent = adr < 25 ? "Below benchmark" : adr < 35 ? "Meets benchmark" : adr < 45 ? "Strong" : "Elite";
    meter.style.width = Math.min(100, Math.round(rel * 100)) + "%";
    const said = pct === 0 ? "same interval cancer risk as the benchmark" : `${Math.abs(pct)}% ${pct > 0 ? "lower" : "higher"} interval cancer risk than the benchmark`;
    r.setAttribute("aria-valuetext", `${adr}% detection rate, ${said}, ${tier.textContent.toLowerCase()}`);
  };
  r.addEventListener("input", update);
  update();
}

/* ------------------------------------------------------------------
   Scope demo: clone the hero illustration, wire the toggle
   ------------------------------------------------------------------ */
function initDemo() {
  const hero = $("#hero-scope"), slot = $("#demo-scope"), toggle = $("#ai-toggle"), count = $("#det-count");
  const svg = hero.cloneNode(true);
  svg.id = "demo-scope-svg";
  svg.classList.remove("loop");
  svg.classList.add("demo");
  svg.setAttribute("aria-label", "Interactive colonoscopy view. Toggle AI detection to show or hide the green boxes around the polyp and the flat lesion.");
  slot.appendChild(svg);
  const state = svg.querySelector(".ai-state");
  const apply = () => {
    const on = toggle.checked;
    svg.classList.toggle("ai-on", on);
    state.textContent = on ? "CADe · ON" : "CADe · OFF";
    count.textContent = on ? "2" : "0";
  };
  toggle.addEventListener("change", apply);
  apply();
}

/* ------------------------------------------------------------------
   Evidence chart (HTML bars; one scale, 0–80%)
   ------------------------------------------------------------------ */
const EVIDENCE = [
  { label: "Overall adenoma detection", sub: "meta-analysis, 44 trials", a: 36.7, b: 44.7, src: 3 },
  { label: "Adenoma detection, Danish trial", sub: "795 patients", a: 46.6, b: 59.1, src: 5 },
  { label: "Screening patients only", sub: "Danish trial", a: 58.1, b: 74.4, src: 5 },
  { label: "Tiny adenomas, 1 to 5 mm", sub: "prospective trial", a: 33.2, b: 45.5, src: 3 },
  { label: "Right-sided serrated lesions", sub: "with fold-flattening cuff", a: 12.3, b: 24.8, src: 3 },
];
function renderEvidence() {
  const rows = $("#evidence-rows"), table = $("#evidence-table");
  const MAX = 80;
  rows.innerHTML = EVIDENCE.map((d) => `
    <div class="row">
      <div class="lab">${d.label} <small>· ${d.sub}</small></div>
      <div class="bars">
        <div class="bar s0"><i style="--w:${(d.a / MAX) * 100}%"></i><b>${d.a}%</b></div>
        <div class="bar s1"><i style="--w:${(d.b / MAX) * 100}%"></i><b>${d.b}%</b></div>
      </div>
    </div>`).join("");
  table.innerHTML = `<thead><tr><th scope="col">Measure</th><th scope="col" class="num">Without AI</th><th scope="col" class="num">With AI</th><th scope="col" class="num">Change</th><th scope="col">Source</th></tr></thead><tbody>${
    EVIDENCE.map((d) => `<tr><td>${d.label}<br><small>${d.sub}</small></td><td class="num">${d.a}%</td><td class="num">${d.b}%</td><td class="num">+${(d.b - d.a).toFixed(1)} pts</td><td>${src(d.src)}</td></tr>`).join("")
  }</tbody>`;
}

/* ------------------------------------------------------------------
   Copy the questions
   ------------------------------------------------------------------ */
function initCopy() {
  const btn = $("#copy-questions"), status = $("#copy-status"), list = $("#ask-list");
  btn.addEventListener("click", () => {
    const text = [...list.querySelectorAll("q")].map((q, i) => `${i + 1}. ${q.textContent}`).join("\n");
    navigator.clipboard.writeText(text).then(
      () => { status.textContent = "Copied. Paste it into your notes app."; setTimeout(() => (status.textContent = ""), 4000); },
      () => { status.textContent = "Select the questions above and copy them manually."; }
    );
  });
  $("#print-card").addEventListener("click", () => print());
}

/* ------------------------------------------------------------------
   Nav: highlight the section in view
   ------------------------------------------------------------------ */
function initNav() {
  const nav = $(".topbar nav");
  const links = [...nav.querySelectorAll("a")];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const a = links.find((l) => l.hash === "#" + e.target.id);
      links.forEach((l) => l.removeAttribute("aria-current"));
      if (!a) return;
      a.setAttribute("aria-current", "true");
      // Scroll only the nav strip sideways. scrollIntoView would also move the page.
      const r = a.getBoundingClientRect(), n = nav.getBoundingClientRect();
      if (r.left < n.left || r.right > n.right) nav.scrollLeft += r.left - n.left - 8;
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main > section, main > .hero").forEach((sec) => io.observe(sec));
}

renderSpecialties();
renderQuiz();
initAdr();
initDemo();
renderEvidence();
initCopy();
initNav();
