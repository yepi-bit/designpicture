<template>
  <div class="hello">
    <p style="font-weight: bold">预览</p>
    <div class="before"></div>
    <button style="margin: 30px auto;" @click="sureSava">裁剪</button>
    <div class="container">
      <div class="img-container">
        <img src="../assets/logo.png" ref="image" alt="">
      </div>
      <div class="afterCropper" v-if="afterImg">
        <img :src="afterImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export default {
  name: 'Cut',
  data () {
    return {
      myCropper: null,
      afterImg: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      this.myCropper = new Cropper(this.$refs.image, {
        viewMode: 2, // 0 1 2 3
        dragMode: 'none', // crop, move
        initialAspectRatio: 1,
        aspectRatio: 1,
        modal: true,
        guides: true,
        preview: '.before',
        background: true, // 网格
        autoCropArea: 0.6,
        zoomOnWheel: true,
      })
    },
    sureSava(){
      this.afterImg = this.myCropper.getCroppedCanvas({
        imageSmoothingQuality: 'high'
      }).toDataURL('image/jpeg')
      console.log(this.afterImg)
    }
  },
}
</script>

<style scoped>
.container{
  display: flex;
}
.before{
  width: 200px;
  height: 200px;
  overflow: hidden;
  /* 这个属性可以得到想要的效果 */
}
.img-container{
  height: 500px;
  width: 500px;
  /*overflow: hidden;*/
}
.afterCropper{
  flex: 1;
  margin-left: 20px;
  border: 1px solid salmon;
  text-align: center;
}
.afterCropper img{
  height: 500px;
  width: 500px;
}
</style>
