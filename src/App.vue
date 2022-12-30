<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div id="app">
    <NavbarPartials />
    <div class="container">
      <HomePageVue />
      <CartShop />
      <OrdersShop />
      <FormForSellerAddProduct />
      <FooterShop />
    </div>
  </div>
</template>

<script>
import HomePageVue from './components/Home.vue';
import NavbarPartials from './components/partials/Navbar.vue';
import FooterShop from './components/partials/Footer.vue';
import CartShop from "./components/Cart/Cart.vue"
import OrdersShop from "./components/Orders/Orders.vue"
import FormForSellerAddProduct from "./components/Forms/AddProduct.vue"

export default {
  name: 'App',
  components: {
    HomePageVue,
    NavbarPartials,
    FooterShop,
    CartShop,
    OrdersShop,
    FormForSellerAddProduct
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
