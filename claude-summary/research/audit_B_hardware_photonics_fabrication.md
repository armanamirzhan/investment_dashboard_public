> **Coverage audit (2 Oct 2026), read-only pass over commit 9d8ec4e.** Machine-readable items: `claude-summary/data/coverage-gaps.json`.

# Audit B: Hardware, Photonics, CPO, CPO timelines and Fabrication

**Repository:** `investment_dashboard_public` (read-only clone). **Audit date:** Friday 2 October 2026.

**Companion file:** the items with IDs beginning B- in `../data/coverage-gaps.json` (234 rows): 49 high, 89 medium, 96 low priority (130 add, 101 fix, 2 move, 1 remove).

**What I read in full:**
- `hardware/index.html`, `schematic.js`, `stages.json` (25 stages, 26 hotspots) and `analysis-notes.md`
- `hardware/photonics/index.html`, plus `stack-map.png` (viewed as an image)
- `hardware/photonics/cpo/index.html`
- `hardware/timelines/index.html`, `timeline.js` and `timeline-stages.json` (55 cells)
- The 5 schematic SVGs (byte-identical to the inline copies) and the 5 timeline SVG/PNG pairs (viewed)
- `generate_schematics.py` and `generate_timelines.py`
- `semiconductors/index.html` (4 device tabs, 44 hotspots, 17 stage ids), `schematic.js` and `stages.json`
- `data/hardware_companies.json`, `hardware_suppliers.json` and `semiconductor_companies.json`

**Mechanical checks:**
- I ran an internal-link and anchor checker over the 5 pages. No broken `href`/`src` or `#anchors` were found.
- Every hotspot `data-stage` has a JSON entry, and every JSON stage has a hotspot. There are no orphans.

**Note on evidence:** Web-search quota ran out mid-audit. Later facts were verified with direct page fetches (company, IR or exchange pages and stockanalysis.com quote pages) or Bing News snippets. Items marked "(snippet)" should get a primary-source check before publishing.

---

## 0. Top findings

### A. Wrong tickers or Fidelity links (fix now)

