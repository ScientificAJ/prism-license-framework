import { useMemo, useState } from 'react';
import { Check, Copy, Info, ShieldCheck } from 'lucide-react';

const LEGAL_TEXT = {
  core: {
    C1: 'Subject to the terms and conditions of this License, Licensor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form. The foregoing grant is expressly made subject to, and conditioned upon, Your strict compliance with all active Modules enumerated in Section 3.',
    C2: 'Subject to the terms and conditions of this License, Licensor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce and prepare Derivative Works of the Work solely for Your internal business operations or private use. No right or license is granted to distribute, publicly display, or externally transmit the Work or Derivative Works in either Source or Object form, unless expressly permitted by an active Module in Section 3.',
    C3: 'Subject to the terms and conditions of this License, Licensor hereby grants to You a worldwide, non-exclusive, no-charge, royalty-free, revocable license strictly limited to the internal inspection, execution, and viewing of the Work. You are expressly prohibited from reproducing (except for transient technical caches necessary for viewing), modifying, distributing, or exercising any other rights reserved under applicable copyright law, absent specific and overriding authorization in Section 3.',
  },
  modules: {
    A: 'Attribution (A): As a material condition of this License, You must retain, in all copies or substantial portions of the Work or Derivative Works distributed by You, all copyright, patent, trademark, and attribution notices from the Source form of the Work. You must provide a copy of this License (or a URI/hyperlink referring to it) to any recipients of the Work. You may not use the attribution to implicitly or explicitly assert or imply any connection with, sponsorship by, or endorsement by the Licensor.',
    NC: 'Non-Commercial Only (NC): Notwithstanding any other provision, no right or license is granted to exercise the Licensed rights for any Commercial Purpose. "Commercial Purpose" shall mean any use primarily intended for or directed toward commercial advantage or private monetary compensation, including but not limited to the sale of the Work or the incorporation of the Work into a commercially distributed product or service.',
    MC: 'Commercial Use Allowed (MC): You are explicitly authorized to exercise the granted rights for Commercial Purposes, provided that such utilization remains strictly subordinate to, and compliant with, all other Modules enumerated herein.',
    IC: 'Internal Commercial Use Only (IC): Commercial entities are granted permission to internally deploy, execute, and reproduce the Work exclusively to support internal business operations. You shall not sell, sublicense, distribute, or make the Work available to external third parties as a standalone product, hosted service, or material component of a commercially distributed product.',
    M0: 'No Modification (M0): You are strictly prohibited from altering, translating, adapting, or creating any Derivative Works from the Work. Any redistribution must be of the Work in its exact, original, and unmodified state.',
    M1: 'Private Modification Allowed (M1): You may create Derivative Works solely for internal, private, or organizational testing and operational purposes. Under no circumstances may such Derivative Works be distributed, transmitted, or made accessible to any external third party.',
    M2: 'Public Modification Allowed (M2): You are expressly permitted to create, reproduce, and publicly distribute Derivative Works, subject strictly to the conditions, obligations, and limitations established by all other active Modules herein.',
    R0: 'No Redistribution (R0): You are strictly prohibited from distributing, sublicensing, sharing, publicly displaying, or otherwise transmitting the Work or any Derivative Works, in whole or in part, to any third party.',
    R1: 'Unmodified Redistribution Only (R1): You may distribute exact, unmodified, bit-for-bit identical copies of the Work. The distribution, public transmission, or sublicensing of modified versions, fragments, or Derivative Works is strictly prohibited.',
    R2: 'Redistribution Allowed (R2): You are permitted to distribute the Work and any authorized Derivative Works, subject strictly to the obligations and limitations established by all other active Modules herein.',
    SA: 'Share Alike Required (SA): If You distribute or publicly display a Derivative Work, You must license that entire Derivative Work, as a whole, under the exact same Prism License Framework variant (including the identical Core and all identical Modules) as this original Work. You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License.',
    SD: 'Source Disclosure on Derivatives (SD): If You distribute any Derivative Works in Object form, You must simultaneously provide the complete, machine-readable, and editable Source form of the Derivative Work to the recipients at no additional charge, under the terms of this License.',
    FD: 'File Difference Disclosure (FD): You must cause any modified files to carry prominent notices stating that You changed the files, detailing the specific substantive alterations made, and indicating the exact dates of such modifications.',
    NR: 'No Resale (NR): You shall not sell, lease, rent, or bundle the Work (or authorized Derivative Works) for any direct or indirect monetary fee. The Work may not be repackaged or sublicensed in any transaction where the Work itself constitutes the primary standalone value.',
    LR: 'Limited Resale (LR): Resale of the Work or Derivative Works is permitted only on the condition that You have materially transformed the Work or integrated it into a larger proprietary system, such that the original Work does not constitute the primary standalone value of the product being sold.',
    FR: 'Free Resale (FR): You are permitted to sell, license for a fee, or otherwise commercially distribute the Work or Derivative Works, subject strictly to the limitations established by all other active Modules herein.',
    NT: 'No AI Training (NT): Notwithstanding any other provision of this License, no right or license is granted to utilize, ingest, scrape, or process the Work, or any portions thereof, for the purpose of training, fine-tuning, evaluating, benchmarking, distilling, or otherwise developing artificial intelligence systems, large language models, neural networks, or machine learning algorithms.',
    AT: 'AI Training by Permission Only (AT): Any utilization of the Work for machine learning or artificial intelligence training, evaluation, or benchmarking is entirely outside the scope of this License and requires separate, prior, and explicit written consent from the Licensor.',
    OA: 'Open AI Use Allowed (OA): You are explicitly permitted to ingest, process, and utilize the Work for the purposes of machine learning training, algorithmic evaluation, and artificial intelligence model development.',
    HM: 'No Harmful Military Use (HM): You shall not exercise any rights under this License in connection with the design, development, testing, deployment, or operation of weapons, lethal targeting systems, combat optimization software, offensive military infrastructure, or any system whose primary intended outcome is physical injury, death, or severe environmental destruction.',
    NS: 'No Surveillance Use (NS): You shall not utilize the Work in the development or deployment of systems intended for mass public surveillance, biometric identification without explicit individual consent, predictive policing, unlawful digital tracking, or systemic population profiling.',
    HE: 'High-Risk Ethical Restriction (HE): You shall not utilize the Work in any capacity that materially facilitates or supports human rights violations, human trafficking, forced labor, state repression, unlawful discrimination, or the subversion of democratic civil rights.',
    BU: "Branding Use Allowed (BU): You may use Licensor's trade names, trademarks, or product names solely in truthful, factual, and non-deceptive references to identify the origin of the Work, provided such use does not imply any official endorsement, sponsorship, or affiliation.",
    BR: "Branding Restricted (BR): This License does not grant permission to use the trade names, trademarks, service marks, logos, or domain names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file or attribution headers.",
    BP: "Branding by Permission Only (BP): This License grants absolutely no rights to use the Licensor's trademarks, trade names, or branding. Any such use requires a separate, fully executed written trademark license agreement.",
    S0: 'No Hosted Service Use (S0): You shall not deploy, host, or otherwise make the functionality of the Work available to third parties over a network as a hosted service, including but not limited to Software-as-a-Service (SaaS), Platform-as-a-Service (PaaS), Application Service Provider (ASP) models, or remote API access.',
    S1: 'Internal Hosting Allowed (S1): You may deploy and host the Work via a network exclusively for use by the internal end-users, employees, and authorized contractors of Your immediate Legal Entity.',
    S2: 'Public Hosting Allowed (S2): You may deploy and offer the Work as a network-accessible hosted service or SaaS to external third parties, subject strictly to the limitations established by all other active Modules herein.',
    P0: 'No Patent License Granted (P0): This License does not grant, expressly or by implication, estoppel, or otherwise, any rights under any patent covering the Work or any portions thereof.',
    P1: 'Limited Patent License Granted (P1): Subject to the terms and conditions of this License, Licensor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by Licensor that are necessarily infringed by their contribution(s) alone or by combination of their contribution(s) with the Work. If You institute patent litigation against any entity alleging that the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.',
    ED: 'Educational Reuse Allowed (ED): Accredited educational institutions and educators are expressly permitted to copy, adapt, and present the Work for non-profit pedagogical and teaching purposes, overriding standard commercial restrictions strictly within the context of a classroom.',
    CE: 'Course Extraction Restricted (CE): You shall not extract, adapt, or repackage the Work or substantial portions thereof to form the basis of a commercially competitive educational course, textbook, curriculum, formal certification program, or structured training material.',
  },
};

