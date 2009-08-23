// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('states/ready');

/**
  Initial state of application before it has loaded targets.
*/
Klb.READY_DETAIL = SC.Responder.create({
  
  nextResponder: Klb.READY,
  
  /**
    Show laoding targets view.
  */
  didBecomeFirstResponder: function() {
    Klb.set('currentScene', 'loanDetail');
    
    // var target = Klb.sourceController.get('selection').firstObject();
    //   var test   = Klb.detailController.get('content');
    //   Klb.updateRoute(target, test, YES);
  },
  
  willLoseFirstResponder: function() {
    Klb.set('currentScene', null);
  },
  
  /**
    Invoked when you click "back"
  */
  back: function() {
    Klb.detailController.set('content', null);
    Klb.makeFirstResponder(Klb.READY_LIST);
  }
  
});