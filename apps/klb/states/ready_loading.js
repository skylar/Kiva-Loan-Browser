// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('states/ready');

/**
  Show loading indicator.
*/
Klb.READY_LOADING = SC.Responder.create({

  nextResponder: Klb.READY,
  
  didBecomeFirstResponder: function() {
     Klb.lendingController.set('currentScene', 'loansLoading');
  },
  
  willLoseFirstResponder: function() {
    Klb.lendingController.set('currentScene', null);
  },
  
});