# Modelling and experimentation

Specialist modelling frameworks for incrementality, marketing mix analysis and budget scenarios.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics and measurement](analytics-measurement.md) · [Creative and images](creative-images.md) · [Data and research](data-research.md) · [Automation and workflow](automation-workflow.md) · [Modelling and experimentation](modelling-experimentation.md)

| Tool | Grade | Readiness | Setup | Read | Create | Modify | Delete | Coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Meridian](#meridian) | **B+** | Research | Specialist | N/A | Yes | Yes | N/A | Specialist |
| [PyMC-Marketing](#pymc-marketing) | **B** | Research | Specialist | N/A | Yes | Yes | N/A | Specialist |
| [Robyn](#robyn) | **B** | Research | Specialist | N/A | Yes | Yes | N/A | Specialist |

## Meridian

**B+ · Research**

Google's open-source marketing mix modelling framework for estimating incremental impact and informing budget allocation.

> **Blocker:** It is not an agent or optimiser. Data preparation, priors, model criticism and action rules remain expert work.

- **Route:** Official open-source Python package.
- **Scope:** Marketing mix models and budget scenarios.
- **Setup:** Specialist. Requires model-ready historical data, Python, statistical judgement, compute and validation design.
- **Controls:** Read **N/A** · Create **Yes** · Modify **Yes** · Delete **N/A**
- **Coverage:** Specialist. Covers the MMM lifecycle and scenario planning, not live campaign control.

**Good**

- Google-backed open-source marketing-mix modelling package.
- Useful for incrementality and budget-allocation questions beyond platform attribution.
- Python package can be made reproducible in a governed modelling workflow.

**Limits**

- No official MCP, plugin or dedicated CLI was verified.
- Requires statistical skill and suitable historical data.
- It is not a daily campaign-operation interface.

**Interfaces**

- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** Python package, not a dedicated CLI
- **API / SDK:** [Open-source Python package](https://github.com/google/meridian)

- **Access:** Open source; requires model-ready historical data and Python expertise.
- **Commercial:** Partner. [Meridian certified partner programme](https://blog.google/products/ads-commerce/meridian-marketing-mix-model-open-to-everyone/). Selected measurement partners are trained and certified by Google. No public affiliate programme.
- **Watch:** A model library is not an autonomous media optimiser. Inputs, priors, validation and decision rules remain practitioner work.
- **Sources:** [Official Meridian repository](https://github.com/google/meridian)
- **Verified:** 5 Sept 2026

[Back to comparison](#modelling-and-experimentation)

## PyMC-Marketing

**B · Research**

An open-source Bayesian marketing analytics package covering marketing mix modelling and customer-lifetime-value work.

> **Blocker:** Its flexibility increases the amount of expert modelling work required before any media decision is safe.

- **Route:** Official open-source Python package.
- **Scope:** Bayesian marketing models.
- **Setup:** Specialist. Requires Python, Bayesian modelling expertise, prepared data, compute and model validation.
- **Controls:** Read **N/A** · Create **Yes** · Modify **Yes** · Delete **N/A**
- **Coverage:** Specialist. Flexible modelling toolkit, not a campaign-operation or turn-key daily marketer interface.

**Good**

- Flexible Bayesian tooling for media-mix and customer-value modelling.
- Open source and inspectable for teams that need methodological control.
- Python ecosystem supports custom analysis and reproducibility.

**Limits**

- Requires strong Python and statistical expertise.
- No official MCP, plugin or dedicated workflow CLI was verified.
- It is a modelling library rather than a daily media-operations product.

**Interfaces**

- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** Python package, not a dedicated CLI
- **API / SDK:** [Open-source Python package](https://github.com/pymc-labs/pymc-marketing)

- **Access:** Open source; requires Python and Bayesian modelling expertise.
- **Commercial:** None verified. No affiliate or partner programme verified. Open-source project rather than a separately sold workflow product.
- **Watch:** The package supports analysis. It does not provide a governed connection to advertising accounts.
- **Sources:** [PyMC-Marketing repository](https://github.com/pymc-labs/pymc-marketing) · [PyMC-Marketing documentation](https://www.pymc-marketing.io/en/stable/)
- **Verified:** 5 Sept 2026

[Back to comparison](#modelling-and-experimentation)

## Robyn

**B · Research**

Meta's open-source marketing mix modelling package for estimating channel contribution and budget scenarios.

> **Blocker:** Model output is not an approved campaign change. A practitioner must interpret and operationalise it.

- **Route:** Official open-source R and Python package.
- **Scope:** Marketing mix models and budget allocation scenarios.
- **Setup:** Specialist. Requires prepared historical data, R or Python, statistical modelling and validation expertise.
- **Controls:** Read **N/A** · Create **Yes** · Modify **Yes** · Delete **N/A**
- **Coverage:** Specialist. Produces MMM results and allocation hypotheses, without a governed connection to live accounts.

**Good**

- Established open-source marketing-mix modelling project from Meta.
- Supports automated model exploration and budget-allocation analysis.
- R and Python routes broaden analyst access.

**Limits**

- No official MCP or marketer-facing CLI was verified.
- Model selection and calibration still require specialist judgement.
- Outputs do not translate directly into safe platform changes.

**Interfaces**

- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** R and Python package, not a dedicated CLI
- **API / SDK:** [Open-source R and Python package](https://github.com/facebookexperimental/Robyn)

- **Access:** Open source; requires prepared data and statistical modelling expertise.
- **Commercial:** None verified. No affiliate or partner programme verified. Open-source project rather than a separately sold workflow product.
- **Watch:** Robyn produces model outputs, not campaign changes. Treat automated budget recommendations as hypotheses requiring review.
- **Sources:** [Official Robyn repository](https://github.com/facebookexperimental/Robyn)
- **Verified:** 5 Sept 2026

[Back to comparison](#modelling-and-experimentation)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
