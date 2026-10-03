> **Working research report, published as-is for transparency (3 Oct 2026).** Written by an AI research agent for the Claude Investment Summary pages. Every figure carries a date and source; "secondary" marks relays; "my estimate" marks the agent's arithmetic. Prices are a point-in-time snapshot (2 Oct 2026 closes unless stated). Not investment advice. Final picks and targets on the website may differ from the rankings here.

# U1: United States electricity providers and the data-center load boom
### Regulated utilities, merchant generators and power markets, October 2026

*Research date: Friday 2 October 2026 (written overnight into 3 October 2026, US time). Written for an educational investment-analysis page. This is not investment advice.*

**Conventions.**
- `[n]` refers to the numbered sources in §13. "(secondary)" marks an aggregator, a press summary or a headline-only reference. "**my estimate**" marks my own arithmetic or assumptions.
- **Price dates.** US listings use the **2 October 2026** close unless the source page showed an older cached close, in which case the date shown is given explicitly (this affected Entergy, PPL, FirstEnergy, AES and Edison International, whose stockanalysis.com pages showed the 1 October close, and Evergy and NiSource, whose pages showed 29 September; Dominion's page showed a 2 October intraday print at 13:40 Eastern). Fortis (Toronto) showed an 18 September close.
- **Market data.** Prices, market values, trailing and forward price-to-earnings ratios, consensus ratings and price targets come from stockanalysis.com quote, statistics and forecast pages retrieved 3 October 2026 between 03:50 and 04:40 UTC [80] (secondary aggregator; their ratings are compiled from S&P Global Market Intelligence and TipRanks). The site's "forward P/E" is on a next-twelve-month basis; where I quote a 2026 or 2027 P/E it is **my arithmetic**: price ÷ the stated consensus or company-guidance figure.
- A **megawatt (MW)** is a unit of power; a **gigawatt (GW)** is 1,000 MW; a **terawatt-hour (TWh)** is a unit of energy equal to one billion kilowatt-hours. **UCAP** (unforced capacity) is capacity after an availability haircut. **$/MW-day** is the unit for capacity payments: $325/MW-day equals about $118,600 per MW per year.

**Method caveat.** The session's web-search quota ran out after about 60 searches. Most verification therefore came from primary documents fetched directly: PJM auction releases, FERC and state-regulator orders and summaries, ERCOT hearing material, company earnings releases and filings, the NRC uprate schedule, and the stockanalysis.com quote feed. The Yahoo Finance quote API rate-limited the session, so Yahoo was not used for prices. Items I could not verify are flagged where they appear and listed in §12.

---

## 0. Executive summary: twelve conclusions

1. **Demand forecasts are enormous, but the energized reality is one-tenth of the queue.** NERC's 2025 Long-Term Reliability Assessment lifts the 10-year summer-peak growth forecast to **224 GW (+24%)**, a 69% increase on the 2024 assessment, with "most of the projected increase" from data centers (30 Jan 2026) [1][2]. Grid Strategies' five-year forecast is **166 GW** of summer peak by 2030 (3.7% a year), of which data centers are about 55%, and the firm itself warns that about 25 GW of that is overstated (Nov 2025) [3]. Against that, the queues are absurd: ERCOT had **~410 GW** of large-load requests (87% data centers) in March 2026 and **438 GW** by June [9][10]; Oncor alone reported 200 GW of requests in 2025 [65]; PJM cut 60 GW of utility-submitted 2030 large load to 34 GW (a 43% haircut) before publishing [8]. Behind-the-meter projects total ~90 GW announced but only ~2 GW operating [20]. The investable fact is the ratio, not the headline: utilities now report **contracted** load with collateral (Dominion 12.0 GW of firm agreements out of a 53.8 GW "contracted" pipeline [52]; FirstEnergy 6.4 GW under contract against 24.8 GW pipeline [66]; Exelon's "high-probability" load fell 40% to 11 GW once transmission security agreements with collateral were required [19]).
2. **The PJM capacity market has become an administered price.** Three consecutive Base Residual Auctions cleared at the cap: **$329.17/MW-day (2026/27), $333.44 (2027/28, 17 Dec 2025) and $325.00 (2028/29, 14 Jul 2026)**. The 2028/29 auction procured 138,318 MW UCAP, **6,831 MW short** of the reliability requirement, with only **525 MW** of new generation clearing and a total bill of **$16.4 billion** [21][23]. The cap was extended at $325 through the next auction under a settlement with Pennsylvania's governor; the first uncapped auction is scheduled for **May 2027** [24]. For generators the result is a high but capped revenue line (about $118,600 per MW-year), with the IMM attributing **$6.3 billion (38%)** of the latest auction's cost to data centers and **$29.4 billion of $63.6 billion (46%)** over four auctions [29].
3. **The policy response is "make data centers pay", and in late September 2026 it stalled.** The White House/governors' Statement of Principles (15 Jan 2026) called for a Reliability Backstop Auction with 15-year contracts and costs assigned to load-serving entities with data centers [26]. PJM filed it (docket ER26-3380, 31 Jul 2026) with a $555/MW-day cap and a 30 September to 21 October bid window; on **29 Sep 2026 FERC accepted the framework but suspended implementation for five months (into late February 2027)**, faulting cost allocation, exit rules and buyer-side collateral (one cooperative faced about $2 billion of collateral). The bid window never opened. The **Interim Resource Adequacy Service**, under which new large loads without contracted supply are curtailed first, still takes effect **1 Jun 2027** [27][28]. **My reading:** the backstop was the one new, long-dated, uncapped revenue avenue for owners able to build in PJM (PSEG, Constellation, Vistra, Talen, NRG); its slip is one reason the merchant names fell in September.
4. **Texas is going the other way: faster connection, mandatory curtailment, and no shelter behind co-location.** PUCT approved ERCOT's Batch Zero large-load process on 18 Jun 2026 (75 MW threshold, maturity criteria; Batch Zero notifications August 2026, final transmission plan fall 2027, Batch 1 opens summer 2027) [10]. On 24 Jul 2026 the PUCT ruled in Docket 59220 (Crusoe/Google 260 MW load paired with a 265.5 MW wind farm) that emergency curtailment is **not capped by the paired generator's size**: a co-located data center must be able to disconnect fully within 30 minutes without compensation [11]. Oncor counts **44 GW** of Batch Zero-eligible requests and over $7 billion of transmission for ~16 GW of load by 2034 [64]; CenterPoint counts **~14 GW** eligible, more than 65% of Houston's 21 GW peak, by 2031 [67].
5. **Take-or-pay has become the national template, and it is what makes regulated rate base defensible.** EEI counts **25 states with approved large-load tariffs and 7 pending** (11 Sep 2026) [15]. AEP Ohio: 85% minimum demand for up to 12 years above 25 MW, exit fees, collateral; its "inquiries" fell from >30 GW to a 13 GW working queue [12][13]. Virginia GS-5 (effective 1 Jan 2027): 14-year contracts, 85% of transmission/distribution and 60% of generation costs paid regardless of use, **$1.5 million per MW of collateral** [16][17]; on 5 Aug 2026 the SCC also ordered Dominion to assign network and substation upgrades triggered solely by a large load directly to that customer [18]. Georgia Power requires at least 15-year contracts with minimum bills [57]. **The engineering point:** these tariffs convert speculative load into a financeable contract; the stranded-asset risk moves from ratepayers to hyperscalers' balance sheets.
6. **The merchant/nuclear complex has already de-rated hard in 2026 even as guidance went up.** Constellation raised 2026 adjusted EPS guidance to **$11.50–12.50**, signed **920 MW** of new 15–20-year nuclear PPAs (incl. 176 MW for Walmart) starting 2029–32 and kept Crane on a 2027 restart [37][38]; yet the shares closed **$257.49 on 2 Oct 2026, 38% below the $412.70 52-week high**, at 20.8× forward earnings [80]. Vistra ($140.02, −30.5% over 52 weeks; 13.6× forward, 10.1× EV/EBITDA), NRG ($95.23, −40.5%; 9.1× forward), Talen ($320.77, −24.9%; 10.7× forward) show the same pattern [80]. The drivers I can document: capped PJM prices through the 2029/30 auction, the backstop slip, "meaningfully lower" ERCOT forward curves (Vistra, 7 Aug 2026) [43], NRG tracking below its guidance midpoint on softer Texas prices and a $70 million Virginia RGGI re-entry hit [48], and a general rotation out of 2025's winners [40]. Consensus targets still sit 33–95% above the closes [80].
7. **Hedging makes 2027 safe for the merchants whatever happens to AI capex; 2028 is the open year.** Vistra is ~100% hedged for 2026, ~94% for 2027, ~72% for 2028 (3 Aug 2026) and maintains a **$7.4–7.8 billion** 2027 adjusted EBITDA "opportunity" (ex-Cogentrix, which "could add about $700 million") [42][43]. Talen is ~85/70/30% hedged for 2026/27/28 and cleared **over 10 GW** at $325/MW-day for 2028/29 [47]; **my estimate** is that this alone is about $1.2 billion of 2028/29 capacity revenue (10,000 MW × $325 × 365). **Per-share sensitivity to $1/MWh of open power price (my estimates, 21% tax):** Talen ≈ $0.90/share, Vistra ≈ $0.35, Constellation ≈ $0.40–0.60 — Talen is the most levered, Constellation the most contracted.
8. **Regulated utilities with contracted load are growing earnings 7–9% but trade near 52-week lows.** Xcel raised long-term EPS growth to **9%+** on a $70 billion plan and a "high probability" portfolio of 20+ GW, with ~85% of its five-year equity pre-funded [63]; it closed at $71.40, 16.7× forward, 3.3% yield. PPL reports a **31.8 GW** advanced pipeline with **11 GW** under signed agreements and a Blackstone venture with sites for up to **14 GW** of generation [70][71]; $32.76, 15.8× forward, 3.5% yield, 2027 consensus EPS $2.12 (15.5×, **my arithmetic**). Sempra guides 2027 EPS to **$5.10–5.70** on a $65 billion plan 95% regulated; $78.38 is 14.5× the 2027 midpoint (**my arithmetic**), 3.4% yield [64][80]. FirstEnergy's transmission rate base is growing 14% a year with 6.4 GW contracted; $43.39, 16.0× the 2026 guidance midpoint, 4.3% yield [66][80]. The sector-wide discount reflects politics (point 9) and equity issuance, not a shortage of load.
9. **Affordability politics is the real 2026–27 risk for regulated names, and it is already differentiating them.** Exelon withdrew a Pennsylvania rate request and cut spending; Eversource's CEO called data centers "no value" (8 May 2026) [35][36]; Virginia's SCC cut Dominion's requested ROE from 10.4% to **9.8%** and removed ~$350 million of speculative data-center costs (Nov 2025) [16]; Indiana's governor replaced commissioners while AES Indiana sought 10.7% ROE [35]; Governor Shapiro claims **$45 billion** of PJM savings and ~$800 per household from the cap [24]. Names where load growth demonstrably *lowers* other customers' bills are faring better in regulation: CenterPoint projects at least **$5 billion** of delivery-charge reduction from new load [67]; Southern cites **$1.7 billion** of customer benefits 2029–31 [57]; Alliant says growth keeps Iowa rates flat through at least 2029 [69]; Entergy cites $7 billion of cumulative customer benefits [60].
10. **Gas is the marginal resource, and 2026 turbine economics make utility-owned, contracted gas the most bankable form of it.** GE Vernova's gas-turbine backlog reached **116 GW** (plus reservations to ~125 GW by year-end), it is booking **2031** deliveries, and analysts put heavy-duty turbine pricing near **$790/kW** and HA-class combined-cycle equipment near **$950/kW**, with all-in plant costs for 2030–31 projects above **$2,000/kW** [74][75]. NRG's hyperscaler-contracted 1.2 GW Texas combined cycle costs **$3.2 billion** (≈$2,670/kW, **my arithmetic**) and is priced at "probably $85–90 plus" per MWh with 15-year minimum capacity payments covering 95% of free cash flow [48]; FirstEnergy's 1,200 MW Maidsville plant is $2.5 billion (≈$2,080/kW) [66]; Entergy's seven combined-cycle units for Meta total 5.2+ GW inside a $15 billion package [59]. **Who gains:** utilities and contracted IPPs with turbine slots and tariff protection. **Who loses:** anyone needing merchant gas in PJM before 2031.
11. **Flexibility is moving from slide-ware to tariff language.** Google has embedded **1 GW** of demand response into power agreements with five utilities (19 Mar 2026) [77]; Georgia Power's **3.2 GW, 25-year** OpenAI contract near Savannah includes **1 GW of flexible demand response**, the first such provision Southern has codified (Aug 2026) [56]; PJM's connect-and-manage and Interim Resource Adequacy Service institutionalize curtailment from June 2027 [26][28]; Texas mandates it [11]. NERC's Level 3 alert (4 May 2026) on 1,000+ MW sudden data-center load losses forces modeling, commissioning and ride-through requirements that will add cost to the facility side and reduce it on the grid side [79]. **Engineering transition the market has not priced:** flexible, partially-curtailable AI load is worth more to a capacity-short grid than firm load, and it lowers the utilities' generation build while preserving transmission rate base.
12. **Ranked shortlist** (details in §9): 1. Vistra (NYSE:VST); 2. PPL Corp (NYSE:PPL); 3. Talen Energy (NASDAQ:TLN); 4. Sempra (NYSE:SRE); 5. Public Service Enterprise Group (NYSE:PEG); 6. Constellation Energy (NASDAQ:CEG); 7. FirstEnergy (NYSE:FE); 8. Southern Company (NYSE:SO); 9. NRG Energy (NYSE:NRG); 10. Xcel Energy (NASDAQ:XEL); 11. NextEra Energy (NYSE:NEE, including the pending Dominion merger); 12. CenterPoint Energy (NYSE:CNP). Rejected names are in §10.

---

## 1. Value-chain map (October 2026)

Notation: `exchange:ticker`; US over-the-counter symbol where one exists. Scarcity reading is my assessment based on §§2–7.

| Layer | What is sold | Listed companies | Notable private / unlisted | Scarcity reading 2026–28 |
|---|---|---|---|---|
| **A. Firm capacity in PJM (13 states + DC)** | Capacity (UCAP) sold in the Base Residual Auction; energy; ancillary services; 15-year backstop contracts (pending) | Constellation (NASDAQ:CEG), Vistra (NYSE:VST), Talen (NASDAQ:TLN), NRG (NYSE:NRG), PSEG (NYSE:PEG; nuclear fleet in PJM), Dominion (NYSE:D; Virginia is in PJM but vertically integrated), AEP (NASDAQ:AEP), Exelon (NASDAQ:EXC; wires only), PPL (NYSE:PPL; wires only), FirstEnergy (NYSE:FE; wires only, now building in West Virginia) | LS Power (sold 13 GW to NRG, bought Brazos Valley from Constellation), Cogentrix (being bought by Vistra), Invenergy, Competitive Power Ventures | **Scarce and price-capped**: 6.8 GW short of requirement for 2028/29; cap $325/MW-day through the 2029/30 auction; first uncapped auction May 2027 [21][24] |
| **B. Nuclear output for hyperscaler PPAs** | 15–25-year power purchase agreements for existing reactors; restarts; uprates (MUR, stretch, extended) | Constellation (Clinton–Meta 1,121 MW from Jun 2027; Crane restart 2027; 920 MW new PPAs), Talen (Susquehanna–Amazon 1,920 MW ramping to 2032), Vistra (Comanche Peak 1,200 MW PPA from late 2027), NextEra (Duane Arnold restart for Google by Q1 2029), PSEG (Salem stretch uprate application Q2 2027), Duke (NYSE:DUK; Brunswick/McGuire/Catawba uprates), Southern (Hatch, Vogtle uprates) | Holtec (Palisades), TVA (federal) | **Scarce**: the NRC expects 31 uprate applications totaling only **2,421 MWe** through 2032 [76]; every unit with a free interconnection is being contracted |
| **C. ERCOT (Texas) merchant and large-load connection** | Energy-only market; Batch Zero large-load connections; Texas Energy Fund loans | Vistra, NRG, Constellation (Calpine's Texas fleet), Sempra (NYSE:SRE; Oncor wires), CenterPoint (NYSE:CNP; Houston wires), AEP (Texas wires, 41 GW of ERCOT requests) | Crusoe (Abilene), xAI, Oracle/OpenAI Stargate (behind the meter), Fermi America | **Loosening on connection, tightening on rules**: 438 GW queue vs. mandatory curtailment and no co-location shelter [10][11]; forward energy curves "meaningfully lower" (Vistra, Aug 2026) [43] |
| **D. Regulated vertically integrated utilities with contracted data-center load** | Rate-base growth (generation + wires) recovered at allowed ROE under take-or-pay tariffs | Southern (NYSE:SO; 17 GW contracted), Dominion (53.8 GW "contracted", 12 GW firm), Duke (7.8 GW executed), AEP (63 GW "contracted"), Entergy (NYSE:ETR; Meta 5.2+ GW), Xcel (NASDAQ:XEL), Evergy (NASDAQ:EVRG), Alliant (NASDAQ:LNT), Ameren (NYSE:AEE; 2.8 GW ESAs), NextEra/FPL (NYSE:NEE; 21 GW interest), NiSource (NYSE:NI), Portland General (NYSE:POR), DTE (NYSE:DTE; Oracle 1.4 GW), AES (NYSE:AES; being taken private) | Municipal and cooperative utilities (e.g., NOVEC in Virginia; TVA) | **Growth abundant, returns regulated**: EPS growth 6–9%; the constraint is equity (Duke $10 billion 2027–30, Ameren $4 billion, Xcel $7 billion) and allowed ROEs near 9.8% [16][62][63][68] |
| **E. Transmission and distribution-only utilities** | FERC-formula transmission rate base (allowed ROEs ~10–11%), state distribution rate base; no commodity risk | PPL, FirstEnergy, Exelon, Sempra/Oncor, CenterPoint, Fortis/ITC (TSX:FTS; NYSE:FTS), AEP Transmission (inside AEP), Eversource (NYSE:ES) | Grid United, Invenergy Transmission, LS Power Grid | **Scarce and under-appreciated**: Virginia will assign upgrades directly to data centers; PJM 765 kV build (Valley Link) and Texas 765 kV plan expand FERC-regulated rate base [18][64] |
| **F. Contracted gas build for data centers** | Combined-cycle and peaker plants under 15-year capacity contracts or in regulated rate base | NRG (5.4 GW turbine/EPC with GE Vernova–Kiewit), Vistra (Permian 860 MW; Cogentrix), Talen (Cornerstone 2.6 GW CCGT), Entergy (7 CCGTs for Meta), Duke (Person County 2,720 MW, Cayuga 1,476 MW), Southern (10 GW approved), FirstEnergy (Maidsville 1,200 MW), PPL–Blackstone JV (up to 14 GW of sites) | Kiewit (EPC), Bechtel, Invitium Energy (5+ GW turbine reservations in Pennsylvania) | **Turbine-gated to 2031**: GE Vernova backlog 116 GW, booking 2031 [74] |
| **G. Behind-the-meter / onsite power** | Aeroderivative turbines, reciprocating engines, fuel cells, mobile gensets at data-center sites | Caterpillar (NYSE:CAT; 33% of BTM equipment), Bloom Energy (NYSE:BE; 14%), GE Vernova (NYSE:GEV), Solaris Energy Infrastructure (NYSE:SEI), Cummins (NYSE:CMI), Wärtsilä (HEL:WRT1V) | Crusoe, xAI, VoltaGrid, ProEnergy | **Real but small**: ~90 GW announced, ~2 GW operating, 2.8–3.2 GW online by end-2026 [20]; a threat to utility load forecasts, not yet to utility earnings |
| **H. Flexibility and demand response** | Curtailable load as a capacity resource; connect-and-manage service; clean-capacity exchange | Google (NASDAQ:GOOGL), Microsoft (NASDAQ:MSFT), Meta (NASDAQ:META), NVIDIA (NASDAQ:NVDA) as buyers; utilities as sellers of flexible interconnection (I&M/AEP, Georgia Power, Entergy Arkansas, DTE, Minnesota Power/ALLETE) | Emerald AI, Verrus, Voltus, CPower | **Forming**: 1 GW Google; 1 GW in the OpenAI–Georgia Power contract; PJM mandates from Jun 2027 [26][56][77] |
| **I. Storage as capacity** | 4-hour lithium batteries in rate base or merchant; backstop-eligible in PJM | NextEra (2 GW of storage in a 3.6 GW quarter of backlog additions), Duke (4.5 GW by 2031), Exelon/ACE (500 MW, $1 billion), Vistra, Fluence (NASDAQ:FLNC), Tesla (NASDAQ:TSLA) | — | **Growing fast**; MISO cleared record demand response; storage lowers capacity prices at the margin [30][53][62] |

---

## 2. Demand: forecasts, queues and what actually gets energized

### 2.1 The forecast stack (latest available)

| Forecaster | Horizon | Headline | Data-center share | Date | Source |
|---|---|---|---|---|---|
| NERC 2025 Long-Term Reliability Assessment | 10 years | Summer peak **+224 GW (+24%)**; winter peak +246 GW; 105+ GW of confirmed retirements; MISO, PJM (margin below reference from 2029), ERCOT and parts of the Pacific Northwest at high risk within five years | "Most of the projected increase" | 30 Jan 2026 | [1][2] |
| Grid Strategies, National Load Growth Report 2025 | 5 years (to 2030) | **+166 GW** summer peak (3.7%/yr); energy +32% (5.7%/yr); the forecast was 24 GW in 2022, 38 GW in 2023, 64 GW in 2024 | ~55% (~90 GW), of which ~25 GW likely overstated; ERCOT 53.7 GW, PJM 30.1 GW, SPP 24.5 GW, MISO 12.7 GW, Georgia Power 9.6 GW | Nov 2025 | [3] |
| PJM 2026 Long-Term Load Forecast | to 2046 | Summer peak 160 GW (2025) → **253 GW (2046)**, 2.4%/yr; 2026–31 large-load adjustments +35.1 GW against total growth +34.6 GW (base load shrinks); DOM, AEP, COMED and PL zones = 74% of growth | 78% of growth to 2046; PJM accepted **34 GW** of **60 GW** submitted for 2030 (−43%) after utilization, firmness and 36-month ramp screens | Jan 2026 | [8] |
| EIA Short-Term Energy Outlook | 2026–27 | Record consumption; **4,211 billion kWh in 2027**; ~2%/yr growth; commercial sales +3.3% (2026) and +2.7% (2027), 63% and 56% of the increase; gas generation +2%/+1%, coal −8%/−6%, solar +21%/+18% | "Data centers and manufacturing" | 10 Sep 2026 | [6][7] |
| LBNL / DOE 2024 Data Center Energy Usage Report | to 2028 | 176 TWh (4.4% of US) in 2023 → **325–580 TWh (6.7–12%)** in 2028 | 100% | 20 Dec 2024 | [4][5] |
| ERCOT large-load queue | — | **~410 GW** (26 Mar 2026), 87% data centers; **438 GW** by June 2026; generation queue 453.6 GW, 76% solar + storage; gas in queue +271% since the Texas Energy Fund | 87–90% | Apr–Jun 2026 | [9][10] |

**Reconciliation (my estimate).** US data-center consumption of 176 TWh in 2023 corresponds to roughly 20–22 GW of average load. The upper LBNL case for 2028 (580 TWh) implies 65–70 GW of average load, which is close to the 60–65 GW of data-center demand through 2030 that Grid Strategies cites from market analysts [3]. The 438 GW ERCOT queue is therefore roughly six times the plausible *national* 2030 increment. The research brief's question — the gap between announced and energized gigawatts — is answered by the utilities' own screens:

| Utility | Gross requests / pipeline | Screened or contracted | Energized or under construction | Date | Source |
|---|---|---|---|---|---|
| Dominion (Virginia) | 53.8 GW "contracted" (up 11% from 48.5 GW in Dec 2025); ~70 GW total pipeline per press | 32.4 GW early substation engineering letters; 9.4 GW construction letters; **12.0 GW firm electric service agreements** | not disclosed in slides | Jul 2026 | [52] |
| AEP (11 states) | 190 GW active queue | **63 GW** contracted by 2030 (90% data centers); ERCOT 41 GW | — | 6 May 2026 | [14] |
| AEP Ohio | >30 GW of inquiries, 50 customers, 90 sites | 13 GW after tariff | 600 MW signed as of 2024 | 2025–26 | [12][13] |
| Exelon (ComEd, PECO, BGE, Pepco) | 43 GW (May 2026) → 25 GW (Q2) | **11 GW** "high probability" (from 18 GW); ~4 GW signed transmission security agreements with **$1 billion** of collateral | — | Jul 2026 | [19] |
| Oncor (Texas) | 200 GW requests (186 GW data centers); 1,100 customers | 44 GW Batch Zero-eligible (27 GW base + 17 GW studied); 9 GW signed interconnection agreements (2025) | ~16 GW of load expected 2026–34 | Aug 2025 / Aug 2026 | [64][65] |
| CenterPoint Houston | >17 GW submitted to Batch Zero | ~14 GW expected eligible | 8 GW expected to energize by 2029 | Jul 2026 | [36][67] |
| Southern Company | 75 GW pipeline | **17 GW** contracted (+6 GW since Q1 2026); 8 GW advanced, 3 GW near-final | 1.2+ GW of data-center load on system; usage +55% y/y in Q2 | Aug 2026 | [56][57] |
| Duke Energy | 15.4 GW late-stage | **7.8 GW** executed | **5.2 GW** under construction | Aug 2026 | [62] |
| FirstEnergy | 24.8 GW (+30% q/q) | **6.4 GW** by 2035 (+50% q/q); 1.5 GW more imminent | — | 29 Jul 2026 | [66] |
| PPL Electric | 31.8 GW advanced-stage | **11 GW** signed | — | Aug 2026 | [70][71] |
| Xcel | 20+ GW "high probability" | 1 GW signed | 1 GW operating/under construction; 4 GW more by end-2027 | 30 Jul 2026 | [63] |
| Entergy | 7–12 GW probability-weighted + 3–5 GW industrial | Meta Hyperion contracted (5.2+ GW of CCGTs) | — | 29 Jul 2026 | [59][60] |
| Ameren Missouri | 4 GW with completed studies | **2.8 GW** ESAs (Google, Amazon, $25 billion); 0.6 GW construction agreements | sales begin H2 2027 | Aug 2026 | [68] |
| NextEra/FPL | ~21 GW interest | 12 GW advanced; first tariff transaction expected by end-2026 | — | 24 Jul 2026 | [53] |
| Behind-the-meter (national) | ~90 GW, 59 projects | 36% permitted | **~2 GW operating**, 1.2% under construction; 2.8–3.2 GW by end-2026 | mid-2026 | [20] |

**What I conclude.** Roughly 100–120 GW of US load is now under some form of signed agreement with collateral or minimum bills (**my estimate**, summing the contracted columns and removing the obvious overlaps between Dominion's firm agreements and AEP's totals). That is three to four times what the grid can energize by 2030 at the current pace of transmission and generation build, which is why every tariff now contains a ramp schedule and why curtailment is being written into interconnection rules.

### 2.2 Large-load tariffs: the take-or-pay standard

| Jurisdiction / utility | Threshold | Minimum bill | Term | Collateral and exit | Status | Source |
|---|---|---|---|---|---|---|
| AEP Ohio (PUCO) | >25 MW | **85%** of subscribed capacity monthly, up to 12 years, 4-year ramp | up to 12 years | exit fees; financial assurance; 100% of construction cost if cancelled or delayed >12 months | approved 9 Jul 2025; moratorium phased out | [12][13] |
| Dominion Virginia GS-5 (SCC) | ≥25 MW, 75% load factor | **85%** of transmission/distribution, **60%** of generation costs regardless of use | **14 years** | **$1.5 million per MW**; exit fees | approved 25 Nov 2025; effective 1 Jan 2027; SCC order 5 Aug 2026 adds direct assignment of load-triggered network upgrades | [16][17][18] |
| Georgia Power (PSC) | large load | minimum bill provisions, termination payments tied to incremental cost | **≥15 years** | — | in place; 10 GW of new generation approved 19 Dec 2025 | [57][58] |
| Evergy Kansas (KCC) | large load | 10% premium over standard industrial rates; two years of minimum bills posted upfront | — | collateral | approved Nov 2025 | [12] |
| ERCOT / Texas SB6 (PUCT) | ≥75 MW | — | — | interconnection fees and financial security under Batch Zero; mandatory emergency curtailment within 30 minutes without compensation; co-location does not cap curtailment | Batch Zero approved 18 Jun 2026; curtailment order 24 Jul 2026 | [10][11] |
| Exelon utilities (PJM) | large load | transmission security agreements with "credit obligations, committed revenue contributions and shortfall payments" | — | ~$1 billion posted for ~4 GW | 2026 | [19] |
| National (EEI count) | typically 25–100 MW | minimum billing demand universal | minimum terms universal | collateral universal; capacity reassignment clauses | **25 states approved, 7 pending** (11 Sep 2026); 65 tariffs pending or in place across 34 states per SEPA (early 2026) | [12][15] |

**Engineering reading.** Minimum bills at 85% for 12–15 years turn a data center into a financeable annuity for the utility, but they also price in the one risk the utilities cannot hedge: construction that outruns the load's ramp. The Virginia SCC removed about $350 million of "speculative" data-center costs from Dominion's recoverable base in November 2025 precisely because contract-phase tracking was weak [16]. The regulated model works when the tariff is in force *before* steel is ordered; Dominion's 2024–26 build happened partly before GS-5 takes effect in 2027.

### 2.3 Behind-the-meter bypass: how big is the leak?

Cleanview's mid-2026 survey identifies **59 behind-the-meter data centers totaling ~90 GW** (more than a quarter of the US pipeline), 92% announced since January 2025, with Texas leading and five states holding 83% of capacity. Only **~2 GW operates**, 1.2% is under construction, 36% is permitted and 60% is announcement-stage; the firm projects **2.8–3.2 GW online by end-2026**. Natural gas dominates: mobile gensets on trucks, aeroderivative turbines, reciprocating engines and refurbished industrial turbines; Caterpillar has about **33%** of equipment share and Bloom Energy **14%** after the Oracle deal. The largest are xAI's Colossus 1 and 2 (1,498 MW) and the Oracle/OpenAI Stargate Jupiter site (2,450 MW) [20]. Microsoft's 2 GW Pecos, Texas project will fund its own energy infrastructure [10].

**My reading.** The leak is real for *utility load forecasts* (it removes the most impatient 5–10% of demand) but small for *utility earnings*: PJM's co-location rules cap retail behind-the-meter generation netting at **50 MW** cumulative nameplate for new arrangements (grandfathering only for contracts before 18 Dec 2025) [32], Texas curtails co-located load regardless of onsite generation [11], and the economics of onsite gas at 2026 equipment prices (above $2,000/kW all-in for firm combined-cycle, far more for aeroderivatives at ~$1,800/kW for the turbine alone) exceed a regulated tariff with a 9.8% ROE on shared infrastructure [74][75]. Behind-the-meter is a bridge for 2026–29; the long-run risk to utilities is that the bridge becomes permanent if interconnection timelines stay at 5–7 years.

---

## 3. Power markets: PJM, MISO, ERCOT, FERC and the politics of who pays

### 3.1 PJM capacity auctions

| Delivery year | Auction date | RTO clearing price ($/MW-day, UCAP) | Cap | MW procured (BRA) | Shortfall vs requirement | New generation cleared | Total cost | Source |
|---|---|---|---|---|---|---|---|---|
| 2025/26 | Jul 2024 | $269.92 (RTO); up to $444 in BGE/DOM (background) | none | — | — | — | ~$14.7 bn (background) | background |
| 2026/27 | Jul 2025 | **$329.17** | $329.17 (collar) | — | — | — | — | [23] |
| 2027/28 | 17 Dec 2025 | **$333.44** | $333.44 | 134,479 MW | **6,623 MW** | — | — | [23] |
| 2028/29 | 14 Jul 2026 | **$325.00** (down 2.5%) | $325.00 (extended collar) | **138,318 MW** (+10,864 MW FRR = 149,182 MW) | **6,831 MW**; reserve margin 14.7% | **525 MW**; +5,639 MW gas UCAP vs prior auction; +651 MW solar | **$16.4 billion** | [21][22] |
| 2029/30 | expected around Dec 2026–early 2027 (PJM's compressed schedule; date not verified) | capped at **$325** under the extended settlement | $325 | — | — | — | — | [24] |
| 2030/31 | **May 2027** (first uncapped auction, with reformed market design) | uncapped | none | — | — | — | — | [24][26] |

Supply mix clearing in 2028/29: 46% gas, 20% nuclear, 18% coal, 5% demand response, 4% hydro, 2% wind, 2% oil, 1% solar. PJM's load forecast for 2028/29 was ~2,000 MW higher than for 2027/28, attributed to "continued addition of large data center loads" [21].

**Who pays, per the Independent Market Monitor (Monitoring Analytics):** data centers accounted for **$6.3 billion of the $16.4 billion** (38%) in the 2028/29 auction and **$29.4 billion of $63.6 billion (46%)** across the last four auctions. The IMM's recommendations are that data centers contract for their own generation or that PJM run separate 15-year auctions for them [29].

**The cap mechanics.** The January 2025 Shapiro–PJM settlement set a $333.44 cap and a $175 floor for two auctions; the April 2026 extension set **$325** for two more auctions (2028/29 and 2029/30). The Governor claims $13.3 billion of savings from the July 2026 auction, $45 billion in total, about $800 per household over four years and a 9% Pennsylvania bill reduction for 2028/29 [24]. **For generators (my estimate):** $325/MW-day on cleared UCAP is about $118,600 per MW-year. A 1 GW combined cycle at 90% UCAP earns ~$107 million a year of capacity revenue; a 2.2 GW nuclear station ~$260 million. The cap removes the upside that an uncapped 6.8 GW shortfall would have produced (the IMM's uncapped estimates ran far higher; Exelon simulated **$777/MW-day** in an uncapped scenario per its Q2 call summary (secondary) [19]).

### 3.2 The reliability backstop and the June 2027 curtailment rule

- **15 Jan 2026:** Statement of Principles signed by Interior Secretary Burgum (National Energy Dominance Council), Energy Secretary Wright and PJM-state governors: a Reliability Backstop Auction "commencing no later than September 2026" with "15-year price certainty", costs assigned to load-serving entities with new data centers that have not self-procured capacity or committed to curtail; load forecasts to require "an executed energy service agreement, credit/collateral support, or similarly significant financial commitment" [26].
- **16 Jan 2026:** PJM Board decisional letter: accelerate a backstop procurement (existing rules "not sufficiently detailed"); seek feedback on the price collar because collars "could dampen signals needed to support the entry of new supply"; establish connect-and-manage under which large loads "curtail their demand or move to on-site backup generators, for a limited number of hours per year"; expedited interconnection track by August 2026; load-shedding framework by end-2026; reformed-design auction May 2027 [26].
- **9 Jun 2026:** bilateral contracting track launched; PSEG and others submitted proposals for new dispatchable generation [27][51].
- **31 Jul 2026:** PJM filed the Reliability Backstop Procurement (ER26-3380): target 6,831 MW less documented bilateral contracts and self-supply; bid window 30 Sep–21 Oct 2026; results early December; 15-year contracts; batteries, gas, nuclear and clean generation eligible; cap **$555/MW-day** [27][28].
- **29 Sep 2026:** FERC (Chair Laura Swett) accepted the framework and the $555 cap and seller-collateral rules but found cost allocation (should rest on updated load forecasts), transmission-owner exit rules and buyer-side collateral potentially unjust and unreasonable; **implementation suspended five months, into late February 2027**; PJM may file fixes sooner. Swett: "This commission will not be forced into accepting a deeply flawed, eleventh-hour procurement mechanism with billion-dollar implications for consumers." The 30 September window never opened; no new date set. Maryland's People's Counsel projected $562 million of exposure over 15 years for BGE and Potomac Edison customers; consumer advocates in Delaware, DC, Illinois and New Jersey protested [28].
- **1 Jun 2027:** Interim Resource Adequacy Service takes effect: new large loads arriving without contracted capacity face first curtailment [28].

**Investment reading.** The backstop was the mechanism by which a merchant could sign a 15-year, up-to-$555/MW-day contract (≈$203,000 per MW-year, **my arithmetic**) — a near-regulated return on new PJM gas or storage. Its slip pushes new-build decisions into 2027 and keeps the market short, which protects incumbent capacity values but at a capped price. The June 2027 curtailment rule is the stronger signal: it will push hyperscalers toward bilateral contracts with existing generators (Constellation, Talen, Vistra, PSEG) because an uncontracted data center in PJM becomes the first load shed.

### 3.3 FERC on co-location

- **1 Nov 2024:** FERC rejected (2–1) the amended interconnection agreement that would have raised the Talen–Amazon Susquehanna co-located load from 300 MW to 480 MW, citing cost-shifting risk; Talen and Amazon restructured in June 2025 into a **1,920 MW front-of-meter PPA to 2042** ramping to full volume by 2032 [33][34].
- **18 Dec 2025:** FERC's unanimous show-cause order directed PJM to write rates, terms and conditions for co-location: a data center drawing 100 MW from the grid while co-located with a 900 MW plant may buy "firm contract demand" for 100 MW rather than 1,000 MW of network service; loads accepting curtailment above the contracted amount gain cost advantages [31].
- **23 Feb 2026:** PJM's compliance filing (proposed effective 31 Jul 2026) created three services: Firm Contract Demand Transmission Service; Non-Firm Contract Demand (as-available); Interim Network Integration Transmission Service during upgrade construction. Retail behind-the-meter generation netting capped at **50 MW** cumulative nameplate (backup gensets excluded); grandfathering for contracts before 18 Dec 2025. Studies take 60–120 days but remain exposed to PJM's queue backlog [32].

**Reading.** The 2024 rejection ended the "island" model; the 2026 rules reward *net* grid draw and curtailability. Front-of-meter nuclear PPAs with firm contract demand are now the template (Talen–Amazon, Constellation–Meta, Vistra–Comanche Peak). Texas reached the same destination by a different route: co-location is permitted but curtailment is mandatory and uncapped [11].

### 3.4 MISO and ERCOT prices

- **MISO 2026/27 Planning Resource Auction (28 Apr 2026):** summer cleared at roughly **$400/MW-day** across the footprint (about $424 per a secondary summary), down about $200 from the 2025/26 summer price (~$600–667), on increased supply and a record amount of demand response [30]. MISO remains a "high risk" region in NERC's five-year view [2].
- **ERCOT:** energy-only; forward curves "meaningfully lower" for 2027 per Vistra (7 Aug 2026), which it offsets with PJM strength and hedges [43]; NRG cited "softer Texas prices" as the reason it is tracking below its 2026 guidance midpoint [48]. 453.6 GW of generation sits in the ERCOT queue, 76% solar and storage [9], which is the engineering reason Texas energy prices are soft while Texas *connection* is the scarce good.
- **Forward power curves:** I could not retrieve a dated forward-curve table within the session; see §12.

### 3.5 Affordability politics in 2026: a state-by-state ledger

| State / actor | Action | Date | Source |
|---|---|---|---|
| Pennsylvania (Gov. Shapiro) | Sued PJM; secured $333.44 cap, then $325 extension; one-time 15-year auction plan with the Trump administration; opposes rate requests failing affordability criteria | Jan 2025–Jul 2026 | [24][25][35] |
| Virginia (SCC; Gov. Spanberger) | ROE cut to 9.8% from 10.4% requested; $775.6 million of $1.2 billion requested; $16/month residential increase; GS-5 class; $350 million of speculative data-center costs disallowed; 5 Aug 2026 order to assign transmission upgrades directly to large loads (Valley Link 765 kV named as a candidate) | Nov 2025; Aug 2026 | [16][18] |
| Maryland (Gov. Moore; OPC) | Co-signed the PJM principles; OPC projects $562 million backstop exposure | Jan–Sep 2026 | [25][28] |
| Indiana (Gov. Braun) | New commissioners; AES Indiana's 10.1% ($193 million) request with 10.7% ROE ask contested (8% proposed by consumer group) | May 2026 | [35] |
| Arizona (Gov. Hobbs) | Challenging two 14% proposed increases | May 2026 | [35] |
| Illinois | ComEd cancelled a transmission security agreement with the 1.8 GW Joliet project developer; state agencies not ready to route backstop costs to data centers | 2026 | [19][28] |
| New Jersey (Gov. Sherrill) | Executive Order 1 on regulatory modernization; PSE&G pulls rate case forward to end-2026; ACE proposes a 500 MW battery at 9.6% ROE | 2026 | [19][51] |
| Georgia (PSC) | Approved ~10 GW of new generation 19 Dec 2025; SELC: bills up $43/month in two years; "downward pressure" window 2029–31 | Dec 2025 | [58] |
| Ohio (PUCO) | AEP Ohio tariff; moratorium lifted | Jul 2025 | [13] |
| Federal (DOE/FERC) | White House principles; FERC's 29 Sep 2026 backstop suspension; FERC large-load interconnection rulemaking (deadline April 2026 per Latitude; outcome not verified) | 2026 | [12][26][28] |
| Utilities themselves | Exelon withdrew a Pennsylvania rate request and trimmed spending; Eversource CEO: data centers "no value" and "only going to drive up the price of energy" (8 May 2026) | May 2026 | [35][36] |

**What it means for who pays.** The direction is unambiguous: incremental generation and network costs are being assigned to large loads through minimum bills, direct assignment and collateral, while *existing* capacity-market costs are being capped politically. Generators lose the upside of scarcity pricing; wires utilities keep rate-base growth as long as they can show bill benefits for other customers; vertically integrated utilities keep growth but face ROE compression (9.8% is now the Virginia and North Carolina reference [16][62]).

---

## 4. Merchant generators and nuclear owners

### 4.1 Constellation Energy (NASDAQ:CEG)

**Business.** The largest US nuclear operator (about 22 GW, **my estimate**) plus, since the **January 2026** close of the Calpine acquisition, roughly 27 GW of gas and geothermal; a 606 MW ERCOT plant (Brazos Valley) is being sold to LS Power for **$860 million** by end-2026 to satisfy the final antitrust commitment [37].

**Dated evidence.**
- Q2 2026 (6 Aug 2026): GAAP EPS $1.42; adjusted operating EPS **$2.55** (vs $1.91); 2026 guidance raised to **$11.50–12.50** [37].
- **920 MW** of new 15–20-year nuclear PPAs with investment-grade customers starting 2029–32, including **176 MW for Walmart** that enables a 30 MW Dresden uprate [37][38].
- **Crane Clean Energy Center** (ex-Three Mile Island 1, 835 MW, Microsoft 20-year PPA): FERC approved transfer of capacity interconnection rights from Eddystone 3 & 4; NRC approved the fuel license amendment; restart expected **2027** [37].
- **Clinton–Meta:** 1,121 MW (plus 30 MW uprate), 20 years from **June 2027** [39].
- Earlier benchmark: Microsoft's Crane price is reported at about **$100/MWh**, versus a 2023 merchant-nuclear generating cost of $28/MWh [39] (secondary analysis; Constellation has not disclosed prices).
- 5 GW of nuclear, gas and battery capacity entered in the PJM queue (Q1 2026) [36].
- Reported **$715 million** purchase of a 609 MW Rhode Island gas plant from Shell (Sep 2026) [41] (headline only).
- NRC expects multiple Constellation uprate applications: one extended uprate in Q4 2026, two MURs in 2027, three more in Q4 2027, and further filings through 2030 [76].

**Valuation (2 Oct 2026 close) [80].** $257.49; market value $91.2 billion; enterprise value $115.2 billion; net debt $24.0 billion; EV/EBITDA 14.5× trailing; trailing P/E 24.9×; forward P/E 20.8×; 2026 consensus EPS **$12.14** (P/E 21.2×, **my arithmetic**); 2027 consensus not visible on the free page (TIKR cites ~$12 for 2026 and ~$22 for 2030 [40]); dividend yield 0.66%; shares outstanding +6.9% y/y (Calpine stock consideration); free cash flow (trailing) $295 million, 0.3% yield; 52-week range $228.63–412.70 (−26.6% over 52 weeks). Consensus: **Buy** (13 Strong Buy, 6 Buy, 3 Hold of 22); mean target **$342.98**, high $395, low $290.

**Realized vs contracted (my estimate).** Constellation's nuclear fleet produces roughly 180 TWh a year. Each $1/MWh on the unhedged portion is ~$180 million of pre-tax margin, or ~$0.40 per share after 21% tax on 354 million shares; including Calpine's ~100 TWh of gas output (whose margin moves with spark spreads rather than price) the gross sensitivity is nearer $0.60. The hyperscaler PPAs replace that exposure with fixed prices in the $80–100/MWh range for 20 years: at a $30/MWh premium to a ~$55/MWh forward (assumption), the 2,000 MW of Crane plus Clinton contracts alone would be worth ~$480 million a year of incremental margin once both run (2028+), about $1.05 per share after tax (**my estimate**).

### 4.2 Vistra (NYSE:VST)

**Business.** About 41 GW across ERCOT, PJM, MISO and ISO-NE, including 6.4 GW of nuclear (Comanche Peak, Beaver Valley, Davis-Besse, Perry), a Texas retail book, and growing storage and solar. Lotus plants were added in Q3 2025; the **Cogentrix** acquisition has FERC approval and is pending.

**Dated evidence (7 Aug 2026 unless stated) [42][43].**
- Q2 2026 ongoing-operations adjusted EBITDA **$1,767 million** (+30%); first-half $3,261 million.
- 2026 guidance reaffirmed: adjusted EBITDA **$6.8–7.6 billion**; adjusted free cash flow before growth **$3.925–4.725 billion**.
- 2027 adjusted EBITDA midpoint opportunity **$7.4–7.8 billion**, excluding Cogentrix, which "could add about $700 million to 2027 EBITDA midpoint".
- Hedges (3 Aug 2026): ~100% of 2026, **~94% of 2027**, **~72% of 2028** expected generation.
- **Comanche Peak:** 1,200 MW, 20-year PPA (plus 20-year option), deliveries from late 2027, full by 2032 [44]; the company intends "to energize at the end of 2027" [43].
- **Helix Digital Infrastructure** (KKR, NVIDIA, Kuwait Investment Authority): Vistra founding investor with up to $1.0 billion (amounts above $500 million milestone-based) and preferred power provider; a "rack-to-grid" offering [42].
- Permian Basin: 860 MW of new gas units under construction, taking the site to 1,185 MW [44]; Coleto Creek 630 MW gas repowering; Oak Hill 2 and Pulaski solar; Beaver Valley 2 and Perry extended uprates expected to be filed 2029–30, Davis-Besse 2032 [44][76].
- Capital: ~$6.5 billion repurchased since Nov 2021 (share count −30% to ~336 million); **$1.2 billion** authorization remaining through 2027; $4.5–5 billion of growth capital allocated (Cogentrix, Permian peakers, Oak Hill 2, Helix); **$1.5 billion** of junior subordinated notes priced 10 Sep 2026 [45]. CEO Burke bought shares in late September (secondary) [46].

**Valuation (2 Oct 2026) [80].** $140.02; market value $47.0 billion; EV $67.1 billion; net debt $20.1 billion; EV/EBITDA 10.1× trailing; forward P/E 13.6×; 2026 consensus EPS **$8.62**, 2027 **$10.37** (P/E 16.2× and **13.5×**, my arithmetic); free cash flow yield 4.8%; dividend yield 0.66%; 52-week range $132.66–217.10 (−30.5%). Consensus **Strong Buy** (15 Strong Buy, 4 Buy, 1 Sell of 20); mean target **$212.79**, high $305, low $106.

**Realized vs contracted (my estimate).** On ~150 TWh of annual output, each $1/MWh of open price is ~$150 million pre-tax (~$0.35/share); but with 94% of 2027 hedged, 2027 EBITDA is essentially locked, and 2028 has ~28% open. The Comanche Peak PPA at an assumed $75–90/MWh (not disclosed) versus a ~$50/MWh ERCOT forward would add ~$250–400 million a year at full 1,200 MW (2032).

### 4.3 NRG Energy (NYSE:NRG)

**Business.** Retail-heavy integrated supplier (Texas, Northeast) that in **January 2026** closed the ~$12 billion acquisition of LS Power's 18-plant, ~13 GW gas fleet plus a 6 GW commercial-and-industrial virtual power plant platform [49] (secondary deal size [93]).

**Dated evidence (4 Aug 2026 unless stated) [48][49].**
- Q2 2026 adjusted EBITDA **$1.2 billion** (+34%, +$308 million; LS Power's first full quarter added **$370 million** in the East); adjusted EPS $1.49 (vs $1.73); free cash flow before growth $1.025 billion.
- 2026 guidance reaffirmed but **tracking below midpoint** on softer Texas prices and a **$70 million** Virginia RGGI re-entry impact.
- **$3.2 billion, 1.2 GW (expandable to 2.4 GW) Texas combined cycle** for a "global cloud/AI hyperscaler" with investment-grade parent guarantee: COD late 2029; ≥$500 million annual EBITDA, ~$375 million annual free cash flow, 95% from capacity payments; "probably $85–90 plus" per MWh equivalent; ≥15-year term; 12–15% IRR, ~6× build multiple. CEO Gaudette: "We're paid for the megawatts we build and make available, not" for utilization.
- 5.4 GW of turbine/EPC capacity secured through 2032 with GE Vernova and Kiewit; >10.8 GW development pipeline; 4 GW of letters of intent (2025) [50]; earlier target of ≥1 GW of signed data-center contracts in 2026 [49].
- Texas Energy Fund: T.H. Wharton 456 MW ($216 million loan); Greens Bayou 443 MW and Cedar Bayou 689 MW (COD 2028) [50].
- 2026 capital: $721 million data-center investment; ≥$1 billion buybacks ($921 million done in H1); $407 million dividends; **net-leverage target of 3× pushed from 2028 to 2029**.
- Growth framework: ≥14% annual adjusted EPS and FCF-per-share growth through 2030 [49].

**Valuation (2 Oct 2026) [80].** $95.23; market value $20.0 billion; EV $43.6 billion; net debt $23.3 billion; EV/EBITDA 13.3× trailing (pre-full-year LS Power); forward P/E 9.1–9.3×; 2026 consensus EPS **$8.83** (P/E 10.8×); 2027 not visible (≈$10.1 at 14% growth, **my estimate**, ≈9.4×); dividend yield 2.0%; FCF yield 1.7% (trailing, distorted by acquisition timing); 52-week range $93.36–189.96 (−40.5%). Consensus **Buy** (10/3/3); mean target **$185.50**, high $270, low $104.

### 4.4 Talen Energy (NASDAQ:TLN)

**Business.** 90% owner-operator of Susquehanna (2 × ~1.26 GW boiling-water reactors, Pennsylvania) plus a PJM gas fleet enlarged by the 2025 Freedom and Guernsey purchases and the **June 2026 Cornerstone** acquisition (Waterford, Darby, Lawrenceburg; ~2.6 GW; financed with $4 billion of debt) [47].

**Dated evidence (5 Aug 2026) [47].**
- Q2 2026 adjusted EBITDA **$374 million**; adjusted free cash flow $212 million; GAAP net loss $(92) million.
- 2026 guidance raised: adjusted EBITDA **$2,025–2,225 million**; adjusted FCF **$1,200–1,350 million**.
- Cleared **over 10 GW** in the 2028/29 BRA at $325/MW-day.
- Hedged ~85% (2026), ~70% (2027), ~30% (2028).
- ~4 GW of land development and data-center contracting options.
- Buybacks: 550,000 shares for ~$200 million in Q2; **$1.7 billion** remaining through 2028; share count −7.1% y/y [80].
- Liquidity ~$1.9 billion; net leverage target below 3.5×.
- Amazon PPA: **1,920 MW** to 2042 with extension options, ramping to full volume by 2032 "with the potential to meaningfully accelerate"; part of a $20 billion AWS Pennsylvania investment [34].

**Valuation (2 Oct 2026) [80].** $320.77; market value $15.4 billion; EV $24.7 billion; net debt $9.3 billion; trailing EV/EBITDA 42× (distorted by acquisition timing and outages; on 2026 guidance midpoint $2.125 billion the EV/EBITDA is **11.6×**, my arithmetic); forward P/E 10.7× (implying ~$30 of next-twelve-month EPS, my inference); 2026 consensus EPS **$22.26** (P/E 14.4×); 2027 not visible; no dividend; 52-week range $279.77–451.28 (−24.9%). Consensus **Buy** (9/6/2); mean target **$460.59**, high $560, low $307.

**Sensitivity (my estimate).** Susquehanna's 90% share (~2.2 GW) yields ~18 TWh; the gas fleet after Cornerstone perhaps 35–40 TWh. Each $1/MWh on ~55 TWh ≈ $55 million pre-tax ≈ **$0.90 per share** after tax on 48 million shares — the highest per-share operating leverage among the four. Capacity revenue at $325 on 10 GW ≈ **$1.19 billion** a year from June 2028, more than half of 2026 guided EBITDA.

### 4.5 PSEG (NYSE:PEG) — regulated wires plus merchant nuclear

- Q2 2026 non-GAAP operating EPS **$0.86** (vs $0.77); 2026 guidance **$4.28–4.40** reaffirmed; 6–8% long-term growth; $24–28 billion 2026–30 capital plan, mostly regulated; 2026 regulated capex $4.2 billion [51].
- Nuclear: Salem 2 second consecutive breaker-to-breaker run; 92% capacity factor; **~3,600 MW cleared** in the 2028/29 BRA at $325; proposals submitted into PJM's bilateral/backstop process for new dispatchable generation [51]; Salem 1 & 2 stretch uprate applications expected Q2 2027 [76]; large-load pipeline reported at 9.4 GW, 90% data centers (headline only) [81]; exploring nuclear sales to data centers; New Jersey lifted a moratorium that improves the nuclear outlook (headline only) [92].
- PSE&G will file a base rate case by **end-2026**, pulled forward from 2029 [51].
- **Valuation (2 Oct 2026) [80]:** $68.07; market value $33.9 billion; forward P/E 15.1×; 2026 consensus EPS **$4.37** (15.6×); 2027 ≈ $4.65 at 6.5% growth (**my estimate**, 14.6×); dividend yield 3.9%; 52-week range $66.15–87.63. Consensus **Buy** (7 Strong Buy, 1 Buy, 14 Hold); mean target **$85.31**, high $96, low $73.
- **My estimate:** 3,600 MW × $325 × 365 ≈ **$427 million** of 2028/29 capacity revenue; the nuclear fleet is unhedged beyond the production tax credit floor, so a hyperscaler PPA on Hope Creek/Salem would be pure upside to a stock priced as a wires utility.

### 4.6 Others in this layer

- **Calpine:** no longer separate; inside Constellation since January 2026 [37].
- **Energy Harbor:** acquired by Vistra in 2024 (Beaver Valley, Davis-Besse, Perry); its uprate pipeline now appears under Vistra in the NRC schedule [76].
- **AES (NYSE:AES):** shareholders approved (~98%, 30 Jun 2026) the **$33.4 billion** take-private by GIP (BlackRock) and EQT at $15 per share; close expected late 2026 or early 2027; Ohio approval received [73]. At $14.92 (1 Oct) the spread is 0.5% [80] — a merger-arbitrage position, not a thesis.
- **Bloom-style onsite competitors:** Bloom holds ~14% of behind-the-meter equipment share after the Oracle deal; Caterpillar ~33% [20]. Covered elsewhere; here they matter as a cap on how much premium a utility can charge for speed.

### 4.7 Realized versus contracted pricing — summary table (my estimates unless sourced)

| Item | Figure | Basis | Source |
|---|---|---|---|
| PJM capacity, 2026/27–2029/30 | $325–333/MW-day ≈ $118,600–121,700 per MW-year | auction results and cap | [21][23][24] |
| PJM backstop cap (suspended) | $555/MW-day ≈ $202,600 per MW-year, 15 years | FERC order 29 Sep 2026 | [28] |
| Microsoft–Crane nuclear PPA | ~$100/MWh (reported) | secondary analysis | [39] |
| NRG hyperscaler CCGT | "$85–90 plus"/MWh equivalent; ≥$500 million EBITDA on $3.2 billion | company | [48] |
| Merchant nuclear operating cost (2023) | ~$28/MWh | secondary | [39] |
| MISO summer capacity 2026/27 | ~$400/MW-day | auction | [30] |
| Talen capacity revenue 2028/29 | ≈$1.19 billion (10 GW cleared) | my arithmetic | [47] |
| PSEG capacity revenue 2028/29 | ≈$427 million (3.6 GW cleared) | my arithmetic | [51] |
| EPS sensitivity per $1/MWh (open volume) | TLN ≈ $0.90; CEG ≈ $0.40 (nuclear only); VST ≈ $0.35 | my estimate (21% tax; share counts from [80]) | — |

---

## 5. Regulated and hybrid utilities with the largest data-center pipelines

All prices and consensus figures from [80], 2 Oct 2026 unless marked. "2026 P/E" and "2027 P/E" are **my arithmetic** on the stated guidance midpoint or consensus; where 2027 consensus was not visible I grow the 2026 figure at the company's guided rate and mark it (e).

### 5.1 Summary table

| Company (ticker) | Contracted / pipeline data-center load | Capital plan | EPS guidance and growth | Equity need | Price (date) | Mkt value | Forward P/E (NTM) | 2026 P/E | 2027 P/E | Yield | Consensus; mean target | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dominion (D) | 53.8 GW "contracted" (12.0 GW firm ESAs; 9.4 GW construction letters) | $65 bn, 5 yr | 2026 $3.45–3.69; 5–7% to 2030, upper half 2028–30 | $1.6–1.8 bn 2026 (done) | $61.30 (2 Oct, intraday 13:40) | $53.9 bn | 16.6× | 17.2× | 16.2× (e) | 4.36% | Hold (2/1/12); $71.82 | [52] |
| Southern (SO) | 17 GW contracted; 8 GW advanced; 75 GW pipeline; OpenAI 3.2 GW/25 yr from 2028 | $81 bn to 2030 ($68 bn regulated electric) | Q2 adj. $1.13; H1 $2.46; (2026 guidance not fetched) | — | $83.72 | $96.3 bn | 17.9× | — | — | 3.63% | Hold (23 analysts); $98.66 | [56][57] |
| Duke (DUK) | 7.8 GW executed; 15.4 GW late-stage; 5.2 GW under construction | **$103 bn 2026–30**; 15 GW new generation by 2031; ~5 GW gas under construction; 4.5 GW storage | 2026 $6.55–6.80; 5–7%, top half from 2028 | **$10 bn 2027–30** (DRIP + ATM) | $114.13 | $89.0 bn | 16.9× | 17.1× | 16.1× (e) | 3.80% | Buy (22); $136.11 | [62] |
| AEP (AEP) | 63 GW contracted by 2030 (90% DC); 190 GW queue | $78 bn (+$6 bn) | (not fetched) | — | $119.57 | $65.1 bn | 18.1× | — | — | 3.18% | Buy (23); $142.53 | [14] |
| Entergy (ETR) | Meta Hyperion: $15 bn, 7 CCGTs 5.2+ GW; 7–12 GW pipeline + 3–5 GW industrial | **$57 bn 2026–29** (+30%): $27 bn generation, $9 bn transmission | Q2 adj. $1.03; guidance affirmed; 2029 target raised to ~$6.40 (secondary) | 60% of 5-yr equity contracted; $2.175 bn forward sale | $100.40 (1 Oct) | $48.0 bn | 21.4× | — | — | 2.55% | Buy (23); $122.68 | [59][60] |
| Xcel (XEL) | 1 GW operating/UC; 1 GW signed; +4 GW by end-2027; 20+ GW high-probability | **$70+ bn**, 5 yr; $10 bn line-of-sight | 2026 $4.04–4.16; **9%+** avg to 2030 (raised from 6–8%) | $7 bn, ~85% pre-funded | $71.40 | $44.6 bn | 16.7× | 17.4× | 16.0× (e) | 3.32% | Strong Buy (18); $91.41 | [63] |
| PPL (PPL) | 31.8 GW advanced; 11 GW signed; Blackstone JV sites for up to 14 GW | (not fetched; PA utility-generation legislation pending) | 2026 consensus $1.95; 2027 **$2.12** | — | $32.76 (1 Oct) | $24.7 bn | 15.8× | 16.8× | **15.5×** | 3.48% | Buy (9/3/3); $40.53 | [70][71] |
| FirstEnergy (FE) | 6.4 GW contracted by 2035 (+50% q/q); 24.8 GW pipeline; WV 4.1 GW | $36 bn 5-yr (Energize365); Maidsville 1,200 MW gas $2.5 bn by 2031 | 2026 core **$2.62–2.82**; transmission rate base +14% y/y | — | $43.39 (1 Oct) | $25.1 bn | 15.2× | 16.0× | 15.0× (e, 6.5%) | 4.29% | Buy (16); $52.67 | [66] |
| Evergy (EVRG) | up to 8%/yr retail sales growth from data centers; Kansas tariff | — | — | — | $78.73 (29 Sep) | $18.2 bn | 17.5× | — | — | 3.53% | Buy (13); $91.27 | [12][36] |
| Alliant (LNT) | 5 executed ESAs → **+60% system demand by 2031** (Google, QTS 300 MW + 900 MW, Meta Beaver Dam, 370 MW unnamed); 2–4 GW more in talks | Morgan Valley 720 MW, River Hawk 1.2 GW gas filed; Bobcat 720 MW UC | 7%+ CAGR 2027–29; upper half of 2026 | $2.4 bn to 2029, $1.8 bn raised | $64.33 | $16.7 bn | 17.9× | — | — | 3.33% | Buy (13); $78.04 | [69] |
| Ameren (AEE) | 2.8 GW ESAs (Google, Amazon); 0.6 GW construction agreements; 4 GW studied; Missouri sales +60% by 2029 | $31.8 bn 2026–30; $71+ bn to 2035; rate base $28.8 bn → $47.7 bn (10.6% CAGR) | 2026 $5.25–5.45; 6–8% to 2030 | ~$4 bn 2026–30 | $99.94 | $27.7 bn | 18.1× | 18.7× | 17.5× (e) | 3.00% | Buy (17); $117.88 | [68] |
| Exelon (EXC) | 11 GW high-probability (from 18); ~4 GW TSAs, $1 bn collateral | ~$42 bn, 4 yr; +$12–17 bn transmission potential | (2026 guidance not fetched) | — | $40.73 | $42.0 bn | 13.8× | — | — | 4.13% | Hold (21); $48.53 | [19] |
| Edison International (EIX) | no material DC pipeline disclosed; wildfire liability dominates | — | — | — | $53.80 (1 Oct) | $20.7 bn | 8.8× | — | — | 6.52% | Hold (17); $66.36 | — |
| Sempra (SRE) | Oncor: 44 GW Batch Zero-eligible; $7 bn+ transmission for ~16 GW by 2034 | **$65 bn 2026–30**, 95% regulated | 2026 adj. $4.80–5.30; **2027 $5.10–5.70**; 7–9% | 45% of Sempra Infrastructure to KKR (close targeted Q3 2026) | $78.38 | $51.3 bn | 14.9× | 15.5× | **14.5×** | 3.36% | Buy (20); $99.92 | [64] |
| NextEra (NEE) | FPL: 21 GW interest, 12 GW advanced; Energy Resources backlog 35.1 GW (+3.6 GW in Q2, 2 GW storage); Duane Arnold restart ≤Q1 2029 | FPL capex $12–13 bn 2026; Dominion merger: combined rate base $138 bn, ~11% growth to 2032 | 2026 $3.92–4.02 (upper end); **8%+ to 2032**; 9%+ combined | $15.6 bn long-term debt issued H1 2026 | $76.83 | $160.3 bn | 18.8× | 19.4× | 17.9× (e) | 3.25% | Buy (21); $98.16 | [53][54] |
| AES (AES) | — (take-private) | — | — | — | $14.92 (1 Oct) | $10.6 bn | 6.6× | — | — | 4.72% | Hold; $15.00 | [73] |
| Portland General (POR) | Hillsboro data-center cluster (background) | — | — | — | $44.55 | $5.2 bn | 12.1× | — | — | 4.95% | Hold; $52.27 | — |
| NiSource (NI) | Indiana data centers drove a 45% capex-plan increase (headline only) | — | — | — | $39.32 (29 Sep) | $18.9 bn | 18.0× | — | — | 3.05% | Buy (15); $49.86 | — |
| CenterPoint (CNP) | >17 GW submitted; ~14 GW eligible; 8 GW to energize by 2029 | **$66.7 bn 2026–35** (+$1.2 bn) | 2026 ≥ midpoint of $1.89–1.91 (~8%) | — | $37.79 | $24.9 bn | 18.6× | 19.9× | 18.4× (e) | 2.54% | Buy (19); $45.06 | [67] |
| Fortis / ITC (FTS) | ITC transmission in MISO; no DC disclosure fetched | — | — | — | C$75.78 (18 Sep) | C$38.6 bn | 20.2× | — | — | 3.38% | Hold (15); C$82.89 | — |

### 5.2 Company notes

**Dominion Energy (NYSE:D).** The 53.8 GW "contracted" figure is three tiers: 32.4 GW of early substation engineering letters, 9.4 GW of construction letters and **12.0 GW of firm electric service agreements** [52]. The Coastal Virginia Offshore Wind project (2.6 GW) is 81% complete, 31 of 176 turbines operating, budget raised to **$11.65 billion**, completion extended to **end-2027**, levelized cost $83/MWh against a $149 regulatory cap [52]. Allowed ROE 9.8%; $16/month residential increase; GS-5 from 2027; new 5 Aug 2026 direct-assignment order [16][18]. The **NextEra merger** (announced 18 May 2026): 0.8138 NextEra shares per Dominion share; immediately accretive; $2.25 billion of bill credits for Dominion customers over two years; $360 million one-time cash at close; approvals needed from the Virginia SCC, North Carolina and South Carolina commissions, FERC, NRC and antitrust; 12–18 months; shareholder approvals obtained in early September 2026 (headline only) [54][55]. **At $61.30 Dominion trades at a 2.0% discount to the 0.8138 × $76.83 = $62.53 implied value (my arithmetic)** — a narrow spread for a merger with Virginia political risk.

**Southern Company (NYSE:SO).** Contracted load jumped to **17 GW** (+6 GW in one quarter), with the 3.2 GW OpenAI contract including 1 GW of flexibility; data-center usage +55% y/y; ~10 GW of new company-owned generation approved (mostly gas, some storage and solar); up to 700 MW of gas uprates from 2029; 15-year minimum contracts [56][57]. The Georgia PSC approved the plan 19 Dec 2025 against staff testimony that the 8.5 GW load forecast equals "five Hoover Dams"; SELC estimates $50–60 billion of lifetime cost and notes bills rose $43/month in two years [58]. Hold consensus and 17.9× NTM reflect that tension.

**Duke Energy (NYSE:DUK).** $103 billion 2026–30; 7.8 GW executed, 5.2 GW under construction; Person County 2,720 MW and Cayuga 1,476 MW combined cycles, Marshall 850 MW peakers; Carolinas settlement at **9.8% ROE**, 53% equity, rate stay-out to November 2028; **$10 billion of equity 2027–30**; FFO/debt ~14.5% [62]. Brunswick, McGuire and Catawba uprates expected 2027–28 [76].

**AEP (NASDAQ:AEP).** 63 GW contracted (+9 GW q/q), 90% data centers; $78 billion plan; 190 GW queue; 41 GW in ERCOT; SB Energy's 10 GW Piketon campus, Google in West Virginia, Amazon in Louisiana [14]. CEO Fehrman: "We are protecting our existing customers by ensuring data and other large load customers cover the investments required." Indiana Michigan Power's Google clean-capacity-and-flex deal is the template for flexible interconnection [78].

**Entergy (NYSE:ETR).** The Meta Hyperion package: $15 billion of capital, seven new combined cycles totaling 5.2+ GW, $2 billion of customer benefits, 2.5 GW of renewables; capital plan raised 30% to **$57 billion 2026–29** [59]; Q2 adjusted EPS $1.03; industrial sales +10% ex-weather; 60% of five-year equity contracted [60]. Single-customer concentration is the risk; at 21.4× NTM it is the most expensive name in the table.

**Xcel Energy (NASDAQ:XEL).** Q2 EPS $0.93 (+24%); 2026 $4.04–4.16; growth raised to **9%+**; $70 billion plan; $6 billion SPS generation award (2,400 MW renewables + 200 MW gas); equity 85% pre-funded; rate base to grow 200–250 bp faster than EPS; Google Minnesota deal with >$1 billion of customer benefits; wildfire legislation push in 2027 [63].

**PPL (NYSE:PPL).** 31.8 GW advanced pipeline, 11 GW signed; the Blackstone venture has secured sites for up to 14 GW of gas generation in Pennsylvania (headline only) [70][71][72]; PL zone is one of four PJM zones carrying 74% of growth [8]. 2027 consensus EPS $2.12 gives 15.5× [80].

**FirstEnergy (NYSE:FE).** 6.4 GW contracted (+50% q/q), 24.8 GW pipeline (≈70% of its 34.8 GW July peak); transmission rate base +14%; Maidsville 1,200 MW gas plus 70 MW solar for ~$2.7 billion by end-2031 with a 2.3% residential surcharge; Q2 net income $288 million (+7.5%) [66].

**Sempra (NYSE:SRE).** Q2 adjusted EPS $1.16 (vs $0.89); 2026 $4.80–5.30; 2027 $5.10–5.70; $65 billion plan; Oncor's 44 GW Batch Zero-eligible requests and >$7 billion of transmission for ~16 GW; new Oncor base rates effective 1 Jun 2026; KKR 45% stake sale in Sempra Infrastructure targeted for Q3 2026 (status at 2 Oct unverified) [64].

**NextEra (NYSE:NEE).** Q2 adjusted EPS $1.15 (+9.5%); 2026 $3.92–4.02 upper end; 8%+ CAGR to 2032 and again to 2035; 3.6 GW backlog adds (2 GW storage), backlog 35.1 GW; FPL 21 GW of interest, first large-load tariff transaction by year-end; Duane Arnold (Google) by Q1 2029, now 100% owned; dividend growth 6%/yr from 2026 to 2028; merger S-4 effective 23 Jul 2026, closing targeted Q2 2027 [53][54].

**CenterPoint (NYSE:CNP).** Q2 non-GAAP EPS $0.40 (+38%); 2026 ≥ midpoint of $1.89–1.91; 10-year plan $66.7 billion; >17 GW submitted to Batch Zero, ~14 GW eligible by 2031 (>65% of 21 GW peak); CEO Wells: new connections to reduce residential and commercial delivery charges by **at least $5 billion** over the decade [67].

**Exelon (NASDAQ:EXC).** The 40% cut in high-probability load (18 → 11 GW; 9 GW ComEd, 2 GW Mid-Atlantic) came from imposing transmission security agreements; 43 → 25 GW total pipeline; ComEd cancelled the Joliet 1.8 GW TSA; $42 billion four-year plan with $12–17 billion of transmission upside not included; ACE 500 MW battery at 9.6% ROE [19]. Hold at 13.8× NTM, 4.1% yield — the cheapest wires name, and the one most exposed to Pennsylvania/Illinois politics.

**Ameren, Alliant, Evergy, NiSource, Portland General.** Midwest and Plains utilities are where contracted load is largest relative to system size: Ameren Missouri sales +60% by 2029 [68]; Alliant system demand +60% by 2031 with Iowa rates flat to 2029 [69]; Evergy up to 8% annual retail sales growth [36]. Prices for Evergy and NiSource on the fetched pages were 29 September; see §12.

---

## 6. Transmission owners and developers

- **FERC-regulated transmission** is the one part of the chain where load growth raises rate base without commodity or ROE-politics exposure (formula rates, allowed ROEs typically 10–11% including incentives). The listed vehicles are indirect: **PPL, FirstEnergy (14% transmission rate-base growth), Exelon ($12–17 billion of unbudgeted transmission), AEP Transmission (inside AEP), Oncor (inside Sempra; >$7 billion for ~16 GW), CenterPoint, Fortis/ITC** [64][66][67][19]. ITC (owned by Fortis, TSX/NYSE:FTS) is the only near-pure transmission play; at 20.2× NTM and Hold consensus it is not cheap, and its MISO footprint is less data-center-dense than PJM/ERCOT [80].
- **Cost allocation is shifting to the load:** the Virginia SCC's 5 Aug 2026 order requires network and substation upgrades triggered solely by a large load to be assigned to it, and named the **765 kV Valley Link** line (Lynchburg–Culpeper, 115 miles) as a candidate; Dominion's queue holds 203 transmission projects [18]. In Texas, the Batch Zero final transmission plan is due fall 2027 [10]. Directly assigned transmission is still rate base; it simply changes who pays.
- **Private developers** (Grid United, Invenergy Transmission, LS Power Grid) are not investable here; their relevance is as competitors for merchant HVDC links.

---

## 7. Engineering and market transitions: what changes, when, who gains and who loses

| Transition | Evidence | Timing | Gains | Loses |
|---|---|---|---|---|
| **Gas combined-cycle at 2026 prices (~$2,000–2,700/kW all-in) with 15-year contracts** | GE Vernova backlog 116 GW, 2031 slots; HD turbine ~$790/kW, HA CC ~$950/kW (analyst est.); NRG $3.2 bn/1.2 GW at $85–90+/MWh; FirstEnergy $2.5 bn/1.2 GW; Entergy $15 bn/5.2 GW package | orders now, COD 2029–31 | Utilities with approved rate base (Duke, Southern, Entergy, Ameren, Alliant); NRG, Vistra, Talen with secured turbines; GE Vernova | Merchant builders without contracts; ratepayers if load under-delivers (SELC Georgia critique) [58][74][75] |
| **Load shift to Texas, the Plains and the Midwest** | ERCOT 53.7 GW of 166 GW five-year growth; SPP 24.5 GW; Oncor 44 GW eligible; Ameren +60% sales; Alliant +60% demand; Entergy Meta | 2026–31 | Sempra, CenterPoint, AEP (Texas), Xcel/SPS, Ameren, Alliant, Evergy, Entergy | Northern Virginia incumbents facing direct assignment and politics (Dominion), Exelon's PJM zones [3][64][67][68][69] |
| **Nuclear uprates as the cheapest new firm MW** | NRC expects 31 applications: 10 MUR, 2 stretch, 19 extended = 2,421 MWe through 2032; Constellation, Duke, Vistra, PSEG, Southern | filings 2026–32 | Constellation (first in Q4 2026), Vistra (2029–32), PSEG (2027), Duke | Nobody directly; the total is small (≈1% of 2030 peak growth) [76] |
| **Co-location → front-of-meter with firm contract demand** | FERC Nov 2024 rejection; Dec 2025 order; PJM three services effective Jul 2026; 50 MW BTMG cap; Texas uncapped curtailment | 2026–27 | Owners of existing interconnected nuclear and CCGT (CEG, TLN, VST, PEG); wires utilities (service revenue) | Island models; speculative BTM developers [11][31][32][33] |
| **Flexible data centers as capacity** | Google 1 GW across five utilities; OpenAI–Georgia Power 1 GW flexible of 3.2 GW; PJM connect-and-manage and Interim Resource Adequacy Service (1 Jun 2027); MISO record demand response | 2026–28 | Utilities (less generation build, same wires); hyperscalers (faster connection); Emerald AI, I&M/AEP | Peakers whose scarcity rents fall; forecasts that assumed 100% load factors [3][26][28][56][77] |
| **Batteries counted as capacity** | NextEra 2 GW of storage in one quarter's backlog; Duke 4.5 GW by 2031; Exelon ACE 500 MW at 9.6% ROE; PJM backstop eligibility; MISO prices −$200 on supply | 2026–30 | NextEra, Duke, Vistra storage; capacity-short regions | Capacity prices at the margin; gas peakers [30][53][62] |
| **Data-center power-quality and ride-through rules** | NERC Level 3 alert (4 May 2026) after 1,000+ MW sudden load losses; modeling data, annual stability studies, commissioning processes, dynamic fault recorders; registry and standards updates pending | 2026–27 | Transmission owners (studies, equipment in rate base); UPS/BESS vendors | Developers (cost, delay); utilities if standards impose uncompensated obligations [79] |
| **Capped capacity prices and administered procurement in PJM** | $325 cap to the 2029/30 auction; backstop suspended to Feb 2027; May 2027 reformed auction | 2026–27 | Ratepayers; incumbents with long positions keep a high floor | New entrants needing scarcity pricing; upside case for CEG/VST/TLN/NRG [24][28] |
| **Direct assignment of transmission to large loads** | Virginia SCC order 5 Aug 2026; Texas Batch Zero fees; Exelon TSAs with $1 bn collateral | 2026–28 | Wires utilities (rate base preserved, politics eased) | Hyperscalers' project returns; speculative queue positions [10][18][19] |
| **Risk that AI capex slows** | Exelon −40% high-probability load; PJM −43% screen; Grid Strategies' 25 GW overstatement; 2 GW of 90 GW BTM operating | 2027–29 | Hedged merchants (VST 94% 2027), tariff-protected utilities with minimum bills | Utilities with construction ahead of contracts (Georgia, Northern Virginia pre-2027), unhedged 2028+ merchant exposure [3][8][19][20] |

---

## 8. What is priced and what is not

| Narrative | Evidence | Where the market stands (2 Oct 2026) | My assessment |
|---|---|---|---|
| "Merchant nuclear is the AI power winner" | CEG +920 MW PPAs, Crane 2027, guidance raised; TLN 10 GW cleared at cap | CEG −38% from high at 20.8× NTM; TLN −29%; consensus targets +33%/+43% | **Was priced, now partly un-priced.** 2027 earnings are hedged; the de-rating reflects capped PJM upside and the backstop slip, not contract loss |
| "PJM capacity prices will keep rising" | Three auctions at the cap; 6.8 GW short | Cap at $325 through 2029/30; May 2027 first uncapped | **Priced out.** The cap is now the forecast; the May 2027 auction is the binary |
| "The backstop gives merchants 15-year contracts" | $555/MW-day cap filed; FERC suspended 29 Sep 2026 | Not in 2026 numbers; delayed into 2027 | **Not priced**, and the slip is a reason for September weakness; a February 2027 refiling is a catalyst |
| "Utilities will grow 8–9% forever on data centers" | Xcel 9%+, NEE 8%+, Ameren 6–8%, Duke top half | Sector near 52-week lows; 15–19× NTM; yields 3–4.4% | **Under-priced for names with tariff-backed load and bill-benefit stories** (PPL, SRE, FE, XEL, CNP); fairly priced for Hold names (D, SO, EXC) |
| "Affordability politics will cut utility returns" | 9.8% ROEs in VA/NC; disallowances; Exelon withdrawal; Eversource | Hold ratings on D, SO, EXC | **Priced for Virginia, Georgia, Pennsylvania wires; not priced in Texas/Midwest where load lowers bills** |
| "Behind-the-meter will bypass utilities" | 90 GW announced, 2 GW operating; 50 MW PJM cap; Texas curtailment | Headline risk | **Over-stated narrative**; relevant to forecasts, not to 2026–29 utility earnings |
| "Data-center demand is fake/overstated" | PJM −43%, Exelon −40%, Grid Strategies 25 GW | Visible in IPP multiples | **Half right**: queues are fake; contracted load with collateral is real and growing (Southern +6 GW, FE +50%, Dominion +11% in one quarter) |
| "Gas turbines are the bottleneck" | 116 GW backlog, 2031 slots | Priced in GE Vernova; under-recognized in utilities' COD slippage risk | **Priced for equipment makers; not priced as execution risk for 2029–31 utility plans** |
| "ERCOT is the growth market" | 438 GW queue; 53.7 GW five-year growth | Vistra/NRG weak on soft Texas energy prices | **Connection is scarce, energy is not**: wires (Oncor, CenterPoint) benefit; merchant energy margins compress |
| "Nuclear restarts and uprates add meaningful supply" | 2,421 MWe of uprates; Crane 835 MW; Duane Arnold ~600 MW; Palisades | Priced in CEG/NEE | **Priced; the volume is small relative to 224 GW of peak growth** |
| "Flexibility solves the capacity problem" | 1 GW Google; 1 GW in OpenAI–Georgia; PJM 2027 rules | Not in utility capex plans yet | **Not priced**; it lowers generation capex and raises the value of wires — positive for T&D names, slightly negative for peaker owners |

---

## 9. Ranked shortlist

Prices and consensus from [80] (2 Oct 2026 close unless stated); "2027 P/E" is my arithmetic as described in §5.

### 1. Vistra (NYSE:VST)
- **Products in focus:** 6.4 GW of nuclear (Comanche Peak 2 × 1.2 GW; Beaver Valley, Davis-Besse, Perry) sold under a 1,200 MW 20-year PPA from late 2027 and merchant; ~35 GW of gas, coal and storage across ERCOT, PJM, MISO, ISO-NE; Texas retail; Helix "rack-to-grid" offering with KKR/NVIDIA.
- **Why the product matters:** firm, interconnected capacity in the two tightest markets (PJM capped at $325, ERCOT connection-constrained) with existing turbines nobody can replicate before 2031.
- **Why this company:** 94% hedged for 2027 with a $7.4–7.8 billion EBITDA opportunity plus ~$700 million from Cogentrix; 30% share-count reduction since 2021; uprates and Comanche Peak data-center energization at end-2027 [42][43][44].
- **Dated evidence:** Q2 EBITDA $1,767 million (+30%, 7 Aug 2026); hedges as of 3 Aug 2026; $1.5 billion hybrid notes 10 Sep 2026; CEO open-market purchase late Sep 2026 (secondary) [45][46].
- **Risks and thesis-breakers:** ERCOT forward curves "meaningfully lower"; Cogentrix not yet closed; 2028 is 28% open; price-to-book 15.7× means the equity is a cash-flow claim, not asset backing; a PJM cap extension beyond 2029/30 or a weak May 2027 auction.
- **Catalysts:** Q3 results **6 Nov 2026** (Cogentrix update, 2027 guidance); Comanche Peak counterparty disclosure; PJM backstop refiling (by Feb 2027); May 2027 uncapped auction.
- **Valuation:** $140.02; $47.0 billion market value; EV $67.1 billion; EV/EBITDA ~9.0× on 2027 midpoint $7.6 billion (**my arithmetic**); 2026 P/E 16.2× ($8.62), **2027 P/E 13.5× ($10.37)**; FCF yield 4.8%; yield 0.66%; **Strong Buy**, mean target $212.79 (high $305, low $106).

### 2. PPL Corporation (NYSE:PPL)
- **Products in focus:** Pennsylvania (PPL Electric), Kentucky (LG&E/KU) and Rhode Island regulated wires and Kentucky generation; the PL zone transmission that PJM says carries part of 74% of its growth; a Blackstone joint venture with sites for up to 14 GW of gas generation.
- **Why it matters:** wires rate base is the least political layer (FERC formula rates, direct assignment to data centers); 11 GW of signed load against a 31.8 GW advanced pipeline is the highest signed-to-market-cap ratio in the group [70][71].
- **Why this company:** 2027 consensus EPS growth 8.6% at 15.5× with a 3.5% yield; Pennsylvania's governor is simultaneously courting data centers and protecting ratepayers, which favors wires over generation [25][35].
- **Dated evidence:** Q2 2026 results reaffirmed guidance and long-term growth (7 Aug 2026) [70]; pipeline figures Aug 2026 [71].
- **Risks:** Pennsylvania rate politics (Exelon's withdrawal is the warning); legislation on utility-owned generation could help or hurt; Kentucky coal retirements; equity needs not fetched (see §12).
- **Catalysts:** Pennsylvania generation legislation (2026–27); Blackstone JV first turbine orders; Q3 results early Nov 2026; PJM 2029/30 auction.
- **Valuation:** $32.76 (1 Oct close per page); $24.7 billion; 2026 P/E 16.8×; **2027 P/E 15.5×**; yield 3.48%; **Buy** (9/3/3), mean target $40.53 (high $45, low $35).

### 3. Talen Energy (NASDAQ:TLN)
- **Products in focus:** Susquehanna nuclear output (1,920 MW contracted to Amazon to 2042, ramping to 2032); ~10 GW of PJM gas after Cornerstone; capacity sold at $325/MW-day for 2028/29; ~4 GW of land and contracting options.
- **Why it matters:** the only pure PJM generator of scale whose capacity revenue (≈$1.19 billion a year from June 2028, my estimate) is already fixed and whose nuclear is already contracted at a premium.
- **Why this company:** highest per-share leverage (≈$0.90 per $1/MWh, my estimate); 7% a year of buybacks; guidance raised twice in 2026 [47].
- **Dated evidence:** Q2 2026 (5 Aug 2026): EBITDA $374 million; guidance $2.025–2.225 billion; 10 GW cleared; Cornerstone closed June 2026 with $4 billion of debt [47].
- **Risks and thesis-breakers:** net debt $9.3 billion against a $15.4 billion market value; 30% hedged for 2028; a single-site nuclear outage; trailing EV/EBITDA 42× shows how acquisition-heavy the record is; FERC rejecting any co-location expansion; price cap extension.
- **Catalysts:** Q3 results early Nov 2026; Amazon ramp acceleration announcements; Susquehanna uprate filings; backstop refiling; May 2027 auction.
- **Valuation:** $320.77; $15.4 billion; EV $24.7 billion; EV/EBITDA 11.6× on 2026 guidance midpoint (my arithmetic); 2026 P/E 14.4× ($22.26); forward (NTM) 10.7×; no dividend; **Buy** (9/6/2), mean target $460.59 (high $560, low $307).

### 4. Sempra (NYSE:SRE)
- **Products in focus:** Oncor (Texas wires: 44 GW of Batch Zero-eligible requests, >$7 billion of transmission for ~16 GW by 2034), SDG&E and SoCalGas; a minority of Sempra Infrastructure after the KKR sale.
- **Why it matters:** Texas connection, not Texas energy, is the scarce good; Oncor owns the connection in the Dallas–Fort Worth and Permian corridors.
- **Why this company:** explicit 2027 EPS guidance $5.10–5.70 and 7–9% growth at 14.5× the 2027 midpoint, the lowest 2027 multiple in the regulated set; 95% regulated capital plan; capital recycling funds the plan without heavy equity [64].
- **Dated evidence:** Q2 2026 (6 Aug 2026) adjusted EPS $1.16; Oncor base rates effective 1 Jun 2026; Ecogas sale ~$500 million [64].
- **Risks:** California wildfire and rate politics at SDG&E; KKR sale timing; Texas legislature intervention in ERCOT; execution on 765 kV.
- **Catalysts:** KKR closing (targeted Q3 2026; verify); Batch Zero notifications (Aug 2026) and final transmission plan (fall 2027); Oncor capital-plan revision with Q4 results (Feb 2027).
- **Valuation:** $78.38; $51.3 billion; 2026 P/E 15.5× ($5.05 mid); **2027 P/E 14.5× ($5.40 mid)**; yield 3.36%; **Buy** (20), mean target $99.92.

### 5. Public Service Enterprise Group (NYSE:PEG)
- **Products in focus:** PSE&G New Jersey wires (85%+ of the plan) plus ~3.6 GW of merchant PJM nuclear (Salem 1 & 2 share, Hope Creek) cleared at $325; stretch uprate applications in 2027.
- **Why it matters:** a wires utility valuation with an unhedged nuclear option in the tightest capacity zone; capacity revenue ≈$427 million a year from June 2028 (my estimate).
- **Why this company:** 15.6× 2026 earnings and 3.9% yield for 6–8% growth; nuclear PPA to a hyperscaler would be pure upside; proposals already submitted into PJM's bilateral/backstop track [51].
- **Dated evidence:** Q2 2026 (4 Aug 2026) operating EPS $0.86; guidance $4.28–4.40; rate case filing pulled forward to end-2026 [51].
- **Risks:** New Jersey politics (Governor Sherrill's reform agenda) could compress ROE; rate-case timing; nuclear PTC phase-down if prices rise; no disclosed hyperscaler deal yet.
- **Catalysts:** base rate case filing (by Dec 2026); any Hope Creek/Salem PPA; Salem stretch uprate application (Q2 2027); backstop outcome.
- **Valuation:** $68.07; $33.9 billion; 2026 P/E 15.6× ($4.37); 2027 ≈14.6× (e); yield 3.94%; **Buy** (7/1/14), mean target $85.31 (high $96, low $73).

### 6. Constellation Energy (NASDAQ:CEG)
- **Products in focus:** ~22 GW of nuclear output under a growing book of 15–20-year hyperscaler and corporate PPAs (Microsoft–Crane 835 MW 2027, Meta–Clinton 1,121 MW Jun 2027, 920 MW new 2029–32); Calpine's 27 GW gas/geothermal fleet; retail supply.
- **Why it matters:** the only US owner able to offer multi-gigawatt, carbon-free, already-interconnected supply with PJM capacity rights.
- **Why this company:** 2026 EPS guidance raised to $11.50–12.50; uprate filings start Q4 2026; Crane 2027; a 38% drawdown has taken the multiple from the 30s to 20.8× [37][80].
- **Dated evidence:** Q2 results 6 Aug 2026; FERC and NRC Crane approvals Q2 2026; Brazos Valley sale $860 million by end-2026; Rhode Island plant $715 million (Sep 2026, headline only) [37][41].
- **Risks and thesis-breakers:** premium still the highest among merchants; Calpine share overhang (headline only, unverified); FCF yield 0.3% trailing; hyperscaler PPA prices undisclosed; nuclear PTC interaction; a slower AI capex cycle hitting 2029–32 PPA demand; price cap.
- **Catalysts:** Q3 results early Nov 2026; first uprate application (Q4 2026); Crane fuel load and restart (2027); Meta Clinton start (Jun 2027); 2027 guidance.
- **Valuation:** $257.49; $91.2 billion; EV $115.2 billion; EV/EBITDA 14.5× trailing; 2026 P/E 21.2× ($12.14); 2027 ≈18–19× at 13–15% growth (**my estimate**); yield 0.66%; **Buy** (13/6/3), mean target $342.98 (high $395, low $290).

### 7. FirstEnergy (NYSE:FE)
- **Products in focus:** Ohio, Pennsylvania, New Jersey, Maryland, West Virginia wires; transmission rate base growing 14% a year; West Virginia regulated generation (Maidsville 1,200 MW gas, 2031).
- **Why it matters:** contracted load of 6.4 GW (+50% in a quarter) with a 24.8 GW pipeline against a 34.8 GW peak — the fastest-growing contracted book relative to system size among wires utilities [66].
- **Why this company:** 16.0× 2026 guidance midpoint and a 4.3% yield; prior regulatory problems in Ohio appear resolved enough for a $36 billion plan.
- **Dated evidence:** Q2 2026 (29 Jul 2026): net income $288 million (+7.5%); 1.5 GW more contracts imminent; WV pipeline 4.1 GW (+155%) [66].
- **Risks:** Ohio/Pennsylvania politics; 2.3% residential surcharge for Maidsville; legacy governance discount; equity needs not fetched.
- **Catalysts:** Q3 results late Oct 2026; Maidsville approvals; PJM 765 kV awards.
- **Valuation:** $43.39 (1 Oct per page); $25.1 billion; 2026 P/E 16.0× ($2.72 mid); 2027 ≈15.0× (e); yield 4.29%; **Buy** (16), mean target $52.67.

### 8. Southern Company (NYSE:SO)
- **Products in focus:** Georgia Power's ~10 GW of approved new generation and 17 GW of contracted large load including the 3.2 GW, 25-year OpenAI contract with 1 GW flexibility; Alabama and Mississippi Power; Southern Power contracted gas; Vogtle 3 & 4; Hatch/Vogtle uprates 2027–28.
- **Why it matters:** the largest *contracted* regulated book outside Virginia, with 15-year minimum contracts and the first codified flexibility clause [56][57].
- **Why this company:** 79 years of maintained-or-raised dividends; $81 billion plan; $1.7 billion of claimed customer benefits 2029–31; data-center usage +55% y/y.
- **Dated evidence:** Q2 2026 (3 Aug 2026) adjusted EPS $1.13; contracted load +6 GW; PSC approval 19 Dec 2025 [56][58].
- **Risks and thesis-breakers:** Georgia bill politics ($43/month increase in two years); PSC elections; a 10 GW build ahead of load; 17.9× NTM with Hold consensus leaves less margin than PPL or Sempra.
- **Catalysts:** RFP selections by end-2026; OpenAI service start 2028; Hatch uprate application Q2 2027.
- **Valuation:** $83.72; $96.3 billion; forward 17.9×; yield 3.63%; **Hold** (23), mean target $98.66.

### 9. NRG Energy (NYSE:NRG)
- **Products in focus:** ~26 GW of gas generation after LS Power; Texas and Northeast retail; the $3.2 billion hyperscaler-contracted 1.2 GW combined cycle (COD late 2029); 5.4 GW of GE Vernova–Kiewit turbine/EPC capacity; Texas Energy Fund peakers.
- **Why it matters:** the first disclosed "paid for megawatts, not utilization" hyperscaler gas contract sets the price ($85–90+/MWh equivalent, 12–15% IRR) for everyone else [48].
- **Why this company:** 9.1× NTM earnings with a 14% growth framework; ≥$1 billion of 2026 buybacks on a $20 billion market value.
- **Dated evidence:** Q2 2026 (4 Aug 2026) EBITDA $1.2 billion; guidance tracking below midpoint; leverage target to 2029 [48].
- **Risks and thesis-breakers:** retail book is structurally short power, so rising prices hurt before they help; $23.3 billion of net debt; Virginia RGGI; Texas energy softness; LOIs (4 GW) that do not convert; a data-center customer walking before 2029.
- **Catalysts:** Q3 results early Nov 2026; second hyperscaler contract; Texas Energy Fund CODs 2028.
- **Valuation:** $95.23; $20.0 billion; EV $43.6 billion; 2026 P/E 10.8× ($8.83); 2027 ≈9.4× (e); yield 2.0%; **Buy** (10/3/3), mean target $185.50 (high $270, low $104).

### 10. Xcel Energy (NASDAQ:XEL)
- **Products in focus:** Minnesota, Colorado, Texas/New Mexico (SPS) and Wisconsin regulated utilities; $70 billion plan; 2,600 MW SPS generation award; Google Minnesota deal.
- **Why it matters:** the fastest guided EPS growth in the group (9%+) with 85% of equity pre-funded and a Plains/Texas footprint in the load-shift corridor [63].
- **Why this company:** 16.0× 2027 (e) with a 3.3% yield; "high probability" 20+ GW portfolio.
- **Risks:** wildfire liability (Colorado, Texas); Minnesota rate politics; large equity program.
- **Catalysts:** Q3 results late Oct 2026; 2027 wildfire legislation; SPS project approvals.
- **Valuation:** $71.40; $44.6 billion; 2026 P/E 17.4× ($4.10 mid); 2027 ≈16.0× (e); yield 3.32%; **Strong Buy** (18), mean target $91.41.

### 11. NextEra Energy (NYSE:NEE) — including the pending Dominion merger
- **Products in focus:** FPL (21 GW of large-load interest, first tariff deal by year-end); Energy Resources' 35.1 GW backlog (storage-heavy); Duane Arnold restart for Google by Q1 2029; post-merger Dominion's Virginia franchise and 12 GW of firm data-center ESAs.
- **Why it matters:** the combined company would hold the largest regulated rate base ($138 billion, ~11% growth to 2032) and the biggest renewable/storage backlog in the US [54].
- **Why this company:** 8%+ EPS CAGR to 2032 and again to 2035; Dominion at a 2% discount to the exchange ratio offers the same exposure with a 4.4% yield (my arithmetic).
- **Risks and thesis-breakers:** Virginia SCC conditions (bill credits, ROE), FERC/NRC approvals, 12–18-month timeline; CVOW cost ($11.65 billion) and schedule; tax-credit policy; 19.4× 2026 earnings is the highest regulated multiple here after Entergy.
- **Catalysts:** Virginia SCC hearing schedule (2026–27); close targeted Q2 2027; FPL large-load transaction (by Dec 2026); Q3 results late Oct 2026.
- **Valuation:** $76.83; $160.3 billion; 2026 P/E 19.4× ($3.97 mid); 2027 ≈17.9× (e); yield 3.25%; **Buy** (21), mean target $98.16. Dominion: $61.30, Hold, $71.82.

### 12. CenterPoint Energy (NYSE:CNP)
- **Products in focus:** Houston Electric wires serving ~14 GW of Batch Zero-eligible load by 2031 (>65% of the 21 GW peak); Indiana and Ohio gas; Indiana electric.
- **Why it matters:** a pure connection play in the city with the most eligible load, with a regulator-friendly story of ≥$5 billion of delivery-charge reductions [67].
- **Why this company:** 10-year plan $66.7 billion; ~8% EPS growth; Texas rate mechanisms with little lag.
- **Risks:** 19.9× 2026 earnings and a 2.5% yield are the richest in the wires set; hurricane/storm cost recovery; Batch Zero attrition.
- **Catalysts:** Batch Zero notifications (Aug 2026 — results to be disclosed with Q3 on ~late Oct 2026); Texas transmission plan fall 2027.
- **Valuation:** $37.79; $24.9 billion; 2026 P/E 19.9× ($1.90); 2027 ≈18.4× (e); yield 2.54%; **Buy** (19), mean target $45.06.

---

## 10. Also considered and rejected

1. **Dominion Energy (D)** — stand-alone thesis superseded by the NextEra merger; Hold consensus; Virginia direct-assignment and ROE pressure; 2% merger spread is too thin to be the reason to own it [16][18][54][80].
2. **Duke Energy (DUK)** — excellent contracted book (7.8 GW, 5.2 GW under construction) but $10 billion of equity 2027–30 and a 9.8% ROE settlement; 16.1× 2027 (e) is fair rather than cheap [62][80].
3. **American Electric Power (AEP)** — 63 GW "contracted" is impressive, but the AEP Ohio queue fell from 30 to 13 GW once collateral was required, and at 18.1× NTM with a $78 billion plan the equity need is the swing factor; 2026 guidance not retrieved [13][14][80].
4. **Entergy (ETR)** — single-customer (Meta) concentration and 21.4× NTM, the highest in the regulated set [59][80].
5. **Exelon (EXC)** — cheapest wires name (13.8×, 4.1% yield) but its high-probability load fell 40%, it withdrew a Pennsylvania rate request and is the most exposed to Pennsylvania/Illinois affordability politics [19][35][80].
6. **AES (AES)** — $15 cash take-private approved; 0.5% spread; no thesis beyond closing [73][80].
7. **Edison International (EIX)** — wildfire liability, no disclosed data-center pipeline; 6.5% yield is a warning, not an invitation [80].
8. **Portland General (POR)** — small, Hold, 12.1× NTM; Hillsboro data centers are real but the company did not feature in any 2026 pipeline disclosure I could fetch [80].
9. **NiSource (NI)** — capex plan up 45% on data centers (headline only) but the price on the fetched page was 29 September and Indiana rate politics (AES Indiana case) are live [35][80].
10. **Evergy (EVRG)** — up to 8% sales growth and a model Kansas tariff, but the fetched price was stale (29 Sep) and 17.5× NTM offers no discount to peers [12][36][80].
11. **Ameren (AEE)** — strong contracted Missouri growth (2.8 GW ESAs, sales +60% by 2029) at 18.7× 2026 with $4 billion of equity and a pending Missouri rate review (May 2027); a good company at a full price [68][80].
12. **Alliant (LNT)** — +60% system demand by 2031 is the most extreme growth ratio here, equity almost done, but a $16.7 billion market value and 17.9× NTM; a candidate for a later review when the Q3 2026 growth update lands [69][80].
13. **Fortis / ITC (FTS)** — the only near-pure transmission vehicle but Hold, 20.2× NTM, and MISO-weighted [80].
14. **DTE Energy (DTE)** — Oracle 1.4 GW under construction and a 1 GW Google project, but not researched in depth this session [36].
15. **Calpine** — not listed (inside Constellation) [37].
16. **Bloom Energy (BE), Caterpillar (CAT)** — onsite-power equipment; outside this report's scope and the subject of a separate report; noted only as the behind-the-meter competitor set [20].

---

## 11. Dated catalyst calendar (October 2026 to 2028)

| Date | Event | Names affected | Source |
|---|---|---|---|
| Oct–early Nov 2026 | Q3 2026 results: Vistra **6 Nov**; NRG, Talen, Constellation, PSEG, Dominion, NextEra, Southern, Duke, AEP, Xcel, PPL, FirstEnergy, Sempra, CenterPoint late Oct–early Nov | all | [45] and company calendars (dates other than Vistra's not verified) |
| Oct 2026 | Batch Zero eligibility notifications (issued Aug 2026) disclosed in Texas utilities' Q3 updates | SRE, CNP, AEP | [10] |
| Q4 2026 | Constellation's first expected uprate application (extended uprate) | CEG | [76] |
| By Dec 2026 | FPL's first large-load tariff transaction; Southern RFP generation selections; PSE&G base rate case filing; Illinois multi-year grid plan decision (Ameren) | NEE, SO, PEG, AEE | [53][56][51][68] |
| End-2026 | Constellation's Brazos Valley sale to LS Power closes; PJM load-shedding (connect-and-manage) framework due; AES take-private close window opens | CEG, PJM names, AES | [37][26][73] |
| Dec 2026–early 2027 | PJM 2029/30 Base Residual Auction (capped at $325) — exact date not verified | CEG, VST, TLN, NRG, PEG | [24] |
| 1 Jan 2027 | Virginia GS-5 tariff effective ($1.5 million/MW collateral, 14-year terms) | D/NEE | [16][17] |
| Late Feb 2027 | End of FERC's five-month suspension of the PJM Reliability Backstop Procurement; PJM may refile sooner | PEG, CEG, VST, TLN, NRG | [28] |
| Q1–Q2 2027 | NRC uprate applications: Constellation MURs (Q1–Q2), Duke Brunswick 1 & 2 (Q1), PSEG Salem 1 & 2 stretch (Q2), Southern Hatch 1 & 2 (Q2), Duke McGuire 1 & 2 (Q2) | CEG, DUK, PEG, SO | [76] |
| Apr 2027 | MISO 2027/28 Planning Resource Auction | AEE, ETR, XEL, VST | [30] |
| May 2027 | **First uncapped PJM capacity auction (2030/31) with reformed design**; Ameren Missouri rate decision deadline | all PJM generators; AEE | [24][26][68] |
| 1 Jun 2027 | PJM Interim Resource Adequacy Service: new large loads without contracted capacity curtailed first | hyperscalers; CEG, TLN, VST, PEG as sellers | [28] |
| Jun 2027 | Meta–Constellation Clinton PPA begins (1,121 MW) | CEG | [39] |
| Q2 2027 | NextEra–Dominion merger closing target | NEE, D | [53][54] |
| Summer–fall 2027 | ERCOT Batch 1 applications open; Batch Zero final transmission plan | SRE, CNP, AEP, VST, NRG | [10] |
| 2027 | Crane Clean Energy Center restart (Microsoft 835 MW); Comanche Peak data-center energization (end-2027); Ameren Missouri data-center sales begin (H2); CVOW completion (end-2027) | CEG, VST, AEE, D | [37][43][68][52] |
| Q4 2027 | Constellation three further uprate applications | CEG | [76] |
| 2028 | OpenAI–Georgia Power 3.2 GW service start; NRG Texas Energy Fund peakers (Greens Bayou, Cedar Bayou) COD; PJM 2028/29 delivery year begins 1 Jun 2028 at $325 | SO, NRG, TLN, PEG, CEG, VST | [56][50][21] |
| Q2–Q4 2028 | NRC: Duke Catawba 1 extended uprate (Q2); Constellation and Southern (Vogtle 1 & 2) extended uprates (Q4) | DUK, CEG, SO | [76] |
| Nov 2028 | Duke Energy Carolinas rate stay-out ends | DUK | [62] |
| Late 2029 | NRG's 1.2 GW hyperscaler combined cycle COD; Duane Arnold return to service no later than Q1 2029 | NRG, NEE | [48][53] |

---

## 12. Data gaps, caveats and unverified items

1. **Forward power curves.** I could not retrieve a dated PJM Western Hub or ERCOT North Hub forward table; the qualitative statements come from Vistra and NRG calls [43][48].
2. **2027 consensus EPS** was visible on the free stockanalysis pages only for Vistra ($10.37) and PPL ($2.12); other 2027 multiples are my estimates using guided growth rates and are marked (e). Constellation's 2027 figure is an assumption (13–15% growth).
3. **Price dates.** Pages for Entergy, PPL, FirstEnergy, AES and Edison International showed 1 October closes; Evergy and NiSource showed 29 September; Dominion showed a 2 October intraday print; Fortis showed 18 September. The Yahoo Finance API was rate-limited, so I could not cross-check.
4. **Constellation "equity overhang"** (Calpine sellers) appears only as a headline [41]; unverified.
5. **Constellation's $715 million Rhode Island plant purchase** is a headline reference [41].
6. **PJM 2029/30 BRA date** and the exact scope of the $325 cap extension ("two additional auctions") are taken from the Governor's release [24]; PJM's own schedule was not fetched.
7. **PJM 2025/26 auction figures** ($269.92/MW-day, ~$14.7 billion) are from background knowledge, not a fetched source.
8. **FERC's large-load interconnection rulemaking** (April 2026 deadline per [12]) — outcome not verified.
9. **PPL's capital plan, equity needs and 2026 guidance range**; **AEP, Southern, Exelon and Evergy 2026 guidance ranges**; **Alliant's 2026 range** — not fetched; forward multiples for these rely on stockanalysis NTM figures.
10. **Vistra's Cogentrix deal size and price**, **Lotus details** and the **Comanche Peak counterparty** were not disclosed in the fetched material.
11. **Talen's year-by-year Amazon ramp** and **Susquehanna uprate MW** are not disclosed [34].
12. **Hyperscaler PPA prices** (Microsoft ~$100/MWh) are secondary estimates [39]; Constellation, Talen and Vistra have not disclosed them.
13. **Entergy 2029 EPS target (~$6.40)** is from a secondary headline [60].
14. **Sempra–KKR closing** (targeted Q3 2026) — status at 2 Oct not verified.
15. **Grid Strategies' 2026 report** (if published in September 2026) was not fetched; the 2025 report is used.
16. **NERC LTRA 2025 PDF** and **EIA STEO PDF** were cited via secondary summaries [2][6]; the primary PDFs are listed but not parsed.
17. **DC-sidecar / power-quality standards**: NERC's Level 3 alert is documented [79]; any FERC-ordered standards deadline could not be verified.
18. **Generation volumes** used for the $1/MWh sensitivities (Constellation ~180 TWh nuclear, Vistra ~150 TWh, Talen ~55 TWh) are my estimates from fleet sizes and typical capacity factors, not company disclosures.
19. **"Grid United" and "Invenergy"** private transmission developers were not researched beyond their names.
20. The OPIS article on the 2028/29 auction was blocked; figures come from PJM's own release [21].

---

## 13. Sources

1. NERC, *2025 Long-Term Reliability Assessment*, Dec 2025 (PDF; headline only, figures via [2]). https://www.nerc.com/globalassets/our-work/assessments/nerc_ltra_2025.pdf
2. Utility Dive, "NERC forecasts peak demand to rise 24% on new data center loads", 30 Jan 2026. https://www.utilitydive.com/news/nerc-10-year-peak-demand-forecast-jumps-24-on-new-data-center-loads/810955/
3. Grid Strategies, *Power Demand Forecasts Revised Up for Third Year Running, Led by Data Centers* (National Load Growth Report 2025), Nov 2025. https://gridstrategiesllc.com/wp-content/uploads/Grid-Strategies-National-Load-Growth-Report-2025.pdf
4. Lawrence Berkeley National Laboratory / DOE, "Berkeley Lab Report Evaluates Increase in Electricity Demand from Data Centers", 20 Dec 2024. https://bies.lbl.gov/news/berkeley-lab-report-evaluates-increase-electricity-demand-data-centers
5. LBNL, *2024 United States Data Center Energy Usage Report*, Dec 2024 (PDF; headline only). https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf
6. Utility Dive, "Solar generation expected to grow 21% this year, 18% in 2027: EIA" (summary of the September 2026 STEO), Sep 2026. https://www.utilitydive.com/news/data-centers-manufacturing-us-electricity-use-eia/830038/
7. US Energy Information Administration, *Short-Term Energy Outlook*, 10 Sep 2026 (PDF; headline only). https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf
8. Modo Energy, "Data centers define PJM's 2046 load forecast", 2026 (secondary). https://modoenergy.com/research/en/pjm-load-forecast-data-centers-2046
9. ERCOT, *ERCOT Update — Senate Committee on Business & Commerce* (large-load update), 1 Apr 2026 (PDF). https://www.ercot.com/files/docs/2026/04/01/ERCOT_LargeLoad_Update_April2026_B-C_-Hearing.pdf
10. Utility Dive, "Texas, facing 438 GW queue, approves initial large-load interconnection process", Jun 2026. https://www.utilitydive.com/news/texas-facing-438-gw-queue-approves-initial-large-load-interconnection-pro/823367/
11. White & Case, "PUCT affirms curtailment authority over co-located data centers in first net metering case under Senate Bill 6" (Docket 59220, order 24 Jul 2026), 2026. https://www.whitecase.com/insight-alert/puct-affirms-curtailment-authority-over-co-located-data-centers-first-net-metering
12. Latitude Media, "The unsettled landscape of large load tariffs", early 2026. https://www.latitudemedia.com/news/the-unsettled-landscape-of-large-load-tariffs/
13. POWER Magazine, "Regulator Approves AEP Ohio's Landmark Data Center Tariff", 9–10 Jul 2025. https://www.powermag.com/regulator-approves-aep-ohios-landmark-data-center-tariff/
14. Data Center Dynamics, "AEP sees contracted capacity surge to 63GW, 90% tied to data centers", 6 May 2026 (secondary). https://www.datacenterdynamics.com/en/news/aep-sees/
15. Edison Electric Institute, *Large Load Projects and Tariffs*, 11 Sep 2026. https://www.eei.org/-/media/Project/EEI/Documents/Issues%20and%20Policy/List%20of%20Large%20Customer%20Projects%20and%20Tariffs
16. Inside Climate News, "Virginia Regulators Approve New Dominion Rates, Assign More Costs to Data Centers", 2026 (decision of Nov 2025). https://insideclimatenews.org/news/07012026/virginia-regulators-approve-new-dominion-rates/
17. Forbes, "Virginia Now Makes Data Centers Post $1.5 Million A Megawatt", 9 Jun 2026 (secondary). https://www.forbes.com/sites/daraabasiita/2026/06/09/virginia-now-makes-data-centers-post-15-million-a-megawatt/
18. Virginia Mercury, "SCC orders Dominion to develop tariff to assign more transmission costs to data centers", 5 Aug 2026. https://virginiamercury.com/2026/08/05/scc-orders-dominion-to-develop-tariff-to-assign-more-transmission-costs-to-data-centers/
19. Utility Dive, "Exelon 'high probability' data center load falls 40%", Jul–Aug 2026. https://www.utilitydive.com/news/exelon-data-center-load-new-jersey-battery-earnings/826686/
20. Cleanview, *Bypassing the Grid: How Data Center Developers Are Building Their Own Power Plants*, mid-2026. https://cleanview.co/reports/behind-the-meter-data-centers
21. PJM Interconnection, press release, "PJM Capacity Auction Procures 138,318 MW of Generation Resources", 14 Jul 2026 (PDF). https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/2026-releases/20260714-pjm-capacity-auction-procures-138318-mw-of-generation-resources.pdf
22. PJM Interconnection, *2028/2029 Base Residual Auction Report*, 14 Jul 2026 (PDF; headline only). https://www.pjm.com/-/media/DotCom/markets-ops/rpm/rpm-auction-info/2028-2029/2028-2029-bra-results-report.pdf
23. RTO Insider, "PJM Capacity Auction Clears at Max Price, Falls Short of Reliability Requirement", 17 Dec 2025. https://www.rtoinsider.com/121911-pjm-capacity-auction-clears-max-price-falls-short-reliability-requirement/
24. Commonwealth of Pennsylvania, Office of the Governor, "Governor Shapiro's Legal Action Again Prevents Price Hike Across 13 States", 15 Jul 2026. https://www.pa.gov/governor/newsroom/2026-press-releases/governor-shapiro-s-legal-action-again-prevents-price-hike-across
25. Spotlight PA, "Shapiro backs plan with Trump admin to slow rising electricity prices", 16 Jan 2026. https://www.spotlightpa.org/news/2026/01/shapiro-trump-electricity-prices-data-centers-pjm-federal-government/
26. Latham & Watkins, "US Data Center Demand: White House and Governors Issue Principles While PJM Issues Decisional Letter", Jan 2026. https://www.lw.com/en/insights/us-data-center-demand-white-house-and-governors-issue-principles-while-pjm-issues-decisional-letter
27. mgrid.org, "PJM Opens a 6 GW Backstop Auction September 30, After Its Regular Auction Cleared 525 MW of New Generation", 9 Sep 2026 (secondary). https://mgrid.org/2026/09/09/pjm-opens-a-6-gw-backstop-auction-september-30-after-its-regular-auction-cleared-525-mw-of-new-generation/
28. Inside the Datacenter, "The Backstop That Stalled: PJM's One-Time Auction for Data Center Power Runs Into FERC", 29–30 Sep 2026 (secondary). https://insidethedatacenter.com/articles/pjm-backstop-auction/
29. Utility Dive, "Data centers drove $6.3B in PJM capacity auction costs: market monitor", Jul–Aug 2026. https://www.utilitydive.com/news/pjm-data-centers-capacity-auction-imm-bowring/825626/
30. RTO Insider, "MISO Capacity Auction Clears Around $400/MW-day for Summer Supply", 29 Apr 2026. https://www.rtoinsider.com/131216-miso-capacity-auction-clears-around-400mw-day-summer-supply/
31. Heatmap News, "Let's Make It Easier To Plug Data Centers Into Power Plants, FERC Says", 18 Dec 2025. https://heatmap.news/energy/ferc-pjm-colocation-order
32. White & Case, "PJM proposes to carve out new services for co-located data centers" (compliance filing 23 Feb 2026), 2026. https://www.whitecase.com/insight-alert/pjm-proposes-carve-out-new-services-co-located-data-centers
33. Utility Dive, "FERC rejects interconnection pact for Talen-Amazon data center deal at nuclear plant", 4 Nov 2024. https://www.utilitydive.com/news/ferc-interconnection-isa-talen-amazon-data-center-susquehanna-exelon/731841/
34. World Nuclear News, "New supply agreement expands Talen-Amazon partnership", Jun 2025. https://www.world-nuclear-news.org/articles/new-supply-agreement-expands-talen-amazon-partnership
35. Spotlight PA, "States fight electric bill increases amid AI energy boom", May 2026. https://www.spotlightpa.org/news/2026/05/ai-data-centers-utility-rate-increases-state-fights-environment/
36. Utility Dive, "2026 Q1 roundup: Utilities divided on data centers as affordability looms large", May 2026. https://www.utilitydive.com/news/2026-q1-earnings-utilities-data-centers-affordability/820079/
37. Constellation Energy, "Constellation Reports Second Quarter 2026 Results", 6 Aug 2026 (PDF). https://investors.constellationenergy.com/node/10176/pdf
38. StockTitan, "Constellation Signs 920 MW Nuclear Deals as Crane Moves Toward 2027 Restart", 6 Aug 2026 (secondary). https://www.stocktitan.net/news/CEG/constellation-reports-second-quarter-2026-rtppfjewi2nw.html
39. Guzman & Company, *Meta–Constellation Nuclear Power Agreement Analysis*, 3 Jun 2025 (PDF; secondary analysis). https://www.guzman.com/wp-content/uploads/2025/10/Meta-Constellation-Nuclear-Power-Agreement-Analysis-06032025.pdf
40. TIKR, "Constellation Energy Is Down 29% From Its Peak. Is the Nuclear Bull Case Still Intact?", Sep 2026 (secondary). https://www.tikr.com/blog/constellation-energy-is-down-29-from-its-peak-is-the-nuclear-bull-case-still-intact
41. Yahoo Finance, Constellation Energy (CEG) news page, retrieved 3 Oct 2026 (secondary; headline only). https://finance.yahoo.com/quote/CEG/news/
42. Vistra Corp., "Vistra Reports Second Quarter 2026 Results", 7 Aug 2026. https://investor.vistracorp.com/2026-08-07-Vistra-Reports-Second-Quarter-2026-Results
43. Investing.com, "Earnings call transcript: Vistra misses Q2 2026 estimates as revenue falls short", 7 Aug 2026 (secondary). https://www.investing.com/news/transcripts/earnings-call-transcript-vistra-misses-q2-2026-estimates-as-revenue-falls-short-93CH-4847086
44. Power Engineering, "Vistra secures long-term nuclear PPA from Comanche Peak nuclear plant", 2025. https://www.power-eng.com/nuclear/vistra-secures-long-term-nuclear-ppa-from-comanche-peak-nuclear-plant/
45. Vistra Corp., Investor Relations news listing (including "Vistra Prices Registered Offering of $1.5 Billion of Junior Subordinated Notes", 10 Sep 2026, and Q3 results date 6 Nov 2026), retrieved 3 Oct 2026. https://investor.vistracorp.com/news
46. Yahoo Finance, Vistra (VST) news page, retrieved 3 Oct 2026 (secondary; headline only). https://finance.yahoo.com/quote/VST/news/
47. Talen Energy, "Talen Energy Reports Second Quarter 2026 Results, Raises 2026 Guidance", GlobeNewswire, 5 Aug 2026. https://www.globenewswire.com/news-release/2026/08/05/3339712/0/en/talen-energy-reports-second-quarter-2026-results-raises-2026-guidance.html
48. BigGo Finance, "NRG Q2 2026 Earnings Call: NRG unveils $3.2B 1.2-GW data center deal with hyperscaler as EBITDA jumps 34%", 4 Aug 2026 (secondary). https://finance.biggo.com/news/US_NRG_2026-08-04
49. Utility Dive, "NRG has 'zero interest' in speculative new capacity build: CEO", Feb 2026. https://www.utilitydive.com/news/nrg-energy-data-center-texas-earnings/813076/
50. Power Engineering, "NRG caps busy second quarter with 295 MW data center power deal", Aug 2025. https://www.power-eng.com/gas/nrg-caps-busy-second-quarter-with-295-mw-data-center-power-deal/
51. BigGo Finance, "PEG Q2 2026 Earnings Call: PSEG Posts $0.86 EPS, Pulls Forward Rate Case Filing to Year-End", 4 Aug 2026 (secondary). https://finance.biggo.com/news/US_PEG_2026-08-04
52. Investing.com, "Dominion Q2 2026 slides: data centers surge, offshore wind 81% done", Aug 2026 (secondary). https://www.investing.com/news/company-news/dominion-q2-2026-slides-data-centers-surge-offshore-wind-81-done-93CH-4828982
53. NextEra Energy, "NextEra Energy reports second-quarter 2026 financial results", 24 Jul 2026 (PDF). https://www.investor.nexteraenergy.com/~/media/Files/N/NEE-IR/reports-and-fillings/quarterly-earnings/2026/Q2%202026/2026-0724%20NEEQ22026News%20Release%20vFINAL.pdf
54. NextEra Energy, "NextEra Energy and Dominion Energy to Combine, Creating the World's Largest Regulated Electric Utility Business...", 18 May 2026. https://newsroom.nexteraenergy.com/2026-05-18-NextEra-Energy-and-Dominion-Energy-to-Combine,-Creating-the-Worlds-Largest-Regulated-Electric-Utility-Business-and-North-Americas-Premier-Energy-Infrastructure-Platform-Benefiting-Customers?l=12
55. Power Technology, "NextEra-Dominion $66.8bn merger clears shareholder votes", Sep 2026 (secondary; headline only). https://www.power-technology.com/news/nextera-dominion-merger-shareholder-approval/
56. Utility Dive, "Southern Co. contracted large load rises to 17 GW", Aug 2026. https://www.utilitydive.com/news/southern-co-contracted-large-load-data-centers/826919/
57. Utility Dive, "As load grows, Southern raises spending plan to $81B", Feb 2026. https://www.utilitydive.com/news/southern-co-load-data-center-earnings/812681/
58. Southern Environmental Law Center, "PSC unanimously votes to approve Georgia Power's data center plan without sufficient customer protections", 19 Dec 2025. https://www.selc.org/press-release/psc-unanimously-votes-to-approve-georgia-powers-data-center-plan-without-sufficient-customer-protections/
59. Utility Dive, "Meta deal adds to Entergy's $57B, 4-year capital plan", Apr–May 2026. https://www.utilitydive.com/news/new-generation-adds-12b-entergy-capital-plan/818790/
60. BigGo Finance, "ETR Q2 2026 Earnings Call: Entergy Posts $1.03 EPS, Affirms Guidance...", 29 Jul 2026 (secondary). https://finance.biggo.com/news/US_ETR_2026-07-29
61. RTO Insider, "Entergy Louisiana Says 7 More Gas Plants Necessary for Meta Data Center", Apr 2026 (headline only; paywalled). https://www.rtoinsider.com/129344-entergy-7-more-gas-plants-necessary-meta-data-center/
62. Investing.com, "Duke Energy Q2 2026 slides: data center boom drives $103B capital plan", Aug 2026 (secondary). https://www.investing.com/news/company-news/duke-energy-q2-2026-slides-data-center-boom-drives-103b-capital-plan-93CH-4835180
63. BigGo Finance, "XEL Q2 2026 Earnings Call: Earnings Surge 24% as $6 Billion SPS Generation Win...", 30 Jul 2026 (secondary). https://finance.biggo.com/news/US_XEL_2026-07-30
64. Sempra, "Sempra Reports Strong Second-Quarter 2026 Results", 6 Aug 2026. https://www.sempra.com/newsroom/press-releases/sempra-reports-strong-second-quarter-2026-results
65. Utility Dive, "Oncor has 200 GW of interconnection requests, company officials say", 11 Aug 2025. https://www.utilitydive.com/news/oncor-sempra-interconnection-texas-data-center-earnings/757262/
66. Utility Dive, "FirstEnergy data center contracts surge 50% in Q2", 29–30 Jul 2026. https://www.utilitydive.com/news/firstenergy-data-center-west-virginia-maidsville-earnings/826558/
67. CenterPoint Energy, "CenterPoint Energy reports strong Q2 2026 results; provides update on ERCOT's Batch Zero process; increases 10-year capital plan; reiterates full-year 2026 guidance", Jul 2026. https://investors.centerpointenergy.com/news-releases/news-release-details/centerpoint-energy-reports-strong-q2-2026-results-provides
68. Investing.com, "Ameren Q2 2026 slides: data center deals fuel growth, earnings top view", Aug 2026 (secondary). https://www.investing.com/news/company-news/ameren-q2-2026-slides-data-center-deals-fuel-growth-earnings-top-view-93CH-4828880
69. BigGo Finance, "LNT Q2 2026 Earnings Call: Data Center Construction Surge Propels Alliant...", 31 Jul 2026 (secondary). https://finance.biggo.com/news/US_LNT_2026-07-31
70. PPL Corporation, "PPL Corporation Delivers Solid Second-Quarter 2026 Earnings; Reaffirms Guidance and Long-Term Growth Outlook", PR Newswire via Morningstar, 7 Aug 2026 (headline only). https://www.morningstar.com/news/pr-newswire/20260807ph21486/ppl-corporation-delivers-solid-second-quarter-2026-earnings-reaffirms-guidance-and-longterm-growth-outlook
71. PA Environment Digest / Data Center Dynamics, "PPL Electric Reports 31.8 GW In A.I. Data Center Demand Pipeline, Including 11 GW Under Signed Agreements; Its Joint Venture With Blackstone Has Secured Sites To Build Up To 14 GW Of Generation In PA", Aug 2026 (headline only). http://paenvironmentdaily.blogspot.com/2026/08/ppl-electric-utilities-reports-318-gw.html and https://www.datacenterdynamics.com/en/news/pennsylvania-utility-ppl-sees-advanced-stage-data-center-pipeline-grow-to-318gw/
72. POWER Magazine, "PPL, Blackstone Launch Major Gas-Fired Generation Venture Targeting Data Center Surge in Pennsylvania", Jul 2025 (headline only). https://www.powermag.com/ppl-blackstone-launch-major-gas-fired-generation-venture-targeting-data-center-surge-in-pennsylvania/
73. Big Energy News, "Shareholders Overwhelmingly Approve $33.4B Acquisition of AES", Jun–Jul 2026 (secondary). https://bigenergynews.com/2026/06/shareholders-overwhelmingly-approve-33-4b-acquisition-of-aes/
74. Utility Dive, "GE Vernova gas turbine backlog climbs to 116 GW", 23 Jul 2026. https://www.utilitydive.com/news/ge-vernova-gas-turbine-backlog-climbs-to-116-gw/826039/
75. Latitude Media, "Gas turbine prices are up — and aren't going down anytime soon" (summarizing GridLab's gas-turbine cost report), 17 Sep 2025. https://www.latitudemedia.com/news/gas-turbine-prices-are-up-and-arent-going-down-anytime-soon/
76. US Nuclear Regulatory Commission, "Expected Applications for Power Uprates", page updated 8 Sep 2026. https://www.nrc.gov/facilities-safety/operating-reactors/operating-reactor-licensing/power-uprates/status-of-power-uprate-applications/expected-applications-for-power-uprates
77. mgrid.org, "Google Secures 1 GW Demand Response From 5 U.S. Utilities", 20 Mar 2026 (secondary). https://mgrid.org/2026/03/20/google-1gw-demand-response-utility-contracts/
78. POWER Magazine, "Google, I&M Strike Landmark Deal to Share Clean Capacity and Flex AI Load", Aug 2025. https://www.powermag.com/google-im-strike-landmark-deal-to-share-clean-capacity-and-flex-ai-load/
79. Utility Dive, "Sudden data center load losses prompt NERC alert, recommendations", Apr–May 2026. https://www.utilitydive.com/news/data-center-load-disruptions-nerc-alert-recommendations/818036/
80. stockanalysis.com, quote, statistics and forecast pages for CEG, VST, NRG, TLN, PEG, D, SO, DUK, AEP, ETR, XEL, PPL, FE, EVRG, LNT, AEE, EXC, EIX, SRE, NEE, AES, POR, NI, CNP and TSX:FTS, retrieved 3 Oct 2026 03:50–04:40 UTC (secondary aggregator; ratings compiled from S&P Global Market Intelligence and TipRanks). https://stockanalysis.com/stocks/ceg/ (pattern: /stocks/SYM/, /stocks/SYM/statistics/, /stocks/SYM/forecast/; https://stockanalysis.com/quote/tsx/FTS/)
81. Data Center Dynamics, "New Jersey utility PSEG sees large load pipeline surge to 9.4GW, 90% from data centers", 2026 (headline only). https://www.datacenterdynamics.com/en/news/new-jersey-utility-pseg-sees-large-load-pipeline-surge-to-94gw-90-from-data-centers/
82. Utility Dive, "PSEG offers data center supply proposals in PJM's bilateral contracting process", Aug 2026 (headline only). https://www.utilitydive.com/news/pseg-data-center-pjm-bilateral-contract-reliability/827045/
83. Data Center Dynamics, "Google, Nvidia, and Emerald AI found the AI Energy Management Alliance to support demand response capabilities within the data center sector", Sep 2026 (headline only). https://www.datacenterdynamics.com/en/news/google-nvidia-and-emerald-ai-found-the-ai-energy-management-alliance-to-support-demand-response-capabilities-within-the-data-center-sector/
84. Utility Dive, "Some load forecasts using 'unrealistically high load factors': Grid Strategies VP", 2025 (headline only). https://www.utilitydive.com/news/some-load-forecasts-using-unrealistically-high-load-factors-grid-strateg/805927/
85. PJM Interconnection, press release, "PJM Auction Procures 134,479 MW of Generation Resources", 17 Dec 2025 (PDF; headline only). https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/2025-releases/20251217-pjm-auction-procures-134479-mw-of-generation-resources.pdf
86. POWER Magazine, "Texas Audit Could Delay 49.8 GW of Data Center Load, Cost Projects Up to $15 Billion, BNEF Warns", 2026 (headline only). https://www.powermag.com/texas-audit-could-delay-49-8-gw-of-data-center-load-cost-projects-up-to-15-billion-bnef-warns/
87. Utility Dive, "NextEra bets on gas as data center pipeline remains steady at about 15 GW", Jan 2026 (headline only). https://www.utilitydive.com/news/nextera-energy-earnings-gas-data-centers/810808/
88. Virginia State Corporation Commission, *SCC Data Center Initiatives: Ensuring Data Centers Pay Their Own Costs* (fact sheet), Feb 2026 (PDF; headline only). https://www.scc.virginia.gov/media/sccvirginiagov-home/about-the-scc/fact-sheets/scc-data-center-initiatives-02-2026.pdf
89. Utility Dive, "PJM stakeholders advance data center backstop procurement plan", 2026 (headline only). https://www.utilitydive.com/news/pjm-backstop-procurement-connect-manage-data-centers/824317/
90. E&E News by POLITICO, "PJM moves up 'backstop' reliability auction to September", 2026 (headline only). https://www.eenews.net/articles/pjm-moves-up-backstop-reliability-auction-to-september/
91. OPIS (Dow Jones), "PJM's 2028/2029 Capacity Auction Clears at Price Cap for Third Time", Jul 2026 (headline only; fetch blocked). https://www.opis.com/resources/energy-market-news-from-opis/pjms-2028-2029-capacity-auction-clears-at-price-cap-for-third-time/
92. Utility Dive, "PSEG CEO: Nuclear outlook for New Jersey improves on lifting of moratorium", 2026 (headline only). https://www.utilitydive.com/news/pseg-nuclear-new-jersey-earnings/819444/
93. Data Center Dynamics, "NRG Energy strikes $12bn deal with LS Power for 18GW of power generation assets", May 2025 (headline only). https://www.datacenterdynamics.com/en/news/nrg-energy-strikes-12bn-deal-with-ls-power-for-18gw-of-power-generation-assets/
94. Utility Dive, "Grid reliability projected to decline as data centers drive demand" via The Hill, and "NERC warns reliability risk is rising as load growth outpaces infrastructure", Power Engineering, Jan 2026 (headline only; corroborating [2]). https://www.power-eng.com/business/policy-and-regulation/nerc-warns-reliability-risk-is-rising-as-load-growth-outpaces-infrastructure/
95. Utility Dive, "Manufacturers say AEP Ohio still inflating data center demand after halving forecast", 2026 (headline only). https://www.utilitydive.com/news/aep-ohio-data-center-load-tariff-oma-manufacturers/811583/
96. Utility Dive, "Xcel Energy on track for 3% retail sales growth this year, executives say", Jul 2026 (headline only). https://www.utilitydive.com/news/xcel-energy-on-track-retail-sales-growth-this-year-executives-say/826705/
