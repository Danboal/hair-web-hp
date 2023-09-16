<template>
  <v-container>
    <v-row>
      <v-col style="height: 100vh;">
        <Logo />
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col>
        <List />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'IndexPage',
  mounted() {
    window.scroll({top: 0, behavior: 'smooth'});
  }
}
</script>
