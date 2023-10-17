<template>
  <v-container>
    <h1>スタイリスト</h1>
    <v-row class="mb-10">
      <v-col>
        <fade-in-component>
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
          </v-card>
        </fade-in-component>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col>
        <fade-in-component>
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="400px"
              src="B184994019.jpg"
            >
              <v-card-title style="background-color: #00000054;">トップスタイリスト：福滿 浩一</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>鹿児島からやってきました！</div>
              <div>慣れない環境ではありますが、美容師としては自信があります！</div>
              <div>楽しい話などもできればと思います。</div>
              <div>よろしくお願いいたします！</div>
            </v-card-text>
            <v-card-actions>
            <v-btn
              outlined tile
              href="https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000665254&stylistId=T000891783"
            >
              この人を指名して予約する
            </v-btn>
            </v-card-actions>
          </v-card>
        </fade-in-component>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: 'スタイリスト',
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
