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
    Klb.loansController.set('canCheckout', YES);
  },
  
  willLoseFirstResponder: function() {
    Klb.loansController.set('canCheckout', NO);
  },
  
  // Happens when you want to checkout
  checkout: function() {
    console.log('CHECKOUT!');
  }

});
