> **Working research report, published as-is for transparency (3 Oct 2026).** Written by an AI research agent for the Claude Investment Summary pages. Every figure carries a date and source; "secondary" marks relays; "my estimate" marks the agent's arithmetic. Prices are a point-in-time snapshot (2 Oct 2026 closes unless stated). Not investment advice. Final picks and targets on the website may differ from the rankings here.

# G2: Nuclear power for AI data centers
### Restarts, large reactors, small modular reactors and the fuel cycle — from uranium in the ground to electrons sold to data centers

*Research date: Friday 2 October 2026 (evening, US time). Written for an educational investment-analysis page. This is not investment advice.*

**Conventions.**
- `[n]` refers to the numbered sources in §16. "(secondary)" marks an aggregator, a press summary, a blog or a headline-only reference. "**my estimate**" marks my own arithmetic or assumptions.
- **Price dates.** US listings use the **2 October 2026 close** from stockanalysis.com quote pages unless a different time is stated [80]. Where the quote page showed an intraday or older timestamp I say so next to the figure. London (Kazatomprom GDR, Rolls-Royce) uses the 2 October 2026 close [80][81]. For Korean, Japanese and Australian listings the quote pages served stale data (18–24 September 2026); I state the date next to each figure and treat them as approximate.
- **Forward P/E.** Where I compute it, forward P/E = price ÷ company 2026 guidance midpoint or consensus for the stated year, and I say which. Where I quote the quote page's "forward P/E" I label it as that source's definition (next-fiscal-year consensus) [80].
- **Terms.** A **PPA** is a power purchase agreement, a long-term contract to buy electricity at an agreed price. **MW** is megawatts of capacity; **MWh** is megawatt-hours of energy; a 1,000 MW reactor at a 92% capacity factor produces about 8.06 million MWh a year. **HALEU** is high-assay low-enriched uranium (5–20% uranium-235), the fuel most advanced reactors need. **TRISO** is a ceramic-coated fuel particle used in gas-cooled and some molten-salt reactors. **SWU** is a separative work unit, the standard measure of enrichment effort. A **construction permit** (NRC Part 50) lets a company build; an **operating license** or a **combined license** (Part 52) lets it run. The **NRC** is the US Nuclear Regulatory Commission; the **DOE** is the US Department of Energy; **FERC** regulates interstate transmission and wholesale markets; **PJM** is the grid operator for the mid-Atlantic region.

**Method caveat.** The session's web-search quota was exhausted part-way through the fuel-cycle and components work, so the later sections rely on direct fetches of company releases, regulator documents, trade-press articles already identified, and quote pages. Several regulator and trade-press pages (the NRC uprate page, ANS tag pages) could not be fetched. Items I could not verify are flagged where they appear and listed in §15.

---

## 0. Executive summary: twelve conclusions

1. **Before 2030, "new nuclear for data centers" in the United States is almost entirely re-labelled existing output plus three restarts.** The three restart projects total about **2.25 GW**: Palisades (800 MW; fuel loading began 30 August 2026 and was paused on 25 September 2026 after a fuel assembly tilted in the vessel; the plant is contracted to supply power by March 2027) [13]; Crane (835 MW; return to service targeted for the second half of 2027, with the NRC fuel-license amendment and FERC interconnection-rights transfer approved in 2026) [3][5][7]; and Duane Arnold (615 MW; a $1.9 billion DOE loan closed 8 September 2026; restart targeted for the first quarter of 2029) [16][17]. Everything else contracted to hyperscalers before 2030 — Clinton to Meta (1,121 MW from June 2027) [10], Susquehanna to Amazon (up to 1,920 MW, ramping to 2032) [21], Comanche Peak (1,200 MW from late 2027) [19], Vistra's four PJM units to Meta (2,600+ MW) [20] and Constellation's 920 MW of mixed deals [5] — is electricity that already exists. **My estimate:** net new US nuclear supply by end-2030 is about 3 GW (restarts ≈ 2.25 GW, approved uprates ≈ 0.4 GW, advanced demonstrations < 0.5 GW), against a data-center load that most forecasters put in the tens of gigawatts; net-new nuclear can plausibly serve about 4–8% of the *increase* in US data-center consumption between 2023 and 2030, and about 15–25% if one counts re-contracted existing output (arithmetic in §9.3).

2. **The clean-firm premium is real but modest and has already been shown to investors.** Analysts estimated the Microsoft–Crane PPA at $98/MWh (Morgan Stanley) to $115/MWh (Jefferies) and the Meta–Clinton PPA at about $70/MWh, roughly a $20/MWh premium to Illinois energy-plus-capacity revenue (June 2025) [11]. Constellation's management framed the contracted uplift as a "$20 to $50 a megawatt hour" sensitivity and declined to update it on 13 August 2026 [7]. Talen's Amazon deal carries 2% annual escalators from 2028 and up to $1.4 billion a year of revenue when fully ramped [21]. These are good contracts for incumbents, not a step-change: Constellation says about 30% of its clean baseload output is now under long-term contract [82].

3. **Large-reactor new build in the US has moved from slogans to financing, but not yet to a firm order.** The 28 October 2025 term sheet gives the US government 20% of Westinghouse cash distributions above $17.5 billion in exchange for arranging financing and permitting for at least $80 billion of reactors, with a provision allowing the government to require an IPO if Westinghouse is valued at $30 billion or more by January 2029 [27]. On 23–24 June 2026 the DOE conditionally committed **$17.5 billion of loans for long-lead items (heavy forgings, pressure vessels, turbines, generators) for up to ten AP1000 units**, each project needing $1 billion of equity ($500 million each from Westinghouse and the utility partner); Westinghouse has letters of intent with seven potential partners, none named [28]. Westinghouse filed a confidential S-1 in July 2026 and, per Bloomberg on 18 September 2026, seeks a valuation above $50 billion with a public filing "as soon as October" [31]. **No US utility has placed a binding AP1000 order as of 2 October 2026** (my reading of [28][32]).

4. **The first US small modular reactor construction permit is issued, but first power is not before 2030–32, and the order books are mostly non-binding.** The NRC issued TVA's construction permit for a GE Vernova Hitachi BWRX-300 at Clinch River in September 2026, 14 months after docketing, but TVA "has not yet committed to a firm date" and previously pointed to 2032 [40]. TerraPower's Natrium received its Part 50 construction permit on 4 March 2026 and targets 2030–31 at about $4 billion for 345 MW (half DOE-funded) [56]. NuScale's "6 GW" framework with ENTRA1 and TVA remains non-binding without a PPA (15 September 2026) [43]. Kairos broke ground on the 50 MW Hermes 2 on 17 April 2026 [54], while the NRC extended the completion deadline for the smaller Hermes 1 test reactor from 31 December 2026 to **30 April 2029** (order of 13 May 2026) [55]. X-energy's Dow Seadrift permit awaits a safety review due November 2026 [53].

5. **The DOE Reactor Pilot Program delivered criticality, not commerce.** Five reactors reached criticality by 5–6 August 2026: Antares Mark-0 (4 June), Valar Ward 250 (18 June), Deployable Energy Unity (1 July), Aalo-X (4 July) and Oklo's Groves isotope test reactor (5 August) [46][57][58][59]. All are zero- or low-power test units. The Groves claim is **verified** — the DOE itself announced it [46] — but Groves is a 15 MWt pool-type isotope reactor in Texas, not the 75 MWe Aurora powerhouse, whose commercial operation Oklo now targets for 2028 [47][57].

6. **The binding constraint for advanced reactors is HALEU, and the first commercial domestic HALEU at scale arrives in 2029.** Centrus's $900 million DOE contract (plus $170 million of options), finalised 3 July 2026, runs the existing 16-centrifuge cascade commercially while new capacity comes online "by 2029" [74]. Centrus's letter of intent with Oklo covers fuel for up to five Aurora powerhouses with deliveries from 2029 [47]. Urenco's Capenhurst HALEU facility is targeted for 2031 [76]. DOE's allocations of legacy material so far cover ten named recipients across three rounds [62][63]; quantities are not public (data gap). The Russian LEU import ban ends all waivers on 1 January 2028 [64]; Centrus holds waivers through 2027 deliveries (granted 4 August 2025) [65].

7. **Uranium term prices are at records while miners are being de-rated.** The long-term indicator reached **$96.50/lb on 30 September 2026** (spot $89.63/lb) [68], the highest since 2008 [70]. Kazatomprom kept 2026 guidance at 27,500–29,000 tU (100% basis) on 21 August 2026 but raised its cost guidance and delayed its TQZ sulphuric-acid plant to Q3 2027–Q1 2028 [71]. Cameco guides 2026 production to 19.5–21.5 million lb and reports market-related contract floors "in the high $70s" with ceilings "around $160" [72]. Yet the NLR nuclear ETF was down 12% year-to-date by mid-September and utilities are described as "reluctant to contract in any meaningful way" [69]. Cameco closed at $85.18 on 2 October 2026 versus a 52-week high of $135.24 [80].

8. **The single-source choke points are forgings, reactor coolant pumps and HALEU — not reactor designs.** Only three forges make Generation III+ reactor pressure vessels: Doosan Enerbility (17,000-tonne press), Japan Steel Works (14,000-tonne) and China First Heavy Industries (15,000-tonne); no US forge qualifies, and a single forge yields "on the order of four reactor vessels a year" [79]. Curtiss-Wright's Cheswick plant makes 12–16 reactor coolant pumps a year (three to four AP1000s' worth) and committed $80 million in July 2026 to expand [79]. The $17.5 billion DOE loan is explicitly aimed at these long-lead items [28].

9. **The listed advanced-reactor developers have been repriced violently, and the IPO window has shut.** At the 2 October 2026 close: Oklo $35.87 (52-week high $193.84; market value $6.67 billion; trailing revenue $1.21 million) [80]; NuScale $7.75 (high $57.42) [80]; NANO Nuclear $15.62 (high $60.87) [80]; X-energy $14.38 versus a $23 IPO price on 24 April 2026 [52][80]; Standard Nuclear about $12.80 versus $15 at IPO on 16 July 2026 [77][80]; Terrestrial Energy $3.83 (high $31.50) [80]. Holtec suspended its $825–900 million IPO on 16 September 2026, the day before pricing, citing market conditions [15]. Sell-side targets still imply 50–300% upside across the group, which says more about the lag in analyst models than about the assets [80].

10. **Enrichers and incumbents own the cash flows; developers own the options.** Centrus has a $4.5 billion backlog to 2040, $1.87 billion of cash and 2026 revenue guidance of $450–500 million [75], yet trades at 57× the source's forward earnings after a 70% drawdown [80]. BWXT has an $8.4 billion backlog (+40% year on year), raised 2026 non-GAAP EPS guidance to $4.70–4.80, and trades at **28× that guidance midpoint (my estimate)** [78][80]. Constellation trades at **21.5× the midpoint of its $11.50–12.50 2026 guidance (my estimate)** [5][80]; Vistra at a source forward P/E of 13.6× [80]; Talen at 10.7× [80].

11. **Policy has done what it can; the schedule is now set by engineering and capital.** Executive Order 14300 (May 2025) caps new-reactor licensing at 18 months and renewals at 12 months; the NRC reorganised into three business lines by September 2026 and finished TerraPower's review in 18 months and Clinch River's in about 14 [40][60]. The Part 53 advanced-reactor rule was scheduled to be final on 27 March 2026 and a microreactor rule on 16 September 2026 [60]. The Section 232 critical-minerals investigation (uranium included) ended on 15 January 2026 with **no tariff**, only negotiations and a reserved right to set minimum import prices [61]. Texas opened a $350 million fund (applications closed 14 May 2026) [67]; New York's NYPA issued a request for qualifications for at least 1 GW on 1 June 2026, with a master plan due by end-2026 [66].

12. **Ranked shortlist** (details in §12; rejected names in §13):
    1. Constellation Energy (NASDAQ:CEG)
    2. Cameco (NYSE:CCJ / TSX:CCO)
    3. BWX Technologies (NYSE:BWXT)
    4. Vistra (NYSE:VST)
    5. Centrus Energy (NYSE American:LEU)
    6. Talen Energy (NASDAQ:TLN)
    7. Curtiss-Wright (NYSE:CW)
    8. Kazatomprom (LSE:KAP)
    9. Doosan Enerbility (KRX:034020)
    10. GE Vernova (NYSE:GEV) — nuclear is a small part of the whole
    11. Mirion Technologies (NYSE:MIR)
    12. X-energy (NASDAQ:XE) — the one developer with a fuel plant, a construction-permit application under review and two anchor customers

---

## 1. Value-chain map (October 2026)

Notation: `exchange:ticker`, followed by the US over-the-counter or ADR symbol where one exists. Scarcity status is my assessment from the evidence in §§2–9.

| Layer | Products | Public companies | Notable private / state-owned | Status, Oct 2026 |
|---|---|---|---|---|
| **A. Uranium mining** | U₃O₈ ("yellowcake"); in-situ recovery (ISR) and conventional mines | Cameco (NYSE:CCJ; TSX:CCO); Kazatomprom (LSE:KAP, GDR; KASE:KZAP); NexGen (NYSE:NXE; TSX:NXE; ASX:NXG); Denison (NYSE American:DNN; TSX:DML); Uranium Energy (NYSE American:UEC); enCore (NASDAQ:EU; TSX-V:EU); Paladin (ASX:PDN; OTC PALAF); Energy Fuels (NYSE American:UUUU; TSX:EFR); Ur-Energy (NYSE American:URG); Boss Energy (ASX:BOE); Deep Yellow (ASX:DYL); Sprott Physical Uranium Trust (TSX:U.UN; OTC SRUUF) as a holder of 81.7 million lb [70] | Orano Mining (French state); CGN Uranium / CNNC (China); Navoiyuran (Uzbekistan); Rosatom's ARMZ/Uranium One | **Term price at a record $96.50/lb (30 Sep 2026)** [68]; supply response slow (Kazatomprom acid constraint to 2027–28 [71]; NexGen's Rook I licensed for construction March 2026 (headline only) [90]). Not the binding constraint for data-center nuclear before 2030 |
| **B. Conversion (U₃O₈ → UF₆)** | Natural UF₆ | Cameco (Port Hope; 12,500 tU/yr capacity [72]) | ConverDyn/Honeywell (Metropolis, US); Orano (Malvési/Tricastin, France); Rosatom | Tight. North American spot conversion about $65/kgU and term $55.50/kgU at end-August 2026 (unverified social-media relay of TradeTech) [73] |
| **C. Enrichment** | LEU (to 5%); LEU+ (5–10%); HALEU (to 19.75%) | Centrus Energy (NYSE American:LEU) | Urenco (UK/Dutch/German governments); Orano (French state); Rosatom/TENEX; General Matter (private, Paducah); Global Laser Enrichment (Silex ASX:SLX 51% / Cameco 49%) | **Binding for advanced reactors.** First new domestic HALEU capacity "by 2029" (Centrus) [74]; Urenco HALEU 2031 [76]; Russian LEU waivers end 1 Jan 2028 [64]. Spot SWU about $200 and term $183 at end-August 2026 (unverified relay) [73] |
| **D. Fuel fabrication** | LWR assemblies; TRISO particles and pebbles; metallic HALEU fuel | BWX Technologies (NYSE:BWXT); Standard Nuclear (NYSE:STDN); X-energy/TRISO-X (NASDAQ:XE); Lightbridge (NASDAQ:LTBR); Centrus (deconversion with Oklo); Oklo (NYSE:OKLO) A3F plant for 2027 [47] | Westinghouse (Columbia, SC); Framatome (Richland, WA; EDF); Global Nuclear Fuel (GE Vernova/Hitachi/Toshiba, Wilmington, NC) | LWR fuel adequate; **TRISO and metallic HALEU fuel are first-of-a-kind** (TRISO-X SNM licence; Oklo A3F startup 2027) [47][102] |
| **E. Reactor vendors — large** | AP1000 (1,117 MWe); EPR2; APR1400/APR1000 | Westinghouse via Cameco (49%) and Brookfield (BAM/BN, 51%) [29]; Doosan Enerbility (KRX:034020) as KHNP's manufacturer; Hyundai E&C (KRX:000720); Mitsubishi Heavy (TSE:7011) | Westinghouse (pre-IPO); EDF (French state); KHNP (Korean state) | **Financing solved on paper ($17.5B DOE), orders not yet placed** [28]; Poland EPC terms agreed 23 Sep 2026, first concrete Q4 2028 [35] |
| **F. Reactor vendors — SMR and micro** | BWRX-300; NuScale US460; Natrium; Xe-100; KP-FHR; Aurora; IMSR; SMR-300; AP300; Rolls-Royce SMR; KRONOS; microreactors | GE Vernova (NYSE:GEV); NuScale (NYSE:SMR); Oklo (NYSE:OKLO); X-energy (NASDAQ:XE); NANO Nuclear (NASDAQ:NNE); Terrestrial Energy (NASDAQ:IMSR); Rolls-Royce (LSE:RR); Fluor (NYSE:FLR) via NuScale stake | TerraPower; Kairos; Holtec (IPO suspended 16 Sep 2026 [15]); Aalo; Valar; Antares; Deployable; Radiant; Last Energy; Deep Fission; Newcleo | **One US construction permit (Clinch River, Sep 2026) and one advanced-reactor permit (Natrium, Mar 2026)**; first commercial power 2030–32 [40][56] |
| **G. Heavy components** | Reactor pressure vessels; steam generators; large forgings; reactor coolant pumps; control-rod drives; valves; condensers | Doosan Enerbility; Japan Steel Works (TSE:5631); Curtiss-Wright (NYSE:CW); BWXT; Flowserve (NYSE:FLS); Graham Corp (NYSE:GHM); IHI (TSE:7013); Mitsubishi Heavy | China First Heavy Industries (state); Framatome (Le Creusot); Sheffield Forgemasters (UK state) | **Scarce:** three Gen III+ forges worldwide, about four vessels a year each; 12–16 RCPs a year [79] |
| **H. Instrumentation, services, engineering** | Radiation detection; outage services; decommissioning; owner's engineer | Mirion (NYSE:MIR); Jacobs (NYSE:J); Amentum (NYSE:AMTM); Fluor; Kinectrics via BWXT [78] | Bechtel (EPC for Natrium, Poland) [35][56]; Holtec; Sargent & Lundy | Adequate; margin story not scarcity |
| **I. Owners and operators selling to data centers** | Nuclear MWh under PPA; restarts; uprates | Constellation (NASDAQ:CEG); Vistra (NYSE:VST); Talen (NASDAQ:TLN); NextEra (NYSE:NEE) and Dominion (NYSE:D), merging [18]; PSEG (NYSE:PEG); Southern (NYSE:SO); Duke (NYSE:DUK); Fermi (NASDAQ:FRMI) as a would-be owner | TVA (federal); OPG (Ontario); NYPA (New York state); Holtec (Palisades) | **The only layer delivering electrons to data centers before 2030** |

