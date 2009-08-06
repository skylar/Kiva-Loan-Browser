// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

/**

  Initiates the first load of data.  Until this first feed comes back, the 
  UI must be disabled.
  
  @extends SC.Responder
*/
Klb.LOADING = SC.Responder.create({

  didBecomeFirstResponder: function() {
    Klb.loansController.set('nowShowing', 'loading');
  },
  
  willLoseFirstResponder: function() {
    Klb.loansController.set('nowShowing', null);
  },

  /** 
    Action to call when the load completes. 
  */
  loadSuccess: function() {
    Klb.makeFirstResponder(Klb.WELCOME);    
  },
  
  /**
    Action to call when the load has an error.
  */
  loadError: function() {
    
  } 

});
