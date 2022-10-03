$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    
    if (scroll >=50) {
       
    $('.stickynav').addClass('sticky');
    $('.mobile-header').addClass('sticky');
      $('.mobmenu').addClass('sticky');
      $('.orlay').css ("top", "55px")
    } else{
        $('.stickynav').removeClass('sticky');
        $('.mobile-header').removeClass('sticky');
      $('.mobmenu').removeClass('sticky');
      $('.orlay').css ("top", "110px")
    }


});




// quantity 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    
    if (scroll >=450) {
       
    $('.pro-detail-price').addClass('sticky1');
      $('.sticky1 ._product-detail-content form').css("padding", "0");
      $('.sticky1 .product-form__quantity').css("display", "flex");
      $('.sticky1 .pro-add-to-cart').css("flex", "0 0 50%");
      $('.sticky1 .pro-add-to-cart').css("margin-left", "60px")
      $('.sticky1 .product-form__quantity').css("margin-bottom", "0");
      $('._product-detail-content form').css("margin-top", "0");
      $('.pro-quantity').css("display", "flex");
      $('.pro-quantity').css("align-items", "center");
      $('.pro-quantity').css("flex-direction", "row-reverse");
      $('.price-item--regular').css("color", "#fff");
      $('.product-form__input .form__label').css("color", "#fff");
      $('.product-form__input .form__label').css("padding-right", "10px");
      $('.product-form__input').css("flex", "unset");
      $('.shopify-payment-button').css("width", "50%");
      $('._product-detail-content form button').css("width", "50%");
      $('.product-form__buttons').css("display", "flex");
      $('.product-form__buttons').css("flex-direction", "row");
      $('.shopify-payment-button__button--unbranded').css("width", "100%");
       $('.shopify-payment-button').css("margin-left", "10px");
       $('.shopify-payment-button button').css("margin-top", "0px");
      $('.price-item--regular').css("display", "none");
    } else{
        $('.pro-detail-price').removeClass('sticky1');
       $('.pro-detail-price .price--large').show();
      $('.pro-detail-price .shopify-payment-button').show();
      $('.pro-detail-price .pro-add-to-cart').css("flex", "0 0 70%");
      $('.pro-detail-price .pro-add-to-cart').css("margin-left", "0px");
      $('.pro-detail-price .product-form__quantity').css("display", "block");
      $('.pro-quantity').css("display", "block");
       $('.price-item--regular').css("color", "#151875");
      $('.product-form__input .form__label').css("color", "#0d134e");
      $('.product-form__input .form__label').css("padding-right", "0px");
      $('.product-form__input').css("flex", "0 0 100%");
      $('.shopify-payment-button').css("width", "100%");
      $('._product-detail-content form button').css("width", "100%");
      $('.product-form__buttons').css("display", "block");
      $('.product-form__buttons').css("flex-direction", "column");
      $('.shopify-payment-button__button--unbranded').css("width", "100%");
       $('.shopify-payment-button').css("margin-left", "0px");
       $('.shopify-payment-button button').css("margin-top", "15px");
//       $('.price__sale').css("display", "block");
    }


});





// mobile

$('.toggle-menu').click (function(){
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
});


$('.ban-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:false,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.featured-pro-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
// tabs
// Show the first tab by default
$('.tabs-stage .div').hide();
$('.tabs-stage .div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage .div').hide();
  $($(this).attr('href')).show();
});

$('.category-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        },
        1400:{
            items:4
        }
    }
})

$('.about-feature-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1200:{
            items:1
        }
    }
})

// recommend product
  $(document).ready(function() {
$('.featured-pro-carousel4').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
  });







