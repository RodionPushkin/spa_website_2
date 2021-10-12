<template>
  <div class="mouse">
    <div class="cursor"></div>
    <div class="cursor-aura"></div>
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
  mounted() {
    this.cursorMovement()
  },
  methods: {
    cursorMovement: function(){
      let cursorEl = document.querySelector('.cursor');
      let cursorAuraEl = document.querySelector('.cursor-aura');
      let mouseX = 0, mouseY = 0, posX = 0, posY = 0;
      const mouseCoords = (e)=>{
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
      let event;
      document.querySelector('body').addEventListener('mousemove', e=> {
        if(window.innerWidth < 700){
          return
        }
        event = e
        mouseCoords(event)
        cursorAuraEl.classList.remove('disabled')
        cursorEl.classList.remove('disabled')
        if(e.toElement.classList.contains('hover')){
          cursorEl.classList.add('event-hover')
          cursorAuraEl.classList.add('event-hover')
        }else if(e.toElement.classList.contains('button')){
          cursorEl.classList.add('event-button')
          cursorAuraEl.classList.add('event-button')
        }else{
          cursorEl.classList.remove('event-hover')
          cursorAuraEl.classList.remove('event-hover')
          cursorEl.classList.remove('event-button')
          cursorAuraEl.classList.remove('event-button')
        }
      })
      window.addEventListener('scroll', ()=> {
        mouseCoords(event)
      })
      document.querySelector('body').addEventListener('mouseout', ()=> {
        cursorAuraEl.classList.add('disabled')
        cursorEl.classList.add('disabled')
      })
      gsap.to({}, .01, {
        repeat: -1,
        onRepeat: () =>{
          posX += (mouseX - posX) / 10
          posY += (mouseY - posY) / 10
          gsap.set(cursorEl, {
            css: {
              left: mouseX,
              top: mouseY
            }
          })
          gsap.set(cursorAuraEl, {
            css: {
              left: posX,
              top: posY
            }
          })
        }
      })
    },
  }
}
</script>
<style lang="scss">
.mouse{
  mix-blend-mode: difference;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  z-index: 99999;
}
.cursor{
  mix-blend-mode: difference;
  position: absolute;
  height: 16px;
  width: 16px;
  top: -999999px;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  background : var(--white-color);
  border-radius: 50%;
  transition: width 0.15s cubic-bezier(0,-0.94,1,1.94), height 0.15s cubic-bezier(0,-0.94,1,1.94), opacity 0.15s, transform 0.15s cubic-bezier(0,-0.94,1,1.94);
  user-select: none;
  pointer-events: none;
  &.event-hover{
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  &.event-button{
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
}
.cursor-aura{
  mix-blend-mode: difference;
  position: absolute;
  height: 128px;
  width: 128px;
  top: -999999px;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  border: 1px solid var(--white-color);
  background: var(--white-color);
  border-radius: 50%;
  transition: width 0.2s cubic-bezier(0,-0.94,1,1.94), height 0.2s cubic-bezier(0,-0.94,1,1.94), opacity 0.2s, transform 0.15s cubic-bezier(0,-0.94,1,1.94);
  user-select: none;
  pointer-events: none;
  &.event-hover{
    transform: translate(-50%, -50%) scale(1.3);
  }
  &.event-button{
    transform: translate(-50%, -50%) scale(1.3);
  }
}
.disabled{
  opacity: 0;
}
*{
  cursor: none;
}
</style>