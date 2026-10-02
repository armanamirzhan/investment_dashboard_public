> **Working research report, published as-is for transparency (2 Oct 2026).** Written by an AI research agent for the Claude Investment Summary pages. Every figure carries a date and source; "secondary" marks relays; "my estimate" marks the agent's arithmetic. Prices are a point-in-time snapshot. Not investment advice. Final picks and targets on the website may differ from the rankings here.

# I3 — Scale-up interconnect: copper today, co-packaged optics and optical I/O next, optics into memory later

**Research date:** Friday 2 October 2026. Asian prices are 2 Oct closes. US prices are 1 Oct closes. Shanghai and Shenzhen prices are 30 Sep closes, because those markets are shut for the 1–7 Oct holiday. Euronext prices are 1 Oct closes.
**Prepared for:** this public educational hub (hardware / photonics section). This is educational research, not investment advice.
**Conventions:** Every figure carries a date and a numbered source, listed in §13. "(secondary)" marks aggregator, relay or blog sources. "My estimate" marks my own arithmetic or judgment. Valuation multiples combine Yahoo Finance prices with the LSEG consensus that Yahoo shows [1] (secondary), unless another source is named.

---

## 0. Bottom line (what an engineer sees that the tape may not)

1. **Inside the rack, copper is not going away before about 2029. Scale-up optics arrives first *between* racks.**
   - NVIDIA's own disclosures keep the GPU↔NVSwitch link in copper:
     - Vera Rubin NVL72 (2H 2026) uses a "massive NVLink copper spine": about 5,000 copper cables, more than two miles in total, in four cartridges [4].
     - Rubin Ultra (2027) keeps NVL72 Oberon racks on copper. The Kyber NVL144 rack is also copper (a midplane) [4][7][9].
     - Optics enter at scale-up as a second NVLink tier *across racks*. This starts with NVL576 (eight Oberon racks, "copper and direct optical connections") [4] and continues with Kyber NVL1152 for Feynman ("similar direct optical interconnects for rack-to-rack scale-up") [4].
   - The Next Platform reads NVIDIA's roadmap as "in 2028 Nvidia will add CPO to NVLink 8 ports" [8].
   - SemiAnalysis's view: NVL576 ships in test volumes, and Feynman NVL1152 is where scale-up co-packaged optics (CPO) actually ramps [9].
   - **My reading:** the optical scale-up market in 2027–28 is *additive* demand. It extends NVLink and UALink domains beyond one rack rather than replacing in-rack copper. Large-scale displacement of in-rack copper is a 2029–30+ event, at Feynman's successor or later.

2. **The "copper wall" is showing up as a printed-circuit-board (PCB) and materials wall, not a SerDes wall.**
   - SemiAnalysis reported on 5–6 Jul 2026 that Kyber NVL144 slipped to 2028 because the PCB midplane is hard to manufacture. The fallback NVL72x2 design was cancelled, and NVL576 will likely be delayed or low-volume [13][14]. NVIDIA replied only that "Our roadmap is intact" [13][14].
   - The board involved is a 78-layer stack: three 26-layer sections laminated together, close to 1 m², with ≤25 µm line/space and ±5% impedance tolerance, for 448G-class signalling. It replaces more than 20,000 cables [13].
   - Trade press says it uses M9 laminate with quartz cloth and PTFE hybrids [15] (secondary).
   - Morgan Stanley's teardown of the VR200 NVL72 puts PCB content at **$116.7k per rack versus $35.1k for GB300 (+233%)** [52][61] (secondary).

3. **The owners of the materials bottleneck have been de-rated while the shortage numbers got worse.**
   - Goldman Sachs (20 May 2026) estimates the *effective* supply deficit for HVLP3-and-above copper foil at **28% / 39% / 38% for 2026 / 2027 / 2028** [50] (secondary).
   - Morgan Stanley (16 Sep 2026): high-end glass cloth is short by **40% in 2026**, and HVLP4 foil by **31% in 2027 and about 20% in 2028** [51] (secondary).
   - NVIDIA has reportedly gone around laminate makers to lock foil and glass-cloth capacity directly [53][54] (secondary).
   - Even so:
     - Mitsui Kinzoku (5706.T) is **−53%** from its May closing high and trades at **16.7x FY3/27 consensus EPS** [1][2].
     - Nittobo (3110.T) is **−47%** from its high [1][3].
   - These are the clearest "obvious to engineers, not priced" situations in this scope.

4. **Scale-out CPO is in volume production but still small.**
   - NVIDIA's Quantum-X Photonics is in production deployments. Spectrum-X Photonics had begun shipping to select partners by late July 2026 (TrendForce, 27 Jul) [17][18].
   - Broadcom's 51.2T Bailly is in volume, and Tomahawk 6 Davisson has shipped since Oct 2025 [17][18][22].
   - Foxconn is reportedly NVIDIA's sole ODM for CPO switch cabinets and has raised its target to more than 50k cabinets over 2026–27 [21] (secondary).
   - TSMC's photonic IC (PIC) capacity is said to rise from about 500 to 10k wafers per month in Q2 2026 and to 15k by Q4 2026 [19] (secondary).
   - Per-port power drops by about 3x (roughly 20 to 5–7 pJ/bit; my estimates from vendor and analyst watts, §6.3).

5. **Some of this is fully priced.**
   - Astera Labs: 55.7x CY27 EPS and 20x CY27 EV/sales.
   - Lumentum: within 1% of its 52-week closing high ($1,053.09, 11 May) at about 31x trailing EV/sales (my estimate).
   - POET: about $1.7M of trailing revenue against a $1.3B market cap (Yahoo, 2 Oct 2026) [1].
   - Glass-core substrates: Absolics has pushed mass production to 2027 [70].
   - Hybrid bonding in HBM has been pushed out to HBM4E/HBM5 after JEDEC relaxed the stack-height limit to 775 µm [67].
   - The "optics replaces in-rack copper in 2027" narrative is not supported by NVIDIA's own roadmap.

6. **The cheapest interconnect toll road is Broadcom at 17.7x FY27 (Oct-27) consensus EPS** [1].
   - Behind that multiple: Tomahawk 6, Davisson CPO, Tomahawk Ultra for scale-up Ethernet, and SerDes, plus EML/CW/VCSEL laser capacity that is "more than tripling" [24].
   - The stock is −29% from its June high, even though FY28 AI-semiconductor revenue is guided to about $230B [24] (secondary call summary).

7. **Ranked shortlist (§9):**
   1. Mitsui Kinzoku (5706.T)
   2. Broadcom (AVGO)
   3. BE Semiconductor (BESI.AS)
   4. Nittobo (3110.T)
   5. TSMC (TSM)
   6. Coherent (COHR)
   7. Credo (CRDO)
   8. Elite Material (2383.TW)
   9. Co-Tech (8358.TWO)
   10. Marvell (MRVL)

---

## 1. Claims checked (September 2026)

| Claim (Sept 2026) | Verdict (2 Oct 2026) | Evidence |
|---|---|---|
| HVLP copper foil deficit 28% / 39% / 38% for 2026 / 27 / 28, per Goldman | **Confirmed.** Goldman report dated 20 May 2026: effective (yield-adjusted) HVLP3+ shortfall 28% / 39% / 38%; HVLP3+ addressable market $216M (2025) → $2.4B (2028). Morgan Stanley (16 Sep) is less severe: HVLP4 gap 31% (2027), about 20% (2028) | [50][51] (secondary) |
| NVIDIA intervened in supply | **Confirmed (secondary).** NVIDIA is said to contact glass-cloth and copper-foil suppliers directly and to push a "direct consignment model". Shanghai Metals Market (SMM, 30 Sep) describes NVIDIA as bypassing CCL makers to lock capacity more than a year ahead (paraphrase) | [53][54] |
| Mitsui Kinzoku about 20x earnings, −44% from highs | **Outdated / partly wrong.** A **10-for-1 split (each share became 10) took effect 1 Oct 2026**, record date 30 Sep [49]. At ¥2,553.5 (2 Oct): 18.3x the company's FY3/27 EPS forecast (¥139.83) [2][3]; 16.7x consensus ¥153.1 [1] (my estimate). Down 53% from the split-adjusted closing high of ¥5,490 (13 May) and 56% from the intraday high of ¥5,770 (27 May) [1]. Even on 17 Sep (¥2,123.5, split-adjusted) it was −61% from the closing high, not −44% (my estimate). Up 20% since 17 Sep (my estimate) | [1][2][3][49] |
| Nittobo about 90% share of T-glass | **Confirmed** (Nikkei, Apr 2026, via Postation). Nittobo also holds more than 80% of low-Dk cloth | [55] (secondary) |
| Nittobo prices +20–30% | **Confirmed for 1H 2026** [55]. **But** Postation (21 Sep) reports Nittobo will make no further price increases, prioritising volume and share, as Taiwanese rivals win customer approvals [56][58] | [55][56][58] (secondary) |
| Nittobo new supply mid-2027 | **Confirmed.** The ¥15B Fukushima building completes Dec 2026, with production in Jan–Mar 2027 [56]. Output "reaches the market around mid-2027" [55] | [55][56] |
| Nittobo tripling by FY2028 | **Partly.** Per Postation's reading of Nittobo's June securities report, the ¥15B Fukushima expansion could deliver about 3x current output if all of it goes to T-glass cloth [55]. Postation reports capacity "doubling by FY2027", FY2026 capex of ¥45B (2.1x) and a mid-term-plan capex of ¥120B (up from ¥80B) [56] | [55][56] |
| Nittobo shares −56% from highs | **Was correct on 17 Sep** (¥2,876 vs ¥6,580 intraday). **Now ¥3,370: −47% vs closing high ¥6,390 (7 May), −49% vs intraday high** | [1][3] |
| BESI −35% from highs | **Now about −38% to −40%:** €191.40 at the 1 Oct close is −40% vs the closing high of €320.30 (22 Jun); the 2 Oct intraday price of €197.8–199.5 is about −38% (my estimates). On 17 Sep (€181.50) it was −43%, so the "−35%" note was already stale | [1] |
| Marvell, Astera and Credo at peak multiples | **Partly wrong.** Astera is still rich: 55.7x CY27 EPS, 20.4x CY27 EV/sales. Marvell 39.6x FY28 (Jan-28) EPS. **Credo has de-rated to 21.7x FY28 (Apr-28) EPS.** All three are 15–31% below their June highs (my estimates from [1]) | [1] |
| OCP Global Summit 13–15 Oct 2026 | **Correct the date to 12–15 Oct 2026, San Jose.** AMD CEO keynote on 12 Oct | [88][77] |
| NVIDIA earnings 19 Nov 2026 | **Unconfirmed.** NVIDIA had not announced a date as of 2 Oct. Yahoo's calendar estimate is 17 Nov [1]. 19 Nov 2026 is a Thursday, and NVIDIA normally reports on a Wednesday (my observation; 18 Nov would fit) | [1] |

---

## 2. Value-chain map (scope: scale-up copper → CPO → optical I/O → optics into memory)

Format: Company — listing (US OTC/ADR) — role — latest evidence.

### 2.1 Scale-up fabric silicon (switches, protocols)

| Company | Listing (US line) | Role | Evidence / status |
|---|---|---|---|
| NVIDIA | NASDAQ:NVDA | NVLink 6/7/8, NVSwitch, NVLink Fusion; Spectrum-X / Quantum-X Photonics | NVLink 6: 3.6 TB/s per GPU, 260 TB/s per NVL72 rack [4]. NVLink 8 CPO in 2028 [8] |
| Broadcom | NASDAQ:AVGO | Tomahawk 6 (102.4T), Tomahawk Ultra (scale-up Ethernet), SerDes, CPO (Bailly / Davisson) | Tomahawk Ultra adoption "starting this quarter and in FY2027" (call, 2 Sep 2026) [24] (secondary) |
| Marvell | NASDAQ:MRVL | Custom XPUs; XConn (PCIe/CXL switching, UALink team); Celestial AI Photonic Fabric | XConn closed 10 Feb 2026; Celestial closed 2 Feb 2026 [26] |
| Astera Labs | NASDAQ:ALAB | Scorpio X/P fabric switches (custom ASIC scale-up, NVLink Fusion, UALink 2027); Aries / Taurus | Scorpio X expected to become the largest product line in Q3 2026; more than 10 customers engaged [33] |
| AMD | NASDAQ:AMD | Helios rack (MI450), UALink / Ethernet scale-up; Enosemi (CPO) | Helios "expected to start shipping in the second half of fiscal year 2026" (10-Q) [77] |
| Cisco / Arista | NASDAQ:CSCO / NYSE:ANET | Ethernet switching, CPO platforms | Scale-out mainly |
| Upscale AI (private) | — | Scale-up networking start-up | "$500M bet" (headline only, Fierce, 1 Jul 2026) |

### 2.2 SerDes, retimers, AEC DSPs, PCIe/CXL

| Company | Listing (US line) | Role | Evidence |
|---|---|---|---|
| Credo | NASDAQ:CRDO | Active electrical cables (AECs), retimers (Screaming Eagle 100G, Blue Heron 200G), optical DSPs and PICs, Active LED Cable | FY27 revenue growth >85%, optical >$600M [30] |
| Astera Labs | NASDAQ:ALAB | Aries PCIe 6 retimers (PCIe 6 >50% of Q2 revenue), Taurus Ethernet retimers, Leo CXL | [33] |
| Montage Technology | SSE:688008, HKEX:6809 | PCIe retimers, memory-interface chips, CXL (product roles not re-verified here) | ¥202.31 (30 Sep), 45x 2027 consensus EPS [1] (my estimate) |
| Semtech | NASDAQ:SMTC | Linear redrivers for active copper and LPO (role not re-verified) | $186.59 (1 Oct) [1] |
| Broadcom, Marvell | — | Optical DSPs, retimers | — |

### 2.3 Copper cable, connector and backplane suppliers

| Company | Listing (US line) | Role | Evidence |
|---|---|---|---|
| Amphenol | NYSE:APH | NVLink backplane: Paladin HD (GB200, primary of three sources) [12] and Paladin HD2 (VR NVL72) [10]. DensiLink OverPass flyover (GB200/300, exclusive) removed in Rubin's cable-less compute tray [10]. CommScope fibre | Q2 2026 IT-datacom sales +89% (+63% organic), 43% of sales [36] (secondary) |
| TE Connectivity | NYSE:TEL | High-speed connectors and cables | Digital Data Networks orders +70% YTD (FQ3 2026) [37] |
| Luxshare Precision | SZSE:002475, HKEX:2475 | Copper cable assemblies (NVLink role not verified here) | ¥49.43 (30 Sep), 15.3x 2027 EPS [1] (my estimate) |
| FIT Hon Teng (Foxconn Interconnect) | HKEX:6088 | Copper interconnect; CPO LGA sockets and external-laser cages for Bailly "in full production since May 2025" | [17]. Optical ramp in 2027 [87] (secondary) |
| BizLink | TWSE:3665 (Lux GDS) | Cable and AEC assembly | NT$2,540 (2 Oct), 21x 2027 EPS [1] (my estimate) |
| Molex (private, Koch) | — | Connectors; acquired Teramount (detachable fibre-to-chip) | Closed 7 May 2026 [75] |
| Lotes | TWSE:3533 | Sockets | — |

