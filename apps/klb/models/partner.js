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
  partner_id:SC.Record.attr(Number),
	region_code:SC.Record.attr(String),
	countries:SC.Record.toMany('Klb.Country'),
	start_date:SC.Record.attr(SC.DateTime),
	image_url:SC.Record.attr(String),

	star_rating:SC.Record.attr(Number),
	delinquency_rate:SC.Record.attr(Number),
	default_rate:SC.Record.attr(Number),
	amount_raised:SC.Record.attr(Number),
	loans_posted:SC.Record.attr(Number),
	
}) ;
