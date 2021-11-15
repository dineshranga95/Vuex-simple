import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store= new Vuex.Store({
    strict:true,
    state:{
        products: [
            { name : 'mango', price :20},
            { name : 'apple', price :80},
            { name : 'shoe', price :520},
          ]
            
    },
    getters:{
        saleProducts:state=>{
            var saleProducts= state.products.map(product=>{       
              return{
                name: "**"+product.name+"**",
                price: product.price/2
              }
            })
            return saleProducts;
          }
        
    },
    mutations:{
        reducePrice:state=>{
            state.products.forEach(product=>[
              product.price -= 1
            ]);
            
          }
    }
})
