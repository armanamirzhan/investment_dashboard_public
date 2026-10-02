# investment_dashboard_public

Public investment briefing hub for Arman Amirzhan.

**Live site:** https://armanamirzhan.github.io/investment_dashboard_public/

## Purpose

A clean, public-facing static site for thematic investment sections:

| Path | Role |
|------|------|
| `/` (`index.html`) | Hub homepage + shared nav |
| `electrification/` | Power Map (grid, turbines, utilities, DC power) |
| `electrification/smr/` | SMR / advanced nuclear (Oklo, X-energy, peers) |
| `electrification/uranium/` | Uranium / HALEU fuel-cycle map |
| `hardware/` | Datacenter computation hardware (parent) |
| `hardware/photonics/` | AI optical interconnects and data-movement stack |
| `software/` | AI software landscape |
| `semiconductors/` | Semiconductor fabrication chain |
| `hyperscalers/` | Hyperscaler / GPU-cloud / colo buildout |
| `claude-summary/` | Claude Investment Summary: power and interconnect analysis with picks, consensus and targets; site coverage audit (notes for bots in `claude-summary/NOTES_FOR_GROK.md`) |
| `digests/` | Morning briefs and digests index |
| `smr/`, `uranium/`, `photonics/` | Redirect stubs (legacy bookmarks) |
| `assets/` | Shared CSS / JS |
| `data/` | Curated JSON identifiers and trackers (seed) |

This is **not** a clone of the private `Investment_Dashboard`. High-value company lists and trackers were extracted read-only; the layout is new and section-owned.

## Ownership

See [OWNERS.md](OWNERS.md). In short:

- **Website builder** owns hub shell: `index.html`, `assets/`, `README.md`, `OWNERS.md`, redirect stubs, and cross-cutting `data/` conventions.
- **Section bots** own their folders (`electrification/`, `electrification/smr/`, `electrification/uranium/`, `hardware/`, `hardware/photonics/`, `software/`, `semiconductors/`, `hyperscalers/`, `digests/`) and may extend section-specific data under `data/` with clear prefixes.

## GitHub Pages

Source: `main` branch, site root (`/`).

If Pages is not yet live after push, enable under **Settings → Pages → Deploy from a branch → `main` / root (or GitHub Actions if configured)**.

## Local preview

Any static server from repo root, e.g.:

```bash
python3 -m http.server 8080
```

## Disclaimer

Informational only — not investment advice.
