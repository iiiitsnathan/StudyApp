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
4. The site appears at `https://<your-username>.github.io/<repo-name>/` in a minute or two. This one uses the custom domain https://ismydoctorusingai.org/ (set under Settings → Pages; the `CNAME` file holds it), which is the link for the Common App activities section.

## Edit the content

| What | Where |
|---|---|
| Headline, intro, section copy, colonoscopy deep dive, "the catch", questions, source list | `index.html` |
| Specialty cards (name, likelihood, blurb, example, links) | `SPECIALTIES` array in `script.js` |
| "Has AI been part of your care?" checklist | `QUIZ` array in `script.js` |
| Trial numbers in the detection-rate chart | `EVIDENCE` array in `script.js` |
| Pew survey ranked list | `#patients` section in `index.html` (keep it sorted) |
| Wikipedia background links | `#sources` section in `index.html` |
| Colors, fonts, layout | tokens at the top of `styles.css` |
| Hospital map (intro slides, isometric rooms, pixel people) | `initTour()` and the sprite strings above it in `script.js`, styles under "hospital map" in `styles.css`; the building itself is the Blender render in `images/` |

Bracketed citations in the page (`[3]`) link to `#src-3` in the Sources section, so keep the numbering in sync if you add or remove a source.

The map builds one room per `<section>` in `main`, using its pictogram and its top-bar label, so a new section with a matching nav link gets a room automatically (the floor plan has eight spots). Clicking a room shows that section on its own; links like `#ask` open a room directly. The intro and the tutorial note show once per browser; to see them again, clear the site's data (or open a private window).

## Credits

The hospital map render was made in Blender. Fonts: Archivo, Atkinson Hyperlegible, and Caveat (tutorial note), self-hosted in `fonts/` under the SIL Open Font License (license files included). The endoscopy view is an illustration, not a patient image. Educational only, not medical advice.
