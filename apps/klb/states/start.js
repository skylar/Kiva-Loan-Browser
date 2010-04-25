// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================
/*globals Klb */

/**
  Initial state of application before it has loaded targets.
*/
Klb.START = SC.Responder.create({
  
  /**
    Show loading loans view.
  */
  didBecomeFirstResponder: function() {
    Klb.set('currentScene', 'loansLoading');
  //  Klb.targetsController.reload(); // load the targets.
  },
  
  willLoseFirstResponder: function() {
    Klb.set('currentScene', null);
  },
      
});