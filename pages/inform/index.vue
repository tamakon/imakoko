<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px; background: #DCDFE6">
      <h3>Imakoko</h3>
    </el-header>
    <el-main>
      <section class="container">
        <div>
          <el-row :gutter="2">
            <el-col :span="24">
              <div>
                <el-button type="text" @click="visible = true">ご利用に関して</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="2">
            <el-col :span="24" class="links">
              <nuxt-link to="/inform/complate">
                <el-button type="success" round>教える</el-button>
              </nuxt-link>
            </el-col>
          </el-row>
          <el-dialog width="80%" :visible.sync="visible" title="ご利用に関して">
            <p>座標データの使われ方であったりの説明を記載</p>
          </el-dialog>
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
    return { visible: false } 
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
