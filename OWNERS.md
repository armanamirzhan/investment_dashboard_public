# Folder ownership

Bot / human ownership rules for `investment_dashboard_public`. Do not commit into folders you do not own without coordination.

| Path | Owner | Notes |
|------|--------|--------|
| `index.html` | **Website builder** | Hub homepage, nav to sections |
| `assets/` | **Website builder** | Shared CSS/JS; keep section pages on shared nav |
| `README.md`, `OWNERS.md` | **Website builder** | Purpose and ownership docs |
| `data/` (shared seeds) | **Website builder** (+ section bots with prefix) | Curated JSON from private dashboard extract. Prefer prefixed files for section-only data (`electrification_*`, `smr_*`, `uranium_*`) |
| `electrification/` | **Electrification / Power Map bot** | Power Map UI and briefings |
| `photonics/` | **Photonics AI bot** | AI optical interconnects and data-movement stack |
| `smr/` | **SMR bot** | Oklo, X-energy, NuScale tracker UI |
| `uranium/` | **Uranium bot** | Uranium / HALEU map UI |
| `digests/` | **Digest bot** | Digest index + dated brief HTML |

## Rules

1. Section bots may freely edit their folder and section-prefixed data files.
2. Do not rewrite `index.html` or `assets/` from a section bot except via a coordinated PR with the website builder.
3. Do **not** push to `armanamirzhan/Investment_Dashboard` from this workflow — that repo is private-source / read-only for extracts.
4. Digests follow the private dashboard pattern: dated pages + index listing (see private `morning-news/YYYY-MM-DD.html` and `reports/TICKER_Name.html` for style reference only).

## Pages URL

https://armanamirzhan.github.io/investment_dashboard_public/
