> **Coverage audit (2 Oct 2026), read-only pass over commit 9d8ec4e.** Machine-readable items: `claude-summary/data/coverage-gaps.json`.

# Audit C: Software, Hyperscalers, Digests, Hub and shared data

**Audit date:** Friday 2026-10-02
**Repository:** `armanamirzhan/investment_dashboard_public` at commit `9d8ec4e`. I read it and did not modify it.
**Live site:** https://armanamirzhan.github.io/investment_dashboard_public/. The live copies of `index.html`, `software/`, `hyperscalers/`, `digests/`, the `data/*.json` files and `assets/site.js` are byte-identical to the clone (checked 2026-10-02).
**Machine-readable companion:** the items with IDs beginning C- in `../data/coverage-gaps.json` (169 entries: 36 high, 73 medium, 60 low).

**Priority key**
- **High:** a materially important company is missing from a core subsection, or a fact or ticker is wrong.
- **Medium:** a useful addition or a stale figure.
- **Low:** nice to have.

**How I verified things.** The WebSearch quota was used up before this audit started, so I checked time-sensitive claims another way:
- Google News and Bing News RSS feeds.
- The Wikipedia API (page extracts and revision timestamps).
- stockanalysis.com quote and cash-flow pages. These show live tickers and "delisted (reason: acquired by …)" banners.
- Direct fetches of company and press pages.

Each claim below carries a dated URL. No page uses a JavaScript-rendered company list. `assets/site.js` only highlights the nav and injects the legend, and the only `fetch()` calls on the site load `stages.json` and `timeline-stages.json` in Electrification, Hardware and Semiconductors, which are outside my scope. So every list in scope is static HTML or a JSON file, and I read all of them.

---

## 0. Executive summary: the top issues

1. **Several companies are labelled private or standalone when they are not.**
   - **Ansys (ANSS)** is shown as standalone. Synopsys acquired it on 2025-07-17 and ANSS is delisted.
   - **Exscientia (EXAI)** merged into Recursion (RXRX) on 2024-11-20.
   - **Zhipu AI**, called "private" on the page, listed on HKEX on 2026-01-08 as Z.ai, code 2513.
   - **Cerebras**, shown with no ticker, listed on Nasdaq in May 2026 as CBRS.
   - **Arm (ARM)**, **Tempus AI (TEM)** and **Figma (FIG)** are listed companies shown with no ticker.
2. **The SpaceX/xAI changes are not reflected.**
   - SpaceX acquired xAI and renamed it SpaceXAI (July 2026).
   - SpaceX listed on 2026-06-12 as **SPCX**.
   - SpaceX completed the **$60B Cursor/Anysphere** acquisition on 2026-08-14.
   - Meanwhile `hyperscaler_buildouts.json` gives xAI a ticker, **"XAI", that does not exist**, and `software_companies.json` still calls Cursor private at "~$100M+".
3. **Other ownership changes are missing.**
   - **Weights & Biases** belongs to CoreWeave.
   - **Hugging Face** is being acquired by NVIDIA (about $12.9B, announced 2026-09-03).
   - **Replicate** belongs to Cloudflare. **Neptune.ai** belongs to OpenAI.
   - **Robust Intelligence** and **Galileo** belong to Cisco.
   - **Protect AI** belongs to Palo Alto Networks. The page's "Rebuff AI" is Protect AI's open-source tool, not a company.
   - **Tabnine** belongs to Tricentis. **PathAI** is being acquired by Roche.
   - **Anyscale** is being acquired by Nscale.
4. **Every 2026 capex figure on the Hyperscalers page is stale or internally inconsistent.**
   - MSFT: about $175B for calendar 2026, on the reported basis.
   - AMZN: about $220B, not $200B.
   - GOOGL: $195–205B, not $180–190B.
   - META: $130–145B, and the record shows both $115–135B and $125–145B.
   - **ORCL: FY27 is $90–95B, not "~$50B"**, and RPO is $664B, not $553B.
   - CRWV: backlog is $104.2B, not $66.8B.
   - Several historical values are wrong. Alphabet's "2024" figure of 33 is actually its 2023 capex.
5. **Corrupted text in the public JSON.** The `$` amounts were eaten when the text passed through a shell: "Cloud revenue **0B**", "Market cap passed **.5T**", "Capex expected to hit **02B**". This affects `data/companies.json` and `data/hyperscaler_companies.json`.
6. **The master ticker for Schneider Electric is invalid.** `SNEXF` does not exist; the correct symbols are SU.PA and SBGSY/SBGSF.
7. **Core subsections are missing major names.**
   - Software:
     - **Palo Alto Networks, Zscaler and Cloudflare** in security.
     - **Datadog, MongoDB and Elastic** in data infrastructure.
     - **Google DeepMind and Meta** among foundation models.
   - Hyperscalers:
     - **Alibaba, Tencent, Baidu and ByteDance** among the clouds.
     - Neoclouds: **Nebius, IREN, Crusoe, Fluidstack and Nscale**. Bitcoin-miner AI landlords: **Applied Digital, Cipher, TeraWulf and Core Scientific**.
     - Colocation/REITs: **Iron Mountain, American Tower/CoreSite, NTT DC REIT, Keppel DC, GDS and VNET**.
     - Developers: **Aligned, QTS, Vantage, Stack and EdgeCore**.
   - The Hyperscalers page lists only 9 companies.
8. **The master list is a seed, not a full set.** `data/companies.json` has 87 records, and all subset files are exact copies of master records. But section pages show about 174 tickers, 113 of which are not in the master. The hub still calls the file the "full curated company set".
9. **Rating fields and dead report links remain in the public data files.** The `/data` JSON carries STRONG_BUY…SELL rating fields and `reports/*.html` links that return 404, even though the Hyperscalers page says ratings are "omitted on purpose".

