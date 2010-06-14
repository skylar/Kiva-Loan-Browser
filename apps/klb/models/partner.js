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
  
	primaryKey: 'id',

  id:SC.Record.attr(Number),
  name:SC.Record.attr(String),
	partnerStatus:SC.Record.attr(String,{key:'status'}),
	countries:SC.Record.toMany('Klb.Country', {key:'country_codes'}),
	start_date:SC.Record.attr(SC.DateTime),
	imageUrl:SC.Record.attr(String),

	rating:SC.Record.attr(Number),
	delinquency_rate:SC.Record.attr(Number),
	default_rate:SC.Record.attr(Number),
	amount_raised:SC.Record.attr(Number,{key:'total_amount_raised'}),
	loans_posted:SC.Record.attr(Number)
	
}) ;
