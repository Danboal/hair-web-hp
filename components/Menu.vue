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
      items: [
        {
          icon: 'mdi-home',
          title: "What's Dalahast",
          to: '/'
        },
        {
          icon: 'mdi-format-list-text',
          title: 'Dalahastのこだわり',
          to: '/about'
        },
        {
          icon: 'mdi-map',
          title: 'お店について',
          to: '/map'
        },
        {
          icon: 'mdi-content-cut',
          title: 'スタイリスト',
          to: '/member'
        },
        {
          icon: 'mdi-face-man-shimmer',
          title: '採用',
          to: '/recruit'
        },
      ],
    }
  }
}
</script>