const CATEGORIES = [
  {
    id: 'core',
    title: 'Core Base',
    type: 'radio',
    options: [
      { val: 'C1', label: 'C1 - Restricted Foundation (View, Use, Modify, Share)' },
      { val: 'C2', label: 'C2 - Internal Mod Core (View, Modify Internally)' },
      { val: 'C3', label: 'C3 - View-Only Core' },
    ],
  },
  {
    id: 'attribution',
    title: 'Attribution',
    type: 'radio',
    options: [
      { val: 'None', label: 'No Attribution Module' },
      { val: 'A', label: 'A - Attribution Required' },
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
    ],
  },
  {
    id: 'ethics',
    title: 'Ethical Restrictions',
    type: 'checkbox',
    options: [
      { val: 'HM', label: 'HM - No Harmful Military' },
      { val: 'NS', label: 'NS - No Surveillance' },
      { val: 'HE', label: 'HE - High-Risk Restrict' },
    ],
  },
  {
    id: 'branding',
    title: 'Branding',
    type: 'radio',
    options: [
      { val: 'None', label: 'No Branding Module' },
      { val: 'BU', label: 'BU - Branding Use Allowed' },
      { val: 'BR', label: 'BR - Branding Restricted' },
      { val: 'BP', label: 'BP - Branding by Permission' },
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
    ],
  },
  {
    id: 'education',
    title: 'Education',
    type: 'checkbox',
    options: [
      { val: 'ED', label: 'ED - Educational Reuse Allowed' },
      { val: 'CE', label: 'CE - Course Extraction Restricted' },
    ],
  },
];

