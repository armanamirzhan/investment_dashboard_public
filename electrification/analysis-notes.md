# Electrification analysis notes — October 2026

**Scope:** `electrification/` and `electrification/uranium/` only.  
**Audience:** Arman A’s public hub research taxonomy.  
**Hard rule:** Color marks are a study aid — **not investment advice**, not recommendations.

## Multi-pass method

1. **Breadth** — Walk generation → T&D → site SST / DC–DC → 800 V bus → board power → cooling power path → utilities/regulation. Compare company coverage to public OCP / NVIDIA / Vertiv / OEM maps.
2. **Mid concentration** — Delivery gear (transformers, switchgear), 800 VDC conversion, SST systems.
3. **Deep on hot names** — GEV, ETN, VRT, POWL, ABB, Hitachi Energy, Delta, Vicor, Bloom; check backlog / lead-time / narrative pricing evidence.
4. **Breadth re-check** — Confirm mid/deep concentration did not drop accurate coverage elsewhere; add missing hops (cooling, MV switchgear, T&D EPC, Vicor/Flex/AEIS/nVent/MPWR).

## AC → DC (~800 V) pace (public timelines)

| Window | What public sources say |
|--------|-------------------------|
| 2025–mid 2026 | OCP LVDC / 800 VDC work after Mar 2025 presentations; Google / Microsoft / NVIDIA MVAC→800 VDC workstream; SST spec v0.3 (OCP blog Aug 2026) |
| H2 2026–2027 | **Sidecar** path: 480 VAC → ±400 / 800 VDC beside rack (preserve upstream AC). Vertiv commercialization H2 2026 → ramp 2027. NVIDIA Kyber / 800 V HVDC framing ~2027 |
| ~2028–2029+ | Facility-wide MVAC → 800 VDC via TRUs / SST skids (OCP path B); “no AC PSU in servers” becomes default for purpose-built AI factories |

**Honest speed read:** Material sidecar volume from ~2027; facility-native 800 VDC halls scale ~2028–2030. Not an overnight forklift upgrade of the AC fleet.

## Class lock (hub-wide — do not invent alternates)

| Role | Exact class / field |
|------|---------------------|
| Scarce now (red) | hotspot `scarcity-now`; JSON `scarcity: "now"` |
| Near-term (yellow) | hotspot `scarcity-soon`; JSON `scarcity: "soon"` |
| Default ticker | `co-ticker` (grey) |
| Strong rating | `rating-strong`; JSON `rating_mark: "strong"` |
| Not priced in | `not-priced-in`; JSON `not_priced_in: true` + `demand_detail` / demand_* fields |
| Fidelity | `fidelity_symbol` → `https://digital.fidelity.com/prgw/digital/research/quote/dashboard/summary?symbol=TICKER` |

Shared with Hardware and Semiconductor Fabrication.

## Scarcity frames (stages)

### Red — extreme demand / scarcity **right now**

| Stage id | Rationale |
|----------|-----------|
| `ac-ac` | Utility step-up / large Cu-Fe transformers; LPT/GSU lead times often 128–160+ weeks |
| `facility-xfmr` | Same product class at campus fence; headline “transformer shortage” |
| `mv-switchgear` | Engineered MV switchgear / custom distribution; elevated lead times with transformers as schedule gate |

### Yellow — near-term bottleneck (`scarcity-soon`) (~2027–2029)

| Stage id | Rationale |
|----------|-----------|
| `ccgt` | Large-frame turbines still long-lead; interconnect + machine slot risk |
| `turbine` | Onsite genset/turbine bridging capacity remains contested |
| `sofc` | Time-to-power demand vs interconnect queues; stack/materials constraints |
| `site-sst` | Commercial scale late 2020s; facility-wide DC path needs SST/TRU volume |
| `dc-bus` | 800 V busway / connectors must scale with native halls |
| `llc` | 800→12 V (and module) conversion volume with Kyber / Diablo paths |
| `cooling` | Thermal path scales 1:1 with electrical MW; CDU / liquid capacity |
| `epc-td` | Quanta-class crews to land gear in the field |

**Not framed red/yellow:** H₂/PEM path stages (not AI baseload thesis); silicon GPU load (owned elsewhere as compute); legacy UPS/PDU/PSU (being designed around, not the scarce new path).

## Ticker marks (sparse)

### Dark green (`rating-strong`) — extremely good franchise / setup (few)

| Name | Ticker | Why (one line) |
|------|--------|----------------|
| Eaton | ETN | Broad electrical franchise + certified MVSST; sustained DC book-to-bill / quality consensus |
| ABB | ABB | Electrification + Infinitus SST heritage; high-quality industrial franchise |
| Amphenol | APH | Connector/busway compounder on hall power paths; historically strong franchise quality |

**Explicitly not green (rich or narrative already loud):** VRT, GEV, POWL, BE, NVDA (load context only).

### Rainbow (`not-priced-in`) — extreme future demand, narrative **not clearly priced**

| Name | Ticker / Fidelity | When / for what (summary) |
|------|-------------------|---------------------------|
| Hitachi Energy | 6501.T → HTHIY | Now–2028 LPT/GSU/HVDC capacity; oligopoly role; own briefing noted ~2× sales / less AI-delivery narrative pricing |
| ~~Delta Electronics~~ | 2308.TW | **Moved to green** (Oct 2026 overlay) — production SST + 800 V shelves; no verified US OTC for Fidelity |
| Vicor | VICR | 2027+ 800 V / ±400 V modular DC–DC inside racks; smaller pure-play vs megacap systems OEMs |

**Rejected rainbow candidates (priced or thin evidence):** VRT, ETN, GEV, POWL, CEG/VST (merchant power is a different tape), Bloom (volatile / ScSZ story already well-told).

