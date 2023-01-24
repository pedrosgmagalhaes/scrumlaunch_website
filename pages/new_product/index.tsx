import React from 'react'
import Head from 'next/head'
import style from './style.module.scss'
import Image from 'next/image'
import { useState } from 'react';

import ClientImage1 from '../../public/assets/client-type-images/client1.jpg'
import ClientImage2 from '../../public/assets/client-type-images/client2.jpg'
import ClientImage3 from '../../public/assets/client-type-images/client3.jpg'

import BuildProductsImage from '../../public/assets/build-products/hero.jpg'

import BusinessSolutionsTabImage from '../../public/assets/business-solutions/tab-image.jpg'
import BusinessSolutionsContactLogoImage from '../../public/assets/business-solutions/logo.jpg'
import BusinessSolutionsContactCampusReelImage from '../../public/assets/business-solutions/CampusReel.jpg'
import BusinessSolutionsContactBurgerImage from '../../public/assets/business-solutions/burger.jpg'
import BusinessSolutionsContactFormTextImage from '../../public/assets/business-solutions/text.svg'
import BusinessSolutionsContactFooterImage from '../../public/assets/business-solutions/footer.svg'

import CaseStudiesCampusReelMobileImage from '../../public/assets/case-studies/campusReelMobile.svg'
import CaseStudiesCampusReelDesktopImage from '../../public/assets/case-studies/campusReelDesktop.svg'
import CaseStudiesGipperMobileImage from '../../public/assets/case-studies/gipperMobile.svg'
import CaseStudiesGipperDesktopImage from '../../public/assets/case-studies/gipperDesktop.svg'


import TechnologiesCarousel from '../../components/carousel-technologies'

import CarouselWithFade from '../../components/carousel-with-fade'

import StartupCard from '../../components/startup-teams-card'
import ContactUsCard from '../../components/contact-us-card'
import Layout from '../../components/layout'
import Button from '../../components/buttons/accept-button'
import Arrow from '../../public/icons/arrowBlack.svg'

const clientsType = [
  {
    image: ClientImage1,
    imageAlt: 'client-1',
    description: 'Early-stage startups that need a tech team',
    backgroundColor: '#E2CCFF'
  },
  {
    image: ClientImage2,
    imageAlt: 'client-2',
    description: 'Established companies launching a new product or scaling an existing one',
    backgroundColor: '#FFD7C2'
  },
  {
    image: ClientImage3,
    imageAlt: 'client-3',
    description: 'Organizations that need to digitize',
    backgroundColor: '#97F7E0'
  },
]

const developmentProcess = [
  {
    title: 'Discovery',
    content: 'We gather your requirements, analyze your business model and dig into the best solutions. Then we make a rough estimation for the project.'
  },
  {
    title: 'UI/UX Design',
    content: 'We conduct a deep research to enable our clients intuitive UX and make prototypes, which are then tuned to your company identity in UI mockups',
    activeContainer: true
  },
  {
    title: 'System Design',
    content: 'We build a roadmap to prioritize features, define the tech stack and architecture, and get a clear vision of the development process. '
  },
  {
    title: 'Code',
    content: 'We set up the environment for data storage, APIs, cloud computing, etc.'
  },
  {
    title: 'Test',
    content: 'We build a detailed test plan and use a combination of automated, manual and vulnerability testing to make sure your product is ready for production.'
  },
  {
    title: 'Deploy & Iterate',
    content: 'We remain your tech partner when the product is up and running, making sure that you can adjust your business trajectory in accordance with user feedback.'
  },
]

function checkIsBelowActive(index) {
  const indexOfActive = developmentProcess.map(e => e.activeContainer).indexOf(true);
  if (index > indexOfActive) {
    return false
  }
  return true
}



