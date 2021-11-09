
// pages
var pages = function() {

	// objet
	var _ = this;

	// pages
	_.home = new Home("[data-page='home']");
	_.clientes = new Clientes("[data-page='clientes']");
	_.nosotros = new Nosotros("[data-page='nosotros']");

};

// ---

// home page
var Home = function(sel) {

	// objet
	var _ = this;

	// view
	_.page = document.querySelector(sel);
	
	// ---

	// init
	this.init = function() {

		_.clientes = new ClientesComponent('[id=clientes]');
		_.mainNavLink = document.querySelectorAll('.main-navigation__link');
		
		// Sliders
		if(document.querySelector('[data-comp=marcas-slider]')){
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

		if(_.mainNavLink){
			for (const link of _.mainNavLink) {
				const href = link.getAttribute("href").split(".")[0];
				if ( typeof href !== "undefined" && href !== 'nosotros' && href !== 'contacto') {
					link.addEventListener("click", function (e) {
						e.preventDefault();
						const offsetTop = document.querySelector('#'+href).offsetTop;
						scroll({
							top: offsetTop - 280,
							behavior: "smooth"
						});
					});
				}
    		}
		}

		let image = document.querySelector('.banner__image');
		new simpleParallax(image, {
			maxTransition: 120
		});

	};

	// ---

	// init
	if (_.page) {
		this.init();
	}

};

var Clientes = function(sel) {

	// objet
	var _ = this;

	// view
	_.page = document.querySelector(sel);
	
	
	// ---

	// init
	this.init = function() {

		_.clientes = new ClientesComponent('[id=clientes]');

		// Sliders
		if(document.querySelector('[data-comp=marcas-slider]')){
			var sliderMarcas = tns({
				"container": "[data-comp=marcas-slider]", 
				"items": 6, 
				"speed": 400, 
				"gutter": 15, 
				'preventScrollOnTouch': true,
				"responsive": { 0: { items: 2 }, 500: { items: 3 }, 940: { items: 5 }, 1400: { items: 5 } } 
			});
		}

	};

	// ---

	// init
	if (_.page) {
		this.init();
	}

};

var Nosotros = function(sel) {

	// objet
	var _ = this;

	// view
	_.page = document.querySelector(sel);
	
	
	// ---

	// init
	this.init = function() {

		let image = document.querySelector('.main-nosotros__image');
		new simpleParallax(image, {
			maxTransition: 120
		});

	};

	// ---

	// init
	if (_.page) {
		this.init();
	}

};