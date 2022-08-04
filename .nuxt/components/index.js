export { default as Checkbox } from '../../components/Checkbox.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as RadioButton } from '../../components/RadioButton.vue'
export { default as ScrollToTop } from '../../components/ScrollToTop.vue'
export { default as Select } from '../../components/Select.vue'
export { default as SocialBlock } from '../../components/SocialBlock.vue'
export { default as Accordion } from '../../components/accordion/Accordion.vue'
export { default as ArticlesArticleLink } from '../../components/articles/ArticleLink.vue'
export { default as ArticlesArticlePreview } from '../../components/articles/ArticlePreview.vue'
export { default as AnimationsAppearFromMask } from '../../components/animations/AppearFromMask.vue'
export { default as AnimationsTypingEffect } from '../../components/animations/TypingEffect.vue'
export { default as CaseStudyMainGoal } from '../../components/case-study/MainGoal.vue'
export { default as CaseStudyMoreProjects } from '../../components/case-study/MoreProjects.vue'
export { default as CaseStudyMoreProjectsItem } from '../../components/case-study/MoreProjectsItem.vue'
export { default as CaseStudyProjectInfo } from '../../components/case-study/ProjectInfo.vue'
export { default as ContactForm } from '../../components/contact/ContactForm.vue'
export { default as ContactFileInput } from '../../components/contact/FileInput.vue'
export { default as ContactInputComponent } from '../../components/contact/InputComponent.vue'
export { default as ContactSendCVForm } from '../../components/contact/SendCVForm.vue'
export { default as HireDevelopersProfilesCards } from '../../components/hire-developers/DevelopersProfilesCards.vue'
export { default as HireDevelopersMetricsCard } from '../../components/hire-developers/MetricsCard.vue'
export { default as HireDevelopersProgLangList } from '../../components/hire-developers/ProgLangList.vue'
export { default as LeadershipContactUsBlock } from '../../components/leadership/ContactUsBlock.vue'
export { default as LeadershipTeamMember } from '../../components/leadership/TeamMember.vue'
export { default as HomeClientTestimonials } from '../../components/home/ClientTestimonials.vue'
export { default as HomeContactUs } from '../../components/home/ContactUs.vue'
export { default as HomeExtensiveVetting } from '../../components/home/ExtensiveVetting.vue'
export { default as HomeHeroBlock } from '../../components/home/HeroBlock.vue'
export { default as HomeHistoryBlock } from '../../components/home/HistoryBlock.vue'
export { default as HomeHowScrumLaunchWorks } from '../../components/home/HowScrumLaunchWorks.vue'
export { default as HomeIndustryLeadingResults } from '../../components/home/IndustryLeadingResults.vue'
export { default as HomeNews } from '../../components/home/News.vue'
export { default as HomeOurServices } from '../../components/home/OurServices.vue'
export { default as HomeOurTechnologies } from '../../components/home/OurTechnologies.vue'
export { default as HomeProjectItem } from '../../components/home/ProjectItem.vue'
export { default as HomeSecondBlock } from '../../components/home/SecondBlock.vue'
export { default as HomeSoftwareDesign } from '../../components/home/SoftwareDesign.vue'
export { default as HomeTickerBlock } from '../../components/home/TickerBlock.vue'
export { default as HomeWhyChooseScrumLaunch } from '../../components/home/WhyChooseScrumLaunch.vue'
export { default as Locations } from '../../components/locations/Locations.vue'
export { default as LocationsList } from '../../components/locations/LocationsList.vue'
export { default as ProcessOurApproach } from '../../components/process/OurApproach.vue'
export { default as ProcessOurProcess } from '../../components/process/OurProcess.vue'
export { default as ServicesServiceItem } from '../../components/services/ServiceItem.vue'
export { default as WorkHeroBlock } from '../../components/work/HeroBlock.vue'
export { default as WorkItem } from '../../components/work/WorkItem.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
