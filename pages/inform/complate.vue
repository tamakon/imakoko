<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px; background: #DCDFE6">
      <h3>Imakoko</h3>
    </el-header>
    <el-main>
      <section class="container">
        <div>
          <el-row>
            <el-col :span="24">
              <p>このコードを教えてね</p>
            </el-col>
          </el-row>
          <el-row :gutter="2">
            <el-col :span="24">
              <el-input v-model="input"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="2" class="links">
            <el-col :span="12">
              <el-button>やり直す</el-button>
            </el-col>
            <el-col :span="12">
              <el-button>共有</el-button>
            </el-col>
          </el-row>
        </div>
      </section>
    </el-main>
  </el-container>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data() {
    return { input: '1234' } 
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
  padding-top: 30px;
}

button {
  width: 100%;
}
</style>
