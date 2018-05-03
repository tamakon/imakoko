<template>
  <div>
    <app-header/>
    <section class="section">
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
            <el-button
              type="success"
              @click="onInform"
              round>教える</el-button>
          </el-col>
        </el-row>
        <el-dialog width="80%" :visible.sync="visible" title="ご利用に関して">
          <p>座標データの使われ方であったりの説明を記載</p>
        </el-dialog>
      </div>
    </section>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppHeader from '~/components/AppHeader.vue'
import axios from 'axios'

export default {
  components: {
    AppLogo,
    AppHeader
  },
  data() {
    return { visible: false } 
  },
  methods: {
    onInform() {
      const option = {
        enableHighAccuracy: true,
        timeout : 5000,
        maximumAge: 0 
      }
      window.navigator.geolocation
        .getCurrentPosition(this.postApi, console.log, option)
    },
    postApi(position) {
      const path = `${process.env.API_ROOT}/api/locations`
      const params = {
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      }
      axios.post(path, params).then(({ data }) => {
        const query = `passcode=${data.passcode}`
        const path = `/inform/complate?${query}`
        this.$router.push({ path })
      });
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