---

## 2. The existing fleet: restarts, uprates, license extensions and the PPA wave

### 2.1 Fleet baseline

The United States operates 94 reactors with 96,952 MWe of capacity, which produced 816 TWh in 2024, about 18% of US electricity; the fleet's capacity factor has been "over 90%" for years (World Nuclear Association, updated 29 September 2026) [25]. Constellation reported a 93% nuclear capacity factor and 40 TWh of output in the second quarter of 2026 despite six refuelling outages [82][83]. Capacity factor is the share of the year a plant runs at full output; 93% is what makes nuclear "firm" in a way that solar and wind are not.

### 2.2 The three restarts

| Plant (owner) | MW | Status at 2 Oct 2026 | Customer / financing | Capital cost |
|---|---|---|---|---|
| **Palisades**, Michigan (Holtec) | 800 | Fuel loading began 30 Aug 2026; plant reconnected to 345 kV switchyard 11 Sep 2026; fuel loading **paused** after a used fuel assembly tilted in the vessel with the grapple disengaged; root-cause evaluation, retrieval tooling and a license amendment needed before the plant moves to cold shutdown (ANS, 25 Sep 2026) [13]. Over 5,000 restart activities remained in July 2026 [12] | Contracted to supply power by **March 2027** (Wolverine/Hoosier cooperatives) [13]; DOE loan guarantee up to $1.5 billion [14] | Loan basis ≈ **$1,900/kW** (**my estimate**: $1.5B ÷ 800 MW) |
| **Crane Clean Energy Center** (ex-Three Mile Island 1), Pennsylvania (Constellation) | 835 | FERC approved transfer of 760 MW of Eddystone capacity interconnection rights on 1 Jun 2026 over the PJM market monitor's objection [2][3]; NRC approved the fuel license amendment (Q2 2026) [5]; NRC final environmental assessment and finding of no significant impact published 25 Sep 2026 [4]; **return to service targeted for H2 2027** [7]; full grid deliverability by 31 Dec 2030 [3]; license to 2034, extension to 2054 sought [1] | 20-year PPA with **Microsoft** for the full 835 MW including capacity and clean attributes [8]; analyst price estimates $98–115/MWh [11] | Constellation guided **$1.6 billion** of restart capital (Feb 2025) [8] → **≈ $1,900/kW (my estimate)** |
| **Duane Arnold**, Iowa (NextEra) | 615 | DOE **$1.9 billion loan closed 8 Sep 2026**; Iowa Utilities Commission certificate June 2026; NRC says licensing actions before January 2028; site inspections through 2027; **restart Q1 2029** [16][17] | 25-year PPA with **Google** (announced Oct 2025) [16] | Loan basis ≈ **$3,100/kW (my estimate)**; total cost not disclosed |

Reading: restarts are the cheapest nuclear megawatts on offer, roughly $2,000–3,000/kW against $13,000–20,000/kW for new large or small reactors (§9). But there are only three candidates in the US, and the Palisades incident shows that even a "simple" restart carries first-of-a-kind risk: Holtec's own 2025 guidance of a late-2025 restart slipped to "early 2026" (headline only) [85], then past February 2026 [12], and the company is now racing a March 2027 contract deadline [13].

### 2.3 Uprates: small, cheap, and now federally financed

An uprate raises a reactor's licensed thermal power through better analysis or new equipment (turbines, feedwater heaters, main generators). Evidence of the 2026 wave:

- The DOE's Loan Programs Office closed a **$26.5 billion loan package to Southern Company** subsidiaries on 25 February 2026, which the World Nuclear Association links to **345 MWe of uprates across six reactors at Hatch, Vogtle and Farley**; the DOE's **UPRISE** programme, launched March 2026, offers up to 80% financing for uprate projects [25][26].
- Constellation's second-quarter 2026 deals include a **30 MW Dresden uprate** backed by Walmart's 176 MW PPA [5][6]; the **Clinton 30 MW uprate** is due 2029 and qualifies for the 45Y production tax credit [10]; Byron and Braidwood were cited for a further 158 MW (June 2025) [11].
- Talen committed to "jointly evaluate" Susquehanna uprates with Amazon, with no MW figure [21][22].
- Vistra's Meta PPA "covers energy, capacity and uprates" at its four PJM units (September 2026 report) [20].

I could not fetch the NRC's uprate tracking page, so the fleet-wide pending total is a data gap (§15). **My estimate** from the items above: roughly 400–600 MW of US uprates are funded or contracted for delivery by 2029–30, equal to about half of one large reactor.

### 2.4 Consolidation and license renewals

- **Constellation closed its acquisition of Calpine on 7 January 2026**, creating a 55 GW fleet [9]; as a condition, it agreed to sell PJM assets to LS Power, including the Brazos Valley plant for $860 million (about $1,420/kW), closing by year-end 2026 subject to the Department of Justice [5][83].
- **NextEra and Dominion announced a $67 billion all-stock merger on 18 May 2026** (74.5%/25.5%), creating the second-largest US nuclear generator with eight plants and about 11.7 GW; closing is expected in 12–18 months [18]. Dominion had said an SMR at North Anna, if pursued, would come in the mid-2030s [24].
- Constellation filed subsequent license renewals for **Ginna and Nine Mile Point 1 to 2049** (Q2 2026) [5].
- **New Jersey lifted its moratorium on new nuclear plants in April 2026**; PSEG (3,758 MW of nuclear) says any project needs "long-term federal financial support" and "hyperscaler offtake agreements", and its 11 GW data-center pipeline is expected to convert at only 10–20% [23].

### 2.5 The PPA wave: who has sold what to whom

| Seller | Buyer | Plant(s) | MW | Term | Start | Price signal | Source |
|---|---|---|---|---|---|---|---|
| Constellation | Microsoft | Crane (restart) | 835 | 20 yrs | 2027–28 | $98–115/MWh (analyst estimates) | [8][11] |
| Constellation | Meta | Clinton | 1,121 | 20 yrs | Jun 2027 | ≈$70/MWh; ≈$20/MWh premium to market (Jefferies) | [10][11] |
| Constellation | Walmart and other investment-grade buyers | Dresden and fleet | 920 total; 890 existing + 30 uprate | avg 18.5 yrs | 2029–32 | not disclosed; "$20–50/MWh" uplift sensitivity | [5][6][7] |
| Talen | Amazon (AWS) | Susquehanna | up to 1,920 | to 2042 | ramp 2029–32 | $18B total; 2% escalators from 2028; up to $1.4B/yr | [21][22] |
| Vistra | Undisclosed (reported as AWS) | Comanche Peak | 1,200 | 20 + 20 yrs | late 2027 → full 2032 | not disclosed | [19][20] |
| Vistra | Meta | Four PJM units (Beaver Valley, Davis-Besse, Perry) | 2,600+ | 20 yrs | EBITDA from 2027 | "energy, capacity and uprates" | [20] (secondary; announcement date not verified) |
| NextEra | Google | Duane Arnold (restart) | 615 | 25 yrs | 2029 | not disclosed | [16] |

**My estimate:** about **9.2 GW** of US nuclear output is now under hyperscaler or large-corporate PPA. Of that, only the three restarts (2.25 GW) are new supply; 7 GW is existing output moved from merchant markets to contracts. The critical engineering point: these deals do not add electrons to the grid, they change who pays for them, and FERC has insisted they stay grid-connected ("front-of-the-meter") after rejecting the original behind-the-meter Susquehanna arrangement in November 2024 [21][95].

---

## 3. New large reactors: the AP1000 programme and the export pipeline

### 3.1 The US government–Westinghouse structure

- **28 October 2025 term sheet** [27]: the US government arranges financing and permitting for at least $80 billion of Westinghouse reactors; in return it receives a participation interest of **20% of cash distributions above $17.5 billion** once reactors worth $80 billion reach final investment decision; if Westinghouse is valued at $30 billion or more in an IPO on or before January 2029, the government may require the IPO, and its interest converts into a five-year warrant for 20% of public value minus $17.5 billion.
- **24 June 2026 DOE conditional commitment** [28]: **$17.5 billion of loans for long-lead items for up to ten AP1000s** (five two-unit projects); each project needs $1 billion of equity before drawing; Westinghouse holds letters of intent with **seven** potential utility partners with identified sites; the DOE says the financing can pull schedules forward "by up to three years", against the executive-order goal of ten large reactors under construction by 2030.
- **Standard plant**: Westinghouse filed Revision 20 of the AP1000 design control document in April 2026, making Vogtle 4 the US reference plant, and targets NRC approval within 2026 [32][96]. Candidate sites with existing or lapsed combined licenses: William States Lee (South Carolina), Turkey Point 6–7 (Florida), V.C. Summer (needs a new application) and Fermi America's Texas site [32].
- **IPO**: confidential S-1 filed July 2026 [30]; Bloomberg (18 September 2026) reports a target valuation above $50 billion with Citi and Goldman leading and a public filing as soon as October 2026 [31]. Cameco's 49% was bought in 2023 at an enterprise value of about $7.9–8.2 billion [29][30]. Westinghouse "supports over 50%" of the world's reactors and grew adjusted EBITDA 30% in 2025 [29].

**What this means for engineers:** the government has removed the financing objection for long-lead components, which is exactly where the lead time lives (forgings and pumps, §8). It has not removed the utility's construction-risk objection: each utility must still put up $500 million of equity per project and carry a first-of-a-fleet schedule. Constellation's CEO said on 13 August 2026 that "there's nothing right now that I would describe as imminently on the horizon for investment in new nuclear" [7].

### 3.2 Vogtle as the cost anchor

Vogtle 3 and 4 (2 × 1,117 MWe) entered commercial operation on 31 July 2023 and 29 April 2024 [32]. The World Nuclear Association cites a total project cost of **$30.34 billion as of May 2022** [25], i.e. about **$13,600/kW (my estimate)**; later press figures above $35 billion are widely cited but I did not verify them (§15). The DOE's "three years off delivery" claim [28] and Westinghouse's standard-plant filing [32] are both attempts to attack the two causes of Vogtle's overrun — an incomplete design at first concrete and an untrained supply chain.

### 3.3 Fermi America (NASDAQ:FRMI) — listed, but not yet a nuclear company

Fermi's Project Matador in Carson County, Texas proposes four AP1000s inside an "11 GW" energy-and-AI campus. The NRC docketed parts 1 and 2 of its combined license application on 9 September 2025 and expected the remainder in 2026 [33]; the project joined the NRC's environmental-impact-statement pilot in March 2026 (headline only) [98]. Fermi listed on 1 October 2025 [80]. Its second quarter 2026 showed a $25.8 million net loss, $91.7 million of cash, $520 million of debt, a $431 million 5% convertible due 2031, three Siemens SGT6-5000F gas turbines delivered in July 2026 (up to 728 MW simple-cycle) and a 15-year, 222 MW lease with TensorWave worth about $6.5 billion [34]. The stock closed at **$4.03 on 2 October 2026** (52-week range $3.92–36.99; market value $2.58 billion) [80]. Reading: this is a gas-and-real-estate story with a nuclear option; the AP1000s are a 2032-plus event by the company's own framing (headline only) [84].

### 3.4 Exports: real, slow, and state-financed

| Project | Vendor | Units | Status (date) | Cost | First power | Source |
|---|---|---|---|---|---|---|
| **Poland, Lubiatowo-Kopalino** (PEJ) | Westinghouse–Bechtel | 3 × AP1000, 3,750 MWe | Construction licence application March 2026; **main EPC commercial terms agreed 23 Sep 2026**, remaining EPC negotiations by year-end; building permit 2027 | **$52 billion** (European Commission estimate); Poland authorised ~$15.8 billion state capital; 70% debt | First concrete Q4 2028; units 2036/2037/2038 | [35][99][100] |
| **Bulgaria, Kozloduy 7–8** | Westinghouse + Hyundai E&C | 2 × AP1000 | Engineering contract (Nov 2024) **extended 14 months** in April 2026 to re-analyse "price, the value of the electricity they produce and construction schedules"; FID expected H2 2026 | not disclosed | not set | [36] |
| **Czechia, Dukovany 5–6** | KHNP / Doosan | 2 × APR1000 | Contract signed May 2025 after EDF's legal challenge; up to 4 units incl. Temelín; Doosan Škoda Power turbine island | ≈ CZK 200 billion (~$9 billion) per unit | 2036 | [38] |
| **France, EPR2** (EDF) | EDF / Framatome | 6 × EPR2 (Penly, Gravelines, Bugey) | FID targeted end-2026; construction start 2027 | **€72.8 billion** for six (2020 money), ≈ €12.1 billion per unit; state loan ≥ 50%, 40-year CfD | Penly 1 in **2038** (was 2035) | [37] |
| **UK, Wylfa** | Rolls-Royce SMR | 3 × 470 MWe | Contract signed 13 Apr 2026; £2.6 billion allocated; National Wealth Fund loan up to £599 million; FID 2029 | n/d | post-2030 | [39] |
| **Czechia** | Rolls-Royce SMR | up to 6 units / 3 GW | ČEZ holds 20% of Rolls-Royce SMR (Oct 2024) | n/d | 2030s | [39][101] |

**Cost per kW (my estimates):** Poland ≈ $13,900/kW including financing; EPR2 ≈ €7,250/kW in 2020 euros before financing; Dukovany ≈ $8,500/kW. None of these will deliver before 2036. For the data-center question they matter only as **supply-chain load**: every one of them draws on the same three forges and the same pump lines as the US AP1000 programme (§8).

---

## 4. Small modular and advanced reactors: licensing status, dates, customers and money

