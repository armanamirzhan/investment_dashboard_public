> **Working research report, published as-is for transparency (2 Oct 2026).** Written by an AI research agent for the Claude Investment Summary pages. Every figure carries a date and source; "secondary" marks relays; "my estimate" marks the agent's arithmetic. Prices are a point-in-time snapshot. Not investment advice. Final picks and targets on the website may differ from the rankings here.

# I2: Lasers, photonic integrated circuits, and the materials, equipment and test chain beneath AI optical interconnects

**Research brief prepared 2 October 2026.** Scope: InP and GaAs lasers (EML, CW-DFB, VCSEL, QD, comb), InP and GaAs substrates and epitaxy, silicon-photonics (SiPh) platforms and foundries, modulator materials beyond silicon, micro-LED links, passive and packaging parts, and photonics equipment and test.

**Conventions**
- Every figure carries a date and a source tag `[S#]`. The tags resolve to URLs in §8.
- **(my estimate)** marks my own arithmetic or inference.
- **(secondary)** marks aggregator, blog or second-hand sources.
- Prices are the latest closes I could retrieve on 2 Oct 2026. For US names that is the 1 Oct 2026 close; Japan, Europe, Taiwan and China closes are 18–29 Sep 2026, and each is dated in the tables.
- Consensus data comes from stockanalysis.com forecast pages, accessed 2 Oct 2026 [S78].
- This is educational research. It is not investment advice.

---

## 0. Bottom line (the eight things that matter)

1. **In 2026–27 the binding constraint is InP laser-die capacity, not optics in general.** Substrates gate it, and above all 6-inch InP substrates.
   - Lumentum said EML and pump-laser shipments were running more than 30% below demand in Jul 2026 [S5] (secondary). On its 11 Aug 2026 call it said it stays "significantly behind demand" through end-2026 [S2].
   - Coherent said "fiscal 27 is basically completely booked out", with orders into CY2028, and named InP capacity "our primary constraint" (12 Aug 2026) [S10].
   - The supply response is real but lands in 2027–2029. Nobody adds meaningful InP *substrate* or *laser-fab* capacity before late 2027 except Coherent's internal 6-inch lines.

2. **The narrative is fully priced at the laser leader and not priced upstream.** This is the most useful finding.
   - Lumentum (LITE) closed at $1,045.78 on 1 Oct 2026. That is ~4% below its 52-week high, at 48× forward EPS and ~31× EV/TTM sales [S78].
   - The upstream InP choke-point owners and the epitaxy tool vendor sit ~40–45% below their 52-week highs at ~18–31× forward earnings [S78][S79]:
     - Sumitomo Electric (5802.T): ¥2,200, −41%
     - JX Advanced Metals (5016.T): ¥3,541, −39%
     - Aixtron (AIXA.DE): €34.80, −44%
   - All three raised capacity plans or showed opto-driven order inflections this summer.

3. **"200G EML is a Lumentum + Broadcom duopoly" holds for merchant 200G parts in 2026, with caveats.**
   - The main source is Lumentum itself (27 Aug 2026) [S3].
   - Mitsubishi Electric claims the #1 share of data-centre EML chips overall, mostly at 100G [S31].
   - Coherent makes EMLs on 6-inch InP for its own transceivers and says it will not sell InP lasers externally "any time in the near future" [S11]. Its 200G EML volume is not disclosed.
   - Yuanjie (China) has 200G EML in customer validation (Sep 2026) [S37] (secondary).

4. **The physics of co-packaged optics (CPO) does not reduce InP demand the way the "4× fewer lasers" headline implies.**
   - External light source (ELS) lasers need roughly 10× the optical power per emitter: Lumentum's ELSFP delivers up to 250 mW per wavelength [S7].
   - That means long, mm-class cavities, more InP area per die, much higher ASPs, isolators and polarisation-maintaining (PM) fibre.
   - The InP *area* and *dollar* content per Tb/s can hold up even as emitter count falls (my estimate; §3.2).

5. **China's indium controls matter more than the truce date.**
   - The Busan truce was extended from 10 Nov 2026 to **10 Jan 2027** (Bessent, 24 Sep 2026) [S48].
   - Indium, InP, trimethylindium and triethylindium have been under a *separate* Chinese licensing regime since 4 Feb 2025 [S45][S44]. It was not part of the truce. AXT's permits for US customers were **still pending as of Aug 2026** [S21] (secondary, citing the 10-Q).
   - Indium tonnage is not the constraint. A 6-inch InP wafer holds roughly 43 g of indium (my estimate), against world refinery output of 1,100 t in 2025 [S41]. The constraint is licensing, high-purity refining and crystal growth.

6. **The largest under-appreciated single-source position in my scope is Soitec's 300 mm Photonics-SOI wafer** (~95% share, secondary [S61]).
   - Photonics-SOI revenue is guided to 2.5–3× in FY27, from slightly above $100M to $250–300M (2 Sep 2026) [S62].
   - Consensus is still "Hold" across 19 analysts [S78]. The tradeoffs are the core business and a fresh €500M convertible.

7. **The picks-and-shovels that win whichever architecture prevails:**
   - **MOCVD epitaxy**: Aixtron. Opto was 75% of Q2-26 equipment orders, and the 4→6-inch transition needs new reactor configurations [S53].
   - **Optical and electrical test**: Keysight [S77] (secondary), FormFactor [S56].
   - **Laser burn-in**: Chroma, Aehr. Mostly priced.
   - **Active alignment**: ficonTEC, owned by RoboTechnik (300757.SZ). Too expensive.

8. **The main risk is an overbuild landing in 2028–29.** Announced expansions:
   - Sumitomo intra-DC optical devices 12× by 2028 [S26]
   - JX InP substrates 7–10× [S25]
   - AXT InP capacity ~6.5× in quarterly dollars, $20M → $130M by end-2027 [S17]
   - Mitsubishi EML capacity >3× by FY30 [S31]
   - Coherent InP output ~4×+ by end-CY27 [S10]
   - Chinese CW entrants already shipping 70–100 mW [S37]
   - Combined, these could flip substrates and low-power CW lasers into surplus by 2029 if CPO or scale-up optics slips (my estimate). Substrates and 70–100 mW CW are the most exposed. 200G/400G EML and ultra-high-power (UHP) CW/ELS are the least exposed.

**Ranked shortlist** (detail in §4):

| # | Company | Ticker |
|---|---|---|
| 1 | Sumitomo Electric | 5802.T; ADR SMTOY |
| 2 | Coherent | COHR |
| 3 | Aixtron | AIXA.DE; OTC AIXXF |
| 4 | JX Advanced Metals | 5016.T; OTC JXAMY |
| 5 | Soitec | SOI.PA; OTC SLOIF |
| 6 | Tower Semiconductor | TSEM |
| 7 | Lumentum | LITE (quality, but priced) |
| 8 | Keysight | KEYS |
| 9 | AXT | AXTI (speculative) |

---

## 1. Claims checked (September 2026)

| Claim | Status at 2 Oct 2026 | Evidence |
|---|---|---|
| 200G EML is effectively a Lumentum + Broadcom duopoly | **Largely confirmed for merchant 200G**, but self-reported. Lumentum, 27 Aug 2026: "At 200G … very little competition … Broadcom is a supplier … We're the other large supplier." Mitsubishi claims #1 DC-EML share overall (FY25, mostly 100G). TrendForce puts EML top-3 (Lumentum, Broadcom, Mitsubishi) at ~72% (4 Jun 2026). Coherent's EMLs are captive (no external InP laser sales planned). Yuanjie 200G EML is in validation. | [S3] [S31] [S32] [S11] [S37] |
| 6-inch InP substrate prices up ~250% | **Confirmed as reported**: Reuters (10 Jun 2026) says 6-inch InP wafers rose 250% to ~$5,000 after China's controls. Separately, three rounds of 3–5% list hikes since Q4-25, with a >10% hike expected in Q4-26 (secondary). JX is "discussing price revisions with customers" (16 Jun 2026). Caveat: the 6-inch market is thin; AXT calls 6-inch volume "exponentially more difficult". | [S22] [S23] [S25] [S19] |
| Lumentum InP fab sold out | **Confirmed in substance, company-wide.** CEO: "sold out really until the end of 2027" (Mar 2026, secondary). ">30% short" (Jul 2026, secondary). "Significantly behind demand" through end-2026 (11 Aug 2026). The specific "San Jose fab" attribution was **not verified**; the FQ4 call stressed two Japanese InP fabs plus Greensboro (first revenue early 2028). | [S4] [S5] [S2] [S1] |
| Six years of AXT wafers prepaid | **Incorrect as framed.** The AXT–Lumentum LTA runs from 30 Jul 2026 to 31 Dec 2031 (~5.4 years). It carries two $43.5M capacity-reservation deposits; the second is paid during 2028. Both are credited against purchases: $87M total, ≈19% of AXT's 2027 consensus revenue of $460.7M (my estimate). Other prepayments: Coherent $25.4M, Casella (China) $22.3M. | [S16] [S17] [S78] |
| Coherent FY27 laser capacity booked; expansions 2027–29 | **Booked: confirmed.** "Fiscal 27 is basically completely booked out … booked really through the end of calendar 2027"; orders extend into CY2028; LTAs run to end of decade with agreed pricing (12 Aug 2026). **Timing correction:** Coherent's adds are mostly 2026–27 (2× InP output by end of the Sep-26 quarter, >2× again by end-CY27, Zurich 6-inch in 1H CY27). The 2027–29 window fits Lumentum Greensboro (2028–29), Sumitomo substrates (FY2028) and JX (4-year plan). | [S10] [S11] [S1] [S24] [S25] |
| China supplies ~69% of indium | **Confirmed**: 760 of 1,100 t world refinery output in 2025e (USGS MCS 2026). | [S41] |
| US–China critical-mineral truce expires ~10 Nov 2026 | **Superseded.** Bessent (24 Sep 2026): the "Busan Agreement" that was "scheduled to end on Nov. 10 … is going to be extended until Jan. 10" (2027). Separately, China's suspension of its Ga/Ge/Sb export *ban* to the US runs to **27 Nov 2026** (announced 9 Nov 2025); I could not confirm whether it was rolled to 10 Jan. **Indium is not in any truce**: the 4 Feb 2025 licensing list (InP, TMIn, TEIn) still binds. | [S48] [S47] [S46] [S45] [S21] |
| Sumitomo Electric and JX Advanced Metals own InP substrates | **Confirmed, with a share conflict.** TrendForce (13 Jul 2026): Sumitomo + JX hold "a dominant share". Reuters (10 Jun 2026): AXT + Sumitomo ≈80%, JX ≈10%. The two likely measure different things (value vs units, or different years); the conflict is unresolved. | [S24] [S22] |

---

## 2. Value-chain map

Format is exchange:ticker, then the US OTC/ADR symbol where one exists. Private companies are marked *(private)*.

### 2.1 Raw materials and precursors

| Input | Who controls it | Notes |
|---|---|---|
| Refined indium | China 760 t of 1,100 t (2025e, 69%); Korea 180 t; Japan 65 t; Canada 40 t; France 21 t; Belgium 19 t [S41] | Producers include Korea Zinc (010130.KS), Teck (NYSE:TECK), Umicore (EBR:UMI) and Dowa (5714.T). Producer identities were not re-verified in this pass. US is 100% import-reliant; US warehouse price ~$390/kg in 2025 (+11%) [S41]. Rotterdam reached $500–600/kg in Feb 2026 [S44] (secondary). |
| InP compound, TMIn, TEIn (epi precursors) | Chinese export licensing since 4 Feb 2025 (MOFCOM/GAC Ann. No. 10 of 2025) [S45][S44] | TMIn suppliers include Jiangsu Nata (300346.SZ) and Nouryon *(private)*, not verified in this pass. Chinese unwrought indium exports fell 72% y/y (Sep-24 to Sep-25) [S41]. |
| Gallium (for GaAs VCSEL substrates) | China ~99% of primary low-purity Ga [S42] | Import value ~$580/kg in 2025 (+30%) [S42]. The US export ban was suspended on 9 Nov 2025 until 27 Nov 2026; licensing remains [S47]. |
| Germanium | China leads [S43] | EU price $3,150 → $5,380/kg (Jan → Oct 2025) [S43]. Mainly relevant to fibre preforms and Ge substrates. |

### 2.2 Substrates

