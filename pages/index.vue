<template>
  <v-container>
    <v-row>
      <v-col style="height: 100vh;">
        <Logo />
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col>
        <h1>
        What's Dalahast
        </h1>
        <p>Dalahast(ダーラへスト)は、2023年10月6日、下大利駅前にオープンしました。大野城、二日市、太宰府からご利用いただきやすいヘアサロンです。</p>
        <v-carousel cycle hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in shop_photos"
            :key="i"
            :src="item"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col>
        <h1>
       About hair treatment
        </h1>
        <p>トレンドからナチュラルまで洗練されたヘアスタイルをリーズナブルな価格でご提案。</p>
        <p>実力派Stylistが丁寧なカウンセリングを行い、幅広い提案力で新しい自分を見つけられる、大人の為のトレンドサロンとして施術してまいります。</p>
        <v-carousel cycle hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in artists"
            :key="i"
            :src="item.src"
          >
            <div class="mx-auto" style="width:100%">
              <p class="text-center font-weight-bold text-h6">{{item.name}}</p>
            </div>
          </v-carousel-item>
        </v-carousel>
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
  data(){
    return {
      shop_photos:[
        "shop_view1.jpg",
        "shop_view2.jpeg",
        "shop_view3.jpeg",
        "shop_view4.jpeg",
      ],
      artists:[
        {
          name:"佐藤 胤紀",
          src:"artist1.jpeg"
        },
        {
          name:"福滿 浩一",
          src:"artist2.jpeg"
        },
      ]
    }
  },
  mounted() {
    window.scroll({top: 0, behavior: 'smooth'});
  }
}
</script>
