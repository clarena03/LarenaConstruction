import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const handleNavClick = (tab) => {
    setActiveTab(tab)
    // Smooth scroll to top when switching tabs
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Header / Navigation */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <div className="logo-placeholder">
              {/* Logo will go here */}
              <div className="logo-box">LOGO</div>
            </div>
            <div className="company-info">
              <h1>Larena Construction, LLC</h1>
              <p className="tagline">Commercial & Residential Services</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="container">
          <a
            href="#home"
            className={activeTab === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          >
            Home
          </a>
          <a
            href="#contact"
            className={activeTab === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
          >
            Contact Us
          </a>
          <a
            href="#residential"
            className={activeTab === 'residential' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('residential'); }}
          >
            Residential
          </a>
          <a
            href="#commercial"
            className={activeTab === 'commercial' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('commercial'); }}
          >
            Commercial
          </a>
          <a
            href="#cabinetry"
            className={activeTab === 'cabinetry' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('cabinetry'); }}
          >
            Cabinetry
          </a>
          <a
            href="#residential-photos"
            className={activeTab === 'residential-photos' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('residential-photos'); }}
          >
            Residential Photos
          </a>
          <a
            href="#commercial-photos"
            className={activeTab === 'commercial-photos' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('commercial-photos'); }}
          >
            Commercial Photos
          </a>
        </div>
      </nav>

      {/* Experience Banner */}
      <div className="experience-banner">
        <div className="container">
          <p>Over 25 years of Experience | Licensed | Fully Insured</p>
        </div>
      </div>

      {/* Main Image Section */}
      <section className="hero">
        <div className="hero-image">
          {/* Main construction image would go here */}
        </div>
      </section>

      {/* Feedback Banner */}
      <div className="feedback-banner">
        <div className="container">
          <p>If you have any feedback on how we can make our new website better please do contact us and we would like to hear from you.</p>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'home' && (
        <section className="content fade-in">
          <div className="container">
            <div className="content-text">
              <p>
                Larena Construction, LLC has been serving the residential and commercial
                communities for over 25 years. We are headquartered in Livingston, New Jersey and
                serve most areas of New Jersey.
              </p>

              <p>
                We specialize in project management, home renovations, damage restoration and
                custom building. We can handle any and every phase of your remodel or addition
                whether it be to your home or business.
              </p>

              <p>
                We provide all of the services necessary to make your vision become reality.
                Remodeling a home can be a multifaceted task and it is often necessary for us
                to hire subcontractors. You can rest easy knowing that we will select the right
                contractors for your job. We have been in business for over 25 years and many
                of the sub-contractors we work with have been working with us since we started
                and all share the same work ethic we do.
              </p>

              <p>
                At our Livingston, New Jersey location we also host a full service custom
                cabinetry shop where we are able to fabricate beautiful custom cabinetry.
              </p>
            </div>

            <div className="accreditation">
              <p>Accredited by the BBB</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'contact' && (
        <section className="content fade-in">
          <div className="container">
            <div className="content-text">
              <h2 className="page-title">Contact Us</h2>

              <p>
                For more information or questions about our products & services, or to schedule
                an estimate please contact us:
              </p>

              <div className="contact-info">
                <p><strong>Phone:</strong> (973) 422-9000</p>
                <p><strong>Fax:</strong> (973) 422-9026</p>

                <p className="contact-section-title">Larena Construction, LLC</p>
                <p>88 Naylon Avenue</p>
                <p>Livingston, New Jersey 07039</p>

                <p className="contact-section-title">Email:</p>
                <p>
                  <a href="mailto:Paul@larenaconstruction.com">Paul@larenaconstruction.com</a> or{' '}
                  <a href="mailto:Jen@larenaconstruction.com">Jen@larenaconstruction.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'residential' && (
        <section className="content fade-in">
          <div className="container">
            <div className="content-text">
              <h2 className="page-title">Residential Services</h2>

              <ul className="services-list">
                <li>Additions</li>
                <li>New Construction</li>
                <li>Renovations</li>
                <li>General Contracting Services</li>
              </ul>

              <p>
                Whether you want to build a new home, add another level to an
                existing home, maximize existing living space, renovate a bathroom, kitchen, home
                office, entertainment area or home theater area, we are able to guide you
                through each phase of the project in a professional manner allowing you to enjoy the
                project rather than dread it.
              </p>

              <p>
                Larena Construction will secure any necessary permits, schedule and meet
                with inspectors, assist in project development, obtain quality materials,
                oversee and coordinate daily scheduling of our employees, as well as other tradesmen,
                to guarantee that work is completed as scheduled and within budget. Lastly, we
                provide a final "walk through" to ensure full customer satisfaction and a one
                year warranty in addition to any manufacturer warranties that may exist.
              </p>

              <p>
                Our skilled carpenters bring our client's needs and visions from the
                concept phase to reality.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'commercial' && (
        <section className="content fade-in">
          <div className="container">
            <div className="content-text">
              <h2 className="page-title">Commercial Services</h2>

              <div className="service-highlight">
                <h3>Service!</h3>
                <p>
                  Our Vision is to offer the best products and services to our customers. To
                  always exceed customer expectations resulting in customer delight. Our mission is to
                  provide highest possible quality at the right price.
                </p>
                <p>
                  Our commitment to offer nothing but the very best is reflected in our vision &
                  mission statements. We exist because of our customer and we are very grateful to
                  our customers who have made us what we are today. We now strive to take our
                  organization to the next level so that we can serve our customers even better and
                  continue to keep them fully satisfied.
                </p>
              </div>

              <ul className="services-list">
                <li>Project Management</li>
                <li>Additions</li>
                <li>Renovations</li>
                <li>New Construction</li>
              </ul>

              <p>
                Our Project Managers efficiently manage and carry out every phase of a project
                whether a client is erecting a new structure, adding footage or maximizing
                existing space. Larena Construction will secure any necessary permits and
                inspections, assist in project development, oversee and coordinate daily scheduling of our
                employees as well as any other tradesman to guarantee that work is completed as
                scheduled and within budget and finally provide a final walk through to ensure
                full customer satisfaction.
              </p>

              <p>
                Our Project Management services include reviewing site plans and
                architectural drawings, obtaining permits and inspections, quality materials at
                the best price, organizing the schedules of all contractors and tradesman
                involved in the project while remaining within the set budget and time guidelines.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'cabinetry' && (
        <section className="content fade-in">
          <div className="container">
            <div className="content-text">
              <h2 className="page-title">Cabinetry</h2>

              <p>
                In addition to our custom cabinetry which is designed and constructed in our
                Livingston, New Jersey shop, to fit our clients specific needs, we also offer the following semi-custom cabinetry lines:
              </p>

              <div className="cabinet-brands">
                <div className="brand-item">
                  <p><strong>Diamond Cabinets</strong></p>
                </div>
                <div className="brand-item">
                  <p><strong>Decora Cabinets</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'residential-photos' && (
        <section className="content fade-in">
          <div className="container">
            <div className="content-text">
              <h2 className="page-title">Residential Photo Gallery</h2>
              <p>Residential project photos will be displayed here.</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'commercial-photos' && (
        <section className="content fade-in">
          <div className="container">
            <div className="content-text">
              <h2 className="page-title">Commercial Photo Gallery</h2>
              <p>Commercial project photos will be displayed here.</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'sitemap' && (
        <section className="content fade-in">
          <div className="container">
            <div className="content-text">
              <h2 className="page-title">Site Map</h2>
              <p>Browse all sections of our website:</p>

              <div className="sitemap-grid">
                <div className="sitemap-item">
                  <h3>
                    <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                      Home
                    </a>
                  </h3>
                  <p>Main page with company overview, mission, and BBB accreditation</p>
                </div>

                <div className="sitemap-item">
                  <h3>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                      Contact Us
                    </a>
                  </h3>
                  <p>Get in touch - phone, fax, email, and physical address</p>
                </div>

                <div className="sitemap-item">
                  <h3>
                    <a href="#residential" onClick={(e) => { e.preventDefault(); handleNavClick('residential'); }}>
                      Residential
                    </a>
                  </h3>
                  <p>Residential services including additions, renovations, and new construction</p>
                </div>

                <div className="sitemap-item">
                  <h3>
                    <a href="#commercial" onClick={(e) => { e.preventDefault(); handleNavClick('commercial'); }}>
                      Commercial
                    </a>
                  </h3>
                  <p>Commercial services and project management solutions</p>
                </div>

                <div className="sitemap-item">
                  <h3>
                    <a href="#cabinetry" onClick={(e) => { e.preventDefault(); handleNavClick('cabinetry'); }}>
                      Cabinetry
                    </a>
                  </h3>
                  <p>Custom and semi-custom cabinetry options from our Livingston shop</p>
                </div>

                <div className="sitemap-item">
                  <h3>
                    <a href="#residential-photos" onClick={(e) => { e.preventDefault(); handleNavClick('residential-photos'); }}>
                      Residential Photos
                    </a>
                  </h3>
                  <p>Gallery of our residential construction projects</p>
                </div>

                <div className="sitemap-item">
                  <h3>
                    <a href="#commercial-photos" onClick={(e) => { e.preventDefault(); handleNavClick('commercial-photos'); }}>
                      Commercial Photos
                    </a>
                  </h3>
                  <p>Gallery of our commercial construction projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>
              <a
                href="#sitemap"
                onClick={(e) => { e.preventDefault(); handleNavClick('sitemap'); }}
              >
                Site Map
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
