<template>
    <div class="card mb-3 text-left" style="max-width: 600px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img style="width: 160px;" :src="cart_product.image"
                    :alt="cart_product.name + ' модная, не дорого'" />
            </div>
            <div class="col-md-8 ">
                <div class="card-body">
                    <h5 class="card-title">{{ cart_product.name }}</h5>
                    <p class="card-text"> {{ cart_product.description }}</p>
                    <a class="btn btn-danger" href="#" role="button">REMOVE</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartItems",
    props: {
        cart_product: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>
