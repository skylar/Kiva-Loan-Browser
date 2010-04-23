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
  
  /**
    Called when the targets have loaded.  Pass param whether we have targets 
    or not.
  */
  targetsDidChange: function() {
    var l=Klb.searchController.availablePartners;
console.log("targets did change");
console.log(l);
console.log(l.getPath('status'));
console.log(l.getPath('length'));

    if (!(l.getPath('status') & SC.Record.READY)) return NO;
    
    var hasTargets = l.getPath('length') >0;
    if (hasTargets) Klb.makeFirstResponder(Klb.READY_LIST);
    else Klb.makeFirstResponder(Klb.NO_LOANS);
    return YES;
  }
    
});