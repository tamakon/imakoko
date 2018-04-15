<template>
  <section class="container">
    <div>
      <app-logo/>
      <el-row :gutter="2">
        <el-col :span="12">
          <nuxt-link to="/inform">
            <el-button round>教える</el-button>
          </nuxt-link>                
        </el-col>
        <el-col :span="12">
          <nuxt-link to="/find">
            <el-button round>探す</el-button>
          </nuxt-link>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  button {
    width: 100%;
  }
</style>