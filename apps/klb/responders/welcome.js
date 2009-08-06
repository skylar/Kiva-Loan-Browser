// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('responders/ready');

/**

  Displays the app in a welcome state
  
  @extends SC.Responder
*/
Klb.WELCOME = SC.Responder.create({

  nextResponder: Klb.READY,
  
  didBecomeFirstResponder: function() {
    Klb.loansController.set('nowShowing', 'welcome');
  },
  
  willLoseFirstResponder: function() {
    Klb.loansController.set('nowShowing', null);
  }

});
