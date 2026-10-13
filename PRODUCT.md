# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: college admissions readers who open the link from Nathan's Common App activities section. They give it a few minutes at most, they are judging the depth of research and the quality of what was built, and they are not medical experts.

Secondary: patients and members of the public who want to know whether AI is part of their own care. The page is written so it genuinely serves them, because a useful public explainer is the strongest evidence of the work. That is how the page earns the admissions reader's attention.

## Product Purpose

A single-page, sourced explainer on where artificial intelligence already shows up in medical care, specialty by specialty, with a deep dive on AI-assisted colonoscopy. It exists to show, through the work itself, that its author can research a technical medical topic, judge evidence, and communicate it clearly.

Success: an admissions reader comes away convinced the research is real and careful, and a lay reader comes away able to tell where AI is likely in their care and what to ask their doctor.

## Positioning

An evidence-first explainer where every number links to a primary source, Wikipedia style. It covers both the case for medical AI and its measured problems: false alarms, deskilling, missing reimbursement and missing patient disclosure. It is not advocacy and not a product pitch.

## Operating Context

- Reached through a link in the Common App activities section, and possibly shared directly with patients or classmates.
- Read on desktop by admissions staff and on phones by everyone else.
- Interactive pieces: a specialty field guide, a "has AI been part of your care?" checklist, an adenoma detection rate slider, an AI detection toggle on an illustrated colonoscopy view, an evidence chart with a table fallback, and a copyable list of questions to ask a doctor.

## Capabilities and Constraints

- Current build: static HTML, CSS and JavaScript with no build step, deployed to GitHub Pages. The user has not made this a binding rule.
- Content lives in index.html, and the specialty, quiz, evidence, survey and Wikipedia data live in arrays in script.js. Bracketed citations link to numbered entries in the Sources section, and that numbering must stay in sync.
- Educational only, not medical advice.
- Open decisions: the public GitHub Pages URL, a share image, and canonical and Open Graph URL tags are not set yet.

## Brand Commitments

- Name: "Is my doctor using AI?"
- Byline: Nathan, a high school student. The page credits him as author.
- Voice: a neutral, journalistic explainer, like a good health-news piece. The writing stays impersonal, and Nathan's name appears in the byline and footer rather than in the prose. Avoid chatbot rhythms such as punchy fragments and neat "not X, but Y" reversals.
- Every number and factual claim cites a numbered source. No uncited statistics. This is the one rule the user confirmed as binding for all future work.

## Evidence on Hand

- 24 cited sources, listed in index.html: randomized trials, meta-analyses, FDA authorizations, Pew Research Center surveys and cost-effectiveness models.
- Real figures already on the page, with citations: adenoma detection rates, miss rates, the MASAI mammography trial, deskilling data, Pew survey results, and a Markov-model cost ledger.
- The colonoscopy view is an original SVG illustration, not a patient image.
- Absent, and not to be fabricated: patient or clinician testimonials, endorsements, institutional affiliations, expert review, press coverage, visitor metrics, and any statistic without a source.

## Product Principles

1. Evidence before assertion. A claim without a source does not ship.
2. Show both sides. The measured problems of medical AI get the same care as its benefits.
3. Serve the lay reader, and the admissions reader follows. Usefulness to patients is the proof of quality.
4. Respect a short read. The most important answers must land within a few minutes and survive skimming.
5. The work speaks for itself. Credibility comes from rigor and clarity, not from claims about the author.
