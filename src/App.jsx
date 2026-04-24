import { useMemo, useState } from 'react';
import { AlertTriangle, Check, Copy, Info, ShieldCheck } from 'lucide-react';

const LEGAL_TEXT = {
  core: {
    C1: 'Subject to the terms and conditions of this License, Licensor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form. The foregoing grant is expressly made subject to, and conditioned upon, Your strict compliance with all active Modules enumerated in Section 3.',
    C2: 'Subject to the terms and conditions of this License, Licensor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce and prepare Derivative Works of the Work solely for Your internal business operations or private use. No right or license is granted to distribute, publicly display, or externally transmit the Work or Derivative Works in either Source or Object form, unless expressly permitted by an active Module in Section 3.',
    C3: 'Subject to the terms and conditions of this License, Licensor hereby grants to You a worldwide, non-exclusive, no-charge, royalty-free, revocable license strictly limited to the internal inspection, execution, and viewing of the Work. You are expressly prohibited from reproducing (except for transient technical caches necessary for viewing), modifying, distributing, or exercising any other rights reserved under applicable copyright law, absent specific and overriding authorization in Section 3.',
    C4: 'Subject to the terms and conditions of this License, Licensor hereby grants to You a limited, revocable license to inspect, reproduce, execute, and modify the Work for evaluation, prototyping, due diligence, interoperability testing, and internal demonstration purposes. No general right to production deployment or external redistribution is granted except where expressly expanded by an active Module in Section 3.',
    C5: 'Subject to the terms and conditions of this License, Licensor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge copyright license to use, modify, and redistribute the Work for non-commercial and community-oriented purposes. Any exercise of the Licensed rights for commercial gain, paid service delivery, or monetized distribution remains prohibited unless expressly enabled by an active Module in Section 3.',
  },
  modules: {
    A: 'Attribution (A): As a material condition of this License, You must retain, in all copies or substantial portions of the Work or Derivative Works distributed by You, all copyright, patent, trademark, and attribution notices from the Source form of the Work. You must provide a copy of this License (or a URI/hyperlink referring to it) to any recipients of the Work. You may not use the attribution to implicitly or explicitly assert or imply any connection with, sponsorship by, or endorsement by the Licensor.',
    A2: 'Prominent Attribution (A2): Any public distribution, hosted deployment, or public-facing presentation of the Work or a Derivative Work must include a prominent and reasonably visible attribution credit to the Licensor in user-facing documentation, product credits, or a comparable notice location.',
    A3: 'NOTICE File Required (A3): If You distribute the Work or a Derivative Work, You must include an unmodified NOTICE file or equivalent attribution appendix identifying the original Work, the Licensor, and any mandatory downstream notices specified by the Licensor.',
    A4: 'Modification Attribution (A4): If You distribute or publicly deploy a modified version of the Work, You must clearly identify Yourself as the modifier and distinguish the modified version from the original Work so that recipients are not misled as to authorship or provenance.',
    A5: 'Network Attribution Notice (A5): If You make the Work available to third parties over a network, You must provide a visible network-accessible attribution notice identifying the original Work, the Licensor, and the License variant governing such deployment.',

    NC: 'Non-Commercial Only (NC): Notwithstanding any other provision, no right or license is granted to exercise the Licensed rights for any Commercial Purpose. "Commercial Purpose" shall mean any use primarily intended for or directed toward commercial advantage or private monetary compensation, including but not limited to the sale of the Work or the incorporation of the Work into a commercially distributed product or service.',
    MC: 'Commercial Use Allowed (MC): You are explicitly authorized to exercise the granted rights for Commercial Purposes, provided that such utilization remains strictly subordinate to, and compliant with, all other Modules enumerated herein.',
    IC: 'Internal Commercial Use Only (IC): Commercial entities are granted permission to internally deploy, execute, and reproduce the Work exclusively to support internal business operations. You shall not sell, sublicense, distribute, or make the Work available to external third parties as a standalone product, hosted service, or material component of a commercially distributed product.',
    SM: 'Small-Entity Commercial Use (SM): Commercial use is permitted only for individuals, independent studios, and legal entities with no more than twenty-five full-time equivalent personnel or the equivalent of USD 2,000,000 in trailing annual gross revenue, unless separate written permission is obtained from the Licensor.',
    CW: 'Client Work Commercial Use (CW): You may use and modify the Work in the course of providing paid consulting, implementation, or commissioned client services, provided that You do not transfer or redistribute the Work itself as a standalone product except as otherwise authorized by active Modules.',

    M0: 'No Modification (M0): You are strictly prohibited from altering, translating, adapting, or creating any Derivative Works from the Work. Any redistribution must be of the Work in its exact, original, and unmodified state.',
    M1: 'Private Modification Allowed (M1): You may create Derivative Works solely for internal, private, or organizational testing and operational purposes. Under no circumstances may such Derivative Works be distributed, transmitted, or made accessible to any external third party.',
    M2: 'Public Modification Allowed (M2): You are expressly permitted to create, reproduce, and publicly distribute Derivative Works, subject strictly to the conditions, obligations, and limitations established by all other active Modules herein.',
    M3: 'Patch-Only Modification Distribution (M3): You may create Derivative Works, but any public distribution of modifications must occur solely in the form of patches, diffs, or separately identifiable change sets that require recipients to obtain the original Work independently.',
    M4: 'Extension and Plugin Modification Only (M4): You may create interoperable add-ons, plugins, themes, adapters, or integration layers for the Work, but You may not distribute a modified core copy of the Work itself except as otherwise expressly permitted by active Modules.',

    R0: 'No Redistribution (R0): You are strictly prohibited from distributing, sublicensing, sharing, publicly displaying, or otherwise transmitting the Work or any Derivative Works, in whole or in part, to any third party.',
    R1: 'Unmodified Redistribution Only (R1): You may distribute exact, unmodified, bit-for-bit identical copies of the Work. The distribution, public transmission, or sublicensing of modified versions, fragments, or Derivative Works is strictly prohibited.',
    R2: 'Redistribution Allowed (R2): You are permitted to distribute the Work and any authorized Derivative Works, subject strictly to the obligations and limitations established by all other active Modules herein.',
    R3: 'Source Redistribution Only (R3): Redistribution is permitted only in Source form. You may not distribute compiled, obfuscated, encrypted, or otherwise Object-form-only versions of the Work without simultaneously providing the complete preferred Source form under this License.',
    R4: 'Affiliate and Registered Recipient Redistribution (R4): Redistribution is permitted only to affiliates, named customers, or specifically registered recipients with whom You maintain an auditable record of transfer and License acceptance.',

    SA: 'Share Alike Required (SA): If You distribute or publicly display a Derivative Work, You must license that entire Derivative Work, as a whole, under the exact same Prism License Framework variant (including the identical Core and all identical Modules) as this original Work. You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License.',
    SD: 'Source Disclosure on Derivatives (SD): If You distribute any Derivative Works in Object form, You must simultaneously provide the complete, machine-readable, and editable Source form of the Derivative Work to the recipients at no additional charge, under the terms of this License.',
    FD: 'File Difference Disclosure (FD): You must cause any modified files to carry prominent notices stating that You changed the files, detailing the specific substantive alterations made, and indicating the exact dates of such modifications.',
    MN: 'Modified Naming Required (MN): If You distribute or publicly deploy a Derivative Work, You must apply a differentiated project name, version label, or release identifier sufficient to prevent confusion between the original Work and the modified version.',
    OC: 'Offer Changes Back (OC): If You publicly distribute or deploy a Derivative Work, You must offer the Licensor, at no additional charge, a copy of the corresponding modifications and implementation notes reasonably sufficient to understand the material changes You introduced.',

    NR: 'No Resale (NR): You shall not sell, lease, rent, or bundle the Work (or authorized Derivative Works) for any direct or indirect monetary fee. The Work may not be repackaged or sublicensed in any transaction where the Work itself constitutes the primary standalone value.',
    LR: 'Limited Resale (LR): Resale of the Work or Derivative Works is permitted only on the condition that You have materially transformed the Work or integrated it into a larger proprietary system, such that the original Work does not constitute the primary standalone value of the product being sold.',
    FR: 'Free Resale (FR): You are permitted to sell, license for a fee, or otherwise commercially distribute the Work or Derivative Works, subject strictly to the limitations established by all other active Modules herein.',
    CR: 'Cost-Recovery Resale Only (CR): You may charge only a reasonable fee strictly limited to documented hosting, media, packaging, fulfillment, or support cost recovery. You may not price the Work itself as a profit center absent separate authorization under another active Module.',
    BS: 'Bundled Resale Only (BS): Resale is permitted only when the Work or an authorized Derivative Work is bundled as a non-primary component within a larger product, system, or service offering, and not as the primary standalone value being sold.',

    NT: 'No AI Training (NT): Notwithstanding any other provision of this License, no right or license is granted to utilize, ingest, scrape, or process the Work, or any portions thereof, for the purpose of training, fine-tuning, evaluating, benchmarking, distilling, or otherwise developing artificial intelligence systems, large language models, neural networks, or machine learning algorithms.',
    AT: 'AI Training by Permission Only (AT): Any utilization of the Work for machine learning or artificial intelligence training, evaluation, or benchmarking is entirely outside the scope of this License and requires separate, prior, and explicit written consent from the Licensor.',
    OA: 'Open AI Use Allowed (OA): You are explicitly permitted to ingest, process, and utilize the Work for the purposes of machine learning training, algorithmic evaluation, and artificial intelligence model development.',
    RA: 'Research AI Use Only (RA): AI and machine learning use is permitted solely for non-commercial academic, public-interest, or internal research purposes. Any production model deployment, paid service use, or monetized model distribution derived from such use is prohibited absent separate written permission.',
    LA: 'Local and Private AI Use Only (LA): AI use is permitted only for local, non-public, non-hosted, and non-shared model training or evaluation conducted within systems under Your direct control. You may not use the Work for cloud-hosted, customer-facing, or externally accessible AI services without separate written permission.',

    HM: 'No Harmful Military Use (HM): You shall not exercise any rights under this License in connection with the design, development, testing, deployment, or operation of weapons, lethal targeting systems, combat optimization software, offensive military infrastructure, or any system whose primary intended outcome is physical injury, death, or severe environmental destruction.',
    NS: 'No Surveillance Use (NS): You shall not utilize the Work in the development or deployment of systems intended for mass public surveillance, biometric identification without explicit individual consent, predictive policing, unlawful digital tracking, or systemic population profiling.',
    HE: 'High-Risk Ethical Restriction (HE): You shall not utilize the Work in any capacity that materially facilitates or supports human rights violations, human trafficking, forced labor, state repression, unlawful discrimination, or the subversion of democratic civil rights.',
    DS: 'No Disinformation Systems (DS): You shall not utilize the Work to generate, coordinate, automate, optimize, or materially support deceptive propaganda, fraudulent impersonation, synthetic influence operations, or large-scale disinformation campaigns.',
    BX: 'No Biometric Exploitation (BX): You shall not utilize the Work in systems designed to extract, infer, sell, or monetize biometric identifiers, affective states, or sensitive behavioral profiles without informed, specific, and revocable individual consent.',

    BU: "Branding Use Allowed (BU): You may use Licensor's trade names, trademarks, or product names solely in truthful, factual, and non-deceptive references to identify the origin of the Work, provided such use does not imply any official endorsement, sponsorship, or affiliation.",
    BN: "Nominative Branding Only (BN): You may reference Licensor branding solely as reasonably necessary to identify compatibility, provenance, or factual origin, but You may not style, market, or present Your offering in a manner likely to create confusion as to source, sponsorship, or official affiliation.",
    BR: "Branding Restricted (BR): This License does not grant permission to use the trade names, trademarks, service marks, logos, or domain names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file or attribution headers.",
    BP: "Branding by Permission Only (BP): This License grants absolutely no rights to use the Licensor's trademarks, trade names, or branding. Any such use requires a separate, fully executed written trademark license agreement.",
    WL: 'No White-Label Rebranding (WL): You may not remove, replace, conceal, or materially subordinate the origin identity of the Work in order to market the Work or an authorized Derivative Work as if it were originally created by You, except where separate written branding permission has been granted by the Licensor.',

    S0: 'No Hosted Service Use (S0): You shall not deploy, host, or otherwise make the functionality of the Work available to third parties over a network as a hosted service, including but not limited to Software-as-a-Service (SaaS), Platform-as-a-Service (PaaS), Application Service Provider (ASP) models, or remote API access.',
    S1: 'Internal Hosting Allowed (S1): You may deploy and host the Work via a network exclusively for use by the internal end-users, employees, and authorized contractors of Your immediate Legal Entity.',
    S2: 'Public Hosting Allowed (S2): You may deploy and offer the Work as a network-accessible hosted service or SaaS to external third parties, subject strictly to the limitations established by all other active Modules herein.',
    S3: 'Named-Customer Hosting Only (S3): You may host the Work for external customers only in dedicated or named-customer deployments, pilot environments, or controlled client-specific instances. General public multi-tenant hosted service operation is prohibited absent further permission.',
    S4: 'Managed Service by Permission Only (S4): You may operate the Work as part of a managed service or reseller offering solely under a separate commercial or partnership arrangement with the Licensor or where explicitly authorized in writing.',

    P0: 'No Patent License Granted (P0): This License does not grant, expressly or by implication, estoppel, or otherwise, any rights under any patent covering the Work or any portions thereof.',
    P1: 'Limited Patent License Granted (P1): Subject to the terms and conditions of this License, Licensor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by Licensor that are necessarily infringed by their contribution(s) alone or by combination of their contribution(s) with the Work. If You institute patent litigation against any entity alleging that the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.',
    P2: 'Broad Patent Grant with Retaliation (P2): Licensor grants a broad patent license covering patent claims necessarily infringed by the Work and authorized Derivative Works, provided that if You assert patent claims against the Licensor, Contributors, or compliant licensees concerning the Work, all patent rights granted to You under this License terminate automatically upon such assertion.',
    P3: 'Evaluation Non-Assert (P3): During evaluation, testing, and permitted internal use of the Work, Licensor covenants not to assert licensable patent claims necessarily infringed by the unmodified Work against compliant licensees, but no broader patent grant is made for commercial redistribution or unrelated derivative uses.',
    P4: 'Defensive Patent Suspension (P4): Any patent rights otherwise available to You under this License are suspended immediately if You or an affiliate initiate offensive patent litigation concerning the Work, a Contributor implementation, or a materially compliant downstream distribution of the Work.',

    ED: 'Educational Reuse Allowed (ED): Accredited educational institutions and educators are expressly permitted to copy, adapt, and present the Work for non-profit pedagogical and teaching purposes, overriding standard commercial restrictions strictly within the context of a classroom.',
    CE: 'Course Extraction Restricted (CE): You shall not extract, adapt, or repackage the Work or substantial portions thereof to form the basis of a commercially competitive educational course, textbook, curriculum, formal certification program, or structured training material.',
    RE: 'Research Reuse Allowed (RE): Non-commercial academic and independent research use of the Work, including adaptation, experimentation, benchmarking, and publication of research findings, is expressly permitted so long as such use remains otherwise compliant with the active Modules of this License.',
    CL: 'Classroom Display and Demonstration (CL): Educators and trainers may publicly display, perform, and demonstrate the Work in classroom, workshop, seminar, and internal training contexts, provided such activities are not themselves structured as a competing commercial extraction of the Work.',
    SC: 'Student Copying Allowed (SC): Students, trainees, and workshop participants may receive, reproduce, and retain individual copies of the Work for study, coursework, and portfolio review, provided such copies are not resold or redistributed outside the relevant educational context except as otherwise permitted by active Modules.',

    N1: 'Hosted Source Offer (N1): If You make the Work or a Derivative Work available to third parties as a hosted service, You must provide such users with a persistent written offer to obtain the corresponding Source form of the hosted implementation to the extent required by the active Modules of this License.',
    N2: 'Service Modification Disclosure (N2): If You materially modify the Work and make it available to third parties over a network, You must publish or otherwise make accessible a summary of the service-side modifications sufficient to identify the functional changes relative to the original Work.',
    N3: 'Public API Notice (N3): Any network-accessible deployment of the Work must provide reasonably accessible documentation identifying the governing License variant, the operator identity, and any material restrictions affecting user-facing API or service use rights.',
    N4: 'Remote User Legal Notice Banner (N4): Hosted or network-accessible instances of the Work must display, in a visible user-facing location, a notice identifying that the service is powered by the Work and governed by the applicable Prism License Framework variant.',
    N5: 'Interoperability Export Right (N5): If You operate the Work as a hosted service, You must provide users with a reasonable means to export their configuration data, user-contributed materials, or service-specific dependency mappings necessary to migrate away from Your hosted implementation, to the extent such materials are within Your control and not independently restricted by law.',

    EX: 'Export and Sanctions Compliance (EX): You may not exercise rights under this License in violation of applicable export control laws, sanctions restrictions, or trade embargo regulations, and You are solely responsible for obtaining any authorizations required for compliant cross-border distribution or use.',
    PR: 'Privacy Compliance Duty (PR): If You process personal data using the Work or an authorized Derivative Work, You must do so in material compliance with applicable privacy, data protection, and consumer disclosure laws, including maintaining a lawful basis where required.',
    AU: 'Audit Record Preservation (AU): Where You deploy the Work in regulated, commercial, or high-risk operational settings, You must preserve sufficient audit records, change records, or deployment records to reasonably demonstrate compliance with the active restrictions of this License.',
    SR: 'Security Review Before High-Risk Deployment (SR): You shall not deploy the Work in high-risk or safety-sensitive environments unless You have conducted and documented a reasonable security and misuse review proportionate to the foreseeable impact of such deployment.',
    TR: 'Transparency Reporting Duty (TR): If You distribute or deploy the Work in a manner materially affecting large populations, critical infrastructure, or public-facing automated decision systems, You must maintain and, where legally permissible, publish a transparency summary describing the class of deployment, the responsible operator, and the governing License variant.',
  },
};

