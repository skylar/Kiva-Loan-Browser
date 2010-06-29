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
Klb.Search = SC.Object.extend(SC.Copyable, {
  
  id: '_none',
	male: true,
	female: true,
	groups: true,
	queryString: '',
	countries: [],
	sectors: [],
	sortOrder: 'postedDate DESC', 

	copy: function() {
    return this.constructor.create({
			id: this.get('id'),
			male: this.get('male'),
			female: this.get('female'),
			groups: this.get('groups'),
			queryString: this.get('queryString'),
			countries: this.get('countries').slice(),
			sectors: this.get('sectors').slice(),
			sortOrder: this.get('sortOrder')  
    });
	}
/*
  id:SC.Record.attr(Integer),
	name:SC.Record.attr(String),
	image_url:SC.Record.attr(String)
	partnerRating: SC.Record.attr(Number),
	borrowerCount: SC.Record.attr(Number),
*/

});
