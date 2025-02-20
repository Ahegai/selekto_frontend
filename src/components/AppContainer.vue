<template>
  <section class="page">
    <div class="d-flex page-header">
      <v-text-field
        class="page-header_input"
        placeholder="Поиск..."
        clearable
        variant="outlined"
        density="comfortable"
      />
      <v-btn
        class="pa-0 page-header_btn"
        density="compact"
        height="48"
        elevation="0"
        color="primary"
        min-width="48"
      >
        <v-icon icon="mdi-magnify" />
      </v-btn>
      <v-btn
        class="border-none ml-2"
        density="compact"
        height="48"
        width="48"
        icon
        variant="outlined"
      >
        <v-img
          width="24"
          height="24"
          :src="getUrl('../assets/images/icons/back.svg')"
        />
      </v-btn>
      <v-btn
        class="border-none ml-2"
        density="compact"
        height="48"
        width="48"
        icon
        variant="outlined"
      >
        <v-img
          width="24"
          height="24"
          :src="getUrl('../assets/images/icons/refresh.svg')"
        />
      </v-btn>
      <slot name="additional" />
    </div>
    <div>
      <slot name="body" />
    </div>
  </section>
</template>
<script setup lang="ts">
import {getUrl} from "@/plugins/image";
</script>
<style lang="scss" scoped>
.page {
  &-header {
    &_btn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &_input {
      &:deep(.v-field) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
}
</style>
