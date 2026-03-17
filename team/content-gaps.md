# Content Gaps

Items that could not be extracted automatically from LinkedIn or the resume PDF.
Justin should fill these in manually.

## Filled / Confirmed
- [x] Name: Justin Leong
- [x] Email: justinleong3187@gmail.com
- [x] Phone: 925-678-0183
- [x] LinkedIn: https://www.linkedin.com/in/justin-leong-datmango
- [x] GitHub: https://github.com/DatMango
- [x] Location: San Ramon, CA
- [x] Headline from LinkedIn
- [x] All 3 experience roles (from resume)
- [x] All 3 projects (from resume)
- [x] Education (both degrees from resume)
- [x] Skills (from resume)
- [x] Profile photo (400x400 from LinkedIn files)

## Still Needed (Manual Entry)

| Field | Location in Code | Notes |
|-------|-----------------|-------|
| Formspree form ID | `src/routes/contact/+page.svelte` line ~13 | Replace `xpwqojny` with your actual Formspree form ID. Sign up free at formspree.io |
| GitHub project URLs | `src/lib/data.ts` — `projects[]` | Add `githubUrl` field to each project if repos are public |
| LinkedIn slug | `src/lib/data.ts` | Verify `justin-leong-datmango` is the exact slug |
| About/summary bio | `src/lib/data.ts` — `profile.summary` | Optionally expand with more personal detail |

## Notes
- The profile image (`static/images/profile.jpg`) was extracted from LinkedIn saved HTML — it shows the LinkedIn #OpenToWork frame. If you have a clean headshot, replace it at `portfolio/static/images/profile.jpg`.
- Resume is served at `/resume.pdf` from `portfolio/static/resume.pdf`.
