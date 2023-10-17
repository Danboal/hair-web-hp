<template>
  <v-container>
    <v-row>
      <v-col style="height: 100vh;">
        <fade-in-component><Logo /></fade-in-component>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col>
        <fade-in-component>
          <h1>What's Dalahast</h1>
          <p>Dalahast(ダーラへスト)は、2023年10月6日、下大利駅前にオープンしました。春日、大野城、二日市、太宰府からご利用いただきやすいヘアサロンです。</p>
          <v-btn
              outlined tile
              href="/about"
            >
              Dalahastをもっと知る
            </v-btn>
          <v-carousel cycle hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in shop_photos"
              :key="i"
              :src="item"
            ></v-carousel-item>
          </v-carousel>
          <v-btn
              outlined tile
              href="/map"
            >
              お店についてもっと知る
            </v-btn>
        </fade-in-component>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col>
        <fade-in-component>
          <h1>About Owner</h1>
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="400px"
              src="artist1.jpeg"
            >
              <v-card-title style="background-color: #00000054;">オーナー：佐藤 胤紀</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>大人らしいショートカット、似合わせのカラーが得意です！</div>
              <div>お客様に本当に喜んでいただける時間の提供をしたいと一番に考えております。</div>
              <div>ヘッドスパも得意ですので是非担当させてください！</div>
              <div>よろしくお願いいたします！</div>
            </v-card-text>
            <v-card-actions>
            <v-btn
              outlined tile
              href="https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000665254&stylistId=T000884796"
            >
              この人を指名して予約する
            </v-btn>
            </v-card-actions>
            <v-card-actions>
            <v-btn
              outlined tile
              href="/member"
            >
              Dalahastのスタイリストをもっと見る
            </v-btn>
          </v-card-actions>
          </v-card>
        </fade-in-component>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col>
        <fade-in-component>
          <h1>Instagram</h1>
          <p>当店のインスタグラムです。お客様のスタイリングの雰囲気を感じていただけますので、是非フォローをお願いします</p>
          <Instagram/>
        </fade-in-component>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Dalahast(ダーラヘスト)',
    };
  },
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
  }
}
</script>
