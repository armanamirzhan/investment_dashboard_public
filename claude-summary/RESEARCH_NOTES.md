# Research notes: AI power and AI interconnects (Claude, 2 October 2026)

*This note summarizes the investment research behind `claude-summary/power.html` and `claude-summary/interconnects.html`. Every claim is sourced in the full reports under `claude-summary/research/`: P1 covers direct-current power inside the data hall, P2 power semiconductors, P3 the grid and facility equipment, I2 lasers and photonic materials, and I3 copper, co-packaged optics and optical input/output. Market data is a snapshot from 2 October 2026. Technical terms are explained in the glossaries at the bottom of the two pages. This is educational research, not investment advice.*

## How the work was done

1. **Audit.** Three parallel passes read every page, diagram stage and data file on the hub. They produced 587 items, listed in `data/coverage-gaps.json`.
2. **Research.** Five research agents each wrote a report on one part of the value chain, following it from raw materials through components, fabrication, testing and assembly to finished systems. Each report gives a critical analysis, a ranked shortlist, rejected names and dated catalysts, and every figure carries its date and source.
3. **Synthesis.** I cross-checked the reports, pulled one consistent snapshot of prices and analyst consensus for about 140 listings from Yahoo Finance (whose consensus data comes from LSEG, the London Stock Exchange Group, and from S&P Global), and set the ratings and targets myself. **My target is a stated multiple times next fiscal year's consensus earnings per share (EPS).** The multiple is the judgment, and each company card states it.
4. **Review.** Before publication, three independent reviewers checked the pages against the reports and the data. Their corrections are included.

## Market backdrop (2 October 2026)

- The US 10-year Treasury yield closed at **5.24%** on 1 October 2026, two weeks after the Federal Reserve raised its policy rate by a quarter point to 3.75–4% ([CNBC, 16 Sep 2026](https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html)).
- AI-infrastructure shares sold off twice: on 18 August, after a report of about $3 trillion of off-balance-sheet AI commitments, and on 14 September, when AI-lab leaders called for a slowdown and the PHLX Semiconductor Index, the main US index of chip stocks, fell 5.9% in a day (P3 report, sources 103–105).
- The semiconductor index is nevertheless still about 81% higher than at the start of the year and only about 12% below its closing high (Yahoo Finance data). The markdowns are concentrated in **industrial and materials suppliers**, many of them Japanese and Korean companies with thin US analyst coverage.
- The hyperscalers, the largest cloud companies, still guide to record capital spending for 2026: Amazon about $220 billion, Alphabet $195–205 billion, Meta $130–145 billion and Microsoft about $175 billion (calendar 2026, as reported).
- On 2 October itself, chip shares jumped after Micron's results (Infineon about +8% and BESI about +7% by mid-morning New York time). The pages measure upside from the 1 October closes for US and European listings.

---

## Part 1: Power

### Engineering realities that I think the market has not fully priced

