<template>
  <div class="leadership">
    <h1 class="header-big">OUR Leadership<br />team</h1>
    <div class="leadership--desc">
      <p class="body-1">Our leadership team is lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum non, odio nunc quisque lobortis ac proin vitae, eu. Lorem ac ipsum, senectus elementum venenatis aliquam et mollis quis.</p>
    </div>

  </div>
</template>

<script>
export default {
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
}
</style>