| Substrate | Public | Private / China |
|---|---|---|
| **InP** | Sumitomo Electric (5802.T; SMTOY); JX Advanced Metals (5016.T; JXAMY); AXT (NASDAQ:AXTI; manufactures 100% in China via Tongmei and JVs [S21]) | Freiberger Compound Materials *(private, DE)*; Yunnan Germanium (002428.SZ), Guangdong Xiandao, Zhuhai Dingtai Xinyuan [S22]; Yunnan Germanium described as the "only mass 6-inch producer" in China [S6] (secondary) |
| **GaAs** (VCSEL, pumps) | Sumitomo Electric; AXT | Freiberger *(private)* |
| **300 mm Photonics-SOI** | Soitec (EPA:SOI; SLOIF), ~95% of 300 mm PSOI [S61] (secondary) | Potential second sources: Shin-Etsu (4063.T; SHECY) and GlobalWafers (6488.TWO) under Smart Cut licence. Not verified for 300 mm photonics grade. |
| **LNOI** (thin-film lithium niobate) | n/a | NanoLN *(private, China)*. Thin supply base; not verified in depth. |

### 2.3 Epitaxy (merchant; most laser leaders run captive epi)

| Company | Ticker | Position (dated) |
|---|---|---|
| LandMark Optoelectronics | 3081.TWO | InP CW-laser epi; Jul-26 revenue NT$501M (+176.5% y/y) [S51]; Sumitomo substrate supply agreement to 2030 (Apr 2026) [S23] (secondary) |
| IntelliEPI | 4971.TWO | InP photodiode and laser epi; Q2-26 revenue fell 23% q/q because Sumitomo paused InP substrate shipments for ~3 weeks [S50] |
| VPEC (Visual Photonics Epitaxy) | 2455.TW | GaAs-led, InP growing; outsourced InP epi beneficiary [S33] |
| IQE | LSE:IQE; IQEPF | Multi-year InP epi agreement with Tower (15 Jun 2026) [S60]; QD-laser epi purchase agreement with Quintessent (3 Sep 2026) [S68] |
| Sumitomo Chemical | 4005.T; SOMMY | 4-inch InP epi mass production from 31 Aug 2026; ~¥10B sales target by mid-2030s [S71] |
| GCS Holdings | 4991.TWO | III-V epi and foundry in the Taiwan CPO chain [S52] (secondary) |

### 2.4 Laser chips and light sources

| Type | Public | Private / China |
|---|---|---|
| **EML (100G/200G, 400G demo)** | Lumentum (LITE); Broadcom (AVGO); Mitsubishi Electric (6503.T; MIELY); Sumitomo Electric; Coherent (captive) | Yuanjie (688498.SS; 100G mass, 200G validating); Accelink (002281.SZ); Shijia (688313.SS; 100G validating); HiSilicon *(Huawei, captive)* [S37] |
| **CW-DFB for SiPh (50–100 mW) and UHP/ELS (≥250 mW)** | Broadcom, Sumitomo, Coherent, LandMark/LuxNet (4979.TWO) together ~74% of CW-DFB capacity [S32]; Lumentum UHP; Mitsubishi (CPO CW sources) [S31] | Yuanjie 70/100 mW volume [S36]; Shijia 100 mW volume, 400 mW small lots [S37] |
| **ELS modules** | Lumentum ELSFP: 8λ, ≤250 mW/λ, 1H27 availability [S7]; Coherent PhotonLink [S12] | Ayar Labs SuperNova *(private)* |
| **VCSEL** (multimode, 1060 nm D2D) | Coherent; Broadcom (200G VCSEL demo, Mar 2024 [S35]); Lumentum (1060 nm D2D demo, 21 Sep 2026 [S8]); ams OSRAM (SIX:AMS, not re-verified) | TRUMPF Photonic Components *(private)*; PicoJool *(private; $27.5M Series A, 29 Sep 2026)* [S64]; Changguang Huaxin (688048.SS) |
| **Quantum-dot lasers** | QD Laser (6613.T) | Quintessent *(private; $40M Series A, 24 Aug 2026; sampling)* [S68] |
| **Comb / multi-λ** | none | Enlightra *(private)*, Xscape Photonics *(private)*, Solinide Photonics *(private; LumiCOMB SiN comb shown at ECOC)* [S64][S69] |
| **Pump / narrow-linewidth** | Lumentum (pumps 70–80% share per Nomura [S39], secondary; narrow-linewidth +130% y/y [S1]) | n/a |

### 2.5 Silicon-photonics platforms and foundries

| Platform | Ticker | Status (dated) |
|---|---|---|
| TSMC COUPE | 2330.TW; TSM | 200G microring modulators; Nvidia Quantum-X/Spectrum-X Photonics; Broadcom CPO; quasi-captive [S61] (secondary) |
| GlobalFoundries Fotonix + AMF | NASDAQ:GFS | AMF acquisition announced 17 Nov 2025 [S63] (secondary) and described as integrated [S61]. SiPh ~$200M in 2025, ">2×" in 2026 [S61] (secondary). SMART Photonics open-access Si+InP foundry partnership (21 Sep 2026) [S63] |
| Tower Semiconductor | NASDAQ:TSEM | SiPh $680M annualised in Q2-26, crossing $1B in Q4-26 [S58]; 300 mm Japan expansion [S59] |
| STMicroelectronics PIC100 | STM | AWS multi-year deal; sell-side SiPh $800M (2026) → $2.0B (2027), **estimates, not guidance** [S61] (secondary) |
| UMC | 2303.TW; UMC | iSiPP300 (imec licence), TFLN, HyperLight partner [S61][S67] |
| Intel | INTC | >8M PICs and >32M on-chip lasers shipped; captive [S61] |
| Samsung | 005930.KS | Foundry SiPh service from 2027 [S61] |
| X-FAB | EPA:XFAB | XPH90 with Ligentec SiN plus TFLN; product revenue 2027–28 [S61] |
| SMART Photonics; Ligentec | *(private)* | InP and SiN foundries |

### 2.6 Modulator materials beyond silicon

| Material | Who | Status |
|---|---|---|
| Thin-film LiNbO₃ (TFLN) | HyperLight *(private; up to 448 Gb/s/lane, 145 GHz; UMC, Jabil, TFC partners)* [S67]; Lightium *(private)*; Sumitomo Osaka Cement (5232.T, bulk LN modulators); Fujitsu Optical Components (ownership not re-verified); NTT Innovative Devices *(private)*; UMC; X-FAB | 400G/lane sampling; volume 2028+ (my estimate) |
| BaTiO₃ (BTO) on Si | Lumiphase *(private; 200G/lane+)* [S69] | Pilot; 2028+ (my estimate) |
| EO polymers | Lightwave Logic (LWLG; TTM revenue $250k; "five Stage 3 customer programs") [S78] | Pre-commercial |
| Plasmonics | Polariton → Marvell (MRVL; acquisition announced 22 Apr 2026) [S66] (secondary) | "400G/lane SiPho devices containing plasmonic transponders delivered to customers in 2026"; reliability "early days" [S66] |

### 2.7 Wide-and-slow links

| Company | Ticker | Status |
|---|---|---|
| Avicena | *(private)* | 1 Tb/s LightBundle eKit: 335 micro-LED channels × up to 3 Gb/s (ECOC, 23 Sep 2026) [S64] |
| Credo | NASDAQ:CRDO | Acquired Hyperlume; 30 m demo targeted Q4-26; first revenue FY28 [S65] (secondary) |
| Microsoft MOSAIC | research | 2 Gb/s/channel over 20 m; 1.6 Gb/s at 30 m [S65] (secondary) |

### 2.8 Passive and packaging components

| Item | Public | Private |
|---|---|---|
| Fibre array units, ferrules, connectors | Sumitomo Electric (MT ferrules; 24-fibre MMC ferrule) [S26]; Corning (GLW); Fujikura (5803.T; FKURF); TFC Optical (300394.SZ); Browave (3163.TWO); FOCI (3363.TWO, loss-making Q1-26 [S52]) | Senko, US Conec |
| PM fibre (needed for ELS) | Fujikura (PANDA), Corning, Coherent (specialty fibre; expanding [S77]), Furukawa (5801.T; FUWAY). Product claims not re-verified. | n/a |
| Isolators / garnet Faraday rotators | Mitsubishi Gas Chemical (4182.T; Granopt), Shin-Etsu (4063.T). Not re-verified. | n/a |
| Glass | Corning; AGC (5201.T; ASGLY); Ohara (5218.T); Hoya (7741.T; HOCPY) | Schott |
| Ceramic packages and ferrules | Kyocera (6971.T; KYOAY) | Adamant Namiki |
| Laser die packaging | Elite Advanced Laser (3450.TW) [S52] | n/a |

### 2.9 Equipment and test

| Step | Public | Private |
|---|---|---|
| MOCVD (InP/GaAs) | Aixtron (AIXA.DE; AIXXF); Veeco (VECO, Lumina+; pending all-stock merger with Axcelis, ACLS [S55]); AMEC (688012.SS, China) | n/a |
| Ion-beam deposition, facet coatings | Veeco Spector [S54] | n/a |
| Wafer-level PIC test / probers | FormFactor (FORM; CM300xi-SiPh); MPI (6223.TWO); Advantest (6857.T; ATEYY); Teradyne (TER; Quantifi Photonics acquisition not re-verified) | n/a |
| Optical test instruments | Keysight (KEYS); Viavi (VIAV); Anritsu (6754.T; AITUF); santec (6777.T) | EXFO |
| Burn-in / reliability | Chroma ATE (2360.TW); Aehr (AEHR; SiPh wafer-level burn-in follow-on order, Aug 2026 [S78]) | n/a |
| Active alignment, fibre attach, die bond | RoboTechnik (300757.SZ; HK listing Sep 2026) owns ficonTEC [S70]; Mycronic (STO:MYCR; owns MRSI); ASMPT (0522.HK; ASMVY); Kulicke & Soffa (KLIC; CPO press release 1 Sep 2026 [S78]) | Palomar; HTSI (Taiwan, ficonTEC partner, Oct 2026) [S70] |
| Hybrid bonding (EIC-on-PIC, COUPE-type) | BESI (BESI.AS; BESIY) | n/a |

---

## 3. Critical analysis

### 3.1 Where the binding constraint actually sits (2026–27)

**Evidence of tightness, all dated:**

- **Lumentum** (FQ4 call, 11 Aug 2026) [S2][S1][S3]:
  - EML units +50% y/y by the Dec-26 quarter, yet still "significantly behind customer demand".
  - CW lasers in "significant supply–demand imbalance".
  - Pump lasers "effectively sold out for the foreseeable future", with 4× shipments planned.
  - "The substrate problem has become very significant … another deal with AXT. Still, that might not be enough" (27 Aug 2026).
- **Coherent** (12 Aug 2026) [S10]:
  - "Indium Phosphide capacity continues to be our primary constraint"; assembly and test capacity is "really just constrained by the ramp of the Indium Phosphide production".
  - It will not sell InP lasers externally "any time in the near future" [S11].
  - This sentence matters for merchant laser supply: the second-largest InP laser maker is effectively off the merchant market.
- **TrendForce** [S33][S32]:
  - Dec 2025: Nvidia pre-allocated a large portion of EML capacity; lead times extend beyond 2027.
  - Jun 2026: combined EML + CW-DFB monthly capacity reaches 50.7M units in 2026, roughly doubling.
  - Convequity's per-supplier annual unit capacities (Dec 2025; secondary [S34]) sum to roughly 220M per year for the top four. That is far below TrendForce's ~600M per year implied by 50.7M per month (my estimate). Treat both unit figures with caution.
- **Substrates:**
  - Reuters, 10 Jun 2026: 6-inch InP at ~$5,000, +250% [S22].
  - AXT can only take orders up to capacity; its backlog of "well over $100M" "can be much bigger if we take orders" (30 Jul 2026) [S19] (secondary transcript).
  - Japanese supply is fragile. Sumitomo's ~3-week Golden Week pause cut IntelliEPI's Q2-26 revenue by 23% q/q [S50].
- **Morgan Stanley ECOC takeaways** (~24 Sep 2026; secondary via the hub digest [S77], not independently verified): most optics capacity sold out 12–18 months; InP substrates "the tightest gate" (AXT, Sumitomo); EML, CW, pumps and gold boxes also tight; NPO first products ~2028.

**Interpretation:** the shortage is a chain of four InP-specific steps:

