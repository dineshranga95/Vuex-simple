<template>
  <div id="">
   <h1>Product list one</h1>
   <ul v-for="prod in saleProducts">
     <li> <span>{{prod.name}}</span><span> {{prod.price}}</span></li>     
   </ul>
  </div>
</template>

<script>
export default {
  name: 'productone',
  computed:{
    products(){
      return this.$store.state.products;
    },
    saleProducts(){
      return this.$store.getters.saleProducts;
    }
  }
 
}
</script>

