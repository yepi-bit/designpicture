<template>
  <div class="mixin-components-container">
    <a-row>
      <a-card class="box-card" style="text-align:left">
        <div class="clearfix title">
          <span>Vue框架中嵌入使用wavesurfer.js插件</span>
        </div>
        <div id="waveform" ref="waveform">
          <!-- Here be the waveform -->
        </div>
        <div id="wave-timeline" ref="wave-timeline">
          <!--时间轴 -->
        </div>
        <div>
          <a-button type="primary" @click="playMusic">
            <!--            <i class="el-icon-video-play"></i>-->
            播放 /
            <!--            <i class="el-icon-video-pausee"></i>-->
            暂停
          </a-button>
        </div>
      </a-card>
    </a-row>
  </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
import Timeline from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.js'
export default {
  name: "WaveSurfer",
  data() {
    return {
      wavesurfer: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      console.log(WaveSurfer)
      this.wavesurfer = WaveSurfer.create({
        container: this.$refs.waveform,
        waveColor: '#0eb8c2',
        progressColor: 'blue',
        backend: 'MediaElement',
        mediaControls: false,
        audioRate: '1',
        //使用时间轴插件
        plugins: [
          Timeline.create({
            container: '#wave-timeline'
          }),
        ]

      });
      // 特别提醒：此处需要使用require(相对路径)，否则会报错
      this.wavesurfer.load(require('../../public/王爷.mp4'));
    })
  },
  methods: {
    playMusic() {
      //"播放/暂停"按钮的单击触发事件，暂停的话单击则播放，正在播放的话单击则暂停播放
      this.wavesurfer.playPause.bind(this.wavesurfer)()
    }
  }
}
</script>

<style scoped>
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
</style>
