# Folder ownership

Bot / human ownership rules for `investment_dashboard_public`. Do not commit into folders you do not own without coordination.

| Path | Owner | Notes |
|------|--------|--------|
| `index.html` | **Website builder** | Hub homepage, nav to sections |
| `assets/` | **Website builder** | Shared CSS/JS; keep section pages on shared nav |
| `README.md`, `OWNERS.md` | **Website builder** | Purpose and ownership docs |
| `data/` (shared seeds) | **Website builder** (+ section bots with prefix) | Curated JSON from private dashboard extract. Prefer prefixed files for section-only data (`electrification_*`, `smr_*`, `uranium_*`, `software_*`, `hardware_*`, `semiconductor_*`, `hyperscaler_*`) |
| `smr/`, `uranium/`, `photonics/` (root stubs) | **Website builder** | Thin redirect pages so old bookmarks keep working |
| `electrification/` | **AI Electrification** | Power Map UI and briefings |
| `electrification/uranium/` | **AI Electrification** | Uranium / nuclear fuel cycle (merged from Uranium bot) |
| `electrification/smr/` | **Performance tracker** | Oklo, X-Energy scorecards (SMR nested under Electrification) |
| `hardware/` | **AI Computation Hardware** | Parent section for DC computation hardware |
| `hardware/photonics/` | **AI Computation Hardware** | AI optical interconnects (merged from Photonics AI) |
| `software/` | **AI Software** | AI software landscape |
| `semiconductors/` | **Semiconductor Fabrication** | Fab / WFE / packaging / materials |
| `hyperscalers/` | **Hyperscalers** | Cloud operators, GPU clouds, colo REITs |
| `analysis/` | **Investment analysis** | Portfolio briefings (electrification focus, gold/rainbow wiring notes) |
| `analysis/companies/` | **Performance tracker** | One-screen company scorecards |
| `claude-summary/` | **Claude (Anthropic)** | Claude Investment Summary: power and interconnect investment pages, research reports, coverage-audit data (`data/coverage-gaps.json`). Read and link freely; do not edit picks, ratings or targets (dated judgments). See `claude-summary/NOTES_FOR_GROK.md`. |
| `digests/` | **AI Infra Daily Digest** | Digest index + dated brief HTML |

## Rules

1. Section bots may freely edit their folder and section-prefixed data files.
2. Do not rewrite `index.html` or `assets/` from a section bot except via a coordinated PR with the website builder.
3. Do **not** push to `armanamirzhan/Investment_Dashboard` from this workflow — that repo is private-source / read-only for extracts.
4. Digests follow the private dashboard pattern: dated pages + index listing (see private `morning-news/YYYY-MM-DD.html` and `reports/TICKER_Name.html` for style reference only).
5. Root `smr/`, `uranium/`, and `photonics/` redirect stubs are website-builder owned; do not put new section content there.
6. The primary nav now has a **Claude Summary** tab (between Analysis and Digests) on every page with a nav; copy the current nav block when you add pages. On phones the nav stays on one row and its links scroll sideways (`assets/site.css`, max-width 640px rule), so it no longer wraps under the mark legend.

## Pages URL

https://armanamirzhan.github.io/investment_dashboard_public/

## Viewing this file on GitHub Pages

GitHub Pages may serve `OWNERS.md` as `text/markdown` (raw). Prefer the [GitHub blob view](https://github.com/armanamirzhan/investment_dashboard_public/blob/main/OWNERS.md).
