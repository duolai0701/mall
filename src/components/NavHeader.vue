<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;"
             v-if="!username"
             @click="login">登录</a>
          <a href="javascript:;"
             v-if="username">{{username}}</a>
          <a href="javascript:;"
             v-if="username">我的订单</a>
          <a href="javascript:;"
             class="my-cart"
             @click="goToCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product"
                    v-for="(item,index) in phoneList"
                    :key='index'>
                  <a :href="'/product/'+item.id"
                     >
                    <div class="pro-img">
                      <img v-lazy="item.mainImage"
                           :alt="item.subtitle">
                    </div>
                    <div class="pro-name">
                      {{item.name}}
                    </div>
                    <div class="pro-price">
                      {{item.price | currency}}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <!-- <div class="children"></div> -->
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href=""
                     target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'"
                           alt="">
                    </div>
                    <div class="pro-name">
                      小米壁画电视 65英寸
                    </div>
                    <div class="pro-price">
                      1799元
                    </div>
                  </a>
                </li>
                <li class="product">
                  <a href=""
                     target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'"
                           alt="">
                    </div>
                    <div class="pro-name">
                      小米壁画电视 65英寸
                    </div>
                    <div class="pro-price">
                      1799元
                    </div>
                  </a>
                </li>
                <li class="product">
                  <a href=""
                     target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'"
                           alt="">
                    </div>
                    <div class="pro-name">
                      小米壁画电视 65英寸
                    </div>
                    <div class="pro-price">
                      1799元
                    </div>
                  </a>
                </li>
                <li class="product">
                  <a href=""
                     target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'"
                           alt="">
                    </div>
                    <div class="pro-name">
                      小米壁画电视 65英寸
                    </div>
                    <div class="pro-price">
                      1799元
                    </div>
                  </a>
                </li>
                <li class="product">
                  <a href=""
                     target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'"
                           alt="">
                    </div>
                    <div class="pro-name">
                      小米壁画电视 65英寸
                    </div>
                    <div class="pro-price">
                      1799元
                    </div>
                  </a>
                </li>
                <li class="product">
                  <a href=""
                     target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'"
                           alt="">
                    </div>
                    <div class="pro-name">
                      小米壁画电视 65英寸
                    </div>
                    <div class="pro-price">
                      1799元
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text"
                   name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'nav-header',
  data () {
    return {
      phoneList: []
    }
  },
  computed: {
    // username () {
    //   return this.$store.state.username
    // },
    // cartCount () {
    //   return this.$store.state.cartCount
    // },
    ...mapState(['username','cartCount'])
  },
  filters: {
    currency (val) {
      if (!val) return '0.00';
      return "¥" + val.toFixed(2) + '元';
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    login () {
      this.$router.push('/login');
    },
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: "100012",
          pageSize: 6
        }
      }).then((res) => {
        // if (res.list.length >= 6) {
        //   this.phoneList = res.list.slice(0,6)
        // }
        this.phoneList = res.list
      })
    },
    goToCart () {
      this.$router.push('/cart');
    }
  }
}
</script>
<style lang='scss'>
@import url("./../assets/sass/base.scss");
@import "./../assets/sass/mixin.scss";
@import "./../assets/sass/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          // display: inline-block;
          // width: 16px;
          // height: 12px;
          // background: url("/imgs/icon-cart-checked.png") no-repeat center;
          // background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      position: relative;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            transition: margin 0.2s;
          }
          &:after {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 99999;
            overflow: hidden;
            transition: all 0.5s;
            background-color: #ffffff;
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              text-align: center;
              line-height: 12px;
              position: relative;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>