<template>
  <v-main class="main">
    <router-view />
  </v-main>
</template>
<style lang="scss" scoped>
.main {
  background: url("@/assets/auth/background.png") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  }
</style>
