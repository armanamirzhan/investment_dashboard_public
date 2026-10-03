> **Working research report, published as-is for transparency (3 Oct 2026).** Written by an AI research agent for the Claude Investment Summary pages. Every figure carries a date and source; "secondary" marks relays; "my estimate" marks the agent's arithmetic. Prices are a point-in-time snapshot (2 Oct 2026 closes unless stated). Not investment advice. Final picks and targets on the website may differ from the rankings here.

# U2: The fuel and international side of AI electricity
### Natural-gas supply and midstream, renewables and storage for data centers, and non-US electricity providers

*Research date: Friday 2 October 2026 (evening, US time). Written for an educational investment-analysis page. This is not investment advice.*

**Conventions.**
- `[n]` refers to the numbered sources in §14. "(secondary)" marks an aggregator, a press summary or a headline-only reference. "**my estimate**" marks my own arithmetic or assumptions. "Headline only" means the source could not be opened and only its title and search snippet were used.
- **Price dates.** US, Canadian, European, Japanese, Korean, Australian, Malaysian and Singaporean listings use the **2 October 2026** regular-session close. Saudi (Tadawul closed on Fridays) and Indian (National Stock Exchange closed on 2 October for the Gandhi Jayanti holiday) listings use the **1 October 2026** close. Prices, 52-week ranges and FX come from the Yahoo Finance chart feed retrieved 2–3 October 2026 [55] (secondary aggregator); market values, consensus ratings, price targets and forward P/E ratios come from stockanalysis.com quote pages retrieved 2 October 2026 [54] (secondary aggregator). Several stockanalysis pages for non-US listings were stale (dated September 2026); where I scaled their market value to the 2 October price, that is **my estimate**.
- **Forward P/E** is the aggregator's "forward P/E", which uses consensus earnings for the next fiscal year (fiscal 2027 for calendar-year reporters). Where I computed one myself I say so.
- **FX (2 Oct 2026)** [55]: EUR/USD 1.126; GBP/USD 1.324; USD/JPY 157.8; USD/CAD 1.425; USD/KRW 1,342.5; AUD/USD 0.696; USD/INR 96.3; USD/MYR 4.08; USD/SGD 1.279; USD/SAR 3.75.
- **Units.** Bcf/d = billion cubic feet of gas per day; MMcf/d = million cubic feet per day; 1 Bcf/d of gas burned in a modern combined-cycle plant produces roughly 6 GW of continuous power (**my estimate**, using a 6.8 MMBtu/MWh heat rate and 1,037 Btu per cubic foot). GW = gigawatt; MW = megawatt; MWh = megawatt-hour.

**Method caveat.** The web-search budget for this session was exhausted after about 60 queries, and Natural Gas Intelligence, Nikkei Asia, CBC and a few other sites block automated reading. I therefore relied heavily on company press releases, regulator documents and investor-call summaries that could be opened directly, and I mark the rest "headline only". Items I could not verify are listed in §13.

---

## 0. Executive summary: eleven conclusions

1. **Gas is the marginal fuel of AI electricity in the United States, and the demand estimates have roughly tripled in eighteen months.** East Daley's bottom-up base case (Feb 2025) was 4.2–6.1 Bcf/d of extra gas burn by 2030 from 290 tracked projects totalling 81 GW [3]. By September 2026 BloombergNEF put incremental data-center gas demand at **+15 Bcf/d between 2025 and 2035**, with natural gas supplying 69% of new grid-connected data-center power, and Wood Mackenzie (July 2026) projected US power-sector gas demand of 17 Bcf/d above today by the mid-2030s [12]. EIA's September 2026 outlook still shows gas at 40% of US generation in 2025–27 and Henry Hub at $3.28–3.53/MMBtu, so the forecasts have not yet shown up in the price of the molecule [7]. For scale, 15 Bcf/d is roughly 14% of current US dry-gas production (**my estimate**).

2. **The binding constraint is pipe, not gas.** EQT lists "over 45 potential Appalachian demand and pipeline projects totalling nearly 20 Bcf/d" but warns that one-third of the basin's supply "will be challenged to hold flat" without new takeaway [18]. Interstate pipelines now take 20–30 months from filing to approval and 2–3 years to build: Transco's 1.6 Bcf/d Southeast Supply Enhancement was approved by FERC on 4 February 2026 for a Q4 2027 start [19]; Kinder Morgan's Mississippi Crossing (1.7 B$) lands in Q2 2028 and South System Expansion 4 (3.5 B$) in Q4 2028/Q4 2029 [1]; Boardwalk's 1.16–1.58 Bcf/d Kosci Junction in H1 2029 [50]. Any data center that needs new interstate gas before 2028 must sit on an existing header (Texas intrastate, Transco Zone 5, Louisiana) or buy behind-the-meter power.

3. **Pipeline backlogs are the cleanest evidence of real data-center demand.** Kinder Morgan: $9.6 B backlog, 92% natural gas, "more than 60%" tied to power generation and utility demand (22 Jul 2026) [1]. Williams: 2026 EBITDA guidance raised to $8.3–8.5 B, long-term growth target lifted to 11%+ a year through 2030, a 2.6 GW behind-the-meter power portfolio funded by a $5.34 B Blackstone joint venture, and a "6 GW+" power backlog (Jul–Aug 2026) [5][48]. DT Midstream: $3.4 B backlog and a stated 7.5 Bcf/d of potential gas demand from 50 GW of utility-announced large loads in MISO and PJM [10]. TC Energy: $20 B+ project pipeline with two Columbia expansions (0.4 and 0.3 Bcf/d) explicitly for gas-fired generation serving data centers, in service 2028–30 [8]. Enbridge: C$41 B secured backlog, including 1.4 GW of solar and wind and 1.6 GWh of batteries contracted to Meta [38].

4. **Behind-the-meter gas power has moved from pilot to portfolio in twelve months.** Williams delivered first power at the 200 MW Socrates plant for Meta in Ohio in under 18 months, has Socrates the Younger (340 MW), Neo (682 MW, H2 2028), Aquila (Utah, H1 2027) and Apollo in hand, and sold 49% of the growth capital to Blackstone at a 6.35% equity cost cap [5][48]. Kodiak Gas Services bought a power fleet (405 MW, 89.6% utilised), ordered **1 GW of gas turbines for delivery by 2030**, targets 2 GW by 2030 and signed a 76 MW, six-year primary-power contract for a West Texas data center on 21 September 2026 [9][44]. Energy Transfer runs eight 10 MW units for its own West Texas operations and added 100 MMcf/d of contracts for Texas power-plant and data-center sites in Q2 2026 [6]. The engineering point: compression companies already own the gas-engine service network and the turbine slots, so the "quiet" beneficiaries are the ones with Caterpillar and turbine allocations, not the ones with the best slides.

5. **The gas producers have the demand but not the pricing.** EQT (second-largest US gas producer) trades at 16.2× forward earnings, 26% below its 52-week high; Expand Energy (the largest) at 11.3×, 32% below its high; Antero at 8.2×; Range at 10.4× [54][55]. Expand itself has said LNG, not data centers, is "in the driver's seat" for demand, and that data-center resistance is growing [56] (headline only). Comstock's Western Haynesville is the host site for NextEra's proposed 5.2 GW, $16 B gas power hub in Anderson County, Texas, which could take almost 1 Bcf/d by 2031 [15]; the stock is at $12.78, down 55% from its 52-week high [55]. The producers are a basis trade (local price versus Henry Hub) on Appalachian takeaway, not a direct data-center play.

6. **Renewables for data centers have split into "firm clean" and "cheap intermittent", and only the first still earns a premium.** NextEra's Energy Resources backlog reached **35.1 GW** after 3.6 GW of Q2 additions (2.0 GW of them storage); it is talking to 30 potential data-center "hubs" (40 by year-end), has up to **9.5 GW of gas-fired generation** in development in Texas and Pennsylvania, and recontracted 500 MW in Q2 at a ~$20/MWh premium to recent pricing [21]. Ormat signed 150 MW of geothermal for Google through NV Energy's Clean Transition Tariff (COD 2028–30, 15-year term) and 13 MW for Switch [24]; Brookfield Renewable signed 2.6 GW of PPAs in Q2 and holds 6 GW of batteries, but gave no update on the 10.5 GW Microsoft framework [23]. European data-center PPAs fell from 4.2 GW (2024) to 2.6 GW (2025) to 100 MW in Q1 2026 as offshore wind slipped and buyers balked at prices [31]. Microsoft was reported in May 2026 to be reconsidering its 2030 carbon-free target, and Google acknowledged difficulty with hourly 2030 matching [25][31]. 24/7 clean matching is no longer a gating criterion for most hyperscaler sites; availability by 2027–28 is.

7. **The 2025 US budget law shortens the renewables runway and lengthens the gas one.** Wind and solar credits now require construction to have begun by 4 July 2026 or service by end-2027; storage, geothermal and nuclear credits survive (to 2033 for storage). Developers front-loaded: NextEra says it has secured panels and batteries through 2029 and transformers through decade-end [21]; Enbridge sanctioned 1.4 GW of safe-harboured solar and wind in Q2 2026 [38]. Lazard's July 2026 levelised cost study still shows utility solar at $40–98/MWh and onshore wind at $37–99 against combined-cycle gas at $51–129, gas peakers at $144–276 and new nuclear at $175–255, but notes announced gas build "surges despite a 15-year-high LCOE" [39]. The buyers are paying for firmness, not energy.

8. **Outside the United States the constraint is almost everywhere the grid connection, and the regulators are now pricing it.** Ireland's December 2025 Large Energy Users policy requires any new data center above 10 MVA to bring 100% de-rated matching generation and to reach 80% new Irish renewables within six years [32]. TenneT says large parts of Noord-Holland, including Amsterdam's Zuidas and the port, have no new grid capacity "for at least the next ten years" (expansion complete by 2036) [46]. Britain's demand connection queue tripled from 41 GW to 125 GW between November 2024 and June 2025, and Ofgem is reordering it with deposits and milestones [33]. Hydro-Québec proposed a **13 ¢/kWh** data-center rate, roughly double the large-power rate, for the second half of 2026 [49]. Korea is creating 11 regional price zones with discounts of up to ₩18/kWh to pull data centers away from Seoul, while KEPCO carries ₩202 trillion of debt and has built about 1 km of 345 kV line a year [34].

9. **The international providers with contracted, dated data-center load are few.** Capital Power: 250 MW to Meta in Sturgeon County, Alberta, >10 years, service in H2 2028, backed by its Alberta fleet [17]. TransAlta: a non-binding MoU with CPP Investments and Brookfield for 230 MW scalable to 1 GW at Keephills [45]. RWE: two European data-center deals "nearing agreement", 30 suitable sites, 10 GW of US capacity secured and 3 GW+ of US gas targeted by 2035 [30]. TAQA: a 1 GW open-cycle gas plant (Al Dhafra) under a 24-year PPA with EWEC, financed in January 2026 and explicitly linked to Abu Dhabi's AI strategy [53][65][66]. YTL Power: 1.2 GW planned across Kulai and the new Sedenak campus in Johor [37]. Everyone else (Iberdrola, Engie, Enel, SSE, National Grid, E.ON, Fortum, Kansai, TEPCO, Kyushu, KEPCO, AGL, Origin, Tata, Adani, NTPC, Tenaga, Sembcorp, Keppel) has exposure through regulated grid capex or generic demand growth, which is real but not contracted and not dated.

10. **The market has de-rated the whole fuel-and-power complex in the second half of 2026, indiscriminately.** At the 2 October close, Expand Energy (−32% from 52-week high), Comstock (−55%), Kodiak (−30%), DT Midstream (−21%), NextEra (−22%), Ormat (−37%), Clearway (−30%), Fluence (−77%), KEPCO's ADR (−53%), TEPCO (−44%), ACWA Power (−35%) and Reliance (−28%) all sit near or at 52-week lows, while Williams (29.4× forward), Targa (record EBITDA, no data-center contract) and Energy Transfer (near its high) have held [54][55]. The de-rating looks like a macro and "AI-capex-peak" trade rather than a change in contracted backlogs, which rose in every Q2 2026 report I read. That gap is the opportunity set in §10.

11. **Ranked shortlist (details §10):** 1 Kinder Morgan (KMI); 2 Kodiak Gas Services (KGS); 3 Williams (WMB); 4 EQT (EQT); 5 DT Midstream (DTM); 6 Energy Transfer (ET); 7 NextEra Energy (NEE); 8 Capital Power (TSX:CPX); 9 Enbridge (ENB); 10 Expand Energy (EXE); 11 Ormat (ORA); 12 RWE (XETRA:RWE).

---

## 1. Value-chain map (October 2026)

Notation: `exchange:ticker`, followed by the US over-the-counter or ADR symbol where one exists. "Scarcity" is my reading of the evidence in §§2–8.

