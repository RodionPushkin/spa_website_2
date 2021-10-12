<template>
  <div class="page">
    <section class="section-full">
    </section>
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
  data(){
    return {
      theme: this.$store.getters.getTheme
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
    if(this.theme){
      this.$store.dispatch('TOGGLE_THEME')
    }
  },
  methods:{
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
</style>
