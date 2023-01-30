import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import style from './style.module.scss'
import ClientTestimonialCard from '../../components/client-testimonial-card'
import CarouselCaseCard from '../../components/carousel-case-studies-card'
import StartupCard from '../../components/startup-teams-card'
import ServicesCard from '../../components/services-card'
import HiringRetentionCard from '../../components/hiring-retention-card'
import WhyExistsCard from '../../components/why-exist-card'
import BlogCard from '../../components/blog-card'
import ContactUsCard from '../../components/contact-us-card'
import Layout from '../../components/layout'
import Button from '../../components/buttons/accept-button'
import Arrow from '../../public/icons/arrowBlack.svg'
import ArrowDown from '../../public/assets/arrow_down.svg'
import HeroCard from '../../public/assets/heroCard.png'
import StaffCard from '../../public/assets/staffCard.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <div className={style.techTalent}>
          <div className={style.callToActionSection}>
            <h1 className={style.titleTech}>
              Scale your tech team with global talent
            </h1>

            <h6 className={style.techSubText}>
              Every technology project with experienced engineers, designers and
              other IT roles.
            </h6>
            <div className={style.techButton}>
              <Button
                buttonText="Schedule a call"
                icon={Arrow}
                onClickHandler={() => {}}
                color="black"
              />
            </div>
          </div>

          <div className={style.heroCard}>
            <div className={style.heroCardRectangle}>
              <Image
              className={style.heroCardImage}
                src={HeroCard}
                alt="Scale your tech team with global talent"
              />
            </div>
          </div>
        </div>

        <div className={style.staffSection}>
          <h2 className={style.title}>
            Staff your tech roles quickly and effectively without any of the
            administrative burden or recruiting costs.
          </h2>
          <div className={style.staffItems}>
            <div className={style.staffCardContent}>
              <div  className={style.staffCardImage}></div>
            </div>
            <div className={style.staffItemsList}>
              <h3 className={style.subTitle}>
                We thrive only when our clients thrive
              </h3>
              <div className={style.staffItem}>
                <ul>
                  <li>
                    <span className={style.staffItemNumberFocused}>1</span>
                    <span className={style.staffItemTextFocused}>
                      Quickly adapt to increases in workload with additional
                      development resources
                    </span>
                  </li>
                  <li>
                    <span className={style.staffItemNumber}>2</span>
                    <span className={style.staffItemText}>
                      Add team members with highly specialized skills from the
                      global market
                    </span>
                  </li>
                  <li>
                    <span className={style.staffItemNumber}>3</span>
                    <span className={style.staffItemText}>
                      Access to the global talent market without the legwork
                    </span>
                  </li>
                  <li>
                    <span className={style.staffItemNumber}>4</span>
                    <span className={style.staffItemText}>
                      Focus on your core business goals, not routine hiring and
                      screening tasks
                    </span>
                  </li>
                  <li className={style.li_last}>
                    <span className={style.staffItemNumber}>5</span>
                    <span className={style.staffItemText}>
                      Don’t worry about onboarding, HR administration, payroll
                      and compliance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h3 className={style.subLegend}>
            Learn more how Scrumlaunch can help you with Staff Augmentation
          </h3>
          <Image
            src={ArrowDown}
            alt="Scale your tech team with global talent"
          />
          <div></div>
        </div>

        <ClientTestimonialCard />

        <CarouselCaseCard />

        <StartupCard />

        <div className={style.thrive}>
          <h1 className={style.thriveTitle}>
            We thrive by making our clients thrive
          </h1>

          <div className={`${style.separator} ${style.hideSeparator}`} />

          <div className={style.infoThrive}>
            <h5>Acquisitions by Unicorns</h5>

            <span>2</span>
          </div>

          <div className={style.separator} />

          <div className={style.infoThrive}>
            <h5>Сlients raised Seed - Series D funding</h5>

            <span>10+</span>
          </div>

          <div className={style.separator} />

          <div className={style.infoThrive}>
            <h5>Active monthly users across clients’ products</h5>

            <span>100M</span>
          </div>

          <div className={`${style.separator} ${style.hideSeparator}`} />
        </div>

        <ServicesCard />

        <HiringRetentionCard />

        <WhyExistsCard />

        <BlogCard />

        <ContactUsCard />
      </Layout>
    </>
  )
}
