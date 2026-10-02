> **Working research report, published as-is for transparency (2 Oct 2026).** Written by an AI research agent for the Claude Investment Summary pages. Every figure carries a date and source; "secondary" marks relays; "my estimate" marks the agent's arithmetic. Prices are a point-in-time snapshot. Not investment advice. Final picks and targets on the website may differ from the rankings here.

# P2: Power semiconductors and their supply chain, from raw materials to test
### For the AI-infrastructure page. Focus: what the ~800 V DC data hall and solid-state transformers (SST) actually change

**As of:** Friday 2 October 2026. US prices are the 1 Oct 2026 close. Tokyo prices are the 2 Oct close. Hong Kong prices are 2 Oct intraday, with the 30 Sep close also shown. Europe uses the 1 Oct close plus 2 Oct intraday where noted.
**Status:** Research input for a public educational page. **Not investment advice.**
**Conventions:** [n] refers to the numbered source list in §7. "(my estimate)" marks arithmetic or inference by the author. "(secondary)" marks an aggregator or press-summary source. "(headline only)" means the item was verified from the dated headline or summary of a primary release but the full text could not be retrieved.

---

## 0. Bottom line

1. **800 VDC shifts the mix of power-semiconductor content per MW; it does not multiply it.** onsemi says rack content goes from ~$15K to >$115K [10][11][12]. That 7–8× mostly reflects racks growing from ~130–200 kW to ~0.6–1 MW. Per kW, total content goes from ~$75–115/kW to ~$115–190/kW, a central estimate of roughly +60% (my estimate). That lines up with Infineon's disclosed "$100–250/kW, $175/kW average today" [2]. What does change is the **high-voltage (SiC/GaN/superjunction) share, which rises from ~30% to ~50%** [11]. HV dollars per MW therefore rise about **2.7× at the midpoint** (range ~1.7–4×), from ~$22–35/kW to ~$57–96/kW (my estimate). Total dollars scale with GW deployed far more than with the voltage choice.
2. **The SST is the most talked-about stage but has the least semiconductor content.** Navitas puts the SST stage's ultra-high-voltage SiC at **$8–12/kW** [39], which is ~$8–12M per GW (my estimate). Even 39 GW of 800 VDC capacity by 2030 (SemiAnalysis, quoted by DG Matrix [18], secondary) implies only ~$0.3–0.5B of cumulative SST SiC (my estimate). Yole sees a power-SiC device market of ~$10B in 2030 [47]. Broader SST adoption is "late 2028/early 2029" per onsemi [12]. The SST bottleneck is **medium-voltage high-frequency transformer insulation ("three times the insulation") and cost (~2× a conventional transformer)** [56], not SiC wafers.
3. **SiC is in glut at the crystal and substrate layer but tight at the qualified-device layer.** Chinese 6-inch substrates fell from <$500 in 2024 to ~$400 or less in 2025 [49]. Yole put 2025 upstream utilization at ~50% and expects the downturn to last into 2027–28 [47]. Wolfspeed runs at a −20% non-GAAP gross margin [23]. At the same time, Infineon says AI power demand "exceeds available supply… first come, first served" [3]. onsemi is at 83% utilization and is pushing a second price increase [10]. ST reports "temporary tightness" in the 6→8-inch transition [17]. **Device makers that buy substrates from many suppliers capture the spread**; Infineon has more than six qualified wafer/boule suppliers [2]. Captive crystal growers carry the fixed cost (my inference).
4. **GaN wins inside the rack; SiC wins at the grid edge and in protection.** At GTC 2026, 800 V→6 V and 800 V→12 V converters were GaN-primary, at 96.5–98.2% efficiency [21]. SiC owns the medium-voltage SST cells (1.2–3.3 kV, 10 kV emerging), 800 V solid-state circuit breakers (SSCB, via SiC JFETs) [2] and battery-backup units (BBUs) [72]. GaN is geographically split by a patent war. China's Supreme People's Court barred the disputed Infineon GaN products, and the US ITC barred the infringing Innoscience parts [7][81].
5. **What looks under-priced:** device makers whose AI-power estimates keep rising while their multiples fall.
   - **Infineon** (€59.42; −33% from its 52-week high; forward P/E 22.9): AI revenue went from €250M in FY24 to >€1.6B in FY26e, and the FY27 target will be "materially upgraded" on 10 Nov [2][73].
   - **onsemi** ($80.08; −41% from its high; forward P/E 20.6): utilization leverage of 25–30 bp of gross margin per point [10][73].
   - Further down the list: **Power Integrations' SCALE gate drivers plus 1,250/1,700 V GaN**, which benefit whichever SiC device maker wins SSTs [41][43].
6. **What looks priced, or weaker than the hype:**
   - GaN pure plays (Navitas EV/sales ~48× the annualized Q3 guide; Innoscience 11.6% gross margin) [38][44].
   - SiC substrate names (SICC A-share forward P/E ~217×) [73].
   - SiC crystal-growth equipment (Yole: PVT equipment −11% CAGR 2024–30) [47].
   - ROHM and Resonac, already up 129% and 213% in 12 months (my calculation from [74]).
   - Coherent (SiC is immaterial to a $62.5B optics equity) and Aehr (SiC is <5% of revenue; ~100–141× FY27 guided pre-tax earnings) [32][73].
7. **Claims checked (September 2026):** Infineon "not yet priced": largely confirmed. ST: only partly, because its data-center story is mostly optical and its power segment loses money. onsemi as a top capacity setup: confirmed. Coherent: rejected. Resonac as a merchant epi specialist: confirmed. ROHM "less crowded": stale. Aehr "intensity, not scarcity": confirmed. Eaton–Infineon deal: confirmed. ST–NVIDIA 800 V collaboration: confirmed. Details in §2.12.

**Ranked shortlist:**
1. Infineon (XETRA:IFX / IFNNY)
2. onsemi (NASDAQ:ON)
3. STMicroelectronics (NYSE:STM / EPA:STMPA)
4. Power Integrations (NASDAQ:POWI)
5. Mitsubishi Electric (TSE:6503 / MIELY)
6. Disco (TSE:6146 / DSCSY)
7. CRRC Times Electric (HKEX:3898 / SSE:688187)
8. Axcelis (NASDAQ:ACLS)

---

## 1. Value-chain map

Listing format is exchange:ticker, with the US OTC/ADR symbol in parentheses where one exists. "Pvt" means private. Rows marked † appear in the ranked shortlist (§3).

### 1.1 Raw materials
| Input | Public companies | Private / other | Notes |
|---|---|---|---|
| Gallium (for GaN epi via TMGa precursors) | NYSE:AA (Alcoa Wagerup project, ~100 t/yr planned [64]); TSE:5714 Dowa; TSX:VNP 5N Plus (refining); SZSE:300346 Nata Opto (precursors) | Chinese state-linked primary producers; Nouryon (precursors) | China produced **99%** of primary low-purity gallium in 2025 [63] |
| SiC powder and grains | SSE:688234 / HKEX:2631 SICC (captive) | Fiven (ex-Saint-Gobain SiC grains), Japanese and Chinese powder makers | Raw-material prices rising slightly while substrate prices fall (Nov 2025) [49] |
| Isostatic graphite, felts, crucibles for PVT growth | TSE:5310 Toyo Tanso; TSE:5301 Tokai Carbon; XETRA:SGL SGL Carbon; EPA:MRN Mersen; TSE:4062 Ibiden | n/a | Demand tracks PVT furnace utilization, which is weak (my inference from [47]) |
| Silicon wafers (Si MOSFET/IGBT, GaN-on-Si) | TSE:4063 Shin-Etsu; TSE:3436 SUMCO; XETRA:WAF Siltronic; TPEX:6488 GlobalWafers | SK Siltron (SK group) | Infineon runs 20 µm thin 300 mm power wafers [2] |

### 1.2 Substrates (SiC boules and wafers)
| Company | Listing | Role | Status (dated) |
|---|---|---|---|
| Wolfspeed | NYSE:WOLF | Largest Western SiC materials maker; 200 mm Mohawk Valley device fab | Emerged from Chapter 11 on 29 Sep 2025 with ~70% less debt [27]. Renesas equity issued after CFIUS clearance, 30 Jan 2026 [28] (headline only). Premium 200 mm n-type substrate launched 27 Sep 2026 (<0.01 micropipes/cm²) [26] |
| Coherent | NYSE:COHR | Merchant SiC substrate and epi; Denso and Mitsubishi Electric invested $1bn for a minority stake (2023) [30]; ~25% combined (background, not re-verified) | Sampling 300 mm high-thermal-conductivity SiC for AI heat spreaders, 18 Aug 2026 [29] |
| SICC | HKEX:2631 / SSE:688234 | #1 conductive SiC substrate maker: 27.6% share in 2025, 51.3% of 8-inch [52] (secondary) | H1 2026 revenue RMB914M (+15.1%), gross margin 22.86%, net loss RMB58.6M [52] (secondary); 8-inch >50% of core revenue [51] (headline only) |
| TanKeBlue | Pvt (IPO attempt) | #2 in China | 2025 gross margin −20.06% [52] (secondary) |
| Sanan Optoelectronics | SSE:600703 | Substrates plus Chongqing JV with ST | n/a |
| SK Siltron (SiC unit) | Pvt (SK group) | Merchant SiC | n/a |
| Resonac | TSE:4004 (SHWDY) | Mainly an epi house; developing 300 mm SiC crystal | 300 mm SiC single crystal grown and processed, 15 Sep 2026 [61] |
| onsemi | NASDAQ:ON † | Captive boules (Hudson, NH) | Utilization 83% (Q2 2026) [10] |
| ROHM / SiCrystal | TSE:6963 (ROHCY) | Captive (Germany) | Shifting to 8-inch internally |
| STMicroelectronics | NYSE:STM † | Partly captive (Catania substrate fab) plus external supply | 6→8-inch transition mid-way (Q2 2026) [17] |
| Infineon | XETRA:IFX † | Not captive: >6 qualified SiC wafer and boule suppliers [2] | n/a |
| Epiworld | HKEX:2726 | Chinese epi house | $95.8M ceiling epi contract with an unnamed international customer, 24 Sep 2026; >50k wafers/month (Dec 2025) [54] (secondary) |

