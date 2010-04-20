// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Klb.Country = SC.Record.extend(
/** @scope Klb.Country.prototype */ {
  
  name:SC.Record.attr(String),
  iso_code:SC.Record.attr(String),
	region_code:SC.Record.attr(String),
	
	iconBySize: function(size) {
		return 'http://socialology.org/static/flags_iso/%@/%@.png'.fmt(size, 
			this.get('iso_code').toLowerCase());
	}

}) ;
