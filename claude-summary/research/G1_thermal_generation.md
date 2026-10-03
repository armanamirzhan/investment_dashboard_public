> **Working research report, published as-is for transparency (3 Oct 2026).** Written by an AI research agent for the Claude Investment Summary pages. Every figure carries a date and source; "secondary" marks relays; "my estimate" marks the agent's arithmetic. Prices are a point-in-time snapshot (2 Oct 2026 closes unless stated). Not investment advice. Final picks and targets on the website may differ from the rankings here.

# G1: Thermal and onsite power generation for AI data centers
### Heavy-duty and aeroderivative gas turbines, reciprocating engines, fuel cells, the casting-and-alloy chain behind them, the plants they go into, and the developers who buy them

*Research date: Friday 2 October 2026 (evening, US time). Written for an educational investment-analysis page. This is not investment advice.*

**Conventions.**
- `[n]` refers to the numbered sources in §16. "(secondary)" marks an aggregator, a press summary or a headline-only reference (a search-result title that I could not open). "**my estimate**" marks my own arithmetic or assumptions.
- **Price dates.** All US, European, Japanese and Korean prices are closes on **2 October 2026**, taken from the Yahoo Finance chart feed at about 01:00 UTC on 3 October 2026 [65]. No mainland-Chinese listings are in scope for this report.
- **Market data.** Market values, consensus earnings-per-share (EPS) estimates, consensus ratings and price targets come from stockanalysis.com, retrieved 2–3 October 2026 [64] (secondary aggregator that redistributes S&P Global and TipRanks data). Where stockanalysis.com showed a stale price for a non-US listing, I rescaled its market value to the 2 October close (**my estimate**).
- **Forward P/E** is my arithmetic: 2 October price ÷ consensus EPS for the stated fiscal year.
- **FX (2 Oct 2026, Yahoo)** [65]: EUR/USD 1.1257; GBP/USD 1.324; USD/JPY 157.83; USD/KRW 1,342.5.
- **Units.** 1 GW = 1,000 MW. "Heavy-duty" or "frame" turbines are the 200–600 MW machines used in utility plants; "aeroderivative" turbines are jet engines adapted to drive generators (typically 25–115 MW); "reciprocating engines" are large piston engines (0.5–20 MW each). "Behind-the-meter" (BTM) means generation on the customer's side of the utility meter, which can operate "islanded" (with no grid connection at all) or in parallel with the grid.

**Method caveat.** The session's web-search quota ran out two-thirds of the way through the research. All later verification came from direct fetches of documents whose addresses were already known (company press releases, trade press, regulator summaries and quote pages). Items that I could only see as search-result headlines are marked "(headline only)" and are listed again in §15.

---

## 0. Executive summary: twelve conclusions

1. **The heavy-duty gas-turbine order book is now roughly 230 GW across the four Western, Japanese and Korean makers, against about 50 GW of combined annual output. The bottleneck is real and it lasts until the capacity additions land in 2028–30.**
   - GE Vernova: **116 GW** under contract at 30 June 2026 (53 GW firm backlog + 63 GW slot-reservation agreements), with "at least 125 GW by year-end 2026" [1]. It signed 20 GW of new gas equipment contracts in the second quarter alone, of which 18 GW were slot reservations and only 2 GW firm orders [1].
   - Siemens Energy: **69 GW** gas-turbine backlog, 15 GW of new orders and 6 GW shipped in the quarter to June 2026; lead times "3+ years" [7].
   - Mitsubishi Heavy Industries: **35 GW** large-frame backlog (from 23 GW a year earlier); orders booked in April–June 2026 are "scheduled for delivery between 2028 and 2030" [8].
   - Doosan Enerbility: 24 units ordered cumulatively, 12 of them for US data-center customers; the March 2026 contract delivers one unit per month from **May 2029** [10][12].
   - **My estimate:** 116 + 69 + 35 + ~9 (24 Doosan units × 380 MW) ≈ **229 GW**. Against 2026 output of roughly 20 GW (GE Vernova) + 15–16 GW (Siemens Energy) + ~16 GW (Mitsubishi's FY2025 shipments) + ~3 GW (Doosan's eight units) ≈ **54 GW**, the book is about 4.2 years of production.
2. **Pricing power is still rising, and it is the clearest "not yet in estimates" item.** GE Vernova expects its 2026 orders "to be priced 10 to 20 points higher than our Q4 2025 orders on a dollar per kW basis", and trade press reports a path to about **$600/kW by the end of 2027, nearly three times 2019 levels** [3][4]. Its Power segment EBITDA margin was 18.8% in the June quarter [1]; the group targets 20% by 2028 [4]. Siemens Energy raised Gas Services margin guidance to 14–16% for FY2026 [6]. Pricing on slots sold in 2026 for 2029–31 delivery will not appear in revenue until 2029.
3. **The firm-order picture is narrower than the headline backlogs suggest.** A Korean trade analysis counts only **29 large (215 MW+) turbines firmly ordered in the US in the first half of 2026**: GE 13, Mitsubishi 8, Doosan 7, Siemens Energy 1 [11]. Most of what GE Vernova books is a reservation with a deposit, not a firm order [1][3]. That is the mechanism by which an overbuild would first show: reservations that do not convert.
4. **Engineers have already moved the 2026–28 build to reciprocating engines; the market only half-recognises it.** The largest single onsite plants announced in 2026 are engine plants: Oracle/VoltaGrid 2.3 GW (92 × 25 MW INNIO Jenbacher packages) [28][29]; OpenAI's Shackelford County, Texas site with "500+ Jenbacher J624 engines" for 1.4 GW of IT load [54]; Wärtsilä's 42 × 50SG (790 MW) Texas order [32]; INNIO's own "1.1 gigawatt landmark order" [26]; Caterpillar restarting a 10 MW medium-speed engine line with 1.5 GW of capacity shipping from the fourth quarter of 2026 [16]. INNIO's equipment backlog rose **279% to $6.6 billion** [26]. Yet INNIO's shares have fallen from a $42.95 high to **$19.99** (2 Oct 2026), 26% below its $27 IPO price [27][65].
5. **Behind-the-meter demand is now a measurable, contracted market, not a forecast.** SemiAnalysis tracks **75 GW of firm, binding BTM equipment orders**, with 20 GW booked in the June 2026 quarter alone, and expects about **3 GW of US data-center IT load to be running islanded by end-2026** [54]. Cleanview counts 59 BTM projects, about 90 GW announced, about 2 GW operating, and 2.8–3.2 GW online by end-2026; Caterpillar equipment accounts for 33% of permitted capacity (8.8 GW) and Bloom Energy 14% [56]. The gap between 75–90 GW "ordered or announced" and 3 GW "operating" is the single most important number in this report: it is where the money is being spent in 2027–29, and where disappointment would appear.
6. **The casting bottleneck, not the assembly bottleneck, sets the ceiling.** Elon Musk: "the limiting factor for gas turbine production is casting the blades"; SpaceX bought about 336 hectares at Bastrop, Texas in March–June 2026 for an in-house nickel-superalloy blade foundry [46]. Howmet's gas-turbine revenue grew **38% year on year** in the June quarter, with "customers already revisiting and adding to their demand outlooks" and capex rising again in 2027 [43]. Korean analysts expect Musk's foundry to reach mass production **no earlier than 2030** because single-crystal blade casting "demands a higher level of technical expertise" [12]. Howmet (public), Precision Castparts (Berkshire Hathaway, unlisted inside a conglomerate) and Doncasters (private) are the three Western suppliers that matter; only Howmet is investable as a pure exposure.
7. **Fuel cells have found a permitting niche, and one company owns it.** Bloom has booked about **3.8 GW versus 0.03 GW for all competitors**, and Oracle's "Project Jupiter" abandoned a turbine design mid-permitting in favour of non-combustion power [54]. Oracle's master agreement is up to **2.8 GW**, of which 1.2 GW was contracted by April 2026 [38]. But one customer was about **73% of Bloom's June-quarter revenue** [37], the stock trades at 59× 2027 consensus EPS and already above the mean target [64], and a July 2026 short report questioned its scandium supply claims [39]. FuelCell Energy (37 MW annualised production rate [40]) and Plug Power (hydrogen) are not relevant to this demand.
8. **Regulation is loosening at the federal level and tightening in the courts.** The EPA's January 2026 turbine rule exempts "low use" turbines from Title V permitting and gives temporary installations (below 850 MMBtu/h, under 24 months) streamlined treatment [62]; its July 2026 guidance exempts "islanded" plants from the Acid Rain Program [63]. Against that, xAI ran 27 unpermitted mobile turbines at Southaven from August 2025 until a 41-turbine permit was granted on 10 March 2026 [61], and environmental groups filed a notice of intent to sue over "minor source" splitting at San Antonio data centers on 22 July 2026 [63]. Permits, not equipment, are now the pacing item for turbine-based BTM in non-attainment areas (**my assessment**).
9. **Bridge power is becoming permanent.** Microsoft's 2.67 GW "Project Kilby" at Pecos, Texas will run "behind the meter initially" with GE Vernova turbines and a 20-year Chevron supply, first power in 2028 [60]. Solaris Energy Infrastructure has about 2.3 GW under long-term contracts [25]. xAI bought the mobile-turbine lessor APR Energy for about $1 billion [24]. The secondary market for turbines carries all-in premiums of about 46% [54]. Grid connections for the 2025–27 BTM cohort are routinely expected in 2029–31 [55]; when they arrive, the onsite plants become peaking or backup assets, and the aeroderivative and engine fleets are redeployable, whereas a 2029-delivered frame turbine is not (**my assessment**).
10. **The steam-cycle detour is real but small.** Babcock & Wilcox's $2.4 billion Base Electron contract pairs four 300 MW gas boilers with Siemens Energy steam turbines deliverable "within 12–15 months" [47][48]. Its backlog went from $488 million to $2.6 billion in a year [47]. The company carries $239.8 million of debt against $57.4 million of equity, and the shares are 74% below their 52-week high [47][65].
11. **The overbuild risk is dated, not hypothetical.** Announced capacity: GE Vernova 20 GW/yr now → 24 GW in 2028 → 30 GW in 2030 [1]; Siemens Energy large-unit capacity 35 → 50 by 2027, medium 80 → 100 by 2028 [7]; Mitsubishi doubling versus 2024 within about two years of September 2025 [9]; Doosan 8 → 12 units a year by 2028 [11]. **My estimate:** combined heavy-duty output capacity of roughly **80–85 GW/yr by 2028–30**, against a pre-boom global market of about 30–40 GW/yr. The book is covered to 2029–30; beyond that, order intake has to stay above ~60 GW/yr or margins meet a cliff in 2030–31. The first observable warning would be slot-reservation conversion rates and cancellations, which GE Vernova does not yet disclose.
12. **Ranked shortlist** (details in §12):
    1. Siemens Energy (XETRA:ENR; OTC SMEGF)
    2. INNIO Group (NASDAQ:INIO)
    3. Howmet Aerospace (NYSE:HWM)
    4. Mitsubishi Heavy Industries (TSE:7011; OTC MHVYF)
    5. Baker Hughes (NASDAQ:BKR)
    6. Cummins (NYSE:CMI)
    7. Doosan Enerbility (KRX:034020)
    8. Caterpillar (NYSE:CAT)
    9. Wärtsilä (HEL:WRT1V; OTC WRTBY)
    10. Argan (NYSE:AGX)
    11. GE Vernova (NYSE:GEV)
    12. Solaris Energy Infrastructure (NYSE:SEI)

---

## 1. Value-chain map (October 2026)

Notation: `exchange:ticker`, followed by the US over-the-counter symbol where one exists. "Scarcity 2026–28" is my assessment from the evidence in §§2–9.

| Layer | Products | Listed companies | Notable private or unlisted | Scarcity 2026–28 |
|---|---|---|---|---|
| **A. Heavy-duty (frame) gas turbines** | 7HA/9HA (GE), SGT-800 / SGT6-9000HL / SGT5-9000HL (Siemens Energy), M501JAC/M701JAC (Mitsubishi), DGT6-300H (Doosan 380 MW class), GT36 / AE64.3A (Ansaldo) | GE Vernova (NYSE:GEV); Siemens Energy (XETRA:ENR; SMEGF); Mitsubishi Heavy Industries (TSE:7011; MHVYF); Doosan Enerbility (KRX:034020); Harbin Electric and Shanghai Electric (HKEX; China, out of scope) | Ansaldo Energia (owned by CDP Equity, Italian state; Shanghai Electric minority) [13][66] | **Sold out to 2029–30.** Lead times "3+ years" [7]; GE expects 2030 reservations sold out by end-2026 [5]; >50% of 2031 supply allocated by end-2026 per Korean analysts [12] |
| **B. Aeroderivative and small industrial turbines** | LM2500XPRESS (35 MW), LM6000, TM2500 (GE Vernova); NovaLT16 (~17 MW), LM aero packages, Frame 5 (Baker Hughes); Titan 350 (~38 MW), Taurus, Mars (Solar Turbines/Caterpillar); SGT-A65, SGT-800 (Siemens Energy); L30A 30 MW (Kawasaki); PE6000 (ProEnergy, 50 MW, rebuilt CF6 jet engines) | GE Vernova; Baker Hughes (NASDAQ:BKR); Caterpillar (NYSE:CAT); Siemens Energy; Kawasaki Heavy Industries (TSE:7012; KWHIY) | ProEnergy (Sedalia, Missouri) [22]; Dynamis Power Solutions [14] | **Tight; GE aero slots past 2030** [54]. Secondary-market premiums ~46% all-in [54] |
| **C. Reciprocating gas engines and packagers** | Jenbacher J620/J624 (4.25 MW), Type 6 (INNIO); G3520, CG260, 10 MW medium-speed restart (Caterpillar); Centum, QSK95 (Cummins); 34SG, 50SG (Wärtsilä, 10–20 MW); mtu Series 4000 (Rolls-Royce); MAN 51/60G; Kohler/Rehlko packages; linear generators (Mainspring) | INNIO Group (NASDAQ:INIO); Caterpillar; Cummins (NYSE:CMI); Wärtsilä (HEL:WRT1V; WRTBY); Rolls-Royce Holdings (LSE:RR; RYCEY); Generac (NYSE:GNRC); MAN Energy Solutions inside Volkswagen (XETRA:VOW3) | VoltaGrid; Crusoe; Rehlko (formerly Kohler Energy, Platinum Equity); Mainspring Energy; 2G Energy (listed, XETRA:2GB, small) | **Tightening fast.** INNIO backlog +279% [26]; Caterpillar large-engine backlog >3.5× since Jan 2024 [17]; Wärtsilä capacity 2.2× by 2029 [31] |
| **D. Fuel cells** | Solid-oxide fuel cells (Bloom, FuelCell Energy); phosphoric-acid fuel cells (Doosan Fuel Cell via HyAxiom) | Bloom Energy (NYSE:BE); FuelCell Energy (NASDAQ:FCEL); Doosan Fuel Cell (KRX:336260); Plug Power (NASDAQ:PLUG, hydrogen; not relevant) | HyAxiom (Doosan subsidiary) | **Bloom near-monopoly** (3.8 GW booked vs 0.03 GW competitors [54]); supply of scandium questioned [39] |
| **E. Hot-section castings, forgings and alloys** | Single-crystal and directionally solidified blades and vanes; disks and rings; nickel superalloys (Inconel 718, René, Haynes 282) | Howmet (NYSE:HWM); ATI (NYSE:ATI); Carpenter Technology (NYSE:CRS); Doosan Enerbility (castings and forgings); Acerinox (BME:ACX; owner of Haynes International); Berkshire Hathaway (NYSE:BRK.B; owner of Precision Castparts) | Precision Castparts (Berkshire); Doncasters; Chromalloy (repairs and parts-manufacturer-approval parts); SpaceX's planned Bastrop foundry [46] | **Binding.** "The limiting factor for gas turbine production is casting the blades" (Musk) [46]; Howmet IGT +38% y/y [43] |
| **F. Generators, gearboxes, controls** | Turbo-generators; Brush generators (Baker Hughes); Siemens Energy generators; ABB and Emerson controls; grid-forming inverters; synchronous condensers | Baker Hughes; Siemens Energy; GE Vernova; ABB (SIX:ABBN; ABBNY); Emerson (NYSE:EMR); Parker-Hannifin (NYSE:PH; fuel-gas and filtration packages for Stargate Abilene [73]) | — | Adequate; generator pairing a scheduling item [29] |
| **G. Heat-recovery steam generators, boilers, steam turbines, condensers** | HRSGs; package boilers; steam turbine generators; air-cooled condensers; SCR catalysts | Babcock & Wilcox (NYSE:BW); Siemens Energy (steam turbines); GE Vernova; Mitsubishi; Doosan; SPX Technologies (NYSE:SPXC, cooling) | Nooter/Eriksen (HRSG); Hamon (restructured); Vogt Power (Babcock Power); Cormetech (SCR catalysts) | **Steam turbines available in 12–15 months** vs 3+ years for gas turbines [47][48] |
| **H. Mobile and bridge power, "BTM utilities"** | Trailer-mounted TM2500 and Titan packages; engine fleets; power-as-a-service | Solaris Energy Infrastructure (NYSE:SEI); Kodiak Gas Services (NYSE:KGS); Williams Companies (NYSE:WMB, 6 GW BTM contracted [58]) | VoltaGrid; APR Energy (acquired by xAI, ~$1bn [24]); Crusoe; ProEnergy; Dynamis | **Scarce fleets, long contracts** (Solaris ~2.3 GW contracted [25]) |
| **I. EPC and construction** | Combined-cycle and simple-cycle EPC; engine-plant balance of plant; data-center MEP | Fluor (NYSE:FLR); Quanta (NYSE:PWR); Argan (NYSE:AGX, via Gemma Power Systems); Primoris (NYSE:PRIM); Comfort Systems (NYSE:FIX); Sterling (NASDAQ:STRL); MasTec (NYSE:MTZ) | Kiewit; Bechtel; Burns & McDonnell; Zachry; Black & Veatch | **Labour binding:** 10,200 boilermakers in the US [54]; 36–48 month builds [57] |
| **J. Gas supply laterals and compression** (brief; covered elsewhere) | Laterals, meter stations, compression, firm transport | Williams (WMB); Energy Transfer (NYSE:ET); Kinder Morgan (NYSE:KMI); Kodiak (KGS); Archrock (NYSE:AROC) | — | Firm capacity 5–7 years for new pipelines [57] |
| **K. Owners and operators of onsite plants** | Hyperscalers and developers | Oracle (NYSE:ORCL); Microsoft (NASDAQ:MSFT); Meta (NASDAQ:META); Amazon (NASDAQ:AMZN); Alphabet (NASDAQ:GOOGL); CoreWeave (NASDAQ:CRWV); Applied Digital (NASDAQ:APLD) | xAI; OpenAI; Crusoe; Vantage; Base Electron | The demand side; see §§8–9 |

