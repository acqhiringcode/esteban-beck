
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
    window.location.pathname.indexOf('nosotros') >= 0 ? console.log('nosotros') : controllerProducts();

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