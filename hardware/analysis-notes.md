# Hardware analysis notes — in-rack power marks (October 2026)

**Scope:** `hardware/` schematic only (PSU, VRM, closely related in-rack shelves / board modules).  
**Audience:** Arman A’s public hub research taxonomy.  
**Hard rule:** Color marks are a study aid — **not investment advice**, not recommendations.

## Class lock (hub-wide — copy from Electrification)

| Role | Exact class / field |
|------|---------------------|
| Scarce now (red) | hotspot `scarcity-now`; JSON `scarcity: "now"` |
| Near-term (yellow) | hotspot `scarcity-soon`; JSON `scarcity: "soon"` |
| Default ticker | `co-ticker` (grey) |
| Strong rating | `rating-strong`; JSON `rating_mark: "strong"` |
| Not priced in | `not-priced-in`; JSON `not_priced_in: true` + demand_* fields |
| Fidelity | `fidelity_symbol` → Fidelity quote dashboard URL |

## Ownership boundaries

| Topic | Owner |
|-------|--------|
| In-rack CRPS / shelf PSU, board VRM, tray DC–DC modules | **Hardware** (this page) |
| Facility XFMR, MV switchgear, site SST, ~800 V hall busway | **Electrification** |
| SiC / GaN **device fab** for SST / LLC stages | **Semiconductor Fabrication** |
| SST **systems** / TRU skids | **Electrification** |

Do **not** paint facility-side red/yellow scarcity onto hardware cells.

## AC → DC timing used for judgments

From Electrification `analysis-notes.md` (shared pace):

- **H2 2026–2027:** sidecar 480 VAC → ±400 / 800 VDC beside rack (preserve upstream AC)
- **~2028–2029+:** facility-wide MVAC → 800 VDC; “no AC PSU” first on native 800 V racks
- Honest speed read: material sidecar volume ~2027; facility-native halls scale ~2028–2030

## Scarcity frames (hardware in-rack only)

### Yellow — `scarcity-soon`

| Stage | Why (1–2 sentences) |
|-------|---------------------|
| `psu` | Classic AC CRPS shelves still ship in volume today, but they are being designed around as sidecar (~H2’26–2027) and native 800 V racks ramp. Near-term bottleneck is the **transition** — high-density DC shelves / in-row conversion must scale while AC fleets still deploy. |
| `vrm` | Leading AI boards already push multiphase current density and thermal headroom; 48 V intermediate and 800→LV modular stages thicken with sidecar ~2027+. Marked **soon** (not red) because this is a tightening design constraint and ramp path, not a transformer-class lead-time shortage today. |

### Not framed red/yellow on hardware

Facility SST, XFMR, MV switchgear, hall DC busway — owned and framed on Electrification. Cooling CDUs stay cooling (thermal path), not re-labeled as power scarcity here.

## Ticker marks (sparse)

### Rainbow (`not-priced-in`)

| Name | Fidelity | Why on hardware |
|------|----------|-----------------|
| Delta Electronics | DELTY | In-rack / in-row 800 VDC-adjacent shelves and volume CRPS; TW listing often underweighted vs Western systems names. SST **systems** narrative stays on Electrification — here we keep the rack-shelf angle. |
| Vicor | VICR | High-density 800 / ±400 V → 48/54 V modules inside racks; smaller pure-play vs megacap OEMs; demand thickens with sidecar ~2027+. |

### Dark green (`rating-strong`)

**None on hardware PSU/VRM this pass.** Electrification’s greens (ETN, ABB, APH) are facility / connector franchises — not automatically in-rack PSU names. Prefer fewer greens when evidence is thin.

### Grey default (coverage, not a “buy” mark)

AEIS, FLEX, BELFB, Lite-On (2301.TW, no reliable Fidelity ADR linked), VRT, MPWR, Renesas (RNECY), TXN, Infineon (IFNNY), Murata (MRAAY).

**Rejected rainbow / green:** VRT (narrative already loud), MPWR (well-followed AI-board name — no clear “under-reflected” case without new evidence), ETN/ABB (facility-side on Electrification).

## Coverage check vs public AI-rack power map

Added explicit names that were bundled or missing: Advanced Energy (Artesyn), Flex Power Modules, Bel Power, Lite-On, Murata. Left private / thin OEM brands out. Cross-links point facility DC bus / SST / XFMR → Electrification and SiC/GaN chips → Fabrication.

## Open questions

- Whether 2027 sidecar volume is constrained more by **modules** (hardware) or **power semis** (Fabrication) — keep both pages thin and cross-linked until evidence clears.
- Lite-On Fidelity symbol: TW listing only in practical US retail paths; ADR inactive — ticker shown grey without a Fidelity href.
- Whether any pure in-rack name earns `rating-strong` later without copying Electrification’s facility greens.

## Sources (non-exhaustive)

- Electrification analysis-notes.md + stages (commit 572c8e3 class lock)
- OCP / NVIDIA / Vertiv public 800 VDC sidecar → facility timeline (as summarized by Electrification)
- Prior hardware stages.json company baseline (extended, not discarded)
