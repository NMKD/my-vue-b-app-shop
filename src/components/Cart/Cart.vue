<template>
    <div>
        <h1>Cart</h1>
        <div class="row">
            <p v-if="checkLength === false">Ваша корина пуста :(</p>
            <div class="col-sm-12 col-md-8 col-lg-8">
                <CartItems v-for="cart in carts" :key="cart.id" :cart_product="cart" />
            </div>
            <div class="col">
                <div class="card text-right">
                    <div class="card-body">
                        <h5 class="card-title">Итого: totalPrice</h5>
                        <p class="card-text"><strong>Доставка:</strong> завтра</p>
                        <p class="card-text"><strong>Количество:</strong> число</p>
                        <a href="#" class="btn btn-success">Купить</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import CartItems from './CartItems.vue';
export default {
    name: "CartShop",
    data() {
        return {
            carts: [
                {
                    id: 6,
                    name: "Куртка Jet'S",
                    image: "https://images.unsplash.com/photo-1584814763982-c1f182e71703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                    description: 'Осень-Зима 2022 - 2023. Выполнена из качественной, плотной ветрозащитной и водоотталкивающей....',
                    price: 5900,
                    available: true,
                    sex: "email"
                }
            ]
        }
    },
    computed: {
        checkLength() {
            return !this.carts.length ? false : true
        }

    },
    components: {
        CartItems
    },
}
</script>