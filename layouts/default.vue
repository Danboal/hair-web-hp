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
      <v-btn
        outlined tile
        href="https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000665254"
      >
        <v-icon>mdi-calendar-check</v-icon>
        ご予約はこちらから
      </v-btn>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        temporary
        fixed
      >
        <Menu/>
      </v-navigation-drawer>
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
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-WB7RK6GPJL"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-WB7RK6GPJL');
  </script>
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
