<template>
  <div id="">
   <h1>product list two</h1>
    <ul v-for="product in products">
     <li> <span>{{product.name}}</span><span> {{product.price}}</span></li>     
   </ul>
  </div>
</template>

<script>
export default {
  name: 'producttwo',
  computed:{
    products(){
      return this.$store.state.products;
    }
  }
 
}
</script>