### 2.4 PCB fabricators and IC-substrate makers

| Company | Listing (US line) | Role | Evidence |
|---|---|---|---|
| Victory Giant (VGT) | SZSE:300476, HKEX:2476 (VGTHY) | Rubin daughterboards; AI-server PCB revenue up about 11x in 2025 | [63] (secondary). Hong Kong IPO Apr 2026 |
| WUS Printed Circuit | SZSE:002463 | Reportedly the core Rubin backplanes; small-batch 224G boards, researching 448G | [63][61] (secondary) |
| Gold Circuit Electronics | TWSE:2368 | High-layer AI server and switch boards | NT$1,105, 17.2x 2027 EPS [1] (my estimate) |
| TTM Technologies | NASDAQ:TTMI | Data centre and networking 40% of Q2 sales, +91% YoY | [46] |
| Shennan, Tripod, Zhen Ding, ISU Petasys, Nan Ya PCB, Kinsus | 002916.SZ / 3044.TW / 4958.TW / 007660.KS / 8046.TW / 3189.TW | High-layer and HDI boards, substrates | Nan Ya PCB −9%, Kinsus −8%, Zhen Ding −5% on the Kyber report, 6 Jul [15] (secondary) |
| Ibiden / Unimicron / AT&S | 4062.T (IBIDY) / 3037.TW / ATS.VI | ABF substrates (GPU, switch, CPO packages) | Ibiden 53x FY3/28 EPS [1] (my estimate) |

### 2.5 Copper-clad laminate (CCL) and resins

| Company | Listing (US line) | Role | Evidence |
|---|---|---|---|
| Elite Material (EMC) | TWSE:2383 | No. 1 CCL maker by 2025 revenue (Prismark); 38.6% share of high-speed CCL; M9 sampling 2H26, volume 2027 | [62] (secondary) |
| Taiwan Union Technology (TUC) | TPEx:6274 | High-speed CCL | NT$1,620; 21x 2027 EPS [1] (my estimate) |
| ITEQ | TWSE:6213 | High-speed CCL | At a 52-week high (2 Oct) [1] |
| Panasonic | TSE:6752 | Megtron (the M-grade naming reference); up to +30% on some high-speed CCL from 1 Sep 2026 | [61] (secondary) |
| Doosan (Electro-Materials) | KRX:000150 | High-speed CCL | — |
| Shengyi Technology | SSE:600183 | CCL (volume leader) | — |
| Kingboard Laminates | HKEX:1888 (KGBLY) | CCL (+10–20% from 28 Aug 2026) | [61] (secondary) |
| Nan Ya Plastics | TWSE:1303 | CCL, glass cloth (+20–25%); weaves for Nittobo | [61][57] (secondary) |
| SABIC / Asahi Kasei / Mitsubishi Gas Chemical | 2010.SR / 3407.T (AHKSY) / 4182.T | PPO/PPE resins; BT resin | (roles not re-verified) |

### 2.6 Copper foil (HVLP / VSP, ultra-thin carrier foil)

| Company | Listing (US line) | Role | Evidence |
|---|---|---|---|
| **Mitsui Kinzoku** | TSE:5706 (MMSMY, XZJCF) | VSP™ HVLP leader, now shifting HVLP5 to mass production; MicroThin™ carrier foil (IC substrates, 800G/1.6T modules); FaradFlex® | [47][48] |
| **Co-Tech Development** | TPEx:8358 | Second certified HVLP4 supplier; Goldman projects its HVLP3+ share at 5% (2025) → 53% (2028) | [50] (secondary) |
| Furukawa Electric | TSE:5801 (FUWAY) | Copper foil (plus fibre) | MS supplier list [51] (secondary) |
| Fukuda Metal Foil; Circuit Foil Luxembourg; Chang Chun (private) | Fukuda: TSE-listed (ticker not verified here) | HVLP foil. Morgan Stanley names Fukuda [51]. A trade relay counts Luxembourg Copper Foil with Mitsui and Co-Tech in the group holding 80–90% of effective high-end supply [61] | (secondary) |
| Solus Advanced Materials; Lotte Energy Materials; Jiujiang Defu | 336370.KS / 020150.KS / 301511.SZ | Challengers. Defu HVLP4 yield ">60% and climbing" | [61] (secondary) |

### 2.7 Glass yarn and cloth (T-glass, low-Dk, quartz)

