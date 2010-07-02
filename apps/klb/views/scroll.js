// ==========================================================================
// Project:   Klb
// Copyright: 2010 Kiva en Français
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/** @class

	An SC.ScrollView w/ mouse whell actions adjusted based on browser type.
*/
Klb.ScrollView = SC.ScrollView.extend({

	// the value must be tweaked for each browser since different browsers
	// interpret te delta differnetly
	mouseWheel: function(evt) {
	 var normalizationFactor = 1;
	 if(SC.browser.isSafari) {
	 	normalizationFactor = 0.125;
	 } else if(SC.browser.isIE) {
	  normalizationFactor = 0.4;
	 }
	
	 this._scroll_wheelDeltaX += (evt.wheelDeltaX*normalizationFactor);
	 this._scroll_wheelDeltaY += (evt.wheelDeltaY*normalizationFactor);
	 this.invokeLater(this._scroll_mouseWheel, 10) ;
	 return this.get('canScrollHorizontal') || this.get('canScrollVertical') ;  
	}

});