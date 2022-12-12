import React from 'react'
import style from './styles.module.scss'
import TechTalentCard from '../../components/tech-talent-card'
import Layout from '../../components/layout/index'
import Button from '../../components/buttons/accept-button/index'
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
    </Layout>
  )
}
