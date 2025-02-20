<template>
  <v-list
    class="navigator h-100"
  >
    <v-list-item-title class="px-6 pb-6 pt-8">
      <v-img
        src="@/assets/logo-black.svg"
        width="208"
        height="33"
      />
    </v-list-item-title>
    <v-divider
      class="ma-auto border-opacity-100 mb-4"
      color="gray-50"
      length="80%"
    />
    <v-list-item
      v-for="item in links"
      :key="item.id"
      class="px-6"
      height="40 mb-1"
      link
      active-class="list-item_active"
      :href="item.link"
      :active="item.link === route.path"
    >
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex ga-2">
          <v-img
            width="24"
            max-width="24"
            height="24"
            :src="item.link === route.path ? item.iconWhite : item.icon"
          />
          <v-label class="text-black opacity-100 font-weight-medium">
            {{ item.title }}
          </v-label>
        </div>
        <v-icon
          v-if="item.children.length > 0"
          :icon="item.isOpened ? 'mdi-chevron-right' : 'mdi-chevron-down'"
          :color="item.link === route.path ? 'white' : 'black'"
          size="20"
        />
      </div>
    </v-list-item>
  </v-list>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getUrl } from "@/plugins/image";
import {useRoute, useRouter} from "vue-router";
import ch = CSS.ch;

type TLink = {
  id: number,
  title: string,
  link: string,
  icon: string,
  iconWhite: string,
  isOpened: boolean,
  children: Array<TLink>
}

const link = ref();

const links = ref<Array<TLink>>([
  {
    id: 1,
    title: "Wildberries",
    link: "/wildberries",
    icon: getUrl("../assets/images/icons/wildberries.svg"),
    iconWhite: getUrl("../assets/images/icons/white/wildberries.svg"),
    isOpened: false,
    children: [
      {
        id: 1,
        title: "Поставки",
        link: "/wildberries/supplies",
        icon: getUrl("../assets/images/icons/list.svg"),
        iconWhite: getUrl("../assets/images/icons/white/list.svg")
      },
    ]
  },
  {
    id: 2,
    title: "Бот",
    link: "/bot",
    icon: getUrl("../assets/images/icons/robot.svg"),
    iconWhite: getUrl("../assets/images/icons/white/robot.svg"),
    isOpened: false,
    children: [
      {
        id: 1,
        title: "Клиенты",
        link: "/bot/clients",
        icon: getUrl("../assets/images/icons/list.svg"),
        iconWhite: getUrl("../assets/images/icons/white/list.svg")
      },
    ]
  },
  {
    id: 3,
    title: "Авторизация WB",
    link: "/wildberries/auth",
    icon: getUrl("../assets/images/icons/id.svg"),
    iconWhite: getUrl("../assets/images/icons/white/id.svg"),
    isOpened: false,
    children: []
  },
  {
    id: 4,
    title: "Настройки",
    link: "/settings",
    icon: getUrl("../assets/images/icons/gear.svg"),
    iconWhite: getUrl("../assets/images/icons/white/gear.svg"),
    isOpened: false,
    children: [
      {
        id: 1,
        title: "Пользователи",
        link: "/settings/users",
        icon: getUrl("../assets/images/icons/list.svg"),
        iconWhite: getUrl("../assets/images/icons/white/list.svg")
      },
    ]
  }
])
const route = useRoute();
const router = useRouter();

const goTo = (link) => {
  console.log(link);
  // router.push(link);
}
</script>
<style lang="scss" scoped>
.navigator {
  border-radius: 8px;
}
.list {
  &-item {
    &_active {
      background-color: $c-primary-hovered;
      border-right: 3px solid $c-primary-pressed;
      &:deep(label) {
        color: white !important;
      }
    }
  }
}
</style>
<style lang="scss">
.v-list-item-action button {
  position: absolute !important;
  right: 20px !important;
}
</style>
