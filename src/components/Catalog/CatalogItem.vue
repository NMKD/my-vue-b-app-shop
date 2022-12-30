<!-- eslint-disable vue/no-multiple-template-root -->
<template>
    <b-col sm="12" md="6" lg="4" xl="4">
        <b-card :title="product_data.name" :img-src="product_data.image" :img-alt="product_data.name" img-top
            style="max-width: 20rem;" class="mb-2">
            <b-card-text>
                {{ product_data.description }}
            </b-card-text>
            <b-card-text>
                {{ product_data.price }} р.
            </b-card-text>

            <b-button class="card-link" href="#" variant="info" @click="lookCardInformation">Посмотреть</b-button>

            <b-button class="card-link" href="#" variant="danger" @click="addToCart">В корзину</b-button>
        </b-card>
    </b-col>

</template>
    

<script>
export default {
    name: "CatalogItemShop",
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        },
        index: {
            type: Number
        }
    },
    data() {
        return {

        }
    },
    methods: {
        lookCardInformation() {
            this.$emit('lookCardInformation', this.product_data.id)
        },
        addToCart() {
            this.$emit('addToCart', this.product_data.id)
        },
    }
}
</script>