| Layer | Products / services | Listed companies | Notable private or state-owned | Scarcity 2026–28 |
|---|---|---|---|---|
| **A. Gas molecules** | Dry gas from Appalachia (Marcellus/Utica), Haynesville, Permian associated gas | EQT (NYSE:EQT); Expand Energy (NASDAQ:EXE); Antero Resources (NYSE:AR); Range Resources (NYSE:RRC); Comstock (NYSE:CRK); Coterra (NYSE:CTRA); Chesapeake legacy inside EXE | Aethon, Ascent (private Appalachia/Haynesville) | **Not scarce.** EIA sees record production in 2026–27 [7]; the scarcity is regional (Appalachia) and seasonal |
| **B. Long-haul interstate transmission** | FERC-regulated trunk lines, laterals, compression; 20–36 month permitting | Williams (NYSE:WMB) – Transco; Kinder Morgan (NYSE:KMI) – TGP, SNG, NGPL, EPNG; Energy Transfer (NYSE:ET); Enbridge (TSX/NYSE:ENB) – Texas Eastern, Algonquin; TC Energy (TSX/NYSE:TRP) – Columbia, ANR; DT Midstream (NYSE:DTM) – LEAP, Guardian, Vector, Millennium; Boardwalk (owned by Loews, NYSE:L); Equitrans assets inside EQT (MVP); Kinetik (NYSE:KNTK); Western Midstream (NYSE:WES); ONEOK (NYSE:OKE) | — | **Scarce to 2028–29.** Every announced data-center-linked expansion lands 2027–30 [1][8][19][50] |
| **C. Intrastate and gathering** | Texas intrastate headers (no FERC certificate), Permian takeaway | Energy Transfer (Hugh Brinson, 1.5 Bcf/d, live Sep 2026) [6]; Kinder Morgan (GCX expansion) [1]; Targa (NYSE:TRGP); Williams (Momentum Midstream, 6 Bcf/d gathering) [5]; Antero Midstream (NYSE:AM) | Matterhorn (WhiteWater, private) | **Loosening in Texas** as Permian takeaway grows 4.6 Bcf/d in H2 2026 [11] |
| **D. Compression, treating, behind-the-meter power** | Contract compression horsepower; gas reciprocating engines and small turbines as prime power | Kodiak Gas Services (NYSE:KGS); Archrock (NYSE:AROC); USA Compression (NYSE:USAC); Williams' Power Innovation (inside WMB) | Caterpillar lead times 195–200 weeks for compression packages [11] | **Scarce:** compression utilisation 94–98% [9][11]; turbine and engine slots allocated to 2030 |
| **E. LNG (competing demand)** | Export terminals pulling the same Gulf Coast gas | Cheniere (NYSE:LNG), Venture Global (NYSE:VG), Energy Transfer (Lake Charles), Kinder Morgan (pipes) | — | Exports 15→19 Bcf/d 2025–27 [7]; the bigger call on gas than data centers to 2028 |
| **F. Renewables and storage for data centers** | Wind, solar, batteries, geothermal under PPAs or utility tariffs | NextEra (NYSE:NEE); Brookfield Renewable (NYSE:BEP/BEPC); AES (NYSE:AES, pending take-private at $15) [22]; Clearway (NYSE:CWEN); Ormat (NYSE:ORA); Enbridge (renewables); RWE; Iberdrola (BME:IBE; IBDRY); Engie (EPA:ENGI; ENGIY); EDP (ELI:EDP); Tesla Energy (inside NASDAQ:TSLA); Fluence (NASDAQ:FLNC) | Fervo (Cape Station, Utah, $462 M Series E Nov 2025) [51]; Sage Geosystems (Meta); Intersect Power; Invenergy | **Firm clean (geothermal, hydro, storage-backed) scarce**; plain wind/solar PPAs in surplus in Europe [31] |
| **G. Non-US generators and grids** | Regulated grids, merchant fleets, utility-scale PPAs | Europe: RWE (XETRA:RWE; RWEOY), Engie, Iberdrola, EDP, Enel (BIT:ENEL; ENLAY), SSE (LSE:SSE; SSEZY), National Grid (LSE:NG; NGG), E.ON (XETRA:EOAN; EONGY), Fortum (HEL:FORTUM), Ørsted (CPH:ORSTED). Canada: Capital Power (TSX:CPX), TransAlta (TSX/NYSE:TA), Fortis (TSX/NYSE:FTS), Brookfield. Japan: Kansai (TSE:9503), TEPCO (TSE:9501), Kyushu (TSE:9508). Korea: KEPCO (KRX:015760; NYSE:KEP). Australia: AGL (ASX:AGL), Origin (ASX:ORG). Gulf: ACWA Power (TADAWUL:2082), TAQA (ADX:TAQA). India: Tata Power (NSE:TATAPOWER), Adani Power (NSE:ADANIPOWER), Adani Green (NSE:ADANIGREEN), NTPC (NSE:NTPC), Reliance (NSE:RELIANCE). Malaysia/Singapore: Tenaga (KLSE:5347), YTL Power (KLSE:6742), Sembcorp (SGX:U96), Keppel (SGX:BN4) | EDF, Hydro-Québec, Ontario Power Generation, EWEC, Saudi Electricity (listed but state-controlled), Humain | **Grid connection scarce** in Dublin, Amsterdam, Frankfurt, London, Tokyo and Seoul; **generation surplus** in the Gulf and Alberta |

---

## 2. How much gas? The demand estimates and what they assume

### 2.1 The estimates, in order of publication

| Forecaster (date) | Incremental gas for data centers | Horizon | Method and caveats |
|---|---|---|---|
| East Daley Analytics (20 Feb 2025) [3] | **4.2–6.1 Bcf/d** | by 2030 | Bottom-up: 290 projects, ~81 GW, counties mapped. Assumes gas takes 40% of load; raising that to 50% adds 1.13 Bcf/d; 10% more on-site peakers adds 5% |
| Antero Resources (1 Aug 2025) [13] | "nearly **5 Bcf/d**" of Appalachian demand from data centers and power projects | end of decade | Company estimate; regional only |
| Range Resources (23 Jul 2025) [16] (secondary) | **4–5 Bcf/d** of additional regional power demand | "by the end of the decade" | Appalachia only; Range said an offtaker for its Washington County plant was "near term" |
| DT Midstream (Q2 2026) [10] (secondary) | **7.5 Bcf/d** potential | not dated | 50 GW of utility-announced large loads in MISO and PJM converted at a gas share |
| EQT (Q2 2026) [18] (secondary) | **~20 Bcf/d** of "potential Appalachian demand and pipeline projects" (45+) | multi-year | A project list, not a demand forecast; includes pipelines that would move gas out as well as plants that would burn it |
| Wood Mackenzie (Jul 2026, via [12]) (secondary) | **+17 Bcf/d** power-sector gas demand | mid-2030s | Total power sector, not only data centers |
| BloombergNEF (Sep 2026) [12] (secondary) | **+15 Bcf/d** data-center gas; power sector +18 Bcf/d to 54 Bcf/d | 2025–35 | Gas supplies 69% of new grid-connected data-center power; production +35 Bcf/d; implied 11 Bcf/d shortfall once LNG (+21 Bcf/d) is added |
| EIA STEO (9 Sep 2026) [7] | not broken out | 2026–27 | Generation 4,368 TWh in 2026 (+2.2%), +1.7% in 2027; gas 40% of generation; Henry Hub $3.43 (2026), $3.28 (2027); LNG exports 17 and 19 Bcf/d |

**Reading the spread.** The 2025 estimates (4–6 Bcf/d by 2030) and the 2026 estimates (15–17 Bcf/d by 2035) are not inconsistent: they differ by five years and by whether behind-the-meter plants are counted. What matters for investors is the shape of the curve. If 81 GW of projects produce 4–6 Bcf/d, then 15 Bcf/d implies roughly 200–240 GW of gas-served data-center load by 2035, which is more than the entire current US data-center fleet several times over (**my estimate**; the GW-to-Bcf/d ratio from [3]). Either the hyperscalers build at that pace, or the 2035 estimates will come down. EIA's view that gas stays at 40% of generation while prices fall to $3.28 in 2027 says the near-term molecule market is still supply-led: Permian associated gas and Haynesville growth outrun the new burn until LNG trains and pipelines absorb it.

### 2.2 What the midstream operators themselves say

- **Kinder Morgan** (22 Jul 2026): "more than 60%" of the $9.6 B backlog serves power generation and local distribution companies; about $400 M of additional projects await board approval [1]. At the Wolfe and Barclays conferences management framed gas demand as the growth engine [headline only].
- **Williams** (4 Aug 2026): raised 2026 EBITDA guidance to $8.3–8.5 B (midpoint +$200 M), lifted its long-term EBITDA growth target to 11%+ a year through 2030, and said Socrates delivered first power in under 18 months [5]. Its Q1 release listed Power Express (upsized to 750 MMcf/d), Northeast Supply Enhancement and Southeast Supply Enhancement under construction, Atlas (164 MMcf/d for a Northeast data center, end-2026) and Silver Spur (275 MMcf/d into Idaho, early 2030) [2][52].
- **DT Midstream** (30 Jul 2026): $3.4 B organic backlog, 60% at final investment decision; a 100 MMcf/d Appalachia gathering expansion with "a new data center interconnect on NEXUS" in Q4 2027; LEAP Phase 5 to 2.3 Bcf/d in H2 2028, expandable to ~4 Bcf/d; 2027 EBITDA guidance $1,225–1,295 M [10].
- **TC Energy** (30 Jul 2026): Columbia "Central Virginia" (0.4 Bcf/d, 2028–30) and "Clark" (0.3 Bcf/d, 2028) expansions approved for gas-fired generation "including data centre development"; Bison XPress (0.3 Bcf/d) in service; NGTL sees up to 1.0 Bcf/d of incremental throughput opportunities; 2026 comparable EBITDA at the upper end of $11.6–11.8 B [8].
- **Energy Transfer** (4 Aug 2026): adjusted EBITDA $5.07 B in Q2 (+31%), 2026 guidance raised to $18.8–19.1 B; Hugh Brinson Phase I (1.5 Bcf/d, ~400 miles, Waha to Dallas–Fort Worth) in commercial service with full capability targeted 1 September 2026; 100 MMcf/d added by two customers for Texas power-plant or data-center sites; Desert Southwest pipeline through FERC scoping; the Springerville lateral on Transwestern to convert two coal units to gas [4][6].

### 2.3 Where the gas comes from and why basis matters more than Henry Hub

Archrock's management (Q2 2026) summarised the supply side: LNG exports rising from ~20 Bcf/d in 2026 to 35 Bcf/d by 2030, and Permian takeaway adding 4.6 Bcf/d in H2 2026 and 6.7 Bcf/d through 2030 [11]. On the demand side, Appalachian producers see 4–5 Bcf/d of regional power demand by 2030 [13][16]. The Appalachian basin cannot grow into that demand unless new pipe is built: EQT said one-third of the basin's supply "will be challenged to hold flat" and pulled $85 M of MVP Southgate capital forward into 2026 [18]. Natural Gas Intelligence reported an October 2026 forward spread of about $2/MMBtu between Appalachian and Southeast hubs [59] (headline only), the clearest market signal that gas is cheap where it is produced and dear where data centers want to burn it. Transco's next Appalachian expansion is already facing early opposition [58] (headline only).

**Engineering implication.** A data center in northern Virginia or the Carolinas that signs a 2028 gas PPA is implicitly buying Transco Zone 5 capacity. A data center in Pennsylvania or Ohio that sits on an EQT or Williams gathering header buys gas at Dominion South, roughly $2 cheaper on the forward curve [59]. That difference, about $14/MWh at a 6.8 MMBtu/MWh heat rate (**my estimate**), is why Homer City (4.4 GW campus supplied by EQT [headline, NGI]) and Socrates (Ohio) exist, and why the Southeast needs Southeast Supply Enhancement, Mississippi Crossing, Kosci Junction and SSE4 before 2028–29.

---

## 3. Pipelines: projects, permitting and the Appalachian bottleneck

### 3.1 Data-center-linked pipeline and power projects (announced, with dates)

| Owner | Project | Capacity / size | Cost | Status (date) | In service |
|---|---|---|---|---|---|
| Williams (Transco) | Southeast Supply Enhancement (SESE) | 1.6 Bcf/d; 55 miles of 42-inch loop, ~76,000 hp compression; VA, NC, SC, AL | $1.53 B | FERC certificate 4 Feb 2026; construction Q4 2026 [19] | Q4 2027 |
| Williams (Transco) | Power Express | upsized to 750 MMcf/d (Virginia data-center market) | n/d | Customer agreements; under development [2] | 2029–30 (**my estimate**) |
| Williams (Transco) | Northeast Supply Enhancement (NESE) | n/d | n/d | Construction commenced Q1 2026 [2] | 2027 |
| Williams | Shelby Connector; Delta Access | 750 MMcf/d (to 1.5); 2.25 Bcf/d (to 3.5) | n/d | Announced with Momentum acquisition [5] | H1 2028; early 2029 |
| Williams | Atlas (Northeast data center) | up to 164 MMcf/d, replaces diesel backup with gas | n/d | Customer agreement Q1 2026 [52] | end 2026 |
| Williams Power Innovation | Socrates (Meta, New Albany OH) | 200 MW phase 1 in service Q2 2026; phase 2 year-end 2026 | part of 5-project, 2.6 GW, $5.34 B Blackstone JV | In service / under construction [5][48] | 2026 |
| Williams Power Innovation | Socrates the Younger; Neo; Aquila; Apollo | 340 MW; 682 MW; n/d; n/d | Neo alone $2.3 B [2] | Neo customer agreement Q1 2026 [2]; Aquila H1 2027 [48] | 2027–H2 2028 |
| Kinder Morgan | Mississippi Crossing (MSX) | ~1.5 Bcf/d (**my estimate** from prior disclosure; not restated in [1]) | ~$1.7 B | FERC approved; under construction [1] | Q2 2028 |
| Kinder Morgan | South System Expansion 4 (SSE4) | ~1.2 Bcf/d (**my estimate**) | ~$3.5 B ($1.8 B KM share) | FERC decision expected July 2026 [60] (headline); Phase 1 Q4 2028, Phase 2 Q4 2029 [1] | 2028–29 |
| Kinder Morgan | Amarillo Expansion (NGPL); South Texas Enhancement | n/d; n/d | $200 M ($75 M KM); $90 M | Filing Q3 2026 [1] | Q3 2028; Q2 2028 |
| Energy Transfer | Hugh Brinson Phase I | 1.5 Bcf/d, Waha–DFW | n/d | In service; full capability 1 Sep 2026 [6] | 2026 |
| Energy Transfer | Desert Southwest (Transwestern) | n/d | n/d | FERC scoping done Q2 2026 [6] | 2029 (**my estimate**) |
| Energy Transfer | CloudBurst data-center supply (Texas) | n/d (reported up to 450 MMcf/d in 2025 press) | — | Agreement reported Feb 2025 (DCD) [61b] (headline only) | 2026–27 |
| TC Energy (Columbia) | Central Virginia; Clark | 0.4 Bcf/d; 0.3 Bcf/d | within $3 B of 2026 sanctions | Approved Q2 2026 [8] | 2028–30; 2028 |
| TC Energy | Northwoods (Midwest, data centers) | ~0.4 Bcf/d (**my estimate**) | US$0.9 B | Approved May 2025 [83] (headline) | 2027 |
| Boardwalk (Loews) | Kosci Junction | 1.16 Bcf/d anchored; up to 1.58 | n/d | FID Dec 2024; FERC application targeted Q3 2025 [50] | H1 2029 |
| DT Midstream | LEAP Phase 5; Guardian G3/G4; Appalachia expansion with NEXUS data-center interconnect | +200 MMcf/d to 2.3 Bcf/d; n/d; 100 MMcf/d | within $3.4 B backlog | 60% at FID [10] | H2 2028; n/d; Q4 2027 |
| Enbridge | Clear Fork solar (600 MW, Meta); 365 MW solar + storage (Meta); Bay Runner Twin (2.6 Bcf/d to Rio Grande LNG) | — | US$0.9 B (Clear Fork) | Sanctioned Jul 2025 / May 2026 / 2026 [38][81][82] | 2027; 2028; 2030 |
| Comstock / NextEra | Western Haynesville power hub, Anderson County TX | 5.2 GW gas, serving 5 GW of load; ~1 Bcf/d by 2031 | $16 B | Selected by US Commerce Dept 20 Mar 2026 under US–Japan investment framework [15] | 2029–31 |

### 3.2 Permitting timelines

