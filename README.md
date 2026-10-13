# Is my doctor using AI?

A single-page, visual explainer on where artificial intelligence already shows up in medical care, specialty by specialty, with a deep dive on AI-assisted colonoscopy. Built as a passion project; every number links to its source, Wikipedia style.

## Run it

It is plain HTML, CSS and JavaScript. No build step.

- Open `index.html` in a browser, or
- serve the folder: `python3 -m http.server 8000` then visit http://localhost:8000

## Put it online (GitHub Pages)

1. Push this repo to GitHub.
2. Repo **Settings → Pages**.
3. Under *Build and deployment*, choose **Deploy from a branch**, pick the branch and `/ (root)`, save.
4. The site appears at `https://<your-username>.github.io/<repo-name>/` in a minute or two. That is the link for the Common App activities section.

## Edit the content

| What | Where |
|---|---|
| Headline, intro, section copy, colonoscopy deep dive, "the catch", questions, source list | `index.html` |
| Specialty cards (name, likelihood, blurb, example, links) | `SPECIALTIES` array in `script.js` |
| "Has AI been part of your care?" checklist | `QUIZ` array in `script.js` |
| Trial numbers in the detection-rate chart | `EVIDENCE` array in `script.js` |
| Pew survey ranked list | `PEW` array in `script.js` |
| Wikipedia background links | `WIKI` array in `script.js` |
| Colors, fonts, layout | tokens at the top of `styles.css` |

Bracketed citations in the page (`[3]`) link to `#src-3` in the Sources section, so keep the numbering in sync if you add or remove a source.

## Credits

Fonts from Google Fonts (Archivo, Atkinson Hyperlegible). The endoscopy view is an illustration, not a patient image. Educational only, not medical advice.