| Company | Listing (US line) | Role | Evidence |
|---|---|---|---|
| **Nittobo (Nitto Boseki)** | TSE:3110 (NBCLF) | About 90% of T-glass (low CTE) and more than 80% of low-Dk; next-generation "Vlex" (CTE 2.8 → about 2.0 ppm/°C) in 2028+ | [55][56] (secondary) |
| Asahi Kasei | TSE:3407 (AHKSY) | Entered quartz cloth for AI substrates, Apr 2026 | [55] (secondary) |
| Taiwan Glass; Fulltech Fiber Glass | TWSE:1802; TPEx:1815 | T-glass challenger (yield problems); low-Dk yarn and cloth | [53][50] (secondary) |
| Grace Fabric (Hongho) | SSE:603256 | Premium weaver; ASP +147.6% YoY in 1H26 | [61] (secondary) |
| China Jushi; Sinoma (Taishan) | 600176.SS; 002080.SZ | E-glass price rises (Jushi's 7th rise of 2026 in Sept) | [61] (secondary) |
| Shin-Etsu; Feilihua | 4063.T; 300395.SZ | Quartz (Q-glass) cloth and fibre. Q-glass "booked through end-2027" | [61] (secondary) |

### 2.8 CPO, optical engines and silicon-photonics foundries

| Company | Listing (US line) | Role | Evidence |
|---|---|---|---|
| **TSMC** | TWSE:2330 (NYSE:TSM) | COUPE optical engines (NVIDIA Spectrum-X / Quantum-X, Broadcom Davisson, Ayar TeraPHY); SoIC; CoWoS | PIC capacity ramp [19] (secondary) |
| Broadcom | AVGO | Bailly / Davisson optical engines on COUPE | 16 x 6.4T Davisson DR engines, about 70% lower power [22] |
| NVIDIA | NVDA | Silicon-photonics engines in Quantum-X / Spectrum-X | [17][18] |
| Marvell (Celestial AI) | MRVL | Photonic Fabric chiplet, optical multichip interconnect bridge (OMIB), memory appliance | [11][26] |
| Ciena (Nubis) | NYSE:CIEN | 2D-fibre-array optical engines; Vesta 6.4T pluggable engine | [76] |
| Intel | NASDAQ:INTC | OCI chiplet (about 5 pJ/bit in 2024); glass optical bridge; glass core | [11] |
| GlobalFoundries | NASDAQ:GFS | Monolithic silicon photonics | $48.68; 18.6x 2027 EPS [1] |
| Tower Semiconductor | NASDAQ:TSEM | SiPho / SiGe foundry (PH18DA, TPS45PHD); $4B Japan optical hub | [80] (secondary) |
| Lightmatter (private) | — | Passage M1000 / L200 / L20 CPX; Guide lasers; vClick detachable fibre-array unit (FAU) | [71] |
| Ayar Labs (private) | — | TeraPHY optical I/O chiplet on COUPE; SuperNova light source | [72][73] |
| Xscape, Scintil, OpenLight, Enlightra, Avicena, Nubis (acq.), Teramount (acq.), Enosemi (acq.) | private / acquired | Comb and multi-wavelength lasers, III-V-on-Si, microLED, couplers | [11][75][76][77][78] |
| POET Technologies | NASDAQ:POET | Optical interposer engines | $7.64, $1.3B market cap, near-zero revenue [1] |

### 2.9 Lasers, external light sources (ELS) and indium phosphide (InP)

| Company | Listing (US line) | Role | Evidence |
|---|---|---|---|
| Lumentum | NASDAQ:LITE | Ultra-high-power CPO CW lasers, ELS modules, EMLs, OCS | Initial ELS order; UHP CPO laser demand rising [42]. Shipping ">30% below" demand [43] |
| Coherent | NYSE:COHR | InP lasers, VCSELs, SiPh; PhotonLink | CPO scale-out ramp Q4 2026 [41] |
| Broadcom | AVGO | EMLs, CW lasers, VCSELs | "More than tripling" capacity [24] (secondary) |
| Sumitomo Electric / JX Advanced Metals / AXT | 5802.T (SMTOY) / 5016.T / NASDAQ:AXTI | InP substrates and lasers | JX to invest ¥120B through FY2030, up to 10x InP capacity (TrendForce, 16 Jun 2026 headline) |
| Mitsubishi Electric | 6503.T | EML / DFB | — |
| LandMark Opto, LuxNet, Elite Advanced Laser | 3081.TWO / 4979.TWO / 3450.TW | Epitaxy and lasers | [20] (secondary) |

### 2.10 Fibre, fibre-array units (FAUs) and connectors

| Company | Listing (US line) | Role |
|---|---|---|
| Corning | NYSE:GLW | Fibre, MMC connectors, glass |
| Fujikura / Sumitomo Electric / Furukawa | 5803.T (FJIKY) / 5802.T / 5801.T | Fibre; Sumitomo FlexBeamGuidE 90° fibre for 2D arrays [11] |
| Browave / FOCI / TFC Optical | 3163.TWO / 3363.TWO / 300394.SZ | FAUs, shuffle boxes, passives |
| Seikoh Giken | 6834.T | Ferrules and connectors (role not verified) |

### 2.11 Assembly, ODM and test

| Company | Listing | Role | Evidence |
|---|---|---|---|
| Hon Hai / Foxconn Industrial Internet | 2317.TW / 601138.SS | Reported sole ODM for NVIDIA CPO switch cabinets | [21] (secondary) |
| Fabrinet | NYSE:FN | Optical module and engine assembly | NVIDIA 16.3% of FY26 revenue (27.6% in FY25) [45] |
| Celestica / Micas / Delta / Accton | NYSE:CLS / private / 2308.TW / 2345.TW | CPO switch systems (Bailly via Micas and Delta [18]; Celestica and Micas as Broadcom TH6 contract manufacturers [11]) | [11][18] |
| ASE-SPIL / Amkor | 3711.TW / NASDAQ:AMKR | Packaging (Broadcom fan-out wafer-level packaging) | [11] |
| Advantest; ficonTEC (private) | 6857.T | Silicon-photonics and optical-engine test | — |

### 2.12 3D integration tools and glass substrates

| Company | Listing (US line) | Role | Evidence |
|---|---|---|---|
| **BE Semiconductor (Besi)** | Euronext:BESI (BESIY) | Die-to-wafer hybrid bonding, thermo-compression bonding (TCB), photonics die attach | 21 hybrid-bonding customers [64] |
| Applied Materials | NASDAQ:AMAT | Kinex hybrid-bonding line with Besi; holds an equity stake in Besi (size not re-verified) | [66][67] |
| ASMPT | HKEX:0522 (ASMVY) | TCB; hybrid bonding with EV Group | [67] |
| EV Group (private) | — | Wafer-to-wafer bonding | [67] |
| Tokyo Electron | TSE:8035 (TELWY) | Bonding and front-end for SoIC | [69] (secondary) |
| Hanmi / Hanwha Semitech | 042700.KS / — | HBM TCB; hybrid bonders for HBM (2027) | [67] |
| Disco / Adeia / Onto / Camtek / K&S | 6146.T / ADEA / ONTO / CAMT / KLIC | Thinning, IP, metrology, bonding | — |
| SKC (Absolics) | KRX:011790 | Glass-core substrates; mass production slipped to 2027 | [70] |
| Intel, Samsung Electro-Mechanics, LG Innotek, Corning | — | Glass core, glass carriers | [70] |

---

## 3. Copper scale-up today and its limits

### 3.1 What ships in 2026

- **Vera Rubin NVL72 (Oberon):**
  - 72 Rubin GPUs and 36 Vera CPUs on a "sixth-generation NVLink copper spine".
  - About 5,000 copper cables, more than two miles in total, in four modular cartridges.
  - 3.6 TB/s per GPU and 260 TB/s per rack.
  - "On track to ship in the second half of 2026" (NVIDIA, 16 Mar 2026) [4].
  - NVIDIA's 26 Aug release says Vera Rubin is "in full production" [5].
- **How Rubin doubles per-GPU bandwidth:** NVLink 6 runs *simultaneous bidirectional* SerDes on the copper backplane, 224G each way on one differential pair, giving "448G per electrical lane". It does not raise baud rate or modulation (SemiAnalysis, 25 Feb 2026) [10]. This is the copper-friendly route. True 448G per direction on copper is "another challenging feat with an uncertain time to market" [11].
- **Rubin's compute tray is cable-less:**
  - The GB200/300 tray's most valuable cable, Amphenol's exclusive DensiLink OverPass flyover, is gone. It is replaced by Paladin HD2 board-to-board connectors and a quartz-cloth "Orchid" board and midplane that carry PCIe 6 across the tray [10].
  - SemiAnalysis adds that NVIDIA "is currently exploring the option of downgrading back to glass fiber cloth" because quartz cloth is expensive and hard to process [10].
  - **Implication:** value is migrating from copper cables to PCB materials and connectors.
- **NVIDIA's own framing:**
  - "Copper is the best connectivity, if you can use it. It's very cost effective, very cheap, and consumes zero power" (G. Shainer).
  - "We're going to do both" (J. Huang on copper vs optical scale-up) [16].
  - The Next Platform's summary: "Copper when you can, optics when you must" [8].

### 3.2 Rubin Ultra and Kyber: where copper gets hard

| Platform | Rack | Scale-up domain | Scale-up medium | Timing (per source) |
|---|---|---|---|---|
| Rubin | Oberon | NVL72 | Copper | 2H 2026 [4] |
| Rubin Ultra | Oberon | NVL72 | Copper | 2027 [7] |
| Rubin Ultra | Oberon x8 | **NVL576** (two-tier NVLink) | Copper in the rack + optical between racks; CPO "much more likely" than pluggables | 2027 in test volumes [9]. "Likely delayed or limited to small volumes" (SemiAnalysis, Jul 2026) [14] |
| Rubin Ultra | Kyber | NVL144 | **Copper midplane** ("no CPO used for scale up") | Planned 2027 → **2028** per SemiAnalysis [13][14]. NVIDIA: "roadmap intact" |
| Feynman | Kyber x8 | **NVL1152** | Copper in the rack + **CPO on the switch between racks**; NVLink 8 CPO | 2028 [4][8][9]. Register: Feynman "mid-to-late 2028" [16] |

Sources: NVIDIA blog [4]; Lockwood's GTC table [7]; SemiAnalysis [9][13]; NextPlatform [8]; The Register [16].

**Kyber physics, as reported:**
- Each Rubin Ultra GPU has 14.4 Tb/s one-way of scale-up bandwidth through an 80-differential-pair connector to the midplane (72 pairs used at 200 Gb/s bidirectional) [9].
- The full rack needs 72 NVLink 7 switch chips [9].
- The orthogonal backplane is 78 layers (3 x 26), about 1 m², with ≤25 µm line/space and ±5% impedance [13].
- It uses M9 CCL, quartz cloth and PTFE hybrids [15] (secondary).
- **The market's reaction (6 Jul):** Ibiden −8.37%, Kingboard Laminates up to −18% intraday, Nan Ya PCB −9%, EMC limit-down [15] (secondary). The market treated the news as a *demand delay*. The engineering reading is that **qualified ultra-low-loss materials and ultra-high-layer process capability are now the binding constraint on scale-up domain size.** That favours the few qualified suppliers.
- **Counter-evidence:** Taiwanese supply-chain sources say "M9 materials at the CCL level is not an urgent short-term requirement" (M8 combinations remain viable). They expect the T-glass shortage to "gradually ease in the first half of 2027" [15] (secondary).

### 3.3 Copper reach

- Passive copper at 800G / 1.6T: "beyond one or two meters, passive copper suffers from extreme signal attenuation". AECs "stretch that to several meters, roughly a row of racks" (HyperFRAME, 1 Oct 2026) [83].
- The OCP "Open Silicon Photonics for AI Systems" white paper (Lightmatter-led, 13 Aug 2026) says SerDes rates "approaching 448G" shrink copper's reach "to tens of centimeters" [71]. That is the optics camp's argument, not neutral.
- Pluggable optics sit 15–30 cm of copper trace or flyover away from the switch ASIC [11]. That electrical hop is what NPO and CPO remove.

### 3.4 AECs, retimers and scale-up switch silicon

**Credo (FQ1 FY27, quarter ended 1 Aug 2026):**
- Revenue $479.0M (+114.7% YoY); non-GAAP gross margin 68.0%.
- FQ2 guide $525–535M [29].
- AECs remain the largest business. Growth went "from more than doubling in 2025 to more than tripling in 2026". Credo has "deep relationships with 5 hyperscalers" [30].
- Retimer revenue hit a record on scale-up deployments of Screaming Eagle (100G) and Blue Heron (200G) [30].
- New lines:
  - Optical revenue >$600M in FY27 (ZeroFlap optics, SiPh PICs and optical DSPs each >$100M).
  - NPO for scale-up, with design wins ramping in FY28.
  - Active LED Cable (microLED, 30 m reach), demonstrated at OCP in October with revenue in FY28.
  - OmniConnect memory gearbox in FY28 [30].
- Customer concentration: direct customers A 43% and B 28% (10-Q) [31]; the top four customers were 84% of revenue at 33% / 28% / 13% / 10% (call) [30].
- SemiAnalysis expects Meta to use 1.6T AECs for NIC-to-top-of-rack links with VR200, ramping 2H CY2026, and xAI to use 1.6T AECs at leaf, spine and core: "this can give Credo plenty of pricing power" [10].

**Astera Labs (Q2 2026):**
- Revenue $392.4M (+104% YoY); Q3 guide $540–560M [32].
- Scorpio X is expected to become the largest product line in Q3, a quarter earlier than prior guidance. More than 10 customers engaged. Content per XPU is expected to grow "beyond $1,000" [33].
- UALink-enabled Scorpio X in 2027. Near-packaged optics in volume in 2027; CPO-enabled Scorpio "2028 and beyond" after the aiXscale acquisition [33].
- Customer concentration: A 29%, B 25%, C 15%, D 13% (Q2) [34].

**Broadcom:**
- AI networking revenue up more than 2.5x YoY.
- Tomahawk 6 "deployed in pretty much all of the AI hyperscalers".
- Tomahawk Ultra (scale-up Ethernet) adoption "starting actually this quarter and in FY2027" (2 Sep 2026 call) [24] (secondary).

**Marvell:**
- Expects scale-up network components (UALink, ESUN, NVSwitch-class, plus Celestial) of "on the order of $300 million" in FY28, about $150M of it Celestial hardware (The Next Platform's reading of the 27 Aug call) [28] (secondary).

**UALink:**
- The 2.0 specification was published on 7 Apr 2026, before any 1.0 silicon had shipped [84].

**LightCounting (27 Apr 2026):**
- Data-centre switch sales grow +86% in 2026.
- Scale-up switch ASICs grow at a 53% CAGR.
- A merchant UALink / ESUN market emerges from 2026.
- NVLink 8 CPO was added, which "significantly increased our sales forecast for 2029 and beyond" [82].

### 3.5 Non-NVIDIA scale-up

- **Google TPU 8i ("Boardfly"):** 4-chip blocks wired into 32-chip groups with **copper**, then 36 groups linked by **optical circuit switches** into pods of up to 1,024 chips. TPU 8t superpods hold 9,600 chips (Tom's Hardware, 27 Apr 2026) [81]. Optical scale-up already runs in volume at Google, but through pluggable optics plus OCS rather than CPO. SemiAnalysis: Google is "the hyperscaler that is most hesitant to deploy CPO", for reliability reasons [11].
- **AWS:**
  - SemiAnalysis expects Celestial AI's Photonic Fabric to ship with **Trainium 4**. Celestial estimated a $1B revenue run-rate by end-CY2028 [11].
  - Trainium 3's universal baseboard (28–30 layers) moves to HVLP4 foil (Goldman) [50] (secondary).
- **AMD:** Helios racks ship in 2H FY2026 [77]. Lisa Su keynotes OCP on 12 Oct [77].

---

## 4. PCB and laminate materials: the under-appreciated choke point

### 4.1 Content per rack is stepping up

- Morgan Stanley's VR200 NVL72 teardown (May 2026) [52] (secondary):
  - PCB $116.7k per rack vs $35.1k for GB300 (+233%).
  - Rack price $7.8M vs $3.99M.
  - About 600k MLCCs per rack.
- SemiAnalysis: high-end PCB area per tray is about 2.3x GB300 [10]:
  - Main boards upgrade from M7 to M8/M9.
  - Signal layers go from HVLP2 to **HVLP4 copper foil "across the board"**.
  - Glass cloth upgrades; quartz is still debated.
- Goldman [50] (secondary):
  - The VR200 mid-board (44 layers) and switch board (24 layers) use M9 laminate with HVLP4.
  - 1.6T switches from 2H26 use M9 with HVLP4/HVLP5.
  - Copper-foil processing is only about 14% of M9 laminate cost, so foil price rises pass through easily.

### 4.2 HVLP copper foil

**Demand and supply (Goldman, 20 May 2026)** [50] (secondary):
- HVLP3+ demand: 679 t/month (2025) → 5,206 t/month (2028), a 97% CAGR.
- Nominal capacity: 1,057 → 4,977 t/month.
- *Effective* capacity (70–80% yields, 10–20% line-switching losses): 803 → 3,759 t/month.
- Result: effective deficits of 28% / 39% / 38%.
- HVLP4 demand in 2H26 is at least 560 t/month, above Mitsui Kinzoku's roughly 490 t/month HVLP4 limit.
- Mitsui's effective HVLP3+ capacity: 718 / 870 / 1,140 t/month in 2026 / 27 / 28.
- Gross margin is 40–60% for high-end HVLP vs 0–10% for commodity HTE foil.

**Market share is shifting.** Goldman sees Co-Tech's HVLP3+ share rising from 5% to 53% by 2028 [50]. SMM says "Mitsui Mining and Taiwan's Co-Tech control 80–90 percent of effective high-end supply" [54] (secondary).

**Mitsui Kinzoku's own disclosures (FY2026 Q1 briefing, 7 Aug 2026)** [48]:
- Q1 revenue ¥201.6B, operating income ¥21.0B.
- Full-year guide raised to operating income ¥94B and net income ¥80B.
- ¥42B of copper-foil capex to 2030:
  - VSP 720 → 1,400 t/month.
  - MicroThin 4.9M → 8M m²/month.
  - FaradFlex 75k → 355k m²/month.
- MicroThin average FY2026 volume raised from 200–250k to **more than 600k m²/month**. It is "currently used in almost all 800G optical transceivers", and the company expects that to continue at 1.6T.
- VSP price increases took effect Oct 2025 and Jul 2026 ("selective").
- The HVLP4-and-above share of VSP volume is about 45% in 1H and about 60% in 2H.
- VSP volume is slightly below plan because customer qualification of the Malaysia plant is late ("procedural"; no share impact expected).
- On competition: rivals are entering "lower HVLP categories". Mitsui focuses on the higher grades, where "the number of competitors capable of consistently producing them … remains limited".
- Copper-foil ROIC: 52% in FY2025, target 64% in FY2030.

**Mitsui Kinzoku's long-range plan (17 Aug 2026)** [47]:
- A new Malaysia plant from 2031.
- VSP capacity path, in t/month: FY2025 720, FY2026 840, FY2027 1,000, FY2028 1,200, FY2030 1,400, FY2031 2,000, FY2032 2,600.
- "Exploring" 5,000 t/month.
- "Shifting HVLP5-graded products to the mass production phase".

### 4.3 Glass cloth: three different physics problems

| Type | Property | Where it matters | Leader | Evidence |
|---|---|---|---|---|
| T-glass (low-CTE) | CTE about 2.8 ppm/°C, near silicon's 2.6 | Warpage in large ABF/BT substrates; CoWoS and SoIC packages; CPO substrates of 110 x 110 mm [11] | Nittobo, about 90% | [55][60] |
| Low-Dk (NE / "2nd-gen") | Low dielectric constant | 224G board traces (M8/M9) | Nittobo >80%, plus Taiwan and China entrants | [55][61] |
| Q-glass (quartz) | Lowest Dk, low CTE, hard to process | M9, Kyber midplane, Rubin Orchid board | Shin-Etsu (named by Morgan Stanley), Feilihua (quartz fibre), Asahi Kasei (entered Apr 2026) | [10][15][51][55] |

**Pricing and tightness (secondary):**
- T-glass prices +20–30%; CCL lead times 8–10 → more than 20 weeks [55].
- 7628-grade cloth averaged RMB 9.9/m in Q3 2026 (+RMB 5.8 YoY). Second-generation low-Dk cloth is up more than 200% in 2026 [61].
- Changjiang Securities' demand path for second-generation low-Dk cloth: 7M m (2025) → 43M m (2026) → 170M m (2027) [61].
- Precision looms are "effectively single-sourced from Japan" and booked out to 2030. Q-glass orders are booked through end-2027 [61].

**Nittobo's response — the key nuance:**
- Raised FY3/27 guidance on 1 Aug 2026: operating profit ¥30.0B (+¥9.2B) on revenue ¥141.6B [57] (secondary).
- Will *not* raise prices further. Doubling capacity, with Nan Ya weaving about 20% in 2027 [55][56][58] (secondary).
- **The HBM-style pricing signature is therefore weaker here than the September note assumed. The upside is volume-led, not price-led.**

### 4.4 CCL

**Elite Material (EMC), Q2 2026** [62] (secondary):
- Revenue NT$47.27B (+110%); net income NT$9.87B; EPS NT$27.55; gross margin 33.9%.
- No. 1 CCL by 2025 revenue (Prismark).
- 38.6% of high-speed CCL.
- M9 sampling 2H26, volume 2027.

**Market size and price passes:**
- Morgan Stanley sizes CCL at $19B (2025) → $47B (2030) [51][61] (secondary).
- Price increases are now reaching board shops (Sep 2026): Panasonic up to +30%, Nan Ya +20–25%, Kingboard +10–20% [61] (secondary).

### 4.5 High-layer PCB capacity

- Deutsche Bank counts about RMB 101.2B of PCB expansion commitments since the start of 2026 [61] (secondary).
- AI boards use about 50% more equipment time per m².
- Laser-drill and LDI tools have lead times of 24 months or more [61] (secondary).
- Shengyi Electronics' RMB 2.26B high-end HDI project is a 36-month build, landing in 2029 [61] (secondary).
- Victory Giant denies that it is a Rubin bottleneck. It says customers have issued 2027–28 forecasts. Per a quoted analyst, it supplies daughterboards while WUS supplies the core backplanes [63] (secondary).

### 4.6 What could break the materials thesis

1. **Capacity and price restraint.** Nittobo is doubling capacity without further price rises. Mitsui VSP capacity rises 39% from FY2025 to FY2027 (720 → 1,000 t/month) [47] (my estimate). Co-Tech is taking HVLP4 share [50].
2. **Specification downgrades.** NVIDIA may drop quartz cloth back to glass cloth [10]. M8 combinations remain viable for parts of the Rubin family [15].
3. **Kyber delay.** If it is real, M9 midplane volume moves from 2027 to 2028 [13].
4. **A Chinese capacity wave** (RMB 101B), with possible oversupply in 2028–29 (my estimate).
5. **CPO cannibalising pluggables from 2028.** This would hit MicroThin's optical-transceiver demand, a risk for Mitsui in 2028+ (my estimate).

---

## 5. Co-packaged optics in scale-out switches: status at October 2026

**NVIDIA**
- Quantum-X Photonics (Q3450, 144 x 800G across 18 silicon-photonics engines on detachable sub-assemblies, 18 removable external light sources) "entered production deployments this year" [17].
- Spectrum-X Photonics was due in 2H26 at up to 512 x 800G [17]. It "has begun shipping … to select partners" and "delivers up to 400 Tb/s" (TrendForce, 27 Jul 2026) [18].
- Spectrum-6 SPX: 102.4 Tb/s, 512 lanes, 200 Gb/s CPO [4].
- 26 Aug: Spectrum-6 systems "supporting both pluggable and co-packaged optics … are arriving across the world's gigascale AI factories" [5].
- NVIDIA says its photonics switches use 4x fewer lasers, with 3.5x better power efficiency and 10x resiliency (vendor figures) [43].

**Broadcom**
- Bailly (51.2T) has been in volume at Micas Networks since 2024. TH6-Davisson (102.4T; 16 x 6.4T engines on TSMC COUPE; BCM78919) began deliveries in Oct 2025. A 3.2T VCSEL near-packaged-optics line was added at OFC 2026 [17][22].
- Broadcom logged more than 1M cumulative 400G-equivalent port-hours at Meta "without a single link flap" [17].
- Meta's ECOC 2025 paper: Bailly optics plus laser at 5.4 W per 800G vs 15 W for pluggables (−65%) [11].

**Supply chain**
- **TSMC:**
  - Chairman C.C. Wei on the 16 Jul 2026 earnings call: CPO "has already begun mass production" [20] (secondary).
  - PIC capacity: about 500 wafers/month → 10k (Q2 2026) → 15k (Q4 2026) → ≥25k by 2028; about 78M PICs a year at 10k wafers/month (TrendForce citing Commercial Times) [19] (secondary).
  - First-generation COUPE is in mass production in pluggable form; the 6.4T co-packaged second generation targets about 2027 [17].
- **Foxconn:** reportedly NVIDIA's sole ODM for all-optical CPO switch cabinets. Target raised from >10k (2026) to >50k cumulative over 2026–27 [21] (secondary).
- **Lasers:**
  - Coherent's CPO scale-out ramp starts Q4 CY2026; NVIDIA is its public CPO long-term-agreement customer [41].
  - Lumentum reports "increasing demand for ultra-high-power CPO lasers, an initial order for ELS modules" [42].
  - NVIDIA's laser partner list (VLSI 2025): Lumentum (high-power DFBs), Ayar (DFB arrays), Innolume (quantum-dot comb lasers), Xscape / Enlightra / Iloomina (pumped nonlinear comb lasers) [11].
- **Sockets and fibre:** FIT LGA sockets and laser cages for Bailly [17]; Molex–Teramount [75]; Lightmatter vClick FAU [71].
- **Open CPX MSA** (OFC 2026): Ciena, Coherent, Marvell, Molex, Samtec, TeraHop, later Lightmatter and Credo, standardising a *socketed* engine interface [17][71][30].

**How fast is "volume"?**
- **Bull case:**
  - LightCounting (quoted in the CPX launch): fewer than 1M CPO + NPO ports in 2025, rising to more than 100M a year within five years [17].
  - A secondary relay cites LightCounting as expecting CPO at "nearly 30%" of 800G + 1.6T ports in 2027 [20] (secondary; treat with caution).
- **Bear / timing case:**
  - SemiAnalysis's 9 Jun note pushed volume CPO to 2027 for scale-out and 2028–29 for full-scale production. LITE fell about 8% and AAOI 17% that day [17][85] (secondary).
  - Its yield arithmetic: 32 engines at 95% attach yield gives about 19% compound package yield. This is disputed, because it ignores binning, screening and NVIDIA's spare engines [17].
  - SemiAnalysis also expects "limited adoption for the first wave of CPO scale-out switches" [11].
- **My read:** 2026–27 is the qualification ramp (thousands of cabinets). 2028 is when CPO takes a material share of new 1.6T/3.2T ports. Socketed near-packaged optics carries much of the volume in 2027–29 [17].

---

## 6. Optical I/O for scale-up and into compute and memory

### 6.1 NVIDIA

- **Rubin NVL72 is copper (2026).**
- **NVL576 (2027, test volume):**
  - Two-tier NVLink. The NVLink 7 switch has 144 ports: 72 go down to the GPUs over copper cartridges and 72 go out over optics to spine switches (Lockwood's reading) [7].
  - NVIDIA's internal GB200-based prototype of the multi-rack design is called "Polyphe" [4].
- **Feynman (2028):** NVLink 8 CPO; Kyber NVL1152 with copper inside the rack and CPO on the switch between racks [4][8][9].
- **Ecosystem:** NVLink Fusion now includes **Ayar Labs and Lightmatter** (both 2–3 Jun 2026) for CPO/NPO. This lets semi-custom XPUs connect to NVIDIA switch silicon [71][73].
- **SemiAnalysis (Jul 2026):** a "fully production-ready" CPO NVSwitch is "no earlier than the Feynman generation" [13].

### 6.2 Merchant and private optical I/O: status and timing

| Player | Architecture | Latest (dated) | Volume timing | Evidence |
|---|---|---|---|---|
| **Ayar Labs** (private) | TeraPHY UCIe optical-retimer chiplet on TSMC COUPE (SoIC-X EIC on PIC); SuperNova multi-λ external light source | $500M Series E at $3.75B (3 Mar 2026), total raised $870M [72]. +$150M (10 Sep), $650M raised in 2026, about $5B valuation [73] (secondary). NVLink Fusion (2 Jun 2026); Wiwynn rack partnership (11 Mar 2026) | Customers' volume ramps in 2028; qualification by 2H 2027 (CEO) [72]. Alchip test XPU: 8 engines, >8 Tb/s each, <25 ns [72] | [72][73] |
| **Lightmatter** (private) | Passage M1000 (4,000 mm² optical interposer, 114 Tb/s); L200 (32/64 Tbps 3D CPO); L20 NPO (6.4T); L20 CPX bidirectional; Guide lasers | L20 CPX + Open CPX (17 Sep 2026); OCP workstream (13 Aug 2026); NVLink Fusion (2 Jun 2026); Guide DR laser NIC (21 May 2026) [71]. Series D valuation $4.4B (Oct 2024; Business Wire headline) | NPO 2026/27 → CPO 2027–28 → M1000 2029+ [11] | [11][71] |
| **Celestial AI → Marvell** | Photonic Fabric chiplet (16T → 64T), OMIB (photonics in the interposer bridge), memory appliance (115.2T, 16 ASICs x 7.2T) | Closed 2 Feb 2026, total consideration **$3,533.7M** (cash $1,276.0M + 24.5M shares ($1,929.0M) + contingent $315.8M). Earn-out of up to 24.4M more shares through FY2029 [26] | About $150M in FY28 (The Next Platform) [28]; $1B run-rate by end-CY2028 targeted (SemiAnalysis; Trainium 4) [11] | [11][26][28] |
| **Nubis → Ciena** | 2D fibre-array optical engines (MZM) | $270M deal announced 22 Sep 2025 (Business Wire headline); in Ciena R&D spend (10-Q, Sep 2026) [76]. Ciena Vesta 6.4T pluggable engine (25 Feb 2026) | — | [11][76] |
| **Teramount → Molex** | Passive, detachable wafer-level fibre-to-chip coupler (TeraVERSE) | Agreement 15 Apr 2026; closed 7 May 2026; about $430M (Calcalist) [75] | Underpins scalable CPO assembly | [75] |
| **Enosemi → AMD** | SiPh design team | Acquired 28 May 2025 [77] | — | [77] |
| **Xscape Photonics** (private) | Multi-wavelength (8-λ) lasers ("FalconX") | $37M round, 11 Mar 2026 (Business Wire headline); named by NVIDIA as a comb-laser partner (VLSI 2025) [11] | — | [11][78] |
| **Scintil** (private) | III-V-on-SOI DWDM integrated lasers (8/16 colours); Tower partnership | Testing laser chips with customers (Reuters, 11 Mar 2026) [78] | — | [11][78] |
| **OpenLight** (private) | InP-on-Si PDK at Tower (PH18DA) | $50M Series A-1 (28 Apr 2026) [78] | — | [78] |
| **Avicena** (private) | microLED "LightBundle" (wide-and-slow) | Connectorised microLED demo at ECOC 2026 (17 Sep 2026) [78]; 1 Tbps LightBundle evaluation kits shipping (HPCwire headline, 18 Aug 2026) | Evaluation-kit stage | [78] |
| **Intel** | OCI chiplet (4 Tb/s, about 5 pJ/bit, 2024); detachable glass optical bridge (2025) | — | — | [11] |
| **POET** (listed) | Optical interposer engines | $7.64, $1.3B market cap (1 Oct 2026) [1]; near-zero revenue | — | [1] |

### 6.3 Energy-per-bit ladder (the integration story in one table)

| Link type | Power (as reported) | ≈ pJ/bit | Source |
|---|---|---|---|
| 800G DSP pluggable (DR4 / 2xFR4) | 15–17 W per 800G | **19–21** (my estimate) | [11][17] |
| 800G linear pluggable (LPO) | 7–8.5 W per 800G | **9–11** (my estimate) | [17] |
| Copper, 224G linear SerDes, both ends | about 5 pJ/bit per end | **about 10** | [11] |
| Broadcom Bailly CPO (Meta, ECOC 2025) | 5.4 W per 800G, including laser | **about 6.8** (my estimate) | [11] |
| NVIDIA Q3450 CPO | 4–5 W per 800G (SemiAnalysis estimate) | **5–6** (my estimate) | [11] |
| NVIDIA 1.6T CPO link | 9 W vs 30 W pluggable (vendor figure) | **about 5.6 vs 18.8** (my estimate) | [17] |
| Intel OCI (OFC 2024) | — | **about 5** | [11] |
| Ayar TeraPHY gen-1 | 10 W at 2 Tb/s | **about 5** (my estimate) | [11] |
| Celestial Photonic Fabric | E-O-E about 2.5 + laser about 0.7 | **about 3.2** (company claim) | [11] |
| Avicena microLED | transmitter only, 200 fJ/bit | **about 0.2 (Tx only)** | [78] (headline, 29 Sep 2025) |

**Engineering read:**
- Each step deeper into the package removes a re-timing or re-drive stage:
  - DSP pluggable to CPO saves about 3x.
  - CPO to on-package optical I/O saves about another 1.5–2x.
  - Wide-and-slow microLED and VCSEL links promise sub-pJ/bit, but over short reaches (≤10–30 m) and in early silicon (my estimate).
- In-rack passive copper, meanwhile, costs only the SerDes energy at each end. This is why NVIDIA keeps copper inside the rack until SerDes rate, reach and manufacturability force the change.

### 6.4 Wavelength-division (WDM) vs wide-and-slow vs narrow-and-fast

- **Narrow-and-fast (NVIDIA / Broadcom today):** few wavelengths at 200G per lane, microring or MZM modulators, high-power CW lasers. It reuses the SerDes ecosystem, but laser power and count are the choke points (Lumentum UHP CPO lasers; Broadcom tripling its EML/CW/VCSEL capacity) [24][42]. Scintil argues that single-λ high-speed CPO is less efficient than multi-λ [11].
- **WDM / multi-λ (Ayar SuperNova 16-λ, Scintil 8/16-λ, Xscape 8-λ, Enlightra combs, Lumentum DWDM ELSFP for the OCI MSA; Lightmatter's L20 CPX uses two-wavelength BiDi):** cuts fibre count and laser count per bit, but needs λ stability next to a hot XPU (ring thermal tuning). Lightmatter: its bidirectional link takes a 512-GPU pod from about 130k to 65k fibres, saving about 15% of scale-up interconnect cost (company analysis) [71].
- **Wide-and-slow (Avicena microLED, Credo Active LED Cable, Lumentum / Qualcomm / Corning 1060-nm VCSEL D2D at ECOC 2026):** very low energy per bit, multimode, short reach. It fits in-rack and die-to-die links, *the very place copper is strongest*. Revenue is FY28 at the earliest for Credo's cable [30][79].

### 6.5 Optics into memory

- **Celestial AI:** replaces an HBM stack with a Photonic Fabric chiplet to get around the "beachfront" limit. Its memory appliance pools memory inside the switch [11]. This is the most explicit "optics into memory" product with a public owner (Marvell), and it sits in the 2028 window [11][28].
- **Other memory-bandwidth moves are electrical or near-term:**
  - Credo OmniConnect gearbox (FY28) [30].
  - Astera Leo CXL [32].
  - Marvell XConn CXL switching [26].
  - NVIDIA BlueField-4 STX context-memory storage over Ethernet [4].
- **My judgment:** optically disaggregated HBM/DDR in production will start 2028+ at best, and later than optical scale-up of compute.

### 6.6 Engineering bottlenecks to optical I/O (ranked by my judgment)

1. **InP laser capacity.** Lumentum (five InP fabs) is shipping more than 30% below demand. NVIDIA put $2B into each of Lumentum and Coherent (Mar 2026) [43]. Coherent is doubling internal InP output by year-end and "more than doubling again by 2027" [38]. The Lumentum preferred was issued at $695.31/share (2 Mar 2026) [42].
2. **Advanced-packaging slots.** COUPE competes with CoWoS for the same 2.5D/3D resources (TrendForce) [18].
3. **Optical-engine yield and serviceability.** Hence the detachable-FAU, socketed-NPO and external-light-source standards (OIF ELSFP, Open CPX) [17].
4. **Fibre count and fibre attach** [71][75].
5. **Thermal stability of rings under a hot XPU** (the Passage debate: microrings are 10–100x more temperature-sensitive than MZMs/EAMs; Lightmatter says its control loops handle 0–105 °C) [11].

---

## 7. 3D and advanced packaging that enables deeper integration

**Hybrid bonding**
- TSMC SoIC bond pitch: 9 µm → 6 µm, with 4.5 µm by 2029 [67].
- Rubin Ultra and Feynman should lift SoIC use. TSMC plans about 10–15k wafers/month of SoIC in 2026, at about $6.8–7.0B per 10k wafers/month of capacity. Besi, Applied Materials and TEL are "expected to benefit first" [69] (secondary).
- COUPE itself bonds the electronic IC onto the photonic IC with SoIC-X copper-to-copper bonds [72].
- **HBM delay:** JEDEC raised the HBM height limit from 720 to **775 µm** in Jan 2026. HBM4 16-high therefore stays on microbumps, and hybrid bonding in HBM moves to HBM4E/HBM5 (about 2027 to the end of the decade) [67].
- Tool throughput: Applied/Besi Kinex about 1,600 die/hour; Besi Chameo about 2,000/hour [67].

**Besi, Q2-26 (23 Jul 2026)** [64]
- Revenue €249.9M (+68.7% YoY); orders €292.9M (+128.8%); gross margin 65.7%.
- Hybrid-bonding customers 15 → 21; repeat orders from two customers and "one new hyperscaler customer".
- Growth driven by "photonics, datacenter and hybrid bonding". Record trailing-12-month orders of €987.6M.
- Q3 guide: revenue +10–15% QoQ.
- Investor Day (18 Jun 2026): target model raised to €1.7–2.2B revenue at a 45–55% operating margin [65].
- Takeover interest from Lam and Applied (Reuters, 12 Mar 2026) [68].
- Applied Materials and Besi expanded their partnership on 1 Oct 2026 into Applied's EPIC Center, covering hybrid bonding, TCB, die-on-panel and "photonics-enabled interconnect for co-packaged optics" [66].

**Glass core and through-glass vias**
- SKC/Absolics pushed mass production to 2027 and is sampling AMD and AWS [70].
- Intel targets glass across all substrates by 2030 [70].
- **My judgment:** this is not a 2026–27 earnings driver.

**Detachable optical connectors:** Teramount (Molex) [75], Intel's glass bridge [11], Lightmatter's vClick dFAU [71].

---

## 8. Timeline answers and what is priced

### 8.1 When does optics replace copper *inside* the rack at volume?

- **2027:** pilot volumes of optical scale-up *between* racks (NVL576, possibly delayed). Scale-up CPO and NPO components ramp in 2H27:
  - Coherent: CPO scale-up and NPO in 2H 2027 [41].
  - Lumentum: scale-up volume production in 2H27, first deployments in 2028 [44] (secondary).
  - Astera: NPO in volume in 2027 [33].
- **2028:** **volume optical scale-up between racks**:
  - NVIDIA Feynman NVLink 8 CPO / NVL1152 [4][8].
  - Trainium 4 with Celestial [11].
  - Ayar customers [72].
  - Credo NPO wins in FY28 [30].
  - **Inside the rack, copper still dominates** (Kyber NVL144/NVL1152 use copper midplanes) [4][9].
- **2029–30+:** in-rack and chip-to-chip optical links. Coherent's chip-to-chip deployments are "around 2029 and 2030" [41]. Passage M1000 is 2029+ [11]. COUPE gen-3 brings optics inside the processor package [17].
- **Answer:** 2029+ for in-rack replacement. 2028 for volume optical scale-up beyond the rack. 2027 is the qualification year.
- **Swing factor:** if Kyber's 78-layer midplane does not yield, the case for optics *inside* the rack strengthens and could pull the timeline forward. That is a 2029 decision, not 2027 (my estimate).

### 8.2 Which copper names are hurt, and when?

- **2026–27: little harm. Copper content per rack is rising** (NVL72 cartridges [4], Kyber midplane [13], 1.6T AECs at Meta and xAI [10]).
- **2027–28:**
  - Copper "domain-extension" products lose a market, because NVL72x2 back-to-back racks were cancelled [13].
  - Pluggable-module DSP and assembly economics erode as CPO share rises. This hits Fabrinet's pluggable assembly, optical-DSP volume and MicroThin-in-transceiver demand, *partly offset* by CPO content for the same vendors.
- **2029+:**
  - In-rack NVLink copper backplanes and cables (Amphenol Paladin, twinax makers such as Luxshare / FIT / BizLink).
  - Scale-up copper retimers (Credo Blue Heron).
  - AECs between NIC and top-of-rack once NICs adopt CPO/NPO (Credo AEC, BizLink).
- **Least exposed:** PCIe/CXL retimers and switches inside servers (Astera Aries / Scorpio P, Montage), and PCB/CCL materials, because CPO packages and boards still need low-loss laminates and low-CTE glass.

### 8.3 Picks-and-shovels regardless of medium

- **TSMC:** CoWoS for copper-era GPUs plus COUPE for CPO plus SoIC [18][19][69].
- **Besi / Applied Materials:** hybrid bonding for SoIC and COUPE plus photonics die attach [64][66].
- **InP lasers and substrates:** Lumentum, Coherent, Broadcom, Sumitomo, JX, AXT. Every optical path needs an InP laser [43].
- **PCB materials:** HVLP foil, low-Dk/T-glass, M8/M9 CCL. Copper's longer life *increases* their demand, and CPO substrates (110 x 110 mm [11]) still need them.
- **Amphenol:** sells copper, fibre (CommScope) and power alike, so it is medium-agnostic [36].

### 8.4 Priced-in check (my estimates from [1]; prices at the 1 Oct close for US names)

| Ticker | Price | From 52-week closing high | Forward P/E (consensus) | EV/sales (consensus) | My view |
|---|---|---|---|---|---|
| ALAB | $356.42 | −26% (Jun 30) | 88.4x CY26, **55.7x CY27** | 31.8x CY26, 20.4x CY27 | **Priced.** Scorpio success is known |
| CRDO | $210.17 | −31% (Jun 22) | 33.3x FY27, **21.7x FY28** | 15.5x FY27, 10.0x FY28 | **De-rated.** Reasonable for >85% growth; concentration risk |
| MRVL | $268.08 | −15% (Jun 4) | 63.7x FY27, **39.6x FY28** | 13.3x FY28 | Fully valued; Investor Day 6 Oct |
| AVGO | $343.64 | −29% (Jun 2) | 29.5x FY26, **17.7x FY27** | 9.6x FY27 | **Cheapest toll road** |
| LITE | $1,045.78 | −1% (May 11) | 48.0x FY27, 30.1x FY28 | 14.6x FY27 | **Priced** (laser scarcity known) |
| COHR | $319.19 | −25% (Jun 2) | 33.9x FY27, **22.7x FY28** | 6.0x FY27 | Partly priced |
| APH | $85.67 | −3% (Jun 30) | 32.1x 2026, 26.1x 2027 | 5.3x 2027 | Priced (quality) |
| TSM | $459.20 | −4% (Jun 30) | 27.1x 2026, **20.9x 2027** | — | Fair |
| NVDA | $230.86 | −2% (May) | 24.8x FY27, **14.7x FY28** | — | Platform (out of scope) |

### 8.5 Demand spikes not in consensus — and where the hype outruns the engineering

**Not in consensus (my judgment):**
1. Ultra-high-layer PCB and M9 materials for Kyber-class backplanes in 2028.
2. MicroThin for 800G/1.6T transceivers: FY2026 volume guidance went from 200–250k to >600k m²/month in one revision, roughly 2.4–3x [48] (my estimate). CIOE raised 1.6T forecasts from about 10M to 25M+ units [61] (secondary).
3. Fibre and FAU counts in multi-rack scale-up pods [71].
4. External-light-source laser counts: "hundreds of millions" of devices [43].

**Hype ahead of engineering:**
1. In-rack optical NVLink in 2027.
2. MicroLED as a near-term copper killer.
3. Glass-core substrates in 2026–27.
4. Hybrid bonding in HBM4.
5. POET-style interposers vs COUPE's foundry scale.

---

## 9. Ranked shortlist (10 names)

> **How to read this:** these are educational observations for the hub. Consensus figures are LSEG data via Yahoo Finance, accessed 2 Oct 2026 [1] (secondary); some targets may be stale. P/E and EV/sales are my estimates from those inputs.

### #1 Mitsui Kinzoku — TSE:5706 (OTC: MMSMY ADR; XZJCF)

- **Products in focus:**
  - VSP™ HVLP4/HVLP5 electro-deposited foil for M8/M9 laminates.
  - MicroThin™ ultra-thin carrier foil for IC substrates and 800G/1.6T optical modules.
  - FaradFlex® embedded-capacitor laminate for AI switches.
- **Why the product matters:** at 224G-and-up signalling, conductor (skin-effect) loss depends on copper surface roughness [10]. HVLP4 is "across the board" on Rubin's main boards [10], and HVLP5 is entering mass production [47].
- **Why this company:**
  - The incumbent qualified supplier in the highest grades.
  - Copper-foil ROIC of 52% [48].
  - Capacity expansion is deliberately paced (VSP 720 → 1,200 t/month by FY2028) [47], while demand grows at a 97% CAGR (Goldman) [50].
  - MicroThin is described as having "nearly 100% global market share" in package-substrate grades by an independent blog [91] (secondary; unverified by the company).
- **Quantitative evidence:**
  - Goldman deficits 28% / 39% / 38% [50].
  - MicroThin FY2026 volume >600k m²/month vs 200–250k planned [48].
  - FY guide raised to operating income ¥94B and net income ¥80B; engineered-materials ordinary income forecast ¥78B (up from ¥67B) [48].
  - 2030 targets: operating income ¥150B group-wide, ¥130B for engineered materials [48].
- **Valuation snapshot:**
  - ¥2,553.5 (2 Oct 2026 close; post 1:10 split) [1][2].
  - Market cap ¥1,466B (about $9.3B; my estimate) [2].
  - P/E 18.3x company FY3/27 forecast [2]; **16.7x consensus FY3/27, 14.6x FY3/28** (my estimate).
  - EV/sales about 1.8x FY3/27 consensus revenue of ¥858B (my estimate).
  - −53% from the closing high (¥5,490, 13 May); +37% YTD [1].
  - Market cap is about 9.8x (EV about 10.2x) the company's ¥150B FY2030 operating-income target (my estimate).
- **Consensus:** Strong Buy (mean 1.3, n=10). Average target ¥4,782; high ¥6,890; low ¥3,200 (Yahoo/LSEG, 2 Oct 2026) [1] (secondary).
- **Risks / thesis-breakers:**
  - Co-Tech and Chinese foil makers win HVLP4/5 qualifications faster than expected (Goldman's 53% Co-Tech share path) [50].
  - Metals-segment swings: the smelting downgrade of ¥13.2B from gold/silver [48].
  - Malaysia VSP qualification delays [48].
  - CPO cuts pluggable volumes from 2028, a MicroThin risk (my estimate).
  - Kyber / M9 delays [13].
- **Dated catalysts:**
  - Q2 FY3/27 results about 10 Nov 2026 (Yahoo estimate) [1].
  - Monthly Taiwan CCL / PCB sales (around the 10th).
  - Rubin Ultra / Kyber timing updates at NVIDIA's results (mid/late Nov) [1].
  - HVLP5 qualification news.

### #2 Broadcom — NASDAQ:AVGO

- **Products in focus:**
  - Tomahawk 6 (102.4T) and TH6-Davisson CPO (16 x 6.4T engines on COUPE, about 70% lower optics power) [22].
  - Tomahawk Ultra scale-up Ethernet.
  - 200G SerDes.
  - EML / CW / VCSEL lasers.
  - 3.2T VCSEL NPO [17].
- **Why it matters:** it is the only merchant vendor across all three paths — copper scale-up (Ethernet), scale-out CPO and lasers.
- **Why this company:**
  - Broadcom-built CPO has the reliability data: >1M port-hours at Meta with no link flaps [17].
  - Laser capacity "more than tripling" [24] (secondary).
- **Quantitative evidence:**
  - Q3 FY26 revenue $29.6B (+86%); AI semiconductors $16.7B (+221%) [23].
  - Q4 guide $34.8B, AI $21.7B [23].
  - FY27 AI about $115B and FY28 about $230B (call) [24] (secondary).
  - AI networking >2.5x YoY [24].
- **Valuation snapshot:**
  - $343.64 (1 Oct 2026); market cap $1.64T [1].
  - **17.7x FY27 (Oct-27) consensus EPS $19.39**; EV/FY27 sales 9.6x (my estimate).
  - −29% from the closing high ($481.57, 2 Jun) [1].
- **Consensus:** Strong Buy (mean 1.26, n=47). Average target $531.3; high $715; low $215.9 (Yahoo/LSEG, 2 Oct) [1] (secondary).
- **Risks:**
  - XPU concentration (Google, Anthropic, OpenAI, Meta) and financing-loop optics: a $42B Anthropic loan (DIGITIMES commentary headline, 2 Oct 2026).
  - Gross-margin dilution from memory-heavy XPUs (75% in Q3) [24].
  - NVIDIA NVLink Fusion and UALink competition.
  - Most of the value is XPUs, not interconnect.
- **Catalysts:**
  - OCP 12–15 Oct [88].
  - FQ4 results about 9 Dec 2026 (Yahoo estimate) [1].
  - Tomahawk 7 / next CPO disclosures.

### #3 BE Semiconductor (Besi) — Euronext:BESI (OTC: BESIY ADR)

- **Products in focus:** die-to-wafer hybrid bonders (Kinex with Applied Materials; Datacon 8800 Chameo), TC Next, photonics die attach.
- **Why it matters:** the deeper photonics integrates (COUPE/SoIC bonding of electronic onto photonic ICs [72]; Feynman SoIC [69]), the more 3D bonding steps there are.
- **Why this company:**
  - 21 hybrid-bonding customers, including a new hyperscaler [64].
  - Strategic partner of Applied Materials, which holds an equity stake (EPIC Center expansion on 1 Oct 2026, no equity change) [66][67].
  - Takeover interest in Mar 2026 [68].
- **Quantitative evidence:**
  - Q2-26 revenue €249.9M (+68.7%), orders €292.9M (+128.8%), gross margin 65.7% [64].
  - Trailing-12-month orders €987.6M [64].
  - Target model €1.7–2.2B at a 45–55% operating margin [65].
- **Valuation snapshot:**
  - €191.40 (1 Oct 2026 close; about €199 intraday on 2 Oct) [1].
  - Market cap about €15.1B at the 1 Oct close (€15.8B at 2 Oct intraday; about $17–18B; my estimates).
  - **29.0x 2027 consensus EPS €6.59** at the 1 Oct close (30.3x at €199.5); EV/2027 sales about 11x (my estimates).
  - −40% from the closing high (€320.30, 22 Jun) [1].
- **Consensus:** Buy (mean 1.83, n=23). Average target €289.9; high €401; low €220 (Yahoo/LSEG, 2 Oct) [1] (secondary).
- **Risks:**
  - Hybrid bonding in HBM slipping further [67].
  - ASML or other entrants into hybrid bonding (Bits&Chips speculation).
  - Cyclical back-end orders; China.
  - Unwinding of the takeover premium.
- **Catalysts:**
  - **Q3-26 results 22 Oct 2026** [65].
  - Morgan Stanley TMT conference (18 Nov) [65].
  - TSMC SoIC / COUPE capacity commentary (15 Oct).

### #4 Nittobo (Nitto Boseki) — TSE:3110 (OTC: NBCLF)

- **Products in focus:** T-glass (low-CTE) and low-Dk NE-glass yarn and cloth; next-generation Vlex (CTE about 2.0 ppm/°C, 2028+).
- **Why it matters:** warpage control on large AI substrates (CoWoS, CPO packages) and low-loss 224G boards [55][60].
- **Why this company:** about 90% of T-glass and more than 80% of low-Dk [55].
- **Quantitative evidence:**
  - Q1 FY3/27: revenue ¥34.0B, operating profit ¥7.9B; FY operating-profit guide raised to ¥30.0B [57] (secondary).
  - Electronic materials revenue ¥14.59B (+29.5%) [56] (secondary).
  - FY2026 capex ¥45B; mid-term-plan capex ¥120B; capacity doubling by FY2027; Fukushima production Jan–Mar 2027 [56] (secondary).
  - Morgan Stanley: glass-cloth gap 40% in 2026 [51] (secondary).
- **Valuation snapshot:**
  - ¥3,370 (2 Oct 2026); market cap about ¥613B (about $3.9B) [1].
  - P/E 30.7x company FY3/27 forecast [3]; **28.7x consensus FY3/27, 22.3x FY3/28** (my estimate).
  - −47% from the closing high (¥6,390, 7 May); +61% YTD [1].
- **Consensus:** Buy (mean 1.8, n=9). Average target ¥4,532; high ¥5,500; low ¥3,300 (Yahoo/LSEG, 2 Oct) [1] (secondary).
- **Risks:**
  - **Self-imposed no-price-rise policy** [56][58].
  - Taiwanese and Chinese rivals gaining approvals [56].
  - Quartz substitution at the top end; NVIDIA possibly downgrading quartz to glass cuts both ways [10].
  - Supply-chain view that the T-glass shortage eases in 1H27 [15].
  - Trailing EPS is flattered by a roughly ¥37B one-off in FY3/26 net income; company FY3/27 net income guidance is ¥17B [59] (secondary). Use operating profit or consensus EPS, not trailing P/E.
- **Catalysts:**
  - Q2 results about 5 Nov 2026 (Yahoo estimate) [1].
  - Fukushima start-up, Jan–Mar 2027 [56].
  - Vlex sampling news.

### #5 TSMC — TWSE:2330 (NYSE:TSM ADR)

- **Products in focus:** COUPE (the only volume CPO engine platform for NVIDIA and Broadcom), SoIC (hybrid bonding), CoWoS.
- **Why it matters:** both the copper era (GPU packages) and the optical era (PICs, COUPE) run through it.
- **Quantitative evidence:**
  - PIC capacity about 500 → 10k (Q2 2026) → 15k (Q4 2026) → ≥25k wafers/month by 2028 [19] (secondary).
  - SoIC about 10–15k wafers/month in 2026 [69] (secondary).
  - CEO: CPO "has already begun mass production" (16 Jul 2026) [20] (secondary).
- **Valuation snapshot:**
  - ADR $459.20 (1 Oct); market cap $2.38T.
  - **20.9x 2027 consensus EPS** (ADR basis) (my estimate).
  - −4% from the high [1].
  - TWSE NT$2,500 (2 Oct) [1].
- **Consensus:** ADR average target $552.3, high $700, low $440 (n=20). 2330.TW Strong Buy (n=35), average NT$3,246.5, high NT$4,200, low NT$2,650 (Yahoo/LSEG, 2 Oct) [1] (secondary).
- **Risks:** geopolitics; capex intensity; COUPE second-source efforts (Intel, Samsung's 2029 CPO turnkey per a TrendForce headline, 1 Apr 2026).
- **Catalysts:** **Q3 results 15 Oct 2026** (Yahoo calendar) [1]; COUPE gen-2 (6.4T) about 2027 [17].

### #6 Coherent — NYSE:COHR

- **Products in focus:** UHP/CW InP lasers and ELS for CPO; PhotonLink integrated optics (CPO, NPO, chip-to-chip); 6-inch InP; VCSEL arrays; OCS.
- **Why it matters:** every CPO port needs external light. Coherent has an NVIDIA CPO long-term agreement [41] and "a strategic multi-year supply agreement with NVIDIA for advanced lasers" [39].
- **Quantitative evidence:**
  - Q4 FY26 revenue $2.05B (+34%); FQ1 guide $2.2–2.4B [38].
  - More than 10 CPO and more than 10 NPO engagements, plus more than 5 chip-to-chip; PhotonLink revenue ramps in Q4 CY2026 [40].
  - Doubling internal InP output by year-end, and more than doubling again by 2027 [38].
- **Valuation snapshot:**
  - $319.19 (1 Oct); market cap $62.5B.
  - **22.7x FY28 (Jun-28) consensus EPS**; EV/FY27 sales 6.0x (my estimate).
  - −25% from the high [1].
- **Consensus:** Buy (mean 1.58, n=23). Average target $412.5; high $500; low $280 (Yahoo/LSEG, 2 Oct) [1] (secondary).
- **Risks:** low gross margin (about 40%) [38]; Chinese transceiver price competition; FCC/China trade rules [86]; execution on 6-inch InP.
- **Catalysts:** FQ1 results about 4 Nov 2026 (Yahoo estimate) [1]; PhotonLink revenue start in Q4 CY26 [40]; OCP [88].

### #7 Credo — NASDAQ:CRDO

- **Products in focus:**
  - Purple ZeroFlap AECs (1.6T); scale-up retimers (Blue Heron).
  - 1.6T optical DSPs and SiPh PICs (Dust Photonics).
  - NPO for scale-up (FY28); Active LED Cable (FY28).
- **Why it matters:** it bridges the copper → optics transition inside one P&L.
- **Quantitative evidence:**
  - FQ1 revenue $479M (+115%); FY27 growth >85%; optical >$600M [29][30].
  - Inventory up $62.2M ahead of 2H ramps [30].
- **Valuation snapshot:**
  - $210.17 (1 Oct); market cap $39.5B.
  - 33.3x FY27 and **21.7x FY28** consensus EPS; EV/FY27 sales 15.5x (my estimate).
  - −31% from the closing high [1].
- **Consensus:** Strong Buy (mean 1.35, n=20). Average target $281.1; high $350; low $185 (Yahoo/LSEG, 2 Oct) [1] (secondary).
- **Risks / thesis-breakers:**
  - Concentration: top 4 end customers = 84% [30][31].
  - AECs displaced by CPO/NPO NICs (2028+).
  - Gross margin and costs: the stock fell from $226.19 (31 Aug) to $165.22 (2 Sep) after FQ1 — about −27% over two sessions (my estimate) [1].
  - Larger competitors (Broadcom, Marvell) in optical DSPs.
- **Catalysts:** **OCP 12–15 Oct (Active LED Cable demo)** [30]; FQ2 results about 30 Nov / early Dec (Yahoo estimate) [1].

### #8 Elite Material — TWSE:2383 (no US line)

- **Products in focus:** M7/M8 high-speed CCL; M9 (quartz / low-Dk hybrids) in 2027.
- **Why it matters:** the laminate is where foil, glass cloth and resin become a board. Qualification cycles run 12–18 months [62].
- **Quantitative evidence:**
  - Q2 2026 revenue NT$47.27B (+110%); net income NT$9.87B; gross margin 33.9%.
  - 38.6% share of high-speed CCL; Prismark's No. 1 [62] (secondary).
- **Valuation snapshot:**
  - NT$5,185 (2 Oct); market cap NT$1.86T (about $58B; my estimate).
  - 44.5x 2026 and **22.7x 2027** consensus EPS (my estimate).
  - −18% from the closing high (NT$6,350, 17 Aug); +226% YTD [1].
- **Consensus:** Strong Buy (mean 1.38, n=17). Average target NT$7,570; high NT$10,200; low NT$6,000 (Yahoo/LSEG, 2 Oct) [1] (secondary).
- **Risks:** squeeze on raw materials (foil and glass) [61]; M9 share contest (TUC, Doosan, Panasonic, Shengyi); Kyber delay [13]; consensus 2027 EPS assumes near-doubling.
- **Catalysts:** monthly sales (around the 10th); Q3 results about 28 Oct 2026 (Yahoo estimate) [1]; M9 volume in 2027 [62].

### #9 Co-Tech Development — TPEx:8358 (no US line)

- **Products in focus:** HVLP3/HVLP4 copper foil, as the second certified HVLP4 source.
- **Why it matters:** it is the swing supplier in a 28–39% deficit market [50].
- **Quantitative evidence:**
  - Goldman: share of HVLP3+ 5% (2025) → 53% (2028); HVLP3+ gross-profit contribution 8% → 77%; target NT$900 (20 May 2026) [50] (secondary).
  - Morgan Stanley target NT$730 (16 Sep 2026) [51] (secondary).
- **Valuation snapshot:**
  - NT$519 (2 Oct); market cap NT$131B (about $4.1B; my estimate).
  - 53x 2026 and **23.7x 2027** consensus EPS (my estimate).
  - −26% from the closing high (NT$700, 18 Jun); +79% YTD [1].
- **Consensus:** Strong Buy (mean 1.5, n=4). Average target NT$715; high NT$940; low NT$570 (Yahoo/LSEG, 2 Oct) [1] (secondary).
- **Risks:** yield ramp (70–80% industry yields) [50]; Chinese entrants (Defu HVLP4 yield >60%) [61]; small cap and liquidity; leaner moat than Mitsui.
- **Catalysts:** monthly revenue; Q3 results (Nov); HVLP5 qualification.

### #10 Marvell — NASDAQ:MRVL

- **Products in focus:**
  - Celestial AI Photonic Fabric and OMIB (optical scale-up and memory).
  - XConn PCIe/CXL and UALink switching.
  - 1.6T optical DSPs; custom silicon for the Google TPU ecosystem (inference accelerators, NICs, memory-interface controllers, near-memory compute per the 8-K) [27].
- **Why it matters:** it is the only listed owner of a full optical scale-up / optics-into-memory platform.
- **Quantitative evidence:**
  - Q2 FY27 revenue $2.739B (+37%); data centre $2.17B (+46%); Q3 guide $3.15B ±5% [25].
  - FY28 revenue outlook about $18B (call) [28] (secondary).
  - Celestial consideration $3.53B [26].
  - NVIDIA $2B Series A convertible preferred (31 Mar 2026; about 21.78M shares at about $91.84) [26].
  - Google warrant for up to 58.97M shares at $206.58, vesting per $500M of custom revenue [27].
- **Valuation snapshot:**
  - $268.08 (1 Oct); market cap $240.9B.
  - **39.6x FY28 (Jan-28) consensus EPS**; EV/FY28 sales 13.3x (my estimate).
  - −15% from the high [1].
- **Consensus:** Strong Buy (mean 1.43, n=43). Average target $291; high $400; low $210 (Yahoo/LSEG, 2 Oct) [1] (secondary).
- **Risks:** Celestial revenue small until FY29 (about $150M in FY28) [28]; dilution (earn-out, warrant, preferred) [26][27]; custom-silicon concentration.
- **Catalysts:** **Investor Day, 6 Oct 2026** [25]; FQ3 results about 1 Dec (Yahoo estimate) [1].

---

## 10. Also considered and rejected (one line each; data from [1] unless noted)

- **Astera Labs (ALAB):** excellent scale-up switch position [33], but 55.7x CY27 EPS and 20x CY27 EV/sales are priced past the bull case.
- **Lumentum (LITE):** a real choke point (InP; UHP CPO lasers) [42][43], but $1,045.78 is within 1% of its 52-week closing high at about 31x trailing EV/sales (my estimates).
- **Amphenol (APH):** the best medium-agnostic franchise [35][36], but it is 3% below its 52-week closing high at 26x 2027 EPS (my estimate). Rubin's cable-less tray removed its exclusive DensiLink content [10].
- **TE Connectivity (TEL):** 16.9x FY27 EPS and DDN orders +70% YTD [37], but AI is a minority of sales. Watch-list.
- **Fabrinet (FN):** 20.7x FY28 EPS and −40%, but NVIDIA share fell from 27.6% to 16.3% [45], and CPO moves engine assembly toward TSMC and Foxconn [21].
- **Victory Giant (300476.SZ / 2476.HK):** 14x 2027 EPS and −46%, but it reportedly supplies Rubin daughterboards rather than backplanes [63]; China's PCB capex wave (RMB 101B) [61]; access issues.
- **WUS (002463.SZ) and Gold Circuit (2368.TW):** credible high-layer PCB makers (Gold Circuit 17x 2027 EPS), but without the materials-level scarcity. WUS's backplane role is secondary-sourced only.
- **TTM (TTMI):** 18x 2027 EPS; data centre 40% of sales [46], but the A&D acquisition adds leverage (Epiq, $1.1B).
- **Taiwan Union (6274.TWO) and ITEQ (6213.TW):** CCL peers at 21–26x 2027 EPS; second to EMC in high-speed share.
- **Ibiden (4062.T):** substrates plus glass-core optionality, but about 53x FY3/28 EPS.
- **SKC / Absolics (011790.KS):** glass-core production slipped to 2027; loss-making [70].
- **Quartz-cloth names (Feilihua 300395.SZ; Asahi Kasei 3407.T):** NVIDIA is weighing a downgrade from quartz to glass [10]. Feilihua is at 56x; Asahi Kasei's AI exposure is diluted.
- **Grace Fabric (603256.SS):** about 77x forward P/E; already priced.
- **Montage (688008.SS):** 45x 2027 EPS; China; retimer competition.
- **Luxshare (002475.SZ):** cheap at 15x, but thin margins and an unverified NVLink cable share.
- **BizLink (3665.TW):** 21x 2027 EPS. AEC and cable assembly is the most CPO-exposed copper business from 2028+.
- **FIT Hon Teng (6088.HK):** 12x 2027 EPS and −54%; CPO sockets and ELS cages in production [17], but operating margin about 3.5% and optical revenue only from 2027 [87]. Watch-list.
- **Tower Semiconductor (TSEM):** strong SiPh/SiGe foundry with a $4B Japan expansion (target $3.6B revenue / $1.2B net income in FY2028) [80], but 36x 2027 EPS. NVIDIA and Broadcom CPO run on TSMC COUPE.
- **GlobalFoundries (GFS):** 18.6x; silicon-photonics optionality, but a smaller CPO footprint.
- **ASMPT (0522.HK), Applied Materials (AMAT), Hanmi (042700.KS):** bonding exposure is diluted (ASMPT, AMAT) or HBM-TCB-centric at 54x (Hanmi).
- **Sumitomo Electric / JX / AXT:** the InP thesis belongs in the lasers and photonic materials report (I2).
- **POET (POET), Lightwave Logic (LWLG):** pre-revenue or tiny revenue; the engineering path competes with foundry-scale COUPE.
- **NVIDIA (NVDA):** 14.7x FY28 consensus EPS, but a platform name outside this interconnect scope.
- **Hon Hai (2317.TW):** reported sole CPO-cabinet ODM [21], but a conglomerate, so CPO is immaterial to the whole.
- **Corning (GLW):** fibre and connectors belong in the photonics/DCI section.

---

## 11. Catalyst calendar (dated; "est." = Yahoo calendar estimate [1])

| Date | Event | Why it matters |
|---|---|---|
| Tue 6 Oct 2026 | Marvell Investor Day [25] | Celestial / UALink / optical-DSP targets |
| about 11 Oct 2026 | FCC optical-transceiver rule takes effect (30 days after 11 Sep publication) [86] (secondary) | China module supply |
| Mon–Thu 12–15 Oct 2026 | OCP Global Summit, San Jose; AMD keynote 12 Oct [88][77] | Credo Active LED Cable demo [30]; Open CPX / OCP CPO workstream [71]; rack specs |
| Thu 15 Oct 2026 (est.) | TSMC Q3 results | COUPE / SoIC / CoWoS capacity |
| Thu 22 Oct 2026 | Besi Q3-26 results [65] | Hybrid-bonding and photonics orders |
| about 28 Oct 2026 (est.) | Amphenol Q3; TE FQ4; Elite Material Q3 | IT-datacom, DDN, CCL margins |
| about 29 Oct 2026 (est.) | Ibiden, ASMPT | Substrates, bonding |
| 2–5 Nov 2026 (est.) | Fabrinet (2), Astera (3), Coherent and TTM (4), Lumentum and Nittobo (5) | CPO / laser ramp; glass-cloth volumes |
| about 10 Nov 2026 (est.) | Mitsui Kinzoku Q2; Gold Circuit | VSP / MicroThin volumes; HVLP pricing |
| 10 Nov 2026 (now 10 Jan 2027) | Original end of the US–China trade truce, extended to 10 Jan 2027 (I2 report, source S48). Indium licensing is not part of the truce | InP supply |
| mid/late Nov 2026 (date TBC; est. 17 Nov) | NVIDIA Q3 FY27 | Rubin ramp; Rubin Ultra / Kyber / NVL576 status; CPO switch volumes |
| about 30 Nov – 1 Dec 2026 (est.) | Credo FQ2; Marvell FQ3 | AEC vs optical mix; Celestial |
| about 9 Dec 2026 (est.) | Broadcom FQ4 | FY27 AI and networking guide |
| Jan–Mar 2027 | Nittobo Fukushima T-glass line start [56] | Glass-cloth supply relief begins |
| 2H 2027 | Scale-up CPO / NPO component ramps (Coherent, Lumentum, Astera); UALink silicon; Tower Track One (Q4 2027) [41][44][33][80] | Optical scale-up qualification |
| 2028 | Feynman NVLink 8 CPO / NVL1152; Kyber NVL144 (per SemiAnalysis); Trainium 4 + Celestial; Ayar ramps [4][8][13][11][72] | Volume optical scale-up between racks |

---

## 12. Methodology and caveats

- **Prices and consensus:** Yahoo Finance chart and quoteSummary endpoints, accessed 2 Oct 2026 about 08:20 UTC [1], cross-checked against Kabutan and Yahoo! Japan for Japanese names [2][3]. Consensus comes from LSEG via Yahoo (secondary) and may include stale or pre-split-adjusted targets. Mitsui Kinzoku (10-for-1 split, effective 1 Oct 2026) and Nittobo (5-for-1 split, recorded by Yahoo on 28 Jun 2026) are quoted post-split.
- **Exchange rates (2 Oct 2026, about 08:22 UTC):** USD/JPY 157.58; USD/TWD 31.835; EUR/USD 1.1261; USD/HKD 7.846; USD/CNY 6.699 [1].
- **Partial or secondary access:** several analyst reports (Goldman, Morgan Stanley, SemiAnalysis paid sections, DIGITIMES) were available only through free sections or relays, and are marked (secondary). The SemiAnalysis Kyber-delay claim comes from its public X thread as reported by Tom's Hardware and DCD; NVIDIA disputes it.
- **Not verified in this session:** Montage, Semtech and Luxshare product roles; Fukuda's listing and Circuit Foil ownership; the indium-truce date; NVIDIA's earnings date; Applied Materials' exact stake in Besi; the SemiAnalysis Kyber-delay thread itself (seen only via Tom's Hardware / DCD).

---

## 13. Sources (numbered; access dates 30 Sep – 2 Oct 2026)

1. Yahoo Finance market data and LSEG consensus (chart / quoteSummary), accessed 2026-10-02 — https://finance.yahoo.com/quote/ (per ticker, e.g. https://finance.yahoo.com/quote/AVGO/analysis) (secondary)
2. Kabutan, 5706 Mitsui Kinzoku quote (PER, market cap), 2026-10-02 — https://kabutan.jp/stock/?code=5706 (secondary)
3. Yahoo! Japan Finance quote pages (5706, 3110 and others), 2026-10-02 — https://finance.yahoo.co.jp/quote/3110.T (secondary)
4. NVIDIA Technical Blog, "NVIDIA Vera Rubin POD: Seven Chips, Five Rack-Scale Systems, One AI Supercomputer," 2026-03-16 — https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/
5. NVIDIA Q2 FY2027 press release (8-K Ex. 99.1), 2026-08-26 — https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm
6. NVIDIA Q2 FY2027 CFO commentary, 2026-08-26 — https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27cfocommentary.htm
7. G. Lockwood, "GTC 2026 recap," Mar 2026 — https://blog.glennklockwood.com/2026/03/gtc-2026-recap.html ; "NVIDIA Kyber," 2026-04-02 — https://www.glennklockwood.com/garden/kyber (secondary)
8. The Next Platform, "Driving Down The AI System Roadmap With Nvidia," 2026-03-19 — https://www.nextplatform.com/compute/2026/03/19/driving-down-the-ai-system-roadmap-with-nvidia/5210195
9. SemiAnalysis, "GTC 2026 – The Inference Kingdom Expands," 2026-03-24 — https://newsletter.semianalysis.com/p/nvidia-the-inference-kingdom-expands
10. SemiAnalysis, "Vera Rubin – Extreme Co-Design: An Evolution from Grace Blackwell Oberon," 2026-02-25 — https://newsletter.semianalysis.com/p/vera-rubin-extreme-co-design-an-evolution
11. SemiAnalysis, "Co-Packaged Optics (CPO) Book – Scaling with Light," 2026-01-01 — https://newsletter.semianalysis.com/p/co-packaged-optics-cpo-book-scaling
12. SemiAnalysis, "GB200 Hardware Architecture – Component Supply Chain & BOM," 2024-07-17 — https://newsletter.semianalysis.com/p/gb200-hardware-architecture-and-component
13. Tom's Hardware, "Nvidia's Kyber rack for Rubin Ultra reportedly delayed to 2028…," 2026-07-06 — https://www.tomshardware.com/pc-components/gpus/nvidias-kyber-rack-for-rubin-ultra-slips-to-2028
14. DatacenterDynamics, "Nvidia pushes Kyber release to 2028 following manufacturing concerns – report," 2026-07-06 — https://www.datacenterdynamics.com/en/news/nvidia-pushes-kyber-release-to-2028-following-manufacturing-concerns-report/
15. BigGo Finance, "Nvidia's Kyber Rack PCB Yield Issues May Delay Launch to 2028…," 2026-07-06 — https://finance.biggo.com/news/10657225-c85a-4184-b3fc-97e8dd6271ed (secondary)
16. The Register, "Nvidia embraces optical scale-up as copper reaches limits," 2026-04-05 — https://www.theregister.com/on-prem/2026/04/05/nvidia-embraces-optical-scale-up-as-copper-reaches-limits/5225238
17. Tom's Hardware, "Near-packaged optics (NPO) gains ground as the industry hedges against CPO's growing pains," 2026-08-13 — https://www.tomshardware.com/tech-industry/near-packaged-optics-gains-ground-aso-the-industry-hedges-against-co-packaged-optics-growing-pains
18. TrendForce press release, "NVIDIA and Broadcom Begin Volume Ramp of CPO Switches…," 2026-07-27 — https://www.trendforce.com/presscenter/news/20260727-13151.html
19. TrendForce News, "TSMC PIC Capacity Seen Surging to 25K Wafers/Month by 2028…," 2026-07-08 — https://www.trendforce.com/news/2026/07/08/news-tsmc-pic-capacity-seen-surging-to-25k-wafersmonth-by-2028-nvidia-broadcom-eyed-as-early-coupe-customers/ (secondary; cites Commercial Times)
20. BigGo Finance, "Nvidia's CPO Ecosystem Enters Volume Production…," 2026-07-24 — https://finance.biggo.com/news/18d4225c-e1a8-4df5-9217-e88dc0929a91 (secondary)
21. BigGo Finance, "Hon Hai Ships CPO Cabinets to Nvidia Ahead of Schedule…," 2026-05-12 — https://finance.biggo.com/news/EjoNH54BaoGGrU-ITKH2 (secondary)
22. ServeTheHome, "Broadcom Tomahawk 6 – Davisson 102.4T Switch with Co-Packaged Optics Shipping," 2025-10-12 — https://www.servethehome.com/broadcom-tomahawk-6-davisson-102-4t-switch-with-co-packaged-optics-shipping/
23. Broadcom Q3 FY2026 press release (8-K Ex. 99), 2026-09-02 — https://www.sec.gov/Archives/edgar/data/1730168/000173016826000076/avgo-08022026x8kxex99.htm
24. BigGo Finance, "[Broadcom Q3 2026 Earnings Call] AI Revenue Triples…," 2026-09-02 — https://finance.biggo.com/news/US_AVGO_2026-09-02 (secondary)
25. Marvell Q2 FY2027 press release (incl. Investor Day 6 Oct), 2026-08-27 — https://www.sec.gov/Archives/edgar/data/1835632/000183563226000022/q227_8kx812026ex-991.htm
26. Marvell Form 10-Q, quarter ended 2026-08-01 (Celestial / XConn / NVIDIA preferred) — https://www.sec.gov/Archives/edgar/data/1835632/000183563226000025/mrvl-20260801.htm
27. Marvell 8-K (Google agreement and warrant), 2026-08-19 — https://www.sec.gov/Archives/edgar/data/1835632/000119312526356217/d412696d8k.htm
28. The Next Platform, "Optics Still Driving Marvell's AI Business More Than Custom Chips," 2026-09-02 — https://www.nextplatform.com/connect/2026/09/02/optics-still-driving-marvells-ai-business-more-than-custom-chips/5294018
29. Credo Q1 FY2027 press release (8-K Ex. 99.1), 2026-09-01 — https://www.sec.gov/Archives/edgar/data/1807794/000162828026059795/credoq12027ex-991.htm
30. Credo Q1 FY2027 earnings call transcript (Motley Fool), 2026-09-08 — https://www.fool.com/earnings/call-transcripts/2026/09/08/credo-crdo-q1-2027-earnings-call-transcript/
31. Credo Form 10-Q, quarter ended 2026-08-01 — https://www.sec.gov/Archives/edgar/data/1807794/000162828026060111/crdo-20260801.htm
32. Astera Labs Q2 2026 press release, 2026-08-04 — https://www.sec.gov/Archives/edgar/data/1736297/000173629726000033/q226exhibit991.htm
33. Astera Labs Q2 2026 earnings call transcript (Motley Fool), 2026-08-11 — https://www.fool.com/earnings/call-transcripts/2026/08/11/astera-labs-alab-q2-2026-earnings-call-transcript/
34. Astera Labs Form 10-Q, quarter ended 2026-06-30 — https://www.sec.gov/Archives/edgar/data/1736297/000173629726000035/alab-20260630.htm
35. Amphenol Q2 2026 press release, 2026-07-29 — https://www.sec.gov/Archives/edgar/data/820313/000110465926087904/aph-20260729xex99d1.htm ; Form 10-Q — https://www.sec.gov/Archives/edgar/data/820313/000110465926089194/aph-20260630x10q.htm
36. BigGo Finance, "[Amphenol Q2 2026 Earnings Call]…," 2026-07-29 — https://finance.biggo.com/news/US_APH_2026-07-29 (secondary)
37. TE Connectivity Q3 FY2026 press release and slides, 2026-07-22 — https://www.sec.gov/Archives/edgar/data/1385157/000110465926085589/tel-20260722xex99d1.htm
38. Coherent Q4 FY2026 press release and investor presentation, 2026-08-12 — https://www.sec.gov/Archives/edgar/data/820318/000119312526346860/d128030dex991.htm ; https://www.sec.gov/Archives/edgar/data/820318/000119312526346860/d128030dex992.htm
39. Coherent Form 10-K, FY2026 — https://www.sec.gov/Archives/edgar/data/820318/000082031826000020/iivi-20260630.htm
40. Coherent press release, "Coherent launches PhotonLink…," 2026-09-21 — https://www.coherent.com/news/press-releases/launches-photonlink-integrated-optics-platform-ai-infrastructure
41. RCR Wireless, Coherent PhotonLink staging (CPO scale-out Q4 2026; scale-up / NPO 2H 2027; chip-to-chip 2029–30), 2026-09-29 — https://rcrwireless.com/20260929/data-center-2/coherent-aidc-photonlink
42. Lumentum Q4 FY2026 press release, 2026-08-11 — https://www.sec.gov/Archives/edgar/data/1633978/000162828026055726/lite_ex991xq4fy26.htm ; Form 10-K FY2026 (NVIDIA preferred) — https://www.sec.gov/Archives/edgar/data/1633978/000162828026057358/lite-20260627.htm
43. Tom's Hardware, "Lumentum CEO warns of impending bottleneck on critical material used for silicon photonics," 2026-07-31 — https://www.tomshardware.com/tech-industry/semiconductors/lumentum-ceo-says-the-indium-phosphide-shortage-will-become-worse-than-memory
44. BigGo Finance, "NVIDIA's Optical Communications Partners Push Back on Delay Rumors…," 2026-08-14 — https://finance.biggo.com/news/e0dc6a39-d77c-4a2b-af20-121d34378128 (secondary)
45. Fabrinet Q4 FY2026 press release, 2026-08-17 — https://www.sec.gov/Archives/edgar/data/1408710/000140871026000026/fn-2026811xex991q426.htm ; Form 10-K — https://www.sec.gov/Archives/edgar/data/1408710/000140871026000028/fn-20260626.htm
46. TTM Technologies Q2 2026 press release, 2026-08-05 — https://www.sec.gov/Archives/edgar/data/1116942/000119312526336163/d132953dex991.htm
47. Mitsui Kinzoku news release, "Outlook for Enhanced Production Capacity of Copper Foil from 2030 and Beyond," 2026-08-17 — https://www.mitsui-kinzoku.com/LinkClick.aspx?fileticket=XzNABg5L0L4%3D&tabid=204&mid=824
48. Mitsui Kinzoku, "Record of Briefing Session Concerning FY2026 Q1 Results," Aug 2026 — https://www.mitsui-kinzoku.com/LinkClick.aspx?fileticket=nsbvk6VTbbE%3d&tabid=204&mid=1027
49. Mitsui Kinzoku, notice of stock split (1:10; record date 2026-09-30, effective 2026-10-01), 2026-08-07 — https://www.mitsui-kinzoku.com/LinkClick.aspx?fileticket=0Q5xE2VFMuA%3D&tabid=100&mid=859
50. Goldman Sachs high-end copper-foil report (2026-05-20) as relayed by BigGo Finance — https://finance.biggo.com/news/gKGcRp4B6tLPsnrZ9pcm ; https://finance.biggo.com/news/J84_RZ4BX0tZvRTvZP2h ; and Wallstreetcn via Bitget — https://www.bitget.com/asia/amp/news/detail/12560605420411 (secondary)
51. Morgan Stanley "AI materials supercycle" note as relayed by BigGo Finance, 2026-09-16 — https://finance.biggo.com/news/398ccede-d23f-48c2-ac9c-114ea1e2091f (secondary)
52. Morgan Stanley Rubin rack teardown as relayed by BigGo Finance, 2026-05-25 — https://finance.biggo.com/news/ZwAZYJ4B-PfaobXfdRKp (secondary)
53. Macrostream, "AI Material Shortage Spreads: NVIDIA Directly Secures HVLP4 Copper Foil…," 2026-06-12 — https://www.macrostream.ai/articles/6a2ba2d18f2442d721542919 (secondary)
54. SMM (Shanghai Metals Market), "AI-server boom strains copper foil supply; projected gap widens to 2,500 tonnes by 2027," 2026-09-30 — https://news.metal.com/newscontent/104142677-ai-server-boom-strains-copper-foil-supply-projected-gap-widens-to-2500-tonnes-by-2027 (secondary)
55. Postation, "日東紡のTガラスとは…世界シェア9割," 2026-06-09 (updated 2026-09-24) — https://www.postation.jp/news/nittobo-t-glass-ai-substrate-2026-90-percent-share (secondary)
56. Postation, "日東紡のTガラス、増産見送りではなかった 設備投資は450億円へ倍増," 2026-09-21 — https://www.postation.jp/news/nittobo-t-glass-capacity-doubling-no-more-price-hike (secondary)
57. BigGo Japan, Nittobo FY2026 Q1 results briefing summary, 2026-08-01 — https://finance.biggo.jp/news/JP_3110.T_2026-08-01 (secondary)
58. Macrostream, "Supply Shortage but Refusing to Raise Prices: … Nittobo," 2026 — https://www.macrostream.ai/articles/6a126e7b8416762100ffaea4 (secondary)
59. QuantAbundance, "The AI bottleneck nobody's watching: T-Glass and Nitto Boseki (3110)," 2026-06-02 — https://quantabundance.com/articles/t-glass-nitto-boseki-ai-bottleneck (secondary)
60. TrendForce News, "What Is Glass Fiber Fabric and Why Is T-Glass Critical for AI Servers?," 2025-11-24 — https://www.trendforce.com/news/2025/11/24/news-what-is-glass-fiber-fabric-and-why-is-t-glass-critical-for-ai-servers-a-deep-dive/
61. Huayihai (pcba-hyh) industry news (secondary relays of Sinolink, Changjiang, Deutsche Bank and Morgan Stanley data): HVLP copper-foil crisis (2026) https://pcba-hyh.com/en/industry-news/hvlp-copper-foil-crisis-ai-server-pcb-bottleneck-2026 ; 2026-10-01 https://pcba-hyh.com/en/industry-news/low-dk-glass-fabric-shortage-ai-pcb-buyer-playbook-q4-2026 ; 2026-09-26 https://pcba-hyh.com/en/industry-news/pcb-capex-expansion-yield-equipment-consumption-buyer-audit-q4-2026 ; 2026-09-24 https://pcba-hyh.com/en/industry-news/pcb-price-pass-through-robot-medical-optical-q4-2026 ; 2026-09-21 https://pcba-hyh.com/en/industry-news/high-end-hdi-capacity-2029-shengyi-expansion-buyer-guide-september-2026 ; 2026-09-19 https://pcba-hyh.com/en/industry-news/q3-earnings-preview-ai-pcb-profit-realization-mlcc-squeeze-september-2026 (secondary)
62. Tech Times, "Elite Material Copper-Clad Laminate Maker Claims Global Crown…," 2026-07-29 — https://www.techtimes.com/articles/321987/20260729/elite-material-copper-clad-laminate-maker-claims-global-crown-ai-server-demand-doubles-revenue.htm (secondary)
63. BigGo Finance, "Victory Giant Technology Denies Expansion Delays Are Holding Back Nvidia's Rubin…," 2026-07-14 — https://finance.biggo.com/news/5efe4750-215e-447b-b779-837ad9cd3158 (secondary)
64. Besi, "Q2-26 and H1-26 Results," 2026-07-23 — https://www.besi.com/fileadmin/user_upload/PR_Q2-2026.pdf
65. Besi, "Increases Long-Term Financial Targets at 2026 Investor Day," 2026-06-18 — https://www.besi.com/investor-relations/press-releases/2025/details-1/be-semiconductor-industries-nv-increases-long-term-financial-targets-at-2026-investor-day/ ; Financial calendar (Q3 results 2026-10-22) — https://www.besi.com/investor-relations/financial-calendar/
66. Applied Materials and Besi, "Expand Strategic Partnership…" (GlobeNewswire), 2026-10-01 — https://www.globenewswire.com/news-release/2026/10/01/3372971/0/en/applied-materials-and-besi-expand-strategic-partnership-to-advance-next-generation-packaging-for-ai-scaling.html
67. Tom's Hardware, "The current state of Hybrid Bonding in 2026…," 2026-09-02 — https://www.tomshardware.com/tech-industry/semiconductors/hybrid-bonding-roadmap-examined
68. Reuters, "Besi fields takeover interest on surging demand for advanced chip packaging, sources say," 2026-03-12 — https://www.reuters.com/business/besi-attracts-takeover-interest-advanced-chip-packaging-demand-surges-sources-2026-03-12/ (headline / lede via aggregator)
69. TrendForce News, "NVIDIA Rubin Ultra and Feynman Reportedly to Boost TSMC SoIC; Besi, Applied Materials, TEL to Benefit," 2026-03-18 — https://www.trendforce.com/news/2026/03/18/news-nvidia-rubin-ultra-and-feynman-reportedly-to-boost-tsmc-soic-besi-applied-materials-tel-to-benefit/ (secondary)
70. TrendForce News, "SKC Reportedly Pushes Glass Substrate Mass Production to 2027…," 2026-07-24 — https://www.trendforce.com/news/2026/07/24/news-skc-reportedly-pushes-glass-substrate-mass-production-to-2027-targets-final-validation-by-year-end/
71. Lightmatter press releases: L20 CPX / Open CPX (2026-09-17) https://lightmatter.co/press-release/lightmatter-joins-open-cpx-msa-introduces-the-industrys-first-bidirectional-cpx-optical-engine/ ; OCP CPO initiative (2026-08-13) https://lightmatter.co/press-release/industry-leaders-formally-launch-cpo-system-architecture-initiative-within-the-open-compute-project/ ; NVLink Fusion (2026-06-02) https://lightmatter.co/press-release/lightmatter-joins-nvidia-nvlink-fusion/ ; Guide DR (2026-05-21) https://lightmatter.co/press-release/lightmatter-unveils-guide-dr-industry-first-liquid-cooled-laser-nic-that-quadruples-rack-density/ ; Passage L200 (2025-03-31) https://lightmatter.co/press-release/lightmatter-announces-passage-l200-the-fastest-co-packaged-optics-for-ai/
72. The Next Platform, "Ayar Labs Gets $500 Million To Ramp Photonics Into 2028 AI Systems," 2026-03-04 — https://www.nextplatform.com/connect/2026/03/04/ayar-labs-gets-500-million-to-ramp-photonics-into-2028-ai-systems/4093515
73. Unite.AI, "Ayar Labs Secures Additional $150M, Lifting 2026 Capital to $650M," 2026-09-10 — https://www.unite.ai/ayar-labs-secures-additional-150m-lifting-2026-capital-to-650m/ ; Dealroom, 2026-09-11 — https://app.dealroom.co/news/note/ayar-labs-adds-150m-to-its-series-e-at-a-5b-valuation (secondary)
74. Marvell newsroom, "Marvell Completes Acquisition of Celestial AI," 2026-02-02 — https://www.marvell.com/company/newsroom/marvell-completes-acquisition-of-celestial-ai.html
75. Molex press releases: Teramount agreement (2026-04-15) https://www.prnewswire.com/news-releases/molex-announces-agreement-to-acquire-teramount-ltd-to-accelerate-scalable-co-packaged-optics-adoption-302742582.html ; completion (2026-05-07) https://www.prnewswire.com/news-releases/molex-completes-acquisition-of-teramount-ltd-302764874.html ; Calcalist ($430M), 2026-04-15 https://www.calcalistech.com/ctechnews/article/b1intlan11l
76. Ciena–Nubis (Business Wire), 2025-09-22 — https://www.businesswire.com/news/home/20250922219077/en/Ciena-to-Acquire-Nubis-Communications-to-Expand-its-Inside-the-Data-Center-Strategy-and-Further-Address-Growing-AI-Workloads ; Ciena 10-Q (2026-09-03) — https://www.sec.gov/Archives/edgar/data/936395/000162828026060361/cien-20260801.htm ; Ciena Vesta (Business Wire, 2026-02-25) — https://www.businesswire.com/news/home/20260225663726/en/Ciena-Unveils-the-Industrys-Highest-Density-Lowest-Power-Pluggable-Optical-Engine-to-Meet-Data-Center-AI-Demands
77. AMD, "AMD Acquires Enosemi…," 2025-05-28 — https://www.amd.com/en/blogs/2025/amd-acquires-enosemi-to-accelerate-co-packaged-optics-innovation.html ; AMD 10-Q (Helios; 2026-08-05) — https://www.sec.gov/Archives/edgar/data/2488/000000248826000123/amd-20260627.htm ; AMD media alert, OCP keynote 2026-10-12 (published 2026-09-29) — https://newsroom.amd.com/news/media-alert-ceo-lisa-su-keynote-2026-ocp/
78. Private optical-I/O announcements (headline level): Xscape $37M (Business Wire, 2026-03-11) https://www.businesswire.com/news/home/20260311692947/en/Xscape-Photonics-Announces-%2437-Million-in-New-Funding-Launches-Eight-Wavelength-Laser-for-AI-Data-Center-Networks ; Scintil (Reuters, 2026-03-11) https://www.reuters.com/technology/nvidia-backed-startup-scintil-photonics-starts-testing-laser-chips-with-2026-03-11/ ; OpenLight $50M (Business Wire, 2026-04-28) https://www.businesswire.com/news/home/20260428377852/en/OpenLight-Secures-%2450-Million-in-Series-A-1-Funding-to-Accelerate-Global-Deployment-of-Next-Generation-Photonics ; Avicena ECOC demo (Business Wire, 2026-09-17) https://www.businesswire.com/news/home/20260917300267/en/Avicena-to-Demonstrate-Worlds-First-Connectorized-microLED-Optical-Interconnect-for-AI-Infrastructure-at-ECOC-2026 ; Avicena "200fJ/bit Tx" (Business Wire headline, 2025-09-29)
79. Lumentum ECOC 2026 releases: DWDM ELSFP for OCI MSA — https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-to-Demonstrate-DWDM-ELSFP-Laser-Module-for-OCI-MSA-Applications-at-ECOC-2026/default.aspx ; 1060-nm VCSEL D2D with Qualcomm and Corning — https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Qualcomm-and-Corning-to-Demonstrate-High-Density-1060-nm-VCSEL-Optical-D2D-Connectivity-for-AI-Scale-Up-at-ECOC-2026/default.aspx
80. Tom's Hardware, "Tower Semiconductor to invest $4 billion in Japanese ops… optical connectivity hub," 2026-09-25 — https://www.tomshardware.com/tech-industry/photonics/tower-semiconductor-to-invest-usd4-billion-in-japanese-ops-to-set-up-massive-optical-connectivity-hub-dual-track-expansion-aims-to-increase-output-by-40-times-by-2029 (secondary; cites Nikkei)
81. Tom's Hardware, "Inside Google's TPU V8 strategy…," 2026-04-27 — https://www.tomshardware.com/tech-industry/semiconductors/google-splits-its-tpu-into-two-chips-for-the-first-time-with-training-and-inference-variants
82. LightCounting, "AI Scale-up Switch Market on Steep Growth Trajectory," 2026-04-27 — https://www.lightcounting.com/newsletter/en/april-2026-ethernet-optical-and-scale-up-switches-for-cloud-data-centers-378
83. HyperFRAME Research, "Are Generic Optical Transceivers Sabotaging Next Gen GPU Fabrics?," 2026-10-01 — https://hyperframeresearch.com/2026/10/01/are-generic-optical-transceivers-sabotaging-next-gen-gpu-fabrics/
84. UALink Consortium press room (UALink 2.0 specifications, 2026-04-07) — https://ualinkconsortium.org/news/ ; The Register headline "UALink delivers 2.0 spec before v.1.0 silicon ships," 2026-04-07
85. KuCoin / MarsBit, "SemiAnalysis report sparks debate over CPO timeline; optical stocks decline," 2026-06-10 — https://www.kucoin.com/news/flash/semianalysis-report-sparks-debate-on-cpo-timeline-optical-stocks-drop (secondary)
86. BigGo Finance, "FCC Final Rule Doesn't Ban Chinese Optical Modules…," 2026-09-11 — https://finance.biggo.com/news/527f426d-2faa-4536-8c71-3772272ffdf4 (secondary)
87. BigGo Finance, "FIT Hon Teng: Optical Communications Material Bottlenecks…," 2026-09-16 — https://finance.biggo.com/news/03649851-1e9d-42a1-85fb-ff341e9e5dc2 (secondary)
88. Data Center Frontier, "2026 OCP Global Summit" (12–15 Oct 2026, San Jose) — https://www.datacenterfrontier.com/hyperscale/event/55405865/2026-ocp-global-summit
89. Radiant, "NVIDIA Vera Rubin Ultra Ushers AI Networking Into the Co-Packaged Optics Era," 2026-05-20 — https://radiant.co/blog/nvidia-vera-rubin-ultra-ushers-in-the-cpo-era (secondary)
90. Barchart via Yahoo Finance, "Fabrinet Just Lost Billions in Market Value Due to Nvidia…," 2026-08-23 — https://finance.yahoo.com/markets/stocks/articles/fabrinet-just-lost-billions-market-232736801.html (secondary)
91. Delchemia (note.com), "Mitsui Kinzoku's Copper Foil Business…," 2026 — https://note.com/delchemia_japan/n/n7c327322b7b0 (secondary)
92. Not used in this public copy.
