
var NavPage = function(elem) {

	// objet
	var _ = this;

	// element
	_.$example = $html;

	// ---

	// init
	this.init = function() {
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

	}

	// ---

	// init
	this.init();

}

var ClientesComponent = function(sel) {

    // objet
    var _ = this;

	_.clientes = document.querySelector(sel);

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

    // ---

    // init
    this.init = function() {

		_.controllerProducts();
		
    }

	_.getProducts = () => productos;

	_.renderProductos = () => {
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

	_.controllerProducts = () => {
			let productos = _.getProducts();
			let template = _.renderProductos(productos);
			let category_boxes = document.querySelector('.categorias__boxes');
			category_boxes.insertAdjacentHTML('afterbegin', template);
	}

    // ---

    // init
	if(_.clientes){
		this.init();
	}

}


