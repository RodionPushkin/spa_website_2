<template>
  <div class="page">
    <section class="section-full">
      <h1 class="xl sc">лампочки</h1>
      <div class="lamp" @click="setTheme()">
        <div ref="lightbg" class="bg"></div>
        <img draggable="false" src="@/assets/light.png" alt="" class="image">
      </div>
      <h1 class="xl sc">работающие вечность</h1>
      <button class="button mb sc">заказать</button>
    </section>
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
  data(){
    return {
      theme: false
    }
  },
  computed:{
    changeTheme(){
      return this.$store.getters.getTheme
    }
  },
  watch:{
    changeTheme(newCount, oldCount){
      this.theme = newCount
    }
  },
  mounted(){
    
  },
  methods:{
    setTheme: function(e){
      if(this.theme){
        this.$refs.lightbg.classList.remove('active')
      }else{
        this.$refs.lightbg.classList.add('active')
      }
      this.$store.dispatch('TOGGLE_THEME')
    }
  }
}
</script>
<style lang="scss" scoped>
.section-full{
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  h1{
    text-align: center;
    z-index: 1;
    transition: 0.3s;
  }
  .button{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100px;
    cursor: none;
    &:hover{
      color: inherit;
    }
  }
}
.lamp{
  height: 50vh;
  width: 50vh;
  display: grid;
  place-items: center;
  z-index: 0;
  .image{
    height: 40vh;
    pointer-events: none;
  }
  .bg{
    background: #fff;
    height: 50vh;
    width: 50vh;
    border-radius: 50%;
    position: absolute;
    order: 0;
    transition: width 0.5s, height 0.5s;
    z-index: -1;
    &.active{
      position: fixed;
      background: #fff;
      width: 200vw;
      height: 200vw;
    }
  }
}
</style>
