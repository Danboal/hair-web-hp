<template>
  <v-list>
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :to="item.to"
      router
      exact
    >
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<style>
</style>
<script>
export default {
  name: 'MenuComponent',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'ホーム',
          to: '/'
        },
        {
          icon: 'mdi-home',
          title: 'カットメニュー',
          to: '/cut_menu'
        },
        {
          icon: 'mdi-home',
          title: 'ご予約',
          to: '/yoyaku'
        },
        {
          icon: 'mdi-home',
          title: 'スタイリスト',
          to: '/member'
        },
        {
          icon: 'mdi-home',
          title: '採用',
          to: '/recruit'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'タイトル'
    }
  }
}
</script>