export default function App() {
  const [state, setState] = useState({
    core: 'C1',
    attribution: 'A',
    commercial: 'NC',
    modification: 'M2',
    redistribution: 'R2',
    derivative: [],
    resale: 'NR',
    ai: 'NT',
    ethics: ['NS'],
    branding: 'BR',
    hosting: 'None',
    patent: 'None',
    education: ['CE'],
  });
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
    if (state.patent !== 'None') modules.push(state.patent);
    modules.push(...state.education);

    return modules;
  }, [state]);

  const licenseCode = `PLF-1.0-${state.core}${activeModules.length > 0 ? `-${activeModules.join('-')}` : ''}`;
  const spdxLicenseRef = `LicenseRef-${licenseCode}`;

  const handleRadio = (catId, val) => {
    setState((prev) => ({ ...prev, [catId]: val }));
  };

  const handleCheckbox = (catId, val) => {
    setState((prev) => {
      const current = prev[catId];

      if (current.includes(val)) {
        return { ...prev, [catId]: current.filter((item) => item !== val) };
      }

      return { ...prev, [catId]: [...current, val] };
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
            <p className="text-slate-400 text-sm">Modular restricted-use licensing for digital creators</p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full flex flex-col lg:flex-row overflow-hidden">
        <aside className="w-full lg:w-1/3 bg-white border-r border-slate-200 overflow-y-auto p-6 shadow-[inset_-10px_0_20px_-20px_rgba(0,0,0,0.1)]">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-slate-800">
            <Info size={18} /> Configure Modules
          </h2>

          <div className="space-y-8">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="border-b border-slate-100 pb-6 last:border-0">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                  {cat.title}
                </h3>
                <div className="space-y-2">
                  {cat.options.map((opt) => {
                    const isChecked =
                      cat.type === 'radio'
                        ? state[cat.id] === opt.val
                        : state[cat.id].includes(opt.val);

                    return (
                      <label
                        key={opt.val}
                        className={`flex items-start gap-3 p-2 rounded cursor-pointer transition-colors ${isChecked ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}
                      >
                        <input
                          type={cat.type}
                          name={cat.id}
                          value={opt.val}
                          checked={isChecked}
                          onChange={() =>
                            cat.type === 'radio' ? handleRadio(cat.id, opt.val) : handleCheckbox(cat.id, opt.val)
                          }
                          className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ${cat.type === 'radio' ? 'rounded-full' : 'rounded'}`}
                        />
                        <span className={`text-sm ${isChecked ? 'text-blue-900 font-medium' : 'text-slate-600'}`}>
                          {opt.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="w-full lg:w-2/3 bg-slate-100 p-4 lg:p-8 overflow-y-auto relative flex flex-col">
          <div className="flex justify-between items-center mb-4 gap-3 flex-wrap">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-mono font-bold text-sm border border-blue-200 shadow-sm">
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

          <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-950 shadow-sm">
            <p className="font-semibold">SPDX interoperability</p>
            <p className="mt-1">
              Until PLF is added to the SPDX License List, use a custom SPDX identifier in source headers and
              include the corresponding full license text in your repository.
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

          <div
            id="license-output"
            className="bg-white p-8 lg:p-12 rounded-xl shadow-sm border border-slate-200 flex-1 overflow-y-auto prose prose-slate max-w-none text-slate-800"
          >
            <div className="text-center mb-10 border-b pb-8">
              <h1 className="text-3xl font-bold mb-2 text-slate-900">Prism License Framework</h1>
              <h2 className="text-xl text-slate-600 font-mono tracking-tight">Variant: {licenseCode}</h2>
              <p className="mt-4 text-sm text-slate-500 font-bold uppercase tracking-widest">
                Terms and Conditions for Use, Reproduction, and Distribution
              </p>
            </div>

            <p className="text-sm italic mb-8 font-medium">
              By exercising any permissions granted herein, You accept and agree to be bound by the terms and
              conditions of this License. If You do not agree to these terms, You are not granted any rights to
              the Work and must immediately cease all use and distribution.
            </p>

            <h3 className="text-lg font-bold border-b border-slate-200 pb-2 mb-4">1. Definitions</h3>
            <ul className="list-none pl-0 mb-8 space-y-3 text-sm text-slate-700">
              <li><strong>&quot;License&quot;</strong> shall mean the terms and conditions for use, reproduction, and distribution as defined by this document.</li>
              <li><strong>&quot;Licensor&quot;</strong> shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.</li>
              <li><strong>&quot;Legal Entity&quot;</strong> shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, &quot;control&quot; means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.</li>
              <li><strong>&quot;You&quot; (or &quot;Licensee&quot;)</strong> shall mean an individual or Legal Entity exercising permissions granted by this License.</li>
              <li><strong>&quot;Work&quot;</strong> shall mean the work of authorship, whether in Source or Object form, made available under the License.</li>
              <li><strong>&quot;Derivative Work&quot;</strong> shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship.</li>
              <li><strong>&quot;Source&quot; form</strong> shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.</li>
              <li><strong>&quot;Object&quot; form</strong> shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.</li>
            </ul>

            <h3 className="text-lg font-bold border-b border-slate-200 pb-2 mb-4">2. Core Grant of Rights ({state.core})</h3>
            <p className="mb-8 text-sm text-slate-700 leading-relaxed text-justify">{LEGAL_TEXT.core[state.core]}</p>

            <h3 className="text-lg font-bold border-b border-slate-200 pb-2 mb-4">3. Conditions and Specific Restrictions</h3>
            {activeModules.length === 0 ? (
              <p className="mb-8 text-sm text-slate-500 italic">No additional restriction modules are applied to this variant.</p>
            ) : (
              <ul className="list-none pl-0 mb-8 space-y-4">
                {activeModules.map((mod) => (
                  <li
                    key={mod}
                    className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded border border-slate-200 shadow-sm text-justify"
                  >
                    <span>{LEGAL_TEXT.modules[mod]}</span>
                  </li>
                ))}
              </ul>
            )}

            <h3 className="text-lg font-bold border-b border-slate-200 pb-2 mb-4">4. General Provisions</h3>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed text-justify">
              <p>
                <strong>4.1 Reservation of Rights:</strong> All rights not expressly and unambiguously granted by the Licensor herein are entirely reserved. This License does not transfer or assign any ownership of copyrights, patents, or intellectual property rights.
              </p>
              <p>
                <strong>4.2 Termination:</strong> This License and the rights granted hereunder will terminate automatically upon any breach by You of the terms of this License. Individuals or entities who have received Derivative Works from You under this License, however, will not have their licenses terminated provided such individuals or entities remain in full compliance with those licenses. Provisions 4.1, 4.3, 4.4, 4.5, and 4.6 shall survive termination.
              </p>
              <p className="uppercase text-xs tracking-wider font-semibold text-slate-600 mt-6">
                4.3 Disclaimer of Warranty:
              </p>
              <p className="uppercase text-xs text-slate-500 leading-relaxed">
                Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.
              </p>
              <p className="uppercase text-xs tracking-wider font-semibold text-slate-600 mt-4">
                4.4 Limitation of Liability:
              </p>
              <p className="uppercase text-xs text-slate-500 leading-relaxed">
                In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.
              </p>
              <p className="mt-6">
                <strong>4.5 Severability:</strong> If any provision of this License is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such invalidity shall not affect the enforceability of the remaining provisions. The invalid provision shall be reformed to the minimum extent necessary to make it valid and enforceable while preserving the Licensor&apos;s original intent.
              </p>
              <p>
                <strong>4.6 Entire Agreement &amp; Jurisdiction:</strong> This License constitutes the entire agreement between the parties with respect to the Work. Any modifications to this agreement must be in writing and signed by the Licensor.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
