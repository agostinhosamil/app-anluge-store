import { Fragment } from 'react'

import { AboutCompanySection } from 'partners@components/Sections/AboutCompany'
import { AboutPartnersSection } from 'partners@components/Sections/AboutPartners'
import { AboutProjectsSection } from 'partners@components/Sections/AboutProjects'
import { BlogSection } from 'partners@components/Sections/Blog'
import { PartnersCallToActionSection } from 'partners@components/Sections/PartnersCallToAction'
import { ServicesSection } from 'partners@components/Sections/Services'

export default async function PartnersHomePage() {
  return (
    <Fragment>
      <AboutCompanySection />
      <ServicesSection />
      <AboutProjectsSection />

      <AboutPartnersSection />
      <PartnersCallToActionSection />

      <section className="about-hiring-banner-section">
        <div className="section-body">
          <div className="about-hiring-banner-section-content">
            <div
              className="banner"
              style={{
                backgroundImage: `url('/assets/partners/images/banner-0000.png')`
              }}
            >
              <i>Carreiras</i>
              <h2>Gostaria de fazer parte da nossa equipe?</h2>
              <a href="#">Veja vagas abertas</a>
            </div>
          </div>
        </div>
      </section>

      <BlogSection />
    </Fragment>
  )
}
