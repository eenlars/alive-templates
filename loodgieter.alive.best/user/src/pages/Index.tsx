import React from 'react';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-black text-blue-900 tracking-tight">VanDerSluis</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#diensten" className="text-gray-600 hover:text-blue-900 transition font-medium text-sm">Diensten</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-900 transition font-medium text-sm">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-900 transition font-medium text-sm">Contact</a>
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-300">
              <a href="#contact" className="border-2 border-blue-900 text-blue-900 px-5 py-2 rounded-full font-bold hover:bg-blue-900 hover:text-white transition text-sm whitespace-nowrap">Vrijblijvend advies</a>
              <a href="tel:0612345678" className="bg-blue-900 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-800 transition text-sm whitespace-nowrap">Bel: 06-123-45678</a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-900 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#diensten" className="block text-gray-600 hover:text-blue-900 transition font-medium py-2">Diensten</a>
              <a href="#portfolio" className="block text-gray-600 hover:text-blue-900 transition font-medium py-2">Portfolio</a>
              <a href="#contact" className="block text-gray-600 hover:text-blue-900 transition font-medium py-2">Contact</a>
              <div className="border-t border-gray-300 pt-4 mt-4 space-y-3">
                <a href="#contact" className="block border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-full font-bold hover:bg-blue-900 hover:text-white transition text-center text-sm">Vrijblijvend advies</a>
                <a href="tel:0612345678" className="block bg-blue-900 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-800 transition text-center text-sm">Bel: 06-123-45678</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 flex items-center overflow-hidden min-h-screen md:min-h-auto flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800"></div>
        <div className="absolute inset-0">
          <img
            src="/_images/t/loodgieter.alive.best/o/d14aca0aec486dab/v/orig.webp"
            alt="Professional plumbing work"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Uw vertrouwde loodgieter
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-10 leading-relaxed max-w-xl font-light">
              Meer dan 20 jaar ervaring in alle soorten loodgieterswerkzaamheden. Van spoedreparaties tot complete renovaties. Snelle reactie, vakkundig werk, eerlijke prijzen.
            </p>
            <div className="flex flex-col gap-3 md:gap-5">
              <a href="tel:0612345678" className="bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-lg hover:shadow-xl text-center md:text-left md:inline-block w-full md:w-auto">
                Bel nu: 06-123-45678
              </a>
              <a href="#contact" className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition text-center md:text-left md:inline-block w-full md:w-auto">
                Vrijblijvend advies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section id="diensten" className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">Onze diensten</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-light px-2">Compleet aanbod van professionele loodgieterswerkzaamheden voor particulieren en bedrijven</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Spoedreparaties",
                description: "Lekkende kranen, gebroken leidingen, verstoppingen. Snelle hulp bij spoed.",
                icon: "01"
              },
              {
                title: "Badkamerrenovatie",
                description: "Complete vernieuwing van uw badkamer met installatie van alle sanitaire voorzieningen.",
                icon: "02"
              },
              {
                title: "CV & Verwarming",
                description: "Installatie, onderhoud en reparatie van uw verwarmingssysteem en cv-ketels.",
                icon: "03"
              },
              {
                title: "Rioolwerk",
                description: "Inspectie, reiniging en vernieuwing van rioolleidingen en afvoerstelsels.",
                icon: "04"
              },
              {
                title: "Gasinstallaties",
                description: "Veilige installatie, inspectie en onderhoud van gascircuits volgens veiligheidsstandaarden.",
                icon: "05"
              },
              {
                title: "24/7 Noodservice",
                description: "Dag en nacht bereikbaar voor plotselinge loodgiersnood. Geen wachtlijsten.",
                icon: "06"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-6 md:p-10 rounded-2xl border border-gray-200 hover:border-blue-900 hover:shadow-xl transition duration-300 group">
                <div className="text-4xl md:text-5xl font-black text-blue-900 mb-4 md:mb-5 group-hover:scale-110 transition duration-300">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">Recent werk</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-light px-2">Bekijk een selectie van onze succesvolle projecten en loodgieterswerkzaamheden</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Complete Badkamerrenovatie",
                category: "Badkamerrenovatie",
                image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop"
              },
              {
                title: "Spoedreparatie Waterlekkaage",
                category: "Spoedreparaties",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop"
              },
              {
                title: "Moderne Keukeninstallatie",
                category: "Keukendiensten",
                image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=400&fit=crop"
              },
              {
                title: "CV-Systeem Renovatie",
                category: "CV & Verwarming",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
              },
              {
                title: "Toilet- & Bidet Installatie",
                category: "Sanitaire Werken",
                image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop"
              },
              {
                title: "Rioolreiniging & Inspectie",
                category: "Rioolwerk",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop"
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group">
                <div className="relative h-48 md:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-5 md:p-8">
                  <p className="text-xs md:text-sm text-blue-900 font-bold mb-2 md:mb-3 uppercase tracking-wide">{project.category}</p>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">Wat klanten zeggen</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-light px-2">Beoordelingen van tevreden klanten die VanDerSluis hebben vertrouwd</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Jan Pieterse",
                text: "Loodgieters van VanDerSluis hebben mijn badkamer volledig gerenoveerd. Vakkundig werk, schoon werkterrein en alles op tijd afgeleverd.",
                rating: 5
              },
              {
                name: "Maria de Vries",
                text: "Noodgeval met waterlek. Binnen 30 minuten ter plekke en het probleem opgelost. Heel professioneel en eerlijke prijs. Volgende keer weer!",
                rating: 5
              },
              {
                name: "Robert Jansen",
                text: "Al 5 jaar klant voor onderhoud en reparaties. Betrouwbare partners. Ze kennen ons huis en werken efficiënt. Geen gedoe, gewoon goed werk.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-10 rounded-2xl border border-gray-200 hover:border-blue-900 hover:shadow-lg transition duration-300">
                <div className="flex mb-4 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl md:text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed italic text-base md:text-lg">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-28 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight">Contact opnemen</h2>
            <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto font-light px-2">Bel, mail of stuur ons een bericht - we helpen u graag!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="bg-blue-800/40 backdrop-blur border border-blue-600/30 p-6 md:p-10 rounded-2xl text-center hover:border-white/20 transition">
              <div className="text-3xl md:text-4xl font-black text-white mb-3 md:mb-4">T</div>
              <h3 className="font-bold mb-2 md:mb-3 text-base md:text-lg">Telefoon</h3>
              <a href="tel:0612345678" className="text-blue-100 hover:text-white transition text-lg md:text-xl font-semibold">06-123-45678</a>
              <p className="text-xs md:text-sm text-blue-200 mt-2">24/7 bereikbaar</p>
            </div>
            <div className="bg-blue-800/40 backdrop-blur border border-blue-600/30 p-6 md:p-10 rounded-2xl text-center hover:border-white/20 transition">
              <div className="text-3xl md:text-4xl font-black text-white mb-3 md:mb-4">M</div>
              <h3 className="font-bold mb-2 md:mb-3 text-base md:text-lg">Email</h3>
              <a href="mailto:info@vandersluis.nl" className="text-blue-100 hover:text-white transition text-lg md:text-xl font-semibold">info@vandersluis.nl</a>
              <p className="text-xs md:text-sm text-blue-200 mt-2">Respons binnen 24 uur</p>
            </div>
            <div className="bg-blue-800/40 backdrop-blur border border-blue-600/30 p-6 md:p-10 rounded-2xl text-center hover:border-white/20 transition">
              <div className="text-3xl md:text-4xl font-black text-white mb-3 md:mb-4">A</div>
              <h3 className="font-bold mb-2 md:mb-3 text-base md:text-lg">Bezoeken</h3>
              <p className="text-blue-100 text-base md:text-lg">Industrieweg 25<br />1223 AE Hilversum</p>
            </div>
          </div>

          <form className="bg-blue-800/30 backdrop-blur border border-blue-600/30 p-6 md:p-10 rounded-3xl max-w-2xl mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">Naam</label>
              <input type="text" className="w-full px-5 py-3 rounded-xl bg-blue-900/50 border border-blue-600/50 text-white placeholder-blue-400 focus:border-white focus:outline-none transition" placeholder="Uw naam" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">Email</label>
              <input type="email" className="w-full px-5 py-3 rounded-xl bg-blue-900/50 border border-blue-600/50 text-white placeholder-blue-400 focus:border-white focus:outline-none transition" placeholder="Uw email" />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3">Bericht</label>
              <textarea rows={5} className="w-full px-5 py-3 rounded-xl bg-blue-900/50 border border-blue-600/50 text-white placeholder-blue-400 focus:border-white focus:outline-none transition resize-none" placeholder="Uw vraag of opmerking"></textarea>
            </div>
            <button className="w-full bg-white text-blue-900 font-bold py-4 rounded-full hover:bg-blue-50 transition shadow-lg hover:shadow-xl">
              Bericht versturen
            </button>
          </form>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-28 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">Waarom VanDerSluis</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-light px-2">Meer dan 20 jaar ervaring en duizenden tevreden klanten</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-blue-900 hover:shadow-lg transition duration-300">
              <div className="text-4xl md:text-5xl font-black text-blue-900 mb-4">✓</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Vakkundig</h3>
              <p className="text-gray-600 leading-relaxed">Onze loodgieters zijn gecertificeerd en ervaren in alle soorten installaties en reparaties.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-blue-900 hover:shadow-lg transition duration-300">
              <div className="text-4xl md:text-5xl font-black text-blue-900 mb-4">⚡</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Snel & Betrouwbaar</h3>
              <p className="text-gray-600 leading-relaxed">Snelle respons en professioneel afgewerkte klussen. 24/7 bereikbaar voor spoedgevallen.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-blue-900 hover:shadow-lg transition duration-300">
              <div className="text-4xl md:text-5xl font-black text-blue-900 mb-4">💰</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Eerlijke Prijzen</h3>
              <p className="text-gray-600 leading-relaxed">Transparante prijzen zonder verborgen kosten. Vrijblijvend advies vooraf.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-blue-900 hover:shadow-lg transition duration-300">
              <div className="text-4xl md:text-5xl font-black text-blue-900 mb-4">🏆</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Ervaren</h3>
              <p className="text-gray-600 leading-relaxed">Meer dan 20 jaar ervaring met duizenden succesvolle projecten in de regio.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-blue-900 hover:shadow-lg transition duration-300">
              <div className="text-4xl md:text-5xl font-black text-blue-900 mb-4">🔧</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Compleet Aanbod</h3>
              <p className="text-gray-600 leading-relaxed">Van reparaties tot complete renovaties, wij doen het allemaal.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-blue-900 hover:shadow-lg transition duration-300">
              <div className="text-4xl md:text-5xl font-black text-blue-900 mb-4">📋</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Garantie</h3>
              <p className="text-gray-600 leading-relaxed">Alle werkzaamheden worden professioneel afgewerkt met garantie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 md:py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <h4 className="text-white font-black mb-3 md:mb-5 text-base md:text-lg">VanDerSluis</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Loodgieters met meer dan 20 jaar vakmanschap. Wij zijn uw betrouwbare partner voor alle loodgieterswerkzaamheden in de regio.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 md:mb-5 text-xs md:text-sm uppercase tracking-wide">Diensten</h4>
              <ul className="text-xs md:text-sm space-y-2 md:space-y-3">
                <li><a href="#diensten" className="text-gray-400 hover:text-white transition">Spoedreparaties</a></li>
                <li><a href="#diensten" className="text-gray-400 hover:text-white transition">Badkamerrenovatie</a></li>
                <li><a href="#diensten" className="text-gray-400 hover:text-white transition">CV & Verwarming</a></li>
                <li><a href="#diensten" className="text-gray-400 hover:text-white transition">24/7 Noodservice</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 md:mb-5 text-xs md:text-sm uppercase tracking-wide">Contact</h4>
              <ul className="text-xs md:text-sm space-y-2 md:space-y-3">
                <li><a href="tel:0612345678" className="text-gray-400 hover:text-white transition">06-123-45678</a></li>
                <li><a href="mailto:info@vandersluis.nl" className="text-gray-400 hover:text-white transition">info@vandersluis.nl</a></li>
                <li className="text-gray-500">24/7 bereikbaar</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 md:mb-5 text-xs md:text-sm uppercase tracking-wide">Uren</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                Ma-Vr: 7:00 - 18:00<br />
                Za-Zo: 8:00 - 12:00<br />
                <span className="font-semibold text-gray-300">Nood: 24/7</span>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 md:pt-10 text-center text-xs md:text-sm text-gray-500">
            <p>&copy; 2024 VanDerSluis Loodgietersbedrijf. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
