<template> 
  <div ref="box" class="box"></div>
</template>
<script>
import { TimelineLite, Back } from 'gsap'
export default {
  mounted() {
    const { box } = this.$refs
    const timeline = new TimelineLite()
    
    timeline.to(box, 1, {
      x: 1300,
      rotation: 0,
      ease: Back.easeInOut, // Specify an ease
    })
    timeline.to(box, 0.5, {
      background: 'green'
    },
    '-=0.5' // Run the animation 0.5s early
    )
  }
}
</script>
<style> 
.box { 
  height: 60px; 
  width: 60px; 
  background: red; 
}
</style>
