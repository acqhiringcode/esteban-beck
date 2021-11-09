
window.addEventListener('DOMContentLoaded', (event) => {
    
    const productos = [
        {
            imagen: "imgs/martina.jpg",
        }, 
        {
            imagen: "imgs/varem.jpg",
        },
        {
            imagen: "imgs/friditas.jpg",
        },
        {
            imagen: "imgs/mini-play.jpg",
        },
        {
            imagen: "imgs/alltudor.jpg",
        }, 
        {
            imagen: "imgs/ely.jpg",
        },
        {
            imagen: "imgs/optica.jpg",
            imagen: "imgs/optica.jpg",
        }, 
        {
            imagen: "imgs/sarin.jpg",
        },
        {
            imagen: "imgs/polibyus.jpg",
        }, 
        {
            imagen: "imgs/good-luck.jpg",
        },
        {
            imagen: "imgs/gestion.jpg",
        },
        {
            imagen: "imgs/ultramovil.jpg",
        }
    ];

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

    window.location.pathname == '/esteban-beck/index.php' || window.location.pathname == '/esteban-beck/clientes.php' ? controllerProducts() : console.log('noIndex');

    // Sliders
    if(document.querySelector('[data-comp=marcas-slider]')){
        console.log();
        var sliderMarcas = tns({
            "container": "[data-comp=marcas-slider]", 
            "items": 6, 
            "speed": 400, 
            "gutter": 15, 
            'preventScrollOnTouch': true,
            "responsive": { 0: { items: 2 }, 500: { items: 3 }, 940: { items: 5 }, 1400: { items: 5 } } 
        });
    }
    if(document.querySelector('[data-comp=main-slider]')){
        var slider = tns({
            "container": "[data-comp=main-slider]",
            "autoHeight": true,
            "items": 1,
            "swipeAngle": false,
            "speed": 400,
        });
    }
    
    // Scroll Hidden
    setTimeout(() => {
        document.body.classList.add('animation');
        document.body.classList.remove('hidden-scroll');
    }, 1500);
    
    // Main Nav
    let mainNav = document.querySelector('.main-nav__sticky');
    let mainNavLink = document.querySelectorAll('.main-navigation__link');

    for (const link of mainNavLink) {
        const href = link.getAttribute("href").split("#")[1];
        if ( typeof href !== "undefined" ) {
            link.addEventListener("click", clickHandler);
        }
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop - 190,
            behavior: "smooth"
        });
    }
    

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