import React from 'react'
import style from './styles.module.scss'
import TechTalentCard from '../../components/tech-talent-card'
import ClientTestimonialCard from '../../components/client-testimonial-card'
import Layout from '../../components/layout'
import Button from '../../components/buttons/accept-button'
import Arrow from '../../public/icons/arrowBlack.svg'

export default function Home() {
  return (
    <Layout>
      <div className={style.techTalent}>
        <h1 className={style.titleTech}>
          Tech talent that’s right for your project.
        </h1>

        <h6 className={style.techSubText}>
          Every technology project is different and it’s just as important to
          find the right person as it is to find a talented person.
          ScrumLaunch’s talent hubs in Eastern Europe and Latin America combine
          global scale
        </h6>

        <Button
          buttonText="Schedule a call"
          icon={Arrow}
          onClickHandler={() => {}}
        />

        <TechTalentCard />
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
    </Layout>
  )
}
