> **Working research report, published as-is for transparency (2 Oct 2026).** Written by an AI research agent for the Claude Investment Summary pages. Every figure carries a date and source; "secondary" marks relays; "my estimate" marks the agent's arithmetic. Prices are a point-in-time snapshot. Not investment advice. Final picks and targets on the website may differ from the rankings here.

# P1: DC power inside the hall and the rack (800 VDC, ±400 VDC, SST, rack power, vertical power, DC protection, in-rack storage)

*Research date: Friday 2 October 2026. Prepared for an educational investment-analysis page, so nothing here is investment advice.*

**Conventions.** Every figure carries its date and a source number in brackets, and the numbered list is in section 13. "(secondary)" marks an aggregator or press summary rather than a primary filing or company document. Arithmetic I did myself is labelled **"my estimate"** or **"my calc"**. Prices for US and European listings are closes on **1 Oct 2026**. Prices for Taiwan, Japan and Korea are closes on **2 Oct 2026**, and China A-shares are closes on **30 Sep 2026** because of the Golden Week holiday. Market caps, forward EPS and consensus targets come from Yahoo Finance's data feed, retrieved around 08:00 UTC on 2 Oct 2026 [1].

**Method caveat.** The session's web-search quota ran out partway through the research. Later checks therefore relied on direct fetches of primary documents (SEC EDGAR 8-K/10-Q exhibits, company and OCP/NVIDIA pages) and on the quote API. Some items could be confirmed only through secondary summaries, and they are flagged where they appear.

---

## 0. Executive summary (the ten things that matter)

1. **The transition is real, but 2026 is a ±400 V and "sidecar" year. Native 800 V arrives in 2027–28.** Vera Rubin NVL72 racks (about 190–250 kW) still run a 54 V in-rack bus fed by AC power shelves, and NVIDIA's 800 V power rack is *optional* for Vera Rubin. It was "ready for customer shipments" in 3Q26, broader adoption is expected with Rubin Ultra in 2H27, and widespread deployment in 2028 (TrendForce, 25 Jun 2026 [2]). Delta's own guidance matches: ±400 V mass production started in 3Q26, NVIDIA 800 V ships only in small volume in 4Q26, and the "true volume ramp" comes in 2027 (Delta call, 30 Jul 2026 [3], secondary). Vertiv targets rack and pod 800 V deployments in 2027 and data-hall level in 2028 (Q2 call, 29 Jul 2026 [4]).
2. **The timing risk is Kyber, not power electronics.** SemiAnalysis reported on 6 Jul 2026 that the Kyber NVL144 rack slips by more than 12 months to 2028 because of a 78-layer PCB midplane, and that the NVL72x2 stop-gap was dropped. NVIDIA replied only that its "roadmap is intact" [5][6]. The 600 kW-class racks that *force* HVDC arrive with Kyber, so a Kyber slip moves the 800 V volume curve by about a year.
3. **Penetration forecasts disagree widely and are poorly defined.** One unattributed Chinese broker forecast has 800 V at 3% of new AI data-center capacity in 2026, 40% in 2027 and 76% in 2028 [7] (secondary). SemiAnalysis projects about 39 GW of 800 VDC-powered capacity *cumulatively* by 2030 [8]. But its ~$11B 2028 sidecar TAM at ~$0.5M/MW implies roughly 20 GW of sidecars in 2028 alone (my calc), so the 39 GW probably counts native or facility-level DC only. RBC expects about 20% of data centers on 800 V DC by 2030 [9] (secondary). **My estimate** for the share of *new AI-accelerator IT capacity (MW)* commissioned with at least ±400 V DC distribution, whether sidecar or facility-level: **2027 ≈ 5–12%, 2028 ≈ 15–30%, 2029 ≈ 30–45%** (base case; derivation in §1.4). The Chinese 40%/76% figures probably measure *rack shipments* of a single platform rather than MW.
4. **2026–28 is a window of *rising* dollar content for rack and row power electronics. The longer-run picture is a shift of share between vendors, not a bigger pie.** SemiAnalysis puts the Phase-1 power rack ASP at about $400–500k per unit (about $0.5M/MW), roughly 10× a standard AC power-rack unit [8]. A ±400 V 800 kW HVDC system costs about $450k, against about $100k for UPS capacity of the same size [10] (secondary). Both McKinsey [11] and SemiAnalysis [8] still see *total* electrical content per MW as flat to down: SemiAnalysis gives $3.6–4.8M/MW, and McKinsey estimates non-IT capex falls 15–18% in native 800 VDC designs. The losers are LV switchgear, central UPS, floor PDUs, AC rack PDUs and per-server PSUs [11].
5. **The hardest physics sits in the last centimeter, at the GPU package, not in the 800 V bus.** A ~2.3 kW Rubin GPU [12] at ~0.75 V core draws about **3 kA** (my estimate). Vicor states that its 2nd-gen vertical power delivery (VPD) reaches **3 A/mm² now and 5 A/mm² in early 2027**, and that competing integrated voltage regulators (IVRs) "barely exceed 1 A/mm²" (company claim, Q2 call 21 Jul 2026 [13]). Delivering 3 kA therefore needs about 1,000 mm² of regulator area at 3 A/mm², or about 3,000 mm² at 1 A/mm² (my calc). This IP is being *litigated*. Vicor's ITC actions name almost the entire first-generation VPD supply chain: Delta, MPS, Infineon, Flex, Celestica, Quanta, Foxconn/Ingrasys, Luxshare and Wistron/Wiwynn [14][15].
6. **Solid-state transformers are mostly narrative, with revenue mostly after 2029.** The number of commercial-class SSTs in revenue service worldwide was "measured in single digits" as of May 2026 [16]. No SST vendor had UL data-center certification as of May 2026 [8]. SSTs cost about twice a conventional transformer [17], and the medium-frequency transformer needs about three times the insulation [17]. Dell'Oro expects SSTs to affect UPS demand "meaningfully" only from 2029 [18]. Forecasts for the 2030 SST market range from about $1B (an Infineon figure quoted by Power Electronics News, scope unclear [17]) to about $32B (SemiAnalysis [8]), roughly a 30× spread.
7. **800 VDC does not remove the UPS function. It moves it.** Energy storage shifts to rack battery backup units (BBUs), capacitor and supercapacitor banks, and MV UPS or BESS. NVIDIA's own architecture puts "high-power capacitors and supercapacitors close to the compute racks" and BESS at the utility interconnection [19]. GB300 already stores **65 J per GPU** in the electrolytic capacitors of its PSUs, co-designed with Lite-On [20]. Delta's 660 kW in-row 800 V rack carries **480 kW of BBUs** [21][22]. Storage content per MW probably *rises*.
8. **Several of the "under-priced" calls from September are stale.** VICR is +182% YTD and +526% over one year, about 51× FY27E EPS [1]. Delta is +96% YTD at about 29× FY27E [1]. Capacitor names have re-rated hard: SEMCO +520% YTD, Murata +161%, Taiyo Yuden +185%, Yageo +171% [1]. What looks *less* priced: Lite-On (19× FY27E, and absent from Vicor's ITC respondent lists), Infineon (about 21× FY27E against MPWR at 39×), Flex ahead of its power-infrastructure spin-off (about 16× FY3/28E), the de-rated BBU maker AES-KY (-23% YTD, 17× FY27E), and DC-protection names (ABB's consensus is still "hold").
9. **There are two DC standards, and both will coexist.** Hyperscalers (Google, Meta, Microsoft; AWS reportedly [44]) use **±400 V bipolar** under the OCP Mt Diablo / Diablo 400 specs, which reuse the EV supply chain [23][24][25]. NVIDIA uses **800 V monopolar** [26][27]. Vendors must support both. That favors broad-portfolio suppliers (Delta, Lite-On, Infineon) over single-topology bets.
10. **The real gate is codes and protection.** DC arcs do not self-extinguish at a current zero. Full 800 VDC support in the NEC is targeted for the 2029 cycle, and NFPA 70E has no 600–1000 VDC PPE tables [8]. UL 857 Ed. 14 only raised busway ratings to 1000 VDC [8]. Certified DC breakers are scarce credentials: ABB's SACE Infinitus is the first solid-state breaker certified under IEC 60947-2 (1250 VDC, 2500 A, <25 µs) [28], and LS Electric holds the first UL-certified 1500 V DC MCCB [8].

**Ranked shortlist (details in §9):**

| # | Company | Ticker (US line) | Why |
|---|---|---|---|
| 1 | Delta Electronics | 2308.TW (no US ADR found) | The only full-stack vendor: power shelves, ±400/800 V racks, BBU, busway, SST |
| 2 | Vicor | VICR | Vertical power delivery IP toll plus 2nd-gen VPD; binary ITC upside |
| 3 | Infineon | IFX.DE (IFNNY) | Broadest 800 V silicon (Si, SiC, GaN, vertical modules, SST SiC) at about 21× |
| 4 | Lite-On Technology | 2301.TW | #2 rack power vendor, co-designed GB300 power smoothing; 19× FY27E vs Delta's 29×; not a Vicor ITC respondent |
| 5 | Eaton | ETN | MV SST (IEC-certified), DC protection and modular power; hedged incumbent |
| 6 | ABB | ABBN.SW (ABBNY) | Certified solid-state DC breaker plus DG Matrix stake; consensus "hold" |
| 7 | Flex | FLEX | NVIDIA-named power-system partner; Cloud & Power Infrastructure spin-off (Investor Day 10 Nov 2026) at about 16× FY3/28E |
| 8 | BizLink | 3665.TW | Named NVIDIA 800 VDC component partner; rack busbars, power whips, busbar connectors |
| 9 | AES-KY (Advanced Energy Solution) | 6781.TW | Rack battery backup units (BBU), de-rated; speculative and evidence is thin |

---

## 0.1 Claims checked (September 2026)

| Claim | Finding | Evidence |
|---|---|---|
| "Delta has had a production SST in a North China AI data center since Feb 2026" | **Partly true.** In Feb 2026 Delta said its SST system was "formally implemented" at Chindata's North China campus for Meituan: up to 1 MW per cabinet, 240/400/800 VDC outputs, up to 98.5% efficiency, about 1 m² per MW [29]. Chindata had announced the collaboration on 17 Dec 2025 [30]. This is a **first deployment, not volume production**. On 30 Jul 2026 Delta said its SSTs are "in trials" and that the "first mass production line [comes] next year" (2027) [3] (secondary). | [29][30][3] |
| "Eaton MVSST 2.0 is IEC-certified; Eaton signed a SiC deal with Infineon in Sept 2026" | **True.** On 29 Sep 2026 Infineon agreed to supply SiC for Eaton's MV SST platform in APAC, and the two are evaluating 2.3 and 3.3 kV SiC modules. The platform is described as "among the first MV SST systems to achieve IEC certification" [31][32]. At Eaton Techday Seoul (11 Sep 2026) Eaton quoted 98.5% maximum efficiency, 277.7 kW/m², and up to 50% smaller footprint and shorter lead time [33]. The APAC specs in the hub digest (10 kV input, 1.25–2.5 MW, >98%) were **not confirmed** in the articles I could fetch [34]. | [33][31][32] |
| "Siemens Energy partnered with Reinhausen on SST in Aug 2026" | **Wrong entity.** The partner is **Siemens AG** (Electrification & Automation; CEO Stephan May), not Siemens Energy. Announced 14 Aug 2026, the goal is joint development and serial production of SSTs taking MV AC up to 36 kV to 800 VDC. **No commercial date was given** [35][36]. | [35][36] |
| "Vertiv sidecar commercialization H2 2026, ramp 2027" | **Broadly true, with a later hall-level step.** The Q2 2026 call targets initial rack and pod 800 V deployments in 2027 and data-hall level by 2028. SST work is still "a matter of project development" [4]. | [4][37] |
| "OCP SST spec v0.3 Aug 2026" | **Mostly true.** Rev 0.3.0 has an effective date of 22 Jun 2026 (first draft 20 May 2026), with Google, Microsoft and NVIDIA as contributors. It was publicized in the OCP and NVIDIA blogs on 11 Aug 2026 [38][39][40]. | [38][39][40] |
| "Vicor = the under-priced in-rack pure play" | **Out of date.** VICR closed at $308.59 on 1 Oct 2026: +182% YTD, +526% over one year, about $14.2B market cap, about 51× FY27E EPS [1]. What may still be mispriced is binary: the ITC outcome (final determination in 2027) and adoption of 2nd-gen VPD. | [41][13][1] |
| "MPWR viewed as well-followed" | **True.** 15 analysts cover it, at 39× FY27E [1], and Enterprise Data revenue was +164% YoY in Q2 2026 [42]. The **under-discussed risk** is that MPS is a respondent in Vicor's 337-TA-1484 (instituted 11 Feb 2026) and in the new 9 Sep 2026 complaint [14][15]. | [14][15][42] |
| "Kyber / 800 V full production 2027" (hub electrification notes) | **Contested.** NVIDIA's own pages still say 2027 [26][38], but SemiAnalysis reports a slip to 2028 [5][6]. | [26][38][5][6] |
| Hub US lines "DELTY" (Delta) and "SMNEY" (Siemens Energy) | **Not quoted on Yahoo on 2 Oct 2026.** The Siemens Energy OTC line is **SMEGF** (OTCQX). No US line for Delta Electronics Inc. was found. **DLEGF is Delta Electronics (Thailand)**, a separately listed subsidiary (DELTA.BK), not the Taiwan parent [1]. | [1] |


---

## 1. Architecture and timeline

### 1.1 Why DC, in physics terms

- **Current.** A 600 kW rack draws about 11,111 A at 54 V and about 750 A at 800 V. That is a 14.8× reduction in current, and for the same conductor about 219× lower I²R loss (SemiAnalysis, 26 May 2026 [8]). NVIDIA says a 1 MW rack on 54 V needs about 200 kg of copper busbar, and that a 1 GW site on 54 V could need up to 200,000 kg. NVIDIA also claims 800 V cuts copper about 45% versus 415 VAC and carries 85% more power through the same conductor (blog, 20 May 2025 [26]). Its Oct 2025 blog puts the figure at "157% more power than 415 VAC" for the same wire gauge [19].
- **Conversion stages.** The legacy chain is MV AC → 480/415 V transformer → double-conversion UPS → PDU → rack AC/DC PSU (54 V) → 54→12/6 V intermediate bus converter → VRM → ~0.8 V core. SemiAnalysis models cumulative grid-to-chip efficiency at **82.0%** for the AC baseline. It rises to 83.7% with sidecars (Phase 1), **86.5%** with native 800 VDC and the central UPS eliminated (Phase 2), 86.9% with facility-level DC (Phase 3), and **87.4%** with SSTs (Phase 4). At 1 GW of IT load that is about 58 MW saved in Phase 2 and about 69 MW in Phase 4 [8].
- **Efficiency claims, honestly scoped.** NVIDIA claims "up to 5%" end-to-end gain [26]. Google measured about 3% for its ±400 V sidecar against 48 V (29 Apr 2025 [23]). Vertiv calls 8–10% opex-reduction claims unsupported and expects a "low-to-mid single-digit improvement in total facility energy consumption" [37].
- **What efficiency is worth (my estimate).** The power bill is not the main prize. At an interconnect-limited site, a 3–5% gain lets 30–50 MW more IT load run on each GW of grid capacity. If one *assumes* roughly $30–40B of IT plus facility capex per GW, that is about $1–2B more deployable compute per GW of grid connection. The electricity saved is only about $20–35M per year (40 MW × 8,000 h × $60–110/MWh). This is my arithmetic on stated assumptions, not a sourced figure.

### 1.2 The competing topologies

| Topology | Who | Voltage and grounding | Status (date) |
|---|---|---|---|
| **800 V monopolar, NVIDIA reference** | NVIDIA MGX / Kyber; ByteDance | 800 V two-wire to the compute blade. On-blade modules step down to about 50 V or straight to 12/6 V. Grounding is either floating with insulation monitoring or a solid-grounded return (Siemens/NVIDIA paper, cited in [8]) | NVIDIA's 800 VDC power rack arrives "H2 2026", row power centers "2027" (NVIDIA blog, 11 Aug 2026 [38]). Air-cooled samples mid-2026 and a liquid-cooled VR Ultra variant late 2026 [8]. ByteDance's AI Rack 3.0 (two 500 kW cabinets, 800 V HVDC) and a building-level 800 V demonstration of tens of MW (10 Jul 2026 [43]) |
| **±400 V bipolar, OCP Mt Diablo / Diablo 400** | Google, Meta, Microsoft (co-authors); AWS reported to use about 800 kW on ±400 V [44] (secondary) | 800 V line-to-line with 400 V to ground. Reuses the EV 400 V supply chain (Google [23]). Either high-resistance or solid grounding [8] | Diablo 400 spec v0.7.0 and Mt Diablo ±400 V sidecar spec current; **Mt Diablo 2.0 (native 800 V support) "forthcoming"** (OCP blog, 11 Aug 2026 [39]). Sidecar range 100 kW–1 MW per IT rack, ≥20 ms hold-up, 0.1% drop over 5 m [8] |
| **Path A: LVDC side power rack** | OCP and NVIDIA (joint white paper, Mar 2026) | 480 VAC → ±400 V or 0–800 VDC beside the compute rack; upstream AC unchanged | Shipping from 2H26 (Delta ±400 V mass production 3Q26 [3]) |
| **Path B: direct MVAC → 800 VDC** | OCP / Google / Microsoft / NVIDIA | Megawatt transformer-rectifiers or **SST skids** convert MV AC to 800 VDC facility-wide | **OCP SST spec rev 0.3.0** (effective 22 Jun 2026): 13.8 kV (5 MW) and 34.5 kV (5 or 10 MW) SKUs, 800 V unipolar output, **≥98% efficiency at 50–100% load**, design life 15+ years [40] |
| **Chinese HVDC (240 V / 336 V)** | Alibaba, Baidu, Tencent; vendors Zhongheng, Kehua, Huawei, Delta China | 240 V HVDC (Alibaba Zhangbei, Baidu Baoding). Zhongheng's "Panama" system takes **10 kV in** and claims 98% efficiency and "3% higher than UPS", with 20% lower capex and 50% less floor space (company page [45]). The 336 V class is used by telecom operators (background knowledge, not re-verified this session) | Mature for years. Global HVDC penetration was still "<3%" and China's HVDC market is put at ¥89.2B (2024) → ¥300B (2028) (36Kr, secondary [10]) |