/*============================================================================
 Shopify Functions
==============================================================================*/
Shopify.theme.cart = (function (exports) {
  'use strict';

  function getDefaultRequestConfig() {
    return JSON.parse(
      JSON.stringify({
        credentials: 'same-origin',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json;'
        }
      })
    );
  }

  function fetchJSON(url, config) {
    return fetch(url, config).then(function(response) {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    });
  }

  function cart() {
    return fetchJSON('/cart.js', getDefaultRequestConfig());
  }

  function cartAdd(id, quantity, properties) {
    var config = getDefaultRequestConfig();

    config.method = 'POST';
    config.body = JSON.stringify({
      id: id,
      quantity: quantity,
      properties: properties
    });

    return fetchJSON('/cart/add.js', config);
  }

  function cartAddFromForm(formData) {
    var config = getDefaultRequestConfig();
    delete config.headers['Content-Type'];

    config.method = 'POST';
    config.body = formData;

    return fetchJSON('/cart/add.js', config);
  }

  function cartChange(line, options) {
    var config = getDefaultRequestConfig();

    options = options || {};

    config.method = 'POST';
    config.body = JSON.stringify({
      line: line,
      quantity: options.quantity,
      properties: options.properties
    });

    return fetchJSON('/cart/change.js', config);
  }

  function cartClear() {
    var config = getDefaultRequestConfig();
    config.method = 'POST';

    return fetchJSON('/cart/clear.js', config);
  }

  function cartUpdate(body) {
    var config = getDefaultRequestConfig();

    config.method = 'POST';
    config.body = JSON.stringify(body);

    return fetchJSON('/cart/update.js', config);
  }

  function cartShippingRates() {
    return fetchJSON('/cart/shipping_rates.json', getDefaultRequestConfig());
  }

  function key(key) {
    if (typeof key !== 'string' || key.split(':').length !== 2) {
      throw new TypeError(
        'Theme Cart: Provided key value is not a string with the format xxx:xxx'
      );
    }
  }

  function quantity(quantity) {
    if (typeof quantity !== 'number' || isNaN(quantity)) {
      throw new TypeError(
        'Theme Cart: An object which specifies a quantity or properties value is required'
      );
    }
  }

  function id(id) {
    if (typeof id !== 'number' || isNaN(id)) {
      throw new TypeError('Theme Cart: Variant ID must be a number');
    }
  }

  function properties(properties) {
    if (typeof properties !== 'object') {
      throw new TypeError('Theme Cart: Properties must be an object');
    }
  }

  function form(form) {
    if (!(form instanceof HTMLFormElement)) {
      throw new TypeError('Theme Cart: Form must be an instance of HTMLFormElement');
    }
  }

  function options(options) {
    if (typeof options !== 'object') {
      throw new TypeError('Theme Cart: Options must be an object');
    }

    if (
      typeof options.quantity === 'undefined' &&
      typeof options.properties === 'undefined'
    ) {
      throw new Error(
        'Theme Cart: You muse define a value for quantity or properties'
      );
    }

    if (typeof options.quantity !== 'undefined') {
      quantity(options.quantity);
    }

    if (typeof options.properties !== 'undefined') {
      properties(options.properties);
    }
  }

  /**
   * Cart Template Script
   * ------------------------------------------------------------------------------
   * A file that contains scripts highly couple code to the Cart template.
   *
   * @namespace cart
   */

  /**
   * Returns the state object of the cart
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function getState() {
    return cart().then(function(cart) {
      Events.trigger("cart:ready", cart)
    });
  }

  /**
   * Returns the object of the cart
   * @returns {Promise} Resolves with the object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function getCart() {
    return cart().then(function(cart) {
      return cart;
    });
  }

  /**
   * Returns the index of the cart line item
   * @param {string} key The unique key of the line item
   * @returns {Promise} Resolves with the index number of the line item
   */
  function getItemIndex(key$$1) {
    key(key$$1);

    return cart().then(function(state) {
      var index = -1;

      state.items.forEach(function(item, i) {
        index = item.key === key$$1 ? i + 1 : index;
      });

      if (index === -1) {
        return Promise.reject(
          new Error('Theme Cart: Unable to match line item with provided key')
        );
      }

      return index;
    });
  }

  /**
   * Fetches the line item object
   * @param {string} key The unique key of the line item
   * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
   */
  function getItem(key$$1) {
    key(key$$1);

    return cart().then(function(state) {
      var lineItem = null;

      state.items.forEach(function(item) {
        lineItem = item.key === key$$1 ? item : lineItem;
      });

      if (lineItem === null) {
        return Promise.reject(
          new Error('Theme Cart: Unable to match line item with provided key')
        );
      }
      return lineItem;
    });
  }

  /**
   * Add a new line item to the cart
   * @param {number} id The variant's unique ID
   * @param {object} options Optional values to pass to /cart/add.js
   * @param {number} options.quantity The quantity of items to be added to the cart
   * @param {object} options.properties Line item property key/values (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-properties)
   * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
   */
  function addItem(id$$1, options$$1) {
    options$$1 = options$$1 || {};

    id(id$$1);

    return cartAdd(id$$1, options$$1.quantity, options$$1.properties);
  }

  /**
   * Add a new line item to the cart from a product form
   * @param {object} form DOM element which is equal to the <form> node
   * @returns {Promise} Resolves with the line item object (See response of cart/add.js https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#add-to-cart)
   */
  function addItemFromForm(form$$1) {
    form(form$$1);

    var formData = new FormData(form$$1);
    id(parseInt(formData.get('id'), 10));

    return cartAddFromForm(formData);
  }

  /**
   * Changes the quantity and/or properties of an existing line item.
   * @param {string} key The unique key of the line item (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-key)
   * @param {object} options Optional values to pass to /cart/add.js
   * @param {number} options.quantity The quantity of items to be added to the cart
   * @param {object} options.properties Line item property key/values (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-properties)
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function updateItem(key$$1, options$$1) {
    key(key$$1);
    options(options$$1);

    return getItemIndex(key$$1).then(function(line) {
      return cartChange(line, options$$1);
    });
  }

  /**
   * Removes a line item from the cart
   * @param {string} key The unique key of the line item (https://help.shopify.com/en/themes/liquid/objects/line_item#line_item-key)
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function removeItem(key$$1) {
    key(key$$1);

    return getItemIndex(key$$1).then(function(line) {
      return cartChange(line, { quantity: 0 });
    });
  }

  /**
   * Sets all quantities of all line items in the cart to zero. This does not remove cart attributes nor the cart note.
   * @returns {Promise} Resolves with the state object of the cart (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-cart)
   */
  function clearItems() {
    return cartClear().then(function() {
      Events.trigger("cart:clear");
    });
  }

  /**
   * Gets all cart attributes
   * @returns {Promise} Resolves with the cart attributes object
   */
  function getAttributes() {
    return cart().then(function(state) {
      return state.attributes;
    });
  }

  /**
   * Sets all cart attributes
   * @returns {Promise} Resolves with the cart state object
   */
  function updateAttributes(attributes) {
    return cartUpdate({ attributes: attributes });
  }

  /**
   * Clears all cart attributes
   * @returns {Promise} Resolves with the cart state object
   */
  function clearAttributes() {
    return getAttributes().then(function(attributes) {
      for (var key$$1 in attributes) {
        attributes[key$$1] = '';
      }
      return updateAttributes(attributes);
    });
  }

  /**
   * Gets cart note
   * @returns {Promise} Resolves with the cart note string
   */
  function getNote() {
    return cart().then(function(state) {
      return state.note;
    });
  }

  /**
   * Sets cart note
   * @returns {Promise} Resolves with the cart state object
   */
  function updateNote(note) {
    return cartUpdate({ note: note });
  }

  /**
   * Clears cart note
   * @returns {Promise} Resolves with the cart state object
   */
  function clearNote() {
    return cartUpdate({ note: '' });
  }

  /**
   * Get estimated shipping rates.
   * @returns {Promise} Resolves with response of /cart/shipping_rates.json (https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#get-shipping-rates)
   */
  function getShippingRates() {
    return cartShippingRates();
  }

  exports.getState = getState;
  exports.getCart = getCart;
  exports.getItemIndex = getItemIndex;
  exports.getItem = getItem;
  exports.addItem = addItem;
  exports.addItemFromForm = addItemFromForm;
  exports.updateItem = updateItem;
  exports.removeItem = removeItem;
  exports.clearItems = clearItems;
  exports.getAttributes = getAttributes;
  exports.updateAttributes = updateAttributes;
  exports.clearAttributes = clearAttributes;
  exports.getNote = getNote;
  exports.updateNote = updateNote;
  exports.clearNote = clearNote;
  exports.getShippingRates = getShippingRates;

  return exports;

}({}));

