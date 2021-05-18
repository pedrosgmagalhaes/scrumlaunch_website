<template>
  <div class="leadership">
    <h1 class="header-big">OUR Leadership<br />team</h1>
    <div class="leadership--desc">
      <p class="body-1">Our leadership team is lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum non, odio nunc quisque lobortis ac proin vitae, eu. Lorem ac ipsum, senectus elementum venenatis aliquam et mollis quis.</p>
    </div>
    <div class="leadership--team">
      <TeamMember v-for="(member, i) in team" :key="i" :member="member" />
    </div>
    <ContactUsBlock />
  </div>
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
        photo: 'image-1'
      },
      {
        name: 'Andy Daidone',
        position: 'Co-founder',
        inLink: 'https://www.linkedin.com/in/andy-daidone/',
        photo: 'image-2'
      },
      {
        name: 'Dmytro Riazanov',
        position: 'Co-founder',
        inLink: 'https://www.linkedin.com/in/dmytro-riazanov-2180a427/',
        photo: 'image-3'
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
.leadership {
  padding: 270px 8.34% 0;
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
      width: 52.25%;
      margin-bottom: 80px;
    }
  }

  &--team {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 240px;
  }
}
</style>
