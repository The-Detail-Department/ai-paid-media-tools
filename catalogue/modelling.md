# Modelling

Specialist modelling frameworks judged on preparation, configuration, execution, validation and scenario planning.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Prepare data | Configure | Run | Validate | Scenarios | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Meridian](#meridian) | **B+** | Specialist | Research | Specialist | Partial | Yes | Yes | Yes | Yes | Specialist |
| [PyMC-Marketing](#pymc-marketing) | **B** | Specialist | Research | Specialist | Partial | Yes | Yes | Yes | Yes | Specialist |
| [Robyn](#robyn) | **B** | Specialist | Research | Specialist | Partial | Yes | Yes | Yes | Yes | Specialist |

## Meridian

**B+ · Research · Specialist**

Google's open-source marketing mix modelling framework for estimating incremental impact and informing budget allocation.

> **Blocker:** It is not an agent or optimiser. Data preparation, priors, model criticism and action rules remain expert work.

- **Route:** Official open-source Python package.
- **Scope:** Marketing mix models and budget scenarios.
- **Setup:** Specialist. Requires model-ready historical data, Python, statistical judgement, compute and validation design.
- **Human job:** Prepare model-ready data, configure assumptions, run the model, validate it and turn scenarios into planning evidence.
- **Capabilities:** Prepare data **Partial** · Configure **Yes** · Run **Yes** · Validate **Yes** · Scenarios **Yes**
- **Coverage:** Specialist. Covers the MMM lifecycle and scenario planning, not live campaign control.
- **Evidence basis:** Documentation reviewed

**Good**

- Google-backed open-source marketing-mix modelling package.
- Useful for incrementality and budget-allocation questions beyond platform attribution.
- Python package can be made reproducible in a governed modelling workflow.

**Limits**

- No official MCP, plugin or dedicated CLI was verified.
- Requires statistical skill and suitable historical data.
- It is not a daily campaign-operation interface.

**Official links**

- **Product / official page:** [Official Meridian repository](https://github.com/google/meridian)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** Python package, not a dedicated CLI
- **API / SDK:** [Open-source Python package](https://github.com/google/meridian)
- **Documentation:** [Official Meridian repository](https://github.com/google/meridian)
- **GitHub:** [Official Meridian repository](https://github.com/google/meridian)

- **Access:** Open source; requires model-ready historical data and Python expertise.
- **Watch:** A model library is not an autonomous media optimiser. Inputs, priors, validation and decision rules remain practitioner work.
- **Sources:** [Official Meridian repository](https://github.com/google/meridian)
- **Last checked:** 5 Sept 2026

[Back to comparison](#modelling)

## PyMC-Marketing

**B · Research · Specialist**

An open-source Bayesian marketing analytics package covering marketing mix modelling and customer-lifetime-value work.

> **Blocker:** Its flexibility increases the amount of expert modelling work required before any media decision is safe.

- **Route:** Official open-source Python package.
- **Scope:** Bayesian marketing models.
- **Setup:** Specialist. Requires Python, Bayesian modelling expertise, prepared data, compute and model validation.
- **Human job:** Prepare model-ready data, configure assumptions, run the model, validate it and turn scenarios into planning evidence.
- **Capabilities:** Prepare data **Partial** · Configure **Yes** · Run **Yes** · Validate **Yes** · Scenarios **Yes**
- **Coverage:** Specialist. Flexible modelling toolkit, not a campaign-operation or turn-key daily marketer interface.
- **Evidence basis:** Documentation reviewed

**Good**

- Flexible Bayesian tooling for media-mix and customer-value modelling.
- Open source and inspectable for teams that need methodological control.
- Python ecosystem supports custom analysis and reproducibility.

**Limits**

- Requires strong Python and statistical expertise.
- No official MCP, plugin or dedicated workflow CLI was verified.
- It is a modelling library rather than a daily media-operations product.

**Official links**

- **Product / official page:** [PyMC-Marketing documentation](https://www.pymc-marketing.io/en/stable/)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** Python package, not a dedicated CLI
- **API / SDK:** [Open-source Python package](https://github.com/pymc-labs/pymc-marketing)
- **Documentation:** [PyMC-Marketing documentation](https://www.pymc-marketing.io/en/stable/)
- **GitHub:** [PyMC-Marketing repository](https://github.com/pymc-labs/pymc-marketing)

- **Access:** Open source; requires Python and Bayesian modelling expertise.
- **Watch:** The package supports analysis. It does not provide a governed connection to advertising accounts.
- **Sources:** [PyMC-Marketing repository](https://github.com/pymc-labs/pymc-marketing) · [PyMC-Marketing documentation](https://www.pymc-marketing.io/en/stable/)
- **Last checked:** 5 Sept 2026

[Back to comparison](#modelling)

## Robyn

**B · Research · Specialist**

Meta's open-source marketing mix modelling package for estimating channel contribution and budget scenarios.

> **Blocker:** Model output is not an approved campaign change. A practitioner must interpret and operationalise it.

- **Route:** Official open-source R and Python package.
- **Scope:** Marketing mix models and budget allocation scenarios.
- **Setup:** Specialist. Requires prepared historical data, R or Python, statistical modelling and validation expertise.
- **Human job:** Prepare model-ready data, configure assumptions, run the model, validate it and turn scenarios into planning evidence.
- **Capabilities:** Prepare data **Partial** · Configure **Yes** · Run **Yes** · Validate **Yes** · Scenarios **Yes**
- **Coverage:** Specialist. Produces MMM results and allocation hypotheses, without a governed connection to live accounts.
- **Evidence basis:** Documentation reviewed

**Good**

- Established open-source marketing-mix modelling project from Meta.
- Supports automated model exploration and budget-allocation analysis.
- R and Python routes broaden analyst access.

**Limits**

- No official MCP or marketer-facing CLI was verified.
- Model selection and calibration still require specialist judgement.
- Outputs do not translate directly into safe platform changes.

**Official links**

- **Product / official page:** [Official Robyn repository](https://github.com/facebookexperimental/Robyn)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** R and Python package, not a dedicated CLI
- **API / SDK:** [Open-source R and Python package](https://github.com/facebookexperimental/Robyn)
- **Documentation:** [Official Robyn repository](https://github.com/facebookexperimental/Robyn)
- **GitHub:** [Official Robyn repository](https://github.com/facebookexperimental/Robyn)

- **Access:** Open source; requires prepared data and statistical modelling expertise.
- **Watch:** Robyn produces model outputs, not campaign changes. Treat automated budget recommendations as hypotheses requiring review.
- **Sources:** [Official Robyn repository](https://github.com/facebookexperimental/Robyn)
- **Last checked:** 5 Sept 2026

[Back to comparison](#modelling)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
