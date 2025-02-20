<template>
  <v-card class="card">
    <v-card-title class="pa-16">
      <v-img
        src="@/assets/logo.svg"
        width="376"
        height="56"
      />
    </v-card-title>
    <v-card-text class="pa-10 pt-0">
      <v-label class="card-input_label text-white opacity-100">
        Логин
      </v-label>
      <v-text-field
        placeholder="admin"
        variant="solo"
        bg-color="rgba(28, 49, 43, 1)"
        theme="dark"
        class="card-input elevation-0"
        color="white"
      />
      <v-label class="card-input_label text-white opacity-100">
        Пароль
      </v-label>
      <v-text-field
        placeholder="123456789"
        type="password"
        variant="solo"
        bg-color="rgba(28, 49, 43, 1)"
        theme="dark"
        class="card-input elevation-0"
        color="white"
      />
      <v-btn
        color="secondary"
        width="72"
        height="32"
        variant="flat"
        class="text-capitalize font-weight-regular ma-auto d-block mt-5"
        @click="goTo"
      >
        Войти
      </v-btn>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";

definePage({
  meta: {
    layout: 'auth'
  }
})

const router = useRouter();

const goTo = () => {
  router.push('/')
}
</script>
<style lang="scss" scoped>
.card {
  border: 1px solid $c-primary-disabled;
  background: rgba(white, 0.05);
}
</style>