export default function Home() {
  const [scheduleBusinessSolutionEmail, setBusinessSolutionEmail] = useState();

  const handlePasswordChange = (e) => {
    setBusinessSolutionEmail(e.target.value);
  };

  const handleSubmitForm = () => {
    console.log(`${scheduleBusinessSolutionEmail} sent`)
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <div className={style.techTalent}>
          <h1 className={style.titleTech}>
          Launch and scale your <br />
          business faster with us.
          </h1>

          <Button
            buttonText="Schedule a call"
            icon={Arrow}
            onClickHandler={() => {}}
            color="black"
          />

          
          {/* слайдер */}
        </div>

        <section className={style.carouselWithFade}>
          <CarouselWithFade />
        </section>

        <section className={style.longTermPartner} >

          <h2>Your long term tech partner</h2>

          <div className={style.majorContainer}>
            {clientsType.map((client, index) => (
              <div key={index} className={style.container} style={{ backgroundColor: client.backgroundColor }}>
                <h4>
                  <div className={style.indicator}>{ index + 1 }</div>
                  <Image src={client.image} alt={client.imageAlt} />
                </h4>

                <span>{ client.description }</span>
              </div>
            ))}
          </div>

        </section>

        <section className={style.developmentProcess}>

          <h2>Our Development Process</h2>

          <div className={style.mainContainer}>
            {developmentProcess.map((process, index) => (
              <div key={index} className={process.activeContainer ? `${style.container} ${style.active}` : style.container}>
                <h3 className={style.processName}>{process.title}</h3>
                <div className={checkIsBelowActive(index) ? `${style.number} ${style.active}` : style.number }> {index + 1} </div>
                <p className={style.content}>{process.content}</p>
              </div>
            ))}
          </div>

        </section>


        {/* <CarouselCaseCard /> */}

        <section className={style.buildProducts}>

          <h2>We build great products whether from scratch or starting with legacy code</h2>

          <Image src={BuildProductsImage} alt='build products hero' />

          <div className={style.textContainer}>
            <div className={style.featuresBlock}>
              <p>
              Full-cycle development in 2 modes:
              </p>
              <ul>
                <li>
                  Build from scratch
                </li>
                <li>
                  Take over legacy code
                </li>
              </ul>
            </div>
            <div className={style.featuresBlock}>
              <p>
              High touch & frequent communication with regular reporting
              </p>
            </div>
            <div className={style.featuresBlock}>
              <p>
                Trasparent project management and velocity tracking
              </p>
            </div>
            <div className={style.featuresBlock}>
              <p>
              Cost-effective and easy to onboard
              </p>
              <ul>
                <li>
                  We have you covered with taxes, payroll, and employee benefits
                </li>
              </ul>
            </div>
          </div>

        </section>

        <section className={style.businessSolutions}>
          <h2>
            We offer solutions tailored to your business objectives
          </h2>

          <div className={style.contentContainer}>

              <div className={style.tabContainer}>
                <div className={style.tab} style={{ backgroundColor: '#FFD7C2' }}>
                  <h4>
                    Development
                  </h4>
                  <ul>
                    <li>Web & Mobile Development</li>
                    <li>DevOps</li>
                    <li>Quality Assurance</li>
                    <li>Data Engineering</li>
                  </ul>
                </div>
                <div  className={style.tab} style={{ backgroundColor: '#E2CCFF' }}>
                  <h4>
                    Design
                  </h4>
                  <ul>
                    <li>UI/UX Design</li>
                    <li>Prototyping</li>
                    <li>Illustration</li>
                    <li>UI/UX Auditing</li>
                  </ul>
                </div>
              </div>
              <div className={style.tabContainer}>
                <div className={style.contactTab}>
                  <div className={style.header}>
                    <Image src={BusinessSolutionsContactLogoImage} alt='business solutions contact logo' />
                    <Image src={BusinessSolutionsContactCampusReelImage} alt='business solutions contact campus reel' />
                    <Image src={BusinessSolutionsContactBurgerImage} alt='business solutions contact burger' />
                  </div>
                  <div className={style.contactForm}>
                    <Image src={BusinessSolutionsContactFormTextImage} alt='business solutions contact form text' />
                    <form action="#">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={scheduleBusinessSolutionEmail}
                      />
                      <button onClick={handleSubmitForm}>Schedule a Demo</button>
                    </form>
                  </div>
                  <div className={style.footer}>
                    <Image src={BusinessSolutionsContactFooterImage} alt='business solutions contact footer'/>
                  </div>
                </div>
              </div>
              <div className={style.tabContainer}>
                <Image src={BusinessSolutionsTabImage} alt='business solutions tab image' />
                <div className={style.tab} style={{ backgroundColor: '#97F7E0' }}>
                  <h4>
                    IT & Operations Support
                  </h4>
                  <ul>
                    <li>Product Strategy</li>
                    <li>User Research</li>
                    <li>Systems Integration</li>
                    <li>Staff Augmentation</li>
                  </ul>
                  <Button
                    buttonText="Show more"
                    icon={Arrow}
                    onClickHandler={() => {}}
                    color="black"
                  />
                </div>
              </div>
          </div>
        </section>

        <StartupCard />

        <section className={style.caseStudies}>
          <h2>
          Case Studies we are proud of
          </h2>
          <div className={style.tabContainer}>
            <div className={style.campusReelTab}>
              <h2>
                Campus Reel
              </h2>
              <p className={style.text}>
                CampusReel has become the market leader in virtual college tours for Universities and graduate programs across the US. It is responsible for up to 25% of enrollment in some leading MBA programs. The company has hundreds of University saas customers, seven figures of revenue and helps millions of…
              </p>
              <Button
                buttonText="Read more"
                icon={Arrow}
                onClickHandler={() => {}}
                color="black"
              />
              <div className={style.footerCampusReel}>
                <Image src={CaseStudiesCampusReelMobileImage} alt='Campus Reel Mobile Image' />
                <Image src={CaseStudiesCampusReelDesktopImage} alt='Campus Reel Desktop Image' />
              </div>
            </div>
            <div className={style.gipperTab}>
              <h2>
                Gipper
              </h2>
              <p className={style.text}>
              Gipper is a leading platform for social media graphics creation and is pioneering the fast growing brand sponsorship market for young athletes and associated institutions...
              </p>
              <Button
                buttonText="Read more"
                icon={Arrow}
                onClickHandler={() => {}}
                color="black"
              />
              <div className={style.footerGipper}>
                <Image src={CaseStudiesGipperMobileImage} alt='Gipper Mobile Image' />
                <Image src={CaseStudiesGipperDesktopImage} alt='Gipper Desktop Image' />
              </div>
            </div>
          </div>
        </section>

        <TechnologiesCarousel />

        <ContactUsCard />
      </Layout>
    </>
  )
}
