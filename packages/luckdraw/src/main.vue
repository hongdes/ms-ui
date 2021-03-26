<template>
  <div class="ms-luckdraw" ref="luckdraw"
    :style="{ width: luckWidth, height: luckHeight }">
    <div class="lucktable">
      <canvas id="canvas" ref="canvas">
        浏览器的版本过低
      </canvas>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MsLuckdraw',
  data() {
    return {
      // 设置指针默认指向的位置,现在是默认指向2个扇形之间的边线上
      rotateAngle: 0, //`rotate(30deg)`
      rotateTransition: ''
    };
  },
  props: {
    luckWidth: {
      type: String,
      default: '',
    },
    luckHeight: {
      type: String,
      default: '',
    },
    prizeList: {
      type: Array,
      default: () => {}
    },
    styleOpt: {
      default: () => {
        return {
          // 每一块扇形的背景色,默认值,可通过父组件来改变
          prizeBgColors: [
            'rgb(255, 231, 149)',
            'rgb(255, 247, 223)',
            'rgb(255, 231, 149)',
            'rgb(255, 247, 223)',
            'rgb(255, 231, 149)',
            'rgb(255, 247, 223)'
          ],
          // 每一块扇形的外边框颜色,默认值,可通过父组件来改变
          borderColor: '#ff9800'
        };
      }
    },
  },
  mounted() {
    this.init();
    this.clickAction();
  },
  methods: {
    init() {
      const data = this.styleOpt;
      const prizeNum = this.prizeList.length;
      const { prizeBgColors, borderColor } = data;
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      const canvasW = canvas.width = this.$refs.luckdraw.clientWidth;
      const canvasH = canvas.height = this.$refs.luckdraw.clientHeight;
      const img = new Image();
      
      ctx.translate(0, canvasH);
      ctx.rotate((-90 * Math.PI) / 180);
      const outRadius = canvasW / 2 - 1;
      const innerRadius = 0;
      const baseAngle = (Math.PI * 2) / prizeNum;
      
      ctx.clearRect(0, 0, canvasW, canvasH);
      ctx.strokeStyle = borderColor;
      
      for (let index = 0; index < prizeNum; index ++) {
        const angle = index * baseAngle;
        if (this.prizeList[index]['prizeColor']) {
          ctx.fillStyle = this.prizeList[index]['prizeColor'];
        } else {
          ctx.fillStyle = prizeBgColors[index];
        }
        ctx.beginPath();
        ctx.arc(canvasW * .5, canvasH * .5, outRadius, angle, angle + baseAngle, false);
        ctx.arc(canvasW * .5, canvasH * .5, innerRadius, angle + baseAngle, angle, true);
        ctx.stroke();
        ctx.fill();
        ctx.save();
      }
      img.src = 'https://img11.360buyimg.com/imagetools/jfs/t1/89512/11/15244/137408/5e6f15edEf57fa3ff/cb57747119b3bf89.png';
      img.onload = function() {
        ctx.drawImage(this, 110, -190, 80, 95);
      };
      // ctx.translate(40, canvasH);
      ctx.rotate((90 * Math.PI) / 180);
      // var angleInRadians = 20 * Math.PI / 180;
      //   var x = 100;
      //   var y = 100;
      //   var width = 50;
      //   var height = 50;
      //   // ctx.translate(0,0);
      //   ctx.rotate(angleInRadians);
    },
    clickAction() {
      const ele = document.getElementById('canvas');
      ele.addEventListener('click', function(event) {
        console.log(event.offsetX, event.offsetY);
        if (event.offsetX > 110 && event.offsetX <= 190 && event.offsetY > 60 && event.offsetY <= 155) {
          console.log('点击按钮');
        }
      });
    },
  },
}
</script>
<style lang="scss" scoped>
  @import "./main.scss";

</style>