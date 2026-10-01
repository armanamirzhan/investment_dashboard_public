# Folder ownership

Bot / human ownership rules for `investment_dashboard_public`. Do not commit into folders you do not own without coordination.

| Path | Owner | Notes |
|------|--------|--------|
| `index.html` | **Website builder** | Hub homepage, nav to sections |
| `assets/` | **Website builder** | Shared CSS/JS; keep section pages on shared nav |
| `README.md`, `OWNERS.md` | **Website builder** | Purpose and ownership docs |
| `data/` (shared seeds) | **Website builder** (+ section bots with prefix) | Curated JSON from private dashboard extract. Prefer prefixed files for section-only data (`electrification_*`, `smr_*`, `uranium_*`, `software_*`, `hardware_*`, `semiconductor_*`, `hyperscaler_*`) |
| `smr/`, `uranium/`, `photonics/` (root stubs) | **Website builder** | Thin redirect pages so old bookmarks keep working |
| `electrification/` | **Electrification / Power Map bot** | Power Map UI and briefings |
| `electrification/smr/` | **SMR bot** | Oklo, X-energy, NuScale tracker UI |
| `electrification/uranium/` | **Uranium bot** | Uranium / HALEU map UI |
| `hardware/` | **AI Computation Hardware bot** | Parent section for DC computation hardware |
| `hardware/photonics/` | **Photonics AI bot** | AI optical interconnects and data-movement stack |
| `software/` | **AI Software bot** | AI software landscape |
| `semiconductors/` | **Semiconductor Fabrication bot** | Fab / WFE / packaging / materials |
| `hyperscalers/` | **Hyperscalers bot** | Cloud operators, GPU clouds, colo REITs |
| `digests/` | **Daily Digest bot** | Digest index + dated brief HTML |

## Rules

1. Section bots may freely edit their folder and section-prefixed data files.
2. Do not rewrite `index.html` or `assets/` from a section bot except via a coordinated PR with the website builder.
3. Do **not** push to `armanamirzhan/Investment_Dashboard` from this workflow — that repo is private-source / read-only for extracts.
4. Digests follow the private dashboard pattern: dated pages + index listing (see private `morning-news/YYYY-MM-DD.html` and `reports/TICKER_Name.html` for style reference only).
5. Root `smr/`, `uranium/`, and `photonics/` redirect stubs are website-builder owned; do not put new section content there.

## Pages URL

https://armanamirzhan.github.io/investment_dashboard_public/
