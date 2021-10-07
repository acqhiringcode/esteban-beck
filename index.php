<?php include './includes/main-nav.php'; ?>

<h1 class="hidden-title">Esteban Beck Bolsas</h1>

<section class='container slider'>
    <div class="row">
        <div class="content" data-comp='main-slider'>
            <figure class='slider__figure'>
                <img class='slider__image' src="imgs/slide.jpg" alt="#">
            </figure>
            <figure class='slider__figure'>
                <img class='slider__image' src="imgs/slide.jpg" alt="#">
            </figure>
            <figure class='slider__figure'>
                <img class='slider__image' src="imgs/slide.jpg" alt="#">
            </figure>
        </div>
    </div>
</section>

<main class='wrapper'>

    <section class='container productos'>
        <div class="row">
            <div class="content productos__content">
                <article class='item-productos'>
                    <figure class='item-productos__figure'>
                        <img src="imgs/test.png" class='item-productos__image' alt="">
                        <figcaption class='item-productos__figcaption'>
                            <h3 class='item-productos__title'>Sobres de ecommerce</h3>
                        </figcaption>
                    </figure>
                </article>
                <article class='item-productos'>
                    <figure class='item-productos__figure'>
                        <img src="imgs/test.png" class='item-productos__image' alt="">
                        <figcaption class='item-productos__figcaption'>
                            <h3 class='item-productos__title'>Bolsa Ecologica</h3>
                        </figcaption>
                    </figure>
                </article>
                <article class='item-productos'>
                    <figure class='item-productos__figure'>
                        <img src="imgs/test.png" class='item-productos__image' alt="">
                        <figcaption class='item-productos__figcaption'>
                            <h3 class='item-productos__title'>Cajas</h3>
                        </figcaption>
                    </figure>
                </article>
            </div>
        </div>
    </section>

    <section class='container categorias'>
        <div class="row">
            <div class="content">
                <div class="categorias-header">
                    <h2 class='categorias__title'>Elige, paga y recibe tu pedido sin moverte de tu casa.</h2>
                    <ul class='categorias__navigation'>
                        <li class='categorias__item'>
                            <a href="" class='categorias__link' data-category='todos'>Todos</a>
                        </li>
                        <li class='categorias__item'>
                            <a href="" class='categorias__link' data-category='bolsas'>Bolsas</a>
                        </li>
                        <li class='categorias__item'>
                            <a href="" class='categorias__link' data-category='stickers'>Stickers</a>
                        </li>
                        <li class='categorias__item'>
                            <a href="" class='categorias__link' data-category='paquetes'>Paquetes</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="content categorias__boxes">

            </div>
        </div>
    </section>

</main>

<?php include './includes/main-footer.php'; ?>