---
marp: true
paginate: true
footer: "_Integrations, Orchestrations, and Automations: Paving the Path for AI in Enterprise Architecture_"
lang: en-CA
style: |
    section.hide {
        display: none;
    }

title: "Integrations, Orchestrations, Automations: Paving the Path for AI in Enterprise Architecture"
description: This enterprise architecture-centric session delves into the evolving integration landscape within today's market, emphasizing the strategic necessity of distinguishing between integrations, orchestrations, and automations. The presentation argues for the development of a robust foundation that supports data and digital governance, which is critical for managing these three integration types effectively. This foundational strategy not only streamlines current processes but also sets the stage for leveraging Artificial Intelligence technologies. Attendees will explore how to build and implement integration strategies that not only meet current needs but also anticipate future technological advancements and business requirements. The session provides actionable insights into creating a cohesive framework that facilitates both immediate improvements and long-term innovation.
author: David Wesst
url: https://davidwesst.com/talks/integrations-orchestrations-and-automations/
keywords:
- solution-architecture
- integration
- data
- artificial-intelligence
- ai
shortDescription: Discover how to modernize enterprise architecture with a strategic blueprint that integrates AI. Learn the essentials of integration, orchestration, and automation, and establish governance to unlock AI’s potential in your business. Perfect for professionals aiming to upgrade their strategies.
---

<!-- 
  [5 min] / 1:00pm
  Start -> 0:00:00
  End -> 0:05:00
-->

# Integrations, Orchestrations, Automations: Paving the Path for AI in Enterprise Architecture

## David Wesst | [davidwesst.com](https://davidwesst.com)

---

<!--
    //class: hide
-->

<style>
img[alt~="center"] {
  display: block;
  margin: 0 auto;
}
</style>

# Sponsor Image