- (a) substrate supply, made worse by China licensing and the 6-inch learning curve
- (b) MOCVD epitaxy, where Aixtron is "ramp-rate constrained" [S53]
- (c) InP front-end fab, with regrowth for EMLs and long-cavity high-power CW
- (d) reliability burn-in

Assembly and DSPs are not the binding items for the laser leaders.

### 3.2 Device physics that changes the investment case

**(a) Why 200G EML stays concentrated, and CW is the contested ground.**

- An EML monolithically integrates a DFB laser with an electro-absorption modulator, which relies on the quantum-confined Stark effect in InGaAlAs/InGaAsP multi-quantum wells. At 200G per lane (~112 GBd PAM4) the modulator needs very wide electro-optic bandwidth, low chirp and tight thermal control.
- The monolithic integration (butt-joint regrowth or selective-area growth) is yield-sensitive. That is the moat: Lumentum says 200G EMLs command roughly a 2× price uplift over 100G (27 Aug 2026) [S3], and that 200G will be the majority of its EML volume by mid-2027 [S2].
- A CW-DFB laser for SiPh is epitaxially simpler: there is no modulator section. Sumitomo's own demand model moves the chip mix from EML 76% / CW 24% (2024) to EML 31% / CW 69% (2028) (13 Nov 2025) [S26].
- That is where Chinese entrants are attacking: Yuanjie (70/100 mW in volume; 100G EML in mass production; 200G EML in validation) and Shijia (100 mW in volume; 400 mW in small lots) [S36][S37] (secondary). Lumentum expects Chinese suppliers to enter "lower-power CW segments first, such as 70 mW and 100 mW" [S3].
- **Implication:** pricing power is most durable at 200G/400G EML and at UHP CW/ELS (≥250 mW), and least durable at 70–100 mW CW.
  - This favours Lumentum and Coherent's internal mix.
  - It is a risk to merchant CW-heavy suppliers, including part of Sumitomo's laser business and LandMark's CW epi.
  - Yuanjie's H1-26 gross margin of ~80% [S36] invites a price war.

**(b) CPO/ELS: fewer lasers, but more InP per laser.**

- Nvidia's photonic switches claim "4× fewer lasers" (18 Mar 2025) [S15].
- The ELS module that remains is a different device. Lumentum's DWDM ELSFP delivers up to 24 dBm (~250 mW) per wavelength across 8 wavelengths at ~12 W module power (21 Sep 2026) [S7]. Module-level wall-plug efficiency is therefore ≈ (8 × 0.25 W) / 12 W ≈ 17% (my estimate). Laser power becomes a first-order power-budget item in CPO.
- Coherent is developing 400 mW CW-DFBs [S32].
- High-power DFBs need long (mm-class) cavities, careful thermal design, low relative intensity noise and often optical isolation (general engineering knowledge, not sourced). Die area and value per emitter rise several-fold.
- Lumentum already sizes UHP lasers at a ~$50M quarterly run-rate by end-CY26, a first $100M+ quarter in FQ3'27 (Jan–Mar 2027), and ELS module ASPs "meaningfully higher" than laser-only parts [S1][S2].
- **Net effect:** CPO cuts emitter *count*, but InP *area* and *dollars* per Tb/s probably do not fall proportionally (my estimate). PhotonCap argues the same, "the more silicon wins, the more InP sells" (secondary, paywalled [S73]).
- What CPO *does* cut is transceiver assembly value, which is outside this scope.

**(c) The 6-inch InP transition is the real moat shift.**

- Going from 3-inch to 6-inch quadruples area; edge-exclusion losses shrink proportionally.
- Coherent runs 6-inch in Sherman (TX) and Järfälla (Sweden) with yields that "continue to exceed our 3-inch lines" for CW lasers, EMLs and photodiodes. Zurich starts 6-inch in 1H CY27 (12 Aug 2026) [S10][S11]. PhotonCap estimates ≥4× devices per wafer and ≥60% die-cost reduction (secondary [S73]).
- For substrates the transition is hard. InP is brittle and prone to twinning in vertical-gradient-freeze or LEC growth at large diameters. AXT calls 6-inch volume "exponentially more difficult" and gives no production timeline (30 Jul 2026) [S19] (secondary transcript).
- **Implication:** whoever reliably ships low-defect 6-inch InP owns the next pricing cycle. The Reuters $5,000 per wafer figure is a 6-inch price [S22]. Sumitomo describes its expansion as "large-diameter (4–6 inch)" [S26]. JX did not specify diameters [S25].
- Watch for 6-inch qualification announcements by Sumitomo, JX and AXT, the single most important substrate datapoint for 2027.

**(d) Why laser makers are price-insensitive to substrate hikes** (my estimate):

| Step | Value |
|---|---|
| Usable area of a 6-inch wafer (3 mm edge exclusion) | ~16,000 mm² |
| Die footprint incl. streets (EML / CW-DFB) | 0.2–0.5 mm² |
| Gross die per wafer | 32k–80k |
| Assumed good-die yield | 40–70% |
| Good die per wafer | 13k–56k |
| Substrate cost per good die at $5,000/wafer | **~$0.09–$0.39** |

- Against laser gross margins around 50% (Lumentum's corporate non-GAAP gross margin was 50.4% in FQ4'26 [S1]) and transceiver bills of materials in the hundreds of dollars (order of magnitude), a 3.5× substrate price is immaterial to buyers.
- This is the HBM signature: price-insensitive buyers, multi-year LTAs and deposits. JX's announced "price revisions" [S25] should stick through 2027.

**(e) Indium tonnage is not the constraint; licensing and purity are** (my estimate):

| Step | Value |
|---|---|
| InP mass in a 6-inch wafer (~650 µm, 4.81 g/cm³ [S82]) | ≈55 g |
| Indium content (78.8% by mass) | ≈43 g |
| Indium in 1M 6-inch-equivalent wafers per year | ~43 t, ≈4% of 2025 world refinery output (1,100 t [S41]) |
| With an assumed 3–4× crystal-growth and polishing loss | still only ~15% of world output |

- The bottlenecks are China's licensing of InP and of the metal-organic precursors TMIn and TEIn (a second choke point at the *epi* step, under-discussed) [S44][S45], 6N–7N purification, and crystal-growth know-how.

### 3.3 China: controls, permits and Chinese laser entrants

- **Indium regime:**
  - MOFCOM/GAC Announcement No. 10 of 2025, effective 4 Feb 2025, put indium items, including InP, trimethylindium and triethylindium, under export licensing [S45][S44].
  - USGS: China's unwrought indium exports fell 72% y/y (Sep-24 to Sep-25) [S41].
  - AXT received its first permits on 11 Jun 2025, for European and Japanese customers only. As of Aug 2026, **US-customer approvals remain pending with no timeline** [S21] (secondary, citing the 10-Q filed 13 Aug 2026). North America was 1% of AXT revenue in Q1-26 [S20].
- **The truce does not cover indium:**
  - The White House fact sheet (1 Nov 2025) lists general licences for rare earths, gallium, germanium, antimony and graphite. **Indium is not mentioned** [S46].
  - The Busan truce now runs to 10 Jan 2027 [S48].
  - The Ga/Ge/Sb US-ban suspension is dated 27 Nov 2026 [S47]; whether it was rolled is unverified. It matters more for GaAs VCSEL substrates and Ge than for InP.
- **US-side policy:**
  - The FCC's final equipment-authorisation rule, published in the Federal Register on 11 Sep 2026 and effective 30 days later, did not list Innolight, Eoptolink or TFC (secondary [S40]).
  - Coherent says US restrictions on Chinese transceivers would benefit it as "the largest US supplier of transceivers" [S10].
- **Nvidia's selection criteria:**
  - Nvidia's $2B investments in each of Lumentum and Coherent (2 Mar 2026) came with multibillion purchase commitments and capacity rights, and were tied to US manufacturing [S13][S14].
  - A Japanese analysis argues Sumitomo was not chosen partly for lack of US manufacturing (secondary [S30]).
  - Geography is now a competitive variable that favours LITE and COHR over Japanese and Chinese suppliers in Nvidia sockets.

### 3.4 Supply response and the 2028–29 overbuild risk

| Supplier | Announced expansion | Timing | Source |
|---|---|---|---|
| Coherent | Internal InP output 2× y/y by end of Sep-26 qtr; >2× again by end-CY27; Zurich 6-inch | 2026–1H27 | [S10] |
| Lumentum | Two Japan InP fabs expanding; Greensboro (ex-Qorvo GaAs) converted to InP, "sized for billions" | First revenue early 2028; full 2029 | [S1][S3] |
| Mitsubishi Electric | EML chip capacity >3× FY26 → FY30; ¥40B (FY26) | FY27–FY30 | [S31] |
| Sumitomo Electric | Intra-DC optical devices 2.4× by 2026, **12× by 2028**; InP substrates **3.1× FY24 by FY28** (¥18B, Itami) | 2026–FY28 | [S26][S24] |
| JX Advanced Metals | InP substrates **7–10×**; up to ¥120B over 4 years (Isohara + Hitachinaka) | ~2027–2030 | [S25] |
| AXT | InP capacity ~$20M/qtr → $35–40M (Q3-26) → ~$60M (exit-26) → **~$130M (exit-27)**; 6-inch in development | 2026–27 | [S17][S19] |
| Yuanjie | Phase II RMB1.25B (Feb 2026); 50G chip project RMB757M (end-2026); Vancouver, WA site | 2026–27 | [S38] (secondary) |
| Industry | EML + CW-DFB monthly capacity 50.7M units (≈2×); ~15 laser makers expanding MOCVD | 2026–27 | [S32][S53] |

**Read-across** (my estimate):

- The substrate expansions (JX 7–10×, Sumitomo 3.1×, AXT ~6.5× in nominal dollars), plus the 4→6-inch area gain (2.25× per wafer vs 4-inch) and Chinese 6-inch entrants, imply effective InP substrate *area* capacity roughly 4–6× 2024–25 levels by 2028.
- Demand growth is large: TrendForce had 800G+ transceivers going from 24M (2025) to 63M (2026) [S33]. But laser count per module falls as SiPh displaces EMLs (2 to 4 CW lasers vs 8 EMLs per DR8), and falls again under CPO.
- **Most likely outcome:** tight through 2027, balanced in 2028, and at risk of surplus in 2029 for 3- and 4-inch substrates and 70–100 mW CW lasers.
- 6-inch substrates, 200G/400G EML and UHP/ELS lasers stay tighter for longer.
- This argues for owning the substrate names only at reasonable multiples (Sumitomo and JX at ~18–19× forward), not at AXT's ~36× 2027e EPS.

### 3.5 SiPh platforms and foundries; the Photonics-SOI choke point

- **Tower** (primary, 4 Aug 2026) [S58]:
  - SiPh $680M annualised run-rate in Q2-26, up from $180M a year earlier, and expected to cross $1B in Q4-26.
  - 2028 company targets: revenue $3.6B, net profit $1.2B.
  - Japan (14 Jul 2026) [S59]: Arai (ex-Fab 6) repurposed for 300 mm SiPh, ready Q4-27; new 300 mm fab next to Fab 7 operational in 2029; ~$3B Tower share net of a $1B Japanese subsidy.
  - Secondary [S61]: ~$1.3B of 2027 SiPh revenue contracted; ~$320M of customer advances; Fab 7 above an 85% utilisation model.
- **GlobalFoundries:**
  - AMF acquisition announced 17 Nov 2025 [S63] (secondary).
  - SiPh ~$200M (2025), ">2×" in 2026 [S61] (secondary). That is ≈3–6% of GF's $6.94B TTM revenue [S78] (my estimate). Too small to drive the equity.
  - Marvell SiGe capacity expansion for 200G/lane optics (17 Sep 2026) [S63]; SMART Photonics open-access Si+InP service (21 Sep 2026) [S63].