1. **800-volt DC moves energy storage closer to the racks; it does not remove it.** The double-conversion uninterruptible power supply (UPS), which converts power to DC and back to AC so that servers never see a grid disturbance, disappears in halls built for native DC from about 2028. But the amount of storage per megawatt rises. NVIDIA's current GB300 racks already hold 65 joules per GPU in capacitors, and Delta's 660 kW 800-volt rack carries 480 kW of battery backup. Grid rules are making this compulsory. The North American Electric Reliability Corporation (NERC) issued its highest-level alert in May 2026; PJM, the grid operator for 13 eastern US states and Washington, DC, saw 3.8 GW of data-center load trip offline on 22 July 2026; and reliability standards ordered by the Federal Energy Regulatory Commission are due on 31 December 2026. Data centers must now "ride through" brief grid faults without dropping off. The winners are the vendors that combine rack power with battery backup and the makers of medium-voltage UPS systems. The capacitor and battery-cell suppliers have already had their boom and bust in the share market.
2. **The last centimeter is the physics bottleneck.** A GPU drawing about 2.3 kW at about 0.75 volts needs about 3,000 amperes, and just 50 micro-ohms of resistance across the circuit board would waste about 450 watts. That is why voltage regulators are moving directly under the GPU package, a design called vertical power delivery. Vicor's patent complaints at the US International Trade Commission name nearly the whole first-generation supply chain: Delta, Monolithic Power Systems, Infineon, Flex, Celestica, Quanta, Foxconn and Luxshare.
3. **The hyperscalers' ±400-volt standard reuses the electric-vehicle supply chain.** That pushes down prices for silicon-carbide (SiC) and gallium-nitride (GaN) power chips. Silicon-carbide wafers are in surplus, but finished devices that customers have qualified are tight. The better way to own the theme is through device makers that buy wafers from many suppliers, such as Infineon, rather than through crystal growers or small gallium-nitride companies. Power-semiconductor content per megawatt rises by about 60%, and the high-voltage share of that content rises from about 30% to about 50%.
4. **Electrical codes and certified protection gate facility-wide DC.** Full support for 800-volt DC arrives only in the 2029 edition of the US National Electrical Code. The workplace safety standard NFPA 70E has no tables for 600–1,000-volt DC, and the arc-flash standard IEEE 1584 does not cover DC at all. Certified products are therefore scarce credentials: ABB's SACE Infinitus, the first solid-state breaker certified to the international (IEC) breaker standard; LS Electric's 1,500-volt DC molded-case breaker, certified by UL, the main US product-safety certifier; and Eaton's IEC-certified medium-voltage solid-state transformer.
5. **Solid-state transformers are over-hyped for 2026–28 and under-appreciated for 2029–32.** These are power electronics that convert medium-voltage AC straight to DC. Units in revenue service numbered in the single digits in May 2026. They cost about twice as much as a conventional transformer, are only about 0.5–1.5 percentage points more efficient than a transformer followed by a rectifier, and need about three times the insulation in their high-frequency transformer. Their silicon-carbide content is only about $8–12 per kilowatt. When they do scale, they will replace the medium-to-low-voltage distribution transformers and low-voltage switchboards inside halls, not high-voltage substations.
6. **The transformer bottleneck has narrowed to the top of the voltage stack.** McKinsey puts the 2025 transformer shortfall in Europe and North America at 38% and expects the backlog to reach 3.3 times annual supply by 2030. Below about 10 megavolt-amperes (roughly 10 MW of capacity), supply is easing, and high-voltage bushings, the insulated feed-throughs on large transformers, are the new choke point. US tariffs under Section 232, a national-security trade law, are inverted: imported grain-oriented electrical steel for transformer cores pays 50%, while finished large transformers pay only 15% until 31 December 2027 and 25% after. That favors capacity built in the US from 2028. Yet the Korean makers trade 34–52% below their 52-week closing highs (HD Hyundai Electric −52%, Hyosung −39%, LS Electric −34%).
7. **Near-term onsite power comes from engines, not turbines.** GE Vernova has 116 GW of gas turbines on order, of which 63 GW are slot reservations, and is mostly sold out through 2030. About 75 GW of firm orders for onsite power compare with about 3 GW expected to be operating by the end of 2026, and reciprocating gas engines (large piston engines that run on natural gas) dominate the near-term additions. INNIO, the listed pure play on gas engines, trades about 32% below its June 2026 IPO price.

### Bottleneck scorecard

| Bottleneck | Binding until | Who holds the scarce position | Pricing (Oct 2026) |
|---|---|---|---|
| Extra-high-voltage (345–765 kV) transformers and generator step-up units | 2028–29 | Hitachi Energy, Siemens Energy, HD Hyundai Electric, Hyosung, GE Vernova (Prolec) | Korean makers 34–52% below highs; Western peers 21–40× earnings |
| High-voltage bushings and breakers | 2028 | Trench (private), Hitachi Energy, Siemens Energy, the Hyosung–Quanta joint venture | Mostly private or a small part of large groups |
| Engineered medium-voltage switchgear and prefabricated power rooms | 2027–28 | Powell, Eaton, Schneider, Siemens, ABB, Forgent | Powell 41% below its high |
| Rack power and battery backup | 2026–28 | Delta (50–70% share), Lite-On (about 35%) | 29× versus 19× 2027 earnings |
| Qualified power devices | Now to 2027 | Infineon, onsemi, STMicroelectronics; silicon MOSFETs (standard power transistors) are "fully constrained" | Infineon 32% and onsemi 40% below highs |
| Current density at the GPU (vertical power delivery) | Now, rising | Vicor (patents); Monolithic Power Systems, Infineon, Delta | Vicor priced; the litigation risk at Monolithic Power Systems is not |
| DC protection and code approval | 2027–29 | ABB, LS Electric, Eaton | ABB about 27× with a "hold" consensus; LS Electric 41× |
| Onsite gas engines | 2026–28 | Caterpillar, INNIO, Wärtsilä, Cummins | INNIO 32% below its IPO price |

**What is not a bottleneck.** Silicon-carbide and gallium-nitride wafers are in surplus. Core materials for solid-state transformers are not scarce. Copper is a cost rather than a shortage, and 800-volt DC cuts the copper needed per megawatt by 40–50%. The chips for 800-to-12-volt converters have ten or more credible vendors. Multilayer ceramic capacitors have already been re-rated by the market, and grain-oriented electrical steel is scarce only inside the US.


---

## Part 2: Interconnects

### Engineering realities that I think the market has not fully priced

