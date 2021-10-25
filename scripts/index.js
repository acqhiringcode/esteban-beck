
window.addEventListener('DOMContentLoaded', (event) => {

    const productos = [{
        imagen: "imgs/item.jpg",
    }, {
        imagen: "imgs/item.jpg",
    }, {
        imagen: "imgs/item.jpg",
    }, {
        imagen: "imgs/item.jpg",
    }, {
        imagen: "imgs/item.jpg",
    }, {
        imagen: "imgs/item.jpg",
    }, {
        imagen: "imgs/item.jpg",
    }, {
        imagen: "imgs/item.jpg",
    }];

    let getProducts = () => {

        return productos;
    }

    let renderProductos = productos => {
        let template_product = '';

        for (let producto of Array.from(productos)) {
            template_product += `
                <article class='item-categorias'>
                    <figure class='item-categorias__figure'>
                        <img src="${producto.imagen}" alt="#" class='item-categorias__image'>
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
    window.location.pathname.indexOf('nosotros') >= 0 ? console.log('nosotros') : controllerProducts();

    if(document.querySelector('[data-comp=marcas-slider]')){
        console.log();
        var sliderMarcas = tns({
            "container": "[data-comp=marcas-slider]", 
            "items": 6, 
            "speed": 400, 
            "gutter": 15, 
            "responsive": { 0: { items: 2 }, 500: { items: 3 }, 940: { items: 5 }, 1400: { items: 5 } } 
        });
    }


    setTimeout(() => {
        document.body.classList.add('animation');
        document.body.classList.remove('hidden-scroll');
    }, 1500);

    if(document.querySelector('[data-comp=main-slider]')){
        var slider = tns({
            "container": "[data-comp=main-slider]",
            "autoHeight": true,
            "items": 1,
            "swipeAngle": false,
            "speed": 400,
        });
    }


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