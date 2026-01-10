// Prototype B: "Bold Tech"
// Brutalist/tech aesthetic with dramatic dark mode
// Fonts: JetBrains Mono (display) + Syne (body)
// Colors: Deep indigo (#0F0B1F) + Electric cyan (#06B6D4) + Bright blue (#3B82F6)

function PrototypeB() {
  return (
    <div className="prototype-b">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Syne:wght@400;500;600;700;800&display=swap');

        .prototype-b {
          --bg-dark: #0F0B1F;
          --bg-card: #1A1433;
          --cyan: #06B6D4;
          --blue: #3B82F6;
          --purple: #8B5CF6;
          --text: #E2E8F0;
          --text-dim: #94A3B8;
          font-family: 'Syne', sans-serif;
          color: var(--text);
          background: var(--bg-dark);
        }

        .prototype-b .mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .prototype-b .gradient-text {
          background: linear-gradient(135deg, var(--cyan), var(--blue), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .prototype-b .glow {
          box-shadow: 0 0 60px rgba(6, 182, 212, 0.3);
        }

        .prototype-b .glow-text {
          text-shadow: 0 0 40px rgba(6, 182, 212, 0.5);
        }

        .prototype-b .border-gradient {
          position: relative;
          background: var(--bg-card);
        }

        .prototype-b .border-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(135deg, var(--cyan), var(--purple));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .prototype-b .btn-cyber {
          position: relative;
          background: linear-gradient(135deg, var(--cyan), var(--blue));
          color: var(--bg-dark);
          padding: 1rem 2rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.875rem;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
          transition: all 0.3s ease;
        }

        .prototype-b .btn-cyber:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(6, 182, 212, 0.4);
        }

        .prototype-b .btn-outline {
          position: relative;
          background: transparent;
          color: var(--cyan);
          padding: 1rem 2rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.875rem;
          border: 2px solid var(--cyan);
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
          transition: all 0.3s ease;
        }

        .prototype-b .btn-outline:hover {
          background: var(--cyan);
          color: var(--bg-dark);
        }

        .prototype-b .card-tech {
          background: var(--bg-card);
          border: 1px solid rgba(6, 182, 212, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .prototype-b .card-tech:hover {
          border-color: var(--cyan);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.1);
        }

        .prototype-b .grid-bg {
          background-image:
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .prototype-b .scanline {
          position: relative;
          overflow: hidden;
        }

        .prototype-b .scanline::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(6, 182, 212, 0.03) 2px,
            rgba(6, 182, 212, 0.03) 4px
          );
          pointer-events: none;
        }

        .prototype-b .tag {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: var(--cyan);
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .prototype-b .stat-cyber {
          position: relative;
        }

        .prototype-b .stat-cyber::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, var(--cyan), var(--purple));
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .prototype-b .pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .prototype-b .float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative grid-bg scanline">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-[var(--cyan)]/20 rotate-45 float"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 border border-[var(--purple)]/20 float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[var(--cyan)] rounded-full pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[var(--purple)] rounded-full pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="flex gap-3 mb-8">
              <span className="tag">Medical AI</span>
              <span className="tag">Legal Tech</span>
              <span className="tag">Verified</span>
            </div>

            <h1 className="text-5xl lg:text-8xl font-extrabold leading-[0.9] mb-8">
              <span className="gradient-text glow-text">MEDBRIEF</span>
              <br />
              <span className="text-white">MEDICAL-LEGAL INTELLIGENCE</span>
            </h1>

            <p className="mono text-lg text-[var(--text-dim)] mb-10 max-w-2xl leading-relaxed">
              {'>'} Transform <span className="text-[var(--cyan)]">complex medical records</span> into <span className="text-[var(--cyan)]">verified, litigation-ready evidence</span> with source-level traceability.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <button className="btn-cyber">Request Demo</button>
              <button className="btn-outline">Learn More</button>
            </div>

            <div className="flex gap-12 mono text-sm">
              <div>
                <p className="text-3xl font-bold text-[var(--cyan)]">600+</p>
                <p className="text-[var(--text-dim)]">Pages Processed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--cyan)]">70</p>
                <p className="text-[var(--text-dim)]">Cases Analyzed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--cyan)]">100%</p>
                <p className="text-[var(--text-dim)]">Traceable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-[var(--cyan)] text-sm">01</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--cyan)] to-transparent"></div>
            <h2 className="text-4xl lg:text-5xl font-extrabold">THE PROBLEM</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-2xl text-[var(--text-dim)] mb-8 leading-relaxed">
                Personal injury litigation relies on medical evidence, yet translating records into legal arguments is <span className="text-white font-bold">broken</span>.
              </p>

              <div className="space-y-6">
                {[
                  { code: 'ERR_001', title: 'Volume Overwhelm', desc: 'Hundreds to thousands of pages per case — handwritten notes, faxed documents, scanned reports' },
                  { code: 'ERR_002', title: 'Skills Gap', desc: 'Lawyers can\'t interpret clinical data. Doctors don\'t know what\'s legally material.' },
                  { code: 'ERR_003', title: 'AI Fails', desc: 'Generic AI hallucinate. They lack precision and source traceability required for legal use.' }
                ].map((item, i) => (
                  <div key={i} className="card-tech p-6">
                    <div className="flex items-start gap-4">
                      <span className="mono text-xs text-red-400 bg-red-400/10 px-2 py-1">{item.code}</span>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-[var(--text-dim)] text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-gradient p-8 glow">
              <div className="mono text-sm space-y-2">
                <p className="text-[var(--text-dim)]">// case_economics.js</p>
                <p><span className="text-[var(--purple)]">const</span> <span className="text-[var(--cyan)]">reviewTime</span> = <span className="text-orange-400">"20-40%"</span>;</p>
                <p><span className="text-[var(--purple)]">const</span> <span className="text-[var(--cyan)]">physicianHours</span> = <span className="text-orange-400">"10-30"</span>;</p>
                <p><span className="text-[var(--purple)]">const</span> <span className="text-[var(--cyan)]">reportCost</span> = <span className="text-orange-400">$1,400</span>;</p>
                <br />
                <p className="text-green-400">// Time lost to medical review</p>
                <p className="text-green-400">// per case. Every. Single. Time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-[var(--bg-card)] to-[var(--bg-dark)]"></div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-[var(--cyan)] text-sm">02</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--cyan)] to-transparent"></div>
            <h2 className="text-4xl lg:text-5xl font-extrabold">THE SOLUTION</h2>
          </div>

          <div className="text-center mb-16">
            <p className="text-2xl text-[var(--text-dim)] max-w-3xl mx-auto">
              A <span className="gradient-text font-bold">medical-legal intelligence platform</span> that converts unstructured clinical records into verified, litigation-ready evidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📄', title: 'Medical Extraction', desc: 'Processes handwritten notes, scanned charts, diagnostic reports with clinical precision.', tag: 'AI-POWERED' },
              { icon: '✓', title: 'Verified & Traceable', desc: 'Every data point linked to source. Confidence scores. Nothing hallucinated.', tag: 'AUDITABLE' },
              { icon: '⚖️', title: 'Legal Intelligence', desc: 'Conversational interface generates evidence-based arguments from verified data.', tag: 'CASE-SPECIFIC' }
            ].map((item, i) => (
              <div key={i} className="card-tech p-8 relative group">
                <span className="absolute top-4 right-4 tag">{item.tag}</span>
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[var(--text-dim)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-[var(--cyan)] text-sm">03</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--cyan)] to-transparent"></div>
            <h2 className="text-4xl lg:text-5xl font-extrabold">SEE IT LIVE</h2>
          </div>

          <div className="border-gradient glow aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center scanline">
              <div className="text-center">
                <button className="w-24 h-24 rounded-full bg-[var(--cyan)] flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-[var(--bg-dark)] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <p className="mono text-[var(--text-dim)]">{'>'} launch_demo.exe</p>
              </div>
            </div>

            {/* Terminal-style overlay */}
            <div className="absolute top-4 left-4 mono text-xs text-[var(--text-dim)]">
              <p>medbrief_platform_v1.0</p>
            </div>
            <div className="absolute bottom-4 right-4 mono text-xs text-[var(--cyan)]">
              <p>Duration: 3:24</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-32 relative grid-bg">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-[var(--cyan)] text-sm">04</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--cyan)] to-transparent"></div>
            <h2 className="text-4xl lg:text-5xl font-extrabold">MARKET</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                {[
                  { label: 'PRIMARY', value: 'Personal Injury', desc: 'Entry point — high volume, high stakes', bar: '100%' },
                  { label: 'ADJACENT', value: 'Insurance Claims', desc: 'Accident, health, disability carriers', bar: '75%' },
                  { label: 'EXPANSION', value: 'Mass Tort', desc: 'High-volume medical review at scale', bar: '50%' }
                ].map((item, i) => (
                  <div key={i} className="stat-cyber pl-6">
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <p className="mono text-xs text-[var(--text-dim)]">{item.label}</p>
                        <p className="text-2xl font-extrabold gradient-text">{item.value}</p>
                      </div>
                      <p className="text-sm text-[var(--text-dim)]">{item.desc}</p>
                    </div>
                    <div className="h-1 bg-[var(--bg-card)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--cyan)] to-[var(--purple)] rounded-full"
                        style={{ width: item.bar }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-tech p-8">
              <h3 className="mono text-[var(--cyan)] text-sm mb-6">// market_pain()</h3>
              <div className="space-y-4">
                {[
                  '20-40% of case prep time on medical review',
                  '10-30 hours per physician assessment',
                  '$1,400 average cost per report',
                  'Weeks of delay per case'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[var(--cyan)]">▹</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-[var(--cyan)] text-sm">05</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--cyan)] to-transparent"></div>
            <h2 className="text-4xl lg:text-5xl font-extrabold">PRICING</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'PAY-PER-CASE', price: '$70-140', period: '/case', features: ['100-200 pages', 'Full extraction', 'Source traceability', 'Verification'] },
              { name: 'INDIVIDUAL', price: '$10,500', period: '/year', features: ['~20,000 pages', '100-150 cases', 'Priority support', 'All features'], featured: true },
              { name: 'ENTERPRISE', price: '$300K', period: '/year', features: ['~1M pages', 'Unlimited users', 'Dedicated support', 'Custom integrations', 'SLA guarantee'] }
            ].map((plan, i) => (
              <div key={i} className={`p-8 relative ${plan.featured ? 'border-gradient glow' : 'card-tech'}`}>
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 tag bg-[var(--cyan)] text-[var(--bg-dark)] border-0">
                    RECOMMENDED
                  </span>
                )}
                <h3 className="mono text-sm text-[var(--cyan)] mb-2">{plan.name}</h3>
                <p className="mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-[var(--text-dim)]">{plan.period}</span>
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="text-[var(--cyan)]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-card)] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-[var(--cyan)] text-sm">06</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--cyan)] to-transparent"></div>
            <h2 className="text-4xl lg:text-5xl font-extrabold">VS COMPETITION</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full mono text-sm">
              <thead>
                <tr className="border-b border-[var(--cyan)]/30">
                  <th className="text-left py-4 px-4"></th>
                  <th className="py-4 px-4 text-[var(--cyan)]">MEDBRIEF</th>
                  <th className="py-4 px-4 text-[var(--text-dim)]">GENERAL AI</th>
                  <th className="py-4 px-4 text-[var(--text-dim)]">DOC OCR</th>
                  <th className="py-4 px-4 text-[var(--text-dim)]">LEGAL RESEARCH</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Medical Extraction', [true, false, true, false]],
                  ['Handwriting Support', [true, false, false, false]],
                  ['Source Traceability', [true, false, false, false]],
                  ['Confidence Scoring', [true, false, false, false]],
                  ['Legal Arguments', [true, true, false, true]],
                  ['Case-Specific', [true, false, false, false]]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-4 px-4 text-[var(--text-dim)]">{row[0]}</td>
                    {row[1].map((val, j) => (
                      <td key={j} className="py-4 px-4 text-center">
                        {val ? (
                          <span className={j === 0 ? 'text-[var(--cyan)]' : 'text-[var(--text-dim)]'}>●</span>
                        ) : (
                          <span className="text-white/20">○</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-[var(--cyan)] text-sm">07</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--cyan)] to-transparent"></div>
            <h2 className="text-4xl lg:text-5xl font-extrabold">TRACTION</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '600+', label: 'PAGES' },
              { value: '70', label: 'CASES' },
              { value: '3+', label: 'MONTHS' },
              { value: '~$100', label: 'WTP/REPORT' }
            ].map((stat, i) => (
              <div key={i} className="card-tech p-8 text-center">
                <p className="text-5xl font-extrabold gradient-text mb-2">{stat.value}</p>
                <p className="mono text-xs text-[var(--text-dim)]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { source: 'PHYSICIANS', quote: 'Doctors have repeatedly requested additional batches for processing, expressing enthusiasm for the extraction\'s reliability.' },
              { source: 'LAWYERS', quote: 'Faster access to structured, reliable medical information would increase productivity and enable earlier case decisions.' }
            ].map((item, i) => (
              <div key={i} className="card-tech p-6">
                <p className="text-[var(--text-dim)] mb-4 italic">"{item.quote}"</p>
                <p className="mono text-xs text-[var(--cyan)]">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 relative grid-bg">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-[var(--cyan)] text-sm">08</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--cyan)] to-transparent"></div>
            <h2 className="text-4xl lg:text-5xl font-extrabold">THE TEAM</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { role: 'PRODUCT LEAD', bg: 'JD Candidate • CS & Chemistry' },
              { role: 'MEDICAL LEAD', bg: 'Practicing Physician • Decades Experience' },
              { role: 'LEGAL LEAD', bg: 'Lawyer & Professor • Active Firm' },
              { role: 'ENGINEERING LEAD', bg: 'Production Software • Systems Architecture' }
            ].map((member, i) => (
              <div key={i} className="card-tech p-8 group">
                <div className="w-16 h-16 mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--cyan)] to-[var(--purple)] opacity-80"></div>
                  <div className="absolute inset-1 bg-[var(--bg-dark)] flex items-center justify-center">
                    <span className="mono text-xl font-bold text-[var(--cyan)]">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <p className="mono text-xs text-[var(--cyan)] mb-2">{member.role}</p>
                <p className="text-sm text-[var(--text-dim)]">{member.bg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap & Ask */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-[var(--cyan)] text-sm">09</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--cyan)] to-transparent"></div>
            <h2 className="text-4xl lg:text-5xl font-extrabold">ROADMAP + ASK</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="mono text-[var(--cyan)] mb-6">// milestones</h3>
              <div className="space-y-4">
                {[
                  { phase: 'P1', item: 'Production-ready platform with enterprise security' },
                  { phase: 'P2', item: 'End-user web application launch' },
                  { phase: 'P3', item: 'Pilot programs with law firms' },
                  { phase: 'P4', item: 'First paid deployments' },
                  { phase: 'P5', item: 'Enterprise & insurance expansion' }
                ].map((milestone, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="mono text-xs text-[var(--purple)] w-8">{milestone.phase}</span>
                    <div className="h-px flex-1 bg-white/10"></div>
                    <p className="flex-1">{milestone.item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-gradient p-8">
              <h3 className="mono text-[var(--cyan)] mb-6">// the_ask</h3>
              <p className="text-2xl font-extrabold gradient-text mb-4">SEED FUNDING</p>
              <p className="text-[var(--text-dim)] mb-8">Move from validated prototype to production with paying customers.</p>

              <div className="space-y-4 mono text-sm">
                <div className="flex justify-between">
                  <span>Cloud & AI Infrastructure</span>
                  <span className="text-[var(--cyan)]">40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Engineering & Development</span>
                  <span className="text-[var(--cyan)]">35%</span>
                </div>
                <div className="flex justify-between">
                  <span>Security & Compliance</span>
                  <span className="text-[var(--cyan)]">25%</span>
                </div>
              </div>

              <p className="text-sm text-[var(--text-dim)] mt-6">
                Also seeking: Enterprise pilots, Legal/healthcare advisors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent"></div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-extrabold mb-6">
            <span className="gradient-text glow-text">READY TO TRANSFORM</span>
            <br />
            <span className="text-white">MEDICAL EVIDENCE?</span>
          </h2>
          <p className="text-xl text-[var(--text-dim)] mb-10">
            Verified. Traceable. Defensible.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="btn-cyber">Request Demo</button>
            <button className="btn-outline">Contact Us</button>
          </div>

          <div className="flex justify-center gap-8 mono text-sm text-[var(--text-dim)]">
            <a href="mailto:contact@medbrief.ai" className="hover:text-[var(--cyan)] transition-colors">contact@medbrief.ai</a>
            <a href="#" className="hover:text-[var(--cyan)] transition-colors">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrototypeB;