- **STM PIC100:** sell-side estimates of SiPh revenue at $800M (2026) and $2.0B (2027) are **not company guidance** and look aggressive against Tower's ~$1B run-rate [S61] (secondary).
- **TSMC COUPE** captures the highest-value CPO sockets (Nvidia, Broadcom) [S61]. That caps the merchant foundries' CPO share; their opportunity is pluggable/LPO SiPh and NPO engines.
- **The capacity-convergence risk:** four 300 mm SiPh expansions land around 2027–29 (Tower Japan, STM 4× by 2027, UMC Singapore late-27/early-28, Samsung 2027) [S61] (secondary). Foundry SiPh pricing will be fine in 2026–27 and contestable from 2028.
- **The single-source input underneath them all is 300 mm Photonics-SOI.**
  - Soitec's 2 Sep 2026 trading update [S62]:
    - Q2 FY27 PSOI ≈3× Q2 FY26 (~$25M → ~$75M)
    - H1 FY27 ≈2.3× (~$50M → ~$115M)
    - FY27 2.5–3× (slightly >$100M → $250–300M)
    - Capacity-reservation agreements with 8 of ~10 major PSOI customers
  - At EUR/USD 1.15–1.20 (assumption), PSOI would be ~28–35% of FY27 consensus revenue of €737.7M [S78] (my estimate).
  - This is the cleanest "transition obvious to engineers" in scope: every SiPh transceiver, LPO/NPO engine and CPO PIC needs thick-BOX SOI regardless of foundry.

### 3.6 Modulator materials beyond silicon: realistic timing

- **Physics:**
  - Silicon depletion Mach-Zehnder modulators and microrings handle 200G/lane (TSMC COUPE microrings at 200G [S61]).
  - At 400G per lane (≥200 GBd PAM4 or similar), silicon's weak plasma-dispersion effect forces long, lossy or high-drive devices.
  - Pockels materials scale better:
    - TFLN: r₃₃ ≈ 31 pm/V (textbook, not re-verified); HyperLight claims 145 GHz and "448 Gb/s per lane and beyond" [S67].
    - Thin-film BTO: r₄₂ of order 900 pm/V reported (Abel et al., Nature Materials 2019; literature value, not re-verified).
    - EO polymers: very high r₃₃, but thermal and photochemical stability concerns.
    - Plasmonics: ~10 µm devices and ~1 THz bandwidth, but a 2026 field link showed 17.5 dB fibre-to-fibre loss [S66] (secondary).
- **Incumbents also scale:** Lumentum demonstrated a 400G/lane EML at OFC (Mar 2026) [S32]. GF says 400G has been demonstrated on Fotonix [S61] (secondary).
- **My timing view:**
  - TFLN 400G/lane intensity-modulation transmitters sample in 2027 and reach volume in 2028–29, if 3.2T modules adopt 400G lanes.
  - BTO and polymers are 2028+ pilots.
  - Plasmonics stays niche within Marvell.
- **Investability:** no clean public pure-play. UMC and X-FAB (TFLN foundry) are diluted. Sumitomo Osaka Cement's LN business is a sliver of a cement company. Lightwave Logic ($838.7M market cap on $250k TTM revenue, 1 Oct 2026 [S78]) is narrative-priced.
- The materials fork after 2027 is the most important technology risk to *EML incumbency at 400G*, not to InP lasers as light sources.

### 3.7 Wide-and-slow vs narrow-and-fast

- **Micro-LED** links run at ~2–3 Gb/s per channel across hundreds of parallel cores. Avicena showed 335 channels × up to 3 Gb/s = 1 Tb/s (23 Sep 2026) [S64]. Microsoft MOSAIC reached 2 Gb/s per channel over 20 m [S65] (secondary).
- **Physics limit:** a ~25 nm LED linewidth with silica dispersion of about −770 ps/(nm·km) at 450 nm spreads pulses ~960 ps over 50 m, so reach is ~20–30 m [S65] (secondary; arithmetic consistent).
- Claimed energy is 3.1–5.3 W per 800G endpoint vs 9.8–12 W for laser-based links [S65] (secondary).
- **1060 nm VCSEL die-to-die** (Lumentum + Qualcomm + Corning, 21 Sep 2026): 32 Gb/s NRZ per channel; ~10 Tb/s aggregate; ~1 Tb/s/mm shoreline today, targeting ~4 Tb/s/mm; UCIe interface; multimode fibre [S8].
- **Implication** (my estimate):
  - Wide-and-slow and VCSEL options compete for in-rack scale-up (<10–30 m), where copper is losing. They do **not** threaten InP in scale-out or scale-across.
  - They are the biggest swing factor for InP's *scale-up* TAM after 2028. If GaAs VCSELs or micro-LEDs win scale-up, the InP bull case loses its largest post-2028 increment.
  - The winners in that case are GaAs VCSEL makers (Coherent, Lumentum, Broadcom), GaAs epi (VPEC, IQE), Credo, and MOCVD vendors (Aixtron).
  - Coherent's PhotonLink includes VCSEL arrays, so it is hedged across both outcomes [S12].

### 3.8 Passives and packaging: what binds and what is a commodity

- **Binding:** fibre-attach throughput and yield for CPO and NPO (sub-micron alignment, detachable connectors). Lumentum ELS is pluggable (ELSFP) [S7], so PM fibre and connectors are new content per port. Isolators are needed for high-power DFBs.
- **Not yet profitable:** Taiwan's FAU specialist FOCI lost money in Q1-26 despite being in the Nvidia CPO chain [S52]. "CPO concept and CPO profit are currently two different things."
- **Investability:** the large holders of this content (Corning, Fujikura, Sumitomo Electric) are diversified, and Corning and Fujikura are already re-rated:
  - Corning: 43.2× forward, consensus Strong Buy, 1 Oct 2026 [S78]
  - Fujikura: 25.9× forward, 25 Sep 2026 [S78]
- Sumitomo is the cheap one (§4).

### 3.9 Equipment and test: what wins regardless of architecture

- **MOCVD is the purest architecture-agnostic play.** EML, CW, UHP/ELS, photodiodes, GaAs VCSELs and micro-LEDs all need it.
  - Aixtron, Q2-26 (30 Jul 2026) [S53]:
    - Orders €214.5M (+81% y/y); optoelectronics ~75% of equipment orders; backlog €456.9M
    - Revenue guidance: Q3 €180M ± 20M; Q4 >€200M; FY26 €560M ± €30M at ~42% gross margin and 17–20% EBIT margin
    - Q1-27 "likely near Q4 2026 levels"
    - "~15 laser suppliers" expanding; 4-inch tools prepared for 6-inch
    - "It's a ramp rate constraint. It's not a capacity"
  - Annualised Q2 opto orders ≈ €640M (my estimate), above the whole company's 2026 revenue guide. That points to a 2027 revenue inflection consensus may underweight: 2026 EPS consensus is €0.74, −3% y/y [S78].
- **Veeco:** >$250M of InP-laser-related orders (Lumina MOCVD, Spector IBD, WaferEtch), deliveries 2026, "significantly accelerating in 2027" (5 May 2026) [S54]. Its all-stock merger into Axcelis is expected to close in 2H26 [S55], diluting the exposure.
- **Test:**
  - FormFactor: Q2-26 revenue $258.2M; 2026 CPO revenue to "significantly exceed" $20M [S56]. Small against ~$1B of revenue.
  - Full optical inspection of a PIC takes ~100 s, against <5 s per die for FormFactor's wafer-level step (TrendForce via PhotonCap; secondary [S57]). Test time is a CPO volume throttle.
  - Keysight is the route-agnostic instrument vendor (MS ECOC, secondary [S77]).
  - Laser burn-in: Chroma and Aehr. Aehr won a SiPh wafer-level burn-in follow-on production order in Aug 2026 [S78].
- **Assembly:** ficonTEC is the specialist. A 2018 company claim had ficonTEC systems in ~50% of transceiver manufacturing capacity [S70]. Its listed parent RoboTechnik is loss-making at ~1,384× forward P/E (14 Aug 2026 price) [S78].

### 3.10 Priced vs not priced

Latest closes; fwd P/E as reported by stockanalysis.com [S78]; 52-week position computed by me.

| Company | Price (date) | Mkt cap | Fwd P/E | Other | From 52w high | Consensus (n) / avg PT | Read |
|---|---|---|---|---|---|---|---|
| Lumentum (LITE) | $1,045.78 (1 Oct) | $93.8B | 48.0 | EV/TTM sales 30.8; EV/FY27e sales 14.7 (my est.) | −4% | Buy (26) / $1,157 | **Priced** |
| AXT (AXTI) | $81.81 (1 Oct) | $5.25B | 51.2 | 36.4× 2027e EPS (my est.); short 13.7% | −43% | Buy (5) / $91.6 | **Priced + geopolitical** |
| Coherent (COHR) | $319.19 (1 Oct) | $62.5B | 33.9 | EV/FY27e sales 6.0 (my est.) | −27% | Buy (23) / $415.36 | Partly priced |
| Tower (TSEM) | $241.30 (1 Oct) | $27.3B | 46.7 | Fwd EV/S 11.7; 22.7× 2028-target EPS (my est.) | −25% | Strong Buy (10) / $312.93 | Partly priced |
| Sumitomo Electric (5802.T) | ¥2,200 (28 Sep) | ¥6.86T | 18.0–18.6 | EV/EBITDA 10.3 | −41% | Buy (11) / ¥3,447–3,531 | **Not priced** |
| JX Adv. Metals (5016.T) | ¥3,541 (28 Sep) | ¥3.38T | 18.6–18.8 | EV/EBITDA 13.4 | −39% | Buy (11) / ¥4,892–5,021 | **Not priced** |
| Aixtron (AIXA.DE) | €34.80 (25 Sep) | €3.92B | 30.2–31.9 | EV/TTM S 7.7; net cash €464M | −44% | Buy (15) / €48.94 | **Not priced** (sentiment low) |
| Soitec (SOI.PA) | €142.55 (28 Sep) | €5.09B | 207 | Depressed EPS | −29% | **Hold** (19) / €154.37 | **Not priced** (PSOI) |
| Keysight (KEYS) | $373.88 (1 Oct) | $63.7B | 27.7 | EV/S 9.7 | −1% | Buy (12) / $415.08 | Fair |
| FormFactor (FORM) | $148.44 (1 Oct) | $11.6B | 43.0 | — | −7% | Buy (10) / $138.63 (below price) | Priced |
| LandMark (3081.TWO) | NT$2,680 (23 Sep) | NT$272.7B | 91 | — | −26% | Buy / NT$3,136 | Priced |
| VPEC (2455.TW) | NT$556 (18 Sep) | NT$102.8B | 72.8 | — | ~−2% | Strong Buy (11) / NT$488.64 (below) | Priced |
| IntelliEPI (4971.TWO) | NT$552 (24 Sep) | NT$26.1B | 72.5 | — | −42% | Buy / NT$802 | Priced |
| Yuanjie (688498.SS) | ¥1,700.03 (24 Sep, Google) | ¥211.7B | ~203 | — | −14% | Buy (7) / ¥1,573 (below) | Priced |
| Chroma (2360.TW) | NT$2,295 (24 Sep, Google) | NT$975.9B | 42.7 | 2026e revenue +92.7% | −18% | Strong Buy (17) / NT$2,772 | Priced |
| Aehr (AEHR) | $101.60 (1 Oct) | $3.31B | 135 | — | −31% | Strong Buy (6) / $128 | Priced |
| Mitsubishi Elec. (6503.T) | ¥5,239 (25 Sep, Google) | ¥11.07T | ~21 | Optical devices ≈0.9% of revenue (my est.) | −22% | Buy (13) / ¥6,885 | Irrelevant exposure |

Note: the whole optics complex rallied on 1 Oct 2026 (LITE +7.7%, COHR +10.9%, TSEM +6.1%, AXTI +5.7%) [S78]. I did not verify the cause.

---

## 4. Ranked shortlist

### #1 Sumitomo Electric Industries: TSE:5802 (US ADR: SMTOY)

- **Products in focus:**
  - InP substrates (Itami; capacity 3.1× FY24 by FY28, ¥18B) [S24]
  - CW-LD and EML laser chips (intra-DC optical-device capacity 2.4× by 2026, 12× by 2028) [S26]
  - MT/MMC ferrules and high-density connectors (7× by 2026) [S26]
  - Optical fibre and cable
- **Why the products matter:** it owns three or four choke points at once:
  - InP substrates: co-dominant with JX per TrendForce, ~80% with AXT per Reuters [S24][S22]
  - CW-DFB lasers: top tier, with Broadcom, Coherent and LandMark at ~74% of capacity [S32]; company-claimed majority share is secondary [S29]
  - Combined EML + CW-DFB capacity: top-3 with Broadcom and Lumentum, 55% together [S32]. In EML alone the top three are Lumentum, Broadcom and Mitsubishi (~72%), so Sumitomo is not among them.
  - Connectivity: Nvidia Spectrum-X Photonics ecosystem partner [S15]