The table below is the heart of this report. "First power" is the developer's own target unless stated; my view follows in §4.2.

| Developer (listing) | Design | Licensing status (date) | Realistic first power | Capital / cost signal | Customers and offtake | Financing | Sources |
|---|---|---|---|---|---|---|---|
| **GE Vernova Hitachi** (NYSE:GEV) | BWRX-300, 300 MWe BWR | **Darlington 1 licence to construct Apr 2025; construction under way; licence-to-operate application Mar 2026** (Canada). **TVA Clinch River construction permit issued Sep 2026** after 14 months, "four months ahead of schedule". Blue Energy (Texas) filed a construction-permit application Sep 2026 | Darlington end-2030; Clinch River "previously 2032", no firm date | Darlington CAD 6.1B unit 1 + CAD 1.6B common = **CAD 7.7B**; four units **CAD 20.9B** (2024 dollars incl. interest) → **≈ CAD 17,400/kW (my estimate)** | OPG (Ontario); TVA; Synthos (Poland); Blue Energy | OPG rate base; TVA + $400M DOE grant | [40][41] |
| **NuScale** (NYSE:SMR; Fluor stake) | US460, 77 MWe modules | US460 standard design approved 2025 (background). No construction permit application in the US | Early 2030s at best (my view) | n/d | **ENTRA1/TVA "up to 6 GW" framework — non-binding without a PPA (15 Sep 2026)**; TVA board SMR allocation review expected "next month"; RoPower Romania 6 modules advanced to next phase | $1.0B cash and investments (31 Mar 2026) | [42][43] |
| **TerraPower** (private) | Natrium, 345 MWe sodium-cooled + salt storage to 500 MWe | **NRC Part 50 construction permit 4 Mar 2026**, first non-LWR commercial permit in 40+ years; UK GDA step 1 accepted Feb 2026 | **2030–31** (construction completion Feb 2031) | **≈ $4B** (50% DOE ARDP up to $2B) → **≈ $11,600/kW (my estimate)**, first-of-a-kind | PacifiCorp (Kemmerer 1); **Meta framework for up to 8 plants**; Utah MOU; Evergy (Kansas) | $2.2B+ private since 2022 (Gates, SK, ArcelorMittal, KHNP, Meta) | [56] |
| **X-energy** (NASDAQ:XE; IPO 24 Apr 2026 at $23) | Xe-100, 80 MWe HTGR, TRISO | **Dow Seadrift (4 × 80 MWe): NRC environmental FONSI May 2026; safety review due Nov 2026**, commission decision thereafter. TRISO-X fuel plant: SNM licence; vertical construction in Oak Ridge (2026) | Seadrift early 2030s (company: "first reactor delivery by the early 2030s") | ARDP estimate up to **$2.4B** for Seadrift → **≈ $7,500/kW (my estimate, stale)** | **Dow** (Seadrift); **Amazon / Energy Northwest** up to 12 units (Washington); Centrica (UK) | $1.02B IPO; Amazon ~$500M (2024); Ares 26%; $700M Series D (Nov 2025, headline) | [52][53][104] |
| **Kairos Power** (private) | KP-FHR, fluoride-salt-cooled pebble-bed, TRISO | Hermes 1 test reactor permit (2023); **completion deadline extended to 30 Apr 2029** (13 May 2026); **Hermes 2 (50 MWe) ground-broken 17 Apr 2026**, first power-producing Gen IV permit | Hermes 2 late 2020s/2030 (my view); 500 MW Google fleet 2030–35 | n/d | **Google** (500 MW fleet by 2035; Hermes 2 output to TVA) | DOE ARDP; Google | [54][55] |
| **Oklo** (NYSE:OKLO) | Aurora, 75 MWe sodium-cooled fast reactor, metallic HALEU | NRC denied first COLA Jan 2022 for "lack of information"; readiness assessment 2025; phased COLA (dates not public); **DOE pathway**: Aurora-INL NSDA approved 17 Mar 2026; A3F fuel plant PDSA Nov 2025; **Groves isotope test reactor critical 5 Aug 2026** (DOE pilot, Texas) | **Aurora-INL commercial operation 2028** (company); first isotope revenue early 2027; A3F fuel plant 2027 | 2026 capex guidance $400–500M | "≈ 15 GW order book": **Switch** master agreement (12 GW, headline), **Meta 1.2 GW**, Equinix, Diamondback LOI, Wyoming Hyperscale LOI | **$3.0B** cash and securities (30 Jun 2026) after $1.9B of at-the-market equity in H1 2026 | [44][45][46][47][48][49] |
| **NANO Nuclear** (NASDAQ:NNE) | KRONOS MMR, HTGR microreactor | **Construction permit application accepted 18 May 2026** (University of Illinois); environmental review spring 2027, safety evaluation early fall 2027; construction H2 2027 | 2029–30 (my view) | n/d | University of Illinois (demonstration); no commercial offtake disclosed | equity raises; $839M market value | [50][80] |
| **Terrestrial Energy** (NASDAQ:IMSR, via SPAC 2025) | IMSR, 390 MWe molten-salt | NRC accepted principal-design-criteria topical report Q4 2025; DOE pilot (TETRA) and fuel-line pilot (TEFLA) awards; Texas A&M RELLIS site selected | "early 2030s" | n/d | Texas A&M; Ameresco; Westinghouse supply contract | $298M cash (31 Dec 2025) | [51] |
| **Holtec** (private; IPO suspended) | SMR-300 PWR | Two units planned at Palisades for power by 2031 | 2031+ | n/d | Palisades site | $825–900M IPO pulled 16 Sep 2026; DOE loan guarantee for Palisades | [12][14][15] |
| **Westinghouse AP300** | 300 MWe PWR | UK generic design assessment under way; **Community Nuclear Power** plans four units at Teesside | "by 2030" (company claim, headline) — I treat as 2032+ | n/d | Community Nuclear Power (UK) | Westinghouse | [86] (headline only) |
| **Rolls-Royce SMR** (LSE:RR 70%+; ČEZ 20%) | 470 MWe PWR | UK selected Jun 2025; **Wylfa contract 13 Apr 2026**; FID 2029 | 2032–34 (my view) | £2.6B allocated; £599M NWF loan | GBN (UK); ČEZ | UK state | [39] |
| **Aalo Atomics** (private; Microsoft-backed) | Aalo-X 10 MWe sodium; Aalo Pod 50 MW | **Aalo-X critical 4 Jul 2026** at INL (DOE pilot) | Pod: awaits NRC authorisation | n/d | Data-center co-location demonstration planned | venture | [58] |
| **Valar Atomics / Antares / Deployable Energy** (private) | Ward 250 (HTGR, TRISO); Mark-0 (heat-pipe, TRISO); Unity (HTGR) | Critical 18 Jun / 4 Jun / 1 Jul 2026 — zero- or low-power | n/a | n/d | none commercial | venture | [57][59] |
| **Radiant, Last Energy, Deep Fission, Natura, NuCube** (private; Deep Fission reportedly OTC-listed — unverified) | Kaleidos 1 MWe; PWR-5; Gravity 15 MWe; MSR-1; NuSun | Pilot-program selections; **not critical as of 2 Jul 2026** | n/a | n/d | n/d | venture | [57] |
| **Newcleo** (private, Italy/France) | lead-cooled fast reactor | not researched in this session | n/a | n/d | n/d | n/d | data gap |

### 4.1 Reading the DOE Reactor Pilot Program honestly

The programme asked for criticality by 4 July 2026. Four companies made it (Antares, Valar, Deployable Energy, Aalo) and Oklo followed on 5 August 2026 [46][57][58]. All five were **zero-power or low-power tests** — Valar's Ward 250 ran at 10 kWt after a 100 kWt design rating [57]; Oklo's Groves is a 15 MWt pool-type isotope reactor "to produce isotopes" [45][46]. The achievement is real: it shows that a DOE authorisation pathway can go from design to fuelled criticality in under a year (Oklo: 229 days [47]). It is not evidence about cost, grid-scale operation or NRC licensing of a commercial power plant. Oklo's own commercial target for Aurora-INL remains 2028 [47], and its 2026 cash burn guidance rose to $120–150 million of operating cash plus $400–500 million of capital spending [47].

### 4.2 My view on realistic first-power dates for the US

| Project | Developer target | My view | Why |
|---|---|---|---|
| Clinch River BWRX-300 | 2032 (earlier), no firm date | 2032–33 | TVA still negotiating with partners after the permit [40] |
| Natrium Kemmerer 1 | 2030–31 | 2031–32 | first-of-a-kind sodium plant; HALEU from four parallel tracks, none yet at scale [56] |
| Xe-100 Seadrift | early 2030s | 2032–33 | permit decision not before late 2026; TRISO-X plant still in construction [53][103] |
| Hermes 2 | late 2020s | 2030 | ground broken April 2026; Hermes 1 slipped to 2029 [54][55] |
| Aurora-INL | 2028 | 2029–30 | NRC pathway timing unpublished; Centrus HALEU deliveries from 2029 [47] |
| NuScale first US module | not stated | 2033+ | no construction permit application; framework non-binding [43] |

**My estimate:** advanced-reactor electricity actually sold to US data centers before 31 December 2030 is below 0.5 GW.

---

## 5. Policy: what has been done, what it changes and what it cannot change

### 5.1 Executive orders and NRC reform

- **Executive Order 14300** (May 2025) caps NRC decisions at **18 months for new reactor licences and 12 months for renewals**, enforced through fee-recovery limits [60]. The NRC announced a reorganisation into three business lines (new reactors, operating reactors, materials and waste) on 4 February 2026, to be in place by end-September 2026 [60].
- Results: TerraPower's permit was finished in 18 months (planned 27) [60]; Clinch River in about 14 months [40]; Long Mott (Dow/X-energy) planned at 18.5 months [60].
- **Rulemaking**: Part 53 (the optional risk-informed framework for advanced reactors) final on 27 March 2026; microreactor proposed rule 30 March 2026, final 16 September 2026; further final rules September–November 2026 [60].
- **The ADVANCE Act** (signed July 2024) reduced advanced-reactor fees and set the review-efficiency mandate the executive order then tightened (background; not re-verified this session).

### 5.2 Money

- **Loan Programs Office**: $26.5 billion to Southern Company (25 Feb 2026) with uprates attached; UPRISE uprate financing (Mar 2026); $17.5 billion conditional supply-chain loans for ten AP1000s (23–24 Jun 2026); $1.9 billion Duane Arnold (8 Sep 2026); Palisades guarantee up to $1.5 billion [14][25][26][28].
- **ARDP**: up to $2 billion for Natrium and a 50/50 share of up to $2.4 billion for Xe-100 [53][56].
- **HALEU**: DOE's $900 million Centrus contract plus $170 million of options [74]; three allocation rounds of legacy HALEU to TRISO-X, Kairos, Radiant, Westinghouse, TerraPower (Apr 2025), Antares, Standard Nuclear, Natura (Aug 2025), NASA and Radiant again (Jul 2026) [62][63]; quantities undisclosed.
- **States**: Texas's $350 million Advanced Nuclear Development Fund opened 9 April 2026 with applications due 14 May 2026; only Dow/X-energy and Fermi/Texas Tech met the "docketed by 1 December 2026" test at launch [67]. New York's NYPA issued an RFQ for developers of at least 1 GW on 1 June 2026, funded $40 million of workforce training, hired former NRC chair Christopher Hanson, and expects a master plan by end-2026 under a "5 GW backbone" goal [66].

### 5.3 Trade

- **Russian LEU**: the Prohibiting Russian Uranium Imports Act took effect 11 August 2024; waivers are available only until **1 January 2028**; the ban runs to 2040 [64]. Centrus received waivers for 2024–25 (18 Jul 2024) and for 2026–27 deliveries (4 Aug 2025) [64][65]. The US imported 71.7% of its LEU, 24–27% from Russia, before the ban (NucNet, July 2026) [74].
- **Section 232 critical minerals** (uranium included): proclamation of 15 January 2026 imposed **no tariff**, directed negotiations with a 180-day report, and reserved minimum import prices as a future remedy [61]. There is therefore no tariff on Canadian or Kazakh uranium as of 2 October 2026 (my reading of [61]).

### 5.4 What policy cannot fix

Policy has shortened licensing (done), provided debt (done) and signalled demand (done). It cannot create a fourth Generation III+ forge before about 2030, cannot make HALEU appear before Centrus's 2029 capacity, and cannot force a utility board to sign a $10 billion construction contract. The PJM market monitor's opposition to Crane's interconnection waiver [2] and FERC's rejection of behind-the-meter arrangements at Susquehanna [21] show that even restarts face regulatory friction at the grid level.

---

## 6. Fuel cycle I: uranium mining and the price regime

### 6.1 Prices

| Indicator | Level | Date | Source |
|---|---|---|---|
| U₃O₈ spot (UxC/TradeTech average per Cameco) | **$89.63/lb** | 30 Sep 2026 | [68] |
| U₃O₈ long-term | **$96.50/lb** — record, above the 2008 high of $95 | 30 Sep 2026 | [68][70] |
| Spot, Jan 2026 (year's high month-end) | $94.28/lb | 31 Jan 2026 | [68] |
| Spot, Nov 2025 (recent low) | $75.80/lb | 30 Nov 2025 | [68] |
| Term contracting volume 2026 | 42.2 million lb by 15 Sep 2026, about 3% below 2025 pace; 1H 2026 32.5 Mlb vs 27.0 Mlb | Sep 2026 | [69][70] |
| Spot volume 2026 | 38.6 million lb across 377 transactions by 15 Sep, +12% YTD, "largely attributable to SPUT" | Sep 2026 | [69] |
| Sprott Physical Uranium Trust holdings | **81.697 million lb**, no additions in September | 30 Sep 2026 | [70] |
| Yellow Cake plc holdings | ≈ 24.4 million lb | 30 Sep 2026 | [70] |

The term price has risen every month since October 2025 ($85.00) [68], while spot has oscillated in an $84–95 band. A term price above spot is unusual and tells you that producers will not sign long contracts at spot — Cameco's new market-related contracts carry floors "in the high $70s per pound and ceilings around $160, both escalated" [72]. Yet utilities are described as having "sticker shock" and being "reluctant to contract in any meaningful way" [69]. **My reading:** the uranium market is in a stand-off, not a squeeze; the data-center narrative has not yet changed utility fuel-buying behaviour, because no new reactor that would need fuel is under construction in the US before 2030 other than Natrium (HALEU) and Clinch River (LEU, ~2032).

### 6.2 Producers

| Company | 2026 guidance / status | Cost signal | Price (2 Oct 2026 close unless stated) | Market value | Source |
|---|---|---|---|---|---|
| **Kazatomprom** (LSE:KAP) | 1H 2026 production 13,291 tU (100%), +9%; **2026 guidance unchanged at 27,500–29,000 tU (100%)**, 14,500–15,500 tU attributable; sales 19,500–20,500 tU; realised price $67.88/lb (+16%); inventory 8,245 tU (+23%); **TQZ sulphuric-acid plant delayed to Q3 2027–Q1 2028**; Russia supplies ~20% of Kazakh acid and a year-end Russian export ban could cut ~3 Mlb (~4%) from 2027 output (TD Cowen via [69]) | C1 cash cost raised to $25.50–27.00/lb; AISC $39.00–40.50/lb | **$64.60** (GDR, London) | $12.99B; trailing P/E 15.9×; source forward P/E 10.7×; yield 4.1% | [69][71][80] |
| **Cameco** (NYSE:CCJ) | 2026 production 19.5–21.5 Mlb; McArthur River 10.0–11.5 Mlb vs 17.5 Mlb licensed share; Cigar Lake 9.5–10.0 Mlb; Inkai 4.2 Mlb; Q2 deliveries 7.1 Mlb; adjusted EPS $0.13 vs $0.28 consensus; contract book ≈ 230 Mlb U + 83 million kgU UF₆; avg 28 Mlb/yr committed 2026–30 | n/d | **$85.18** | $37.09B; trailing P/E 148×; source forward P/E 58× | [72][80] |
| **NexGen** (NYSE:NXE) | Rook I (Saskatchewan) received CNSC licence for site preparation and construction in March 2026 (headline only); construction start summer 2026 (headline) | n/d | $8.99 (2:58 PM EDT, 2 Oct) | $5.94B | [80][90] |
| **Denison** (NYSE American:DNN) | Phoenix ISR mine construction under way (quote-page note) | n/d | $2.60 (10:23 AM EDT, 2 Oct) | $2.30B | [80] |
| **Uranium Energy** (NYSE American:UEC) | trailing revenue $37.3M (−44%) | n/d | $9.30 | $4.61B | [80] |
| **Energy Fuels** (NYSE American:UUUU) | trailing revenue $105.8M (+62%); uranium plus rare earths and mineral sands | n/d | $10.73 | $2.68B | [80] |
| **Paladin** (ASX:PDN) | Langer Heinrich ramp (not re-verified) | n/d | A$9.83 (18 Sep 2026, stale) | A$4.42B | [80] |
| **enCore, Ur-Energy, Boss, Deep Yellow** | not researched this session (search quota) | — | — | — | data gap |

**Where is the bottleneck?** Not at the mine before 2030: Kazatomprom alone has 8,245 tU of inventory [71] and the two financial holders sit on 106 million lb [70]. The constraint is **willingness to sign** at $95+/lb term, which the term price says is being tested. The structural issue is 2028–2035, when Kazakh acid, Cameco's under-utilised McArthur River licence and Rook I decide whether supply meets a fleet that, globally, is growing (14 AP1000s under construction, mostly in China [32]).

---

## 7. Fuel cycle II: conversion and enrichment — where the West is short

### 7.1 Conversion

Conversion turns yellowcake into uranium hexafluoride (UF₆), the gas that centrifuges need. Western capacity is three plants: Cameco's Port Hope (Ontario; 12,500 tU/yr, with 13–14 million kgU of 2026 UF₆ deliveries guided) [72], Honeywell/ConverDyn's Metropolis (Illinois) and Orano's Tricastin (France). Price indicators at end-August 2026 were about **$65/kgU spot and $55.50/kgU term for North American conversion** according to a social-media relay of TradeTech data [73] — I could not reach a primary price page (UxC's public page served 2017 data), so treat these as **unverified**. For scale, UxC's public price page — which served only February 2017 data when fetched on 2 October 2026 — showed North American conversion at $5.85/kgU then [121]. The tenfold rise is the clearest price evidence anywhere in the chain that Western buyers are paying to avoid Rosatom; Cameco is the only listed pure beneficiary (Fuel Services segment).

