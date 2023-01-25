import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import style from './style.module.scss'
import TechTalentCard from '../../components/tech-talent-card'
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
import HeroCard from '../../public/assets/heroCard.png'

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
              We make it fast & hassle-free to onboard top IT talent from Latin
              America and Eastern Europe.
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

        <div className={style.longTermPartner}>
          <h2 className={style.title}>Your long term tech partner</h2>

          <div className={style.majorContainer}>
            <div className={style.container}>
              <h4>
                <div className={style.indicator}>1</div> Time savings:
              </h4>

              <h2>45h</h2>

              <p>saved on avg for your tech team for each role</p>
            </div>

            <div className={style.container2}>
              <h4>
                <div className={style.indicator}>2</div> Client lifetime:
              </h4>

              <h2>2+</h2>

              <p>years average client partnership</p>
            </div>

            <div className={style.container3}>
              <h4>
                <div className={style.indicator}>3</div> Cost Savings:
              </h4>

              <h2>40-50%</h2>

              <p>saving on development costs</p>
            </div>
          </div>
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
