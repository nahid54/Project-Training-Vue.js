<template>
  <div class="bg-light">
    <modal></modal>
    <navbar></navbar>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import Modal from './components/modal.vue'
  import Navbar from './components/navbar.vue'
  import Footer from './components/footer'
  export default {
    components:{
      'modal':Modal,
      'navbar':Navbar,
      'myfooter':Footer,
    }
  }
</script>

<style>

</style>