Transco's SESE shows the realistic schedule: a 2024 filing, a 4 February 2026 certificate, Q4 2026 construction start and Q4 2027 service [19], so about 36 months from filing to gas. Kinder Morgan called its 2026 filings the "biggest projects in 25 years" and credited a regulatory speed-up [57] (headline only); its own table nonetheless shows 2028–29 in-service dates for everything sanctioned this year [1]. FERC's expansion of blanket-certificate thresholds (Davis Graham note, 2026) [headline only] shortens the small-project path (laterals, compressor uprates), which is where data-center connections to existing trunk lines actually happen. The state-level fights (Dan River watershed opposition to SESE [19]; early opposition to Transco's Appalachian expansion [58]) have not stopped projects since 2025, but they add 6–12 months and are the reason Southeast capacity is scarce until 2028.

### 3.3 Who owns the chokepoints

- **Transco Zone 5 (Virginia–Carolinas)** is the single most valuable stretch of gas pipe for AI: SESE, Power Express and the Columbia Central Virginia expansion all terminate there. Williams owns Transco outright.
- **Southeast from the Mississippi corridor**: Kinder Morgan (MSX, SSE4), Boardwalk (Kosci Junction) and Southern Natural Gas (KMI) compete to feed Georgia, Alabama and Mississippi utilities whose data-center load (Entergy, Southern Company, TVA) is the fastest-growing in the country. Three projects, all 2028–29, suggest a healthy rather than monopolistic market.
- **Texas intrastate**: Energy Transfer's Hugh Brinson is live now; this is where 2026–27 behind-the-meter gas data centers (Abilene, West Texas) actually get fuel.
- **Appalachia out**: Mountain Valley Pipeline (in service 2024), MVP Southgate (EQT, under way), Transco expansions; the Constitution revival is still a headline [headline only]. This is the binding constraint for the 20 Bcf/d project list EQT describes.

---

## 4. Gas producers positioned for power demand

| Company | Production and position | Data-center-linked items (dated) | 2 Oct 2026 valuation [54][55] |
|---|---|---|---|
| **EQT (NYSE:EQT)** | Largest Appalachian producer; owns Equitrans (MVP, gathering) | Agreement in principle to supply the Homer City 4.4 GW campus (Jul 2025) [headline, NGI/Business Wire]; CPV power agreement adding ~$100 M/yr of free cash flow; "45 potential Appalachian demand and pipeline projects totalling nearly 20 Bcf/d"; 2026 production guidance raised 90 Bcfe; 5-year LNG offtake from 2028; net-debt target $5 B [18] | $50.17; mkt cap $31.4 B; fwd P/E 16.2×; 52-wk $47.94–68.24; Strong Buy; target $67.50 |
| **Expand Energy (NASDAQ:EXE)** | Largest US gas producer (Haynesville + Appalachia) | Management says LNG, not data centers, drives demand and that data-center resistance is growing [56] (headline only) | $85.52; $19.8 B; fwd P/E 11.3×; 52-wk $83.25–126.62; Buy; target $125.52 |
| **Antero Resources (NYSE:AR)** | Marcellus liquids-rich; sold Utica | Graphs ~5 Bcf/d of Appalachian AI-fuelled demand (Aug 2025) [13]; Antero Midstream record volumes (Q2 2026) [85] (headline) | $34.08; $10.5 B; fwd P/E 8.2×; 52-wk $29.10–45.75; Buy; target $50.29 |
| **Range Resources (NYSE:RRC)** | 2.2 Bcfe/d, 30+ years of Marcellus inventory | Washington County PA gas plant with Liberty Energy and Imperial Land (Apr 2025), offtaker expected "near term" (Jul 2025) [16] | $38.23; $8.8 B; fwd P/E 10.4×; 52-wk $32.68–48.31; Hold; target $46.13 |
| **Comstock (NYSE:CRK)** | Western Haynesville, 535,000 net acres, 24 wells to sales in 2026 (from 12) [14] | Host site for NextEra's 5.2 GW, $16 B hub; up to ~1 Bcf/d by 2031 [15] | $12.78; $3.6 B; fwd P/E 24.5×; 52-wk $12.12–28.10; Hold; target $16.25 |
| **Coterra (NYSE:CTRA)** | Marcellus + Permian | No verified data-center contract found | Quote not retrieved (data gap, §13) |

**Reading.** The producers' direct data-center contracts are small relative to their volumes (EQT's CPV deal is worth ~$100 M a year against $2.7 B of trailing net income [18][54]). Their real leverage is to Appalachian basis narrowing when new pipe arrives in 2027–29, and to the recontracting of firm supply to utilities. Expand's candour that data centers play "second fiddle" to LNG [56] is the honest engineering view for 2026–28; the data-center call on gas becomes first-order only after 2028, when the Southeast pipes land and the behind-the-meter fleets (Williams, Kodiak, NextEra's 9.5 GW) start burning.

---

## 5. Compression, treating and behind-the-meter power: the quiet beneficiaries

| Company | Q2 2026 facts | Power / data-center items | Valuation (2 Oct 2026) [54][55] |
|---|---|---|---|
| **Kodiak Gas Services (NYSE:KGS)** | Revenue $391 M; adj. EBITDA $217 M (+22%); fleet 4.50 M hp at **98.2%** utilisation; 2026 EBITDA guidance raised to $830–860 M; leverage 3.2× [9] | Power Infrastructure segment (ex-DPS acquisition): 405 MW, 89.6% utilised, $95–125 M 2026 revenue; **multi-year order for 1 GW of gas turbines by 2030**; power growth capex $400–450 M; 76 MW six-year primary-power contract for a West Texas data center (~40 reciprocating units, Q4 2026–Q1 2027), its second such contract; target 2 GW by 2030 [9][44] | $54.33; $5.6 B; fwd P/E 20.3×; 52-wk $32.55–77.68; Strong Buy; target $83.13 |
| **Archrock (NYSE:AROC)** | Contract ops revenue $329 M; adj. EBITDA $213 M; 4.5 M hp at **94.4%**; gross margin 71% (7th quarter >70%); 2026 EBITDA $865–885 M; leverage 2.6× [11] | 665,000 hp contract with 8-year base + 2-year extension; Caterpillar lead times **195–200 weeks**; 2027–30 framework of 1 M hp additions for $1.4–1.6 B; cites data-center power demand as one of three drivers [11] | $30.33; $5.3 B; fwd P/E 15.9×; 52-wk $22.88–42.23; Strong Buy; target $42.50 |
| **USA Compression (NYSE:USAC)** | Not opened this session (data gap) | — | $25.42; 52-wk $21.85–30.55 [55] |

**Why this layer matters to engineers.** A 100 MW behind-the-meter gas plant built from reciprocating engines needs roughly 40–50 engine-generator sets, gas treating, and a service organisation within a few hours' drive; the compression companies already run thousands of Caterpillar and Waukesha engines in the same basins and employ the technicians. Kodiak's 1 GW turbine order [9] is one of the few disclosed turbine allocations outside the utilities and hyperscalers. The constraint is the engine and turbine supply chain (195–200 weeks for Caterpillar packages [11]), which keeps utilisation at 94–98% and pricing firm. The risk is that the power segment's returns are lower and lumpier than compression, which is why Kodiak reduced its 2026 power capex range [9].

---

## 6. Renewables and storage for data centers

### 6.1 United States

**NextEra Energy (NYSE:NEE)** is the only renewables developer with a disclosed hyperscaler pipeline at scale [21]:
- Energy Resources backlog **35.1 GW** after 3.6 GW of Q2 2026 additions (2.0 GW storage) and 1.1 GW placed in service; storage pipeline over 110 GW.
- **30 potential data-center hubs** under discussion, 40 expected by year-end; base case 15 GW of new generation for data centers by 2035, upside 30 GW+.
- Up to **9.5 GW of gas-fired generation** in development in Texas and Pennsylvania, with presidential approval received in March 2026 and US–Japan government negotiations ongoing (the Comstock-hosted 5.2 GW hub is part of this [15]).
- Duane Arnold nuclear recommissioning on track for Q1 2029; 6 GW of SMR co-location potential at nuclear sites.
- Recontracted 500 MW in Q2 at a ~$20/MWh premium to recent pricing (1,100 MW year-to-date); supply chain secured (panels and batteries through 2029, transformers through decade-end).
- FPL: 21 GW of large-load interest, 12 GW in advanced discussions; large-load expectation raised from 6 to 8 GW by 2032.
- Guidance: 2026 adjusted EPS $3.92–4.02 (high end); 8%+ growth to 2032 and 9%+ to 2035; dividend growth 6% in 2026–28.
- **Dominion combination**: filed 15 July 2026 [27]; expected close late 2027 [26]; $2.25 B of shareholder-funded bill credits; first Virginia SCC hearing November 2026 [26]. The merger makes NextEra the owner of the world's largest data-center utility territory and is the main thesis risk (regulatory conditions, dilution, Virginia politics; US lawmakers have argued the $67 B deal could raise prices [headline, CBS]).

**AES (NYSE:AES)**: signed data-center agreements of **8.2 GW** (4.2 GW operating, ~4 GW backlog) and an 11.1 GW renewables backlog; agreed on 2 March 2026 to be acquired by GIP (BlackRock), EQT Infrastructure VI, CalPERS and QIA for **$15.00 cash** per share (equity $10.7 B, enterprise value ~$33.4 B), 100% equity financed, closing late 2026 or early 2027 pending Indiana and Ohio commission approvals [22]. At $14.91 the stock is a 0.6% spread [54][55]; it is no longer an operating investment.

**Brookfield Renewable (NYSE:BEP/BEPC)**: Q2 2026 FFO $0.62/unit (+11%); 1.3 GW commissioned; **2.6 GW of PPAs signed**; 80 GW development pipeline; 6 GW of batteries operating or under construction; a 20-year Google hydro contract (Safe Harbor) generated $700 M of up-financing; Westinghouse's AP1000 programme backed by a $17.5 B DOE loan commitment for 10 reactors [23]. No quantitative update on the **10.5 GW Microsoft framework (May 2024)** [headline, Utility Dive/DCD]. Investor day was held 29 September 2026 [headline only]. At $28.35 the units yield 5.5% and trade 26% below the 52-week high; reported EPS is negative so P/E is not meaningful [54].

**Clearway (NYSE:CWEN)**: no verified data-center contract found this session; at $29.34, 41× forward, 6.5% yield, 30% below the 52-week high [54][55]. Rejected (§11).

**Ormat Technologies (NYSE:ORA)**: 150 MW geothermal portfolio PPA for Google through NV Energy's Clean Transition Tariff, COD 2028–30, 15-year term, PUC Nevada approval expected H2 2026 (17 Feb 2026) [24]; 20-year, ~13 MW PPA with Switch (Jan 2026) [headline, Ormat/DCD]. Portfolio 1,695 MW (1,310 MW geothermal and solar, 385 MW storage) [24]. At $92.86, 46.7× forward, 37% below the 52-week high after a UBS downgrade to Neutral on 1 October [54]. Geothermal is the only non-nuclear firm clean resource a hyperscaler can contract today; the question is cost (Ormat's own economics are not public per project) and drilling capacity.

**Enbridge** (renewables inside a pipeline company): 600 MW Clear Fork solar for Meta (US$0.9 B, Jul 2025) [81]; 365 MW solar-plus-storage for Meta (May 2026) [82] (headline); 1.4 GW solar and wind plus 1.6 GWh storage sanctioned under Meta PPAs in 2026, 1.5 GW of safe-harboured opportunities advanced [38].

**Private firm-clean developers.** Fervo (Cape Station, Utah: up to 500 MW initially with permits to 2 GW, first power expected 2026; $462 M Series E in Nov 2025; >$1.5 B raised in total; PPAs with NV Energy 115 MW and Shell 31 MW) [51] (secondary). Sage Geosystems has a 150 MW geothermal agreement with Meta (2024) [headline only, not re-verified this session].

**Batteries as capacity.** Tesla deployed 13.7 GWh of storage in Q3 2026 [29] (headline only), versus 12.5 GWh in Q3 2025 when energy gross margin was 31.4% [28]; management names "AI and data centre applications" as a demand source [28]. Fluence trades at $7.61, 77% below its 52-week high of $33.51 [55]; I did not open its fiscal Q3 2026 release (data gap). The grid-side storage story for data centers is real (NextEra added 2.0 GW of storage in one quarter [21]) but the listed pure plays are either not pure (Tesla) or distressed (Fluence).

### 6.2 The 2025 budget law (OBBBA) and what it changed

