// Prototype C: "Soft Modern"
// Organic, approachable aesthetic with gentle gradients
// Fonts: Outfit (display) + Nunito (body)
// Colors: Sky blue (#E0F2FE) + Blue (#3B82F6) + Coral accent (#FB7185)

function PrototypeC() {
  return (
    <div className="prototype-c">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Nunito:wght@400;500;600;700&display=swap');

        .prototype-c {
          --sky: #E0F2FE;
          --sky-dark: #BAE6FD;
          --blue: #3B82F6;
          --blue-dark: #2563EB;
          --coral: #FB7185;
          --coral-light: #FECDD3;
          --slate: #475569;
          --slate-light: #94A3B8;
          --white: #FFFFFF;
          font-family: 'Nunito', sans-serif;
          color: var(--slate);
          background: linear-gradient(180deg, var(--white) 0%, var(--sky) 100%);
          min-height: 100vh;
        }

        .prototype-c .display-font {
          font-family: 'Outfit', sans-serif;
        }

        .prototype-c .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          pointer-events: none;
        }

        .prototype-c .card-soft {
          background: var(--white);
          border-radius: 24px;
          box-shadow: 0 4px 24px rgba(59, 130, 246, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .prototype-c .card-soft:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 48px rgba(59, 130, 246, 0.15);
        }

        .prototype-c .btn-primary {
          background: linear-gradient(135deg, var(--blue), var(--blue-dark));
          color: white;
          padding: 1rem 2rem;
          border-radius: 100px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
        }

        .prototype-c .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
        }

        .prototype-c .btn-secondary {
          background: var(--white);
          color: var(--blue);
          padding: 1rem 2rem;
          border-radius: 100px;
          font-weight: 600;
          font-size: 1rem;
          border: 2px solid var(--sky-dark);
          transition: all 0.3s ease;
        }

        .prototype-c .btn-secondary:hover {
          border-color: var(--blue);
          background: var(--sky);
        }

        .prototype-c .pill {
          background: var(--sky);
          color: var(--blue);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .prototype-c .icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .prototype-c .gradient-border {
          position: relative;
          background: white;
          border-radius: 24px;
        }

        .prototype-c .gradient-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, var(--blue), var(--coral));
          border-radius: 26px;
          z-index: -1;
        }

        .prototype-c .wave-divider {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .prototype-c .wave-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 80px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .prototype-c .float {
          animation: float 8s ease-in-out infinite;
        }

        .prototype-c .float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .prototype-c .section-title {
          position: relative;
          display: inline-block;
        }

        .prototype-c .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, var(--coral), var(--blue));
          border-radius: 2px;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Floating blobs */}
        <div className="blob w-96 h-96 bg-[var(--sky-dark)] top-20 -left-48 float"></div>
        <div className="blob w-80 h-80 bg-[var(--coral-light)] top-40 right-0 float" style={{ animationDelay: '2s' }}></div>
        <div className="blob w-64 h-64 bg-[var(--sky)] bottom-20 left-1/3 float" style={{ animationDelay: '4s' }}></div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-2 mb-6">
                <span className="pill">Medical AI</span>
                <span className="pill">Legal Tech</span>
              </div>

              <h1 className="display-font text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[var(--slate)]">
                Medical records to <span className="text-[var(--blue)]">litigation-ready evidence</span>
              </h1>

              <p className="text-xl text-[var(--slate-light)] mb-8 leading-relaxed">
                MedBrief transforms complex clinical records into verified, traceable evidence — with every data point linked to its source.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button className="btn-primary">Request Demo</button>
                <button className="btn-secondary">Learn More</button>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--coral)] border-2 border-white"></div>
                  ))}
                </div>
                <p className="text-sm text-[var(--slate-light)]">
                  <span className="font-bold text-[var(--slate)]">70+ cases</span> analyzed and verified
                </p>
              </div>
            </div>

            <div className="relative float-slow">
              <div className="card-soft p-8 relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--sky)] to-[var(--sky-dark)] rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                      <svg className="w-10 h-10 text-[var(--blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-[var(--slate-light)] font-medium">Platform Preview</p>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">✓</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3 float" style={{ animationDelay: '3s' }}>
                  <span className="text-2xl">⚖️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="display-font text-4xl font-bold mb-4 section-title">
              The challenge
            </h2>
            <p className="text-lg text-[var(--slate-light)]">
              Personal injury litigation depends on medical evidence, but the current process is broken.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '📄', title: 'Volume Overwhelm', desc: 'Hundreds to thousands of pages per case — handwritten notes, faxed documents, scanned reports.' },
              { emoji: '🔄', title: 'Skills Gap', desc: 'Lawyers can\'t interpret clinical data. Doctors don\'t know what\'s legally material.' },
              { emoji: '⚠️', title: 'AI Limitations', desc: 'Generic AI tools hallucinate and lack the traceability required for legal use.' }
            ].map((item, i) => (
              <div key={i} className="card-soft p-8 text-center">
                <span className="text-5xl mb-4 block">{item.emoji}</span>
                <h3 className="display-font text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[var(--slate-light)]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-[var(--coral-light)] px-6 py-3 rounded-full">
              <span className="text-2xl">📊</span>
              <p className="text-[var(--slate)] font-medium">
                Medical review takes <span className="text-[var(--coral)] font-bold">20-40% of case prep time</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="blob w-96 h-96 bg-[var(--coral-light)] -right-48 top-0 float"></div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="pill mb-4 inline-block">The Solution</span>
              <h2 className="display-font text-4xl font-bold mb-6">
                Medical-legal intelligence that's <span className="text-[var(--coral)]">verified</span> and <span className="text-[var(--blue)]">traceable</span>
              </h2>
              <p className="text-lg text-[var(--slate-light)] mb-8">
                MedBrief converts unstructured clinical records into litigation-ready evidence with source-level traceability.
              </p>

              <div className="space-y-6">
                {[
                  { icon: '📄', title: 'Medical Extraction', desc: 'Processes handwritten notes, scanned charts, and diagnostic reports.' },
                  { icon: '✓', title: 'Verified & Traceable', desc: 'Every data point linked to source with confidence scores.' },
                  { icon: '⚖️', title: 'Legal Intelligence', desc: 'Generates evidence-based arguments from verified medical data.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="icon-circle bg-[var(--sky)] flex-shrink-0">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="display-font font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-[var(--slate-light)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-soft p-8">
              <div className="space-y-4">
                {[
                  { from: 'Upload records', to: 'Extract data', color: 'var(--blue)' },
                  { from: 'Verify & score', to: 'Link to source', color: 'var(--coral)' },
                  { from: 'Generate report', to: 'Ready for litigation', color: 'var(--blue)' }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-1 bg-[var(--sky)] rounded-xl p-4 text-center">
                      <p className="font-medium text-sm">{step.from}</p>
                    </div>
                    <svg className="w-6 h-6 flex-shrink-0" style={{ color: step.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="flex-1 bg-[var(--sky)] rounded-xl p-4 text-center">
                      <p className="font-medium text-sm">{step.to}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-[var(--slate-light)] mt-6">
                Every output traceable to source
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="display-font text-4xl font-bold mb-4 section-title">
              See it in action
            </h2>
            <p className="text-lg text-[var(--slate-light)]">
              Watch how complex medical records become verified, litigation-ready evidence.
            </p>
          </div>

          <div className="gradient-border p-2">
            <div className="aspect-video bg-gradient-to-br from-[var(--sky)] to-[var(--sky-dark)] rounded-[20px] flex items-center justify-center relative overflow-hidden">
              <button className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-10">
                <svg className="w-10 h-10 text-[var(--blue)] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Decorative circles */}
              <div className="absolute w-48 h-48 border-2 border-[var(--blue)]/10 rounded-full top-1/4 left-1/4"></div>
              <div className="absolute w-32 h-32 border-2 border-[var(--coral)]/10 rounded-full bottom-1/4 right-1/4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="pill mb-4 inline-block">Market Opportunity</span>
              <h2 className="display-font text-4xl font-bold mb-6">
                A clear path to scale
              </h2>

              <div className="space-y-6">
                {[
                  { value: '20-40%', label: 'of case prep time on medical review' },
                  { value: '10-30 hrs', label: 'physician time per assessment report' },
                  { value: '$1,400', label: 'typical cost per physician assessment' }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--blue)] to-[var(--coral)] flex items-center justify-center text-white">
                      <span className="display-font font-bold text-lg">{i + 1}</span>
                    </div>
                    <div>
                      <p className="display-font text-2xl font-bold text-[var(--blue)]">{stat.value}</p>
                      <p className="text-[var(--slate-light)]">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-soft p-8">
              <h3 className="display-font text-xl font-bold mb-6">Target Markets</h3>
              <div className="space-y-4">
                {[
                  { market: 'Personal Injury Firms', status: 'Primary entry point', active: true },
                  { market: 'Insurance Claims', status: 'Adjacent market', active: false },
                  { market: 'Workers\' Compensation', status: 'Expansion', active: false },
                  { market: 'Mass Tort Litigation', status: 'Scale opportunity', active: false }
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 p-4 rounded-xl ${item.active ? 'bg-[var(--blue)]/10' : 'bg-[var(--sky)]'}`}>
                    <span className={item.active ? 'text-[var(--blue)]' : 'text-[var(--slate-light)]'}>
                      {item.active ? '●' : '○'}
                    </span>
                    <div>
                      <p className="font-medium">{item.market}</p>
                      <p className="text-sm text-[var(--slate-light)]">{item.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="display-font text-4xl font-bold mb-4 section-title">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-[var(--slate-light)]">B2B SaaS with usage-based pricing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Pay-Per-Case', price: '$70-140', period: '/case', features: ['100-200 pages', 'Full extraction', 'Source traceability'], color: 'var(--sky)' },
              { name: 'Individual', price: '$10,500', period: '/year', features: ['~20,000 pages', '100-150 cases', 'Priority support', 'All features'], featured: true },
              { name: 'Enterprise', price: '$300K', period: '/year', features: ['~1M pages', 'Unlimited users', 'Dedicated support', 'Custom integrations'], color: 'var(--sky)' }
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-3xl ${plan.featured ? 'gradient-border' : 'card-soft'}`}>
                {plan.featured && (
                  <span className="pill bg-[var(--coral)] text-white mb-4 inline-block">Most Popular</span>
                )}
                <h3 className="display-font text-xl font-bold mb-2">{plan.name}</h3>
                <p className="mb-6">
                  <span className="display-font text-4xl font-bold">{plan.price}</span>
                  <span className="text-[var(--slate-light)]">{plan.period}</span>
                </p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-[var(--blue)]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={plan.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="display-font text-4xl font-bold mb-4 section-title">
              How we compare
            </h2>
          </div>

          <div className="card-soft p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4"></th>
                  <th className="py-4 px-4 text-[var(--blue)] font-bold">MedBrief</th>
                  <th className="py-4 px-4 text-[var(--slate-light)]">General AI</th>
                  <th className="py-4 px-4 text-[var(--slate-light)]">Document OCR</th>
                  <th className="py-4 px-4 text-[var(--slate-light)]">Legal Research</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Medical Extraction', [true, false, true, false]],
                  ['Handwriting Support', [true, false, false, false]],
                  ['Source Traceability', [true, false, false, false]],
                  ['Confidence Scoring', [true, false, false, false]],
                  ['Legal Arguments', [true, true, false, true]]
                ].map((row, i) => (
                  <tr key={i} className="border-t border-[var(--sky)]">
                    <td className="py-4 px-4 font-medium">{row[0]}</td>
                    {row[1].map((val, j) => (
                      <td key={j} className="py-4 px-4 text-center">
                        {val ? (
                          <span className={`text-2xl ${j === 0 ? 'text-[var(--blue)]' : 'text-[var(--slate-light)]'}`}>✓</span>
                        ) : (
                          <span className="text-2xl text-[var(--slate-light)]/30">✗</span>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="display-font text-4xl font-bold mb-4 section-title">
              Validated and growing
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '600+', label: 'Pages Processed', emoji: '📄' },
              { value: '70', label: 'Cases Analyzed', emoji: '📋' },
              { value: '3+', label: 'Months Active Use', emoji: '📅' },
              { value: '~$100', label: 'Willingness to Pay', emoji: '💵' }
            ].map((stat, i) => (
              <div key={i} className="card-soft p-6 text-center">
                <span className="text-3xl mb-2 block">{stat.emoji}</span>
                <p className="display-font text-3xl font-bold text-[var(--blue)]">{stat.value}</p>
                <p className="text-sm text-[var(--slate-light)]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { source: 'Physician Validation', quote: 'Doctors have repeatedly requested additional batches, expressing enthusiasm for the extraction\'s reliability and usefulness.' },
              { source: 'Legal Validation', quote: 'Faster access to structured, reliable medical information would increase productivity and enable earlier case decisions.' }
            ].map((item, i) => (
              <div key={i} className="card-soft p-6">
                <p className="text-[var(--slate)] mb-4 italic">"{item.quote}"</p>
                <p className="text-sm font-bold text-[var(--blue)]">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="display-font text-4xl font-bold mb-4 section-title">
              Meet the team
            </h2>
            <p className="text-lg text-[var(--slate-light)]">Expertise across law, medicine, and technology</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { role: 'Product Strategy Lead', credential: 'JD Candidate, Penn Law | CS & Chemistry', emoji: '💼' },
              { role: 'Medical Lead', credential: 'Practicing Physician | Decades Experience', emoji: '🩺' },
              { role: 'Legal Lead', credential: 'Lawyer & Professor | Active Firm', emoji: '⚖️' },
              { role: 'Engineering Lead', credential: 'Production Software | Systems Architecture', emoji: '💻' }
            ].map((member, i) => (
              <div key={i} className="card-soft p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--coral)] flex items-center justify-center">
                  <span className="text-3xl">{member.emoji}</span>
                </div>
                <p className="text-[var(--blue)] font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-[var(--slate-light)]">{member.credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap & Ask */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="pill mb-4 inline-block">Roadmap</span>
              <h2 className="display-font text-3xl font-bold mb-8">What's next</h2>

              <div className="space-y-4">
                {[
                  { phase: 'P1', milestone: 'Production-ready platform with enterprise security' },
                  { phase: 'P2', milestone: 'End-user web application launch' },
                  { phase: 'P3', milestone: 'Pilot programs with law firms' },
                  { phase: 'P4', milestone: 'First paid deployments' },
                  { phase: 'P5', milestone: 'Enterprise & insurance expansion' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[var(--sky)] rounded-2xl">
                    <span className="w-12 h-12 rounded-xl bg-[var(--blue)] text-white flex items-center justify-center font-bold text-sm">
                      {item.phase}
                    </span>
                    <p className="font-medium">{item.milestone}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="gradient-border p-8">
              <span className="pill bg-[var(--coral)] text-white mb-4 inline-block">Our Ask</span>
              <h3 className="display-font text-3xl font-bold mb-4">
                Seed Funding
              </h3>
              <p className="text-[var(--slate-light)] mb-8">
                To move from validated prototype to production deployment with paying customers.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Cloud & AI Infrastructure', value: '40%', color: 'var(--blue)' },
                  { label: 'Engineering & Development', value: '35%', color: 'var(--coral)' },
                  { label: 'Security & Compliance', value: '25%', color: 'var(--slate-light)' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{item.label}</span>
                      <span className="font-bold">{item.value}</span>
                    </div>
                    <div className="h-3 bg-[var(--sky)] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: item.value, background: item.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-[var(--slate-light)] mt-6">
                Also seeking: Enterprise pilots, Legal/healthcare advisors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="blob w-96 h-96 bg-[var(--coral-light)] -left-48 top-0"></div>
        <div className="blob w-80 h-80 bg-[var(--sky-dark)] -right-32 bottom-0"></div>

        <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
          <h2 className="display-font text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform medical evidence review?
          </h2>
          <p className="text-xl text-[var(--slate-light)] mb-10">
            Verified. Traceable. Defensible.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="btn-primary">Request Demo</button>
            <button className="btn-secondary">Contact Us</button>
          </div>

          <div className="flex justify-center gap-6 text-[var(--slate-light)]">
            <a href="mailto:contact@medbrief.ai" className="hover:text-[var(--blue)] transition-colors">contact@medbrief.ai</a>
            <span>•</span>
            <a href="#" className="hover:text-[var(--blue)] transition-colors">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrototypeC;
