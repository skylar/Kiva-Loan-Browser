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
Klb.Partner = SC.Record.extend(
/** @scope Klb.Country.prototype */ {
  
  name:SC.Record.attr(String),
  partner_id:SC.Record(Number),
	region_code:SC.Record.attr(String),
	countries:SC.Record.toMany('Klb.Country'),
	start_date:SC.Record.attr(DateTime),
	image_url:SC.Record.attr(String),

	star_rating:SC.Record(Number),
	delinquency_rate:SC.Record(Number),
	default_rate:SC.Record(Number),
	amount_raised:SC.Record(Number),
	loans_posted:SC.Record(Number),
	
	iconBySize: function(size) {
		return Klb.imageByName('flags_iso/%@/%@.png'.fmt(size, 
			this.get('iso_code').toLowerCase()));
	}

}) ;