The One Big Beautiful Bill Act (July 2025) ends the technology-neutral production and investment credits for wind and solar unless construction begins by 4 July 2026 or the project is placed in service by the end of 2027; storage, geothermal and nuclear keep credits (storage to 2033), and prohibited-foreign-entity rules restrict Chinese content [headline: Tax Law Center, pv magazine USA, CESA diagram]. Observed effects by October 2026:
- Developers safe-harboured aggressively (NextEra's supply chain through 2029 [21]; Enbridge's 1.5 GW [38]).
- Recontracting prices rose (NextEra's ~$20/MWh premium [21]).
- Lazard's 2026 study shows every technology's cost rising, with high-end costs rising faster: utility solar $40–98/MWh ($16 with the credit), onshore wind $37–99, combined-cycle gas $51–129, gas peaking $144–276, nuclear $175–255 [39].
- Storage and geothermal, which kept their credits, are the clean resources whose relative economics improved.

### 6.3 Is 24/7 clean matching still a buying criterion?

The evidence says no, for most new AI capacity:
- Axios reported on 6 May 2026 that Microsoft is "mulling" its 24/7 clean-energy target and that pre-AI climate goals are "becoming untenable" as a competitive matter [25].
- Rystad (May 2026) records Google acknowledging difficulty meeting its 2030 hourly target and European data-center PPAs collapsing from 4.2 GW (2024) to 2.6 GW (2025) to 0.1 GW (Q1 2026), partly on "pricing disconnect" and falling capture rates [31].
- Meta is simultaneously the anchor customer for Williams' gas plants (Socrates) [48], Enbridge's and NextEra's solar [38][21], Capital Power's Alberta gas-backed supply [17] and Sage's geothermal; it is buying availability by 2027–28 in whatever form the local grid can deliver.
- Google, by contrast, is buying firmness differently: 1 GW of demand response embedded in PPAs with five utilities (Indiana Michigan Power, TVA, Entergy Arkansas, Minnesota Power, DTE) announced 19–20 March 2026, with workload shifting treated as a capacity resource [43] (secondary), and 150 MW of Ormat geothermal through a utility tariff [24].

The engineering transition is from "annual megawatt-hour matching" to "firm capacity by a date", and the winners are whoever can deliver firm MW in 2027–28: gas, storage-backed solar, geothermal, hydro and demand flexibility.

---

## 7. International electricity providers exposed to data-center demand

### 7.1 Europe

**Market context.** S&P Global expected European data-center demand to roughly double by 2030 [93] (headline only); Rystad sees capacity rising from 16 GW (2024) to 36 GW (2030) [31]. The constraint is connection, and the policy response is to make data centers pay for or bring their own firmness.

| Market / company | Data-center exposure (dated) | Grid constraint and pricing regime | Valuation, 2 Oct 2026 [54][55] |
|---|---|---|---|
| **RWE (XETRA:RWE; RWEOY)** | Two European data-center deals "nearing agreement" (Q2 2026 call, Aug 2026); 30 sites with suitable infrastructure; existing PPAs with Meta, AWS, Google; up to 10 GW of US capacity secured, 3 GW+ of US gas targeted by 2035; €42 B net investment 2026–31 [30]. German power-plant strategy: 12 GW tender in 2026 (10 GW hydrogen-ready baseload gas), online by 2031 [41] | German grid congestion in Frankfurt region [headline, TechPolicy Press]; capacity-market design by 2027 [41] | €59.10; mkt cap ≈ €42.0 B (**my estimate** from [54] share count); fwd P/E 18.7×; 52-wk €39.13–62.00; Buy; target €68.05 |
| **Engie (EPA:ENGI; ENGIY)** | No dated data-center contract found this session (data gap); large flexible-generation and PPA franchise | France: EDF (state-owned) controls nuclear; Engie exposure via gas plants and renewables | €22.78; ≈ €55.1 B (**my estimate**); fwd P/E 11.4×; 52-wk €17.79–29.89; Buy; target €30.75 |
| **Iberdrola (BME:IBE; IBDRY)** | Joint venture with Echelon to develop data centres in Spain, >€2 B [91][92] (headline); Spain is Europe's leading PPA market (2+ GW across 12 deals [31]) | Spanish grid access auctions; Iberian prices often zero at midday, which is why hybrid solar-plus-storage PPAs dominate [31] | €20.82; ≈ €134 B (**my estimate**); fwd P/E 19.4×; 52-wk €16.11–22.08; Hold; target €20.54 |
| **EDP (ELI:EDP)** | Renewables PPAs; no dated data-center contract found | Portugal/Spain as above | €4.80; 52-wk €3.69–4.90 [55] |
| **Enel (BIT:ENEL; ENLAY)** | Italian grid capex; no dated data-center contract found | Milan connection queue [headline] | €8.80; 52-wk €8.11–10.31 [55] |
| **SSE (LSE:SSE; SSEZY)** | Transmission and distribution capex in Scotland and southern England; AI Growth Zones | UK demand queue 41→125 GW (Nov 2024–Jun 2025); Ofgem reform with deposits, milestones and strategic designation of AI Growth Zones; autumn 2026 consultations [33] | 2,447p; ≈ £29.8 B (**my estimate**); fwd P/E 13.2×; 52-wk 1,725–2,767.5p; Buy; target 2,741p |
| **National Grid (LSE:NG; NGG)** | Owner of GB transmission and a large New York/Massachusetts franchise; connection reform is its workload | As above [33] | 1,146.5p; 52-wk 1,069.5–1,428.5p [55] |
| **E.ON (XETRA:EOAN; EONGY)** | German distribution grids; connection requests from data centers around Frankfurt | Grid fees regulated; investment rising | €17.02; 52-wk €14.98–20.39 [55] |
| **Fortum (HEL:FORTUM)** | Nordic hydro and nuclear; Finnish data centers (Amazon/OX2 367 MW wind PPA cited by Rystad [31]) | Nordic surplus, but transmission south constrained | €23.62; 52-wk €16.02–25.84 [55] |
| **Ørsted (CPH:ORSTED)** | Offshore wind delays are one reason European data-center PPAs fell [31] | — | DKK 139.45; 52-wk 111–172 [55] |

**Ireland.** The CRU's 12 December 2025 Large Energy Users Connection Policy requires data centers ≥10 MVA (Tier B) to provide 100% of their maximum import capacity as de-rated, separately metered, grid-connected generation that participates in the market, and to source 80% of annual demand from new Irish renewables within a six-year glide path; system operators had to publish processes by 31 March 2026 [32]. Dublin connections are "back online" under these terms [76] (headline only). The economic effect is that an Irish data center must now also be a power plant, which favours gas-engine fleets and the operators who can build them.

**Netherlands.** TenneT: no new grid capacity in large parts of Noord-Holland, including Amsterdam's Zuidas and port areas, for at least ten years; overloading expected from 2026; expansion complete by 2036 [46]. Dutch growth is shifting to Groningen, Eemshaven and the south [headline, Data Center Knowledge]; Amsterdam Zuidoost still granted a large permit in July 2026 [headline, NL Times].

**Germany.** 12 GW of controllable capacity tendered in 2026 (10 GW must run continuously), hydrogen-ready, online by 2031, decarbonised by 2045; capacity market by 2027 [41]. An investigative report (DeSmog, 29 Apr 2026) describes a lobbying push for gas-powered AI data centers across Europe [79] (secondary). The political constraint in Europe is not that gas is banned but that it must be hydrogen-ready and state-aid-compliant, which adds cost and time; the US has no such requirement.

### 7.2 Canada

| Company | Data-center exposure (dated) | Context | Valuation (2 Oct 2026) [54][55] |
|---|---|---|---|
| **Capital Power (TSX:CPX)** | **250 MW to Meta**, Sturgeon County, Alberta, >10 years, capacity-plus-energy payments backed by the Alberta portfolio, service H2 2028 (8 Jul 2026) [17]; earlier 250 MW deal with an unnamed developer [63] (headline); Genesee site kept for "further commercial optimization" [17] | Alberta's energy-only market and AESO's large-load process; a municipal data-centre freeze north of Calgary (Jul 2026) [64] (headline); Alberta government courting 10+ GW of proposals [headline] | C$61.46; ≈ C$9.65 B (**my estimate**); fwd P/E 27.8× (EPS depressed by one-offs); 52-wk C$56.48–77.02; Buy; target C$77.69 |
| **TransAlta (TSX/NYSE:TA)** | Non-binding MoU with CPP Investments and Brookfield for 230 MW scalable to 1 GW at Keephills, Parkland County (3 Mar 2026); ~9 GW fleet, mainly gas [45] | Alberta as above | C$17.59; ≈ C$5.57 B (**my estimate**); fwd P/E 40.7×; 52-wk C$15.62–25.03; Buy; target C$23.82 |
| **Fortis (TSX/NYSE:FTS)** | Regulated grids (ITC in MISO, Arizona, BC); no contracted data-center load disclosed | Rate-base growth | C$75.31; 52-wk C$69.06–83.75 [55] |
| **Hydro-Québec (state-owned)** | Proposed **13 ¢/kWh** data-center rate (about double the large-power rate) for >5 MW sites from H2 2026, five-year transition for existing sites; sector peak ~190 MW of 200 MW allocated; ~1,000 MW projected by 2035 (19 Feb 2026) [49]; Google and others preparing rebuttals at the Régie (1 Oct 2026) [95] (headline only) | Quebec is rationing, not selling | n/a |
| **Ontario Power Generation / IESO (state-owned)** | Ontario plan: new data centres pay all energy and connection costs and receive no cash incentives [96] (headline only); IESO technical paper on large step loads (Jul 2025) [headline] | Ontario nuclear refurbishments and SMRs are the long-run supply | n/a |
| **Brookfield (NYSE:BN/BAM; BEP)** | Partner in the TransAlta MoU [45]; 10.5 GW Microsoft framework [headline] | — | see §6 |

### 7.3 Japan and Korea

**Japan.** OCCTO's supply plans and IEEJ's 2026 policy paper flag data centers and semiconductor fabs as the main source of demand growth after two decades of decline [headline only]; Nikkei reports utilities pouring billions into grids for data centers [72] (headline only; page blocked); TEPCO shares rose in December 2025 on a report of a data center near its Kashiwazaki-Kariwa nuclear plant [73] (headline only). Prices on 2 October 2026 [55]: Kansai Electric (TSE:9503) ¥2,632.5, **down 5.1% on the day** and 14% below its 52-week high (the cause was not identified this session; see §13); TEPCO (TSE:9501) ¥524, 44% below its high of ¥939; Kyushu Electric (TSE:9508) last print ¥2,098 (feed date 28 Sep; stale). Kansai's stockanalysis page (Sep 2026) showed a forward P/E of 9.8× and a target below the price [54]. Japanese utilities carry regulated tariffs with fuel-cost pass-through; their data-center upside is volume and nuclear restarts, not price.

**Korea.** The AIDC Special Act (May 2026) made data centers national strategic facilities; the government is creating 11 regional electricity price zones with discounts of ₩1–18/kWh (largest in southern Gyeongsang and Jeolla), targeted for implementation before end-2026, to pull AI and chip load (24.7 GW combined) away from Seoul, which imports 40% of its industrial power; KEPCO carries ₩202 trillion of debt and has historically built ~1 km of 345 kV line a year, with 55% of transmission projects delayed; SK Telecom plans 15 GW of AI data centers in Ulsan and Gyeongsang [34] (secondary). Reports that Samsung and SK hynix were asked to prepay about $18 B of power bills to fund the Yongin cluster grid [70] (headline only) illustrate who pays. KEPCO (KRX:015760) closed at ₩30,050 on 2 October, 57% below its 52-week high of ₩69,500; the NYSE ADR (KEP) at $11.08 is 53% below its high; trailing P/E 2.8×, forward 3.3× [54][55]. I could not establish the cause of the collapse this session (§13); the policy mix of regional discounts, tariff politics and grid prepayment is consistent with the market treating KEPCO as a policy instrument rather than a utility.

### 7.4 Australia

AGL (ASX:AGL): FY26 (to 30 June 2026) underlying EBITDA A$2,100 M, underlying NPAT A$631 M; FY27 guidance EBITDA A$1,900–2,200 M; 8.7 GW flexible fleet; Liddell battery (500 MW) operating from July 2026, Tomago battery (500 MW) and Kwinana Swift Gas 2 (220 MW) under construction (12 Aug 2026) [35]. The results release does not quantify data-center load. Price A$8.15, 52-week A$7.94–10.63; stale Yahoo page showed forward P/E 11.8× and a A$10 target [54][55]. Origin (ASX:ORG) reported electricity sales growth driven by data centres [75] (headline only); price A$10.90, 52-week A$10.02–12.84 [55]. Australia's national cabinet has mandated data-centre energy standards [headline, tech-insider]. Exposure is real but generic.

### 7.5 The Gulf

- **Stargate UAE**: 5 GW campus in Abu Dhabi (G42, OpenAI, Oracle, Nvidia, SoftBank, Cisco), first 200 MW cluster live in 2026, powered by "nuclear, solar and natural gas" (May 2025) [36].
- **TAQA (ADX:TAQA)**: 1 GW open-cycle gas plant (Al Dhafra) under a 24-year PPA with EWEC, 100% TAQA-owned (Apr 2025) [53]; AED 3.6 B financing reached financial close in January 2026, explicitly to "power UAE's AI data centres" [65][66] (headline only); EWEC/TAQA/Masdar total Abu Dhabi supply investments AED 36 B including 5.2 GW solar plus 19 GWh of batteries [53]. Wood Mackenzie expects UAE data-centre power demand to double by 2030 and notes regulatory gaps for clean procurement [98] (headline). TAQA's quote was not retrievable from the Yahoo feed (data gap).
- **ACWA Power (TADAWUL:2082)**: Saudi AI data-centre power agreements in September 2026 [67] (headline only; secondary); Humain (PIF) is the national AI company. Price SAR 163.5 on 1 October 2026, 35% below the 52-week high of SAR 252.6 [55].
- **The Gulf's advantage** is simple: regulated gas at a fraction of Henry Hub-linked prices, state-financed OCGT and solar at record-low tariffs, and no permitting queue. Its disadvantage is that the power providers are state-controlled with regulated returns; the listed vehicles (TAQA, ACWA) earn a fee, not a scarcity rent.

### 7.6 India

- Demand: Indian AI data centres could drive 191 TWh of power demand (GreentechLead) [68] (headline only). Reliance and Meta plan a 168 MW AI data centre at Jamnagar [69] (headline only); Adani, Reliance and Bharti are the fast movers [headline, Outlook Business].
- Providers: Tata Power (NSE:TATAPOWER) ₹350.15 (1 Oct), 25% below its high; Adani Power ₹196.21; Adani Green ₹1,276.10; NTPC ₹315.10, near its 52-week low; Reliance ₹1,167.70, 28% below its high [55]. All have regulated or long-term-contracted returns; data-center load is a rounding error against India's 250 GW+ system in 2026 and will stay so until 2028–30. No US listings except ADRs for none of these (Reliance GDRs trade in London).

### 7.7 Malaysia and Singapore

- **YTL Power (KLSE:6742)**: YTL Green Data Centre Park in Kulai, Johor, plus the new Sedenak Tech Park West campus with JLand (58.6 ha initially, up to ~220 ha), combined planned capacity up to **1.2 GW** (20 Aug 2026) [37]. Price MYR 5.68 on 2 October, up from a 52-week low of MYR 2.51 (a 126% range) [55]; a stale Yahoo page showed a market value of about MYR 50 B [54]. YTL Power is the only listed Asian utility whose share price has re-rated on data centers; it also owns the power plant and the water utility in Johor.
- **Tenaga Nasional (KLSE:5347)**: the grid monopoly for Johor's data-center boom (Malaysia is the fastest-growing hub in Southeast Asia); price MYR 12.96, near the 52-week low of MYR 12.50 [55]. Regulated returns; load growth helps volumes.
- **Sembcorp (SGX:U96)** and **Keppel (SGX:BN4)**: Singapore has a moratorium-then-quota regime for new data centers; both companies develop power and data-center assets in Singapore and Johor. Prices SGD 5.84 and SGD 11.04 on 2 October [55].

### 7.8 Latin America

Brazil's Redata regime (Chamber approval 25 Feb 2026; Senate approval later in 2026 [headline]) suspends federal taxes on data-center equipment for five years, worth R$5.2 B, conditional on renewable power and regional investment [47]. Brazil's abundant hydro and wind, and TikTok/Casa dos Ventos' Ceará project [headline, Mongabay], make it the Americas' cheapest clean-power data-center site; Eletrobras is the listed beneficiary but was not researched further this session.

---

## 8. Engineering and market transitions

### 8.1 Gas versus nuclear versus renewables-plus-storage for 24/7 load

Using Lazard's July 2026 ranges [39] and simple firming logic (**my estimates** in brackets):
- **Combined-cycle gas**: $51–129/MWh unsubsidised; dispatchable; 3–5 year lead time for new large turbines, 18–24 months for reciprocating-engine blocks. The 2026–28 data-center fleet is being built this way (Socrates, Kodiak, ET's 10 MW units) [5][9][6].
- **Gas peakers**: $144–276/MWh; used as firming for solar, not as baseload.
- **Nuclear (new)**: $175–255/MWh; restarts (Duane Arnold Q1 2029 [21]) and uprates are the only sub-2030 nuclear supply.
- **Solar plus 4-hour storage**: solar $40–98 ($16 with credit) plus storage; firm to perhaps 60–70% of hours in the Southwest, far less in PJM winters [my reading]. With storage credits intact to 2033, this is the cheapest "mostly firm" clean option in Texas and the Southwest.
- **Geothermal**: firm, clean, credit-eligible; constrained by drilling capacity and resource location (Nevada, Utah, California); Ormat's 150 MW for Google is the template [24].

The transition: hyperscalers have moved from "cheapest annual MWh" to "firm MW by 2027–28 at a cost premium they can absorb". A $30/MWh premium on 100% of a 500 MW campus is about $130 M a year (**my estimate**), small against the $10–15 B of GPUs it powers. That is why gas build "surges despite a 15-year-high LCOE" [39].

### 8.2 Flexible load

Duke's Nicholas Institute (Feb 2025) estimated that 76 GW of new load could be added to the existing US grid if data centers curtailed about 0.5% of their hours (roughly two hours per event), and ~100 GW with more flexibility [42]. Google's 1 GW of PPA-embedded demand response across five utilities (Mar 2026) is the first commercial-scale implementation [43]. Who loses: peaker developers and the marginal pipeline lateral; who gains: utilities that can defer capex, and the software layer. Training workloads are more shiftable than inference; as inference share rises, flexibility falls, so this is a 2026–28 bridge, not a permanent solution (my analysis).

### 8.3 Grid upgrades and who pays

The US answer in 2026 is "the data center, up front": Virginia's GS-5 tariff (effective 1 Jan 2027) requires about $1.5 M per MW of collateral, or $750 M for a 500 MW site [40] (secondary); 23 states have decided large-load cost allocation [headline, E+E Leader]; FERC launched targeted action on large-load integration and opened new co-location paths in PJM (June 2026 order) [headline, FERC/PJM]. The Canadian answer is similar (Ontario: data centres pay all costs [96]; Quebec: double the rate [49]). Korea asked the chipmakers to prepay [70]. The effect is to favour developers with balance sheets (hyperscalers, infrastructure funds) and to push smaller operators toward behind-the-meter gas, where the only collateral is a turbine deposit.

### 8.4 Cross-border power trading

Alberta exports gas-fired power logic rather than electrons: Meta's Alberta site [17] buys Alberta capacity because Alberta has surplus gas generation and no connection queue. Nordic hydro feeds Finnish and Swedish data centers but transmission south is the limit [31]. Quebec's hydro is being rationed for domestic use [49] rather than exported to New England data centers. Cross-border trading is not relieving the constraint anywhere I found.

### 8.5 Europe versus the United States on gas

The US permits behind-the-meter gas in months (Ohio approved Socrates' 200 MW in 2025 [headline, DCD]) and interstate pipe in 2–3 years; Europe requires hydrogen-readiness and state-aid clearance for new gas (Germany's 12 GW tender, online 2031 [41]), Ireland requires the data center to bring its own dispatchable generation [32], and the Netherlands simply has no grid in the Randstad for a decade [46]. Europe's AI capacity will therefore be smaller, later and more expensive; the beneficiaries are the few companies with existing sites and connections (RWE's 30 sites [30]; Iberdrola's land and grid in Spain [91]) and the Nordic hydro owners.

---

## 9. What is priced and what is not

| Narrative | Evidence (dated) | Priced? (2 Oct 2026 valuation) [54][55] |
|---|---|---|
| "Williams is the AI gas utility" | 2.6 GW power portfolio, Blackstone JV, 6 GW+ backlog, 11%+ growth target (Jul–Aug 2026) [5][48] | **Yes.** 29.4× forward, 12% below high; the highest multiple in US midstream |
| "Kinder Morgan's backlog is power-driven" | $9.6 B, >60% power/LDC, 2028–29 in-service [1] | **Partly.** 21.0× forward, 11% below high; growth arrives 2028 |
| "Energy Transfer is the Texas data-center fuel supplier" | Hugh Brinson live; +100 MMcf/d contracts; CloudBurst [6][61b] | **Fairly priced for yield** (6.6%), 12.4× forward, near its high; data centers are a small share of a $19 B EBITDA base |
| "Compression is a hidden AI power play" | 98% utilisation, 1 GW turbine order, 76 MW contract (Sep 2026) [9][44] | **No.** Kodiak at 20.3×, 30% below high; Archrock 15.9×, 28% below high |
| "Gas producers win from data centers" | Contracts small; basis spread $2 [59]; Expand says LNG leads [56] | **No, and rightly not yet.** EQT 16.2×, EXE 11.3×; the trade is 2027–29 basis |
| "Renewables lose to gas" | OBBBA deadlines; European PPAs −98% [31]; Microsoft retreat [25] | **Over-priced as a negative.** NextEra at 18.8× near 52-week low despite 35 GW backlog and 9.5 GW of gas |
| "Geothermal is the firm clean winner" | Google 150 MW, Switch 13 MW [24] | **Was priced, now de-rated**: Ormat 46.7× but 37% below high |
| "Alberta is Canada's AI power province" | Capital Power–Meta 250 MW 2028 [17]; TransAlta MoU [45] | **Not priced**: CPX 20% below high; TA 30% below high (but 40.7× on depressed EPS) |
| "European utilities get a data-center windfall" | PPAs collapsed [31]; connection rationing [32][46][33] | **Correctly not priced**; RWE is the exception with a real pipeline (18.7×) |
| "Asian utilities benefit from AI load" | KEPCO −57%, TEPCO −44%, Kansai −5% on the day [55] | **Priced as a cost**, not a benefit: tariffs are political |
| "Gulf power is the AI winner" | TAQA 1 GW OCGT; Stargate 5 GW [53][36] | **Unpriceable**: state-controlled returns; ACWA −35% |

---

## 10. Ranked shortlist

Ratings and targets are stockanalysis.com consensus [54]; prices and 52-week ranges are the Yahoo feed [55]; forward P/E is the aggregator's next-fiscal-year figure unless stated.

### 1. Kinder Morgan (NYSE:KMI)
- **Products in focus:** Tennessee Gas Pipeline, Southern Natural Gas, Natural Gas Pipeline of America and El Paso Natural Gas transmission capacity; Mississippi Crossing (1.7 B$, Q2 2028) and South System Expansion 4 (3.5 B$, Q4 2028–Q4 2029) into the Southeast [1].
- **Why the product matters:** the Southeast (Georgia, Alabama, Mississippi, Tennessee) is where utility data-center load is growing fastest and where no new interstate capacity arrives before 2028; whoever delivers Haynesville gas to it first sets the price.
- **Why this company:** largest US gas transmission network by volume; $9.6 B backlog with >60% serving power and LDC demand; $8.6 B 2026 EBITDA budget with >5% expected favourable variance; leverage 3.6× [1].
- **Dated evidence:** Q2 2026 record EBITDA $2.199 B, EPS +22% (22 Jul 2026) [1]; Cumberland, Hiland Express and GCX expansion placed in service April–June 2026 [1].
- **Risks and thesis-breakers:** SSE4 FERC delay (decision was expected July 2026 [60]); Southeast utilities choosing Boardwalk or Transco instead; Permian gas price collapse reducing GCX/EPNG value; capital cost inflation on 2028 projects.
- **Catalysts:** Q3 results ~22 Oct 2026; SSE4 certificate; 2027 budget (Dec 2026); MSX service Q2 2028.
- **Valuation (2 Oct 2026):** $31.07; mkt cap $69.2 B; fwd P/E 21.0×; trailing 20.0×; yield 3.8%; 52-wk $25.60–34.81; consensus Buy; target $36.09 [54][55].

### 2. Kodiak Gas Services (NYSE:KGS)
- **Products in focus:** contract compression (4.50 M hp, 98.2% utilised) and the Power Infrastructure fleet (405 MW; 1 GW of turbines ordered for delivery by 2030; 2 GW target) [9].
- **Why the product matters:** behind-the-meter gas power is the only way to energise a 2026–27 data center in Texas or the Southeast without waiting for interstate pipe or a utility queue; the limiting input is engines and turbines plus the field-service organisation, which compression companies already own.
- **Why this company:** the only compression company with a disclosed 1 GW turbine allocation and two primary-power data-center contracts (the 76 MW, six-year West Texas deal of 21 Sep 2026 [44]); 2026 EBITDA guidance raised to $830–860 M; leverage 3.2× [9].
- **Dated evidence:** [9][44].
- **Risks and thesis-breakers:** power returns below compression returns; turbine delivery slips; customer (unnamed hyperscaler, GPU-designer guarantor) walks; Permian gas production slows; equity issuance for 2 GW build; the stock's 30% drawdown may reflect something I did not find.
- **Catalysts:** Q3 results early Nov 2026; Q4 2026–Q1 2027 first power on the 76 MW contract; further turbine-backed contracts; 2027 guidance.
- **Valuation:** $54.33; $5.6 B; fwd P/E 20.3×; trailing 62.7×; yield 3.5%; 52-wk $32.55–77.68; Strong Buy; target $83.13 [54][55].

### 3. Williams (NYSE:WMB)
- **Products in focus:** Transco capacity (SESE 1.6 Bcf/d Q4 2027; Power Express 750 MMcf/d; NESE), Power Innovation behind-the-meter plants (Socrates 200+340 MW, Neo 682 MW, Aquila, Apollo; 2.6 GW), Momentum Midstream gathering (6 Bcf/d, >4 Bcf/d take-or-pay) [2][5][19][48].
- **Why the product matters:** Transco Zone 5 is the single most constrained gas corridor for AI load (Virginia and the Carolinas); the behind-the-meter portfolio is the fastest firm power available anywhere (first power in <18 months).
- **Why this company:** owns Transco outright; proved it can build a 200 MW plant for Meta in 18 months; de-risked funding with Blackstone's $5.34 B at a 6.35% equity cost cap; raised long-term growth to 11%+ [5][48].
- **Dated evidence:** [2][5][19][48].
- **Risks and thesis-breakers:** valuation (29.4× forward, the highest in midstream); Appalachian expansion opposition [58]; Momentum integration at 8.5× EBITDA with $2 B of equity; a hyperscaler cancelling a behind-the-meter plant (the plants are single-customer assets).
- **Catalysts:** Q3 results ~3 Nov 2026; Socrates phase 2 year-end 2026; Atlas end-2026; SESE construction Q4 2026; Aquila H1 2027; Neo H2 2028.
- **Valuation:** $70.54; $86.3 B; fwd P/E 29.4×; trailing 28.1×; yield 3.0%; 52-wk $56.19–80.08; Strong Buy; target $85.61 [54][55].

### 4. EQT (NYSE:EQT)
- **Products in focus:** Marcellus dry gas with owned gathering and MVP; firm supply to Homer City (4.4 GW campus) and CPV; MVP Southgate [18].
- **Why the product matters:** Appalachian gas is the cheapest in North America and sits next to PJM's data-center load; the value is in moving it 100–300 miles, which EQT's integrated midstream does.
- **Why this company:** largest Appalachian producer; lowest cost structure; 20% projected free-cash-flow yield "with potential to double"; 2026 production guidance raised 90 Bcfe while cutting capex $25 M; net-debt target $5 B for counter-cyclical buybacks [18].
- **Dated evidence:** [18]; Homer City agreement in principle (Jul 2025) [headline].
- **Risks and thesis-breakers:** Henry Hub at $3.28 in 2027 [7]; Appalachian takeaway delays keeping basis wide (bad for realisations, good for in-basin buyers); Homer City financing not closing; EQT's own warning that a third of the basin's supply cannot hold flat [18].
- **Catalysts:** Q3 results late Oct 2026; Homer City definitive contracts; MVP Southgate completion 2027; SESE service Q4 2027.
- **Valuation:** $50.17; $31.4 B; fwd P/E 16.2×; trailing 11.6×; yield 1.3%; 52-wk $47.94–68.24; Strong Buy; target $67.50 [54][55].

### 5. DT Midstream (NYSE:DTM)
- **Products in focus:** LEAP (Haynesville to Gulf Coast, 2.3 Bcf/d by H2 2028, expandable to ~4), Guardian G3/G4 and Vector 2030 (Midwest), Millennium R2R, Appalachia gathering with a data-center interconnect on NEXUS (Q4 2027) [10].
- **Why the product matters:** Midwest utilities in MISO and PJM have announced ~50 GW of large loads, which DTM converts to 7.5 Bcf/d of potential gas demand; DTM owns the pipes into Wisconsin, Michigan and Ohio that would carry it [10].
- **Why this company:** $3.4 B backlog (60% at FID); 2027 EBITDA guidance $1,225–1,295 M (midpoint +6% on 2026); leverage 2.9×; 8% dividend CAGR [10].
- **Dated evidence:** [10]; Guardian upsizing [84] (headline).
- **Risks and thesis-breakers:** Haynesville LNG-driven growth slowing; Midwest data-center announcements not converting to pipe contracts; a 26× multiple for mid-single-digit growth.
- **Catalysts:** Q3 results late Oct 2026; Guardian/Vector FIDs; LEAP 5 H2 2028.
- **Valuation:** $121.00; $12.3 B; fwd P/E 25.7×; trailing 26.5×; yield 2.9%; 52-wk $104.99–152.88; Buy; target $153.20 [54][55].

### 6. Energy Transfer (NYSE:ET)
- **Products in focus:** Hugh Brinson (1.5 Bcf/d Permian to DFW, live Sep 2026), Texas intrastate network, Desert Southwest and Transwestern expansions, on-site 10 MW generators, data-center gas supply contracts [6].
- **Why the product matters:** Texas is where behind-the-meter AI campuses (Abilene, West Texas, DFW) are being built in 2026–27, and intrastate pipe needs no FERC certificate.
- **Why this company:** largest Texas gas footprint; 2026 EBITDA guidance $18.8–19.1 B after a +31% Q2; 6.6% yield with 19 consecutive distribution increases [6]; 12.4× forward is the cheapest multiple among the large midstream names.
- **Dated evidence:** [4][6]; CloudBurst agreement (Feb 2025) [61b] (headline).
- **Risks and thesis-breakers:** data centers are a small share of a diversified base; Lake Charles LNG capital call; Permian gas prices; partnership governance and K-1 structure.
- **Catalysts:** Q3 results early Nov 2026; Hugh Brinson Phase II decision; Desert Southwest FERC filing.
- **Valuation:** $20.47; $70.5 B; fwd P/E 12.4×; trailing 14.0×; yield 6.6%; 52-wk $16.18–21.84; Strong Buy; target $24.70 [54][55].

### 7. NextEra Energy (NYSE:NEE)
- **Products in focus:** Energy Resources' 35.1 GW backlog (wind, solar, 110 GW storage pipeline), 30–40 data-center "hubs", 9.5 GW of gas in Texas and Pennsylvania (incl. the 5.2 GW Comstock-hosted hub), Duane Arnold restart (Q1 2029), FPL's 8 GW of large load by 2032 [21][15].
- **Why the product matters:** the only developer able to offer a hyperscaler a bundle of solar, storage, gas and (from 2029) nuclear at one site, with supply chain secured to 2029.
- **Why this company:** scale, cost of capital, $46 B hedging programme, 8%+ EPS growth to 2032 [21]; the Dominion combination (filed 15 Jul 2026, close late 2027) would add the world's largest data-center utility territory [26][27].
- **Dated evidence:** [21][26][27][15].
- **Risks and thesis-breakers:** Dominion approval conditions in Virginia (hearing Nov 2026) and political backlash on bills; OBBBA deadlines beyond 2029; interest rates; gas-plant execution risk in a new business line; hyperscaler capex pause.
- **Catalysts:** Q3 results ~22 Oct 2026; Virginia SCC hearing Nov 2026; FPL rate case outcomes; hub announcements (30→40 by year-end 2026) [21].
- **Valuation:** $76.83; $160.3 B; fwd P/E 18.8×; trailing 17.3×; yield 3.3%; 52-wk $74.41–98.75; Buy; target $98.16 [54][55].

### 8. Capital Power (TSX:CPX)
- **Products in focus:** Alberta gas fleet (Genesee repowered to combined cycle), 250 MW long-term (>10-year) capacity-plus-energy supply agreement with Meta for Sturgeon County from H2 2028 [17]; a second 250 MW deal with an unnamed developer [63]; US gas acquisitions.
- **Why the product matters:** Alberta is the only North American market with surplus dispatchable capacity, no connection queue and cheap gas; Meta's choice validates it.
- **Why this company:** first mover with a signed, AA−-rated counterparty; Genesee site held for further optimisation [17].
- **Dated evidence:** [17][45][64].
- **Risks and thesis-breakers:** Alberta's market redesign (restructured energy market) and political risk; municipal data-centre freezes [64]; 2028 delivery dependent on transmission; reported EPS depressed (trailing P/E 114×) so the forward multiple (27.8×) looks rich.
- **Catalysts:** Q3 results late Oct 2026; conversion of the second 250 MW deal; Alberta government large-load rules; Genesee data-centre announcement.
- **Valuation:** C$61.46; ≈ C$9.65 B (**my estimate**); fwd P/E 27.8×; yield 4.6%; 52-wk C$56.48–77.02; Buy; target C$77.69 [54][55].

### 9. Enbridge (TSX/NYSE:ENB)
- **Products in focus:** Texas Eastern and Algonquin gas transmission, Gulf Coast LNG feed pipes (Bay Runner Twin 2.6 Bcf/d, 2030), Meta-contracted renewables (Clear Fork 600 MW; 365 MW solar+storage; 1.4 GW and 1.6 GWh sanctioned in 2026), Ontario gas distribution [38][81][82].
- **Why the product matters:** the only company in this report that sells both the gas and the solar-plus-storage to the same hyperscaler (Meta), and it does so within a C$41 B secured backlog.
- **Why this company:** C$20.2–20.8 B 2026 EBITDA guidance reaffirmed; C$10–11 B annual investment capacity; 6.0% yield [38].
- **Dated evidence:** [38][81][82].
- **Risks and thesis-breakers:** leverage 5.1× [38]; Line 5 politics; renewables returns after OBBBA; the stock is 21% below its high and near its 52-week low for reasons that may be rate-driven.
- **Catalysts:** Q3 results early Nov 2026; December investor day with 2027 guidance; Sequoia Solar Phase 2 in service 2026; Clear Fork 2027.
- **Valuation:** US$45.97; $102.9 B (stockanalysis, 1 Oct); fwd P/E 21.9×; yield 6.0%; 52-wk $45.03–58.45; Buy; target $51.70 [54][55].

### 10. Expand Energy (NASDAQ:EXE)
- **Products in focus:** Haynesville and Appalachian dry gas; the largest US gas producer with the most LNG-linked and Southeast-adjacent supply.
- **Why the product matters:** every Southeast data-center pipeline (MSX, SSE4, Kosci Junction, LEAP) is a Haynesville takeaway project; Expand is the volume behind them.
- **Why this company:** scale, 11.3× forward earnings, a 2.7% yield, and management candour that LNG leads and data centers follow [56]; the stock is 32% below its high.
- **Dated evidence:** [56] (headline only); EIA record production outlook [7].
- **Risks and thesis-breakers:** Henry Hub $3.28 in 2027 [7]; Haynesville cost inflation; LNG train delays; this is a gas-price trade with a data-center option, not the reverse.
- **Catalysts:** Q3 results late Oct 2026; winter 2026–27 pricing; Southeast pipeline FIDs.
- **Valuation:** $85.52; $19.8 B; fwd P/E 11.3×; trailing 7.4×; yield 2.7%; 52-wk $83.25–126.62; Buy; target $125.52 [54][55].

### 11. Ormat Technologies (NYSE:ORA)
- **Products in focus:** geothermal plants and the equipment to build them (Ormat makes its own turbines), 385 MW of storage; 150 MW Google portfolio PPA via NV Energy (COD 2028–30, 15 years), 13 MW Switch PPA (20 years) [24].
- **Why the product matters:** geothermal is the only firm, carbon-free resource a hyperscaler can contract today that keeps its tax credit after OBBBA; Nevada is both a geothermal province and a data-center cluster.
- **Why this company:** vertically integrated (exploration, drilling, manufacturing, operation); the only listed pure geothermal operator of scale; 1,695 MW portfolio [24].
- **Dated evidence:** [24].
- **Risks and thesis-breakers:** 46.7× forward earnings; PUC Nevada approval of the Clean Transition Tariff portfolio (H2 2026); drilling results; Kenya and other international receivables; a UBS downgrade on 1 Oct 2026 [54].
- **Catalysts:** PUCN decision H2 2026; Q3 results early Nov 2026; new hyperscaler PPAs; Cape Station (Fervo) milestones as a read-across on enhanced geothermal.
- **Valuation:** $92.86; $5.7 B; fwd P/E 46.7×; trailing 45.5×; yield 0.5%; 52-wk $87.06–146.39; Buy; target $132.42 [54][55].

### 12. RWE (XETRA:RWE; OTC RWEOY)
- **Products in focus:** European flexible generation and renewables; 30 sites with grid connections suitable for data centers; two European data-center deals nearing agreement; German gas-plant tenders (12 GW in 2026, online 2031); 10 GW of US capacity secured and 3 GW+ of US gas targeted by 2035 [30][41].
- **Why the product matters:** in Europe the scarce asset is a connected site with firm generation; RWE has the largest such inventory in Germany, the Netherlands and the UK.
- **Why this company:** €42 B investment plan 2026–31; existing PPAs with Meta, AWS and Google [30]; 18.7× forward earnings with a Buy consensus.
- **Dated evidence:** [30][41].
- **Risks and thesis-breakers:** German capacity-market and state-aid design; hydrogen-readiness cost; European PPA demand collapse [31]; political opposition to gas-powered data centers [79].
- **Catalysts:** data-center deal announcements (Q4 2026); German tender results; Q3 results Nov 2026; Capital Markets Day.
- **Valuation:** €59.10; ≈ €42.0 B (**my estimate**); fwd P/E 18.7×; trailing 13.2×; yield 2.0%; 52-wk €39.13–62.00; Buy; target €68.05 [54][55].

---

## 11. Also considered and rejected (one line each)

1. **Archrock (AROC)** — real (94.4% utilisation, 665k hp 10-year contract) but Caterpillar lead times of 195–200 weeks cap growth to ~1 M hp over 2027–30 [11]; Kodiak has the turbine allocation. Price $30.33, 15.9× [54][55].
2. **USA Compression (USAC)** — not researched this session; $25.42 [55].
3. **AES (AES)** — pending $15 cash take-private; 0.6% spread [22][55].
4. **Brookfield Renewable (BEP)** — 2.6 GW of PPAs in Q2 and a Google hydro deal, but no Microsoft framework progress disclosed and negative reported EPS [23][54].
5. **Clearway (CWEN)** — no verified data-center contract; 41× forward [54].
6. **Fluence (FLNC)** — down 77% from its high; results not reviewed [55].
7. **Tesla (TSLA)** — 13.7 GWh storage in Q3 2026 [29] but not a power-sector investment.
8. **TC Energy (TRP)** — good exposure (Columbia 0.7 Bcf/d for data-center generation [8]) but 22.5× and a 4.75× leverage target; a close call. $59.07 [55].
9. **Targa (TRGP)** — record EBITDA and a 20-year ExxonMobil deal but no data-center contract [20][86]; $281.74, 9% below high [55].
10. **ONEOK (OKE)**, **Western Midstream (WES)** — NGL and Permian gathering; no data-center-specific disclosure found. $87.88; $44.76 [55].
11. **Boardwalk** — Kosci Junction (1.16–1.58 Bcf/d, H1 2029) is a direct play but Boardwalk is a Loews subsidiary [50].
12. **South Bow** — crude oil pipelines; out of scope.
13. **Antero (AR)**, **Range (RRC)** — Appalachian demand thesis as EQT's but without the integrated midstream; Range consensus is Hold [54].
14. **Comstock (CRK)** — the NextEra hub is 2029–31 and the stock is 24.5× forward on depressed EPS [15][54].
15. **Coterra (CTRA)** — quote not retrieved; no data-center contract found.
16. **Engie, Iberdrola, EDP, Enel, SSE, National Grid, E.ON, Fortum, Ørsted** — regulated or generic exposure; Iberdrola consensus Hold with 0.5% upside [54]; European PPAs collapsed [31].
17. **TransAlta (TA)** — MoU is non-binding; 40.7× forward [45][54].
18. **Fortis (FTS)** — regulated rate base; no contracted large load disclosed.
19. **Hydro-Québec, OPG, EDF, EWEC, Humain** — state-owned.
20. **Kansai, TEPCO, Kyushu** — Kansai fell 5.1% on 2 Oct for reasons not identified; TEPCO 44% below high; pass-through tariffs limit upside [55].
21. **KEPCO (015760.KS / KEP)** — down 57% from its high amid regional-pricing and prepayment politics; a policy instrument with ₩202 trillion of debt [34][55].
22. **AGL, Origin** — FY26 results do not quantify data-centre load [35]; generic exposure.
23. **ACWA Power, TAQA** — state-linked returns; ACWA 35% below high; TAQA quote unavailable [55].
24. **Tata Power, Adani Power, Adani Green, NTPC, Reliance** — data-center load immaterial to 2028; several at 52-week lows [55].
25. **Tenaga, Sembcorp, Keppel** — regulated or quota-limited; Tenaga near 52-week low [55].
26. **YTL Power (6742.KL)** — the most direct Asian play (1.2 GW planned in Johor [37]) but the share price has already risen 126% from its 52-week low [55]; valuation data stale (§13).
27. **Sakura Internet** — a data-center operator and power user, not a provider.
28. **Fervo, Sage Geosystems** — private.

---

## 12. Dated catalyst calendar (October 2026 – 2028)

| Date | Event | Names |
|---|---|---|
| Oct 2026 | Q3 results: Kinder Morgan (~22 Oct), NextEra (~22 Oct), EQT, Expand, Antero, Range, Comstock, DT Midstream (late Oct), Capital Power, TC Energy | KMI, NEE, EQT, EXE, AR, RRC, CRK, DTM, CPX, TRP |
| Autumn 2026 | Ofgem connection-reform consultations; AI Energy Council report on data-centre flexibility [33] | SSE, NG |
| Q4 2026 | Transco SESE construction start [19]; Williams Atlas in service; Socrates phase 2 in service [2][5] | WMB |
| Q4 2026–Q1 2027 | Kodiak 76 MW West Texas primary-power deployment [44] | KGS |
| Early Nov 2026 | Q3 results: Williams, Energy Transfer, Enbridge, Kodiak, Archrock, Ormat, RWE | WMB, ET, ENB, KGS, AROC, ORA, RWE |
| Nov 2026 | Virginia SCC first hearing on NextEra–Dominion [26] | NEE |
| H2 2026 | PUC Nevada decision on Ormat–Google Clean Transition Tariff portfolio [24]; Hydro-Québec 13 ¢/kWh rate decision at the Régie [49]; Korea regional pricing implementation [34] | ORA; (state); KEP |
| Dec 2026 | Kinder Morgan 2027 budget; Enbridge investor day; Williams 2027 guidance | KMI, ENB, WMB |
| Late 2026 / early 2027 | AES take-private close [22]; German 12 GW controllable-capacity tender [41] | AES; RWE |
| 1 Jan 2027 | Virginia GS-5 large-load tariff effective ($1.5 M/MW collateral) [40] | NEE (Dominion), data-center developers |
| 2027 | Williams Aquila (H1); Line 5 relocation (early 2027); Northwoods; Clear Fork solar (Meta) | WMB, ENB, TRP |
| Q4 2027 | Transco SESE in service (1.6 Bcf/d) [19]; NextEra–Dominion expected close [26] | WMB, NEE |
| Q4 2027 | DTM Appalachia gathering with NEXUS data-center interconnect [10] | DTM |
| H1 2028 | Williams Shelby Connector [5] | WMB |
| Q2 2028 | Kinder Morgan Mississippi Crossing and South Texas Enhancement [1] | KMI |
| 2028 | Columbia Clark (0.3 Bcf/d) [8]; Capital Power–Meta 250 MW service (H2) [17]; Williams Neo 682 MW (H2) [2][48]; DTM LEAP Phase 5 (H2) [10]; Ormat Google portfolio first COD [24] | TRP, CPX, WMB, DTM, ORA |
| Q4 2028 | Kinder Morgan SSE4 Phase 1 [1] | KMI |
| 2029 | Kosci Junction (H1) [50]; Delta Access (early) [5]; Duane Arnold restart (Q1) [21]; SSE4 Phase 2 (Q4) [1] | L, WMB, NEE, KMI |
| 2030–31 | Kodiak 2 GW power target [44]; Silver Spur [52]; Bay Runner Twin [38]; NextEra/Comstock hub ~1 Bcf/d [15]; German gas plants online [41] | KGS, WMB, ENB, NEE/CRK, RWE |

---

## 13. Data gaps, caveats and unverified items

1. **Web-search budget exhausted** at about 60 queries; several facts rest on headlines: Expand Energy's "LNG in the driver's seat" comment [56]; Kinder Morgan's "$7 B greenlight" and SSE4 FERC timing [57][60]; Transco Appalachian opposition [58]; the $2 Appalachia–Southeast forward spread [59]; Energy Transfer's CloudBurst agreement [61b]; TAQA's AED 3.6 B financial close [65][66]; Saudi Humain power agreements [67]; India's 191 TWh and Reliance–Meta 168 MW [68][69]; Korea's $18 B prepayment [70]; Nikkei on Japanese grid capex [72]; TEPCO/Kashiwazaki data-center report [73]; Origin's data-centre-driven sales [75]; Ireland's connections "back online" [76]; CBC on Hydro-Québec [95]; Ontario's data-centre policy [96]; Mongabay on Brazil [99].
2. **Natural Gas Intelligence, Nikkei Asia, CBC, Utilities Middle East and TorontoToday** block automated reading; their items are marked headline only.
3. **Capacities marked "my estimate"** for Mississippi Crossing (~1.5 Bcf/d), SSE4 (~1.2 Bcf/d) and Northwoods (~0.4 Bcf/d) come from my memory of prior disclosures and were not re-verified this session.
4. **Non-US market values and forward P/Es** come from stockanalysis pages dated 4–28 September 2026 [54]; I scaled market values to 2 October prices (my estimate) and did not adjust the multiples. Kyushu Electric's price feed last printed on 28 September [55]. TAQA (ADX) and Coterra (CTRA) quotes were not retrievable.
5. **Kansai Electric's 5.1% fall on 2 October 2026** and **KEPCO's 57% decline from its 52-week high** were not explained by any source I could open.
6. **Fluence's and USA Compression's latest results** were not reviewed.
7. **Brookfield Renewable's 29 September 2026 investor day** content and any update on the Microsoft 10.5 GW framework were not found.
8. **NextEra's 9.5 GW gas programme** economics (price, counterparties, turbine supply) are not public beyond [21] and the Comstock release [15].
9. **Sage Geosystems–Meta (150 MW)** and **Fervo's Cape Station first-power date** rest on prior knowledge and Wikipedia [51]; neither was confirmed by a 2026 primary source.
10. **OBBBA rules** are summarised from headlines of tax-adviser notes; the exact "beginning of construction" safe-harbour mechanics changed in Treasury guidance of August 2025 and were not re-read.
11. **Forward P/E convention**: stockanalysis.com's "forward P/E" is not always the same fiscal year as the one I state; treat the multiples as approximate (±1 turn).
12. **No portfolio or position information** was used or referenced; this report is neutral third-party research.

---

## 14. Sources

1. "Kinder Morgan Reports Second Quarter 2026 Financial Results", Business Wire / Kinder Morgan, 22 Jul 2026. https://www.businesswire.com/news/home/20260722280286/en/Kinder-Morgan-Reports-Second-Quarter-2026-Financial-Results
2. "Williams Announces Record First-Quarter 2026 Results", Williams Companies, 4 May 2026. https://www.williams.com/2026/05/04/williams-announces-record-first-quarter-2026-results/
3. "Data Centers Could Add 6 Bcf/d to Gas Demand: EDA Forecast", East Daley Analytics, 20 Feb 2025. https://eastdaley.com/burner-tip-posts/data-centers-could-add-6-bcf-d-to-gas-demand-eda-forecast
4. "Energy Transfer Starts Hugh Brinson Pipeline, Advances $5.6 Billion to $5.9 Billion Growth Plan", Midstream Calendar, 4 Aug 2026 (secondary). https://midstreamcalendar.com/2026/08/04/energy-transfer-starts-hugh-brinson-pipeline-advances-5-6-billion-to-5-9-billion-growth-plan/
5. "Williams Lifts 2026 EBITDA Guidance to $8.5B, Boosts Long-Term Target to 11%+ as Socrates Delivers First Power in 18 Months", BigGo Finance (Q2 2026 call summary), 4 Aug 2026 (secondary). https://finance.biggo.com/news/US_WMB_2026-08-04
6. "Energy Transfer Reports Second Quarter 2026 Results and Updates 2026 Financial Guidance", Energy Transfer LP, 4 Aug 2026. https://ir.energytransfer.com/news-releases/news-release-details/energy-transfer-reports-second-quarter-2026-results-and-updates
7. "EIA expects record electricity generation in 2026 and 2027" (September 2026 Short-Term Energy Outlook press release), US Energy Information Administration, 9 Sep 2026. https://www.eia.gov/pressroom/releases/press592.php
8. "TC Energy reports strong second quarter 2026 operating and financial results", TC Energy, 30 Jul 2026. https://www.tcenergy.com/announcements/2026/2026-07-30-tc-energy-reports-strong-second-quarter-2026-operating-and-financial-results/
9. "Kodiak Gas Services Reports Second Quarter 2026 Financial Results, Increases Full Year 2026 Adjusted EBITDA and Discretionary Cash Flow Guidance", Kodiak Gas Services, 6 Aug 2026. https://ir.kodiakgas.com/news-events/press-releases/detail/85/kodiak-gas-services-reports-second-quarter-2026-financial
10. "DT Midstream Q2 2026 slides show $3.4B backlog, reaffirm guidance", Investing.com, 30 Jul 2026 (secondary). https://www.investing.com/news/company-news/dt-midstream-q2-2026-slides-show-34b-backlog-reaffirm-guidance-93CH-4825265
11. "Archrock (AROC) Q2 2026 Earnings Call Transcript", Motley Fool via AOL, Aug 2026 (secondary). https://www.aol.com/articles/archrock-aroc-q2-2026-earnings-150522000.html
12. "US Data Centers Set to Burn More Natural Gas Than Most Nations" (BloombergNEF via Bloomberg), Insurance Journal, 15 Sep 2026 (secondary). https://www.insurancejournal.com/news/national/2026/09/15/885009.htm
13. "Antero: Graphing Appalachia's 5-Bcf/d AI-Fueled Demand Growth", Hart Energy, 1 Aug 2025. https://www.hartenergy.com/exclusives/antero-graphing-appalachias-5-bcfd-ai-fueled-demand-growth-213704
14. "Comstock to Double Western Haynesville Wells in 2026, Advances NextEra Data Center Project", RBN Energy, 12 Feb 2026. https://rbnenergy.com/daily-posts/analyst-insight/comstock-double-western-haynesville-wells-2026-advances-nextera-data
15. "Comstock Resources, Inc. Announces Selection of Western Haynesville Site to Host Power Generation Hub", Comstock Resources, 23 Mar 2026. https://investors.comstockresources.com/news-releases/news-release-details/comstock-resources-inc-announces-selection-western-haynesville
16. "Range Looks to Capture 5-Bcf/d Appalachia AI Power Market Growth", Hart Energy via Yahoo Finance, 23 Jul 2025 (secondary). https://finance.yahoo.com/news/range-looks-capture-5-bcf-162426460.html
17. "Capital Power Enters Long-term Energy Supply Agreement with Meta in Alberta", Capital Power, 8 Jul 2026. https://www.capitalpower.com/media/media_releases/capital-power-enters-long-term-energy-supply-agreement-with-meta-in-alberta/
18. "EQT Corporation Q2 2026 Earnings Call Summary", Yahoo Finance, Jul 2026 (secondary). https://finance.yahoo.com/energy/articles/eqt-corporation-q2-2026-earnings-123000824.html
19. "Transco's 1.6-bcfd SSE expansion receives FERC approval", Oil & Gas Journal, Feb 2026. https://www.ogj.com/pipelines-transportation/pipelines/news/55355355/transcos-16-bcfd-sse-expansion-receives-ferc-approval
20. "Targa Resources Corp. Reports Record Second Quarter 2026 Financial Results", Targa Resources, Aug 2026. https://www.targaresources.com/news-releases/news-release-details/targa-resources-corp-reports-record-second-quarter-2026
21. "Second Quarter 2026 Earnings Conference Call" (prepared remarks), NextEra Energy, 24 Jul 2026. https://www.investor.nexteraenergy.com/~/media/Files/N/NEE-IR/reports-and-fillings/quarterly-earnings/2026/Q2%202026/Q2%202026%20Earnings%20Script_vF.pdf
22. "EQT, GIP Move to Take AES Private in $33B Bet on Data Center Power Demand", POWER Magazine, Mar 2026. https://www.powermag.com/eqt-gip-move-to-take-aes-private-in-33b-bet-on-data-center-power-demand/
23. "Brookfield Renewable (BEPC) Q2 2026 Earnings Call Transcript", Webull, Aug 2026 (secondary). https://www.webull.com/news/15341674943030272
24. "Ormat Technologies Announces the Signing of Geothermal Portfolio PPA of Up to 150 MW to Support Google's Data Center Operations Through NV Energy", Ormat Technologies, 17 Feb 2026. https://investor.ormat.com/news-events/news/news-details/2026/Ormat-Technologies-Announces-the-Signing-of-Geothermal-Portfolio-PPA-of-Up-to-150-MW-to-Support-Googles-Data-Center-Operations-Through-NV-Energy/default.aspx
25. "With Microsoft mulling 24/7 clean energy goal, hyperscalers are facing a reckoning", Axios Pro, 6 May 2026 (secondary). https://www.axios.com/pro/climate-deals/2026/05/06/microsoft-google-clean-energy-targets
26. "NextEra on track to close Dominion merger by late 2027, executives say", Utility Dive, Jul 2026. https://www.utilitydive.com/news/nextera-on-track-to-close-dominion-merger-by-late-2027-executives-say/826205/
27. "NextEra Energy and Dominion Energy file to combine…", NextEra Energy newsroom, 15 Jul 2026. https://newsroom.nexteraenergy.com/2026-07-15-NextEra-Energy-and-Dominion-Energy-file-to-combine,-building-a-stronger-company-to-meet-growing-power-demand-across-four-of-Americas-fastest-growing-states-while-keeping-energy-affordable-and-reliable?l=12
28. "Tesla reports record energy storage deployments and profit ahead of vote on Musk's monster pay proposal", Energy-Storage.News, 28 Oct 2025. https://www.energy-storage.news/tesla-reports-record-energy-storage-deployments-and-profit-ahead-of-vote-on-musks-monster-pay-proposal/
29. "Tesla Q3 2026 Deliveries Beat 461,974 Consensus at 486,532 Vehicles" (13.7 GWh storage), Tesla North, 2 Oct 2026 (secondary; headline only). https://teslanorth.com/2026/10/02/tesla-q3-2026-deliveries/
30. "RWE nears completion on two data center deals", Data Center Dynamics, Aug 2026. https://www.datacenterdynamics.com/en/news/rwe-nears-completion-on-two-data-center-deals/
31. "European data center PPAs fall even as capacity buildout accelerates", Rystad Energy, 26 May 2026. https://www.rystadenergy.com/insights/european-data-center-ppas-fall-even-as-capacity-buildout-accelerates
32. "New Irish Large Energy Users Connection Policy", DLA Piper, Jan 2026. https://www.dlapiper.com/en/insights/publications/2026/01/new-irish-large-energy-users-connection-policy
33. "UK grid connections reform: impact on data centres and demand connections", HSF Kramer, Jul 2026. https://www.hsfkramer.com/insights/2026-07/uk-grid-connections-reform
34. "South Korea Creates 11 Electricity Zones to Slash AI Data Center Costs", Tech Times, 27 Aug 2026 (secondary). https://www.techtimes.com/articles/325742/20260827/south-korea-creates-11-electricity-zones-slash-ai-data-center-costs.htm
35. "FY26 Results Announcement and FY27 Guidance", AGL Energy, 12 Aug 2026. https://www.agl.com.au/about-agl/news-centre/2026/august/fy26-results-announcement-and-fy27-guidance
36. "Companies behind UAE Stargate offer additional details", Data Center Dynamics, 23 May 2025. https://www.datacenterdynamics.com/en/news/companies-behind-uae-stargate-offer-additional-details/
37. "YTL Power, JLand to develop data centre campus", The Star (Malaysia), 20 Aug 2026. https://www.thestar.com.my/business/business-news/2026/08/20/ytl-power-jland-to-develop-data-centre-campus
38. "Enbridge Reports Strong Second Quarter Results, Reaffirms 2026 Guidance and Grows Secured Backlog to $41B", Enbridge, 31 Jul 2026. https://enbridge.mediaroom.com/2026-07-31-Enbridge-Reports-Strong-Second-Quarter-Results,-Reaffirms-2026-Guidance-and-Grows-Secured-Backlog-to-41B
39. "Renewables remain cheapest, but their LCOE is rising: Lazard", Utility Dive, 16 Jul 2026 (secondary; summarising Lazard LCOE+ 2026). https://www.utilitydive.com/news/renewables-remain-cheapest-lcoe-rising-lazard/825443/
40. "The $750 Million Question: Virginia's GS-5 is effective January 1, 2027", Electron Economics (Substack), 2026 (secondary). https://electroneconomics.substack.com/p/large-load-tariff-tracker-update
41. "Germany says new gas power plants will be online by 2031 following EU deal", Clean Energy Wire, 16 Jan 2026. https://www.cleanenergywire.org/news/germany-says-new-gas-power-plants-will-be-online-2031-following-eu-deal
42. "Data centers could unlock 76GW of US grid capacity through optional curtailment – report", Data Center Dynamics, Feb 2025 (summarising Duke University Nicholas Institute, 18 Feb 2025). https://www.datacenterdynamics.com/en/news/data-centers-could-unlock-76gw-of-us-grid-capacity-through-optional-curtailment-report/
43. "Google Secures 1 GW Demand Response From 5 U.S. Utilities", mgrid.org, 20 Mar 2026 (secondary). https://mgrid.org/2026/03/20/google-1gw-demand-response-utility-contracts/
44. "Kodiak Gas Services to supply 76MW of behind-the-meter gas power to West Texas data center", Data Center Dynamics, 21 Sep 2026. https://www.datacenterdynamics.com/en/news/kodiak-gas-services-to-supply-76mw-of-behind-the-meter-gas-power-to-west-texas-data-center/
45. "TransAlta, CPP, Brookfield ink MoU for 230MW Alberta data center project", Data Center Dynamics, 3 Mar 2026. https://www.datacenterdynamics.com/en/news/transalta-cpp-brookfield-ink-mou-for-230mw-alberta-data-center-project/
46. "No extra space on electricity grid in large part of Noord-Holland next decade", TenneT. https://www.tennet.eu/news/no-extra-space-electricity-grid-large-part-noord-holland-next-decade
47. "Brazilian Chamber approves Redata, a program that allocates R$ 5.2 billion for data centers in Brazil", Canal Solar, Feb 2026. https://canalsolar.com.br/en/chamber-approves-redata-datacenters-brazil/
48. "Blackstone invests $5.34bn in Williams' behind-the-meter natural gas power projects for the data center sector", Data Center Dynamics, 15 Jul 2026. https://www.datacenterdynamics.com/en/news/blackstone-invests-534bn-in-williams-behind-the-meter-natural-gas-power-projects-for-the-data-center-sector/
49. "A new rate for data centres and a rate adjustment for blockchains to reflect the value of renewable electricity", Hydro-Québec, 19 Feb 2026. https://news.hydroquebec.com/news/press-releases/all-quebec/hydro-quebec-proposing-regie-energie-new-rate-large-data-centres-adjustment-rate-cryptographic-use-applied-blockchains.html
50. "Boardwalk Makes Final Investment Decision on Gulf South Pipeline Company, LLC's Kosci Junction Pipeline Project", Loews Corporation, 11 Dec 2024. https://loews.com/investors/news/news-details/2024/Boardwalk-Makes-Final-Investment-Decision-on-Gulf-South-Pipeline-Company-LLCs-Kosci-Junction-Pipeline-Project/default.aspx
51. "Fervo Energy", Wikipedia (secondary; retrieved 2 Oct 2026). https://en.wikipedia.org/wiki/Fervo_Energy
52. "Q1 Earnings Recap: Data centers accelerate new growth paths for Williams", Williams Companies, 5 May 2026. https://www.williams.com/2026/05/05/q1-earnings-recap-data-centers-accelerate-new-growth-paths-for-williams/
53. "TAQA and EWEC sign PPA for 1 GW of new OCGT power capacity in the UAE", Enerdata, 4 Apr 2025 (secondary). https://www.enerdata.net/publications/daily-energy-news/taqa-and-ewec-sign-ppa-1-gw-new-ocgt-power-capacity-uae.html
54. stockanalysis.com quote pages (WMB, KMI, ET, EQT, DTM, EXE, KGS, AROC, NEE, BEP, ORA, ENB, TRP, AR, RRC, CRK, AES, CWEN, KEP; ETR:RWE, EPA:ENGI, BME:IBE, LON:SSE, TSX:CPX, TSX:TA, TYO:9503), retrieved 2 Oct 2026 (secondary aggregator; non-US pages dated 4–28 Sep 2026). https://stockanalysis.com/
55. Yahoo Finance chart feed (regular-market prices, 52-week ranges and FX for the tickers in this report), retrieved 2–3 Oct 2026 (secondary aggregator). https://finance.yahoo.com/
56. "Expand Energy Sees LNG Demand in Driver's Seat as Data Center Resistance Grows", Natural Gas Intelligence, 2026 (headline only). https://naturalgasintel.com/news/expand-energy-sees-lng-demand-in-drivers-seat-as-data-center-resistance-grows/
57. "Kinder Morgan Greenlights $7B in Natural Gas Pipeline Projects Amid Regulatory Speedup", Natural Gas Intelligence, 2026 (headline only). https://naturalgasintel.com/news/kinder-morgan-greenlights-7b-in-natural-gas-pipeline-projects-amid-regulatory-speedup/
58. "Transco's Appalachian Natural Gas Expansion Facing Early Opposition", Natural Gas Intelligence, 2026 (headline only). https://www.naturalgasintel.com/news/transcos-appalachian-natural-gas-expansion-facing-early-opposition/
59. "October Natural Gas Forwards Open $2 Gap Between Appalachia, Southeast", Natural Gas Intelligence, Sep 2026 (headline only). https://naturalgasintel.com/news/october-natural-gas-forwards-open-2-gap-between-appalachia-southeast/
60. "Kinder Morgan Expects July FERC Decision on $3.5 Billion SSE4 Project", Pipeline & Gas Journal, Jun 2026 (headline only). https://pgjonline.com/news/2026/june/kinder-morgan-expects-july-ferc-decision-on-35-billion-sse4-project
61. "Energy Transfer's Hugh Brinson Pipeline Could Begin Gas Flows in Q3 2026", Pipeline & Gas Journal, Jun 2026 (headline only). https://pgjonline.com/news/2026/june/energy-transfers-hugh-brinson-pipeline-could-begin-gas-flows-in-q3-2026
61b. "CloudBurst signs natural gas deal with Energy Transfer to power Texas data center", Data Center Dynamics, Feb 2025 (headline only). https://www.datacenterdynamics.com/en/news/cloudburst-signs-natural-gas-deal-with-energy-transfer-to-power-texas-data-center/
62. "FERC Approves Williams Transco SESE Pipeline Project for VA, NC", Marcellus Drilling News, Feb 2026 (secondary). https://marcellusdrilling.com/2026/02/ferc-approves-williams-transco-sese-pipeline-project-for-va-nc/
63. "Capital Power signs 250MW power supply deal with data center developer in Alberta, Canada", Data Center Dynamics, 2026 (headline only). https://www.datacenterdynamics.com/en/news/capital-power-signs-250mw-power-supply-deal-with-data-center-developer-in-alberta-canada/
64. "A Data Centre Freeze North of Calgary Comes Just as Edmonton Power Producer Hails the Meta Data Centre Deal", EnergyNow, Jul 2026 (headline only). https://energynow.ca/2026/07/a-data-centre-freeze-north-of-calgary-comes-just-as-edmonton-power-producer-hails-meta-deal/
65. "TAQA, EWEC Secure AED 3.6 Billion Financing for 1 GW Al Dhafra Power Plant to Power UAE's AI Data Centres", Utilities Middle East, Jan 2026 (headline only). https://www.utilities-me.com/utilities/taqa-ewec-power-uae-ai-data-centres
66. "TAQA, EWEC Reach Financial Close on AED 3.6 Billion Al Dhafra Power Plant to Support UAE AI Strategy", SolarQuarter, 5 Jan 2026 (headline only). https://solarquarter.com/2026/01/05/taqa-ewec-reach-financial-close-on-aed-3-6-billion-al-dhafra-power-plant-to-support-uae-ai-strategy/
67. "Saudi AI Data Centres: The Power Deals Behind the Build-Out", vision2030.ai, Sep 2026 (secondary; headline only). https://vision2030.ai/analysis/saudi-ai-data-centre-power-agreements-september-2026/
68. "India AI Data Centres to Drive 191 TWh Power Demand…", GreentechLead, 2026 (headline only). https://greentechlead.com/power/india-ai-data-centres-to-drive-191-twh-power-demand-creating-huge-renewable-energy-opportunity-54896
69. "Reliance and Meta Plan 168MW AI Data Center in Jamnagar, India", datacenters.com (headline only). https://www.datacenters.com/news/reliance-and-meta-plan-168mw-ai-data-center-in-jamnagar-india
70. "Samsung and SK Hynix Asked to Prepay $18B in Power Bills to Fund Korea's Chip Grid", Tech Times, 3 Sep 2026 (headline only). https://www.techtimes.com/articles/326563/20260903/samsung-sk-hynix-asked-prepay-18b-power-bills-fund-koreas-chip-grid.htm
71. "South Korea Signs Chip Cluster Power Pact; Yongin Still Needs Power of Ten Nuclear Reactors", Tech Times, 12 Aug 2026 (headline only). https://www.techtimes.com/articles/324090/20260812/south-korea-signs-chip-cluster-power-pact-yongin-still-needs-power-ten-nuclear-reactors.htm
72. "Japan's utilities pour billions into power grid amid data center growth", Nikkei Asia (headline only; robots-blocked). https://asia.nikkei.com/business/energy/japan-s-utilities-pour-billions-into-power-grid-amid-data-center-growth
73. "Tepco Shares Rise on Report of Data Center Near Nuclear Plant", Bloomberg, 23 Dec 2025 (headline only). https://www.bloomberg.com/news/articles/2025-12-23/tepco-shares-rise-on-report-of-data-center-near-nuclear-plant
74. "Challenges for Japan's Electricity Policy in 2026", Institute of Energy Economics Japan (headline only). https://eneken.ieej.or.jp/data/13072.pdf
75. "Australia's Origin Energy reports electricity sales growth driven by data centres", PV Tech, 2026 (headline only). https://www.pv-tech.org/australias-origin-energy-reports-electricity-sales-growth-driven-by-data-centres/
76. "Ireland's Data Centre Connections: Back Online", Mondaq, 2026 (headline only). https://www.mondaq.com/ireland/renewables/1809692/irelands-data-centre-connections-back-online
77. "UK energy regulator Ofgem launches grid connection overhaul consultation, with data centers a focal point", Data Center Dynamics, 2026 (headline only). https://www.datacenterdynamics.com/en/news/uk-energy-regulator-ofgem-launches-grid-connection-overhaul-consultation-with-data-centers-a-focal-point/
78. "German power plant strategy, capacity market and new gas-fired power plants", Taylor Wessing, Feb 2026 (headline only). https://www.taylorwessing.com/en/insights-and-events/insights/2026/02/kraftwerksstrategie-kapazitaetsmarkt-und-neue-gaskraftwerke
79. "Inside the Plot to Cover Europe with Gas-Powered AI Data Centres", DeSmog, 29 Apr 2026 (secondary; headline only). https://www.desmog.com/2026/04/29/inside-the-plot-to-cover-europe-with-gas-powered-ai-data-centres/
80. "EIA cuts 2026 power generation forecast by more than a percentage point", Utility Dive, 2026 (headline only). https://www.utilitydive.com/news/energy-short-term-outlook-2026-load-demand-data-centers/807530/
81. "Enbridge Announces 600-Megawatt Solar Project to Support Meta Platforms, Inc. Data Center Operations", Enbridge, 22 Jul 2025. https://enbridge.mediaroom.com/2025-07-22-Enbridge-Announces-600-Megawatt-Solar-Project-to-Support-Meta-Platforms,-Inc-Data-Center-Operations
82. "Enbridge developing 365-MW solar + storage project for Meta data centers", Solar Power World, May 2026 (headline only). https://www.solarpowerworldonline.com/2026/05/enbridge-developing-365-mw-solar-storage-project-for-meta-data-centers/
83. "TC Energy approves $900m pipeline expansion in US Midwest to serve data center market", Data Center Dynamics, May 2025 (headline only). https://www.datacenterdynamics.com/en/news/tc-energy-approves-900m-pipeline-expansion-in-us-midwest-to-serve-data-center-market/
84. "DT Midstream Advances Haynesville, Guardian Pipeline Projects", Pipeline & Gas Journal, Jul 2026 (headline only). https://pgjonline.com/news/2026/july/dt-midstream-advances-haynesville-guardian-pipeline-projects
85. "Antero Midstream Q2 2026 slides: record volumes fuel pipeline buildout", Investing.com, Jul 2026 (headline only). https://www.investing.com/news/company-news/antero-midstream-q2-2026-slides-record-volumes-fuel-pipeline-buildout-93CH-4825775
86. "Targa Locked Exxon In for 20 Years and Still Has No Data-Center Contract", DK Street Journal, 21 Aug 2026 (secondary; headline only). https://www.dkstreetjournal.com/a-2026-08-21-d50d447d
87. "Nominally Hedged: KGS and the turbine", Kalibr Partners (Substack), 2026 (secondary). https://compression.kalibrpartners.com/p/nominally-hedged-kgs-and-the-turbine
88. "September 2026 Short-Term Energy Outlook" (full PDF), US EIA, 9 Sep 2026 (not opened; headline). https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf
89. "Data centers are driving pipeline expansions and production growth in Appalachia", Ohio River Valley Institute (headline only). https://ohiorivervalleyinstitute.org/data-centers-pipeline-expansions-natural-gas/
90. "Iberdrola and Echelon create a joint venture to develop data centres in Spain", Iberdrola (headline only). https://www.iberdrola.com/press-room/news/detail/iberdrola-echelon-create-joint-venture-to-develop-data-centres-spain
91. "Data Centres in Spain", Iberdrola España (company page; headline only). https://www.iberdrolaespana.com/innovation/data-centre-spain
92. "New Iberdrola joint venture to invest over €2bn into Spanish data centres", Enlit (headline only). https://www.enlit.world/library/new-iberdrola-joint-venture-to-invest-over-2bn-into-spanish-data-centres
93. "Utilities eye windfall as Europe's data center demand nears doubling by 2030", S&P Global Market Intelligence, Nov 2025 (headline only). https://www.spglobal.com/market-intelligence/en/news-insights/articles/2025/11/utilities-eye-windfall-as-europe-s-data-center-demand-nears-doubling-by-2030-94221352
94. "Powering AI: Canada's evolving electricity grid connection policies", Osler (headline only). https://www.osler.com/en/insights/reports/2025-legal-outlook/powering-ai-canadas-evolving-electricity-grid-connection-policies/
95. "Hydro-Québec wants to double data centre costs, Google and others prepare rebuttal", CBC News / National Observer, 1 Oct 2026 (headline only; page blocked). https://www.nationalobserver.com/2026/10/01/news/hydro-quebec-wants-double-data-centre-costs-google-others-prepare-rebuttal
96. "New data centres will pay all energy costs, get no cash incentives under Ontario plan", TorontoToday, 2026 (headline only). https://www.torontotoday.ca/local/politics-government/new-data-centres-pay-all-energy-costs-no-cash-incentives-ontario-plan-12661376
97. "EMEA data centre update H2 2025", Cushman & Wakefield, Apr 2026 (headline only). https://www.cushmanwakefield.com/en/netherlands/news/2026/04/emea-datacentre-update-h2-2025
98. "UAE data centre power demand to double by 2030 as regulatory gaps constrain clean energy procurement", Wood Mackenzie (headline only). https://www.woodmac.com/press-releases/uae-data-centre-power-demand-to-double-by-2030-as-regulatory-gaps-constrain-clean-energy-procurement/
99. "Brazil's unique data center boom rides on clean power despite social burden", Mongabay, Aug 2026 (headline only; fetch failed). https://news.mongabay.com/2026/08/brazils-unique-data-center-boom-rides-on-clean-power-despite-social-burden/
100. "Lazard's LCOE+" (June/July 2026 edition), Lazard (primary; not opened, summarised via [39]). https://www.lazard.com/media/kcfconhf/lazards-lcoeplus_vf.pdf
101. "Onsite gas turbines, reciprocating engines to power Meta data center" (Socrates), Power Engineering (headline only). https://www.power-eng.com/onsite-power/onsite-gas-turbines-reciprocating-engines-to-power-meta-data-center/
102. "Ohio regulators approve construction of 200MW gas power plant to serve Meta's New Albany data center", Data Center Dynamics, 2025 (headline only). https://www.datacenterdynamics.com/en/news/ohio-regulators-approve-construction-of-200mw-gas-power-plant-to-serve-meta-data-center-in-new-albany-ohio/
103. "Homer City Redevelopment Announces Agreement in Principle for EQT Corporation to Supply Nation's Largest Natural Gas-Powered Data Center Campus", Business Wire, 15 Jul 2025 (headline only). https://www.businesswire.com/news/home/20250715006970/en/
104. "$67 billion NextEra-Dominion merger could raise U.S. electricity prices, lawmakers say", CBS News, 2026 (headline only). https://www.cbsnews.com/news/nextera-dominion-merger-utility-prices/
105. "FERC Launches Aggressive Targeted Action to Speed Large Load Integration", FERC (headline only). https://www.ferc.gov/news-events/news/ferc-launches-aggressive-targeted-action-speed-large-load-integration
106. "Who pays for the data center buildout? 23 states have already decided", Environment+Energy Leader (headline only). https://www.environmentenergyleader.com/stories/who-pays-for-the-data-center-buildout-23-states-have-already-decided,129803
107. "Navigating OBBBA: phaseouts, prohibited foreign entity rules, and other new rules", Tax Law Center (headline only). https://taxlawcenter.org/blog/navigating-obbba-phaseouts-prohibited-foreign-entity-rules-and-other-new-rules
108. "Grid Constraints Steer Dutch Data Centers Beyond Amsterdam", Data Center Knowledge (headline only). https://www.datacenterknowledge.com/data-center-site-selection/grid-constraints-steer-dutch-data-centers-beyond-amsterdam
109. "Germany's Data Center Boom is Pushing the Power Grid to Its Limits", TechPolicy Press (headline only). https://www.techpolicy.press/germanys-data-center-boom-is-pushing-the-power-grid-to-its-limits/
110. "Australia Mandates Data Centre Power Rules", tech-insider.org, 2026 (headline only). https://tech-insider.org/au/australia-data-centre-energy-standards-national-cabinet-2026/

*End of report.*
