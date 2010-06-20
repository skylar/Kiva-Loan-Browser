// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================
/*globals Klb */

/**
  Displayed when the app has no targets.
*/
Klb.READY_NO_LOANS = SC.Responder.create({
  
  nextResponder: Klb.READY,
  
  /**
    Show laoding targets view.
  */
  didBecomeFirstResponder: function() {
    Klb.lendingController.set('currentScene', 'noTargets');

    // this is always the final route since we can't load any tests
    //var target = Klb.sourceController.get('selection').firstObject();
   // Klb.updateRoute(target, null, YES);
  },
  
  willLoseFirstResponder: function() {
    Klb.lendingController.set('currentScene', null);
  }
    
});