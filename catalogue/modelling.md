# Modelling

Specialist modelling frameworks judged on preparation, configuration, execution, validation and scenario planning.

> **Evidence basis:** Documentation reviewed unless an entry states otherwise.

[Main index](../README.md) · [Methodology](../METHODOLOGY.md)

[Media platforms](media-platforms.md) · [Analytics](analytics.md) · [Measurement](measurement.md) · [Creative production](creative-production.md) · [Research and intelligence](research-intelligence.md) · [Data infrastructure](data-infrastructure.md) · [Automation and workflow](automation-workflow.md) · [Modelling](modelling.md)

| Tool | Grade | Market role | Readiness | Setup | Read | Create | Edit | Delete | Publish / activate | Human-job coverage |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [Meridian](#meridian) | **B-** | Specialist | Research | Specialist | Yes | Yes | Yes | Unverified | No | Specialist |
| [PyMC-Marketing](#pymc-marketing) | **C+** | Specialist | Research | Specialist | Yes | Yes | Yes | Unverified | No | Specialist |
| [Robyn](#robyn) | **C** | Specialist | Research | Specialist | Yes | Yes | Yes | Unverified | No | Specialist |

## Meridian

**B- · Research · Specialist**

Inspect prepared data, model results and convergence diagnostics. Run modelling scripts and produce saved models and budget scenarios.

**Day to day**

- Inspect prepared data, model results and convergence diagnostics.
- Run modelling scripts and produce saved models and budget scenarios.

> **What still needs you:** Runs in a coding environment, not a hosted chat app. Data mappings, priors and model execution need human review.

- **Route:** Meridian Agent Skills + local Python.
- **Scope:** Inspect prepared data, model results and convergence diagnostics..
- **Setup:** Specialist. Install the skills in a coding agent and provide Python, historical data and modelling assumptions. [Meridian agent skills and checkpoints](https://developers.google.com/meridian/docs/user-guide/agent-skills).
- **Human job:** Prepare model-ready data, configure assumptions, run the model, validate it and turn scenarios into planning evidence.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Unverified** · Publish / activate **No**
- **Read:** Inspect prepared data, model results and convergence diagnostics.
- **Write:** Run modelling scripts and produce saved models and budget scenarios.
- **Connection type:** self-managed
- **Connection status:** official · generally-available. Official published agent skills; local Python, prepared data and specialist validation are still required.
- **Review:** current
- **read:** Inspect prepared data, model results and convergence diagnostics.
- **create:** Model scripts, fitted models, reports and scenarios.
- **modify:** Model configuration and reproducible local scripts.
- **delete:** No model-deletion action documented for the skills.
- **publish:** Reports and scenario files only; no live campaign budget changes.
- **Coverage:** Specialist. Run modelling scripts and produce saved models and budget scenarios. Runs in a coding environment, not a hosted chat app. Data mappings, priors and model execution need human review.
- **Evidence basis:** Documentation reviewed

**Good**

- Inspect prepared data, model results and convergence diagnostics.
- Run modelling scripts and produce saved models and budget scenarios.

**Limits**

- Runs in a coding environment, not a hosted chat app. Data mappings, priors and model execution need human review.

**Official links**

- **Product / official page:** [Meridian agent skills and checkpoints](https://developers.google.com/meridian/docs/user-guide/agent-skills)
- **AI interface / endpoint:** [Meridian Agent Skills](https://developers.google.com/meridian/docs/user-guide/agent-skills)
- **MCP:** No official MCP verified
- **Plugin:** [Meridian Agent Skills](https://developers.google.com/meridian/docs/user-guide/agent-skills)
- **CLI:** Python package, not a dedicated CLI
- **API / SDK:** [Open-source Python package](https://github.com/google/meridian)
- **Documentation:** [Meridian agent skills and checkpoints](https://developers.google.com/meridian/docs/user-guide/agent-skills)
- **GitHub:** [Meridian library and skills source](https://github.com/google/meridian)

- **Access:** Open-source skills/library, compatible coding agent, Python dependencies and appropriate compute; specialist judgement for priors, data and model validation.
- **Watch:** Runs in a coding environment, not a hosted chat app. Data mappings, priors and model execution need human review.
- **Sources:** [Meridian agent skills and checkpoints](https://developers.google.com/meridian/docs/user-guide/agent-skills) · [Meridian library and skills source](https://github.com/google/meridian)
- **Last checked:** 16 Nov 2026

[Back to comparison](#modelling)

## PyMC-Marketing

**C+ · Research · Specialist**

Read prepared data and fitted Bayesian models through Python. Create models, diagnostics, forecasts and allocation scenarios.

**Day to day**

- Read prepared data and fitted Bayesian models through Python.
- Create models, diagnostics, forecasts and allocation scenarios.

> **What still needs you:** Requires Python, prepared data and modelling expertise. No ready chat connector was verified for this library.

- **Route:** PyMC-Marketing library through Python.
- **Scope:** Read prepared data and fitted Bayesian models through Python..
- **Setup:** Specialist. Install Python dependencies, prepare model assumptions and review the statistical results. [PyMC-Marketing library documentation](https://www.pymc-marketing.io/en/stable/).
- **Human job:** Prepare model-ready data, configure assumptions, run the model, validate it and turn scenarios into planning evidence.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Unverified** · Publish / activate **No**
- **Read:** Read prepared data and fitted Bayesian models through Python.
- **Write:** Create models, diagnostics, forecasts and allocation scenarios.
- **Connection type:** self-managed
- **Connection status:** official · generally-available. Published Python library; no ready official chat connector was verified. Experimental modules are outside this assessment.
- **Review:** current
- **read:** Read prepared data and fitted Bayesian models through Python.
- **create:** Models, forecasts, diagnostics and scenarios.
- **modify:** Model specification and assumptions through code.
- **delete:** No model-deletion API documented in the reviewed library workflow.
- **publish:** No live campaign budget changes.
- **Coverage:** Specialist. Create models, diagnostics, forecasts and allocation scenarios. Requires Python, prepared data and modelling expertise. No ready chat connector was verified for this library.
- **Evidence basis:** Documentation reviewed

**Good**

- Read prepared data and fitted Bayesian models through Python.
- Create models, diagnostics, forecasts and allocation scenarios.

**Limits**

- Requires Python, prepared data and modelling expertise. No ready chat connector was verified for this library.

**Official links**

- **Product / official page:** [PyMC-Marketing library documentation](https://www.pymc-marketing.io/en/stable/)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** Python package, not a dedicated CLI
- **API / SDK:** [Open-source Python package](https://github.com/pymc-labs/pymc-marketing)
- **Documentation:** [PyMC-Marketing library documentation](https://www.pymc-marketing.io/en/stable/)
- **GitHub:** [Official PyMC-Marketing repository](https://github.com/pymc-labs/pymc-marketing)

- **Access:** Open-source Python library with compatible dependencies and compute. Hosted products and experimental modules have separate access and maturity.
- **Watch:** Requires Python, prepared data and modelling expertise. No ready chat connector was verified for this library.
- **Sources:** [PyMC-Marketing library documentation](https://www.pymc-marketing.io/en/stable/) · [Python modelling workflow](https://www.pymc-marketing.io/en/stable/notebooks/mmm/mmm_example.html) · [Official PyMC-Marketing repository](https://github.com/pymc-labs/pymc-marketing)
- **Last checked:** 16 Nov 2026

[Back to comparison](#modelling)

## Robyn

**C · Research · Specialist**

Read prepared historical data and inspect model outputs through code. Fit models and generate diagnostics and allocation scenarios.

**Day to day**

- Read prepared historical data and inspect model outputs through code.
- Fit models and generate diagnostics and allocation scenarios.

> **What still needs you:** Requires modelling code and prepared data. Python is beta; no ready official chat connector was verified.

- **Route:** Robyn library through a coding environment.
- **Scope:** Read prepared historical data and inspect model outputs through code..
- **Setup:** Specialist. Install the R package and dependencies, or the separate Python beta; prepare data and modelling code. [Robyn R installation](https://facebookexperimental.github.io/Robyn/docs/installation/).
- **Human job:** Prepare model-ready data, configure assumptions, run the model, validate it and turn scenarios into planning evidence.
- **Capabilities:** Read **Yes** · Create **Yes** · Edit **Yes** · Delete **Unverified** · Publish / activate **No**
- **Read:** Read prepared historical data and inspect model outputs through code.
- **Write:** Fit models and generate diagnostics and allocation scenarios.
- **Connection type:** self-managed
- **Connection status:** official · beta. R has a stable release; the Python route is beta. No ready official chat connector was verified.
- **Review:** current
- **read:** Read prepared historical data and inspect model outputs through code.
- **create:** Models, diagnostics and allocation scenarios.
- **modify:** Model inputs and parameters through code.
- **delete:** No model-deletion operation documented in the reviewed package guides.
- **publish:** No live campaign budget changes.
- **Coverage:** Specialist. Fit models and generate diagnostics and allocation scenarios. Requires modelling code and prepared data. Python is beta; no ready official chat connector was verified.
- **Evidence basis:** Documentation reviewed

**Good**

- Read prepared historical data and inspect model outputs through code.
- Fit models and generate diagnostics and allocation scenarios.

**Limits**

- Requires modelling code and prepared data. Python is beta; no ready official chat connector was verified.

**Official links**

- **Product / official page:** [Robyn R installation](https://facebookexperimental.github.io/Robyn/docs/installation/)
- **AI interface / endpoint:** No official AI route verified
- **MCP:** No official MCP verified
- **Plugin:** No official agent plugin verified
- **CLI:** R and Python package, not a dedicated CLI
- **API / SDK:** [Official R package and Python beta](https://github.com/facebookexperimental/Robyn)
- **Documentation:** [Robyn R installation](https://facebookexperimental.github.io/Robyn/docs/installation/)
- **GitHub:** [Official Robyn package source](https://github.com/facebookexperimental/Robyn)

- **Access:** R package has a stable CRAN release; Python implementation is beta. Both require runtime dependencies, prepared data and modelling expertise.
- **Watch:** Requires modelling code and prepared data. Python is beta; no ready official chat connector was verified.
- **Sources:** [Robyn R installation](https://facebookexperimental.github.io/Robyn/docs/installation/) · [Robyn Python beta and modelling workflow](https://facebookexperimental.github.io/Robyn/docs/robyn-api/) · [Official Robyn package source](https://github.com/facebookexperimental/Robyn)
- **Last checked:** 16 Nov 2026

[Back to comparison](#modelling)

---

Maintained by [The Detail Department](https://detail-department.com/). Facts and ratings are generated from the repository data files.
