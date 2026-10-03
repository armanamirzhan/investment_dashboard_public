# Research notes: AI power and AI interconnects (Claude, 2–3 October 2026)

*This note summarizes the investment research behind the four Claude Investment Summary pages: `electrification.html`, `generation.html`, `providers.html` and `interconnects.html`. Every claim is sourced in the full reports under `claude-summary/research/`: P1 covers direct-current power inside the data hall, P2 power semiconductors, P3 the grid and facility equipment, G1 thermal generation (gas turbines, engines and fuel cells), G2 nuclear power and its fuel chain, U1 United States electricity providers and power markets, U2 the gas chain, renewables and international providers, I2 lasers and photonic materials, and I3 copper, co-packaged optics and optical input/output. Market data comes from two snapshots: the electrification and interconnect pages use the 1 October 2026 closes for US and European listings (2 October for Asia), and the generation and provider pages use the 2 October 2026 closes everywhere. Technical terms are explained in the glossaries at the bottom of each page. This is educational research, not investment advice.*

## How the work was done

1. **Audit.** Three parallel passes read every page, diagram stage and data file on the hub. They produced 587 items, listed in `data/coverage-gaps.json`.
2. **Research.** Nine research agents each wrote a report on one part of the value chain, following it from raw materials through components, fabrication, testing and assembly to finished systems, or, for the electricity sellers, from the fuel through the pipe and the plant to the tariff. Each report gives a critical analysis, a ranked shortlist, rejected names and dated catalysts, and every figure carries its date and source. The agents used public sources only.
3. **Synthesis.** I cross-checked the reports, pulled consistent snapshots of prices and analyst consensus for about 300 listings (including names considered and rejected) from Yahoo Finance (whose consensus data comes from LSEG, the London Stock Exchange Group, and from S&P Global), and set the ratings and targets myself. **My target is a stated multiple times next fiscal year's consensus earnings per share (EPS).** The multiple is the judgment, and each company card states it.
4. **Review.** Before publication, independent reviewers checked each page against the reports and the data. Their corrections are included.

## Market backdrop (2 October 2026)

- The US 10-year Treasury yield closed at **5.28%** on 2 October 2026 (5.24% on 1 October), two weeks after the Federal Reserve raised its policy rate by a quarter point to 3.75–4% ([CNBC, 16 Sep 2026](https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html)).
- AI-infrastructure shares sold off twice: on 18 August, after a report of about $3 trillion of off-balance-sheet AI commitments, and on 14 September, when AI-lab leaders called for a slowdown and the PHLX Semiconductor Index, the main US index of chip stocks, fell 5.9% in a day (P3 report, sources 103–105).
- The semiconductor index is nevertheless still about 85% higher than at the start of the year and only about 10% below its closing high (Yahoo Finance data, 2 October close). The markdowns are concentrated in **industrial, materials and energy suppliers**, many of them Japanese, Korean and Canadian companies with thin US analyst coverage.
- The hyperscalers, the largest cloud companies, still guide to record capital spending for 2026: Amazon about $220 billion, Alphabet $195–205 billion, Meta $130–145 billion and Microsoft about $175 billion (calendar 2026, as reported).
- For the companies that sell electricity, rules moved prices more than demand did in 2026: PJM's capacity price cleared at its cap for the third time on 14 July, the federal regulator suspended PJM's 15-year "backstop" auction on 29 September, and Texas confirmed in July that co-located data centers can be curtailed (U1 report).

---

## Part 1: Electrification (grid connection to GPU)

### Six engineering realities the market has not fully priced

**1. Energy storage moves closer to the racks; it does not disappear**

A popular shorthand says that 800 V DC "kills the UPS". It kills the double-conversion UPS *topology*, not the storage function, and the amount of storage per megawatt goes up. NVIDIA's current GB300 (Blackwell Ultra) racks already hold 65 joules per GPU in the capacitors of their power shelves. Together with power caps and ramp limits, that cuts peak grid demand by about 30% in NVIDIA's own test [P1-20]. NVIDIA's 800 V architecture adds supercapacitors near the racks and battery systems at the utility connection [P1-19].