- **Why this company:** it is the only cheap, liquid way to own the InP substrate *and* laser *and* connector content. The market prices it as an auto-wiring conglomerate.
- **Quantitative evidence:**
  - Q1 FY26 (Apr–Jun 2026; reported 31 Jul 2026): operating profit ¥97.1B (+¥36.8B y/y); Infocommunications OP ¥27.2B (+¥19.1B y/y) on "optical connectors and devices for data centers"; FY26 guide raised to sales ¥5.4T and OP ¥450B [S27]
  - Mid-term plan (22 May 2026): Infocommunications sales ¥326.6B (FY25) → ¥970B (FY28); OP ¥77.4B → ¥240B; Infocommunications capex ~4× FY23–25; group capex ¥1T over three years [S28]
  - Infocommunications was ~18.5% of group OP in FY25, against a target of ~40% in FY28 on a ¥600B group target (secondary [S29]; my estimate)
  - Sum of parts (my estimate): Infocommunications FY28 OP of ¥240B at 20× after-tax would be worth roughly ¥3.4T, about half today's market cap
- **Valuation** (28 Sep 2026 close [S78]; Google ¥2,211 on 25 Sep [S79]):
  - ¥2,200; market cap ¥6.86T; forward P/E 18.0–18.6; EV/EBITDA 10.3
  - Net debt ¥473B; dividend yield 1.77%
  - 52-week range ¥1,023.75–3,712.50; −41% from the high; 4-for-1 split effective 1 Jul 2026 [S29]
- **Consensus** (stockanalysis, accessed 2 Oct 2026 [S78]): Buy, 11 analysts (6 Strong Buy / 4 Buy / 1 Hold)
  - Average PT ¥3,531 on the forecast page (¥3,447 on the quote page); median ¥3,625
  - High ¥5,300 (Jefferies, 11 Aug 2026); low ¥2,600 (Mizuho, cut from ¥3,125 on 11 Sep 2026)
- **Risks and thesis-breakers:**
  - Automotive is ~57% of sales (FY25 ¥2,937B of ¥5,110B; secondary [S29]), so the auto and tariff cycle can swamp optics
  - A Chinese price war in 70–100 mW CW lasers [S3][S37]
  - Being passed over in Nvidia's US-manufacturing-linked deals (secondary [S30])
  - Substrate oversupply in 2029 (§3.4)
  - Supply hiccups such as the ~3-week Golden Week substrate pause [S50]
  - Middle East impact (−¥23B in the FY26 guide) [S27]
  - The cause of the −41% drawdown was not verified
- **Catalysts:**
  - 30 Oct 2026: H1 FY26 results [S78]
  - FY28 InP capacity milestones; announcements on 6-inch InP qualification

### #2 Coherent Corp.: NYSE:COHR

- **Products in focus:** 6-inch InP lasers (EML, CW, UHP CW for CPO), photodiodes, VCSEL arrays, 800G/1.6T transceivers, PhotonLink CPO/NPO platform, optical circuit switches (OCS).
- **Why the products matter:** it is the first volume 6-inch InP laser fab, with yields above 3-inch [S10]. That gives a structural die-cost advantage as the industry migrates.
- **Why this company:**
  - The most vertically integrated InP house; it does not need merchant lasers [S11].
  - Nvidia $2B investment plus a multibillion purchase commitment (2 Mar 2026) [S13]; Nvidia is the named CPO LTA customer [S12].
  - Hedged across InP and GaAs (VCSEL) scale-up outcomes.
- **Quantitative evidence:**
  - FQ4'26 revenue $2.05B (+34% y/y); FY26 $7.12B [S9]
  - FQ1'27 guide $2.2–2.4B, gross margin 39.5–41.5%, EPS $1.85–2.05 [S10]
  - Datacom +66% y/y in Q4 [S10]
  - InP output 2× y/y by end of the Sep-26 quarter (a quarter early), then >2× again by end-CY27; "80% more InP lasers" shipped y/y in the June quarter [S10]
  - "Fiscal 27 … completely booked out"; orders into CY2028; LTAs with fixed pricing to end of decade [S10]
  - FQ4 capex $556M with an ~18-month payback [S10]
  - PhotonLink: >10 CPO, >10 NPO and >5 chip-to-chip engagements; CPO scale-out production from Q4-26, scale-up and NPO in 2H27 [S12]
- **Valuation** (1 Oct 2026 close [S78]):
  - $319.19; market cap $62.5B; EV $64.1B; forward P/E 33.9 (FY27e EPS $9.42)
  - EV/TTM sales 9.0; EV/FY27e sales ~6.0 (my estimate)
  - Net debt $1.56B; shares +26% y/y; 52-week range $105.02–440.00 (−27%)
- **Consensus** [S78]: Buy, 23 analysts (14 Strong Buy / 4 Buy / 5 Hold)
  - Average PT $415.36; median $420
  - High $500 (Rosenblatt, 23 Sep 2026); low $280
  - Bernstein initiated Buy at $350 on 30 Sep 2026
- **Risks:**
  - Revenue is mostly transceivers, so it is exposed to Chinese module pricing and to CPO cannibalising pluggables
  - Execution on the 6-inch ramp; dilution history
  - "Competition, including from China in some laser markets, could affect pricing over time" [S11]
- **Thesis-breakers:** FY27 bookings slip or customer push-outs; a second equity raise; the 6-inch yield advantage reverses.
- **Catalysts:**
  - 4 Nov 2026: FQ1'27 results [S78]
  - Dec-26 quarter: first PhotonLink revenue [S10]
  - 1H CY27: Zurich 6-inch [S10]
  - 12–15 Oct 2026: OCP Summit [S75]

### #3 Aixtron SE: XETRA:AIXA (OTC: AIXXF)

- **Products in focus:** G10-AsP MOCVD reactors for InP/GaAs lasers (EML, CW, UHP), photodiodes and VCSELs, configured for the 4→6-inch transition [S53].
- **Why the product matters:** every laser capacity addition in §3.4 requires MOCVD epitaxy. The 6-inch migration forces tool replacement or upgrade, not just additions.
- **Why this company:**
  - Market-standard tool for photonic III-V epi (per the company [S53]); optoelectronics now drives the orders.
  - The stock is still priced on the GaN/SiC power-device bust: GaN + SiC fell from 71% to 22% of equipment revenue [S53].
- **Quantitative evidence** (30 Jul 2026 [S53]):
  - Q2 orders €214.5M (+81%), ~75% opto; H1 orders €386.0M (+54%); backlog €456.9M
  - Q3 revenue guide €180M ± 20M; Q4 >€200M; Q1-27 near Q4 levels; ~€200M per quarter order baseline
  - €816M liquidity, including a €450M convertible
  - My estimate: at ≥€800M 2027 revenue and a 22–26% EBIT margin, EPS would be ~€1.1–1.3, or ~27–32× at €34.80 (≈24–28× excluding ~€4.1/share of net cash)
- **Valuation** (25 Sep 2026 close [S78][S79]):
  - €34.80; market cap €3.92B; EV €3.69B; forward P/E 30.2–31.9; EV/TTM sales 7.7
  - Net cash €464M; 52-week range €11.68–62.66 (−44%)
- **Consensus** [S78]: Buy, 15 analysts
  - Average PT €48.94; median €44; high €74; low €40
  - Recent: Berenberg Hold €42 (22 Sep); Deutsche Bank €43 (4 Sep); Jefferies Buy, cut from €73 to €44 (30 Jul)
- **Risks:**
  - Chinese laser makers buying domestic MOCVD (AMEC, 688012.SS)
  - Power-electronics drag
  - A 2028 capex air-pocket if lasers overbuild (§3.4)
  - Customer concentration was not disclosed
- **Thesis-breakers:** quarterly orders falling below ~€150M with the opto share fading; 6-inch tool share lost to Veeco Lumina+ [S54].
- **Catalyst:** 29 Oct 2026, Q3 results [S78].

### #4 JX Advanced Metals: TSE:5016 (OTC: JXAMY)

- **Products in focus:** InP substrates (Isohara plus a new Hitachinaka site). Also semiconductor sputtering targets, roughly 60% share per Google Finance's description (secondary [S79]).
- **Why the product matters:** a Japan-based, non-Chinese InP substrate source, the kind of supply that sits outside Chinese export licensing [S21].
- **Why this company:** the most aggressive substrate expansion (7–10×, up to ¥120B over 4 years, 16 Jun 2026), explicitly paired with "price revisions" [S25]. InP is a growth kicker on a base that is itself AI-levered (sputtering targets).
- **Quantitative evidence:**
  - Cumulative InP investment ~¥150B, including prior rounds (Jul 2025, Oct 2025, Feb 2026) [S25]
  - Reuters' share estimate is ~10% of InP substrates (10 Jun 2026) [S22]; TrendForce says "dominant with Sumitomo" [S24]
  - FY3/27 consensus: revenue ¥968B, net income ¥157B [S78], which implies ~21.5× P/E (my estimate)
  - InP revenue is not separately disclosed in sources I could access (the Q1 presentation failed to load)
- **Valuation** [S78]:
  - ¥3,541 (28 Sep 2026 close); ¥3,500 intraday on 29 Sep
  - Market cap ¥3.38T; forward P/E 18.6–18.8; EV/EBITDA 13.4; net debt ¥234B
  - 52-week range ¥1,551–5,828 (−39%)
- **Consensus** [S78]: Buy, 11 analysts
  - Average PT ¥5,021 on the forecast page (¥4,892 on the quote page); median ¥5,055
  - High ¥7,600 (Jefferies, 24 Jun 2026); low ¥1,750
  - Goldman ¥5,010 (6 Jul 2026)
- **Risks:**
  - 7–10× capacity is exactly how substrate cycles end (2029 surplus)
  - Execution on large-diameter crystal growth
  - Possible ENEOS stake overhang (ownership per Google Finance; current stake not verified)
  - Thin disclosure of the InP economics
- **Catalyst:** 9 Nov 2026, Q2 FY3/27 results [S78]; watch price-revision outcomes and the InP capacity schedule.

### #5 Soitec SA: Euronext Paris:SOI (OTC: SLOIF) — higher risk

- **Products in focus:** 300 mm Photonics-SOI wafers (Smart Cut).
- **Why the product matters:** a structural input to every SiPh PIC (Tower, GF, STM, UMC, TSMC-class). It grows with the EML→CW+SiPh transition and with NPO/CPO, independent of which foundry wins.
- **Why this company:** ~95% of 300 mm PSOI (secondary [S61]); capacity-reservation agreements with 8 of ~10 major PSOI customers [S62]; consensus still Hold.
- **Quantitative evidence** (2 Sep 2026 [S62]):
  - PSOI Q2 FY27 ≈3× (~$75M); H1 ≈$115M; FY27 2.5–3× (to $250–300M)
  - Group Q2 FY27 revenue growth ~50% y/y at constant currency, raised from >30%
- **Valuation** [S78]:
  - €142.55 (28 Sep 2026 close); market cap €5.09B; forward P/E 207 on depressed group EPS (FY27e €0.69)
  - FY27e revenue €737.7M, so market cap / FY27e sales ≈6.9× (my estimate)
  - 52-week range €22.62–200.50
- **Consensus** [S78]: Hold, 19 analysts
  - Average PT €154.37; median €152; high €250; low €55
  - Momentum turning: JPM upgraded to Buy, €98 → €200 (18 Sep); Barclays Buy €200 (17 Sep); Bernstein Buy €200 (8 Sep); Jefferies Sell €98
- **Risks:**
  - €500M ORNANE convertible due 2033, priced 17–18 Sep 2026 [S62]
  - Weak RF-SOI and other legacy lines
  - Smart Cut licensees (Shin-Etsu/SEH, GlobalWafers) could add 300 mm PSOI capacity (not verified)
  - The 95% share is secondary
- **Thesis-breakers:** PSOI growth stalls below 2× in FY27; a second-source qualification announcement; another equity-linked raise.
- **Catalyst:** H1 FY27 results (late Nov 2026; date not verified); finalisation of the capacity-reservation agreements.

### #6 Tower Semiconductor: NASDAQ:TSEM (also TASE)

