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
            <button
              class="button is-success is-rounded"
              :class="loadingStyle()"
              @click="onInform"
            >教える</button>
          </el-col>
        </el-row>
        <el-dialog width="80%" :visible.sync="visible" title="ご利用に関して">
          <p>教えるの機能を利用することで現在地点をサーバに送信します。</p>
          <p>送信されるデータは現在地点だけでそれ以外のデータは一切取得しません。</p>
          <p>現在地点をサーバに送ることでパスコードを生成されますが、パスコードを知る人はあなたの現在地点を知り得ることになりますので、トラブルを避けるためにも不特定多数の場に公開することはお控えください。</p>
          <p>このサービスを利用することで発生した問題は一切の責任を負いません。</p>
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
    return {
      visible: false,
      isEventing: false,
    }
  },
  methods: {
    onInform() {
      this.isEventing = true
      const option = {
        enableHighAccuracy: true,
        timeout : 5000,
        maximumAge: 0 
      }
      window.navigator.geolocation
        .getCurrentPosition(this.postApi, this.complate, option)
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
        this.complate('do complate page')
      }).catch(this.complate);
    },
    complate(info) {
      console.log(info)
      this.isEventing = false
    },
    loadingStyle() {
      return {
        'is-loading': this.isEventing,
      }
    },
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