1. **Copper stays inside the rack until about 2029, and optics enters the GPU-to-GPU ("scale-up") network between racks first.** NVIDIA's Vera Rubin NVL72 rack uses about 5,000 copper cables, more than two miles in total, in four cartridges. The following generation (the Rubin Ultra GPU with the Kyber rack) stays copper. The NVL576 system, which joins 576 GPUs across eight racks, brings optical links between racks in test volumes in 2027, although SemiAnalysis warned in July that it may be delayed or limited to small volumes. The Feynman generation's NVL1152 brings co-packaged optics to NVLink in 2028. The optical scale-up market of 2027–28 is therefore *additional* demand on top of copper, not a replacement for it.
2. **The copper wall is a circuit-board materials wall.** The Kyber rack's 78-layer midplane, the large board that connects its trays, is reportedly hard enough to build that the rack slipped to 2028. Circuit-board content is about $116,700 per Vera Rubin NVL72 rack, against $35,100 for the current GB300 rack (Morgan Stanley, relayed by a secondary source). Goldman Sachs estimates the supply deficit of the smoothest copper foils (HVLP grade 3 and above) at 28%, 39% and 38% for 2026, 2027 and 2028, and Morgan Stanley puts the shortfall of high-end glass cloth at 40% in 2026. NVIDIA reportedly locks up foil and cloth capacity directly. Even so, the owners of these materials, Mitsui Kinzoku and Nittobo, trade 47–53% below their highs.
3. **Co-packaged optics (CPO) cuts the number of lasers, but probably not the indium phosphide.** In co-packaged optics the optical engine sits on the switch package, and the lasers move into external light sources that deliver about 250 milliwatts per wavelength. A module with eight wavelengths that draws 12 watts therefore turns only about 17% of its electricity into light (my estimate). Those lasers need longer cavities and more indium-phosphide (InP) area each, so the InP dollars per terabit hold up even as laser counts fall.
4. **InP laser capacity is the binding optical constraint for 2026–27, and 6-inch wafers are where the advantage shifts.** The chain runs from InP substrates (the crystal wafers) through epitaxy (growing the laser's crystal layers in MOCVD reactors) and laser fabrication to burn-in testing. Lumentum says it is shipping more than 30% below demand, and Coherent says its fiscal 2027 is booked out. At $5,000 per 6-inch wafer, the substrate costs only $0.09–0.39 per good laser chip, so buyers are insensitive to substrate prices and increases should stick.
5. **Indium licensing matters more than indium tonnage.** One million 6-inch wafers a year would use only about 4% of the world's refined indium. China's export licensing of InP and indium precursor chemicals, in force since February 2025, is not part of the US–China trade truce, and AXT, whose crystal growth is in China, was still waiting for US export permits in August 2026. The Japanese substrate makers, Sumitomo Electric and JX Advanced Metals, benefit.
6. **Each step deeper into the package cuts the energy per bit.** The unit is picojoules per bit (pJ/bit); at 1 terabit per second, 1 pJ/bit is 1 watt.

   | Link | pJ/bit |
   |---|---|
   | Pluggable transceiver with a digital signal processor | about 20 |
   | Linear pluggable (no signal processor) or copper | about 10 |
   | Co-packaged optics | about 5–7 |
   | Optical input/output chiplets inside the processor package | about 3–5 |
   | Micro-LED or VCSEL "wide-and-slow" links (transmitter only) | below 1 |

   Wide-and-slow links send data over many parallel channels at modest speed, and they reach only about 10–30 m.
7. **Policy.** InnoLight, the largest maker of 800G and 1.6T transceivers, was added to the Pentagon's Section 1260H list of "Chinese military companies" on 8 June 2026. Pentagon contracts with listed companies are barred from 30 June 2026, and contracts for goods that contain their products from 30 June 2027. A further listing by the US Treasury (its Non-SDN Chinese Military-Industrial Complex list) would bar US persons from owning the shares. This is a modest tailwind for non-Chinese module supply.

### Bottleneck scorecard

| Bottleneck | Binding until | Who holds the scarce position | Pricing (Oct 2026) |
|---|---|---|---|
| InP laser chips (200G modulated lasers; ultra-high-power lasers for external light sources) | 2027 | Lumentum, Broadcom, Coherent (for its own use), Mitsubishi Electric, Sumitomo Electric | Lumentum at its high (about 30× fiscal 2028 and 48× fiscal 2027 earnings); Coherent 25% below its high |
| 6-inch InP substrates | 2026–28 | Sumitomo Electric, JX Advanced Metals; AXT (made in China) | Sumitomo 30% and JX 37% below their highs |
| Epitaxy tools (MOCVD reactors) | 2026–27 | Aixtron, Veeco | Aixtron 39% below its high |
| Ultra-smooth copper foil (HVLP grades 4 and 5) | 2026–28 | Mitsui Kinzoku, Co-Tech | Mitsui 53% below its high, about 15× earnings |
| Low-expansion and low-loss glass cloth | 2026, easing in 2027 | Nittobo (about 90% of the low-expansion grade) | 47% below its high; no further price rises |
| Lowest-loss laminates and boards of 70 or more layers | 2027–28 | Elite Material, Taiwan Union, Doosan, Panasonic; Victory Giant, Gold Circuit, TTM | Elite Material up 215% this year |
| Co-packaged-optics packaging (TSMC's COUPE and SoIC processes) | 2026–28 | TSMC | Fair, about 21× 2027 earnings |
| Hybrid-bonding tools | 2027–29 | BESI, Applied Materials | BESI 40% below its high |
| 300 mm silicon-on-insulator wafers for photonics | 2026–28 | Soitec (reportedly about 95%) | Up about 580% this year |

**What is not a bottleneck.** Several suppliers make transceiver signal processors. Pluggable modules are assembled by Fabrinet and Chinese manufacturers. Passive copper-cable capacity is scaling. Lower-power continuous-wave lasers (70–100 mW) are already shipped by Chinese entrants such as Yuanjie. And 3- and 4-inch InP substrates could be in surplus by 2029 if co-packaged or scale-up optics slips.

### Already priced, or ahead of the engineering

Optical NVLink inside the rack is not a 2027 event, and co-packaged optics does not shrink the laser market. Micro-LED links will not replace copper soon. Glass-core package substrates slipped to 2027 at the earliest (SKC's Absolics), and hybrid bonding in high-bandwidth memory moved to the HBM4E and HBM5 generations after the memory-standards body JEDEC raised the stack-height limit to 775 µm. On valuation, Astera Labs trades at about 56× 2027 earnings, Lumentum is at its high (about 30× fiscal 2028 earnings), Soitec is up about 580% this year, and pre-revenue photonics small caps such as POET and Lightwave Logic are valued at $0.8–1.3 billion.

---

## Picks (from `data/picks.json`; targets = multiple × next-fiscal-year consensus EPS)

### Power

| Group | Company | Tickers | Claude | Close (date) | Claude target (basis) | Consensus mean (analysts) | Fwd P/E | From high |
|---|---|---|---|---|---|---|---|---|
| Top pick | HD Hyundai Electric | 267260.KS | Buy | ₩678,000 (2026-10-02) | ₩850,000 (+25%; 25× 2027E consensus EPS) | ₩1,171,760 (+73%; 22) | 19.9× 2027E | −52% |
| Top pick | Infineon Technologies | IFX.DE, IFNNY | Buy | €59.42 (2026-10-01) | €74 (+25%; 26× FY9/27E consensus EPS) | €86.74 (+46%; 23) | 20.8× FY9/27E | −32% |
| Top pick | Siemens Energy | ENR.DE, SMEGF | Buy | €142.52 (2026-10-01) | €174 (+22%; 28× FY9/27E consensus EPS) | €197.42 (+39%; 26) | 22.9× FY9/27E | −24% |
| Top pick | Delta Electronics | 2308.TW | Buy | NT$1,885 (2026-10-02) | NT$2,250 (+19%; 35× 2027E consensus EPS) | NT$2,482.8 (+32%; 22) | 29.4× 2027E | −25% |
| Top pick | Lite-On Technology | 2301.TW | Buy | NT$281.5 (2026-10-02) | NT$335 (+19%; 23× 2027E consensus EPS) | NT$302.7 (+8%; 12) | 19.2× 2027E | −11% |
| Top pick | Hyosung Heavy Industries | 298040.KS | Accumulate | ₩2,785,000 (2026-10-02) | ₩3,330,000 (+20%; 27× 2027E consensus EPS) | ₩4,233,477 (+52%; 19) | 22.6× 2027E | −39% |
| Top pick | Powell Industries | POWL | Accumulate | $190.60 (2026-10-01) | $230 (+21%; 34× FY9/27E consensus EPS) | $280 (+47%; 4) | 28.0× FY9/27E | −41% |
| Also interesting | onsemi | ON | Accumulate | $80.08 (2026-10-01) | $95 (+19%; 21× 2027E consensus EPS) | $103.69 (+29%; 26) | 17.7× 2027E | −40% |
| Also interesting | INNIO | INIO | Speculative buy | $18.28 (2026-10-01) | $24 (+31%; 30× 2027E consensus EPS) | $37.50 (+105%; 10) | 23.0× 2027E | −56% |
| Also interesting | Flex | FLEX | Accumulate | $112.78 (2026-10-01) | $134 (+19%; 19× FY3/28E consensus EPS) | $160.50 (+42%; 10) | 16.0× FY3/28E | −30% |
| Also interesting | LS Corp | 006260.KS | Speculative buy | ₩298,500 (2026-10-02) | ₩365,000 (+22%; 15× 2027E consensus EPS) | ₩547,750 (+84%; 8) | 12.3× 2027E | −46% |
| Also interesting | Vicor | VICR | Hold | $308.59 (2026-10-01) | $305 (−1%; 50× 2027E consensus EPS; would buy below $240) | $393.75 (+28%; 4) | 50.9× 2027E | −19% |

**Quality names, mostly priced:**

- **Eaton** (ETN), Hold, would buy below $400 (25× 2027E): The best-placed US incumbent: an IEC-certified medium-voltage solid-state transformer, Bussmann DC fuses and Boyd liquid cooling. Americas electrical orders were +41% [P1-89].
- **ABB** (ABBN.SW, ABBNY), Hold, would buy below CHF 68 (23× 2027E): Holds the first IEC-certified solid-state DC breaker (SACE Infinitus), a medium-voltage UPS and a stake in DG Matrix, but trades at about 27× 2027 earnings, and consensus is "hold". ABB sold its power-grids business to Hitachi in 2020–22, so it is not an HVDC supplier.
- **Vertiv** (VRT), Hold, would buy below $200 (22× 2027E): A real 800 V portfolio (rack and pod in 2027, hall in 2028) and leadership in liquid cooling, but a consensus favorite whose central-UPS franchise faces the 2028+ mix shift.
- **GE Vernova** (GEV), Hold, would buy below $740 (30× 2027E): Turbines are sold out to 2029–30, but the stock trades at about 40× 2027 earnings. Its 2026 earnings are inflated by a gain of about $4 billion on Prolec, and industry turbine capacity roughly doubles by 2030.
- **Schneider Electric** (SU.PA, SBGSY), Hold, would buy below €240 (20× 2027E): Triple-digit data-center growth is already in its 24× multiple, and it has no shipping 800 V switchboard or solid-state transformer yet.
- **Hitachi (Hitachi Energy)** (6501.T, HTHIY), Hold, would buy below ¥4,650 (18× FY3/28E): The broadest owner of the scarce high-voltage stack (about 1 in 6 of the world's transformers, 1 in 4 high-voltage switchgear, more than 175 GW of HVDC links), but the stock is only about 5% below its high [P3-8].
- **Caterpillar** (CAT), Hold, would buy below $740 (23× 2027E): The broadest onsite-power seller (diesel generator sets, gas engines and the gas turbines of its Solar Turbines unit), with engine orders running into 2030. It is diversified across mining and construction and trades at about 26× 2027 earnings.
- **Prysmian** (PRY.MI, PRYMY), Hold, would buy below €110 (18× 2027E): The HVDC-cable oligopoly is running "flat out" with "no pricing pressure", but it is fully recognized, and the pending Atkore deal dilutes quality [P3-69].
- **Nexans** (NEX.PA, NXPRF), Accumulate, would buy below €145 (16× 2027E), price already below: The value member of the cable oligopoly, at about 14.5× 2027 earnings with a €7.7 billion transmission backlog [P3-72]. It is not a top pick because its AI exposure is indirect, through grid connections.
- **Quanta Services** (PWR), Hold, would buy below $550 (28× 2027E): The undisputed leader in transmission construction, priced at about 34× 2027 earnings.
- **MYR Group** (MYRG), Accumulate, would buy below $345 (24× 2027E), price already below: The cheapest pure electrical contractor with transmission leverage, about 41% below its high. Its transmission revenue has not yet inflected.
- **Cummins** (CMI), Accumulate, would buy below $570 (17× 2027E), price already below: Its large QSK95 engines are sold out into the second half of 2028, and it expects more than $9 billion of data-center exposure by 2030, mostly diesel standby. At about 15× 2027 earnings it is cheap, but trucks still dominate its earnings.
- **Generac** (GNRC), Hold, would buy below $200 (16× 2027E): An agreement to supply Amazon's data centers with backup generators worth up to $8 billion, of which about $2.4 billion is scheduled for 2027–28. Amazon received warrants on about 1.69 million Generac shares that vest as it buys [X-17]. The residential business remains cyclical.

**Avoid, or wait for a better price:**

- **Bloom Energy** (BE), Avoid, would buy below $145 (30× 2027E): The only onsite option at gigawatt scale that does not burn its fuel: its fuel cells convert natural gas to electricity chemically. Oracle has committed to 2.4 GW for its Project Jupiter campus in New Mexico and reaffirmed that on 25 September 2026, after it sent the site's developer a force-majeure notice (a contractual warning that events outside its control may delay the project). The stock trades at about 56× 2027 earnings, and gas-pipeline and air permits now limit deployments [X-16].
- **Monolithic Power Systems** (MPWR), Hold, would buy below $1,000 (30× 2027E): An excellent franchise (data-center revenue +164%), but it trades at about 39× 2027 earnings and is named in two of Vicor's ITC cases [P1-42].
- **LS Electric** (010120.KS), Avoid: It holds the UL 1,500 V DC breaker credential, but at about 41× 2027 earnings the cheaper route is through its parent, LS Corp.
- **Doosan Enerbility** (034020.KS), Avoid: Twelve large H-class gas turbines for xAI, but about 78× 2027 earnings and heavy dependence on one buyer.
- **Navitas Semiconductor** (NVTS), Avoid: Loss-making on about $10–14 million of quarterly revenue, with 800 V revenue expected from 2027. It is an option, not an investment case.
- **Wolfspeed** (WOLF), Avoid: Runs a −20% gross margin on an adjusted (non-GAAP) basis [P2-23]. Management says it needs an annual revenue run-rate of about $800 million to break even at the gross-margin level [P2-25], against about $600 million at the latest quarterly rate (my estimate).
- **Samsung Electro-Mechanics** (009150.KS), Avoid: Capacitors for AI power are real, but the stock is up about 520% this year and fell about 11% on the Kyber-delay report alone.
- **Fluence Energy** (FLNC), Avoid: Data-center batteries are an under-modelled demand spike, but Fluence has had two guidance cuts, a failed manufacturing ramp and class actions.
- **Cleveland-Cliffs** (CLF), Avoid: It is the only US maker of grain-oriented electrical steel, but electrical and stainless steel are only about 4% of its volume, so it is a steel-cycle stock, not an AI-scarcity owner [P3-37].

### Interconnects

| Group | Company | Tickers | Claude | Close (date) | Claude target (basis) | Consensus mean (analysts) | Fwd P/E | From high |
|---|---|---|---|---|---|---|---|---|
| Top pick | Mitsui Kinzoku (Mitsui Mining & Smelting) | 5706.T, MMSMY | Buy | ¥2,553.5 (2026-10-02) | ¥3,500 (+37%; 20× FY3/28E consensus EPS) | ¥4,782 (+87%; 10) | 14.6× FY3/28E | −53% |
| Top pick | Sumitomo Electric Industries | 5802.T, SMTOY | Buy | ¥2,452 (2026-10-02) | ¥2,900 (+18%; 21× FY3/28E consensus EPS) | ¥3,447.3 (+41%; 11) | 17.7× FY3/28E | −30% |
| Top pick | Broadcom | AVGO | Buy | $343.64 (2026-10-01) | $465 (+35%; 24× FY10/27E consensus EPS) | $531.31 (+55%; 47) | 17.7× FY10/27E | −29% |
| Top pick | Coherent | COHR | Buy | $319.19 (2026-10-01) | $380 (+19%; 27× FY6/28E consensus EPS) | $412.52 (+29%; 23) | 22.7× FY6/28E | −25% |
| Top pick | TSMC | TSM, 2330.TW | Buy | $459.20 (2026-10-01) | $525 (+14%; 24× 2027E consensus EPS) | $552.26 (+20%; 20) | 20.9× 2027E | −4% |
| Top pick | JX Advanced Metals | 5016.T, JXAMY | Accumulate | ¥3,612 (2026-10-02) | ¥4,300 (+19%; 21× FY3/28E consensus EPS) | ¥4,846.4 (+34%; 11) | 17.7× FY3/28E | −37% |
| Top pick | Aixtron | AIXA.DE, AIXXF | Accumulate | €36.86 (2026-10-01) | €44.50 (+21%; 33× 2027E consensus EPS) | €48.54 (+32%; 15) | 27.2× 2027E | −39% |
| Top pick | BE Semiconductor Industries (Besi) | BESI.AS, BESIY | Accumulate | €191.40 (2026-10-01) | €230 (+20%; 35× 2027E consensus EPS) | €289.91 (+51%; 23) | 29.0× 2027E | −40% |
| Also interesting | Nittobo (Nitto Boseki) | 3110.T, NBCLF | Accumulate | ¥3,370 (2026-10-02) | ¥3,750 (+11%; 25× FY3/28E consensus EPS) | ¥4,532.2 (+34%; 9) | 22.3× FY3/28E | −47% |
| Also interesting | Credo Technology | CRDO | Accumulate | $210.17 (2026-10-01) | $240 (+14%; 25× FY4/28E consensus EPS) | $281.09 (+34%; 20) | 21.7× FY4/28E | −31% |

**Quality names, mostly priced:**

- **Lumentum** (LITE), Hold, would buy below $830 (24× FY6/28E): The highest-quality InP franchise: one of two 200G modulated-laser suppliers with Broadcom, ultra-high-power lasers for co-packaged optics, and pump lasers sold out. It trades within 1% of its high at about 48× fiscal 2027 and 30× fiscal 2028 earnings.
- **Ciena** (CIEN), Hold, would buy below $305 (30× FY10/27E): Coherent optics and line systems for data-center interconnect. Fiscal Q3 revenue rose 37% and fiscal 2026 guidance is $6.42 billion, but two customers are 41.7% of revenue [X-1].
- **Corning** (GLW), Hold, would buy below $130 (30× 2027E): Fiber and connectivity: optical sales +32% and enterprise +65% on generative-AI products in Q2 2026, with its Springboard targets (raised in May) reaffirmed [X-2]. It trades at about 37× 2027 earnings.
- **Fujikura** (5803.T, FKURF), Hold, would buy below ¥4,550 (20× FY3/28E): High-density fiber and cable for AI data centers; already re-rated.
- **Marvell** (MRVL), Hold, would buy below $200 (30× FY1/28E): Owns Celestial AI's Photonic Fabric (optical scale-up and optics into memory) plus optical signal processors and custom silicon, at about 40× fiscal 2028 earnings. Investor Day is on 6 October.
- **Arista Networks** (ANET), Hold, would buy below $155 (30× 2027E): The scale-out Ethernet leader, near its high at about 39× 2027 earnings.
- **Amphenol** (APH), Hold, would buy below $72 (22× 2027E): A connector franchise that does not depend on the medium (copper, fiber and power). Rubin's cable-less tray removed some exclusive content.
- **Tower Semiconductor** (TSEM), Hold, would buy below $200 (30× 2027E): The merchant silicon-photonics foundry leader (run-rate $680 million, heading above $1 billion in Q4 2026), but at about 36× 2027 earnings, and four 300 mm silicon-photonics expansions converge in 2027–29 [I2-58].
- **Soitec** (SOI.PA, SLOIF), Hold: Reportedly about 95% of 300 mm photonics silicon-on-insulator wafers (a secondary estimate) [I2-61], with that revenue growing 2.5–3× in fiscal 2027 [I2-62]. The stock is up about 580% this year, and consensus sits at about the current price.
- **Elite Material** (2383.TW), Hold, would buy below NT$4,550 (20× 2027E): The number one high-speed laminate maker (about 39% share) [I3-62]. It is up 215% this year and squeezed between foil and glass suppliers that have pricing power.
- **Fabrinet** (FN), Hold, would buy below $390 (18× FY6/28E): About 40% below its high after NVIDIA fell to 16% of fiscal 2026 revenue [X-3]. Co-packaged optics moves optical-engine assembly toward TSMC and Foxconn, but Fabrinet is a non-Chinese manufacturing route if US rules tighten.
- **Celestica** (CLS), Hold, would buy below $325 (17× 2027E): Switch and rack integration at about 19× 2027 earnings; named in Vicor's September 2026 patent complaint at the US International Trade Commission.

**Avoid, or wait for a better price:**

- **InnoLight (Zhongji Innolight)** (300308.SZ, 3308.HK), Avoid: The world's largest 800G / 1.6T transceiver maker (first-half 2026 net profit CN¥13.65 billion) at only about 12× 2027 earnings. It is cheap for a reason: it was added to the Pentagon's 1260H list on 8 June 2026, and a Treasury listing would bar US persons from holding it [X-4][X-5]. Figures use the Shenzhen line (15 analysts); the Hong Kong line (HK$1,072 on 2 October) has only three analyst targets.
- **Astera Labs** (ALAB), Avoid, would buy below $220 (35× 2027E): Excellent scale-up position, but about 56× 2027 earnings and 20× 2027 sales, already past the bull case.
- **AXT** (AXTI), Avoid: InP substrate leverage, but all crystal growth is in China, US-customer export permits are pending, and the stock trades at about 36× 2027 earnings [I2-21].
- **POET Technologies** (POET), Avoid: An optical-interposer story valued at $1.3 billion on about $1.7 million of trailing revenue; its Marvell partnership ended.
- **Lightwave Logic** (LWLG), Avoid: Electro-optic polymers valued at $0.8 billion on about $0.25 million of trailing revenue; long-term polymer reliability is unproven.
- **SKC (Absolics glass core)** (011790.KS), Avoid: Glass-core substrate mass production pushed to 2027; loss-making [I3-70].
- **Applied Optoelectronics** (AAOI), Avoid: A transceiver maker that lost about $57 million over the last twelve months [I2-78]. Consensus expects a turn to profit in 2027, and after a 208% rise this year the shares already trade at about 23× those 2027 earnings.

---

## Catalyst calendar

Dates marked "~" are estimates from company calendars or the Yahoo calendar and may move.

### Power

| Date | Event |
|---|---|
| 12–15 Oct 2026 | OCP Global Summit, San Jose: 800 V DC, solid-state-transformer and rack-power announcements |
| ~mid-Oct 2026 | US ITC vote on instituting Vicor's vertical-power-delivery complaint against Delta, Infineon, MPS, Flex and others (estimate) |
| 20 Oct 2026 | Vicor Q3 results; ABB Q3 results |
| 22 Oct 2026 | HD Hyundai Electric and LS Electric Q3 results |
| ~27–29 Oct 2026 | INNIO, Wärtsilä, GE Vernova, Caterpillar, Prysmian, Quanta Q3 results; Delta and Lite-On Q3 (~28 Oct) |
| 29 Oct 2026 | STMicroelectronics Q3 results |
| ~2–3 Nov 2026 | onsemi Q3 (~2 Nov); Eaton Q3 (3 Nov) |
| 10 Nov 2026 | Infineon fiscal Q4 results, fiscal 2027 outlook and upgraded AI-revenue target; Flex Investor Day on its power-business spin-off |
| 11 Nov 2026 | Siemens Energy fiscal 2026 results and fiscal 2027 guidance |
| ~17 Nov 2026 | Powell fiscal Q4 results; NVIDIA Q3 FY27 results (date not confirmed) with Rubin Ultra / Kyber timing |
| 24 Dec 2026 | US Department of Energy rules implementing Executive Order 14421, which lets the department prohibit or condition grid equipment involving Chinese and other 'covered foreign entities' |
| 31 Dec 2026 | Deadline for FERC-ordered NERC reliability standards for large computational loads (ride-through) |
| Q1 2027 | Lite-On 800 V power rack mass production; Delta 800 V volume ramp during 2027 |
| Apr 2027 | HD Hyundai Electric's second Alabama plant adds 765 kV capability |
| 2027 | Siemens Energy's Charlotte transformer plant; Delta's first solid-state-transformer mass-production line |
| 1 Jan 2028 | US tariff on imported large power transformers steps up from 15% to 25% |
| 2029 | US National Electrical Code cycle that adds full 800 V DC support; broader solid-state-transformer adoption |

### Interconnects

| Date | Event |
|---|---|
| 6 Oct 2026 | Marvell Investor Day: Celestial AI Photonic Fabric, UALink and optical signal-processor targets |
| ~11 Oct 2026 | Federal Communications Commission optical-equipment rule takes effect (30 days after its 11 Sep publication) |
| 12–15 Oct 2026 | OCP Global Summit, San Jose: co-packaged and near-packaged optics, Open CPX, Credo Active LED Cable demo |
| 15 Oct 2026 | TSMC Q3 results: COUPE, SoIC and CoWoS capacity |
| 22 Oct 2026 | BESI Q3 results: hybrid-bonding and photonics orders |
| ~28–29 Oct 2026 | Aixtron Q3 (29 Oct); Amphenol, Elite Material and AXT Q3 results |
| 30 Oct 2026 | Sumitomo Electric results for April–September |
| 2–5 Nov 2026 | Fabrinet (2 Nov), Coherent (4 Nov), Lumentum (~3–5 Nov; sources differ) and Nittobo (5 Nov) results |
| 9–10 Nov 2026 | JX Advanced Metals (9 Nov), Tower (9 Nov) and Mitsui Kinzoku (~10 Nov) results |
| ~17 Nov 2026 | NVIDIA Q3 FY27 results (date not confirmed): Rubin Ultra, Kyber and NVL576 timing; co-packaged switch volumes |
| ~27 Nov 2026 | Expiry of China's suspension of its gallium / germanium / antimony export ban to the US (indium is under a separate licensing regime) |
| ~30 Nov–1 Dec 2026 | Credo fiscal Q2 and Marvell fiscal Q3 results |
| ~9 Dec 2026 | Broadcom fiscal Q4 results and fiscal 2027 AI guide |
| 10 Jan 2027 | Extended US–China ('Busan') trade truce runs to this date |
| Jan–Mar 2027 | Nittobo's Fukushima glass-cloth line starts; 1H 2027 Coherent's Zurich 6-inch InP fab |
| 30 Jun 2027 | Pentagon procurement ban extends to goods containing products of 1260H-listed firms (affects InnoLight) |
| 2H 2027 | Scale-up co-packaged and near-packaged optics component ramps (Coherent, Lumentum, Astera) |
| 2028 | NVIDIA Feynman NVL1152 with co-packaged optics on NVLink; Lumentum's Greensboro InP fab first revenue |

---

## Full reports in this folder

| File | Scope |
|---|---|
| `research/P1_in_hall_dc_power.md` | The 800-volt and ±400-volt DC architectures and their timeline, where the dollars per megawatt move, solid-state transformers, rack power, vertical power delivery and the map of Vicor's International Trade Commission cases, DC protection, and storage inside the rack; ranked shortlist and rejected names |
| `research/P2_power_semiconductors.md` | Silicon-carbide and gallium-nitride power chips from raw materials to test: where there is a glut and where there is scarcity, content per megawatt, equipment, packaging, gate drivers and gallium supply; shortlist |
| `research/P3_grid_and_facility.md` | Transformers, electrical steel and tariffs, switchgear, cables and high-voltage DC links, data-center batteries, onsite generation, and engineering and construction labor; shortlist and catalyst calendar |
| `research/I2_lasers_and_photonic_materials.md` | Indium-phosphide and gallium-arsenide lasers, substrates and epitaxy, indium export controls, silicon-photonics foundries and silicon-on-insulator wafers, modulator materials, wide-and-slow links, equipment and test; shortlist |
| `research/I3_copper_cpo_and_optical_io.md` | The limits of copper scale-up, circuit-board materials (laminates, copper foil and glass cloth), the status of co-packaged optics, optical input/output and optics into memory, 3D packaging, and timelines; shortlist |
| `research/audit_*.md` | Section-by-section coverage audits of this hub (companies present, companies missing, errors) |

*Prepared by Claude (Anthropic). Not investment advice. Verify prices, ratings and facts before acting.*
