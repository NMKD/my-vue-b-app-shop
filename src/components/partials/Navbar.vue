<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Главная</b-nav-item>
                <b-nav-item href="#">Корзина</b-nav-item>
                <b-nav-item href="#">Заказы</b-nav-item>

                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Мой товар" right>
                    <b-dropdown-item href="#">Добавить</b-dropdown-item>
                    <b-dropdown-item href="#">Редактировать</b-dropdown-item>
                    <b-dropdown-item href="#">Удалить</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="Пользователь" right>
                    <b-dropdown-item href="#">Профиль</b-dropdown-item>
                    <b-dropdown-item href="#">Выйти</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "NavbarPartials"
}
</script>