Shopify.theme.ajaxCart = {
  init: function init() {
    let config = document.getElementById('cart-config');
    if ( !config ) return false;
    config = JSON.parse(config.innerHTML || '{}');

    var selectors = {
      cartTrigger: '.js-mini-cart-trigger',
      cartPageLoader: '.ajax-cart__page-wrapper .js-mini-cart-loader',
      addToCart: '.js-ajax-submit'
    };

    // Init carts
    this.initializeAjaxCart(config);

    // Set No Js Cart or Remove
		if (config.cart_action == 'no_js_cart') {
			if ( document.querySelector('.js-ajax-cart-content') ) {
				document.querySelector('.js-ajax-cart-content').remove();
			}
		} else {
			if ( document.querySelector('.js-ajax-cart-content-nojs') ){
				document.querySelector('.js-ajax-cart-content-nojs').remove();
			}
		}

    // Init cart type
    if (config.cart_action == 'drawer') {
      WAU.Slideout.init("ajax-cart");
    } else if (config.cart_action == 'modal_cart')  {
      WAU.Modal.init("ajax-cart");
    }

    // Override add to cart form
    document.querySelectorAll(selectors.addToCart).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        var addToCartForm = this.closest('form');
        Shopify.theme.ajaxCart.addToCart(addToCartForm, element.parentNode, config, false);

        return false;
      });
    });

    // Update cart page on load
    if (document.querySelector('body').classList.contains('template-cart')) {
      Shopify.theme.cart.getCart().then(Cart => {
        Shopify.theme.ajaxCart.updateView(config, Cart);

        // Remove page loader
        setTimeout(function(){
          theme.Helpers.fadeOut(document.querySelector(selectors.cartPageLoader));
        }, 800);

      });
    }

    // On cart trigger click
    let cartTriggers = document.querySelectorAll(selectors.cartTrigger);
    cartTriggers.forEach((item, i) => {
      item.addEventListener('click', function (e) {
        e.preventDefault();

        // Open drawer
        Shopify.theme.cart.getCart().then(Cart => {

          Shopify.theme.ajaxCart.updateView(config, Cart);

          if (config.cart_action == 'drawer') {
            Shopify.theme.ajaxCart.showDrawer(config);
          } else if (config.cart_action == 'modal_cart')  {
            Shopify.theme.ajaxCart.showModal(config);
          } else {
            window.location.href = config.cart_url;
          }

        });

        return false;
      });
    });
  },
  cartEvents: function cartEvents(config) {
    var selectors = {
      cartDrawerRemove: '.js-cart-remove',
      cartDrawerQty: '[data-item-qty]',
      cartDrawerQtyDecrease: '[data-ajax-qty-decrease]',
      cartDrawerQtyIncrease: '[data-ajax-qty-increase]',
      cartNote: '.js-cart-note'
    };

    // Cart Events
    var cartDrawerQtyElements = document.querySelectorAll(selectors.cartDrawerQty);
    if (!cartDrawerQtyElements.length) {
      return;
    }
    cartDrawerQtyElements.forEach((element, i) => {
      element.addEventListener('change', function(e) {
        e.preventDefault();

        var quantity = parseInt(this.value),
            itemKey = this.dataset.itemKey,
            itemMax = this.dataset.limit,
            lineElement = element.closest('.ajax-cart__cart-item');

        // Set new quantity
        element.value = quantity;

        // Adjust cart object
        setTimeout(function() {

          if (quantity === 0) {
            Shopify.theme.ajaxCart.removeFromCart(itemKey, config);
          } else {
            Shopify.theme.ajaxCart.checkLimit(itemMax, quantity, lineElement, config);
            Shopify.theme.cart.updateItem(itemKey, {quantity}).then(state => {
              Shopify.theme.ajaxCart.updateView(config, state);
            });
          }
        }, 250);
        return false;
      }); // End add event listener
    }); // End of querySelectorAll
    document.querySelectorAll(selectors.cartDrawerRemove).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        var itemKey = this.dataset.itemKey;

        Shopify.theme.ajaxCart.removeFromCart(itemKey, config);

        return false;
      });
    });
    document.querySelectorAll(selectors.cartDrawerQtyDecrease).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.nextElementSibling.value === '1' ) {
          var itemKey = this.dataset.itemKey;
          Shopify.theme.ajaxCart.removeFromCart(itemKey, config);
        } else {
          var itemId = this.dataset.ajaxQtyDecrease;
          Shopify.theme.ajaxCart.adjustQty(-1, itemId, config);
        }

        return false;
      });
    });
    document.querySelectorAll(selectors.cartDrawerQtyIncrease).forEach((element, i) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();

        var itemId = this.dataset.ajaxQtyIncrease;
        Shopify.theme.ajaxCart.adjustQty(+1, itemId, config);

        return false;
      });
    });
    document.querySelectorAll(selectors.cartNote).forEach((element, i) => {

      element.addEventListener('blur', (event) => {
        let note = element.value;
        Shopify.theme.cart.updateNote(note).then(state => {
          Shopify.theme.ajaxCart.updateView(config, state);
        });
      });

    });

    // Reinit shipping calc
    if ( config.show_calculator ) {
      setTimeout(function(){
        Shopify.theme.shippingCalculator.init();
      }, 1000);
    }

    // Restart Payment buttons
    if (Shopify && Shopify.StorefrontExpressButtons) {
      Shopify.StorefrontExpressButtons.initialize();
    }
  },
  showDrawer: function showDrawer(config) {
    if (config.cart_action != 'drawer') return false;

    WAU.Slideout._openByName("ajax-cart");

    // Remove drawer loader
    setTimeout(function(){
      theme.Helpers.fadeOut(document.querySelector('.ajax-cart__drawer-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  hideDrawer: function hideDrawer(config) {
    if (config.cart_action != 'drawer') return false;

    WAU.Slideout._closeByName("ajax-cart");

    // Show drawer loader
    setTimeout(function(){
      theme.Helpers.fadeIn(document.querySelector('.ajax-cart__drawer-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  showModal: function showModal(config) {
    if (config.cart_action != 'modal_cart') return false;

    WAU.Modal._openByName("ajax-cart");

    // Show modal loader
    setTimeout(function(){
      theme.Helpers.fadeOut(document.querySelector('.ajax-cart__modal-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  hideModal: function hideModal(config) {
    if (config.cart_action != 'modal_cart') return false;

    WAU.Modal._closeByName("ajax-cart");

    // Show modal loader
    setTimeout(function(){
      theme.Helpers.fadeIn(document.querySelector('.ajax-cart__modal-wrapper .js-mini-cart-loader'));
    }, 800);
  },
  removeFromCart: function removeFromCart(itemKey, config, callback) {
    Shopify.theme.cart.removeItem(itemKey).then(state => {
      Shopify.theme.ajaxCart.updateView(config, state);
    });
  },
  adjustQty: function adjustQty(value, itemId, config) {

    var selectors = {
      lineItem: '.item_' + itemId,
      updatesItem: '.updates_' + itemId
    };

    // Update Line Item
    document.querySelectorAll(selectors.lineItem).forEach((element, i) => {
      elementInput = element.querySelector(selectors.updatesItem),
      key = elementInput.dataset.itemKey,
      max = elementInput.dataset.limit,
      quantity = parseInt(elementInput.value) + parseInt(value);

      // Check limit to prevent over adding
      if (Shopify.theme.ajaxCart.checkLimit(max, quantity, element, config)) return false;

      // Check new qty to prevent going lower than 1
      if (quantity === 0 ) return false;

      // Set new quantity
      elementInput.value = quantity;

      // Adjust cart object
      Shopify.theme.cart.updateItem(key, { quantity }).then(state => {
        Shopify.theme.ajaxCart.updateView(config, state);
      });


    });
  },
  checkLimit: function checkLimit(max, quantity, element, config) {
    // Check limit to prevent over adding
    if (max != '' && quantity > max) {

      let cartNote = document.createElement('div');

      cartNote.classList.add('mini-cart__cart-note');
      cartNote.innerHTML = '<p><b>' + config.cart_error +'</b>&nbsp;&nbsp;' + config.update_qty_error + '</p>';

      let adjacentElement = element.querySelector('.js-item-quantity');
      let parentElement = adjacentElement.parentNode;

      parentElement.appendChild(cartNote, adjacentElement);

      setTimeout(function() {
        theme.Helpers.fadeOut(cartNote);
        parentElement.removeChild(cartNote);
      }, 2000);

      return true;
    }
  },
  addToCart: function addToCart(addToCartForm, formContext, config, isQuickview) {
    var selectors = {
      addToCart: '.js-ajax-submit',
      cartAddedMsg: '.js-added-msg'
    }

    let context;

    if ( isQuickview ) {
      context = document.querySelector('.js-quickview-content');
    } else {
      context = formContext;
    }

    // Check line item properties required
    if ( addToCartForm.querySelectorAll("[required]").length > 0 ) {
      var properties = document.querySelectorAll("[data-product-property-form]");
      var required = false;
      properties.forEach((element, i) => {
        if ( element.required && element.value === '' ) {
          required = true;
          document.querySelector(`[name="${element.name}"]`)?.classList.add('required-error');
        }
      });
      if ( required ) return false;
    }

    // Disable add to cart button temporarily]
    context.querySelector(selectors.addToCart).value = config.adding_to_cart;
    context.querySelector(selectors.addToCart).classList.add('disabled');
    context.querySelector(selectors.addToCart).getAttribute('disabled', 'disabled');

    Shopify.theme.cart.addItemFromForm(addToCartForm).then(item => {
      // Re-enable add to cart button
      context.querySelector(selectors.addToCart).value = config.added_to_cart;
      context.querySelector(selectors.addToCart).classList.remove('disabled');
      context.querySelector(selectors.addToCart).removeAttribute('disabled', 'disabled');

      setTimeout(function(){
        if (context.querySelector(selectors.addToCart)) context.querySelector(selectors.addToCart).value = config.add_to_cart;
      }, 3000);

      Shopify.theme.cart.getCart().then(Cart => {

        if ( isQuickview && config.cart_added_event != 'product_page') {
          Shopify.theme.quickview.hideModal();
        } else if ( isQuickview && config.cart_added_event == 'product_page') {
          theme.Helpers.fadeIn(context.querySelector(selectors.cartAddedMsg));

          setTimeout(function(){
            theme.Helpers.fadeOut(context.querySelector(selectors.cartAddedMsg));
          }, 3000);
        }

        if (config.cart_action == 'drawer' && config.cart_added_event == 'go_to_active_cart') {
          Shopify.theme.ajaxCart.showDrawer(config);
        } else if (config.cart_action == 'modal_cart' && config.cart_added_event == 'go_to_active_cart' )  {
          Shopify.theme.ajaxCart.showModal(config);
        } else if (config.cart_action == 'page_only' && config.cart_added_event == 'go_to_active_cart' )  {
          window.location.href = config.cart_url;
        } else if ( config.cart_added_event == 'product_page' ) {
          theme.Helpers.fadeIn(context.querySelector(selectors.cartAddedMsg));

          setTimeout(function(){
            theme.Helpers.fadeOut(context.querySelector(selectors.cartAddedMsg));
          }, 3000);
        } else {
          window.location.href = config.cart_url;
        }

        Shopify.theme.ajaxCart.updateView(config, Cart);
      });
    }).catch(error => {
      if (error.status == 422) {

        // Show error msg
        theme.Helpers.fadeIn(context.querySelector('.js-error-msg'));

        // Re-enable add to cart button
        context.querySelector(selectors.addToCart).value = config.add_to_cart;
        context.querySelector(selectors.addToCart).classList.remove('disabled');
        context.querySelector(selectors.addToCart).removeAttribute('disabled', 'disabled');

        setTimeout(function(){
          theme.Helpers.fadeOut(context.querySelector('.js-error-msg'));
        }, 3000);
      } else {
        console.log(error)
      }
    });
  },
  getAjaxCart: function getAjaxCart(response) {
    const el = document.createElement('div');
    el.innerHTML = response;

    const responseOptions = JSON.parse(el.querySelector('[data-options]').innerHTML);
    const htmls = el.querySelectorAll('[data-html]');

    let html = {};
    if (htmls.length === 1 && htmls[0].getAttribute('data-html') === '') {
      html = htmls[0].innerHTML;
    } else {
      for (let i = 0; i < htmls.length; i++) {
        html[htmls[i].getAttribute('data-html')] = htmls[i].innerHTML;
      }
    }
    let options = responseOptions;

    return html;
  },
  initializeAjaxCart: function initializeAjaxCart(config) {
    let data, url;
    url = config.cart_url + '/?view=ajax';

    fetch(url, data)
    .then(res => res.text())
    .then(response => {
      let html = Shopify.theme.ajaxCart.getAjaxCart(response);

      // Replace cart content
      document.querySelectorAll('.js-ajax-cart-content').forEach((item, i) => {
        item.innerHTML = html.content;
      });

    }).then(response => {
      // Init shipping calc
      if ( config.show_calculator ) {
        setTimeout(function(){
          Shopify.theme.shippingCalculator.init();
        }, 1000);
      }
    }).catch(error => {
      console.log(error)
    });
  },
  updateView: function updateView(config, Cart) {
    let data, url;
    url = config.cart_url + '/?view=ajax';

    fetch(url, data)
    .then(res => res.text())
    .then(response => {
      let html = Shopify.theme.ajaxCart.getAjaxCart(response);

      var selectors = {
        cartContent: '.js-ajax-cart-content',
        cartEmpty: '.js-cart-empty',
        cartForm: '.js-cart-form',
        cartAccordion: '.js-cart-accordion',
        cartCount: '.js-cart-count'
      };

      if (Cart.item_count === 0) {
        // Hide form
        document.querySelectorAll(selectors.cartForm).forEach((item, i) => {
          item.classList.add('hide');
        });
        // Show empty msg
        document.querySelectorAll(selectors.cartEmpty).forEach((item, i) => {
          item.classList.remove('hide');
        });
        // Update cart count
        document.querySelectorAll(selectors.cartCount).forEach((item, i) => {
          item.innerHTML = '0';
        });
      } else {
        // Hide empty msg
        document.querySelectorAll(selectors.cartEmpty).forEach((item, i) => {
          item.classList.add('hide');
        });
        // Update cart count
        document.querySelectorAll(selectors.cartCount).forEach((item, i) => {
          item.innerHTML = Cart.item_count;
        });
        // Replace cart page and drawer content
        document.querySelectorAll(selectors.cartContent).forEach((item, i) => {
          item.innerHTML = html.content;
        });
        // Reload accordions
        document.querySelectorAll(selectors.cartAccordion).forEach((item, i) => {
          theme.Helpers.Accordion(item, '.tlink.has_sub_menu a', '.accordion-content.sub');
          theme.Helpers.Accordion(item, '.tlink2.has_sub_menu a', '.accordion-content2.sub');
        });

        // Reload events
        Shopify.theme.ajaxCart.cartEvents(config);
      }

      // Set Cart Loaded
      setTimeout(function(){
        document.querySelector('body').classList.add('cart-loaded');

        //Remove dynamic buttons from drawer or model if on cart page
        if (document.querySelectorAll('#dynamic-checkout-cart').length == 2) document.querySelectorAll('#dynamic-checkout-cart')[1].remove();
      }, 500);

    })
    .catch(error => {
      console.log(error)
    });
  }
}

Shopify.theme.shippingCalculator = {
  init: function init() {
    var config = document.getElementById('cart-config');
    if ( !config ) return false;
    var config = JSON.parse(config.innerHTML || '{}');

    var selectors = {
      container: '.js-shipping-calc-wrapper',
      submitButton: '.js-shipping-calc-submit',
      addressZip: '.js-shipping-calc-address-zip',
      addressCountry: '.js-shipping-calc-address-country',
      addressProvince: '.js-shipping-calc-address-province',
      addressProvinceLabel: '.js-shipping-calc-address-province-label',
      response: '.js-shipping-calc-response'
    }

    let calculators = document.querySelectorAll(selectors.container);

    calculators.forEach((element, i) => {
      element.classList.add("shipping-calculator-" + i)
    });

    let container = document.querySelector('.shipping-calculator-0');

    if (!document.querySelector('body').classList.contains('template-cart')) return false;

    // Initialize observer on shipping address.
    new Shopify.CountryProvinceSelector('address_country', 'address_province', {
      hideElement: 'address_province_container'
    } );

    // Updating province label.
    var countriesSelect = container.querySelector(selectors.addressCountry);
    var addressProvinceLabelEl = container.querySelector(selectors.addressProvinceLabel);

    if (typeof Countries !== 'undefined') {
      Countries.updateProvinceLabel(countriesSelect.val(),addressProvinceLabelEl);
      countriesSelect.change(function() {
        Countries.updateProvinceLabel(countriesSelect.val(),addressProvinceLabelEl);
      });
    }

    // When any of the calculator buttons is clicked, get rates.
    let button = container.querySelector(selectors.submitButton);

    button.addEventListener('click', function(e) {
      e.preventDefault();

      // Disabling all buttons.
      Shopify.theme.shippingCalculator.disableButtons(config, container);

      // Hiding response.
      container.querySelector(selectors.response).style.display = 'none';

      // Reading shipping address for submission.
      let shippingAddress = {};
      shippingAddress.zip = container.querySelector(selectors.addressZip).value || '';
      shippingAddress.country = container.querySelector(selectors.addressCountry).value || '';
      shippingAddress.province = container.querySelector(selectors.addressProvince).value || '';

      Shopify.theme.shippingCalculator.getRates(config, shippingAddress, container);
    });
  },
  enableButtons: function enableButtons(config, container) {
    var selectors = {
      submitButton: '.js-shipping-calc-submit'
    }
    container.querySelector(selectors.submitButton).removeAttribute('disabled');
    container.querySelector(selectors.submitButton).classList.remove('disabled');
    container.querySelector(selectors.submitButton).value = config.calculator_submit;
  },
  disableButtons: function disableButtons(config, container) {
    var selectors = {
      submitButton: '.js-shipping-calc-submit'
    }
    container.querySelector(selectors.submitButton).setAttribute('disabled', 'disabled');
    container.querySelector(selectors.submitButton).classList.add('disabled');
    container.querySelector(selectors.submitButton).value = config.calculator_calculating;
  },
  getRates: function getRates(config, shipping_address, container) {

    let url = '/cart/shipping_rates.json?shipping_address%5Bzip%5D=' + shipping_address.zip + '&shipping_address%5Bcountry%5D=' + shipping_address.country + '&shipping_address%5Bprovince%5D=' + shipping_address.province;

    fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(response => {
      if ( !response.shipping_rates ) {
        Shopify.theme.shippingCalculator.onError(response, config, container);
      } else {
        let rates = response.shipping_rates;
        Shopify.theme.shippingCalculator.onRatesUpdate(rates, shipping_address, config, container);
      }
    }).catch(error => {
      Shopify.theme.shippingCalculator.onError(error, config, container);
    });

  },
  onError: function onError(error, config, container) {

    // Re-enable calculate shipping buttons.
    Shopify.theme.shippingCalculator.enableButtons(config, container);

    let feedback = config.calculator_error + ' ' + Object.keys(error)[0] + ' ' + Object.values(error)[0];

    // Update calculator.
    Shopify.theme.shippingCalculator.render( { rates: [], errorFeedback: feedback, success: false }, container, config );

    container.querySelector('.js-shipping-calc-rates').style.display = "none";
    container.querySelector('.js-shipping-calc-response').style.display = "block";
  },
  onRatesUpdate: function onRatesUpdate(rates, shipping_address, config, container) {
    // Re-enable calculate shipping buttons.
    Shopify.theme.shippingCalculator.enableButtons(config, container);

    // Formatting shipping address.
    var readable_address = '';
    if (shipping_address.zip) readable_address += shipping_address.zip + ', ';
    if (shipping_address.province) readable_address += shipping_address.province + ', ';
    readable_address += shipping_address.country;

    if ( !rates ) return false;

    // Format rates for moneyFormat
    rates.forEach((rate, i) => {
      rate.price = Shopify.theme.shippingCalculator.formatRate(rate.price, config);
    });

    // Show rates and feedback.
    Shopify.theme.shippingCalculator.render( { rates: rates, address: readable_address, success:true }, container, config );

  },
  formatRate: function formatRate(ratePrice, config) {

    let formatDollarsToCents = function(value) {
        value = (value + '').replace(/[^\d.-]/g, '');
        if (value && value.includes('.')) {
            value = value.substring(0, value.indexOf('.') + 3);
        }
        return value ? Math.round(parseFloat(value) * 100) : 0;
    }
    let cents = formatDollarsToCents(ratePrice);

    return theme.Helpers.formatMoney(cents, config.money_format);
  },
  render: function render(response, container, config) {
    let rateFeedback = document.querySelector('.js-shipping-calc-rates-feedback'),
        rateList = document.querySelector('.js-shipping-calc-rates');

    // Empty feedback
    rateFeedback.innerHTML = '';

    // Update feedback
    if (response.rates.length > 1) {
      rateFeedback.innerHTML = config.shipping_multi_rate_one + response.rates.length + config.shipping_multi_rate_two + response.address + config.shipping_multi_rate_three + response.rates[0].price;
    } else if (response.rates.length === 1){
      rateFeedback.innerHTML = config.shipping_single_rate + response.address;
    } else {
      rateFeedback.innerHTML = config.shipping_no_destination;
    }

    // Empty rates
    rateList.innerHTML = '';

    // Update rates
    response.rates.forEach((rate, i) => {
      const rateLI = document.createElement('li');
      rateLI.classList.add('shipping-calc__rate');
      rateLI.innerHTML = rate.name + ' at ' + rate.price;
      rateList.appendChild(rateLI)
    });

    container.querySelector('.js-shipping-calc-rates').style.display = "block";
    document.querySelector('.js-shipping-calc-response').style.display = "block";
  }
}

Shopify.theme.quickview = {
  init: function init() {

    var selectors = {
      quickviewButton: '.js-quickview-trigger'
    }

    // Init on click event for buttons
    document.querySelectorAll(selectors.quickviewButton).forEach((button, i) => {

      button.addEventListener('click', function(event) {
        event.preventDefault();

        // Init modal
        WAU.Modal.init("quickview");

        // Get template
        var productUrl = this.dataset.productUrl,
            productUrl = Shopify.theme.quickview.cleanUrl(productUrl, 'variant');

        Shopify.theme.quickview.getTemplate(productUrl);
      });
    });

  },
  formatTemplate: function getAjaxCart(response) {
    const el = document.createElement('div');
    el.innerHTML = response;

    const htmls = el.querySelectorAll('[data-html]');

    let html = {};
    if (htmls.length === 1 && htmls[0].getAttribute('data-html') === '') {
      html = htmls[0].innerHTML;
    } else {
      for (let i = 0; i < htmls.length; i++) {
        html[htmls[i].getAttribute('data-html')] = htmls[i].innerHTML;
      }
    }

    return html;
  },
  showModal: function showModal() {

    WAU.Modal._openByName("quickview");
  },
  hideModal: function hideModal() {

    document.querySelector('.js-quickview-content').innerHTML = '';

    WAU.Modal._closeByName("quickview");
  },
  cleanUrl: function cleanUrl(url, key) {
    return url.split('?')[0] + '?view=quick';
  },
  getTemplate: function getTemplate(productUrl) {
    let data, url;
    url = productUrl;

    fetch(url, data)
    .then(res => res.text())
    .then(response => {
      let html = Shopify.theme.quickview.formatTemplate(response);

      // Replace modal content
      document.querySelector('.js-quickview-content').innerHTML = html.content;

    }).then(response => {

      let context = document.querySelector('.js-quickview-wrapper');

      // Trigger quickview event
      theme.Product(context);

    }).then(response => {

      let context = document.querySelector('.js-quickview-wrapper');

      // Load Payment Buttons
      if (context.dataset.paymentButton == 'true' && Shopify.PaymentButton) {
        Shopify.PaymentButton.init()
      }
    }).then(response => {

      let context = document.querySelector('.js-quickview-wrapper');

      // Trigger event for add to cart
      context.querySelector('.js-ajax-submit').addEventListener('click', function (e) {
        e.preventDefault();

        var addToCartForm = this.closest('form');

        let cartConfig = document.getElementById('cart-config');
        if ( !cartConfig ) return false;
        cartConfig = JSON.parse(cartConfig.innerHTML || '{}');

        Shopify.theme.ajaxCart.addToCart(addToCartForm, null, cartConfig, true);

        return false;
      });
    }).then(response => {

      // Show modal
      Shopify.theme.quickview.showModal();

    })
    .catch(error => {
      console.log(error)
    });
  }
}

Shopify.theme.quickview.init();
Shopify.theme.ajaxCart.init();

// Reinit cart on section events
document.addEventListener('shopify:section:select', function(event){
  Shopify.theme.quickview.init();
  Shopify.theme.ajaxCart.init();
});







