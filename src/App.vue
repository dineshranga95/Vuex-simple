<template>
  <div id="app">
   <productone/>
    <producttwo/>
  </div>
</template>

<script>
import productone from './components/productone.vue'
import producttwo from './components/producttwo.vue'

export default {
  name: 'app',
  data () {
    return {
        }
  },
  components:{
    productone,
    producttwo

  }
}
</script>

