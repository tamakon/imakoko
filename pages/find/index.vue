<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px; background: #DCDFE6">
      <h3>Imakoko</h3>
    </el-header>
    <el-main>
      <section class="container">
        <div>
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
    </el-main>
  </el-container>
</template>

<script>

export default {
  components: {
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
