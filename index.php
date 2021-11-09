<?php $idPage = 'home' ?>
<?php $title = 'Esteban Beck Bolsas' ?>
<?php $description = 'Bolsas de carton, kraft, plastico.' ?>

<?php include './includes/main-nav.php' ?>

<section class='container slider'>
    <div class="row">
        <div class="content" data-comp='main-slider'>
            <figure class='slider__figure'>
                <img class='slider__image' src="imgs/slide-2.jpg" alt="#">
            </figure>
            <figure class='slider__figure'>
                <img class='slider__image' src="imgs/slide-5.jpg" alt="#">
            </figure>
            <figure class='slider__figure'>
                <img class='slider__image' src="imgs/slide-4.jpg" alt="#">
            </figure>
            <figure class='slider__figure'>
                <img class='slider__image' src="imgs/slide-6.jpg" alt="#">
            </figure>
            <figure class='slider__figure'>
                <img class='slider__image' src="imgs/slide-1.jpg" alt="#">
            </figure>
        </div>
    </div>
</section>

<main class='wrapper'>

    <section class='container productos' id='productos'>
        <div class="row">
            <div class="content productos__content">
                <article class='item-productos item-productos--6'>
                    <a href="bolsas-de-carton.php" class="item-productos__link">
                        <figure class='item-productos__figure'>
                            <img src="imgs/bolsas-de-carton.jpg" class='item-productos__image' alt="">
                            <figcaption class='item-productos__figcaption'>
                                <h3 class='item-productos__title'>Bolsas de Carton</h3>
                            </figcaption>
                        </figure>
                    </a>
                </article>
                <article class='item-productos item-productos--6'>
                    <a href="bolsas-de-kraft.php" class="item-productos__link">
                        <figure class='item-productos__figure'>
                            <img src="imgs/bolsas-de-kraft.jpg" class='item-productos__image' alt="">
                            <figcaption class='item-productos__figcaption'>
                                <h3 class='item-productos__title'>Bolsas de Kraft</h3>
                            </figcaption>
                        </figure>
                    </a>
                </article>
                <article class='item-productos item-productos--4'>
                    <a href="bolsas-plasticas.php" class="item-productos__link">
                        <figure class='item-productos__figure'>
                            <img src="imgs/bolsas-plasticas.jpg" class='item-productos__image' alt="">
                            <figcaption class='item-productos__figcaption'>
                                <h3 class='item-productos__title'>Bolsas Plasticas</h3>
                            </figcaption>
                        </figure>
                    </a>
                </article>
                <article class='item-productos item-productos--4'>
                    <a href="stickers-cierra-bolsas.php" class="item-productos__link">
                        <figure class='item-productos__figure'>
                            <img src="imgs/cierra-bolsas.jpg" class='item-productos__image' alt="">
                            <figcaption class='item-productos__figcaption'>
                                <h3 class='item-productos__title'>Sticker - Cierra Bolsas</h3>
                            </figcaption>
                        </figure>
                    </a>
                </article>
                <article class='item-productos item-productos--4'>
                    <a href="#" class="item-productos__link">
                        <figure class='item-productos__figure'>
                            <img src="imgs/etiqueta.jpg" class='item-productos__image' alt="">
                            <figcaption class='item-productos__figcaption'>
                                <h3 class='item-productos__title'>Etiquetas para Ropa</h3>
                            </figcaption>
                        </figure>
                    </a>
                </article>
            </div>
        </div>
    </section>

    <aside class="container banner">
        <div class="row">
            <figure class="banner__figure">
                <img src="imgs/monios-bg.jpg" alt="#" class="banner__image">
            </figure>
            <div class="content">
                <h3 class="banner__title">MOÑOS</h3>
                <p class="banner__text">Gran variedad de colores</p>
            </div>
        </div>
    </aside>

    <section class='container categorias' id='clientes'>
        <div class="row">
            <h2 class="categorias__title">Nuestros Clientes</h2>
            <div class="content categorias__boxes" data-comp="marcas-slider">

            </div>
        </div>
    </section>

</main>


<?php include './includes/main-footer.php' ?>