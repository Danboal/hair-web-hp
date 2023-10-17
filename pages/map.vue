<template>
  <v-container>
    <v-row>
      <v-col>
        <fade-in-component>
          <h1>お店について</h1>
          <v-carousel cycle hide-delimiters>
              <v-carousel-item
                v-for="(item,i) in shop_photos"
                :key="i"
                :src="item"
              ></v-carousel-item>
          </v-carousel>
        </fade-in-component>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <fade-in-component>
          <h1>GoogleMap</h1>
          <GoogleMap/>
          <h1>住所・アクセス</h1>
          <p>福岡県大野城市下大利２－１７－５ルーチェデル下大利T１</p>
          <p>西鉄下大利駅西口から「ちとせ薬局」さんに向かって直進し左折。駐車場は3番～6番をお使いください。</p>
          <p>そのまま180ｍほど直進し右側にある「ルーチェ・デル下大利」の1階です。</p>
          <p>〔※旧花田ビル〕山田歯科医院さんと福岡第一整骨院さんの間にある建物で、アルクKiddyCAT英語教室がお隣のテナントさんになります。</p>
        </fade-in-component>
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
      title: 'お店について',
    };
  },
  data(){
    return {
      shop_photos:[
        "I094064004.jpg",
        "I093701487.jpg",
        "I093401736.jpg",
        "I093401738.jpg",
      ]
    }
  }
}
</script>