## Company coverage adds (Pass 1 gaps)

- Board / rack conversion: Vicor, Flex, Advanced Energy, MPWR, TXN ticker fill  
- Cooling path stage: VRT, NVT, MOD, TT, CARR, JCI, CoolIT (private)  
- MV switchgear stage: ETN, POWL, HUBB, Schneider, GEV, Siemens Energy, ABB  
- T&D EPC stage: PWR, MTZ, MYRG  
- Cross-links: Semiconductor Fabrication owns SiC/GaN **chip fab**; this page owns SST **systems**

## Open questions / handoffs

### For Semiconductor Fabrication (SST chips)

- SiC MOSFET / diode die supply, wafer PVT / epitaxy capacity, and GaN in 800→LV LLC stages  
- Device-level roadmaps for SST skids vs industrial TRUs  
- Aehr (AEHR) burn-in vs crystal growth distinction (already noted here; fab section should own depth)

### Still thin / watch

- Exact US Fidelity symbols for some foreign listings (HTHIY / MHVYF best-effort; DELTY dropped — unverified)  
- DC busway arc-interruption product maturity (industry still early)  
- BESS / DC UPS coupling economics on 800 V backbones (Tesla Megapack / Fluence / Hitachi Energy added to UPS stage Oct 2026 audit)  
- Whether sidecar volume in 2027 is constrained by power semiconductors (Semi Fab) or by systems OEMs (here)

## Sources consulted (non-exhaustive)

- OCP: Google / Microsoft / NVIDIA LVDC & 800 VDC collaboration (Aug 2026)  
- NVIDIA 800 V HVDC architecture blog (Kyber ~2027)  
- Vertiv practical path to 800 VDC (sidecar → 2028–29 facility)  
- Trade press on LPT/GSU/switchgear lead times and OEM backlogs (2026)  
- Prior hub September 2026 electrification baseline (extended, not discarded)

## Claude audit batch (Oct 2, 2026)

Closed high-priority coverage-gaps on Power Map + uranium Cameco (folder-only; shared `data/` left to Website builder):

- **Tickers:** ABB → ABBN.SW / ABBNY (Fidelity ABBNY); Delta Fidelity DELTY removed (keep 2308.TW unlinked); Ceres → CWR.L / CPWHF; Doosan Fuel Cell stays 336260.KS unlinked.
- **Facts:** ABB removed from ac-dc/hvdc (Hitachi Energy owns former Power Grids HVDC); Reinhausen SST attributed to **Siemens AG** (SIE.DE / SIEGY), not Siemens Energy.
- **Adds:** Cummins, Generac, Rolls-Royce (mtu); HD Hyundai Electric, Hyosung Heavy, Cleveland-Cliffs (GOES); Prysmian; Legrand; Lite-On; onsemi; Tesla Megapack / Fluence / Hitachi Energy on UPS/BESS hop.
- **Cameco:** 49% Westinghouse + 49% GLE called out on `uranium/cameco.html` (+ hub blurb).
- **Layout:** company tables wrapped in `overflow-x:auto` for phone width.
- **Skipped:** A-154 Schneider SNEXF in shared `data/*` (Website builder).

Not investment advice.

## Claude audit medium batch (Oct 2, 2026 follow-up)

- Siemens Energy US OTC **SMEGF** (SMNEY did not quote 2 Oct 2026).
- Digest adds: **LS Electric** (transformers), **LG Energy Solution** (BESS); Tesla Megapack already on UPS.
- Reciprocal links to `analysis/sic-burn-in.html` from Aehr / SiC burn-in copy.
- NextEra–Dominion restated as pending acquisition (NEE / D).
- Utility/IPP tickers on §8.2; hop 1 names GEV + Siemens Energy as large-frame turbine OEMs.
- Compact table A-007 column fix; multi-ticker cells split for A-006; static note for stages without hotspots (A-008).

Not investment advice.

## Mark sync (Oct 2, 2026 audit A-025 / A-026 / A-027)

- **Green (`rating-strong`)** now includes Delta, Vertiv, Bloom (with Project Jupiter force-majeure caveat on Bloom), Eaton, ABB, Amphenol — per live `stages.json` / analysis overlay. Older “explicitly not green: VRT/BE” lines above are superseded.
- **Rainbow (`not-priced-in`):** Infineon, STMicroelectronics, Hitachi Energy (via Hitachi Ltd HTHIY). **Vicor rainbow removed** after 2026 AI OEM licensing re-rating (~YTD move already in the tape).
- Delta Fidelity still **2308.TW only** (no DELTY).

Not investment advice.

## Medium/low sweep (Oct 2, 2026)

Stages + Power Map + uranium hub: nuclear/merchant stage; pipeline midstream; turbine BTM/reciprocal OEMs; LPT vs facility xfmr (Schneider/Eaton off ac-ac); cable Nexans/NKT; DC protection (Littelfuse, ABB SS breaker, TE); SiC silicon/passives (ROHM, Renesas, ADI, Navitas, Innoscience, Murata, TDK); cooling Motivair/LG; EPC EME/FIX/PRIM/AGX; uranium Western list + fuel-cycle + Centrus Sep 2026 note. Vicor rainbow cleared; Bloom Jupiter caveat.

Not investment advice.

## C-164 placement (Oct 2, 2026)

Website builder seeded master JSON. Mapped on pages:
- **AES** — nuclear/merchant hop + §8.2 (take-private caveat)
- **Fluence** / **Tesla Energy (Megapack)** — UPS/BESS hop + stages
- **TerraPower** / **Kairos Power** — `electrification/smr/` private-developer list with NRC/Meta/Google notes

Not investment advice.

