<template>
  <div>
    <order-header title='我的购物车'>
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    cart
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
export default {
  name:'cart',
  components:{
    OrderHeader,
    ServiceBar,
    NavFooter
  },
  data(){
    return {
      list:[],//商品列表
      allChecked:false,//是否全选
      cartTotalPrice:0,//商品总金额
      checkedNum:0 //选中商品数量
    }
  },
  mounted(){
    this.getCartList();
  },
  methods:{
    getCartList(){
      this.axios.get('/carts').then((res)=>{
        this.list = res.cartProductVoList || []
        this.allChecked = res.selectedAll
        this.cartTotalPrice = res.cartTotalPrice
        this.checkedNum = res.cartTotalQuantity  
      })
    }
  }
}
</script>
<style scoped>
</style>