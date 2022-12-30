<template>
    <div>
        <h1>Добавить товар</h1>
        <form action="" method="post" class="gy-2 gx-3">
            <div class="mb-3 row">
                <label for="name" class="form-label">Имя</label>
                <input type="text" class="form-control" id="name" placeholder="Введите имя" name="name">
            </div>
            <div class="mb-3 row">
                <label for="image" class="form-label">Картинка</label>
                <input type="text" class="form-control" id="image" placeholder="Введите URL картинки" name="image">
            </div>
            <div class="mb-3 row">
                <label for="description" class="form-label">Описание</label>
                <textarea class="form-control" id="description" placeholder="Введите описание"
                    name="description"></textarea>
            </div>
            <div class="mb-3 row">
                <label for="price" class="form-label">Цена</label>
                <input type="number" class="form-control" id="price" placeholder="Введите цену"
                    name="price">
            </div>
            <div class="row mb-3 text-left">
                <legend class="col-form-label p-0">Пол</legend>
                <div class="col-sm-10 pb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sex" id="sex" value="femail"
                            checked>
                        <label class="form-check-label" for="sex">
                            Женская
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sex" id="sex" value="mail">
                        <label class="form-check-label" for="sex">
                            Мужская
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-info">Добавить</button>
        </form>
    </div>

</template>

<script>
export default {
    name: "FormForSellerAddProduct"
}
</script>