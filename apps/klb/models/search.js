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
Klb.Search = SC.Object.extend(
/** @scope Klb.Search.prototype */ {
  
  id: '_none',
	male: true,
	female: true,
	groups: true,
	queryString: '',
	countries: [],
	sectors: [],
	sortOrder: 'postedDate DESC'  

/*
  id:SC.Record.attr(Integer),
	name:SC.Record.attr(String),
	image_url:SC.Record.attr(String)
	partnerRating: SC.Record.attr(Number),
	borrowerCount: SC.Record.attr(Number),
*/

});
