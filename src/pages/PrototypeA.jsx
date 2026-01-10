// Prototype A: "Corporate Precision"
// Editorial/magazine aesthetic with geometric elegance
// Fonts: Playfair Display (display) + DM Sans (body)
// Colors: Navy (#0A1628) + White + Gold accent (#C9A962)

function PrototypeA() {
  return (
    <div className="prototype-a">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .prototype-a {
          --navy: #0A1628;
          --navy-light: #162034;
          --gold: #C9A962;
          --gold-light: #E8D5A8;
          --cream: #FAFAF8;
          --gray: #6B7280;
          font-family: 'DM Sans', sans-serif;
          color: var(--navy);
          background: var(--cream);
        }

        .prototype-a .display-font {
          font-family: 'Playfair Display', serif;
        }

        .prototype-a section {
          position: relative;
          overflow: hidden;
        }

        .prototype-a .geometric-line {
          position: absolute;
          background: var(--gold);
          opacity: 0.3;
        }

        .prototype-a .section-number {
          font-family: 'Playfair Display', serif;
          font-size: 8rem;
          font-weight: 700;
          color: var(--navy);
          opacity: 0.03;
          position: absolute;
          top: -2rem;
          left: -1rem;
          line-height: 1;
          pointer-events: none;
        }

        .prototype-a .gold-bar {
          width: 60px;
          height: 3px;
          background: var(--gold);
          margin-bottom: 1.5rem;
        }

        .prototype-a .card-editorial {
          background: white;
          border: 1px solid rgba(10, 22, 40, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .prototype-a .card-editorial:hover {
          border-color: var(--gold);
          box-shadow: 0 20px 40px rgba(10, 22, 40, 0.08);
          transform: translateY(-4px);
        }

        .prototype-a .btn-primary {
          background: var(--navy);
          color: white;
          padding: 1rem 2.5rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.75rem;
          transition: all 0.3s ease;
          border: 2px solid var(--navy);
        }

        .prototype-a .btn-primary:hover {
          background: transparent;
          color: var(--navy);
        }

        .prototype-a .btn-secondary {
          background: transparent;
          color: var(--navy);
          padding: 1rem 2.5rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.75rem;
          border: 2px solid var(--navy);
          transition: all 0.3s ease;
        }

        .prototype-a .btn-secondary:hover {
          background: var(--navy);
          color: white;
        }

        .prototype-a .stat-box {
          border-left: 3px solid var(--gold);
          padding-left: 1.5rem;
        }

        .prototype-a .team-card {
          position: relative;
        }

        .prototype-a .team-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--gold);
          transition: width 0.4s ease;
        }

        .prototype-a .team-card:hover::after {
          width: 100%;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .prototype-a .animate-in {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative bg-white">
        <div className="geometric-line w-px h-96 top-0 left-1/4"></div>
        <div className="geometric-line w-px h-64 bottom-0 right-1/3"></div>
        <div className="geometric-line h-px w-48 top-1/4 right-0"></div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--gold)] mb-6">
              Medical-Legal Intelligence
            </p>
            <h1 className="display-font text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Turn Medical Records Into <span className="italic">Litigation-Ready</span> Evidence
            </h1>
            <p className="text-lg text-[var(--gray)] mb-10 max-w-lg">
              MedBrief uses specialty-trained medical AI to extract, verify, and structure clinical information — with every data point traceable to its source.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">Request Demo</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-[var(--navy-light)] rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-white/20 rounded-sm flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-white/40 text-xs tracking-widest uppercase">
                Platform Preview
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-[var(--gold)]"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 relative">
        <span className="section-number">02</span>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-3xl">
            <div className="gold-bar"></div>
            <h2 className="display-font text-4xl lg:text-5xl font-bold mb-8">
              The Problem
            </h2>
            <p className="text-xl text-[var(--gray)] mb-12">
              Personal injury litigation relies on medical evidence, yet translating clinical records into legal arguments is time-consuming, expensive, and unreliable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { num: '01', title: 'Volume Overwhelm', desc: 'Firms receive hundreds to thousands of pages per case — handwritten notes, faxed documents, scanned reports from multiple providers.' },
              { num: '02', title: 'Skills Gap', desc: 'Lawyers aren\'t trained to interpret clinical data. Physicians aren\'t trained to identify legally material facts.' },
              { num: '03', title: 'AI Fails Here', desc: 'Generic AI tools hallucinate and lack the precision and source traceability required in legal and medical settings.' }
            ].map((item, i) => (
              <div key={i} className="card-editorial p-8">
                <span className="display-font text-5xl font-bold text-[var(--gold)] opacity-30">{item.num}</span>
                <h3 className="text-xl font-semibold mt-4 mb-3">{item.title}</h3>
                <p className="text-[var(--gray)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 bg-[var(--navy)] text-white relative">
        <span className="section-number text-white">03</span>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-bar"></div>
              <h2 className="display-font text-4xl lg:text-5xl font-bold mb-8">
                The Solution
              </h2>
              <p className="text-xl text-white/70 mb-10">
                A medical-legal intelligence platform that converts unstructured clinical records into verified, litigation-ready evidence.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Medical-Grade Extraction', desc: 'Processes handwritten notes, scanned charts, and diagnostic reports with clinical precision' },
                  { title: 'Verified & Traceable', desc: 'Every data point linked to source with confidence scores — nothing inferred or hallucinated' },
                  { title: 'Legal Intelligence', desc: 'Conversational interface generates evidence-based arguments grounded in the medical record' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full border border-[var(--gold)] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-[var(--navy-light)] rounded-sm border border-white/10 p-8">
                <div className="h-full border border-white/10 rounded-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                      <svg className="w-10 h-10 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <p className="text-white/40 text-sm tracking-widest uppercase">Workflow Diagram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-32 relative">
        <span className="section-number">04</span>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="gold-bar mx-auto"></div>
            <h2 className="display-font text-4xl lg:text-5xl font-bold mb-6">
              See It In Action
            </h2>
            <p className="text-[var(--gray)]">
              Watch how complex medical records become structured, verified evidence in minutes.
            </p>
          </div>

          <div className="aspect-video bg-[var(--navy)] rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-24 h-24 rounded-full bg-[var(--gold)] flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-[var(--navy)] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-6 left-6 text-white/60 text-sm">
              <span className="font-semibold">3:24</span> • Platform Walkthrough
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-32 bg-[var(--cream)] relative">
        <span className="section-number">05</span>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-bar"></div>
              <h2 className="display-font text-4xl lg:text-5xl font-bold mb-8">
                Market Opportunity
              </h2>
              <p className="text-xl text-[var(--gray)] mb-10">
                Personal injury is our entry point. The same platform extends to insurance, workers' comp, disability, and mass tort.
              </p>

              <div className="space-y-8">
                <div className="stat-box">
                  <p className="display-font text-4xl font-bold text-[var(--navy)]">20-40%</p>
                  <p className="text-[var(--gray)]">of case preparation time spent on medical review</p>
                </div>
                <div className="stat-box">
                  <p className="display-font text-4xl font-bold text-[var(--navy)]">10-30 hrs</p>
                  <p className="text-[var(--gray)]">physician time per complex assessment report</p>
                </div>
                <div className="stat-box">
                  <p className="display-font text-4xl font-bold text-[var(--navy)]">$1,400</p>
                  <p className="text-[var(--gray)]">typical cost for a single physician assessment</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm border border-[var(--navy)]/10">
              <h3 className="display-font text-xl font-bold mb-6">Target Markets</h3>
              <div className="space-y-4">
                {[
                  { label: 'Personal Injury Firms', desc: 'Primary entry point', active: true },
                  { label: 'Insurance Claims', desc: 'Accident, health, disability', active: false },
                  { label: 'Workers\' Compensation', desc: 'Causation analysis', active: false },
                  { label: 'Mass Tort Litigation', desc: 'High-volume medical review', active: false }
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded ${item.active ? 'bg-[var(--gold)]/10 border border-[var(--gold)]' : 'bg-[var(--cream)]'}`}>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-sm text-[var(--gray)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-32 relative">
        <span className="section-number">06</span>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="gold-bar mx-auto"></div>
            <h2 className="display-font text-4xl lg:text-5xl font-bold mb-6">
              Business Model
            </h2>
            <p className="text-[var(--gray)]">B2B SaaS with usage-based pricing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Pay-Per-Case', price: '$70-140', period: '/case', features: ['100-200 pages per case', 'Full extraction & verification', 'Source traceability'] },
              { title: 'Individual', price: '$10,500', period: '/year', features: ['~20,000 pages', '100-150 cases annually', 'Priority support'], featured: true },
              { title: 'Enterprise', price: '$300K', period: '/year', features: ['~1M pages', 'Unlimited users', 'Dedicated support', 'Custom integrations'] }
            ].map((plan, i) => (
              <div key={i} className={`card-editorial p-8 ${plan.featured ? 'border-[var(--gold)] border-2' : ''}`}>
                {plan.featured && (
                  <span className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-4 block">Most Popular</span>
                )}
                <h3 className="display-font text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="mb-6">
                  <span className="display-font text-4xl font-bold">{plan.price}</span>
                  <span className="text-[var(--gray)]">{plan.period}</span>
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-[var(--gray)]">
                      <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-32 bg-[var(--navy)] text-white relative">
        <span className="section-number text-white">07</span>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="gold-bar mx-auto"></div>
            <h2 className="display-font text-4xl lg:text-5xl font-bold mb-6">
              Competitive Landscape
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 font-semibold">Capability</th>
                  <th className="text-center py-4 px-4 font-semibold text-[var(--gold)]">MedBrief</th>
                  <th className="text-center py-4 px-4 font-semibold text-white/60">General AI</th>
                  <th className="text-center py-4 px-4 font-semibold text-white/60">Document OCR</th>
                  <th className="text-center py-4 px-4 font-semibold text-white/60">Legal Research</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Medical Record Extraction', true, false, true, false],
                  ['Handwriting Recognition', true, false, false, false],
                  ['Source Traceability', true, false, false, false],
                  ['Confidence Scoring', true, false, false, false],
                  ['Legal Argument Generation', true, true, false, true],
                  ['Case-Specific Analysis', true, false, false, false]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="py-4 px-4">{row[0]}</td>
                    {[1, 2, 3, 4].map(j => (
                      <td key={j} className="text-center py-4 px-4">
                        {row[j] ? (
                          <svg className={`w-6 h-6 mx-auto ${j === 1 ? 'text-[var(--gold)]' : 'text-white/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 mx-auto text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
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
        <span className="section-number">08</span>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="gold-bar mx-auto"></div>
            <h2 className="display-font text-4xl lg:text-5xl font-bold mb-6">
              Traction & Validation
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '600+', label: 'Pages Processed' },
              { value: '70', label: 'Cases Analyzed' },
              { value: '3+', label: 'Months Active Use' },
              { value: '~$100', label: 'Willingness to Pay/Report' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="display-font text-5xl lg:text-6xl font-bold text-[var(--navy)]">{stat.value}</p>
                <p className="text-[var(--gray)] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {[
              { title: 'Physician Validation', quote: 'Doctors have repeatedly requested additional batches for processing, expressing enthusiasm for the extraction\'s reliability and usefulness.' },
              { title: 'Legal Validation', quote: 'Lawyers confirmed that faster access to structured, reliable medical information would increase productivity and enable earlier case decisions.' }
            ].map((testimonial, i) => (
              <div key={i} className="card-editorial p-8">
                <p className="text-[var(--gold)] font-semibold mb-4">{testimonial.title}</p>
                <p className="text-[var(--gray)] italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-[var(--cream)] relative">
        <span className="section-number">09</span>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="gold-bar mx-auto"></div>
            <h2 className="display-font text-4xl lg:text-5xl font-bold mb-6">
              The Team
            </h2>
            <p className="text-[var(--gray)]">Expertise across law, medicine, and technology</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { role: 'Product Strategy Lead', credential: 'JD Candidate, Penn Law | CS & Chemistry Background' },
              { role: 'Medical Lead', credential: 'Practicing Physician | Decades of Clinical Experience' },
              { role: 'Legal Lead', credential: 'Practicing Lawyer & Professor | Active Law Firm' },
              { role: 'Engineering Lead', credential: 'Production Software Expert | Systems Architecture' }
            ].map((member, i) => (
              <div key={i} className="team-card bg-white p-8">
                <div className="w-20 h-20 bg-[var(--navy)] rounded-full mb-6 flex items-center justify-center">
                  <span className="display-font text-2xl font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <p className="text-[var(--gold)] font-semibold mb-2">{member.role}</p>
                <p className="text-[var(--gray)] text-sm">{member.credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap & Ask */}
      <section className="py-32 relative">
        <span className="section-number">10</span>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="gold-bar"></div>
              <h2 className="display-font text-4xl lg:text-5xl font-bold mb-8">
                Roadmap
              </h2>

              <div className="space-y-6">
                {[
                  { phase: 'Phase 1', milestone: 'Production-ready platform with enterprise security' },
                  { phase: 'Phase 2', milestone: 'End-user web application launch' },
                  { phase: 'Phase 3', milestone: 'Pilot programs with law firms' },
                  { phase: 'Phase 4', milestone: 'First paid deployments' },
                  { phase: 'Phase 5', milestone: 'Enterprise & insurance carrier expansion' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="text-sm font-semibold tracking-widest text-[var(--gold)] w-20 flex-shrink-0">{item.phase}</span>
                    <div className="flex-1 pb-6 border-b border-[var(--navy)]/10">
                      <p>{item.milestone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--navy)] text-white p-10 rounded-sm">
              <h3 className="display-font text-3xl font-bold mb-6">Our Ask</h3>
              <p className="text-white/70 mb-8">
                Funding to move from validated prototype to production deployment with paying customers.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'Cloud & AI Infrastructure', value: '40%' },
                  { label: 'Engineering & Development', value: '35%' },
                  { label: 'Security & Compliance', value: '25%' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{item.label}</span>
                      <span className="text-[var(--gold)]">{item.value}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--gold)] rounded-full"
                        style={{ width: item.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-white/60">
                Also seeking: Enterprise pilot partners, Legal/healthcare technology advisors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[var(--navy)] text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="display-font text-4xl lg:text-6xl font-bold mb-6">
            Transform Medical Evidence Review
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Verified. Traceable. Defensible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary bg-[var(--gold)] border-[var(--gold)] text-[var(--navy)] hover:bg-transparent hover:text-[var(--gold)]">
              Request Demo
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--navy)]">
              Contact Us
            </button>
          </div>

          <div className="flex justify-center gap-8 text-sm text-white/60">
            <a href="mailto:contact@medbrief.ai" className="hover:text-[var(--gold)] transition-colors">contact@medbrief.ai</a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrototypeA;