const CATEGORIES = [
  {
    id: 'core',
    title: 'Core Base',
    type: 'radio',
    options: [
      { val: 'C1', label: 'C1 - Restricted Foundation (Use, Modify, Share)' },
      { val: 'C2', label: 'C2 - Internal Mod Core' },
      { val: 'C3', label: 'C3 - View-Only Core' },
      { val: 'C4', label: 'C4 - Evaluation and Prototype Core' },
      { val: 'C5', label: 'C5 - Community Source Core' },
    ],
  },
  {
    id: 'attribution',
    title: 'Attribution',
    type: 'radio',
    options: [
      { val: 'None', label: 'No Attribution Module' },
      { val: 'A', label: 'A - Standard Attribution' },
      { val: 'A2', label: 'A2 - Prominent Attribution' },
      { val: 'A3', label: 'A3 - NOTICE File Required' },
      { val: 'A4', label: 'A4 - Modification Attribution' },
      { val: 'A5', label: 'A5 - Network Attribution Notice' },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Use',
    type: 'radio',
    options: [
      { val: 'None', label: 'No Commercial Module' },
      { val: 'NC', label: 'NC - Non-Commercial Only' },
      { val: 'MC', label: 'MC - Commercial Allowed' },
      { val: 'IC', label: 'IC - Internal Commercial Only' },
      { val: 'SM', label: 'SM - Small-Entity Commercial Use' },
      { val: 'CW', label: 'CW - Client Work Commercial Use' },
    ],
  },
  {
    id: 'modification',
    title: 'Modification',
    type: 'radio',
    options: [
      { val: 'None', label: 'No Modification Module' },
      { val: 'M0', label: 'M0 - No Modification' },
      { val: 'M1', label: 'M1 - Private Mod Allowed' },
      { val: 'M2', label: 'M2 - Public Mod Allowed' },
      { val: 'M3', label: 'M3 - Patch-Only Distribution' },
      { val: 'M4', label: 'M4 - Extensions and Plugins Only' },
    ],
  },
  {
    id: 'redistribution',
    title: 'Redistribution',
    type: 'radio',
    options: [
      { val: 'None', label: 'No Redistribution Module' },
      { val: 'R0', label: 'R0 - No Redistribution' },
      { val: 'R1', label: 'R1 - Unmodified Only' },
      { val: 'R2', label: 'R2 - Redistribution Allowed' },
      { val: 'R3', label: 'R3 - Source Redistribution Only' },
      { val: 'R4', label: 'R4 - Registered Recipient Only' },
    ],
  },
  {
    id: 'derivative',
    title: 'Derivative Obligations',
    type: 'checkbox',
    options: [
      { val: 'SA', label: 'SA - Share Alike' },
      { val: 'SD', label: 'SD - Source Disclosure' },
      { val: 'FD', label: 'FD - File Diff Disclosure' },
      { val: 'MN', label: 'MN - Modified Naming Required' },
      { val: 'OC', label: 'OC - Offer Changes Back' },
    ],
  },
  {
    id: 'resale',
    title: 'Resale',
    type: 'radio',
    options: [
      { val: 'None', label: 'No Resale Module' },
      { val: 'NR', label: 'NR - No Resale' },
      { val: 'LR', label: 'LR - Limited Resale' },
      { val: 'FR', label: 'FR - Free Resale' },
      { val: 'CR', label: 'CR - Cost Recovery Only' },
      { val: 'BS', label: 'BS - Bundled Resale Only' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Training',
    type: 'radio',
    options: [
      { val: 'None', label: 'No AI Module' },
      { val: 'NT', label: 'NT - No AI Training' },
      { val: 'AT', label: 'AT - AI by Permission Only' },
      { val: 'OA', label: 'OA - Open AI Allowed' },
      { val: 'RA', label: 'RA - Research AI Only' },
      { val: 'LA', label: 'LA - Local and Private AI Only' },
    ],
  },
  {
    id: 'ethics',
    title: 'Ethical Restrictions',
    type: 'checkbox',
    options: [
      { val: 'HM', label: 'HM - No Harmful Military' },
      { val: 'NS', label: 'NS - No Surveillance' },
      { val: 'HE', label: 'HE - High-Risk Human Rights Restrict' },
      { val: 'DS', label: 'DS - No Disinformation Systems' },
      { val: 'BX', label: 'BX - No Biometric Exploitation' },
    ],
  },
  {
    id: 'branding',
    title: 'Branding',
    type: 'radio',
    options: [
      { val: 'None', label: 'No Branding Module' },
      { val: 'BU', label: 'BU - Branding Use Allowed' },
      { val: 'BN', label: 'BN - Nominative Branding Only' },
      { val: 'BR', label: 'BR - Branding Restricted' },
      { val: 'BP', label: 'BP - Branding by Permission' },
      { val: 'WL', label: 'WL - No White-Label Rebranding' },
    ],
  },
  {
    id: 'hosting',
    title: 'Hosting & SaaS',
    type: 'radio',
    options: [
      { val: 'None', label: 'No Hosting Module' },
      { val: 'S0', label: 'S0 - No Hosted Service' },
      { val: 'S1', label: 'S1 - Internal Hosting Only' },
      { val: 'S2', label: 'S2 - Public Hosting Allowed' },
      { val: 'S3', label: 'S3 - Named-Customer Hosting Only' },
      { val: 'S4', label: 'S4 - Managed Service by Permission' },
    ],
  },
  {
    id: 'network',
    title: 'Network Reciprocity',
    type: 'radio',
    options: [
      { val: 'None', label: 'No Network Reciprocity Module' },
      { val: 'N1', label: 'N1 - Hosted Source Offer' },
      { val: 'N2', label: 'N2 - Service Modification Disclosure' },
      { val: 'N3', label: 'N3 - Public API Notice' },
      { val: 'N4', label: 'N4 - Remote User Legal Notice' },
      { val: 'N5', label: 'N5 - Interoperability Export Right' },
    ],
  },
  {
    id: 'patent',
    title: 'Patents',
    type: 'radio',
    options: [
      { val: 'None', label: 'No Patent Module' },
      { val: 'P0', label: 'P0 - No Patent License' },
      { val: 'P1', label: 'P1 - Limited Patent License' },
      { val: 'P2', label: 'P2 - Broad Patent Grant' },
      { val: 'P3', label: 'P3 - Evaluation Non-Assert' },
      { val: 'P4', label: 'P4 - Defensive Suspension' },
    ],
  },
  {
    id: 'education',
    title: 'Education & Research',
    type: 'checkbox',
    options: [
      { val: 'ED', label: 'ED - Educational Reuse Allowed' },
      { val: 'CE', label: 'CE - Course Extraction Restricted' },
      { val: 'RE', label: 'RE - Research Reuse Allowed' },
      { val: 'CL', label: 'CL - Classroom Display Right' },
      { val: 'SC', label: 'SC - Student Copying Allowed' },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Governance',
    type: 'checkbox',
    options: [
      { val: 'EX', label: 'EX - Export and Sanctions Compliance' },
      { val: 'PR', label: 'PR - Privacy Compliance Duty' },
      { val: 'AU', label: 'AU - Audit Record Preservation' },
      { val: 'SR', label: 'SR - Security Review Before High-Risk Use' },
      { val: 'TR', label: 'TR - Transparency Reporting Duty' },
    ],
  },
];

const FACTOR_COUNT = CATEGORIES.length;
const OPTION_COUNT = CATEGORIES.reduce((sum, category) => sum + category.options.length, 0);
const PRESETS = {
  'PLF-Open': {
    description: 'Broad collaboration preset for public source-sharing with fewer downstream restrictions.',
    state: {
      core: 'C1',
      attribution: 'A',
      commercial: 'MC',
      modification: 'M2',
      redistribution: 'R2',
      derivative: [],
      resale: 'FR',
      ai: 'OA',
      ethics: [],
      branding: 'BN',
      hosting: 'S2',
      network: 'None',
      patent: 'P1',
      education: ['ED', 'RE', 'CL'],
      compliance: [],
    },
  },
  'PLF-Balanced': {
    description: 'Middle-ground preset for source-available distribution with guardrails around branding, AI, and hosted use.',
    state: {
      core: 'C1',
      attribution: 'A2',
      commercial: 'MC',
      modification: 'M2',
      redistribution: 'R2',
      derivative: ['FD', 'MN'],
      resale: 'BS',
      ai: 'AT',
      ethics: ['NS'],
      branding: 'BR',
      hosting: 'S3',
      network: 'N3',
      patent: 'P1',
      education: ['CE', 'RE'],
      compliance: ['PR'],
    },
  },
  'PLF-Protected': {
    description: 'Creator-protective preset for controlled reuse, no AI training, and no open SaaS resale.',
    state: {
      core: 'C1',
      attribution: 'A',
      commercial: 'NC',
      modification: 'M2',
      redistribution: 'R2',
      derivative: ['FD'],
      resale: 'NR',
      ai: 'NT',
      ethics: ['NS', 'DS'],
      branding: 'BR',
      hosting: 'S0',
      network: 'None',
      patent: 'None',
      education: ['CE'],
      compliance: ['PR', 'SR'],
    },
  },
};
const INTENT_PATHS = {
  aiTrainingNo: {
    label: 'Block AI training',
    problem: 'I do not want AI companies scraping my work.',
    outcome: 'Allows normal commercial reuse while explicitly blocking model training and evaluation.',
    state: {
      core: 'C1',
      attribution: 'A2',
      commercial: 'MC',
      modification: 'M2',
      redistribution: 'R2',
      derivative: ['FD'],
      resale: 'BS',
      ai: 'NT',
      ethics: ['NS'],
      branding: 'BR',
      hosting: 'S2',
      network: 'N3',
      patent: 'P1',
      education: ['RE'],
      compliance: ['PR'],
    },
  },
  noSaasClones: {
    label: 'Stop SaaS clones',
    problem: 'I do not want someone wrapping this as a hosted clone.',
    outcome: 'Allows source-visible reuse while blocking public hosted service clones and standalone resale.',
    state: {
      core: 'C1',
      attribution: 'A5',
      commercial: 'CW',
      modification: 'M2',
      redistribution: 'R2',
      derivative: ['FD', 'MN'],
      resale: 'NR',
      ai: 'AT',
      ethics: ['NS'],
      branding: 'WL',
      hosting: 'S0',
      network: 'None',
      patent: 'P1',
      education: ['CE', 'RE'],
      compliance: ['PR', 'SR'],
    },
  },
  indieNotEnterprise: {
    label: 'Indies yes, big companies no',
    problem: 'I want indie devs and small studios, but not large corporations.',
    outcome: 'Allows commercial use only for small entities and keeps larger corporate use outside the default grant.',
    state: {
      core: 'C5',
      attribution: 'A2',
      commercial: 'SM',
      modification: 'M2',
      redistribution: 'R2',
      derivative: ['FD'],
      resale: 'BS',
      ai: 'AT',
      ethics: ['NS'],
      branding: 'BR',
      hosting: 'S3',
      network: 'N3',
      patent: 'P1',
      education: ['ED', 'RE'],
      compliance: ['PR'],
    },
  },
  commercialNoResale: {
    label: 'Commercial use, no resale',
    problem: 'I want paid use allowed, but not selling the work itself.',
    outcome: 'Permits commercial activity while blocking standalone resale or clone packaging.',
    state: {
      core: 'C1',
      attribution: 'A',
      commercial: 'MC',
      modification: 'M2',
      redistribution: 'R2',
      derivative: ['FD'],
      resale: 'NR',
      ai: 'AT',
      ethics: [],
      branding: 'BR',
      hosting: 'S3',
      network: 'N3',
      patent: 'P1',
      education: ['RE'],
      compliance: ['PR'],
    },
  },
  openAttribution: {
    label: 'Open with attribution',
    problem: 'I want broad collaboration, but I still want credit.',
    outcome: 'Keeps the license close to permissive source-sharing with attribution and patent comfort.',
    state: PRESETS['PLF-Open'].state,
  },
  internalEnterprise: {
    label: 'Internal enterprise only',
    problem: 'I want companies to evaluate or use this internally, not ship it outward.',
    outcome: 'Allows internal commercial use while blocking external redistribution, public hosting, and resale.',
    state: {
      core: 'C2',
      attribution: 'A3',
      commercial: 'IC',
      modification: 'M1',
      redistribution: 'R0',
      derivative: [],
      resale: 'NR',
      ai: 'LA',
      ethics: ['NS'],
      branding: 'BP',
      hosting: 'S1',
      network: 'None',
      patent: 'P3',
      education: [],
      compliance: ['PR', 'AU', 'SR'],
    },
  },
};
const LINEAGE_NOTES = [
  'Warranty and liability language is adapted from Apache-2.0 style permissive-license boilerplate.',
  'Network reciprocity modules are modeled on the AGPLv3 idea that remote users should get source-related rights.',
  'File-difference and modification notice concepts are inspired by file-level copyleft patterns such as MPL-style change notices.',
  'The presentation model follows the Creative Commons pattern of legal code, a human-readable summary, and machine-readable metadata.',
];

const NONE_SUMMARIES = {
  attribution: 'No extra attribution duty is added beyond the core and any other active clauses.',
  commercial: 'Commercial treatment is controlled only by the core grant and other selected modules.',
  modification: 'Modification rules are left to the core grant and any derivative obligations you choose.',
  redistribution: 'Redistribution is governed only by the core grant and related downstream clauses.',
  resale: 'No standalone resale rule is added here.',
  ai: 'No extra AI-training rule is added here.',
  branding: 'No standalone branding rule is added here.',
  hosting: 'No standalone hosted-service rule is added here.',
  network: 'No extra network reciprocity obligation is added here.',
  patent: 'No explicit patent term is added here.',
};

const OPTION_SUMMARIES = {
  C1: 'A broad baseline that can be narrowed or conditioned by the modules you add.',
  C2: 'A baseline focused on internal use and internal modification, not open redistribution.',
  C3: 'A strict inspection-and-viewing baseline with almost no default downstream rights.',
  C4: 'Best for pilots, evaluations, interoperability checks, and internal prototypes.',
  C5: 'A community-oriented baseline that defaults to non-commercial sharing and improvement.',

  A: 'Requires normal attribution and license notice retention when the work is shared.',
  A2: 'Requires attribution to be visible and prominent in public-facing use.',
  A3: 'Requires a NOTICE file or equivalent attribution appendix to travel with the work.',
  A4: 'Makes downstream modifiers clearly identify themselves as modifiers.',
  A5: 'Requires a visible attribution notice when the work is used over a network or SaaS.',

  NC: 'Blocks monetized or commercial use of the work.',
  MC: 'Allows commercial use, subject to the rest of the selected restrictions.',
  IC: 'Allows commercial entities to use the work internally, but not resell or expose it outward.',
  SM: 'Allows commercial use only for small teams or small businesses.',
  CW: 'Allows the work to be used in paid client services without turning it into a standalone product.',

  M0: 'No one may alter the work or distribute modified versions.',
  M1: 'People may modify privately, but cannot share those modified versions externally.',
  M2: 'People may create and distribute modified versions, subject to the rest of the license.',
  M3: 'Public modifications must be shared as patches rather than as full modified copies.',
  M4: 'People may build integrations and add-ons, but not ship a modified core.',

  R0: 'The work cannot be redistributed to third parties.',
  R1: 'Only exact unmodified copies may be shared downstream.',
  R2: 'Redistribution is allowed, subject to the rest of the license.',
  R3: 'Redistribution is allowed only when source form is provided.',
  R4: 'Redistribution is limited to named, tracked, or auditable recipients.',

  SA: 'Modified versions must stay under the exact same PLF variant.',
  SD: 'Anyone shipping compiled derivatives must also provide editable source.',
  FD: 'Modified files must say what changed and when.',
  MN: 'Modified forks must be clearly renamed or relabeled.',
  OC: 'Downstream modifiers must offer significant changes back to the original licensor.',

  NR: 'No one may sell the work itself.',
  LR: 'Selling is allowed only when the work is part of something larger or materially transformed.',
  FR: 'Selling and fee-based distribution are allowed.',
  CR: 'Only cost-recovery fees are allowed; profit-taking on the work itself is blocked.',
  BS: 'The work can be sold only as a bundled part of a larger offering.',

  NT: 'Prevents the work from being used to train or evaluate machine-learning systems.',
  AT: 'AI training is outside the license unless the licensor separately approves it.',
  OA: 'AI and ML use is openly allowed.',
  RA: 'AI use is limited to non-commercial research settings.',
  LA: 'AI use is limited to private or local model work, not public hosted AI services.',

  HM: 'Blocks use in weapons, offensive military systems, or lethal targeting.',
  NS: 'Blocks surveillance, profiling, and non-consensual biometric monitoring.',
  HE: 'Blocks use tied to human-rights abuses or civil-rights violations.',
  DS: 'Blocks disinformation, synthetic manipulation, and deceptive influence campaigns.',
  BX: 'Blocks biometric monetization or profiling without informed consent.',

  BU: 'Allows truthful factual references to the licensor’s branding.',
  BN: 'Allows only minimal nominative references for compatibility or origin.',
  BR: 'Mostly restricts trademark and brand use except for basic origin references.',
  BP: 'Requires separate written permission for branding use.',
  WL: 'Prevents downstream parties from white-labeling or disguising the origin.',

  S0: 'Prevents the work from being offered as a hosted service.',
  S1: 'Allows hosting only for internal company use.',
  S2: 'Allows public SaaS or hosted-service use.',
  S3: 'Allows hosted use only for named customers or controlled client environments.',
  S4: 'Allows managed-service hosting only with separate permission or partnership terms.',

  N1: 'Hosted users must be given a source offer for the service implementation.',
  N2: 'Operators must disclose material service-side modifications.',
  N3: 'Hosted deployments must publish clear legal and operator notices for the service.',
  N4: 'Hosted deployments must show a visible legal banner to end users.',
  N5: 'Hosted users must be given a reasonable path to export key migration-related data.',

  P0: 'No patent rights are granted.',
  P1: 'Grants a limited patent license tied to the work and terminates on patent aggression.',
  P2: 'Grants a broader patent license, but cuts it off if the licensee turns aggressive.',
  P3: 'Gives a narrower non-assert comfort zone mainly for evaluation use.',
  P4: 'Suspends patent rights if the licensee launches offensive patent claims around the work.',

  ED: 'Lets educators reuse the work in non-profit teaching contexts.',
  CE: 'Prevents turning the work into a competing commercial course or curriculum.',
  RE: 'Allows non-commercial research reuse, adaptation, and study.',
  CL: 'Allows classroom display, demos, and instruction use.',
  SC: 'Lets students keep copies for study or course participation.',

  EX: 'Requires downstream use to respect export controls and sanctions rules.',
  PR: 'Requires privacy-law compliance when the work processes personal data.',
  AU: 'Requires operators to keep records showing how they complied with the license.',
  SR: 'Requires a security review before high-risk deployment.',
  TR: 'Requires transparency reporting in large-scale or sensitive public deployments.',
};

const getOptionSummary = (categoryId, optionValue) => {
  if (optionValue === 'None') {
    return NONE_SUMMARIES[categoryId] ?? 'No additional clause is added for this factor.';
  }

  return OPTION_SUMMARIES[optionValue] ?? 'This option changes the legal effect of the chosen factor.';
};

export default function App() {
  const [state, setState] = useState(PRESETS['PLF-Protected'].state);
  const [selectedPreset, setSelectedPreset] = useState('PLF-Protected');
  const [copied, setCopied] = useState(false);

  const activeModules = useMemo(() => {
    const modules = [];

    if (state.attribution !== 'None') modules.push(state.attribution);
    if (state.commercial !== 'None') modules.push(state.commercial);
    if (state.modification !== 'None') modules.push(state.modification);
    if (state.redistribution !== 'None') modules.push(state.redistribution);
    modules.push(...state.derivative);
    if (state.resale !== 'None') modules.push(state.resale);
    if (state.ai !== 'None') modules.push(state.ai);
    modules.push(...state.ethics);
    if (state.branding !== 'None') modules.push(state.branding);
    if (state.hosting !== 'None') modules.push(state.hosting);
    if (state.network !== 'None') modules.push(state.network);
    if (state.patent !== 'None') modules.push(state.patent);
    modules.push(...state.education);
    modules.push(...state.compliance);

    return modules;
  }, [state]);

  const licenseCode = `PLF-1.0-${state.core}${activeModules.length > 0 ? `-${activeModules.join('-')}` : ''}`;
  const spdxLicenseRef = `LicenseRef-${licenseCode}`;
  const deedBullets = useMemo(() => {
    const bullets = [
      `Core grant: ${OPTION_SUMMARIES[state.core]}`,
    ];

    CATEGORIES.forEach((category) => {
      if (category.id === 'core') {
        return;
      }

      if (category.type === 'radio') {
        const selectedValue = state[category.id];

        if (selectedValue !== 'None') {
          bullets.push(`${category.title}: ${getOptionSummary(category.id, selectedValue)}`);
        }
      } else {
        state[category.id].forEach((value) => {
          bullets.push(`${category.title}: ${getOptionSummary(category.id, value)}`);
        });
      }
    });

    return bullets;
  }, [state]);
  const compatibilityRows = useMemo(() => {
    const hasStrongReciprocity =
      state.derivative.includes('SA') ||
      state.derivative.includes('SD') ||
      state.network !== 'None';
    const hasClosedControls =
      state.commercial === 'NC' ||
      state.redistribution === 'R0' ||
      state.hosting === 'S0' ||
      state.resale === 'NR';

    return [
      {
        ecosystem: 'MIT / BSD codebases',
        status: hasStrongReciprocity ? 'Review Required' : 'Generally Low Friction',
        detail: hasStrongReciprocity
          ? 'Permissive code can often be combined inbound, but your reciprocal or disclosure clauses will likely govern the PLF-covered portion on the way out.'
          : 'Permissive inbound code is usually the easiest fit when the PLF variant has fewer reciprocal obligations.',
      },
      {
        ecosystem: 'Apache-2.0 codebases',
        status: state.patent === 'P0' ? 'Review Required' : 'Generally Low Friction',
        detail: state.patent === 'P0'
          ? 'Apache projects expect explicit patent comfort, so a no-patent PLF variant needs closer review.'
          : 'Apache-style notice and patent expectations are usually easier to explain with the balanced or open presets.',
      },
      {
        ecosystem: 'GPL / AGPL codebases',
        status: 'High Review Burden',
        detail: 'Strong copyleft and strong-custom obligations can collide. Treat GPL and AGPL combinations as counsel-review territory unless you intentionally design the integration boundary.',
      },
      {
        ecosystem: 'Proprietary combined products',
        status: hasClosedControls ? 'Possible but Constrained' : 'Case by Case',
        detail: hasClosedControls
          ? 'Internal use or bundled distribution may still be possible, but resale, SaaS, or AI restrictions can sharply limit outbound commercial packaging.'
          : 'Proprietary combination is often possible, but the selected modules still need an explicit inbound/outbound review before approval.',
      },
    ];
  }, [state]);
  const consequenceSummary = useMemo(() => {
    const allowed = [];
    const blocked = [];
    const obligations = [];
    const review = [];

    if (state.commercial === 'MC') {
      allowed.push('Commercial use is allowed, but only inside the other selected guardrails.');
    }
    if (state.commercial === 'SM') {
      allowed.push('Small studios and independent developers can use this commercially by default.');
      review.push('Large-company use should be handled through a separate permission path.');
    }
    if (state.commercial === 'IC') {
      allowed.push('Companies can use the work internally.');
      blocked.push('External commercial distribution is not part of the default grant.');
    }
    if (state.commercial === 'CW') {
      allowed.push('Paid client-service work is allowed when the work is not sold as a standalone product.');
    }
    if (state.commercial === 'NC') {
      blocked.push('Commercial monetization is blocked unless the licensor gives separate permission.');
    }

    if (state.modification === 'M2') {
      allowed.push('Modified versions can be created and shared if the selected downstream duties are followed.');
    }
    if (state.modification === 'M1') {
      allowed.push('Private or internal modifications are allowed.');
      blocked.push('Sharing modified versions outside the organization is blocked.');
    }
    if (state.modification === 'M0') {
      blocked.push('Changing the work or shipping modified versions is blocked.');
    }

    if (state.redistribution === 'R2') {
      allowed.push('Redistribution is allowed subject to the rest of this variant.');
    }
    if (state.redistribution === 'R0') {
      blocked.push('Redistribution to third parties is blocked.');
    }
    if (state.redistribution === 'R3') {
      obligations.push('Redistributors must provide source form rather than object-only packages.');
    }
    if (state.redistribution === 'R4') {
      obligations.push('Redistribution should be limited to tracked or registered recipients.');
    }

    if (state.ai === 'NT') {
      blocked.push('AI training, fine-tuning, benchmarking, and evaluation are blocked.');
    }
    if (state.ai === 'AT') {
      blocked.push('AI training is not granted by default and requires separate written permission.');
    }
    if (state.ai === 'RA') {
      allowed.push('Non-commercial research AI use is allowed.');
      blocked.push('Production or monetized AI use remains outside the default grant.');
    }
    if (state.ai === 'LA') {
      allowed.push('Local private AI experiments are allowed.');
      blocked.push('Hosted, shared, or customer-facing AI use is blocked.');
    }
    if (state.ai === 'OA') {
      allowed.push('AI and machine-learning use are allowed.');
    }

    if (state.hosting === 'S0') {
      blocked.push('Public SaaS or hosted-service clones are blocked.');
    }
    if (state.hosting === 'S1') {
      allowed.push('Internal hosting is allowed for employees and authorized contractors.');
      blocked.push('External hosted service access is blocked.');
    }
    if (state.hosting === 'S2') {
      allowed.push('Public hosted-service use is allowed.');
    }
    if (state.hosting === 'S3') {
      allowed.push('Hosted deployments are limited to named customers or controlled client instances.');
      review.push('General multi-tenant SaaS use needs closer review or separate permission.');
    }
    if (state.hosting === 'S4') {
      review.push('Managed-service hosting requires separate permission or a commercial arrangement.');
    }

    if (state.resale === 'NR') {
      blocked.push('Standalone resale of the work is blocked.');
    }
    if (state.resale === 'BS') {
      allowed.push('Bundled resale is allowed when the work is not the primary standalone value.');
    }
    if (state.resale === 'CR') {
      allowed.push('Cost-recovery fees are allowed.');
      blocked.push('Profit-taking on the work itself is blocked.');
    }
    if (state.resale === 'FR') {
      allowed.push('Paid resale and fee-based distribution are allowed.');
    }

    if (state.attribution !== 'None') {
      obligations.push(getOptionSummary('attribution', state.attribution));
    }
    state.derivative.forEach((value) => {
      obligations.push(getOptionSummary('derivative', value));
    });
    if (state.network !== 'None') {
      obligations.push(getOptionSummary('network', state.network));
    }
    state.compliance.forEach((value) => {
      obligations.push(getOptionSummary('compliance', value));
    });
    if (state.branding === 'WL' || state.branding === 'BP' || state.branding === 'BR') {
      obligations.push(getOptionSummary('branding', state.branding));
    }

    if (state.patent === 'P0' || state.patent === 'None') {
      review.push('Patent comfort is limited; counsel may want to review patent exposure.');
    }
    if (state.network !== 'None' || state.derivative.includes('SA') || state.derivative.includes('SD')) {
      review.push('Reciprocity or disclosure duties are active, so outbound product review matters.');
    }

    return {
      allowed: allowed.length > 0 ? allowed : ['The core grant controls the main permissions for this variant.'],
      blocked: blocked.length > 0 ? blocked : ['No major use category is explicitly blocked beyond the selected legal text.'],
      obligations: obligations.length > 0 ? obligations : ['No major downstream operational obligation is selected beyond the core license text.'],
      review: review.length > 0 ? review : ['This configuration has no obvious high-friction review flag from the current guidance rules.'],
    };
  }, [state]);
  const conflictWarnings = useMemo(() => {
    const warnings = [];

    if (state.modification === 'M0' && state.derivative.length > 0) {
      warnings.push({
        title: 'No Modification conflicts with derivative obligations.',
        detail: 'You selected derivative-work duties even though modification is prohibited. Those downstream obligations may be ineffective or confusing because no modified versions can be lawfully distributed.',
      });
    }

    if (['MC', 'SM', 'CW'].includes(state.commercial) && state.resale === 'NR') {
      warnings.push({
        title: 'Commercial Use conflicts with No Resale.',
        detail: 'You allow some commercial activity, but you also prohibit selling the work itself. That can be valid, but many users will read it as contradictory unless the distinction is explained clearly.',
      });
    }

    if (state.commercial === 'NC' && ['LR', 'FR', 'CR', 'BS'].includes(state.resale)) {
      warnings.push({
        title: 'Non-Commercial Use conflicts with the selected resale clause.',
        detail: 'The commercial prohibition points one way while the resale clause points another. This should be narrowed or clarified before relying on the variant publicly.',
      });
    }

    if (state.redistribution === 'R0' && ['LR', 'FR', 'CR', 'BS'].includes(state.resale)) {
      warnings.push({
        title: 'No Redistribution conflicts with the selected resale clause.',
        detail: 'Resale presumes some downstream transfer, but the redistribution clause blocks that transfer outright.',
      });
    }

    if (state.hosting === 'S0' && state.network !== 'None') {
      warnings.push({
        title: 'No Hosted Service conflicts with Network Reciprocity.',
        detail: 'You added network-service duties even though hosted service use is prohibited. Those obligations would only matter if hosted deployment is otherwise allowed.',
      });
    }

    if (state.core === 'C3' && (state.modification !== 'None' || state.redistribution !== 'None' || state.hosting !== 'None')) {
      warnings.push({
        title: 'View-Only Core may conflict with downstream expansion modules.',
        detail: 'C3 is a strict inspection-only baseline, while your selected modules reopen modification, redistribution, or hosting pathways. Review the final text carefully to ensure the relationship is explicit.',
      });
    }

    return warnings;
  }, [state]);

  const applyPreset = (presetName) => {
    setState(PRESETS[presetName].state);
    setSelectedPreset(presetName);
  };

  const applyIntent = (intentKey) => {
    const intent = INTENT_PATHS[intentKey];

    setState(intent.state);
    setSelectedPreset(`Intent: ${intent.label}`);
  };

  const handleRadio = (categoryId, value) => {
    setSelectedPreset('Custom');
    setState((prev) => ({ ...prev, [categoryId]: value }));
  };

  const handleCheckbox = (categoryId, value) => {
    setSelectedPreset('Custom');
    setState((prev) => {
      const current = prev[categoryId];

      if (current.includes(value)) {
        return { ...prev, [categoryId]: current.filter((item) => item !== value) };
      }

      return { ...prev, [categoryId]: [...current, value] };
    });
  };

  const copyToClipboard = async () => {
    const textToCopy = document.getElementById('license-output')?.innerText ?? '';

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy license text:', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-slate-900 text-white p-6 shadow-md z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <ShieldCheck size={32} className="text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Prism License Framework</h1>
            <p className="text-slate-400 text-sm">A post-AI era license generator for creators who want commercial reuse without surrendering model-training rights</p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full flex flex-col lg:flex-row overflow-hidden">
        <aside className="w-full lg:w-[38%] bg-white border-r border-slate-200 overflow-y-auto p-6 shadow-[inset_-10px_0_20px_-20px_rgba(0,0,0,0.1)]">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 text-slate-800">
            <Info size={18} /> Configure Factors
          </h2>
          <p className="mb-6 text-sm text-slate-500">
            {FACTOR_COUNT} factors and {OPTION_COUNT} selectable positions. Each factor now includes at least five choices.
          </p>

          <div className="mb-8 rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">Start with the problem</p>
            <p className="mt-1 text-xs text-slate-500">
              Pick the thing you are trying to prevent, then refine the legal structure below.
            </p>
            <div className="mt-4 space-y-3">
              {Object.entries(INTENT_PATHS).map(([intentKey, intent]) => {
                const isActive = selectedPreset === `Intent: ${intent.label}`;

                return (
                  <button
                    key={intentKey}
                    type="button"
                    onClick={() => applyIntent(intentKey)}
                    className={`w-full rounded-lg border px-3 py-3 text-left transition-colors ${isActive ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'}`}
                  >
                    <span className="block text-sm font-semibold text-slate-900">{intent.problem}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-500">{intent.outcome}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Golden presets</p>
            <p className="mt-1 text-xs text-slate-500">
              Push most users toward canonical configurations that legal teams can pre-review once.
            </p>
            <div className="mt-4 space-y-3">
              {Object.entries(PRESETS).map(([presetName, preset]) => {
                const isActive = selectedPreset === presetName;

                return (
                  <button
                    key={presetName}
                    type="button"
                    onClick={() => applyPreset(presetName)}
                    className={`w-full rounded-lg border px-3 py-3 text-left transition-colors ${isActive ? 'border-blue-300 bg-blue-50' : 'border-slate-200 bg-white hover:bg-slate-100'}`}
                  >
                    <span className="block text-sm font-semibold text-slate-900">{presetName}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-500">{preset.description}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Active selection: <span className="font-semibold text-slate-700">{selectedPreset}</span>
            </p>
          </div>

          <div className="space-y-8">
            {CATEGORIES.map((category) => (
              <div key={category.id} className="border-b border-slate-100 pb-6 last:border-0">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.options.map((option) => {
                    const isChecked =
                      category.type === 'radio'
                        ? state[category.id] === option.val
                        : state[category.id].includes(option.val);
                    const summary = getOptionSummary(category.id, option.val);

                    return (
                      <label
                        key={option.val}
                        className={`flex items-start gap-3 p-2 rounded cursor-pointer transition-colors ${isChecked ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}
                      >
                        <input
                          type={category.type}
                          name={category.id}
                          value={option.val}
                          checked={isChecked}
                          onChange={() =>
                            category.type === 'radio'
                              ? handleRadio(category.id, option.val)
                              : handleCheckbox(category.id, option.val)
                          }
                          className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ${category.type === 'radio' ? 'rounded-full' : 'rounded'}`}
                        />
                        <span className="flex-1">
                          <span className={`block text-sm ${isChecked ? 'text-blue-900 font-medium' : 'text-slate-600'}`}>
                            {option.label}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-slate-500">
                            {summary}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="w-full lg:w-[62%] bg-slate-100 p-4 lg:p-8 overflow-y-auto relative flex flex-col">
          <div className="mb-4 rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-800 shadow-sm">
            <p className="font-semibold text-slate-900">Why PLF exists</p>
            <p className="mt-2 text-slate-600">
              Traditional licenses were built for an older software economy. PLF is designed for the post-AI era, where creators may want to allow commercial use while still blocking model training, SaaS cloning, white-label resale, or uncredited extraction.
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 gap-3 flex-wrap">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-mono font-bold text-sm border border-blue-200 shadow-sm break-all">
              {licenseCode}
            </div>
            <button
              type="button"
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 px-4 py-2 rounded-md text-sm font-medium text-slate-700 transition-colors shadow-sm"
            >
              {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy License Text'}
            </button>
          </div>

          <div className="mb-4 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-4 text-sm text-indigo-950 shadow-sm">
            <p className="font-semibold">Because you selected this</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                ['Allowed', consequenceSummary.allowed],
                ['Blocked', consequenceSummary.blocked],
                ['Required', consequenceSummary.obligations],
                ['Review before use', consequenceSummary.review],
              ].map(([title, items]) => (
                <div key={title} className="border-t border-indigo-200 pt-3">
                  <p className="font-medium">{title}</p>
                  <ul className="mt-2 space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-indigo-900/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-950 shadow-sm">
            <p className="font-semibold">SPDX interoperability</p>
            <p className="mt-1">
              Until PLF is added to the SPDX License List, use a custom SPDX identifier in source headers and include the corresponding full license text in your repository.
            </p>
            <p className="mt-3 font-mono text-xs sm:text-sm break-all">
              SPDX-License-Identifier: {spdxLicenseRef}
            </p>
            <p className="mt-3">
              For <code>package.json</code>, prefer npm-compatible metadata:
            </p>
            <p className="mt-2 font-mono text-xs sm:text-sm break-all">
              &quot;license&quot;: &quot;SEE LICENSE IN LICENSE&quot;
            </p>
          </div>

          <div className="mb-4 rounded-xl border border-sky-200 bg-sky-50 px-4 py-4 text-sm text-sky-950 shadow-sm">
            <p className="font-semibold">Clause lineage</p>
            <div className="mt-3 space-y-2">
              {LINEAGE_NOTES.map((note) => (
                <p key={note} className="text-sky-900/85">
                  {note}
                </p>
              ))}
            </div>
          </div>

          {conflictWarnings.length > 0 ? (
            <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-4 text-sm text-rose-950 shadow-sm">
              <div className="flex items-start gap-3">
                <AlertTriangle size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Conflict detection</p>
                  <div className="mt-3 space-y-3">
                    {conflictWarnings.map((warning) => (
                      <div key={warning.title}>
                        <p className="font-medium">⚠ {warning.title}</p>
                        <p className="mt-1 text-rose-900/80">{warning.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-950 shadow-sm">
            <p className="font-semibold">Compatibility snapshot</p>
            <p className="mt-1 text-emerald-900/80">
              Guidance for inbound/outbound review. This is a triage aid for legal teams, not a substitute for counsel.
            </p>
            <div className="mt-4 space-y-3">
              {compatibilityRows.map((row) => (
                <div key={row.ecosystem} className="rounded-lg border border-emerald-200 bg-white/70 px-3 py-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{row.ecosystem}</p>
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold uppercase tracking-wide">
                      {row.status}
                    </span>
                  </div>
                  <p className="mt-2 text-emerald-900/80">{row.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="license-output"
            className="bg-white p-8 lg:p-12 rounded-xl shadow-sm border border-slate-200 flex-1 overflow-y-auto prose prose-slate max-w-none text-slate-800"
          >
            <div className="text-center mb-10 border-b pb-8">
              <h1 className="text-3xl font-bold mb-2 text-slate-900">Prism License Framework</h1>
              <h2 className="text-xl text-slate-600 font-mono tracking-tight">Variant: {licenseCode}</h2>
              <p className="mt-4 text-sm text-slate-500 font-bold uppercase tracking-widest">
                Terms and Conditions for Use, Reproduction, Distribution, and Deployment
              </p>
            </div>

            <p className="text-sm italic mb-8 font-medium">
              By exercising any permissions granted herein, You accept and agree to be bound by the terms and conditions of this License. If You do not agree to these terms, You are not granted any rights to the Work and must immediately cease all use, distribution, and deployment.
            </p>

            <h3 className="text-lg font-bold border-b border-slate-200 pb-2 mb-4">Human-Readable Deed</h3>
            <p className="mb-4 text-sm text-slate-600">
              Preset: <strong>{selectedPreset}</strong>. This plain-English summary is designed for managers, compliance teams, and procurement reviewers before they dive into the legal code.
            </p>
            <ul className="list-none pl-0 mb-8 space-y-3 text-sm text-slate-700">
              {deedBullets.map((bullet) => (
                <li key={bullet} className="rounded border border-slate-200 bg-slate-50 px-4 py-3">
                  {bullet}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold border-b border-slate-200 pb-2 mb-4">1. Definitions</h3>
            <ul className="list-none pl-0 mb-8 space-y-3 text-sm text-slate-700">
              <li><strong>&quot;License&quot;</strong> shall mean the terms and conditions for use, reproduction, distribution, deployment, and related obligations as defined by this document.</li>
              <li><strong>&quot;Licensor&quot;</strong> shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.</li>
              <li><strong>&quot;Legal Entity&quot;</strong> shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity.</li>
              <li><strong>&quot;You&quot; (or &quot;Licensee&quot;)</strong> shall mean an individual or Legal Entity exercising permissions granted by this License.</li>
              <li><strong>&quot;Work&quot;</strong> shall mean the work of authorship, whether in Source or Object form, made available under the License.</li>
              <li><strong>&quot;Derivative Work&quot;</strong> shall mean any work, whether in Source or Object form, that is based on or derived from the Work and for which the modifications represent, as a whole, an original work of authorship.</li>
              <li><strong>&quot;Source&quot; form</strong> shall mean the preferred form for making modifications, including software source code, documentation source, configuration files, and editable assets.</li>
              <li><strong>&quot;Object&quot; form</strong> shall mean any form resulting from mechanical transformation or translation of a Source form, including compiled binaries, generated documents, and packaged artifacts.</li>
            </ul>

            <h3 className="text-lg font-bold border-b border-slate-200 pb-2 mb-4">2. Core Grant of Rights ({state.core})</h3>
            <p className="mb-8 text-sm text-slate-700 leading-relaxed text-justify">{LEGAL_TEXT.core[state.core]}</p>

            <h3 className="text-lg font-bold border-b border-slate-200 pb-2 mb-4">3. Conditions and Specific Restrictions</h3>
            {activeModules.length === 0 ? (
              <p className="mb-8 text-sm text-slate-500 italic">No additional restriction modules are applied to this variant.</p>
            ) : (
              <ul className="list-none pl-0 mb-8 space-y-4">
                {activeModules.map((moduleCode) => (
                  <li
                    key={moduleCode}
                    className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded border border-slate-200 shadow-sm text-justify"
                  >
                    <span>{LEGAL_TEXT.modules[moduleCode]}</span>
                  </li>
                ))}
              </ul>
            )}

            <h3 className="text-lg font-bold border-b border-slate-200 pb-2 mb-4">4. General Provisions</h3>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed text-justify">
              <p>
                <strong>4.1 Reservation of Rights:</strong> All rights not expressly and unambiguously granted by the Licensor herein are entirely reserved. This License does not transfer or assign any ownership of copyrights, patents, trademarks, or other intellectual property rights.
              </p>
              <p>
                <strong>4.2 Termination:</strong> This License and the rights granted hereunder will terminate automatically upon any breach by You of the terms of this License. Individuals or entities who have received compliant copies or Derivative Works from You will not have their licenses terminated, provided such individuals or entities remain in full compliance with the applicable License variant.
              </p>
              <p className="uppercase text-xs tracking-wider font-semibold text-slate-600 mt-6">
                4.3 Disclaimer of Warranty:
              </p>
              <p className="uppercase text-xs text-slate-500 leading-relaxed">
                Unless required by applicable law or agreed to in writing, Licensor provides the Work on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including without limitation any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
              </p>
              <p className="uppercase text-xs tracking-wider font-semibold text-slate-600 mt-4">
                4.4 Limitation of Liability:
              </p>
              <p className="uppercase text-xs text-slate-500 leading-relaxed">
                In no event and under no legal theory, whether in tort, contract, or otherwise, unless required by applicable law or agreed to in writing, shall any Licensor or Contributor be liable to You for damages arising as a result of this License or out of the use or inability to use the Work.
              </p>
              <p className="mt-6">
                <strong>4.5 Severability:</strong> If any provision of this License is held to be invalid, illegal, or unenforceable, such invalidity shall not affect the enforceability of the remaining provisions, which shall remain in force to the maximum extent permitted by law.
              </p>
              <p>
                <strong>4.6 Entire Agreement:</strong> This License constitutes the entire agreement between the parties with respect to the Work except where the Licensor has separately granted written commercial, hosting, trademark, or patent permissions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