- **Products in focus:** PH18/PH45 SiPh platforms, PH18DA with bonded InP lasers (IQE InP epi LTA, 15 Jun 2026 [S60]), and 300 mm SiPh in Japan.
- **Why the product matters:** the merchant SiPh foundry leader for pluggable, LPO and NPO engines; it benefits directly from Sumitomo's projected EML→CW mix shift [S26].
- **Why this company:** contracted backlog (~$1.3B of 2027 SiPh), ~$320M of customer advances (secondary [S61]), $1B of Japanese subsidy support [S59] and $1.34B net cash [S78].
- **Quantitative evidence** (4 Aug 2026 [S58]):
  - Q2-26 revenue $460M (+24%); net profit $91M ex-items; Q3 guide $520M ±5%
  - SiPh run-rate $680M, heading for >$1B in Q4-26
  - 2028 targets: revenue $3.6B, net profit $1.2B, ≈$10.6 per share (my estimate; 113.03M shares)
- **Valuation** [S78]:
  - $241.30 (1 Oct 2026 close); market cap $27.3B; EV $25.9B
  - Forward P/E 46.7; forward EV/S 11.7; 2027e EPS $6.71 gives ~36× (my estimate)
  - 52-week range $70.90–319.94 (−25%)
- **Consensus** [S78]: Strong Buy, 10 analysts
  - Average PT $312.93; median $313; high $355; low $270
  - Mizuho initiated Buy at $300; Barclays initiated Buy at $310; BofA Buy $367
- **Risks:**
  - The 2028–29 300 mm SiPh capacity convergence (§3.5)
  - TSMC COUPE capturing CPO
  - Customer concentration; Israel geopolitical risk
- **Thesis-breakers:** Q4-26 SiPh run-rate below $1B; 2027 contracted revenue renegotiated.
- **Catalyst:** 9 Nov 2026, Q3 results [S78].

### #7 Lumentum Holdings: NASDAQ:LITE — highest-quality asset, fully priced

- **Products in focus:** 200G EML (the 200G duopolist with Broadcom), UHP CW lasers and the DWDM ELSFP for CPO/NPO (8λ, ≤250 mW/λ, 1H27) [S7], pump lasers (~70–80% share, secondary [S39]), narrow-linewidth lasers, OCS, 1.6T transceivers.
- **Why this company:** the purest InP light-source franchise, with pricing power: "a nice price premium that we expect to sustain" [S2]. Nvidia $2B investment plus an LTA (Mar 2026) [S14].
- **Quantitative evidence:**
  - FQ4'26 (11 Aug 2026): revenue $1,006.3M (+109% y/y); non-GAAP gross margin 50.4%; OM 36.6% [S1]
  - FQ1'27 guide $1,225–1,275M; OM 39.5–40.5%; EPS $4.05–4.35 [S1]
  - 200G EML >25% of EML revenue [S2]
  - First $100M+ OCS quarter guided for FQ1'27 [S2]
  - First external ELS PO, for 2H CY27 delivery [S2]
- **Valuation** [S78]:
  - $1,045.78 (1 Oct 2026 close); market cap $93.8B; EV $92.7B
  - Forward P/E 48.0 (FY27e EPS $21.75); EV/TTM sales 30.8; EV/FY27e sales 14.7 (my estimate)
  - Net cash $1.07B; short interest 7.3%; 52-week range $147.81–1,085.68 (−4%)
- **Consensus** [S78]: Buy, 26 analysts
  - Average PT $1,157; median $1,168
  - High $1,400 (Citi, 28 Sep 2026); low $820
  - Morgan Stanley Hold at $1,000 (24 Aug 2026)
- **Risks:**
  - Valuation
  - A Chinese CW price collapse
  - Nvidia diversifying ELS supply
  - Greensboro execution (first revenue early 2028)
  - Substrate supply "might not be enough" [S3]
- **Thesis-breakers:** FQ1/FQ2 guides miss on supply; the ELS socket is lost; ASP compression at 200G.
- **Catalyst:** 3 Nov 2026, FQ1'27 results [S78].
- **Stance:** own it on drawdowns, not here.

### #8 Keysight Technologies: NYSE:KEYS

- **Products in focus:** BERTs, sampling oscilloscopes, optical modulation analysers and PIC wafer-test instrumentation for 200G/400G lanes and CPO.
- **Why the products matter:** test intensity rises with lane rate and with optics moving onto the package, whichever architecture wins. Morgan Stanley's ECOC note framed Keysight as the route-agnostic beneficiary (secondary [S77]).
- **Why this company:** instrument leadership with a diversified base, at a lower multiple than probe or burn-in pure-plays.
- **Valuation** [S78]:
  - $373.88 (1 Oct 2026 close); market cap $63.7B; forward P/E 27.7; EV/S 9.7
  - TTM revenue $6.58B (+25.5%); 52-week range $158.79–376.68 (at the high)
- **Consensus** [S78]: Buy, 12 analysts (7 Strong Buy / 3 Buy / 2 Hold)
  - Average PT $415.08; high $452 (Goldman, 19 Aug 2026); low $350
  - FY26e EPS $11.47
- **Risks:** the optical share of revenue is not disclosed, so this is a diluted bet; the stock is at its high; a test-capex cycle could turn.
- **Catalyst:** FQ4 results (late Nov 2026; date not verified); OFC Mar 2027.

### #9 AXT Inc.: NASDAQ:AXTI — speculative

- **Products in focus:** InP substrates (3/4-inch, 6-inch in development), GaAs and Ge substrates; raw-material JVs including high-purity indium refining [S19].
- **Why this company:** the most leveraged way to own InP substrate pricing.
  - Q2-26 (30 Jul 2026): revenue $47.6M (+164% y/y); InP $30.7M; ~45% gross margin [S17]
  - Q3-26 guide ≥$66M, covered by permits or not needing them [S17][S19]
  - Capacity $60M per quarter at exit-26 and $130M at exit-27 [S17]
  - Customer deposits: Lumentum $87M, Coherent $25.4M, Casella $22.3M [S16][S17]
- **Valuation** [S78]:
  - $81.81 (1 Oct 2026 close); market cap $5.25B; EV $4.94B; forward P/E 51.2
  - 2027e EPS $2.25, which is 36.4× (my estimate)
  - Net cash $315.7M; shares +19.5% y/y; short interest 13.7%; 52-week range $4.00–143.16
- **Consensus** [S78]: Buy, 5 analysts
  - Average PT $91.6; median $93
  - High $125 (Northland); low $55 (B. Riley, Hold)
- **Risks and thesis-breakers:**
  - 100% of manufacturing is in China; US-customer permits are pending [S21]
  - MOFCOM can throttle quarterly revenue; Q4-25 was already cut for permits [S21]
  - Tongmei's move from the STAR Market to an HKEX listing (~1 year), with $49M of PE redemption rights [S19]
  - Japanese capacity (JX, Sumitomo) catching up by 2028
- **Catalyst:** 29 Oct 2026, Q3 results (≥$66M guide) [S78]; any US-customer permit news.

---

## 5. Also considered and rejected

- **Broadcom (AVGO):** a 200G EML duopolist with CW and VCSEL, but lasers are immaterial next to AI ASIC and switch revenue; covered by other sections.
- **Mitsubishi Electric (6503.T; MIELY):** claims #1 DC-EML share and >3× EML capacity by FY30 [S31], but optical devices were ¥55.4B in FY26 against ~¥6.08T revenue, ≈0.9% (my estimate).
- **LandMark (3081.TWO):** the best merchant InP CW epi house (Jul-26 revenue +176.5% [S51]), but ~91× forward P/E (23 Sep 2026) [S78].
- **IntelliEPI (4971.TWO):** substrate-dependent, as the Q2-26 dip from the Sumitomo pause showed [S50]; ~72.5× forward [S78].
- **VPEC (2455.TW):** ~72.8× forward; consensus average PT NT$488.64 sits *below* the NT$556 price (18 Sep 2026) [S78].
- **Yuanjie (688498.SS):** the real Chinese challenger (H1-26 revenue RMB925M, +351%; ~80% gross margin [S36]), but ~203× forward with PT below price; A-share access. Better used as a threat indicator.
- **Shijia Photonics (688313.SS):** 400 mW CW in small lots [S37]; a threat indicator; valuation not verified.
- **IQE (LSE:IQE; IQEPF):** Quintessent QD-laser and Tower InP epi agreements are real options [S60][S68], but the IR page cites a 2026 capital-raise initiative [S68]; dilution risk.
- **Sumitomo Chemical (4005.T; SOMMY):** InP epi from 31 Aug 2026, but only a ~¥10B target by the mid-2030s [S71]; immaterial.
- **Veeco (VECO):** >$250M of InP-laser tool orders [S54], but the pending all-stock merger into Axcelis (expected close 2H26 [S55]) dilutes the photonics exposure; consensus mixed (avg PT $61.33) [S78].
- **FormFactor (FORM):** the CPO wafer-test leader, but 2026 CPO revenue is only ">$20M" of ~$1B [S56] and the price sits above the consensus average PT [S78].
- **MPI (6223.TWO):** probe cards are 74.7% of revenue [S72]; photonics share undisclosed; ~57× forward (21 Aug 2026 price, stale) [S78].
- **Chroma ATE (2360.TW):** laser burn-in and test is real, but 2026e revenue +92.7% is in the price (42.7× forward) [S78].
- **Aehr (AEHR):** SiPh wafer-level burn-in follow-on order (Aug 2026) is real, but 135× forward [S78].
- **Viavi (VIAV), Anritsu (6754.T), santec (6777.T):** optical test is a fine business but not a bottleneck. Anritsu (25.4× forward, stale 21 Aug price) and santec (23.5× forward, stale 27 Jul price) go on the watchlist [S78].
- **RoboTechnik / ficonTEC (300757.SZ):** the purest photonic assembly and test equipment exposure [S70], but loss-making and ~1,384× forward [S78].
- **Mycronic (MYCR.ST), ASMPT (0522.HK), Kulicke & Soffa (KLIC), BESI (BESI.AS):** photonics assembly or hybrid bonding is a small slice; BESI is an HBM/hybrid-bonding story. KLIC (16.4× forward, Hold) is the cheap option if CPO assembly is ever quantified [S78].
- **GlobalFoundries (GFS):** Fotonix plus AMF, but SiPh is ≈3–6% of revenue (my estimate); 22.5× forward with consensus PT $76 [S78]. Fine, but not a photonics vehicle.
- **STMicroelectronics (STM):** PIC100 and AWS are interesting, but the SiPh revenue path is sell-side-only [S61] and the auto/industrial cycle dominates.
- **UMC (UMC), X-FAB (XFAB.PA):** TFLN optionality, with revenue mostly 2027–28 [S61].
- **Lightwave Logic (LWLG):** $838.7M market cap on $250k TTM revenue [S78]; long-term polymer reliability unproven.
- **POET Technologies (POET):** $1.32B market cap on $1.71M TTM revenue; the Marvell partnership ended [S78].
- **QD Laser (6613.T):** ¥86.5B market cap on ¥1.49B revenue (17 Sep 2026) [S78]. Quintessent (private) is the credible QD player.
- **Sumitomo Osaka Cement (5232.T):** LN modulators are a sliver of a cement company [S78].
- **Corning (GLW), Fujikura (5803.T), Furukawa (5801.T):** fibre, cable and PM-fibre content is real, but fibre is covered elsewhere and GLW/Fujikura are re-rated. Furukawa is the cheapest (23.4× forward, PT ¥6,140 vs ¥3,901 on 18 Sep 2026) [S78]; its laser-diode business was not verified in this pass.
- **AGC (5201.T), Hoya (7741.T), Ohara (5218.T), Kyocera (6971.T), Schott (private):** interconnect exposure is immaterial.
- **Applied Optoelectronics (AAOI):** transceivers, loss-making (TTM net loss −$57M) [S78]; outside scope.
- **Private names to track (no public vehicle):** HyperLight, Lightium, Lumiphase, Avicena, Quintessent, Enlightra, Xscape, Ayar Labs, Lightmatter, Freiberger, TRUMPF, PicoJool, Solinide, Palomar, EXFO, Senko, US Conec.

---

## 6. Catalyst calendar (dated)

