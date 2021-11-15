<template>
  <div id="">
   <h1>Product list one</h1>
   <ul v-for="product in saleProducts">
     <li> <span>{{product.name}}</span><span> {{product.price}}</span></li>     
   </ul>
   <button v-on:click="reducePrice">Reduce Price</button>
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
  },
  methods:{
    reducePrice(){
      this.$store.commit('reducePrice');
      
    }
  }
 
}
</script>

