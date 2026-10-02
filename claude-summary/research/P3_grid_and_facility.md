> **Working research report, published as-is for transparency (2 Oct 2026).** Written by an AI research agent for the Claude Investment Summary pages. Every figure carries a date and source; "secondary" marks relays; "my estimate" marks the agent's arithmetic. Prices are a point-in-time snapshot. Not investment advice. Final picks and targets on the website may differ from the rankings here.

# P3: Grid-to-facility electrification for AI data centers
### From generation step-up and transmission down to the data-center switchboard (excluding in-rack power and power-semiconductor fabs)

*Research date: Friday 2 October 2026. Written for an educational investment-analysis page. This is not investment advice.*

**Conventions.**
- `[n]` refers to the numbered sources in §16. "(secondary)" marks an aggregator, a press summary or a headline-only reference. "**my estimate**" marks my own arithmetic or assumptions.
- **Price dates.** US and European listings use closes on **1 Oct 2026**. Korean and Japanese listings use closes on **2 Oct 2026**. China A-shares use closes on **30 Sep 2026** (Golden Week).
- **Market data.** Market caps, consensus EPS, ratings and price targets come from the Yahoo Finance data feed, retrieved 2 Oct 2026 between 07:45 and 08:40 UTC [107] (secondary aggregator). Yahoo's rating scale runs from 1 = Strong Buy to 5 = Sell.
- **Forward P/E** is my arithmetic: price ÷ Yahoo consensus EPS for the stated fiscal year.
- **FX (2 Oct 2026)** [107]: USD/KRW 1,346.9; USD/JPY 157.7; EUR/USD 1.126; USD/CAD 1.422; USD/DKK 6.64.

**Method caveat.** The session's web-search quota ran out early. Most verification therefore came from primary documents fetched directly:
- SEC EDGAR 8-K exhibits;
- company PDFs and press releases;
- the 9 Apr 2026 Federal Register proclamation, whose annex tables I read by OCR of the published PDF;
- trade press, found through a news feed;
- the Yahoo quote API.

Items I could not verify are flagged where they appear and listed in §15.

---

## 0. Executive summary: twelve conclusions

1. **The binding constraint has narrowed to the top of the voltage stack.** Large power transformers, GSUs and EHV units (≥345 kV, ≥100 MVA) are still the main schedule gate into 2028–29:
   - McKinsey puts the Europe + North America shortfall in 2025 at **38%**: 914 GVA of demand against 566 GVA of supply. It expects the backlog to reach **3.3× annual supply by 2030**, with lead times **up to 5 years** (18 Sep 2026) [5].
   - Wood Mackenzie's survey averages are **128 weeks** for power transformers and **144 weeks** for GSUs [1][2].

   Below 10 MVA the market is starting to loosen:
   - Hammond's backlog fell **6.9% quarter on quarter** because "shipments exceeded new order bookings". The company cited "improvements in competitive lead times" and "increasingly competitive pricing" in Canada (30 Jul 2026) [56].
   - NEMA reports "recent improvements" for distribution transformers [7].
   - MR now commits to **16-week** on-load tap-changer (OLTC) deliveries [55].
2. **The component bottleneck has moved from tap-changers to HV bushings and insulators.** Bushing lead times run **up to 2 years**, and Trench's new Charlotte plant ships its first 765 kV dry-type bushings only in **early 2028** (Trench CEO, Sep 2026) [54].
3. **US tariffs are inverted, and I found no investor coverage of it.** Under the 9 Apr 2026 Section 232 proclamation [45][46][47]:
   - imported **GOES coil pays 50%** (Annex I-A);
   - **GOES laminations and cores pay 25%** (Annex I-B);
   - **finished liquid-filled transformers above 10 MVA pay only 15% until 31 Dec 2027** (Annex III), then revert to 25%.

   **My estimate** of the consequences:
   - a 2027 import pull-forward;
   - US-made LPT pricing power steps up from 2028;
   - an advantage for makers with US plants: HD Hyundai Electric (Alabama), Hyosung (Memphis), Siemens Energy (Charlotte, 2027), Hitachi Energy (South Boston, 2028) and Prolec GE;
   - a cost squeeze on US plants that rely on imported high-grade GOES.
4. **GOES scarcity is real but regional and policy-made, not global.**
   - In the US, Cleveland-Cliffs is the only producer. Its GOES output rises **+25% only in 2028** [36], and its grades lag the Japanese ones [38]. Flux Steel Works adds **260 kt/yr only from 2029** [39].
   - Elsewhere the problem is too much supply, not too little. The EU imposed a safeguard against an import flood (from 25 Sep 2026), and thyssenkrupp idled its Isbergues plant from June to September 2026 [41].
   - No listed company is a clean GOES owner. "Stainless and electrical" steel is only **4%** of Cliffs' shipments [37].
5. **Korean transformer makers are the clearest case of a bottleneck owner that has been de-rated.** From their May peaks:
   - **HD Hyundai Electric is down 52.6%** to ₩678,000, or 19.9× 2027E.
   - **Hyosung is down 41%** (22.6×).
   - **LS Electric is down 37.5%** (41×) [107].

   The causes are fund flows and fear rather than orders: AI money rotated into Samsung and SK hynix through new single-stock leveraged ETFs, investors worried about a "peak-out", and HD Hyundai Electric's mix shift raised margin concerns [24][25]. Backlogs and guidance kept rising through Q2 [23][28].
6. **Hyosung holds the closest thing to a US monopoly in this scope.** Its Memphis plant is "currently the only facility in the country capable of manufacturing 765-kV transformers" (company claim) [30]. Its joint venture with Quanta starts US production of **72.5–800 kV gas circuit breakers** in October 2026 [30][31]. HD Hyundai Electric adds 765 kV capability in Alabama in **April 2027** [26].
7. **The megacap electrical names are priced.**

   | Name | Forward P/E (2027E) | Note |
   |---|---|---|
   | GE Vernova | 39.8× | 2026 EPS is inflated by a ~$4.0B pre-tax Prolec remeasurement gain [18] |
   | Quanta | 33.5× | |
   | Eaton | 27× | |
   | Schneider | 24× | |
   | ABB | 22× | |

   Source: [107]. Siemens Energy is the cheapest Western HV incumbent: **22.9× FY9/27**, 26% below its high, with a **19.9% Grid Technologies margin** [14][107].
8. **HVDC cable is an oligopoly running "flat out"** with "no pricing pressure" (Prysmian, 30 Jul 2026) [69]. Valuations are fair rather than cheap: Prysmian 20.4× 2027E, NKT about 21.6× (**my estimate**), and Nexans 14.5×, the value option [107].
9. **Facility solid-state transformers (SSTs) are real but late, and they only replace part of the chain.**
   - Jefferies sizes the US data-center SST market at **$37M today rising to $4.3B by 2030**, with adoption at scale in 2027–29 [96].
   - EPRI still describes SSTs as pilot/prototype technology [97].
   - SSTs take medium-voltage input (about 10–34.5 kV) [67][111]. They replace the **medium-to-low-voltage (MV→LV) step-down transformers and LV switchboards** inside new 800 VDC halls. They do **not** replace HV substations, GSUs or MV switchgear (my analysis).
10. **Data-center battery storage (BESS) is the under-modelled demand spike.**
    - **Regulatory pull:** a NERC Level 3 alert (May 2026); PJM's **3.8 GW** data-center load trip on 22 Jul 2026; and FERC-ordered reliability standards due **31 Dec 2026** [86][87][88].
    - **Industry pull:** NVIDIA's BESS qualification guidelines (Jun 2026) [89].
    - **My estimate:** 0.25–0.5 MWh per MW of new US data-center capacity gives **5–10 GWh in 2026 and 21–42 GWh/yr by 2030** [85]. That compares with roughly 34 GWh annualized for *all* US storage today [92].
    - The listed vehicles are flawed, so this is a watch item rather than a pick.
11. **Battery storage does not "replace the UPS". The UPS function moves to medium voltage and merges with grid support.**
    - Examples: ABB's 34.5 kV HiPerGuard MV UPS [60] and GE Vernova's MV-UPS blocks [19].
    - Rack capacitors (GB300: 65 J per GPU [90]) cover only milliseconds. That is about 1.8 kWh per 100,000 GPUs, or roughly 46 ms at 140 MW (**my estimate**).
    - Diesel gensets are the more exposed incumbent for short backup. Engines and gas still win for multi-hour backup.
12. **Ranked shortlist:**
    1. HD Hyundai Electric (267260.KS)
    2. Hyosung Heavy Industries (298040.KS)
    3. Siemens Energy (ENR.DE / SMEGF)
    4. Hitachi (6501.T / HTHIY)
    5. LS Corp (006260.KS)
    6. Powell Industries (POWL)
    7. Prysmian (PRY.MI / PRYMY)
    8. Forgent Power Solutions (FPS)
    9. MYR Group (MYRG)
    10. Nexans (NEX.PA / NXPRF)

    Details are in §12; rejected names are in §13.

---

## 1. Value-chain map (October 2026)

Notation: `exchange:ticker`, followed by the US OTC or ADR symbol where one exists. Scarcity status is my assessment based on the evidence in §§2–8.