### 7.2 Enrichment: the real gate for advanced reactors

| Supplier | Plant | Status (date) | Capacity | Source |
|---|---|---|---|---|
| **Urenco USA** | Eunice, New Mexico | Ground-breaking for +2.1 million SWU (about +50%); >7 million SWU by 2036; licence allows 10 million SWU; Urenco global 17.2 million SWU/yr; **HALEU at Capenhurst (UK) operational by 2031** | LEU; HALEU 2031 | [76] |
| **Centrus** | Piketon, Ohio | 16-centrifuge HALEU demonstration cascade completed 900 kg in mid-June 2026 (1,900+ kg cumulative); **$900M DOE contract (+$170M options) signed 3 Jul 2026**; cascade to run commercially; **new capacity "by 2029"**; Geiger Brothers chosen as construction contractor; first new centrifuge from the Oak Ridge factory by end-2026; hiring 175+ at Piketon and 100+ at Oak Ridge; 2026 capital deployment $350–500M | HALEU now at demonstration scale; LEU/HALEU expansion 2029+ | [74][75] |
| **Orano** | Oak Ridge, Tennessee (planned) | DOE enrichment award (part of a $2.7B programme, headline only) | LEU | [76] (not detailed) |
| **General Matter** | Paducah, Kentucky | leasing 100 acres at the former gaseous diffusion site | LEU/HALEU, 2030s | [76] |
| **Global Laser Enrichment** (Silex/Cameco) | Paducah | NRC licence application July 2025; significant construction 2027; completion 2030; re-enriches depleted tails | 2030 | [76] |

Price indicators at end-August 2026: **spot SWU about $200 and term about $183** (unverified relay) [73], against $47/SWU in early 2017 on the same stale UxC public page [121]. Centrus's backlog is **$4.5 billion to 2040**, of which $3.7 billion is LEU and $3.0 billion is contingent LEU/HALEU commitments ($2.4 billion under definitive agreements); it signed a "first-of-a-kind, large-scale commercial HALEU supply agreement" in Q2 2026 and an enrichment contract with X-energy in August 2026 [75][76]. The company's trailing revenue is $474 million; 2026 guidance is $450–500 million [75][80].

**Engineering reading.** Every HALEU reactor in §4 — Natrium, Xe-100, Hermes, Aurora, KRONOS, the pilot microreactors — depends on either DOE legacy material or Centrus's Piketon expansion in 2029. TerraPower's four-track plan (Centrus enrichment, Framatome metallisation, GNF fabrication, ASP Isotopes from 2028) [56] is a map of how thin the chain is. The Russian waivers end 1 January 2028 [64]; Western LEU capacity additions (Urenco Eunice, Orano) are sized to replace Russian LEU for the existing fleet, not to supply dozens of SMRs. **HALEU is the binding constraint for advanced reactors through at least 2030**, and the only listed company that owns the US capability is Centrus.

---

## 8. Fuel fabrication, advanced fuels, components and the single-source map

### 8.1 Fabrication

- **Light-water fuel** (the existing fleet, AP1000, BWRX-300, NuScale, Holtec, Rolls-Royce) is made by Westinghouse (Columbia, SC), Framatome (Richland, WA) and Global Nuclear Fuel (Wilmington, NC). Adequate capacity; the issue is enriched feed, not fabrication. NuScale expanded its Framatome partnership for "accelerated fuel delivery" (May 2026) [42].
- **TRISO** is made by: BWXT (Lynchburg; it "supported the first advanced nuclear reactor criticality milestone" — the Reactor Pilot Program fuel) [78]; **TRISO-X** (X-energy, Oak Ridge; NRC special nuclear material licence; building under construction, milestone 5 September 2026) [53][102][103]; **Standard Nuclear** (Oak Ridge; "the nation's only independent manufacturer of TRISO fuel"; IPO 16 July 2026 at $15, $150 million raised; trailing revenue $7.5 million) [77][80]; Kairos (pebbles with Los Alamos) [62].
- **Metallic HALEU fuel**: Oklo's A3F fuel-fabrication facility (DOE PDSA approved Nov 2025; startup planned 2027) [47][48]; TerraPower via Framatome metallisation (first "pucks" Nov 2025) and a GNF-Americas plant ($200 million+) [56]; Centrus–Oklo deconversion partnership [44].
- **Lightbridge** (NASDAQ:LTBR) metallic LWR fuel — not researched this session (data gap).

### 8.2 Reprocessing and recycling

The May 2025 executive orders direct the DOE to pursue fuel recycling (background). Oklo was selected on 26 May 2026 for advanced talks under DOE's **Surplus Plutonium Utilization Program** [49], and its "Pluto" plutonium-fuelled fast reactor is a pilot-program selection with no public update [44][57]. Orano (La Hague) remains the only industrial reprocessor in the West; Curio (private) was not researched this session. **My reading:** recycling will not supply measurable fuel to US reactors before the mid-2030s; it matters as a licensing and narrative option for Oklo rather than as near-term economics.

### 8.3 Heavy components and the single-source map

| Component | Who can make it | Capacity / lead-time evidence | Listed owner | Source |
|---|---|---|---|---|
| **Reactor pressure vessel and steam-generator forgings (Gen III+ scale)** | Doosan Enerbility (17,000-tonne press, 540-tonne ingots); Japan Steel Works (14,000-tonne, 600-tonne ingots, "default supplier"); China First Heavy Industries (15,000-tonne, domestic focus). No US forge; Europe's largest is 12,000 tonnes | "a single forge produces on the order of four reactor vessels a year once it fitted in around other work" | KRX:034020; TSE:5631 | [79] |
| **Reactor coolant pumps (AP1000: four per unit)** | Curtiss-Wright (Cheswick, PA) | 12–16 pumps a year (three to four reactors); 2007–16 qualification cycle for sixteen pumps; **$80M multi-year expansion committed July 2026** | NYSE:CW | [79] |
| **Large nuclear components, naval reactors, TRISO, isotopes, services** | BWXT (Lynchburg, Mount Vernon, Cambridge Ontario); Kinectrics acquired (services); Precision Components Group acquired July 2026 for a US commercial-nuclear manufacturing footprint; mPower SMR licensed to Applied Atomics | Backlog **$8.4B (+40%)**; naval long-lead material contract $1.3B over five years | NYSE:BWXT | [78] |
| **Turbine islands for AP1000/APR1000** | Doosan Škoda Power (Dukovany); GE Vernova and Mitsubishi for AP1000 steam turbines (background) | n/d | KRX:034020; NYSE:GEV; TSE:7011 | [38] |
| **HALEU** | Centrus only (US); Urenco 2031 | first new capacity 2029 | NYSE American:LEU | [74][76] |
| **TRISO** | BWXT, TRISO-X, Standard Nuclear | first-of-a-kind plants | BWXT; XE; STDN | [77][78][103] |
| **Radiation measurement and reactor instrumentation** | Mirion (and Framatome, Westinghouse) | trailing revenue $1.02B | NYSE:MIR | [80] |
| **Vacuum/condensing equipment, naval and nuclear** | Graham Corp | trailing revenue $261M | NYSE:GHM | [80] |

**Who owns the monopoly?** For a US AP1000 fleet the answer is uncomfortable: the vessel comes from Korea or Japan, the pumps from one plant in Pennsylvania, the control-rod drives and reactor internals from Westinghouse's own shops and Doosan, and the HALEU — if any advanced reactor is built alongside — from one plant in Ohio. The $17.5 billion DOE loan [28] is a direct admission that the forge and pump slots must be bought years before first concrete. Doosan is the only listed company that benefits from every Western large-reactor programme at once (AP1000 forgings, APR1000 for Czechia, NuScale and X-energy module work by reputation — the SMR contracts were not verified this session).

---

## 9. Economics: what nuclear electricity costs, what data centers pay, and how much of the load nuclear can serve

### 9.1 Capital cost per kW (sourced figures; my arithmetic)

| Project type | Evidence | $/kW (**my estimate**) |
|---|---|---|
| Restart — Crane | $1.6B capital for 835 MW [8] | ≈ $1,900 |
| Restart — Palisades | DOE guarantee up to $1.5B for 800 MW (loan, not total cost) [14] | ≈ $1,900 (loan basis) |
| Restart — Duane Arnold | $1.9B loan for 615 MW [16] | ≈ $3,100 (loan basis) |
| Uprate | not sourced; industry range | $2,000–4,000 (unverified) |
| AP1000 — Vogtle 3&4 | $30.34B (May 2022) for 2,234 MW [25] | ≈ $13,600 (higher in later estimates, unverified) |
| AP1000 — Poland | $52B for 3,750 MW incl. financing [35] | ≈ $13,900 |
| EPR2 — France | €12.1B per 1,670 MW unit (2020 euros, pre-financing) [37] | ≈ €7,250 |
| APR1000 — Dukovany | ≈ $9B per ~1,050 MW unit [38] | ≈ $8,500 |
| BWRX-300 — Darlington | CAD 20.9B for 1,200 MW incl. interest; first unit CAD 7.7B incl. common works [41] | ≈ CAD 17,400 (fleet); ≈ CAD 25,700 (first unit incl. shared infrastructure) |
| Natrium — Kemmerer 1 | ≈ $4B for 345 MW, half DOE [56] | ≈ $11,600 (≈ $5,800 private) |
| Xe-100 — Seadrift | ≤ $2.4B for 320 MW, 50/50 DOE (2020-era estimate) [53] | ≈ $7,500 (stale) |
| Gas combined cycle (for comparison) | not sourced in this report | ≈ $2,500–3,000 (my assumption; turbine prices covered in a separate report) |

### 9.2 Levelized cost (my estimates, simple annuity method)

Method: levelized capital cost = capital × capital recovery factor ÷ annual MWh per kW (8.06 MWh/kW at a 92% capacity factor), plus operating cost. Capital recovery factor at 8% over 40 years = 0.084; at 4% (government-arranged debt) over 60 years = 0.044; at 8% over 20 years (restart life) = 0.102. Operating cost of an existing US plant assumed at $30/MWh (fuel plus operations and maintenance; industry average, not verified this session), $35/MWh for first-of-a-kind advanced plants.

| Case | Capital | Levelized capital | Operating | **Total $/MWh (my estimate)** |
|---|---|---|---|---|
| Restart, 20-year life, 8% | $1,900/kW | $24 | $30 | **≈ $55** |
| Restart with DOE-loan terms (Duane Arnold basis), 20 yrs | $3,100/kW | $39 | $30 | **≈ $70** |
| AP1000 at Vogtle cost, 8%/40 yrs | $13,600/kW | $142 | $30 | **≈ $170** |
| AP1000 at Vogtle cost, 4%/60 yrs (government financing) | $13,600/kW | $75 | $30 | **≈ $105** |
| AP1000 "nth-of-a-kind" target, 8%/40 | $8,000/kW | $83 | $30 | **≈ $115** |
| AP1000 target, 4%/60 | $8,000/kW | $44 | $30 | **≈ $75** |
| BWRX-300 at Darlington fleet cost (≈ US$12,500/kW at 0.72 CAD/USD, FX unverified), 8%/40 | $12,500/kW | $130 | $30 | **≈ $160** |
| Natrium, full cost, 8%/40 | $11,600/kW | $121 | $35 | **≈ $155** |
| Natrium, private share only, 8%/40 | $5,800/kW | $60 | $35 | **≈ $95** |
| Gas combined cycle, $2,750/kW, 80% capacity factor, $4.50/MMBtu gas, 6.4 MMBtu/MWh | — | $35 | $29 fuel + $5 O&M | **≈ $70** (assumptions unverified) |

Against these numbers the observed PPA prices make sense: **$98–115/MWh for Crane** [11] covers a restart handsomely and would roughly cover a government-financed AP1000 at Vogtle cost; **≈ $70/MWh for Clinton** [11] is a premium over Illinois market revenue but could not finance any new reactor. No data-center buyer has yet signed a PPA that would pay for a merchant-financed new large reactor or SMR at demonstrated costs (my reading of the evidence). This is the core economic fact behind the executive orders' financing provisions and the UPRISE uprate programme: the state is lowering the capital recovery factor because customers will not pay $150+/MWh.

### 9.3 How much 2028–30 data-center load can nuclear plausibly serve?

- US data-center consumption was about 176 TWh in 2023 (4.4% of US electricity) and was projected at 325–580 TWh in 2028 (6.7–12%) by the Lawrence Berkeley National Laboratory report of 19 December 2024 (figures widely reported; the report body was not re-read this session) [91]. The DOE's framing — tripled over the past decade, to "double or triple again by 2028" — is consistent [24].
- **Contracted nuclear:** ≈ 9.2 GW (§2.5) ≈ 74 TWh a year at 92% → **13–23% of projected 2028 data-center consumption** (my estimate). But only the restarts and uprates are net new.
- **Net-new nuclear by end-2030:** restarts 2.25 GW + uprates ≈ 0.4–0.6 GW + advanced demonstrations ≤ 0.5 GW ≈ **3 GW ≈ 24 TWh a year** (my estimate). Against an increase in data-center consumption of 150–400 TWh (2023 to 2028) or more by 2030, net-new nuclear covers **about 4–8% of the increment**; the rest is gas, grid imports, batteries and curtailed or delayed load.
- Nothing in the licensing calendar changes this before 2031–33 (§4.2). The honest statement for 2030 is: **nuclear is a pricing and attribution story for hyperscalers, and a supply story only for the three restart sites.**

---

## 10. Engineering transitions: what changes, when, who gains and who loses

