<template>
  <div>
    <app-header/>
    <section class="section container">
      <div class="">
        <p>コードを入れてね</p>
        <p class="has-text-grey">※コードは4桁の数字です</p>
        <el-input v-model="input"></el-input>
        <div class="links">
          <el-radio-group v-model="radio" disabled>
            <el-radio-button label="1">Mapで探す</el-radio-button>
            <el-radio-button label="2">カメラで探す</el-radio-button>
          </el-radio-group>
        </div>
        <div class="links">
          <el-button
            type="success"
            :disabled="!isValidPassCode()"
            @click="toNextPage"
            round>確定</el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default { 
  components: {
    AppHeader
  },
  data() {
    return {
        input: '2345',
        radio: '1',
    } 
  },
  methods: {
    toNextPage() {
      const type = this.radio === '1' ? 'map' : 'camera'
      const path = `/find/${this.input}/${type}`
      this.$router.push({ path })
    },
    isValidPassCode() {
      const exp = "^[0-9]{4}$";
      return String(this.input).match(exp)
    }
  },
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
button {
  width: 100%;
}
</style>