| Layer | Products | Public companies | Notable private / unlisted | Status, Oct 2026 |
|---|---|---|---|---|
| **A. Step-up and transmission transformers** | GSUs; LPTs 100–1,000+ MVA; EHV 345–765 kV; HVDC converter transformers; phase shifters | Hitachi (TSE:6501; HTHIY/HTHIF) for Hitachi Energy; Siemens Energy (XETRA:ENR; OTC SMEGF; the SMNEY ADR returned no quote on 2 Oct [107]); GE Vernova (NYSE:GEV), owner of 100% of Prolec GE since 2026 [18]; HD Hyundai Electric (KRX:267260); Hyosung Heavy Industries (KRX:298040); LS Electric (KRX:010120); Iljin Electric (KRX:103590); Mitsubishi Electric (TSE:6503; MIELY); WEG (B3:WEGE3; WEGZY); TBEA (SSE:600089); China XD (SSE:601179); Sieyuan (SZSE:002028); Hitachi Energy India (NSE:POWERINDIA); CG Power (NSE:CGPOWER); TARIL (NSE:TARIL); Astor Enerji (BIST:ASTOR); Meidensha (TSE:6508); Fuji Electric (TSE:6504; FELTY); Daihen (TSE:6622); Takaoka Toko (TSE:6617) | Virginia Transformer (claims to be the #1 North American power-transformer maker [57]); SGB-SMIT; ERMCO; Georgia Transformer; Pennsylvania Transformer; JST Power Equipment; Toshiba energy systems (Toshiba went private in 2023, background) | **Scarce now**, through about 2028–29 |
| **B. Transformer inputs** | GOES, especially Hi-B / domain-refined grades; amorphous ribbon; copper and magnet wire; bushings; OLTCs; pressboard; mineral and ester oil | GOES: Cleveland-Cliffs (NYSE:CLF), the only US producer [36]; Nippon Steel (TSE:5401; NPSCY); JFE (TSE:5411); POSCO Holdings (KRX:005490; NYSE:PKX); Baosteel (SSE:600019); thyssenkrupp (XETRA:TKA; TKAMY). Copper: Freeport (NYSE:FCX), Southern Copper (NYSE:SCCO). Magnet wire and copper via LS Corp (KRX:006260: Essex Solutions, LS MnM). HV accessories: Pfisterer (XETRA:PFSE) | Flux Steel Works (GOES, 2029) [39]; Proterial (amorphous) [116]; Trench Group / HSP (bushings) [54]; Maschinenfabrik Reinhausen (OLTCs) [55]; Weidmann; Nynas; Cargill (ester fluids) | **Scarce:** US high-grade GOES; HV bushings and insulators (up to 2 years). **Normalized:** OLTCs (16 weeks) |
| **C. Distribution, pad-mount and dry-type transformers** (MV→LV at the facility) | Pad-mounts; unit substations; dry-type; MV→LV skids | Eaton (NYSE:ETN); Schneider (EPA:SU; SBGSY); ABB (SIX:ABBN; ABBNY); Siemens AG (XETRA:SIE; SIEGY); Hammond Power (TSX:HPS.A; HMDPF); Forgent (NYSE:FPS; MGM and VanTran brands); LS Electric; HD Hyundai Electric (Cheongju distribution campus [27]); WEG | ERMCO; Howard Industries; Central Moloney; Virginia Transformer | **Easing at the margin** in 2026. SST substitution risk from about 2029 |
| **D. MV/HV switchgear, breakers, e-houses, LV switchboards** | AIS/GIS; SF₆-free MV; HV/EHV gas circuit breakers; prefabricated power rooms (e-houses / "powertrains"); LV switchboards | Eaton; Schneider; ABB; Siemens AG (Smart Infrastructure); Siemens Energy (HV GIS); Hitachi Energy (HV GIS); GE Vernova (AIS/GIS); Mitsubishi Electric; Powell (NASDAQ:POWL); Hubbell (NYSE:HUBB); LS Electric; Hyosung (GIS; GCB joint venture with Quanta); HD Hyundai Electric (GIS); Legrand (EPA:LR; LGRDY); nVent (NYSE:NVT); Forgent | COL Group (being acquired by Eaton for €810M [22]); Lucy Group (bought Nuventura, SF₆-free); Ormazabal / Velatia | **Tight but scaling.** The HV/EHV breaker tier is the tightest |
| **E. Cables** | HVDC land and subsea; EHV/HV AC; MV distribution; installation vessels | Prysmian (BIT:PRY; PRYMY); Nexans (EPA:NEX; NXPRF); NKT (CPH:NKT); Sumitomo Electric (TSE:5802; SMTOY); Furukawa (TSE:5801; FUWAY); Fujikura (TSE:5803); LS Corp (via unlisted LS Cable & System); LS Eco Energy (KRX:229640); Gaon Cable (KRX:000500); Taihan (KRX:001440); ZTT (SSE:600522); Orient Cable (SSE:603606); Hengtong (SSE:600487); Cenergy (ATHEX:CENER); DEME (EBR:DEME, installation) | Southwire; Jan De Nul (installer) | **HVDC scarce to about 2030**; MV cable adequate |
| **F. HVDC converter stations, FACTS, STATCOM** | Converter valves, converter transformers, control | Hitachi Energy (>175 GW of HVDC links integrated [8]); Siemens Energy; GE Vernova; China XD; NR Electric (background) | — | A Western three-supplier market (my characterization); long-dated slots |
| **G. BESS and grid-forming PCS at data centers** | LFP cells and containers; grid-forming inverters; MV UPS; supercapacitors | Tesla (NASDAQ:TSLA); Fluence (NASDAQ:FLNC); LG Energy Solution (KRX:373220); Samsung SDI (KRX:006400); CATL (SZSE:300750; HKEX:3750); Sungrow (SZSE:300274); SMA Solar (XETRA:S92); EnerSys (NYSE:ENS); Eos (NASDAQ:EOSE); ABB, GE Vernova and Hitachi Energy (MV UPS / PCS) | EPC Power; ON.Energy; Skeleton (supercapacitors); TerraFlow (flow batteries); SK On | **Demand forming** (regulatory pull). Non-Chinese US-made cells are tight after EO 14421 and FEOC rules; Samsung SDI expects demand to outstrip its US LFP output [49][94] |
| **H. Onsite generation** (brief; covered by a separate report) | Heavy and aero-derivative gas turbines; reciprocating engines; fuel cells | GE Vernova; Siemens Energy; Mitsubishi Heavy (TSE:7011; MHVYF); Doosan Enerbility (KRX:034020); Baker Hughes (NASDAQ:BKR); Caterpillar (NYSE:CAT); Wärtsilä (HEL:WRT1V; WRTBY); Cummins (NYSE:CMI); Rolls-Royce (LSE:RR; RYCEY); **INNIO (NASDAQ:INIO; IPO June 2026)** [100]; Bloom (NYSE:BE); FuelCell (NASDAQ:FCEL); Generac (NYSE:GNRC); Solaris (NYSE:SEI) | Ansaldo Energia [101]; Bergen Engines | Turbines are crowded and **priced** |
| **I. EPC contractors and craft labor** | Transmission and substation construction; inside-the-fence electrical; site work | Quanta (NYSE:PWR); MYR Group (NASDAQ:MYRG); Primoris (NYSE:PRIM); EMCOR (NYSE:EME); Comfort Systems (NYSE:FIX); Sterling (NASDAQ:STRL); MasTec (NYSE:MTZ); IES (NASDAQ:IESC); Argan (NYSE:AGX) | Many regional electrical contractors (EC&M Top 50 [81]) | **Labor binding;** leaders priced |

---

## 2. Transformers: the bottleneck is real but splitting by voltage class

### 2.1 Lead times, prices and demand (latest available)

| Class | Latest lead-time evidence | Trend |
|---|---|---|
| Large power transformers (average across the US market) | **128 weeks** (Wood Mackenzie Q2-2025 survey, still the latest survey figure in circulation in 2026) [1][2]. A lead-time *index* puts substation/power transformers at "160+ weeks, elevating" (VAWN, updated 13 Aug 2026; secondary) [3] | Flat to up |
| Generator step-up (GSU) | **144 weeks** (Wood Mackenzie Q2-2025) [1][2] | Up. GSU demand +274% from 2019 to 2025 [1] |
| Largest / highest-capacity units | "**Up to four years**" (PwC analysts via Reuters Events, 11 May 2026) [4]. "**Up to 5 years**", against about 1 year historically (McKinsey, 18 Sep 2026) [5]. "In some cases three or four years" (CoBank review, July 2026) [6] | Up |
| Distribution / pad-mount | About **30 weeks** (VAWN, citing NEMA, Aug 2026; secondary) [3]. NEMA said backlogs were "a year or more… about twice the historical lead time, **though there have been recent improvements**" (22 Apr 2026) [7] | **Easing** |
| Dry-type (Hammond) | Backlog **−6.9% QoQ** and −3.1% versus Q4-25, "as shipments exceeded new order bookings…enabling continued improvements in competitive lead times". Canada shows "increasingly competitive pricing" (30 Jul 2026) [56] | **Easing** |
| On-load tap-changers (component) | MR commits to **16-week** delivery (14 Apr 2026) [55] | **Normalized** |
| HV bushings (component) | "**Up to two years** depending on voltage class". Insulators are "the main supply-side bottleneck" (Trench Group CEO, Sep 2026) [54] | **Tight** |

**Contrarian datapoint.** A transformer broker told POWER that substation transformers "in all voltage classes" can be delivered in **12–14 months** by buyers willing to go beyond the "big four" OEMs. His argument is that utility vendor lists and qualification rules cause much of the delay, not factory capacity (2 Jan 2026) [2]. **My read:** this is credible for 69–230 kV substation units and supports the "easing below EHV" thesis. It is not credible for 345–765 kV EHV units or GSUs, where the qualified supplier set is genuinely small.

**Prices.** From 2019 to 2025 prices rose:
- **+77%** for power transformers;
- **+45%** for GSUs;
- **+78–95%** for distribution transformers (Wood Mackenzie) [1].

Two other measures:
- MV switchgear **+50%** and circuit breakers **+47%** since 2021 [2].
- McKinsey: up to **+€8/kVA since 2021 (about +50%)** [5].

**Supply–demand arithmetic (McKinsey, 18 Sep 2026) [5]:**
- Europe + North America: 2025 demand **914 GVA** against supply **566 GVA**, a **38% shortfall**.
- Deficit of about **312 GVA/yr** through 2030.
- Backlog of **1,137 GVA** in 2025, rising to about **1,690 GVA by 2030**, or **3.3× annual supply**.
- Announced capacity additions to 2030 are about **186 GVA**, against **150 GVA** of demand growth.
- Net imports rise from **112 to 258 GVA**.
- After 2035, demand "plateau[s] at structurally elevated levels".

Goldman Sachs (26 Mar 2026; via secondary) [52]:
- Data centers add **9–12%** to US transformer demand in 2027–28, against **2–4%** growth in domestic capacity.
- US import dependency revised to about **60%**.

> **My interpretation.** McKinsey shows new capacity outrunning demand *growth* while the backlog keeps *rising*. Flows roughly balance from about 2028, but a 1.1–1.7 TVA stock of unfilled orders takes years to clear. Price *increases* should therefore decelerate from 2027–28 as 2027–29 capacity comes online (§2.3), while lead times for EHV and GSU units stay long into 2029–30. That favors owners of **EHV/765 kV** capacity and **US-sited** capacity over generic distribution-class makers.

### 2.2 Company evidence (2026 data)

| Company | Latest orders / backlog | Margin | US capacity actions |
|---|---|---|---|
| **Hitachi Energy** (in Hitachi 6501.T) | Q1 FY26 (Apr–Jun) Energy segment orders **¥1,906.3B (+87%)**, revenue ¥911.9B (+37%) (29 Jul 2026, slide summary; secondary) [9]. CFO: transformer and switchgear orders "extremely strong" [10]. Investor Day (10 Jun 2026): backlog about **$60B (FY25) → about $100B (FY30)**; data-center orders about **$1B (FY24) → about $5B (FY25) → $7–8B (FY27)**; revenue $20B (FY25) → $26B (FY27) [8] | Adj. EBITA **14.2%** in Q1 (+240 bp) [9]. FY25 13.4% → FY27 15%+ → **FY30 16–20%** [8] | South Boston VA **$457M** LPT plant, ground broken 29 Jun 2026 ("nation's largest"; online 2028) [11][4]. Gallman MS **$528M** for 10–160 MVA units up to 230 kV, production **2029**, more than 2× its US small/medium capacity. US program about **$1.5B** [12][13]. Alamo TN components $106M [115] |
| **Siemens Energy – Grid Technologies** | Q3 FY26 (Apr–Jun) orders **€5,367M (+27.6%)**, revenue €3,624M (+28.6%), **book-to-bill 1.48**, **backlog €51B**. "Substantial growth in the transformer business including data center projects" (5 Aug 2026) [14] | **19.9%** (vs 15.9%) [14] | Transformer + GIS capacity **+~50% by 2030** [15]. Charlotte NC transformer plant **2027** (part of a $1B US program, Feb 2026) [16]. €2B into transformer and switchgear plants by 2028 (CMD, Nov 2025; secondary) [17] |
| **GE Vernova – Electrification** (incl. **Prolec GE**, 100% owned since 2026) | Q2 orders **$6.3B (+66% organic)**, equipment backlog **$40.6B (+69%)**, of which about $5B is Prolec. Data-center orders **>$5B in H1** [18][19]. "$800 million in orders for transformers in the US" in H1 [19] | **18.4%** EBITDA (FY26 guide 18–20%) [18] | Units: about 9,000 in 2025 → about 10,500 in 2026, "accelerat[ing] in '27" [19]. Prolec Goldsboro NC $140M (Mar 2026; headline) [123]. Pennsylvania $166M [122] |
| **HD Hyundai Electric** (267260.KS) | Q2 orders **$1.44B (+44.6%)**, H1 orders **$3.24B (2×)**, backlog **$8.49B (+29.6%)**. Data-center share of orders **1.8% (2025) → 6.3% (2026e) → 16% (2027e)** (28 Jul 2026) [23]. FY26 orders guide raised from **$4.2B to $5.2B** [24]. H1 backlog ₩12.31T, about **3× annual sales** [27]; management: "order backlog covering more than three years" (3 Sep 2026; secondary) [114] | OPM **25.1%** in Q2; H1 25.0% [23][27] | Montgomery AL second plant: about **$200M**, **+50% EHV capacity**, **765 kV** build and test capability, completion **Apr 2027**, about ₩200B/yr of extra revenue. Already "the largest power transformer production facility in the United States" (7 Mar 2026) [26] |
| **Hyosung Heavy Industries** (298040.KS) | Heavy-industries backlog **₩17.5T** (Q1 ₩15.1T), **57% North America**. FY26 orders guide raised from **₩8.4T to ₩12T**. A **₩787B** US 765 kV order (20 Aug 2026) [28]. **₩386.5B** of UHV transformer orders from two US big-tech AI campuses (15 Sep 2026) [124] | Consolidated Q2 OP ₩264.3B on revenue ₩1.69T, about 15.6% (my calc; includes construction) [28] | Memphis: "**currently the only facility in the country capable of manufacturing 765-kV transformers**"; about half of the US 765 kV fleet installed since 2010; **+50% capacity by 2028** (company claims) [29][30]. **Hyosung HICO Breaker LLC**, a JV with Quanta, makes **72.5–800 kV gas circuit breakers** at Canonsburg PA from **Oct 2026** [30][31] |
| **LS Electric** (010120.KS) | Q2 orders **₩2.08T (+243%)**; FY orders guide raised from about ₩4T to **₩6–6.5T**. Driven by distribution boards and MV/LV transformers for US AI data centers [24]. EHV transformer revenue **+91.2%**; North America revenue about ₩400B/quarter [32]. **₩180B 345 kV order** for a US hyperscale campus (1 Oct 2026; Yonhap via hub digest; secondary) [121] | OPM about 11.3% (my calc) [32] | Utah and Texas expansion [32] |
| **Korean trio combined** | Backlog **₩36.73T (about $27B, my calc)** (3 Aug 2026; secondary) [35]. 2026E operating profit: HDHE ₩1.23T, Hyosung ₩1.13T, LS Electric ₩720B (securities-house estimates, 26 Sep 2026) [33] | — | — |
| **Hammond Power** (HPS.A.TO) | Sales C$325M (+44.7%); backlog +96.9% YoY but **−6.9% QoQ** [56] | Adj. EBITDA 16.4% [56] | New Mexican plant; AEG acquisition closed 29 Jun 2026 [56] |
| **Forgent** (FPS) | FQ4 (Jun) bookings **$1.50B (book-to-bill 3.3×)**, backlog **$3.0B (+256%)** (15 Sep 2026) [58] | Adj. EBITDA **24.4%** [58] | Revenue capacity to about **$5.8B** by FQ4-27 after a $35M Tijuana e-house expansion [58] |
| **Virginia Transformer** (private) | "Number one power transformer manufacturer in North America" (self-described) [57] | n/a | Muscle Shoals AL greenfield for 2–500 MVA units, 1,100 jobs; Rincon GA +50% (19 May 2026) [57] |

**Grid margins now exceed turbine margins inside the same companies.** Siemens Energy Grid Technologies earned **19.9%** against **17.3%** in Gas Services (Q3 FY26) [14]. GE Vernova Electrification earned **18.4%** against **11.3%** for the group (Q2) [18]. HD Hyundai Electric earned **25.1%** [23]. This is direct evidence of pricing power in grid equipment.

### 2.3 Supply response: the capacity wave arrives in 2027–29

Planned additions, by year:
- **2026:** WEG Betim (Brazil) +10–15% of its expansion [109].
- **2027:**
  - Siemens Energy Charlotte (2027) [16];
  - HD Hyundai Electric Alabama (Apr 2027) [26];
  - WEG Mexico and Colombia (early 2027) [109].
- **2028:**
  - Hitachi South Boston (2028) [11];
  - Hyosung Memphis +50% (by 2028) [29];
  - GE Vernova Hai Phong, Vietnam, about $2B for HVDC transformers (production 2028; via Goldman/secondary) [52].
- **2029:**
  - Hitachi Gallman (2029) [12];
  - Flux GOES (2029) [39].
- **Through 2030:** Siemens Energy transformer + GIS capacity +50% [15].
- **Undated:** Virginia Transformer Muscle Shoals [57].

**Imports.** In 2025 the US imported about **$30B of transformers and $22B of switchgear** (CPA analysis of trade data, 5 May 2026; secondary) [53].

**Chinese supply** is the wildcard. China's exports of ≥10 MVA transformers rose **+61% YoY** in Jan–Feb 2026, and **+182% to the US** (Goldman via secondary) [52]. Executive Order 14421 (signed 26 Aug 2026; originally numbered 14420) lets DOE prohibit or condition bulk-power-system equipment (transformers, inverters, BESS, turbines, SCADA) involving "Covered Foreign Entities", China included. Implementing rules are due by **24 Dec 2026** [49][50]. **My read:** Chinese large transformers will be largely shut out of US bulk-power and behind-the-meter data-center projects. That keeps Korea, Mexico (Prolec), Europe, Japan, India, Turkey and Brazil as the swing suppliers.

**Korean anti-dumping.** In the final administrative review of the 2012 order on Korean large power transformers, HD Hyundai Electric and Iljin received **0%**, while **LS Electric and Hyosung received 4.32%**. Both filed suit at the Court of International Trade on 11 Sep 2026 [34]. This gives HD Hyundai Electric a small relative cost advantage.

---

## 3. GOES and other transformer materials: real but regional, policy-driven and mostly not investable

### 3.1 Is high-grade GOES a true bottleneck?

**In the United States: yes, for domestic and high-permeability supply.**
- **Cleveland-Cliffs is the only US producer** [1][36].
- Its GOES output rises about **+25% only on completion of the Butler induction reheat furnaces in 2028** (Q2 call, 23 Jul 2026) [36].
- It holds a sole-source **$400M, 5-year DoD contract** for GOES running to Sep 2030 [40].
- On 20 Apr 2026 the President determined under the Defense Production Act that electrical core steel is "essential to the national defense" [39].

**Quality gap** (Breakthrough Journal, 14 Aug 2026) [38]:
- Cliffs' GOES maxes out at **920 mm** wide, against the **932 mm+** the market prefers.
- It "loses **up to 39 percent more energy**" in distribution transformers than Nippon Steel and JFE grades.
- US transformer-core imports rose from **$126M (2018) to $524M (2025)**.
- GOES prices **doubled** from 2020 to 2024.
- GOES is about **20% of transformer cost**.

**New entrant.** Flux Steel Works (private, backed by Etude Capital) is converting the former ATI plant in Louisville OH:
- design capacity **>260,000 t/yr**;
- **commercial production in 2029**;
- **>150,000 t of reservations** (15 Sep 2026) [39].

Flux says the US is "especially exposed to imports for the highest-permeability grades required for large and advanced power transformers" [39].

**Globally: no, GOES is in oversupply or protection mode.**
- The EU imposed a **provisional GOES safeguard from 25 Sep 2026** (tariff-rate quota plus price thresholds). It unusually covers "laminations, cores, and even cores already built into transformers". Imports supply ">half of EU demand", and thyssenkrupp closed its Isbergues plant from June to September 2026 (ChemAnalyst, 30 Sep 2026; secondary) [41]. The European Commission opened the safeguard investigation on 27 Mar 2026 [42].
- In China, Baosteel raised GOES list prices by **¥300/t** for July 2026 [44]. SMM described prices as rebounding, "capped" by India's anti-dumping action against Chinese GOES (17 Jul 2026; secondary) [43].

> **Conclusion.** GOES scarcity is a **US-specific, policy-made scarcity of domestically melted and high-permeability steel**, not a global shortage of electrical steel. The scarcity rent goes to (a) Japanese and Korean Hi-B producers selling into the US, and (b) whoever holds US-melted supply. Neither group is a clean listed play:
> - "Stainless and electrical" steel is only **4%** of Cliffs' 4.0 Mt of Q2 shipments [37].
> - Nippon Steel, JFE, POSCO and Baowu are huge commodity steelmakers.
> - The would-be pure plays are private (Flux).
>
> A possible POSCO–Cliffs strategic partnership (a nonbinding MoU since Oct 2025, with the definitive agreement still pending in mid-2026) [118][37] is worth watching as a route for Hi-B know-how into US plants.

### 3.2 The Section 232 tariff inversion (primary source: 9 Apr 2026 proclamation)

I read the proclamation's annex tables (FR Doc. 2026-06960, effective 6 Apr 2026) directly [45], with law-firm summaries for context [46][47]:

| Item (HTSUS) | Annex | Duty from 6 Apr 2026 | After 31 Dec 2027 |
|---|---|---|---|
| Flat-rolled alloy steel incl. GOES coil (headings **7225 / 7226**) | **I-A** | **50% of full value** | 50% |
| GOES **laminations, stacked cores, wound cores** (8504.90.9634 / .9638 / .9642) | **I-B** | **25% of full value** | 25% |
| Liquid-dielectric transformers ≤650 kVA and 650–10,000 kVA (8504.21, 8504.22); dry-type 1–500 kVA (8504.32, 8504.33) | **I-B** | **25%** | 25% |
| **Liquid-dielectric transformers >10,000 kVA** (8504.23: LPT/GSU class); dry-type >500 kVA (8504.34); transformer parts n.e.s. (8504.90.9646) | **III** | **15% total** (Column-1 duty + 232 = 15%) | **reverts to Annex I-B 25%** |

Further terms [45][46]:
- **10%** applies if the product is made entirely from US-melted steel.
- **25%** applies to countries without normal trade relations.
- Annex III benefits can be **revoked for a trading partner whose imports surge** (clause 6).
- Section 232 goods are exempt from the Section 122 10% tariff [46].

Earlier, from Aug 2025, a 50% duty had applied to the steel and aluminum content of dry-type and control transformers [48].

**Consequences (my analysis):**
1. **The tariff is inverted.** Importing a finished LPT (15%) is cheaper in tariff terms than importing GOES coil (50%) to build the same unit in the US. With GOES at about 20% of cost [38], a 50% duty adds roughly **10 points** to a US-built unit's cost. That is close to parity with an imported LPT at 15% today. **From 1 Jan 2028, imports pay 25%** and US assembly gains about 15 points of advantage.
2. **Expect a 2027 pull-forward** of imported LPT and GSU deliveries before the step-up, then a possible 2028 air pocket in import orders unless Annex III is extended. That is positive for Korean exporters' 2027 shipments. It is a 2028 risk for *export-only* capacity, and a 2028 advantage for **US-sited** plants (HD Hyundai Electric Montgomery, Hyosung Memphis, Prolec GE, Siemens Energy Charlotte, Hitachi South Boston, Virginia Transformer).
3. Cliffs gains GOES pricing power behind a 50% wall, but its grade and width limits cap the share of EHV and LPT demand it can serve [38].
4. **I have not seen this inversion discussed in the investment coverage I reviewed.** It is an engineering-plus-policy detail that sell-side "transformer shortage" models rarely carry.

### 3.3 Amorphous metal, copper and components

- **Amorphous metal.** DOE's 2024 distribution-transformer efficiency rule takes effect in 2029 and would push more amorphous cores. DOE is now considering revising it (June 2026 RFI), and EEI asked for longer compliance rather than repeal (29 Jul 2026) [51]. Proterial is building an $80M first-phase amorphous plant in India (Feb 2026) [116]. **Verdict:** the policy tailwind for amorphous is weakening. The only producer of scale (Proterial) is private; it was taken private by a Bain-led consortium in 2023 (background knowledge).
- **Copper.** COMEX copper was about **$6.56/lb (2 Oct 2026, intraday)**, up from $4.85 a year earlier (+35%), with a weekly high of $6.83 in the week of 21 Sep 2026 [107]. Copper *articles* carry 50% Section 232 duty and derivatives 25% [46]. For transformer and cable makers copper is largely a **pass-through**; Prysmian, NKT and Nexans report at standard metal prices [68][71][72]. It is a macro commodity call, not an AI-specific scarcity rent. Freeport trades at 16.7× 2027E; Southern Copper at 27.4× with a consensus "underperform" [107].
- **Bushings and insulators: the new component bottleneck.** Trench Group (private; carved out of Siemens Energy in Apr 2024) [54]:
  - revenue has **doubled to >€1B**, with a **backlog of >€2.1B**;
  - Q1–Q3 2026 revenue rose **+31%** and orders **+28%** to about €1.5B;
  - **~50% of new orders go to North America**.

  Its new Charlotte NC plant (opened Jul 2026) makes **3,500 bushings/yr initially**, expandable to 10,000. It produces units below 230 kV in 2026, up to 550 kV in 2027, and **ships its first 765 kV bushings in early 2028**. Trench has a capacity agreement with **Meta** and bought Maschinenfabrik Reinhausen's insulator assets because insulators are the bottleneck [54].
  - Listed exposure: **Pfisterer** (XETRA:PFSE; HV connectors and accessories). H1 2026 revenue rose +20.2% with a **20.4%** adjusted EBITDA margin and a €340.3M backlog. However, order intake was **€263.0M vs €290.2M** a year earlier, and management says "the expected normalization trend is becoming visible" [77]. The shares are €63.75, **−44% from the high**, at 17× 2027E [107].
- **OLTCs.** Normalized (16 weeks, MR) [55]. No longer a bottleneck.

---

## 4. Switchgear: tight and scaling, with the scarce layer at HV/EHV breakers and engineered-to-order MV

**Evidence (2026)**

| Company | Data point |
|---|---|
| **Eaton** | Electrical Americas revenue $4.0B (+18% organic) at a 27.5% margin. **Rolling 12-month orders +41%, backlog +33%**. Electrical Global backlog **+103%** (Q2, 30 Jul 2026) [20] |
| **Powell (POWL)** | FQ3 (Jun) orders **$934M (+158%)**, book-to-bill **3.0×**, backlog **$2.4B (+69% YoY, +35% QoQ)**, gross margin **30.6%** "on a continued strong and stable pricing environment". Includes a **>$400M data-center order for a behind-the-meter onsite-generation design** (3 Aug 2026) [63] |
| **Siemens Smart Infrastructure** | Q3 FY26 orders **€8.0B (+42% comparable)**, margin **20%**; electrical products won "large contracts from data center customers in the U.S. and Europe" (Aug 2026; secondary) [61] |
| **ABB** | Q2 orders **$12.04B (+28% comparable)**, op. EBITA **20.2%**; launched the **HiPerGuard 34.5 kV MV UPS** (16 Jul 2026) [60] |
| **Schneider** | H1 organic +14% (Q2 +16.5%); data center "triple-digit growth"; pricing about 2% in Q1 rising to about 2.5× that in Q2; FY26 organic guide raised to **10–13%** (30 Jul 2026; transcript summary, secondary) [62] |
| **Hubbell** | Q2 Utility Solutions +10% (organic +6%), adj. margin 25.6%; **Electrical Solutions +25% (organic +18%)**; FY26 adj. EPS $20.25–20.55 (28 Jul 2026) [64] |
| **Forgent** | Book-to-bill 3.3×; "Powertrain Solutions" (e-house / power-skid) revenue **+259% in FY26**, about one-third of Q4 revenue [58] |
| **GE Vernova** | Air-insulated switchgear about **$5B** of equipment backlog [19] |
| **Hyosung / Quanta** | US HV/EHV GCB plant (up to 800 kV) from Oct 2026 [30][31] |
| **Eaton capacity** | Bellevue NE MV switchgear plant (AIS + GIS for prefabricated systems), production **H1 2027** (9 Apr 2026) [21]. **COL Group** (Italy; SF₆-free MV) for €810M EV, about 3.2× 2027 sales (my calc), close Q1 2027 (25 Sep 2026; secondary) [22] |
| **Lead times** | MV switchgear **44 weeks** (Q2-2025 survey); LV switchgear 54 weeks; switchboards 32–41 weeks (VAWN, Aug 2026; secondary) [3] |

**Engineering transitions inside switchgear**
- **SF₆-free.** The EU F-gas Regulation 2024/573 bans SF₆ in new MV switchgear **≤24 kV from 1 Jan 2026**, in 24–52 kV from 2030, in 52–145 kV from 2028, and above 145 kV from 2032 [112]. Schneider's **RM AirSeT 38 kV** takes orders from 2027 and delivers in 2028 [67]. The transition favors incumbents with vacuum/clean-air IP (Schneider, ABB, Siemens, Eaton via COL). It is a share-shift, not a demand driver.
- **Software-defined / prefabricated MV.** Schneider claims "**3× faster ordering/manufacturing, 2× faster commissioning**" (Equinix pilot, Sep 2026) [67]. Forgent's e-house growth and Powell's yard expansion show value moving to **pre-integrated power rooms**, which cut field electrician hours (§8).

> **My assessment.** MV switchgear is a capacity problem being solved: many qualified vendors, modular factories, 12–18-month plant builds (Eaton Bellevue). It loosens faster than LPTs. The truly scarce switchgear items are **HV/EHV gas-insulated switchgear and 345–800 kV breakers**, which only a handful of suppliers make (Hitachi Energy, Siemens Energy, GE Vernova, Mitsubishi Electric, Hyosung, HD Hyundai Electric). For investors, Powell and Forgent are the higher-beta *engineered-to-order MV* plays. Eaton, Schneider and ABB are high-quality but priced (23–27× 2027E [107]).

---

## 5. Cables and HVDC: a real oligopoly, fully recognized, fairly priced

| Company | 2026 data |
|---|---|
| **Prysmian** | Transmission backlog **about €17B**, plus about €2B awarded but not yet assigned. Transmission adj. EBITDA margin **21.2%** (Q2). FY26 adj. EBITDA guide raised to **€2.80–2.90B** (30 Jul 2026) [68]. Call: "**flat out in terms of capacity in Europe and North America**… **no pricing pressure**… new tenders will be made at a better price"; about €10B of market awards in 2026, expected to be "beaten in 2027, 2028" (secondary transcript) [69]. Buying **Atkore for $95/share (about $3.8B)**; US antitrust clearance 15 Sep 2026 [70] |
| **NKT** | H1 organic revenue **−7%**; op. EBITDA margin 15.8%; HV backlog **€11.6B** plus **€2.5B+ of TenneT frameworks not in backlog**. New Karlskrona HV factory, Cologne capacity and a second cable-laying vessel in **2027** (13 Aug 2026) [71] |
| **Nexans** | PWR-Transmission backlog **€7.7B**; H1 adj. EBITDA €387.7M (11.9%); FY guide raised to €770–840M; **Republic Wire** (US) about €680M closed 1 Jun 2026; Nexans Electra vessel in service (29 Jul 2026) [72] |
| **Sumitomo Electric** | About **€2B** EPC for Amprion's **DC35 525 kV HVDC** (530 km), signed 20 May 2026. Three Amprion orders total >€3B [73] |
| **LS Cable & System** (unlisted; inside LS Corp) | 2025 sales ₩7.59T, backlog **₩7.63T (+22%)** [75]. **Chesapeake VA subsea HVDC plant**, about ₩1T, **H2 2027**, about **500 km/yr**, with ₩300B of Korea Eximbank financing [74] |

**HVDC converters.** Hitachi Energy has ">175 GW of HVDC links integrated" [8]. The Western converter-station market is concentrated in Hitachi Energy, Siemens Energy and GE Vernova (my characterization). Argonne economist Dana Golden notes the **US HVDC supply chain lacks domestic converter and DC-filter manufacturing entirely** (ChinaTalk, Jun 2026) [117].

**US transmission demand**
- **Texas 765 kV.** The PUC approved the first ERCOT 765 kV lines under the Permian Basin Reliability Plan (Apr 2025, per [83]); an RTO Insider headline (30 Aug 2026, paywalled, not opened) reports further PUC approvals [83]. ERCOT's board approved a **$9.4B** 765 kV project (Dec 2025; headline) [83]. Oncor and LCRA's 345–390 km Schleicher→Bell County line costs **$1.6–1.9B** and targets energization in 2030. Oncor's data-center queue is about **255 GW** [83]. A legislative and landowner backlash flared in Aug 2026, with the PUC chair warning that a pause would be "catastrophic" [84].
- **Quanta:** "significant [T&D] work not yet in backlog… expected to hit the field in the **second half of 2027**" (Q2 call; secondary) [78].
- **Peak load.** Utilities now forecast **166 GW** of peak-load growth over 5 years, against 24 GW forecast in 2022 (RMI, 23 Sep 2026) [106].

> **My assessment.** HVDC cable is a genuine oligopoly with vessel and factory constraints, and it is **fully recognized**. Prysmian is at 20.4× 2027E [107], 21% below its May high. My prior "≤€110 attractive" level is reasonable but not compelling at €124.85. Nexans at **14.5×** 2027E is the value option with US exposure via Republic Wire. NKT faces 2026 organic revenue down and new capacity only in 2027. In the US, **765 kV AC** (transformers, breakers, Quanta-type crews) is the larger near-term driver than HVDC, and it is still pre-backlog.

---

## 6. Battery storage at data centers and grid-forming: regulatory pull creates a demand spike outside consensus

### 6.1 Why it is happening now (engineering plus regulation)
- **The physics.** Synchronized training creates square-wave load swings, with spectral energy concentrated at **0.2–3 Hz**. That band "the grid damps poorly" and no generator was designed for (Microgrid Knowledge, 21 Sep 2026, citing the 2025 Microsoft–OpenAI–NVIDIA paper) [88].
- **The incidents.**
  - **PJM, 22 Jul 2026:** about **3,800 MW** of data-center load tripped off in northern Virginia after a normally cleared 230 kV fault, the largest such event in PJM's history [87].
  - **NERC Level 3 alert** (May 2026) with seven mandatory actions, responses due 3 Aug 2026 [86].
- **The rulebook.** A FERC order (16 Jul 2026) requires **NERC registry criteria and reliability standards for computational loads by 31 Dec 2026**, with a Phase II plan by **1 Mar 2027**. PJM proposed reliability standards for large-load disconnection events on 10 Sep 2026 (PJM Inside Lines; headline) [87][88].
- **Vendor pull.** NVIDIA's "BESS Self-Qualification Guidelines" put BESS inside the DSX AI-factory blueprint "for load buffering, ride-through and demand response". Utilities offer accelerated interconnection for flexible loads (10 Jun 2026) [89].
- **Proof of scale.** xAI's Colossus 2 battery in Memphis holds about **2.8 GWh visible / 3.3 GWh claimed** (Tesla Megapacks). TVA approved a grid hook-up on 20 Aug 2026 [91].

### 6.2 Can grid-forming BESS replace the UPS or the diesel genset? (engineering assessment)
- **It cannot replace the fast UPS or the in-rack buffers.** Transfer-time duty (milliseconds) stays with rack capacitors and BBUs, and increasingly with **MV UPS** that merges UPS and BESS functions at 13.8–34.5 kV:
  - ABB HiPerGuard 34.5 kV [60];
  - GE Vernova MV-UPS blocks [19];
  - the "MV PCS-based systems that combine UPS and BESS functions" described in [88].

  NVIDIA's GB300 PSU stores **65 J per GPU** and cut peak grid demand by 30% in Megatron training [90]. **My estimate:** 65 J × 100,000 GPUs ≈ 6.5 MJ ≈ **1.8 kWh**, about **46 ms** at 140 MW. That is enough to smooth sub-second edges, not 0.2–3 Hz oscillations or ride-through. A ±300 MW swing at 0.2 Hz needs about 0.13 MWh per half-cycle (**my estimate**). That falls squarely in BESS or supercapacitor territory, which is why grid-forming BESS and MV-PCS are the natural fit.
- **It can partly replace diesel.** For backup durations under about 1–2 hours, LFP BESS plus grid-forming inverters can displace some diesel gensets, especially where permits limit diesel run hours. **Multi-hour or multi-day backup still needs engines or turbines**, as in the 813-genset Meta El Paso and xAI designs (background from the hub's power-supplier file).
- **Net effect (my estimate):** storage content per MW of AI data center **rises**. Assume 0.25–0.5 MWh per MW. Applied to SemiAnalysis's forecast of **+21 GW** of US data-center capacity in 2026 and **+84 GW/yr by 2030** [85], that gives **about 5–10 GWh (2026) and about 21–42 GWh/yr (2030)**. For scale:
  - US storage deployments were **8.4 GWh in Q1 2026**, about 34 GWh annualized (Wood Mackenzie via [92]);
  - Tesla deployed **13.5 GWh** globally in Q2 2026 [92].

  Data centers could become a **top-three US storage segment by 2028–29**, and that is not in most storage forecasts I have seen.

### 6.3 Who captures it, and why I do not rank them
- **Tesla Energy.** It has the scale and the xAI/SpaceX captive demand (SpaceX bought about **$295M** of Megapacks in Q2 2026 [91]). But energy-division gross margin fell (Q2 2026; headline) [92], and Tesla trades at 164× 2027E, so the stock is not an energy-storage vehicle [107].
- **Fluence (FLNC).** Signed MSAs with two hyperscalers (May 2026; headline) [95]. Then it **cut guidance twice**: 2026 revenue to **$2.4B** (from $2.9–3.1B), with adj. EBITDA about $200M worse, because of **Houston contract-manufacturing ramp delays**. Securities class actions followed (17 Sep 2026) [95]. The stock is $7.57, −77% from its high [107]. This is a broken execution story, not a bottleneck owner.
- **LG Energy Solution.** Named an ESS partner for NVIDIA's AI-factory program [94]. Its Lansing MI plant has **>35 GWh/yr** of capacity, and North America ESS capacity reaches about **50 GWh** with Arizona. ESS backlog was about **140 GWh at end-2025**, with more than ₩3T of H1-2026 orders [93]. It trades at **47× 2027E** [107] and is still loss-making in 2026E.
- **Samsung SDI.** US LFP ESS ramp; iM Securities expects Q3 ESS sales +32% QoQ [94]. Trades at **28.9× 2027E** [107].
- **CATL.** Cheapest (11.5× 2027E) [107]. US exposure is impaired by FEOC rules and **EO 14421** [49].
- **Grid-forming PCS and MV UPS** (ABB, GE Vernova, Hitachi Energy, SMA, EPC Power [private]) are too small a share of those companies to drive the equity.

> **Verdict.** This is a *transition* worth tracking (watch for the 31 Dec 2026 NERC standards and DOE's EO 14421 rules), but there is **no clean, reasonably priced listed vehicle** today. The best indirect expressions are the **Korean LFP makers with US plants** (LGES, Samsung SDI). I list them under "watch" rather than in the shortlist.

---

## 7. Onsite generation: a brief state check (covered in depth by a separate report)

- **Heavy gas turbines are sold out but crowded.**
  - GE Vernova: **116 GW** of backlog plus slot reservations, aiming for ≥125 GW by year-end. Orders are priced >20% above 4Q25; it is "mostly sold out through '30"; output reaches **20 GW/yr in Q3 2026, 24 GW in 2028, 30 GW in 2030** [18][19].
  - Siemens Energy: gas backlog **69 GW**, lead times "three years or more", medium-turbine capacity 80 → about 100 units by 2028 [15].
  - MHI: backlog **35 GW** (from 23 GW), capacity doubling versus 2024 [102].
  - New entrant: Ansaldo re-entered the US with 8 × 78 MW units for a Texas data-center project [101].
  - SemiAnalysis: "overcoming GEV and Siemens turbine capacity constraints proved far easier than many had feared" [85].
  - **Verdict: priced**, with overcapacity risk around 2030.
- **Reciprocating engines.**
  - **INNIO's US IPO happened.** It priced on 3 Jun 2026 at **$27** (top of range), raising $2.4B (all secondary), with a fully diluted value of $20.3B. It trades on **NASDAQ: INIO** [100]. It closed at **$18.28 on 1 Oct 2026, −57% from its $42.95 high**, at 23× forward EPS; consensus target $37.50 (n = 10) [107].
  - Wärtsilä: €28.15 (1 Oct close), 21.5× 2027E (my calc), −31% from high, consensus "hold" [107].
  - Recent orders: Bergen Engines (about 750 MW with Crusoe) and Liberty's $505M Bergen order (headlines) [129].
- **Fuel cells.** Bloom is at 56× 2027E [107]. Hitachi–Bloom onsite-power collaboration (8 Sep 2026) [110].
- **Nuclear fuel cycle.** Urenco USA adds +2.1M SWU, but first cascades only in **2032**. Current capacity of 4.3M SWU covers about one-third of US demand [119]. Fuel-cycle bottlenecks are long-dated and outside this scope.

---

## 8. EPC and craft labor: a real constraint, expressed through prefabrication and the leaders' multiples

**Contractor results**
- **Quanta:** backlog **$53.4B**, RPO $33.6B; FY26 adj. EPS guide **$16.45–16.95** (Q2, 30 Jul 2026) [31][78]. Formed the Hyosung HICO Breaker JV and acquired Phalcon, Enerfab, Percheron and PSD for about $1.24B [31].
- **MYR Group:** record revenue $1.08B. But **T&D revenue grew only ~3.5% (+$17.7M) while C&I grew ~41%** (my calcs). Backlog $3.16B (29 Jul 2026) [79]. → Transmission construction volume has *not yet* inflected; Quanta's "2H27" comment [78] agrees.
- **Sterling:** revenue +90% (organic about +50%); backlog **$4.33B (+116%)**; mission-critical work is **92% of E-Infrastructure backlog**; **CEC electrical revenue +140%** (3 Aug 2026) [80].
- **EMCOR** RPO $17.14B and **Comfort Systems** backlog about $14B (Q2; secondary) [125].

**Industry-wide**
- EC&M's **Top 50 electrical contractors** reported 2025 revenue of **$80.4B (+35%)**; data centers are a top-three market for **91% of firms** [81].
- Off-site / prefabrication is the main productivity response, which ties into Forgent's e-houses and Powell's yard expansion [58][63].

**Risk signals**
- **Primoris** gross margin fell to **4.9%** on six troubled solar/BESS projects, and a class action followed [82].
- MasTec fell 9.6% on an EPS miss [125].
- Quanta flagged "state-level data center bans or pauses" [78], and Texas paused data-center interconnections amid 474 GW of requests (Aug 2026; headline) [120].

> **Verdict.** Craft labor is binding, but the leaders are priced (Quanta 33.5×, Comfort 28× [107]). **MYR Group** is the cheapest pure electrical contractor with T&D leverage: **20.4× 2027E, −41% from its June high** [107]. It also carries the cleanest *option* on the 2H27 transmission inflection.

---

## 9. Engineering transitions: what changes, when, and who it hurts

### 9.1 Do facility SSTs cannibalize distribution transformers and LV switchgear? Yes, partly, and mostly after 2029.

**Scope of substitution.** A data-center SST takes **medium-voltage AC (about 10–34.5 kV)** and delivers about **800 VDC** [67][111].

| What it replaces | What it does *not* replace |
|---|---|
| MV→LV pad-mount and unit-substation transformers | The HV substation (138–765 kV → 34.5 kV) |
| LV switchboards | GSUs |
| Most of the central UPS / PDU / PSU chain | MV switchgear and protection |
| | HV breakers, bushings, cables |

SSTs therefore do **nothing** to relieve the LPT/EHV bottleneck (§2). Larger campuses actually pull **more** 345/765 kV interconnection capacity.

**Commercial status (2026)**
- EPRI calls SSTs "largely in pilot or prototype stages". The first independently validated **1-MVA** unit on a live 13.2 kV feeder came in June 2026 [97].
- Commercial units:
  - DG Matrix: 11 units in the field; its first real HPC load is a Dell GPU cluster paired with a vanadium flow battery [96].
  - GE Vernova: a **5 MW indoor SST prototype to its first hyperscaler late 2026**, a 6 MW outdoor unit, and orders "more credibly in '27" [19].
  - Eaton: MVSST 2.0 with Infineon SiC (10 kV → 800 VDC, 1.25–2.5 MW, >98%; Sep 2026) [67].
  - Hyosung: a 22.9 kV SST launched Sep 2026 [99].
  - Enphase: pilots in early 2027 [96].
- Jefferies: US data-center SST market **$37M today → $4.3B in 2030**, adoption at scale **2027–29**, and a "qualification window" through 2028 [96].
- Enphase's caveat: on the traditional grid, SSTs "always lost to the iron-and-copper transformer, which is cheap, passive, and lasts decades" [96].
- SolarEdge: designing for **34.5 kV** input is substantially harder than for 10 kV [111].
- The incentive is real. SemiAnalysis estimates 800 VDC cuts facility-level power use by **about 5%**, more than 50 MW per GW of IT load [108].

**My estimate of timing**
- SST share of *new AI data-center* MV→LV conversion capacity: **<2% in 2027, about 3–8% in 2028, about 15–30% by 2030**. This depends on Kyber-class 800 VDC racks arriving; the sibling in-hall report P1 covers rack timing.
- Scale against the incumbents:
  - Jefferies' $4.3B (2030) compares with a US transformer market of roughly $20B in 2030 (my interpolation of a 2024→2034 projection of $12.2B → $25.7B cited by Korea Herald [29], secondary).
  - It also compares with a US switchgear market of roughly $26B (my interpolation of $17.8B → $31.8B cited by Eaton [21], secondary).
- **Displacement is a 2029–2032 story**, concentrated in the AI data-center slice.

**Who is hurt**
- Pure-play LV and distribution-class transformer makers: **Hammond (dry-type)**, parts of **Forgent**'s transformer line, and pad-mount makers.
- Central UPS and LV switchboard franchises.

**Who is hedged**

Most of the incumbents are themselves SST vendors: Eaton, ABB (Infinitus), GE Vernova, Hitachi, Siemens Energy (with Reinhausen), Hyosung, LS Electric, Delta and Schneider. So this is a *share shift*, not extinction. SiC device makers win; they are covered by the semiconductor report.

### 9.2 MVDC microgrids (onsite generation + batteries) bypassing AC? Not before about 2030.

**Why it is not happening yet**
- Onsite gas turbines and reciprocating engines generate **AC**. Only fuel cells and batteries are natively DC.
- MVDC campus buses would need:
  - MV DC breakers (solid-state circuit breakers are immature at MV);
  - protection standards;
  - insurer and utility acceptance.

**What is actually being built in 2026 is AC.** Powell's **>$400M data-center order is for "a behind-the-meter design of on-site generation assets"**, i.e. AC switchgear and e-houses [63].

Each behind-the-meter generator still needs:
- a **step-up transformer** (13.8 kV → 34.5/138 kV);
- **MV/HV switchgear**;
- **protection relays**.

Behind-the-meter generation is therefore **additive** to switchgear and transformer demand in 2026–29. SemiAnalysis expects BTM to power more than half of new US data centers from 2028, with BTM equipment demand above **50 GW/yr by 2029** [85]. DC microgrids are appearing **inside the hall at 800 V** (Delta, DG Matrix + flow battery) rather than across the campus at MVDC [96].

### 9.3 Grid-forming BESS replacing diesel or UPS?

See §6.2. In short:
- the **UPS function migrates to MV and merges with BESS** (ABB HiPerGuard 34.5 kV, GE Vernova MV-UPS);
- **diesel is partly displaced** for backup under about 2 hours;
- engines and turbines keep multi-hour duty;
- regulation (NERC and FERC standards due 31 Dec 2026) forces ride-through and buffering capability onto the demand side [86][87][88].

### 9.4 765 kV AC and HVDC: the next equipment wave, still pre-backlog

**765 kV AC**
- Texas: first 765 kV approvals; a $9.4B ERCOT project; Oncor developing four 765 kV lines targeting 2030 [83].
- PJM and Midwest corridors are also moving.
- Construction: Quanta expects "significant work not yet in backlog" to hit the field in **2H27** [78].
- MYR's T&D revenue was up only about 3.5% in Q2 [79], so the construction wave has not started.

**Equipment for 765 kV is unusually concentrated**
- **Transformers:** Hyosung Memphis is the only current US-based 765 kV producer (company claim) [30]. HD Hyundai Electric Montgomery adds 765 kV in **Apr 2027** [26]. Imports come from Hitachi Energy, Siemens Energy and others.
- **Bushings:** Trench's first US-made 765 kV dry-type bushings ship in early 2028 [54]. Other US bushing capacity exists, such as Hitachi Energy's Alamo TN component plant [115] (Hubbell's PCORE condenser bushings are background knowledge, not verified this session).
- **Breakers:** up to 800 kV from the Hyosung–Quanta JV (Oct 2026) [31], plus Hitachi Energy, Siemens Energy, GE Vernova and Mitsubishi Electric.

**HVDC**
- European backlogs are deep: Prysmian about €17B, NKT €11.6B, Nexans €7.7B [68][71][72].
- US HVDC remains merchant-project-driven, and the US has **no domestic converter supply chain** [117].
- LS Cable's Chesapeake plant (H2 2027) will be the first large US HVDC subsea cable plant [74].

### 9.5 Uniquely positioned suppliers (single-source or near-single-source)

| Position | Owner | Listed vehicle | Durability |
|---|---|---|---|
| Only US GOES mill | Cleveland-Cliffs (Butler, Zanesville) [36] | CLF, but GOES is a small part of volume [37] | Until Flux (2029) and grade gap [38][39] |
| Only US 765 kV transformer plant (claim) | Hyosung Memphis [30] | 298040.KS | Until HDHE Apr 2027 [26] |
| Largest US power-transformer plant (claim) + 0% AD | HD Hyundai Electric Montgomery [26][34] | 267260.KS | Durable; tariff step-up in 2028 helps |
| First Korean US HV/EHV breaker plant (≤800 kV) | Hyosung–Quanta JV [31] | 298040.KS / PWR | New entry |
| New US dry-type HV bushing plant ("for the first time" on US soil, company claim) | Trench Group (HSP) [54] | Private | Ramps 2026–28; 765 kV from early 2028 |
| Largest US subsea HVDC cable plant (H2 2027) | LS Cable & System [74] | Inside LS Corp (006260.KS) | From 2027 |
| HVDC converters | Hitachi Energy / Siemens Energy / GE Vernova | 6501.T / ENR / GEV | Durable oligopoly |

---

## 10. Claims checked (September 2026)

| Claim | Status (2 Oct 2026) | Evidence |
|---|---|---|
| LPT/GSU lead times 128–160+ weeks | **Confirmed, with caveats.** 128 weeks (power transformers) and 144 weeks (GSU) are Wood Mackenzie's Q2-2025 survey averages, still the latest survey numbers. "160+ weeks" is an aggregator index. The largest units run up to 4–5 years. Distribution-class lead times are **improving** | [1][2][3][4][5][7][56] |
| Korean transformer makers de-rated ~47% from highs | **Stale. The de-rating has deepened for HDHE.** HDHE is ₩678,000, **−52.6%** from its ₩1,430,000 weekly high (May 2026). Hyosung is ₩2,785,000, **−41.3%** (−42.8% from the ₩4,865,000 record close). LS Electric is ₩209,500, **−37.5%** | [107][24] |
| Hitachi Energy is an under-priced oligopoly | **Oligopoly: confirmed** (1 in 6 transformers and 1 in 4 HV switchgear installed globally; >175 GW of HVDC links). **Under-priced: no longer clear.** Hitachi is ¥5,522, only −8.6% from its high, at 25.5× FY3/27 and 21.3× FY3/28. Consensus target ¥6,600 (+19.5%); Bernstein ¥7,300 | [8][107][110] |
| GE Vernova ~44× earnings | **Needs restating.** At $987.45 it is 39.8× CY27 consensus EPS ($24.78). CY26 EPS ($30.58) and trailing P/E are inflated by the ~$4.0B pre-tax Prolec remeasurement gain | [18][107] |
| Eaton Americas orders +41%, backlog +33% (Q2 2026) | **Confirmed.** Rolling 12-month organic orders +41%; backlog +33% YoY | [20] |
| (Hub digest) Hitachi MS plant production 2029 | **Confirmed.** Gallman, 10–160 MVA, production 2029 | [12] |
| (Hub digest) Siemens Energy Grid €51B, group €162B; GEV DC orders >$5B in H1; Powell backlog $2.4B | **Confirmed** | [14][18][63] |
| (Hub digest) "Eaton US DC backlog 307 GW" | **Not verified in this session.** Treat as unconfirmed | — |

---

## 11. What is priced and what is not

| Theme | Market pricing (my judgment) | Why |
|---|---|---|
| Heavy gas turbines (GEV, Siemens Energy Gas, MHI) | **Priced / crowded** | GEV at 40× CY27; industry capacity roughly doubling by 2029–30; Ansaldo and others entering [101][19][102] |
| Megacap electrical (ETN, SU, ABB, SIE, LR) | **Priced** | 21–27× 2027E; well understood |
| US EPC leaders (PWR, FIX, EME) | **Priced** | 21–34× |
| Liquid cooling (VRT) | **Priced** (outside scope) | 27× 2027E |
| HVDC cable (PRY, NKT) | **Fairly priced** | Oligopoly fully recognized |
| **Korean EHV transformers (HDHE, Hyosung)** | **Under-priced relative to fundamentals** | Down 41–53% on fund flows while backlogs and guidance kept rising; HDHE 19.9× 2027E with a 25% operating margin |
| **Section 232 tariff inversion and the 2028 step-up** | **Not priced (not discussed)** | Favors US-sited LPT capacity from 2028; implies 2027 pull-forward [45] |
| **765 kV wave (equipment and crews)** | **Partly priced** | Construction not yet in backlog (2H27); equipment owners concentrated [78][30] |
| **Data-center BESS (regulatory pull)** | **Not priced, but no clean vehicle** | NERC/FERC standards due 31 Dec 2026; FLNC broken, TSLA not a pure play |
| SST cannibalization of MV→LV transformers and LV switchboards | **Over-hyped for 2026–28, under-appreciated for 2029–32** | Pilots only today [96][97] |
| US GOES scarcity | **Real but not investable** | Cliffs is 4% electrical/stainless; Flux is private |

**Market context.**
- Power-equipment equities sold off on **18 Aug 2026**, after a WSJ report of about $3T of off-balance-sheet AI commitments: GEV −6%, Vertiv −7%, Bloom −10% [105].
- They sold off again on **14 Sep 2026**, when AI-lab leaders called for a development slowdown: the SOX fell 5.9% and GEV 8.6% [103][104].
- The US 10-year yield was **5.24%** on 1 Oct 2026 [107].

These moves are sentiment- and rate-driven, which is why bottleneck owners with rising backlogs (the Korean makers, Powell, Forgent) are trading 40–53% below their highs.

---

## 12. Ranked shortlist (10 names)

> All prices are closes (US/EU on 1 Oct 2026; KR/JP on 2 Oct 2026) from the Yahoo data feed [107]. Ratings and targets come from the same feed, retrieved 2 Oct 2026, unless another source is cited. "Fwd P/E" is price ÷ consensus EPS (my arithmetic). Ranking weights: bottleneck ownership, distance from consensus pricing, valuation, and evidence quality. **This is not investment advice.**

### #1 HD Hyundai Electric (KRX:267260; no liquid US ADR)
- **Products in focus.**
  - 345–765 kV extra-high-voltage power transformers and GSUs.
  - Gas-insulated switchgear.
  - MV distribution equipment from its Cheongju "Smart Distribution Campus" [27].
- **Why the product matters.** EHV and LPT units are the #1 scarce item in the chain (§2). Bushing and breaker constraints sit right behind them.
- **Why this company.**
  - Its Montgomery AL plant is "the largest power transformer production facility in the United States". A second plant adds **+50% EHV capacity and 765 kV** build and test capability by **Apr 2027** [26].
  - It received a **0% anti-dumping rate**, while peers pay 4.32% [34].
  - **US-sited LPT capacity becomes more valuable when Annex III reverts to 25% in 2028** [45].
- **Evidence.**
  - Q2 2026 OPM **25.1%**; backlog **$8.49B (+29.6%)**; H1 orders **$3.24B (2×)** [23].
  - FY26 orders guide raised **$4.2B → $5.2B** [24].
  - Backlog is about **3× annual sales** [27].
  - Data-center share of orders 6.3% in 2026 → **16% in 2027e** [23].
  - 1,000th US-built UHV transformer in Aug 2026 [128].
- **Valuation.**
  - **₩678,000** (2 Oct 2026); market cap **₩24.4T (about $18.1B)**.
  - **25.5× 2026E, 19.9× 2027E** EPS; EV/EBITDA (TTM) 19.6×.
  - **−52.6% from its May 2026 high** [107].
- **Consensus.** "Buy" (mean 1.59, n = 22). Mean target **₩1,171,760 (+73%)**; high ₩1,600,000; low ₩588,727 (Yahoo, 2 Oct 2026) [107]. IBK cut its target ₩1.5M → ₩1.2M on 29 Jul 2026 [25].
- **Risks / thesis-breakers.**
  - Margin dilution from the mix shift to distribution equipment and BESS. The stock fell about 14% intraday on 29 Jul 2026 on this, and management says distribution revenue ramps "after 2029" [25].
  - Industry price normalization in 2028–29 as the capacity wave lands (§2.3).
  - Korean fund-flow volatility: KOSPI is −25% from its June high [107].
  - A KRW rebound.
  - Labor tension at HD Hyundai group companies (a sister company's dispute; headline) [128].
- **Catalysts.**
  - Q3 2026 results **22 Oct 2026** [107].
  - DOE implementing rules under EO 14421 (Chinese competitors excluded) by **24 Dec 2026** [49].
  - Alabama plant 2 completion **Apr 2027** [26].
  - Annex III step-up **1 Jan 2028** [45].

### #2 Hyosung Heavy Industries (KRX:298040)
- **Products in focus.**
  - **765 kV transformers.** Memphis is "currently the only facility in the country capable of manufacturing 765-kV transformers" (company claim) [30].
  - HV/EHV gas-insulated switchgear.
  - **72.5–800 kV gas circuit breakers**, made in the US by the Hyosung HICO Breaker JV with Quanta from **Oct 2026** [30][31].
  - A domestic HVDC system / transformer facility (Changwon, completion targeted 2027) [35][127].
  - A 22.9 kV SST (Sep 2026) [99].
- **Why the product matters.** 765 kV is the backbone voltage of the Texas and PJM expansions (§9.4), and it is the most concentrated product in the chain.
- **Why this company.**
  - The deepest **US 765 kV franchise**: about half the US 765 kV installed base since 2010 (company claim) [29].
  - Memphis capacity **+50% by 2028** [29][30].
  - Breaker localization through Quanta, the largest US T&D contractor, which brings channel access [31].
- **Evidence.**
  - Backlog **₩17.5T** (Q1 ₩15.1T), **57% North America**.
  - FY26 orders guide **₩8.4T → ₩12T**.
  - **₩787B** 765 kV US order [28].
  - **₩386.5B** of UHV orders from two US big-tech AI campuses (15 Sep 2026) [124].
  - 2026E operating profit **₩1.13T** (securities estimates) [33].
- **Valuation.**
  - **₩2,785,000** (2 Oct 2026); market cap **₩25.9T (about $19.3B)**.
  - **32.9× 2026E, 22.6× 2027E**; EV/EBITDA (TTM) 28.9×.
  - **−41% from its May 2026 high** [107].
- **Consensus.** Mean target **₩4,233,477 (+52%)**; high ₩5,100,000; low ₩3,400,000 (n = 19; Yahoo shows no rating label, 2 Oct 2026) [107]. In Jul 2026 brokers ranged ₩4.4M–5.3M (secondary) [24].
- **Risks.**
  - The 4.32% anti-dumping duty (appealed to the Court of International Trade) [34].
  - Construction-segment drag inside the consolidated figures.
  - Group governance.
  - HDHE's 765 kV entry in Apr 2027 erodes the single-source claim.
  - Fixed-price HV project execution.
- **Catalysts.**
  - US GCB production start **Oct 2026** [30].
  - Q3 results (late Oct 2026; date not confirmed in feed).
  - CIT ruling on the anti-dumping duty (timing unknown).
  - Memphis expansion **2028** [29].
  - Texas 765 kV equipment awards in 2027 [83].

### #3 Siemens Energy (XETRA:ENR; US OTC: SMEGF)
- **Products in focus.** Grid Technologies: power transformers, HV gas-insulated switchgear, HVDC converter stations and FACTS. It also holds gas turbines.
- **Why the product matters.** It is one of three Western HVDC converter suppliers and a top-tier LPT and GIS maker, and transformers are the main grid-interconnection gate (§2).
- **Why this company.**
  - The **cheapest Western member of the HV oligopoly on 2027 earnings**.
  - Grid margin is now above Gas margin [14].
  - A US-sited transformer plant (Charlotte, **2027**) ahead of the 2028 tariff step-up [16].
  - Transformer and GIS capacity +50% by 2030 [15].
- **Evidence.** Q3 FY26 Grid Technologies [14]:
  - orders **€5.37B (+27.6%)**;
  - book-to-bill **1.48**;
  - margin **19.9%** (vs 15.9%);
  - **backlog €51B**.

  Group backlog is **€162B** [14].
- **Valuation.**
  - **€142.52** (1 Oct 2026); market cap about **€121B** (my calc from feed share count).
  - **31.7× FY9/26, 22.9× FY9/27**; EV/EBITDA (TTM) 24.6×.
  - **−26% from its high** [107].
- **Consensus.** "Buy" (mean 1.81, n = 26). Mean target **€197.42 (+39%)**; high €260; low €100 (Yahoo, 2 Oct 2026) [107].
- **Risks.**
  - The gas-turbine cycle around 2030 (industry capacity doubling).
  - Siemens Gamesa (wind) relapse.
  - HVDC fixed-price project risk.
  - EUR/USD.
  - Rebrand and merger costs ("Omterra") [15].
- **Catalysts.**
  - FY26 Q4 results and FY27 guidance **11 Nov 2026** [107].
  - Charlotte transformer plant start **2027** [16].

### #4 Hitachi (TSE:6501; ADR HTHIY / OTC HTHIF), for Hitachi Energy
- **Products in focus.**
  - LPTs and GSUs ("1 out of 6 transformers in the world").
  - HV switchgear ("1 in 4").
  - HVDC (>175 GW of links).
  - Grid automation [8].
- **Why the product matters.** It is the broadest owner of the entire scarce stack: LPTs, HV gas-insulated switchgear, HVDC converters and bushings/components (Alamo TN) [115].
- **Why this company.**
  - Margin runway from **13.4% (FY25) to 16–20% (FY30)** [8].
  - Data-center orders **$5B (FY25) → $7–8B (FY27)** [8].
  - The largest US LPT plant under construction (South Boston, 2028) plus Gallman (2029) [11][12].
- **Evidence.** Q1 FY26 Energy [9]:
  - orders **¥1.91T (+87%)**;
  - revenue +37%;
  - adj. EBITA margin **14.2%**.

  Backlog about $60B, heading to about $100B by FY30 [8].
- **Valuation.**
  - **¥5,522** (2 Oct 2026); market cap **¥24.7T (about $156B)**.
  - **25.5× FY3/27, 21.3× FY3/28**; EV/EBITDA (TTM) 13.7×.
  - −8.6% from its high [107].
  - Energy was about **34% of Q1 group revenue** (my calc: ¥911.9B / ¥2.71T) [9][110].
- **Consensus.** "Buy" (mean 1.57, n = 14). Mean target **¥6,600 (+19.5%)**; high ¥7,500; low ¥5,500 (Yahoo, 2 Oct 2026) [107]. Bernstein initiated at Buy, ¥7,300 (15 Sep 2026; secondary) [110].
- **Risks.**
  - Conglomerate dilution.
  - Capacity arrives 2028–29 just as pricing normalizes.
  - HVDC execution.
  - Yen strength.
  - It is **less de-rated than the Korean names**, which is why it ranks #4.
- **Catalysts.**
  - Q2 FY26 results (about **29 Oct 2026**, estimated date) [107].
  - South Boston **2028** [11]; Gallman **2029** [12].
  - 800 V DC proof-of-concept testing **early 2027** [10].

### #5 LS Corp (KRX:006260): holding company for LS Electric, LS Cable & System and Essex Solutions
- **Products in focus.**
  - HVDC and subsea cable (LS Cable & System, unlisted).
  - Data-center busway.
  - **Magnet wire** (Essex Solutions, the world's #1 magnet-wire maker [126], a direct transformer input).
  - LS Electric's transformers and distribution equipment (listed).
  - Copper (LS MnM).
- **Why the product matters.** It gives indirect access to **US HVDC cable capacity** (the Chesapeake VA plant: about 500 km/yr, **H2 2027**, about ₩1T [74]) and to transformer winding wire, both scarce inputs.
- **Why this company (holding-company arbitrage).**
  - LS Electric's largest-shareholder group owns **48.48%** of LS Electric (Apr 2026, Korean press; secondary) [98]. The Yahoo feed shows 48.53% insider-held [107]. At ₩209,500, that block is worth about **₩15.1T**, roughly **1.85× LS Corp's entire ₩8.16T market cap** (my calc; lower if LS Corp's direct stake is below the group's).
  - Korea's third Commercial Act amendment (25 Feb 2026) forces cancellation of treasury shares. LS holds about 12.3% [76].
  - The Essex Solutions IPO was **withdrawn** (Jan 2026), which removes the double-listing discount risk [76][113].
- **Evidence.**
  - LS Cable & System backlog **₩7.63T (+22%)** at end-2025 [75].
  - LS Corp Q1 2026 consolidated revenue **₩9.50T (+37.5%)**, operating profit **₩476B (+56.4%)**; DPS raised **₩1,650 → ₩2,500** [76].
  - LS Cable & System 2026E operating profit **₩471B (+63.8%)** [33].
- **Valuation.**
  - **₩298,500** (2 Oct 2026); market cap **₩8.16T (about $6.1B)**.
  - **15.0× 2026E, 12.3× 2027E**; EV/EBITDA (TTM, consolidated) 10.0×.
  - **−50.6% from its May 2026 high** [107].
- **Consensus.** "Strong Buy" (mean 1.50, n = 8). Mean target **₩547,750 (+83%)**; high ₩630,000; low ₩400,000 (Yahoo, 2 Oct 2026) [107].
- **Risks.**
  - A persistent holding-company discount.
  - LS MnM copper-smelting cyclicality.
  - Consolidated debt (about ₩13.3T gross [107]).
  - Execution on the Chesapeake ramp.
  - Cousin-management governance.
- **Catalysts.**
  - LS Electric Q3 results **22 Oct 2026** [107].
  - LS Corp Q3 (Nov 2026; date not confirmed).
  - Treasury-share cancellations (statutory window about 18 months from Feb 2026) [76].
  - Chesapeake start-up **H2 2027** [74].

### #6 Powell Industries (NASDAQ:POWL)
- **Products in focus.** Custom engineered-to-order MV switchgear, power control rooms / e-houses, bus duct.
- **Why the product matters.** Behind-the-meter generation and large campuses need **engineered MV distribution** at scale, and Powell won a **>$400M behind-the-meter onsite-generation data-center order** [63].
- **Why this company.**
  - Pure play.
  - **Net cash of about $631M**, no debt.
  - Backlog at about **2.1× TTM revenue** (my calc).
  - Stock **−42% from its high**, versus a hub mark that called it "rich".
- **Evidence.** FQ3 (Jun) 2026 [63]:
  - orders **$934M (+158%)**;
  - **book-to-bill 3.0×**;
  - backlog **$2.4B (+69%)**;
  - gross margin **30.6%**;
  - Commercial & other industrial revenue +54%.
- **Valuation.**
  - **$190.60** (1 Oct 2026); market cap **$6.94B**; EV $6.31B.
  - **35.5× FY9/26, 28.0× FY9/27**; EV/EBITDA (TTM) 26.7× [107].
- **Consensus.** "Buy" (mean 2.25, n = 4). Mean target **$280 (+47%)**; high $333; low $235 (Yahoo, 2 Oct 2026) [107].
- **Risks.**
  - Lumpy mega-orders.
  - Petrochemical revenue −49% [63].
  - Capacity: a greenfield plant is needed [63].
  - Thin coverage (n = 4).
  - Still about 28× FY27.
- **Catalysts.**
  - FQ4 / FY26 results (about **17 Nov 2026**, estimated) [107].
  - Jacintoport yard completion by the end of FY26 [63].
  - A greenfield capacity decision.

### #7 Prysmian (BIT:PRY; ADR PRYMY)
- **Products in focus.** HVDC land and subsea cable, grid cable, data-center fiber (Molex framework), and US electrical raceway (Atkore, pending).
- **Why the product matters.** HVDC and EHV cable plus vessels form a 3–5-player oligopoly sold out to about 2030.
- **Why this company.** The scale leader:
  - Transmission backlog **about €17B**, margin **21.2%**.
  - "Flat out… no pricing pressure" [68][69].
- **Evidence.** FY26 adj. EBITDA guide raised to **€2.80–2.90B**; FCF €1.65–1.75B [68].
- **Valuation.**
  - **€124.85** (1 Oct 2026); market cap **about €37.4B**.
  - **26.2× 2026E, 20.4× 2027E**.
  - EV/2026E EBITDA about **14.6×** (my calc, before Atkore).
  - −21% from its May high [107].
- **Consensus.** "Buy" (mean 1.76, n = 17). Mean target **€157.41 (+26%)**; high €181; low €90 (Yahoo, 2 Oct 2026) [107].
- **Risks.**
  - **Atkore ($3.8B)** dilutes quality and raises leverage [70].
  - HVDC cable faults and penalties.
  - An offshore-wind slowdown.
  - Copper.
- **Catalysts.** Q3 results **29 Oct 2026** [107]; Atkore closing; NKT and Nexans capacity arriving in 2027 (competition) [71][72].

### #8 Forgent Power Solutions (NYSE:FPS)
- **Products in focus.** Power and distribution transformers (MGM Transformer, VanTran), MV switchgear, transfer switches, and **e-houses / power-skids** ("Powertrain Solutions") [58][59].
- **Why the product matters.** Prefabrication saves scarce field labor (§8), and "Powertrain Solutions" revenue grew **+259%** [58].
- **Why this company.**
  - The fastest-growing US-domestic manufacturer in the space.
  - Revenue capacity is being built to **about $5.8B**, against a FY27 revenue guide of **$2.4–2.6B** (only about 43% utilized at guide; my calc) [58].
  - The stock is **−43% from its June high**, mostly because of private-equity selling [65][66].
- **Evidence.** FQ4 2026 (Jun) [58]:
  - bookings **$1.50B (book-to-bill 3.3×)**;
  - backlog **$3.0B (+256%)**;
  - adj. EBITDA margin **24.4%**.

  FY27 guide: revenue **+76%**, adj. EBITDA **$575–625M**, adj. EPS **$1.26–1.40** [58].
- **Valuation.**
  - **$37.33** (1 Oct 2026); market cap **$11.9B**; EV $10.96B.
  - **27.6× FY6/27** consensus EPS; **18.5× FY6/28**.
  - EV / FY27 guided EBITDA ≈ **18.3×** (my calc) [107].
- **Consensus.** "Strong Buy" (mean 1.45, n = 12). Mean target **$55.75 (+49%)**; high $76; low $44 (Yahoo, 2 Oct 2026) [107]. Wells Fargo upgraded to Hold (26 Sep 2026; headline) [66].
- **Risks.**
  - **Neos Partners overhang.** About 40% voting power after the June 2026 secondary (the third sale since the IPO), and the lock-up expired on 4 Aug 2026 [65][66].
  - Distribution-class transformers are the segment **most exposed to price normalization and to SST substitution after 2029** (§9.1).
  - New-campus ramp execution.
- **Catalysts.**
  - FQ1-27 results (mid-Nov 2026; date not confirmed).
  - Further Neos sell-downs.
  - Tijuana Powertrain expansion online FQ4-27 [58].

### #9 MYR Group (NASDAQ:MYRG)
- **Products / services.** Transmission and substation construction (T&D segment) and data-center and industrial electrical work (C&I segment).
- **Why it matters.** Craft labor is the quiet bottleneck behind equipment (§8). The 765 kV and transmission wave "hits the field in 2H27" [78].
- **Why this company.**
  - The cheapest pure electrical contractor with T&D leverage.
  - **20.4× 2027E**, against Quanta at 33.5× [107].
  - T&D revenue has **not yet inflected** (+3.5% in Q2; my calc), so the option is still open [79].
- **Evidence.**
  - Q2 2026 revenue **$1.08B** (record); C&I **+41%** (my calc).
  - Gross margin **13.2%** (vs 11.5%); backlog **$3.16B**.
  - Valley Electric and Comet Electric acquired on 1 Jul 2026 [79].
- **Valuation.**
  - **$297.92** (1 Oct 2026); market cap **$4.6B**.
  - **24.4× 2026E, 20.4× 2027E**; EV/EBITDA (TTM) 15.7×.
  - **−41% from its June high** [107].
- **Consensus.** Mean target **$412 (+38%)**; high $445; low $375 (n = 5; Yahoo shows no rating label, 2 Oct 2026) [107].
- **Risks.**
  - Fixed-price project write-downs (margin history).
  - A delayed T&D inflection.
  - State data-center pauses [78].
  - Integration of acquisitions.
- **Catalysts.**
  - Q3 results (about **28 Oct 2026**, estimated) [107].
  - Texas and PJM 765 kV construction awards (2027) [83].

### #10 Nexans (EPA:NEX; OTC NXPRF)
- **Products in focus.** HVDC and EHV subsea and land cable (PWR-Transmission), grid cable, and US building wire (Republic Wire).
- **Why this company.** It is the value version of the cable oligopoly:
  - **14.5× 2027E**; EV/2026E EBITDA about **8.5×** (my calc) [107].
  - Transmission backlog **€7.7B**.
  - A new installation vessel (Electra) in service [72].
- **Evidence.** H1 2026 [72]:
  - adj. EBITDA **€387.7M (11.9%)**;
  - FY guide raised to **€770–840M**;
  - Republic Wire (about €680M EV) closed on 1 Jun 2026.
- **Valuation.**
  - **€132.80** (1 Oct 2026); market cap **about €5.8B**.
  - **19.1× 2026E, 14.5× 2027E**.
  - −21% from its high [107].
- **Consensus.** "Buy" (mean 1.73, n = 15). Mean target **€171.73 (+29%)**; high €190; low €150 (Yahoo, 2 Oct 2026) [107].
- **Risks.**
  - PWR-Transmission organic growth was **−0.1%** in H1 (execution and timing) [72].
  - Lower margin than Prysmian.
  - Building-wire cyclicality.
  - Copper.
- **Catalysts.**
  - Q3 sales (late Oct 2026; date not in feed).
  - HVDC awards (TenneT, Amprion, US).
  - NKT and Prysmian capacity additions (2027).

**Watch list** (not ranked):
- **LG Energy Solution** (KRX:373220) and **Samsung SDI** (KRX:006400): data-center BESS and US LFP (§6).
- **Iljin Electric** (KRX:103590): 0% anti-dumping rate, 20.9× 2027E [107][34].
- **Hubbell** (NYSE:HUBB): 20.3× 2027E but utility organic growth only +6% [64][107].
- **Pfisterer** (XETRA:PFSE): HV accessories; order intake slowing [77].

---

## 13. Also considered and rejected (one line each)

| Name | Reason |
|---|---|
| GE Vernova (GEV) | Best-in-class, but 39.8× CY27; 2026 EPS inflated by the ~$4.0B Prolec gain; turbine overcapacity risk around 2030 [18][107] |
| Eaton (ETN) | Excellent (orders +41%) but priced at 27× 2027E; the SST optionality is shared by many [20][107] |
| Schneider (SU.PA / SBGSY) | Data-center triple-digit growth, already in the 24× multiple [62][107] |
| ABB (ABBN / ABBNY) | Quality, but 22× and a consensus "hold"; 35% Swiss dividend withholding (partly reclaimable) [107] |
| Siemens AG (SIE / SIEGY) | Smart Infrastructure is strong (+42% orders) but diluted inside the conglomerate [61][107] |
| Legrand (LR / LGRDY) | In-hall and LV focused; 20.5× (my calc); outside the scarce layer [107] |
| nVent (NVT) | In-hall enclosures and liquid cooling, 25.5× 2027E; owned by another section [107] |
| Hubbell (HUBB) | Nearest miss: 20.3× and T&D components, but utility organic growth only +6% and Grid Automation +1% [64] |
| LS Electric (010120.KS) | Strong orders (₩6–6.5T guide), but **41× 2027E** even after −37.5%; better owned via LS Corp at a discount [24][107] |
| Mitsubishi Electric (6503.T / MIELY) | Power systems are a small share; 17.9× FY3/28 is fair, not cheap [107] |
| Hammond Power (HPS.A.TO) | Dry-type normalization (backlog −6.9% QoQ, Canadian price competition) plus SST risk; 24.6× [56][107] |
| WEG (WEGE3 / WEGZY) | Revenue −0.6%; plant ramp costs; US tariff exposure; 26.7× [109][107] |
| Cleveland-Cliffs (CLF) | GOES is about 4% of volume; it is a steel-cycle and contract-reset story, not an AI-scarcity owner; consensus hold, target $12.30 [37][107] |
| Nippon Steel / JFE / POSCO / Baowu / thyssenkrupp | GOES is too small a share; EU and China are in oversupply and protection mode [41][43] |
| Freeport (FCX) / Southern Copper (SCCO) | Copper is a macro call; SCCO consensus "underperform" [107] |
| NKT (NKT.CO) | About 21.6× 2027E with H1 organic −7%; new capacity only in 2027 [71][107] |
| Sumitomo Electric (5802.T) | HVDC is real (DC35 about €2B), but the stock is driven by InP/optical and auto wiring; covered in the I2 report [73] |
| Taihan (001440.KS) / Gaon Cable (000500.KS) / LS Eco Energy (229640.KS) | 34–47× forward; smaller, less differentiated [107] |
| Fluence (FLNC) | Two guidance cuts, manufacturing ramp failure, class actions [95] |
| Tesla (TSLA) | Energy is not the equity driver at 164× [107] |
| CATL (300750.SZ) | Cheap, but US access is impaired by FEOC rules and EO 14421 [49] |
| TBEA / Sieyuan / China XD | Cheap (11–31×), but effectively shut out of US bulk-power and behind-the-meter work after EO 14421 [49][107] |
| Quanta (PWR) | Undisputed leader, priced at 33.5× [107] |
| Comfort Systems (FIX) / EMCOR (EME) | MEP quality; 28× / 21×; less transmission leverage [107] |
| Sterling (STRL) | Strong (backlog +116%), but site-development led; 19.9× after −50% is a fair alternative to MYRG [80][107] |
| Primoris (PRIM) | Renewables execution problems (4.9% gross margin) and a class action [82] |
| MasTec (MTZ) | Communications drag; EPS miss [125] |
| INNIO (INIO) | −57% since its Jun 2026 IPO; onsite generation is covered by another report [100][107] |
| Wärtsilä (WRT1V) | Onsite generation (another report); fair at 21.5×; consensus hold [107] |
| Bloom (BE) | 56× 2027E; priced [107] |
| Doosan Enerbility (034020.KS) | 78× 2027E; priced [107] |
| Pfisterer (PFSE) | Order intake normalizing (€263M vs €290M) [77] |
| Private bottleneck owners (Trench, MR, Flux, Virginia Transformer, Southwire, Weidmann) | Not investable |

---

## 14. Dated catalyst calendar (Oct 2026 – Jan 2028)

| Date | Event | Relevance |
|---|---|---|
| Oct 2026 | Hyosung HICO Breaker (with Quanta) starts US 72.5–800 kV GCB production [30] | HV breaker localization |
| 19 Oct 2026 | Cleveland-Cliffs Q3 results [107] | GOES / 2027 contract reset |
| 20 Oct 2026 | ABB Q3 results [107] | MV / data-center orders |
| 22 Oct 2026 | **HD Hyundai Electric and LS Electric Q3 results** [107] | Korean margin and mix test |
| 27–29 Oct 2026 | Hubbell, Wärtsilä, GE Vernova (28th), MYR (est. 28th), Hitachi (est. 29th), Prysmian (29th), Quanta (29th) [107] | Orders, backlog, pricing |
| 3 Nov 2026 (est.) | Eaton Q3 [107] | Electrical Americas backlog |
| 11 Nov 2026 | **Siemens Energy FY26 results and FY27 guidance** [107] | Grid Technologies margin path |
| ~17 Nov 2026 (est.) | Powell FQ4 results [107] | Backlog and greenfield capacity |
| 19 Nov 2026 | NKT Q3 [107] | HVDC capacity |
| ~23 Nov 2026 (est.) | Fluence FQ4 [107] | Data-center BESS execution |
| 24 Dec 2026 | **DOE implementing rules under EO 14421** [49] | Chinese transformers and BESS exclusion |
| 31 Dec 2026 | **NERC reliability standards and registry for computational loads (FERC deadline)** [87][88] | Data-center BESS / ride-through demand |
| 1 Mar 2027 | NERC Phase II plan for computational loads [88] | Further buffering requirements |
| H1 2027 | Eaton Bellevue MV switchgear plant starts [21] | MV capacity |
| Q1 2027 | Eaton–COL closing [22] | SF₆-free MV |
| Apr 2027 | **HD Hyundai Electric Alabama plant 2 (+50%, 765 kV)** [26] | Ends the Memphis 765 kV single-source position |
| 2027 | Siemens Energy Charlotte transformer plant; NKT Karlskrona and vessel; WEG Mexico [16][71][109] | Capacity wave starts |
| 2H 2027 | Quanta: large T&D project stacking reaches the field [78]; LS Cable Chesapeake HVDC plant [74] | 765 kV / HVDC |
| **1 Jan 2028** | **Section 232 Annex III reverts from 15% to 25% on LPTs and large dry-types** [45] | US-sited capacity advantage |
| 2028 | Cliffs Butler GOES +25%; Hitachi South Boston LPT; Hyosung Memphis +50%; Trench's first US-made 765 kV dry-type bushings [36][11][29][54] | Bottleneck relief begins |
| 2029 | Flux GOES; Hitachi Gallman; DOE distribution-transformer efficiency rule (if not revised) [39][12][51] | Distribution-class supply |

---

## 15. Data gaps, caveats and unverified items

1. **No 2026 Wood Mackenzie lead-time survey was found.** The 128-week (power transformer) and 144-week (GSU) figures are the Q2-2025 survey averages, still cited by 2026 sources [1][2][6]. "160+ weeks" comes from an aggregator index [3].
2. **The Section 232 annex reading comes from OCR** of the official Federal Register PDF [45]. HTS 8504.23 (>10 MVA liquid-dielectric) appears in Annex III and 8504.21/.22 in Annex I-B. Before relying on it, confirm against CBP CSMS guidance or the HTSUS Chapter 99 notes. Annex III treatment is revocable per trading partner [45].
3. **Hub-digest items not re-verified at the primary source:**
   - "Eaton US DC backlog 307 GW";
   - Schneider YOTTA and Eaton–Infineon MVSST details [67];
   - the LS Electric ₩180B award [121].
4. **Hitachi Energy standalone USD orders for Q1 FY26** were not obtained. Yen segment figures come from a slide summary [9].
5. **No Hyosung Heavy Industries segment-level margin.** The heavy-industries margin is not separated from construction in the sources I accessed.
6. **LS Corp's *direct* stake in LS Electric** was not verified. The 48.48% is the "largest shareholder and related parties" figure [98]. The look-through ratio (about 1.85×) is therefore an upper-bound **estimate**.
7. **Consensus data quality.**
   - Yahoo's Korean-name targets may lag recent broker revisions.
   - Hyosung and MYR show no rating label.
   - Siemens Energy's ADR (SMNEY) did not quote; SMEGF is the OTC line.
   - NKT market cap was not in the feed.
8. **GE Vernova EPS.** CY26 consensus ($30.58) appears to include the Prolec remeasurement gain; I use CY27 ($24.78) for P/E [18][107].
9. **Behind-the-meter / data-center BESS sizing** (0.25–0.5 MWh per MW) is **my assumption**. No industry dataset was found. The xAI 2.8–3.3 GWh battery is an outlier [91].
10. **Background knowledge not verified this session:**
    - Hubbell's PCORE condenser-bushing business;
    - Toshiba's 2023 take-private;
    - Proterial's 2023 Bain-led buyout;
    - the 813-generator Meta El Paso design (from the hub's power-supplier file).
11. **Prices are moving fast.** Korean names moved 5–14% in single sessions in Jul–Sep 2026 [25]. Every valuation above is a point-in-time snapshot (1–2 Oct 2026).

---

## 16. Sources (numbered)

1. Wood Mackenzie, "Transformer troubles: manufacturing and policy constraints hit US transformer supply", 13 Aug 2025. https://www.woodmac.com/news/opinion/transformer-troubles-manufacturing-and-policy-constraints-hit-us-transformer-supply/
2. POWER Magazine, "Transformers in 2026: Shortage, Scramble, or Self-Inflicted Crisis?", 2 Jan 2026. https://www.powermag.com/transformers-in-2026-shortage-scramble-or-self-inflicted-crisis/
3. VAWN, Electrical Equipment Lead Time Index, updated 13 Aug 2026 (secondary). https://usevawn.com/resources/electrical-equipment-lead-times/
4. pv magazine USA, "U.S. transformer market faces severe supply constraints as lead times extend to four years", 11 May 2026 (citing Reuters Events / PwC). https://pv-magazine-usa.com/2026/05/11/u-s-transformer-market-faces-severe-supply-constraints-as-lead-times-extend-to-four-years/
5. McKinsey & Company, "The transformer supercycle: Why demand is outrunning supply", 18 Sep 2026. https://www.mckinsey.com/industries/electric-power-and-natural-gas/our-insights/the-transformer-supercycle-why-demand-is-outrunning-supply
6. National Law Review, "The Grid's Bottleneck Isn't Just Money. It's Materials.", 3 Sep 2026 (citing CoBank, Jul 2026). https://natlawreview.com/article/grids-bottleneck-isnt-just-money-its-materials
7. Utility Dive, "What does Trump's wartime powers flex mean for transformers and other grid equipment shortages?", 22 Apr 2026. https://www.utilitydive.com/news/what-does-trumps-wartime-powers-flex-mean-for-the-transformer-shortage/818159/
8. Hitachi, Investor Day 2026: Energy Business Strategy (PDF), 10 Jun 2026. https://www.hitachi.com/content/dam/hitachi/global/en/press/files/2026/06/260610/20260610_01_energy_en.pdf
9. Investing.com, "Hitachi Q1 FY2026 slides: record results drive guidance raise", 29 Jul 2026 (secondary). https://www.investing.com/news/company-news/hitachi-q1-fy2026-slides-record-results-drive-guidance-raise-93CH-4819021
10. BigGo Finance, Hitachi FY2026 Q1 earnings call summary, 29 Jul 2026 (secondary); ROIC.ai transcript page. https://finance.biggo.com/news/JP_6501.T_2026-07-29 ; https://www.roic.ai/quote/6501.T/transcripts/2026-year/1-quarter
11. Hitachi Energy press release, "Hitachi Energy breaks ground on the nation's largest facility for the production of large power transformers in South Boston, Virginia", 29 Jun 2026. https://www.hitachienergy.com/news-and-events/press-releases/2026/06/hitachi-energy-breaks-ground-on-the-nation-s-largest-facility-for-the-production-of-large-power-transformers-in-south-boston-virginia
12. Utility Dive, "Hitachi to double US production of small and medium-sized power transformers", 18 Sep 2026. https://www.utilitydive.com/news/hitachi-to-double-us-production-of-small-and-medium-sized-power-transformer/830762/
13. Hitachi Energy press release, "Hitachi deepens commitment to U.S. manufacturing with $528 million Mississippi transformer factory", 15 Sep 2026 (headline). https://www.hitachienergy.com/news-and-events/press-releases/2026/09/hitachi-deepens-commitment-to-u-s-manufacturing-with-528-million-mississippi-transformer-factory
14. Siemens Energy, Earnings Release Q3 FY2026 (PDF), 5 Aug 2026. https://assets.siemens-energy.com/dam/d0147174-31a9-4a78-b062-b49d00428fc4/earnings-release-q3-fy2026-en-pdf_Original%20file.pdf (press page: https://www.siemens-energy.com/global/en/home/press-releases/earnings-release-q3-fy-2026.html)
15. Utility Dive, "Siemens Energy's gas turbine backlog nears 70 GW as company expands manufacturing", 10 Aug 2026. https://www.utilitydive.com/news/siemens-gas-turbine-backlog-nears-70-gw-as-company-expands-manufacturing/827390/
16. Siemens Energy press release, "Siemens Energy is investing $1 billion and creating highly skilled jobs in the United States", 3 Feb 2026. https://www.siemens-energy.com/global/en/home/press-releases/siemens-energy-is-investing--1-billion-and-creating-highly-skill.html
17. ESG News, "Siemens Energy Plans $2.3 Billion Grid Manufacturing Buildout", 21 Nov 2025 (secondary). https://esgnews.com/siemens-energy-plans-2-3-billion-grid-manufacturing-buildout/
18. GE Vernova, 2Q'26 earnings press release (PDF), 22 Jul 2026; also SEC 8-K exhibit. https://www.gevernova.com/sites/default/files/gev_webcast_pressrelease_07222026.pdf ; https://www.sec.gov/Archives/edgar/data/1996810/000199681026000147/gevpressrelease2q26.htm
19. GE Vernova, 2Q 2026 Results & Outlook webcast transcript (PDF), 22 Jul 2026. https://www.gevernova.com/sites/default/files/gev_webcast_transcript_07222026.pdf
20. Eaton, Q2 2026 results press release (Business Wire), 30 Jul 2026. https://www.businesswire.com/news/home/20260730561562/en/Eaton-Reports-Record-Second-Quarter-2026-Results-with-Strong-Organic-Growth-Accelerating-Orders-and-Backlog-and-Raises-Organic-Growth-Guidance
21. Renewable Energy World, "Eaton increases US-made medium-voltage switchgear production to help meet data center demand", 9 Apr 2026. https://www.renewableenergyworld.com/power-grid/eaton-increases-us-made-medium-voltage-switchgear-production-to-help-meet-data-center-demand/
22. Stock Titan (summarizing Eaton's Business Wire release), "Eaton signs agreement to acquire COL Group", 25 Sep 2026 (secondary). https://www.stocktitan.net/news/ETN/eaton-signs-agreement-to-acquire-col-group-expanding-manufacturing-xnj8yq730xp3.html
23. Seoul Economic Daily, "HD Hyundai Electric Q2 operating profit jumps 37.3 percent", 28 Jul 2026. https://en.sedaily.com/finance/2026/07/28/hd-hyundai-electric-q2-operating-profit-jumps-373-percent
24. Chosunbiz, "Korea power-equipment stocks drop as AI fund rotation, distribution booms", 27 Jul 2026. https://biz.chosun.com/en/en-finance/2026/07/27/TDDW67IC45EHDCR24JYL2MPHOI/
25. Chosunbiz, "HD Hyundai Electric sinks on profitability worries despite solid Q2 in Korea", 29 Jul 2026. https://biz.chosun.com/en/en-finance/2026/07/29/WLW3YTYDBZBETCG4NTMIGVBCPQ/
26. HD Hyundai Electric (PR Newswire), "HD Hyundai Electric Expands U.S. Production Subsidiary, Solidifies Leadership in North American Extra High Voltage Power Transformer Market", 7 Mar 2026. https://www.prnewswire.com/news-releases/hd-hyundai-electric-expands-us-production-subsidiary-solidifies-leadership-in-north-american-extra-high-voltage-power-transformer-market-302707507.html
27. The Asia Business Daily, "'Power Famine Looms in 2030'… The Company Smiling Amid AI's Relentless Appetite", 26 Sep 2026 (incl. TrendForce). https://www.asiae.co.kr/en/article/2026092416372643215
28. Korea IT Times, "[Insight] Hyosung Heavy Industries Turns U.S. Power Bet Into an AI Infrastructure Advantage", 20 Aug 2026. https://www.koreaittimes.com/news/articleView.html?idxno=156307
29. The Korea Herald, "Hyosung to expand Memphis site into largest transformer plant in US", 18 Nov 2025. https://www.koreaherald.com/article/10618541
30. The Korea Herald, "Cho Hyun-joon's early US bet powers Hyosung's grid expansion", 10 Sep 2026. https://www.koreaherald.com/article/10868779
31. Quanta Services, Q2 2026 earnings release (8-K Ex. 99.1), 30 Jul 2026. https://www.sec.gov/Archives/edgar/data/1050915/000119312526324855/d56853dex991.htm
32. The Elec, "LS Electric Posts Record Q2 Earnings as Order Backlog Reaches KRW 7 Trillion", 23 Jul 2026. https://www.thelec.net/news/articleView.html?idxno=12475
33. The Herald Business, "South Korea's top 5 power equipment and cable firms set to break W30tr in sales, W3tr in operating profit for first time", 26 Sep 2026. https://mbiz.heraldcorp.com/article/10883554
34. Chosunbiz, "Korean transformer makers sue US over selective anti-dumping tariffs", 17 Sep 2026. https://biz.chosun.com/en/en-industry/2026/09/17/UW6DQUMC7JGTNHEDYHDPIXUKMA/
35. BigGo Finance, "AI Power Demand Surge... South Korea's Top 3 Electrical Equipment Makers' Order Backlog Tops ₩36 Trillion", 3 Aug 2026 (secondary). https://finance.biggo.com/news/396c11ec-0ab2-4e22-86e3-3fbb510b9850
36. Cleveland-Cliffs, Q2 2026 earnings call transcript (PDF), 23 Jul 2026. https://www.clevelandcliffs.com/_assets/_c2bd604dfe9c33c566b7a7b16d14c80d/clevelandcliffs/db/1111/12098/file/Q2+2026+Earnings+Call+Transcript.pdf
37. Cleveland-Cliffs, Q2 2026 earnings release (8-K Ex. 99.1), 23 Jul 2026. https://www.sec.gov/Archives/edgar/data/764065/000076406526000097/clf-202606308xkex991.htm
38. The Breakthrough Journal, "America Makes The Wrong Steel For Its Transformer Supply Chain", 14 Aug 2026. https://www.breakthroughjournal.org/p/america-makes-the-wrong-steel-for
39. Flux Steel Works (PR Newswire), "Flux Steel Works Secures Ohio Plant to Produce Power Transformer Core Steel", 15 Sep 2026. https://www.prnewswire.com/news-releases/flux-steel-works-secures-ohio-plant-to-produce-power-transformer-core-steel-302879234.html
40. GMK Center, "Cleveland-Cliffs is to supply the Pentagon with $400 million worth of electrical steel", 7 Jul 2026. https://gmk.center/en/news/cleveland-cliffs-is-to-supply-the-pentagon-with-400-million-worth-of-electrical-steel/
41. ChemAnalyst, "Europe's Grain-Oriented Electrical Steel Market Enters New Phase as EU Imposes Import Safeguards", 30 Sep 2026 (secondary). https://www.chemanalyst.com/NewsAndDeals/NewsDetails/europes-grain-oriented-electrical-steel-market-enters-new-phase-44772
42. European Commission (DG Trade), "Commission initiates safeguard investigation into imports of grain-oriented electrical steel", 27 Mar 2026 (headline). https://policy.trade.ec.europa.eu/news/commission-initiates-safeguard-investigation-imports-grain-oriented-electrical-steel-2026-03-27_en
43. SMM (news.metal.com), monthly review and outlook on grain-oriented silicon steel, 17 Jul 2026 (secondary). https://news.metal.com/newscontent/104011168-smm-analysis-monthly-review-and-outlook-chinas-demand-underpins-anti-dumping-outside-china-grain-oriented-silicon-steel
44. IndexBox, "Baosteel July 2026 Price Announcement: Flat Steel Unchanged, Electrical Steel Up 300 Yuan/t", Jun 2026 (secondary). https://www.indexbox.io/blog/baosteel-keeps-july-flat-steel-prices-unchanged-raises-electrical-steel-by-300-yuant/
45. Presidential Proclamation, "Strengthening Actions Taken To Adjust Imports of Aluminum, Steel, and Copper Into the United States", Federal Register Vol. 91 No. 68, 9 Apr 2026, FR Doc. 2026-06960 (Annexes I-A, I-B, III read by OCR of the official PDF). https://www.govinfo.gov/content/pkg/FR-2026-04-09/pdf/2026-06960.pdf ; https://www.federalregister.gov/documents/2026/04/09/2026-06960/strengthening-actions-taken-to-adjust-imports-of-aluminum-steel-and-copper-into-the-united-states
46. Sullivan & Cromwell, "President Adjusts Steel, Aluminum, Copper, Pharmaceutical Tariffs" (memo), 8 Apr 2026. https://www.sullcrom.com/SullivanCromwell/_Assets/PDFs/Memos/President-Adjusts-Steel-Aluminum-Copper-Pharmaceutical-Tariffs.pdf
47. White & Case, "United States modifies steel, aluminum, and copper Section 232 tariffs", Apr 2026; Utility Dive, "Trump adjusts metal tariffs, sets 15% rate for some electrical grid equipment", Apr 2026. https://www.whitecase.com/insight-alert/united-states-modifies-steel-aluminum-and-copper-section-232-tariffs ; https://www.utilitydive.com/news/trump-steel-aluminum-copper-tariff-adjustments-grid-equipment-electric/816581/
48. tED Magazine, "Trump Administration Increases Tariffs on Certain Transformers", 22 Aug 2025. https://tedmag.com/trump-administration-increases-tariffs-on-certain-transformers/
49. Davis Wright Tremaine, "Executive Order 14421 (originally numbered as 14420): Impacts on Energy Projects, Power Supply, and Data Centers", Aug 2026. https://www.dwt.com/blogs/energy--environmental-law-blog/2026/08/eo-14420-bulk-power-system-equipment
50. mgrid.org, "Trump Grid Equipment Order: What EO 14420 Actually Bans", 26 Aug 2026 (secondary). https://mgrid.org/2026/08/26/trumps-grid-equipment-order-names-inverters-batteries-and-transformers-but-bans-nothing-yet/
51. Utility Dive, "DOE mulls changes to Biden-era transformer rule, raising utility concerns", 29 Jul 2026. https://www.utilitydive.com/news/doe-mulls-changes-to-biden-era-transformer-rule-raising-utility-concerns/826440/
52. BigGo Finance, "Global Transformer Shortage Intensifies as China's Exports Surge, Shipments to U.S. Soar 182%", 27 Mar 2026 (summarizing a Goldman Sachs report of 26 Mar 2026; secondary). https://finance.biggo.com/news/XmWhLp0BvthpMgHBXAi4
53. Coalition for a Prosperous America, "America's AI Boom Has a Trade Policy Blind Spot", 5 May 2026 (secondary). https://prosperousamerica.org/americas-ai-boom-has-a-trade-policy-blind-spot/
54. POWER Magazine, "Can U.S. High-Voltage Grid Equipment Supply Keep Pace With 765-kV Expansion and Data Center Demand?" (interview with Trench Group CEO B. Basdere), 7 Sep 2026. https://www.powermag.com/can-u-s-high-voltage-grid-equipment-supply-keep-pace-with-765-kv-expansion-and-data-center-demand/
55. Transformer Magazine, "MR sets 16-week OLTC delivery", 14 Apr 2026. https://transformer-magazine.com/news/mr-sets-16-week-oltc-delivery/
56. Hammond Power Solutions, "Hammond Power Solutions Reports Second Quarter 2026 Financial Results" (GlobeNewswire via Yahoo Finance), 30 Jul 2026. https://finance.yahoo.com/markets/stocks/articles/hammond-power-solutions-reports-second-211500499.html
57. Virginia Transformer (PR Newswire), "Virginia Transformer Announces Plan to Further Expand With New Greenfield Plant in Muscle Shoals, Alabama…", 19 May 2026. https://www.prnewswire.com/news-releases/virginia-transformer-announces-plan-to-further-expand-with-new-greenfield-plant-in-muscle-shoals-alabama-bringing-1-100-high-paying-jobs-to-the-region-302776563.html
58. Forgent Power Solutions, FQ4 and FY2026 earnings release (8-K Ex. 99.1), 15 Sep 2026. https://www.sec.gov/Archives/edgar/data/2080126/000208012626000034/exhibit991earningsrelease_.htm
59. Fortune, "Forgent's IPO is 'bringing sexy back' to the electrical equipment helping power the AI boom, CEO says", 14 Feb 2026. https://fortune.com/2026/02/14/forgent-ipo-bring-sexy-back-electrical-equipment-power-ai-boom/
60. ABB, "Q2 2026 results", 16 Jul 2026. https://new.abb.com/news/detail/137496/q2-2026-results
61. Pulse 2.0, "Siemens: Smart Infrastructure Orders Surge 42% To Record €8 Billion As Data Center Contracts Accelerate", 10 Aug 2026 (secondary). https://pulse2.com/siemens-smart-infrastructure-orders-surge-42-to-record-e8-billion-as-data-center-contracts-accelerate/
62. Investing.com, "Earnings call transcript: Schneider Electric lifts 2026 outlook after strong H1", 30 Jul 2026 (secondary). https://www.investing.com/news/transcripts/earnings-call-transcript-schneider-electric-lifts-2026-outlook-after-strong-h1-93CH-4822615
63. Powell Industries, FQ3 2026 earnings release (8-K Ex. 99.1), 3 Aug 2026. https://www.sec.gov/Archives/edgar/data/80420/000008042026000103/ex991-powlq3xfy2026earning.htm
64. Hubbell, Q2 2026 earnings release (8-K Ex. 99.1), 28 Jul 2026. https://www.sec.gov/Archives/edgar/data/48898/000162828026049934/exhibit991_07282026.htm
65. The Motley Fool, "Why Forgent Power Stock Slumped This Week (And What You Should Do)", 21 Aug 2026; Briefs, "Forgent and Neos Sell 35 Million Shares After Stock Doubles", c. 29 Jun 2026 (secondary). https://www.fool.com/investing/2026/08/21/why-forgent-power-stock-slumped-this-week-and-what/ ; https://www.briefs.co/news/forgent-and-neos-sell-35-million-shares-after-stock-doubles/
66. MarketBeat, "Forgent Power Solutions (NYSE:FPS) Stock Bumped Up to 'Hold' by Wells Fargo & Company", 26 Sep 2026 (headline; secondary). https://www.marketbeat.com/instant-alerts/analyst-forgent-power-solutions-nyse-fps-stock-bumped-up-to-hold-by-wells-fargo-company-2026-09-26/
67. Investment hub digest 2026-09-30 (investment_dashboard_public/digests/2026-09-30.html), summarizing Schneider Electric / PR Newswire (YOTTA, 28 Sep 2026) and DCD / Semiconductor Today on the Eaton–Infineon MVSST 2.0 (29 Sep 2026) (secondary; underlying releases not re-fetched).
68. Prysmian, "Q2'26 & 1H: Prysmian raises guidance after its best quarter yet" (PDF), 30 Jul 2026. https://www.prysmian.com/sites/www.prysmian.com/files/media/documents/PR_Q2'26_EN_FINAL.pdf
69. Investing.com, "Earnings call transcript: Prysmian lifts 2026 outlook after record Q2", 30 Jul 2026 (secondary). https://www.investing.com/news/transcripts/earnings-call-transcript-prysmian-lifts-2026-outlook-after-record-q2-93CH-4822973
70. Prysmian press release, "The acquisition of Atkore receives U.S. antitrust clearance", 15 Sep 2026; Business Wire, "Atkore Inc. to be Acquired by Prysmian for $95.00 per Share in Cash", 3 Aug 2026 (headlines). https://www.prysmian.com/en/media/press-releases/the-acquisition-of-atkore-receives-us-antitrust-clearance ; https://www.businesswire.com/news/home/20260802368964/en/Atkore-Inc.-to-be-Acquired-by-Prysmian-for-%2495.00-per-Share-in-Cash
71. NKT, "NKT A/S H1 2026 Interim Report: Solid financial and operational execution", 13 Aug 2026. https://view.news.eu.nasdaq.com/view?id=b6f2ea0cfacf72db169463a0152e4cf93&lang=en
72. Nexans, "2026 Half-year results" (PDF), 29 Jul 2026. https://www.nexans.com/app/uploads/2026/07/2026-07-29-pr-nexans-h1-2026-earnings.pdf
73. HVDC World, "Sumitomo Electric Secures EUR 2 Billion Contract for Rhine-Main-Link (DC35)", 21 May 2026. https://hvdcworld.com/news/sumitomo-electric-secures-eur-2-billion-contract-for-rhine-main-link-dc35
74. The Korea Herald, "Eximbank backs LS Cable's US subsea plant with W300b", 24 Aug 2026. https://www.koreaherald.com/article/10850212
75. The Korea Herald, "LS Cable rides AI power boom to record profit", 30 Mar 2026. https://www.koreaherald.com/article/10705688
76. The Value News (Korean), "[자사주 소각 레이더] 5. LS, 중복상장 걷어내고 '지능형 사업지주'로 재평가…", 5 Jun 2026 (secondary). https://www.thevaluenews.co.kr/news/199201
77. Pfisterer Holding SE, H1 2026 results (EQS via TradingView), 18 Aug 2026. https://www.tradingview.com/news/eqs:b81b46711094b:0-pfisterer-holding-se-continues-successful-growth-trajectory-significant-increase-in-revenue-and-earnings/
78. GuruFocus via Yahoo Finance, "Quanta Services Inc (PWR) (Q2 2026) Earnings Call Highlights", 31 Jul 2026 (secondary). https://finance.yahoo.com/markets/stocks/articles/quanta-services-inc-pwr-q2-010450600.html
79. MYR Group, Q2 2026 earnings release (8-K Ex. 99.1), 29 Jul 2026. https://www.sec.gov/Archives/edgar/data/700923/000070092326000041/myrg-2026630x8kxexx991.htm
80. Sterling Infrastructure, Q2 2026 earnings release (8-K Ex. 99.1), 3 Aug 2026. https://www.sec.gov/Archives/edgar/data/874238/000087423826000100/a20260803ex991earningsrele.htm
81. EC&M, "Data Center Buildout Fuels Revenue Blowout: EC&M's 2026 Top 50 Electrical Contractors Special Report", 15 Sep 2026. https://www.ecmweb.com/top-50-electrical-contractors/article/55404067/data-center-buildout-fuels-revenue-blowout-ecms-2026-top-50-electrical-contractors-special-report
82. TIKR, "Primoris Services Stock Down 39% in the Past Year, Is Primoris a Turnaround Buy in 2026?", 31 Aug 2026 (secondary). https://www.tikr.com/blog/prim-stock-primoris-valuation-2030
83. Transformer Magazine, "Texas plans massive 765-kV transmission line", 1 Apr 2026; RTO Insider, "ERCOT Board Approves $9.4B 765-kV Project", 15 Dec 2025, and "Texas PUC Approves State's First 765-kV Lines", 30 Aug 2026 (headlines; paywalled). https://transformer-magazine.com/news/texas-plans-massive-765-kv-transmission-line/ ; https://www.rtoinsider.com/121586-ercot-board-approves-9-4-billion-765-kv-project/ ; https://www.rtoinsider.com/141670-texas-puc-approves-first-765-kv-lines/
84. San Antonio Express-News, "Texas leaders warn of 'catastrophic' effects from pausing plan for massive power lines", 20 Aug 2026. https://www.expressnews.com/business/article/texas-765kv-transmission-lines-permian-ercot-22391620.php
85. SemiAnalysis, "US Grid Constraints: Towards 40GW+ of Behind-The-Meter Datacenter by 2028?", 25 Jun 2026 (independent research; partly paywalled). https://newsletter.semianalysis.com/p/us-grid-constraints-towards-40gw
86. Utility Dive, "NERC issues Level 3 alert, mandates action to address data center load losses", updated 5 May 2026. https://www.utilitydive.com/news/nerc-issues-rare-level-3-alert-over-data-center-load-losses/819295/
87. Utility Dive, "PJM eyes data center, crypto reliability requirements after 3.8 GW of load trips offline", 12 Aug 2026; PJM Inside Lines, "Reliability Standards to Manage Large Load Disconnection Events Proposed by PJM", 10 Sep 2026 (headline). https://www.utilitydive.com/news/pjm-nerc-data-center-crypto-reliability-standards/827653/ ; https://insidelines.pjm.com/reliability-standards-to-manage-large-load-disconnection-events-proposed-by-pjm/
88. Microgrid Knowledge, "UPS, BESS, and Generators Are Not Interchangeable: The Three-Layer Power Architecture of an AI Data Center", 21 Sep 2026. https://www.microgridknowledge.com/microgrids/datacenter/article/55400710/ups-bess-and-generators-are-not-interchangeable-the-three-layer-power-architecture-of-an-ai-data-center
89. NVIDIA Technical Blog, "Designing Production-Ready Battery Energy Storage Systems for AI Factories", 10 Jun 2026. https://developer.nvidia.com/blog/designing-production-ready-battery-energy-storage-systems-for-ai-factories/
90. NVIDIA Technical Blog, "How New GB300 NVL72 Features Provide Steady Power for AI". https://developer.nvidia.com/blog/how-new-gb300-nvl72-features-provide-steady-power-for-ai/
91. Canary Media, "xAI has quietly built a massive battery at its Memphis data center hub", 11 Sep 2026; qz.com, "SpaceX Q2 Tesla Megapack purchases: $295 million for AI data centers", 6 Aug 2026 (headline). https://www.canarymedia.com/articles/batteries/xai-massive-battery-memphis-data-center ; https://qz.com/spacex-tesla-megapack-ai-data-centers-080626
92. pv magazine USA, "Tesla announces 13.5 GWh energy storage deployments in Q2, sets July earnings date", 2 Jul 2026 (incl. Wood Mackenzie US Q1 deployments); energy-storage.news, "Tesla's energy division gross margin declines 19% despite battery storage deployment rebound", 23 Jul 2026 (headline). https://pv-magazine-usa.com/2026/07/02/tesla-announces-13-5-gwh-energy-storage-deployments-in-q2-sets-july-earnings-date/ ; https://www.energy-storage.news/teslas-energy-division-gross-margin-declines-19-despite-battery-storage-deployment-rebound/
93. Chosunbiz, "LG Energy Solution powers North America ESS push with Lansing plant", 21 Sep 2026. https://biz.chosun.com/en/en-industry/2026/09/21/NDW4HHNXI5GWVCNEJ3D7SQDN6A/
94. The Korea Times, "Korea's US investment triggers 2nd wave of orders for ESS, power gear makers", 27 Sep 2026; energy-storage.news, "Samsung SDI on track with US LFP cell production, expects demand to outstrip production", 3 Aug 2026 (headline). https://www.koreatimes.co.kr/business/companies/20260927/koreas-us-investment-triggers-2nd-wave-of-orders-for-ess-power-gear-makers ; https://www.energy-storage.news/samsung-sdi-on-track-with-us-lfp-cell-production-expects-demand-to-outstrip-production/
95. Benzinga, "Fluence Energy Shares Slide As Analysts Lower Targets On Guidance Cut", 17 Sep 2026; Utility Dive, "Fluence Energy signs master supply agreements with two 'major' hyperscalers", 12 May 2026 (headline). https://www.benzinga.com/trading-ideas/movers/26/09/61850455/fluence-energy-shares-slide-as-analysts-lower-targets-on-guidance-cut ; https://www.utilitydive.com/news/fluence-energy-signs-master-supply-agreements-with-two-major-hyperscalers/820016/
96. Latitude Media, "Does the market finally have an opening for solid-state transformers?", 28 Sep 2026 (incl. Jefferies estimates). https://www.latitudemedia.com/news/does-the-market-finally-have-an-opening-for-solid-state-transformers/
97. POWER Magazine, "Major Leap for Solid-State Transformers: Megawatt-Class Unit Demonstrated on Live Feeder", 8 Sep 2026. https://www.powermag.com/major-leap-for-solid-state-transformers-megawatt-class-unit-demonstrated-on-live-feeder/
98. Bloter (Korean), "LS일렉트릭, 최대주주 지분 48.48%로 확대", 10 Apr 2026 (headline via news index; secondary). https://www.bloter.net
99. The Korea Times, "Hyosung eyes US AI power market with next-gen solid-state transformer", 8 Sep 2026 (headline). https://www.koreatimes.co.kr
100. Renaissance Capital, "INNIO Holding prices upsized US IPO at $27, the high end of the range", 3 Jun 2026. https://www.renaissancecapital.com/IPO-Center/News/119553/innio-holding-prices-upsized-us-ipo-at-27-the-high-end-of-the-range
101. POWER Magazine, "Ansaldo Returns to U.S. Gas Turbine Market as Equipment Crunch Widens Supplier Field", 1 Sep 2026. https://www.powermag.com/ansaldo-us-gas-turbine-market-equipment-crunch/
102. Utility Dive, "Mitsubishi's large-frame gas turbine backlog reaches 35 GW", 13 Aug 2026. https://www.utilitydive.com/news/mitsubishi-gas-turbine-backlog-earnings/827761/
103. Investing.com (Reuters), "Wall Street ends down, calls for AI slowdown pummel chipmakers", 14 Sep 2026. https://www.investing.com/news/economy-news/ai-warnings-knock-nasdaq-futures-pressure-tech-stocks-4898987
104. The Motley Fool, "Why Did GE Vernova Stock Fall Today?", 14 Sep 2026. https://www.fool.com/investing/2026/09/14/why-did-ge-vernova-stock-fall-today/
105. Yahoo Finance, "Behind-the-Meter Energy Stocks Fall Tuesday: FTAI Aviation Down 7%, GE Vernova Down 6%, Caterpillar Down 4%", 18 Aug 2026. https://finance.yahoo.com/energy/articles/behind-meter-energy-stocks-fall-172353733.html
106. RMI, "Building the Great American Grid", 23 Sep 2026. https://rmi.org/resources/building-the-great-american-grid/
107. Yahoo Finance market-data API (quoteSummary modules price / summaryDetail / financialData / defaultKeyStatistics / earningsTrend / calendarEvents / majorHoldersBreakdown, and chart API), retrieved 2 Oct 2026 07:45–08:40 UTC (secondary aggregator). https://finance.yahoo.com
108. SemiAnalysis, "Inside the 800VDC Revolution – Part 1", 25 May 2026. https://newsletter.semianalysis.com/p/inside-the-800vdc-revolution-part
109. Investing.com, "Earnings call transcript: WEG posts Q2 2026 beat as shares fall 3%", 23 Jul 2026 (secondary). https://www.investing.com/news/transcripts/earnings-call-transcript-weg-posts-q2-2026-beat-as-shares-fall-3-93CH-4809522
110. AD HOC NEWS, "Bernstein starts coverage on Hitachi stock with a Buy rating", 1 Oct 2026 (secondary, citing Investing.com). https://www.ad-hoc-news.de/boerse/news/corporate-news/bernstein-starts-coverage-on-hitachi-stock-with-a-buy-rating/70210987
111. pv magazine USA, "AI data center developers eye solid-state transformers for AI power density" (SolarEdge interview), 26 Mar 2026. https://pv-magazine-usa.com/2026/03/26/ai-data-center-developers-eye-solid-state-transformers-for-ai-power-density/
112. POWER Magazine, "Navigating the Transition to Sustainable MV Switchgear Amidst Decarbonization Initiatives", 3 Sep 2024 (summarizing EU Regulation 2024/573). https://www.powermag.com/navigating-the-transition-to-sustainable-mv-switchgear-amidst-decarbonization-initiatives/
113. KED Global, "LS scraps Essex Solutions IPO plan amid shareholder backlash, tighter political scrutiny", 26 Jan 2026; Chosunbiz, "LS Group halts affiliate IPOs after criticism, shoulders 70 billion won bill", 30 Jan 2026. https://www.kedglobal.com/ipos/newsView/ked202601260004 ; https://biz.chosun.com/en/en-finance/2026/01/30/E7DETQODBRFXRFZNNQ4ZWIX5CE/
114. Yahoo Finance, "AI Data Center Boom Pushes U.S. Power Equipment to the Breaking Point", 3 Sep 2026 (secondary). https://finance.yahoo.com/technology/ai/articles/ai-data-center-boom-pushes-220000299.html
115. Hitachi Energy press release, "Hitachi Energy invests $106 million USD to expand transformer component manufacturing capacity at facility in Alamo, Tennessee", 20 Aug 2025 (headline). https://www.hitachienergy.com/news-and-events/press-releases/2025/08/hitachi-energy-invests-106-million-usd-to-expand-transformer-component-manufacturing-capacity-at-facility-in-alamo-tennessee
116. The Machine Maker, "Proterial to Invest USD 80 Million in India's First Amorphous Metal Manufacturing Facility in Andhra Pradesh", 2 Mar 2026 (headline). https://themachinemaker.com/news/proterial-to-invest-usd-80-million-in-indias-first-amorphous-metal-manufacturing-facility-in-andhra-pradesh/
117. ChinaTalk (Dana Golden), "Yes, Transformers Are a Problem...", 20 Jun 2026. https://www.chinatalk.media/p/yes-transformers-are-a-problem
118. IndustryWeek, "Cleveland-Cliffs Slides After CEO Pushes POSCO Tie-Up Timeline", 9 Feb 2026; Steel Market Update, "POSCO reiterates MoU with Cliffs, stresses no final decision yet", 31 Mar 2026. https://www.industryweek.com/leadership/companies-executives/news/55356351/cleveland-cliffs-slides-after-ceo-pushes-posco-tie-up-timeline ; https://www.steelmarketupdate.com/2026/03/31/posco-reiterates-mou-with-cliffs-stresses-no-final-decision-yet/
119. POWER Magazine, "America's Only Commercial Uranium Enricher Is Privately Building a New Plant Amid a Widening Nuclear Fuel Supply Gap", 3 Jun 2026. https://www.powermag.com/americas-only-commercial-uranium-enricher-is-privately-building-a-new-plant-amid-a-widening-nuclear-fuel-supply-gap/
120. Utility Dive, "Facing an estimated 474 GW of interconnection requests, Texas hits pause on data centers", 5 Aug 2026 (headline). https://www.utilitydive.com/news/texas-hits-pause-data-center-interconnections/827046/
121. Investment hub digest 2026-10-01 (investment_dashboard_public/digests/2026-10-01.html), citing Yonhap on the LS Electric ₩180B 345 kV award of 1 Oct 2026 (secondary; Yonhap not re-fetched).
122. 90.5 WESA, "New state-supported investments in Western Pa. manufacturer aim to create hundreds of new jobs" (GE Vernova Charleroi), 30 Jul 2026. https://www.wesanews.org/environment-energy/2026-07-30/shapiro-state-grants-western-pa-manufacturer-new-jobs
123. Goldsboro Daily News, "Prolec GE Waukesha Breaks Ground on $140M Expansion", 18 Mar 2026 (headline). https://www.goldsborodailynews.com/2026/03/18/prolec-ge-waukesha-breaks-ground-on-140m-expansion/
124. The Korea Herald, "Cho Hyun-joon bets on AI power boom with W386.5b US orders", 15 Sep 2026 (headline; amount corroborated by [33]). https://www.koreaherald.com/article/10873920
125. BigGo Finance, EMCOR Q2 2026 call summary, 30 Jul 2026; Investing.com, "Comfort Systems Q2 2026 slides: revenue tops $3B, backlog hits $14B", 24 Jul 2026; Yahoo Finance, "Why MasTec (MTZ) Is Down 9.6% After Raising 2026 Guidance And Missing EPS Expectations", 31 Jul 2026 (all secondary / headline). https://finance.biggo.com/news/US_EME_2026-07-30 ; https://www.investing.com/news/company-news/comfort-systems-q2-2026-slides-revenue-tops-3b-backlog-hits-14b-93CH-4812234 ; https://finance.yahoo.com/markets/stocks/articles/why-mastec-mtz-down-9-180852443.html
126. KED Global, "World's No.1 magnet wire maker SPSX mulls Korean IPO", 23 May 2024. https://www.kedglobal.com/ipos/newsView/ked202405230012
127. Seoul Economic Daily, "Hyosung Heavy Eyes 4.2 Million Won as Transformer Super Cycle Looms", 19 Apr 2026. https://en.sedaily.com/news/2026/04/19/hyosung-heavy-eyes-42-million-won-as-transformer-super
128. The Korea Times, "HD Hyundai Electric hits 1,000-transformer milestone at US plant", 2 Aug 2026 (headline); The Herald Business, "HD Hyundai Heavy Industries shares halved despite record earnings as labor dispute deepens", 24 Sep 2026 (headline). https://www.koreatimes.co.kr/business/companies/20260802/hd-hyundai-electric-hits-1000-transformer-milestone-at-us-plant ; https://mbiz.heraldcorp.com/article/10884149
129. Capacity Global, "Bergen Engines signs approximately 750MW U.S. power agreement with Crusoe for AI data centres", 3 Jun 2026; TradingView, "Liberty Energy Orders $505 Million of Bergen Engines for Data Center and Distributed Power Projects", 7 May 2026 (headlines). https://capacityglobal.com/news/bergen-engines-signs-approximately-750mw-u-s-power-agreement-with-crusoe-for-ai-data-centres/ ; https://www.tradingview.com/news/tradingview:dfcf923c1dc53:0-liberty-energy-orders-505-million-of-bergen-engines-for-data-center-and-distributed-power-projects/

*End of report.*