| Transition | What changes | When | Gains | Loses |
|---|---|---|---|---|
| **Behind-the-meter → front-of-the-meter nuclear PPAs** | FERC rejected the Susquehanna behind-the-meter arrangement (Nov 2024) [95]; Talen–Amazon restructured as grid-connected retail supply via PPL (Jun 2025) [21]; Crane needed FERC waivers to inherit interconnection rights [2][3] | done 2025–26 | Transmission owners and utilities (PPL, Exelon); incumbents with interconnection rights | The "island data center on a reactor" idea; co-location speculators |
| **Merchant nuclear → contracted nuclear** | ≈ 30% of Constellation's clean baseload under long contract [82]; Vistra's PJM fleet contracted to Meta [20] | 2025–32 ramp | Earnings visibility for CEG, VST, TLN; lower cost of capital | Upside to power-price spikes (Constellation guides 30–35% of 2029 earnings as "enhanced", i.e. price-dependent [6]) |
| **Restart → uprate → new build sequencing** | Restarts first (2026–29), uprates with DOE UPRISE financing (2027–30), large reactors with $17.5B long-lead loans (orders 2026–27, concrete 2028–29, power 2033–35) | staged | Fleet owners; forgers and pump makers get orders 5–7 years before power | SMR developers who need the same forgings and HALEU |
| **Government as co-investor** | 20% participation above $17.5B in Westinghouse [27]; DOE equity-like terms in loans; Texas and New York funds [66][67] | 2025–29 | Westinghouse owners (Cameco, Brookfield) at IPO | Public IPO investors who buy after the warrant and the LOIs are priced in (Forbes' concern) [29] |
| **HALEU from legacy stocks → commercial enrichment** | DOE allocations (2025–27) bridge to Centrus 2029 and Urenco 2031 [63][74][76] | 2029–31 | Centrus; Urenco (private) | Any advanced reactor needing a second or third core before 2030 |
| **Russian LEU exit** | Waivers end 1 Jan 2028 [64]; Urenco Eunice +2.1M SWU; Orano Oak Ridge; GLE 2030 [76] | 2028–30 | Urenco, Orano, Centrus, Cameco (conversion) | Utilities with uncovered 2028–30 needs; TENEX |
| **Pilot-program criticality → NRC commercial licensing** | DOE-authorised test reactors (5 critical) must still obtain NRC licences for commercial sale [57][58] | 2027–30 | Companies with both DOE and NRC tracks (Oklo, X-energy, Kairos) | Microreactor start-ups whose only asset is a DOE test criticality |
| **Rate-base and state ownership of SMR first units** | OPG (Darlington), TVA (Clinch River), NYPA (1 GW), GBN (Wylfa) carry first-of-a-kind risk [39][40][41][66] | 2026–33 | Vendors (GE Vernova, Rolls-Royce) with cost-plus or state-backed contracts | Merchant SMR models (NuScale/ENTRA1) without a rate-base buyer |

---

## 11. What is priced and what is not

| Narrative | Evidence | Verdict |
|---|---|---|
| "AI needs nuclear; developers with GW-scale 'order books' are the way to play it" | Oklo's ≈ 15 GW order book is letters of intent and master agreements [49]; NuScale's 6 GW is non-binding [43]; neither has a construction permit; Oklo trailing revenue $1.2M; NuScale $10.7M [80] | **Was fully priced in late 2025; now 60–85% below highs** [80]. Still not cheap on any cash-flow basis; the market is pricing optionality on 2028–30 licences |
| "Restarts are easy money" | Palisades slipped from late 2025 to past March 2026 to an open date after the September 2026 fuel-handling incident [12][13][85] | **Partly priced**: Holtec's IPO pulled [15]; Constellation's Crane H2 2027 target still intact [7] |
| "The US will build ten AP1000s by 2030" | EO goal is "under construction by 2030" [28]; LOIs with seven partners; zero binding orders; first Polish concrete Q4 2028 [35] | **Not in utility earnings; in Cameco via Westinghouse** — Bloomberg's $50B IPO talk [31] implies Cameco's 49% ≈ $24.5B, about two-thirds of Cameco's $37.1B market value (my estimate) |
| "Uranium is the bottleneck" | Term price record $96.50 [68] but 106 Mlb in two financial vehicles [70], Kazatomprom inventory +23% [71], utilities "reluctant to contract" [69] | **Priced in the term price, not in equities**; miners have de-rated 25–50% from highs [80]. Real scarcity is 2028–35, not 2026–27 |
| "HALEU is solved by DOE allocations" | Allocation quantities undisclosed; Centrus new capacity 2029; Urenco 2031 [63][74][76] | **Under-appreciated constraint**; Centrus is the only listed owner and has fallen 70% from its high [80] |
| "Forgings and pumps are a commodity" | Three forges, ~4 vessels a year each; 12–16 RCPs a year [79] | **Not priced**: Doosan's forward P/E reflects gas turbines and Korean flows, not US nuclear slots; Curtiss-Wright's nuclear content is a minority of a defense company |
| "Nuclear PPAs earn a large green premium" | $70–115/MWh; ≈ $20/MWh over Illinois market for Clinton [11]; Constellation's own "$20–50/MWh" sensitivity [7] | **Priced** into CEG/VST/TLN consensus; the premium is real but modest |
| "SMR IPOs will fund the build-out" | X-energy −37% from IPO, Standard Nuclear −15%, Holtec pulled [15][52][77][80] | **Window shut**; private rounds (TerraPower, Kairos) and state balance sheets fund the next three years |
| "Executive orders fix licensing" | TerraPower 18 months, Clinch River 14 months [40][60] | **Delivered and priced**; the gating item is now capital and components |
| "Data centers will co-locate at reactors" | FERC twice rejected the Susquehanna behind-the-meter ISA; Talen moved to front-of-meter [21][95] | **Narrative ahead of regulation**; grid-connected PPAs are the model |

---

## 12. Ranked shortlist of listed companies

Prices are 2 October 2026 closes from stockanalysis.com unless stated [80]; consensus ratings and average targets are from the same pages (high/low targets were not displayed, a data gap). "Source fwd P/E" is that page's next-fiscal-year figure.

### 1. Constellation Energy (NASDAQ:CEG)
- **Products in focus:** 21+ GW of US nuclear (largest fleet), the Crane restart (835 MW, H2 2027), Clinton (Meta, 1,121 MW), Dresden/Byron/Braidwood/Clinton uprates, and a 55 GW combined fleet after Calpine.
- **Why the product matters:** it is the only company that can deliver net-new nuclear megawatt-hours to a hyperscaler before 2028 (Crane) and the largest seller of clean-firm attributes.
- **Why this company:** 920 MW of new 18.5-year contracts in one quarter; ≈ 30% of clean baseload contracted; 93% capacity factor; 2026 guidance raised to $11.50–12.50; base EPS growth "over 20%" to 2029 with 30–35% of 2029 earnings price-dependent [5][6][82].
- **Dated evidence:** Calpine closed 7 Jan 2026 [9]; FERC CIR transfer 1 Jun 2026 [3]; NRC fuel amendment Q2 2026 [5]; final EA/FONSI 25 Sep 2026 [4]; Ginna and Nine Mile Point 1 renewals filed [5].
- **Risks and thesis-breakers:** Crane slips past 2027 (Palisades precedent); PJM capacity price caps or FERC changes to co-location rules; ERCOT weakness (Q2 2026) [83]; power-price reversal hits the "enhanced" earnings; Brazos Valley sale requires DOJ approval [5].
- **Catalysts:** Q3 results 6 Nov 2026 [80]; Crane fuel load and synchronisation (2027); PJM 2028/29 base residual auction results (from 30 Jun 2026) [2]; Clinton early-site-permit decision before 15 Mar 2027 [10].
- **Valuation (2 Oct 2026):** $257.49; market value $91.2B; trailing P/E 24.9×; **21.5× the $12.00 midpoint of 2026 guidance (my estimate)**; source fwd P/E 20.8×; consensus Buy (22 analysts), average target $342.98; 52-week range $228.63–412.70 [80].

### 2. Cameco (NYSE:CCJ; TSX:CCO)
- **Products in focus:** uranium (McArthur River/Key Lake, Cigar Lake, Inkai), UF₆ conversion at Port Hope, and 49% of Westinghouse (AP1000, fuel, services for >50% of the world's reactors).
- **Why the product matters:** Cameco sits in the three Western layers that are actually short — term uranium, conversion, and the reactor-vendor seat in the $80B government programme.
- **Why this company:** the only listed route to Westinghouse before an IPO; McArthur River runs at 10–11.5 Mlb against a 17.5 Mlb licensed share, i.e. latent volume [72]; contract book 230 Mlb with floors in the high $70s [72].
- **Dated evidence:** Westinghouse term sheet 28 Oct 2025 [27]; $17.5B DOE loans 24 Jun 2026 [28]; confidential S-1 Jul 2026 [30]; Bloomberg $50B+ valuation report 18 Sep 2026 [31]; Q2 2026 adjusted EPS $0.13 vs $0.28 consensus [72].
- **Risks and thesis-breakers:** Westinghouse IPO delayed or priced far below $50B (Holtec precedent) [15]; the government's 20% participation above $17.5B dilutes upside [27]; Kazakh JV (Inkai) and Kazakh acid issues [71]; term price stalls as utilities refuse to contract [69].
- **Catalysts:** Westinghouse public S-1 "as soon as October" 2026 [31]; first binding AP1000 project agreement (2026–27); Q3 results (early Nov 2026); Poland EPC signature by year-end 2026 [35].
- **Valuation (2 Oct 2026):** $85.18; market value $37.1B; trailing P/E 148×; source fwd P/E 58×; consensus Buy (21), average target $126.85; 52-week range $77.70–135.24 [80]. **My estimate:** at a $50B Westinghouse valuation, Cameco's stake ≈ $24.5B, about 66% of its market value.

### 3. BWX Technologies (NYSE:BWXT)
- **Products in focus:** naval reactor components (sole supplier), TRISO fuel (Lynchburg), large commercial components (Cambridge, Ontario; new US footprint via Precision Components Group), Kinectrics services, Project Pele microreactor, medical isotopes (stake retained after sale).
- **Why the product matters:** BWXT is the only North American company with both the heavy-component shops and the TRISO line that advanced reactors need, and it is the fuel supplier to the pilot-program reactors [78].
- **Why this company:** backlog $8.4B (+40% YoY); 2026 revenue ≈ $3.8B; adjusted EBITDA $662–672M; non-GAAP EPS raised to $4.70–4.80; commercial segment revenue +72% (Kinectrics); medical business sold for up to $800M with 20% retained [78].
- **Dated evidence:** Q2 2026 results 3 Aug 2026 [78]; naval long-lead material contract $1.3B over five years [78]; Precision Components acquisition July 2026 [78].
- **Risks and thesis-breakers:** naval budget timing; commercial nuclear orders (BWRX-300, Natrium) slower than hoped; TRISO demand depends on HALEU; multiple compression after a 44% drawdown from the high [80].
- **Catalysts:** Q3 results (Nov 2026); BWRX-300 Darlington component awards; TVA Clinch River construction contract; Pele operation at INL (2026–27, not verified this session).
- **Valuation (2 Oct 2026):** $134.86; market value $12.4B; trailing P/E 34.9×; **28.4× the $4.75 midpoint of 2026 guidance (my estimate)**; source fwd P/E 27.1×; consensus Buy (18), average target $217.69; 52-week range $131.86–241.82 [80].

### 4. Vistra (NYSE:VST)
- **Products in focus:** Comanche Peak (2,425 MW, Texas) and four PJM reactors (Beaver Valley 1–2, Davis-Besse, Perry; ≈ 4 GW), plus 5.5 GW of Cogentrix gas and new Permian gas.
- **Why the product matters:** after Constellation, Vistra holds the largest merchant nuclear fleet available for data-center contracts, and has contracted most of it: 1,200 MW at Comanche Peak (late 2027 → 2032) and 2,600+ MW to Meta in PJM including uprates [19][20].
- **Why this company:** 2026 adjusted EBITDA guidance $6.8–7.6B; 2027 midpoint $7.4–7.8B excluding Cogentrix and Meta (≈ +$700M) [20]; $1B into Helix Digital Infrastructure with NVIDIA and KKR as preferred power provider [20].
- **Dated evidence:** Comanche Peak PPA 30 Sep 2025 [19]; Meta PPA and Cogentrix close reported Sep 2026 [20].
- **Risks and thesis-breakers:** the Meta deal's announcement date and terms were not verified from a primary release (data gap); ERCOT price weakness; gas-heavy mix dilutes the nuclear story; uprate scope undisclosed.
- **Catalysts:** Q3 results (early Nov 2026); Meta contract start (2027); Comanche Peak deliveries (late 2027); PJM auction outcomes.
- **Valuation (2 Oct 2026):** $140.02; market value $47.0B; trailing P/E 23.9×; source fwd P/E 13.6×; consensus Strong Buy (20), average target $212.79; 52-week range $132.66–217.10 [80].

### 5. Centrus Energy (NYSE American:LEU)
- **Products in focus:** LEU brokerage and supply (including TENEX-sourced material under waiver through 2027), the only US-owned HALEU enrichment cascade (Piketon), centrifuge manufacturing (Oak Ridge), HALEU deconversion with Oklo.
- **Why the product matters:** HALEU is the binding constraint for every advanced reactor in §4; Centrus is the only US company producing it [74].
- **Why this company:** $4.5B backlog to 2040; $3.0B of contingent LEU/HALEU commitments ($2.4B definitive); $900M DOE contract plus $170M options; $1.87B of cash; first new centrifuge by end-2026; X-energy enrichment contract (Aug 2026) [74][75][76].
- **Dated evidence:** DOE contract finalised 3 Jul 2026 [74]; Q2 results 5 Aug 2026 [75]; Russian waiver to end-2027 granted 4 Aug 2025 [65].
- **Risks and thesis-breakers:** 2028 Russian cut-off removes the LEU trading margin before Piketon's new capacity (2029) earns [64][74]; advanced-reactor delays shrink HALEU demand; equity dilution; execution on a $350–500M 2026 capital programme [75].
- **Catalysts:** first Oak Ridge centrifuge (Q4 2026); Piketon construction start (2027); further DOE HALEU/LEU task orders; Q3 results (Nov 2026).
- **Valuation (2 Oct 2026):** $139.27; market value $2.85B; trailing P/E 64×; source fwd P/E 57×; consensus Buy (19), average target $247.40; 52-week range $135.75–464.25 [80]. **My estimate:** enterprise value net of $1.87B cash is about $1B before debt (debt not verified), roughly 0.2× backlog.

### 6. Talen Energy (NASDAQ:TLN)
- **Products in focus:** Susquehanna (2 × BWR, ≈ 2.5 GW, Pennsylvania) with up to 1,920 MW contracted to Amazon to 2042; 13.1 GW total fleet after gas acquisitions.
- **Why the product matters:** the largest single hyperscaler nuclear contract, with 2% escalators from 2028 and up to $1.4B a year of revenue at full ramp [21].
- **Why this company:** after-tax cash flow per share targeted above $8 by 2030–32 (+50% vs 2026 guidance) [21]; $1.5B accelerated buyback [80]; joint Amazon evaluation of uprates and SMRs [22].
- **Dated evidence:** PPA restructured 12 Jun 2025 [21]; FERC history 2024–25 [95]; CEO transition announced 2026 [80].
- **Risks and thesis-breakers:** ramp depends on PPL transmission reconfiguration (spring 2026 and beyond) [22]; single-site concentration; leverage from gas acquisitions; CEO change.
- **Catalysts:** 2029 ramp milestones (840–1,200 MW) [21]; uprate announcement; Q3 results (Nov 2026).
- **Valuation (2 Oct 2026):** $320.77; market value $15.4B; trailing EPS −$4.05; source fwd P/E 10.7×; consensus Buy (17), average target $460.59; 52-week range $279.77–451.28 [80].

### 7. Curtiss-Wright (NYSE:CW)
- **Products in focus:** reactor coolant pumps (sole AP1000 supplier), nuclear valves and pumps for naval and commercial reactors, instrumentation.
- **Why the product matters:** 12–16 pumps a year is three to four AP1000s; the $17.5B DOE loan exists to buy exactly these slots early [28][79].
- **Why this company:** $80M Cheswick expansion committed July 2026 to shorten lead times [79]; defense base funds the nuclear option.
- **Dated evidence:** [79] (Aug 2026). The company's own 2026 nuclear order disclosures were not fetched (data gap).
- **Risks and thesis-breakers:** AP1000 orders fail to materialise; nuclear is a minority of revenue; valuation already full.
- **Catalysts:** first US AP1000 project agreement; Poland EPC signature (RCP orders follow); Q3 results (late Oct 2026).
- **Valuation (1 Oct 2026 close, latest shown):** $544.94; market value $20.1B; trailing P/E 37.5×; source fwd P/E 34.0×; consensus Buy, average target $786.25; 52-week range $521.66–808.16 [80].

### 8. Kazatomprom (LSE:KAP, GDR)
- **Products in focus:** about 40% of world uranium supply via in-situ recovery in Kazakhstan.
- **Why the product matters:** the marginal tonne of 2027–30 supply is Kazakh, and it is acid-constrained [71].
- **Why this company:** lowest-cost producer (AISC $39–40.50/lb vs a $96.50 term price) [68][71]; 4.1% yield; forward P/E ≈ 10.7× [80]; 1H 2026 production +9% [71].
- **Dated evidence:** 1H 2026 results 21 Aug 2026 [71]; TQZ acid plant delay to Q3 2027–Q1 2028 [71]; TD Cowen note on Russian acid (Oct 2026) [69].
- **Risks and thesis-breakers:** Kazakh state and Russian transit/acid dependence; cost inflation (C1 raised 8% in one half) [71]; sales lag production (inventory +23%) [71]; GDR liquidity and sanctions-adjacent risk.
- **Catalysts:** 2027 production guidance (usually late Jan/Feb); Q3 trading update (late Oct 2026); Russian acid export decision at year-end 2026 [69].
- **Valuation (2 Oct 2026):** $64.60; market value $12.99B; trailing P/E 15.9×; source fwd P/E 10.7×; yield 4.14%; no consensus target shown; 52-week range $47.80–93.80 [80].

### 9. Doosan Enerbility (KRX:034020)
- **Products in focus:** the world's largest nuclear forging press (17,000 tonnes), reactor vessels and steam generators (AP1000 since 2008; APR1400/APR1000), turbine islands via Doosan Škoda Power, plus gas turbines.
- **Why the product matters:** one of three Gen III+ forges on earth; every Western large reactor programme in §3 needs its slots [79].
- **Why this company:** KHNP's Dukovany contract (2 units, 2036) [38]; AP1000 supply history [79]; the DOE long-lead loan will buy Korean or Japanese forgings because no US forge exists [28][79].
- **Dated evidence:** [38] (May 2025), [79] (Aug 2026). SMR module contracts (NuScale, X-energy) and 2026 order intake were not verified this session.
- **Risks and thesis-breakers:** valuation (trailing P/E ≈ 300×; source fwd P/E ≈ 102×) driven by Korean retail flows and gas turbines; KRW; Korean politics around KHNP exports; gas-turbine cycle.
- **Catalysts:** US AP1000 forging orders (2026–27); Dukovany main contracts; Q3 results (Nov 2026).
- **Valuation (stale):** ₩81,700 at the 23 Sep 2026 close (Yahoo) [81]; ₩84,900 on 18 Sep 2026 (stockanalysis) [80]; market value ≈ ₩52–54 trillion; consensus Strong Buy (21), average target ₩125,361; 52-week range ₩57,000–139,200 [80]. **The 2 October 2026 close was not retrievable (data gap).**

### 10. GE Vernova (NYSE:GEV)
- **Products in focus:** BWRX-300 (Darlington under construction; Clinch River permitted Sep 2026; Blue Energy Texas application), Global Nuclear Fuel (with Hitachi/Toshiba), steam turbines for nuclear islands; nuclear is a small part of a gas-turbine and grid company.
- **Why the product matters:** the only SMR with a construction permit in both Canada and the US and a rate-base buyer in each [40][41].
- **Why this company:** first mover with OPG; TVA's $400M DOE grant; Poland (Synthos) and Estonia pipelines [40].
- **Dated evidence:** Darlington construction under way, licence-to-operate filed Mar 2026 [40]; Clinch River permit Sep 2026 [40].
- **Risks and thesis-breakers:** Darlington cost (CAD 20.9B for 1.2 GW) [41] limits replication; nuclear is immaterial to group earnings; the stock is priced for gas turbines (covered elsewhere).
- **Catalysts:** TVA construction decision; Darlington unit 1 milestones toward end-2030; Q3 results (late Oct 2026).
- **Valuation (2 Oct 2026):** $988.70; market value $263.3B; trailing P/E 28.3×; source fwd P/E 47.3× (2026 EPS inflated by a one-off gain, per a separate report); consensus Buy, average target $1,230.34; 52-week range $530.16–1,195.94 [80].

### 11. Mirion Technologies (NYSE:MIR)
- **Products in focus:** radiation detection and measurement, reactor instrumentation and dosimetry for new build, restarts and the fuel cycle.
- **Why the product matters:** every restart, uprate, new reactor and enrichment plant buys instrumentation; the business is recurring and vendor-agnostic.
- **Why this company:** trailing revenue $1.02B; Strong Buy consensus (11 analysts) [80]; a 52% drawdown from the high gives a source forward P/E of 24× [80]. Company-specific 2026 order data were not fetched (data gap).
- **Risks and thesis-breakers:** medical segment cyclicality; leverage; limited pricing power.
- **Catalysts:** Q3 results (early Nov 2026); restart instrumentation awards.
- **Valuation (2 Oct 2026):** $14.60; market value $3.64B; trailing P/E 165×; source fwd P/E 24.2×; consensus Strong Buy (11), average target $24.27; 52-week range $14.04–30.28 [80].

### 12. X-energy (NASDAQ:XE)
- **Products in focus:** Xe-100 high-temperature gas reactor (80 MWe), TRISO-X fuel plant in Oak Ridge, Dow Seadrift (4 units) and Amazon/Energy Northwest (up to 12 units).
- **Why the product matters:** the only listed advanced-reactor developer with (a) a construction-permit application through environmental review, (b) its own licensed fuel plant under construction and (c) two anchor customers, one industrial and one hyperscaler [53][102][103].
- **Why this company:** $1.02B IPO proceeds (Apr 2026); Amazon and Ares as holders; 2025 revenue ≈ $94M ex-grants (fuel and engineering), trailing $150M [52][80]; Centrus enrichment contract (Aug 2026) [76].
- **Dated evidence:** FONSI May 2026; safety review Nov 2026 [53]; TRISO-X milestone 5 Sep 2026 [103].
- **Risks and thesis-breakers:** net loss $449M trailing [80]; Seadrift cost well above the 2020 $2.4B estimate (likely; unverified); HALEU supply; dual-class control (founder holds 61% of Class B) [52].
- **Catalysts:** NRC safety evaluation (Nov 2026) and commission permit decision (late 2026–27); Texas fund award (2026); Energy Northwest site decision; first TRISO-X fuel (2027).
- **Valuation (2 Oct 2026):** $14.38 (IPO $23); market value $5.84B; trailing revenue $150M (≈ 39× sales, my estimate); EPS −$1.56; consensus Buy (9), average target $34.38; 52-week range $13.29–37.10 [80].

---

## 13. Also considered and rejected (one line each)

1. **Oklo (NYSE:OKLO)** — $6.67B market value on $1.2M of trailing revenue; Aurora commercial operation 2028 at best with unpublished NRC dates; Groves is an isotope test reactor [45][47][80]. Rejected on valuation and timeline.
2. **NuScale (NYSE:SMR)** — the only US-approved SMR design but no construction permit application, a non-binding 6 GW framework, trailing revenue $10.7M, UBS Sell at $6 [43][80]. Rejected: no binding order.
3. **NANO Nuclear (NASDAQ:NNE)** — $839M market value, revenue $214,000, construction permit review to late 2027, 36 employees [50][80]. Rejected: too early.
4. **Terrestrial Energy (NASDAQ:IMSR)** — $406M market value, $298M cash at year-end 2025, early-2030s target [51][80]. Watch for cash-backed value; rejected for lack of a licensing calendar.
5. **Standard Nuclear (NYSE:STDN)** — $2.0B market value on $7.5M revenue (267× sales, my estimate); TRISO demand depends on HALEU and on reactors not yet licensed [77][80]. Rejected on valuation.
6. **Fermi America (NASDAQ:FRMI)** — $91.7M cash, $520M debt, gas turbines on site, AP1000s a 2032+ event [34]. Rejected: a real-estate/gas financing story.
7. **Holtec (HNUC, unlisted)** — IPO suspended 16 Sep 2026; Palisades fuel-loading incident [13][15]. Not investable; watch the restart.
8. **Fluor (NYSE:FLR)** — the NuScale stake is being monetised and the group is an EPC business; forward P/E 15.4× [80]. Rejected as an indirect play.
9. **Graham Corp (NYSE:GHM)** — naval and nuclear condensers, $1.0B market value, source fwd P/E 51× (30 Sep 2026 intraday) [80]. Rejected on price.
10. **Japan Steel Works (TSE:5631)** — the "default" Western vessel forge, ¥544B market value, forward P/E 24.6× (24 Sep 2026, stale) [80]. Attractive single-source position; rejected only because the 2 Oct close and the nuclear order book could not be verified this session.
11. **Rolls-Royce (LSE:RR)** — Wylfa contract signed, but SMR is immaterial to a £121B aero-engine company; P/E 41× [39][81]. Rejected on relevance.
12. **NextEra / Dominion (NYSE:NEE / NYSE:D)** — 11.7 GW of nuclear after the merger and the Duane Arnold restart, but regulated-utility economics cap the upside [16][18]. Rejected for this theme.
13. **PSEG (NYSE:PEG)** — 3,758 MW of nuclear, no hyperscaler PPA, pipeline conversion 10–20% [23]. Rejected: no catalyst.
14. **Uranium Energy, Energy Fuels, NexGen, Denison, Paladin, enCore, Ur-Energy, Boss, Deep Yellow** — pre-production or small producers trading at $2.3–5.9B on little revenue; the data-center thesis does not need their pounds before 2030, and the term price is already a record [68][80]. Rejected on timing; NexGen (Rook I licensed, March 2026) is the development-stage name to watch.
15. **Sprott Physical Uranium Trust (TSX:U.UN; OTC SRUUF)** — the cleanest way to own the commodity (81.7 Mlb) [70][108]; not a company, so outside the shortlist.
16. **Lightbridge, Curio, Newcleo, Deep Fission, Last Energy, Radiant, Aalo, Valar, Antares** — private or not researched; no listed exposure verified (data gap).

---

## 14. Dated catalyst calendar (October 2026 – 2028)

| Date | Event | Why it matters | Source |
|---|---|---|---|
| Oct 2026 | Westinghouse public S-1 "as soon as October"; targeted valuation > $50B | Cameco (49%) and the government's 20% participation above $17.5B | [31] |
| Oct 2026 | TVA board review of SMR allocation (NuScale/ENTRA1) | first test of whether the 6 GW framework becomes a PPA | [43] |
| Oct–Nov 2026 | Q3 results: CEG (6 Nov), BWXT, LEU, CCJ, VST, TLN, OKLO (10 Nov), SMR (5 Nov) | contract additions, Crane schedule, Piketon progress | [80] |
| Nov 2026 | NRC safety-review recommendations for Dow/X-energy Long Mott (Seadrift); commission permit decision thereafter | second US advanced-reactor construction permit | [53] |
| Late 2026 | Palisades: fuel-assembly retrieval license amendment, resumption of fuel load, cold shutdown, criticality | first US restart; March 2027 supply deadline | [13] |
| By 31 Dec 2026 | Poland EPC negotiations completed; EDF EPR2 final investment decision; Brazos Valley sale closes; New York nuclear master plan; Texas fund awards; first Centrus centrifuge from Oak Ridge; NRC AP1000 Revision 20 approval target | export orders, Constellation portfolio, HALEU | [5][32][35][37][66][75] |
| 1 Dec 2026 | Texas fund eligibility cut-off: NRC-docketed application required | which Texas projects get state money | [67] |
| Year-end 2026 | Russian decision on sulphuric-acid exports | Kazatomprom 2027 output (−3 Mlb risk) | [69] |
| Jan–Feb 2027 | Kazatomprom 2027 guidance; Cameco 2027 guidance | supply response to record term price | [71][72] |
| Early 2027 | Oklo first isotope revenue; Aurora fuel plant (A3F) startup during 2027 | Oklo's first cash flows | [47] |
| 15 Mar 2027 | Clinton early site permit expires unless extended | Constellation new-build optionality | [10] |
| Mar 2027 | Palisades contractual power-supply deadline | Holtec/co-op contract | [13] |
| Spring–fall 2027 | NANO KRONOS environmental assessment and safety evaluation; construction H2 2027 | first microreactor permit | [50] |
| Jun 2027 | Meta–Clinton PPA begins | Constellation contracted revenue | [10] |
| H2 2027 | **Crane Clean Energy Center returns to service** | first new nuclear MWh for a hyperscaler | [7] |
| Late 2027 | Comanche Peak PPA deliveries begin | Vistra | [19] |
| Q3 2027–Q1 2028 | Kazatomprom TQZ acid plant commissioning | Kazakh supply growth | [71] |
| 1 Jan 2028 | **Russian LEU waivers end** | enrichment market tightens; Centrus LEU trading margin at risk | [64] |
| Before Jan 2028 | NRC licensing actions for Duane Arnold | NextEra restart on track for Q1 2029 | [17] |
| 2028 | Oklo Aurora-INL commercial operation target; Rook I construction; first HALEU TRISO fuel from TRISO-X; ASP Isotopes HALEU facility | advanced-reactor fuel chain | [47][56] |
| Q4 2028 | Poland first nuclear concrete | first Western AP1000 since Vogtle | [35] |
| Q1 2029 | Duane Arnold restart; Talen–Amazon ramp 840–1,200 MW | third restart; Talen cash flow | [16][21] |
| 2029 | Centrus new HALEU/LEU capacity; Constellation Clinton uprate; Rolls-Royce SMR FID; Hermes 1 completion deadline (30 Apr 2029) | HALEU commercial supply; UK SMR | [10][39][55][74] |
| Jan 2029 | Deadline for the US government's right to require a Westinghouse IPO at ≥ $30B | Cameco/Brookfield | [27] |
| End-2030 | Darlington BWRX-300 unit 1 first power (Canada); Crane full grid deliverability | first Western SMR; PJM | [3][41] |

---

## 15. Data gaps, caveats and unverified items

1. **Search quota.** The session's web-search allowance ran out during the fuel-cycle work; the components, Vistra–Meta, Dominion, enCore/Ur-Energy/Boss/Deep Yellow, Lightbridge, Curio, Newcleo, Orano Oak Ridge, Mirion and Curtiss-Wright company-specific items were covered from already-identified pages or not at all.
2. **Prices and consensus.** stockanalysis.com and Yahoo Finance pages were the only price sources. Several showed intraday rather than closing timestamps (Denison 10:23 EDT, NexGen 14:58 EDT, Standard Nuclear 11:08 EDT on 2 Oct 2026) or older dates (Curtiss-Wright and Terrestrial 1 Oct; Graham 30 Sep; Sprott 30 Sep; Doosan 18/23 Sep; Japan Steel Works 24 Sep; Paladin 18 Sep). High and low analyst targets were not displayed; only averages. Forward P/E figures labelled "source" use that site's next-fiscal-year convention, not my own calculation.
3. **Conversion and SWU prices** ($65/$55.50 per kgU; $200/$183 per SWU, end-August 2026) come from a social-media relay of TradeTech indicators [73] and could not be checked against a primary page (UxC's public page served 2017 data).
4. **Vistra–Meta PPA** (2,600+ MW, 20 years) is from a secondary article of 10 September 2026 [20]; the announcement date, plants and pricing were not verified from Vistra's release.
5. **Vogtle total cost** is quoted at $30.34B as of May 2022 [25]; later, higher figures were not verified. **Constellation's $1.6B Crane capital** is from February 2025 guidance [8]; a DOE loan for Crane reported in the press in late 2025 was not verified.
6. **Uprate totals.** The NRC's uprate tracking page could not be fetched; the 345 MWe Southern Company figure and the UPRISE programme are from the World Nuclear Association's country page [25] and the LPO listing [26], not the LPO releases themselves.
7. **HALEU quantities** allocated by DOE, and total legacy HALEU available, are not public in the sources read [62][63].
8. **Oklo NRC schedule.** The phased combined-license submission dates and NRC review schedule were not found on Oklo's regulatory page [48]; "Aurora-INL 2028" is the company's target [47].
9. **Darlington per-kW arithmetic** uses the four-unit CAD 20.9B figure (2024 dollars including interest and contingency) [41]; the CAD/USD rate used (0.72) is my assumption.
10. **LCOE table (§9.2)** uses my own capital recovery factors, a $30–35/MWh operating cost and a gas combined-cycle capital cost that were not sourced in this report.
11. **Data-center load (§9.3)** uses the widely reported LBNL December 2024 figures (176 TWh in 2023; 325–580 TWh in 2028); the report body could not be re-read, only its landing page [91].
12. **Doosan SMR contracts, Japan Steel Works nuclear order book, Curtiss-Wright 2026 nuclear orders, Mirion 2026 orders** — not verified.
13. **Deep Fission's listing status, Newcleo, Last Energy, Radiant commercial status** — not researched.
14. **Westinghouse AP300 "four units by 2030" in the UK** is a company/press claim (headline only) [86]; I treat 2032+ as realistic.
15. **ADVANCE Act** details are background knowledge (signed July 2024) and were not re-verified this session.
16. **The Fermi America "AP1000 by 2032" statement** is a headline-only reference [84].
17. **Holtec's DOE loan guarantee** amount ($1.5B) is from the IPO terms summary [14], not the DOE release.

---

## 16. Sources

1. "Three Mile Island restart project 'ahead of schedule'", World Nuclear News, 28 Feb 2025, https://www.world-nuclear-news.org/articles/us-reactor-restart-project-ahead-of-schedule
2. "PJM market monitor opposes waivers for Constellation's Three Mile Island nuclear restart", Utility Dive, 23 Apr 2026, https://www.utilitydive.com/news/pjm-market-monitor-constellations-nuclear-crane-waiver/818216/
3. "NRC and FERC boosts for Crane Clean Energy Center project", World Nuclear News, 8 Jun 2026, https://www.world-nuclear-news.org/articles/ferc-waiver-clears-way-for-crane-clean-nuclear-interconnection
4. "Constellation Energy Generation, LLC; Christopher M. Crane Clean Energy Center; Environmental Assessment and Finding of No Significant Impact", Federal Register, 25 Sep 2026 (headline only), https://www.federalregister.gov/documents/2026/09/25/2026-19603/constellation-energy-generation-llc-christopher-m-crane-clean-energy-center-environmental-assessment
5. "Constellation Reports Second Quarter 2026 Results" (press release relayed by Stocktitan), 6 Aug 2026 (secondary), https://www.stocktitan.net/news/CEG/constellation-reports-second-quarter-2026-rtppfjewi2nw.html
6. "Constellation Q2 2026 slides: nuclear contracts drive 20% growth outlook", Investing.com, 6 Aug 2026 (secondary), https://www.investing.com/news/company-news/constellation-q2-2026-slides-nuclear-contracts-drive-20-growth-outlook-93CH-4843690
7. "Constellation Energy (CEG) Q2 2026 Earnings Call Transcript", The Motley Fool, 13 Aug 2026 (secondary transcript), https://www.fool.com/earnings/call-transcripts/2026/08/13/constellation-energy-ceg-q2-2026-earnings-call-transcript/
8. "Constellation Races to Revive Crane Nuclear Plant Amid Tight Timelines, Market Shifts", POWER, 26 Feb 2025, https://www.powermag.com/constellation-races-to-revive-crane-nuclear-plant-amid-tight-timelines-market-shifts/
9. "Constellation Completes Calpine Transaction, Powering America's Clean Energy Future", Constellation Energy, 7 Jan 2026, https://www.constellationenergy.com/news/2026/01/constellation-completes-calpine-transaction-powering-americas-clean-energy-future.html
10. "Constellation Outlines Nuclear Expansion Plans at Clinton Site as Meta Partnership Strengthens", POWER, 27 Aug 2025, https://www.powermag.com/constellation-outlines-nuclear-expansion-plans-at-clinton-site-as-meta-partnership-strengthens/
11. "Meta-Constellation virtual PPA could be first of many deals for existing reactor output: experts", Utility Dive, 12 Jun 2025, https://www.utilitydive.com/news/meta-constellation-ppa-could-be-first-of-many-deals-for-existing-reactors/750567/
12. "Palisades: Restart projects, Holtec IPO, lawsuit dismissal—but no restart date", ANS Nuclear Newswire, 8 Jul 2026, https://www.ans.org/news/2026-07-08/article-8187/palisades-restart-projects-holtec-ipo-lawsuit-dismissal-but-no-restart-date/
13. "Incident pauses Palisades fuel loading; plant connected to switchyard", ANS Nuclear Newswire, 25 Sep 2026, https://www.ans.org/news/2026-09-25/article-8436/incident-pauses-palisades-fuel-loading-plant-connected-to-switchyard/
14. "Nuclear plant equipment provider Holtec Nuclear sets terms for $825 million IPO", Renaissance Capital, 8 Sep 2026 (secondary), https://www.renaissancecapital.com/IPO-Center/News/121530/nuclear-plant-equipment-provider-holtec-nuclear-sets-terms-for-825-million
15. "When Will Holtec Nuclear IPO? It Filed, Then Pulled a $900M Deal", Segmara, 27 Sep 2026 (secondary, relaying Bloomberg/Reuters), https://segmara.com/blog/when-will-holtec-nuclear-ipo
16. "DOE closes $1.9B loan to restart NextEra's Duane Arnold plant", Nuclear News Network, 9 Sep 2026 (secondary), https://www.nuclearnewsnetwork.com/news/doe-loan-duane-arnold-restart
17. "NRC shares Duane Arnold restart progress at public hearing", ANS Nuclear Newswire, 16 Apr 2026, https://www.ans.org/news/article-7942/nrc-shares-duane-arnold-restart-progress-at-public-hearing/
18. "NextEra, Dominion to merge in major utilities announcement", ANS Nuclear Newswire, 18 May 2026, https://www.ans.org/news/2026-05-18/article-8052/nextera-dominion-to-merge-in-major-utilities-announcement/
19. "Vistra secures long-term nuclear PPA from Comanche Peak nuclear plant", Power Engineering, 30 Sep 2025, https://www.power-eng.com/nuclear/vistra-secures-long-term-nuclear-ppa-from-comanche-peak-nuclear-plant/
20. "Beyond Meta and Nuclear: Inside Vistra's Real Power Play", Yahoo Finance (syndicated), 10 Sep 2026 (secondary), https://finance.yahoo.com/energy/articles/beyond-meta-nuclear-inside-vistra-120044566.html
21. "Talen, Amazon Launch $18B Nuclear PPA—A Grid-Connected IPP Model for the Data Center Era", POWER, 12 Jun 2025, https://www.powermag.com/talen-amazon-launch-18b-nuclear-ppa-a-grid-connected-ipp-model-for-the-data-center-era/
22. "New supply agreement expands Talen-Amazon partnership", World Nuclear News, 12 Jun 2025, https://www.world-nuclear-news.org/articles/new-supply-agreement-expands-talen-amazon-partnership
23. "PSEG CEO: Nuclear outlook for New Jersey improves on lifting of moratorium", Utility Dive, 6 May 2026, https://www.utilitydive.com/news/pseg-nuclear-new-jersey-earnings/819444/
24. "Virginia eyes nuclear to power booming data centers", Virginia Business, 2 Sep 2025, https://virginiabusiness.com/virginia-data-centers-nuclear-energy/
25. "Nuclear Power in the USA", World Nuclear Association, updated 29 Sep 2026, https://world-nuclear.org/information-library/country-profiles/countries-t-z/usa-nuclear-power
26. "LPO Press Releases" (listing), US Department of Energy Loan Programs Office, retrieved 2 Oct 2026, https://www.energy.gov/lpo/listings/lpo-press-releases
27. "Cameco and Brookfield establish transformational partnership with United States Government", Cameco, 28 Oct 2025, https://www.cameco.com/media/news/cameco-and-brookfield-establish-transformational-partnership-with-united-states
28. "US federal loan to jumpstart AP1000 reactor supply chain", World Nuclear News, 24 Jun 2026, https://www.world-nuclear-news.org/articles/us-federal-loan-to-jumpstart-ap1000-reactor-supply-chain
29. "Westinghouse IPO May Put Public Investors Last In The Nuclear Revival", Forbes (Jim Osman), 2 Aug 2026 (secondary opinion), https://www.forbes.com/sites/jimosman/2026/08/02/westinghouse-ipo-may-put-public-investors-last-in-the-nuclear-revival/
30. "Westinghouse launches IPO process", Nuclear Engineering International, 3 Aug 2026 (secondary), https://www.neimagazine.com/news/westinghouse-launches-ipo-process/
31. "Westinghouse said to seek over $50 billion valuation in planned IPO", Investing.com relaying Bloomberg, 18 Sep 2026 (secondary), https://ca.investing.com/news/stock-market-news/westinghouse-said-to-seek-over-50-billion-valuation-in-planned-ipo-4845332
32. "Westinghouse Files to Update AP1000 Design Certification, Make Vogtle Expansion the U.S. Reference Plant", POWER, 7 Apr 2026, https://www.powermag.com/westinghouse-files-to-update-ap1000-design-certification-make-vogtle-expansion-the-u-s-reference-plant/
33. "NRC accepts Fermi America's partial licence application", World Nuclear News, 9 Sep 2025, https://www.world-nuclear-news.org/articles/nrc-accepts-fermi-americas-partial-licence-application
34. "Fermi Announces Second Quarter 2026 Results and Delivers on All Five 90-Day Objectives" (press release relayed by Stocktitan), 13 Aug 2026 (secondary), https://www.stocktitan.net/news/FRMI/fermi-announces-second-quarter-2026-results-and-delivers-on-all-five-izbn8q0a05k0.html
35. "Westinghouse-Bechtel, Poland Agree on Main Terms for $52B Nuclear Plant", Engineering News-Record, 25 Sep 2026, https://www.enr.com/articles/63714-westinghouse-bechtel-poland-agree-on-main-terms-for-52b-nuclear-plant
36. "Contract Extension Agreed For Kozloduy Nuclear Project As Work Continues On Cost And Schedule", NucNet, 21 Apr 2026, https://www.nucnet.org/news/contract-extension-agreed-for-kozloduy-nuclear-project-as-work-continues-on-cost-and-schedule-4-2-2026
37. "EDF estimates EPR2 programme cost at EUR72.8 billion", World Nuclear News, 18 Dec 2025, https://www.world-nuclear-news.org/articles/edf-estimates-epr2-programme-costs-at-eur728-billion
38. "Dukovany inks KHNP deal despite EDF action", Nuclear Engineering International, 8 May 2025, https://www.neimagazine.com/news/dukovany-inks-khnp-deal-despite-edf-action/
39. "Contract signed for delivery of UK's first SMRs", World Nuclear News, 13 Apr 2026, https://www.world-nuclear-news.org/articles/contract-signed-for-delivery-of-uks-first-smrs
40. "NRC Construction Permit to TVA for BWRX-300", Neutron Bytes, 1 Oct 2026 (secondary blog), https://neutronbytes.com/2026/09/30/nrc-construction-permit-to-tva-for-bwrx-300/
41. "GEH BWRX-300 SMR Approved for Construction at OPG's Darlington Site", Neutron Bytes, 17 May 2025 (secondary blog), https://neutronbytes.com/2025/05/17/geh-bwrx-300-smr-approved-for-construction-at-opgs-darlingtion-site/
42. "NuScale Power Reports First Quarter 2026 Results", NuScale Power, 7 May 2026, https://www.nuscalepower.com/press-releases/2026/nuscale-power-reports-first-quarter-2026-results
43. "NuScale Power Advances Non-Binding 6 GW SMR Capacity Framework with TVA and ENTRA1", Market Ontology, 15 Sep 2026 (secondary), https://marketontology.com/events/2026-09-15/nuscale-power-advances-non-binding-6-gw-smr-capacity-framework-with-tva-and-entr
44. "Oklo provides updates on DOE, NRC approvals", ANS Nuclear Newswire, 19 Mar 2026, https://www.ans.org/news/2026-03-19/article-7855/oklo-provides-updates-on-doe-nrc-approvals/
45. "Oklo's Groves Reactor Achieves First Criticality in Under a Year", Oklo Inc., 6 Aug 2026, https://oklo.com/newsroom/news-details/2026/Oklos-Groves-Reactor-Achieves-First-Criticality-in-Under-a-Year/default.aspx
46. "Office of Nuclear Energy Celebrates Fifth Advanced Reactor Criticality", US DOE Office of Nuclear Energy, 6 Aug 2026, https://www.energy.gov/ne/articles/office-nuclear-energy-celebrates-fifth-advanced-reactor-criticality
47. "Oklo Q2 2026 slides: first criticality achieved, $3B liquidity", Investing.com, 7 Aug 2026 (secondary), https://www.investing.com/news/company-news/oklo-q2-2026-slides-first-criticality-achieved-3b-liquidity-93CH-4846923
48. "Regulatory", Oklo Inc. website, retrieved 2 Oct 2026, https://oklo.com/regulatory
49. "Oklo Inc.", Wikipedia, retrieved 2 Oct 2026 (secondary), https://en.wikipedia.org/wiki/Oklo_Inc.
50. "NANO Nuclear's KRONOS MMR Program Advances as U.S. NRC Initiates Formal Review Activities with University of Illinois Urbana-Champaign and NANO Nuclear Energy", GlobeNewswire (company release), 25 Jun 2026, https://www.globenewswire.com/news-release/2026/06/25/3317484/0/en/NANO-Nuclear-s-KRONOS-MMR-Program-Advances-as-U-S-NRC-Initiates-Formal-Review-Activities-with-University-of-Illinois-Urbana-Champaign-and-NANO-Nuclear-Energy.html
51. "Terrestrial Energy Announces Fourth Quarter and Full Year 2025 Results", Terrestrial Energy, 30 Mar 2026, https://ir.terrestrialenergy.com/news-releases/news-release-details/terrestrial-energy-announces-fourth-quarter-and-full-year-2025-0
52. "X-energy IPO raises $1 billion on Nasdaq debut", Yahoo Finance, 24 Apr 2026 (secondary), https://finance.yahoo.com/markets/stocks/articles/x-energy-ipo-raises-1-120808566.html
53. "X-energy gets federal environmental approval for Texas reactors", Canary Media, 18 May 2026, https://www.canarymedia.com/articles/nuclear/x-energy-gets-federal-approval-reactors
54. "Kairos Power Breaks Ground on Hermes 2 Demonstration Plant", Kairos Power, 17 Apr 2026, https://www.kairospower.com/updates/kairos-power-breaks-ground-on-hermes-2-demonstration-plant
55. "In the Matter of Kairos Power LLC; Hermes Test Reactor; Extension of Latest Date for Completion of Construction", Federal Register (NRC order of 13 May 2026), 18 May 2026, https://www.federalregister.gov/documents/2026/05/18/2026-09880/in-the-matter-of-kairos-power-llc-hermes-test-reactor-extension-of-latest-date-for-completion-of
56. "TerraPower's Kemmerer 1 Enters Construction: Timeline of the Natrium Project's Road to First Power", POWER, 23 Apr 2026, https://www.powermag.com/terrapowers-kemmerer-1-enters-construction-timeline-of-the-natrium-projects-road-to-first-power/
57. "The deadline arrives: Checking in on the Reactor Pilot Program", ANS Nuclear Newswire, 2 Jul 2026, https://www.ans.org/news/article-8178/the-deadline-arrives-checking-in-on-the-reactor-pilot-program/
58. "Microsoft-backed SMR firm Aalo achieves test reactor criticality as part of DOE program", Data Center Dynamics, 7 Jul 2026, https://www.datacenterdynamics.com/en/news/microsoft-backed-smr-firm-aalo-achieves-test-reactor-criticality-first-under-doe-pilot-program/
59. "Valar Atomics achieves criticality in DOE Reactor Pilot Program", World Nuclear News, 22 Jun 2026, https://www.world-nuclear-news.org/articles/valar-atomics-achieves-criticality-in-doe-reactor-pilot-program
60. "NRC Launches Major Reorganization as Licensing Deadlines and Reform Workload Intensify", POWER, 5 Feb 2026, https://www.powermag.com/nrc-launches-major-reorganization-as-licensing-deadlines-and-reform-workload-intensify/
61. "Trump Administration Announces Results of Critical Minerals Investigation Under Section 232 and Directs U.S. Officials to Initiate Negotiations", Covington & Burling, 22 Jan 2026, https://www.cov.com/en/news-and-insights/insights/2026/01/trump-administration-announces-results-of-critical-minerals-investigation-under-section-232-and-directs-us-officials-to-initiate-negotiations
62. "DOE selects first recipients of HALEU", World Nuclear News, 10 Apr 2025, https://www.world-nuclear-news.org/articles/doe-selects-first-recipients-of-haleu
63. "NASA and Radiant selected to receive HALEU", ANS Nuclear Newswire, 27 Jul 2026, https://www.ans.org/news/article-8246/nasa-and-radiant-selected-to-receive-haleu/
64. "Centrus receives uranium import waiver", World Nuclear News, 23 Jul 2024, https://www.world-nuclear-news.org/articles/centrus-receives-uranium-import-waiver
65. "Centrus Energy receives DOE waiver for Russian uranium imports through 2027", Investing.com (SEC filing summary), 19 Aug 2025 (secondary), https://www.investing.com/news/sec-filings/centrus-energy-receives-doe-waiver-for-russian-uranium-imports-through-2027-93CH-4200972
66. "Governor Hochul Announces Significant Steps in Development of at Least 1 GW of Nuclear Energy in Upstate New York", New York Power Authority, 1 Jun 2026, https://www.nypa.gov/News/Press-Releases/2026/20260601-nuclear
67. "Texas opens $350M in nuclear funding", ANS Nuclear Newswire, 9 Apr 2026, https://www.ans.org/news/2026-04-09/article-7920/texas-opens-350m-in-nuclear-funding/
68. "Uranium Price" (monthly spot and long-term indicators to 30 Sep 2026), Cameco, retrieved 2 Oct 2026, https://www.cameco.com/invest/markets/uranium-price
69. "Uranium Hits Record High While Nuclear Stocks Slide", OilPrice.com, 1 Oct 2026 (secondary), https://oilprice.com/Alternative-Energy/Nuclear-Power/Uranium-Hits-Record-High-While-Nuclear-Stocks-Slide.html
70. "The Month in U Inventory: Term Price Remains at a Record High in September", Holdco Markets, 1 Oct 2026 (secondary), https://www.holdcomarkets.com/post/the-month-in-u-inventory-term-price-reaches-a-record-high-in-september
71. "Kazatomprom announces 1H2026 Financial Results", Kazatomprom, 21 Aug 2026, https://www.kazatomprom.kz/en/media/view/Kazatomprom%20announces%201H2026%20Financial%20Results
72. "Cameco Q2 2026 slides highlight nuclear growth despite earnings miss", Investing.com, 31 Jul 2026 (secondary), https://www.investing.com/news/company-news/cameco-q2-2026-slides-highlight-nuclear-growth-despite-earnings-miss-93CH-4828494
73. John Quakes (@quakes99), X post relaying TradeTech and UxC August 2026 month-end indicators, c. 1 Sep 2026 (secondary; unverified), https://x.com/quakes99/status/2094695542769012832
74. "Centrus Finalises $900 Million HALEU Enrichment Contract With US DOE", NucNet, 3 Jul 2026, https://www.nucnet.org/news/centrus-finalises-usd900-million-haleu-enrichment-contract-with-us-doe-7-5-2026
75. "Centrus Reports Second Quarter 2026 Results", Centrus Energy, 5 Aug 2026, https://investors.centrusenergy.com/news-releases/news-release-details/centrus-reports-second-quarter-2026-results
76. "Panelists talk domestic enrichment expansion at Global 2026", ANS Nuclear Newswire, 21 Aug 2026, https://www.ans.org/news/article-8323/panelists-talk-domestic-enrichment-expansion-at-global-2026/
77. "Standard Nuclear Announces Pricing of its Initial Public Offering", Standard Nuclear, 15 Jul 2026, https://ir.standardnuclear.com/news-events/press-releases/detail/97/standard-nuclear-announces-pricing-of-its-initial-public-offering
78. "BWXT Q2 2026 slides: commercial surge drives guidance raise", Investing.com, 3 Aug 2026 (secondary), https://www.investing.com/news/company-news/bwxt-q2-2026-slides-commercial-surge-drives-guidance-raise-93CH-4832494
79. "The Reactor Isn't the Bottleneck. The Forge Is", Neutron Bytes, 24 Aug 2026 (secondary blog), https://neutronbytes.com/2026/08/24/the-reactor-isnt-the-bottleneck-the-forge-is/
80. stockanalysis.com quote pages (price, market value, trailing and forward P/E, consensus rating and average target), retrieved 2–3 Oct 2026 (secondary aggregator): https://stockanalysis.com/stocks/oklo/ ; /smr/ ; /ceg/ ; /leu/ ; /bwxt/ ; /nne/ ; /ccj/ ; /vst/ ; /tln/ ; /uuuu/ ; /uec/ ; /nxe/ ; /dnn/ ; /xe/ ; /cw/ ; /mir/ ; /stdn/ ; /imsr/ ; /frmi/ ; /gev/ ; /flr/ ; /ghm/ ; https://stockanalysis.com/quote/krx/034020/ ; https://stockanalysis.com/quote/tyo/5631/ ; https://stockanalysis.com/quote/lon/KAP/ ; https://stockanalysis.com/quote/asx/PDN/
81. Yahoo Finance quote pages for OKLO, 034020.KS and RR.L, retrieved 2 Oct 2026 (secondary aggregator), https://finance.yahoo.com/quote/OKLO/ ; https://finance.yahoo.com/quote/034020.KS/ ; https://finance.yahoo.com/quote/RR.L/
82. "3 Nuclear Power Stocks Worth Owning as the AI Power Crunch Builds", 24/7 Wall St., 1 Oct 2026 (secondary), https://247wallst.com/investing/2026/10/01/3-nuclear-power-stocks-worth-owning-as-the-ai-power-crunch-builds
83. "Constellation Energy's Q2 Earnings Absorbed a Weaker ERCOT Market. Here's What Happened to the Stock.", TIKR, 8 Aug 2026 (secondary), https://www.tikr.com/blog/constellation-energys-q2-earnings-absorbed-a-weaker-ercot-market-heres-what-happened-to-the-stock
84. "Fermi America, Westinghouse to Deploy AP1000 Reactors in Amarillo by 2032", Fermi America (headline only; date not verified), https://fermiamerica.com/fermi-america-westinghouse-ap1000-reactors-amarillo/
85. "Palisades nuclear plant restart plans pushed back to 'early 2026'", Michigan Public, 17 Dec 2025 (headline only), https://www.michiganpublic.org/environment-climate-change/2025-12-17/palisades-nuclear-plant-restart-plans-pushed-back-to-early-2026
86. "UK to get 4 Westinghouse AP300 nuclear reactors by 2030", Interesting Engineering (headline only; secondary), https://interestingengineering.com/innovation/uk-four-ap300-nuclear-smrs
87. "Oklo's Groves Isotope Test Reactor Reaches First Criticality", NucNet, 5 Aug 2026 (headline only), https://www.nucnet.org/news/oklo-s-groves-isotope-test-reactor-reaches-first-criticality-8-5-2026
88. "Federal Nuclear Regulator OKs TVA to Build First US Small Modular Reactor", Engineering News-Record, Sep 2026 (headline only), https://www.enr.com/articles/63737-federal-nuclear-regulator-oks-tva-to-build-first-us-small-modular-reactor
89. "Holtec aims for an up to $10.2B valuation for its IPO", Axios Pro, 8 Sep 2026 (headline only), https://www.axios.com/pro/climate-deals/2026/09/08/holtec-10b-valuation-ipo
90. "Commission issues a licence to NexGen Energy Ltd. authorizing site preparation and construction of its Rook I Project", Canadian Nuclear Safety Commission, Mar 2026 (headline only), https://www.canada.ca/en/nuclear-safety-commission/news/2026/03/commission-issues-a-licence-to-nexgen-energy-ltd-authorizing-site-preparation-and-construction-of-its-rook-i-project.html
91. "2024 United States Data Center Energy Usage Report" (landing page; figures widely reported, body not re-read), Lawrence Berkeley National Laboratory, 19 Dec 2024, https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report
92. "Westinghouse Establishes Standard AP1000 Plant for Fleet-Scale Deployment in U.S.", Westinghouse / Business Wire, 6 Apr 2026 (headline only), https://www.businesswire.com/news/home/20260406188082/en/Westinghouse-Establishes-Standard-AP1000-Plant-for-Fleet-Scale-Deployment-in-U.S.
93. "Nuclear Fuel: Actions Needed to Enhance Cost Reporting and Economic Analysis", US Government Accountability Office, GAO-26-107385, 2026 (headline only), https://www.gao.gov/assets/gao-26-107385.pdf
94. "Record Term Prices Mark a New Phase for Uranium", Sprott, 2026 (headline only), https://sprott.com/insights/record-term-prices-mark-a-new-phase-for-uranium/
95. "FERC rejects amended interconnection agreement for Amazon data center at Susquehanna nuclear plant", Power Engineering, Nov 2024 (headline only), https://www.power-eng.com/business/policy-and-regulation/ferc-rejects-amended-interconnection-agreement-for-amazon-data-center-at-susquehanna-nuclear-plant/
96. "NRC Receives Westinghouse Application to Update AP1000 Design Certification", US NRC press release 26-041, 2026 (headline only), https://www.nrc.gov/sites/default/files/cdn/doc-collection-news/2026/26-041.pdf
97. "US NRC Approves Exemption Request For Westinghouse AP1000 Design Certification", NucNet, 7 Apr 2026 (headline only), https://www.nucnet.org/news/us-nrc-approves-exemption-request-for-westinghouse-ap1000-design-certification-7-4-2026
98. "Project Matador joins EIS pilot program; NRC seeks public input", ANS Nuclear Newswire, 24 Mar 2026 (headline only), https://www.ans.org/news/2026-03-24/article-7875/project-matador-joins-eis-pilot-program-nrc-seeks-public-input/
99. "Polish Project Company Submits Construction Licence For Country's First Nuclear Power Station", NucNet, 3 Feb 2026 (headline only), https://www.nucnet.org/news/polish-project-company-submits-construction-licence-for-country-s-first-nuclear-power-station-3-2-2026
100. "Credit agreement advances Westinghouse–Poland partnership", ANS Nuclear Newswire, 19 Feb 2026 (headline only), https://www.ans.org/news/2026-02-19/article-7767/credit-agreement-advances-westinghousepoland-partnership/
101. "Rolls-Royce SMR advances plans at two more Czech sites", Enlit World (headline only), https://www.enlit.world/library/rolls-royce-smr-advances-plans-at-two-more-czech-sites
102. "TRISO-X Receives NRC Special Nuclear Material License for Advanced Fuel Fabrication Facility", US DOE Office of Nuclear Energy (headline only), https://www.energy.gov/ne/articles/triso-x-receives-nrc-special-nuclear-material-license-advanced-fuel-fabrication
103. "Triso-X Reaches Milestone In Advanced Nuclear Fuel Facility Construction", NucNet, 5 Sep 2026 (headline only), https://www.nucnet.org/news/triso-x-reaches-milestone-in-advanced-nuclear-fuel-facility-construction-9-5-2026
104. "X-Energy Leaps Ahead with $700M in Series D Funding", Neutron Bytes, 30 Nov 2025 (headline only; secondary), https://neutronbytes.com/2025/11/30/x-energy-leaps-ahead-with-700m-in-series-d-funding/
105. "Oklo reveals 75-MW reactor design, eyes late 2027 commercial deployment", Utility Dive (headline only; superseded by [47]), https://www.utilitydive.com/news/oklo-75-mw-reactor-design-smr-nuclear/743578/
106. "U.S. Department of Energy Signs Off on Oklo Fuel Fabrication Facility Design Concept", US DOE Office of Nuclear Energy (headline only), https://www.energy.gov/ne/articles/us-department-energy-signs-oklo-fuel-fabrication-facility-design-concept
107. "Kairos Power starts construction on Hermes 2, a next-gen reactor backed by Google", Axios Pro, 17 Apr 2026 (headline only), https://www.axios.com/pro/climate-deals/2026/04/17/kairos-google-hermes-2-reactor-construction
108. Sprott Physical Uranium Trust (OTC: SRUUF) quote page, stockanalysis.com, price as of 30 Sep 2026 (secondary), https://stockanalysis.com/quote/otc/SRUUF/
109. "NuScale Wants to Sell 72 Reactors to a Company Based in a WeWork Office Shared with NuScale", Iceberg Research, 14 Nov 2025 (short-seller report; secondary), https://iceberg-research.com/2025/11/14/nuscale-wants-to-sell-72-reactors-to-a-company-based-in-a-wework-office-shared-with-nuscale/
110. "Westinghouse Could IPO at a $50 Billion Valuation. Cameco's Stake Alone Would Be Worth $24.5 Billion.", The Motley Fool, 21 Sep 2026 (secondary), https://www.fool.com/investing/2026/09/21/westinghouse-could-ipo-at-a-usd50-billion-valuation-cameco-s-stake-alone-would-be-worth-usd24-5-billion/
111. "Cameco's Westinghouse nuclear power venture files for IPO", Mining.com, 2026 (headline only), https://www.mining.com/camecos-westinghouse-nuclear-power-venture-files-for-ipo/
112. "New York Power Authority launches RFIs for development of 1 GW of new advanced nuclear capacity", White & Case (headline only), https://www.whitecase.com/insight-alert/new-york-power-authority-launches-rfis-development-1-gw-new-advanced-nuclear-capacity
113. "Section 232 Investigations Prompt Trade Negotiation", Morgan Lewis, Feb 2026 (headline only), https://www.morganlewis.com/pubs/2026/02/section-232-investigations-prompt-trade-negotiation
114. "Kazatomprom 2Q26 Operations and Trading Update", Investegate/RNS, 2026 (headline only), https://www.investegate.co.uk/announcement/rns/joint-stock-company-national-atomic-company-kazatomprom--kap/kazatomprom-2q26-operations-and-trading-update/9699953
115. "Sulphuric acid shortage to weigh on Kazatomprom production next year", Mining Journal (headline only), https://www.mining-journal.com/energy-minerals/news-articles/4350097/sulphuric-acid-shortage-weigh-kazatomprom-production
116. "Three Mile Island nuclear power plant to return as Microsoft signs 20-year, 835MW AI data center PPA", Data Center Dynamics, Sep 2024 (headline only), https://www.datacenterdynamics.com/en/news/three-mile-island-nuclear-power-plant-to-return-as-microsoft-signs-20-year-835mw-ai-data-center-ppa/
117. "Palisades Nuclear Plant Restart 'Pushed Back To Early 2026'", NucNet, 5 Dec 2025 (headline only), https://www.nucnet.org/news/palisades-nuclear-plant-restart-pushed-back-to-early-2026-12-5-2025
118. "Earnings call transcript: Cameco Q2 2026 misses estimates but shares rise", Investing.com, 31 Jul 2026 (secondary; not read in full), https://www.investing.com/news/transcripts/earnings-call-transcript-cameco-q2-2026-misses-estimates-but-shares-rise-93CH-4828432
119. "DOE Allocates First Round of HALEU to Five U.S. Advanced Nuclear Reactor Developers", POWER, Apr 2025 (headline only), https://www.powermag.com/doe-allocates-first-round-of-haleu-to-five-u-s-advanced-nuclear-reactor-developers/
120. "Engineering contract for Bulgarian units signed with Hyundai E&C and Westinghouse", World Nuclear News, Nov 2024 (headline only), https://www.world-nuclear-news.org/articles/engineering-contract-for-bulgarian-units-signed-with-hyundai-and-westinghouse

121. "UxC Price Indicators" (public page; served February–March 2017 data when fetched 2 Oct 2026), UxC LLC, https://www.uxc.com/p/prices/UxCPrices.aspx

*End of report.*