| # | Where | Problem | Evidence |
|---|---|---|---|
| 1 | `semiconductors/index.html` #layer-3; `stages.json` stage `implant-cmp` | **SCREEN Holdings is shown as 6305.T. That code belongs to Hitachi Construction Machinery.** SCREEN trades as **7735.T** (OTC DINRF). | stockanalysis.com/quote/tyo/6305 and /tyo/7735 (accessed 2026-10-02) |
| 2 | semis #layer-7; stage `wafer` (ticker and `fidelity_symbol`) | **SK Siltron is shown as 008500.KS. That code belongs to Iljeong Industrial, a car-seat-fabric maker.** SK Siltron is unlisted. Doosan bought 70.6% from SK Inc.; the deal closed 2026-07-31. | stockanalysis.com/quote/krx/008500/company; en.sedaily.com 2026-07-31 |
| 3 | semis stage `dep-etch`: `fidelity_symbol: "ASM"` | **The Fidelity link for ASM International opens a silver miner.** US "ASM" is Avino Silver & Gold (NYSE American). Use the ADR **ASMIY**. | stockanalysis.com/stocks/asm; morningstar ASMIY |
| 4 | semis #layer-7 "DuPont DD"; stage `materials` | DuPont spun its electronics/semiconductor-materials business off as **Qnity Electronics (NYSE: Q)** on 2025-11-01. DD no longer gives resist or CMP exposure. | prnewswire 2025-11-01 |
| 5 | Hardware #layer-1 "Private: Cerebras" | **Cerebras is public:** IPO priced at $185 on 2026-05-13 and trades on **Nasdaq as CBRS**. | cerebras.ai pricing release |
| 6 | Hardware and semis HBM rows (000660.KS) | SK hynix has had a **Nasdaq ADR, SKHY, since 2026-07-10** (~$26.5B raise). `fidelity_symbol` is missing, so the page builds a link from "000660.KS". | stockanalysis.com/stocks/skhy; financialexpress.com |
| 7 | Hardware #layer-2 and stage `cpu` | **Arm** shows no ticker; it is Nasdaq **ARM**. The page calls it an "architecture licensor" offering CPU IP, but **Arm launched its own server chip, the Arm AGI CPU (Meta as lead partner), in March 2026** (snippet). | en.wikipedia.org/wiki/Arm_Holdings; Forbes 2026-03-24 (snippet) |
| 8 | Hardware stage `fpga` "Intel (Altera)" INTC | **Silver Lake took 51% of Altera on 2025-09-15.** Altera is now a standalone private company; an IPO filing was reported in Sep 2026. | en.wikipedia.org/wiki/Altera |
| 9 | Hardware cooling (stages `cold-plate`, `blade-loop`, `rack-manifold`, `cdu`, plus #layer-8) | **CoolIT is owned by Ecolab (ECL).** The ~$4.75B acquisition closed 2026-07-02. The page shows CoolIT as an independent private company. | Business Wire via financialcontent, 2026-07-02 |
| 10 | `photonics/index.html` #stack-map caption | **The caption's correction of the graphic is itself wrong.** It says "$SIVE should read SITM (SiTime)". The teal-X logo in the Lasers row is **Sivers Semiconductors (SIVE, Nasdaq Stockholm)**, an InP CW-DFB laser-array maker for AI data centers and CPO ($30M Glasgow expansion, Sep 2026). SiTime (MEMS timing) does not belong in that row. | sivers-semiconductors.com/photonics; image crop |

### B. Stale CPO content

**Broadcom's current CPO switch is missing:**
- The CPO page, Figure 1 and the `so-bailly` cell present **51.2T Bailly** as Broadcom's CPO platform.
- Broadcom's current part is the **3rd-generation Tomahawk 6-Davisson (102.4T)**. Tomahawk 6 has shipped in volume since **2026-03-12** (financialcontent, 2026-03-26).

**NVIDIA's own partner list is ignored:**
- NVIDIA named these partners for Quantum-X and Spectrum-X Photonics: TSMC, Browave, Coherent, Corning, Fabrinet, Foxconn, Lumentum, SENKO, SPIL, Sumitomo Electric, TFC, Eoptolink and InnoLight (nvidianews, 2025-03-18).
- The timeline cells only show NVDA, TSM, LITE and COHR.

**Recent developments are absent:**
- NVIDIA invested ~$4B in Lumentum and Coherent (Mar 2026).
- Coherent launched PhotonLink on 2026-09-21. NVIDIA is the public CPO long-term-agreement customer, and the revenue ramp starts Q4 CY2026.
- Lumentum's DWDM ELSFP for OCI MSA is due 1H CY2027 (released 2026-09-21).
- Ciena bought Nubis (closed 2025-10-07).
- Credo bought DustPhotonics (2026, snippet).

**Ayar Labs timing is off:**
- The pages say "production late 2026–2027".
- The CEO (Mar 2026) says qualification in 2H 2027 and customer ramps in 2028.
- Ayar raised $650M in 2026 from NVIDIA, AMD, MediaTek, Intel, Alchip and Wiwynn, among others.

### C. Gaps in core subsections

**Hardware page:**
- **Custom ASIC partners:** MediaTek, Alchip and GUC appear only as muted text with no tickers.
- **CPUs:** NVIDIA Grace/Vera, the biggest Arm AI host CPU line, is missing.
- **NAND:** Sandisk (spun off from WDC; WDC is now HDD-only) and Kioxia are missing.
- **Copper interconnect:** Credo (AECs) and Astera Labs (retimers) are absent from the copper and connector cells. Luxshare and Bizlink are also missing.
- **No PCB, laminate or copper-foil layer at all:** EMC, TUC, Mitsui Kinzoku, Nittobo, Victory Giant, WUS, Gold Circuit and TTM.
- **Cooling:** Eaton/Boyd Thermal ($9.5B; completed Mar 2026, per a Morningstar snippet) is missing.

**Photonics page:**
- No Asian transceiver or laser names: InnoLight, Eoptolink, Sumitomo Electric, Yuanjie, TFC, LandMark, VPEC and WIN Semi.
- No Japanese InP or fiber suppliers: JX Advanced Metals and Fujikura.
- The Hardware page says these are "mapped in depth" on Photonics. They are not.

**Fabrication page:**
- **Packaging and HBM tools:** DISCO, BESI, Hanmi and ASMPT are missing.
- **Substrates:** Ibiden, Unimicron and Ajinomoto ABF are missing.
- **Probe cards:** Technoprobe is missing.
- **SiC/GaN epitaxy:** Aixtron is missing.
- **Device lines:** the HBM, Photonics and SiC device-line figures reuse logic-fab stage ids. Their cells therefore open logic-company lists, for example "Optical assembly" opens CoWoS/OSAT names and "Opto test" opens ATE names.

---

## 1. `hardware/index.html`: Computation Hardware

### 1.1 Hero, #why, #stack, #scarcity
**Present:**
- Scarcity text: TSMC CoWoS, Amkor, ASE and Intel EMIB.
- HBM: SK Hynix, Micron and Samsung.
- Optics: Lumentum, Coherent, AXT, Corning and Marvell (named only).

**Errors and other fixes:**
- The eyebrow says "September 2026 baseline", but the stage panel and stages.json say "October 2026". Pick one date.
- The #scarcity HBM bullet says "sold-out HBM often paces...". Add a dated HBM4 note: SK hynix 16-high HBM4 for Rubin is in volume shipment (Sep 2026, snippet).

### 1.2 Interactive schematic (`#schematic`, rendered by `schematic.js` from `stages.json`)

**Schematic-wide issues:**
- **Fidelity fallback bug (medium):** `fidelityHref()` uses `c.fidelity_symbol || c.ticker`. Rows with a non-US ticker and no mapping therefore get dead Fidelity links: 2301.TW, 000660.KS, 005930.KS and SU.PA.
- **Notes contradict code:** `analysis-notes.md` says Lite-On is shown "without a Fidelity href". The code does build one.
- **Rack B:** it reuses `data-stage="rack"`, which is intentional and works.

| Stage id (cell) | Companies present | Missing (priority) | Errors / fixes |
|---|---|---|---|
| `hall` | Equinix / Digital Realty (blank ticker); Hyperscalers | n/a | Add tickers EQIX / DLR (low) |
| `rack` | SMCI, DELL, HPE, "Foxconn / Quanta / Wiwynn" (blank) | Sanmina SANM (rack-scale; took ZT Systems mfg from AMD, Oct 2025) (med); Celestica CLS (med) | ODM tickers 2317.TW / 2382.TW / 6669.TW (med) |
| `server` | SMCI, DELL, HPE, LNVGY, CLS, "Foxconn, Quanta, Wistron/Wiwynn" (blank) | Inspur 000977.SZ (low) | Add ODM tickers incl. Wistron 3231.TW (med) |
| `gpu` | NVDA, AMD, INTC, QCOM | n/a | Qualcomm note is stale: a multi-generation custom AI-inference + optics deal with AWS (up to ~$60B, Sep 2026) (med). Intel: Gaudi-only framing is dated (low) |
| `asic` | AVGO, MRVL, GOOGL, AMZN, MSFT, META | **MediaTek 2454.TW, Alchip 3661.TW, GUC 3443.TW (high)** | n/a |
| `fpga` | "AMD (Xilinx)", "Intel (Altera)" INTC, "Achronix / Lattice" (blank) | n/a | **Altera is 51% Silver Lake (high)**. Lattice = LSCC; Achronix is private (med) |
| `cpu` | AMD, INTC, Ampere (blank), Arm (blank) | **NVIDIA Grace/Vera (high)**; Graviton / Axion / Cobalt (med) | **Arm = ARM; Arm AGI CPU (high)**. Ampere: parent SoftBank 9984.T / SFTBY (low) |
| `hbm` | SK Hynix 000660.KS, Samsung 005930.KS, MU | n/a | **Add SKHY ADR (high)**. Samsung has no Fidelity map (low). There is no scarcity frame although the page calls HBM *the* throttle (low) |
| `dram` | Samsung, SK Hynix, MU | Montage 688008.SS, Rambus RMBS (med); Nanya 2408.TW (low) | Same SKHY fix |
| `nic` | NVDA, AVGO, MRVL, INTC | AMD Pensando/Pollara (low) | n/a |
| `storage` | PSTG, NTAP, WDC, STX, "Samsung / Micron / SK Hynix (NAND)" | **Sandisk SNDK, Kioxia 285A.T (high)**; Solidigm (low) | WDC is HDD-only since the Feb 2025 Sandisk spin |
| `psu` (yellow) | Delta 2308.TW to DELTY (rainbow), AEIS, FLEX, BELFB, Lite-On 2301.TW, VRT, cross-link | Megmeet 002851.SZ (NVIDIA 800 VDC partner) (med) | Lite-On builds a dead Fidelity link. DELTY mapping is unverified (low) |
| `vrm` (yellow) | VICR (rainbow), MPWR, Renesas to RNECY, TXN, Infineon to IFNNY, FLEX, AEIS, Murata to MRAAY | Analog Devices ADI (med) and Innoscience 2577.HK (med), both NVIDIA 800 VDC silicon partners; AOS AOSL (low) | n/a |
| `tor` | ANET, CSCO, NVDA, HPE | Accton 2345.TW, Celestica CLS (med) | n/a |
| `inrack-cable` | APH, TEL, Molex, Samtec | **Credo CRDO (AECs), Astera Labs ALAB (high)**; Luxshare 002475.SZ, Bizlink 3665.TW (med) | Flag Molex (Koch) and Samtec as private (low) |
| `inrack-optics` | LITE, COHR, "InnoLight / Eoptolink / Fabrinet" (blank), "NVIDIA / Broadcom" (blank) | n/a | **Split the bundle and add 300308.SZ / 300502.SZ / FN (high)** |
| `fabric` | ANET, NVDA, AVGO, CSCO, MRVL | Accton, Celestica, Astera Scorpio (med) | n/a |
| `row-optics` | GLW, LITE, COHR, MRVL, AXTI, "Ciena / Nokia (Infinera)" (blank) | Fujikura 5803.T, Sumitomo Electric 5802.T (med) | Add tickers CIEN / NOK (med) |
| `cold-plate` | CoolIT, Asetek, Motivair (Schneider), NVT, OEM/ODM teams | **Eaton/Boyd Thermal ETN (high)**; AVC 3017.TW, Auras 3324.TWO (med) | **CoolIT is Ecolab-owned (high)**. Motivair row has a blank ticker (med). Asetek is private, taken over by CQXA (low) |
| `blade-loop` | "CoolIT / Asetek / Boyd-class", OEMs | Eaton (Boyd); Parker / CPC (Dover) / Staubli quick-disconnects (low) | "Boyd-class" is now Eaton |
| `rack-manifold` | VRT, CoolIT, NVT, Rittal / STULZ | AVC, Auras (med) | Rittal and STULZ are private |
| `cdu` | VRT, Schneider SU.PA, CoolIT, NVT, "Johnson Controls / Delta" | Eaton/Boyd (high); Modine MOD (low); Nidec 6594.T (low); LiquidStack (private) | SU.PA has no fidelity_symbol (SBGSY is used on Electrification) |
| `facility-hx` | VRT, SU.PA, "JCI / Carrier / STULZ / Munters", Alfa Laval | Trane TT, Modine (low) | Tickers JCI / CARR / MTRS.ST / ALFA.ST (low) |
| `immersion` | Submer, GRC, Iceotope, VRT | LiquidStack (low) | n/a |
| `connectors` | APH, TEL, Molex, Samtec | Credo, Astera Labs (high); Luxshare, Bizlink (med) | Add Amphenol's CommScope CCS purchase ($10.5B, closed 2026-01-12) |

**Missing schematic cell:** add a "Motherboard / PCB and laminate" cell inside *Server*, listing EMC, TUC, Mitsui Kinzoku, Nittobo, Victory Giant, WUS, Gold Circuit and TTM.

### 1.3 Who-is-who lists (#layer-1 to #layer-9)

**Present:**

| Layer | Companies |
|---|---|
| L1 merchant GPUs | NVDA, AMD, INTC, QCOM |
| L1 custom ASICs | AVGO, MRVL, GOOGL, AMZN, MSFT |
| L1 alternative accelerators | Cerebras, SambaNova, Tenstorrent, d-Matrix, Groq, Graphcore, IBM |
| L2 CPUs | AMD, INTC, Ampere, Arm |
| L3 memory | SK Hynix, Samsung, MU |
| L3 storage | WDC, STX, PSTG, NTAP |
| L4 Ethernet systems | ANET, CSCO, HPE (Juniper) |
| L4 switch silicon | AVGO, MRVL, NVDA |
| L5 optical | GLW |
| L6 connectors | APH, TEL, Molex, Samtec |
| L7 OEMs | SMCI, DELL, HPE, LNVGY |
| L7 ODMs/EMS | CLS, 2317.TW, 2382.TW, Wistron/Wiwynn, Inventec/Pegatron/Compal |
| L8 cooling | VRT, Asetek, SU.PA, CoolIT, NVT, 2308.TW, JCI/Carrier/STULZ/Rittal/Munters, Submer/GRC/Iceotope |
| L9 in-rack power | MPWR, VICR, 6723.T, TXN, IFX.DE, 2308.TW |

**Errors (verified):**
- **Cerebras** is listed as private. It is public as **CBRS** (Nasdaq, since 2026-05-14). (high)
- **Groq:** the page calls the deal an "NVIDIA acquisition narrative". The 2025-12-24 deal was a ~$20B **non-exclusive license plus hires**, and Groq continues independently. (med)
- **Graphcore:** replace "verify current status" with "SoftBank subsidiary since Jul 2024". (low)
- **SambaNova:** Intel's acquisition talks ended. Intel invested ~$350M with a multiyear partnership, early 2026 (snippet). (low)
- **IBM** sits under a heading that says "Private". (low)
- **Arm** has no ticker and is described as a licensor only. See §0, item 7. (high)
- **Ampere:** SoftBank completed the acquisition on 2025-11-25/26, which is consistent with the page. Show the parent ticker. (low)
- **Qualcomm** text is stale: the AWS deal (Sep 2026) and the Alphawave acquisition (closed Dec 2025, snippet). (med)
- **HPE (Juniper):** closed July 2025, consistent with the page.

**Missing:**
- **L1 (high):** MediaTek, Alchip and GUC as real rows with tickers. Low: Cambricon 688256.SS; Huawei Ascend (private).
- **L2:** NVIDIA Grace/Vera (high). Hyperscaler Arm CPUs (med). Hygon 688041.SS (low).
- **L3:** Sandisk and Kioxia (high). A new "Memory interface & CXL" row with Montage, Rambus, Astera Leo and Marvell Structera (Marvell also bought XConn in 2026, snippet) (med). CXMT, private (low).
- **L4:** Accton 2345.TW and Celestica switching (med). Astera Scorpio (med).
- **L5:** Fujikura, Sumitomo Electric and Furukawa (med). These are also needed because the callout claims Photonics covers InnoLight and Eoptolink, but the Photonics page lists none of them. (high, inconsistency)
- **L6 (high):** Credo and Astera Labs. Medium: Luxshare and Bizlink. Also add Amphenol's CommScope CCS note.
- **New L7b "PCBs, laminates & copper foil":**
  - High: EMC 2383.TW, Mitsui Kinzoku 5706.T, Nittobo 3110.T (T-glass shortage).
  - Medium: TUC 6274.TWO, Victory Giant 300476.SZ, WUS 002463.SZ, Gold Circuit 2368.TW, TTM TTMI.
- **L7:** add tickers for Wistron 3231.TW, Wiwynn 6669.TW, Inventec 2356.TW, Pegatron 4938.TW and Compal 2324.TW (med). Add Sanmina (med) and Jabil / Inspur (low).
- **L8:** Eaton/Boyd (high); AVC and Auras (med); Modine, Trane, LiquidStack and Nidec (low). CoolIT should be shown under Ecolab (high).
- **L9:** AEIS, FLEX, BELFB, Lite-On and Murata are in stages.json but not in the HTML list, so the page and schematic disagree (med). Add ADI and Innoscience (med) and AOS (low).

**Other fixes:**
- The L1 list omits Meta MTIA, which stages.json includes. (low)
- Ownership text says "owned by Photonics AI", but OWNERS.md says AI Computation Hardware owns `hardware/photonics/`. (low)

### 1.4 `hardware/analysis-notes.md`
**Present (rainbow):** Delta (DELTY), Vicor.

**Present (grey):** AEIS, FLEX, BELFB, Lite-On, VRT, MPWR, RNECY, TXN, IFNNY, MRAAY.

**Fixes:**
- The Lite-On "no Fidelity href" statement is contradicted by `schematic.js`.
- Add ADI, Megmeet and Innoscience to the coverage check. All three are on NVIDIA's 800 VDC partner list (developer.nvidia.com, 2025-05-20).

---

## 2. `hardware/photonics/index.html`: Photonics

### 2.1 #scarcity table and cards
**Present:** LITE, COHR, AXTI, GLW, MRVL.

**Missing:**
- **JX Advanced Metals 5016.T (high):** InP substrate leader; ~$750M InP capacity plan (MarketWatch snippet).
- **Sumitomo Electric 5802.T (high):** InP substrates and lasers.
- The hub's own digests (2026-09-28 to 30) cite Morgan Stanley saying InP substrates are "sold out 12–18 months". That makes AXT-only coverage misleading.

**Fixes:**
- "~29× sales" for Lumentum is undated and unsourced. (low)
- Add the dated catalysts: the NVIDIA ~$4B investment in Lumentum and Coherent (Mar 2026), PhotonLink (2026-09-21) and ELSFP (1H 2027). (med)

### 2.2 #cpo-timelines (5 PNGs)
These match the Figure 1–5 files. Figure issues are covered in §4.

### 2.3 #stack-map (`stack-map.png`, SergeyCYW)
**Graphic rows (verified visually):**

| Row | Tickers |
|---|---|
| Platform | NVDA, AVGO, CSCO, ANET, CIEN, NOK |
| Components | LITE, AAOI, COHR, MTSI, IPGP, **SIVE** |
| Connectivity ICs | CRDO, MRVL, ALAB, SMTC, MCHP |
| Foundries | TSM, GFS, TSEM, UMC, STM, FN |
| Test | AEHR, VIAV, ONTO, KEYS, POET |
| Materials | AXTI, SOI.PA, IQE.L, LWLG, GLW |

**Errors:**
- **The caption "SIVE should read SITM" is wrong (high).** SIVE is Sivers Semiconductors (InP lasers). The page then lists SiTime in Optical Components, so the figure and text disagree.
- **The MaxLinear (MXL) bullet appears in text but not on the graphic.** That is fine, but the blurb says "coherent DSP". MXL's data-center optical DSPs are PAM4. (low)

### 2.4 Who-is-who

| Layer | Present | Missing (priority) | Errors / fixes |
|---|---|---|---|
| L1 Platform | NVDA, AVGO, CSCO, ANET, CIEN, NOK | n/a | Ciena: add Nubis, closed 2025-10-07 (med). Nokia–Infinera closed 2025-02-28 (correct) |
| L2 Components / lasers / transceivers | LITE, AAOI, COHR, MTSI, IPGP, SITM | **InnoLight 300308.SZ, Eoptolink 300502.SZ, Sumitomo Electric 5802.T (high)**; Sivers SIVE (high, see 2.3); Mitsubishi Electric 6503.T, Yuanjie 688498.SS, TFC 300394.SZ, Broadcom optical components (med); Accelink 002281.SZ (low) | SiTime is not an optical component: move it (low). IPG is an industrial adjacency (low) |
| L3 Connectivity ICs / DSPs | CRDO, MRVL, ALAB, SMTC, MCHP, MXL | Broadcom PAM4 DSPs (med) | Credo bought DustPhotonics (~$750M, 2026, snippet) (med). Marvell–Celestial closed 2026-02-02 |
| L4 Foundries / manufacturing | TSM, GFS, TSEM, UMC, STM, FN | WIN Semi 3105.TWO, LandMark 3081.TWO, VPEC 2455.TW (med) | n/a |
| L5 Test / integration | AEHR, VIAV, ONTO, KEYS, POET | FormFactor (optical probe) (low) | n/a |
| L6 Materials | AXTI, SOI.PA, IQE.L, LWLG, GLW | **JX Advanced Metals 5016.T, Fujikura 5803.T (high)**; Furukawa 5801.T (med); Prysmian PRY.MI, Shin-Etsu SOI/preform (low) | IQE remains independent and listed (snippet, Sep 2026) |
| Private names | none listed | Ayar Labs and Lightmatter (both still private; Lightmatter has no IPO filing); Xscape, Teramount, Scintil (low) | n/a |

---

## 3. `hardware/photonics/cpo/index.html`: CPO and optical I/O

**Present:**
- Sections 3 to 5: NVDA, AMD, AVGO, MRVL, FN, CSCO, ANET, CRDO, ALAB, TSM, LITE, COHR, AXTI and POET.
- Private: Ayar Labs, Lightmatter, and Celestial AI (now part of Marvell).

**Verified as correct:**
- Celestial AI was acquired by Marvell, closed **2026-02-02** for $3.25B ($1B cash plus $2.25B stock). Add the date and terms. (low)
- Quantum-X Photonics: 144 ports at 800G, consistent with nvidianews 2025-03-18.

**Errors and stale content:**
- **Broadcom (high):** the page leads with "51.2 Tb/s Bailly". It should lead with the **Tomahawk 6-Davisson 102.4T** 3rd-generation CPO; TH6 has shipped in volume since 2026-03-12. Keep Bailly as history. The section 5 callout and the Figure 1 caption need the same change.
- **Ayar Labs (med):** "production late 2026–2027" should read "qualification 2H 2027, ramps 2028". Add the $650M raised in 2026 and the investor list.
- **Fabrinet (low):** listed as "sidelined", but it is an NVIDIA-named CPO partner. Reword to "pluggable volume at risk".
- **Credo (med):** framed as a sidelined retimer vendor, but it now owns DustPhotonics silicon photonics.

**Missing:**
- **NVIDIA's named CPO supply chain (high):** InnoLight, Eoptolink, TFC, Browave 3163.TWO, SENKO (private), SPIL (part of ASE), Sumitomo Electric, Foxconn, Fabrinet and Corning.
- **Coherent PhotonLink (med):** NVIDIA CPO LTA; more than 10 CPO and more than 10 NPO engagements.
- **Ciena/Nubis (med).**
- **Lumentum DWDM ELSFP for OCI MSA, 1H 2027 (low).**

---

## 4. `hardware/timelines/`: five interactive schematics and five timelines

**General points:**
- The 55 cells in `timeline-stages.json` match the hotspots one-to-one.
- `cpo-schematic-0*.svg` are byte-identical to the inline SVGs and are not referenced anywhere. Delete them or link them. (low)
- **Coverage is very narrow.** Company frequency across all cells: NVIDIA 21, Ayar 20, TSMC 19, Lumentum 15, Coherent 15, Broadcom 12, Marvell 8, Lightmatter 7. There are no Asian optical names and no fiber names other than Corning.
- **Text bug:** the generator double-escapes `&`, so cells `els-coherent`, `std-msa` and `std-ecosystem` show a literal "&amp;". (low)

### Figure 1: Scale-out CPO switches (13 cells)

| Cell | Present | Add / fix |
|---|---|---|
| `so-pluggable` | FN, CSCO, ANET, AVGO | **InnoLight, Eoptolink (high)**; COHR / LITE / AAOI; Marvell DSP (med) |
| `so-cpo-package`, `so-quantum-x`, `so-spectrum-x` | NVDA, AVGO, TSM / LITE, COHR | **NVIDIA partner list: GLW, FN, Foxconn, Sumitomo Electric, SPIL/ASE, Browave, TFC, SENKO (high)** |
| `so-switch-asic` | NVDA, AVGO, MRVL | Cisco Silicon One (low) |
| `so-coupe` | TSM, NVDA | (ASE/SPIL packaging) |
| `so-els-feed` | LITE, COHR, Ayar | Sivers (med) |
| `so-ports` | NVDA, AVGO, GLW | Fujikura, Sumitomo Electric, Furukawa, SENKO (med) |
| `so-bailly` | AVGO, "Delta / Micas" (blank), META | **Add TH6-Davisson 102.4T (high)**; Delta 2308.TW; Micas is private (low) |
| `so-mainstream`, `so-volume`, `so-ramp-2030` | NVDA, AVGO, TSM, LITE, COHR | Add the module makers listed above |

**Static timeline (PNG/SVG):**
- The latest Broadcom milestone is "2026 Bailly". Add TH6-Davisson (2026).
- Row-3 cards overlap the title, as rendered in the PNG. (low)

### Figure 2: Scale-up optical I/O (14 cells)
- `su-gpu` has a blank "Hyperscaler custom ASICs" row. Add AVGO / MRVL / Alchip / GUC. (low)
- `su-modulator`: add GFS and TSEM as silicon-photonics foundries. (med)
- `su-els`: add Sivers and Yuanjie. (med)
- `su-integration` and `su-ayar`: fix the timing and add Alchip 3661.TW and TSMC SoIC-X. (med)
- **Timeline PNG:** the milestone "Ayar customer integration; production late 2026–2027" is stale. Two cards make the same SemiAnalysis point, and one uses "Patel / SemiAnalysis" as a date label. (low)

### Figure 3: TSMC COUPE (10 cells)
- All cells are TSMC and NVIDIA only.
- `coupe-customer`: add Ayar Labs (its PICs are built by TSMC with SoIC-X) and Alchip. (med)
- Possible roadmap error (low; I could not re-verify it):
  - Gen-1 (1.6T in a pluggable, 2025) is missing.
  - The 6.4T step may be the 2026 substrate-CPO generation rather than "~2027".
  - Check against TSMC Technology Symposium material.

### Figure 4: External light source (9 cells)
- **`els-axt` lists only AXT for upstream InP.** Add **JX Advanced Metals and Sumitomo Electric (high)**. Consider a red frame given the "sold out 12–18 months" digest note. (low)
- `els-lumentum`, `els-coherent` and `els-nvidia-ties` are vague. Replace them with dated facts: NVIDIA's ~$4B investment, the ELSFP for OCI MSA (1H 2027) and PhotonLink. (med)
- `els-mw` / `els-supernova`: add Sivers (CW-WDM MSA arrays), Yuanjie and Mitsubishi Electric. (med / low)
- PNG: the Ayar SuperNova card overlaps the subtitle. (low)

### Figure 5: Standards (9 cells)
- `std-msa` and `std-ecosystem` use placeholder names ("MSA consortia", "MSA groups"). Name the real bodies: **OCI MSA**, **CW-WDM MSA** and the **OIF ELSFP** implementation agreement. (med)
- `std-ucie`: add TSMC, ASE, Samsung and Qualcomm (Alphawave IP, completed Dec 2025, snippet). (low)
- `std-copper-ref`: add Marvell. (low)

---

## 5. `semiconductors/index.html` + `stages.json` + `schematic.js`: Fabrication

### 5.1 Interactive schematics (4 device tabs)

**The structural problem (high):**
- All four figures share 17 stage ids, so the HBM, Photonics and SiC cells open logic-fab lists. Examples:
  - **Figure C:** "Si / InP wafers" opens Shin-Etsu, SUMCO and Wolfspeed. "Optical assembly" opens TSMC CoWoS, Amkor, ASE and Intel. "Opto test" opens Advantest, Teradyne and Aehr. "Optical materials" opens TOK, Linde and Ecolab.
  - **Figure D:** "Power WFE" opens AMAT, LRCX, TEL and ASM. "Power modules" opens CoWoS/OSAT names.
  - **Figure B:** "Ship dies" / "To AI packages" open the cleanroom builders.
- Give each device line its own stage ids. Suggested lists:
  - **Photonics wafers:** AXT, Sumitomo Electric, JX Advanced Metals, Soitec.
  - **SiPh / III–V fabs:** TSM, GFS, TSEM, INTC, STM, WIN, LandMark, VPEC, IQE, COHR, LITE, SIVE. The `siph` and `device-photonics` cells hold only placeholder text today.
  - **Optical assembly:** FN, InnoLight, TFC, JBL.
  - **Opto test:** KEYS, VIAV, FORM, AEHR.
  - **Power epitaxy:** Aixtron AIXA.DE (high).
  - **SiC wafers:** SICC 2631.HK / 688234.SS (med).
  - **Power modules:** IFX, ON, STM, Mitsubishi Electric, Semikron Danfoss.

**Investor-mark bug (med):**
- The callout says the marks apply only on the SiC/GaN tab.
- But `schematic.js` adds `scarcity-soon` to every hotspot with `data-stage="test"`, so the Logic, HBM and Photonics test cells also get yellow frames.
- `packaging` has `scarcity: null` although the page says CoWoS is tight into ~2027.

**Per-stage table:**

| Stage | Present | Add (priority) | Errors / fixes |
|---|---|---|---|
| `fab-shell` | Exyte, Jacobs J, Samsung C&T | United Integrated Services 2404.TW (low) | Samsung C&T = 028260.KS (low) |
| `device-logic` | TSM, Samsung Foundry, INTC | Rapidus (private) (low) | n/a |
| `device-hbm` | SK Hynix, MU, Samsung | n/a | Add SKHY (med) |
| `device-photonics` | placeholders | See the photonics lists above (high) | n/a |
| `device-power` (yellow) | STM, ON (green), IFX to IFNNY, WOLF, ROHM to ROHCY (rainbow), NVTS (rainbow) | Innoscience 2577.HK (NVIDIA 800 VDC partner) (med); Mitsubishi Electric / Fuji Electric (low) | Wolfspeed: emerged from Chapter 11 on 2025-09-29 with old shares cancelled (med) |
| `wafer` | Shin-Etsu to SHECY, SUMCO to SUOPY, GlobalWafers (blank), **SK Siltron 008500.KS**, COHR (rainbow), WOLF | SICC; InP suppliers for the photonics line | **008500.KS is wrong (high).** GlobalWafers = 6488.TWO (med). Siltronic = WAF.DE (low) |
| `litho` | ASML, Nikon 7731.T, Canon 7751.T, Lasertec 6920.T | Carl Zeiss SMT (private) (med); AGC 5201.T (EUV blanks) (med); Cymer / Gigaphoton (low) | No Fidelity maps for the TSE codes; Lasertec = LSRCY |
| `dep-etch` | AMAT, LRCX, TEL 8035.T, ASM (`fidelity_symbol` ASM), "SCREEN / Kokusai" | NAURA 002371.SZ (med); AMEC 688012.SS (low) | **The ASM link points to Avino Silver (high).** TEL = TOELY. SCREEN 7735 / Kokusai 6525 tickers (low) |
| `implant-cmp` | ACLS, VECO, ENTG, SCREEN **6305.T** | Applied Materials (implant + CMP leader) (med); Ebara 6361.T (med); ACM Research (low) | **6305.T is wrong (high).** Axcelis–Veeco is still pending: China SAMR outstanding, close guided 2H 2026, no completion release through 2026-09-21 (low) |
| `metrology` | KLAC, ONTO, CAMT, NVMI | Lasertec on the SiC tab (low) | n/a |
| `materials` | TOK 4186.T, "JSR / DuPont / Fujifilm", "Linde / Air Liquide / Air Products", "Ecolab / Kurita" | Shin-Etsu resists, Merck (low); Resonac 4004.T (med) | **DuPont should be Qnity (Q) (high).** JSR is private (JIC) (low) |
| `packaging` | TSM CoWoS, AMKR, ASX, INTC EMIB-T | **DISCO 6146.T, BESI, Ibiden 4062.T, Unimicron 3037.TW, Ajinomoto 2802.T (high)**; ASMPT 0522.HK, K&S KLIC (med) | Add a scarcity frame (low) |
| `hbm-stack` | SK Hynix, MU, Samsung, "TSMC / ASE / Amkor" | **Hanmi 042700.KS, BESI, DISCO (high)**; ASMPT (med) | Bundle has a blank ticker (low) |
| `photomask` | PLAB, DNP 7912.T, Hoya 7741.T, "Toppan / Tekscend" | AGC (med) | **Tekscend Photomask = 429A.T, listed 2025-10-16 (med)** |
| `siph` | placeholders | See above (high) | n/a |
| `sic-epi` (red) | STM, WOLF, ON, IFX, ROHM, COHR | **Aixtron (high)**; Resonac (med) | n/a |
| `test` (yellow) | Advantest (`fidelity_symbol` "6857.T"), TER, FORM, AEHR (green), COHU | **Technoprobe TPRO.MI (high)**; KYEC 2449.TW (med); Micronics Japan, MPI, CHPT (low) | Advantest should map to ATEYY (med) |

### 5.2 Who-is-who (#layer-1 to #layer-9) and #bottlenecks

**Present:**

| Layer | Companies |
|---|---|
| Bottlenecks | TSM, AMKR, ASX, INTC; SK Hynix, MU, Samsung; ASML |
| L1 foundries | TSM, Samsung Foundry, INTC, GFS, UMC, SMIC, Hua Hong, TSEM, DB HiTek 000990.KS |
| L2 lithography | ASML, Nikon, Canon |
| L3 WFE | AMAT, LRCX, TEL, ASM, SCREEN (6305.T, wrong), Kokusai 6525.T, ACLS, VECO |
| L4 inspection/metrology | KLAC, Lasertec, ONTO, CAMT, NVMI |
| L5 packaging | TSM, ASX, AMKR, INTC, JCET, Tongfu, PTI 6239.TW |
| L6 test | Advantest, TER, COHU, FORM, AEHR |
| L7 photomasks | PLAB, DNP, Tekscend, Hoya |
| L7 wafers | Shin-Etsu, SUMCO, GlobalWafers, Siltronic, SK Siltron |
| L7 resists / CMP | TOK, JSR, DD, Fujifilm, ENTG, MRK.DE |
| L7 gases / UPW | LIN, AI.PA, APD, 4091.T, ECL, Kurita |
| L8 fab construction | Exyte, J, Samsung C&T |
| L9 SiC/GaN | STM, ON, IFX, WOLF, ROHM, COHR |

**Errors:**
- SCREEN 6305.T (high).
- SK Siltron 008500.KS (high).
- DuPont should be Qnity (high).
- "Taiyo Nippon Sanso" was renamed **Nippon Sanso Holdings** in Oct 2020. (med)
- Tekscend has no ticker; it is 429A. (med)
- Wolfspeed note is stale. (med)
- Unlisted-looking listed names need tickers. (med/low)
  - SMIC 0981.HK / 688981.SS.
  - Hua Hong 1347.HK / 688347.SS.
  - GlobalWafers 6488.TWO.
  - Siltronic WAF.DE.
  - Samsung C&T 028260.KS.
  - JCET 600584.SS.
  - Tongfu 002156.SZ.
- **Navitas is missing from the L9 list** although it is in Figure D and stages.json. (med)
- GlobalFoundries blurb says "14 nm and older"; its leading node is 12 nm. Mention Fotonix. (low)
- TSMC blurb says "3 nm / 5 nm"; add N2. (low, verify)
- Coherent is still labelled "(II-VI)". (low)

**Missing:**
- **New "Dicing / grinding / thinning" row: DISCO (high).** The hub already has `analysis/companies/disco.html`.
- **L5 (high):** BESI, Hanmi, Ibiden, Unimicron, Ajinomoto. Medium: ASMPT, K&S, Resonac packaging materials. Low: Kinsus, Nan Ya PCB, AT&S.
- **L2:** Carl Zeiss SMT, private (med). Cymer / Gigaphoton (low). **L7:** AGC (med).
- **L3:** NAURA and Ebara (med). AMEC, ACM Research and Accretech (low).
- **L6:** Technoprobe (high). KYEC (med).
- **L7:** JX Advanced Metals sputtering targets (med). Resonac (med; the hub has a Resonac page).
- **L9:** Aixtron (high). SICC and Innoscience (med). Mitsubishi Electric and Fuji Electric (low).
- **L1:** Rapidus, private (low). **L8:** United Integrated Services (low).

**Other fixes:**
- The #why callout cites the internal path `/workspace/hub-extraction-ai-sections.md`. (low)
- "Green tickers = strong seed BUY thesis" conflicts with the not-advice framing. (low)
- Duplicate `id="arrow"` markers appear in one document; the same pattern exists on the timelines page. (low)

---

## 6. Data files

### `data/hardware_companies.json` (17 rows)
**Present:** NVDA, AMD, AVGO, INTC, MU, 000660.KS, 005930.KS, ANET, CSCO, APH, GLW, SMCI, DELL, HPE, CLS, VRT, Asetek.

**Issues:**
- The hardware page claims to be "aligned with" this file but shows ~40 tickers. Missing include MRVL (in 5+ stages), CRDO, ALAB, LITE, COHR, FN, TEL, LNVGY, 2317.TW, 2382.TW, MPWR and VICR.
- SK hynix needs the SKHY ADR.
- Stale theses: "HBM3E sold out through 2025-2026", "HBM4 early development" and "HBM3E qualification progress".
- The Asetek note covers only the Oslo delisting; the CQXA takeover and the Copenhagen delisting (Apr 2024) are missing.
- `report: "reports/*.html"` paths point to a folder that does not exist in this repo.
- STRONG_BUY / SELL ratings are attributed to "Claude fundamental analysis" with May-2026 price targets on a public "not advice" site.

### `data/hardware_suppliers.json` (11 rows)
- **Out of scope:** it holds power and electrification names (ETN, SU.PA, VRT, 6501.T, ON, WOLF, IFX.DE, STM, AEHR, FLNC, TSLA). Merge it into `power_suppliers.json` or rename it.
- Wolfspeed "Restructuring underway" is stale; restructuring ended 2025-09-29.
- SiC market-share and market-cap figures are undated.

### `data/semiconductor_companies.json` (18 rows)
**Present:** TSM, INTC, UMC, GFS, ASML, AMAT, LRCX, KLAC, 8035.T, ASX, AMKR, ENTG, 4063.T, AEHR, ON, IFX.DE, STM, WOLF.

**Issues:**
- TSM catalyst text "Capex 2-56B for 2026" is garbled.
- "Intel Foundry Services" was renamed Intel Foundry in 2024.
- KLAC is filed under "Lithography & Equipment" rather than inspection.
- The WOLF thesis predates the Chapter 11 emergence.
- STM "181x P/E" and AEHR "$350M market cap" are stale point-in-time figures.
- The page shows ~70 names against 18 seeds; ASM, Advantest, TER, DISCO, Lasertec and BESI have no entries.

---

## 7. Verified facts used (with dates)

| Fact | Date | Source |
|---|---|---|
| Nokia completed the Infinera acquisition | 2025-02-28 | intelligentcio.com |
| Synopsys completed Ansys; ANSS delisted | 2025-07-17 | investor.synopsys.com |
| HPE closed the Juniper acquisition | Jul 2025 | hpe.com |
| AMD sold ZT Systems manufacturing to Sanmina | Oct 2025 | ir.amd.com |
| Ciena completed Nubis | 2025-10-07 | investing.com |
| SoftBank completed Ampere | 2025-11-26 | Bloomberg |
| Marvell completed Celestial AI ($3.25B) | 2026-02-02 | sdxcentral |
| Axcelis–Veeco merger **not closed**; SAMR pending, close guided for 2H 2026 | Q2 release 2026-08-06; IR list through 2026-09-21 | Axcelis IR |
| Cerebras IPO, Nasdaq CBRS | 2026-05-13/14 | cerebras.ai |
| SK hynix ADR, Nasdaq SKHY | 2026-07-10 | stockanalysis.com; financialexpress |
| Ecolab closed CoolIT (~$4.75B) | 2026-07-02 | Business Wire |
| Doosan closed 70.6% of SK Siltron | 2026-07-31 | sedaily |
| Qnity spin from DuPont, NYSE: Q | 2025-11-01 | prnewswire |
| Tekscend Photomask (429A) listed | 2025-10-16 | tokyoipo |
| Kioxia (285A) listed | 2024-12-18 | Wikipedia |
| Sandisk (SNDK) spun off from WDC | 2025-02-24 | Wikipedia |
| Altera: Silver Lake 51% | 2025-09-15 | Wikipedia |
| NVIDIA–Groq license plus hires | 2025-12-24 | TechCrunch; Wikipedia |
| SoftBank acquired Graphcore | Jul 2024 | TechCrunch |
| Wolfspeed exited Chapter 11 | 2025-09-29 | wolfspeed.com |
| Asetek delisted after CQXA takeover | Apr 2024 | marketscreener |
| Schneider completed Motivair (75%) | 2025-02-28 | Euronext |
| Amphenol closed CommScope CCS ($10.5B) | 2026-01-12 | Wikipedia |
| Broadcom TH6 volume shipping (Davisson CPO variant) | 2026-03-12 | financialcontent, 2026-03-26 |
| Coherent PhotonLink launch | 2026-09-21 | coherent.com; rcrwireless |
| Lumentum DWDM ELSFP | 2026-09-21 | Lumentum IR |
| Ayar Labs funding | 2026-03-04 and 2026-09-17 | nextplatform; storagenewsletter |
| NVIDIA 800 VDC partner list | 2025-05-20 | developer.nvidia.com |
| NVIDIA CPO partner list | 2025-03-18 | nvidianews |
| Eaton–Boyd Thermal: announced 2025-11-03 ($9.5B) | completed Mar 2026 | Morningstar headline, snippet |
| Credo–DustPhotonics; Marvell–XConn; Qualcomm–Alphawave; Arm AGI CPU | 2025–2026 | snippets; confirm with primary releases |

**Ticker identities confirmed on stockanalysis.com quote pages (2026-10-02):**
- Japan: 7735 SCREEN; 6305 Hitachi Construction Machinery; 6525 Kokusai; 5016 JX Advanced Metals; 5706 Mitsui Kinzoku; 3110 Nittobo; 4091 Nippon Sanso.
- Korea: 008500 Iljeong Industrial; 042700 Hanmi.
- Taiwan: 3081 LandMark; 2455 VPEC; 3105 WIN; 6488 GlobalWafers; 6274 TUC; 2383 EMC; 2368 Gold Circuit; 3017 AVC; 2345 Accton; 6669 Wiwynn; 3665 BizLink.
- China: 688498 Yuanjie; 300394 TFC; 300476 Victory Giant; 002463 WUS; 002475 Luxshare; 688008 Montage; 002851 Megmeet.
- Hong Kong: 2631 SICC; 2577 Innoscience.
- Italy: TPRO Technoprobe.
- US: ASM = Avino Silver.
- Not checked individually: InnoLight 300308.SZ, Eoptolink 300502.SZ, Fujikura 5803.T, Sumitomo Electric 5802.T and Furukawa 5801.T. These are the standard codes from the brief.
