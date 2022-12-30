<template>
    <div>
        <h1>Orders</h1>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Сумма</th>
                </tr>
            </thead>
            <tbody>
              <OrdersItems/>
            </tbody>
        </table>
    </div>
</template>

<script>
import OrdersItems from "./OrdersItems.vue"
export default {
    name: "OrdersShop",
    components: {
        OrdersItems
    }
}

</script>