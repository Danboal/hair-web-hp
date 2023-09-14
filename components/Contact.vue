<template>
    <div>
        <div class="text-sm-h3 text-h4">Contact us</div>
        <v-form v-model="valid">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="お名前"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="nameRules"
              label="メールアドレス"
              required
            ></v-text-field>
            <v-select
              :items="items"
              label="ご用件"
              outlined
              required
            ></v-select>
            <v-textarea
            outlined
            v-model="detail"
            label="お問合せ内容"
          ></v-textarea>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="個人情報取扱に同意します"
            required
          ></v-checkbox>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
        >
            送信
        </v-btn>
        </v-form>
    </div>
</template>

<style>
</style>
