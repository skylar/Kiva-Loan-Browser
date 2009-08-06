// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

/**

  The initial start state.  Transitions into the loading state.
  
  @extends SC.Responder
*/
Klb.START = SC.Responder.create({

  didBecomeFirstResponder: function() {
    Klb.invokeLater(Klb.makeFirstResponder, 1, Klb.LOADING);  
  }

});
