> **Coverage audit (2 Oct 2026), read-only pass over commit 9d8ec4e.** Machine-readable items: `claude-summary/data/coverage-gaps.json`.

# Audit A: Electrification, Uranium, SMR, Analysis and data files

**Repository:** `armanamirzhan/investment_dashboard_public` (read-only). **Audit date:** Fri 2 Oct 2026.
**Machine-readable list:** the items with IDs beginning A- in `../data/coverage-gaps.json` (184 items: 25 high, 91 medium, 68 low).

## Method and limits

- I read every in-scope file in full, including:
  - all 6 inline SVG diagrams and their 47 clickable hotspots;
  - `briefing.js` logic, re-run in Node against `stages.json` to see which Fidelity link each ticker actually gets;
  - every JSON handoff and data file.
- I cross-checked the 18 scorecard pages against `handoff.json` and `sic-capacity-handoff.json`. All 18 match. The only differences are typography and an exchange-label wording on Resonac and ROHM.
- Verification was limited:
  - The WebSearch budget for the session was already used up, so time-sensitive claims were checked with WebFetch against primary or reference pages. These were company IR pages, SEC filings, DOE, OCP, NVIDIA, Wikipedia and stockanalysis.com quote pages, all accessed 2 Oct 2026.
  - Some fetches failed (permission timeouts and two HTTP 429 rate limits, on nasdaq.com and on a stockanalysis OTC page). Claims I could not re-check are marked "not re-verified" in the JSON `source` field.
  - I could not confirm the Fidelity symbol **DELTY** for Delta Electronics (Taiwan). **DLEGF** is Delta *Thailand*, a different company.
- Internal links: 30 HTML files checked, with no broken relative links or missing anchors. The broken items are a missing file referenced in prose, stale paths, and 3 orphan stages (see below).

---

## 1. Top findings, ranked

| # | Priority | Finding | Where | Evidence |
|---|---|---|---|---|
| 1 | High | **ABB is shown as NYSE-listed with Fidelity symbol "ABB".** ABB now trades on SIX/Stockholm, and in the US it is OTC **ABBNY**. | Power Map hop 5 ("ticker often ABB on SIX/NYSE"), compact table, 5 stages in stages.json, briefing.js line 459; Analysis ABB card and scorecard ("NYSE / SIX"). | Wikipedia *ABB Group* lists "SIX, Nasdaq Stockholm, OTC pink sheets"; stockanalysis `/stocks/abb/` resolves to OTCMKTS: ABBNY. |
| 2 | High | **ABB is listed, and green-marked, as an HVDC / converter-station supplier.** ABB sold Power Grids to Hitachi (80.1% in 2020, the rest in 2022). That business is now Hitachi Energy. | stages `ac-dc` ("HV and conversion heritage") and `hvdc` ("HVDC heritage"). | Wikipedia *ABB Group*; Wikipedia *Hitachi Energy*. |
| 3 | High | **The SST partnership with Reinhausen is credited to Siemens Energy, but the partner is Siemens AG** (Smart Infrastructure). Siemens AG (SIE.DE / SIEGY) appears nowhere on the Power Map. The Analysis scorecard has this right, so the two pages contradict each other. | Hop 5, compact table "SST (partnership)", §8.1 table, `site-sst` note. | Reinhausen release of 14 Aug 2026, which quotes "CEO Electrification and Automation at Siemens". |
| 4 | High | **Broken Fidelity links in the stage panels.** `renderTickerAnchor()` regex-matches the display string, so Ceres "LSE: CWR" links to `symbol=LSE` and Doosan Fuel Cell "KRX: 336260" links to `symbol=KRX`. Separately, the page-level enhancer collapses every multi-ticker cell into one anchor that points at the first company and carries its colour mark. For example, STM and WOLF render inside Infineon's rainbow link. | briefing.js lines 298–315 and 447–451; compact and comparison tables. | Node re-run of the same code (in this audit). |
| 5 | High | **"NextEra–Dominion package … $66.8 B" is described as a "utility-scale partnership".** It is actually NextEra's pending all-stock acquisition of Dominion, about $67 B, announced 18 May 2026. | Power Map §8.2; SMR hub #merchant. | Wikipedia *NextEra Energy* and *Dominion Energy*. |
| 6 | High | **The Oklo tracker shows stale green gauges.** Hard-coded baselines (PPA 2, HALEU 2, NRC 2, Revenue 2) contradict the repo's own verified `updates/oklo-week-2026-W40.json` (1 / 0 / 1 / 0), and the page never loads that JSON. The goal "Criticality in 2027" is also stale: Groves went critical on 5–6 Aug 2026. | `electrification/smr/oklo.html`. | DOE NE, 6 Aug 2026; Centrus 8-K, 18 Jun 2026 (non-binding LOI). |
| 7 | High | **NuScale data claims "only SMR with full NRC design certification, 77 MWe per module".** The certification (Jan 2023) is for the 50 MWe US600. The 77 MWe US460 has a Standard Design Approval (29 May 2025). | `data/smr_companies.json`, `nuclear_tracker.json`. | Wikipedia *NuScale Power*. |
| 8 | High | **Schneider is ticker "SNEXF" in data files.** That symbol does not resolve (stockanalysis returns 404). Schneider's US lines are SBGSY (ADR) and SBGSF. | `data/electrification_companies.json`, `data/companies.json`. | stockanalysis SBGSY / SBGSF pages. |
| 9 | High | **Solaris Energy Infrastructure has `ticker: null`** but is listed (NYSE: SEI). | `data/power_suppliers.json`. | stockanalysis `/stocks/sei/`. |
| 10 | High | **Material coverage gaps:** gensets (Cummins, Generac, Rolls-Royce mtu), large-transformer makers (HD Hyundai Electric, Hyosung, LS Electric) and GOES steel (Cleveland-Cliffs), HV cable (Prysmian), busway/PDU (Legrand), AI power shelves (Lite-On), onsemi, battery storage (no stage at all), Westinghouse and BWRX-300 on the SMR hub. | See section 2. | Generac–Amazon ~$2.4 B deal (Sep 2026); NVIDIA 800 VDC partner list; NVIDIA DSX Ready BESS; LS Electric 345 kV order (1 Oct 2026). |

