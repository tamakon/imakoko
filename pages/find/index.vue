<template>
  <div>
    <app-header/>
    <section class="section container">
      <div class="">
        <p>コードを入れてね</p>
        <el-input v-model="input"></el-input>
        <div class="links">
          <el-radio-group v-model="radio">
            <el-radio-button label="1">Mapで探す</el-radio-button>
            <el-radio-button label="2">カメラで探す</el-radio-button>
          </el-radio-group>
        </div>
        <div class="links">
          <nuxt-link to="./find/1234/camera">
            <el-button type="success" round>確定</el-button>
          </nuxt-link>
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
        input: '',
        radio: '1',
    } 
  }
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