| Date | Event | Why it matters | Source |
|---|---|---|---|
| ~11 Oct 2026 | FCC equipment-authorisation rule effective (published 11 Sep, +30 days) | Chinese transceiver import risk | [S40] (secondary) |
| 12–15 Oct 2026 | OCP Global Summit, San Jose | CPO/ELS/OCI MSA updates; NPO timing | [S75] |
| 28 Oct 2026 | FormFactor Q3 | CPO test revenue trajectory | [S78] |
| 29 Oct 2026 | AXT Q3 (guide ≥$66M) | Permit flow; 6-inch progress | [S78][S17] |
| 29 Oct 2026 | Aixtron Q3 (guide €180M ± 20M) | Opto order sustainability | [S78][S53] |
| 30 Oct 2026 | Sumitomo Electric H1 FY26 | Infocommunications OP; substrate and laser capacity | [S78] |
| 3 Nov 2026 | Lumentum FQ1'27 (guide $1.225–1.275B) | EML/UHP supply; ELS orders; first $100M+ OCS quarter | [S78][S1] |
| 4 Nov 2026 | Coherent FQ1'27 (guide $2.2–2.4B); Veeco Q3 | InP doubling milestone; bookings into 2028 | [S78][S10] |
| 9 Nov 2026 | Tower Q3 (guide $520M); JX Q2 FY3/27 | SiPh run-rate toward $1B; InP pricing | [S78][S58] |
| 27 Nov 2026 | China's Ga/Ge/Sb US-ban suspension expires unless extended | GaAs/Ge supply | [S47] |
| 2H 2026 | Axcelis–Veeco merger close | VECO becomes ACLS exposure | [S55] |
| Q4 2026 | Coherent CPO scale-out production; Tower SiPh >$1B run-rate | CPO and SiPh proof points | [S12][S58] |
| 10 Jan 2027 | Extended Busan truce expiry | Rare-earth control suspension; tariffs | [S48] |
| 1H 2027 | Lumentum ELSFP availability; Coherent Zurich 6-inch | ELS supply; 6-inch scale | [S7][S10] |
| 2H 2027 | CPO scale-up and NPO ramps; Lumentum ELS deliveries; UHP demand ramp | Validates the InP-per-laser thesis | [S12][S2] |
| Q4 2027 | Tower Arai 300 mm SiPh ready | SiPh capacity step-up | [S59] |
| Early 2028 | Lumentum Greensboro first revenue | Laser supply relief | [S1][S3] |
| FY2028 | Sumitomo InP 3.1× FY24; optical devices 12× | Possible start of surplus | [S24][S26] |
| 2029 | Tower new Japan fab; JX 7–10× substantially complete | Overbuild-risk window | [S59][S25] |

---

## 7. Open items and limitations