---

## 2. Heavy-duty gas turbines: four makers, one queue

### 2.1 Order books, lead times and capacity (latest available)

| Maker | Backlog (date) | Latest order intake | Deliveries / capacity now | Announced capacity additions | Sold out to |
|---|---|---|---|---|---|
| GE Vernova | 53 GW firm + 63 GW slot reservations = 116 GW (30 Jun 2026) [1]; 100 GW at 31 Mar 2026 (44 + 56) [3] | 20 GW signed in Q2 2026 (18 GW reservations, 2 GW orders) [1]; 21 GW in Q1 2026 [3] | 20 GW/yr annualised in Q3 2026 [1]; Greenville from 55 to 70–80 heavy frames a year by H2 2026 [19] | 24 GW/yr by 2028; 30 GW/yr by 2030 [1] | Reservations through 2030 expected sold out by end-2026 [5]; "We sold a lot of 2030 slots" (Strazik, Apr 2026) [3] |
| Siemens Energy | 69 GW (30 Jun 2026) [7]; group backlog €162 billion [6] | 15 GW in the June 2026 quarter [7]; record group orders €17.9 billion, book-to-bill 1.57 [6] | 6 GW shipped in the quarter; 15–16 GW expected in FY2026 [7] | Large units 35 → 50 a year (2027); medium units 80 → 100 (2028); 30 medium units added since 2025 [7]; Gibsonton (Florida) +61,000 sq ft, Hungary combustion parts, Saudi H-class [19] | Lead times "3+ years" [7] |
| Mitsubishi Heavy Industries | 35 GW large-frame (Jun 2026), from 23 GW [8] | 10 large-frame units in Apr–Jun 2026 (4 US, 6 Japan); ¥1.1 trillion gas + nuclear orders Mar–Jun [8] | FY2025: 35 turbines, 16 GW; 4 GW delivered in the June quarter [8] | Double 2024 capacity "within 2 years" (announced Sep 2025) [9] | New orders deliver 2028–30 [8] |
| Doosan Enerbility | 24 units cumulative; 12 for US (Sep 2026) [12]; group backlog ₩26.35 trillion (+60.4%) [11] | 7 × 380 MW for a US data-center client (Mar 2026) [10]; 7 US large units in H1 2026 vs Siemens 1, MHI 8, GE 13 [11] | About 8 units a year [11] | 12 units a year by 2028; 45 units cumulative by 2030, 105 by 2038 [11] | March 2026 order delivers monthly from May 2029 [10] |
| Ansaldo Energia (private) | n/a | 8 × AE64.3A for Pacifico Energy's Texas data-center project; first deliveries 2027; first US new-build sale in 30+ years [13] | n/a | n/a | n/a |

Interpretation for an engineer-investor:

- **The reservation mechanism is the market.** GE Vernova's "slot reservation agreements" are deposits that hold a production slot; conversion to a firm order happens when the EPC and financing are ready. In the June quarter, 90% of the 20 GW signed were reservations [1]. This explains the discrepancy with the Korean count of only 29 firm large-turbine orders in the US in the first half of 2026 [11]. Both are true: the reservation book is enormous, the firm book is a fraction of it, and the conversion rate is the unknown.
- **Mitsubishi is the "selective" supplier.** Its CFO said the company is "being selective in the projects we contract" and sees "a strong supply-demand environment" with core US utility customers [8]. Selectivity means Mitsubishi is using scarcity to pick higher-margin, utility-backed projects rather than merchant data-center plants.
- **Siemens Energy ships less than it books by a factor of 2.5** (6 GW shipped vs 15 GW ordered in the quarter) [7]. Its large-unit capacity expansion to 50 units by 2027 is the earliest meaningful supply response among the four.
- **Doosan is the only maker whose US firm orders rose while Siemens Energy's fell to one unit** [11]. Doosan's position is doubly interesting because it also casts and forges hot-section parts for others (see §6), and because a Korean 27 GW (19%) upward revision to domestic electricity demand in August 2026 may expand its home market from ₩9–11 trillion to ₩15–20 trillion (analyst projection, secondary) [12].

### 2.2 Pricing

- GE Vernova expects 2026 orders to be "priced 10 to 20 points higher than our Q4 2025 orders on a dollar per kW basis" (Strazik) [4]. Trade press reports a projected price of about **$600/kW by end-2027, "nearly tripled from 2019 levels"** [3]. CNBC-sourced commentary puts the three-year increase at roughly 300% [4] (secondary).
- For scale, the US Energy Information Administration's reference overnight capital cost for a utility H-class simple-cycle turbine is **$836/kW** (2023 dollars), and $868–921/kW for a combined-cycle plant [29] (secondary, citing EIA AEO2025). A turbine priced at $600/kW is therefore roughly two-thirds of what the entire installed simple-cycle plant used to cost, which is why total project costs have moved toward the "$20M/MW" turnkey figures that SemiAnalysis reports for full-scope islanded sites [54].
- Margins follow with a lag. GE Vernova's Power segment EBITDA margin was 18.8% (+240 bps) in the June quarter, and the company raised 2026 Power guidance to 18–20% organic growth and 17–19% margin [1]. Siemens Energy's Gas Services margin guidance is 14–16% for FY2026 [6]. Doosan's Enerbility division operating profit rose 69.7% in the first half [11].
- **What is not in estimates (my assessment):** revenue recognised in 2026–27 is on orders priced in 2023–24. The 2025–26 price increases flow through in 2028–29. Consensus EPS for GE Vernova in 2026 is $15.17 [64]; the Power segment margin trajectory implied by $600/kW pricing is above the group's 20% 2028 target. Equally, the risk sits in the same place: if reservations do not convert, the 2029–31 pricing never becomes revenue.

### 2.3 Capacity expansion, in units and gigawatts (**my estimate** of the gigawatt equivalents)

| Maker | 2026 output | 2028–30 target | Assumption |
|---|---|---|---|
| GE Vernova | 20 GW/yr (Q3 2026) [1] | 24 GW (2028), 30 GW (2030) [1] | Company figures; includes aeroderivatives |
| Siemens Energy | 15–16 GW (FY2026) [7] | ~25 GW/yr by 2028 | 50 large units × ~400 MW + 100 medium units × ~50 MW (**my estimate**) |
| Mitsubishi | ~16 GW (FY2025 shipments) [8] | ~30 GW/yr | "Double 2024 capacity" [9] applied to a ~15 GW 2024 base (**my estimate**) |
| Doosan | ~3 GW (8 units) [11] | ~4.5 GW (12 units) [11] | 380 MW class |
| **Total** | **~54 GW** | **~80–85 GW/yr** | |

