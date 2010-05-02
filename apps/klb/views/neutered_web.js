// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

Klb.NeuteredWebView = SC.WebView.extend({
  iframeDidLoad: function() {
  	// potentially we could override this function to show some status information while the iFrame loads (this way, users know something will eventually happen in the blank iframe area)
  },
});

