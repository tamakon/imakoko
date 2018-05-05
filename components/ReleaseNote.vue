<template>
  <div>
    <el-button type="text" @click="visible = true">リリースノート</el-button>
    <el-dialog width="95%" :visible.sync="visible" title="リリースノート">
      <!-- TODO: ループにする -->
      <article class="message">
        <div class="message-header">
          <p>2018/05/xx</p>
        </div>
        <div class="message-body">
          <p>ファーストリリース！！</p>
        </div>
      </article>
    </el-dialog>
  </div>
</template>

 <script>
 export default {
   data() {
    return { visible: false } 
  },
 }
 </script>
 