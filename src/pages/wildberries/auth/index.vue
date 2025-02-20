<template>
  <section>
    <div v-if="step !== 4">
      <label>Номер телефона</label>
      <v-text-field
        v-maska="phoneMask"
        class="mt-2 border-none elevation-0"
        placeholder="+7 ### ###-##-##"
        width="30%"
        variant="solo"
        bg-color="rgba(224, 224, 224, 100)"
      />
    </div>
    <div v-if="step === 3">
      <label>Код</label>
      <v-text-field
        class="mt-2 border-none elevation-0"
        placeholder="Введите код из СМС"
        width="30%"
        variant="solo"
        bg-color="rgba(224, 224, 224, 100)"
      />
    </div>
    <div v-if="step === 4">
      <label class="font-weight-light">Вы вошли в аккаунт Wildberries с этим номером</label>
      <p class="mt-2 mb-5 font-weight-bold text-h5">
        +7 943 546-25-19
      </p>
    </div>
    <v-btn
      v-if="step !== 2"
      color="primary"
      class="text-capitalize elevation-0"
      @click="proceed"
    >
      {{ buttonText }}
    </v-btn>
  </section>
</template>
<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import { vMaska } from "maska/vue";
import type { MaskInputOptions } from "maska";

const phoneMask = reactive<MaskInputOptions>({
  mask: "+7 ### ###-##-##",
  eager: true
})

const step = ref(1);

const proceed = () => {
  if (step.value === 1) step.value = 3;
  else if (step.value === 3) step.value = 4;
  else if (step.value === 4) step.value = 1;
}

const buttonText = computed(() => {
  return step.value === 1 || step.value === 2 ? 'Продолжить' : step.value === 3 ? 'Авторизоваться' : 'Сменить аккаунт';
})
</script>
