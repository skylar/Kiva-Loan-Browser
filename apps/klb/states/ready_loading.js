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
  
  /**
    Show loading tests view after 100msec
  */
  didBecomeFirstResponder: function() {
    this._timer = this.invokeLater(this._showTestsLoading, 150);
  },
  
  _showTestsLoading: function() {
    this._timer = null ;
    Klb.set('currentScene', 'loansLoading');
  },
  
  willLoseFirstResponder: function() {
    if (this._timer) this._timer.invalidate();
    Klb.set('currentScene', null);
  },
  
  testsDidChange: function(sender) {
    var tests = Klb.loansController;
    if (tests.get('state') !== SC.Record.READY) return ;
    
    if (tests.get('length')===0) {
      Klb.makeFirstResponder(Klb.READY_NO_TESTS);
    } else Klb.makeFirstResponder(Klb.READY_LIST);
  }
  
});