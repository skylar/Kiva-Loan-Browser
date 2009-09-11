// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

/**

  Displays the app in a welcome state
  
  @extends SC.Responder
*/
Klb.READY = SC.Responder.create({

  didBecomeFirstResponder: function() {
    Klb.searchController.set('canCheckout', YES);
  },
  
  willLoseFirstResponder: function() {
    Klb.searchController.set('canCheckout', NO);
  },
  
  // Happens when you want to checkout
  checkout: function() {
    console.log('CHECKOUT!');
  }

});
