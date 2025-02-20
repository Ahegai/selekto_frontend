<template>
  <section class="page">
    <v-row>
      <v-col cols="6">
        <div class="mb-4">
          <h5 class="mb-2">
            Если пусто или установлен 0 то текущий день не используется,
            поиск оптимального коэффициента будет со следующего дня
          </h5>
          <div class="d-flex justify-space-between align-center">
            <v-label>Час перехода на следующий день</v-label>
            <v-chip
              class="border-none"
              color="primary-disabled"
              label
              variant="flat"
            >
              допустимые часы от 1 до 23
            </v-chip>
          </div>
          <v-text-field
            class="mt-2"
            variant="solo"
            bg-color="rgba(224, 224, 224, 100)"
            density="compact"
            clearable
          />
        </div>
        <div class="mb-4">
          <h5 class="mb-2">
            Время отсрочки проверки для новых заказов в минутах, если не установлено то отслеживание происходит сразу же
          </h5>
          <div class="d-flex justify-space-between align-center">
            <v-label>Время отсрочки</v-label>
          </div>
          <v-text-field
            class="mt-2"
            variant="solo"
            bg-color="rgba(224, 224, 224, 100)"
            density="compact"
            clearable
          />
        </div>
        <div class="mb-4">
          <h5 class="mb-2">
            Безопасное бронирование, на случай ошибки установки коэффициента в днях от текущей
          </h5>
          <div class="d-flex justify-space-between align-center">
            <v-label>Дней отсрочки</v-label>
          </div>
          <v-text-field
            class="mt-2"
            variant="solo"
            bg-color="rgba(224, 224, 224, 100)"
            density="compact"
            clearable
          />
        </div>
      </v-col>
      <v-col cols="6">
        <div class="mb-4">
          <div class="d-flex justify-space-between align-center">
            <v-label>Максимально допустимый коэффициент для новых поставок</v-label>
          </div>
          <v-text-field
            class="mt-2"
            variant="solo"
            bg-color="rgba(224, 224, 224, 100)"
            density="compact"
            clearable
          />
        </div>
        <div class="mb-4">
          <h5 class="mb-2">
            Стоимость доставки рассчитывается самим WB и включает коэффициент
          </h5>
          <div class="d-flex justify-space-between align-center">
            <v-label>Максимальная стоимость доставки</v-label>
          </div>
          <v-text-field
            class="mt-2"
            variant="solo"
            bg-color="rgba(224, 224, 224, 100)"
            density="compact"
            clearable
          />
        </div>
        <div class="mb-4">
          <h5 class="mb-2">
            Присылать уведомления о найденном дней вместо бронирования, может быть несколько сообщений подряд о найденном коэффициенте
          </h5>
          <v-checkbox
            class="ml-n2 mt-n3"
            label="Уведомления о бронировании"
            color="primary"
          />
        </div>
        <div class="d-flex justify-end mt-10">
          <v-btn
            color="primary"
            class="text-capitalize"
            density="comfortable"
            elevation="0"
          >
            Сохранить
          </v-btn>
          <v-btn
            variant="outlined"
            color="gray-200"
            class="text-capitalize border-none"
            density="comfortable"
          >
            Сбросить
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script setup lang="ts">
</script>