- Web-search quota for this session ran out (200 of 200), so the late-stage checks used direct page fetches.
- Pages I could not fetch: the JX Q1 FY3/27 presentation, the IQE interim results, GF's AMF press release, CNBC's 24 Sep truce article (I used summaries) and the Morgan Stanley ECOC note (I relied on the hub digest's secondary summary). Google Finance's LandMark quote was rate-limited.
- **Not verified:**
  - Whether China's 27 Nov 2026 Ga/Ge/Sb suspension was rolled to 10 Jan 2027
  - The cause of the 1 Oct 2026 optics rally
  - The causes of the Sumitomo, JX and Aixtron drawdowns
  - Teradyne's Quantifi Photonics acquisition
  - Ownership of Fujitsu Optical Components
  - PM fibre, isolator and garnet supplier shares
  - TMIn supplier identities
  - Soitec's ~95% PSOI share (secondary only)
- **Data conflicts to watch:**
  - InP substrate shares: TrendForce "Sumitomo + JX dominant" vs Reuters "AXT + Sumitomo ~80%, JX ~10%"
  - Laser unit capacity: TrendForce 50.7M/month vs Convequity per-supplier annual figures
  - Sumitomo consensus PT: ¥3,447 vs ¥3,531 on two stockanalysis pages
  - JX consensus PT: ¥4,892 vs ¥5,021, likewise
- Several Japanese and Taiwanese prices are 2–10 days stale (dated in the tables). Mitsubishi Electric, Anritsu, santec, MPI, Sumitomo Osaka Cement and Ohara are older still.

---

## 8. Sources

Access date for all web sources: 2 Oct 2026 unless stated. The date in each entry is the publication or event date.

- **S1** Semiconductor Today, "Lumentum's quarterly revenue more than doubles year-on-year to over $1bn" (2026-08-19): https://www.semiconductor-today.com/news_items/2026/aug/lumentum-190826.shtml
- **S2** Investing.com, Lumentum FQ4 FY26 earnings call transcript (2026-08-11): https://www.investing.com/news/transcripts/earnings-call-transcript-lumentum-tops-q4-2026-forecasts-as-ai-demand-lifts-outlook-93CH-4852933
- **S3** Investing.com, Lumentum at Deutsche Bank 2026 Technology Conference (2026-08-27): https://www.investing.com/news/transcripts/lumentum-at-deutsche-bank-2026-technology-conference-optics-gains-pace-93CH-4880293
- **S4** 24/7 Wall St, "Lumentum CEO: sold out through end of 2027" (2026-03-12) (secondary): https://247wallst.com/investing/2026/03/12/lumentum-ceo-sold-out-through-end-of-2027-no-end-in-sight/
- **S5** Xenospectrum, Lumentum InP shortage "worse than memory" (CEO remarks at RAISE Paris, 2026-07-08) (secondary): https://xenospectrum.com/en/lumentum-inp-ai-optics-shortage/
- **S6** TrendForce, "InP shortage emerges as AI optical interconnect bottleneck" (2026-08-06): https://www.trendforce.com/news/2026/08/06/news-inp-shortage-emerges-as-ai-optical-interconnect-bottleneck/
- **S7** Lumentum IR, DWDM ELSFP laser module for OCI MSA (2026-09-21): https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-to-Demonstrate-DWDM-ELSFP-Laser-Module-for-OCI-MSA-Applications-at-ECOC-2026/default.aspx
- **S8** Lumentum IR, Lumentum–Qualcomm–Corning 1060 nm VCSEL D2D (2026-09-21): https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Qualcomm-and-Corning-to-Demonstrate-High-Density-1060-nm-VCSEL-Optical-D2D-Connectivity-for-AI-Scale-Up-at-ECOC-2026/default.aspx
- **S9** StockTitan news pages for LITE, COHR and AXTI (items dated Jul–Sep 2026): https://www.stocktitan.net/news/LITE/ ; https://www.stocktitan.net/news/COHR/ ; https://www.stocktitan.net/news/AXTI/
- **S10** The Motley Fool, Coherent Q4 FY2026 earnings call transcript (call 2026-08-12; posted 2026-08-19): https://www.fool.com/earnings/call-transcripts/2026/08/19/coherent-cohr-q4-2026-earnings-call-transcript/
- **S11** Investing.com, Coherent Q4 FY2026 earnings call transcript (2026-08-12): https://www.investing.com/news/transcripts/earnings-call-transcript-coherent-tops-revenue-forecast-in-q4-2026-stock-swings-93CH-4856322
- **S12** RCR Wireless, Coherent PhotonLink at ECOC (2026-09-29): https://rcrwireless.com/20260929/data-center-2/coherent-aidc-photonlink
- **S13** NVIDIA Newsroom, NVIDIA and Coherent strategic partnership (2026-03-02): https://nvidianews.nvidia.com/news/nvidia-and-coherent-announce-strategic-partnership-to-develop-optics-technology-to-scale-next-generation-data-center-architecture
- **S14** CNBC, Nvidia to invest $4B in Coherent and Lumentum (2026-03-02): https://www.cnbc.com/2026/03/02/nvidia-investment-coherent-lumentum.html ; Compound Semiconductor: https://compoundsemiconductor.net/article/123669/NVIDIA_to_invest_4b_in_Lumentum_and_Coherent
- **S15** NVIDIA Newsroom, Spectrum-X / Quantum-X Photonics CPO switches (2025-03-18): https://nvidianews.nvidia.com/news/nvidia-spectrum-x-co-packaged-optics-networking-switches-ai-factories
- **S16** Semiconductor Today, AXT–Lumentum long-term InP supply agreement (2026-07-30): https://www.semiconductor-today.com/news_items/2026/jul/axt-lumentum-300726.shtml
- **S17** Semiconductor Today, AXT Q2 2026 (2026-08-04): https://www.semiconductor-today.com/news_items/2026/aug/axt-040826.shtml
- **S18** AXT Q2 2026 press release via Nasdaq (2026-07-30): https://www.nasdaq.com/press-release/axt-inc-announces-second-quarter-2026-financial-results-2026-07-30
- **S19** Gloom, AXT Q2 2026 call transcript (2026-07-30) (secondary transcript): https://gloom.sh/stocks/axti/transcripts/q2-2026
- **S20** Semiconductor Today, AXT Q1 2026 (2026-05-05): https://www.semiconductor-today.com/news_items/2026/may/axt-050526.shtml
- **S21** NTD, "China export curbs delay AXT's US-bound indium phosphide shipments" (2026-09-08; cites AXT 10-Q filed 2026-08-13) (secondary): https://www.ntd.com/china-export-curbs-delay-axts-us-bound-indium-phosphide-shipments_1171386.html
- **S22** Reuters, "China's control over indium phosphide exports threatens AI data centre rollout" (2026-06-10), via Yahoo Finance: https://finance.yahoo.com/sectors/technology/articles/chinas-control-over-indium-phosphide-010212293.html ; Kitco syndication (2026-06-11): https://www.kitco.com/news/off-the-wire/2026-06-11/chinas-control-over-indium-phosphide-exports-threatens-ai-data-centre
- **S23** Xenospectrum, "InP substrates emerge as a supply risk … 10%+ price hikes and long-term contracts" (mid-2026) (secondary): https://xenospectrum.com/en/inp-shortage-ai-optical-supply/
- **S24** TrendForce, "Sumitomo Electric to raise InP substrate expansion scale with JPY 18 billion" (2026-07-13): https://www.trendforce.com/news/2026/07/13/news-sumitomo-electric-to-raise-inp-substrate-expansion-scale-with-jpy-18-billion/
- **S25** JX Advanced Metals news release, InP substrate capital-investment policy (2026-06-16): https://www.jx-nmm.com/english/newsrelease/fy2026/20260616_02.html ; Semiconductor Today (2026-06-17): https://www.semiconductor-today.com/news_items/2026/jun/jx-170626.shtml
- **S26** Sumitomo Electric, "Growth strategy for data center-related business" (2025-11-13): https://sumitomoelectric.com/sites/default/files/2025-11/download_documents/Growth%20strategy%20for%20data%20center-related%20business_2025.pdf
- **S27** Sumitomo Electric, Q1 FY2026 supplementary sheet (2026-07-31): https://sumitomoelectric.com/sites/default/files/2026-07/download_documents/2026_1_hosokug.pdf
- **S28** Sumitomo Electric, Mid-term Management Plan 2028 (2026-05-22): https://sumitomoelectric.com/sites/default/files/2026-05/download_documents/28me.pdf
- **S29** note.com (loots), Sumitomo Electric FY2025 segment data, FY28 targets, stock split (2026-07-03) (secondary): https://note.com/loots/n/n25a92d261654?hl=en
- **S30** note.com (tomos_ai_lab), "Why Sumitomo Electric was not chosen" (2026-03-03) (secondary): https://note.com/tomos_ai_lab/n/nd22604e1ce16?hl=en
- **S31** Mitsubishi Electric, Semiconductor & Device business briefing (2026-05-29): https://www.mitsubishielectric.com/en/pr/2026/pdf/0529_co5.pdf
- **S32** Semiconductor Today (TrendForce), "EML and CW-DFB monthly capacity to 50.7 million in 2026" (2026-06-04): https://www.semiconductor-today.com/news_items/2026/jun/trendforce-040626.shtml
- **S33** TrendForce press centre, "AI data centers ignite a laser shortage wave" (2025-12-08): https://www.trendforce.com/presscenter/news/20251208-12823.html
- **S34** Convequity, "Notes: Light is the Future (Pt. 2)" (2025-12-28) (secondary): https://www.convequity.com/notes-light-is-the-future-pt-2/
- **S35** Broadcom IR, "Broadcom extends technology and volume leadership on AI optical components" (2024-03-13): https://investors.broadcom.com/news-releases/news-release-details/broadcom-extends-technology-and-volume-leadership-ai-optical
- **S36** Tencent News (QQ), Yuanjie H1 2026 results (2026-08-28) (secondary): https://news.qq.com/rain/a/20260828A0A9GK00
- **S37** ivnotebook, "Optical-chip leaders 2026 H1" (2026-09-10) (secondary): https://ivnotebook.com/articles/20260910-optical-chips-leaders-2026h1/
- **S38** 404K Research, Yuanjie update incl. Nomura estimates (Jul 2026) (secondary): https://404kresearch.substack.com/p/yuanjie-technology-update-16t-32t
- **S39** TechFlow, Nomura note on Lumentum (Aug 2026) (secondary): https://www.techflowpost.com/en-US/article/33273
- **S40** BigGo Finance, FCC final rule and CPO mass production (Sep 2026) (secondary): https://finance.biggo.com/news/527f426d-2faa-4536-8c71-3772272ffdf4
- **S41** USGS Mineral Commodity Summaries 2026, Indium (Jan 2026): https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-indium.pdf
- **S42** USGS Mineral Commodity Summaries 2026, Gallium: https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gallium.pdf
- **S43** USGS Mineral Commodity Summaries 2026, Germanium: https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-germanium.pdf
- **S44** Geopolitical Monitor, "Critical minerals: global indium supply & demand" (2026-05-07) (secondary): https://www.geopoliticalmonitor.com/critical-minerals-global-indium-supply-demand/
- **S45** MOFCOM/GAC Announcement No. 10 of 2025, tungsten/tellurium/bismuth/molybdenum/indium items (effective 2025-02-04), via ChemRadar: https://www.chemradar.com/lawinfo/detail/ec3v6f0pi4g0 ; Exiger summary: https://www.exiger.com/perspectives/critical-minerals-export-controls/
- **S46** White House fact sheet on the US–China economic and trade deal (2025-11-01): https://www.whitehouse.gov/fact-sheets/2025/11/fact-sheet-president-donald-j-trump-strikes-deal-on-economic-and-trade-relations-with-china/
- **S47** SME Mining Engineering, "China halts ban on gallium, germanium, antimony exports to US, but controls remain" (2025-11-11): https://me.smenet.org/china-halts-ban-on-gallium-germanium-antimony-exports-to-us-but-controls-remain/ ; Fastmarkets (2025-11-09): https://www.fastmarkets.com/insights/china-suspends-export-prohibition-on-superhard-materials-us/
- **S48** Bessent extension of the Busan truce to 10 Jan 2027 (2026-09-24). Original: CNBC https://www.cnbc.com/2026/09/24/us-china-trade-truce-bessent-trump-xi.html (fetch blocked). Summary used: TradersAgency (secondary) https://tradersagency.com/blog/bessent-says-us-china-trade-truce-extended-to-jan-10-as-xi-arrives-in-washington ; Rinnovabili (2026-09-25): https://www.rinnovabili.net/policy-and-affairs/environmental-policies/chinese-rare-earth-exports-trump-xi-truce/
- **S49** CommBank, "The November deadline hanging over this week's Trump–Xi meeting" (2026-09-22): https://www.commbank.com.au/articles/newsroom/2026/09/trump-xi-summit-rare-earths-november-deadline.html
- **S50** Taipei Times, "IntelliEPI revenue to rival NT$332m record" (2026-08-28): https://www.taipeitimes.com/News/biz/archives/2026/08/28/2003863247
- **S51** BigGo Finance, LandMark July revenue (2026-08-06) (secondary): https://finance.biggo.com/news/77496031-f908-42d5-9886-dd0be6919d6e
- **S52** BigGo Finance, Nvidia CPO ecosystem — 8 Taiwan supply-chain players (2026-07-24) (secondary): https://finance.biggo.com/news/18d4225c-e1a8-4df5-9217-e88dc0929a91
- **S53** Aixtron Q2 2026: Semiconductor Today (2026-08-10) https://www.semiconductor-today.com/news_items/2026/aug/aixtron-100826.shtml ; Investing.com call transcript (2026-07-30) https://www.investing.com/news/transcripts/earnings-call-transcript-aixtron-q2-2026-sales-rebound-lifts-shares-62-93CH-4825200 ; Compound Semiconductor (2026-07-30) https://compoundsemiconductor.net/article/124922/Aixtron_sees_strong_momentum_in_optoelectronics
- **S54** Veeco: Semiconductor Today Q2 2026 (2026-08-12) https://www.semiconductor-today.com/news_items/2026/aug/veeco-120826.shtml ; >$250M InP-laser equipment orders via StockTitan (2026-05-05) https://www.stocktitan.net/news/VECO/veeco-announces-250-million-in-equipment-orders-for-manufacturing-k5qmvlhjaysf.html ; Lumina+ order (2026-08-06) https://www.semiconductor-today.com/news_items/2026/aug/veeco-060826.shtml
- **S55** Axcelis Q2 2026 results release, merger status (2026-08-06): https://investor.axcelis.com/news-releases/news-release-details/axcelis-announces-financial-results-second-quarter-2026
- **S56** Yahoo Finance, FormFactor Q2 2026 earnings call highlights (2026-07-30): https://finance.yahoo.com/markets/stocks/articles/formfactor-inc-form-q2-2026-050432973.html
- **S57** PhotonCap, "The 100-second bottleneck behind NVIDIA CPO" (2026-05-08) (secondary): https://photoncap.net/p/the-100-second-bottleneck-behind
- **S58** Tower Semiconductor, Q2 2026 results (2026-08-04): https://ir.towersemi.com/news-releases/news-release-details/tower-semiconductor-announces-record-results-revenue-and
- **S59** Tower Semiconductor, METI-supported capacity expansion in Japan (2026-07-14): https://ir.towersemi.com/news-releases/news-release-details/tower-semiconductor-meti-support-announces-strategic-capacity
- **S60** Tower Semiconductor / IQE, multi-year InP epiwafer supply agreement (2026-06-15): https://ir.towersemi.com/news-releases/news-release-details/iqe-and-tower-semiconductor-announce-multi-year-inp-epiwafer
- **S61** Crack the Market, "The silicon photonics foundry layer: who can actually make a PIC" (2026-10-01) (secondary): https://crackthemarket.substack.com/p/the-silicon-photonics-foundry-layer
- **S62** Soitec trading update (2026-09-02): https://www.soitec.com/home/group/corporate/newsroom/press-releases/content/2026/09/02/soitec-trading-update ; ORNANE €500M due 2033 (2026-09-17/18), via Soitec newsroom: https://www.soitec.com/en/press-releases
- **S63** GlobalFoundries: Wikipedia (AMF acquisition announced 2025-11-17) (secondary) https://en.wikipedia.org/wiki/GlobalFoundries ; GF–Marvell collaboration (2026-09-17) https://gf.com/news-and-events/news/globalfoundries-and-marvell-expand-collaboration-fornext-generation-optical-connectivity/ ; GF newsroom, SMART Photonics partnership (2026-09-21) https://gf.com/newsroom/
- **S64** Optics.org, "ECOC 2026 showcases new optical communications launches" (2026-09-23): https://optics.org/news/ecoc-2026-showcases-new-optical-communications-launches ; PicoJool round (2026-09-29): https://optics.org/news/picojool-to-scale-vcsel-production-with-27.5m-series-a
- **S65** PhotonCap, "The dispersion problem in microLED optical interconnects" (2026-09-16) (secondary): https://photoncap.net/p/the-dispersion-problem-in-microled
- **S66** PhotonCap, "Marvell drew its own plasmonics map in June" (2026-09-04) (secondary): https://photoncap.net/p/marvell-drew-its-own-plasmonics-map
- **S67** HyperLight homepage: https://hyperlightcorp.com/
- **S68** Quintessent homepage (Series A 2026-08-24): https://www.quintessent.com/ ; IQE homepage and investors page (Quintessent agreement 2026-09-03; interim results 2026-09-07): https://www.iqep.com/ , https://www.iqep.com/investors/
- **S69** Lumiphase https://www.lumiphase.com/ ; Enlightra https://www.enlightra.com/ ; Xscape Photonics https://www.xscapephotonics.com/
- **S70** ficonTEC news (RoboTechnik HK listing, Sep 2026; HTSI cooperation, Oct 2026): https://www.ficontec.com/news
- **S71** Semiconductor Today, Sumitomo Chemical begins mass production of 4-inch InP epiwafers (2026-08-31): https://www.semiconductor-today.com/news_items/2026/aug/sumitomochemical-310826.shtml
- **S72** MPI Corporation, 2026 Q2 results: https://www.mpi-corporation.com/wp-content/uploads/2026/08/MPI_2026-Q2-Results_EN_2pages.pdf
- **S73** PhotonCap: "AXT and Lumentum's prepayment deal" https://photoncap.net/p/axt-and-lumentums-prepayment-deal ; "The 8 companies behind Lumentum's $808M quarter" https://photoncap.net/p/the-8-companies-behind-lumentums ; "The more silicon wins, the more InP sells" https://photoncap.net/p/the-more-silicon-wins-the-more-inp (all secondary, partly paywalled)
- **S74** 24/7 Wall St, "Lumentum climbs 7% as optics selloff reverses" (Citi OCS $11B by 2030) (2026-09-29) (secondary): https://www.247wallst.com/investing/2026/09/29/lumentum-climbs-7-as-optics-selloff-reverses-a-day-after-citis-11b-switching-call-coherent-and-corning-rise-5/
- **S75** OCP Global Summit 2026 (12–15 Oct 2026, San Jose): https://www.opencompute.org/summit/global-summit
- **S76** Semiconductor Today (IDTechEx), SiPh and InP PIC market to $48bn by 2036 (2026-09-28): https://www.semiconductor-today.com/news_items/2026/sep/idtechex-280926.shtml
- **S77** Hub digest, 2026-09-28, summarising the Morgan Stanley ECOC note (~2026-09-24) from a Bitget/Jintou summary (secondary; not independently verified): local file `investment_dashboard_public/digests/2026-09-28.html` ; original summary URL https://www.bitget.com/amp/news/detail/12560605866130 . Also cites Coherent's ECOC press release https://www.coherent.com/news/press-releases/launches-photonlink-integrated-optics-platform-ai-infrastructure
- **S78** stockanalysis.com quote, forecast and statistics pages (prices dated in the tables; consensus as displayed on 2 Oct 2026):
  - US: https://stockanalysis.com/stocks/lite/ (and /forecast/, /statistics/); cohr; axti; tsem; keys; veco; form; glw; viav; aehr; gfs; stm; klic; ter; aaoi; lwlg; poet
  - Japan/Europe/Asia: https://stockanalysis.com/quote/tyo/5802/ ; /tyo/5016/ ; /tyo/6503/ ; /tyo/6754/ ; /tyo/6777/ ; /tyo/6613/ ; /tyo/5232/ ; /tyo/5218/ ; /tyo/5801/ ; /tyo/5803/ ; /etr/AIXA/ ; /epa/SOI/ ; /epa/XFAB/ ; /ams/BESI/ ; /sto/MYCR/ ; /hkg/0522/ ; /tpe/2360/ ; /tpe/2455/ ; /tpex/3081/ ; /tpex/4971/ ; /tpex/6223/ ; /sha/688498/ ; /she/300757/ ; /she/300394/
  - OTC symbols: SMTOY, JXAMY, AIXXF, SLOIF, MIELY, IQEPF, BESIY, ASMVY, FKURF, FUWAY, AITUF, SOMMY, HOCPY, ASGLY, KYOAY, SHECY at https://stockanalysis.com/quote/otc/<SYMBOL>/
- **S79** Google Finance quote pages (accessed 2026-10-02): https://www.google.com/finance/quote/5802:TYO ; 5016:TYO ; AIXA:ETR ; SOI:EPA ; 6503:TYO ; 2360:TPE ; 688498:SHA
- **S80** MarketScreener, Lumentum consensus (accessed 2026-10-02): https://www.marketscreener.com/quote/stock/LUMENTUM-HOLDINGS-INC-23132759/consensus/
- **S81** Electro-optic coefficients (background literature values, not re-fetched): LiNbO₃ r₃₃ ≈ 31 pm/V (standard textbook value); BaTiO₃-on-Si r₄₂ ≈ 923 pm/V (Abel et al., *Nature Materials* 18, 42–47, 2019)
- **S82** Wikipedia, Indium phosphide (density 4.81 g/cm³; molar mass 145.79 g/mol; band gap 1.344 eV): https://en.wikipedia.org/wiki/Indium_phosphide

*Not investment advice. This brief is an educational research input for a public website. Prices and consensus figures are point-in-time and will change.*