Grid operators are making this compulsory. The North American Electric Reliability Corporation (NERC) issued a Level 3 alert, its highest level, which requires specific actions from utilities and grid operators, in May 2026 after data centers dropped off the grid during faults [P3-86]. PJM, the grid operator for 13 eastern US states and Washington, DC, saw 3.8 GW of data-center load trip offline on 22 July 2026 [P3-87]. Reliability standards ordered by the Federal Energy Regulatory Commission (FERC) are due by 31 December 2026. Ride-through (staying connected through a brief grid fault) and power smoothing (evening out the rapid swings in an AI cluster's power draw) are becoming compliance spending, not optional resilience.

The beneficiaries are the rack-power integrators that sell battery backup units (Delta, Lite-On) and the medium-voltage UPS makers. The capacitor and cell suppliers are not, because their boom and bust already happened in 2026: many are 44–68% below their June highs.

**2. The last centimeter is the physics bottleneck**

A GPU of NVIDIA's next generation (Rubin) dissipating about 2.3 kW at a core voltage near 0.75 V draws roughly **3,000 amperes**. If that current crossed a circuit board sideways through only 50 micro-ohms of resistance, the loss would be 3,000² × 50×10⁻⁶ ≈ 450 watts, about a fifth of the chip's own power (my calculation). So voltage regulators move *under* the package, a technique called vertical power delivery. There, current density per square millimetre is the binding constraint. Vicor claims 3 amperes per mm² now and 5 A/mm² in early 2027, against "barely" 1 A/mm² for integrated voltage regulators built into the chip package. That is a company claim, but it shows that the problem is one of physics, not factory capacity [P1-13].

The intellectual property here is in active litigation. Vicor's complaints at the US International Trade Commission (ITC) name almost the entire first-generation supply chain, including Delta, Monolithic Power Systems, Infineon, Flex, Celestica, Quanta, Foxconn and Luxshare. One exclusion order, which bars infringing products from import into the US, has already been issued (February 2025), and a new complaint was filed on 9 September 2026 [P1-14][P1-15]. Few investors discuss this risk for Monolithic Power Systems, which trades at about 39 times 2027 earnings.

**3. The hyperscaler DC standard is built on the electric-vehicle supply chain, so do not pay for chip pricing power**

Because ±400 V reuses 650 V and 1,200 V electric-vehicle parts, 800 V is *deflationary* for silicon-carbide (SiC) and gallium-nitride (GaN) prices. At the crystal and substrate layer, SiC is in glut. Chinese 6-inch substrates fell to about $400 or less, and Yole Group, a semiconductor market-research firm, put upstream utilization near 50%, with the downturn lasting into 2027–28 [P2-49][P2-47]. At the layer of finished devices that customers have qualified, supply is tight. Infineon says AI power demand "exceeds available supply… first come, first served" [P2-3], and onsemi is at 83% utilization and pushing a second price rise [P2-10].

The content is what grows. Power-semiconductor dollars per megawatt rise by about 60% at the midpoint, and the high-voltage share rises from about 30% to about 50% (onsemi: about $15,000 per rack today against more than $115,000 in an 800 V rack; Infineon: $100–250 per kW, $175 on average) [P2-11][P2-2]. Device makers that buy substrates from many suppliers capture the spread between cheap wafers and tight devices. Captive crystal growers and GaN small caps do not.

**4. Electrical codes and certified protection gate facility-wide DC**

An arc in a DC circuit does not extinguish itself, because the current never passes through zero as it does in AC. Interrupting 800 V therefore needs either long mechanical arc chutes or a **solid-state circuit breaker** that opens in microseconds. Full support for 800 V DC in the US National Electrical Code is targeted only for the 2029 cycle. The safety standard NFPA 70E has no protective-equipment tables for 600–1,000 V DC, and the arc-flash standard IEEE 1584 does not cover DC [P1-8]. Until then each site needs case-by-case approval from the local electrical authority. Certified products are therefore scarce credentials. ABB's SACE Infinitus is described as the first solid-state breaker certified under the international (IEC) circuit-breaker standard 60947-2 (1,250 V DC, 2,500 A, under 25 microseconds) [P1-28]. LS Electric holds the first 1,500 V DC molded-case breaker (a compact breaker type used in switchboards) certified by UL, the main US product-safety certifier, and Eaton's medium-voltage solid-state transformer has IEC certification [P1-31].

**5. Solid-state transformers are over-hyped for 2026–28 and under-appreciated for 2029–32**

In May 2026 the number of commercial-class solid-state transformers in revenue service worldwide was "measured in single digits", and no vendor had UL data-center certification [P1-16][P1-8]. They cost about twice as much as a conventional transformer. Their efficiency is only about 0.5–1.5 points better than a transformer followed by a rectifier, the conventional AC-to-DC converter (my estimate). Their medium-frequency transformer needs roughly three times the insulation [P1-17]. The semiconductor content is small, about $8–12 per kW of silicon carbide [P2-39], so a solid-state transformer is an integration and certification problem, not a chip shortage.

When they do scale, after about 2029, they replace the *medium-to-low-voltage distribution transformers and low-voltage switchboards* in new DC halls, not high-voltage substations. On a five-year view that is a risk for distribution-transformer specialists such as Hammond Power and the distribution segment of Forgent. It is not a risk for the extra-high-voltage makers.

**6. The big-iron bottleneck has narrowed to the top of the voltage stack, and US tariffs are inverted**

McKinsey estimates that Europe and North America had a 38% transformer shortfall in 2025. It expects the backlog to reach 3.3 times annual supply by 2030, with lead times of up to five years for the largest units [P3-5]. Survey averages are 128 weeks for power transformers and 144 weeks for generator step-up units [P3-1]. Below about 10 MVA (megavolt-amperes, roughly megawatts of transformer capacity), however, the market is loosening. Hammond's backlog fell 6.9% in a quarter as shipments exceeded orders, and tap-changers, the switches that adjust a transformer's voltage ratio, now ship in 16 weeks [P3-56][P3-55]. The new choke point is high-voltage bushings. They have lead times of up to two years, and the first US-made 765 kV dry-type bushings arrive only in early 2028 [P3-54].

A tariff detail I have not seen discussed by investors favors makers with US factories. Under the 9 April 2026 Section 232 proclamation (US tariffs set on national-security grounds), imported grain-oriented electrical steel pays 50% and cores pay 25%. Finished liquid-filled transformers above 10 MVA pay only 15% until 31 December 2027, and then 25% [P3-45]. That implies a rush of imports in 2027, followed by pricing power from 2028 for transformers built in the US. Plants that qualify include HD Hyundai Electric's in Alabama, Hyosung's in Memphis, Siemens Energy's in Charlotte (2027) and Hitachi Energy's in South Boston (2028). Yet HD Hyundai Electric and Hyosung trade 52% and 39% below their 52-week closing highs, and LS Electric 34%.

### Bottleneck scorecard

| Bottleneck | Binding until | Who holds the scarce position | Market pricing (Oct 2026) | My expression |
|---|---|---|---|---|
| Extra-high-voltage transformers and step-up units (345–765 kV) | 2028–29 | Hitachi Energy, Siemens Energy, HD Hyundai Electric, Hyosung, GE Vernova (Prolec) | Korean makers 34–52% below highs; Western peers 21–40× earnings | HD Hyundai Electric, Hyosung, Siemens Energy |
| High-voltage bushings and breakers | 2028 | Trench (private), Hitachi Energy, Siemens Energy, Hyosung–Quanta joint venture | Mostly private or diluted | Hyosung, Siemens Energy |
| Engineered medium-voltage switchgear and power rooms | 2027–28 | Powell, Eaton, Schneider, Siemens, ABB, Forgent | Powell 41% below its high | Powell |
| Rack power and battery backup (sidecar and 800 V) | 2026–28 | Delta (about 50–70%), Lite-On (about 35%) | Delta 29×, Lite-On 19× 2027 earnings | Delta, Lite-On |
| Qualified power devices (SiC, GaN and silicon MOSFETs, the standard power transistors) | Now to 2027 | Infineon, onsemi, STMicroelectronics; silicon MOSFETs are "fully constrained" (Delta) | Infineon 32%, onsemi 40% below highs | Infineon, onsemi |
| Current density at the GPU (vertical power delivery) | Now, rising | Vicor (patents); Monolithic Power Systems (MPS), Infineon, Delta (first generation) | Vicor priced; the litigation risk is not priced at MPS | Watch Vicor |
| DC protection and code approval | 2027–29 | ABB (IEC solid-state breaker), LS Electric (UL DC breaker), Eaton | ABB about 27× with a consensus "hold"; LS Electric 41× | LS Corp (the cheaper route to LS Electric); ABB only at a lower price |
| Transmission crews and field electricians | 2027–29 | Quanta, MYR Group, EMCOR, Comfort Systems | Leaders at 21–34×; MYR Group about 20× | MYR Group (Accumulate) |

**Not bottlenecks:** silicon-carbide and gallium-nitride wafers (glut); magnetic core materials for solid-state transformers (Qingdao Yunlu is 32% down this year, so there is no scarcity rent); copper (a cost, not a shortage, and 800 V uses less of it); the 800 V → 12 V converter chips (ten or more credible vendors within about one point of efficiency); multilayer ceramic capacitors (already re-rated); grain-oriented steel outside the US.

### What is already priced, or weaker than the narrative

| Narrative | What the evidence says |
|---|---|
| "Solid-state transformers replace transformers soon" | Single-digit units in revenue service (May 2026), about 2× the cost, no UL data-center certification yet. Dell'Oro expects them to dent UPS demand only from 2029 [P1-18]. |
| "800 V DC is a 2026 story" | 2026 is ±400 V sidecars plus small-volume 800 V. Volume comes in 2027, hall-level in 2028 (Vertiv), and Kyber may slip [P1-4][P1-2]. |
| "DC saves 5–10% of energy" | Google measured about 3% for its ±400 V sidecar. Vertiv expects a "low-to-mid single-digit" facility gain [P1-23][P1-37]. |
| "800 V is bullish for copper" | Copper per megawatt inside the hall falls 40–50% [P1-11]. |
| "Vertiv owns the 800 V rack" | Its 800 V portfolio is real (rack and pod in 2027, hall in 2028), but the stock is a consensus favorite and its central-UPS franchise faces the 2028+ mix shift. |
| "Capacitors and supercapacitors are the AI power super-cycle" | Already re-rated: Samsung Electro-Mechanics is up about 520% this year and Murata about 160% [X-13]. They peaked in June–July, and the storage-component small caps are 44–68% below their highs. |
| "Gallium-nitride and silicon-carbide small caps are the 800 V trade" | Navitas is loss-making, with quarterly revenue of about $10–14 million. Wolfspeed runs a −20% gross margin. The solid-state transformer needs only $8–12 per kW of silicon carbide. |
| "US electrical steel is the hidden bottleneck" | It is real in the US, but it is not investable. Electrical and stainless steel are about 4% of Cleveland-Cliffs' volume, and Europe and China have a surplus [P3-37]. |

---

## Part 2: Generation (turbines, engines, fuel cells, nuclear and its fuel chain)

### Eight engineering realities the market has not fully priced

**1. Engineers have already moved the 2026–28 build to reciprocating engines; the market still calls them a stopgap**

The largest onsite plants announced in 2026 are engine plants, not turbine plants: Oracle's 2.3 GW from VoltaGrid uses 92 containerized blocks of 25 MW built on INNIO Jenbacher engines, OpenAI's Shackelford County site in Texas is specified with more than 500 Jenbacher J624 engines for 1.4 GW of computing load, and Wärtsilä booked a 790 MW plant of 42 medium-speed engines in Texas on its way to 2.4 GW of US data-center orders [G1-28][G1-54][G1-32]. Engines deliver in 12–24 months, come in small blocks that keep each site under "minor source" emission thresholds, and provide the many spinning generators that an islanded plant needs to ride through a data center's power swings [G1-54]. The order books show the shift: INNIO's equipment backlog rose 279% to $6.6 billion, Caterpillar's large-engine backlog has more than tripled since January 2024 and it is restarting a 10 MW engine line with 1.5 GW of annual capacity from the fourth quarter of 2026, and Wärtsilä plans to raise capacity 2.2 times by 2029 [G1-26][G1-17][G1-16][G1-31]. Yet INNIO trades 51% below its high and 26% below its June IPO price, and Wärtsilä carries a consensus "hold" [X-23].

**2. Reservations are not orders, and the pricing has not reached revenue yet**

GE Vernova expects its 2026 orders to be priced "10 to 20 points higher" per kilowatt than its late-2025 orders, and trade press reports a path to about $600 per kW by the end of 2027, nearly three times the 2019 level [G1-3][G1-4]. Those prices belong to slots that deliver in 2029–31, so they reach revenue only in 2028–29. Meanwhile 90% of GE Vernova's new signings are reservations [G1-1]. A turbine maker's shares therefore carry two layers of expectation: that the reservations convert, and that the 2028 margins (GE Vernova targets 20% by 2028) hold through a capacity doubling [G1-4]. That is a lot to pay 40 times 2027 earnings for.

**3. Casting, not assembly, sets the ceiling**

The first-stage blades and vanes of a gas turbine run above the melting point of their own alloy and survive through internal cooling channels and ceramic coatings. They are cast in nickel superalloys, often as single crystals, by a handful of foundries: Howmet, Precision Castparts (inside Berkshire Hathaway), Doncasters (private) and the captive foundries of the turbine makers (G1 report, section 6). Elon Musk said "the limiting factor for gas turbine production is casting the blades", and SpaceX bought about 336 hectares at Bastrop, Texas for its own blade foundry; Korean analysts expect no volume production there before 2030 because single-crystal casting "demands a higher level of technical expertise" [G1-46][G1-12]. Howmet's gas-turbine revenue grew 38% year on year in the June quarter, with customers "already revisiting and adding to their demand outlooks" and capital spending rising again in 2027 [G1-43]. It is the only listed pure exposure to the layer that every turbine expansion must pass through, and aerospace still sets its multiple.

**4. Permits, not equipment, now pace turbine-based onsite power, which is why one fuel-cell maker owns a niche**

The federal rules loosened in 2026: the Environmental Protection Agency's January turbine rule exempts low-use turbines from the heaviest permitting and streamlines temporary installations, and July guidance exempts islanded plants from the acid-rain program [G1-62][G1-63]. The courts tightened: xAI ran 27 unpermitted mobile turbines at Southaven, Mississippi for seven months before a 41-turbine permit was granted in March 2026, and environmental groups filed notice to sue over permit-splitting at San Antonio data centers in July [G1-61][G1-63]. In counties that already breach air-quality standards, a solid-oxide fuel cell, which converts gas to electricity without combustion, needs no combustion permit, which is why Oracle's Project Jupiter dropped a turbine design mid-permitting and why Bloom Energy has booked about 3.8 GW against 0.03 GW for FuelCell Energy, the other US solid-oxide maker [G1-54][G1-38]. The investment problem is the price: Bloom trades at about 58 times 2027 earnings and above the analysts' mean target, one customer was about 73% of its June-quarter revenue, and a short seller questioned its scandium supply in July [G1-37][G1-39]. Right company, wrong multiple.

**5. Bridge power is becoming permanent, and the grid's arrival in 2029–31 will re-role the plants**

Microsoft's 2 GW campus at Pecos, Texas, with 2.67 GW of gas generation, will run "behind the meter initially" on GE Vernova turbines with a 20-year gas supply from Chevron, with first power in 2028; Solaris Energy Infrastructure has about 2.3 GW of turbines under long-term power contracts; xAI bought the mobile-turbine lessor APR Energy for about $1 billion [G1-60][G1-25][G1-24]. Grid connections for the 2025–27 onsite cohort are routinely expected in 2029–31, a median of more than five years from request to operation [G1-59][G1-55]. When the grid arrives, an onsite plant becomes a peaking or backup asset. Engines and aeroderivative turbines can be moved to the next site; a frame turbine delivered in 2029 and sized for islanded operation cannot. That favors the engine makers and the owners of mobile fleets over the frame-turbine order book, and it is a reason to read the "BTM utility" business models (Solaris, Williams, Kodiak) as contracts with a tenor rather than as permanent utilities.

**6. Nuclear before 2030 is three restarts and some uprates; everything else is re-labelled existing output**

About 9.2 GW of US nuclear output is now under long-term contracts with hyperscalers: Clinton to Meta from June 2027, Susquehanna to Amazon ramping to 2032, Comanche Peak from late 2027, Vistra's four PJM reactors to Meta, and Constellation's 920 MW of new deals [G2-10][G2-21][G2-19][G2-20][G2-5]. Almost all of it is electricity that already exists. The net-new supply before the end of 2030 is the three restarts, about 2.25 GW (Crane 835 MW in the second half of 2027; Palisades 800 MW, whose fuel loading was paused on 25 September 2026 after a fuel assembly tilted in the vessel, against a March 2027 supply deadline; Duane Arnold 615 MW in the first quarter of 2029 with a $1.9 billion Department of Energy loan), plus about 0.4–0.6 GW of approved uprates [G2-7][G2-13][G2-16]. My estimate from the G2 report is that net-new nuclear covers about 4–8% of the increase in US data-center consumption between 2023 and 2030. The clean-firm premium is real but modest: analysts put the Microsoft–Crane contract at $98–115 per megawatt-hour and the Meta–Clinton contract at about $70, roughly $20 above Illinois market revenue, and Constellation frames its uplift as a "$20 to $50" sensitivity [G2-11][G2-7]. No data-center buyer has yet signed a contract that would pay for a merchant-financed new reactor: at Vogtle's cost an AP1000 needs about $170 per megawatt-hour at an 8% cost of capital, or about $105 with government-rate debt, which is exactly why the June 2026 package of $17.5 billion in Department of Energy loans targets the long-lead components for up to ten AP1000s, and why there are seven letters of intent and zero binding orders [G2-28][G2-25].

**7. The nuclear choke points are fuel, forgings and pumps, not reactor designs**

Centrus Energy runs the only US-owned HALEU cascade; its $900 million Department of Energy contract (finalized 3 July 2026) keeps the 16-centrifuge cascade running while new capacity arrives "by 2029", and Urenco's HALEU plant in Britain is targeted for 2031 [G2-74][G2-76]. The Russian low-enriched-uranium import ban ends all waivers on 1 January 2028, and Centrus holds waivers only through 2027 deliveries [G2-64][G2-65]. Only three forges in the world make Generation III+ reactor pressure vessels, Doosan Enerbility (17,000-tonne press), Japan Steel Works (14,000 tonnes) and China First Heavy Industries, each yielding on the order of four vessels a year; Curtiss-Wright's Cheswick plant makes 12–16 reactor coolant pumps a year, three to four reactors' worth, and committed $80 million in July 2026 to expand [G2-79]. The Department of Energy's $17.5 billion is explicitly aimed at buying these slots early [G2-28]. Meanwhile the listed reactor developers have been repriced violently (Oklo 79% below its high, NuScale 85%, NANO Nuclear 72%, X-energy 60% from its post-IPO high, Terrestrial 86%), Holtec pulled its IPO the day before pricing, and the "order books" they cite are letters of intent [G2-80][G2-15][G2-43][G2-49]. The Department of Energy's reactor pilot program did deliver five criticalities by August 2026, including Oklo's Groves unit, but all five are zero- or low-power test reactors; Groves is a 15-megawatt-thermal isotope test reactor, not Oklo's 75 MW Aurora, whose commercial operation is now targeted for 2028 [G2-46][G2-57][G2-47].

**8. The overbuild is dated: 2030–31**

Announced turbine capacity rises from about 54 GW a year today to roughly 80–85 GW a year by 2028–30 (GE Vernova 20 → 24 → 30 GW; Siemens Energy's large-unit lines from 35 to 50 units by 2027; Mitsubishi doubling versus 2024; Doosan from 8 to 12 units a year), against a pre-boom global market of about 30–40 GW a year (my estimate from the G1 report) [G1-1][G1-7][G1-9][G1-11]. The order book covers 2029–30; after that, intake must stay above about 60 GW a year or margins meet a cliff in 2030–31. The first warning would be reservation cancellations, which are not yet disclosed. Mitsubishi's "selective" utility-weighted book is the most defensive of the four; whoever holds the most unconverted reservations in 2029 is the most exposed [G1-8]. Uranium has the same shape, a few years later: the term price is at a record $96.50 per pound while miners have de-rated 16–55% and utilities are "reluctant to contract"; the slow supply response (Kazatomprom's acid-constrained volumes, new mines such as NexGen's Rook I) points to a 2028–35 tightness rather than a 2026–27 one [G2-68][G2-69][G2-71].

### Bottleneck scorecard

| Bottleneck | Binding until | Who holds the scarce position | Market pricing (2 Oct 2026) | My expression |
|---|---|---|---|---|
| Heavy-duty gas turbines (300–600 MW) | 2029–30; capacity doubling lands 2028–30 | GE Vernova, Siemens Energy, Mitsubishi Heavy, Doosan Enerbility | GE Vernova 40× 2027; Siemens Energy about 23× (1 October close, electrification page); Mitsubishi 25× (27% below its high); Doosan 78× | Mitsubishi Heavy; Siemens Energy (card on the electrification page) |
| Single-crystal blade and vane castings | 2030 at the earliest (SpaceX foundry) | Howmet, Precision Castparts (Berkshire), Doncasters (private), captive foundries | Howmet 36× 2027, 21% below its high; aerospace sets the multiple | Howmet |
| Reciprocating engines and engine packages for 2026–28 plants | 2026–28 | INNIO, Caterpillar, Wärtsilä, Cummins, Rolls-Royce Power Systems; VoltaGrid and Rehlko (private) | INNIO 25× 2027, 51% below its high; Wärtsilä consensus "hold"; Cummins 16× | INNIO, Wärtsilä, Cummins |
| Aeroderivative and small turbines, generators to pair with them | Past 2030 for GE aero slots | GE Vernova, Baker Hughes (NovaLT and Brush generators), Solar Turbines, ProEnergy (private) | Baker Hughes 19× 2027 | Baker Hughes |
| Permit-free onsite power (fuel cells) | 2026–28 in polluted counties | Bloom Energy (3.8 GW booked against 0.03 GW for FuelCell Energy) | 58× 2027, above the consensus mean target | Wait for a lower price |
| Gas-plant engineering and construction slots; boilermakers (10,200 in the US) | 2027–29 | Argan (Gemma Power), Kiewit and Bechtel (private), Fluor from 2027 | Argan 24× FY1/28, 52% below its high | Argan (small) |
| HALEU enrichment | 2029 (Centrus), 2031 (Urenco) | Centrus (only US producer); Urenco and Orano (state-owned) | Centrus 36× 2027, 68% below its high; cash is two-thirds of its market value | Centrus (speculative) |
| Reactor pressure vessel forgings | Through the AP1000 and SMR build (2028–35) | Doosan Enerbility, Japan Steel Works, China First Heavy (state) | Japan Steel Works 20× FY3/28, 31% below its high; Doosan 78× | Japan Steel Works |
| Reactor coolant pumps, TRISO fuel, naval-grade components | 2028–35 | Curtiss-Wright (12–16 pumps a year); BWX Technologies (TRISO, heavy components) | BWXT 26× 2027, 43% below its high; Curtiss-Wright 32× | BWX Technologies; Curtiss-Wright (smaller) |
| Uranium and conversion | 2028–35 (term price already at a record) | Cameco (also 49% of Westinghouse), Kazatomprom, Orano (state) | Cameco 47× 2027 (earnings understate); Kazatomprom about 10× | Cameco; Kazatomprom (speculative) |

**Not bottlenecks:** natural gas itself (US production is at records; the constraint is pipe, covered on the energy-provider page); uranium pounds before 2028 (two financial vehicles hold more than 100 million pounds and utilities are not contracting); reactor designs (two US construction permits are issued and the licensing clock is now 14–18 months); hydrogen readiness and carbon capture (no onsite plant surveyed has either); and diesel standby generators (a facility item, covered on the electrification page).

### What is already priced, or ahead of the engineering

| Narrative | What the evidence says |
|---|---|
| "Gas turbines are sold out to 2030, so own GE Vernova" | The shortage is real, but 90% of GE Vernova's new signings are reservations, only 29 large turbines were firmly ordered in the US in the first half of 2026, and the stock trades at about 40× 2027 earnings, with its 2026 earnings inflated by a pre-tax gain of about $4 billion from remeasuring its Prolec stake [G1-1][G1-11][P3-18]. |
| "Engines are a stopgap" | Oracle 2.3 GW, OpenAI 1.4 GW and Wärtsilä's 2.4 GW of US orders are engine plants, delivering in 12–24 months against three-plus years for a turbine [G1-28][G1-54][G1-32]. |
| "Bloom is the fuel-cell winner" | True, and priced: 58× 2027 earnings, above the mean target, 73% of revenue from one customer [G1-37]. |
| "AI needs nuclear; buy the developers with gigawatt order books" | Oklo's roughly 15 GW is letters of intent and master agreements, NuScale's 6 GW framework is non-binding, neither has a construction permit, and Oklo's trailing revenue is $1.2 million. The group fell 60–86% from its highs and is still not valued on cash flow [G2-49][G2-43][G2-80]. |
| "Restarts are easy money" | Palisades slipped from late 2025 to past March 2026, then paused fuel loading in September 2026 after a fuel-handling incident; Holtec pulled its IPO [G2-13][G2-15]. |
| "Ten AP1000s under construction by 2030" | Financing exists on paper ($17.5 billion of conditional loans); binding orders do not. Poland's first concrete is in the fourth quarter of 2028 [G2-28][G2-35]. |
| "Uranium is the bottleneck" | The term price is a record, but the scarcity is 2028–35: inventories are high and utilities are "reluctant to contract" [G2-68][G2-69][G2-70]. |
| "Hydrogen-ready and carbon capture make gas acceptable" | No hydrogen supply exists at any onsite plant surveyed; combined cycle with 95% capture costs about $2,365 per kW against $836 for a simple-cycle turbine [G1-29]. |
| "Steam boilers are the workaround" | A real 1.2 GW contract and a $2.6 billion backlog at Babcock & Wilcox, but $240 million of debt against $57 million of equity, and the workaround ends when turbines are available again [G1-47][G1-48]. |
| "Onsite plants are stranded when the grid arrives" | Partly priced in the lessors, not in the engine makers: engines and aeroderivatives are redeployable, frame turbines are not [G1-25][G1-59]. |

---

## Part 3: Energy providers (utilities, merchant generators, gas pipelines and compression, international providers)

### Nine realities the market has not fully priced

**1. The queues are fiction; the contracts with collateral are real**

The North American Electric Reliability Corporation raised its ten-year peak-demand growth forecast to 224 GW (+24%), most of it data centers, and Grid Strategies' five-year forecast is 166 GW, of which it says about 25 GW is overstated [U1-2][U1-3]. The queues are an order of magnitude larger than anything plausible: 438 GW of large-load requests in Texas, 200 GW at Oncor alone, and 60 GW of utility-submitted 2030 load in PJM that the operator cut to 34 GW before publishing [U1-10][U1-65][U1-8]. The useful number is what survives a collateral demand. Exelon's "high-probability" load fell 40% to 11 GW when it required transmission security agreements; Dominion reports 12.0 GW of firm agreements out of a 53.8 GW "contracted" pipeline; FirstEnergy 6.4 GW under contract against 24.8 GW; Southern 17 GW under 15-year minimum contracts [U1-19][U1-52][U1-66][U1-56]. Twenty-five states now have approved large-load tariffs: AEP Ohio requires an 85% minimum bill for up to 12 years; Virginia's tariff from January 2027 requires 14-year contracts, payment for 85% of wires and 60% of generation costs regardless of use, and $1.5 million of collateral per MW [U1-15][U1-13][U1-16][U1-17]. These tariffs convert speculative load into a financeable contract and move the stranded-asset risk from ratepayers to hyperscalers' balance sheets, which is what makes regulated rate base defensible.

**2. The merchants are hedged through 2027, so the de-rating is about 2028 and about rules**

Vistra is about 94% hedged for 2027 and 72% for 2028, with a 2027 EBITDA "opportunity" of $7.4–7.8 billion before about $700 million from Cogentrix; Talen is about 70% hedged for 2027 and 30% for 2028 [U1-42][U1-43][U1-47]. Constellation raised 2026 guidance to $11.50–12.50 per share and signed 920 MW of new 15-to-20-year nuclear contracts in one quarter, yet closed 36% below its high [U1-37][U1-38]. The drivers I can document are the capped PJM price, the backstop suspension, "meaningfully lower" Texas forward curves, NRG tracking below its guidance midpoint on softer Texas prices and a $70 million Virginia carbon-market charge, and a rotation out of 2025's winners [U1-43][U1-48][U1-40]. Per-share sensitivity to $1 per MWh of open power price is about $0.90 for Talen, $0.35 for Vistra and $0.40–0.60 for Constellation (U1 estimates). Talen is the most levered, Constellation the most contracted; 2028 is the open year for all of them.

**3. Nuclear contracts are a pricing story, not a supply story, and the islanded co-location model is dead**

About 9.2 GW of US nuclear output is under hyperscaler or large-corporate contract (the G2 report's estimate), at premiums that Constellation itself frames as "$20 to $50 a megawatt-hour" over market [G2-7][G2-11], but almost all of it is existing output re-labelled; the net-new supply before 2030 is the three restarts and about 2,400 MW of uprate applications expected through 2032 [U1-76][U1-39]. The regulator settled the structure: it rejected the behind-the-meter arrangement at Susquehanna and refused to reconsider [G2-95], Talen moved its Amazon contract to a grid-connected supply through PPL's wires, and PJM's proposed co-location services, filed to take effect in July 2026, cap behind-the-meter generation at 50 MW [U1-33][U1-31][U1-32]. Texas went further and ruled that a co-located load can be curtailed without regard to its paired generator [U1-11]. The winners of that transition are the owners of already-interconnected plants and the wires utilities that carry the power; the losers are the "island a data center on a reactor" plans.

**4. Regulated utilities: load lowers bills in Texas and the Midwest, and raises them in Virginia and Georgia**

Affordability politics is the real 2026–27 risk for regulated names, and it is already differentiating them. Virginia's regulator cut Dominion's requested return from 10.4% to 9.8% and removed about $350 million of speculative data-center costs; Exelon withdrew a Pennsylvania rate request; Georgia bills rose $43 a month in two years and the Public Service Commission faces elections [U1-16][U1-35][U1-58]. In the other direction, CenterPoint projects at least $5 billion of delivery-charge reductions for other customers from new load in Houston, Alliant says growth keeps Iowa rates flat through at least 2029, and Entergy cites $7 billion of cumulative customer benefits from its industrial load growth [U1-67][U1-69][U1-60]. The sector trades at 14–20 times 2027 earnings near 52-week lows; the discount is for politics and equity issuance, not for a shortage of load. Within it, the wires-heavy names with tariff-backed load (PPL, Sempra's Oncor, FirstEnergy) carry the least political risk, because federal transmission rates are formulaic and Virginia-style direct assignment protects the rate base.

**5. Gas is the marginal fuel, and the constraint is pipe, not gas**

Estimates of incremental gas demand from data centers have roughly tripled in eighteen months, from 4–6 billion cubic feet a day (Bcf/d) by 2030 to BloombergNEF's 15 Bcf/d by 2035 and Wood Mackenzie's 17 Bcf/d of power-sector growth, against about 107 Bcf/d of current US production; the Energy Information Administration still forecasts gas at $3.28 per million British thermal units in 2027, so the molecule is not yet priced [U2-3][U2-12][U2-7]. The pipe is. Every data-center-linked interstate project lands in 2027–29: Transco's 1.6 Bcf/d Southeast expansion in the fourth quarter of 2027, Kinder Morgan's Mississippi Crossing in the second quarter of 2028 and South System Expansion 4 in 2028–29, Boardwalk's Kosci Junction in the first half of 2029 [U2-19][U2-1][U2-50]. EQT lists nearly 20 Bcf/d of potential Appalachian projects but warns that a third of the basin's supply "will be challenged to hold flat" without new takeaway, and October forward prices opened a $2 gap between Appalachia and the Southeast [U2-18][U2-59]. The producers therefore get the demand but not the price; the pipeline owners get both.

**6. Pipeline backlogs are the cleanest evidence that the demand is real**

Kinder Morgan's backlog is $9.6 billion, 92% natural gas and "more than 60%" tied to power generation and utility demand [U2-1]. Williams raised its 2026 EBITDA guidance to $8.3–8.5 billion and its long-term growth target to 11% or more a year through 2030, has a 2.6 GW behind-the-meter power portfolio funded by a $5.34 billion Blackstone joint venture, and reports a "6 GW+" power backlog [U2-5][U2-48]. DT Midstream has a $3.4 billion backlog and counts 7.5 Bcf/d of potential gas demand from 50 GW of large loads announced by Midwest utilities; TC Energy has two Columbia expansions explicitly for data-center generation; Enbridge's C$41 billion secured backlog includes 1.4 GW of renewables and 1.6 GWh of batteries contracted to Meta [U2-10][U2-8][U2-38]. These backlogs rose in every second-quarter report the research read, while the shares of most of the group fell.

**7. Behind-the-meter power moved from pilot to portfolio, and the compression companies are the quiet beneficiaries**

Williams delivered first power at the 200 MW Socrates plant for Meta in Ohio in under 18 months and has 2.6 GW of similar plants in hand [U2-5]. Kodiak Gas Services, a compression lessor, bought a 405 MW power fleet, ordered 1 GW of gas turbines for delivery by 2030, targets 2 GW, and on 21 September 2026 signed a 76 MW, six-year primary-power contract for a West Texas data center [U2-9][U2-44]. The engineering point is that compression companies already own the gas-engine service network and the turbine allocations that an onsite plant needs; the "quiet" beneficiaries are the ones with Caterpillar and turbine slots, not the ones with the best slides. For utilities, behind-the-meter power is a threat to load forecasts, not to 2026–29 earnings: about 90 GW is announced and about 2 GW operates [U1-20].

**8. Flexible data centers are the unpriced engineering transition**

Duke University's Nicholas Institute estimated that 76 GW of new load could be added to the existing US grid if data centers curtailed about 0.5% of their hours [U2-42]. Google has embedded 1 GW of demand response into agreements with five utilities; Georgia Power's 3.2 GW, 25-year contract with OpenAI includes 1 GW of flexible demand, the first such clause Southern has codified; PJM's connect-and-manage and curtail-first rules take effect in June 2027; Texas mandates curtailment [U1-77][U1-56][U1-28][U1-11]. Flexible, partly curtailable load is worth more to a capacity-short grid than firm load: it lowers the generation a utility must build while preserving the wires rate base, and it reduces the scarcity rent of peaking plants. That favors transmission-and-distribution utilities and slightly hurts peaker owners, and it is in nobody's capital plan yet.

**9. Outside the United States, the grid connection is the product, and regulators are now pricing it**

Ireland requires any new data center above 10 megavolt-amperes to bring 100% matching generation; TenneT says large parts of Noord-Holland, including Amsterdam's business district, have no new grid capacity for at least ten years; Britain's demand connection queue tripled to 125 GW and is being re-ordered with deposits; Hydro-Québec proposed a 13-cent-per-kilowatt-hour data-center rate, about double its large-industrial rate; Korea is creating eleven regional price zones while its utility carries ₩202 trillion of debt [U2-32][U2-46][U2-33][U2-49][U2-34]. Only a handful of non-US providers have contracted, dated data-center load: Capital Power's 250 MW for Meta in Alberta from the second half of 2028, TAQA's 1 GW plant, financed explicitly to serve Abu Dhabi's AI strategy under a state offtake contract, YTL Power's planned 1.2 GW campus in Johor, and RWE's two European deals "nearing agreement" [U2-17][U2-53][U2-37][U2-30]. Everyone else has generic demand growth that is real but neither contracted nor dated. Europe's AI capacity will be smaller, later and more expensive than America's, which is good for the few owners of connected sites and bad for almost everyone else.

### Bottleneck scorecard

| Bottleneck | Binding until | Who holds the scarce position | Market pricing (2 Oct 2026) | My expression |
|---|---|---|---|---|
| Interconnected firm capacity in PJM | Through the 2029/30 delivery year (cap); May 2027 auction is the test | Talen (10 GW cleared), Vistra, Constellation, PSEG (3.6 GW nuclear), NRG | Talen 10× 2027, Vistra 14×, Constellation 19×, PSEG 15×, NRG 9×; all 20–48% below highs | Vistra, Talen, Constellation, PSEG |
| Nuclear output with a free interconnection | Through 2032 (2,400 MW of uprates in total) | Constellation (Crane 2027, Clinton–Meta), Talen (Amazon), Vistra (Comanche Peak, PJM units), NextEra (Duane Arnold 2029) | Priced into Constellation's premium; the uprate volume is small | Constellation; Talen |
| Texas grid connection | 2027–31 (Batch Zero plan in fall 2027) | Oncor (Sempra; 44 GW eligible), CenterPoint (14 GW eligible), AEP Texas | Sempra 14× 2027; CenterPoint 18× | Sempra; CenterPoint only at a lower price |
| Tariff-backed wires rate base | 2026–30 (765 kV builds) | PPL (11 GW signed), FirstEnergy (6.4 GW), Exelon, Fortis/ITC | PPL 15.5× with a 3.5% yield; FirstEnergy 15× with 4.3% | PPL, FirstEnergy |
| Turbine slots for contracted gas plants | 2031 | NRG (5.4 GW with GE Vernova–Kiewit), Entergy, Duke, Southern, FirstEnergy (Maidsville), PPL–Blackstone | Priced for the turbine makers; the execution risk for 2029–31 utility plans is not | NRG (speculative); the utilities above through their wires |
| Interstate pipe into the Southeast, Virginia and the Midwest | 2027–29 | Williams (Transco), Kinder Morgan, DT Midstream, TC Energy, Boardwalk (Loews) | Williams 27× 2027 (priced); Kinder Morgan 20×; DT Midstream 25× | Kinder Morgan; Williams only at a lower price |
| Compression horsepower and engine-turbine allocations for onsite plants | 2026–30 | Kodiak (1 GW of turbines ordered), Archrock, Williams | Kodiak 17× 2027, 29% below its high; Archrock 14× | Kodiak; Archrock |
| Appalachian takeaway | 2027–29 | EQT (integrated gathering, Mountain Valley Pipeline), Williams | EQT 13× 2027, 26% below its high | EQT |
| Firm clean supply | 2026–30 | Ormat (geothermal), NextEra (gas plus storage plus Duane Arnold), Enbridge, Brookfield Renewable | Ormat 36× after a 36% fall; NextEra 17.5×, 22% below its high | NextEra at a lower price |
| Surplus dispatchable capacity outside the US | 2026–30 | Capital Power and TransAlta (Alberta), TAQA (Abu Dhabi, state-linked), RWE (30 connected European sites) | Capital Power 21× (on depressed earnings), 19% below its high; RWE 18× | Capital Power (speculative) |

**Not bottlenecks:** gas molecules nationally (production at records); PJM energy prices (capped capacity does the work); announced load (queues are six times plausible demand); plain wind and solar power contracts (in surplus in Europe); and US retail electricity supply (NRG's retail book is structurally short power, which is why rising prices hurt it before they help).

### What is already priced, or weaker than the narrative

| Narrative | What the evidence says |
|---|---|
| "Merchant nuclear is the AI power winner" | It was priced in 2025 and is now partly un-priced: Constellation is 36% below its high at about 19× 2027 earnings with 2027 largely hedged. The de-rating reflects the capped PJM upside and the backstop slip, not lost contracts [U1-37][U1-28]. |
| "PJM capacity prices will keep rising" | Priced out: the cap of $325 per MW-day runs through the 2029/30 auction, and the May 2027 reformed auction is the binary [U1-24]. |
| "The backstop gives merchants 15-year contracts" | Not in 2026 numbers; suspended by the regulator into February 2027 [U1-28]. |
| "Utilities will grow 8–9% forever on data centers" | Under-priced for names with tariff-backed load and bill-benefit stories (PPL, Sempra, FirstEnergy, Xcel); fairly priced for the Hold names (Dominion, Southern, Exelon) [U1-70][U1-64]. |
| "Affordability politics will cut utility returns" | Priced for Virginia, Georgia and Pennsylvania; not relevant in Texas and the Midwest, where load lowers other customers' bills [U1-16][U1-67]. |
| "Behind-the-meter power will bypass utilities" | Over-stated: 90 GW announced, 2 GW operating, a 50 MW cap in PJM and mandatory curtailment in Texas [U1-20][U1-32][U1-11]. |
| "Data-center demand is fake" | Half right: the queues are, the contracts with collateral are not (Southern +6 GW, FirstEnergy +50%, Dominion +11% in one quarter) [U1-56][U1-66][U1-52]. |
| "Williams is the AI gas utility" | True, and priced at about 27× 2027 earnings, the highest multiple in US midstream [U2-5]. |
| "Gas producers win from data centers" | Not yet, and rightly: the contracts are small, the Appalachian price gap is the trade, and Expand Energy itself says liquefied natural gas, not data centers, is "in the driver's seat" [U2-56]. |
| "European and Asian utilities get a windfall" | European data-center power contracts fell from 4.2 GW in 2024 to 0.1 GW in the first quarter of 2026; Korea's and Japan's utilities trade as policy instruments, not beneficiaries [U2-31][U2-34]. |
| "Renewables lose to gas" | Over-priced as a negative: NextEra has a 35.1 GW backlog, 30–40 data-center hubs in discussion and 9.5 GW of gas in development, and trades 22% below its high [U2-21]. |

---

## Part 4: Interconnects (copper versus photonics)

### Seven engineering realities the market has not fully priced

**1. The copper wall is a circuit-board materials wall**

SemiAnalysis reported that NVIDIA's Kyber NVL144 rack slipped to 2028 because its printed-circuit-board midplane is hard to build: a 78-layer stack made of three 26-layer sections, close to 1 m², with lines and spaces of 25 µm or less for 448G-class signalling. NVIDIA replied only that its "roadmap is intact" [I3-13]. Morgan Stanley's teardown puts board content at about $116.7k per Vera Rubin NVL72 rack (NVIDIA's 2026–27 rack of 72 GPUs), against $35.1k for the current GB300 rack (relayed, secondary) [I3-52]. Goldman Sachs estimates the effective supply deficit of grade-3-and-above HVLP copper foil at 28%, 39% and 38% for 2026, 2027 and 2028, and Morgan Stanley puts the high-end glass-cloth gap at 40% in 2026 [I3-50][I3-51]. NVIDIA reportedly bypasses laminate makers to lock foil and glass-cloth capacity more than a year ahead [I3-53][I3-54]. Even so, the foil leader (Mitsui Kinzoku) is about 53% below its May high and the glass-cloth leader (Nittobo) about 47% below.

**2. Co-packaged optics cuts the number of lasers, not the indium phosphide**

NVIDIA says its photonic switches use "4× fewer lasers" [I2-15]. The remaining lasers are different devices, however. Lumentum's external-light-source module delivers up to about 250 mW per wavelength across eight wavelengths at about 12 W of module power [I2-7]. That implies a module-level wall-plug efficiency of roughly (8 × 0.25 W) / 12 W ≈ 17%, which makes laser power a first-order item in the power budget (my estimate). High-power continuous-wave lasers, which emit steady light for a separate modulator to encode, need millimetre-long cavities, careful heat removal and often optical isolators, so InP area and value per laser rise several-fold. Lumentum expects ultra-high-power laser revenue to reach about $50 million a quarter by the end of 2026 and its first $100 million quarter in January–March 2027 [I2-1][I2-2]. InP dollars per terabit therefore do not fall in proportion to the laser count.

**3. The InP chain binds, and the move to 6-inch wafers is where the advantage shifts**

The shortage is a chain of four InP-specific steps: substrates (the crystal wafers), epitaxial growth of the laser's crystal layers in MOCVD reactors (metal-organic chemical vapor deposition), front-end laser fabrication (including regrowth, a second epitaxy step needed for modulated lasers, which switch themselves on and off to encode data), and reliability burn-in, in which lasers run hot for days to weed out early failures. Lumentum said in July 2026 that its laser shipments were running more than 30% below demand [I2-5]. Coherent said "fiscal 27 is basically completely booked out", with orders into 2028, and called InP capacity "our primary constraint" [I2-10]. Moving from 3-inch to 6-inch wafers quadruples area. Coherent reports that its 6-inch lines already yield better than its 3-inch lines [I2-10]. Substrate makers find large-diameter InP crystals hard to grow because the material is brittle and prone to twinning, a defect in which part of the crystal grows in a mirrored orientation.

Laser makers are insensitive to substrate prices. At $5,000 per 6-inch wafer, after a reported 250% rise [I2-22], the substrate costs only about $0.09–0.39 per good laser die (my estimate), against laser gross margins near 50%. This is the high-bandwidth-memory pattern: buyers who do not care about price, multi-year agreements and deposits. That is why JX Advanced Metals' announced "price revisions" should stick through 2027 [I2-25].

**4. Indium licensing matters more than indium tonnage**

A 6-inch InP wafer contains only about 43 g of indium (my estimate). A million such wafers a year would use about 4% of world refinery output, which was 1,100 tonnes in 2025, of which China produced about 760 tonnes [I2-41]. The constraint is not the metal. It is China's export licensing of indium, InP and the indium precursor chemicals used in epitaxy, in force since 4 February 2025 and not part of the US–China trade truce [I2-45][I2-46]. AXT, whose crystal growth is in China, was still waiting for permits to ship to US customers in August 2026 [I2-21]. Japanese substrate makers (Sumitomo Electric, JX Advanced Metals) are the beneficiaries.

**5. Optics in scale-up adds demand before it replaces copper**

Because optics enters scale-up between racks first, the 2027–28 optical scale-up market is *additional* demand on top of in-rack copper, not a replacement for it. Copper content per rack is still rising: NVL72 cable cartridges, the Kyber midplane, and 1.6T active electrical cables at Meta and xAI. The copper names most exposed to optics are the active cables between network cards and the top-of-rack switches that connect each rack to the cluster, from about 2028, and the in-rack NVLink backplanes from 2029–30. Circuit-board materials and the retimers for PCIe and CXL, the standard links between processors, memory and devices inside a server, are the least exposed [I3-4][I3-13].

**6. Two single-source choke points are already discovered**

TSMC's COUPE (Compact Universal Photonic Engine), a process that stacks an electronic chip on a photonic chip, is the only volume co-packaged-optics platform for NVIDIA and Broadcom. Its photonic-chip capacity is reported to rise from about 500 wafers a month to 15,000 by the fourth quarter of 2026 and at least 25,000 by 2028 [I3-19]. Soitec reportedly makes about 95% of the 300 mm photonics silicon-on-insulator wafers (silicon wafers with a buried insulating layer that guides light) that silicon-photonics foundries need; that share is a secondary estimate that has not been verified [I2-61]. Soitec expects that revenue to grow 2.5–3× in its fiscal 2027 [I2-62]. Both are real choke points, but the market has found them: TSMC is near its high, and Soitec's shares are up about 580% this year [X-13].

**7. Policy is reshaping the transceiver supply chain**

InnoLight, the largest maker of 800G and 1.6T transceivers (one estimate puts it at 35–40% of 800G and 50–70% of 1.6T), earned 94.8% of its first-half 2026 revenue outside China [X-4][X-12]. On 8 June 2026 the Pentagon added it to the Section 1260H list of "Chinese military companies". Pentagon contracts with listed firms are barred from 30 June 2026, and contracts for goods that *contain* their products from 30 June 2027 [X-5]. The listing does not bar US investors from owning the shares. A further listing by the US Treasury (its Non-SDN Chinese Military-Industrial Complex list) would. Cloud capacity that serves defense customers may therefore need non-Chinese modules from mid-2027, a modest tailwind for Coherent, Lumentum and modules assembled by Fabrinet. A September 2026 equipment rule from the Federal Communications Commission (FCC) did not name Chinese module makers [I3-86].

### Bottleneck scorecard

| Bottleneck | Binding until | Who holds the scarce position | Market pricing (Oct 2026) | My expression |
|---|---|---|---|---|
| InP laser chips (200G modulated lasers; ultra-high-power lasers for CPO light sources) | 2027 | Lumentum, Broadcom, Coherent (captive), Mitsubishi Electric, Sumitomo Electric | Lumentum at its high (about 30× fiscal 2028 and 48× fiscal 2027 earnings); Coherent 25% below its high | Coherent, Broadcom |
| 6-inch InP substrates | 2026–28 | Sumitomo Electric, JX Advanced Metals; AXT (made in China) | Sumitomo and JX 30–37% below their highs | Sumitomo Electric, JX Advanced Metals |
| Epitaxy tools for lasers (MOCVD reactors) | 2026–27 (ramp-rate limited) | Aixtron, Veeco | Aixtron 39% below its high | Aixtron |
| Ultra-smooth copper foil (HVLP grades 4 and 5) | 2026–28 (deficit 28–39%) | Mitsui Kinzoku, Co-Tech | Mitsui 53% below its high, about 15× earnings | Mitsui Kinzoku |
| Low-expansion and low-loss glass cloth | 2026, easing in 2027 | Nittobo (about 90% of T-glass, the low-expansion grade) | 47% below its high; no further price rises | Nittobo (smaller) |
| M8/M9 laminates and 70+ layer boards | 2027–28 | Elite Material, Taiwan Union, Doosan, Panasonic; Victory Giant, Gold Circuit, TTM | Elite Material up 215% this year [X-13] | Priced |
| Packaging for co-packaged optics (COUPE, and SoIC, TSMC's chip-stacking process) | 2026–28 | TSMC | Fair (about 21× 2027) | TSMC |
| Hybrid-bonding tools (which join stacked chips copper-to-copper without solder bumps) | 2027–29 | BESI, Applied Materials | BESI 40% below its high | BESI |
| Fiber attach and optical test throughput | 2027–28 | ficonTEC (owned by RoboTechnik), FormFactor, Molex (Teramount) | Priced or private | None |
| 300 mm photonics silicon-on-insulator wafers | 2026–28 | Soitec (about 95%) | Up about 580% this year [X-13] | Watch |

**Not bottlenecks:** transceiver signal processors (several capable suppliers); pluggable-module assembly (Fabrinet and Chinese manufacturers); passive copper cable (capacity is scaling); 70–100 mW continuous-wave lasers (Chinese entrants such as Yuanjie already ship them); and 3- and 4-inch InP substrates, which could be in surplus by 2029 if co-packaged or scale-up optics slips (an estimate in the I2 report, based on announced expansions [I2-37]).

### What is already priced, or ahead of the engineering

| Narrative | What the evidence says |
|---|---|
| "Optics replaces copper inside the rack in 2027" | NVIDIA keeps copper in the rack through Rubin Ultra and Kyber. Optics enters scale-up between racks in 2027–28, and in-rack optics comes in 2029–30 at the earliest [I3-4]. |
| "Co-packaged optics shrinks the laser market" | It uses fewer lasers, but each needs about 10× the optical power and more InP area. Lumentum's ultra-high-power laser revenue is ramping [I2-2]. |
| "Micro-LEDs will replace copper soon" | Reach is limited to about 20–30 m by fiber dispersion at visible wavelengths, and products are at the evaluation-kit stage [I2-65]. |
| "Glass-core substrates arrive in 2026–27" | SKC's Absolics pushed mass production to 2027 and is loss-making; Intel targets 2030 [I3-70]. |
| "Hybrid bonding arrives with HBM4" | JEDEC, the memory-standards body, relaxed the high-bandwidth-memory stack-height limit to 775 µm, so 16-high HBM4 stacks keep using micro-bumps (tiny solder joints), and hybrid bonding moves to the later HBM4E and HBM5 generations [I3-67]. |
| "Astera Labs is the scale-up winner" | Excellent position (Scorpio switches, Aries retimers), but about 56× 2027 earnings and 20× 2027 sales. |
| "Lumentum is still early" | The best InP franchise, but within 1% of its high, at about 48× fiscal 2027 and 30× fiscal 2028 earnings. |
| "Pre-revenue photonics small caps are the way in" | POET is valued at $1.3 billion on about $1.7 million of trailing revenue, and Lightwave Logic at $0.8 billion on about $0.25 million. |

---

## Picks (from `data/picks.json`; targets = multiple × next-fiscal-year consensus EPS)

Prices for the electrification and interconnect pages are the 1 October 2026 closes for US and European listings and 2 October for Asian listings; the generation and provider pages use the 2 October 2026 closes. The close date is shown in each row.

### Electrification

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
| Also interesting | Flex | FLEX | Accumulate | $112.78 (2026-10-01) | $134 (+19%; 19× FY3/28E consensus EPS) | $160.50 (+42%; 10) | 16.0× FY3/28E | −30% |
| Also interesting | LS Corp | 006260.KS | Speculative buy | ₩298,500 (2026-10-02) | ₩365,000 (+22%; 15× 2027E consensus EPS) | ₩547,750 (+84%; 8) | 12.3× 2027E | −46% |
| Also interesting | Vicor | VICR | Hold | $308.59 (2026-10-01) | $305 (−1%; 50× 2027E consensus EPS; would buy below $240) | $393.75 (+28%; 4) | 50.9× 2027E | −19% |

**Quality names, mostly priced:**

- **Eaton** (ETN), Hold, would buy below $400 (25× 2027E): The best-placed US incumbent: an IEC-certified medium-voltage solid-state transformer, Bussmann DC fuses and Boyd liquid cooling. Americas electrical orders were +41% [P1-89].
- **ABB** (ABBN.SW, ABBNY), Hold, would buy below CHF 68 (23× 2027E): Holds the first IEC-certified solid-state DC breaker (SACE Infinitus), a medium-voltage UPS and a stake in DG Matrix, but trades at about 27× 2027 earnings, and consensus is "hold". ABB sold its power-grids business to Hitachi in 2020–22, so it is not an HVDC supplier.
- **Vertiv** (VRT), Hold, would buy below $200 (22× 2027E): A real 800 V portfolio (rack and pod in 2027, hall in 2028) and leadership in liquid cooling, but a consensus favorite whose central-UPS franchise faces the 2028+ mix shift.
- **Schneider Electric** (SU.PA, SBGSY), Hold, would buy below €240 (20× 2027E): Triple-digit data-center growth is already in its 24× multiple, and it has no shipping 800 V switchboard or solid-state transformer yet.
- **Hitachi (Hitachi Energy)** (6501.T, HTHIY), Hold, would buy below ¥4,650 (18× FY3/28E): The broadest owner of the scarce high-voltage stack (about 1 in 6 of the world's transformers, 1 in 4 high-voltage switchgear, more than 175 GW of HVDC links), but the stock is only about 5% below its high [P3-8].
- **Prysmian** (PRY.MI, PRYMY), Hold, would buy below €110 (18× 2027E): The HVDC-cable oligopoly is running "flat out" with "no pricing pressure", but it is fully recognized, and the pending Atkore deal dilutes quality [P3-69].
- **Nexans** (NEX.PA, NXPRF), Accumulate, would buy below €145 (16× 2027E), price already below: The value member of the cable oligopoly, at about 14.5× 2027 earnings with a €7.7 billion transmission backlog [P3-72]. It is not a top pick because its AI exposure is indirect, through grid connections.
- **Quanta Services** (PWR), Hold, would buy below $550 (28× 2027E): The undisputed leader in transmission construction, priced at about 34× 2027 earnings.
- **MYR Group** (MYRG), Accumulate, would buy below $345 (24× 2027E), price already below: The cheapest pure electrical contractor with transmission leverage, about 41% below its high. Its transmission revenue has not yet inflected.

**Avoid, or wait for a better price:**

- **Monolithic Power Systems** (MPWR), Hold, would buy below $1,000 (30× 2027E): An excellent franchise (data-center revenue +164%), but it trades at about 39× 2027 earnings and is named in two of Vicor's ITC cases [P1-42].
- **LS Electric** (010120.KS), Avoid: It holds the UL 1,500 V DC breaker credential, but at about 41× 2027 earnings the cheaper route is through its parent, LS Corp.
- **Navitas Semiconductor** (NVTS), Avoid: Loss-making on about $10–14 million of quarterly revenue, with 800 V revenue expected from 2027. It is an option, not an investment case.
- **Wolfspeed** (WOLF), Avoid: Runs a −20% gross margin on an adjusted (non-GAAP) basis [P2-23]. Management says it needs an annual revenue run-rate of about $800 million to break even at the gross-margin level [P2-25], against about $600 million at the latest quarterly rate (my estimate).
- **Samsung Electro-Mechanics** (009150.KS), Avoid: Capacitors for AI power are real, but the stock is up about 520% this year and fell about 11% on the Kyber-delay report alone.
- **Fluence Energy** (FLNC), Avoid: Data-center batteries are an under-modelled demand spike, but Fluence has had two guidance cuts, a failed manufacturing ramp and class actions.
- **Cleveland-Cliffs** (CLF), Avoid: It is the only US maker of grain-oriented electrical steel, but electrical and stainless steel are only about 4% of its volume, so it is a steel-cycle stock, not an AI-scarcity owner [P3-37].

### Generation

| Group | Company | Tickers | Claude | Close (date) | Claude target (basis) | Consensus mean (analysts) | Fwd P/E | From high |
|---|---|---|---|---|---|---|---|---|
| Top pick | INNIO Group | INIO | Buy | $19.99 (2026-10-02) | $25.50 (+28%; 32× 2027E consensus EPS) | $37.50 (+88%; 10) | 25.2× 2027E | −51% |
| Top pick | Mitsubishi Heavy Industries | 7011.T, MHVYF | Buy | ¥3,813 (2026-10-02) | ¥4,850 (+27%; 32× FY3/28E consensus EPS) | ¥5,450.6 (+43%; 16) | 25.2× FY3/28E | −27% |
| Top pick | BWX Technologies | BWXT | Buy | $134.86 (2026-10-02) | $168 (+25%; 32× 2027E consensus EPS) | $217.69 (+61%; 16) | 25.7× 2027E | −43% |
| Top pick | Howmet Aerospace | HWM | Accumulate | $231.27 (2026-10-02) | $258 (+12%; 40× 2027E consensus EPS) | $331.50 (+43%; 21) | 35.8× 2027E | −21% |
| Top pick | Baker Hughes | BKR | Accumulate | $56 (2026-10-02) | $66 (+18%; 22× 2027E consensus EPS) | $71.21 (+27%; 24) | 18.6× 2027E | −20% |
| Top pick | Cameco | CCJ, CCO.TO | Accumulate | $85.18 (2026-10-02) | $100 (+17%; 55× 2027E consensus EPS; would buy below $81) | $126.75 (+49%; 11) | 46.8× 2027E | −36% |
| Top pick | Japan Steel Works | 5631.T | Accumulate | ¥7,182 (2026-10-02) | ¥9,300 (+29%; 26× FY3/28E consensus EPS) | ¥11,158 (+55%; 6) | 20.1× FY3/28E | −31% |
| Top pick | Centrus Energy | LEU | Speculative buy | $139.27 (2026-10-02) | $172 (+24%; 45× 2027E consensus EPS) | $247.40 (+78%; 17) | 36.4× 2027E | −68% |
| Also interesting | Cummins | CMI | Accumulate | $528.32 (2026-10-02) | $641 (+21%; 19× 2027E consensus EPS) | $741.26 (+40%; 20) | 15.7× 2027E | −27% |
| Also interesting | Wärtsilä | WRT1V.HE, WRTBY | Accumulate | €29.35 (2026-10-02) | €34 (+16%; 26× 2027E consensus EPS) | €32.98 (+12%; 16) | 22.4× 2027E | −26% |
| Also interesting | Argan | AGX | Accumulate | $383.83 (2026-10-02) | $451 (+17%; 28× FY1/28E consensus EPS) | $570.50 (+49%; 6) | 23.8× FY1/28E | −52% |
| Also interesting | Curtiss-Wright | CW | Accumulate | $545.64 (2026-10-02) | $617 (+13%; 36× 2027E consensus EPS) | $786.25 (+44%; 8) | 31.8× 2027E | −31% |
| Also interesting | Mirion Technologies | MIR | Accumulate | $14.60 (2026-10-02) | $17.50 (+20%; 26× 2027E consensus EPS) | $24 (+64%; 11) | 21.6× 2027E | −51% |
| Also interesting | Kazatomprom | KAP.L | Accumulate | $64.60 (2026-10-02) | $79 (+22%; 12× 2027E consensus EPS) | $92.54 (+43%; 14) | 9.8× 2027E | −16% |

**Quality names, mostly priced:**

- **GE Vernova** (GEV), Hold, would buy below $740 (30× 2027E): The largest turbine book (116 GW under contract, 53 GW firm, rising to "at least 125 GW" by year-end) and pricing up 10–20 points on 2026 orders [G1-1][G1-3]. But 90% of new signings are reservations, the shares trade at about 40× 2027 earnings, and 2026 earnings include a pre-tax gain of about $4 billion on Prolec [P3-18]. The bottleneck is fully priced.
- **Caterpillar** (CAT), Hold, would buy below $710 (22× 2027E): Caterpillar equipment is 33% of permitted US onsite data-center capacity, power-generation retail sales rose 72%, the backlog is $72 billion and it is tripling large-engine capacity versus 2024 [G1-16][G1-17][G1-56]. Construction and mining are still two-thirds of sales, and $2.2 billion of 2026 tariff costs weigh on margins.
- **Generac** (GNRC), Hold, would buy below $200 (16× 2027E): An agreement to supply Amazon's data centers with backup generators worth up to $8 billion, of which about $2.4 billion is scheduled for 2027–28, with warrants on about 1.69 million shares that vest as Amazon buys [G1-35]. The residential business is cyclical, and the large-megawatt capacity only triples by the third quarter of 2027.
- **Solaris Energy Infrastructure** (SEI), Hold, would buy below $63 (18× 2027E): A "behind-the-meter utility": 950 MW earning, about 2.3 GW contracted and 800 MW uncontracted with near-term delivery, with $1.4 billion of liquidity [G1-25]. One customer group (xAI) dominates, the fleet's value falls when turbines become available again in 2029–30, and the Southaven permits are in litigation.
- **Rolls-Royce** (RR.L, RYCEY), Hold, would buy below 1,150p (24× 2027E): mtu Series 4000 engines and the British SMR program, but Power Systems is under a quarter of the group and the shares are priced at about 30× for civil aerospace and defense [G1-33].
- **ATI** (ATI), Hold, would buy below $150 (24× 2027E): Nickel superalloys and forgings for turbine hot sections, but specialty energy is about 5% of revenue and aerospace sets the 30× multiple [G1-44].
- **Carpenter Technology** (CRS), Hold, would buy below $315 (20× FY6/28E): Superalloys for aerospace and energy; energy is about 5% of sales [G1-45]. A good aerospace cycle stock, not a turbine bottleneck owner.
- **Fluor** (FLR), Hold, would buy below $43 (13× 2027E): Wants gas-plant engineering and construction work, but expects meaningful awards only from the first half of 2027, and its backlog fell 4.7% [G1-50]; its NuScale stake is being monetized.
- **Doosan Enerbility** (034020.KS), Hold, would buy below ₩52,000 (50× 2027E): Unique assets: the world's largest nuclear forging press and the only new heavy-duty turbine entrant in a generation, with 7 of the 29 firm US large-turbine orders of the first half of 2026 and deliveries from May 2029 [G1-11][G1-10][G2-79]. At about 78× 2027 earnings, after Korean retail flows, the assets are priced; I would reconsider below 50×.
- **Sprott Physical Uranium Trust** (SRUUF, U-UN.TO), Hold: The cleanest way to own uranium itself (81.7 million pounds in the trust) without company risk [G2-70]. The term price is already a record and the physical tightness is a 2028–35 story, so I treat it as a hold rather than a buy today.

**Avoid, or wait for a better price:**

- **Bloom Energy** (BE), Avoid, would buy below $145 (30× 2027E): The permit-light onsite option that Oracle chose (up to 2.8 GW), with about 3.8 GW booked against 0.03 GW for FuelCell Energy, the other US solid-oxide maker [G1-38][G1-54]. At about 58× 2027 earnings, above the analysts' mean target, with 73% of quarterly revenue from one customer and a disputed scandium supply chain [G1-37][G1-39], the price outweighs the position.
- **Oklo** (OKLO), Avoid: A $6.7 billion market value on $1.2 million of trailing revenue. The Groves criticality in August 2026 is real but belongs to a 15-megawatt-thermal isotope test reactor; the 75 MW Aurora targets 2028 at best, and the "15 GW order book" is letters of intent [G2-45][G2-47][G2-49].
- **NuScale Power** (SMR), Avoid: The only US-approved small-modular design, but no construction-permit application, a non-binding 6 GW framework with ENTRA1 and TVA, $10.7 million of trailing revenue and a UBS Sell [G2-43].
- **X-energy** (XE), Avoid: The one developer with its own fuel plant under construction, a construction-permit application through environmental review (safety review due November 2026) and two anchor customers (Dow and Amazon) [G2-53][G2-102]. It is the name to revisit after the NRC decision; today it is a $5.8 billion value on $150 million of revenue and a $449 million trailing loss.
- **NANO Nuclear Energy** (NNE), Avoid: An $839 million value on $214,000 of revenue, with a construction-permit review running to late 2027 [G2-50].
- **Fermi America** (FRMI), Avoid: A Texas campus with gas turbines on site and AP1000 ambitions for 2032 and beyond, $91.7 million of cash against $520 million of debt [G2-34]: a real-estate and gas financing story.
- **Babcock & Wilcox** (BW), Avoid: A real 1.2 GW boiler-and-steam-turbine contract and a backlog up from $488 million to $2.6 billion, but $240 million of debt against $57 million of equity, and a workaround that ends when turbines return [G1-47][G1-48].
- **FuelCell Energy** (FCEL), Avoid: A 37 MW annualized production rate and falling revenue, two orders of magnitude behind Bloom [G1-40].
- **Uranium Energy** (UEC), Avoid: A $4.6 billion value for a small producer whose pounds the data-center thesis does not need before 2030; the term price is already a record [G2-68].
- **NexGen Energy** (NXE, NXE.TO), Avoid: The development-stage name to watch (Rook I licensed for construction in March 2026), but pre-production and valued at about $6 billion; timing, not quality, is the objection [G2-90].

### Energy providers

| Group | Company | Tickers | Claude | Close (date) | Claude target (basis) | Consensus mean (analysts) | Fwd P/E | From high |
|---|---|---|---|---|---|---|---|---|
| Top pick | Vistra | VST | Buy | $140.02 (2026-10-02) | $186 (+33%; 18× 2027E consensus EPS) | $212.79 (+52%; 19) | 13.5× 2027E | −34% |
| Top pick | Constellation Energy | CEG | Buy | $257.49 (2026-10-02) | $320 (+24%; 24× 2027E consensus EPS) | $342.98 (+33%; 20) | 19.3× 2027E | −36% |
| Top pick | Talen Energy | TLN | Buy | $320.77 (2026-10-02) | $431 (+34%; 14× 2027E consensus EPS) | $455.65 (+42%; 17) | 10.4× 2027E | −28% |
| Top pick | PPL Corporation | PPL | Buy | $32.80 (2026-10-02) | $38 (+16%; 18× 2027E consensus EPS) | $40.12 (+22%; 16) | 15.5× 2027E | −18% |
| Top pick | Sempra | SRE | Buy | $78.38 (2026-10-02) | $94 (+20%; 17× 2027E consensus EPS) | $99.92 (+27%; 18) | 14.1× 2027E | −21% |
| Top pick | Public Service Enterprise Group | PEG | Accumulate | $68.07 (2026-10-02) | $79 (+16%; 17× 2027E consensus EPS) | $84.47 (+24%; 18) | 14.6× 2027E | −22% |
| Top pick | Kinder Morgan | KMI | Accumulate | $31.07 (2026-10-02) | $35.50 (+14%; 23× 2027E consensus EPS) | $36.09 (+16%; 22) | 20.1× 2027E | −9% |
| Top pick | Kodiak Gas Services | KGS | Accumulate | $54.33 (2026-10-02) | $68 (+25%; 21× 2027E consensus EPS) | $83.07 (+53%; 15) | 16.8× 2027E | −29% |
| Also interesting | EQT | EQT | Accumulate | $50.17 (2026-10-02) | $60 (+20%; 15× 2027E consensus EPS) | $67.19 (+34%; 26) | 12.6× 2027E | −26% |
| Also interesting | NRG Energy | NRG | Speculative buy | $95.23 (2026-10-02) | $123 (+29%; 11× 2027E consensus EPS) | $185.50 (+95%; 16) | 8.5× 2027E | −48% |
| Also interesting | FirstEnergy | FE | Accumulate | $43.34 (2026-10-02) | $50 (+15%; 17× 2027E consensus EPS) | $52.67 (+22%; 12) | 14.7× 2027E | −17% |
| Also interesting | Energy Transfer | ET | Accumulate | $20.47 (2026-10-02) | $23.50 (+15%; 14× 2027E consensus EPS) | $24.70 (+21%; 23) | 12.2× 2027E | −6% |
| Also interesting | Capital Power | CPX.TO | Accumulate | C$61.46 (2026-10-02) | C$69 (+12%; 24× 2027E consensus EPS) | C$77.46 (+26%; 13) | 21.3× 2027E | −19% |

**Quality names, mostly priced:**

- **Williams** (WMB), Hold, would buy below $58 (22× 2027E): The AI gas utility: Transco's Southeast expansion (1.6 Bcf/d, Q4 2027), a 2.6 GW behind-the-meter power portfolio funded by Blackstone at a 6.35% equity cost cap, a "6 GW+" power backlog and an 11%-plus growth target [U2-5][U2-48][U2-19]. The highest quality in midstream, at the highest multiple (about 27× 2027).
- **Xcel Energy** (XEL), Accumulate, would buy below $77 (17× 2027E), price already below: Long-term growth raised to 9%-plus on a $70 billion plan with 85% of equity pre-funded, a "high probability" portfolio of more than 20 GW and a Plains and Texas footprint in the load-shift corridor [U1-63]. About 16× 2027 with a 3.3% yield; wildfire liability in Colorado and Texas is the risk.
- **NextEra Energy** (NEE), Hold, would buy below $70 (16× 2027E): A 35.1 GW renewables and storage backlog, 30–40 data-center hubs in discussion, 9.5 GW of gas in development, the Duane Arnold restart for Google by 2029 and the pending Dominion merger [U2-21][U1-53][U1-54]. Good assets at one of the highest regulated multiples; the Virginia merger conditions are the swing factor.
- **Southern Company** (SO), Hold, would buy below $73 (15× 2027E): Contracted load of 17 GW (+6 GW in a quarter), the 3.2 GW OpenAI contract with 1 GW of flexibility and about 10 GW of approved new generation [U1-56][U1-57]. Georgia bills rose $43 a month in two years, the commission faces elections, and the Hold consensus reflects that tension [U1-58].
- **Duke Energy** (DUK), Hold, would buy below $100 (14× 2027E): A $103 billion plan, 7.8 GW of executed data-center agreements and large combined-cycle builds, but $10 billion of equity to issue in 2027–30 and a 9.8% allowed return [U1-62]. Fair rather than cheap.
- **American Electric Power** (AEP), Hold, would buy below $100 (15× 2027E): 63 GW "contracted", 90% data centers, and the template large-load tariff in Ohio, but that tariff cut AEP Ohio's working queue from more than 30 GW to 13 GW, and a $78 billion plan makes equity the swing factor [U1-14][U1-13].
- **Entergy** (ETR), Hold, would buy below $86 (17× 2027E): The Meta Hyperion package: $15 billion of capital, seven combined-cycle plants and a capital plan raised 30% to $57 billion [U1-59]. Single-customer concentration at the highest multiple in the regulated set.
- **Dominion Energy** (D), Hold, would buy below $53 (14× 2027E): 12 GW of firm data-center agreements in Northern Virginia and the pending merger with NextEra at 0.8138 shares; the allowed return was cut to 9.8% and upgrades are now assigned directly to data centers [U1-52][U1-16][U1-18]. The merger spread is too thin to be the reason to own it.
- **CenterPoint Energy** (CNP), Hold, would buy below $33 (16× 2027E): Houston wires serving about 14 GW of eligible load by 2031 and a regulator-friendly story of at least $5 billion of delivery-charge reductions [U1-67]. The purest Texas connection play, at the richest multiple in the wires set (about 18× 2027).
- **DT Midstream** (DTM), Hold, would buy below $105 (22× 2027E): A $3.4 billion backlog and 7.5 Bcf/d of potential Midwest demand from 50 GW of announced large loads [U2-10], but about 25× 2027 earnings for mid-single-digit growth.
- **Enbridge** (ENB, ENB.TO), Hold, would buy below $29 (13× 2027E): The only company here that sells both the gas and the solar-plus-storage to the same hyperscaler (Meta), inside a C$41 billion secured backlog, with a 6% yield [U2-38][U2-81]. Leverage of 5.1× and a rate-driven de-rating; consensus earnings are in Canadian dollars and were converted for the New York line.
- **TC Energy** (TRP, TRP.TO), Hold, would buy below $38 (14× 2027E): Two Columbia expansions explicitly for data-center generation (0.7 Bcf/d, 2028–30) in a $20 billion-plus project pipeline [U2-8][U2-83]. A close call; the leverage target of 4.75× tips it to Hold.
- **Archrock** (AROC), Accumulate, would buy below $32 (15× 2027E), price already below: Compression at 94% utilization with a 665,000-horsepower ten-year contract, but Caterpillar lead times of 195–200 weeks cap its growth, and Kodiak has the turbine allocation [U2-11]. Cheaper than Kodiak at about 14× 2027.
- **RWE** (RWE.DE, RWEOY), Hold, would buy below €51 (16× 2027E): The exception in Europe: 30 connected sites suitable for data centers, two deals "nearing agreement", 10 GW of US capacity secured and Germany's gas-plant tenders [U2-30][U2-41]. About 18× 2027 earnings near its high; the European power-contract market collapsed around it.
- **Expand Energy** (EXE), Hold, would buy below $77 (9× 2027E): The largest US gas producer, with the Haynesville volume behind every Southeast pipeline project, at about 10× 2027 earnings and 30% below its high. Management says liquefied natural gas, not data centers, leads demand [U2-56]: a gas-price trade with a data-center option.

**Avoid, or wait for a better price:**

- **Exelon** (EXC), Hold, would buy below $36 (12× 2027E): The cheapest wires name (about 13× 2027, 4.1% yield), but its high-probability load fell 40% once collateral was required, it withdrew a Pennsylvania rate request, and it is the most exposed to Pennsylvania and Illinois affordability politics [U1-19][U1-35]. I would reconsider below 12×.
- **Edison International** (EIX), Avoid: Wildfire liability and no disclosed data-center pipeline; a yield above 6% is a warning, not an invitation.
- **AES** (AES), Hold: A $15-per-share cash take-private by GIP and EQT approved by shareholders, closing late 2026 or early 2027; the spread is under 1% [U1-73][U2-22]. A merger-arbitrage position, not a thesis.
- **Ormat Technologies** (ORA), Hold, would buy below $63 (25× 2027E): The only non-nuclear firm, carbon-free resource a hyperscaler can contract today: 150 MW of geothermal for Google through Nevada's Clean Transition Tariff (2028–30) and a Switch contract [U2-24]. At about 36× 2027 earnings after a 36% fall, I would wait for the Nevada regulator's decision and a lower price.
- **Clearway Energy** (CWEN), Hold, would buy below $24 (15× 2027E): Contracted renewables with no verified data-center contract, at about 18× 2027 earnings.
- **Comstock Resources** (CRK), Avoid: Host of NextEra's proposed 5.2 GW, $16 billion Western Haynesville power hub, which could take almost 1 Bcf/d by 2031 [U2-15]. The hub is 2029–31, the stock is 53% below its high on depressed earnings, and the thesis is gas price first.
- **Iberdrola** (IBE.MC, IBDRY), Hold, would buy below €16 (15× 2027E): Land, grid and a €2 billion Spanish data-center joint venture (headlines) [U2-90][U2-92], but a Hold consensus with about 1% upside and a European power-contract market that collapsed [U2-31].
- **Korea Electric Power** (015760.KS, KEP), Avoid: A policy instrument with ₩202 trillion of debt, eleven new regional price zones and a request that chipmakers prepay $18 billion of power bills [U2-34][U2-70]. Down 56% from its high; the data-center load is a cost it must serve, not a profit.
- **Tokyo Electric Power** (9501.T), Avoid: A reported data center near its Kashiwazaki nuclear plant moved the shares in December 2025 [U2-73], but pass-through tariffs and the Fukushima liabilities limit the upside; 44% below its high.
- **ACWA Power** (2082.SR), Avoid: Gulf AI power (Stargate UAE, Saudi Humain) is real but state-directed; returns are set by the state, the consensus is "underperform", and the shares are 34% below their high.

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

### Electrification

| Date | Event |
|---|---|
| 12–15 Oct 2026 | OCP Global Summit, San Jose: 800 V DC, solid-state-transformer and rack-power announcements |
| ~mid-Oct 2026 | US ITC vote on instituting Vicor's vertical-power-delivery complaint against Delta, Infineon, MPS, Flex and others (estimate) |
| 20 Oct 2026 | Vicor Q3 results; ABB Q3 results |
| 22 Oct 2026 | HD Hyundai Electric and LS Electric Q3 results |
| ~27–29 Oct 2026 | Prysmian and Quanta Q3 results; Delta and Lite-On Q3 (~28 Oct) |
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

### Generation

| Date | Event |
|---|---|
| Oct 2026 | Westinghouse public IPO filing expected ("as soon as October"), with a reported target valuation above $50 billion; relevant to Cameco's 49% stake |
| ~22–29 Oct 2026 | Q3 results: Baker Hughes (27 Oct), INNIO (27 Oct), GE Vernova (28 Oct), Caterpillar and Howmet (29 Oct), Wärtsilä (27 Oct), Doosan Enerbility (late Oct) |
| Late Oct–Nov 2026 | Q3 results: Cameco (30 Oct), BWX Technologies (2 Nov), Centrus and Curtiss-Wright (4 Nov), Cummins (5 Nov), NuScale (5 Nov), Mitsubishi Heavy (6 Nov, April–September results), Oklo (10 Nov), Japan Steel Works (10 Nov), X-energy (16 Nov) |
| Nov 2026 | NRC safety-review recommendations for X-energy's Dow Seadrift (Long Mott) construction permit; Siemens Energy fiscal 2026 results and fiscal 2027 guidance (11 Nov) |
| Q4 2026 | Caterpillar's first shipments from the restarted 10 MW engine line (1.5 GW a year); Bloom's Fremont capacity reaches 2 GW; first Centrus centrifuge from Oak Ridge |
| Late 2026 | Palisades: fuel-assembly retrieval, resumption of fuel load and criticality, against a March 2027 contractual supply deadline |
| Dec 2026 | GE Vernova investor update: year-end check of "at least 125 GW" under contract and whether 2030 reservations are sold out; the clearest read on reservation conversion |
| By 31 Dec 2026 | Poland AP1000 engineering contract completion; EDF's EPR2 final investment decision; Texas nuclear fund awards; year-end Russian decision on sulphuric-acid exports (Kazatomprom 2027 output) |
| Early Dec 2026 | Possible INNIO IPO lock-up expiry (180 days from 4 June; not verified) |
| Jan–Feb 2027 | Kazatomprom and Cameco 2027 production guidance; Howmet 2027 capital-spending guidance |
| 2027 | Siemens Energy large-unit capacity to 50 a year; Homer City first power targeted; Bloom–Oracle deployments continue; Oklo's A3F fuel plant start-up; TRISO-X first fuel |
| Mar 2027 | Palisades contractual power-supply deadline; Clinton early-site permit expiry unless extended |
| H2 2027 | Crane Clean Energy Center returns to service (the first new nuclear megawatt-hours for a hyperscaler); Comanche Peak data-center deliveries from late 2027 |
| 1 Jan 2028 | Russian low-enriched-uranium import waivers end; the enrichment market tightens and Centrus's trading margin is at risk until its 2029 capacity |
| 2028 | GE Vernova 24 GW a year; Siemens Energy medium units 100 a year; Doosan 12 units a year; Microsoft Pecos first power; Wärtsilä Texas delivery; Mitsubishi 2028–30 deliveries begin; Oklo Aurora target |
| Q4 2028 | Poland first nuclear concrete (the first Western AP1000 since Vogtle) |
| 2029 | Doosan US turbine deliveries monthly from May; Centrus new HALEU capacity; Duane Arnold restart (Q1); grid connections for the 2025–27 onsite cohort begin to arrive; the overbuild test begins |
| 2030 | GE Vernova 30 GW a year; SpaceX foundry's earliest volume production; Darlington BWRX-300 unit 1 first power (Canada) |

### Energy providers

| Date | Event |
|---|---|
| 20–28 Oct 2026 | Q3 results with dates from the companies' calendars: EQT (20 Oct), FirstEnergy (27 Oct), Kinder Morgan (28 Oct) |
| ~Late Oct 2026 | Q3 results, approximate dates: NextEra, CenterPoint, Expand Energy, Archrock, AEP, Xcel, DT Midstream and Dominion |
| Oct 2026 | Texas utilities disclose Batch Zero eligibility notifications with their Q3 results (Sempra, CenterPoint, AEP) |
| 2–9 Nov 2026 | Q3 results with dates from the companies' calendars: PSEG (2 Nov), Kodiak and Energy Transfer (3 Nov), Talen, PPL, Sempra and Capital Power (4 Nov), NRG (5 Nov), Vistra (6 Nov), Constellation (9 Nov) |
| ~Early–mid Nov 2026 | Q3 results, approximate dates: Williams, Ormat, Southern and Duke in early November; RWE's nine-month results in mid-November |
| Nov 2026 | Virginia regulator's first hearing on the NextEra–Dominion merger; PUC Nevada decision on Ormat's Google geothermal portfolio expected in the second half of 2026 |
| Q4 2026 | Constellation's first expected uprate application; Transco Southeast expansion construction start; Williams' Socrates phase 2 and Atlas in service; Kodiak's 76 MW West Texas plant (Q4 2026–Q1 2027) |
| By Dec 2026 | FPL's first large-load tariff transaction; Southern's generation selections; PSE&G's base rate case filing; Constellation's Brazos Valley sale; Kinder Morgan's 2027 budget and Enbridge's investor day |
| Dec 2026–early 2027 | PJM 2029/30 Base Residual Auction, capped at $325 per MW-day (exact date not verified) |
| 1 Jan 2027 | Virginia's GS-5 large-load tariff takes effect: 14-year contracts and $1.5 million of collateral per MW |
| Late Feb 2027 | End of the five-month suspension of PJM's Reliability Backstop Procurement; PJM may refile sooner |
| Q1–Q2 2027 | Nuclear uprate applications: Constellation (Q1–Q2), Duke Brunswick (Q1), PSEG Salem (Q2), Southern Hatch (Q2), Duke McGuire (Q2) |
| Apr 2027 | MISO 2027/28 planning resource auction (Ameren, Entergy, Xcel, Vistra) |
| May 2027 | First uncapped PJM capacity auction (2030/31) under the reformed design: the binary event for the merchants; Ameren Missouri rate decision |
| 1 Jun 2027 | PJM's Interim Resource Adequacy Service: new large loads without contracted capacity are curtailed first |
| Jun 2027 | Meta–Constellation Clinton contract begins (1,121 MW) |
| Q2–Q4 2027 | NextEra–Dominion merger closing (targeted Q2 2027 by the companies; late 2027 by some executives); Williams' Aquila plant (H1); Transco Southeast expansion in service (Q4) |
| H2 2027 | Crane Clean Energy Center restart (Microsoft, 835 MW); Comanche Peak data-center energization at end-2027; ERCOT Batch 1 applications open and the Batch Zero transmission plan |
| 2028 | PJM 2028/29 delivery year begins 1 June at $325 per MW-day (Talen 10 GW, PSEG 3.6 GW); OpenAI–Georgia Power service start; Capital Power–Meta 250 MW (H2); Kinder Morgan Mississippi Crossing (Q2); Williams Neo 682 MW (H2); NRG's Texas Energy Fund peakers |
| 2029 | NRG's 1.2 GW hyperscaler combined cycle (late 2029); Duane Arnold restart for Google (Q1); Boardwalk Kosci Junction (H1); Kinder Morgan South System Expansion 4 phase 2 (Q4); Talen–Amazon ramp to 840–1,200 MW |

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
| `research/G1_thermal_generation.md` | Heavy-duty and aeroderivative gas turbines, reciprocating engines, fuel cells, the casting and forging supply chain behind them, order books and slot reservations, behind-the-meter power, bridge-to-grid timelines and overbuild risk; shortlist and calendar |
| `research/G2_nuclear_smr_fuel.md` | Nuclear restarts and uprates, hyperscaler power contracts, large reactors (AP1000) and small modular reactors, the uranium, conversion, enrichment (including high-assay low-enriched uranium) and forging chain, and the developers; shortlist and calendar |
| `research/U1_us_utilities_and_merchant_generators.md` | United States demand forecasts and queues, PJM, MISO and ERCOT market rules, large-load tariffs, merchant generators and nuclear owners, regulated utilities with contracted load, transmission owners, and what is priced; shortlist and calendar |
| `research/U2_gas_midstream_and_international_providers.md` | Gas demand from data centers, interstate and intrastate pipelines, the Appalachian bottleneck, producers, compression and behind-the-meter power, renewables and storage for data centers, and non-US providers; shortlist and calendar |
| `research/I2_lasers_and_photonic_materials.md` | Indium-phosphide and gallium-arsenide lasers, substrates and epitaxy, indium export controls, silicon-photonics foundries and silicon-on-insulator wafers, modulator materials, wide-and-slow links, equipment and test; shortlist |
| `research/I3_copper_cpo_and_optical_io.md` | The limits of copper scale-up, circuit-board materials (laminates, copper foil and glass cloth), the status of co-packaged optics, optical input/output and optics into memory, 3D packaging, and timelines; shortlist |
| `research/audit_*.md` | Section-by-section coverage audits of this hub (companies present, companies missing, errors) |

*Prepared by Claude (Anthropic). Not investment advice. Verify prices, ratings and facts before acting.*
