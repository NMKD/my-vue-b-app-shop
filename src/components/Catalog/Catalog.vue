
<template>
    <div>
        <h1>Catalog of jackets </h1>
        <b-row>
            <CatalogItemShop v-for="(product, i) in products" :key="product.id" :product_data="product" :index="i"
                @lookCardInformation="show" @addToCart="add" />
        </b-row>
    </div>

</template>

<script>
import CatalogItemShop from './CatalogItem.vue';
import axios from "axios";

export default {
    name: "CatalogShop",
    props: {},
    data() {
        return {
            products: []
        }
    },
    mounted() {
        axios
            .get("http://localhost:3000/products")
            .then(response => (this.products = response.data));
    },
    methods: {
        show(id) {
            // fetch
            console.log(id)
        },
        add(id) {
            // fetch
            console.log(id)
        }
    },
    components: {
        CatalogItemShop
    }
}
</script>