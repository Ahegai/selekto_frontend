<template>
  <v-main class="main pa-4 pb-0">
    <v-row class="w-100 h-100 ml-0 mr-0">
      <v-col cols="2 pl-0 pb-0">
        <AppNavigator />
      </v-col>
      <v-col
        cols="10"
        class="pr-0 pb-0"
      >
        <v-container class="container bg-white h-100 overflow-y-auto pa-8">
          <router-view />
        </v-container>
      </v-col>
    </v-row>
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>

<style lang="scss" scoped>
.main {
  background-color: #F0F0F0;
  height: 100vh;
}
.container {
  border-radius: 8px;
  max-height: calc(100vh - 28px);
}
</style>