---

## 2. `electrification/index.html` and `stages.json`: Power Map

### 2.1 Diagram stages (hotspot → `stages.json` company list)

Each line below gives the stage, the diagrams it appears on, the companies listed now, what is missing, and any errors. Marks: G = green (rating-strong), R = rainbow (not-priced-in). "Fid" is the Fidelity symbol.

**`ccgt`** (yellow; Fig 0, Fig 2)
- **Present:** Mitsubishi Heavy (TSE: 7011; Fid MHVYF), GE Vernova (GEV), Siemens Energy (ENR.DE / SMNEY), Caterpillar (CAT).
- **Missing:**
  - Doosan Enerbility (034020.KS), a fourth heavy-duty gas-turbine OEM (medium).
  - CCGT owners and EPCs such as Vistra, NRG and Argan (AGX), if the box means the plant rather than the OEM (low).
  - Hot-section castings bottleneck, e.g. Howmet (HWM) (low).
- **Errors:** Caterpillar (Solar Turbines up to about 23 MW, plus gensets) is not a combined-cycle supplier. Move it to `turbine` only.

**`turbine`** (yellow; Fig 0, Fig 5)
- **Present:** MHI, Caterpillar, GE Vernova.
- **Missing:**
  - High: Cummins (CMI); Generac (GNRC; Amazon data-center backup-generator agreement of about $2.4 B, Sep 2026); Rolls-Royce mtu (RR.L / RYCEY).
  - Medium: Wärtsilä (WRT1V / WRTBY; 790 MW off-grid Texas data-center plant, Apr 2026); Baker Hughes (BKR; NovaLT turbines for data centers); Solaris Energy Infrastructure (SEI; behind-the-meter fleet for xAI).
  - Low: Siemens Energy (it is in `ccgt` but not here).

**`sofc`** (yellow; Fig 0, 3, 5)
- **Present:** Bloom Energy (NYSE: BE, G), Ceres Power (LSE: CWR, no Fidelity symbol), MHI, Doosan Fuel Cell (KRX: 336260).
- **Missing:** Ceres licensees Weichai (2338.HK) and Delta, which are named in the text but not listed here (low).
- **Errors:**
  - Ceres links to Fidelity `symbol=LSE` and Doosan Fuel Cell to `symbol=KRX`. Add `fidelity_symbol: "CPWHF"` for Ceres.
  - Bloom's green mark should carry a caveat: the stock fell around 25 Sep 2026 on reports that Oracle sent a force-majeure notice on Project Jupiter.

