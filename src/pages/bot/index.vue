<template>
  <AppContainer>
    <template #additional>
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
          :src="getUrl('../assets/images/icons/plus.svg')"
        />
      </v-btn>
    </template>
    <template #body />
  </AppContainer>
</template>
<script setup lang="ts">
import AppContainer from "@/components/AppContainer.vue";
import {getUrl} from "@/plugins/image";
</script>
