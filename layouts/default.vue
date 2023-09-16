<template>
  <transition>
    <v-app dark>
      <v-app-bar
        :clipped-left="clipped"
        fixed
        dense
        elevate-on-scroll
        app
      >
      </v-app-bar>
      <v-main>
        <Nuxt />
      </v-main>
      <v-footer
        :absolute="!fixed"
        app
      >
        <span>&copy; {{ new Date().getFullYear() }} - Dalahast</span>
      </v-footer>
    </v-app>
  </transition>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: 'タイトル'
    }
  }
}
</script>