**The engineering point.** ±400 V and 800 V monopolar look the same to the load, which sees 800 V across its input (Vertiv [37]). The difference is insulation coordination, touch-safety voltage to ground, conductor count, and which component ecosystem you reuse: 400 V-class EV parts and 650 V GaN/SiC for ±400 V, versus 1200 V SiC for 800 V monopolar. The Diablo spec deliberately includes an option for NVIDIA's isolated two-wire 800 V output [44] (secondary). **Both will coexist "in the same data halls" for years** [44]. That favors suppliers who build both, such as Delta, which ships ±400 V first and 800 V next year [3].

### 1.3 What is actually shipping in 2026

- **Vera Rubin (shipping from fall 2026) is still a 54 V rack.** NVIDIA said Rubin entered full production for fall 2026 deliveries to eight cloud customers (6 Jul 2026 [6], secondary). Racks were "running at key hyperscalers" by the Q2 FY27 print (26 Aug 2026 [46], secondary). The NVL72 rack draws about **188 kW (Max-Q) to 227 kW (Max-P)** (Schneider reference design, 8 May 2026 [47]), and TrendForce puts VR200 at about 225 kW against about 150 kW for GB300 [2]. In-rack power uses 110 kW AC→DC power shelves: Lite-On's 110 kW shelf was scheduled for mass production from June 2026 [48], and Delta and Lite-On both showed 110 kW modules at COMPUTEX 2026 [49] (secondary).
- **The 800 V power rack is optional on Vera Rubin.** It was "ready for customer shipments" in 3Q26, with broader adoption on Rubin Ultra (2H27) and widespread deployment in 2028 (TrendForce, 25 Jun 2026 [2]). One 800 V power rack supports "one to two Rubin Ultra racks" (about 660 kW each) depending on redundancy [2].
- **Vendor shipping status:**
  - **Delta:** ±400 V mass production 3Q26 with "limited" FY shipments; NVIDIA 800 V "small-volume shipments" in Q4 and a "true volume ramp" next year; SST "first mass production line next year" (call, 30 Jul 2026 [3], secondary).
  - **Lite-On:** 800 VDC power cabinet in Q4 2026 [48]; customer prototype testing in Aug 2026, small-volume production from Nov 2026 and mass production 1Q27 [22][50] (secondary); US-CSP validation in 2H26 with possible entry into the Rubin supply chain in 2027 [51] (secondary).
  - **Vertiv:** initial rack and pod 800 V deployments 2027, data-hall level 2028. It cites a Taiwan GB300 site with VisionBay AI as the "world's first AI data center adopting 800V DC architectures" (Q2 call, 29 Jul 2026 [4]).
  - **Schneider:** an 800 VDC power prototype at GTC 2026 designed for Vera Rubin Ultra [47].
  - **Eaton:** Beam Rubin DSX co-design with NVIDIA (16 Mar 2026 [52][53], secondary).
- **Hyperscalers:** Google's ±400 V "first embodiment is an AC-to-DC sidecar" (2025 [23]). At OCP EMEA 2026, speakers described rack density going from ~150 kW today to 250 kW by end-2026 and 650 kW in 2027, sidecars up to ~1 MW as the "immediately deployable" option (Schneider), and SST plus centralized HVDC above ~5 MW [54] (secondary). Diablo 400 was contributed to OCP by Google, Meta and Microsoft (Oct 2025) [55]. Meta's HPR V4 roadmap uses 400 V DC at up to 800 kW, expandable to 1 MW [25]. DCK reports the first DC-native data centers are expected to be completed around end-2027 (Mar 2026 [56]).

### 1.4 Penetration: published forecasts and my estimate

| Source (date) | Metric | 2026 | 2027 | 2028 | 2029 | 2030 |
|---|---|---|---|---|---|---|
| Chinese broker, unattributed, via Wallstreetcn (page date unclear; cites Jul 2026 events) [7] (secondary) | 800 V "penetration" of global AIDC new installs (60.8 GW in 2027, 85.3 GW in 2028) | 3% | **40%** | **76%** | – | – |
| SemiAnalysis (26 May 2026) [8] | Cumulative incremental capacity powered by 800 VDC | – | – | sidecar TAM peaks at about $11B | facility-level inflection | **about 39 GW cumulative**; SST TAM about $32B |
| RBC / M. Fielding (about 3 Jul 2026) [9] (secondary) | Share of data centers on 800 V DC | – | – | – | – | **about 20%** |
| TrendForce (25 Jun 2026) [2] | Qualitative | 800 V optional (Vera Rubin) | broader with Rubin Ultra (2H27) | "widespread deployment" | – | – |
| Dell'Oro (19 Aug 2026) [18] | Qualitative | – | – | – | SSTs start to reduce UPS demand meaningfully | – |
| Vertiv (2026) [37] | Qualitative | – | – | – | – | hyperscale leads, neoclouds and colo lower, enterprise in single digits through 2030 |
| **My estimate (base)** | Share of *new AI-accelerator IT MW* commissioned with ±400/800 V DC distribution (sidecar or facility) | 1–3% | **5–12%** | **15–30%** | **30–45%** | 40–55% |
| My estimate (bear: Kyber in 2028, codes lag) | same | ~1% | 3–5% | 10–15% | 20–30% | 30–40% |

