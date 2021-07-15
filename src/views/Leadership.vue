<template>
  <div class="leadership">
    <h1 class="header-big">OUR Leadership<br />team</h1>
    <div class="leadership--desc">
      <p class="body-1">Our leadership team is lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum non, odio nunc quisque lobortis ac proin vitae, eu. Lorem ac ipsum, senectus elementum venenatis aliquam et mollis quis.</p>
    </div>
    <div class="leadership--team">
      <TeamMember v-for="(member, i) in team" :key="i" :member="member" />
    </div>
  </div>
  <ContactUsBlock />
</template>

<script>
import TeamMember from '@/components/leadership/TeamMember.vue'
import ContactUsBlock from '@/components/leadership/ContactUsBlock.vue'

export default {
  components: {
    TeamMember,
    ContactUsBlock
  },

  data: () => ({
    team: [
      {
        name: 'Charlie Lambropoulos',
        position: 'Chief Executive Officer',
        position_2: 'Co-founder',
        inLink: 'https://www.linkedin.com/in/charlielambropoulos/',
      },
      {
        name: 'Andy Daidone',
        position: 'Co-founder',
        inLink: 'https://www.linkedin.com/in/andy-daidone/',
      },
      {
        name: 'Dmytro Riazanov',
        position: 'Co-founder',
        inLink: 'https://www.linkedin.com/in/dmytro-riazanov-2180a427/',
      },
      {
        name: 'Mikhaylo Shatskiy',
        position: 'CTO',
        inLink: 'https://www.linkedin.com/in/michael-shatskiy-387990bb/',
      },
      {
        name: 'Yuliia Hlushkina',
        position: 'Vice President of design',
        inLink: 'https://www.linkedin.com/in/yuliia-hlushkina-682627155/',
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
.leadership {
  padding: 125px 20px 0;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: left;
    margin-bottom: 40px;
  }

  &--desc {
    display: flex;
    justify-content: flex-end;

    p {
      text-align: left;
      width: 67.25%;
      margin-bottom: 40px;
    }
  }

  &--team {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 347px;
  }
}

@media screen and (min-width: 768px) {
  .leadership {
    padding: 197px 30px 0;

    h1 {
      margin-left: 30px;
    }

    &--team {
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-bottom: 140px;
      margin: 0 -10px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .leadership {
    padding: 270px 8.34% 0;

    h1 {
      margin-left: 0px;
    }

    &--desc {
      display: flex;
      justify-content: flex-end;

      p {
        width: 52.25%;
        margin-bottom: 80px;
      }
    }

    &--team {
      margin: 0 -10px 240px;
    }
  }
}

@media screen and (min-width: 1920px) {
  .leadership--team {
    margin: 0 -8px;
  }
}
</style>
