    <footer class='container main-footer'>
        <div class="row">
            <div class='content main-footer__content'>
                <div class="column--3">
                    <h3 class='main-footer__title'>Navegacion</h3>
                    <ul class='main-footer__list'>
                        <li class='main-footer__list-item'><a href="#" class='main-footer__link'>Home</a></li>
                        <li class='main-footer__list-item'><a href="#" class='main-footer__link'>Quienes Somos</a></li>
                        <li class='main-footer__list-item'><a href="#" class='main-footer__link'>Contactanos</a></li>
                    </ul>
                </div>
                <div class="column--3 column--3__main">
                    <img src="imgs/main-logo.jpg" alt="logo bolasas Esteban Beck" class='main-footer__logo'>
                    <a href="#" class='main-footer__derechos'>Todos los derechos resevados Esteban Beck</a>
                    <ul class='social-media'>
                        <li class='social-media__item'><a href="" class='social-media__link'><i class='social-media__ico icon-facebook'></i></a></li>
                        <li class='social-media__item'><a href="" class='social-media__link'><i class='social-media__ico icon-instagram'></i></a></li>
                        <li class='social-media__item'><a href="" class='social-media__link'><i class='social-media__ico icon-whatsapp'></i></a></li>
                    </ul>
                </div>
                <div class="column--3">
                    <h3 class='main-footer__title'>Contactanos</h3>
                    <ul class='main-footer__list'>
                        <li class='main-footer__list-item'><a href="#" class='main-footer__link'>44444-44444</a></li>
                        <li class='main-footer__list-item'><a href="#" class='main-footer__link'>email@gmail.com</a></li>
                        <li class='main-footer__list-item'><a href="#" class='main-footer__link'>Direccion</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <div class="whatsapp-container">
        <a href="#" class="whatsapp-container__link">
            <i class='whatsapp-container__ico-whtp'></i>
        </a>
    </div>

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>

    <script>
        window.addEventListener('DOMContentLoaded', (event) => {

            const productos = [{
                titulo: "Bolsa de papel 30x12x41",
                unidades: "100 unidades",
                precio: "4100$",
                imagen: "imgs/item.jpg",
                categoria: 'bolsas'
            }, {
                titulo: "Bolsa de papel 30x12x41",
                unidades: "100 unidades",
                precio: "4100$",
                imagen: "imgs/item.jpg",
                categoria: 'stickers'
            }, {
                titulo: "Bolsa de papel 30x12x41",
                unidades: "100 unidades",
                precio: "4100$",
                imagen: "imgs/item.jpg",
                categoria: 'paquetes'
            }, {
                titulo: "Bolsa de papel 30x12x41",
                unidades: "100 unidades",
                precio: "4100$",
                imagen: "imgs/item.jpg",
                categoria: 'paquetes'
            }, {
                titulo: "Bolsa de papel 30x12x41",
                unidades: "100 unidades",
                precio: "4100$",
                imagen: "imgs/item.jpg",
                categoria: 'bolsas'
            }, {
                titulo: "Bolsa de papel 30x12x41",
                unidades: "100 unidades",
                precio: "4100$",
                imagen: "imgs/item.jpg",
                categoria: 'stickers'
            }, {
                titulo: "Bolsa de papel 30x12x41",
                unidades: "100 unidades",
                precio: "4100$",
                imagen: "imgs/item.jpg",
                categoria: 'bolsas'
            }, {
                titulo: "Bolsa de papel 30x12x41",
                unidades: "100 unidades",
                precio: "4100$",
                imagen: "imgs/item.jpg",
                categoria: 'paquetes'
            }];

            let getProducts = () => {

                return productos;
            }

            let renderProductos = productos => {
                let template_product = '';

                for (let producto of Array.from(productos)) {
                    template_product += `
                        <article class='item-categorias' data-producto='${producto.categoria}'>
                            <figure class='item-categorias__figure'>
                                <img src="${producto.imagen}" alt="" class='item-categorias__image'>
                                <figcaption class='item-categorias__figcaption'>
                                    <h3 class='item-categorias__title'>${producto.titulo}</h3>
                                    <h3 class='item-categorias__length'>${producto.unidades}</h3>
                                    <span class='item-categorias__price'>${producto.precio}</span>
                                </figcaption>
                            </figure>
                        </article>`;
                }
                return template_product;

            }

            function controllerProducts() {
                let productos = getProducts();
                let template = renderProductos(productos);
                let category_boxes = document.querySelector('.categorias__boxes');
                category_boxes.insertAdjacentHTML('afterbegin', template);
            }
            controllerProducts();

            let bttnCategory = document.querySelectorAll('[data-category]');

            // bttnCategory.forEach( bttn => {
            //     bttn.addEventListener( 'click', (e) => {
            //         e.preventDefault();
            //         let categoryBttn = bttn.dataset.category;
            //         controllerProducts();
            //         filterProductos(categoryBttn);
            //     });
            // });
            function filterProductos(categoryBttn) {
                let productos = document.querySelectorAll('[data-producto]');
                productos.forEach(producto => {
                    console.log(producto.dataset.producto !== categoryBttn);
                    if (producto.dataset.producto !== categoryBttn) {
                        producto.remove();
                    }
                });
            }

            setTimeout(() => {
                document.body.classList.add('animation');
                document.body.classList.remove('hidden-scroll');
            }, 1500);

            var slider = tns({
                "container": "[data-comp=main-slider]",
                "autoHeight": true,
                "items": 1,
                "swipeAngle": false,
                "speed": 400,
            });


            let mainNav = document.querySelector('.main-nav__sticky');

            function onScrollActive() {
                document.body.classList.add('on-scroll');
            }

            function onScrollRemove() {
                document.body.classList.remove('on-scroll');
            }

            window.addEventListener('scroll', () => {
                if (window.pageYOffset > mainNav.offsetTop) {
                    onScrollActive();
                } else {
                    onScrollRemove();
                }
            })
        });
    </script>

</body>

</html>