![blur center](https://placehold.co/854x480)

---

![bg right](./images/thumbs-up-emoji.webp)

What this talk is...

<!-- 
- Strategic EA talk
- Governance, Standards, Culture Change, etc...
-->

---

![bg invert left](./images/thumbs-down-emoji.webp)

What this talk **is not**...

<!-- 
- Not Technical Nature
- No Implementations
- No Code
- Recommend the Blazor or Perf Testing Talk for the more technical users in the crowd
-->

---

How do we "Modernize Integration"?

<!--

[5 min]
Start -> 0:05:00
End -> 0:10:00

What is an "Integration"?
- Simple on the surface
- Real Question: How do we solve integration?
- So simple, we've all been solving it for 40+ years at this point

-->

---

Integration Solutions

<!--

Integration Solutions
- Biztalk
- ESB
- WebAPIs
- Point-to-Point

-->

---

Where is the complexity for such a simple problem?

<!--
Where is the complexity in integration?
- Not the 1-to-1 integration
- It's in the n-to-n integrations you need to support
- The chaos of the ecosystem where integrations live
-->

---

![bg fit](./images/funeral-headline.png)

<!--
UM Story for integration
- Quick self-introduction
- Application team focused on integration in 2007, since mainframe funeral Amhdahl
- Starting with ERP Portfolio (SIS, Finance, HR) a popular integration target
- As demand increased, so did our scope
-->

---

How do we "Modernize Integration"?

---

You Don't.

You Modernize Everything Else.

<!-- 
This talk is the journey the UM is on to modernize integration, and give you some ideas on how you can start your own modernization journey too.
-->

---

How?

<!--
Everything else is too big to be a project, so what do you do then?
-->

---

# Outline

- ~~Introduction & The Problem~~
- Where We Started
- Where We Went
- Where We Are Going
- Conclusion & Takeaways

<!--

- Introduction & The Problem
  - How do you solve integration? 

- The Landscape (Where we started)
  - 2-ish years ago with SIS modernization
  - Goal: How big is this big problem?
  - Environment around Industry 
    - Gartner Hype Cycles, Low-Code Application  
  - Environment around UM
    - Data Goverance and Data Warehouse
    - Competing/Parallel Interests
  - Environment inside UM Integration
    - Point-To-Point, On-Prem Database focused
    - Result was Integraiton Strategy v1.0 (in 2019)
  - Understanding the Problem by Framing It through a modernization lens
    - What does it mean to modernize our integrations?
    - Asked, what is an integration to the UM?
      - Technical staff saw it as point to point
      - Deverse sets of technologies used for the same pattern (JS, Python, Shell, PLSQL)
      - Pattern was mostly data-copy / data-sync
      - Always adding, never reusing
      - Also found an integration definition wasn't necessarily the same
      - On-prem expecations with a SaaS-focused future
    - Asked Gartner, what integration modernization was
      - Story had changed since 2019
      - No more, one platform to rule them all, rather know the platforms you have and the integrations you have
        - Lower bar for success
        - Also focusd on data cataloguing and governance over tools and patterns
  - Takeaway
    - Understand your environment and frame your problem
      - Goal is to know how big is "big"
    - Challenge your own assumptions and verify the "facts", time changes all things
    - Identify opportunities outside of your scope (integration goes beyond project scope ceiling)

- The Revolution (What we did)
  - Defined Communication Modernization Standards 
    - SaaS-Safe Integration and Extension
      - This means, it needs to be SaaS-Ready (business capability)
      - Architecture Exceptions if you can't (not a bad thing)
    - Source Control Standard
    - Scriptable Deployment Standard
    - Customziation is Bad (Principle accepted by business)
  - Re-inventory the integrations (PowerBI & Microsoft List)
    - Define the use case: Integration, Orchestration, Automation, and Reports
    - Define the "human dependent" ones
    - Define the "owner", who shold never be a technologist (IT exec for IT integrations)
      - Understand the business capabilities
    - Calculate "Technical Debt" (Gartner)
  - Challenged our own assumptions
    - Found many new integration, and many old ones that were retired
    - Integrations weren't integrations
    - Found that it was a tangled mess
    - THAT IS NOT A BAD THING
  - Removed integrations by rehoming them to new toolsets owned by functional team
    - Workflows
  - Takeaway
    - Find data, don't create it
    - Challenge all your own assumptions and expect resistance
    - Standardize what you have
    - Define your technical debt
    - Wrap your technology problems in business capabilities and use that vocabulary

- The Revolution (Where is it going?)
  - Used the data to converse about opportunities
    - Data governance v2.0 = Integration Strategy v2.0
    - Product retirement: ODS (genuine concern for Uni, beyond just ERP portfolio)
    - Result was good!
  - Need more data
    - Business process value per integration
    - Data footprint (what data is being used)
  - Takeaway
    - Find data, don't create it
    - Plan to share your findings, expect nay-sayers ,frame it as a living document
    - Reach outside your scope and build bridges with facts, not ideas

  - Modernization effort ot
  - Orchestration
  - Automation
  - Foundation Rooted in "AI" (i.e. Data and Metadata)
  - Measuring Technical Debt
  - Reliquishment of Control
- Our Reality (Where we are going)
  - Cohesive Framework
  - Governance without Governance
  - Capability, Risk, and Delivery Above All Else
  - Integration Strategy v2.0
- Conclusion, The Solution, and The Takeaway

-->

---

# Takeaways

* Integration modernization is NOT a project
* Define "integration modernization" for your own environment
* Find data about integrations, don't create it
* Wrap technical capabilities with business capabilities
* Acknowledge risks, and capitalize on opportunities

<!--
* Integration modernization is NOT a project
* Define "integration modernization" for your own environment
* Find data about integrations, don't create it
* Wrap technical capabilities with business capabilities
* Acknowledge risks, and capitalize on opportunities
-->

---

Where We Started...

<!--
  [15 min]
  Start -> 0:10:00
  End -> 0:25:00

- The Landscape (Where we started)
  - 2-ish years ago with SIS modernization
    - The problem is what is "integration modernization"?
    - What are the risks and what are the opportunities?
  - Environment around Industry 
    - Gartner Hype Cycles unchanged
    - Gartner recommendation somewhat changed (different perspective)
    - AI-Readiness (opportunity)
    - Security (opportunity)
    - Citizen Developers (risk/opportunity)
  - Environment around UM
    - Data Goverance effort with Data Warehouse (opportunity)
    - Data Catalogue reviewed by executive peers (recommendations, not requirements)
    - Integration expectations assumed "on-prem performance"
  - Environment inside UM Integration
    - Result was Integraiton Strategy v1.0 (in 2021)
    - Point-To-Point, On-Prem focused
      - Resistance to understand other options (i.e. WebAPIs, unless they had to)
    - Data Copy/Sync Pattern 95%
    - Integration wasn't quite an integration
  - What is integration modernization to the UM?
    - Change in definition 
    - Change in implementation
    - Change in expectation
  - Takeaway
    - Understand your environment and frame your problem
      - What is integration modernization to your devs, your executives, to your industry?
    - Result should identify both opportunities and risks that go beyond your project scope
-->

---

2022/23 -> SIS Modernization Effort

![bg right](./images/stoneage-to-spaceage.webp)

<!--
- Vendor decides to update solution from database-driven to cloud-native in one major update
- 2ish years ago with SIS modernization, with a phase 3
- Problem: What is "integration modernization" for the SIS?
- What are the risks we face, and opportunities we can leverage?
-->

---

Examine the environment...

* ...in the industry
* ...in the enterprise
* ...in the development team

![bg left 100%](./images/team-enterprise-industry.webp)

---

State of the Industry (Higher Education)

* Gartner Conversations & Hype Cycles
* "AI-Readiness" (opportunity)
* Information Security (opportnity)
* Citizen Developers (risk/opportunity)

![bg right](./images/new-products_ai-ready_infosec_citizen-developers.webp)

<!--
Context: Gartner and Assumptions from
Environment around Industry 
  - Gartner Hype Cycles unchanged
  - Gartner recommendation somewhat changed (different perspective)
  - AI-Readiness (opportunity)
  - Security (opportunity)
  - Citizen Developer (Risk)
-->

---

State of the Enterprise

* Data Governance & Data Analytics/Warehouse Effort
* Integration Strategy v1.0 from 2021 did not rollout as hoped
* Integrations treated separately from Data
* New tools introduced to empower Citizen Developers

![bg right](./images/enterprise.webp)

<!-- 
Ellucian Workflow, M365, and interest in LCAP
-->

---

State of the Development Team

* Data Copy/Sync Pattern used almost exclusively
* Lacked Experience in Modern Integration Development (a.k.a. Cloud-Native)
* Integration wasn't quite an Integration

![bg right](./images/development-team.webp)

---

What is "Integration Modernization" to UM?

- Change in expectation
- Change in definition
- Change in implementation

* **NOTE: This is bigger than an "SIS Modernization Project"**

<!--
Not a technical change in the list.
-->

---

The Revolution (What did we do?)

<!--
  [15 min]
  Start -> 0:25:00
  End -> 0:40:00

- The Evolution (What we did)
  - Defined Communication Modernization Standards 
    - Customziation is Bad (Principle accepted by business) / Cloud is good
      - Project Pillar
    - SaaS-Safe Integration and Extension
      - This means, it needs to be SaaS-Ready (business capability)
      - Architecture Exceptions if you can't (not a bad thing)
    - Source Control Standard
    - Scriptable Deployment Standard
  - Re-inventory the integrations (PowerBI & Microsoft List)
    - Define the use case: Integration, Orchestration, Automation, and Reports
    - Define the "human dependent" ones
    - Define the "owner", who shold never be a technologist (IT exec for IT integrations)
      - Understand the business capabilities and risks with them
    - Calculate "Technical Debt" (Gartner)
  - Challenged our own assumptions
    - Found many new integration, and many old ones that were retired
    - Integrations weren't integrations
    - Found that it was a tangled mess
    - THAT IS NOT A BAD THING
  - Removed integrations by rehoming them to new toolsets owned by functional team
    - Workflows
  - Takeaway
    - Find data, don't create it
    - Challenge all your own assumptions and expect resistance
    - Standardize what you have
    - Define your technical debt
    - Wrap your technology problems in business capabilities and use that vocabulary
    - Challenge your own assumptions and verify the "facts", time changes all things
-->

---

Defined (and Communicated) Standards

<!--
  - Change in implementation

  - Defined Communication Modernization Standards 
    - Customziation is Bad (Principle accepted by business) / Cloud is good
      - Project Pillar
    - SaaS-Safe Integration and Extension
      - This means, it needs to be SaaS-Ready (business capability)
      - Architecture Exceptions if you can't (not a bad thing)
    - Source Control Standard
    - Scriptable Deployment Standard
-->

---

Finding Pre-Existing Work

<!--
- Change in Definition

- Data Warehouse & Data Governance Synergies
- Review of Integration Strategy v1.0
-->

---

Inventory of the Integrations

<!--
- Change in expectation and definition

- Re-inventory the integrations (PowerBI & Microsoft List)
  - Define the use case: Integration, Orchestration, Automation, and Reports
  - Define the "human dependent" ones
  - Define the "owner", who shold never be a technologist (IT exec for IT integrations)
    - Understand the business capabilities and risks with them
  - Calculate "Technical Debt" (Gartner)
  - Living Document
  - Find Data, Don't Make it
-->
---

![bg center](./images/integration-catalogue.png)

<!--
Start with what you have
-->

---

![bg center](./images/powerbi-screen.png)

<!--
Start with what you have
-->

---

Result: Challenged Our Own Assumptions

<!--
  - Challenged our own assumptions
    - Found many new integration, and many old ones that were retired
    - Integrations weren't integrations
    - Found that it was a tangled mess
    - THAT IS NOT A BAD THING
-->

---

# The Evolution (Where it's going)

<!--
  [10 min]
  Start -> 0:40:00
  End -> 0:50:00

- The Evolution (Where is it going?)
  - Used the data to converse about opportunities
    - Data governance v2.0 = Integration Strategy v2.0
    - Product retirement: ODS (genuine concern for Uni, beyond just ERP portfolio)
    - Result was good!
  - Need more data
    - Business process value per integration
    - Data footprint (what data is being used)
  - Takeaway
    - Find data, don't create it
    - Plan to share your findings, expect nay-sayers ,frame it as a living document
    - Reach outside your scope and build bridges with facts, not ideas
-->

---

Enabling Conversations about Opportunities

<!--
Change in expectation
-->

---

Data Governance v2.0 += Integration Strategy v2.0

<!--
Change in definition
-->

New Risks become New Opportunity

<!--
Change in implementation

ODS Retirement
-->

---

Streamlining Business Capbilities by Reclassifying "Integrations" as "Orchestrations"

<!--
Change in implementation

- Capability moved with business team
- New Workflow Tool(s) / LCAP / Power Automate
-->

---

# Takeaways

* Integration modernization is NOT a project
* Define "integration modernization" for your own environment
* Find data about integrations, don't create it
* Wrap technical capabilities with business capabilities
* Acknowledge risks, and capitalize on opportunities

---

# Who am I?

- David Wesst
- Solution Architect, University of Manitoba
- david.wesst@umanitoba.ca / dw@davidwesst.com
- https://davidwesst.com

---