**`mcfc-pafc`** (no frame; Fig 0 only)
- **Present:** FuelCell Energy (NASDAQ: FCEL), HyAxiom PureCell (private).
- **Missing:** Doosan Fuel Cell (336260.KS), which is primarily a PAFC maker and is the listed route into HyAxiom's technology.
- **Errors:**
  - HyAxiom is part of Doosan Group (it is UTC Power's fuel-cell unit, acquired in 2014). The "possible Nasdaq listing" claim is unsourced.
  - The FCEL–Siemens item should be dated: it is an exploratory collaboration from 9 Jul 2026. Also add FCEL's first data-center power agreement (2 Sep 2026) and the Q3 FY26 revenue decline of 29% YoY.

**`ac-ac`** (red; Fig 0, 2)
- **Present:** GE Vernova, Siemens Energy, Hitachi Energy (6501.T → HTHIY, R), Schneider (SU.PA / SBGSY), Eaton (ETN, G).
- **Missing:**
  - High: HD Hyundai Electric (267260.KS; #1 share of US ultra-high-voltage transformers); Hyosung Heavy Industries (298040.KS; Memphis 765 kV plant).
  - Medium: LS Electric (010120.KS; 345 kV order for a US AI data center on 1 Oct 2026); Mitsubishi Electric (6503.T / MIELY).
  - Low: WEG (WEGE3 / WEGZY).
- **Errors:**
  - Schneider and Eaton do not make generator step-up or large power transformers. Move them to `facility-xfmr`.
  - GE Vernova's transformer exposure comes largely through Prolec GE. GEV agreed to buy the remaining 50% for $5.28 B (21 Oct 2025); name Prolec in the note.

**`hvac`** (no frame; Fig 0, 2)
- **Present:** GE Vernova, Siemens Energy, Hitachi Energy (R), Schneider, Eaton (G), Quanta (PWR).
- **Missing:**
  - High: Prysmian (PRY.MI / PRYMY).
  - Medium: Nexans (NEX.PA / NXPRF).
  - Low: Valmont (VMI; transmission structures).
- **Errors:** Schneider and Eaton are not high-voltage transmission suppliers. Move them out of this stage.

**`ac-dc`** (no frame; Fig 0, 2)
- **Present:** Hitachi Energy (R), Siemens Energy, GE Vernova, ABB (G).
- **Missing (low):** NARI (600406.SS), TBEA and XJ Electric, if the map aims to be global.
- **Errors:** Remove ABB (high). It no longer makes HVDC converter stations.

**`hvdc`** (no frame; Fig 0, 2)
- **Present:** Hitachi Energy (R), Siemens Energy, GE Vernova, ABB (G), Quanta.
- **Missing:** Prysmian (high); NKT (NKT.CO) and Nexans (medium).
- **Errors:** Remove ABB (high).

**`site-sst`** (yellow; Fig 0, 2, 5)
- **Present:** Eaton (G), ABB (G), Delta (2308.TW → DELTY, G), Siemens Energy, Schneider, Vertiv (G), DG Matrix (private).
- **Missing:**
  - High: Siemens AG (SIE.DE / SIEGY), the actual Reinhausen partner.
  - Medium: Mitsubishi Electric.
  - Low: GE Vernova (its 800 VDC reference designs, with MV SST around 2028); Hitachi Energy (the HTML lists it, the stage does not); Heron Power and Amperesand (private, in the HTML but not the stage); Fuji Electric (FELTY).
- **Errors:** The Siemens Energy note says "Reinhausen partnership". Re-attribute it to Siemens AG.

**`dc-dc`** (no frame; Fig 0, 3, 5)
- **Present:** Infineon (IFX / IFNNY, R), STMicro (STM, R), Eaton (G), Vertiv (G).
- **Missing:** onsemi (ON; high, since it is missing from the whole Power Map); ROHM (6963.T / ROHCY); Navitas (NVTS); Wolfspeed. Navitas and Wolfspeed are in the HTML text but not in the stage.

**`dc-bus`** (yellow; Fig 0, 2, 3, 5)
- **Present:** Vertiv (G), Schneider, Eaton (G), Amphenol (APH, G), nVent (NVT), Hubbell (HUBB).
- **Missing:**
  - High: Legrand (LR.PA / LGRDY; Starline busway, data-center sales up 30%+ in H1 2026).
  - Medium: TE Connectivity (TEL); Siemens AG (busway); Delta (800 VDC power shelves, 660 kW in-row racks); Littelfuse (LFUS; DC protection); ABB SACE Infinitus solid-state DC breaker. These two cover DC protection, which the hub itself names as a bottleneck.
  - Low: Mersen (MRN.PA); Sensata (ST; GIGAVAC contactors); BizLink (3665.TW).

**`llc`** (yellow; Fig 2, 3, 5)
- **Present:** Vertiv (G), Infineon (R), STM (R), Eaton (G), EPC (private, not badged), Vicor (VICR, R), Flex (FLEX), Advanced Energy (AEIS).
- **Missing:**
  - High: Lite-On Technology (2301.TW; AI power shelves; NVIDIA 800 VDC partner); onsemi.
  - Medium: Delta; Renesas (6723.T / RNECY); ROHM; Analog Devices (ADI); Navitas; Innoscience (2577.HK); the last four are NVIDIA 800 VDC partners, as is Megmeet.
  - Low: Megmeet (002851.SZ).
- **Errors:**
  - Vicor's rainbow rationale ("narrative still early") is stale. The stock is up about 316% YTD in 2026 on AI-OEM licensing of its vertical power delivery.
  - "~64:1" is slightly off: 800/12 is about 67:1. NVIDIA's reference flow steps 800 V to 54 V/12 V.

**`vrm`** (no frame; Fig 2, 3, 5, 1)
- **Present:** TXN, Infineon (R), STM (R), EPC (private), MPWR.
- **Missing:**
  - Medium: Renesas; Analog Devices; Alpha & Omega (AOSL); Murata (6981.T); TDK (6762.T). No capacitor or magnetics supplier appears anywhere on the page.
  - Low: Vicor (VPD); Vishay, Yageo/KEMET, Samsung Electro-Mechanics and Taiyo Yuden.

**`silicon`** (no frame; all figures)
- **Present:** NVIDIA, Infineon (R), STM (R), TXN, EPC.
- **Missing:** none needed. This box is load context.

**`pipeline-ng`** (no frame; Fig 3)
- **Present:** Bloom (G), FCEL, MHI. These are fuel-cell and turbine makers; no gas pipeline or supply company is listed.
- **Missing:** Williams (WMB; $5.34 B Blackstone deal for 49% of five behind-the-meter power projects, Jul 2026) (medium); Kinder Morgan, Energy Transfer and EQT (low).

**`grid-re`** (no frame; Fig 4)
- **Present:** GEV, Siemens Energy, Hitachi Energy (R).
- **Missing:** none needed. Optionally add renewable owners such as NextEra.

**`electrolyzer`, `h2-storage`, `pem`, `electric-out`** (no frame; Fig 4)
- **Present:** Plug, Ballard, Bloom, Ceres.
- **Missing (low):** pure-play electrolyzer makers: thyssenkrupp nucera, Nel, ITM. Low priority because the page argues hydrogen is not an AI baseload path.

**`grid-ac`** (no frame; Fig 1)
- **Present:** GEV, Siemens Energy, Schneider, Eaton (G), Powell (POWL), Hubbell.
- **Missing:** Siemens AG (medium).

**`facility-xfmr`** (red; Fig 1)
- **Present:** GEV, Siemens Energy, Hitachi Energy (R), Schneider, Eaton (G), Powell.
- **Missing:**
  - High: HD Hyundai Electric; Hyosung; and Cleveland-Cliffs (CLF) as a supply-chain note: it is widely reported as the only US maker of GOES transformer steel, and its profile confirms GOES output.
  - Medium: Hammond Power (HPS-A.TO / HMDPF); Mitsubishi Electric.
  - Low: WEG.

**`ups`** (no frame; Fig 1)
- **Present:** Vertiv (G), Eaton (G), Schneider, ABB (G).
- **Missing:** EnerSys (ENS; UPS batteries and rack battery-backup units) (medium); Fuji Electric; Huawei Digital Power (private) and Kehua (low).

**`pdu`** (no frame; Fig 1)
- **Present:** Vertiv (G), Eaton (G), Schneider, Amphenol (G).
- **Missing:** Legrand (Raritan / Server Technology PDUs).

**`psu`** (no frame; Fig 1)
- **Present:** Delta (G), Vertiv (G), Eaton (G), Schneider, AEIS, Flex.
- **Missing:** Lite-On (2301.TW) (high).
- **Errors:** Delta's green-mark entry here still carries the old rainbow demand fields (demand_when / demand_for / why_critical / why_there) left over from its earlier rainbow mark. They are inert but confusing; clean them up.

**`bus-12v`** (no frame; Fig 1)
- **Present:** Vertiv (G), Amphenol (G), TXN.
- **Missing:** TE Connectivity and BizLink (low).

**`mv-switchgear`** (red; **no hotspot on any diagram**)
- **Present:** Eaton (G), Powell, Hubbell, Schneider, GEV, Siemens Energy, ABB (G).
- **Missing:** Siemens AG (high); Hitachi Energy, Mitsubishi Electric and LS Electric (medium).
- **Errors:** The list is unreachable because no diagram box opens it (medium). §7 also claims switchgear is shown as "red-framed stages on the diagrams", which no diagram does.

**`cooling`** (yellow; **no hotspot**)
- **Present:** Vertiv (G), nVent, Modine, Trane, Carrier, JCI, CoolIT (private).
- **Missing:** Schneider/Motivair, and LG Electronics (an NVIDIA DSX Ready CDU vendor) (medium); LiquidStack (private, DSX Ready), Daikin and Delta CDUs (low).
- **Errors:** Unreachable (no hotspot).

**`epc-td`** (yellow; **no hotspot**)
- **Present:** Quanta (PWR), MasTec (MTZ), MYR Group (MYRG).
- **Missing:** EMCOR (EME), Comfort Systems (FIX), Primoris (PRIM) and Argan (AGX) (medium); Sterling and IES (low); Bechtel and Kiewit (private, low).
- **Errors:** Unreachable (no hotspot).

**No stage exists for:**
- Nuclear, merchant and IPP generation: add a generator box (CEG / VST / TLN) linked to `smr/` and `uranium/`.
- Battery storage. This is high priority: data files cover Tesla Energy and Fluence, and NVIDIA's DSX Ready program now qualifies BESS from Tesla, LG Energy Solution and Hitachi Energy.
- Geothermal: Ormat (ORA); Fervo (private).

### 2.2 Text sections

**§1 Overview, §2 Offsite, §3 Onsite, §4 Hydrogen**
- **Present:** BE, CWR, 336260, 7011, FCEL, HyAxiom, PLUG, BLDP.
- **Missing:** reciprocating-engine and genset vendors in §3.5. Only MHI is named, so add Cummins, Caterpillar, Generac, Rolls-Royce mtu and Wärtsilä.
- **Errors:**
  - MHI "~74 unit backlog" conflicts with "48 turbines" in `data/power_suppliers.json` and `chart_data.json`.
  - Siemens–FCEL is not dated, and the Siemens entity is not named.

**§5 Conversion, §6 In-hall, "5.3 AC→DC pace"**
- **Present:** Amphenol, TXN, STM, Infineon, EPC.
- **Errors and fixes:**
  - The "5.3" section sits after §6. Fix the numbering.
  - EPC (Efficient Power Conversion) needs a private badge, and the acronym collides with T&D "EPC" elsewhere on the page.
  - The OCP blog date (11 Aug 2026) and SST spec v0.3 check out against the OCP post.

**§7 Bottlenecks**
- **Present:** AEHR.
- **Missing:** a GOES / steel supplier on the transformer card; epitaxy-reactor and PVT-furnace makers on the SiC card (AIXTRON AIXA.DE / AIXXF; PVA TePla TPE.DE).
- **Link to add:** the SiC card should link to `analysis/sic-burn-in.html` and the analysis SiC-capacity field.

**§8.1 delivery table**
- **Present:** GEV, ETN, POWL, Siemens Energy, Hitachi Energy, Schneider, HUBB, VRT, PWR, NVT.
- **Missing:** HD Hyundai Electric, Hyosung, LS Electric, Prysmian and Legrand.
- **Errors:**
  - The Siemens Energy row says "SST partnerships"; that is Siemens AG.
  - "Hitachi Energy ~2× sales" can only be Hitachi Ltd's conglomerate multiple, since Hitachi Energy is wholly owned and unlisted.

**§8.2 Utility regulation**
- **Present:** 11 utilities named with no tickers: CEG, VST, TLN, AEP, Entergy (ETR), Duke (DUK), Southern (SO), National Grid (NGG), Eversource (ES), Exelon (EXC), ConEd (ED). Add ticker spans.
- **Missing:** Dominion (D), NRG, and utilities with large data-center load pipelines (PPL, SRE/Oncor, WEC, XEL).
- **Errors:**
  - The NextEra–Dominion item is a pending acquisition, not a "package" or "partnership" (high).
  - The rate-case statistics, AEP/Entergy guidance figures, the Exelon 18→11 GW figure and the FERC/PJM 6,831 MW freeze are unsourced and could not be verified here (low).
  - The Calvert Cliffs FYI matches the Constellation release (690 MW, 190 MW uprate, 20 years, more than $3 B). Add that the new capacity comes online 2030–2032.

**§9 Company map: hops 1–7, cooling, T&D EPC, MV switchgear**
- **Errors:**
  - Hop 1 names GEV and Siemens Energy only for switchgear and transformers, not as the #1 and #2 gas-turbine OEMs.
  - Hop 5 has the ABB ticker and Siemens/Reinhausen errors described above.
  - Hop 6: Navitas has no ticker (NVTS), and onsemi is missing.
  - Hop 7: Lite-On, Renesas, ADI, AOSL and passives are missing.
- **Compact table:** the last 5 rows have only 3 of 4 cells, so every column is shifted (medium).
- **Comparison table:** multi-ticker cells link only to the first ticker.

**Glossary.** "SMR = Steam Methane Reforming" collides with small modular reactor, which is the name of the nested hub and NuScale's ticker.

**Markup.** The `#related-semi-fab` callout is nested inside `#related-smr-uranium`.

### 2.3 `briefing.js`

1. `renderTickerAnchor()`, used by the stage panels, builds the Fidelity symbol with a regex on the display string and does not strip exchange prefixes. Results: Ceres becomes `symbol=LSE`, Doosan Fuel Cell becomes `symbol=KRX`, and any future "NYSE: X" entry without a `fidelity_symbol` would become `symbol=NYSE`.
2. `enhancePageTickers()` turns each multi-ticker cell into one link to the first ticker, with that company's mark applied to the whole string.
3. The hard-coded fallbacks (`ABB`, and `DELTY` for 2308) carry the ticker errors above.
4. The rainbow-name wiring only matches a company's exact `<strong>Name</strong>`. "Hitachi Energy" inside "**Hitachi Energy** via **Hitachi**" works, but the "Delta" and "ST" shorthands do not get marks. This is cosmetic.

### 2.4 `analysis-notes.md`

- The decision log is stale. It still shows Delta as rainbow, VRT and BE as "explicitly not green", and Bloom as a "rejected rainbow candidate". `stages.json` now marks Delta, VRT and BE green and Infineon and STM rainbow, per `analysis/electrification-marks.json`.
- "Still thin: BESS / DC UPS coupling … company map light" is still true, and BESS is the largest structural gap.
- Linked as a raw `.md` file. There is no `.nojekyll`, so check that the link resolves on GitHub Pages.

---

## 3. `electrification/uranium/`

**index.html**
- **Present:** CCJ, KAP, LEU; Kazatomprom, Cameco and Centrus.
- **Missing:**
  - Medium: the fuel-cycle chain is entirely absent:
    - conversion: Solstice Advanced Materials (SOLS; Honeywell spin-off of Oct 2025, which owns Metropolis Works), Cameco Port Hope, Orano (state-owned);
    - enrichment: Global Laser Enrichment via Silex (SLX.AX / SILXY, 51%) and Cameco (49%); Urenco and Orano are not investable;
    - fabrication and HALEU: BWXT (NYSE: BWXT).
  - Medium: Western miners and developers: NexGen (NXE), Denison (DNN), Uranium Energy (UEC), Energy Fuels (UUUU), Paladin (PDN / PALAF), Sprott Physical Uranium Trust.
- **Errors:**
  - "Chart CSV: `uranium/china-nuclear-capacity.csv`" points to the wrong path. The file is in `electrification/uranium/`.
  - Tickers are not Fidelity-linked, because the page does not load `briefing.js`.

**cameco.html**
- **Missing (high):** Cameco's 49% of Westinghouse. That stake covers the Oct 2025 $80 B US reactor agreement and a reported IPO at more than $50 B (21 Sep 2026). Cameco also owns 49% of GLE. Both are now central to the CCJ thesis.
- **Errors:** It says hyperscalers "signed the Ratepayer Protection Pledge". The White House page (4 Mar 2026) names no signatories, so source or soften that claim.

**kazakhstan-kap.html**
- **Missing:** US line NATKY; CGN Mining (1164.HK) as the listed CGN offtake vehicle.
- **Errors:** The valuation snapshot ("~$63.80, ~$13.4 bn") does not reconcile. Stockanalysis shows 68.30 on 25 Sep 2026. Also, $63.80 × ~259 M shares (a widely cited share count, not verified here) is about $16.5 bn. Re-check.

**china-demand.html**
- Figures are consistent with `data/uranium_china_demand.json` and the CSV. No company gaps beyond a ticker for CGN Mining.

**namibia-supply.html**
- Husab, Rössing, Langer Heinrich, Etango and Tumas are named without operator tickers: CGN Mining 1164.HK, Paladin PDN, Bannerman BMN.AX, Deep Yellow DYL.AX (low).

---

## 4. `electrification/smr/`

**index.html**
- **Present:** OKLO, XE, CEG, SMR, plus a "NuScale coming soon" card. X-energy's listing (Nasdaq: XE, IPO 24 Apr 2026) is confirmed.
- **Missing:**
  - High: GE Vernova Hitachi BWRX-300 (GEV): OPG Darlington FID in May 2025, plus TVA. Westinghouse, held through CCJ (49%) and Brookfield (51%).
  - Medium: listed developers NANO Nuclear (NNE) and Terrestrial Energy (IMSR, Nasdaq listing on 29 Oct 2025 via SPAC). Private developers, flagged as private: TerraPower (NRC construction permit 4 Mar 2026; Meta deal for up to 8 units), Kairos (Google/TVA Hermes 2), Holtec (SMR-300 at Palisades), Last Energy, Radiant, and Antares/Valar/Aalo, which reached criticality before Oklo's Groves. Supply chain: BWXT, Doosan Enerbility, Curtiss-Wright (CW). Merchant-nuclear examples beyond CEG: VST and TLN (Talen–Amazon, up to 1.92 GW through 2042).
  - Low: TAE Technologies. Its merger with TMTG (DJT) has an S-4 filed on 30 Sep 2026, which would make it the first listed fusion name.
- **Errors:**
  - The NextEra–Dominion framing (see §8.2 above).
  - The footer says the owner is the "SMR bot", while OWNERS.md says "Performance tracker".
  - The Calvert Cliffs FYI duplicates the one on the Power Map.

**oklo.html**
- **High:** The baselines contradict the repo's W40 JSON, and the page does not auto-load `updates/oklo-week-latest.json`.
- **Medium:** The "Target: Criticality in 2027" and "isotopes in 2025" text is stale.
- **Low:** The page references `update-schema.example.json`, which does not exist.

**x-energy.html**
- The visible default banner is an internal build note ("REPLACE Groves→TX-1 …").
- There is no `updates/` JSON for X-energy.
- TX-1 vertical construction completed on 24 Sep 2026 (X-energy IR); fold this into the baseline.

**updates/*.json**
- `oklo-week-2026-W40.json` and `oklo-week-latest.json` are identical and well-sourced. The SEC, DOE and Centrus 8-K citations check out.

---

## 5. `analysis/`

**index.html, by field**

- **SST** (ETN G, Delta G, ABB): fix the ABB ticker.
- **Switchgear & DC protection** (Schneider only): too thin. Add Eaton, Siemens AG, Powell, Hubbell, Legrand, Littelfuse and Mersen.
- **SiC devices** (IFNNY R, STM R): add onsemi, Navitas, ROHM and Wolfspeed as device makers, or explain the scope.
- **SiC capacity** (ON G, COHR G, Resonac, ROHM, DISCO, WOLF Avoid): Wolfspeed's Ch.11 dates are correct (filed 30 Jun 2025, emerged 29 Sep 2025, Renesas equity issued 30 Jan 2026, still NYSE: WOLF). Missing: SICC (2631.HK / 688234.SS), AIXTRON and PVA TePla.
- **Rack & row** (VRT only): add Lite-On, Vicor (rainbow on the Power Map) and MPWR.
- **Connectors** (APH): add TE Connectivity.
- **Onsite** (BE G, MHI): add GEV, Siemens Energy, CAT, CMI and GNRC. Add the Bloom/Oracle force-majeure risk.
- **Facility transformers** (GEV, SMNEY): add Hitachi, HD Hyundai Electric, Hyosung and Prysmian.

Other issues on this page:
- The footnote claims the Power Map marks match. They do not. ABB and Amphenol are green on the Power Map but plain here. Hitachi Energy and Vicor are rainbow on the Power Map and absent here. onsemi and Coherent are gold here and absent from the Power Map.
- The "All 12 company scorecards" label is stale; there are 18 scorecards.
- The SiC-capacity Fidelity links use a different URL template from the rest of the hub.
- There are no links from the Power Map to any scorecard.

**sic-burn-in.html**
- The AEHR/Cohu and Advantest/Teradyne roles are fine.
- Tickers are not linked, and the Power Map does not link to this note.

**companies/*.html (18 pages)**
- All match their handoff JSON.
- ABB says "NYSE / SIX"; it should be SIX / OTC ABBNY.
- Resonac and ROHM badges show "TSE 4004" and "TSE 6963" next to OTC ADR symbols. Label them "OTC ADR".
- Theses miss recent events (low priority):
  - onsemi's revised all-cash ~$5.7 B Synaptics bid (1–2 Oct 2026);
  - Vertiv's $1.45 B UtilityInnovation Group deal for onsite generation and microgrids;
  - Eaton's COL Group acquisition and its Trane reference design;
  - Bloom's S&P 500 inclusion and the Oracle force-majeure news;
  - MHI's frame family (M501JAC on the Power Map vs M701J in the scorecard).

**JSON handoffs**
- `sic-capacity-handoff.json` is duplicated byte-for-byte in `analysis/` and `analysis/companies/`.
- `electrification-marks.json` is consistent with `stages.json`.

---

## 6. `data/` files

| File | Present | Errors / staleness | Missing |
|---|---|---|---|
| `electrification_companies.json` (16) | CEG, VST, NEE, AES, GEV, ENR.DE, ETN, SNEXF, FLNC, TSLA, APH, VRT, Asetek, BE, PLUG, FCEL | Schneider is "SNEXF" (high). Asetek is `public:false` although it is listed in Oslo (ASTK), and it now appears consumer and gaming focused. The AES take-private (>$33 B, GIP/EQT) is pending and not mentioned. Ratings date from Apr–May 2026 and conflict with the Analysis stances (GEV STRONG_BUY here vs Hold there). No page uses this file. | About 30 Power Map tickers, e.g. ABB, HTHIY, DELTY, IFNNY, STM, POWL, HUBB, PWR, VICR, MPWR, 7011.T, CAT |
| `smr_companies.json` / `nuclear_tracker.json` | SMR, OKLO, TerraPower, Kairos, XE, Last Energy | NuScale "only certified / 77 MWe" mixes the US600 and US460 (high). Oklo shows both 2030 and 2027/28 as first power, and its capacity is listed as 15–50 MWe vs 75 MWe now. TerraPower and Kairos statuses are stale. | NNE, IMSR, GEV (BWRX-300), Westinghouse, Holtec |
| `uranium_companies.json` / `haleu_constraint.json` | LEU, CCJ | Centrus "monopoly" and "DOE contract through June 2026" are stale. Cameco's "Westinghouse JV" is actually a 49% stake. | KAP / NATKY, NXE, DNN, UEC, UUUU, BWXT, SILXY |
| `power_suppliers.json` | GEV, CEG, VST, NEE, AES, ENR.DE, 7011.T, XOM, Enchanted Rock, Solaris | Solaris `ticker:null` but it is SEI (high). Backlogs date from Apr 2026 and are stale versus the Sep digests. MHI's 48-unit backlog conflicts with the Power Map's 74. | CAT, CMI, GNRC, BE, WMB, BKR, Wärtsilä |
| `chart_data.json` | (charts) | `nuclear_ppas` includes "CyrusOne–Constellation (Freestone)", but Freestone is a gas site. `turbine_backlog` mixes $B, €B and "15" for MHI. The `sic_market` shares are unsourced. | Talen–Amazon, Calvert Cliffs |
| `kpi_metrics.json`, `risks.json` | 6 KPIs, 6 risks | The "~1,000 TWh (IEA) 2026" KPI is mislabelled as capacity and appears to come from an older IEA range that included crypto (not re-verified). The current IEA base case is ~415 TWh in 2024 and ~945 TWh in 2030. All items are dated 24 Apr 2026. | n/a |
| `fusion_tracker.json` | CFS, Helion | Milestones are stale (summer 2026 has passed). | TAE (pending DJT merger) |
| `uranium_china_demand.json` | (metrics) | `chart_files` paths are wrong (they should be under `electrification/uranium/`). | n/a |

---

## 7. Other editorial fixes

- **Repeated text.** The Ratepayer Protection Pledge is restated on 4 pages (Power Map, SMR hub, Uranium hub, Cameco), and the Calvert Cliffs FYI on 2 pages. Keep one canonical copy and link to it.
- **Missing cross-links.**
  - Power Map → `analysis/companies/*` scorecards, `analysis/sic-burn-in.html`, `hardware/index.html#layer-9` (in-rack power) and `semiconductors/index.html#layer-9` (SiC/GaN).
  - SMR hub → `data/fusion_tracker.json` content.
  - Uranium pages → Fidelity links.
- **Stale "as of" dates.** Data files are stamped 24 Apr – 9 May 2026 while the pages say "October 2026 baseline". Show the data date or refresh the files.
- **Taxonomy drift.** Analysis and the Power Map use gold/green and rainbow differently: ABB, APH, Hitachi Energy, VICR, ON and COHR are marked on one and not the other. Either align them or state that the two taxonomies are separate.
- **Status claims to re-source.**
  - Delta's "production SST in a North China AI data center since Feb 2026". The scorecard cites a Chindata/Meituan campus; I could not verify this.
  - Eaton's "IEC-certified" MVSST. Semiconductor Today (29 Sep 2026) supports "one of the first … to achieve IEC certification", but DCD's coverage does not mention IEC. Keep it, with a citation.
- **Ownership mismatch.** The SMR hub footer says "SMR bot"; OWNERS.md says Performance tracker.