### 1.3 Epitaxy
Merchant epi suppliers are Resonac (150 mm mainstream; 200 mm shipping [61][62]), Coherent (200 mm epi since Sep 2024), Epiworld (HKEX:2726) and SICC/TanKeBlue downstream. Captive epi sits at Wolfspeed, Infineon, ST, onsemi, ROHM, Bosch (pvt) and BYD Semiconductor (pvt).

### 1.4 Front-end equipment
| Step | Public | Private / China |
|---|---|---|
| PVT crystal growth | XETRA:TPE PVA TePla; SZSE:300316 Jingsheng; SZSE:002371 Naura | In-house at Wolfspeed, Coherent and SICC |
| SiC and GaN epi reactors (CVD/MOCVD) | XETRA:AIXA Aixtron (AIXXF); AMS:ASM ASM International (LPE line); TSE:8035 Tokyo Electron; Naura; NASDAQ:VECO Veeco (GaN MOCVD) | NuFlare (Toshiba, private since Dec 2023) |
| Laser slicing, grinding, dicing | **TSE:6146 Disco (DSCSY) †** | Chinese laser-slicing entrants |
| Ion implantation (hot Al implant for SiC) | **NASDAQ:ACLS Axcelis †** (merging with Veeco, pending China's SAMR [35]); TSE:6302 Sumitomo Heavy (SMIT); TSE:6728 ULVAC | Chinese implanters |
| High-temperature activation anneal | TSE:6728 ULVAC | Centrotherm (DE) |
| CMP and consumables | NASDAQ:ENTG Entegris; TSE:5384 Fujimi | Revasum (US) |
| Defect inspection and metrology | TSE:6920 Lasertec (LSRCY; SICA line); NASDAQ:KLAC KLA (Candela); NYSE:ONTO Onto | n/a |

### 1.5 Devices
| Technology | Companies |
|---|---|
| **SiC MOSFET/JFET/diodes** | XETRA:IFX Infineon (IFNNY) †; NYSE:STM / EPA:STMPA ST †; NASDAQ:ON onsemi †; TSE:6963 ROHM (ROHCY); NYSE:WOLF Wolfspeed; TSE:6503 Mitsubishi Electric (MIELY) †; TSE:6504 Fuji Electric (FELTY); NASDAQ:LFUS Littelfuse (IXYS); NASDAQ:MCHP Microchip (3.3 kV modules [57]); NASDAQ:NVTS Navitas (GeneSiC, 650 V–6.5 kV [40]); SSE:603290 StarPower; HKEX:3898 / SSE:688187 CRRC Times Electric †; SSE:600703 Sanan; Toshiba (pvt); Bosch (pvt); BYD Semiconductor (pvt; parent HKEX:1211 / BYDDY) |
| **GaN HEMT/IC** | Infineon (incl. GaN Systems, 300 mm GaN [2]) †; HKEX:2577 Innoscience; NASDAQ:NVTS Navitas; EPC (pvt); NASDAQ:TXN Texas Instruments; TSE:6723 Renesas (Transphorm; RNECY); NASDAQ:POWI Power Integrations (1,250/1,700 V; 2,200 V demo) †; ST †; onsemi (vertical GaN; GlobalFoundries partnership [14][48]) †; ROHM; NASDAQ:GFS GlobalFoundries and TWSE:6770 Powerchip (GaN foundries) |
| **HV silicon (IGBT, superjunction MOSFET, press-pack)** | Infineon; Mitsubishi Electric; Fuji Electric; TSE:6501 Hitachi (Hitachi Energy and Hitachi Power Semiconductor Device; HTHIY); CRRC Times Electric (incl. Dynex, UK); StarPower; NASDAQ:AOSL Alpha & Omega; SSE:600460 Silan; SSE:688396 CR Micro; SZSE:300373 Yangjie; SSE:600745 Wingtech (Nexperia); NASDAQ:DIOD; NYSE:VSH; TSE:6707 Sanken |
| **Ultra-wide bandgap** | TSE:6768 Tamura (affiliated with Novel Crystal Technology, Ga₂O₃); Flosfia (pvt, α-Ga₂O₃); Element Six (diamond; Anglo American); Ookuma Diamond Device (pvt) |

### 1.6 Packaging, modules, drivers
| Layer | Public | Private |
|---|---|---|
| Silver sinter pastes | NYSE:ESI Element Solutions (Alpha); XETRA:HEN3 Henkel | **Heraeus**, **Indium** |
| AMB/DBC ceramic substrates (Si₃N₄, AlN, Al₂O₃) | NYSE:ROG Rogers (curamik); TSE:6971 Kyocera; TSE:4061 Denka; TSE:6890 Ferrotec; TSE:5714 Dowa; TSE:5344 Maruwa | Proterial (Bain); Toshiba Materials; Heraeus |
| SiC/IGBT power-module makers | Infineon; Mitsubishi Electric (incl. Vincotech); Fuji Electric; Hitachi; ST (ACEPACK); onsemi; Microchip; Littelfuse; StarPower; CRRC TE; Wolfspeed | **Semikron Danfoss**; Bosch; BYD Semi |
| Gate drivers and isolators | Infineon (EiceDRIVER); TXN; **POWI (SCALE-iFlex / SCALE-2)** †; NASDAQ:ADI (isoPower); NASDAQ:SLAB Silicon Labs (TI acquisition pending [69]); NASDAQ:SWKS (isolators); SSE:688052 Novosense; ROHM; NXP | n/a |

### 1.7 Test, burn-in, reliability
NASDAQ:AEHR Aehr (wafer-level burn-in; first 300 mm GaN wafer-level burn-in solution [32]); NASDAQ:COHU Cohu (die-level SiC burn-in); NASDAQ:FORM FormFactor; TSE:6857 Advantest (ATEYY); NASDAQ:TER Teradyne; TWSE:2360 Chroma; TSE:6337 TESEC (discrete test handlers).

### 1.8 Grid-scale HV semiconductors (SST, HVDC, inverters)
Press-pack and HV IGBTs and HV SiC: Hitachi Energy semis (inside TSE:6501), Mitsubishi Electric †, Infineon †, Toshiba (pvt), CRRC TE/Dynex †, StarPower, Fuji Electric.
SST-class SiC modules: Infineon (2.3/3.3 kV, 2026 [56]), Microchip (3.3 kV in production [57]), Wolfspeed (10 kV MOSFET [24]), Navitas (6.5 kV, 10 kV SiC-IGBT Army program [40]).
SST system makers (customers, covered in the Electrification section): Eaton, Delta, ABB, Siemens, Hitachi Energy, GE Vernova, Schneider, DG Matrix (pvt), Heron Power (pvt), Amperesand (pvt) [21][56].

---

## 2. Critical analysis

### 2.1 What 800 VDC actually changes in the power tree
| Stage | Voltage class | Dominant device technology (2026) | Named suppliers (evidence) |
|---|---|---|---|
| MV AC → 800 VDC (SST, or MV transformer plus rectifier) | 13.2–34.5 kV input [56]; SiC cells at 1.2/1.7/2.3/3.3 kV; 10 kV emerging | SiC MOSFET modules, isolated gate drivers, high-frequency transformer | Infineon in Eaton MVSST 2.0, exploring 2.3/3.3 kV (29 Sep 2026) [5]. ST SiC inside DG Matrix Interport, now 400 kW at >98.5% (24 Sep 2026) [18]. Microchip 3.3 kV modules, 100–300 A, in production (27 May 2026) [57] |
| 800 VDC protection | 750–1,200 V | SiC JFET solid-state circuit breakers | Infineon CoolSiC JFET at 1.5 mΩ/750 V and 2.3 mΩ/1,200 V, >20 SSCB customers [2]; onsemi SiC JFET [11] |
| Transitional sidecar (480 VAC → 800 VDC) | 1,200 V PFC | SiC plus 650 V GaN | Systems from Vertiv, Delta, Liteon, Schneider [21] |
| 800 V → 50/12/6 V (in-rack LLC, ~64:1) | 800 V primary | **GaN-primary** at GTC 2026; Si or GaN secondary | 800→6 V: TI, ST, Navitas at 96.5–97.6%, 2,000–2,100 W/in³. 800→12 V: ST, EPC, Infineon at 97.5–98.2%, 2,300–2,500 W/in³ (19 Mar 2026) [21]. POWI 1,250 V GaN >98% [42] |
| 48/12 V intermediate bus converter (IBC) | 80–100 V | GaN 100 V, Si OptiMOS | Infineon, EPC, Innoscience [44]; IBC market +50% CAGR per Infineon [2] |
| Voltage regulator to ~0.8 V | 12/6 V → <1 V | Si power stages, TLVR, vertical power | Infineon, MPS, Renesas, AOS, TI, onsemi. Largest content pool; **does not depend on 800 V** (my inference) |
| Rack BBU and storage | 50–800 V | SiC, Si | ROHM SiC MOSFET adopted in AI-server BBU (Jun 2026) [72] (headline only); Vera Rubin: "20× increased energy storage" [22] |
| Auxiliary supplies | Up to 1,000 VDC input | 1,700 V GaN | POWI InnoMux2-EP, >90.3% at 12 V (6 Feb 2026) [41] |

NVIDIA's stated case for 800 VDC is up to 5% better end-to-end efficiency, 45% less copper than 415 VAC, up to 70% lower maintenance cost and up to 30% lower total cost of ownership. Full-scale production is tied to Kyber in 2027 (blog of 20 May 2025, updated 31 Jul 2025) [19].

**NVIDIA's named 800 V silicon partners:** AOS, ADI, EPC, Infineon, Innoscience, MPS, Navitas, onsemi, Power Integrations, Renesas, Richtek, ROHM, STMicroelectronics, Texas Instruments (13 Oct 2025; reconfirmed at GTC on 19 Mar 2026) [20][21]. **Not on the silicon list:** Wolfspeed and Microchip. Mitsubishi Electric appears among the "data center power systems" partners instead [20].

### 2.2 Content per MW: legacy AC hall vs 800 VDC hall
| | Legacy AC / 54 V hall (GB200/GB300 class) | 800 VDC hall (Kyber class) | Source |
|---|---|---|---|
| Rack power (assumption) | ~130–200 kW (NVIDIA: "up to 200 kW" today [19]) | ~600 kW–1 MW (NVIDIA targets 1 MW racks by 2027 [22]) | my assumption, anchored on [19][22] |
| Power-semi content per rack (onsemi addressable) | ~$15K (Aug 2026) [11]; ~$9.5K in the Q4-2025 deck [14] | >$115K [11][12]; ~$105K by 2030 in the earlier deck [14] | onsemi |
| **Content per kW** | **~$75–115/kW** (my estimate). Infineon: $100–250/kW, avg **$175/kW** "today" (5 Aug 2026) [2] | **~$115–190/kW** (my estimate) | [2][11] |
| HV share (≥600 V SiC/GaN/superjunction) | ~30% [11] | ~50% [11] | onsemi |
| **HV content per kW** | **~$22–35/kW** (my estimate) | **~$57–96/kW** (my estimate) | derived |
| SST-stage SiC | none (iron-core transformer) | **$8–12/kW** UHV SiC [39] | Navitas (Aug 2025) |
| 800→48 V stage | n/a | $10–15/kW HV GaN/SiC plus $5–10/kW 80–200 V GaN [39] | Navitas |
| 48 V→GPU (if GaN) | ~$20/kW 80–200 V GaN [39] | same | Navitas |

**Takeaways (my estimates):**
- Per-MW total content rises by roughly +60% at the midpoint, with a wide range of ~0% to ~+150% depending on rack-power assumptions.
- The HV/wide-bandgap slice rises ~2.7× at the midpoint (range ~1.7–4×).
- The VR stage, which is mostly silicon, stays the largest pool.
- At Infineon's average, AI power content is about **$175M per GW** [2]. Infineon's own grid-scale storage figure is ">€2,500 per MW" [2], roughly $2.8K/MW at €1 = $1.125 [74]. **AI halls therefore carry ~60× more power-semiconductor dollars per MW than grid storage** (my estimate). This is why AI moves power-semi earnings far more than renewables or the grid.
- Navitas' own 800 V wide-bandgap market estimate rises to **$2.56B/yr by 2030**, assuming 80% adoption of 800 V across 71 GW of GPU power (Aug 2025) [39].

### 2.3 Silicon carbide: glut or scarcity? It depends on the layer

**Crystal and substrate layer: glut**
- Chinese 6-inch substrate prices fell below $500/wafer in 2024 and to ~$400 or less in 2025 (TrendForce, 26 Nov 2025) [49].
- Yole (18 Dec 2025) put 2025 utilization at ~50% upstream and ~70% for device lines. It expects the overcapacity downturn to last until **2027–2028**. China held ~40% of SiC wafer and epi capacity in 2024 [47].
- China's 8-inch capacity is planned to approach the million-units-per-year scale: SICC targets 600k/yr and TanKeBlue 500–800k/yr (Nov 2025) [53] (secondary).
- Wolfspeed: Q4 FY26 revenue $149.6M with a non-GAAP gross margin of −20% [23]. Management needs a ~$800M annual run-rate for gross-margin breakeven [25] (secondary), against ~$600M today (my estimate).
- Mitigants: China's 8-inch suppliers "turn to pricing discipline after the 6-inch price war" (DigiTimes, 14 Sep 2026) [50] (headline only). SICC posted a record Q2 2026 [51] (headline only).

**Qualified-device layer (650–1,200 V MOSFETs and modules): tight in 2026**
- Infineon: "Demand for our AI power supply solutions continues to exceed available supply… first come, first served." It holds capacity-reservation agreements with **>10 AI customers**, totalling a cumulative "high single-digit billion euro" amount with advance payments (5 Aug 2026) [1][3][4].
- Infineon raised prices effective **1 Jul 2026**: 8–15% on IGBT modules and automotive SiC MOSFETs. Automotive SiC MOSFET lead times were 40–52+ weeks [6] (secondary).
- onsemi: utilization 77% → **83%**, and a "second round of price increases" (4 Aug 2026) [10].
- ST: SiC revenue up low-teens YoY and mid-30s QoQ in Q2 2026, with "temporary tightness" during the 6→8-inch transition (23 Jul 2026) [17].
- A sourcing guide for 800 V BOMs describes the 1,200/1,700 V SiC used in grid-facing rectifiers as having "long qual cycles; allocation common in 2026" (27 May 2026) [59] (secondary).

**HV SiC at 1.7–3.3 kV and above (SST, MV drives, rail): low volume, few but growing suppliers**
- Supply: Microchip has 3.3 kV modules in production [57]. Infineon is launching 2.3/3.3 kV in 2026 [56]. Wolfspeed has a 10 kV MOSFET [24]. Navitas has sold 6.5 kV MOSFETs since 2021 and won a 10 kV SiC-IGBT Army program on 28 Sep 2026 [40].
- Demand: at $8–12/kW [39], SST pull is too small to tighten SiC wafers before ~2029 (my judgment).
- **Verdict:** HV SiC is a qualification, packaging, gate-driver and magnetics bottleneck, not a wafer bottleneck.

**Net effect:** falling substrate prices and rising device prices widen margins for device makers that **multi-source substrates** (Infineon [2]). Captive crystal growers (Wolfspeed, onsemi Hudson, ROHM/SiCrystal) absorb the fixed cost of crystal growth (my inference).

**200 mm transition status (dated):**
| Company | Status |
|---|---|
| Wolfspeed | Mohawk Valley 200 mm "in continuous production since 2022" [26]; 300 mm substrates are engineering samples [24] |
| Infineon | Kulim 200 mm, "most competitive" [2] |
| ST | "In the middle" of moving from 150 mm to 200 mm (Q2 2026) [17] |
| onsemi | Czech 200 mm end-to-end plant targeted for ~2027 (company plan; not re-verified this pass) |
| Coherent | 200 mm epi |
| Resonac | 200 mm epi shipping [61] |
| SICC | 8-inch is >50% of core revenue [51] |
| CRRC TE | Phase III 8-inch SiC line ramping (H1 2026) [45] |

**Demand side:**
- Yole: power SiC reaches **$11B by 2031**, a 20% CAGR from 2025. AI data centers are a "new demand driver", and 800 V BEVs reach ~50% of BEVs by 2031 (16 Jun 2026) [46].
- onsemi expects China EV SiC revenue **+60–70%** and AI-data-center SiC **~+60%** in 2026 [11].

### 2.4 Gallium nitride: where it wins, and the risks
- **Where it wins:** 650 V PSU PFC/LLC; 800→6/12 V LLC primaries [21]; 100 V IBCs; 1,700 V auxiliary supplies [41]. Power Integrations' 1,250 V GaN replaces stacked 650 V parts. It claims ~3× better figure of merit than 1,200 V SiC and >1 MHz zero-voltage switching, against SiC at "~250 kHz" [42]. (These are vendor claims.)
- **Where it loses:** the MV SST input. GaN is commercial to ~650–900 V, with research parts at 1.2 kV. It is a lateral device and less robust at MV and kHz switching [58] (secondary).
- **Market size:** Yole sees power GaN at **$3.5B by 2031** (35% CAGR), of which telecom/infrastructure including AI data centers is **$750M** (45% CAGR). Innoscience led in 2025; Infineon made the "sharpest gains"; onsemi is a new entrant via GlobalFoundries (20 Aug 2026) [48]. **The AI data-center GaN market stays well under $1B through 2031**, which bounds the GaN pure plays.
- **Manufacturing:**
  - Infineon has the first 300 mm GaN power wafer, "enabling cost parity with silicon" [2].
  - TSMC announced its exit from GaN foundry work in July 2025 (background, not re-verified). Navitas now ships Gen 5 GaNFast made in the US at GlobalFoundries (1 Sep 2026) [76] (headline only).
  - Innoscience is expanding 8-inch GaN-on-Si from 12,500 wafers/month (Jun 2024) to **70,000 by end-2029** [44].
- **IP war:**
  - China's Supreme People's Court upheld an injunction barring the disputed Infineon GaN products in mainland China, with RMB10M in damages (Jun 2026) [7].
  - The US ITC affirmed that Innoscience infringed an Infineon patent and ordered import and sales bans, subject to presidential review (May 2026). Innoscience says its redesigned parts are cleared [7][81].
  - Both companies are on NVIDIA's partner list.

### 2.5 Reality check on solid-state transformers
- First-generation two-stage SSTs reach ~0.1 MW/m³ at 98–98.5% efficiency, against >99% for a conventional transformer at rated power. They cost about **twice** as much. The hardest part is the MV high-frequency transformer, which needs ~3× the insulation. 250 kW is emerging as the standard module (14 Apr 2026) [56].
- Infineon sizes SSTs as replacing part of a >$15B conventional-transformer market: small power transformers, **>$1B by 2030**. It sizes SSCBs at **~$1B by the end of the decade** (>60% CAGR) [2].
- Timing: onsemi says the HV ramp starts "end of '27, beginning of '28" [11] and broader SST adoption comes "late 2028/early 2029" [12]. Power Integrations expects data-center auxiliary revenue in 2028, with the main power path later [43].
- **Implication:** SST news flow (Eaton–Infineon, DG Matrix–ST) validates design wins but will not move semiconductor P&Ls before 2028. It is not a SiC demand spike.

### 2.6 Equipment: who benefits regardless of which device maker wins?
| Process step | Structurally exposed names | Cycle position (evidence) |
|---|---|---|
| Wafering (slicing, grinding, dicing) | **Disco** (KABRA laser slicing, grinders, dicers) | SiC is a small slice; the multiple is AI/HBM-driven. Benefits from 200 mm SiC and 300 mm GaN-on-Si conversions |
| Hot implant | **Axcelis**, SMIT, ULVAC | Axcelis: "two new Chinese SiC customers"; power bookings in H1 2026 above the 2-year average [34] |
| Epi | Aixtron, ASM/LPE, NuFlare, Naura | Aixtron: power-electronics demand "remained soft" in H1 2026; 75% of Q2 orders were optoelectronics [65] |
| PVT growth | PVA TePla, Jingsheng | Yole: PVT equipment **−11% CAGR** 2024–30 [47] |
| Inspection | Lasertec, KLA | Real but small |
| Burn-in and test | Aehr, Cohu | Yole: test-related equipment **+3% CAGR**, the only growing pocket. SiC WFE overall **−7% CAGR** [47] |

**Conclusion:** process-step monopolies exist (Disco; Axcelis in hot implant), but SiC capital spending is in a trough until ~2027–28 [47]. Chinese buyers increasingly use domestic tools. Equipment is a **later-cycle option**, not a near-term AI trade.

### 2.7 Test and burn-in
- Aehr's FY26 revenue was $50.0M. Under 5% came from SiC, against >95% two years ago. AI processors were ~71% and optical ~20% [32].
- It recorded ~$8M of new SiC orders in the month before 14 Jul 2026. It also completed the first 300 mm GaN wafer-level burn-in solution and >12 GaN WaferPak designs [32].
- FY27 guidance is $130–150M with an 18–22% non-GAAP pre-tax margin [31][32].
- GaN reliability screening (HTRB, dynamic Ron) is a quiet structural driver. The equity, however, is priced on AI processors.

### 2.8 Packaging, modules, drivers
- Silver sinter (Heraeus, Indium, Alpha/ESI, Henkel) and Si₃N₄ AMB substrates (Rogers, Kyocera, Denka, Ferrotec, Dowa, Proterial) are **oligopolies whose demand scales with SiC module volume**. They are not AI-specific.
- Rogers' 30 Sep 2026 investor day targeted 2030 revenue of $1.5B and adjusted EPS of $14, with **first data-center design wins "within two quarters" and revenue from H2 2027** [67][68] (secondary). That is promising but still a forecast.
- **Gate drivers** are the overlooked choke point in SSTs and MV converters: every SiC module needs an isolated, desaturation-protected driver rated for MV isolation. Power Integrations' CEO says SST discussions so far center on its **existing gate-driver products** (Aug 2026) [43].
- Silicon Labs, an isolator supplier, is being acquired by TI (pending) [69].

### 2.9 Raw materials
- **Gallium:**
  - Global primary output was ~900 t in 2025 against 1,700 t of capacity. China supplied 99% [63].
  - The US import unit value was $580/kg in 2025, +30% YoY [63].
  - **China lifted its ban on gallium exports to the US for one year in November 2025.** That followed the August 2023 controls and the December 2024 ban, so a renewal decision falls around **November 2026** [63].
  - New supply projects: Australia (Alcoa Wagerup, ~100 t/yr with a Sojitz offtake [64]), Canada, Greece, **Kazakhstan** and Korea [63]. Wagerup alone is ~11% of 2025 world primary output (my estimate).
  - For GaN power dies, gallium is a trivial cost. The risk is licensing of trimethylgallium precursors and availability (engineering judgment).
- **SiC powder and graphite:** raw-material prices are edging up while substrate prices fall [49]. Graphite consumables follow PVT furnace utilization (my inference from [47]).
- **Silicon:** no constraint. Infineon's 20 µm, 300 mm thin wafers reduce power loss by >15% [2].

### 2.10 Grid-scale power semiconductors
- HVDC and MMC converters and rail use press-pack and HV IGBTs from Hitachi Energy, Mitsubishi Electric, Infineon, Toshiba, CRRC TE/Dynex and StarPower.
- CRRC Times Electric (H1 2026) [45]:
  - IGBT line "at full capacity".
  - 8-inch SiC ramping.
  - Device platform spans 650 V–6,500 V.
  - Holds ">half of domestic market share" in new power systems.
  - HV devices "secured volume orders in new power systems and **data centre power supply** applications".
- 10 kV SiC (Wolfspeed [24]; Navitas 10 kV SiC-IGBT [40]) is what eventually allows **direct-to-MV SSTs**. That is a 2030s volume story.

### 2.11 Ultra-wide bandgap: realistic timing (my assessment; no 2026 data verified this pass)
- **Ga₂O₃** (Novel Crystal Technology, affiliated with Tamura; Flosfia):
  - Schottky diodes are commercial in niches.
  - Transistors are held back by the lack of usable p-type doping and by thermal conductivity of ~10–30 W/m·K, against ~370+ W/m·K for 4H-SiC (textbook values).
  - Volume MOSFETs for data-center power are unlikely before ~2030.
- **Diamond:** a 2030s story.
- **Neither is investable for the 2026–2029 800 V window.**

### 2.12 Claims checked (September 2026)
| Claim | Verdict | Evidence |
|---|---|---|
| Infineon: AI-DC SiC/GaN demand "not yet priced" | **Largely confirmed** | AI revenue €250M (FY24) → >€700M (FY25) → >€1.6B (FY26e); FY27 ">>€2.5B" to be "materially upgraded" [2]. Stock −33% from its 52-week high, forward P/E 22.9 [73]. **Caveat:** AI revenue is mostly silicon/GaN (PSS segment: €1.442B at 24.9% margin; GIP only 9.8% margin [4]). SiC/SST is the option |
| ST: same framing | **Partly true only** | Data-center revenue >$1B in 2026 and "well above $2B" in 2027, **driven by optics** (silicon photonics, BiCMOS, MCUs) [17]. UBS sees ~$2.0B silicon photonics within ~$2.5B of 2027 data-center revenue, implying power ≈ $0.5B (my estimate from [9]). Power & Discrete segment margin **−21.4%** in Q2 2026 [17] |
| onsemi and Coherent are the best SiC capacity setups | **onsemi yes; Coherent no** | onsemi: 83% utilization, 25–30 bp gross margin per point [10]. Coherent: SiC is immaterial to a $62.5B equity (forward P/E 33.9) [73]; its SiC push is now toward thermal substrates [29] |
| Resonac is a merchant SiC epi specialist | **Confirmed** (but small within Resonac) | Mainly 150 mm epi; 200 mm shipping; 300 mm crystal (15 Sep 2026) [61]. Its own page cites a SiC "supply-demand imbalance" [62] |
| ROHM's SiC/GaN is less crowded in US narratives | **Stale** | Stock +129% in 12 months (my calculation [74]); forward P/E 38.3; trailing operating margin 4.1% [73]. Denso withdrew its bid on 30 Apr 2026 [71] (headline only) |
| Aehr at ~104× earnings, "intensity, not scarcity" | **Confirmed** | ~100–141× FY27 guided pre-tax earnings (my estimate: $3.31B market cap ÷ $23–33M [31][73]); SiC <5% of revenue [32] |
| Eaton signed a SiC deal with Infineon in Sep 2026 | **Confirmed** | 29 Sep 2026: Infineon SiC for MVSST 2.0 (APAC); exploring 2.3/3.3 kV [5] |
| ST collaborates publicly with NVIDIA on 800 V conversion | **Confirmed** | On NVIDIA's 800 VDC silicon partner list [20]; GTC 2026 800→6 V and 800→12 V designs [21] |

### 2.13 Priced vs not priced: where consensus may be wrong

**Possible demand surprises not in consensus**
1. **Power-semi price increases in 2026** (Infineon July; onsemi's second round) run against the "SiC glut" narrative [6][10].
2. **China 800 V EV SiC**: +60–70% in 2026 at onsemi [11]; ST sees the same dynamic [17].
3. **In-rack energy storage and BBUs** (Vera Rubin "20×" storage [22]) need SiC/Si power stages.
4. **SSCBs and DC protection** for 800 V halls: SiC JFET design wins at >20 customers [2].
5. **SiC for AI thermal packaging** could absorb crystal overcapacity (Coherent and Resonac at 300 mm [29][61]); speculative on timing.
6. **300 mm GaN** cost parity with silicon could accelerate GaN in PSUs and IBCs [2].

**Fully priced, or engineering weaker than the hype**
1. **The SST semiconductor TAM** is small and late (§2.5).
2. **"7–8× content per rack"** conflates rack power growth with per-MW content (§2.2).
3. **GaN pure plays** (§4).
4. **SiC substrates and crystal equipment** (§2.3, §2.6).
5. **Already re-rated:** ROHM, Resonac, Coherent, Aehr.

**Macro and cycle risk**
- Jefferies calls the peak of the global semiconductor upcycle for **Q4 2026** and expects continued multiple compression, yet names Infineon a top pick on 2027 earnings (30 Sep 2026) [8] (secondary).
- UBS sees semi-capex upside and has ST in its top three (29 Sep 2026) [9] (secondary).

---

## 3. Ranked shortlist (8 names)

Valuation and consensus data come from S&P Global consensus via stockanalysis.com, retrieved 2 Oct 2026 [73] (secondary). Prices are from [73] and Yahoo [74] (secondary). FX on 2 Oct 2026: EUR/USD 1.1251, USD/JPY 157.59, USD/HKD 7.8463, USD/CNY 6.6987 [74].

### #1 Infineon Technologies (XETRA:IFX; OTC ADR IFNNY), core holding
- **Products in focus:**
  - CoolSiC MOSFETs (1,200 V and 2 kV now; 2.3/3.3 kV modules arriving in 2026) [56].
  - CoolSiC **JFET** for SSCBs (1.5 mΩ at 750 V) [2].
  - CoolGaN on **300 mm** [2].
  - 3-phase PSU platforms from 3.3 to 30 kW at η~97.5% [2].
  - HV/MV IBC modules, TLVR/vertical power modules, EiceDRIVER drivers, XDP hot-swap controllers [2][60].
- **Why the products matter:** the only portfolio covering every stage from grid to core (§2.1). The SSCB and SST stages are specific to 800 V.
- **Why this company:**
  - Scale in all three materials.
  - Multi-sourced SiC substrates (>6 suppliers), so it gains from substrate deflation [2].
  - Dresden Smart Power Fab ramping from summer 2026 [2].
  - The Eaton MVSST 2.0 SiC deal [5].
  - Capacity reservations with prepayments from >10 AI customers [1][4].
- **Evidence (5 Aug 2026 unless noted):**
  - Q3 FY26 revenue **€4.172B**, segment-result margin 19.1%.
  - Q4 guide ~€4.7B at ~23%. FY26 ~€16.3B at ~20%; investments €2.7B, including a €500M AI pull-in [1][2].
  - AI revenue **>€1.6B in FY26 (~10% of sales, my estimate)**. FY27 ">>€2.5B", to be "materially upgraded" in November. Per the call, the FY27 figure combines AI and traditional data-center revenue [2][3].
  - Content of **$100–250/kW (avg $175/kW)** [2].
  - Price increases from 1 Jul 2026 [6] (secondary).
- **Valuation:**
  - **€59.42**, Xetra close 1 Oct 2026; ~€62.4–62.8 intraday on 2 Oct [73][74].
  - Market cap €77.0B; EV €82.6B; **forward P/E 22.9; EV/sales 5.3**.
  - 52-week range €31.27–88.83 (−33% from the high).
  - IFNNY $67.43 (1 Oct) [73][74].
- **Consensus:** **Buy** from 24 analysts; average target **€86.74**, high €124, low €50 (S&P Global via stockanalysis, 2 Oct 2026) [73]. Jefferies top pick (30 Sep 2026) [8].
- **Risks and thesis-breakers:**
  - Automotive is ~46% of Q3 revenue (my estimate from [4]); an auto relapse.
  - AI capex pause. Cycle-peak multiple compression [8].
  - GaN injunction in China [7]; Kulim SiC loading is undisclosed; euro strength.
  - The FY27 AI figure blends in "traditional" data center [3].
- **Catalysts:**
  - **10 Nov 2026**: Q4 FY26 results, FY27 guidance and the upgraded AI target [73][2].
  - 2026–27: 2.3/3.3 kV SST module launches [56]; Eaton MVSST 2.0 APAC deployments [5].
  - 2027: NVIDIA Kyber 800 VDC [19].

### #2 onsemi (NASDAQ:ON), core holding with operating leverage
- **Products in focus:**
  - EliteSiC MOSFETs, with ~1,400 V parts planned for 1,000 V batteries [12].
  - **SiC JFETs** (from the UnitedSiC business bought from Qorvo, early 2025; background) for hot-swap and SSCB.
  - **Vertical GaN** at 700/1,200 V: sampling, with volume targeted for late 2026 [14].
  - Si MOSFETs and smart power stages.
- **Why the products matter:** onsemi addresses ~50% HV content in 800 V racks [11].
- **Why this company:**
  - The clearest content model disclosed in public: ~$15K → **>$115K per rack** [11][12].
  - Margin leverage from refilling its fabs: **83%** utilization, 25–30 bp of gross margin per point [10].
- **Evidence:**
  - AI-DC revenue >$250M in 2025 [14] → >$500M in 2026 → ~2× again in 2027 → **$2.5B target for 2030** (analyst day, 16–17 Sep 2026) [12].
  - SiC AI-DC revenue ~+60% in 2026; China EV SiC +60–70% [11].
  - Q3 guide: revenue $1.65–1.75B, gross margin 40–42%, EPS $0.81–0.93 [10].
  - 2030 model: revenue just under $11B, gross margin 53%, operating margin 38%, FCF margin 30–35% [12].
- **Valuation:**
  - **$80.08**, Nasdaq close 1 Oct 2026; $85.75 after hours on the revised Synaptics terms [73].
  - Market cap $31.2B; EV $32.0B; **forward P/E 20.6; EV/sales 5.2**.
  - 52-week range $44.56–134.92 [73].
- **Consensus:** **Buy** from 30 analysts (12 Strong Buy, 2 Buy, 16 Hold, Sep 2026); average target **$103.69**, high $150, low $75 [73].
- **Risks:**
  - **The Synaptics deal was revised on 1 Oct 2026 to $123/share all-cash (~$5.7B)**, funded with Morgan Stanley debt, after a rival bid appeared. Closing is expected by mid-2027 [15]. This adds leverage and diverts attention.
  - The 800 V ramp only starts late 2027–2028 [11].
  - The China EV price war; captive boule costs while substrate prices fall (my inference).
  - The stock fell ~9% on analyst day because the growth lands in 2028–30 [13] (secondary).
- **Catalysts:**
  - **~2 Nov 2026** (estimated): Q3 results [73].
  - Late 2026: vertical GaN volume production [14].
  - 2027: Czech 200 mm plant.
  - Mid-2027: Synaptics close [15].
  - End-2027/2028: 800 V ramp [11].

### #3 STMicroelectronics (NYSE:STM; EPA:STMPA), SiC turnaround plus SST design-ins
- **Products in focus:**
  - SiC MOSFETs (200 mm Catania).
  - **SiC inside DG Matrix's Interport SST**: 400 kW, >98.5% efficiency (24 Sep 2026) [18].
  - GaN/SiC 800→6 V and 800→12 V converter designs (GTC 2026) [21].
  - Silicon photonics, which drives the data-center number but is not power.
- **Why this company:**
  - The long-time #1 by SiC device share: 36.5% in 2022 [79] and 32.6% in 2023 per TrendForce (20 Jun 2024) [55].
  - **High operating leverage**: the Power & Discrete segment ran at a **−21.4%** non-GAAP margin in Q2 2026, and charges for unused capacity persist [17].
- **Evidence:**
  - Q2 2026 revenue $3.49B (+26%), gross margin 34.8%.
  - Q3 guide ~$3.70B at ~37% gross margin, including ~70 bp of unused-capacity charges. Q4 >$4B [16][17].
  - SiC revenue +low-teens YoY and +mid-30s QoQ; double-digit growth expected in 2026 [17].
  - Book-to-bill near 2; backlog 4.5–5 quarters [17].
  - UBS: data-center revenue ~$2.5B in 2027 (~14% of sales) and ~$3.8B in 2028; 2027 EPS ~20% above consensus [9] (secondary).
- **Valuation:**
  - **$53.50**, NYSE close 1 Oct 2026; €47.25 in Paris on 1 Oct [73][74].
  - Market cap $47.5B; **forward P/E 25.4; EV/sales 3.5**.
  - 52-week range $21.11–81.42 [73].
- **Consensus:** **Buy** from 14 analysts; average target **$75.04**, high $98, low $52 [73].
- **Risks:**
  - The AI-DC story is optical; AI-power content is modest (~$0.5B in 2027, my estimate from [9]).
  - Execution of the 6→8-inch SiC transition; auto/industrial cycle; start-up charges at the China fab.
- **Catalysts:**
  - **29 Oct 2026**: Q3 results and Q4 guide (UBS expects ~+10% QoQ) [73][9].
  - Catania 200 mm ramp; DG Matrix SST deployments.

### #4 Power Integrations (NASDAQ:POWI), a gate-driver play that works whichever SiC maker wins, plus HV GaN
- **Products in focus:**
  - **SCALE-iFlex / SCALE-2 isolated gate drivers** for HV IGBT/SiC modules in SSTs, MV drives and rail. The CEO says SST discussions so far center on its existing gate-driver products [43].
  - **PowiGaN 1,250 V**: the main 800 V stage, >98% efficient, replacing stacked 650 V parts [42].
  - **1,700 V** in InnoMux2-EP auxiliary supplies [41].
  - **2,200 V GaN** demonstration (Aug 2026) [43].
- **Why this company:** its drivers sell into **every** vendor's SiC modules, and its HV GaN reach (claimed "unmatched at 1,250/1,700 V") is unusual (secondary narrative) [43].
- **Evidence:**
  - Q2 2026 revenue $119M (+10% QoQ); non-GAAP operating margin 17.1%.
  - Q3 guide $122–130M at a 54–55% gross margin [43] (secondary).
  - Data-center auxiliary revenue expected in **2028**; main power path later. Automotive target ~$100M by 2029–30 [43].
  - Net cash ~$263M [73].
- **Valuation:**
  - **$51.50** (1 Oct 2026); market cap $2.88B; EV $2.61B.
  - **Forward P/E 30.8; EV/sales 5.8**.
  - 52-week range $30.86–91.18 (−44% from the high) [73].
- **Consensus:** **Buy** from 5 analysts; average target **$77.50**, high $85, low $65 [73].
- **Risks:**
  - Revenue arrives in 2028+.
  - Consumer and appliance exposure.
  - Competition in gate drivers (Infineon, TI plus Silicon Labs, ADI) and in GaN (Infineon, TI, Innoscience).
  - SiC might still win the 1,200 V primary socket.
  - Thin coverage. **The share of SCALE drivers in SSTs is my characterization; no share figure was verified this pass.**
- **Catalysts:**
  - **~4 Nov 2026** (estimated): Q3 results [73].
  - 800 V design-win disclosures.
  - 2027: Kyber [19].
  - 2028: data-center auxiliary revenue [43].

### #5 Mitsubishi Electric (TSE:6503; OTC ADR MIELY), HV modules plus a chip-to-grid system position
- **Products in focus:**
  - HV IGBT and SiC power modules (rail and grid-class; background).
  - Its stake in Coherent's SiC unit secures substrate supply ($1bn deal alongside Denso, 2023) [30].
  - Chip-to-Grid Reference Designs: 250 MW blocks supporting NVIDIA 800 VDC and Vera Rubin NVL72 (22 Sep 2026) [66].
- **Why this company:**
  - On NVIDIA's list of "data center power systems" partners [20].
  - Combines HV device know-how with switchgear, cooling (the MECH-iC chiller) and system integration.
  - Cheaper than US AI-power names.
- **Valuation:**
  - **¥5,264**, TSE close 2 Oct 2026; market cap ¥10.87T (~$69B, my estimate); EV ¥10.43T.
  - **Forward P/E 19.6; EV/sales 1.7**; net cash ~¥591B.
  - 52-week range ¥3,668–6,686. MIELY $66.34 (1 Oct) [73][74].
- **Consensus:** **Buy** from 15 analysts; average target **¥6,813**, high ¥8,200, low ¥3,500 [73].
- **Risks:**
  - Power devices are a minority of a conglomerate; no fresh segment figure was verified, so the thesis is diluted.
  - Yen; the factory-automation and auto cycles.
- **Catalysts:**
  - **30 Oct 2026**: H1 FY2026 results [73].
  - US 800 VDC and SST project announcements (via MEPPI).

### #6 Disco (TSE:6146; OTC ADR DSCSY), wafering monopoly with a SiC/GaN free option
- **Products in focus:** KABRA laser slicing (SiC boule to wafer with low kerf loss), grinders, polishers, dicers for SiC and GaN-on-Si.
- **Why this company:** every SiC and GaN-on-Si wafer goes through wafering and dicing whichever device maker wins. Tool demand rises with 200 mm SiC and 300 mm GaN conversions.
- **Evidence:** operating margin ~43%; net cash ~¥284B [73]. SiC is a small share of revenue; HBM and advanced packaging drive results.
- **Valuation:**
  - **¥60,290**, TSE close 2 Oct 2026; market cap ¥6.56T (~$41.6B, my estimate).
  - **Forward P/E 31.5; EV/sales 13.6**.
  - 52-week range ¥42,370–91,680 (−34% from the high) [73].
- **Consensus:** **Buy** from 21 analysts; average target **¥82,580**, high ¥105,000, low ¥63,000 [73].
- **Risks:** SiC capex trough to ~2027–28 [47]; the AI/HBM cycle sets the multiple; Chinese tool substitution.
- **Catalysts:**
  - **22 Oct 2026**: quarterly results [73].
  - 2027: 200 mm SiC re-tooling.

### #7 Zhuzhou CRRC Times Electric (HKEX:3898; SSE:688187), grid-scale HV IGBT/SiC value play (China)
- **Products in focus:**
  - 8th-generation reverse-conducting IGBTs in mass production.
  - Gen 3/3.5 planar SiC in production; Gen 4 trench SiC sampling.
  - Phase III 8-inch SiC line ramping; devices from 650 V to 6.5 kV (H1 2026) [45].
- **Why this company:**
  - IGBT line at full capacity.
  - >50% domestic share in new power systems.
  - HV devices won **volume orders in data-centre power supply** [45].
- **Evidence:** H1 2026 revenue **RMB13.07B** (+7.0%); basic EPS RMB1.25; R&D 10.55% of revenue [45].
- **Valuation:**
  - **HK$27.74** intraday 2 Oct (HK$28.26 close on 30 Sep) [73][74].
  - Market cap HK$58.4B (~US$7.4B); EV HK$52.1B.
  - **P/E 8.1 trailing, 7.1 forward; EV/sales 1.5; dividend yield 5.7%** [73].
  - The H-shares trade **~47% below the A-shares** (¥44.60 on 30 Sep; my estimate) [74].
- **Consensus:** **Buy** from 15 analysts; average target **HK$46.84**, high HK$80.38, low HK$37.18 [73].
- **Risks and access:**
  - China policy and US-China risk.
  - Its parent CRRC Corp has appeared on US Defense Department China-military lists (2020 background; current status not re-verified).
  - **Not on OFAC's NS-CMIC list as of 2 Oct 2026** (my check of the OFAC consolidated list) [75].
  - HK liquidity; small AI linkage; SiC price war.
- **Catalysts:**
  - **~30 Oct 2026**: Q3 results [73].
  - China UHV/HVDC approvals; 8-inch SiC ramp.

### #8 Axcelis Technologies (NASDAQ:ACLS), SiC implant leader plus merger optionality (cyclical)
- **Products in focus:** Purion Power Series+ high-temperature, high-energy implanters. Implant is the **only** way to selectively dope SiC.
- **Evidence (Q2 2026):**
  - Revenue $215.2M; gross margin 42.7%; bookings $131M; backlog $452M; cash $577M.
  - **China 46%** of revenue.
  - Q3 guide ~$230M and EPS $1.11.
  - Two new Chinese SiC customers [34].
  - New Pyeongtaek (Korea) facility (8 Sep 2026) [83] (headline only).
- **Merger:**
  - All-stock, 0.3575 ACLS per VECO. China's SAMR is the only approval still pending [35][36].
  - The outside date of 30 Sep 2026 extends automatically up to **30 Jun 2027**. Termination fees are $108.7M and $77.5M (10-Q, 5 Aug 2026) [35].
  - VECO ($53.19) trades **~8.8% above** the implied $48.87 (my estimate from 1 Oct closes), so the market does not treat the current terms as certain.
- **Valuation:** **$136.71** (1 Oct 2026); market cap $4.22B; **forward P/E 28.3; EV/sales 4.5**; 52-week range $73.60–193.78 [73].
- **Consensus:** **Hold** from 5 analysts; average target **$161**, high $198, low $140 [73].
- **Risks:**
  - SiC capex trough (WFE −7% CAGR) [47]; China concentration and export controls.
  - SAMR outcome; competition from SMIT, ULVAC and Chinese implanters.
- **Catalysts:**
  - **~3 Nov 2026** (estimated): Q3 results [73].
  - SAMR decision.
  - ICSCRM conference, 28 Sep–2 Oct 2026 [37].

---

## 4. Also considered and rejected
| Name | One-line reason (dated evidence) |
|---|---|
| **Wolfspeed (NYSE:WOLF)** | $31.17 (1 Oct). Non-GAAP gross margin −20% (Q4 FY26) [23]; needs ~$800M run-rate for breakeven against ~$600M (my estimate) [25]. 2 analysts, Hold, average target $27.50, below the price [73]. Wait for utilization proof |
| **Coherent (NYSE:COHR)** | SiC is immaterial to a $62.5B optics-priced equity (forward P/E 33.9) [73]. The stock rose ~11% on 1 Oct on an optics launch and a Bernstein initiation [82]. Its SiC pivot is to 300 mm thermal substrates [29] |
| **ROHM (TSE:6963 / ROHCY)** | +129% in 12 months (my calculation); forward P/E 38.3; operating margin 4.1% [73]. Now moves with the Japanese AI-chip tape (+4% on 1 Oct [77]). No longer under-owned |
| **Resonac (TSE:4004 / SHWDY)** | Real merchant epi [61], but a small part of a ¥1.38T-revenue group up ~213% in 12 months (my calculation) [73][74] |
| **Aehr (NASDAQ:AEHR)** | SiC <5% of FY26 revenue [32]; ~100–141× FY27 guided pre-tax earnings (my estimate). An AI-processor burn-in stock |
| **Navitas (NASDAQ:NVTS)** | EV $2.61B on a $13.5M Q3 guide, ~48× annualized (my estimate) [38][73]. 800 V revenue 2027+. The 10 kV Army award is R&D [40] |
| **Innoscience (HKEX:2577)** | Real traction (AI/DC shipments +183%; >20 CSP design-ins for 800 V) [44], but gross margin 11.6%, H1 loss RMB309M [44], US ITC exclusion order [7]. Consensus targets of HK$90.82 look stale [73]. Speculative only |
| **SICC (HKEX:2631 / SSE:688234)** | Substrate leader in a price war; A-share forward P/E ~217× [73]; H1 2026 net loss [52] |
| **StarPower (SSE:603290)** | China module leader; forward P/E 46.6 [73]; EV-centric; no verified AI-DC evidence |
| **Microchip (NASDAQ:MCHP)** | 3.3 kV SST modules in production [57], but SiC is small in a microcontroller-cycle stock. Watchlist |
| **Littelfuse (NASDAQ:LFUS)** | DC protection plus IXYS SiC; average target only +12% [73]; mostly outside the semiconductor scope |
| **Fuji Electric (TSE:6504 / FELTY)** | Cheap (forward P/E 18.2) [73], but no verified 2026 800 V or AI design-win evidence this pass. Watchlist |
| **Hitachi (TSE:6501 / HTHIY)** | Hitachi Energy semiconductors are immaterial at group level; covered in the Electrification section |
| **Aixtron (XETRA:AIXA)** | Power demand "remained soft"; 75% of orders are optoelectronics [65]. A photonics trade |
| **PVA TePla (XETRA:TPE)** | PVT equipment in structural decline (−11% CAGR) [47]; forward P/E 41.9 [73] |
| **ASM International (AMS:ASM)** | The LPE SiC epi line is tiny; logic and ALD drive the stock |
| **Cohu (NASDAQ:COHU)** | SiC burn-in is a side business; the average target is roughly the share price [73] |
| **Teradyne / Advantest / FormFactor** | SiC and GaN are immaterial to these AI-test names |
| **KLA / Lasertec / Onto / Entegris** | SiC metrology and CMP exposure is real but small |
| **Rogers (NYSE:ROG)** | Si₃N₄ AMB maker; 2030 plan rests on data-center wins not yet booked [67][68]. Watchlist |
| **Element Solutions (NYSE:ESI)** | Alpha silver sinter is a small line; the Solstice merger was terminated on 27 Aug 2026 [80] (headline only) |
| **Mersen (EPA:MRN)** | SiC graphite plus DC fuses; cheap (forward P/E 13.7) [73], but graphite follows the PVT downturn. Watchlist |
| **Texas Instruments (NASDAQ:TXN)** | 800 V GaN partner [21], but AI power is immaterial to TI; Silicon Labs acquisition pending [69] |
| **Silicon Labs (NASDAQ:SLAB)** | Isolator supplier being acquired by TI (pending) [69] |
| **MPS / Vicor / AOS** | VR and rack power. MPS forward P/E 42.5 [73]; AOS gross margin 23.7% and loss-making [70]. MPS and Vicor are covered in the hardware section |
| **Renesas (TSE:6723)** | Transphorm GaN and a Wolfspeed equity holder; power is not the equity driver |
| **Alcoa (NYSE:AA), gallium** | ~100 t/yr (~11% of 2025 primary output, my estimate) [63][64]. A supply hedge, not a power-semi lever |
| **Tamura (TSE:6768), Ga₂O₃** | 2030+ timing (§2.11) |
| **Sanan (SSE:600703), Epiworld (HKEX:2726)** | Chinese substrates and epi in a price war [49][54] |
| **Denka / Ferrotec / Kyocera / Dowa** | AMB/DBC ceramics: oligopoly supply, but SiC is a small share; no fresh evidence |

---

## 5. Catalyst calendar (dated)
| Date | Event |
|---|---|
| 28 Sep–2 Oct 2026 | ICSCRM 2026, Yokohama [37] |
| ~9 Oct 2026 (estimated) | Aehr Q1 FY27 [73] |
| 13 Oct 2026 | CEO Investor Summit during SEMICON West, San Francisco (Aehr, AOS presenting) [33][78] |
| Mid-Oct 2026 | OCP Global Summit: 800 VDC/SST updates (dates not re-verified) |
| 22 Oct 2026 | Disco results [73] |
| ~28 Oct 2026 (estimated) | Wolfspeed Q1 FY27, Cohu, Littelfuse [73] |
| **29 Oct 2026** | **ST Q3 results and Q4 guide**; Aixtron Q3 [73] |
| 30 Oct 2026 | Mitsubishi Electric H1; CRRC Times Electric Q3 [73] |
| ~2 Nov 2026 (estimated) | **onsemi Q3**; Navitas Q3 [73] |
| ~3–4 Nov 2026 (estimated) | Axcelis Q3; Power Integrations Q3; Veeco [73] |
| 5 Nov 2026 | ROHM H1; Microchip (estimated) [73] |
| **10 Nov 2026** | **Infineon Q4 FY26, FY27 outlook and upgraded AI target** [73][2] |
| ~Nov 2026 | **China's one-year suspension of its US gallium export ban (from Nov 2025) comes up for renewal** [63] |
| By 30 Jun 2027 | Axcelis–Veeco final outside date (SAMR) [35] |
| Mid-2027 | onsemi–Synaptics close [15] |
| 2027 | NVIDIA Kyber 800 VDC full-scale production [19] |
| End-2027 / early 2028 | onsemi 800 V ramp starts [11] |
| 2028 | Power Integrations data-center auxiliary revenue [43] |
| Late 2028 / early 2029 | Broader SST adoption [12] |

---

## 6. Method notes and caveats
- Prices, market caps, multiples and consensus come from aggregators: stockanalysis.com (S&P Global consensus) and the Yahoo Finance chart API, retrieved 2 Oct 2026 (secondary). Re-check before use.
- Hong Kong was closed on 1 Oct and mainland China is closed for National Day week. A-share prices are the 30 Sep close.
- The web-search budget ran out partway through the session. Later items were verified by fetching primary pages directly: SEC EDGAR (Veeco 10-Q), HKEXnews (Innoscience and CRRC TE interim reports), company IR (Infineon deck, Aixtron release), USGS and OFAC. A few items rely on dated headlines only and are marked.
- All content-per-MW figures in §2.2 combine company disclosures with **my rack-power assumptions**. Treat them as orders of magnitude.
- Background facts marked "background" date from before 2026 and were not re-verified: TSMC's GaN exit, onsemi's UnitedSiC deal, Toshiba's take-private, Power Integrations' CT-Concept heritage, and ASM's LPE acquisition.
- Not investment advice.

---

## 7. Sources
1. Infineon Q3 FY2026 press release (EQS), 5 Aug 2026. https://www.eqs-news.com/news/corporate/infineon-technolgies-ag-q3-fy-2026-concluded-with-record-sales-driven-by-strong-ai-business-further-significant-increase-in-revenue-and-margin-expected-in-q4-fy-2026/6dcee75d-16f0-414e-af63-1f6e3442ef7a_en
2. Infineon Q3 FY26 investor presentation (PDF), 5 Aug 2026. https://www.infineon.com/assets/row/public/documents/corporate/investors/presentations/2026/2026-08-05-q3-fy26-investor-presentation-v01-00-en.pdf
3. Infineon Q3 FY26 earnings-call transcript (Investing.com), 5 Aug 2026 (secondary). https://www.investing.com/news/transcripts/earnings-call-transcript-infineon-q3-2026-revenue-hits-record-as-ai-demand-lifts-outlook-93CH-4836459
4. Infineon Q3 FY26 slides summary (Investing.com), 5 Aug 2026 (secondary). https://www.investing.com/news/company-news/infineon-q3-fy26-slides-ai-revenue-surge-drives-record-results-93CH-4836812
5. Semiconductor Today, Eaton to use Infineon SiC in MV SST for 800 V, 29 Sep 2026. https://www.semiconductor-today.com/news_items/2026/sep/infineon-290926.shtml
6. SupplyICs, Infineon July 2026 price increase, Jul 2026 (secondary). https://supplyics.com/insights/supply-chain/infineon-price-hike-power-semiconductor-procurement-july-2026/
7. Tom's Hardware, China's Supreme Court bars Infineon GaN products; ITC context, 15 Jun 2026. https://www.tomshardware.com/tech-industry/chinas-top-court-bars-infineon-from-selling-gan-power-chips-in-china
8. Investing.com via Yahoo, Jefferies: 3 European chip stocks / cycle peak, 30 Sep 2026 (secondary). https://finance.yahoo.com/technology/articles/3-european-chip-stocks-buy-122040419.html
9. Investing.com via Yahoo, UBS top European chip stocks (ST data-center estimates), 29 Sep 2026 (secondary). https://finance.yahoo.com/technology/ai/articles/ubs-names-top-european-chip-193056238.html
10. Motley Fool, onsemi Q2 2026 earnings-call transcript, 4 Aug 2026. https://www.fool.com/earnings/call-transcripts/2026/08/11/on-semiconductor-on-q2-2026-earnings-call-transcript/
11. Yahoo Finance, onsemi Q2 2026 earnings-call transcript, Aug 2026. https://finance.yahoo.com/markets/stocks/articles/semiconductor-q2-2026-earnings-call-142037561.html
12. Defense World, onsemi analyst-day targets, 17 Sep 2026 (secondary). https://www.defenseworld.net/2026/09/17/onsemi-targets-2-5b-ai-data-center-revenue-sets-ambitious-2030-margin-goals.html
13. Yahoo Finance, "ON Semiconductor stock fell 9% after its analyst day", Sep 2026 (secondary). https://finance.yahoo.com/markets/stocks/articles/semiconductor-stock-fell-9-analyst-145422594.html
14. onsemi Q4 2025 quarterly investor presentation, early 2026. https://investor.onsemi.com/static-files/a4a35780-d249-43bc-b404-b27f50895a7d
15. onsemi/Synaptics, "Revised Merger Agreement" (GlobeNewswire via Yahoo), 1 Oct 2026. https://finance.yahoo.com/markets/stocks/articles/onsemi-synaptics-announce-revised-merger-203400670.html
16. Power Semiconductors Weekly, ST Q2 2026 results, 23 Jul 2026 (secondary). https://www.powersemiconductorsweekly.com/2026/07/23/stmicroelectronics-reports-26-revenue-growth-in-q2-2026-raises-ai-data-center-outlook/
17. Motley Fool, ST Q2 2026 earnings-call transcript, 23 Jul 2026. https://www.fool.com/earnings/call-transcripts/2026/07/23/stmicroelectronics-stm-q2-2026-earnings-call-transcript/
18. DG Matrix / Business Wire via Yahoo, Interport to 400 kW with ST SiC (cites SemiAnalysis 39 GW), 24 Sep 2026. https://finance.yahoo.com/technology/ai/articles/dg-matrix-doubles-interport-platform-100000056.html
19. NVIDIA Technical Blog, "NVIDIA 800 V HVDC Architecture…", 20 May 2025 (updated 31 Jul 2025). https://developer.nvidia.com/blog/nvidia-800-v-hvdc-architecture-will-power-the-next-generation-of-ai-factories/
20. NVIDIA Technical Blog, "Building the 800 VDC Ecosystem…", 13 Oct 2025. https://developer.nvidia.com/blog/building-the-800-vdc-ecosystem-for-efficient-scalable-ai-factories/
21. Power Electronics News, "Nvidia GTC 2026: Power From Grid to GPU", 19 Mar 2026. https://www.powerelectronicsnews.com/nvidia-gtc-2026-800-vdc-power-partnerships-from-grid-to-processor/
22. DatacenterDynamics, Nvidia prepares for 1 MW racks and 800 VDC, 14 Oct 2025. https://www.datacenterdynamics.com/en/news/nvidia-prepares-data-center-industry-for-1mw-racks-and-800-volt-dc-power-architectures/
23. Wolfspeed Q4 FY2026 results (Nasdaq press release), 19 Aug 2026. https://www.nasdaq.com/press-release/wolfspeed-reports-financial-results-fourth-quarter-fiscal-2026-2026-08-19
24. Semiconductor Today, Wolfspeed device-revenue rebound (10 kV, 300 mm samples), 25 Aug 2026. https://www.semiconductor-today.com/news_items/2026/aug/wolfspeed-250826.shtml
25. Yahoo Finance, Wolfspeed Q4 2026 call highlights (breakeven ~$800M run-rate), 20 Aug 2026 (secondary). https://finance.yahoo.com/markets/stocks/articles/wolfspeed-inc-wolf-q4-2026-050147521.html
26. Wolfspeed / Business Wire via Yahoo, Premium 200 mm n-type SiC substrate, 27 Sep 2026. https://finance.yahoo.com/technology/articles/wolfspeed-expands-200-mm-silicon-230000917.html
27. Wolfspeed, emergence from Chapter 11, 29 Sep 2025. https://www.wolfspeed.com/company/news-events/news/wolfspeed-successfully-completes-financial-restructuring-emerges-as-financially-stronger-company-well-positioned-in-silicon-carbide-market/
28. Wolfspeed IR, CFIUS clearance / Renesas equity issuance, 30 Jan 2026 (headline only). https://investor.wolfspeed.com/news/news-details/2026/Wolfspeed-Announces-CFIUS-Clearance-and-Completion-of-Equity-Issuance-to-Renesas-as-Part-of-Court-Approved-Restructuring/default.aspx
29. Semiconductor Today, Coherent sampling 300 mm high-thermal-conductivity SiC, 18 Aug 2026. https://www.semiconductor-today.com/news_items/2026/aug/coherent-180826.shtml
30. Semiconductor Today, DENSO and Mitsubishi Electric investing $1bn in Coherent's SiC business, Oct 2023. https://www.semiconductor-today.com/news_items/2023/oct/coherent-111023.shtml
31. Aehr Test Systems, FY2026 Q4/full-year results, 14 Jul 2026. https://www.aehr.com/2026/07/aehr-test-systems-reports-fiscal-2026-fourth-quarter-and-full-year-financial-results-with-record-quarterly-bookings-and-100-million-effective-backlog/
32. Motley Fool, Aehr Q4 FY2026 earnings-call transcript, 14 Jul 2026. https://www.fool.com/earnings/call-transcripts/2026/07/14/aehr-test-systems-aehr-q4-2026-earnings-call-transcript/
33. Aehr / ACCESS Newswire via Yahoo, CEO Investor Summit on 13 Oct 2026, 28 Sep 2026. https://finance.yahoo.com/technology/ai/articles/aehr-test-systems-participate-18th-113000205.html
34. Motley Fool, Axcelis Q2 2026 earnings-call transcript, Aug 2026. https://www.fool.com/earnings/call-transcripts/2026/08/13/axcelis-acls-q2-2026-earnings-call-transcript/
35. Veeco Instruments Form 10-Q for Q2 2026 (SEC EDGAR), filed 5 Aug 2026. https://www.sec.gov/Archives/edgar/data/103145/000110465926091158/veco-20260630x10q.htm
36. StockTitan, Veeco Form 425 (merger approvals; SAMR pending), 12 Feb 2026 (secondary). https://www.stocktitan.net/sec-filings/VECO/425-veeco-instruments-inc-business-combination-communication-0cf9de88aff4.html
37. Axcelis / PR Newswire via Yahoo, ICSCRM 2026 participation (cites Yole $11B by 2031), 21 Sep 2026. https://finance.yahoo.com/technology/articles/axcelis-announces-sponsorship-participation-23rd-120100577.html
38. Semiconductor Today, Navitas Q2 2026, 29 Jul 2026. https://www.semiconductor-today.com/news_items/2026/jul/navitas-290726.shtml
39. Navitas Semiconductor, "AI Data Center Opportunity" presentation, Aug 2025. https://ir.navitassemi.com/static-files/f171325e-5000-467f-8a96-00b76847ccb1
40. Navitas / GlobeNewswire via Yahoo, US Army ALATTIS 10 kV SiC program, 28 Sep 2026. https://finance.yahoo.com/technology/articles/u-government-selects-navitas-develop-201500929.html
41. Power Integrations blog, 1,250 V / 1,750 V GaN for 800 V buses, 6 Feb 2026. https://www.power.com/resources/green-room/blog/1250-v-1750-v-gan-solution-addresses-need-800-v-bus-architectures-power-hungry-ai-data-centers
42. Power Electronics News, Power Integrations reveals GaN for NVIDIA 800 VDC, 13 Oct 2025. https://www.powerelectronicsnews.com/power-integrations-reveals-gan-technology-for-nvidias-next-gen-ai-data-centers/
43. Yahoo Finance, Power Integrations Q2 2026 earnings-call highlights and Q&A, 6 Aug 2026 (secondary). https://finance.yahoo.com/markets/stocks/articles/power-integrations-inc-powi-q2-051141986.html
44. Innoscience, interim results for six months ended 30 Jun 2026 (HKEXnews), 28 Aug 2026. https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0828/2026082803672.pdf
45. Zhuzhou CRRC Times Electric, interim results for six months ended 30 Jun 2026 (HKEXnews), 19 Aug 2026. https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0819/2026081901071.pdf
46. Compound Semiconductor, "Power SiC enters the AI age, says Yole", 16 Jun 2026. https://compoundsemiconductor.net/article/124477/Power_SiC_enters_the_AI_age_says_Yole
47. Semiconductor Today, Yole: power SiC overcapacity downturn until 2027–2028, 18 Dec 2025. https://www.semiconductor-today.com/news_items/2025/dec/yole-181225.shtml
48. Semiconductor Today, Yole: power GaN $3.5bn by 2031, 20 Aug 2026. https://www.semiconductor-today.com/news_items/2026/aug/yole-200826.shtml
49. TrendForce, SiC raw materials price increase / 6-inch substrate price war, 26 Nov 2025. https://www.trendforce.com/news/2025/11/26/news-sic-raw-materials-see-a-price-increase-while-6-inch-substrate-kicks-off-a-price-war/
50. DigiTimes, "China's 8-inch SiC suppliers turn to pricing discipline after 6-inch price war", 14 Sep 2026 (headline only). https://www.digitimes.com/news/a20260914PD212/sic-6-inch-silicon-manufacturing-market.html
51. DigiTimes, "SICC hits record Q2; 8-inch wafers top 50% of core revenue", 20 Aug 2026 (headline only). https://www.digitimes.com/news/a20260820VL206/sicc-sic-substrate-revenue-2026.html
52. Bamboo Works, SICC returns to growth; China SiC faces tougher test, 25 Aug 2026 (secondary). https://thebambooworks.com/sicc-returns-to-growth-and-profits-but-chinas-sic-industry-faces-a-tougher-test/
53. Tiger Brokers, China 8-inch SiC capacity nears million units, 26 Nov 2025 (secondary). https://www.itiger.com/news/1169463111
54. TechTimes, Epiworld $95.8M SiC epi contract, 25 Sep 2026 (secondary). https://www.techtimes.com/articles/328027/20260925/chinas-silicon-carbide-wafer-leader-secures-contract-worth-more-its-annual-revenue.htm
55. Semiconductor Today, TrendForce: ST 32.6% SiC device share (2023), 20 Jun 2024. https://www.semiconductor-today.com/news_items/2024/jun/trendforce-200624.shtml
56. Power Electronics News, "Solid-state transformers' path from concept to common", 14 Apr 2026. https://www.powerelectronicsnews.com/solid-state-transformers-path-from-concept-to-common/
57. Power Electronics News, Microchip unveils 3.3 kV SiC modules for SSTs, 27 May 2026. https://www.powerelectronicsnews.com/microchip-unveils-3-3-kv-sic-modules-for-solid-state-transformers/
58. mgrid.org, "SiC vs GaN: why every MV SST uses SiC", 19 May 2026 (secondary). https://mgrid.org/2026/05/19/silicon-carbide-vs-gallium-nitride-why-every-medium-voltage-solid-state-transformer-uses-sic-and-where-gan-might-still-win/
59. Cosolvic, "800V HVDC AI Data Center Power BOM 2026", 27 May 2026 (secondary). https://cosolvic.com/blog/800v-hvdc-ai-data-center-power-bom-2026/
60. EDN, "The transition from 54-V to 800-V power in AI data centers", 27 Oct 2025. https://www.edn.com/the-transition-from-54-v-to-800-v-power-in-ai-data-centers/
61. Resonac, 300 mm SiC single-crystal substrates, 15 Sep 2026. https://www.resonac.com/news/2026/09/15/4016.html
62. Resonac, SiC business strategy page, 2026. https://www.resonac.com/corporate/strategy/sic.html
63. USGS, Mineral Commodity Summaries 2026: Gallium, Jan 2026. https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gallium.pdf
64. MarketBeat, Alcoa's gallium project (Wagerup ~100 t/yr; Sojitz offtake), 26 Aug 2026 (secondary). https://www.marketbeat.com/articles/alcoas-gallium-project-opens-a-new-door-beyond-aluminum/
65. AIXTRON, H1 2026 results press release, 30 Jul 2026. https://www.aixtron.com/en/press/press-releases/Strong%20momentum%20in%20optoelectronics%20continues_n14146
66. Mitsubishi Electric Power Products / Business Wire via Yahoo, Chip-to-Grid reference designs, 22 Sep 2026. https://finance.yahoo.com/technology/ai/articles/mitsubishi-electric-introduces-chip-grid-120000339.html
67. Rogers / Business Wire via Yahoo, 2030 targets at Investor Day, 30 Sep 2026. https://finance.yahoo.com/markets/stocks/articles/rogers-corporation-provides-2030-financial-200500993.html
68. TIKR, "Rogers stock surges 11% after investor day", 1 Oct 2026 (secondary). https://www.tikr.com/blog/rogers-stock-surges-11-after-investor-day-heres-why
69. Silicon Labs / PR Newswire via Yahoo, Q2 2026 results (TI acquisition pending), 11 Aug 2026. https://finance.yahoo.com/markets/stocks/articles/silicon-labs-reports-second-quarter-200100838.html
70. Yahoo Finance, Alpha & Omega Q4 FY2026 call highlights, 13 Aug 2026 (secondary). https://finance.yahoo.com/markets/stocks/articles/alpha-omega-semiconductor-ltd-aosl-050144734.html
71. just-auto, "Denso withdraws offer to acquire Rohm", 30 Apr 2026 (headline only). https://www.just-auto.com/news/denso-withdraws-offer-to-acquire-rohm/
72. ROHM via Yahoo, "ROHM's SiC MOSFET adopted in BBU for AI servers…", 3–8 Jun 2026 (headline only). https://finance.yahoo.com/sectors/technology/articles/rohms-sic-mosfet-adopted-bbu-070000532.html
73. stockanalysis.com quote, statistics and forecast pages (S&P Global consensus), retrieved 2 Oct 2026 (secondary). Examples: https://stockanalysis.com/stocks/on/forecast/ ; https://stockanalysis.com/quote/etr/IFX/ ; https://stockanalysis.com/quote/tyo/6503/ ; https://stockanalysis.com/quote/hkg/3898/
74. Yahoo Finance chart API (prices, 52-week ranges, FX), retrieved 2 Oct 2026 (secondary). https://query1.finance.yahoo.com/v8/finance/chart/IFX.DE (same pattern per ticker)
75. US Treasury OFAC, consolidated (non-SDN) sanctions list CSV including NS-CMIC entries, retrieved 2 Oct 2026. https://www.treasury.gov/ofac/downloads/consolidated/cons_prim.csv
76. Navitas via Yahoo, "Navitas delivers latest Gen 5 GaNFast manufactured in the U.S. through GlobalFoundries", 1 Sep 2026 (headline only). https://finance.yahoo.com/technology/ai/articles/navitas-delivers-latest-gen-5-120500115.html
77. Investing.com via Yahoo, Japanese chipmakers rally (ROHM +4%), 1 Oct 2026. https://finance.yahoo.com/technology/ai/articles/japanese-chipmakers-rally-micron-earnings-045459000.html
78. QuickLogic / PR Newswire via Yahoo, CEO Investor Summit held during SEMICON West, 13 Oct 2026, 29 Sep 2026. https://finance.yahoo.com/technology/articles/quicklogic-announces-participation-18th-annual-114600852.html
79. Evertiq, "Five companies control the SiC power market" (2022 shares), 9 Jan 2024. https://evertiq.com/news/55022
80. Element Solutions via Yahoo, mutual termination of Solstice merger, 27 Aug 2026 (headline only). https://finance.yahoo.com/markets/stocks/articles/element-solutions-announces-mutual-termination-210000746.html
81. Innoscience via Yahoo, "US ITC determination confirmed, banning Innoscience's patent-infringing GaN products from U.S. market", 7 Jul 2026 (headline only). https://finance.yahoo.com/technology/articles/us-international-trade-commissions-us-064400362.html
82. 24/7 Wall St, "Coherent jumps 10% on PhotonLink push and Bernstein's Outperform start", 1 Oct 2026 (headline only). https://247wallst.com/investing/2026/10/01/coherent-jumps-10-on-photonlink-push-and-bernsteins-outperform-start-lumentum-rises-9-corning-advances-3/
83. Axcelis via Yahoo, "Axcelis to Build New Manufacturing Facility in Pyeongtaek, Korea", 8 Sep 2026 (headline only). https://finance.yahoo.com/technology/articles/axcelis-build-manufacturing-facility-pyeongtaek-120000164.html
