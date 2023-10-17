<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>採用・お問い合わせについて</h1>
        <Contact/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <fade-in-component>
          <v-btn
              outlined tile block
              href="/"
            >
              Topへ
            </v-btn>
        </fade-in-component>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: '採用・お問い合わせについて',
    };
  },
}
</script>
