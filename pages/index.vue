<template>
  <div>
    <app-header/>
    <section class="section">
      <div>
        <app-logo/>
        <div class="columns is-mobile">
          <div class="column">
            <nuxt-link to="/inform">
              <el-button round>教える</el-button>
            </nuxt-link>                
          </div>
          <div class="column">
            <nuxt-link to="/find">
              <el-button round>探す</el-button>
            </nuxt-link>
          </div>
        </div>
        <release-note />
      </div>
    </section>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppHeader from '~/components/AppHeader.vue'
import ReleaseNote from '~/components/ReleaseNote.vue'

export default {
  components: {
    AppLogo,
    AppHeader,
    ReleaseNote,
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