**How I built my estimate:**
1. **Two SemiAnalysis anchors that pull in different directions.** (a) Its ~$11B sidecar TAM peak in 2028 at ~$0.5M/MW implies **~20 GW of sidecar deployments in 2028** (my calc) [8]. Against 2028 AI additions of ~60–85 GW (the broker's 85.3 GW [7]; Dell'Oro's ~200 GW of *all* data-center additions through 2030 [18] argues for the lower end), that is roughly **25–35%** of 2028 new AI MW. (b) Its ~39 GW cumulative 800 VDC by 2030 against ~200–350 GW of additions over 2026–30 is only ~11–20% cumulative (my calc on an assumed denominator). I read (b) as native or facility-level DC and (a) as sidecars. My base case sits between them because I discount sidecar uptake for code and AHJ friction and for Kyber timing.
2. Racks above about 300 kW (Kyber/Rubin Ultra at about 600–660 kW [2][12]) essentially require HVDC. Vera Rubin at about 190–250 kW does not. The share of new MW in at least 300 kW racks is therefore the main driver, and Kyber's timing (2027 per NVIDIA, 2028 per SemiAnalysis [5]) moves the 2027 and 2028 numbers by about one year.
3. ±400 V sidecars at Google, Meta and AWS on non-NVIDIA accelerators add a floor from 2026–27.
4. I read the Chinese 40% and 76% figures as shares of **NVIDIA rack shipments** on the newest platform. They are not shares of all new MW, and the source does not define its denominator [7].

### 1.5 Timeline summary

| Window | Milestone | Evidence |
|---|---|---|
| 2025 | NVIDIA 800 V white paper (May); OCP Mt Diablo 0.5 (May); NVIDIA names about 30 partners (Oct) | [26][19][23] |
| 1H26 | GTC (Mar): 800 V products from TI, ST, Navitas, Infineon, EPC, Delta, Lite-On, Eaton and DG Matrix. OCP/NVIDIA LVDC white paper. Delta SST at Chindata (Feb) | [21][29] |
| 2H26 | ±400 V sidecars ship (Delta 3Q26). NVIDIA 800 V power rack optional on Vera Rubin. OCP SST spec v0.3 (Jun, publicized Aug). Eaton + Infineon MVSST (Sep). OCP Global Summit **12–15 Oct 2026** | [38][40][2][3][31][57] |
| 2027 | 800 V volume ramp (Delta, Lite-On 1Q27). Vertiv rack/pod deployments. Rubin Ultra / Kyber (NVIDIA: 2027; SemiAnalysis: 2028). Delta SST mass-production line. Heron pilot production. Vicor 2nd-gen VPD production ramps 2H27. ITC final determination for Vicor's 337-TA-1484 | [5][3][13][4] |
| 2028 | Data-hall-level 800 V (Vertiv). "Widespread" 800 V (TrendForce). Sidecar TAM peaks (SemiAnalysis) | [2][8][4] |
| 2029+ | NEC 2029 adds 800 VDC support. Facility DC and SSTs reduce UPS demand (Dell'Oro). SST end-state (SemiAnalysis Phase 4) | [8][18] |

---

## 2. Bill-of-materials shift ($/MW): who loses content, who gains

### 2.1 Published anchors

| Item | Figure | Source (date) |
|---|---|---|
| Phase-1 800 V power rack (sidecar) ASP | **$400–500k per unit (~$0.5M/MW)**, "roughly 10× the ~$40k ASP of standard AC power-rack equipment" | SemiAnalysis, 26 May 2026 [8] |
| Phase-3 battery rack | ~$0.2M/MW | same [8] |
| SST | **$1.0–1.5M/MW** | same [8] |
| Centralized UPS displaced in Phase 2 | ~$1.2M (per MW, according to a secondary summary) | SemiAnalysis via BigGo [58] (secondary) |
| Total electrical content | **$3.6–4.8M/MW, roughly stable across phases** | SemiAnalysis [8] |
| Sidecar TAM | peaks at **~$11B in 2028** | SemiAnalysis [8] |
| SST TAM | **~$32B by 2030** (SemiAnalysis) vs **~$1B by 2030** for the "small power transformer" market (an Infineon estimate as quoted; scope unclear) | [8]; [17] (Apr 2026) |
| Native-800 VDC capex effect | non-IT capex **−15 to −18%**; power-related opex −8 to −10%; SST-based designs **−$4–8M per 10 MW**; copper −40 to −50% | McKinsey, 30 Jul 2026 [11] |
| Cost of ±400 V HVDC system vs UPS | 800 kW ±400 V HVDC system ~**$450k** vs ~$100k for equivalent UPS capacity | 36Kr [10] (secondary; scope of the comparison unclear) |
| Rack PSU content | GB200/GB300 5.5 kW PSUs; next generation 12 kW; **per-cabinet PSU value $60–70k; VR200 "may exceed $150k"**; Delta ~70% share of Blackwell PSUs | Hengda Investment Advisory via cnyes [59] (secondary) |
| Rack power systems share of DC capex | **3–5%** | TrendForce, 2 Mar 2026 [60] |
| Eaton's addressable content | **$2.9M → $3.4M per MW** after the Boyd Thermal deal | TIKR [53] (secondary) |

**My calc on these anchors:**
- A GB300 rack at ~135 kW with $60–70k of PSU content is ≈ **$0.45–0.5M/MW**.
- A VR200 rack at ~225 kW with >$150k is ≈ **≥$0.67M/MW** [59][2].
- So the sidecar's ~$0.5M/MW [8] **re-homes** rack-power dollars more than it adds them. The dollars move from in-rack shelves to a separate power rack. The extra money is in BBU and capacitor content, DC distribution (busway, cable, connectors) and protection.

### 2.2 Illustrative power-train content per MW of IT load (my estimates unless cited)

All figures are $M per MW of IT, covering the in-hall train from the MV switchgear output to the GPU package. They are **order-of-magnitude** estimates meant to show *direction*. Single-sourced vendor prices are not available.

| Block | Legacy AC (GB300-class, 2025–26) | Phase 1: ±400/800 V sidecar (2026–28) | Phase 3: facility 800 VDC (2028–29+) | Phase 4: SST (2029+) | Direction |
|---|---|---|---|---|---|
| MV/LV transformer (unit sub) | 0.05–0.15 | 0.05–0.15 | 0.05–0.15 (with central rectifier) | **0** (SST replaces it) | Loses only in Phase 4 |
| LV AC switchgear / switchboards | 0.2–0.4 | 0.2–0.4 | **→ DC switchboards** (0.15–0.3) | DC switchboards | Shifts AC → DC |
| Central double-conversion UPS + batteries | **0.3–1.2** (SA: ~$1.2M) | 0.3–1.2 (unchanged upstream) | **~0** → battery racks ~0.2 (SA) and/or MV UPS / BESS | ~0 / BESS | **Big loser from Phase 2** |
| AC floor PDUs / RPPs / AC rack PDUs | 0.1–0.2 | 0.1–0.2 | **~0** | ~0 | Loser (McKinsey) |
| Rack AC/DC PSU shelves (54 V) | **0.45–0.5** (my calc) | **→ power rack ~0.5 (SA)** | central rectifiers / TRU (0.2–0.4) | inside SST | Re-homed, then compressed |
| BBU / capacitor / supercap storage | 0.03–0.08 | **0.08–0.15** (Delta: 480 kW of BBU per 660 kW rack) | 0.2 (SA battery rack) | 0.2 + BESS | **Gainer** |
| DC busway / cable / connectors | (54 V busbar) | +0.03–0.08 | **+0.05–0.15** | +0.05–0.15 | **Gainer** (but copper per MW falls 40–50%) |
| DC protection (SSCB, DC MCCB, DC fuses, insulation monitoring) | ~0 | +0.01–0.03 | **+0.05–0.15** | +0.05–0.15 | **Gainer** |
| 800 V → 50/12/6 V DC-DC (in-rack / on-blade) | 54→12 V IBC ~0.03–0.06 | same | **800→12/6 V (64:1 LLC etc.) 0.06–0.15** | same | **Gainer**: higher ratio, isolation, more silicon per kW |
| VRM / vertical power delivery at the GPU | 0.15–0.3 (rising with kA per GPU) | same | same | same | **Gainer** regardless of the bus voltage |
| SST | 0 | 0 | 0 | **1.0–1.5 (SA)** | Gainer post-2029 |

**How to read it.**
1. The **largest single loser is the central UPS**, from Phase 2/3 onward. That is a 2028–30 event and does not hit 2026–27 numbers. Even then the UPS function migrates to MV UPS or BESS. Vertiv states that with sidecars "UPS goes to MV and needs to support grid interactivity" [37].
2. Dell'Oro sees SST-driven UPS displacement as meaningful only **from 2029** [18].
3. The **per-server CRPS PSU** dies at the rack level. Its dollars move to power racks, BBUs and high-ratio DC-DC, mostly with the *same* Taiwanese vendors (Delta, Lite-On).
4. **LV switchgear** turns into DC switchboards. RBC calls Legrand "vulnerable" (AC PDUs, busway) [9] (secondary).
5. **MV switchgear and MV transformers survive** until SSTs scale. Large power transformers and GSUs upstream are not affected at all.

### 2.3 Winners and losers by product (company mapping)

| Product line | Direction 2027–30 | Main public exposure | Note |
|---|---|---|---|
| Central AC UPS (double conversion) | **Down** after 2028 | Vertiv, Schneider, Eaton, ABB, Huawei (private), Kehua 002335.SZ, Delta | The same firms sell the replacements (MV UPS, BBU racks, power racks), so this is a mix risk rather than a revenue cliff |
| AC floor/rack PDUs, RPPs | **Down** | Vertiv, Schneider, Eaton, Legrand (LR.PA / LGRDY), nVent (NVT) | Legrand flagged by RBC [9] |
| Per-server CRPS PSUs | **Down → re-homed** | Delta, Lite-On, Chicony Power 6412.TW, Advanced Energy (AEIS), Bel Fuse (BELFB), Murata (6981.T), Flex | Delta/Lite-On capture the re-homing. AEIS and Bel Fuse need 800 V products to hold share (not verified in this session) |
| Power racks / sidecars / row rectifiers | **Up strongly 2026–28, then flat** (SA peak 2028) | Delta, Lite-On, Vertiv, Schneider, Eaton, Flex, Megmeet 002851.SZ, ABB | NVIDIA's named "power system components" partners: Bizlink, Delta, Flex, Lead Wealth, LITEON, Megmeet [19] |
| SST | **Up from ~0** (2027 first lines, 2029+ volume) | Delta, Eaton, ABB (+DG Matrix), Siemens AG (+Reinhausen), Hitachi, Mitsubishi Electric, Sungrow, XD Electric; private: DG Matrix, Heron, Amperesand | §3 |
| DC busway / busbar / connectors | **Up** | Vertiv (PowerBar), Schneider, Eaton, Legrand (Starline), Amphenol, TE, BizLink, Molex (private) | UL 857 Ed.14 → 1000 VDC; Ed.15 targets 1500 VDC [8] |
| DC protection | **Up from a small base** | ABB (Infinitus), LS Electric 010120.KS, Eaton (Bussmann), Siemens, Schneider, Littelfuse, Mersen, Atom Power (private) | §6 |
| Rack BBU / supercap / LIC | **Up** | AES-KY 6781.TW, Lite-On, Delta, Musashi Seimitsu 7220.T, LS Materials 417200.KQ, Vinatech 126340.KQ, Jianghai 002484.SZ, Nippon Chemi-Con 6997.T, Eaton, Skeleton (private) | §7 |
| 800→12/6 V converters and vertical power | **Up** (content per GPU rising) | Vicor, Infineon, MPS, TI, ADI, Renesas, ST, Navitas, onsemi, AOS, Richtek (MediaTek), Silergy, uPI 6719.TW; Delta/Flex/Celestica/Luxshare as module integrators | §5 |

---

## 3. Solid-state transformers (SST): who ships, what is inside, what is hype

### 3.1 What an AI-data-center SST is

An SST takes MV AC (10–35 kV) through an active front end and a medium/high-frequency isolated DC-DC stage (a dual active bridge or resonant converter, switching at **≥20 kHz** [8]). It delivers a regulated 800 VDC bus without a 50/60 Hz iron-core transformer or a separate rectifier. The OCP rev 0.3.0 requirements are 13.8 kV (5 MW) and 34.5 kV (5/10 MW) inputs, 800 V unipolar output, ±1% static regulation, ≥98% efficiency at 50–100% load, ride-through per utility standards, and 15+ year design life [40]. The SiC used is mostly 3.3 kV and 2.3 kV class to cut module count [61]. Wolfspeed sells a 10 kV SiC MOSFET as bare die (Mar 2026) [8], and Infineon said in Apr 2026 that its 2.3 kV and 3.3 kV parts would come "this summer and later this year" [17]. Enphase's IQ SST uses GaN bidirectional switches at 100–150+ kHz [61].

**Honest engineering comparison (my estimate).**
- A modern dry-type MV/LV transformer exceeds 99% at rated load [17]. An active-front-end rectifier is about 98–98.5%, so a line-frequency transformer-rectifier unit (TRU) delivers about **97–97.5%** combined, against an SST at **98–98.5%** [8][40].
- The *efficiency* gain from SST over a TRU is therefore only about **0.5–1.5 points**.
- The real advantages are elsewhere: footprint (Delta claims >50% space saving at about 1 m²/MW [29]; Eaton up to 50% smaller footprint and 277.7 kW/m² [33]), weight, controllability (grid-forming, ride-through, power smoothing, bidirectional storage ports), and potentially shorter lead time [61].
- The costs: **about 2× the price of a conventional transformer** [17], an unproven 15–20 year field reliability record (power electronics have the "highest failure rates in data centers" [17]), and **about 3× the insulation requirement** in the MV high-frequency transformer [17].
- First-generation two-stage SSTs reach about **0.1 MW/m³** at 98–98.5%. The target is 1 MW/m³ with 30% lower losses [17].

### 3.2 Vendor status (as of 2 Oct 2026)

| Vendor | Product / evidence | Status | Certification | Source |
|---|---|---|---|---|
| **Delta Electronics** (2308.TW) | SST cabinet up to 1 MW, MV AC → 240/400/800 VDC, up to 98.5%, about 1 m²/MW, SiC | **Live** at Chindata North China (Meituan workload), "formally implemented" Feb 2026. Q2 call: SSTs "in trials", **first mass-production line 2027**. MOU with US "X LABS" on next-gen SST | Not stated | [29][30][3][51] |
| **Eaton** (ETN) | MVSST / MVSST 2.0: 98.5% max, 277.7 kW/m², bidirectional; Infineon SiC (29 Sep 2026), evaluating 2.3/3.3 kV modules; APAC focus. Came via **Resilient Power Systems**, closed 6 Aug 2025 for $55M cash plus up to $95M earn-out; one source puts contingent fair value at $31M (total about $86M) | Launched. No hyperscale deployment disclosed | "Among the first MV SSTs to achieve **IEC** certification". UL path unclear | [31][33][62][63][16] |
| **ABB** (ABBN.SW) | No own data-center SST product found. **Investor in DG Matrix** (Series A, Feb 2026). ABB/Hitachi Energy hold the largest SST patent family (PETT traction, 2008–11). HiPerGuard MV UPS at 98% | Partnership-led | – | [64][16][8] |
| **Siemens AG + Reinhausen** (private) | Joint development and **serial production** of SSTs for MV AC up to 36 kV → 800 VDC (announced 14 Aug 2026) | Development; "did not say when it would become commercially available" | – | [35][36] |
| **Siemens Energy** (ENR.DE / SMEGF) | No data-center SST found. The Reinhausen deal is Siemens AG | – | – | (correction to a common claim) |
| **Hitachi Energy** (Hitachi 6501.T / HTHIY), **Mitsubishi Electric** (6503.T / MIELY), **GE Vernova** (GEV) | Named NVIDIA "data center power systems" partners (Oct 2025). SST IP from traction (Hitachi/ABB PETT; Mitsubishi/Toshiba Shinkansen) | No shipping data-center SST found | – | [19][16] |
| **Schneider** (SU.PA), **Vertiv** (VRT) | Seeking SST partnerships (TrendForce Mar 2026). Vertiv: SST is "a matter of project development" | Not shipping | – | [60][4] |
| **Lite-On** (2301.TW), **Megmeet** (002851.SZ) | "Investing heavily" in SSTs | Development | – | [60] |
| **Sungrow** (300274.SZ) | 130 MW SST project (secondary) | Unclear | – | [65] |
| **China XD Electric** (601179.SS) | 2.4 MW data-center SSTs deployed under "East Data, West Compute" | Deployed (China) | – | [8] |
| **DG Matrix** (private) | Interport multi-port SST, 400 kW, >98.5%, **ST SiC**; "only SST included in Nvidia's MGX reference architecture"; Series A $60M (Feb 2026, Engine Ventures with MHI and ABB), >$100M raised; NC factory up to 1,000 units/yr; partners PowerSecure (Southern Co.), Exowatt | "Shipping production units"; Exowatt pilot | Targeting UL certification by end Q2 2026 (SA). Not confirmed | [64][8][63] |
| **Heron Power** (private; founded by ex-Tesla Drew Baglino) | Heron Link 4.2 MW; claims 98.5% MV-to-rack; Series B $140M plus $60M credit (JPM, TriplePoint); Morgan Hill CA plant >$100M, 10,000 units/yr, designed to scale to 40 GW; NVIDIA-named partner | "First 10 engineering prototypes this summer" (website, undated); **pilot production 2027** | – | [66][44][19] |
| **Amperesand** (private, Singapore) | >98.5% target; Port of Singapore pilot (2024) | Targets 30 MW of commercial deployments in 2026 | – | [8][61] |
| Novos Power (private) | Direct MV-to-800 VDC, "50% smaller footprint and air cooling" (claim) | Pre-commercial | – | [8] |
| **SolarEdge** (SEDG) | **Not verified.** I found no primary evidence of a data-center SST product this session | – | – | – |

**Market reality checks:**
- SST startups raised more than **$320M** in the 12 months to Mar 2026 [8].
- "Field-deployed commercial-class SST in revenue service globally is measured in **single digits**" (May 2026) [16].
- "Most other SST manufacturers seem to be sitting in real-world validation testing with no project commitments yet" (PCIM panel, Jun 2026) [61].
- No SST vendor had completed UL data-center certification as of May 2026 [8].

### 3.3 Inside the SST: semiconductors and magnetics

| Sub-component | Technology | Suppliers (public ticker) | Bottleneck? |
|---|---|---|---|
| MV-side switches | 2.3 / 3.3 kV SiC MOSFET modules (10 kV die emerging) | Infineon (IFX.DE) to Eaton; STMicro (STM) to DG Matrix; Wolfspeed (WOLF) 10 kV die; Mitsubishi Electric, Hitachi, Fuji Electric (6504.T), ROHM (6963.T), onsemi (ON) | **No.** The internal hub notes describe 6-inch SiC as in a Chinese price war [67]. HV (≥3.3 kV) module *qualification* is the constraint, not wafer volume |
| LV-side switches (800 V) | 1200 V SiC or 650 V GaN (stacked/bipolar) | Infineon, onsemi, ST, ROHM, Navitas (NVTS), Innoscience (2577.HK), Power Integrations (POWI, 1250/1700/2200 V PowiGaN) | No |
| Medium-frequency transformer core | **Nanocrystalline** tape-wound (Bs ≈1.2 T, low loss to tens of kHz); **amorphous** (Bs about 1.5 T, higher loss); **MnZn ferrite** (Bs about 0.4–0.5 T, lowest loss above ~50 kHz but bulky at MW scale). Properties are background knowledge except VAC's datasheet | Nanocrystalline: **VAC** (VITROPERM, Bs ≥1.2 T; private), **Proterial** (FINEMET; formerly Hitachi Metals, private since 2023 per background knowledge), **Qingdao Yunlu** (688190.SS, amorphous and nanocrystalline), **AT&M** (000969.SZ), **DMEGC** (002056.SZ). Ferrite: **TDK** (6762.T / TTDKF), DMEGC, **TDG** (600330.SS), Ferroxcube (Yageo 2327.TW; background) | **Not a material bottleneck.** Yunlu is −32% YTD and −49% from its May high [1], which is not a scarcity signal. The bottleneck is **MV insulation design** (about 3× insulation [17]), partial-discharge-free winding/potting, and thermal design of the MFT |
| DC-link and resonant capacitors | Film capacitors (1100–2000 V class) | TDK, Panasonic, Nichicon (6996.T), Vishay (VSH), Jianghai (002484.SZ), KEMET (Yageo) | No (EV supply chain) |
| Gate drivers (5–8 kV reinforced isolation) | Isolated drivers | Infineon, TI, ADI, Power Integrations (SCALE-iDriver), Silicon Labs (background) | No |

**Verdict.** The SST is an **integration and certification bottleneck, not a component bottleneck**. Winners will be firms that hold (a) MV certification (IEC now, UL later), (b) a hyperscaler or NVIDIA qualification, and (c) a field service organization. That favors Delta, Eaton, ABB-DG Matrix and Siemens-Reinhausen over pure-play startups, and it argues **against** paying for "SST semiconductor" exposure as a separate thesis before 2029.

---

## 4. Rack power: power shelves, power racks and 800 V → 50/12/6 V conversion

### 4.1 NVIDIA's named 800 VDC partners: a list, not a design-win register

| Category | May 2025 blog [26] | Oct 2025 blog [19] / partner page, updated 27 Aug 2026 [27] |
|---|---|---|
| Silicon | ADI, Infineon, Innoscience, MPS, Navitas, onsemi, Renesas, ROHM, ST, TI | adds **AOS, EPC, Power Integrations, Richtek** |
| Power-system components | Delta, Flex Power, Lead Wealth, LiteOn, Megmeet | adds **BizLink** |
| Data-center power systems | Eaton, Schneider, Vertiv | adds **ABB, GE Vernova, Heron Power, Hitachi Energy, Mitsubishi Electric, Siemens** |

**Vicor is not on any NVIDIA 800 VDC list.** Its AI customers named on the record include Cerebras (Q2 call [13]). Vicor says "four leading OEMs and hyperscalers" license VPD (Sep 2026 [68], secondary).

**Actual NVIDIA-linked production evidence:**
- **Lite-On** co-designed the GB300 power-smoothing storage, 65 J per GPU [20]. Its 110 kW power shelf for Vera Rubin NVL72 was scheduled for mass production from June 2026 [48][69].
- **Delta** shipped small-volume NVIDIA HVDC in Q4 2026 [3].
- **Eaton** has a "Beam Rubin DSX" co-design (16 Mar 2026) [53] (secondary).
- **Schneider** published a Vera Rubin reference design [47].
- **Vertiv**'s CoolChip CDU was the first CDU qualified as NVIDIA DSX Ready (21 Sep 2026; hub digest [70]).

### 4.2 GTC 2026 (March) 800 V conversion products (company claims)

| Company | Product | Spec | Source |
|---|---|---|---|
| TI (TXN) | Isolated bus converter, 800 V → 6 V | 20 kW+, **97.6%** peak, >2,000 W/in³; also 30 kW 800 V AC/DC PSU and an 800 V capacitor-bank unit with EDLC supercells | [21]; [44] (secondary) |
| ST (STM) | 800 V → 6 V | 20 kW, **96.5%**, eight-level stacked LLC | [21] |
| Navitas (NVTS) | Power delivery board, 800 V → 6 V | **96.5%**, stacked full-bridge, GaN | [21] |
| ST, EPC, Infineon | Direct 800 V → 12 V | 6–10.8 kW, **97.5–98.2%** peak | [21] |
| NVIDIA reference | 64:1 LLC, 800 → 12 V near the GPU | "26% less area than traditional multi-stage" | [19] |
| Delta (2308.TW) | **660 kW in-row 800 VDC power rack** with 480 kW BBU (6 × 110 kW shelves); 18.5 kW AC/DC units up to 98%; 90 kW 1RU DC/DC shelf for MGX | | [21]; [22] (secondary) |
| Lite-On (2301.TW) | 800 VDC power rack and 110 kW power shelf (MGX) | 98.2% peak (some solutions) | [69]; [49] (secondary) |
| Vertiv (VRT) | 900 kW-class 800 VDC cabinet with modular PDU (COMPUTEX 2026) | – | [49] (secondary) |
| MPS (MPWR) | "Began sampling High Voltage AC to DC products for 800V data center architectures" (Q2 2026) | – | [42] |
| Navitas | "Volume production samples ... targeting 800 V architectures"; "selected hyperscalers and XPU platforms to ramp in 2027" | – | [71] |
| Power Integrations (POWI) | 1250/1700 V PowiGaN (Oct 2025), 2200 V PowiGaN (2026) | – | [72] |

**Engineering read.** In the 800 → 6/12 V stage the lead is about one point of efficiency, and ten-plus credible silicon vendors compete [19]. This stage is **not scarce**. Margin will go to whoever owns the *module* (magnetics, packaging, thermal) and the qualification slot with the rack integrator.

### 4.3 Market structure of AI rack power

| Vendor | Position | Evidence |
|---|---|---|
| **Delta** | #1. AI server power share **50–70%** depending on source and denominator; **~70%** of Blackwell PSUs. AI revenue passed **50% of group** in 2Q26 | [22][59] (secondary); [3] |
| **Lite-On** | #2. **~35%** of the NVIDIA power supply chain; also pursuing US-CSP ASIC racks | [22] (secondary); [59] (secondary) |
| Megmeet (002851.SZ) | Entered the NVIDIA supply chain; "market share still expected to take time to build" | [60] |
| Flex (FLEX) | NVIDIA-named partner; "grid-to-chip" via Anord Mardix and others; planned **spin-off of Cloud & Power Infrastructure**; Investor Day 10 Nov 2026 | [60][73] |
| Vertiv / Schneider / Eaton / ABB | Gray-space incumbents moving into power racks | [60] |
| AES-KY (6781.TW), Lite-On | Primary **BBU** suppliers | [59] (secondary) |
| Advanced Energy (AEIS), Bel Fuse (BELFB), Chicony Power (6412.TW) | Front-end PSU incumbents **not** on NVIDIA's 800 V lists. AEIS Data Center Computing revenue was **$191.5M in Q2 2026 vs $194.2M in Q1** (flat QoQ; +35% YoY) | [74]; [27] |

**Supply constraint (primary, Delta call, 30 Jul 2026).** "Key materials such as memory and MOSFETs are already fully constrained," and component shortages and price pressure would likely intensify in 2H26 [3] (secondary transcript summary). So the scarce input in rack power today is **commodity silicon MOSFETs**, not SiC or GaN.

---

## 5. Vertical and backside power delivery to the GPU package (the real bottleneck)

### 5.1 Physics (my estimates unless cited)

- **Current.** Rubin's GPU TDP is about **1.8–2.3 kW** (Max-Q/Max-P, secondary [12]). At a core voltage of about 0.7–0.8 V (my assumption), a 2.3 kW part draws **≈2.9–3.3 kA**. Even if only half the power sits on the core rail, that rail still needs ~1.5 kA. Next generations push 4–5 kA, which is my extrapolation, not a sourced figure.
- **Lateral loss.** Delivering 3 kA laterally through PCB planes with even 50 µΩ of path resistance dissipates I²R = 3,000² × 50×10⁻⁶ ≈ **450 W**, about 20% of the chip's power (my calc). That is why regulators move *under* the package (vertical power delivery, VPD): the path shrinks to a few hundred µm and the loss falls by roughly an order of magnitude.
- **Area.** At Vicor's claimed **3 A/mm²** (2nd-gen VPD baseline, Q2 call, 21 Jul 2026 [13]), 3 kA needs ~1,000 mm² of regulator footprint. At the "barely >1 A/mm²" Vicor attributes to competing IVRs [13] (company claim), it needs ~3,000 mm² (my calc). A Rubin-class package is roughly 4,000–6,000 mm² (my rough estimate). **Current density per mm² is therefore a first-order design constraint.**
- **Transients.** Training loads swing by tens of percent within milliseconds. GB300 handles this with power caps, ramp limits, a "power burner" and 65 J/GPU of stored energy, cutting grid peak demand by 30% [20]. At the die, microsecond di/dt is covered by package and board decoupling (MLCC, silicon capacitors). Higher current per GPU means **more decoupling capacitance and lower-ESL parts per GPU** (direction is my inference; I verified no per-GPU MLCC count this session).

### 5.2 Competing approaches

| Approach | Who | Status |
|---|---|---|
| Lateral multiphase VRM (12/6 V → core) with smart power stages | MPS, Infineon, Renesas, TI, ADI, AOS, Richtek/MediaTek, uPI, Silergy | Mainstream for H100/B200-class (background knowledge) |
| **1st-gen VPD** (stacked multilayer regulators or trans-inductor modules under the package) | MPS, Infineon, Delta, MetaPWR, Luxshare-built modules (inferred from ITC respondent lists) | Shipping. Vicor: "AI OEMs and Hyper-scalers are at a loss dealing with the current density and PDN limitations of 1st Gen. VPD systems" (Q2 release [41]) |
| **Vicor 2nd-gen VPD** (factorized power: 48 V/800 V bus converter → current multiplier "ChiP", gain >40) | Vicor | **3 A/mm² baseline completed; 5 A/mm² targeted early 2027**; 1.5 mm package height; development systems sampling Q2/Q3 2026; broader sampling late 2026–early 2027; **production ramps 2H27**; second fab late 2027–28 [13] |
| **IVR** (integrated voltage regulator in package or on die, fed ~1.8 V) | Intel FIVR heritage; Empower Semiconductor (private); TSMC-integrated solutions (background) | Vicor argues it trades low current density for low current gain and that "feeding IVRs with a current multiplier is an incremental opportunity for Vicor" [41]. **Contested.** IVRs win on transient response and per-core granularity |

### 5.3 The litigation map: an unpriced risk for the "well-followed" names

| Case | Date | Respondents | Status |
|---|---|---|---|
| **337-TA-1370** (power converter modules, computing systems) | Final determination **14 Feb 2025** | Delta Electronics (Americas), Quanta, FII USA, Ingrasys (Foxconn) | **Limited exclusion order** against all respondents plus cease-and-desist orders. The ITC found two Foxconn affiliates licensed for the '761 patent, which Vicor said it would appeal [75] |
| **337-TA-1484** (power converters, circuit board assemblies, computing systems) | Instituted **11 Feb 2026** | **Delta**, DET Logistics, **Luxshare** (two entities), **Shanghai Peiyuan/MetaPWR**, **Monolithic Power Systems** (three entities), **Wistron, Wiwynn, Quanta** (four entities) | Vicor expects a final determination **in 2027** [13][14] |
| **DN 3936**, "Certain Vertical Power Delivery Systems..." | Complaint filed **9 Sep 2026**, notice 14 Sep 2026 | **Delta, Infineon, Luxshare, MPS, Flex, Celestica, Quanta, Foxconn/FII, Ingrasys** (20 entities) | Seeks a limited exclusion order and cease-and-desist orders. **An institution vote is due about 30 days after filing (≈ mid-Oct 2026, my estimate from standard ITC practice)** [15] |

**Licensing traction:**
- A new license signed in 2Q26 lifted royalty revenue [76].
- A **non-exclusive VPD license with "a leading AI OEM"** was announced on 16–17 Sep 2026. It lets the licensee source VPD modules "from unlicensed suppliers" while paying royalties, at "much lower royalty rates for early adopters" [77].
- Q3 sequential-growth guidance rose from ~10% to >20% in mid-Sep [68] (secondary), then to **>30% on 30 Sep 2026** [78]. That implies **Q3 revenue >$186M** (my calc: $143.4M × 1.30), against a pre-announcement consensus near $169M [79] (secondary).
- In Oct 2025 Vicor said licensing would contribute "nearly $300 million" of expected revenue through 2026 [80].

**Why this matters.**
1. **MPS (39× FY27E [1]) is a respondent in two of these matters.** Enterprise Data was **$380.6M, 39% of Q2 2026 revenue, +164% YoY** [42]. An exclusion order covering "computing systems containing" infringing modules is a real precedent (1370), though respondents usually design around it, take a license, or win on presidential review or appeal.
2. **The new licensing model is a toll, not a supply win.** Licensees may keep buying from Delta, MPS or Infineon and pay Vicor. That caps Vicor's *product* share upside but creates high-margin royalties. Q2 GAAP gross margin was 58.0% [41], against a long-term target of 70% GM and 40% operating margin on $2.5B revenue [13].
3. **Insider signal.** CEO Vinciarelli adopted a 10b5-1 plan on 8 Jun 2026 to sell up to **1,000,000 shares in 10,000-share tranches at $4 steps from $404 to $800**, running 7 Sep 2026 to 31 Dec 2028 [76]. He sells nothing below $404 (a floor on his own valuation), but it is also an overhang above $404.

### 5.4 Package-level passives

| Part | Role | Public makers (tickers; YTD to 1–2 Oct 2026 [1]) | Read |
|---|---|---|---|
| MLCC (X7R/X7T, low-ESL, high-cap) | Decoupling, VRM output | Murata 6981.T (+161%), Samsung Electro-Mechanics 009150.KS (**+520%**), Taiyo Yuden 6976.T (+185%), TDK 6762.T (+45%), Kyocera/AVX 6971.T (+67%), Yageo/KEMET 2327.TW (+171%) | **Priced, possibly over-priced.** The group peaked in late June/early July 2026 (Murata 52-week high ¥12,250 on 22 Jun, now ¥8,467; Taiyo Yuden ¥22,655 on 1 Jul, now ¥10,095) [1]. SEMCO fell 11% on the Kyber-delay report (6 Jul 2026) [6] |
| Silicon (deep-trench) capacitors | In-package decoupling | Murata (IPDiA), Empower (private), plus foundry-integrated capacitors (background) | No investable pure play |
| Polymer aluminum / tantalum | Bulk decoupling, PSU hold-up | Nippon Chemi-Con 6997.T, Nichicon 6996.T, APAQ 6449.TW, Panasonic, Jianghai 002484.SZ, Yageo/KEMET | De-rated 44–61% from June highs [1] |
| Power inductors / trans-inductors | VRM, VPD modules | TDK, Murata, Sumida 6817.T, Delta, Coilcraft (private) | Not separately verified |

---

## 6. DC protection and distribution: breakers, fuses, busway, connectors

### 6.1 Why protection is the gate

- DC arcs have no natural current zero, so interrupting 800 V needs either long arc chutes (mechanical) or semiconductor interruption (SSCB).
- Fault currents on a stiff DC bus fed by rectifiers, batteries and capacitors rise in microseconds. An SSCB clears in **<25 µs** (ABB Infinitus [28]), against milliseconds for electromechanical breakers.
- Regulatory gaps (Jun 2026): **IEEE 1584 does not cover DC**; **NFPA 70E lacks 600–1000 VDC PPE tables**; full **NEC support for 800 VDC is targeted for NEC 2029**, so deployments before 2029 need site-by-site AHJ approval. UL launched a DC Safety Research Consortium [8].
- An IEC standard for semiconductor-based circuit breakers was "expected to be published within months" (Mar 2026) [56].
- On codes, Drybulb argues: "The barrier to 800VDC is not whether GaN can switch fast enough. It's that the global electrical code ... is written around AC" [44] (secondary).

### 6.2 Certified products (scarce credentials)

| Product | Spec | Certification | Company |
|---|---|---|---|
| **ABB SACE Infinitus** (SSCB) | Up to **1250 VDC, 2500 A**, interruption <25 µs | **IEC 60947-2**, described as "world's first fully certified" SSCB; CCC, CCS, DNV | ABB (ABBN.SW / ABBNY) [28]. SemiAnalysis lists it as 1000 V/2500 A and notes an Oct 2025 ABB–NVIDIA partnership [8] |
| **LS Electric DC MCCB** | 1500 VDC | **First UL-certified DC MCCB at 1500 V** | LS Electric (010120.KS) [8] |
| DC fuses (high-speed, 1000–1500 VDC) | EV, solar and BESS heritage | UL/IEC (product-level checks not done this session) | Eaton Bussmann, Mersen (MRN.PA), Littelfuse (LFUS), SIBA (private) (background) |
| Atom Power (private) | Digital SSCB panels | UL 489 (background, not re-verified) | Private |

**Investment read.**
- **ABB** combines a certified SSCB, a DG Matrix stake and NVIDIA-partner status, and its consensus is still **"hold" (2.8 on a 1–5 scale; 25 analysts; mean target CHF 84.1 vs CHF 79.62 on 1 Oct)** [1]. AI DC protection is too small inside ABB's ~$38B revenue to move the stock in 2027, but it is optionality the sell side is not paying for.
- **LS Electric** has the UL DC credential plus US transformer wins. It is up 128% YTD and 262% over one year [1], so it is priced as a transformer play.
- **Littelfuse**: Q2 2026 net sales $739M (+20%) and Q3 guide "approximately 26%" growth "supported by record bookings" with data-center demand cited [81]. It trades at about 22× FY27E [1]. The specific 800 VDC data-center fuse/SSCB revenue is undisclosed.
- **Mersen** sells DC fuses plus laminated busbar and SiC-adjacent graphite. At about 12× FY27E (€41.18 on 1 Oct) it is cheap [1], but its AI-DC revenue is undisclosed.

### 6.3 Busway, busbar and connectors

- **Busway standards.** UL 857 Ed.14 (2025) raised the ceiling to **1000 VDC**; Ed.15 targets 1500 VDC [8]. Delta demonstrated an 800 VDC air-cooled busway at OCP 2025 [8]. Vertiv's PowerBar Track double-stack is about 2–2.5 kA class (hub scorecard; not re-verified).
- **Copper.** Copper per MW falls **40–50%** in native 800 VDC versus AC [11] and ~45% versus 415 VAC per NVIDIA [26]. 800 V is a **mild negative for copper intensity** inside the hall, but it shifts value toward insulated, finger-safe, arc-rated products. ByteDance's AI Rack 3.0 uses a **liquid-cooled busbar** [43].
- **Companies:**
  - **Amphenol** (APH): Q2 2026 sales $8.8B (+55%, +30% organic), book-to-bill 1.23, "exceptional organic growth in the IT datacom market" [82]. It is a diversified compounder at ~26× FY27E [1]; 800 V power-connector content is not broken out.
  - **TE Connectivity** (TEL): about 17× FY27E, −4% YTD [1]. No primary 800 V data-center evidence was found this session.
  - **BizLink** (3665.TW): an **NVIDIA-named 800 VDC component partner** [19] with "data center busbar and busbar connectors, power whips, server cables, rack busbar" in its product line [1]. About 21× FY27E, +67% YTD.
  - **Legrand** (LR.PA; Starline busway): RBC calls it "vulnerable" to the AC → DC shift [9] (secondary).
  - **Molex** (private, Koch).

---

## 7. Energy storage in the hall and rack: GPU load-swing smoothing, and whether 800 VDC removes the UPS

### 7.1 What NVIDIA specifies

- **GB300 NVL72**: energy storage is **inside the power shelves**. "About half of the volume is occupied by capacitors" (electrolytic), giving **65 J/GPU**, co-designed with **Lite-On**. Combined with power caps, ramp limits and a "power burner" mode, this cuts grid peak demand by **30%** on a Megatron training run [20].
- **800 VDC architecture**: "high-power capacitors and supercapacitors placed close to the compute racks" handle the millisecond-to-second range, and "facility-level BESS at the utility interconnection" handle seconds to minutes [19].
- One report says Vera Rubin NVL144 calls for "**20× more rack-level energy storage than today**" [44] (secondary; NVIDIA source not verified).
- Kyber integrates supercapacitors for GPU transient management [8].
- **Rough sizing (my calc, illustrative).** 72 GPUs × 65 J ≈ 4.7 kJ per GB300 rack. "20×" would be ≈94 kJ, which is ~0.4 s of a 225 kW rack's full load. That is in the supercapacitor or lithium-ion capacitor (LIC) regime, not batteries.

### 7.2 Does 800 VDC remove the UPS?

**It removes the double-conversion UPS topology, not the function.**
- With native DC, the AC-DC-AC UPS pair is redundant. Batteries attach to the DC bus through BBUs or battery racks: about **$0.2M/MW** in SemiAnalysis's Phase 3 [8]. Delta's 660 kW rack carries **480 kW of BBU** [22].
- Upstream, the function moves to **MV UPS** (ABB HiPerGuard, 98% [8]) and **facility BESS**. Vertiv: in sidecar designs, "UPS goes to MV and needs to support grid interactivity", including power smoothing, LV fault ride-through, peak shaving and frequency support [37].
- Grid codes push the same way. NERC issued a Level 3 alert (May 2026) and proposed registering 1 MW+ data centers as "Computational Load Entities"; ERCOT's NOGRR282 adds ride-through requirements [8]. **More** fast storage is therefore needed, not less.
- **Net (my estimate):** the central-UPS dollar pool (~$0.3–1.2M/MW) shrinks from 2028–29, while BBU, supercap, LIC and BESS content grows. Vendors who make both, such as Vertiv, Schneider, Eaton and Delta, see a mix shift rather than a loss. NVIDIA's DSX Ready program already qualifies BESS from Hitachi Energy, LG Energy Solution and Tesla (Sep 2026; hub digest [70]).

### 7.3 Storage component makers (evidence quality varies)

| Company | Product | Evidence | Valuation and tape [1] |
|---|---|---|---|
| **AES-KY** (6781.TW) | Li-ion BBU modules | Named with Lite-On as a "primary BBU supplier" [59] (secondary) | NT$1,025; **−23% YTD**; ~17× FY27E; 3 analysts, mean target NT$1,472 |
| **Lite-On** (2301.TW) | BBU; GB300 capacitor storage | Primary (NVIDIA blog) [20] | ~19× FY27E |
| **Delta** (2308.TW) | BBU racks; supercapacitor work with Musashi | 660 kW rack with 480 kW BBU [22]; Musashi tie-up [59] (secondary) | ~29× FY27E |
| **Musashi Seimitsu** (7220.T) | Hybrid supercapacitor (LIC) | Delta partnership (secondary [59]) | ¥3,145; **−68% from ¥9,740 high (3 Jun 2026)**; ~10× FY3/28E. An auto-parts maker where the AI storage story evidently deflated |
| LS Materials (417200.KQ), Vinatech (126340.KQ) | EDLC supercapacitors | LS Materials linked to AI supercaps [83] (secondary) | −52% / −51% from April–May highs |
| Jianghai (002484.SZ), Nippon Chemi-Con (6997.T), Nichicon (6996.T) | Al-electrolytic and polymer capacitors, EDLC/LIC | Jianghai named as a server-power capacitor supplier [83] (secondary) | −54% / −61% / −44% from June highs |
| Skeleton Technologies (private), Eaton (supercap modules) | Supercapacitors | Background | – |
| IDTechEx | Data-center supercap market **$950M by 2037** (40.9% CAGR 2026–37) | [83] (secondary) | Small TAM |

**Read.** The storage-component trade **already had its boom-bust in 2026**. Many names are 50–70% off June highs, and the TAM is small (about $1B by 2037 for supercaps). BBU modules, with system integration and certification, are the stickier layer, which favors Lite-On and Delta over cell makers.

---

## 8. Value-chain map: raw materials to final systems

Exchange tickers, with the US OTC/ADR line where one exists and was quoted on Yahoo on 2 Oct 2026 [1]. Rows marked *(bg)* rely on background knowledge that was **not re-verified** in this session.

| Layer | Segment | Public companies | Notable private | Scarcity read (2026–28) |
|---|---|---|---|---|
| **L0 Materials** | Copper (busbar, cable) | Mersen EPA:MRN (CBLNF; laminated busbar); copper miners out of scope | Luvata *(bg)* | Copper per MW **falls 40–50%** with 800 V [11] |
| | Nanocrystalline / amorphous ribbon and cores (SST medium-frequency transformers, common-mode chokes) | Qingdao Yunlu SSE:688190; AT&M SZSE:000969; DMEGC SZSE:002056 | **VAC** (VITROPERM [84]); **Proterial** (FINEMET) *(bg)* | Not scarce: Yunlu −32% YTD [1] |
| | Ferrite (MnZn/NiZn) | TDK TSE:6762 (TTDKY/TTDKF); DMEGC; TDG SSE:600330; Ferroxcube (Yageo TWSE:2327) *(bg)* | – | Not scarce |
| | SiC substrate and epi | Wolfspeed NYSE:WOLF; Coherent NYSE:COHR *(bg)*; SICC *(bg)*; onsemi; ST | TankeBlue *(bg)* | **Oversupplied** (P2 report [67]) |
| | GaN-on-Si epi | Innoscience HKEX:2577; Infineon; TI; Navitas (fabless) | EPC | Not scarce |
| | Capacitor dielectrics and foils (BaTiO₃ powders, Al foil, film) | Murata, TDK, Nippon Chemi-Con TSE:6997 (in-house foil) *(bg)* | – | Not scarce now |
| | Li-ion cells for BBU | Samsung SDI, LGES, Murata, EVE *(bg)* | – | Not scarce |
| **L1 Power semiconductors** | Si MOSFETs (PSU, OR-ing, hot-swap, BBU) | Infineon XETRA:IFX (IFNNY); onsemi NASDAQ:ON; AOS NASDAQ:AOSL; Vishay NYSE:VSH; Toshiba, Nexperia *(bg)* | – | **Tight now**: Delta, 30 Jul 2026: "memory and MOSFETs are already fully constrained" [3] |
| | SiC MOSFETs/modules (1.2 kV rectifiers; 2.3/3.3 kV SST) | Infineon; ST NYSE:STM; onsemi; Wolfspeed; ROHM TSE:6963 (ROHCY); Mitsubishi Electric TSE:6503 (MIELY); Fuji Electric TSE:6504 (FELTY); Navitas NASDAQ:NVTS | – | HV module **qualification**, not wafers |
| | GaN HEMTs (PFC, LLC, 800→12/6 V) | Infineon; TI NASDAQ:TXN; Navitas; Innoscience; Power Integrations NASDAQ:POWI; Renesas TSE:6723 (RNECY) | EPC | Not scarce |
| | Controllers, smart power stages, VRMs, isolated gate drivers | MPS NASDAQ:MPWR; TI; ADI NASDAQ:ADI; Renesas; Infineon; Richtek (MediaTek TWSE:2454); Silergy TWSE:6415; uPI TWSE:6719; Power Integrations | Empower (IVR) | Content per GPU rising |
| **L2 Passives, magnetics, protection** | MLCC | Murata TSE:6981 (MRAAY); SEMCO KRX:009150; Taiyo Yuden TSE:6976 (TYOYY); TDK; Kyocera TSE:6971 (KYOCF); Yageo/KEMET | – | Re-rated and peaked in June 2026 |
| | Polymer / Al-electrolytic / film capacitors; supercaps and LICs | Nippon Chemi-Con; Nichicon TSE:6996; Panasonic TSE:6752; APAQ TWSE:6449; Jianghai SZSE:002484; Musashi Seimitsu TSE:7220; LS Materials KOSDAQ:417200; Vinatech KOSDAQ:126340 | Skeleton | 2026 boom, then bust |
| | Inductors / transformers / trans-inductors | TDK; Murata; Sumida TSE:6817; Delta; Chicony Power TWSE:6412 | Coilcraft | – |
| | DC fuses | Eaton (Bussmann) NYSE:ETN; Mersen; Littelfuse NASDAQ:LFUS | SIBA *(bg)* | Credentials matter |
| | DC breakers (SSCB, DC MCCB) | **ABB** SIX:ABBN (ABBNY); **LS Electric** KRX:010120; Eaton; Siemens XETRA:SIE (SIEGY); Schneider EPA:SU (SBGSY) | Atom Power | **Certification-scarce** |
| | Connectors, busbar, power whips | Amphenol NYSE:APH; TE NYSE:TEL; **BizLink** TWSE:3665; Legrand EPA:LR (LGRDY) | Molex | UL 857 → 1000 VDC |
| **L3 Modules / sub-assemblies** | Power shelves, PSUs (AC/DC 54 V; 800 V rectifier modules) | **Delta** TWSE:2308; **Lite-On** TWSE:2301; Megmeet SZSE:002851; Flex NASDAQ:FLEX; Advanced Energy NASDAQ:AEIS; Bel Fuse NASDAQ:BELFB; Chicony Power; Murata | – | Duopoly (Delta ~50–70%, Lite-On ~35%) [22] (secondary) |
| | BBU modules | **AES-KY** TWSE:6781; Lite-On; Delta | – | Growing |
| | 800→50/12/6 V DC-DC; VPD modules | **Vicor** NASDAQ:VICR (own Andover ChiP fab); MPS; Infineon; Delta; Flex; Celestica NASDAQ:CLS; Luxshare SZSE:002475 *(bg ticker)* | MetaPWR (Shanghai Peiyuan) | **IP-contested** (Vicor ITC) |
| | SST power cells / MV-frequency transformers | Delta; Eaton; Siemens/Reinhausen; ABB (via DG Matrix) | DG Matrix, Heron Power, Amperesand, Novos | Certification-scarce |
| **L4 Systems** | 800 V / ±400 V power racks and sidecars; row power centers | Delta; Lite-On; **Vertiv** NYSE:VRT; Schneider; Eaton; Flex; ABB; Megmeet | – | Ramp 2027 |
| | SST skids (MV AC → 800 VDC) | Delta; Eaton; Siemens + Reinhausen; Hitachi TSE:6501 (HTHIY); Mitsubishi Electric; GE Vernova NYSE:GEV; Sungrow SZSE:300274; China XD Electric SSE:601179 | DG Matrix, Heron, Amperesand | 2029+ volume |
| | DC switchboards, busway, protection systems | Vertiv; Schneider; Eaton; Siemens; ABB; Legrand; LS Electric | – | 2028+ (facility DC) |
| | BBU racks, MV UPS, BESS | Vertiv; Schneider; Eaton; ABB (HiPerGuard); Delta; Hitachi Energy; Tesla NASDAQ:TSLA; LGES KRX:373220 *(bg)*; Fluence NASDAQ:FLNC | – | UPS function migrates |
| | Chinese HVDC (240/336 V) systems | Zhongheng SZSE:002364; Kehua SZSE:002335; Huawei Digital Power (private); Delta China | – | Mature; China-only |
| **L5 Rack integration (ODM/EMS)** | GPU rack assembly | Hon Hai TWSE:2317; Quanta TWSE:2382; Wistron TWSE:3231; Wiwynn TWSE:6669; Celestica; Flex; Supermicro NASDAQ:SMCI *(bg tickers)* | – | Several are **Vicor ITC respondents** [14][15] |
| **L6 Architecture owners / buyers** | Specs and demand | NVIDIA NASDAQ:NVDA; Alphabet, Meta, Microsoft, Amazon; ByteDance (private); Alibaba, Tencent | OCP | Two standards (800 V mono vs ±400 V) |

---

## 9. Ranked shortlist (educational; not investment advice)

**Ranking criteria:** (a) owns a hard-to-replicate position in a stage whose dollar content *rises* with the DC transition; (b) evidence of shipments or qualifications, not just press releases; (c) how much of this is already in the price; (d) whether the thesis survives a one-year slip in Kyber or 800 V.

**Valuation conventions.** P/E = last close ÷ consensus EPS (Yahoo `earningsTrend`, 2 Oct 2026 [1]). EV/EBITDA is trailing (Yahoo). USD market caps use FX of 2 Oct 2026 08:00 UTC (USD/TWD 31.836, EUR/USD 1.1265, USD/CHF 0.8271) [1]. These are my conversions.

### #1 Delta Electronics (TWSE: 2308) – no US ADR/OTC line found (DELTY and DLELY are not quoted; DLEGF is the separately listed Thai subsidiary)

- **Products in focus:**
  - 110 kW AC/DC power shelves and 18.5 kW / 12 kW-class PSUs for GB300 and Vera Rubin.
  - **660 kW in-row 800 VDC power rack with 480 kW of BBU** (GTC Mar 2026).
  - ±400 V HVDC racks (mass production 3Q26).
  - 90 kW 1RU 800 V DC/DC shelf for MGX; 800 VDC busway.
  - **SST** (up to 1 MW per cabinet, MV → 240/400/800 VDC, 98.5%, live at Chindata).
  - 2.4–3 MW CDUs, including an 800 V-powered CDU.
  - [21][22][29][3]
- **Why the products matter.** In 2026–28 rack-power dollars move from in-rack PSUs to power racks, BBUs and DC-DC (§2). Delta sells every one of these, both ±400 V and 800 V. It is also the only vendor with an SST *serving a live AI workload* [29][61].
- **Why this company.**
  - Duopoly leader: **50–70% AI server power share**, ~70% of Blackwell PSUs [22][59] (secondary).
  - The only full "gray-space plus white-space" integrator in Asia, with a "first-mover advantage" per TrendForce [60].
  - A decade of SST R&D, including a joint DOE program [61].
- **Quantitative evidence:**
  - 2Q26 revenue **NT$183.2B (+47.7% YoY)**; GM 35.6%; EPS NT$9.68; 1H26 EPS NT$17.59 (above any prior full year).
  - **AI-related revenue >50% of total**; liquid cooling >12% of revenue.
  - 2026 capex **NT$70B (+50%)**.
  - All from the 30 Jul 2026 call [3] (secondary). Jan–Aug 2026 revenue NT$474.3B (+41.1%) [22] (secondary).
- **Valuation (close 2 Oct 2026):**
  - NT$1,885; market cap ≈ **US$154B** (my conversion).
  - P/E **46.4× FY26E / 29.4× FY27E** (EPS NT$40.61 / NT$64.22); EV/EBITDA 34.8× trailing.
  - +96% YTD; −25% from the NT$2,520 high (27 May 2026) [1].
- **Consensus (Yahoo, 2 Oct 2026):** 22 analysts, "strong buy" (1.36); mean target NT$2,483 (+32%), high NT$4,120, low NT$1,330 [1].
- **Risks and thesis-breakers:**
  1. **Vicor ITC exposure in all three matters.** Delta Electronics (Americas) is already under the 337-TA-1370 limited exclusion order (Feb 2025). Delta is a respondent in 337-TA-1484 and in the DN3936 VPD complaint [75][14][15]. This touches DC-DC and VPD modules, not AC/DC shelves (my read).
  2. Management says margin upside from the 37% record is "limited" [85] (secondary), and MOSFET and memory shortages are rising [3].
  3. 800 V volume is pushed to 2027. The Kyber slip risk pushes it further [5]. This is mitigated because Delta sells 54 V shelves either way.
  4. Lite-On and Megmeet price competition at 800 V.
  5. Taiwan and China geopolitics (the SST reference site is in China).
- **Catalysts:**
  - Monthly revenue (around the 10th of each month).
  - **OCP Global Summit, 12–15 Oct 2026** [57].
  - ITC institution decision on DN3936 (about mid-Oct 2026, my estimate).
  - **3Q26 results around 28 Oct 2026** (Yahoo calendar, unconfirmed) [1].
  - 800 V volume ramp and **SST mass-production line in 2027** [3].

### #2 Vicor (NASDAQ: VICR)

- **Products in focus:**
  - **2nd-gen Vertical Power Delivery (VPD)**: a ChiP current multiplier with gain >40 and 1.5 mm height; **3 A/mm² now, 5 A/mm² targeted early 2027**.
  - Factorized Power Architecture; BCM bus converters (800 V/48 V/12 V; BCM4414 800 V class).
  - The **VPD patent-licensing program**.
  - [13][80]
- **Why the products matter.** A Rubin-class GPU's core current runs to about 3 kA (my estimate, §5.1). At that current, A/mm² under the package is the binding constraint, and Vicor claims competing IVRs "barely exceed 1 A/mm²" [13] (company claim). This is the one stage in my scope where physics, not capacity, sets the limit.
- **Why this company.**
  - Proprietary current-multiplier topology plus its own Andover ChiP fab.
  - **Enforced IP**: the 337-TA-1370 limited exclusion order (Feb 2025) [75].
  - A new licensing model that collects royalties even when licensees buy from competitors [77].
- **Quantitative evidence:**
  - 2Q26 revenue **$143.4M** (+26.9% QoQ); GM 58.0%; EPS $1.04; **backlog $380M (+145% YoY)**; cash $453.6M, no debt [41].
  - FY26 revenue target ">$600M" [13].
  - **Q3 2026 sequential growth guidance raised to ">30%" on 30 Sep 2026** [78], implying revenue >$186M (my calc).
  - New AI-OEM VPD license, 16–17 Sep 2026 [77].
  - Sites bought for ChiP Fab-2 and Fab-3 (Merrimack and Hooksett, NH; 11 Sep 2026) [86].
  - Long-term model: $2.5B revenue, 70% GM, 40% operating margin, which needs Fab-2 (late 2027–28) [13].
- **My Q3 run-rate check.** Assume Q3 revenue of about $186M, $35–45M of royalties at near-100% gross margin, product gross margin near Q2's ~53% ex-royalty (Q2: $83.1M GP on $143.4M, less ~$15M royalty), opex about $50M, about $4M interest income, a 15–20% tax rate and about 48M diluted shares. Q3 EPS then comes to roughly **$1.15–1.35**, which annualizes to about $4.6–5.4. That is below the **FY27 consensus of $6.06** [1]. The price therefore already assumes growth beyond the Q3 royalty run-rate: either the 2nd-gen VPD product ramp in 2H27 or more licenses. So today's price assumes growth beyond the Q3 royalty run-rate. Upside needs either the 2nd-gen VPD product ramp in 2H27 or more licenses.
- **Valuation (close 1 Oct 2026):**
  - **$308.59**; market cap **$14.2B** (all share classes).
  - P/E **75.8× FY26E / 50.9× FY27E**; EV/EBITDA about 120× trailing; P/S about 30× trailing.
  - **+182% YTD, +526% over one year**; 52-week range $48.53–$382.65; beta 2.4 [1].
- **Consensus:**
  - Yahoo (2 Oct 2026): 4 analysts, "strong buy" (1.5); mean $393.75, high $450, low $350 [1].
  - MarketBeat (29 Sep 2026): Moderate Buy (3 buy, 2 hold); mean $381.67, high $450, low $320 [87] (secondary).
  - Needham raised its target to $350 on 1 Oct 2026 [88] (secondary).
- **Risks and thesis-breakers:**
  1. Losing the 337-TA-1484 final determination (2027), or DN3936 not being instituted.
  2. IVRs or 1st-gen VPD from MPS, Infineon or Delta proving "good enough" at 3–5 kA.
  3. Royalty lumpiness. Needham called Q3 the "largest revenue quarter from a single licensee to date" [88].
  4. The licensing model lets licensees buy from unlicensed suppliers, capping product share [77].
  5. Fab-2 execution and capex.
  6. **The CEO's 10b5-1 plan sells up to 1.0M shares at $404–800** (Sep 2026–Dec 2028) [76].
  7. Customer concentration [76].
- **Catalysts:**
  - **3Q26 results on 20 Oct 2026** [1].
  - DN3936 institution decision (about mid-Oct, my estimate).
  - Further license announcements.
  - Broader 2nd-gen VPD sampling (late 2026–early 2027) and **5 A/mm² (early 2027)**.
  - 337-TA-1484 final determination (2027) [13].

### #3 Infineon Technologies (XETRA: IFX) – US OTCQX: IFNNY

- **Products in focus:**
  - CoolSiC MOSFETs: 1200 V, plus 2 kV now and 2.3/3.3 kV introduced 2026 for SSTs [17].
  - CoolGaN for 800→12 V. Infineon is among the vendors announcing direct 800 V→12 V converters at 97.5–98.2% [21].
  - Si OptiMOS MOSFETs for PSUs and BBUs, power stages and VPD modules.
  - A 12 kW modular BBU roadmap [8].
  - SiC supply for Eaton's MVSST [31].
- **Why the products matter.** It is the only supplier with **Si, SiC and GaN** at every stage, from the SST front end through the rack rectifier and 800→12 V to the GPU power stage. It is therefore *topology-agnostic* between ±400 V and 800 V and between SST and TRU, which is the right position while standards are split (§1.2).
- **Why this company.**
  - The broadest portfolio and the #1 power-semiconductor franchise (background).
  - Named NVIDIA 800 VDC silicon partner [26].
  - The Eaton SST deal shows MV-side qualification [31].
- **Quantitative evidence:**
  - Infineon guided AI revenue to more than €1.6B in FY26 and "well above €2.5B" in FY27 (to be upgraded on 10 Nov 2026), with capacity reservations from more than 10 AI customers. These figures were verified against Infineon's Q3 FY26 release and presentation in the P2 report (sources [1]–[4] there).
- **Valuation (close 1 Oct 2026):**
  - **€59.42** (Xetra; €62.33 intraday on 2 Oct); market cap ≈ **US$87B** (my conversion).
  - P/E 34.1× FY9/26E / **20.8× FY9/27E** (EPS €1.74 / €2.85); EV/EBITDA 19.8×.
  - +57% YTD to the 1 Oct close (my calc); −32% from the €88.00 high (2 Jun 2026) [1].
- **Consensus (Yahoo, 2 Oct 2026):** 23 analysts, "buy" (1.54); mean €86.74 (+46%), high €124, low €50 [1].
- **Relative value.** About 21× FY27E against MPWR at 39× and TI at 28× for overlapping AI-power exposure [1]. That is the cheapest large-cap way to own 800 V silicon content (my judgment).
- **Risks:**
  1. It is a **named respondent in Vicor's DN3936 VPD complaint** (9 Sep 2026) [15].
  2. Automotive and industrial cyclicality dominate group earnings.
  3. A SiC price war (see the P2 report).
  4. EUR/USD.
  5. 800 V content is "2027–28" revenue [67].
- **Catalysts:**
  - OCP Summit, 12–15 Oct 2026.
  - **FY26 Q4 results and FY27 outlook, about 10 Nov 2026** (Yahoo calendar) [1]. The AI-power revenue target update is the key datapoint.
  - DN3936 institution decision.

### #4 Lite-On Technology (TWSE: 2301) – no US line found

- **Products in focus:**
  - 110 kW power shelf for Vera Rubin NVL72 (mass production scheduled from Jun 2026).
  - 800 VDC power rack/cabinet (Q4 2026; mass production 1Q27).
  - GB300 PSU energy storage, **co-designed with NVIDIA (65 J/GPU)**.
  - BBU; 2.1 MW in-row CDU; work on SiC with Wolfspeed and on SSTs.
  - [48][69][20][50][60]
- **Why the products matter.** It is #2 in the rack-power duopoly that captures the re-homed PSU dollars (§2). Power smoothing is becoming a spec item (NERC/ERCOT) and Lite-On co-designed NVIDIA's GB300 storage.
- **Why this company.**
  - About **35% of NVIDIA's power supply chain** [22] (secondary).
  - Pursuing US-CSP ASIC racks: validation in 2H26 and possible entry into Rubin in 2027 [51].
  - **Not named in any of Vicor's three ITC matters** (my check against [75][14][15]). That is a relative advantage over Delta and MPS if exclusion orders bite.
- **Quantitative evidence.** I could not fetch segment revenue this session. Consensus revenue is NT$219B for FY26E and NT$289B for FY27E (+32%) [1].
- **Valuation (close 2 Oct 2026):**
  - **NT$281.5**; market cap ≈ **US$20.1B** (my conversion).
  - P/E 26.0× FY26E / **19.2× FY27E**; EV/EBITDA 24.3×.
  - +72% YTD; −11% from the NT$317.5 high (28 Aug 2026) [1].
- **Consensus (Yahoo):** 12 analysts, "buy" (1.67); mean NT$302.7 (+7.5%), high NT$400, low NT$176 [1]. Limited upside to the mean target, so this is a **valuation-gap** idea against Delta (19× vs 29× FY27E), not a consensus-upside idea.
- **Risks:**
  1. A conglomerate mix (optoelectronics, PC power).
  2. Smaller scale than Delta, and price pressure from Megmeet.
  3. ASIC-rack qualification could fail.
  4. SST efforts are early.
- **Catalysts:**
  - Monthly sales.
  - 800 V small-volume production (Nov 2026) and mass production (1Q27) [50].
  - **3Q26 results about 28 Oct 2026** [1].
  - US-CSP 800 V validation outcome.

### #5 Eaton (NYSE: ETN)

- **Products in focus:**
  - **MVSST / MVSST 2.0**: IEC-certified, 98.5% max, 277.7 kW/m², Infineon SiC [33][31].
  - Bussmann DC fuses and DC protection; 9395XR UPS and DPQ lines; Fibrebond modular power enclosures.
  - Boyd Thermal (liquid cooling, $9.55B).
  - **Beam Rubin DSX** grid-to-chip co-design with NVIDIA.
  - [89][53]
- **Why the products matter.** Of the US incumbents, Eaton is best placed to own the MV→800 VDC conversion *and* the DC protection layer. Its stated "four technical blocks" are SST, DC breakers, power electronics/UPS and cooling [90].
- **Why this company.**
  - The only US-listed incumbent with a **certified MV SST** plus a fuse franchise.
  - Big NA data-center share; US data-center backlog commentary of **307 GW** [90] (secondary).
- **Quantitative evidence (Q2 2026, 31 Jul 2026):**
  - Sales **$8.5B (+21%; +14% organic)**.
  - Electrical Americas orders **+41%** (12-month rolling, organic), backlog **+33%**; Electrical sector backlog **+43%**.
  - FY26 adjusted EPS $13.40–13.60 [89].
  - Data-center sales up about 65% in both Electrical segments (call highlights) [90] (secondary).
- **Valuation (close 1 Oct 2026):**
  - **$437.28**; market cap **$169.8B**.
  - P/E 32.2× FY26E / **27.0× FY27E**; EV/EBITDA 28.7×.
  - +37% YTD [1].
- **Consensus (Yahoo):** 26 analysts, "buy" (1.57); mean $481.05 (+10%), high $534, low $333 [1].
- **Risks:**
  1. SST revenue is immaterial before 2028–29.
  2. Central-UPS displacement from 2028 (§2).
  3. Integration of Boyd ($9.55B) and Ultra PCS ($1.53B) [89].
  4. The Mobility RMT separation (1Q27).
  5. The **AI-power premium is already in the multiple**.
- **Catalysts:**
  - **3Q26 results on 3 Nov 2026** [1].
  - OCP Summit.
  - Any hyperscaler MVSST order; a UL certification path.

### #6 ABB (SIX: ABBN) – US OTC: ABBNY

- **Products in focus:**
  - **SACE Infinitus SSCB**: 1250 VDC, 2500 A, <25 µs, **first IEC 60947-2-certified SSCB** [28].
  - HiPerGuard MV UPS (98%) [8].
  - DC distribution and switchgear.
  - Investor in **DG Matrix** (the "only SST in NVIDIA's MGX reference architecture") [64][8].
  - NVIDIA partnership (Oct 2025) [8][19].
- **Why the products matter.** **Protection is the code-gated bottleneck** for facility-level 800 VDC (§6). A certified SSCB at these ratings is a scarce credential, and MV UPS is where the UPS function migrates (§7.2).
- **Why this company.**
  - A certified product plus an SST option through DG Matrix.
  - The ABB/Hitachi PETT SST patent heritage [16].
  - The global #1–2 in LV/MV electrification (background).
- **Quantitative evidence.** I could not fetch the Q2 2026 primary release this session. Consensus revenue is about $38.1B for FY26E and $42.4B for FY27E [1].
- **Valuation (close 1 Oct 2026):**
  - **CHF 79.62** (CHF 81.68 intraday on 2 Oct); ABBNY $96.09.
  - Market cap ≈ **US$174B**.
  - P/E about **27× FY27E** (ABBNY EPS $3.57); EV/EBITDA 20.7× (SIX line).
  - +35% YTD to the 1 Oct close (my calc) [1].
- **Consensus (Yahoo, SIX line):** 25 analysts, **"hold" (2.8)**; mean CHF 84.1 (+6%), high CHF 97, low CHF 66.9 [1]. This is the least-loved quality name in the scope.
- **Risks:**
  1. AI-DC DC protection is tiny relative to group revenue, so the stock won't be driven by it before 2028.
  2. 35% Swiss withholding tax on dividends, part of which foreign holders can reclaim under tax treaties.
  3. Consensus may stay "hold" on valuation.
- **Catalysts:**
  - **Q3 2026 results on 20 Oct 2026** [1].
  - OCP Summit.
  - DG Matrix UL certification or hyperscaler order.
  - Publication of the IEC SSCB standard [56].

### #7 Flex (NASDAQ: FLEX)

- **Products in focus.** The Cloud & Power Infrastructure (CPI) segment: power shelves, power racks and "grid-to-chip" products built through the Anord Mardix (switchgear/power distribution), Crown and JetCool acquisitions [60]. Flex is a named NVIDIA 800 VDC power-system partner (as "Flex Power" in May 2025 and "Flex" in Oct 2025) [26][19].
- **Why the products matter.** Flex is the one US-listed vendor that both builds AI racks (EMS) and makes power systems from LV switchgear down to rack DC-DC. That positions it for the sidecar and row-power ramp (§2).
- **Why this company.** A **planned spin-off of CPI into a separate public company** was disclosed with the Q1 FY27 release, with **Investor Day on 10 Nov 2026** [73]. That event can surface a pure-play AI-power valuation that is currently buried in a ~16× EMS multiple.
- **Quantitative evidence (Q1 FY27, quarter ended 26 Jun 2026; release 29 Jul 2026):**
  - Revenue **$7.9B (+21%)**; adjusted operating margin 6.7%; adjusted EPS **$1.00** (record).
  - Q2 guide $7.95–8.25B (+19% at the midpoint); adjusted EPS $1.00–1.07 (+32%).
  - About $53M in spin-off costs in the quarter [73].
  - CPI segment revenue was not visible in the exhibit text I parsed.
- **Valuation (close 1 Oct 2026):**
  - **$112.78**; market cap **$41.7B**.
  - P/E 23.9× FY3/27E / **16.0× FY3/28E** (EPS $4.71 / $7.06); EV/EBITDA 21.1×.
  - +87% YTD; −30% from the $162.07 high (30 Jun 2026) [1].
- **Consensus (Yahoo):** 10 analysts, "strong buy" (1.27); mean **$160.50 (+42%)**, high $180, low $142 [1].
- **Risks:**
  1. Spin-off execution and dis-synergies.
  2. **A named respondent in Vicor's DN3936 VPD complaint** [15].
  3. EMS margins remain thin (4.9% GAAP operating margin).
  4. Lumpy customer programs.
- **Catalysts:**
  - **Q2 FY27 results about 28 Oct 2026** [1].
  - **Investor Day on 10 Nov 2026** (expected to cover spin-off structure and CPI financials) [73].

### #8 BizLink Holding (TWSE: 3665) – no US line found

- **Products in focus.** Data-center busbars and busbar connectors, power whips, rack busbar, server power cables, plus high-voltage EV harnesses and EV busbar, which share technology with ±400 V EV-derived DC distribution [1] (company profile). Named NVIDIA 800 VDC "power system components" partner [19].
- **Why the products matter.** At 800 V the in-rack and rack-to-sidecar interconnect changes completely. Rack current falls about 15× (§1.1), but busbars, connectors and whips must be rated, finger-safe and arc-resistant at 800 V or ±400 V, which is closer to EV high-voltage practice. In-rack copper falls, and value per amp rises (my inference).
- **Why this company.** It is the only connector/busbar vendor on NVIDIA's 800 VDC list, and it brings an EV HV-harness heritage that matches the OCP choice of the EV supply chain [23].
- **Quantitative evidence.** Consensus revenue is NT$102.6B for FY26E and **NT$151.2B for FY27E (+47%)**; consensus EPS is NT$68.8 for FY26E and NT$119.7 for FY27E (+74%) [1]. Product-level 800 V revenue is undisclosed.
- **Valuation (close 2 Oct 2026):**
  - **NT$2,540**; market cap ≈ **US$15.6B**.
  - P/E 36.9× FY26E / **21.2× FY27E**; EV/EBITDA 30.3×.
  - +67% YTD; −14% from the high (4 May 2026) [1].
- **Consensus (Yahoo):** 14 analysts, "strong buy" (1.43); mean NT$3,289 (+29%), high NT$3,870, low NT$2,450 [1].
- **Risks:**
  1. Much of its AI growth is likely copper/AEC cabling rather than power; its 800 V share is unproven.
  2. Amphenol, TE and Molex compete hard.
  3. Copper per MW declines.
- **Catalysts:** monthly sales; **3Q26 results about 13 Nov 2026** [1]; OCP Summit.

### #9 AES-KY / Advanced Energy Solution Holding (TWSE: 6781) – speculative, no US line

- **Products in focus:** lithium-ion **battery backup units (BBU)** and modules for AI racks [59] (secondary).
- **Why the products matter.** BBU and storage content per MW **rises** in every DC phase: $0.2M/MW battery racks in Phase 3 [8], Delta's 480 kW of BBU in a 660 kW rack [22], and NVIDIA's push for in-row storage [19].
- **Why this company.** Named with Lite-On as a primary BBU supplier [59] (secondary). The stock has de-rated: −23% YTD and −32% from the NT$1,500 high (1 Dec 2025) [1].
- **Quantitative evidence:** consensus revenue NT$19.6B for FY26E and NT$24.5B for FY27E (+25%); EPS NT$48.3 → NT$59.8 [1]. **Evidence is thin. Verify customer concentration and pricing before relying on it.**
- **Valuation (close 2 Oct 2026):** **NT$1,025**; market cap ≈ **US$2.8B**; P/E 21.2× FY26E / **17.1× FY27E**; EV/EBITDA 15.9× [1].
- **Consensus:** 3 analysts; mean NT$1,472 (+44%), high NT$1,680, low NT$1,285 [1].
- **Risks:**
  1. BBU commoditization (Lite-On, Delta and Chinese cell makers can integrate vertically).
  2. Supercapacitor and LIC substitution for the short-duration part.
  3. Thin coverage.
- **Catalysts:** monthly sales; NVIDIA 800 V rack BBU attach-rate disclosures; 3Q26 results (date not found).

### Shortlist at a glance

| Rank | Name | Ticker / US line | Close (date) | Mkt cap (USD, my conv.) | P/E FY+1 | Consensus (n) | Mean / high / low target | Next hard catalyst |
|---|---|---|---|---|---|---|---|---|
| 1 | Delta Electronics | 2308.TW / – | NT$1,885 (2 Oct) | $154B | 29.4× FY27E | Strong buy (22) | NT$2,483 / 4,120 / 1,330 | 3Q26 ~28 Oct; OCP 12–15 Oct |
| 2 | Vicor | VICR | $308.59 (1 Oct) | $14.2B | 50.9× FY27E | Strong buy (4) [MarketBeat: Mod. buy (5)] | $393.75 / 450 / 350 | 3Q26 20 Oct; ITC DN3936 vote ~mid-Oct |
| 3 | Infineon | IFX.DE / IFNNY | €59.42 (1 Oct) | $87B | 20.8× FY9/27E | Buy (23) | €86.74 / 124 / 50 | FY26 Q4 ~10 Nov |
| 4 | Lite-On | 2301.TW / – | NT$281.5 (2 Oct) | $20.1B | 19.2× FY27E | Buy (12) | NT$302.7 / 400 / 176 | 3Q26 ~28 Oct; 800 V MP 1Q27 |
| 5 | Eaton | ETN | $437.28 (1 Oct) | $169.8B | 27.0× FY27E | Buy (26) | $481.05 / 534 / 333 | 3Q26 3 Nov |
| 6 | ABB | ABBN.SW / ABBNY | CHF 79.62 (1 Oct) | $174B | ~27× FY27E | **Hold** (25) | CHF 84.1 / 97 / 66.9 | Q3 20 Oct |
| 7 | Flex | FLEX | $112.78 (1 Oct) | $41.7B | 16.0× FY3/28E | Strong buy (10) | $160.50 / 180 / 142 | Q2 FY27 ~28 Oct; Investor Day 10 Nov |
| 8 | BizLink | 3665.TW / – | NT$2,540 (2 Oct) | $15.6B | 21.2× FY27E | Strong buy (14) | NT$3,289 / 3,870 / 2,450 | 3Q26 ~13 Nov |
| 9 | AES-KY | 6781.TW / – | NT$1,025 (2 Oct) | $2.8B | 17.1× FY27E | n/a (3) | NT$1,472 / 1,680 / 1,285 | Monthly sales |

All figures from [1] (retrieved 2 Oct 2026); conversions and P/E arithmetic are mine. Earnings dates are Yahoo calendar estimates unless a company confirmed them.

---

## 10. Critical analysis: what's priced, what's hype, where the bottlenecks are

### 10.1 Transitions engineers see clearly that equity prices only partly reflect

1. **"800 VDC kills the UPS" is wrong. It relocates storage, and storage per MW goes up.**
   - The double-conversion topology does die in native-DC halls (Phase 2+) [8].
   - But NVIDIA's architecture adds supercapacitors near the racks plus BESS at the interconnect [19]. Delta's 660 kW rack carries 480 kW of BBU [22]. Grid codes are tightening: NERC's Computational Load Entity proposal and ERCOT's NOGRR282 ride-through rules [8].
   - **Not priced:** the BBU and power-smoothing integrators trade at a discount to the UPS incumbents (Lite-On 19×, AES-KY 17× vs Vertiv 27× FY27E [1]).
   - **Priced or over-priced:** the *cell and capacitor* layer already had its boom and bust in 2026 (§7.3).
2. **The physics bottleneck is the last centimeter, not the 800 V bus.**
   - The 800→12/6 V stage is a crowded field: ten or more silicon vendors, all at 96.5–98.2% [21].
   - Delivering about 3 kA at under 1 V into a package is not crowded, and the IP is being litigated against nearly the whole first-generation VPD supply chain [14][15].
   - **Under-discussed:** the ITC risk at MPS (39× FY27E; respondent in two Vicor matters) and at Delta, Infineon and Flex (DN3936).
   - **Priced:** Vicor's upside (+526% over one year).
3. **±400 V (the hyperscaler standard) is deliberately an EV supply chain.**
   - Google chose 400 V to "leverage the robust supply chain built for electric vehicles" [23].
   - The implication is **deflationary for power-semiconductor pricing**, not inflationary. 650/1200 V SiC and GaN are in an EV-driven glut (P2 report [67]).
   - Do not underwrite SiC/GaN *pricing power* from 800 V. Underwrite *content* and *share*.
4. **Hyperscaler ASIC racks are a second, under-modelled 800 V demand driver.**
   - Sell-side 800 V timelines are anchored on NVIDIA Kyber. But Meta's HPR V4 (400 V DC, up to 800 kW, expandable to 1 MW) [25], Google's ±400 V sidecar [23] and reported AWS ±400 V designs [44] (secondary) do not depend on Kyber.
   - Lite-On is explicitly chasing US-CSP ASIC racks [51].
   - If Kyber slips to 2028 [5], ASIC sidecars become a bigger share of 2027 volume. That favors Lite-On and Delta (who serve both) over NVIDIA-only plays (my inference).
5. **Protection and codes, not semiconductors, gate facility-level DC.**
   - NEC 2029, missing NFPA 70E DC tables, and UL SST certification still pending [8].
   - Certified DC protection (ABB Infinitus IEC 60947-2; LS Electric UL 1500 V DC MCCB) is scarce. ABB's sell-side rating is still "hold" [1].
6. **The real 2H26 shortage is commodity silicon.** Delta: "memory and MOSFETs are already fully constrained" [3]. That is a near-term margin risk for PSU makers and a pricing tailwind for Si MOSFET suppliers, not for SiC or GaN.

### 10.2 Hype or already priced (the opposite call)

| Narrative | Why it is weaker than it sounds, or already in the price | Evidence |
|---|---|---|
| "SSTs replace transformers soon" | Commercial units in revenue service are single digits (May 2026); ~2× the cost of a transformer; only 0.5–1.5 pt better efficiency than a transformer-rectifier unit (my calc); 3× insulation in the MFT; no UL data-center certification as of May 2026; market forecasts span ~30× ($1B to $32B by 2030); Dell'Oro sees UPS impact only from 2029 | [16][17][8][18] |
| "800 VDC saves 5%+ / 8–10% opex" | Vertiv: realistic gain is "low-to-mid single-digit" facility energy; Google measured ~3% | [37][23] |
| "800 V is a 2026 story" | 2026 is ±400 V sidecars plus small-volume 800 V; volume comes in 2027, hall-level in 2028; Kyber may slip to 2028 | [3][4][2][5] |
| "40% penetration in 2027, 76% in 2028" | Unattributed broker figures with an undefined denominator; SemiAnalysis's ~39 GW cumulative by 2030 and RBC's ~20% of DCs by 2030 are far lower | [7][8][9] |
| "800 V is bullish for copper" | In-hall copper per MW falls 40–50% | [11][26] |
| "MLCC / capacitor super-cycle from AI power" | Already re-rated (SEMCO +520% YTD, Murata +161%, Taiyo Yuden +185%), peaked in June–July, and sensitive to Kyber headlines (SEMCO −11% on the delay report) | [1][6] |
| "Vicor is the hidden pure play" | No longer hidden: +526% over one year, ~51× FY27E, and the CEO's 10b5-1 plan sells from $404 upward. The remaining upside is binary (ITC 2027; 2nd-gen VPD ramp 2H27) | [1][76][13] |
| "Vertiv owns the 800 V rack" | Real portfolio, but consensus strong buy and 27× FY27E; its central-UPS franchise faces the 2028+ mix shift; SST is still "project development" | [1][4] |
| "GaN/SiC small caps are the 800 V trade" | Navitas: $10.5M quarterly revenue, loss-making, about 70× EV/sales, ramp in 2027. Power Integrations' data-center revenue is not yet material (Q2 revenue +3% YoY) | [71][72][1] |

### 10.3 Bottlenecks inside this scope, ranked (my judgment, with evidence)

| Rank | Bottleneck | Binding when | Who holds the scarce position | Evidence |
|---|---|---|---|---|
| 1 | **Codes and certification** for facility-level DC (NEC 2029; UL SST; DC arc-flash/PPE) | 2027–29 | Certified-product holders: ABB (SSCB, IEC), LS Electric (UL DC MCCB), Eaton (IEC MVSST) | [8][28][31] |
| 2 | **Package current density** (A/mm², kA per GPU) | Now, rising | Vicor (IP); MPS, Infineon, Delta (1st-gen VPD volume) | [13][14] |
| 3 | **Demand-side timing** (Kyber/600 kW racks; DC-ready halls) | 2027 vs 2028 | NVIDIA, hyperscalers | [5][22] |
| 4 | **Commodity Si MOSFET and memory** for PSUs/BBUs | 2H26 | Infineon, onsemi, Vishay, AOS, Toshiba | [3] |
| 5 | **HV (2.3/3.3 kV) SiC module qualification** and MV high-frequency transformer insulation for SSTs | 2028–30 | Infineon, ST, Mitsubishi Electric, Wolfspeed; SST integrators | [17][61] |
| – | *Not bottlenecks:* SiC/GaN wafers, nanocrystalline/ferrite cores, copper, 800→12 V converter silicon | – | – | [67][1][21] |

### 10.4 Monopoly, duopoly and oligopoly positions

- **AI rack power (shelves, power racks): Delta–Lite-On duopoly.** Delta 50–70% and Lite-On ~35% by differing denominators [22] (secondary). Megmeet is a slow entrant [60].
- **Current-multiplier VPD IP: Vicor (patent monopoly, contested).** One ITC exclusion order already issued (1370) [75].
- **Certified SSCB at 1 kV-class: ABB first (IEC 60947-2)**, likely temporary until IEC SSCB standards publish [28][56].
- **Architecture: NVIDIA (800 V monopolar) and the OCP hyperscaler bloc (±400 V)** effectively co-own the standard [38][39].
- **Nanocrystalline tape (VAC, Proterial, plus Chinese makers):** oligopoly, but not demand-constrained (§3.3).

### 10.5 Demand spikes that may not be in consensus (my inferences, flagged)

1. **Vicor royalties.** Licensing revenue is not modelled until announced. Q3 guidance went from ~10% to >20% to **>30% sequential growth** within a month [68][78]. More AI OEM or hyperscaler licenses before the 2027 ITC final determination would be pure margin.
2. **Grid-code-driven storage per MW.** Under NERC CLE and ERCOT ride-through rules, rack, row and site storage becomes compliance spend, not optional resilience (my inference from [8]).
3. **Hyperscaler-ASIC ±400 V sidecars in 2027** if Kyber slips (§10.1 item 4).
4. **China 800 V building-level adoption.** ByteDance is already running building-level demonstrations of tens of MW [43]. Beneficiaries are mostly A-shares (Megmeet, Zhongheng, Kehua, XD Electric) that are de-rated or illiquid for US investors.
5. **Power content per GPU rising super-linearly** with per-GPU current (Rubin about 2.3 kW → next generation higher). VRM/VPD and decoupling content scale with current, not with MW (my inference).

---

## 11. Also considered and rejected (one line each; prices and multiples from [1], 1–2 Oct 2026)

**Systems and electrical OEMs**
- **Vertiv (VRT; $246.12; 26.8× FY27E; 27 analysts, strong buy).** Real 800 V portfolio (rack/pod 2027, hall 2028 [4]) and strong numbers (Q2 sales $3,274M, +24%; FY26 guide $14.0B at the midpoint [91]), but fully owned and consensus-loved. Its central-UPS franchise carries the 2028+ mix risk.
- **Schneider (SU.PA / SBGSY; €292.60; 24.0×).** Credible Vera Rubin reference design and 800 V prototype [47], but no shipping 800 V switchboard or SST, and AI-DC is a fraction of the group.
- **Siemens AG (SIE.DE / SIEGY; €271.90; 21.0×).** The Reinhausen SST JV has no commercial date [36]; too diluted to express this theme.
- **Siemens Energy (ENR.DE / SMEGF; €145.14; ~23× fwd).** Not the Reinhausen partner (correction); a grid and turbine story outside this scope.
- **Hitachi (6501.T / HTHIY; ¥5,522; 21.3×).** NVIDIA-named and SST IP heritage, but the value sits in Hitachi Energy's HV transformers and HVDC (an upstream thesis), not in-hall DC.
- **Mitsubishi Electric (6503.T / MIELY), GE Vernova (GEV; 39× fwd).** Named NVIDIA partners without shipping data-center SSTs or DC-protection products found; GEV's thesis is turbines and the grid.
- **Legrand (LR.PA / LGRDY; €139.75; 20.5×).** AC PDUs and busway are on the losing side of the BOM shift [9].
- **nVent (NVT; 25.5×), Hubbell (HUBB; 20.3×).** Enclosures, cooling and LV distribution with no verified 800 VDC product lead.
- **Powell (POWL).** MV switchgear, upstream of this scope.
- **LS Electric (010120.KS; ₩209,500; ~41× fwd; +128% YTD).** Holds a valuable UL 1500 VDC MCCB credential [8], but it is priced as a US transformer winner.
- **Megmeet (002851.SZ; ~38× fwd), Zhongheng (002364.SZ; ~68× fwd), Kehua (002335.SZ; 18× fwd, −22% YTD), China XD Electric (601179.SS), Sungrow (300274.SZ; −52% YTD).** China HVDC/SST exposure; A-share access, geopolitics, and Kehua/Sungrow de-rating for non-DC reasons.
- **Delta Electronics Thailand (DELTA.BK / DLEGF; ~65× fwd).** A subsidiary trading at a large premium to the Taiwan parent; owning 2308.TW is cleaner.

**Power semiconductors**
- **Monolithic Power Systems (MPWR; $1,360.97; 39.0× FY27E).** Excellent franchise (Enterprise Data +164% YoY [42]), but well-followed and a respondent in two Vicor ITC matters.
- **Texas Instruments (TXN; 27.9×), Analog Devices (ADI; 24.7×).** Strong 800 V parts (TI's 97.6% 800→6 V [21]), but AI-DC power is a small share of very large, diversified companies.
- **onsemi (ON; $80.08; 17.7×) and STMicro (STM; 21.1×).** Credible NVIDIA partners (ST supplies DG Matrix [64]), but auto/industrial and SiC-cycle exposure dominate. **Watchlist** if SiC pricing stabilizes.
- **Renesas (6723.T / RNECY; 12.5×).** Cheap NVIDIA partner (GaN via Transphorm, background), but data-center power is a minor share of the MCU/auto mix. Watchlist.
- **ROHM (6963.T; ~60× fwd), Wolfspeed (WOLF), Innoscience (2577.HK; ~100× fwd).** SiC/GaN wafer-supply stories in an oversupplied market; balance-sheet or valuation risk.
- **Navitas (NVTS; $12.12).** Q2 revenue $10.5M, loss-making, hyperscaler ramp "in 2027" [71]; an option, not an investment case.
- **Power Integrations (POWI; $51.50).** 1250/1700/2200 V PowiGaN is clever, but Q2 revenue was +3% YoY [72] and data-center revenue is not yet material.
- **Alpha & Omega (AOSL; $28.84).** NVIDIA-listed, but FY26 GAAP operating loss of $43.2M and ~22–24% GM [92]; would benefit from MOSFET tightness but is low quality.
- **Silergy (6415.TW), uPI (6719.TW), Richtek/MediaTek (2454.TW).** VRM controller share gains in China/ASIC are plausible, but evidence was not verified this session.

**Passives and storage**
- **Murata (6981.T / MRAAY; 29×), SEMCO (009150.KS; 37×, +520% YTD), Taiyo Yuden (6976.T), TDK (6762.T), Yageo (2327.TW), Kyocera (6971.T).** The MLCC/AI narrative is fully priced and peaked in June–July 2026 (§5.4).
- **Nippon Chemi-Con (6997.T), Nichicon (6996.T), APAQ (6449.TW), Jianghai (002484.SZ), Musashi Seimitsu (7220.T), LS Materials (417200.KQ), Vinatech (126340.KQ).** The storage-component boom and bust already happened (−44% to −68% from 2026 highs). Small TAM (~$950M by 2037 [83]).

**Magnetics materials**
- **Qingdao Yunlu (688190.SS), AT&M (000969.SZ), DMEGC (002056.SZ), TDG (600330.SS).** SST magnetics are not supply-constrained (§3.3), so there is no scarcity rent.

**Connectors, protection, PSUs**
- **Amphenol (APH; 26.1×).** A great compounder (book-to-bill 1.23 [82]), but 800 V power content is a rounding error to the thesis.
- **TE Connectivity (TEL; 16.9×).** Cheap, but no 800 V data-center evidence found.
- **Littelfuse (LFUS; 21.7×), Mersen (MRN.PA / CBLNF; 12.4×).** Plausible DC-fuse and busbar beneficiaries (Littelfuse: record bookings, Q3 guide ~+26% [81]), but AI-DC DC-protection revenue is undisclosed. Watchlist pending product-level evidence.
- **Sensata (ST; 10.3× fwd).** HV DC contactors (Gigavac, background) could matter for BBUs and sidecars, but no data-center evidence was verified.
- **Advanced Energy (AEIS; 19.2×).** Data Center Computing revenue flat QoQ ($191.5M vs $194.2M [74]) and not on NVIDIA's 800 V lists. Risk of being disintermediated by the Delta/Lite-On power rack.
- **Bel Fuse (BELFB), Chicony Power (6412.TW).** Front-end PSU and magnetics vendors with no 800 V design-win evidence.
- **Celestica (CLS; 19.3×).** A rack integrator (EMS) and a DN3936 respondent [15]; power is not its moat.

**Other**
- **SolarEdge (SEDG).** No primary evidence of a data-center SST found this session.
- **Ideal Power (IPWR; ~$65M market cap).** B-TRAN bidirectional switch for SSCBs is unproven at data-center scale (background); micro-cap.
- **NVIDIA (NVDA).** Architecture owner; a compute thesis, not a power thesis.

---

## 12. Data gaps and caveats (what I could not verify this session)

- **The web-search quota ran out** partway through. Later checks used direct fetches of primary pages (SEC EDGAR, company, OCP, NVIDIA) and the Yahoo quote API.
- Could not fetch primary Q2/Q3 releases for **Infineon** (its AI-power revenue targets are instead verified in the P2 report [67]), **ABB**, **Lite-On** (segment revenue) or **Schneider**.
- Delta's 30 Jul 2026 call statements come from a **secondary transcript summary**, not the slide deck.
- Market-share figures for Delta and Lite-On (50–70% and ~35%) are **secondary** with undefined denominators.
- Not verified: MLCC count per GPU; AWS/Microsoft ±400 V deployment status; Meta HPR V4 production timing; Proterial FINEMET specifics; Amperesand's current status; SolarEdge's SST.
- Earnings dates are Yahoo calendar estimates unless a company confirmed them. The DN3936 ITC institution timing (about mid-Oct 2026) is my estimate from standard ITC practice.
- Consensus targets and ratings are Yahoo aggregates (they differ from MarketBeat and others).

---

## 13. Sources (numbered in order of first citation; all accessed 1–2 Oct 2026)

1. Yahoo Finance quote/quoteSummary/chart API (prices, market caps, consensus targets, EPS estimates), retrieved 2 Oct 2026 ~08:00 UTC (market data). https://query1.finance.yahoo.com/v10/finance/quoteSummary/
2. TrendForce press release, "NVIDIA's 800V Power Rack to Debut as an Optional Configuration for Vera Rubin...", 25 Jun 2026. https://www.trendforce.com/presscenter/news/20260625-13121.html
3. BigGo Finance, "[2308.TW FY2026 Q2 Earnings Call] ... AI Revenue Share Breaks 50%" (30 Jul 2026) (secondary). https://finance.biggo.com/news/TW_2308.TW_2026-07-30
4. Motley Fool transcript, Vertiv Q2 2026 earnings call (29 Jul 2026; posted 7 Aug 2026). https://www.fool.com/earnings/call-transcripts/2026/08/07/vertiv-vrt-q2-2026-earnings-call-transcript/
5. Tom's Hardware, "Nvidia's Kyber rack for Rubin Ultra reportedly delayed to 2028..." (updated 6 Jul 2026) (secondary). https://www.tomshardware.com/pc-components/gpus/nvidias-kyber-rack-for-rubin-ultra-slips-to-2028
6. The Planet Tools, "NVIDIA Kyber NVL144 Delayed to 2028? Report vs Denial" (updated 27 Jul 2026) (secondary). https://theplanettools.ai/blog/nvidia-kyber-nvl144-rubin-ultra-delay-report-denial-2026
7. Wallstreetcn, "AI电源的第一性原理：四大趋势逐渐清晰，800V渗透率2年20倍增长" (unattributed broker forecast; page date unclear) (secondary). https://wallstreetcn.com/articles/3779441
8. SemiAnalysis, "Inside the 800VDC Revolution" (26 May 2026, mod. 9 Jun 2026; free portion). https://newsletter.semianalysis.com/p/inside-the-800vdc-revolution-part
9. Briefs.co summarizing RBC (M. Fielding), "AI Power Needs Drive $220B Shift to 800-Volt DC" (3 Jul 2026) (secondary). https://www.briefs.co/news/ais-hunger-for-electricity-spurs-220b-data-center-move-to-800-volt-dc/
10. 36Kr, "Why Has NVIDIA's White Paper Left AIDC Power Sector Players Restless?" (2025/26) (secondary). https://eu.36kr.com/en/p/3512624552090760
11. McKinsey, "How 800 VDC powers next-gen AI data centers" (30 Jul 2026). https://www.mckinsey.com/industries/industrials/our-insights/the-shift-to-800-volt-dc-at-data-centers-implications-for-providers
12. Barrack.ai, "NVIDIA Rubin at GTC 2026: Full Technical Breakdown" (2026) (secondary). https://blog.barrack.ai/nvidia-rubin-specs-architecture-2026/
13. Motley Fool transcript, Vicor Q2 2026 earnings call (21 Jul 2026). https://www.fool.com/earnings/call-transcripts/2026/07/21/vicor-vicr-q2-2026-earnings-call-transcript/
14. USITC news release, Inv. No. 337-TA-1484 instituted (11 Feb 2026). https://www.usitc.gov/press_room/news_release/2026/er0211_68125.htm
15. Federal Register, Notice of Receipt of Complaint, "Certain Vertical Power Delivery Systems..." (DN 3936; filed 9 Sep 2026; published 14 Sep 2026). https://www.federalregister.gov/documents/2026/09/14/2026-18644/notice-of-receipt-of-complaint-solicitation-of-comments-relating-to-the-public-interest
16. mgrid.org, "The Modern Solid-State Transformer Patent Landscape: Eaton, ABB, Hitachi Energy and the Startup Wave" (14 May 2026) (secondary). https://mgrid.org/2026/05/14/the-modern-solid-state-transformer-patent-landscape-eaton-abb-hitachi-energy-and-the-startup-wave/
17. Power Electronics News, "Solid-state transformers' path from concept to common" (Apr 2026). https://www.powerelectronicsnews.com/solid-state-transformers-path-from-concept-to-common/
18. Dell'Oro Group press release, "Data Center Physical Infrastructure Market Forecast to Reach $120 Billion by 2030" (19 Aug 2026). https://www.prnewswire.com/news-releases/data-center-physical-infrastructure-market-forecast-to-reach-120-billion-by-2030-according-to-delloro-group-302853955.html
19. NVIDIA Technical Blog, "Building the 800 VDC Ecosystem for Efficient, Scalable AI Factories", 13 Oct 2025. https://developer.nvidia.com/blog/building-the-800-vdc-ecosystem-for-efficient-scalable-ai-factories/
20. NVIDIA Technical Blog, "How New GB300 NVL72 Features Provide Steady Power for AI" (28 Jul 2025, upd. 27 Aug 2025). https://developer.nvidia.com/blog/how-new-gb300-nvl72-features-provide-steady-power-for-ai/
21. Power Electronics News, "Nvidia GTC 2026: Power From Grid to GPU" (Mar 2026). https://www.powerelectronicsnews.com/nvidia-gtc-2026-800-vdc-power-partnerships-from-grid-to-processor/
22. Capital Atlas, "Delta's 660 kW 800 VDC power rack is ready but ships in 2027" (Sep 2026) (secondary). https://capitalatlas.beehiiv.com/p/delta-the-800-volts-that-are-not-here-yet
23. Google Cloud blog, "Enabling 1 MW IT racks and liquid cooling at OCP EMEA Summit" (29 Apr 2025). https://cloud.google.com/blog/topics/systems/enabling-1-mw-it-racks-and-liquid-cooling-at-ocp-emea-summit
24. StorageReview, "Inside Google's Plan to Deliver 1MW Racks and Cool Them Too" (2025) (secondary). https://www.storagereview.com/news/inside-googles-plan-to-deliver-1mw-racks-and-cool-them-too
25. DCD, "Hyperscalers prepare for 1MW racks at OCP EMEA; Google announces new CDU" (2025) (secondary). https://www.datacenterdynamics.com/en/news/hyperscalers-prepare-for-1mw-racks-at-ocp-emea-google-announces-new-cdu/
26. NVIDIA Technical Blog, "NVIDIA 800 VDC Architecture Will Power the Next Generation of AI Factories", 20 May 2025. https://developer.nvidia.com/blog/nvidia-800-v-hvdc-architecture-will-power-the-next-generation-of-ai-factories/
27. NVIDIA, "800 VDC Architecture" partner page (created 16 Mar 2026, updated 27 Aug 2026). https://www.nvidia.com/en-gb/data-center/technologies/800-vdc-architecture
28. ABB, SACE Infinitus solid-state circuit breaker product page (accessed 2 Oct 2026). https://www.abb.com/global/en/areas/electrification/low-voltage/circuit-breakers/solid-state-circuit-breakers/sace-infinitus
29. Delta Electronics, "Delta debuts solid-state transformer system at a hyperscale data center campus in China" (Feb 2026). https://brandnews.deltaww.com/en/SpecialDetail/12748
30. DCD, "Chindata launches combined AI power and cooling system" (17 Dec 2025) (secondary). https://www.datacenterdynamics.com/en/news/chindata-launches-combined-ai-power-and-cooling-system/
31. Power Semiconductors Weekly, "Infineon to Supply SiC Power Devices for Eaton's MV SST Platform" (29 Sep 2026) (secondary). https://www.powersemiconductorsweekly.com/2026/09/29/infineon-to-supply-sic-power-devices-for-eatons-medium-voltage-solid-state-transformer-platform/
32. DCD, "Infineon and Eaton partner on silicon-carbide-based solid-state transformers..." (29 Sep 2026) (secondary). https://www.datacenterdynamics.com/en/news/infineon-and-eaton-partner-on-silicon-carbide-based-solid-state-transformers-to-support-800vdc-power-architectures/
33. e4ds news, "Eaton unveils power grid-to-chip integrated infrastructure strategy at Data Center Techday 2026" (11 Sep 2026) (secondary). https://www.e4ds.com/sub_view.asp?idx=23583&lang=en
34. Semiconductor Today, "Eaton to use Infineon's silicon carbide power devices in MV SST for 800V data-center power distribution" (29 Sep 2026) (secondary). https://www.semiconductor-today.com/news_items/2026/sep/infineon-290926.shtml
35. Reinhausen, "Siemens Development Partnership" (14 Aug 2026). https://www.reinhausen.com/newsroom/news/siemens-development-partnership
36. The Register, "Siemens and Reinhausen turn up the voltage for hungry AI racks" (17 Aug 2026) (secondary). https://www.theregister.com/on-prem/2026/08/17/siemens-and-reinhausen-turn-up-the-voltage-for-hungry-ai-racks/5288565
37. Vertiv, "The 800 VDC decision: A practical guide for AI power architecture" (2026). https://www.vertiv.com/en-asia/insights/articles/educational-articles/the-800-vdc-decision-a-practical-guide-for-ai-power-architecture/
38. NVIDIA Blog, "Why Scaling AI Compute Performance Requires a New Power Architecture", 11 Aug 2026. https://blogs.nvidia.com/blog/800-vdc-power-architecture-ai-factory/
39. OCP Blog, "Powering the Next Era of AI: How Google, Microsoft and Nvidia Are Standardizing ... LVDC", 11 Aug 2026. https://www.opencompute.org/blog/powering-the-next-era-of-ai-how-google-microsoft-and-nvidia-are-standardizing-and-accelerating-the-industry-transition-to-lvdc
40. OCP, "Solid State Transformer (SST) Specification" Rev 0.3.0 (effective 22 Jun 2026). https://www.opencompute.org/documents/ocp-sst-design-specification-v0-3-final-pdf
41. Vicor, Q2 2026 results press release (Form 8-K Ex. 99.1), 21 Jul 2026. https://www.sec.gov/Archives/edgar/data/751978/000119312526309538/d115827dex991.htm
42. Monolithic Power Systems, Q2 2026 earnings commentary (Form 8-K Ex. 99.1), 30 Jul 2026. https://www.sec.gov/Archives/edgar/data/1280452/000162828026051029/mpwr-20260630xexx991.htm
43. TechNews (TW), "中國 AI 資料中心導入 800 V HVDC，字節跳動率先公開 AI Rack" (10 Jul 2026) (secondary). https://technews.tw/2026/07/10/china-byte-800v-hvdc/
44. Drybulb, "The 800VDC Rollout: How the AI Factory Power Architecture Is Taking Shape" (2026) (secondary). https://www.drybulb.com/writing/800vdc-power-architecture
45. Zhongheng Electric, "Power Supply System for Cloud/Hyperscale IDCs" (company page, accessed 2 Oct 2026). https://www.zhonhen.com/cloud-hyperscale-idc
46. Kiplinger live blog, NVIDIA Q2 FY27 earnings (26-27 Aug 2026) (secondary). https://www.kiplinger.com/investing/live/nvidia-earnings-live-updates-and-commentary-august-2026
47. Schneider Electric blog, "NVIDIA and Schneider Electric get in sync at NVIDIA GTC 2026 to deliver Vera Rubin AI Factories" (8 May 2026). https://blog.se.com/datacenter/2026/05/08/nvidia-and-schneider-electric-get-in-sync-at-nvidia-gtc-2026-to-deliver-vera-rubin-ai-factories/
48. TechNews (TW), "瞄準 AI 工廠商機，光寶 COMPUTEX 首秀 800VDC 電源機櫃" (2 Jun 2026) (secondary). https://technews.tw/2026/06/02/ai-kiteon-800vdc-infrasture/
49. ITRI IEK news, "台達電、光寶科 啖HVDC大餅" (Jun 2026) (secondary). https://ieknet.iek.org.tw/ieknews/news_open.aspx?nsl_id=50d212a5019b439bb68dc7c75a3d49df
50. Longbridge, "NVIDIA's official website updates the 800 VDC blueprint ... Delta, Lite-On" (16 Aug 2026) (secondary). https://longbridge.com/news/296027098
51. TechNews (TW), "台達電、光寶迎法說，市場聚焦 HVDC 出貨與 AI 電源需求" (20 Jul 2026) (secondary). https://technews.tw/2026/07/20/delta-liteon-hvdc-roadmap/
52. Temple8 Capital, "Nvidia Vera Rubin Stocks: The GTC 2026 Design-In Partners" (2026) (secondary). https://temple8capital.substack.com/p/nvidia-vera-rubin-stocks-gtc-2026-supply-chain-toll-booths
53. TIKR blog, "Eaton Stock: 200% Data Center Order Growth..." (2026) (secondary). https://www.tikr.com/blog/eaton-stock-200-data-center-order-growth-and-a-7-trillion-market-puts-590-target-in-sight
54. TechArena, "OCP EMEA Summit 2026: The AI Data Center Gets Its Blueprint" (2026) (secondary). https://techarena.ai/content/ocp-emea-2026-the-ai-data-center-gets-its-blueprint
55. OCP blog, "Realizing the Open Data Center Ecosystem Vision" (13 Oct 2025). https://www.opencompute.org/blog/realizing-the-open-data-center-ecosystem-vision
56. Data Center Knowledge, "Inside the Push to Bring DC Power to Data Centers" (Mar 2026) (secondary). https://www.datacenterknowledge.com/energy-power-supply/inside-the-push-to-bring-dc-power-to-data-centers
57. OCP Global Summit 2026 page (12-15 Oct 2026, San Jose). https://www.opencompute.org/summit/global-summit
58. BigGo Finance, "SemiAnalysis Deep Dive: How the 800V DC Revolution Is Reshaping..." (Jun 2026) (secondary). https://finance.biggo.com/news/wpuCZZ4BDXrLZJaAMptK
59. Anue/cnyes, "AI資料中心電力架構轉型，800V HVDC帶動PSU內涵價值倍增：台達電、光寶科、AES-KY" (quoting Hengda Investment Advisory; 2026) (secondary). https://news.cnyes.com/news/id/6050728
60. TrendForce, "[Insights] AI Power Demand Drives HVDC Shift in Data Centers; Full-Stack Integration Emerges as Key" (2 Mar 2026). https://www.trendforce.com/news/2026/03/02/insights-ai-power-demand-drives-hvdc-shift-in-data-centers-full-stack-integration-emerges-as-key/
61. Power Electronics News, "PCIM Data Center Panel, Part 2: SSTs" (29 Jun 2026). https://www.powerelectronicsnews.com/the-evolution-in-data-center-power-distribution-panel-part-2-ssts/
62. Eaton press release, "Eaton completes acquisition of Resilient Power Systems Inc." (6 Aug 2025). https://www.eaton.com/us/en-us/company/news-insights/news-releases/2025/eaton-completes-acquisition-of-resilient-power-systems-inc---str.html
63. Canary Media, "A universal adapter for solar, batteries, EVs, and microgrids is here" (2025) (secondary). https://www.canarymedia.com/articles/distributed-energy-resources/solid-state-transformers-dgmatrix-resilient-power
64. DG Matrix, News page (accessed 2 Oct 2026). https://www.dgmatrix.com/news-and-media/news
65. BigGo Finance, "AI Data Center Power Shortage Narrative Shifts: Distribution Equipment and Rack-Side Power..." (2026) (secondary). https://finance.biggo.com/news/98abc850-ab8e-4948-8ab3-ca9be17b5cc0
66. Heron Power, company website (accessed 2 Oct 2026). https://www.heronpower.com/
67. The P2 report in this folder (`P2_power_semiconductors.md`), which verifies Infineon's AI-revenue targets and the silicon-carbide and gallium-nitride oversupply against primary sources.
68. Timothy Sykes news, "VICR Stock Surges As AI Royalties Turbocharge Growth Outlook" (22 Sep 2026) (secondary). https://www.timothysykes.com/news/vicor-corporation-vicr-news-2026_09_22/
69. Lite-On press release, "LITEON Showcases Next-Generation 800 VDC and NVIDIA Vera Rubin Platform Solutions at NVIDIA GTC 2026" (Mar 2026). https://www.liteon.com/en/news/press-center/content/liteon-nvidia-gtc-2026
70. This hub's AI Infra Digest 2026-09-29, NVIDIA DSX Ready program item citing Vertiv IR / ServeTheHome (this site's own digest; not independently re-verified). https://armanamirzhan.github.io/investment_dashboard_public/digests/2026-09-29.html
71. Navitas Semiconductor, Q2 2026 results (Form 8-K Ex. 99.1), 27 Jul 2026. https://www.sec.gov/Archives/edgar/data/1821769/000162828026049795/exhibit991-navitassemicond.htm
72. Power Integrations, Q2 2026 results (Form 8-K Ex. 99.1), 5 Aug 2026. https://www.sec.gov/Archives/edgar/data/833640/000083364026000141/powi-20260805xexx991.htm
73. Flex, Q1 FY2027 results (Form 8-K Ex. 99.1), 29 Jul 2026. https://www.sec.gov/Archives/edgar/data/866374/000086637426000026/flexex991-6262026.htm
74. Advanced Energy, Q2 2026 results (Form 8-K Ex. 99.1), 3 Aug 2026. https://www.sec.gov/Archives/edgar/data/927003/000092700326000030/aeis-20260803xex99d1.htm
75. Vicor press release via Yahoo, "ITC bars importation of power modules and unlicensed computing systems that infringe Vicor patents" (14 Feb 2025; Inv. 337-TA-1370). https://finance.yahoo.com/news/itc-bars-importation-power-modules-174300644.html
76. Vicor, Form 10-Q for quarter ended 30 Jun 2026 (filed 29 Jul 2026). https://www.sec.gov/Archives/edgar/data/751978/000119312526322462/vicr-20260630.htm
77. Vicor press release, "Vicor licenses VPD to a leading AI OEM" (16-17 Sep 2026). https://www.vicorpower.com/press-room/2026/vicor-licenses-vpd-to-a-leading-ai-oem
78. Vicor press release, "Vicor Corporation Raises Q3 2026 Revenue Guidance" (30 Sep 2026). https://www.globenewswire.com/news-release/2026/09/30/3372361/0/en/vicor-corporation-raises-q3-2026-revenue-guidance.html
79. TradingKey, VICR forecast page (1 Oct 2026) (secondary). https://www.tradingkey.com/markets/stocks/vicr/forecast
80. Vicor press release, "Vicor steps up its IP licensing practice" (20-21 Oct 2025). https://www.vicorpower.com/press-room/vicor-steps-up-its-ip-licensing-practice
81. Littelfuse, Q2 2026 results (Form 8-K Ex. 99.1), 29 Jul 2026. https://www.sec.gov/Archives/edgar/data/889331/000162828026050382/q22026earningsreleaseex991.htm
82. Amphenol, Q2 2026 results (Form 8-K Ex. 99.1), 29 Jul 2026. https://www.sec.gov/Archives/edgar/data/820313/000110465926087904/aph-20260729xex99d1.htm
83. Chiang Rai Times summarizing IDTechEx, "AI Data Centers Drive a $950M Supercapacitor Boom" (2026) (secondary). https://www.chiangraitimes.com/tech/ai-data-centers-supercapacitors/
84. VAC (Vacuumschmelze), VITROPERM nanocrystalline material page (accessed 2 Oct 2026). https://www.vacuumschmelze.com/products/soft-magnetic-materials-and-stamped-parts/nanocrystalline-material-vitroperm
85. 01.co research, "Delta Electronics 2Q26 Preview" (26 Jul 2026) (secondary). https://01.co/research/delta/delta-2q26-preview.html
86. Vicor Press Room (incl. "Vicor acquires sites for additional ChiP fabs", 11 Sep 2026). https://www.vicorpower.com/press-room
87. MarketBeat, VICR forecast page (29 Sep 2026) (secondary). https://www.marketbeat.com/stocks/NASDAQ/VICR/forecast/
88. Investing.com, "Needham raises Vicor stock price target to $350 on AI revenue outlook" (1 Oct 2026) (secondary). https://www.investing.com/news/analyst-ratings/needham-raises-vicor-stock-price-target-to-350-on-ai-revenue-outlook-93CH-4927280
89. Eaton, Q2 2026 results (Form 8-K Ex. 99), 31 Jul 2026. https://www.sec.gov/Archives/edgar/data/1551182/000155118226000027/etn06302026exhibit99.htm
90. Yahoo Finance (GuruFocus), "Eaton Corp PLC (ETN) Q2 2026 Earnings Call Highlights" (Jul/Aug 2026) (secondary). https://finance.yahoo.com/markets/stocks/articles/eaton-corp-plc-etn-q2-230128644.html
91. Vertiv, Q2 2026 results (Form 8-K Ex. 99.1), 29 Jul 2026. https://www.sec.gov/Archives/edgar/data/1674101/000162828026050323/q22026exhibit991vrt07292026.htm
92. Alpha and Omega Semiconductor, FQ4 2026 results (Form 8-K Ex. 99.1), 12 Aug 2026. https://www.sec.gov/Archives/edgar/data/1387467/000162828026056197/exhibit991earningreleaseju.htm