The historical global market for heavy-duty turbines was in the 30–40 GW/yr range for most of the 2010s (general industry knowledge; not separately verified here). The 2028–30 capacity is therefore about double the old market. The current 229 GW book absorbs that for roughly three years. After that, either the BTM wave converts into utility-scale combined-cycle orders (the 2029–32 NRG/GE Vernova/Kiewit 5 GW programme and Duke's up to 11 additional 7HA units are the type of order that would do it [19]), or the industry has over-expanded. The Google executive quoted by Modern Power Systems ("slots for new gas turbines are now going out to 2030") [19] and the Korean analysts' ">50% of 2031 supply allocated by year-end 2026" [12] define the window in which the market can still be called sold out.

### 2.4 Kawasaki Heavy Industries

Kawasaki's L30A is a 30 MW class industrial turbine marketed for cogeneration (brochure, headline only) [67]. I found no 2026 data-center order for it. Kawasaki (TSE:7012) closed at ¥2,350 on 2 October 2026, 38% below its 52-week high [65]; its gas-turbine business is small relative to aerospace, shipbuilding and motorcycles, so I treat it as not a thermal-generation vehicle.

---

## 3. Aeroderivative turbines, mobile fleets, bridge power and the used-turbine market

### 3.1 Why aeroderivatives carried the 2024–26 build

Aeroderivative packages start in five minutes, can run islanded, ship on trailers and were the only turbines with slots available in 2024–25. The first wave of BTM sites used them:

- **Crusoe / Stargate Abilene:** 10 LM2500XPRESS units (368 MW) in the first phase, 19 more booked in June 2025 for a total of 29 units, "nearly 1 GW" [20][53]. Parker-Hannifin supplies fuel-gas and filtration equipment for "more than 1 GW" of turbines at the site (headline only) [73].
- **xAI Colossus 2 (Southaven, Mississippi):** seven Solar Turbines Titan 350 units (35–38 MW each) as of September 2025, about 30 planned for "1.1+ GW" [18]; 27 temporary mobile turbines ran from August 2025 without a permit until the 41-turbine permanent permit on 10 March 2026 [61]. The site is a joint venture with Solaris Energy Infrastructure (50.1% Solaris, 49.9% xAI) [18].
- **Google, Armstrong County, Texas:** 930 MW of aeroderivatives plus 900 MW of Bloom fuel cells plus 1 GW of Mitsubishi J-class turbines [54].
- **Baker Hughes / Dynamis:** 76 NovaLT16 turbines (~1.3 GW) with Brush gearboxes and generators for Dynamis' DT17 "hypermobile" packages, booked in the June and September 2026 quarters [14].
- **Baker Hughes / Kodiak:** about 1 GW of NovaLT16 and Frame 5 units by 2030 under a rolling framework up to 1.8 GW [15].

### 3.2 Mobile fleets become strategic assets

- **APR Energy** expanded its fleet from 850 MW to over 1.1 GW in January 2026 with eight more mobile turbines, said mobile units deploy in 30–90 days, and described itself as a Fortress Investment Group portfolio company [23]. (The research brief given to this agent lists APR under Atlas Holdings; the January 2026 release names Fortress. I could not reconcile the ownership history and flag it in §15.) In July 2026 it was reported that Elon Musk's xAI had bought APR for about $1 billion, disclosed through a Federal Trade Commission early-termination notice in May 2026 [24] (secondary).
- **Solaris Energy Infrastructure** had 950 MW of average revenue-earning capacity in the June 2026 quarter, about 2.3 GW under long-term contracts and 800 MW uncontracted "with near-term delivery timelines"; Power Solutions EBITDA was $96 million for the quarter; it issued $1.3 billion of senior unsecured notes and spent $491.8 million of capex in the quarter [25].
- **ProEnergy** rebuilds retired CF6 jet engines into 50 MW PE6000 gensets at Sedalia, Missouri; Crusoe ordered 13 units (650 MW) for delivery in summer 2027 [22].
- **Williams Companies** was under contract for 6 GW of behind-the-meter power to be installed by the first half of 2027, deploying in about 18 months versus combined-cycle alternatives "potentially stretching to 2032" [58].

### 3.3 The used-turbine market

SemiAnalysis reports that "secondary market premiums reach 46% all-in" for turbines and that recips are "increasingly favored over turbines" because of it [54]. I could not obtain a dated price list for specific used frames (data gap, §15). The engineering point is that a used turbine comes with a maintenance history, a known hot-section condition and usually a need for a new generator and controls; the premium is paid for the slot, not the metal.

### 3.4 Where the aero and mobile wave is weakest

Simple-cycle aeroderivatives emit about 1,400 lb CO₂/MWh against about 800 lb for combined cycle [58], and SemiAnalysis notes that combustion turbines hold emissions compliance only above about 50% load (35% with upgrades), while AI training load "drops below these thresholds unpredictably" with "jitters of 10 to 20 MW several times a second" [54]. The consequence is batteries sized at roughly 50% of gas capacity, or synchronous condensers, at every islanded site [54]. That is additional demand for storage and power electronics that the turbine order book does not capture.

---

## 4. Reciprocating gas engines: the 2026–28 workhorse

### 4.1 Why engines won the middle of the decade

A reciprocating gas engine in the 2–20 MW range reaches about 45–50% electrical efficiency in simple cycle (Wärtsilä quotes about 50% for the 50SG [32]), against roughly 38–42% for a simple-cycle turbine. It can be ordered in 12–18 months, it modulates load in seconds, it can be permitted under lower emission thresholds, and a 100-unit plant has N+5 redundancy for the price of one spare turbine. SemiAnalysis lists the trade-offs: high-speed engines (0.5–4.5 MW, for example Jenbacher Type 6) and medium-speed engines (5–20 MW, for example Wärtsilä 34SG) offer "lower emissions permits, faster deployment", and "compete with datacenters for electrician labor" rather than for boilermakers and pipe welders [54].

The 2026 order flow confirms the shift:

| Deal | Equipment | Size | Timing | Source |
|---|---|---|---|---|
| Oracle / VoltaGrid, Texas | INNIO Jenbacher packages, ABB controls; 92 × 25 MW | 2.3 GW | Deliveries from Dec 2025 | [28][29] |
| OpenAI, Shackelford County, Texas | "500+ Jenbacher J624 engines (4.25 MW each)" | 1.4 GW IT load | 2026–27 | [54] |
| INNIO "landmark" order | Prime power for a major data-center developer/operator | 1.1 GW | Booked Q2 2026 | [26] |
| INNIO / Rehlko | Strategic capacity agreement | 1.25 GW over three years (from a 700 MW reservation) | 2026–29 | [26] |
| Wärtsilä, Texas | 42 × 50SG | 790 MW | Delivery 2028; operational late 2029 | [32] |
| Wärtsilä, US cumulative | Five US data-center orders | >2.4 GW | 2025–26 | [32] |
| Caterpillar / ProPetro ProPWR | Power generation assets | 2.1 GW over five years | 2026–30 | [17] |
| Caterpillar | Sixth customer agreement ≥1 GW; 10 MW medium-speed line restarted with 1.5 GW capacity | — | Shipments from Q4 2026 | [16][17] |
| Microsoft / Nebius, New Jersey | 400 MW project struggling with air permit | 400 MW | pending | [56] |

### 4.2 INNIO Group (NASDAQ:INIO)

- IPO on 4 June 2026 at $27 a share; the selling shareholder (AI Alpine, owned by Advent International and the Abu Dhabi Investment Authority) sold 90 million shares for $2.43 billion; first-day close $33.30 valued the company at about $25 billion [27] (secondary).
- June-quarter results (28 Jul 2026): revenue $937.7 million (+42%), equipment revenue $569.3 million (+61%), services $368.4 million (+21%), adjusted EBITDA $172.3 million (+20%); equipment order intake **$2.3 billion (+316%)**; equipment backlog **$6.6 billion (+279%)**; first-half intake $3.9 billion; 2026 guidance raised to revenue $3.8–3.9 billion and adjusted EBITDA $720–740 million; "multi-year North American and Austrian capacity expansion underway"; a 100% hydrogen backup demonstration at 3 MW [26].
- Share price $19.99 on 2 Oct 2026 (+9.4% on the day), 53% below the $42.95 high and 26% below the IPO price [65]. Market value about $15.0 billion [64]. Consensus EPS $0.37 (2026) and $0.79 (2027), so **54× 2026E and 25× 2027E**; consensus Buy (4 Strong Buy, 4 Buy, 2 Hold), mean target $38.20 (high $47, low $29) [64].
- Engineering reading: INNIO is the engine inside the two largest named onsite plants (Oracle/VoltaGrid and OpenAI Shackelford) [28][54]. Its EBITDA growth (+20%) lags revenue (+42%) because of IPO costs ($81.2 million) and equipment mix [26]; the equipment-heavy 2027 revenue will carry lower margins than services. The thesis-breaker is a slowdown in US BTM permitting or a customer-concentration event (VoltaGrid and the Shackelford buyer are not disclosed by name in the results release).

### 4.3 Caterpillar (NYSE:CAT) and Solar Turbines

- June-quarter 2026: sales $20.5 billion (+24%), Power & Energy segment $8.2 billion with $2 billion profit (+30%); **power generation retail sales +72%** year on year; backlog **$72 billion**, with Power & Energy customer orders running "through 2030" [16].
- Capacity: tripling large reciprocating engine capacity from 2024 levels with heavy investment in 2027–29 and cash payback by end-2030; the large-engine backlog grew more than 3.5× since January 2024 [17]. The 10 MW medium-speed platform halted in 2022 is being restarted, adding 1.5 GW of capacity with shipments from the fourth quarter of 2026 [16].
- Solar Turbines' Titan 350 is the machine at xAI's Colossus 2 [18]; Cleanview attributes 33% of permitted US BTM capacity (8.8 GW) to Caterpillar equipment including Solar [56]; Heatmap reports Stargate Abilene also uses Caterpillar turbines in some phases [58].
- Tariffs: $2.2 billion of estimated 2026 tariff cost, partly offset by a $392 million IEEPA refund [16].
- Valuation: $845.42 (2 Oct 2026); market value $388.6 billion; consensus 2026 EPS $27.19 → **31.1×**; Buy (14 Strong Buy, 11 Hold, 2 Sell-side); mean target $975.61 (high $1,225, low $575) [64][65]. The stock is 21% below its 52-week high. Power is roughly a third of sales; the rest is construction and mining, so this is a diluted exposure.

### 4.4 Cummins (NYSE:CMI)

- June-quarter 2026: revenue $9.5 billion (+9%); Power Systems $2.3 billion (+19%) with EBITDA margin **24.5%** (from 22.8%); power generation sales +19% "primarily due to increased demand for data center applications" in the US, China and Asia-Pacific; 2026 guidance raised to revenue +10–13% and EBITDA 18.0–18.5%; "disciplined capacity and product investments" in power generation [30]. Cummins was also selected to supply battery storage for a large US data center (headline only) [70].
- Valuation: $528.32; market value $72.7 billion; 2026E EPS $29.71 → **17.8×**; Buy (11 Strong Buy, 8 Hold); mean target $745.96 (high $894, low $530) [64][65]. 28% below the 52-week high. Cummins' data-center exposure is mostly diesel backup generators (QSK95, Centum series); its prime-power gas engine range is thinner than INNIO's or Wärtsilä's, so it is a cheaper but less direct play.

### 4.5 Wärtsilä (HEL:WRT1V)

- June-quarter 2026: record order intake €2.8 billion (+33%), Energy orders €1.7 billion (record), order book €9 billion, comparable operating margin 14%, production capacity to be expanded **2.2× by 2029**; CEO: "the market is hot globally, and there are good opportunities for price realization in all segments" [31] (secondary).
- Valuation: €29.35; market value about €17.3 billion (**my estimate**, rescaled from €17.17 billion at €29.12); stockanalysis forward P/E 24.3 implies EPS of about €1.20, so **~24.5× forward**; consensus **Hold** (17 analysts), mean target €32.94 [64][65]. 28% below its 52-week high. Marine is the larger half of the business.

### 4.6 Rolls-Royce Power Systems (mtu), MAN Energy Solutions, Rehlko, Generac

- Rolls-Royce Power Systems 2025: revenue €5.72 billion (+19%), operating profit €995 million (+50%), return on sales 17.4%, order intake €7.14 billion (+21%); "high three-digit million euro" capex including a new Plant 3 at Friedrichshafen for Series 4000 assembly from 2028 and expansions at Aiken (South Carolina) and Mankato (Minnesota); 1,000+ hires planned for 2026 [33]. In the first half of 2025, power-generation order intake grew 68% and the division had 100% order cover for 2025 and 43% for 2026 [34]. Power Systems is under a quarter of Rolls-Royce group revenue; the group trades at about **31.8×** forward earnings at 1,477.2p [64][65], priced for civil aerospace and defence.
- MAN Energy Solutions is inside Volkswagen; no separately reported data-center orders were found (data gap).
- Rehlko (formerly Kohler Energy, owned by Platinum Equity) is private; its 1.25 GW three-year INNIO capacity agreement [26] shows the packagers are locking engine supply.
- Generac (NYSE:GNRC): the Amazon agreement filed 16 Sep 2026 covers about **$2.4 billion** of deliveries in 2027–28 and up to **$8 billion** of qualifying purchases over the full term, with warrants for up to about 1.69 million shares at $200.93 (308,000 vested immediately); Generac's data-center backlog was about $1.6 billion by July 2026; it targets over $1.25 billion of annual large-megawatt generator capacity by Q4 2026 and triple that by Q3 2027, and acquired Enercon Engineering for packaging and switchgear [35][71]. Valuation: $216.80; market value $12.8 billion; 2026E EPS $9.70 → **22.4×**; Buy; mean target $289.56 (high $375, low $215) [64][65]. This is backup power (diesel), not prime power; it belongs in the facility-electrification report rather than here, and I keep it out of the shortlist for that reason.

### 4.7 Mainspring Energy (private)

Mainspring's "linear generator" is a free-piston, fuel-flexible machine sold in 25–50 MW increments; its first islanded AI data center began in summer 2025; it raised a $258 million Series F in April 2025 and is building a $175 million Pittsburgh plant for up to 1,000 units a year [36][81]. There is no listed exposure; its relevance is as a permitting-light competitor to Bloom in sub-100 MW blocks.

---

## 5. Fuel cells: one winner, two also-rans, one irrelevant

### 5.1 Bloom Energy (NYSE:BE)

Evidence:
- June-quarter 2026 revenue **$1.07 billion (+165.5%)**; trailing gross margin 31.2%; one customer about **73%** of quarterly revenue; 2026 revenue guidance $3.9–4.2 billion (raised twice); Fremont capacity rising from 1 GW to 2 GW by end-2026 [37] (secondary summary of the 10-Q).
- Oracle master agreement up to **2.8 GW**, 1.2 GW initially contracted, deployments "continuing into 2027"; a system was delivered in 55 days; a warrant was issued to Oracle on 9 April 2026 [38]. Earlier disclosure cited 3.5 million shares at $113.28 exercised cashlessly on 1 May 2026 [37].
- American Electric Power: up to 1 GW with an initial 100 MW order (Nov 2024); Brookfield: financing framework up to $5 billion over five years (Aug 2025) [37].
- SemiAnalysis: Bloom has about 3.8 GW booked versus 0.03 GW for all other fuel-cell makers; fuel cells avoid combustion permitting but need supercapacitor or battery backup at about a 3:2 ratio, so 2.45 GW of fuel cells would need about 1.6 GW of supercapacitors, "unprecedented scale" [54]. Oracle's Project Jupiter "abandoned turbine design mid-permitting" [54].
- Short report: Hunterbrook's "Bloom's Big Lie" (8 Jul 2026) alleged undisclosed reliance on Chinese scandium oxide; Bloom called it "false and misleading" in an 8-K and said it holds sufficient inventory and a diversified supply base; the shares fell about 12% on the day and recovered the next [39].

Valuation: $289.15 (2 Oct 2026); market value $85.2 billion; 2026E EPS $2.71 → **107×**; 2027E $4.93 → **59×**; consensus Buy but with 12 Holds, 1 Sell and 1 Strong Sell among 29 analysts; mean target **$282.82**, below the price (high $390, low $97) [64][65].

Engineering reading: a solid-oxide fuel cell running on natural gas is a 50–60% efficient generator with no combustion-turbine permit, no boilermakers and a 90-day install. It is the right tool for a non-attainment county. Its cost per MWh is above an engine plant's because the stack is replaced every five to ten years and because the backup supercapacitors are an extra plant; the hyperscalers are paying for speed and permit certainty, as the SemiAnalysis "$100 billion per GW per year" inference-revenue argument says they should [54]. The investment question is whether a company with one customer at 73% of revenue should trade at 59× two-year-forward earnings. Bloom is the single-company bottleneck of its niche; it is also fully priced.

### 5.2 FuelCell Energy (NASDAQ:FCEL)

Fiscal third-quarter 2026 (to 31 Jul; reported 2 Sep): revenue **$33.0 million (−29%)**, net loss $45.3 million, backlog $3.6 billion ($1.3 billion committed + $2.35 billion "awarded capacity"); first data-center capacity-reservation agreement for 75 MW in Texas (six 12.5 MW blocks) with an upfront payment; annualised production rate **37.1 MW**, targeted at 100 MW by October 2026 and 500 MW at Torrington by June 2028; liquidity $737 million [40]. The share price was $18.47 on 2 Oct 2026, 51% below the 52-week high [65]. At 37 MW a year of carbonate fuel cells, the company is two orders of magnitude smaller than Bloom and is not a bottleneck owner.

### 5.3 Doosan Fuel Cell (KRX:336260)

Phosphoric-acid fuel cells sold through HyAxiom (a Doosan US subsidiary): orders of ₩501.4 billion (2 Sep 2026) and ₩322.2 billion (15 Sep 2026) for US data centers, phased deliveries from 2028, year-to-date orders about **₩1.11 trillion** [41][42]. The shares closed at ₩45,850, 58% below the 52-week high [65]. I could not obtain MW figures or consensus estimates (data gap). PAFC runs at lower efficiency than SOFC (about 40–45% electrical) and the orders are intra-group, so I treat this as a watch item.

### 5.4 Plug Power (NASDAQ:PLUG)

Plug sells hydrogen fuel cells and electrolysers. No data center in this report runs on hydrogen, no onsite plant surveyed has firm hydrogen supply, and the EIA capital-cost table shows why: a 95% capture combined-cycle plant is $2,365/kW versus $836/kW for simple cycle [29], and green hydrogen is more expensive still. Plug ($1.90, 2 Oct 2026 [65]) is not relevant to this demand and is excluded.

---

## 6. Components and materials: where the real ceiling is

### 6.1 Hot-section castings and forgings

The hot section of a gas turbine (combustor, first-stage blades and vanes) runs above the melting point of its own alloy and survives through internal cooling channels and ceramic coatings. The blades are investment-cast in nickel superalloys, often as single crystals, by a handful of foundries: **Howmet** (Whitehall, Michigan and others), **Precision Castparts** (Berkshire Hathaway, since 2016), **Doncasters** (private, UK), and the captive foundries of **Doosan Enerbility**, Mitsubishi and Siemens Energy. This is the layer where Musk says the limit is: "The limiting factor for gas turbine production is casting the blades"; SpaceX acquired about 336 hectares at Bastrop, Texas between March and June 2026 for a nickel-superalloy blade foundry, with permits pending and no production date [46]. Korean analysts expect no mass production before 2030, because single-crystal casting "demands a higher level of technical expertise" [12]. Even if SpaceX succeeds, it would supply its own turbines, not the merchant market.

**Howmet Aerospace (NYSE:HWM).** June-quarter 2026: revenue $2.547 billion; adjusted EBITDA margin 32.1% (+340 bps); Engine Products revenue $1.373 billion (+32%) at a 37.7% margin; **gas-turbine revenue +38%**; CEO: "Demand in the gas turbines market is extraordinary with customers already revisiting and adding to their demand outlooks"; 2026 guidance revenue $10.0–10.1 billion, adjusted EPS $5.23–5.31, free cash flow $1.85–1.95 billion; capex "continues to increase, and we already see the need to increase this further in 2027" [43]. Valuation: $231.27; market value $92.2 billion; 2026E EPS $5.34 → **43.3×**; 2027E $6.46 → **35.8×**; Strong Buy (16 Strong Buy, 4 Buy, 3 Hold); mean target $334.36 (high $375, low $255) [64][65]. The shares are 25% below the 52-week high. Industrial gas turbines are a minority of Howmet's engine business (aerospace is the majority), but it is the only listed pure casting exposure.

**Precision Castparts** is inside Berkshire Hathaway (NYSE:BRK.B); press commentary calls Buffett's 2016 purchase "now an AI power play" (headline only) [72]. There is no segment disclosure sufficient to value it.

**Doosan Enerbility** forges rotors and casts components for its own turbines and supplies castings and forgings to other makers; the EDAILY analysis frames Doosan as a beneficiary of the casting squeeze [12]. I could not find Doosan's third-party casting revenue (data gap).

### 6.2 Superalloys and nickel

- **ATI (NYSE:ATI):** June-quarter revenue $1.261 billion (+11%); adjusted EBITDA margin 22.6% (+440 bps); nickel-based and specialty alloys 51% of sales; aerospace and defence 68%; **specialty energy only 5%**; backlog $4.4 billion (+18%); 2026 guidance EPS $4.90–5.18 [44]. Valuation: $192.42; 2026E EPS $5.12 → **37.6×**; Strong Buy (8 of 9); mean target $259.89 [64][65]. A high-quality alloy maker, but gas turbines are a small end-market; aerospace drives the multiple.
- **Carpenter Technology (NYSE:CRS):** fiscal 2026 (to June) sales $3,124 million, operating income $702 million, Specialty Alloys Operations adjusted operating margin 37.8% in the fourth quarter; energy end-market sales $170.7 million (+12.8%) versus aerospace and defence $1,658 million; fiscal 2027 operating income guidance $850–880 million; fiscal 2029 target $1.2–1.3 billion from a brownfield expansion [45]. Valuation: $388.47; FY6/27E EPS $13.38 → **29.0×**; Strong Buy (6 of 8); mean target $625.88 [64][65]; 38% below the 52-week high. Energy is about 5% of revenue.
- **Haynes International** was acquired by Acerinox (BME:ACX) in 2024; Haynes 282 and similar alloys go into turbine combustors and casings. Acerinox is a stainless-steel company; the turbine alloy exposure is too small to drive it.
- **Nickel:** I could not retrieve a dated LME nickel price in this session (data gap). Superalloy makers pass nickel through surcharges; the alloy margin is in melting, remelting and conversion capacity, which is what the ATI and Carpenter margins reflect.

### 6.3 Coatings, repair and parts

**Chromalloy** (private) supplies coatings, repairs and PMA (parts-manufacturer-approval) replacement parts for industrial turbines (company pages, headline only) [89]. The repair market matters more after 2028, when the installed base of 2025–27 BTM turbines reaches its first hot-gas-path inspections. No listed pure play exists; GE Vernova's and Siemens Energy's service businesses capture most of it, and their service backlogs are the stable half of their valuations.

### 6.4 Generators, gearboxes and controls

Baker Hughes' Brush generators and gearboxes are paired with its NovaLT turbines in the Dynamis order [14]; Siemens Energy and GE Vernova build their own generators. ABB supplies controls for the VoltaGrid/Oracle fleet [28]. SemiAnalysis notes that islanded sites cannot borrow inertia or fault current from the grid, that batteries provide only 1.2–2× fault current versus 5–10× for synchronous machines, and that BESS "typically 50% of gas capacity" or synchronous condensers are required [54]. This is where engine plants have an advantage: dozens of synchronous generators are a large pool of inertia and fault current without extra equipment.

### 6.5 Heat-recovery steam generators, boilers and the steam-cycle alternative

- **Babcock & Wilcox (NYSE:BW):** $2.4 billion design-build contract with Base Electron (backed by Applied Digital) for 1.2 GW from **four 300 MW gas-fired boilers with Siemens Energy steam turbine generators**; "boilers are built every day" and steam turbines are available "within 12–15 months" against 3+ years for gas turbines [47][48]. June-quarter 2026: revenue $319.7 million (+130%), of which Base Electron $100.7 million; backlog **$2.6 billion** (from $488 million); bookings $151 million; adjusted EBITDA $21.8 million; 2026 EBITDA guidance $80–105 million; pipeline "exceeds $14.0 billion"; an additional 1 GW of Siemens Energy steam turbines secured; cash $308.6 million against $239.8 million of debt and $57.4 million of equity [47]. A separate agreement covers 20 steam turbines (headline only) [80]. Valuation: $5.70 (2 Oct 2026), 74% below the 52-week high of $22.03 [65]; 2027E EPS $0.45 → **12.7×**; 4 analysts, mean target $22 (stale; last updated before the fall) [64].
- The steam-cycle detour trades about 10 points of efficiency (a Rankine-cycle boiler plant runs at about 35–40% against 60%+ for a modern combined cycle) for time. It is viable only while gas turbines are unavailable; by 2029 it will look expensive to run (**my assessment**).
- Nooter/Eriksen and Vogt Power (HRSGs) and Cormetech (SCR catalysts) are private. SPX Technologies (NYSE:SPXC) makes cooling equipment but is not covered here.

### 6.6 Gas compression and fuel-gas systems

Every turbine site needs fuel-gas compression, filtration and conditioning; Parker-Hannifin's Stargate Abilene award (headline only) [73] is the type of order that shows up as "aerospace and industrial filtration" revenue and is not separately disclosed. Baker Hughes and Siemens Energy supply compressors for larger sites. Kodiak Gas Services has moved from contract compression into turbine-based power with its Baker Hughes framework [15]; it closed at $54.33 on 2 Oct 2026 [65].

---

## 7. EPC, O&M and construction labour

| Contractor | 2026 evidence | Listed? |
|---|---|---|
| Kiewit | EPC for Homer City (Pennsylvania): 4.5 GW, seven GE Vernova 7HA turbines, >$10 billion, first turbine delivery 2026, power targeted for 2027 at announcement [51]; Grid Status describes seven 7HA.02 units in combined cycle [53]; EPC for a 1,425 MW Georgia plant (headline only) [78]; partner in the NRG/GE Vernova 5 GW combined-cycle programme for 2029–32 [19] | Private |
| Bechtel | EPC award for a new Texas power plant (headline only) [79] | Private |
| Fluor (NYSE:FLR) | June-quarter 2026 revenue $4.33 billion; new awards $6.1 billion; backlog $26.9 billion (−4.7%); CEO: "We see power to be the best play for us in the whole data center ecosystem", expects "meaningful EPC awards in the first half of 2027" for gas-fired generation [50] | $49.90 (2 Oct 2026) [65] |
| Argan / Gemma Power Systems (NYSE:AGX) | Quarter to 31 Jul 2026: revenue $384.0 million (+61.5%), gross margin 19.3%, EPS $3.76; Power segment revenue $301 million (+53%) at 22% gross margin; backlog **$2.518 billion**; cash and investments $1.028 billion; building a fabrication facility for data-center vessels [49] | $383.83; market value $5.39 billion; FY1/27E EPS $13.27 → **28.9×**; Buy (3 Strong Buy, 1 Buy, 1 Hold, 1 Sell); mean target $570.50 (high $785, low $273) [64][65]; 52% below the 52-week high |
| Quanta (NYSE:PWR) | Transmission and substation EPC; data-center electrical; no gas-plant EPC data gathered here | $676.56 [65] |
| Primoris (NYSE:PRIM), Comfort Systems (NYSE:FIX), Sterling (NASDAQ:STRL) | Site work, mechanical and electrical for data centers; Sterling in site development; none gathered as gas-plant EPC | $79.08; $1,728.01; $533.42 [65] |
| Burns & McDonnell, Zachry, Black & Veatch | Engine-plant and substation EPC | Private |

Labour is the binding constraint for the combined-cycle wave: SemiAnalysis counts only about 10,200 boilermakers in the US and names boilermakers, pipe welders and millwrights as the critical shortages for gigawatt-scale builds [54]; Latitude Media's interviewees put off-grid build times at 36–48 months and realistic off-grid capacity at "a handful of gigawatts" by 2028 [57]. Combined with the Entergy/Meta timeline (groundbreaking December 2025, operation "late 2028" for about 1,500 MW across two plants [52]), the practical lesson is that a utility-scale combined cycle ordered in 2026 is a 2029–30 asset, whatever the turbine delivery date says.

---

## 8. Demand side: what is ordered, what is running, and who is buying

### 8.1 The macro numbers

| Source | Metric | Figure | Date |
|---|---|---|---|
| SemiAnalysis | Firm, binding BTM equipment orders tracked | **75 GW**; 20 GW booked in Q2 2026 alone | 10 Sep 2026 [54] |
| SemiAnalysis | US data-center IT load running islanded | **~3 GW by end-2026**, "multiple straight years of triple-digit growth" projected | 10 Sep 2026 [54] |
| SemiAnalysis | BTM share of new US data centers | "well over half" in 2028+; BTM equipment market "cross[es] 50 GW/year by 2029"; US data-center additions +21 GW in 2026 rising to +84 GW/yr in 2030 | 25 Jun 2026 [55] |
| SemiAnalysis | Grid headroom | Net new accredited capacity "barely 15 GW annually"; PJM 2027/28 shows a 6,517 MW capacity deficit against its 20% reserve target; grid headroom turns negative by 2027 | 25 Jun 2026 [55] |
| Cleanview | BTM projects / announced / operating | 59 projects; ~90 GW announced (25%+ of all planned US capacity; 92% announced since early 2025); **~2 GW operating** (2.2%); 1.2% under construction; 36% permitted; 2.8–3.2 GW online by end-2026 | mid-2026 [56] |
| Cleanview | Equipment share of permitted BTM | Caterpillar 33% (8.8+ GW, including Solar Turbines); Bloom 14% | mid-2026 [56] |
| Cleanview | Geography | Five states hold 83% of capacity; Texas leads; Ohio leads under-construction (736 MW, Meta and EdgeConneX, New Albany) | mid-2026 [56] |
| Heatmap | Williams BTM contracts | 6 GW by H1 2027; 18-month deployment | 9 Oct 2025 [58] |
| LBNL Queued Up | Interconnection queues at end-2025 | 1,312 GW generation + 749 GW storage active; median request-to-operation "over 5 years" for 2025 completions; 253 GW of gas in queue (+86% in 2025); 549 GW with agreements but not built; 75% of 2000–20 requests withdrawn | May 2026 [59] |
| Latitude Media (critics) | Realistic off-grid capacity by 2028 | "a handful of gigawatts", not 40 GW; builds take 36–48 months; firm gas needs 5–7 years for a new pipeline; power electronics are "80% of the difficulty" | 17 Jul 2026 [57] |

Reconciliation (**my assessment**): the 75 GW of binding orders and the 90 GW of announcements are consistent with the OEM books (GE Vernova says about 20% of its 100 GW under contract in April 2026 was data-center-tied [3]; Siemens Energy's 2025 intake was about 60% data-center-targeted [9]; INNIO's, Wärtsilä's and Caterpillar's growth is mostly data centers). The 3 GW operating is consistent with Cleanview's 2 GW. The 2027–29 gap between the two is the delivery schedule of this entire report. Latitude Media's critics and SemiAnalysis disagree about 2028 (a handful of GW versus 40 GW+); the OEM delivery dates — Doosan from May 2029, Mitsubishi 2028–30, Wärtsilä Texas operational late 2029, Microsoft Pecos first power 2028 — sit closer to the critics' timeline for turbine plants and closer to SemiAnalysis for engine plants that are already shipping.

### 8.2 The named deals, by buyer

| Buyer / site | Generation | Equipment | Status and dates | Source |
|---|---|---|---|---|
| **xAI**, Colossus 1 and 2 (Memphis, Tennessee; Southaven, Mississippi) | 1,498 MW operating per Cleanview; Colossus 2 "1.1+ GW" planned, 495 MW operating, 1,240.5 MW unit planned 2027 | Solar Turbines Titan 350 (35–38 MW), 7 installed by Sep 2025, ~30 planned; Solaris JV; 27 mobile turbines unpermitted Aug 2025–Mar 2026; 41 permanent turbines permitted 10 Mar 2026 | Operating; permit litigation (Earthjustice notice Feb 2026; NAACP/SELC suits) | [18][56][61][75] |
| **Oracle**, Texas (VoltaGrid) | 2.3 GW | 92 × 25 MW INNIO Jenbacher packages, ABB controls, Energy Transfer firm gas | Deliveries from Dec 2025 | [28][29] |
| **Oracle** (Bloom) | up to 2.8 GW; 1.2 GW contracted | Bloom SOFC | Deploying into 2027 | [38] |
| **Oracle**, Project Jupiter (New Mexico / Texas) | — | Turbine design abandoned mid-permitting; Green Chile pipeline delayed to Q1–Q2 2027; New Mexico blocked a pipeline | Permitting | [54][56] |
| **OpenAI / Crusoe**, Stargate Abilene, Texas | 368 MW onsite (phase 1) rising toward ~1 GW; campus 1.2 GW | 10 then 29 GE LM2500XPRESS; Parker-Hannifin fuel systems; potential 1,000 MW / 4,000 MWh battery | Two buildings operating Feb 2026 | [20][53][73] |
| **OpenAI**, Shackelford County, Texas | 1.4 GW IT | 500+ Jenbacher J624 (4.25 MW) | 2026–27 | [54] |
| **Crusoe**, other sites | 4.5 GW via Engine No. 1 / Chevron turbines (seven GE Vernova frames); 650 MW ProEnergy PE6000 (summer 2027); Goodnight campus 933 MW planned | GE Vernova 7HA; PE6000 | 2027+ | [21][22][55] |
| **Microsoft**, Pecos, Texas ("Project Kilby") | 2.67 GW gas for a 2 GW campus; "5 GW signed" overall per SemiAnalysis (2.7 GW with Joulent and Chevron; 2+ GW via Crusoe leases) | GE Vernova turbines, SCR emissions control, Chevron 20-year gas supply, Engine No. 1 | First power 2028; behind the meter initially, grid connection possible later | [54][60] |
| **Microsoft / Nebius**, New Jersey | 400 MW | — | Air permit difficulties | [56] |
| **Meta**, Hyperion (Richland Parish, Louisiana) | 2,262 MW combined cycle + 1,500 MW solar/storage; Entergy's two plants ~1,500 MW broke ground Dec 2025, operation late 2028; a third plant approved; $1.61 billion of transmission | Utility-owned combined cycle (turbine maker not disclosed in sources read) | Construction | [52][53] |
| **Meta**, Socrates (Ohio) | 750 MW ($2 billion, upsized from 400 MW/$1.6 billion) | Williams BTM | Construction | [58] |
| **Alphabet/Google**, Armstrong County, Texas | 930 MW aero + 900 MW Bloom + 1 GW Mitsubishi J-class | mixed | Announced 2026 | [54] |
| **Amazon** | Comanche Peak 1,200 MW co-located load (nuclear); Generac backup generators $2.4 billion 2027–28, up to $8 billion | Diesel backup | Sep 2026 | [35][55] |
| **Homer City Redevelopment** (Pennsylvania) | 4.4–4.5 GW | 7 × GE Vernova 7HA.02 combined cycle; Kiewit EPC; >$10 billion | Site work; first turbine 2026 | [51][53] |
| **Applied Digital / Base Electron** | 1.2 GW | B&W boilers + Siemens Energy steam turbines, $2.4 billion | Manufacturing ahead of schedule | [47][48] |
| **Pacifico Energy**, Texas | 8 × AE64.3A (Ansaldo) | Small F-class | First deliveries 2027 | [13] |
| **CyrusOne** (Thad Hill 400 MW; Freestone 760 MW with Constellation) | co-location | — | Planned | [55] |
| **Dynamis / Kodiak** customers | 1.3 GW NovaLT16; ~1 GW rising to 1.8 GW | Baker Hughes | 2026–30 | [14][15] |

What stands out: the hyperscalers that were slowest to accept onsite gas (Microsoft, Alphabet) signed the largest frame-turbine plants in 2026, with 2028 first power. The developers who moved first (xAI, Crusoe, Oracle) used aeroderivatives and engines and are operating. The "turbines to engines" shift (§10) is a shift in who is buying as much as in what is bought.

### 8.3 Cost per MWh: turbines versus engines versus fuel cells

No source read for this report publishes a like-for-like levelised cost; the following is **my estimate**, built from the dated inputs cited:

| Technology | Capital cost, $/kW (utility reference, 2023 $) | Electrical efficiency | Lead time 2026 | Permit path | Rough all-in cost of energy at $4/MMBtu gas, 85% load factor |
|---|---|---|---|---|---|
| Aeroderivative, simple cycle | 1,606 [29] | ~40% | GE slots past 2030 [54]; ProEnergy rebuilt units 2027 [22] | Combustion turbine NSPS; SCR needed in non-attainment | ~$75–90/MWh |
| H-class frame, simple cycle | 836 [29] | ~42% | 2029–30 [10][12] | Major source; Title V | ~$60–70/MWh |
| H-class combined cycle | 868–921 [29] | ~63% [11] | 2029–31 incl. EPC [52] | Major source | ~$50–60/MWh |
| Reciprocating engines, 2–20 MW | not in EIA table; SemiAnalysis turnkey islanded "$20M/MW" all scope [54] | 45–50% [32] | 12–24 months (Oracle deliveries from Dec 2025 on an Oct 2025 announcement [28]) | Minor-source possible below 250 t/yr NOx [54] | ~$70–90/MWh |
| Solid-oxide fuel cell | not disclosed | 50–60% | 55–90 days install [38] | No combustion permit [54] | ~$90–120/MWh including stack replacement and backup supercapacitors |
| Combined cycle + 95% carbon capture | 2,365 [29] | ~55% | not relevant before 2030 | — | >$120/MWh |

The decisive input is not any of these numbers but the SemiAnalysis argument that inference revenue "can yield $100B per GW per year" so that accepting "2x more money or 30% lower efficiency for faster speed of deployment becomes a no-brainer" [54]. As long as that holds, buyers pay for the earliest MW, and the cost ranking above is secondary. If it stops holding (GPU utilisation falls, or token prices collapse), the ranking reasserts itself immediately and the aeroderivative and fuel-cell fleets become the first stranded assets (**my assessment**).

---

## 9. Permits, emissions and the environmental pushback

- **Federal New Source Performance Standards for turbines (Federal Register, 15 Jan 2026, 91 FR 1910):** sources are categorised by size, utilisation, efficiency and fuel; large, high-utilisation turbines must use combustion controls plus selective catalytic reduction (SCR) for NOx; certain "low use" turbines are exempt from Title V major-source permitting and move to state non-major programmes; small and medium turbines in "temporary" service (below 850 MMBtu/h for less than 24 months) get streamlined treatment; the EPA "signaled" that trailer-mounted turbines might be treated as nonroad engines under Title II, which would require a separate rulemaking [62][82]. The practical effect is to make the "temporary" bridge-power model legal for two years and to make utilisation, not nameplate, the trigger — which pushes operators toward many small units run below thresholds.
- **Acid Rain Program:** EPA guidance of 16 Jul 2026 says Title IV does not apply to islanded plants "not connected in any way to the larger electricity grid", using a 500 MW gas plant serving an adjacent data center as its example; New Source Review, NSPS, hazardous-pollutant standards and state permits still apply [63].
- **Litigation:** notice of intent to sue over West Side San Antonio campuses (22 Jul 2026), arguing that BTM gas plants and diesel generators should be aggregated as one major source rather than permitted as several minor ones [63]; Earthjustice notice over xAI Southaven (13 Feb 2026, headline only) [75]; residents cited constant noise within half a mile and a five-day hearing notice at the Mississippi permit hearing [61].
- **State permits:** Mississippi's board approved 41 permanent turbines for xAI on 10 Mar 2026 after 27 mobile units had run since August 2025 under an exemption [61]. New Mexico blocked a pipeline for Oracle's Project Jupiter; Microsoft/Nebius is "struggling with air permit in New Jersey" [56]. SemiAnalysis describes state-dependent NOx thresholds (250 tons a year triggers federal review) as the reason fuel cells "offer lighter paths" [54].
- **Emissions engineering:** simple-cycle turbines emit about 1,400 lb CO₂/MWh versus 800 lb for combined cycle [58]; turbines stay within NOx permits only above about 50% load [54]; SCR is standard on new frame plants (Microsoft Pecos [60]); engine plants are permitted as "ultra-low-emissions" with "near-zero criteria air emissions" claims (VoltaGrid) [28] that rely on SCR and oxidation catalysts (**my inference**; the article does not detail the controls).
- **Reading for investors:** federal policy is removing friction; local and judicial friction is rising. The equipment that is least exposed is the equipment that never needed a major-source permit: engines in small blocks and fuel cells. That is a second reason, after lead times, for the shift described next.

---

## 10. Engineering transitions: what changes, when, who gains, who loses

| # | Transition | Timing | Evidence | Gains | Loses |
|---|---|---|---|---|---|
| 1 | **Frame turbines → reciprocating engines for onsite prime power** | 2026–28 | Oracle/VoltaGrid 92 × 25 MW [28][29]; OpenAI Shackelford 500+ J624 [54]; Wärtsilä 2.4 GW US [32]; INNIO backlog +279% [26]; Caterpillar restarts 10 MW line, large-engine backlog >3.5× [16][17]; "recips increasingly favored over turbines" [54] | INNIO, Caterpillar, Wärtsilä, Cummins, Rolls-Royce Power Systems; packagers VoltaGrid, Rehlko, ProEnergy | Aeroderivative lessors' pricing power after 2027; EPCs built around turbine erection |
| 2 | **Bridge power becomes permanent** | 2026–30 | Microsoft Pecos "behind the meter initially" with a 20-year gas contract [60]; Solaris 2.3 GW long-term contracts [25]; xAI buys APR [24]; Williams 6 GW [58] | "BTM utilities" (Solaris, Williams, VoltaGrid, Kodiak); gas midstream | Utilities that expected the load; the thesis that BTM is a two-year bridge |
| 3 | **Simple cycle onsite, combined cycle at the utility** | 2026 onward | Aero and engine plants at Abilene, Southaven, Shackelford [18][20][54]; CCGT at Hyperion (2,262 MW), Homer City (7 × 7HA.02), NRG/GEV/Kiewit 5 GW 2029–32 [19][52][53] | GE Vernova and Mitsubishi on the utility side; Siemens Energy steam turbines (also via B&W) | Efficiency: 1,400 vs 800 lb CO₂/MWh [58]; this is the environmental attack surface |
| 4 | **Steam-cycle detour** | 2026–28 | B&W/Siemens Energy 1.2 GW, steam turbines in 12–15 months [47][48] | B&W, Siemens Energy steam | Becomes uneconomic once gas turbines are available again (my assessment) |
| 5 | **Fuel cells as the permit-light option** | 2025–28 | Bloom 3.8 GW booked vs 0.03 GW competitors; Oracle Jupiter dropped turbines [54]; Bloom-Oracle 2.8 GW [38] | Bloom; supercapacitor and BESS suppliers (3:2 ratio) [54] | Turbine OEMs in non-attainment counties |
| 6 | **In-house casting (SpaceX Bastrop)** | Earliest 2030 | 336 ha acquired; "limiting factor ... is casting the blades" [46]; analysts: no mass production before 2030 [12] | xAI's own supply; Howmet in the meantime (capex rising [43]) | Nobody before 2030; Howmet/PCC pricing after 2030 if it works |
| 7 | **Hydrogen readiness** | marketing only through 2030 | Homer City "hydrogen-enabled" GE units [51]; INNIO 3 MW 100% H₂ demo [26]; no onsite plant surveyed has hydrogen supply | Claim value for permits | Nothing is lost by ignoring it (my assessment) |
| 8 | **Carbon capture claims** | not before 2030 | EIA: CC + 95% capture $2,365/kW vs $836 simple cycle [29]; no BTM deal surveyed includes capture | — | The "clean gas" narrative |
| 9 | **Grid arrives (2029–31): onsite plants re-role** | 2029–31 | LBNL median >5 years request-to-operation [59]; SemiAnalysis "interconnection timelines routinely slip toward 2030" [55]; Microsoft "may eventually connect to the grid" [60] | Owners of redeployable engines and aeros; grid services revenue | Fixed frame turbines sized for islanded operation; merchant risk in ERCOT |
| 10 | **Turbine capacity doubling lands (2028–30)** | 2028–31 | 80–85 GW/yr of combined capacity vs ~54 GW now and a ~229 GW book (**my estimate**, §2.3); reservations are 90% of GE's new signings [1] | Buyers (prices fall); Mitsubishi's "selective" utility book is the most defensive [8] | Whichever OEM has the most unconverted reservations in 2029; casting suppliers' pricing after 2030 |
| 11 | **Power electronics and inertia become the design problem** | 2026–28 | 10–20 MW jitter several times a second; BESS ~50% of gas capacity or synchronous condensers; batteries give 1.2–2× fault current vs 5–10× from synchronous machines [54] | Engine plants (many synchronous machines); BESS and grid-forming inverter makers; ABB | Single-large-turbine islanded designs |
| 12 | **Labour shifts from boilermakers to electricians** | 2026–29 | 10,200 boilermakers in the US [54]; engines "compete with datacenters for electrician labor" [54] | Electrical contractors (covered in the facility report) | Combined-cycle EPC schedules |

The transitions that engineers accept and the market has not fully priced (**my assessment**): #1 (INNIO at 25× 2027E after a 53% fall, Wärtsilä rated Hold), #6 (Howmet's gas-turbine line growing at 38% is a footnote in an aerospace valuation), #11 (no listed pure play, but it adds BESS demand on top of the storage report's numbers). The transitions that the market prices as if they were certain, but that the engineering says are slow: #2's permanence for frame plants (a 2029 frame delivery arrives when the grid does), #7 and #8 (hydrogen and capture).

---

## 11. What is priced and what is not

| Narrative | Evidence for | Evidence against | Verdict (my assessment) |
|---|---|---|---|
| "Gas turbines are sold out to 2030; GE Vernova owns the bottleneck" | 116 GW under contract; 20 GW/yr → 30 GW/yr; pricing +10–20 points; $600/kW path [1][3][4] | 90% of new signings are reservations [1]; 29 firm US large-turbine orders in H1 2026 [11]; GEV at 65× 2026E, mean target $1,230 only 24% above price [64] | **Priced.** The bottleneck is real; the stock already carries 2028 margins |
| "Siemens Energy is the cheaper turbine play" | 69 GW backlog, 3+ year lead times, Gas Services margin 14–16%, group FCF ~€8bn [6][7] | Only 1 firm US large unit in H1 2026 [11]; grid and wind are the bigger earnings drivers | **Half priced.** 32× FY9/26E, ~24× forward; 24% below high |
| "Engines are a stopgap" | Lower efficiency than CCGT; smaller units | Oracle 2.3 GW, OpenAI 1.4 GW, Wärtsilä 2.4 GW US, Caterpillar orders to 2030 [16][28][32][54]; delivery 12–24 months vs 3+ years | **Not priced.** INNIO −53% from high at 25× 2027E; Wärtsilä Hold; Cummins 18× |
| "Bloom is the fuel-cell winner" | 3.8 GW vs 0.03 GW; Oracle 2.8 GW; Fremont 2 GW [38][54] | 73% one customer; 59× 2027E; price above mean target; scandium supply questioned [37][39][64] | **Over-priced for the risk.** Right company, wrong multiple |
| "Castings are the real limit" | Musk's foundry; Howmet IGT +38%, capex up again in 2027 [43][46] | Howmet's IGT line is a minority of engine revenue; aerospace sets the multiple | **Under-appreciated.** Howmet is 25% off its high at 36× 2027E despite the only pure exposure |
| "Behind-the-meter is a fantasy / only a handful of GW by 2028" | 36–48 month builds; 10,200 boilermakers; firm gas 5–7 years [54][57] | 75 GW binding orders; 3 GW operating end-2026; engine plants shipping [54][56] | **Both true at different sizes.** Engine and aero BTM is real now; frame BTM is a 2029 story |
| "Hydrogen-ready and carbon capture make gas acceptable" | OEM marketing; "hydrogen-enabled" units at Homer City [51] | No hydrogen supply; capture $2,365/kW [29]; no deal surveyed includes either | **Narrative runs ahead of engineering.** Ignore for valuation |
| "Steam boilers are the workaround" | B&W 1.2 GW, backlog $2.6bn, steam turbines in 12–15 months [47][48] | $240m debt vs $57m equity; share price −74% from high [47][65] | **Niche, levered, cheap for a reason** |
| "The turbine cycle will end in an overbuild" | 80–85 GW/yr capacity vs 30–40 GW historical market (**my estimate**); reservation-heavy book | Book covers 2029–30; utility CCGT programmes (NRG 5 GW; Duke 11 × 7HA) could fill 2030+ [19] | **Dated risk: 2030–31.** Not in 2026–27 estimates; watch reservation conversion |
| "Onsite plants become stranded when the grid arrives" | LBNL median >5 years; Microsoft grid option [59][60] | Engines and aeros are redeployable; "BTM utilities" sign long tenors [25] | **Partly priced in lessors (SEI 56× 2026E, 30× NTM) — not in OEMs** |

---

## 12. Ranked shortlist (12 listed companies)

All prices are 2 October 2026 closes [65]; market values, consensus estimates, ratings and targets are from stockanalysis.com retrieved 2–3 October 2026 [64] unless marked. Forward P/E is my arithmetic. "Thesis-breaker" means the single observation that would make me drop the name.

### 12.1 Siemens Energy (XETRA:ENR; OTC SMEGF)

- **Products in focus:** SGT6-9000HL and SGT5-9000HL heavy-duty turbines, SGT-800 (about 60 MW) industrial turbines, steam turbine generators (including the Babcock & Wilcox data-center packages), generators and the Gas Services long-term service book.
- **Why the product matters:** second-largest heavy-duty fleet in the West; the SGT-800 is the medium-size machine that fits a 300–600 MW onsite block with redundancy; the steam turbines are the only large rotating equipment available in 12–15 months [47][48].
- **Why this company:** 69 GW gas-turbine backlog, 15 GW ordered against 6 GW shipped in the June quarter, lead times "3+ years" [7]; group backlog €162 billion, book-to-bill 1.57, record quarterly orders €17.9 billion, profit before special items €1,623 million, FY2026 free cash flow about €8 billion [6]; the earliest large-unit capacity response (35 → 50 units by 2027) [7]; and the cheapest of the four heavy-duty makers on forward earnings.
- **Dated evidence:** Q3 FY2026 release 5 Aug 2026 [6]; Utility Dive 10 Aug 2026 [7]; B&W steam-turbine agreements May–Aug 2026 [47][48].
- **Risks and thesis-breakers:** only one firm large US turbine order in H1 2026 [11] — if that persists through FY2027, the US data-center share is going to GE, Mitsubishi and Doosan; grid (transformers, HVDC) and wind drive the group's earnings more than gas; Siemens Gamesa break-even is still a 2026 promise [6]. Thesis-breaker: a quarter in which gas orders fall below shipments.
- **Catalysts:** FY2026 results and FY2027 guidance (mid-November 2026, expected); large-unit capacity to 50 units (2027) [7]; FY2027 Gas Services margin above 16%.
- **Valuation:** €145.42; market value about €124 billion ≈ $140 billion (**my estimate**); FY9/26E EPS €4.47 → **32.5×**; stockanalysis forward P/E 24.0 (implied next-twelve-month EPS about €5.95 → **24.4×** at the 2 Oct price, **my estimate**); consensus Buy (14 Strong Buy, 5 Buy, 4 Hold, 1 Sell, 1 Strong Sell; 25 analysts); mean target €196.32, high €260, low €100 [64]. 24% below the 52-week high of €191.66 [65].

### 12.2 INNIO Group (NASDAQ:INIO)

- **Products in focus:** Jenbacher J620 and J624 (about 3.3–4.5 MW) and Type 6 high-speed gas engines in 25 MW containerised blocks; Waukesha engines; long-term service.
- **Why the product matters:** the engine inside the two largest named onsite plants (Oracle/VoltaGrid 2.3 GW; OpenAI Shackelford 500+ J624) [28][54]; 12–24 month lead times; small blocks for redundancy, load-following and minor-source permits.
- **Why this company:** equipment backlog $6.6 billion (+279%), Q2 order intake $2.3 billion (+316%), a 1.1 GW single order, Rehlko 1.25 GW capacity agreement, 2026 guidance raised to $3.8–3.9 billion revenue and $720–740 million adjusted EBITDA [26].
- **Dated evidence:** Q2 2026 results 28 Jul 2026 [26]; IPO 4 Jun 2026 at $27 [27]; VoltaGrid/Oracle 15 Oct 2025 [28]; SemiAnalysis 10 Sep 2026 [54].
- **Risks and thesis-breakers:** customer concentration (the 1.1 GW and Shackelford buyers are unnamed in company disclosure); equipment-heavy mix dilutes margins (EBITDA +20% on revenue +42%) [26]; a private-equity seller (Advent) with a large residual stake; competition from Caterpillar's restarted 10 MW line and Wärtsilä's 2.2× capacity [16][31]. Thesis-breaker: a quarter of falling equipment orders or a cancellation of the 1.1 GW order.
- **Catalysts:** Q3 results (November 2026, expected); first lock-up expiry after the June IPO (around early December 2026, **my estimate** of a standard 180-day lock-up; unverified); Shackelford and VoltaGrid site commissioning in 2027.
- **Valuation:** $19.99; market value $15.0 billion; 2026E EPS $0.37 → **54×**; 2027E $0.79 → **25.3×**; consensus Buy (4 Strong Buy, 4 Buy, 2 Hold; 10 analysts); mean target $38.20, high $47, low $29 [64]. 53% below the $42.95 high and 26% below the IPO price [65].

### 12.3 Howmet Aerospace (NYSE:HWM)

- **Products in focus:** investment-cast single-crystal and directionally solidified turbine blades and vanes, structural castings, and fasteners; the Engine Products segment.
- **Why the product matters:** "The limiting factor for gas turbine production is casting the blades" [46]. Every added gigawatt of turbine capacity at GE Vernova, Siemens Energy or Mitsubishi needs a matching increment of casting capacity; the only new entrant (SpaceX) is a 2030 story at the earliest [12].
- **Why this company:** gas-turbine revenue +38% year on year; Engine Products margin 37.7%; "customers already revisiting and adding to their demand outlooks"; capex rising again in 2027 "to support future organic growth expectations in both the aerospace and gas turbines markets" [43].
- **Dated evidence:** Q2 2026 results 6 Aug 2026 [43]; SpaceX Bastrop foundry 7 Sep 2026 [46].
- **Risks and thesis-breakers:** aerospace (commercial and defence) is the larger part of revenue and sets the multiple; a Boeing or Airbus rate cut would dominate the stock regardless of turbines; the gas-turbine line is not separately disclosed in dollars. Thesis-breaker: a quarter where IGT growth falls below 20% while capex is still rising.
- **Catalysts:** Q3 results (early November 2026, expected); 2027 capex guidance (February 2027, expected); GE Vernova and Siemens capacity milestones in 2027–28 pull casting volumes.
- **Valuation:** $231.27; market value $92.2 billion; 2026E EPS $5.34 → **43.3×**; 2027E $6.46 → **35.8×**; Strong Buy (16 Strong Buy, 4 Buy, 3 Hold; 23 analysts); mean target $334.36, high $375, low $255 [64]. 25% below the 52-week high of $310 [65].

### 12.4 Mitsubishi Heavy Industries (TSE:7011; OTC MHVYF)

- **Products in focus:** M501JAC and M701JAC heavy-duty turbines (the J-class), steam turbines, combined-cycle islands; Takasago (Japan) and Savannah (Georgia) manufacturing.
- **Why the product matters:** the J-class has the highest combined-cycle efficiency in commercial service (above 63% class) and is being specified in the 2028–30 frame wave (Google Armstrong County 1 GW [54]).
- **Why this company:** backlog 35 GW from 23 GW; 10 large-frame orders in a quarter; "selective in the projects we contract"; demand "broadly in line with, or slightly above" expectations [8]; capacity doubling versus 2024 within about two years of September 2025 [9]; the only one of the four heavy-duty makers whose shares were down on the year (price ¥3,813 against a ¥5,208 high) [65].
- **Dated evidence:** Utility Dive 13 Aug 2026 [8]; POWER 2 Sep 2025 [9]; Korean count of 8 US large-unit orders in H1 2026 [11].
- **Risks and thesis-breakers:** a conglomerate (aerospace, defence, nuclear, shipbuilding); yen moves; "selectivity" can mean lost share to Doosan and GE in merchant data-center plants; delivery dates of 2028–30 mean revenue lags orders by two years. Thesis-breaker: a cut to the capacity-doubling plan or a reported cancellation.
- **Catalysts:** Q2 FY2026 results (early November 2026, expected); FY2026 (March 2027) guidance revisions; Savannah expansion milestones.
- **Valuation:** ¥3,813; market value about ¥12.8 trillion ≈ $81 billion (**my estimate**, rescaled); stockanalysis forward P/E 30.8 → **~30.9×** at the 2 Oct price (**my estimate**; consensus EPS shown as "n/a"); Buy (10 Strong Buy, 3 Buy, 1 Hold, 1 Sell; 15 analysts); mean target ¥5,394, high ¥6,400, low ¥3,000 [64]. 27% below the 52-week high [65].

### 12.5 Baker Hughes (NASDAQ:BKR)

- **Products in focus:** NovaLT16 (about 17 MW) and NovaLT series industrial turbines, LM aeroderivative packages, Frame 5, Brush generators and gearboxes, gas compression and fuel-gas systems; Industrial & Energy Technology segment.
- **Why the product matters:** the 15–20 MW NovaLT is the unit size that fits a "hypermobile" trailer package and a minor-source permit; the Brush generator pairing solves the generator-matching bottleneck [14][29].
- **Why this company:** 76 NovaLT16 (~1.3 GW) for Dynamis in one order [14]; a 1 GW rolling framework with Kodiak expandable to 1.8 GW by 2030 [15]; compression exposure to the gas laterals every site needs; a diversified cash generator that is the cheapest name in this report on 2027 earnings except Cummins.
- **Dated evidence:** Dynamis release 29 Jul 2026 [14]; Kodiak release 8 Jul 2026 [15]; Power Engineering on 1.8 GW BTM (headline only) [83].
- **Risks and thesis-breakers:** oilfield services (about half of revenue) tracks oil prices, not data centers; LNG equipment is the bigger IET driver; the data-center turbine orders are a few hundred million dollars each against a $27–30 billion revenue base. Thesis-breaker: an oil-price shock that overwhelms the power narrative.
- **Catalysts:** Q3 results (late October 2026, expected); IET order disclosure of further data-center awards; Kodiak call-offs.
- **Valuation:** $56.00; market value $55.6 billion; 2026E EPS $2.60 → **21.5×**; 2027E $3.03 → **18.5×**; Buy (14 Strong Buy, 5 Buy, 4 Hold, 1 Strong Sell; 24 analysts); mean target $72.04, high $85, low $51 [64]. 20% below the 52-week high [65].

### 12.6 Cummins (NYSE:CMI)

- **Products in focus:** Centum series and QSK95 high-horsepower generator sets (diesel and gas), power systems controls, and the data-center battery storage award (headline only) [70].
- **Why the product matters:** every onsite plant and every grid-connected data center still buys backup generators; a 1 GW campus needs on the order of 1.2 GW of standby capacity (N+1), and large diesel gensets are in global shortfall [35].
- **Why this company:** Power Systems sales +19% with EBITDA margin 24.5%; 2026 guidance raised twice; "disciplined capacity and product investments" in power generation [30]; the lowest multiple in this report.
- **Dated evidence:** Q2 2026 results 4 Aug 2026 [30].
- **Risks and thesis-breakers:** the engine business (trucks) is cyclical and larger than Power Systems; data-center generators are a few billion dollars of a $35 billion company; Generac's Amazon agreement shows hyperscalers will qualify new suppliers [35]. Thesis-breaker: a North American truck downturn that masks power growth.
- **Catalysts:** Q3 results (early November 2026, expected); capacity announcements for high-horsepower engines.
- **Valuation:** $528.32; market value $72.7 billion; 2026E EPS $29.71 → **17.8×**; Buy (11 Strong Buy, 4 Buy, 8 Hold; 23 analysts); mean target $745.96, high $894, low $530 [64]. 28% below the 52-week high [65].

### 12.7 Doosan Enerbility (KRX:034020)

- **Products in focus:** 380 MW class H-class gas turbines (DGT6-300H family), castings and forgings for turbines and nuclear, steam turbines, Doosan Turbomachinery Services (Houston).
- **Why the product matters:** the only new entrant to the heavy-duty club in a generation, and a captive caster of hot-section parts; a fifth source when the other four are sold out to 2030.
- **Why this company:** 7 US large-unit firm orders in H1 2026, more than Siemens Energy (1) and close to Mitsubishi (8) [11]; 24 units cumulative, 12 for US data centers, deliveries from May 2029 [10][12]; backlog ₩26.35 trillion (+60.4%); capacity 8 → 12 units a year by 2028 [11]; Korean domestic demand revised up 27 GW [12]; nuclear and small-modular-reactor forgings as a second leg.
- **Dated evidence:** Turbomachinery International 9 Mar 2026 [10]; Herald 25 Sep 2026 [11]; EDAILY 5 Sep 2026 [12].
- **Risks and thesis-breakers:** the stock already carries the story at about 100× forward earnings; margins on the first US units are unproven (17,000 demonstration hours [10]); Korean retail flows are volatile (shares −42% from the high) [65]. Thesis-breaker: a US customer cancelling or a slip in the 2029 delivery schedule.
- **Catalysts:** Q3 results (late October 2026, expected); further US unit orders in Q4 2026; Korean power-plan (electricity basic plan) awards.
- **Valuation:** ₩81,100; market value about ₩51.8 trillion ≈ $38.6 billion (**my estimate**, rescaled from ₩54.26 trillion at ₩84,900); 2026E EPS ₩584 → **139×**; stockanalysis forward P/E 101.9 at the stale price → **~97×** at 2 Oct (**my estimate**); Strong Buy (12 Strong Buy, 9 Buy; 21 analysts); mean target ₩125,361, high ₩177,000, low ₩100,000 [64]. 42% below the 52-week high [65].

### 12.8 Caterpillar (NYSE:CAT)

- **Products in focus:** large reciprocating gas and diesel engines (G3520, CG260, the restarted 10 MW medium-speed platform), Solar Turbines Titan 350 and Taurus packages; Power & Energy segment.
- **Why the product matters:** 33% of permitted US BTM capacity is Caterpillar equipment [56]; Titan 350 powers Colossus 2 [18]; the 10 MW engine restart adds 1.5 GW of capacity from the fourth quarter of 2026 [16].
- **Why this company:** power generation retail sales +72%; backlog $72 billion with Power & Energy orders running through 2030; segment profit +30% [16]; tripling large-engine capacity versus 2024 [17].
- **Dated evidence:** Utility Dive 11 Aug 2026 [16]; Manufacturing Dive 1 May 2026 [17]; Cleanview mid-2026 [56].
- **Risks and thesis-breakers:** $2.2 billion of 2026 tariff costs [16]; construction and mining are two-thirds of sales; 31× earnings for a cyclical. Thesis-breaker: Power & Energy orders turning down while the backlog is still being delivered.
- **Catalysts:** Q3 results (late October 2026, expected); first 10 MW engine shipments (Q4 2026) [16]; 2027–29 capex plan detail [17].
- **Valuation:** $845.42; market value $388.6 billion; 2026E EPS $27.19 → **31.1×**; Buy (14 Strong Buy, 1 Buy, 11 Hold, 1 Sell, 1 Strong Sell; 28 analysts); mean target $975.61, high $1,225, low $575 [64]. 21% below the 52-week high [65].

### 12.9 Wärtsilä (HEL:WRT1V; OTC WRTBY)

- **Products in focus:** 34SG and 50SG medium-speed gas engines (10–20 MW), engine power plants, energy storage integration, service.
- **Why the product matters:** the medium-speed engine is the 790 MW Texas plant (42 × 50SG) and the 2.4 GW of US data-center orders [32]; about 50% efficiency and full output above 100°F are the attributes Texas sites need.
- **Why this company:** record order intake €2.8 billion (+33%), Energy orders a record €1.7 billion, order book €9 billion, comparable margin 14%, capacity 2.2× by 2029, "good opportunities for price realization in all segments" [31].
- **Dated evidence:** Q2 2026 call 21 Jul 2026 [31]; Texas order 23 Apr 2026 [32].
- **Risks and thesis-breakers:** marine is the larger segment; a 2.2× capacity expansion into a 2029 delivery window is exactly the overbuild timing risk; the Texas order delivers only in 2028 [32]. Thesis-breaker: Energy orders falling below €1 billion a quarter.
- **Catalysts:** Q3 results (late October 2026, expected); further US engine-plant awards; 2027 capacity step-ups.
- **Valuation:** €29.35; market value about €17.3 billion (**my estimate**); forward P/E about **24.5×** (**my estimate** from stockanalysis forward 24.3); consensus **Hold** (17 analysts); mean target €32.94 [64]. 28% below the 52-week high [65]. The Hold rating on a company with record orders is the reason it is on the list.

### 12.10 Argan (NYSE:AGX)

- **Products in focus:** Gemma Power Systems' EPC of simple-cycle and combined-cycle gas plants; Atlantic Projects (UK/Ireland); The Roberts Company industrial fabrication (data-center vessels).
- **Why the product matters:** the only listed US contractor whose core business is building gas-fired power plants; the EPC slot is a bottleneck in its own right (Fluor expects awards only from H1 2027 [50]).
- **Why this company:** revenue +61.5%, Power segment +53% at 22% gross margin, backlog $2.518 billion, net cash and investments $1.028 billion against a $5.39 billion market value [49][64].
- **Dated evidence:** Q2 FY2027 results 2 Sep 2026 [49].
- **Risks and thesis-breakers:** lumpy, few projects at a time; fixed-price risk on labour (the boilermaker shortage [54]); the shares have halved from the high, which says the market already fears the margin peak ("power boom comes with a margin catch", headline only). Thesis-breaker: backlog falling two quarters in a row.
- **Catalysts:** Q3 FY2027 results (December 2026, expected); new EPC awards for 2027–29 plants.
- **Valuation:** $383.83; market value $5.39 billion; FY1/27E EPS $13.27 → **28.9×**; Buy (3 Strong Buy, 1 Buy, 1 Hold, 1 Sell; 6 analysts); mean target $570.50, high $785, low $273 [64]. 52% below the 52-week high of $805.75 [65].

### 12.11 GE Vernova (NYSE:GEV)

- **Products in focus:** 7HA.02/7HA.03 and 9HA heavy-duty turbines, LM2500XPRESS and LM6000 aeroderivatives, TM2500 mobile units, generators, Gas Power services.
- **Why the product matters:** the largest installed fleet and the largest new-build book; the 7HA is the machine in Homer City (7 units), Microsoft Pecos, Crusoe's 4.5 GW and the NRG 5 GW programme [19][21][51][60].
- **Why this company:** 116 GW under contract, 20 GW/yr rising to 30 GW/yr, pricing +10–20 points, Power margin 18.8%, 2026 free cash flow $11.5–12.5 billion, $13.1 billion of cash [1]; multi-year hyperscaler volume agreements "potentially extending to 2035" [5].
- **Dated evidence:** Q2 release 22 Jul 2026 [1]; Power Engineering 23 Apr 2026 [3]; investor update 9 Dec 2025 [5].
- **Risks and thesis-breakers:** 90% of new signings are reservations [1]; wind loses about $400 million of EBITDA in 2026 [1]; the 2026 EPS includes a large Prolec remeasurement gain; valuation already discounts 2028 margins. Thesis-breaker: disclosure of reservation cancellations or a quarter of net backlog decline.
- **Catalysts:** Q3 results (late October 2026, expected); December 2026 investor update with the "at least 125 GW" check [1]; a disclosed hyperscaler volume agreement.
- **Valuation:** $988.70; market value $263.3 billion; 2026E EPS $15.17 → **65.2×**; stockanalysis forward P/E 47.3; Buy (24 Strong Buy, 6 Buy, 7 Hold; 37 analysts); mean target $1,230.34, high $1,450, low $940; one Sell at $470 (GLJ Research) [64]. 17% below the 52-week high of $1,195.94 [65]. Ranked eleventh because the bottleneck is fully priced, not because the business is weak.

### 12.12 Solaris Energy Infrastructure (NYSE:SEI)

- **Products in focus:** owned and leased turbine fleets (Solar Turbines and others) under long-term power contracts; the 50.1%-owned Colossus 2 joint venture with xAI.
- **Why the product matters:** the "BTM utility" model — own the slot, own the fleet, sell power under tenor — is where the 46% secondary-market premium accrues [54].
- **Why this company:** 950 MW earning, ~2.3 GW contracted, 800 MW of uncontracted capacity with near-term delivery, Power Solutions EBITDA $96 million in a quarter, $1.4 billion of liquidity, customers "seeking more capacity and scope and longer tenor" [25].
- **Dated evidence:** Q2 2026 call 6 Aug 2026 [25]; GEM Colossus 2 page updated 3 Oct 2026 [18].
- **Risks and thesis-breakers:** one customer group (xAI) dominates; $1.3 billion of new unsecured notes and $492 million of quarterly capex [25]; the fleet's value falls when turbines become available again in 2029–30; permit litigation at Southaven [61][75]. Thesis-breaker: an xAI contract renegotiation or a loss of the uncontracted 800 MW to engines.
- **Catalysts:** Q3 results (November 2026, expected; guidance $90–105 million EBITDA) and Q4 ($100–120 million) [25]; contracting of the 800 MW.
- **Valuation:** $74.93; market value $5.74 billion; 2026E EPS $1.34 → **55.9×**; stockanalysis forward P/E 30.2; Strong Buy (9 Strong Buy, 5 Buy; 14 analysts); mean target $96.91, high $120, low $73 [64]. 13% below the 52-week high [65].

---

## 13. Also considered and rejected

1. **Bloom Energy (NYSE:BE)** — right company, wrong price: 59× 2027E, trading above the $282.82 mean target, 73% of quarterly revenue from one customer, scandium supply disputed [37][39][64].
2. **FuelCell Energy (NASDAQ:FCEL)** — 37 MW annualised production, revenue −29%, two orders of magnitude behind Bloom [40].
3. **Plug Power (NASDAQ:PLUG)** — hydrogen; no onsite data-center plant surveyed uses hydrogen [29].
4. **Doosan Fuel Cell (KRX:336260)** — ₩1.11 trillion of 2026 orders, but intra-group (HyAxiom), PAFC efficiency, no MW or consensus data obtainable; watch item [41][42].
5. **Generac (NYSE:GNRC)** — Amazon $2.4–8 billion is backup diesel, which belongs to the facility-electrification report; 22× 2026E [35][64].
6. **Babcock & Wilcox (NYSE:BW)** — real 1.2 GW contract and $2.6 billion backlog, but $240 million of debt against $57 million of equity and a steam-cycle detour that ends when turbines return [47][48].
7. **ATI (NYSE:ATI)** — specialty energy is 5% of revenue; aerospace sets the 38× multiple [44][64].
8. **Carpenter Technology (NYSE:CRS)** — energy about 5% of sales; 29× FY27; aerospace-driven [45][64].
9. **Rolls-Royce (LSE:RR)** — Power Systems is under a quarter of the group; 32× forward for civil aerospace and defence [33][64].
10. **Kawasaki Heavy (TSE:7012)** — no 2026 data-center turbine order found; small gas-turbine business [67].
11. **Fluor (NYSE:FLR)** — wants gas EPC but awards are H1 2027 at the earliest; backlog fell 4.7% [50].
12. **Quanta (NYSE:PWR), Primoris (NYSE:PRIM), Comfort Systems (NYSE:FIX), Sterling (NASDAQ:STRL)** — electrical, mechanical and site contractors covered by the facility report; no gas-plant EPC data gathered here [65].
13. **Kodiak Gas Services (NYSE:KGS)** — compression lessor moving into turbines via Baker Hughes; small relative to its compression base [15].
14. **Parker-Hannifin (NYSE:PH)** — fuel-gas systems for Abilene are a rounding error in a $20 billion company [73].
15. **Berkshire Hathaway (NYSE:BRK.B) for Precision Castparts** — no segment disclosure; 1% of a conglomerate [72].
16. **Acerinox (BME:ACX) for Haynes** — stainless steel dominates.
17. **Ansaldo Energia** — state-owned, unlisted; eight AE64.3A units for Texas [13].
18. **Eaton (NYSE:ETN), Hubbell (NYSE:HUBB), ABB** — switchgear and controls; other report.
19. **Williams (NYSE:WMB), Energy Transfer (NYSE:ET), Kinder Morgan (NYSE:KMI)** — midstream; other report. Williams' 6 GW BTM book is noted [58].
20. **CoreWeave (NASDAQ:CRWV), Applied Digital (NASDAQ:APLD), Oracle, Microsoft, Meta, Amazon, Alphabet** — buyers, not suppliers.
21. **2G Energy (XETRA:2GB)** — containerised engine packages for North America (headline only); too small to verify in this session.
22. **VoltaGrid, Crusoe, Rehlko, Mainspring, ProEnergy, Dynamis, APR Energy, Doncasters, Chromalloy, Kiewit, Bechtel, Burns & McDonnell, Nooter/Eriksen** — private.

---

## 14. Dated catalyst calendar (October 2026 to 2030)

Earnings dates marked "expected" follow each company's usual pattern and were not confirmed in this session.

| Date | Event | Why it matters | Source |
|---|---|---|---|
| Oct 2026 | FuelCell Energy 100 MW annualised production target | Tests whether a second SOFC supplier exists | [40] |
| Late Oct 2026 (expected) | GE Vernova, Baker Hughes, Caterpillar, Wärtsilä, Doosan Q3 results | GE: reservations vs orders split, progress to ≥125 GW; CAT: Power & Energy orders; BKR: IET data-center awards | [1][7][16] |
| Early Nov 2026 (expected) | Cummins, Howmet, ATI, Mitsubishi Heavy Q2 FY2026, INNIO, Bloom, Solaris Q3 results | Howmet IGT growth rate; INNIO order intake; Bloom customer concentration; SEI guidance $90–105m | [25][26][43] |
| Mid-Nov 2026 (expected) | Siemens Energy FY2026 results and FY2027 guidance | Gas Services margin, large-unit capacity schedule | [6][7] |
| Q4 2026 | Caterpillar first shipments from the restarted 10 MW medium-speed engine line (1.5 GW capacity) | Engine supply response | [16] |
| Q4 2026 | Generac large-megawatt capacity above $1.25bn/yr | Backup generator supply | [35] |
| Dec 2026 (expected) | GE Vernova investor update; year-end check of "at least 125 GW"; 2030 reservations "sold out" | The clearest read on reservation conversion | [1][5] |
| End-2026 | Korean analysts: >50% of 2031 heavy-duty supply allocated | Defines the end of the sold-out window | [12] |
| End-2026 | Bloom Fremont capacity 2 GW; ~3 GW of US IT load running islanded (SemiAnalysis); 2.8–3.2 GW BTM online (Cleanview) | Delivery against the 75–90 GW ordered/announced | [37][54][56] |
| Early Dec 2026 (**my estimate**) | INNIO IPO lock-up expiry (180 days from 4 Jun) | Supply of shares from Advent/ADIA; unverified | [27] |
| Dec 2026 (expected) | Argan Q3 FY2027 | Backlog direction | [49] |
| 2027 | Siemens Energy large-unit capacity 50 a year; Ansaldo AE64.3A first US deliveries; ProEnergy 13 PE6000 to Crusoe (summer); Homer City first power targeted; Bloom-Oracle deployments continue; Oracle Green Chile pipeline Q1–Q2 | First measurable supply additions | [7][13][22][38][51][54] |
| H1 2027 | Williams 6 GW BTM installed; Fluor "meaningful EPC awards" | Utility-scale EPC cycle starts | [50][58] |
| 2027–28 | Generac Amazon deliveries ($2.4bn); Generac capacity tripled by Q3 2027; Caterpillar heavy capex 2027–29; Howmet capex up | Supply build-out spending | [17][35][43] |
| 2028 | GE Vernova 24 GW/yr; Siemens Energy medium units 100/yr; Doosan 12 units/yr; Microsoft Pecos first power; Wärtsilä Texas delivery; Mitsubishi deliveries 2028–30 begin; Entergy/Meta plants late 2028; FuelCell 500 MW Torrington (June); Rolls-Royce Plant 3 Series 4000; GE Vernova revenue $52bn and 20% margin targets | The first year in which supply catches demand; the first year of pricing flow-through | [1][4][5][7][8][11][32][33][40][52][60] |
| 2029 | Doosan US deliveries monthly from May; Wärtsilä Texas operational late 2029; SemiAnalysis BTM equipment market >50 GW/yr; NRG/GEV/Kiewit 5 GW CCGT programme begins; grid connections for the 2025–27 BTM cohort | Re-roling of onsite plants; overbuild test begins | [10][19][32][55] |
| 2030 | GE Vernova 30 GW/yr; Kodiak ~1 GW delivered; Caterpillar cash payback; SpaceX foundry earliest mass production; Doosan 45 units cumulative | Capacity doubling fully landed | [1][11][12][15][17] |

---

## 15. Data gaps, caveats and unverified items

1. **Search quota.** The session's web-search budget was exhausted after about two-thirds of the research; all subsequent evidence came from direct fetches of known URLs. Items marked "(headline only)" were seen only as search-result titles: Sahm Capital's "mostly sold out through 2030" (22 Jul 2026, returned 404), Power Engineering on Baker Hughes 1.8 GW, the B&W/Siemens 20-steam-turbine agreement, Kiewit Georgia 1,425 MW, Bechtel Texas, Earthjustice's xAI notice, the Cummins BESS award, Generac/Enercon, the Parker-Hannifin Abilene award, Kawasaki's L30A brochure, the 2G Energy North American deal, Chromalloy's energy pages, and the TheStreet/Yahoo piece on Precision Castparts.
2. **Gigawatt conversions** for Siemens Energy (units → GW) and Mitsubishi (doubling → GW) are my estimates; the companies report units, not gigawatts, for capacity.
3. **GE Vernova slot reservations:** deposit size, cancellation terms and historical conversion rates are not disclosed in the sources read.
4. **Firm-order count** of 29 US large turbines in H1 2026 comes from a single Korean trade source [11]; I could not cross-check it against OEM disclosures.
5. **Used-turbine prices:** only the SemiAnalysis "46% all-in premium" figure was obtained; no dated price list for specific frames.
6. **Nickel price** on 2 Oct 2026 was not retrieved.
7. **Doosan Enerbility's third-party casting and forging revenue** was not found; the SpaceX component link is from one secondary source [12].
8. **APR Energy ownership:** the research brief given to this agent says Atlas Holdings; the January 2026 release says Fortress Investment Group; the July 2026 report says xAI bought it. The chain of ownership is unreconciled.
9. **"Kinetic/Hanwha"** in the research brief given to this agent could not be verified before the search budget ran out.
10. **MAN Energy Solutions** data-center orders: none found.
11. **Entergy/Meta Hyperion turbine supplier** and the fourth plant's details: not disclosed in the sources read.
12. **Rolls-Royce Power Systems:** only full-year 2025 and first-half 2025 figures were retrieved; first-half 2026 was not.
13. **Bloom Energy's June-quarter figures** were read through a secondary summary of the 10-Q [37], not the filing itself. Wärtsilä's quarter was read through a Yahoo/GuruFocus summary [31].
14. **Cost per MWh table (§8.3)** is my estimate from the cited capital-cost, efficiency and lead-time inputs, not a published levelised cost.
15. **Valuation data** for non-US listings used stockanalysis pages whose prices were stale (Siemens Energy 25 Sep, Mitsubishi 30 Sep, Doosan 18 Sep, Wärtsilä 25 Sep); market values were rescaled to 2 Oct closes and are my estimates. Mitsubishi consensus EPS was shown as "n/a"; its forward P/E is derived from the stockanalysis forward ratio.
16. **Market values** for ATI, Carpenter, FuelCell Energy, Doosan Fuel Cell and Babcock & Wilcox were not retrieved; B&W's mean target ($22) predates the share-price fall and should be treated as stale.
17. **Earnings dates** in §14 are expected, not confirmed.
18. **INNIO lock-up expiry** is my assumption of a standard 180-day period.
19. **xAI Colossus 1 (Memphis) turbine inventory** by maker was not detailed in the sources read; GEM's Colossus 2 page covers Southaven only.
20. **Cleanview's "Caterpillar 33%"** includes Solar Turbines and is a share of permitted, not operating, capacity.
21. **No mainland-Chinese turbine makers** (Harbin, Shanghai Electric, Dongfang) were assessed; they do not sell into the US data-center market and the research brief's China price date did not apply.

---

## 16. Sources

1. "GE Vernova reports second quarter 2026 financial results and raises 2026 financial guidance", GE Vernova press release (PDF), 22 Jul 2026. https://www.gevernova.com/sites/default/files/gev_webcast_pressrelease_07222026.pdf
2. "GE Vernova gas turbine backlog climbs to 116 GW", Utility Dive, Jul 2026 (headline only, secondary). https://www.utilitydive.com/news/ge-vernova-gas-turbine-backlog-climbs-to-116-gw/826039/
3. "Data centers drive record surge in GE Vernova power equipment orders as turbine slots tighten through 2030", Power Engineering, 23 Apr 2026. https://www.power-eng.com/gas/turbines/data-centers-drive-record-surge-in-ge-vernova-power-equipment-orders-as-turbine-slots-tighten-through-2030/
4. "AI Data Centers Are Driving a Power Supercycle. GE Vernova's Gas Turbine Prices Are Up 300% in Three Years", 24/7 Wall St. via Yahoo Finance, 24 Jun 2026 (secondary). https://finance.yahoo.com/energy/articles/ai-data-centers-driving-power-180658794.html
5. "GE Vernova expects to end 2025 with an 80-GW gas turbine backlog that stretches into 2029", Utility Dive, 9 Dec 2025. https://www.utilitydive.com/news/ge-vernova-gas-turbine-investor/807662/
6. "Earnings Release Q3 FY 2026", Siemens Energy, 5 Aug 2026. https://www.siemens-energy.com/global/en/home/press-releases/earnings-release-q3-fy-2026.html
7. "Siemens Energy's gas turbine backlog nears 70 GW as company expands manufacturing", Utility Dive, 10 Aug 2026. https://www.utilitydive.com/news/siemens-gas-turbine-backlog-nears-70-gw-as-company-expands-manufacturing/827390/
8. "Mitsubishi's large-frame gas turbine backlog reaches 35 GW", Utility Dive, 13 Aug 2026. https://www.utilitydive.com/news/mitsubishi-gas-turbine-backlog-earnings/827761/
9. "Mitsubishi Will Double Gas Turbine Production as Demand Grows", POWER Magazine, 2 Sep 2025. https://www.powermag.com/mitsubishi-will-double-gas-turbine-production-as-demand-grows/
10. "Doosan Enerbility Secures Another Large-Scale Turbine Order with U.S. Client", Turbomachinery International, 9 Mar 2026. https://www.turbomachinerymag.com/view/doosan-enerbility-secures-another-large-scale-turbine-order-with-u-s-client
11. "Doosan Enerbility outpaces Siemens Energy in US gas turbine orders", The Herald Business (Korea), 25 Sep 2026. https://mbiz.heraldcorp.com/article/10883205
12. "Expanding into Gas Turbine Components for SpaceX… Doosan Enerbility Draws Attention Amid Power Shortages [Stock e-Shot]", EDAILY, 5 Sep 2026 (secondary). https://en.edaily.co.kr/news/eda202609045589/
13. "Ansaldo Energia returns to the USA market with an order for eight AE64.3A gas turbines for a Texas data center project", Ansaldo Energia press release, 20 Jul 2026. https://www.ansaldoenergia.com/about-us/media-center/power-generation-news-insights/detail-news/ansaldo-energia-returns-to-the-usa-market-with-an-order-for-eight-ae643a-gas-turbines-for-a-texas-data-center-project
14. "Dynamis Power Solutions Awards Baker Hughes Major Power Generation Order for Data Centers, Oil & Gas", Baker Hughes press release, 29 Jul 2026. https://investors.bakerhughes.com/news/press-releases/news-details/2026/Dynamis-Power-Solutions-Awards-Baker-Hughes-Major-Power-Generation-Order-for-Data-Centers-Oil--Gas/default.aspx
15. "Kodiak Gas Services, Baker Hughes Announce Multi-Year Gas Turbine Order Agreement to Support U.S. Data Center Growth", Baker Hughes press release, 8 Jul 2026. https://investors.bakerhughes.com/news/press-releases/news-details/2026/Kodiak-Gas-Services-Baker-Hughes-Announce-Multi-Year-Gas-Turbine-Order-Agreement-to-Support-U-S--Data-Center-Growth/default.aspx
16. "Caterpillar sales surpass $20B as generators for data centers take off", Utility Dive, 11 Aug 2026. https://www.utilitydive.com/news/caterpillar-sales-surpass-20b-growing-data-center-demand-q2-2026/827569/
17. "Caterpillar to triple power generation capacity, raises 2030 targets", Manufacturing Dive, 1 May 2026. https://www.manufacturingdive.com/news/caterpillar-triple-power-generation-capacity-raises-2030-targets-q1-2026-earnings/819078/
18. "Colossus 2 power station", Global Energy Monitor wiki, last updated 3 Oct 2026 (secondary). https://www.gem.wiki/Colossus_2_power_station
19. "Could a delivery backlog derail a GT boom?", Modern Power Systems, 9 Feb 2026. https://www.modernpowersystems.com/data-centre-power/could-a-delivery-backlog-derail-a-gt-boom/
20. "Crusoe orders 19 natural gas turbines from GE Vernova to power data centers", Data Center Dynamics, 23 Jul 2025. https://www.datacenterdynamics.com/en/news/crusoe-orders-19-natural-gas-turbines-from-ge-vernova-to-power-data-centers/
21. "Crusoe secures 4.5GW of natural gas power for AI data centers – report", Data Center Dynamics, 17 Mar 2025. https://www.datacenterdynamics.com/en/news/crusoe-secures-45gw-of-natural-gas-for-ai-data-centers-report/
22. "PROENERGY To Deliver Major Generating Equipment To Power Crusoe AI Factories", PR Newswire, 16 Apr 2026. https://www.prnewswire.com/news-releases/proenergy-to-deliver-major-generating-equipment-to-power-crusoe-ai-factories-302743533.html
23. "APR Energy Expands Power Generation Capacity to Over 1.1 GW as Data Center Power Demand Soars", GlobeNewswire, 15 Jan 2026. https://www.globenewswire.com/news-release/2026/01/15/3219412/0/en/apr-energy-expands-power-generation-capacity-to-over-1-1-gw-as-data-center-power-demand-soars.html
24. "Elon Musk quietly acquires mobile gas generation firm APR Energy – report", Data Center Dynamics, 17 Jul 2026 (secondary). https://www.datacenterdynamics.com/en/news/elon-musk-quietly-acquires-mobile-gas-generation-firm-apr-energy-report/
25. "Solaris Energy Infrastructure (SEI) Q2 2026 Earnings Call Transcript", The Motley Fool, call 6 Aug 2026, published 12–13 Aug 2026. https://www.fool.com/earnings/call-transcripts/2026/08/12/solaris-energy-infrastructure-sei-q2-2026-earnings-call-transcript/
26. "INNIO Group Reports Second Quarter 2026 Financial Results", INNIO Group press release, 28 Jul 2026. https://investors.innio.com/news-releases/news-release-details/innio-group-reports-second-quarter-2026-financial-results
27. "Gas engine maker Innio set for Nasdaq debut after upsized $2.43 billion IPO", Reuters via Investing.com, 4 Jun 2026 (secondary). https://www.investing.com/news/stock-market-news/gas-engine-maker-innio-set-for-nasdaq-debut-after-upsized-243-billion-ipo-4726497
28. "Oracle Taps VoltaGrid for 2.3-GW Modular Gas Fleet to Power AI Data Centers Across Texas", POWER Magazine, 15 Oct 2025. https://www.powermag.com/oracle-taps-voltagrid-for-2-3-gw-modular-gas-fleet-to-power-ai-data-centers-across-texas/
29. "Data Center Generators: 2026 Capacity & Cost Guide", SecondWatt, 25 May 2026 (secondary; cites EIA Annual Energy Outlook 2025 capital-cost table). https://secondwatt.com/resources/data-center-generators-2026-capacity-cost-speed-to-power
30. "Cummins Reports Strong Second Quarter 2026 Results; Raises Full-Year Outlook", Cummins Inc., 4 Aug 2026. https://investor.cummins.com/news/detail/701/cummins-reports-strong-second-quarter-2026-results-raises
31. "Wartsila Corp (WRTBF) (Q2 2026) Earnings Call Highlights", GuruFocus via Yahoo Finance, 21 Jul 2026 (secondary). https://finance.yahoo.com/energy/articles/wartsila-corp-wrtbf-q2-2026-150030862.html
32. "Wärtsilä continues to expand its data center footprint with new 790 MW order in Texas, the next Data Center Alley", Wärtsilä press release, 23 Apr 2026. https://www.wartsila.com/media/news/23-04-2026-wartsila-continues-to-expand-its-data-center-footprint-with-new-790-mw-order-in-texas-the-next-data-center-alley-3744599
33. "Strong results and record investments: Rolls-Royce Power Systems continues on growth path", Rolls-Royce Power Systems press release, 27 Feb 2026. https://www.mtu-solutions.com/na/en/pressreleases/2026/Strong-results-and-record-investments-Rolls-Royce-Power-Systems-continues-on-growth-path.html
34. "Rolls-Royce Power Systems first-half sales up 20%", Power Progress, 4 Aug 2025. https://www.powerprogress.com/news/rolls-royce-power-systems-first-half-sales-up-20/8082688.article
35. "Amazon-Generac Deal Puts Backup Power in the AI Infrastructure Spotlight", Data Center Frontier, 24 Sep 2026. https://www.datacenterfrontier.com/energy/article/55407678/amazon-generac-deal-puts-backup-power-in-the-ai-infrastructure-spotlight
36. "One year inside Mainspring's data center pipeline", Latitude Media, 19 May 2025. https://www.latitudemedia.com/news/one-year-inside-mainsprings-data-center-pipeline/
37. "Financial analysis of Bloom Energy, Q2 2026 filings and scenarios to 2029", sec-api.io, 1 Oct 2026 (secondary summary of SEC filings). https://sec-api.io/insights/financial-analysis-of-bloom-energy-q2-2026-filings-and-scenarios-to-2029
38. "Bloom Energy and Oracle Expand Strategic Partnership to Deploy up to 2.8 GW to Accelerate AI Infrastructure Build-Out", Bloom Energy press release, 13 Apr 2026. https://investor.bloomenergy.com/press-releases/press-release-details/2026/Bloom-Energy-and-Oracle-Expand-Strategic-Partnership-to-Deploy-up-to-2-8-GW-to-Accelerate-AI-Infrastructure-Build-Out/default.aspx
39. "Short Seller Hunterbrook Attacked Bloom Energy's Supply-Chain Claims. BE Stock Is Bruised, But Not Broken.", Barron's via Yahoo Finance, 14 Jul 2026 (secondary). https://finance.yahoo.com/markets/stocks/articles/short-seller-hunterbrook-attacked-bloom-133002104.html
40. "FuelCell Energy Reports Third Fiscal Quarter 2026 Results; Executes First Data Center Power Agreement, Increases Annualized Production Rate & Focuses on Capacity Expansion", GlobeNewswire, 2 Sep 2026. https://www.globenewswire.com/news-release/2026/09/02/3355029/8041/en/fuelcell-energy-reports-third-fiscal-quarter-2026-results-executes-first-data-center-power-agreement-increases-annualized-production-rate-focuses-on-capacity-expansion.html
41. "Doosan Fuel Cell Wins 322.2 Billion Won Order, Tops 1 Trillion Won for Year", Seoul Economic Daily, 15 Sep 2026. https://en.sedaily.com/finance/2026/09/15/doosan-fuel-cell-wins-3222-billion-won-order-tops-1
42. "Doosan Fuel Cell Wins 501.4 Billion Won U.S. Data Center Order", Seoul Economic Daily, 2 Sep 2026. https://en.sedaily.com/finance/2026/09/02/doosan-fuel-cell-wins-5014-billion-won-us-data-center-order
43. "Howmet Aerospace Reports Second Quarter 2026 Results", PR Newswire, 6 Aug 2026. https://www.prnewswire.com/news-releases/howmet-aerospace-reports-second-quarter-2026-results-302844230.html
44. "ATI Announces Second Quarter 2026 Results", PR Newswire, 6 Aug 2026. https://www.prnewswire.com/news-releases/ati-announces-second-quarter-2026-results-302844440.html
45. "Carpenter Technology Reports Fourth Quarter and Fiscal Year 2026 Results", SEC Form 8-K exhibit, 30 Jul 2026. https://www.sec.gov/Archives/edgar/data/17843/000001784326000030/a4thqtr2026resultspressrel.htm
46. "SpaceX Plans Its Own Turbine Blade Foundry in Texas – AI Boom Meets Casting Bottleneck", Foundry-Planet, 7 Sep 2026. https://www.foundry-planet.com/d/spacex-plans-its-own-turbine-blade-foundry-in-texas-ai-boom-meets-casting-bottleneck
47. "Babcock & Wilcox Enterprises Reports Second Quarter 2026 Results", Babcock & Wilcox, 10 Aug 2026. https://www.babcock.com/home/about/corporate/news/babcock-and-wilcox-enterprises-reports-second-quarter-2026-results
48. "As turbine queues tighten, Babcock & Wilcox sees opening for boiler-steam packages in data center power race", Power Engineering, 5 May 2026. https://www.power-eng.com/operations-maintenance/as-turbine-queues-tighten-babcock-wilcox-sees-opening-for-boiler-steam-packages-in-data-center-power-race/
49. "Argan, Inc. Reports Second Quarter Fiscal 2027 Results", Business Wire, 2 Sep 2026. https://www.businesswire.com/news/home/20260902354415/en/Argan-Inc.-Reports-Second-Quarter-Fiscal-2027-Results
50. "Fluor targets energy over data centers", Construction Dive, 10 Aug 2026. https://www.constructiondive.com/news/fluor-targets-energy-data-centers-earnings-ceo/827465/
51. "Kiewit to Build Record 4.5-GW Gas Power Plant for Pa. Data Center Complex", Engineering News-Record, 2 Apr 2025. https://www.enr.com/articles/60531-kiewit-to-build-record-45-gw-gas-power-plant-for-pa-data-center-complex
52. "Entergy Louisiana breaks ground on two new combined cycle plants to power Meta data center", Power Engineering, 2 Dec 2025. https://www.power-eng.com/gas/combined-cycle/entergy-louisiana-breaks-ground-on-two-new-combined-cycle-plants-to-power-meta-data-center/
53. "Hype or Hyperscale", Grid Status blog, 11 Mar 2026. https://blog.gridstatus.io/hype-or-hyperscale/
54. "What is So Hard About Behind-The-Meter Power For Datacenters? Part 1", SemiAnalysis, 10 Sep 2026. https://newsletter.semianalysis.com/p/what-is-so-hard-about-behind-the
55. "US Grid Constraints: Towards 40GW+ of Behind-The-Meter Datacenter by 2028?", SemiAnalysis, 25 Jun 2026. https://newsletter.semianalysis.com/p/us-grid-constraints-towards-40gw
56. "Bypassing the Grid: How Data Center Developers Are Building Their Own Power Plants", Cleanview, mid-2026. https://cleanview.co/reports/behind-the-meter-data-centers
57. "Open Circuit: The off-grid data center fantasy", Latitude Media, 17 Jul 2026. https://www.latitudemedia.com/news/open-circuit-the-off-grid-data-center-fantasy/
58. "Data Centers Have Solved Their Speed-to-Power Problem — With Natural Gas", Heatmap News, 9 Oct 2025. https://heatmap.news/energy/natural-gas-data-centers-speed
59. "Queued Up: 2026 Edition, Characteristics of Power Plants Seeking Transmission Interconnection As of the End of 2025", Lawrence Berkeley National Laboratory, May 2026. https://emp.lbl.gov/publications/queued-2026-edition-characteristics
60. "Microsoft to Build 2GW AI Data Center Campus in West Texas with Onsite Gas", The Energy Mag, 22 Jun 2026 (secondary). https://www.theenergymag.com/news/2026-06-22/microsoft-2-gigawatt-ai-data-center-west-texas-onsite-gas
61. "State board approves xAI permit", Mississippi Today, 10 Mar 2026. https://mississippitoday.org/2026/03/10/xai-permit-approved-southaven/
62. "EPA's New Turbine Rules Ease Air Permits for Data Centers", Clark Hill, 27 May 2026 (summarising 91 Fed. Reg. 1910, 15 Jan 2026). https://www.clarkhill.com/news-events/news/epa-turbine-rules-air-permitting-data-centers/
63. "Islanded, But Not Unregulated or Unchallenged: New Developments for Behind-the-Meter Data Center Power Generation", WilmerHale client alert, 12 Aug 2026. https://www.wilmerhale.com/en/insights/client-alerts/20260812-islanded-but-not-unregulated-or-unchallenged-new-developments-for-behind-the-meter-data-center-power-generation
64. stockanalysis.com quote and forecast pages for GEV, ENR (XETRA), 7011 (TSE), 034020 (KRX), WRT1V (HEL), RR (LSE), BKR, CAT, INIO, CMI, GNRC, BE, HWM, ATI, CRS, BW, AGX, SEI; retrieved 2–3 Oct 2026 (secondary aggregator of S&P Global and TipRanks data). https://stockanalysis.com/
65. Yahoo Finance chart data feed (query1.finance.yahoo.com/v8/finance/chart/), 2 Oct 2026 closes and FX, retrieved 3 Oct 2026 about 01:00 UTC (secondary aggregator). https://finance.yahoo.com/
66. "Ansaldo Returns to U.S. Gas Turbine Market as Equipment Crunch Widens Supplier Field", POWER Magazine, 2026 (headline only). https://www.powermag.com/ansaldo-us-gas-turbine-market-equipment-crunch/
67. "Kawasaki launches new state-of-the-art 30MW class gas turbine (L30A)", Kawasaki Heavy Industries (PDF; headline only). https://global.kawasaki.com/en/corp/newsroom/news/pdf/L30A_e.pdf
68. "A Mystery Buyer Placed a 450-Megawatt Bet on INNIO's (INIO) Gas Engines", Insider Monkey, 2026 (headline only, secondary). https://www.insidermonkey.com/news/a-mystery-buyer-placed-a-450-megawatt-bet-on-innios-inio-gas-engines-1840806/
69. "INNIO, VoltaGrid Partner on 2.3-GW Data Center Project", POWER Magazine, 2025 (headline only). https://www.powermag.com/innio-voltagrid-partner-on-2-3-gw-data-center-project/
70. "Cummins selected to supply battery energy storage systems for large U.S. data center project", Business Wire, 18 Aug 2026 (headline only). https://www.businesswire.com/news/home/20260818513062/en/Cummins-selected-to-supply-battery-energy-storage-systems-for-large-U.S.-data-center-project
71. "Generac signs agreement to acquire Enercon, accelerating growth in data center and switchgear markets", Barchart, 2026 (headline only, secondary). https://www.barchart.com/story/news/304449/generac-signs-agreement-to-acquire-enercon-accelerating-growth-in-data-center-and-switchgear-markets
72. "Buffett's worst deal is now an AI power play", TheStreet via Yahoo Finance, 2026 (headline only, secondary). https://finance.yahoo.com/technology/ai/articles/buffetts-worst-deal-now-ai-143700655.html
73. "Parker Hannifin to supply equipment for more than 1GW of natural gas turbines to Stargate's Abilene campus in Texas", Data Center Dynamics, 2025–26 (headline only). https://www.datacenterdynamics.com/en/news/parker-hannifin-to-supply-more-than-1gw-of-natural-gas-turbines-to-stargates-abilene-campus-in-texas/
74. "Ansaldo Energia re-enters U.S. power generation market", Power Engineering, 2026 (headline only). https://www.power-eng.com/gas/turbines/ansaldo-energia-re-enters-u-s-power-generation-market/
75. Notice of intent to sue, xAI Southaven, Earthjustice (PDF), 13 Feb 2026 (headline only). https://earthjustice.org/wp-content/uploads/2026/02/2026.02.13-final-xai-southaven-noi-with-exhibit-a.pdf
76. "Elon Musk's xAI gets go-ahead for 41 natural gas turbines in Mississippi to power Colossus data centers", Data Center Dynamics, Mar 2026 (headline only). https://www.datacenterdynamics.com/en/news/musks-xai-gets-go-ahead-for-41-natural-gas-turbines-in-mississippi-to-power-colossus-data-centers/
77. "SpaceX starts in-house turbine blade manufacturing to boost gas-powered generator output for Elon's AI data centers", Tom's Hardware, Sep 2026 (headline only, secondary). https://www.tomshardware.com/tech-industry/data-centers/spacex-starts-in-house-turbine-blade-manufacturing-to-boost-gas-powered-generator-output-for-elons-ai-data-centers-new-manufacturing-strategy-cuts-generator-delays-by-18-months
78. "Kiewit Chosen as EPC for New 1,425-MW Gas-Fired Power Plant in Georgia", POWER Magazine, Jan 2026 (headline only). https://www.powermag.com/kiewit-chosen-as-epc-for-new-1425-mw-gas-fired-power-plant-in-georgia/
79. "Bechtel Awarded EPC Contract for New Power Plant in Texas", Bechtel press release (headline only). https://www.bechtel.com/press-releases/bechtel-awarded-epc-contract-for-new-power-plant-in-texas/
80. "Babcock & Wilcox Signs Agreement with Siemens Energy to Commence Work on 20 Steam Turbines for Data Center Power Generation", Babcock & Wilcox, 2026 (headline only). https://www.babcock.com/home/about/corporate/news/babcock-and-wilcox-signs-agreement-with-siemens-energy-to-commence-work-on-20-steam-turbines-for-data-center-power-generation
81. "Mainspring Secures $258 Million in Financing to Scale Linear Generator Business", Mainspring Energy, Apr 2025 (headline only). https://www.mainspringenergy.com/news/mainspring-secures-258-million-in-financing-to-scale-linear-generator-business-adds-energy-and-tech-leaders-to-board
82. "New Source Performance Standards Review for Stationary Combustion Turbines", Federal Register, 15 Jan 2026 (91 FR 1910; PDF not opened, cited via [62]). https://www.govinfo.gov/content/pkg/FR-2026-01-15/pdf/2026-00677.pdf
83. "Baker Hughes gas turbines to support up to 1.8 GW of behind-the-meter data center power", Power Engineering, Jul 2026 (headline only). https://www.power-eng.com/gas/turbines/baker-hughes-gas-turbines-to-support-up-to-1-8-gw-of-behind-the-meter-data-center-power/
84. "VoltaGrid to supply Oracle with 2.3GW of natural gas power for AI data centers", Data Center Dynamics, Oct 2025 (headline only). https://www.datacenterdynamics.com/en/news/voltagrid-to-supply-oracle-with-23gw-of-natural-gas-power-for-ai-data-centers/
85. "Siemens Energy AG (SMEGF) (Q3 2026) Earnings Call Highlights", Yahoo Finance, Aug 2026 (headline only, secondary). https://finance.yahoo.com/markets/stocks/articles/siemens-energy-ag-smegf-q3-150034173.html
86. "Doosan Enerbility Sees 16% Rise in Q2 Operating Profit on Growth of Gas Turbine and Nuclear Power Businesses", The Asia Business Daily, 27 Jul 2026 (fetch blocked by robots.txt; headline only). https://www.asiae.co.kr/en/article/IT/2026072716162963397
87. "Doosan Enerbility H1 Operating Profit Hits ₩547.8 Billion; Order Backlog Surpasses ₩26 Trillion for First Time", BigGo Finance, 2026 (headline only, secondary). https://finance.biggo.com/news/27bb1748-787e-4099-bd61-39dc72f10aee
88. "Mitsubishi Heavy buoyed by brisk gas turbine demand from US data centers", Nikkei Asia, 2026 (headline only). https://asia.nikkei.com/editor-s-picks/interview/mitsubishi-heavy-buoyed-by-brisk-gas-turbine-demand-from-us-data-centers
89. "LifeX PMA Parts & Advanced Repairs for Turbines", Chromalloy energy pages (headline only). https://www.chromalloy.com/energy/

*End of report.*