---

## 1. `software/index.html` (+ `data/software_companies.json`)

**Structure.** The page has eight layers. The nav and all on-page anchors resolve. No internal links are broken. Two Wikipedia links point at pages that do not exist (see §1.9).

### 1.1 Layer 1: Foundation model developers

**Present on the page:**
- North America: OpenAI, Anthropic, xAI, Cohere, AI21 Labs, Stability AI (all with no ticker).
- Europe: Mistral AI, BigCode.
- China/APAC: DeepSeek, Alibaba (BABA), Baidu (BIDU), Tencent (0700.HK), Zhipu AI.

**Errors and updates:**

| Company | Issue | Evidence | Priority |
|---|---|---|---|
| **xAI** | Now **SpaceXAI**, a division of SpaceX (Nasdaq: **SPCX**, IPO on 2026-06-12 at $135). The JSON says "private, $24B valuation". | [BI 2026-07-06 rebrand](https://www.businessinsider.com/xai-rebrand-spacexai-new-logo-x-handle-spacex-2026-7); [Motley Fool 2026-09-25 "SpaceX bought xAI for $250B"](https://www.fool.com/investing/2026/09/25/spacex-bought-xai-for-250-billion-that-division-no/); [stockanalysis SPCX](https://stockanalysis.com/stocks/spcx/) | high |
| **Zhipu AI** | The page calls it "private". It **listed on HKEX on 2026-01-08** (stock code **2513**) and is now branded **Z.ai**. | [Wikipedia Z.ai](https://en.wikipedia.org/wiki/Z.ai); [etnet 2026-09-14 "Zhipu (02513)"](https://www.etnet.com.hk/www/eng/stocks/realtime/quote_news_detail.php?newsid=20260914987&section=sdi&code=2513) | high |
| **OpenAI** | The JSON thesis ("GPT-4, o1; $80B+ valuation; $3.4B run-rate; *exclusive* Microsoft infrastructure") is badly stale. Current picture: ARR is about $70B; OpenAI is seeking at least $30B at about a $1.4T valuation; Altman has ruled out a 2026 IPO ("ill-advised moment"); Amazon completed a $50B investment and OpenAI is multi-cloud. | [US News/Reuters 2026-09-29](https://money.usnews.com/investing/news/articles/2026-09-29/openais-annual-recurring-revenue-nears-70-billion-axios-reports); [CoinDesk 2026-09-30](https://www.coindesk.com/markets/2026/09/30/openai-targets-usd1-4-trillion-valuation-and-unveils-dots-ai-agent); [TNW 2026-09-13](https://thenextweb.com/news/altman-openai-no-ipo-2026-safety-ill-advised-moment); [PYMNTS 2026-07-31](https://www.pymnts.com/news/artificial-intelligence/2026/amazon-completes-50-billion-dollar-investment-openai/) | high |
| **Anthropic** | The "$20B+ valuation" is obsolete. Anthropic has confidentially filed for an IPO. Reuters reported prospectus details on 2026-09-29/30, and Bloomberg says it targets a listing before US Thanksgiving. **There is no ticker yet**, so do not show a placeholder symbol. | [Reuters via KC Star 2026-09-30](https://www.kansascity.com/news/business/article317445484.html); [Financial Post 2026-10-01](https://financialpost.com/investing/anthropic-target-mega-ipo-before-u-s-thanksgiving); [TIME/Prediction markets](https://time.com/partner-content/prediction-markets/prediction-markets-doubt-anthropic-s-ipo-timing/) | high |
| **Mistral AI** | "$2B valuation" should be **more than €21B (about $24B)** after a €3B Series D on 2026-09-08. | [TechCrunch 2026-09-08](https://techcrunch.com/2026/09/08/mistral-raises-e3b-as-sovereign-ai-becomes-big-business/) | medium |
| **Cohere** | "$5.5B, IPO pending" is out of date. Cohere signed a **merger with Aleph Alpha** on 2026-09-16 (combined value about $20B). | [Reuters 2026-09-16](https://www.reuters.com/legal/transactional/cohere-aleph-alpha-combine-target-enterprise-ai-market-2026-09-16/) | medium |
| **AI21 Labs** | It cut more than 60% of its staff after sale talks collapsed (May 2026), so frame it as a diminished player. | Calcalist/Globes/Ynet 2026-05-18 (via Google News) | low |
| Alibaba / Baidu / Tencent | Show dual symbols consistently: BABA + 9988.HK, BIDU + 9888.HK, 0700.HK + **TCEHY**. | [stockanalysis TCEHY](https://stockanalysis.com/quote/otc/TCEHY/) | low |

**Missing:**

| Add | Ticker / status | Why | Priority |
|---|---|---|---|
| Google DeepMind (Gemini) | GOOGL | A frontier lab missing from the model list. | **high** |
| Meta (Llama / Superintelligence Labs) | META | The leading open-weight lab. | **high** |
| Microsoft AI (MAI models) | MSFT | In-house frontier models. | medium |
| Amazon (Nova) | AMZN | Its own model family. | medium |
| MiniMax Group | **0100.HK** (HKEX IPO 2026-01-09) | A listed Chinese lab. [Wikipedia](https://en.wikipedia.org/wiki/MiniMax_Group) | medium |
| ByteDance (Doubao/Seed) | private | A top Chinese lab. | medium |
| Moonshot AI (Kimi) | private; confidential HK IPO filing | [US News/Reuters 2026-09-10](https://money.usnews.com/investing/news/articles/2026-09-10/chinese-ai-firm-moonshot-to-explore-dual-hong-kong-and-shanghai-ipos-scmp-reports) | medium |
| Safe Superintelligence; Thinking Machines Lab | private | Frontier labs. | medium |

### 1.2 Layer 2: Platforms & enterprise software

**Present:** Palantir (PLTR), Salesforce (CRM), ServiceNow (NOW), Snowflake (SNOW), Databricks, UiPath (PATH), GitLab (GTLB), Notion, Figma, Splunk (Cisco).

**Errors:**
- **Figma** has no ticker. It is public on the NYSE as **FIG** ([Motley Fool 2026-08-10](https://www.fool.com/investing/2026/08/10/how-figma-stock-jumped-374-last-month/)). **High.**
- **Splunk (Cisco)** should show the parent ticker CSCO. SPLK was delisted on 2024-03-18. **Low.**
- **Salesforce:** the blurb should mention **Informatica**, whose acquisition completed in November 2025 (INFA delisted 2025-11-18; [stockanalysis](https://stockanalysis.com/stocks/infa/)). **Low.**
- **Databricks** JSON: "$43B, $1B+ ARR" should be **$190B** (2026-08-13) with run-rate revenue above $7B ([Morningstar 2026-09-15](https://www.morningstar.com/stocks/ahead-an-ipo-math-behind-databricks-190-billion-valuation-doesnt-add-up)). **Medium.**

**Missing:**
- **Datadog (DDOG)** – **high**.
- **MongoDB (MDB)** – **high**. Its CEO left for Meta on 2026-09-28 ([Yahoo](https://finance.yahoo.com/markets/stocks/articles/mongodb-announces-ceo-transition-123000750.html)).
- **Elastic (ESTC)** – medium.
- **Confluent, now part of IBM** – medium. CFLT was delisted 2026-03-17 after the IBM acquisition ([stockanalysis](https://stockanalysis.com/stocks/cflt/)).
- **IBM watsonx (IBM)** – medium.
- **Microsoft Copilot/Foundry (MSFT)** – medium.
- **SAP (SAP.DE / SAP)** – medium.
- **Adobe (ADBE)** – low.
- **Workday (WDAY)** – low. Silver Lake take-private talks have been reported.

### 1.3 Layer 3: Infrastructure software & MLOps

**Present:** Hugging Face, Scale AI, Weights & Biases, Labelbox, Modal, Anyscale (Ray), Neptune.ai, Voxel51, Replicate.

**Errors (ownership changes):**
- **Weights & Biases** is now part of **CoreWeave** (CRWV). CoreWeave acquired it in 2025 for about $1.7B ([Wikipedia CoreWeave](https://en.wikipedia.org/wiki/CoreWeave); [HPCwire 2026-06-30](https://www.hpcwire.com/aiwire/2026/06/30/coreweave-launches-aria-research-agent-for-weights-biases/)). **High.**
- **Hugging Face** is pending acquisition by **NVIDIA** for about $12.9B, announced 2026-09-03 ([The Verge](https://www.theverge.com/tech/985474/nvidia-buying-hugging-face-deal); [Wikipedia](https://en.wikipedia.org/wiki/Hugging_Face)). The JSON still says "$2B valuation". **High.**
- **Scale AI:** Meta owns a 49% non-voting stake (more than $14B, June 2025). The "$7.3B valuation" is stale ([Wikipedia](https://en.wikipedia.org/wiki/Scale_AI)). **Medium.**
- **Neptune.ai:** OpenAI agreed to acquire it in December 2025 ([Wikipedia OpenAI](https://en.wikipedia.org/wiki/OpenAI)). **Medium.**
- **Replicate:** acquired by **Cloudflare (NET)** in November 2025 ([Wikipedia Cloudflare](https://en.wikipedia.org/wiki/Cloudflare)). **Medium.**
- **Anyscale:** definitive agreement to be acquired by **Nscale**, 2026-07-30 ([Light Reading](https://www.lightreading.com/ai-machine-learning/nscale-acquires-anyscale)). **Medium.**
- The link `https://en.wikipedia.org/wiki/Ray_(software)` points to a page that does not exist. Use ray.io instead. **Low.**

**Missing:**
- **Snorkel AI** (private; $3.5B, September 2026) – low.
- **Dynatrace/Arize (DT)** for AI observability – low.

### 1.4 Layer 4: Inference & serving

**Present:** Groq, Together AI, Fireworks AI, Baseten, DeepInfra, vLLM.

**Errors:**
- **Groq:** in December 2025 NVIDIA paid about $20B for a **non-exclusive license plus an acquihire**, which the DOJ is now reviewing. Groq then raised $350M at **$3.5B** (August 2026) and is pivoting to a neocloud. The JSON's "$2.8B / LPU production scale" is stale. The Hardware page calls the deal an "acquisition", so align the two pages. Sources: [Wikipedia Groq](https://en.wikipedia.org/wiki/Groq); [TechCrunch 2026-08-17](https://techcrunch.com/2026/08/17/groq-raises-350m-to-fuel-its-pivot-from-ai-chips-to-neocloud/); [Yahoo 2026-09-11](https://finance.yahoo.com/markets/stocks/articles/nvidia-under-doj-scrutiny-20-172514334.html). **Medium.**
- **vLLM:** mention its commercial steward, **Inferact** ($150M seed, January 2026). **Low.**

**Missing:**
- **Nebius Token Factory (NBIS)** – medium. Cross-link to Hyperscalers.
- **Cloudflare Workers AI (NET)** – see §1.6.
- **OpenRouter** (acquired by Stripe for a reported $7.5B) – low.

### 1.5 Layer 5: EDA / chip design

**Present:** Synopsys (SNPS), Cadence (CDNS), Siemens EDA (SIEGY), Ansys (ANSS), OpenROAD.

**Errors:**
- **Ansys (ANSS)** is shown as a standalone listed company. **Synopsys closed the acquisition on 2025-07-17** and ANSS was delisted ([Wikipedia Ansys](https://en.wikipedia.org/wiki/Ansys); [stockanalysis ANSS "delisted (reason: acquired by SNPS)"](https://stockanalysis.com/stocks/anss/)). Merge it into the Synopsys entry. **High.**
- The Synopsys JSON still lists the risk "Regulatory scrutiny on Ansys deal", which is obsolete. **Medium.**
- The **Cadence** JSON `rating_source` is copied word for word from Synopsys ("22 Buy, 4 Hold of 26; Avg PT $380"). **Medium.**
- **Siemens EDA:** add the local ticker **SIE.DE**. Altair is now part of Siemens (ALTR delisted 2025-03-26). **Low.**

**Missing:**
- **Keysight EDA (KEYS)** – medium. It bought VPIphotonics in June 2026.
- **Silvaco (SVCO)** – low.
- **Empyrean (301269.SZ)**, a Chinese EDA vendor – low.

### 1.6 Layer 6: AI security & governance

**Present:** CrowdStrike (CRWD), Abnormal Security, Robust Intelligence, Arthur AI, Fiddler Labs, Galileo, Rebuff AI.

**Errors:**
- **Robust Intelligence** is now part of Cisco (2024; [Network World](https://www.networkworld.com/article/3496837/cisco-snaps-up-ai-security-player-robust-intelligence.html)). **Medium.**
- **Galileo** is now part of Cisco/Splunk (announced April 2026, integrated by September 2026; [SDxCentral](https://www.sdxcentral.com/news/cisco-makes-splunk-ai-token-bean-counter-with-galileo-gains/)). **Medium.**
- **"Rebuff AI"** is Protect AI's open-source prompt-injection project, not a company. Protect AI was acquired by **Palo Alto Networks** in July 2025 ([Wikipedia PANW](https://en.wikipedia.org/wiki/Palo_Alto_Networks)). **Medium.**
- **Abnormal Security** now brands itself **Abnormal AI**. **Low.**

**Missing (all named in the brief):**
- **Palo Alto Networks (PANW)** – **high**. It completed CyberArk in February 2026; [CYBR delisted 2026-02-11](https://stockanalysis.com/stocks/cybr/).
- **Zscaler (ZS)** – **high**.
- **Cloudflare (NET)** – **high**.
- Also add: Fortinet (FTNT, medium), SentinelOne (S, medium), Wiz (part of Google since 2026-03-11, [TechCrunch](https://techcrunch.com/2026/03/11/google-completes-32b-acquisition-of-wiz/), medium), Okta (OKTA, low), Check Point (CHKP, low).

### 1.7 Layer 7: Vertical / application AI

**Present:**
- Healthcare: Tempus, PathAI, Exscientia (EXAI), Atomwise.
- Legal/finance: Harvey, Thomson Reuters (TRI), RELX (RELX), Bloomberg.
- Code: GitHub Copilot (MSFT), Cursor, Replit, Tabnine.
- Marketing: HubSpot (HUBS), Klaviyo (KVYO), Jasper.

**Errors:**
- **Exscientia (EXAI):** the merger with **Recursion (RXRX)** completed on 2024-11-20 and EXAI no longer trades ([Yahoo 2024-11-20](https://finance.yahoo.com/news/recursion-exscientia-two-leaders-ai-120000019.html)). **High.**
- **Tempus** has no ticker. It is public on Nasdaq as **TEM** ([Seeking Alpha](https://seekingalpha.com/symbol/TEM)). **High.**
- **Cursor** is now owned by **SpaceX (SPCX)**. The $60B deal became effective on 2026-08-14 ([iClarified](https://www.iclarified.com/101786/spacex-completes-acquisition-of-ai-code-editor-cursor); [Forbes 2026-08-31](https://www.forbes.com/sites/jonmarkman/2026/08/31/openai-cuts-off-cursor-after-spacexs-60-billion-takeover/)). The JSON says "~$100M+ valuation". **High.**
- **Harvey:** "$765M" is stale. It raised at **$15.5B** on 2026-09-09 ([Law360](https://www.law360.com/pulse/articles/2523519/legal-ai-co-harvey-raises-550m-hitting-15-5b-valuation)). **Medium.**
- **PathAI** is pending acquisition by **Roche** ([STAT 2026-05-08](https://www.statnews.com/2026/05/08/roche-acquire-startup-pathai-750-million-upfront/)). **Medium.**
- **Tabnine** was acquired by **Tricentis** in August 2026 ([GovConWire](https://www.govconwire.com/articles/tricentis-acquires-tabnine-agentic-quality-engineering)). **Low.**

**Missing:**
- **Insilico Medicine (3696.HK)** – medium.
- **Cognition/Windsurf** (private, about $47–48B) – medium.
- **ElevenLabs** (private, $22B) – low.
- **Perplexity** (private) – low.

### 1.8 Layer 8: Chipmaker AI software stacks

**Present:** NVIDIA (NVDA), AMD (AMD), Intel (INTC), Qualcomm (QCOM), Arm, Cerebras, SambaNova.

**Errors:**
- **Arm** has no ticker. It should be **ARM** (Nasdaq) and named "Arm Holdings" to match the Hardware page. **High.**
- **Cerebras** has no ticker. It should be **CBRS**: Nasdaq IPO in May 2026 at $185, raising about $5.55B ([Wikipedia](https://en.wikipedia.org/wiki/Cerebras_Systems); [Motley Fool 2026-09-16](https://www.fool.com/investing/2026/09/16/cerebras-stock-has-been-cut-in-half-it-still-costs-about-145-times-next-year-s-estimated-earnings/)). **High.**

**Missing:**
- **Google TPU stack (JAX/XLA)** – medium.
- **AWS Neuron** – medium.
- **Huawei Ascend/CANN** (private) – medium.
- **Cambricon (688256.SS)** – low.

### 1.9 Other fixes on the Software page
- **`data/software_companies.json` coverage:** the JSON has 23 names and the page has 72. Forty-nine page names have no JSON record, including public ones (GTLB, HUBS, KVYO, TRI, RELX, FIG, TEM, ARM, CBRS). Yet the chip says "Source: … data/software_companies.json". **Medium.**
- **Stale JSON metrics** dated 2026-04-27: market caps and funding amounts. The page header says "September 2026". **Low.**
- **Private path:** the page cites `/workspace/hub-extraction-ai-sections.md`, which is not public. **Low.**
- **JSON-to-page mapping check:** every JSON name appears on the page, the tickers match, and each JSON `sub_sector` maps to the right page layer. No mismatch.

---

## 2. `hyperscalers/index.html` (+ `data/hyperscaler_companies.json`, `data/hyperscaler_buildouts.json`)

**Present on the page:**
- **Layer 1 Integrated clouds:** Microsoft (MSFT), Amazon/AWS (AMZN), Google/Alphabet (GOOGL), Meta (META), Oracle (ORCL).
- **Layer 2 GPU clouds:** CoreWeave (CRWV), Lambda (private). A callout mentions xAI.
- **Layer 3 Colo/REITs:** Equinix (EQIX), Digital Realty (DLR).
- **Layer 4 Buildout tracker:** MSFT, AMZN, GOOGL, META, Oracle/Stargate, CRWV, xAI (Colossus).
- **Layer 5:** PPAs and ratepayer policy. No company list.

**Data consistency:** `hyperscaler_companies.json` has the same 9 names as the page. `hyperscaler_buildouts.json` adds "Oracle / Stargate" and "xAI (Colossus)".

### 2.1 Capex and figure errors

All verified against company guidance and stockanalysis cash-flow statements.

| Company | Site says | Current (verified) | Source |
|---|---|---|---|
| **Microsoft** | Page and `capex_2026` "$110–120B"; catalysts "$120B+"; thesis "$80B+"; notes "$190B CY2026" | Calendar-2026 guide **about $175B** on the reported basis, cut from about $190B in July because of a lease-accounting change; underlying spend unchanged. FY26 (June year-end) actual: **$115.9B**. `capex_2025=78` does not match FY25 cash capex ($64.6B), and the file does not say which basis it uses. | [Yahoo 2026-09-29](https://finance.yahoo.com/markets/stocks/articles/did-microsoft-really-cut-capex-103636032.html); [stockanalysis MSFT CF](https://stockanalysis.com/stocks/msft/financials/cash-flow-statement/) |
| **Amazon** | $200B everywhere | **About $220B** (raised in July 2026, attributed to memory costs). Historical: 2024 = **83.0** (file says 75); 2025 = **131.8** (file says 100). | [Yahoo 2026-10-01](https://finance.yahoo.com/markets/stocks/articles/amazon-raised-2026-capex-guide-114017457.html); [stockanalysis AMZN CF](https://stockanalysis.com/stocks/amzn/financials/cash-flow-statement/) |
| **Alphabet** | Page/buildouts "$180–190B"; thesis "$175–185B" | **$195–205B** (raised in July 2026). File `capex_2024=33` is the **2023** figure (32.3); 2024 was **52.5**. 2025 was **91.4** (file says 75). | [Motley Fool 2026-07-30](https://www.fool.com/investing/2026/07/30/alphabet-will-spend-as-much-as-205-billion-this-ye/); [stockanalysis GOOGL CF](https://stockanalysis.com/stocks/googl/financials/cash-flow-statement/) |
| **Meta** | Page "$125–145B"; detail/thesis "$115–135B" | **$130–145B** (narrowed on 2026-07-29). | [24/7 Wall St 2026-09-18](https://247wallst.com/investing/2026/09/18/meta-is-about-to-become-mega-cloud-operator/) |
| **Oracle** | "~$50B 2026 capex"; RPO "$553B"; OCI "+84%" | FY26 (May year-end) actual **$55.7B**; **FY27 guide $90–95B** (unchanged 2026-09-10); RPO **$664B**; OCI **+121%** in Q1 FY27. | [Business Insider 2026-09-10](https://www.businessinsider.com/oracle-q1-2027-earnings-maintains-capex-forecast-reports-cloud-growth-2026-9); [Yahoo 2026-09-27](https://finance.yahoo.com/technology/ai/articles/oracle-orcl-reports-664-billion-002207397.html) |
| **CoreWeave** | Backlog "$66.8B"; FY26 revenue "$12–13B"; capex 2024/2025 = 5/16 | Backlog **$104.2B** (2026-06-30); FY26 revenue guide **$12.4–13.2B**; reported cash capex 2024/2025 = **8.7/10.3**. One report cites a 2026 capex plan of $30–39B versus the file's $30–35B; check it against the Q2 letter. | [Crypto Briefing 2026-09-21](https://cryptobriefing.com/coreweave-forecasts-12b-sales-2026/); [Globe and Mail](https://www.theglobeandmail.com/investing/markets/stocks/CRWV/pressreleases/4616094/will-coreweaves-margins-continue-expanding-through-2026/); [stockanalysis CRWV CF](https://stockanalysis.com/stocks/crwv/financials/cash-flow-statement/) |
| **xAI (Colossus)** | ticker **"XAI"**; "$15B class" | **The XAI ticker does not exist.** It is now SpaceXAI, part of SpaceX (**SPCX**). The SpaceX S-1 shows xAI's 2025 operating loss of $6.4B on $3.2B revenue. Colossus capacity is rented to Google ($920M a month) and Anthropic. | [TechCrunch 2026-05-20](https://techcrunch.com/2026/05/20/xai-burned-6-4b-last-year-spacexs-ipo-filing-shows-why-the-spending-is-far-from-over/); [CNBC 2026-06-05](https://www.cnbc.com/2026/06/05/google-to-pay-spacex-920-million-a-month-for-xai-compute-capacity.html) |

Other fixes in this section:
- **Corrupted strings in the public JSON (high).** GOOGL catalysts read "Cloud revenue **0B** single quarter — 63% growth" and "Market cap passed **.5T**". META risks read "Capex expected to hit **02B** by 2027". A shell expanded `$N` and ate the digits. This affects `data/companies.json` and `data/hyperscaler_companies.json`.
- **Units on the power chart are mixed (medium).**
  - MSFT's "current 2 GW" is FY25 *additions*. Its installed base is about 12 GW, with a plan to exceed 38 GW by 2032 ([GCN 2026-09-30](https://gcn.com/microsoft-plans-triple-azure-data-center/22054/)).
  - MSFT's "34 GW" is contracted clean energy, not IT load.
  - META's "current" value is a GPU count.
  - GOOGL's 25 GW target comes from the clean-energy chart.
  - Normalize everything to IT megawatts.
- **GOOGL thesis:** "GCP +48%" should be **+82%** (Q2 2026), with backlog of $514B ([Crypto Briefing](https://cryptobriefing.com/alphabet-cloud-backlog-514b-revenue-growth/)). **Low.**
- **Missing buildout risk:** Oracle/Stargate **Project Jupiter** (New Mexico, about 2.45 GW) received a **force-majeure notice** in September 2026 ([ENR 2026-09-28](https://www.enr.com/articles/63720-oracle-invokes-force-majeure-as-new-mexico-project-jupiter-power-work-faces-hurdles)). **Medium.**
- **CoreWeave and Core Scientific:** the deal is dead. CORZ holders rejected it in October 2025 ([Wikipedia CoreWeave](https://en.wikipedia.org/wiki/CoreWeave)), and Core Scientific has since signed a deal for more than 500 MW with AMD. Mention this in the CoreWeave text and add CORZ.
- **Nebius** (still NBIS on Nasdaq) is not on the page at all. Only the Analysis Bloom page mentions it. See §2.3.

### 2.2 Layer 5: policy fact check
- **Ratepayer Protection Pledge (March 2026): correct** ([whitehouse.gov 2026-03-04](https://www.whitehouse.gov/releases/2026/03/ratepayer-protection-pledge/)). Add three updates:
  - The pledge was expanded in July 2026 to 23 governors and 187 utilities and developers ([Yahoo](https://www.yahoo.com/news/politics/articles/president-trump-expands-ai-data-114241529.html)).
  - The House passed the **Ratepayer Protection Act** (H.R. 9340) by 417–3 on 2026-09-16 ([JD Supra](https://www.jdsupra.com/legalnews/house-passes-ratepayer-protection-act-6314660/)).
  - Lambda signed the pledge on 2026-09-14.
- **PJM $325/MW-day:** correct (the 2028/29 Base Residual Auction; [AOL/24/7](https://www.aol.com/articles/ai-boom-power-problem-3-150644000.html)). Optionally add that FERC's chair criticized PJM's delayed backstop auction on 2026-09-30.
- **"NextEra–Dominion … ~$66.8B package":** this misdescribes the deal. About $66.8–67B is the value of a **pending all-stock merger**, not a data-center package. It faces Virginia opposition (the governor is intervening) and closing is guided for 2H 2027 ([Ad-hoc 2026-09-06](https://www.ad-hoc-news.de/boerse/news/corporate-news/dominion-energy-stock-gains-focus-as-1-8-billion-equity-offer-and-nextera/70061170); [CBS 2026-09-30](https://www.cbsnews.com/news/nextera-dominion-merger-utility-prices/)). **Medium.**
- **Broken link:** `https://en.wikipedia.org/wiki/Stargate_(AI_project)` does not exist. Use `Stargate_LLC`. **Low.**

### 2.3 Missing companies

Integrated clouds:

| Company | Ticker(s) | Status | Priority |
|---|---|---|---|
| Alibaba Cloud | 9988.HK / BABA | listed | **high** |
| Tencent Cloud | 0700.HK / TCEHY | listed | medium |
| Baidu AI Cloud | 9888.HK / BIDU | listed | medium |
| ByteDance / Volcano Engine | — | private | medium |
| Huawei Cloud | — | private | low |

GPU clouds and neoclouds:

| Company | Ticker(s) | Status | Priority |
|---|---|---|---|
| Nebius | NBIS | listed; $27B Meta deal 2026-09-30; 5 GW contracted-power target ([Crypto Briefing](https://cryptobriefing.com/nebius-meta-27b-ai-capacity-deal/)) | **high** |
| IREN | IREN | listed; $9.7B Microsoft contract | **high** |
| Crusoe | — | private; $30.9B ([DCD](https://www.datacenterdynamics.com/en/news/crusoe-raises-39bn-for-ai-data-center-build-out/)) | **high** |
| Fluidstack | — | private; $18B ([Forbes](https://www.forbes.com/sites/iainmartin/2026/09/03/a-tiny-startup-helping-google-take-on-nvidia-is-now-worth-18-billion/)) | medium |
| Nscale | — | private; NYSE IPO filed | medium |
| Vultr | — | private | low |
| SpaceXAI | SPCX | listed; now a compute seller | high (fix of existing entry) |

AI-campus landlords (former bitcoin miners):

| Company | Ticker(s) | Status | Priority |
|---|---|---|---|
| Applied Digital | APLD | listed | medium |
| Cipher Digital (renamed from Cipher Mining) | CIFR | listed | medium |
| TeraWulf | WULF | listed | medium |
| Core Scientific | CORZ | listed | medium |
| Galaxy Digital (Helios) | GLXY | listed | low |
| Hut 8 | HUT | listed | low |

Colocation and REITs:

| Company | Ticker(s) | Status | Priority |
|---|---|---|---|
| Iron Mountain | IRM | listed | **high** |
| American Tower / CoreSite | AMT | listed | **high** |
| NTT DC REIT | NTDU (SGX); parent NTT 9432.T / NPPXF | listed | medium |
| Keppel DC REIT | AJBU (SGX) | listed | medium |
| GDS (+ DayOne, private, US-SGX listing planned) | 9698.HK / GDS | listed | medium |
| VNET | VNET | listed | medium |
| Chindata (now under an HEC-led consortium) | — | private | low |
| NEXTDC | NXT (ASX) | listed | low |
| DigitalBridge | was DBRG, delisted 2026-09-30; SoftBank 9984.T / SFTBY | acquired by SoftBank | low |

Developers (all private):

| Company | Owner | Priority |
|---|---|---|
| Aligned | AIP/MGX/GIP consortium, $40B, closed July 2026 ([Dallas News](https://www.dallasnews.com/business/real-estate/article/blackrock-aligned-data-centers-deal-22353883.php)) | medium |
| QTS | Blackstone | medium |
| Vantage | — | medium |
| Stack | — | low |
| EdgeCore | — | low |
| CyrusOne | KKR/GIP | low |

Buildout tracker rows to add:
- Nebius contracted power – medium.
- China hyperscaler capex (Q2 2026 AI capex +105% YoY) – medium.
- OpenAI/Stargate as its own row – medium.
- Blue Owl (OWL) as financier – low.

### 2.4 Other fixes
- **Lambda:** the thesis is generic. Add the $1B GPU debt raise for Microsoft, pre-IPO talks for up to $3B at $12B or more, and a reported roughly $35B Anthropic deal ([TechCrunch 2026-08-28](https://techcrunch.com/2026/08/28/neocloud-lambda-secures-1b-in-debt-to-buy-more-chips/); [TNW 2026-08-25](https://thenextweb.com/news/lambda-3bn-pre-ipo-round); [TechRepublic 2026-09-01](https://www.techrepublic.com/article/news-anthropic-lambda-35-billion-cloud-deal/)).
- **Microsoft blurb:** the "deep partnership with OpenAI for capacity" framing is dated now that OpenAI is multi-cloud.
- **Private path reference:** the page cites `/workspace/...`. **Low.**
- **Ratings exposure:** the page says ratings are "omitted on purpose", but the public JSON exposes them (see §5).

---

## 3. Digests (`digests/index.html`, 2026-09-28 / 09-29 / 09-30 / 10-01)

**Structure checks:**
- The nav and "← All digests" links work, and the index lists all four digests. The live site returns 200 for all of them; 2026-10-02 is not out yet.
- The dates fall on Monday through Thursday, which matches "weekday".
- I spot-checked the summary figures against sources and they match: Micron Q4 revenue $54.23B and FY $133.19B ([BI/Micron PR](https://markets.businessinsider.com/news/stocks/micron-technology-inc-reports-record-fiscal-fourth-quarter-and-full-year-2026-results-1036587338)); LS Electric ₩181B ([Globe/TipRanks](https://www.theglobeandmail.com/investing/markets/markets-news/Tipranks/4919707/ls-electric-wins-krw-181-billion-transformer-deal-for-north-american-hyperscale-data-center/)); AT&T–Corning more than $3B; Schneider software-defined MV switchgear with Equinix; Eaton–Infineon; Vertiv–King Environmental Services; TSMC Texas campus (reported).

**Companies named in the digests that have no home on any section page:**

| Company | Digest | Ticker | Suggested home | Priority |
|---|---|---|---|---|
| **LS Electric** | 10-01 | 010120.KS | Electrification > transformers | medium |
| **Sumitomo Electric** (InP substrates) | 09-28 | 5802.T / SMTOY | Hardware > Photonics substrates | medium |
| **Tesla Energy** (BESS) | 09-29 | TSLA | Electrification > storage. It is in the master list and the electrification subset but appears on no page. | medium |
| LG Energy Solution | 09-29 | 373220.KS | Electrification > storage | low |
| LG Electronics (CDU) | 09-29 | 066570.KS | Hardware > cooling | low |
| LiquidStack (Trane Technologies since 2026-03-02) | 09-29 | TT | Hardware > cooling | low |
| KT Cloud (KT Corp) | 09-28 | 030200.KS / KT | Hyperscalers > regional clouds | low |
| SGC Energy (Gunsan AI data center) | 09-28 | 005090.KS | Hyperscalers buildout (non-US) | low |
| Hyundai Engineering | 09-28 | unlisted subsidiary | EPC list (optional) | low |
| King Environmental Services | 09-29 | pending Vertiv deal (VRT) | Note under Vertiv | low |

Frequently mentioned names that **do** have homes include COHR, LITE, AXTI, MU, SK Hynix, Samsung, VRT, GEV, ETN, POWL, Siemens Energy, Hitachi Energy, ASML, TSMC, Amkor, ASE, CEG, the utilities named in the digests, Lambda, Equinix, GLW, MRVL and Oklo. Hubbell and Powell appear on Electrification only.

**Other digest fixes:**
- The **"Related sections"** box has no Hardware, Fabrication or Hyperscalers links, even though the digests cover HBM, CoWoS, cooling and neoclouds. **Medium.**
- Every digest cites the private `/workspace/ai-infra-baseline/BASELINE.md` ("baseline §3.4/§4"), which public readers cannot open. **Medium.**
- Source URLs are plain text, not hyperlinks. **Low.**
- "Crane" links to the Uranium page; a reactor restart belongs on Electrification or the SMR tracker. **Low.**
- The 09-29 Counterpoint HBM shares add to 101% (50 + 33 + 18). Note the rounding. **Low.**

---

## 4. Hub: `index.html`, `README.md`, `OWNERS.md`, `assets/site.js`, redirect stubs

**`index.html`**
- All 8 nav links and all card links resolve, locally and live.
- The Digests card says "Sep 28–30 live", but **10-01 is live too**. **Low.**
- "`data/companies.json` — full curated company set" is wrong. It is an 87-record seed, while section pages show about 174 tickers, 113 of them absent from the master. **Medium.**
- `uranium_china_demand.json` is missing from the data list. **Low.**

**`README.md`**
- It omits `analysis/` and `analysis/companies/`, which are in the nav and in OWNERS.md. **Low.**

**`OWNERS.md` and README links**
- GitHub Pages serves the `.md` files raw (`text/markdown`); Jekyll renders `/OWNERS.html` instead. Link to the `.html` versions or to the GitHub blob view. **Low.**

**`assets/site.js`**
- The active-nav logic works. Note that `SECTION_RE` is a hard-coded list and `path.includes("/"+section)` is substring-based; both work today.
- The global mark legend (Red frame / Rainbow ticker / Buy-Accumulate-Hold) is injected on **every** page, including Software, Hyperscalers and Digests, which use none of these marks. Make it opt-in. **Low.**

**Redirect stubs (`smr/`, `uranium/`, `photonics/`)**
- **All three redirect correctly**:
  - `meta refresh` with a 0-second delay to `../electrification/smr/index.html`, `../electrification/uranium/index.html` and `../hardware/photonics/index.html`.
  - Absolute canonical link and `noindex`.
  - A manual fallback link.
  - Live 200, and the slashless URLs 301 to the slash form.
- Gaps: there is no JavaScript `location.replace` fallback, no `404.html`, and legacy deep links such as `/smr/oklo.html`, `/uranium/cameco.html` and `/photonics/cpo/` return **404 live**. **Low.**

**Internal links:** I scanned every `href` and `src` in every HTML file plus the README and OWNERS links. **No broken internal links and no missing anchors.**

---

## 5. `data/companies.json` (master) and consistency with the subset files

**Structure:**
- 87 records, split by sector: software 23, electricity 20, semiconductor_fab 18, dc_hardware 17, hyperscaler 9.
- Every record in the 7 subset files is an **exact field-for-field copy** of a master record. There is no drift.
- Every master record appears in at least one subset.
- Amphenol, Vertiv and Asetek appear in both `electrification_` and `hardware_`. That is fine, but the rule should be documented.
- `INTC` appears twice in the master (Intel and "Intel Foundry Services"). The unit has been renamed "Intel Foundry" ([PCMag](https://www.pcmag.com/encyclopedia/term/intel-foundry)).

**Errors in the master:**
- **Schneider Electric's ticker `SNEXF` is invalid** (stockanalysis returns 404). Use **SU.PA** locally and **SBGSY**/SBGSF in the US ([SBGSY](https://stockanalysis.com/quote/otc/SBGSY/)). The site's pages already use SU.PA / SBGSY. **High.**
- The corrupted `$` strings in the GOOGL and META records (see §2.1). **High.**
- **SK Hynix:** add the US ADR **SKHY** (Nasdaq debut 2026-07-10, [Korea Herald](https://www.koreaherald.com/article/10804704)). **Medium.**
- **Asetek** is marked `public:false` with no ticker. It listed on Nasdaq Copenhagen (ASTK) in 2023, and an April 2026 report says a takeover offer was accepted. Verify the current status. **Low.**
- **AES:** note the pending take-private of more than $33B, now under FERC review. **Low.**
- **Records on no section page:** AES, Fluence (FLNC), Tesla Energy (TSLA), TerraPower and Kairos Power appear on no section page. The electrification/SMR owners should place them. **Medium.**
- **Ratings exposure:** 69 records point `report` at `reports/*.html`, which **returns 404 live**. 68 records carry BUY/HOLD/SELL/STRONG_BUY ratings with "Claude fundamental analysis" attribution in the **public** `/data` folder. Strip these fields or null them. **Medium.**
- **Freshness:** 68 of 87 records are dated 2026-04-27, yet `meta.json` says `last_updated 2026-09-30` and carries the leftover title "AI Datacenter Electricity Supply – Investment Landscape". **Medium.**
- **`kpi_metrics.json`:** "2026 Hyperscaler CapEx $660–690B" (April) is stale. Current guidance puts the Big-4 total at about $720–760B, plus Oracle's FY27 $90–95B. **Medium.**
- **`chart_data.json`:** `capex_trajectory` has no labels or data. **Low.**
- **`hyperscaler_buildouts.json` schema drift:** `power_target_gw`, `capex_2026`, `notes` and `report` are missing on some rows. **Low.**

---

## 6. Things I could not fully verify

Flagged for a follow-up pass:
- **CoreWeave's 2026 capex range.** One September 2026 report cites $30–39B; the file says $30–35B. Check against the Q2 2026 shareholder letter.
- **Asetek's listing status** after the reported 2026 takeover.
- **Exact HKEX codes.** Z.ai 2513 and MiniMax 0100 are confirmed by etnet quote pages; stockanalysis does not cover HKEX.
- **Wiz** sits under Alphabet. Treat it as part of GOOGL, not as a standalone listing.
