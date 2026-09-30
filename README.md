# investment_dashboard_public

Public investment briefing hub for Arman Amirzhan.

**Live site:** https://armanamirzhan.github.io/investment_dashboard_public/

## Purpose

A clean, public-facing static site for thematic investment sections:

| Path | Role |
|------|------|
| `/` (`index.html`) | Hub homepage + shared nav |
| `photonics/` | AI optical interconnects and data-movement stack |
| `electrification/` | Power Map (grid, turbines, utilities, DC power) |
| `smr/` | SMR / advanced nuclear (Oklo, X-energy, peers) |
| `uranium/` | Uranium / HALEU fuel-cycle map |
| `digests/` | Morning briefs and digests index |
| `assets/` | Shared CSS / JS |
| `data/` | Curated JSON identifiers and trackers (seed) |

This is **not** a clone of the private `Investment_Dashboard`. High-value company lists and trackers were extracted read-only; the layout is new and section-owned.

## Ownership

See [OWNERS.md](OWNERS.md). In short:

- **Website builder** owns hub shell: `index.html`, `assets/`, `README.md`, `OWNERS.md`, and cross-cutting `data/` conventions.
- **Section bots** own their folders (`electrification/`, `photonics/`, `smr/`, `uranium/`, `digests/`) and may extend section-specific data under `data/` with clear prefixes.

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
