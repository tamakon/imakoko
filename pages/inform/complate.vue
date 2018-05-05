<template>
  <div>
    <app-header/>
    <section class="section">
      <div>
        <el-row>
          <el-col :span="24">
            <p>下のコードをコピー</p>
            <p>またはLineで送るから教えてね</p>
          </el-col>
        </el-row>
        <el-row :gutter="2">
          <el-col :span="24">
            <el-input v-model="input"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="2" class="links">
          <line-share
            :passCode="$route.query.passcode"
          />
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppLogo from '~/components/AppLogo.vue'
import LineShare from '~/components/LineShare.vue'

export default {
  components: {
    AppLogo,
    AppHeader,
    LineShare,
  },
  data() {
    const value = this.$route.query.passcode || ''
    return { input: value } 
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
