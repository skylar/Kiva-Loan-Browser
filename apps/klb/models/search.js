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
Klb.Search = SC.Record.extend(
/** @scope Klb.Search.prototype */ {
  
  male: SC.Record.attr(Boolean),
  female: SC.Record.attr(Boolean),
	partnerRating: SC.Record.attr(Number),
	borrowerCount: SC.Record.attr(Number),
  queryString: SC.Record.attr(String),
  countries: SC.Record.toMany('Klb.Country'),
//  countries: SC.Record.attr(Array),
	sectors: SC.Record.attr(Array),
  
/*
  id:SC.Record.attr(Integer),
	name:SC.Record.attr(String),
	image_url:SC.Record.attr(String)
*/

  formattedCountries: function() {
    var countries = this.get('countries'),
        len = countries.get('length');
        
    return len === 0 ? 'All' : countries.mapProperty('name').sort().join(', ');
  }.property('countries').cacheable(),

	formattedSectors: function() {
	  var sectors = this.get('sectors'),
	      len = sectors.get('length');
	      
	  return len === 0 ? 'All' : sectors.mapProperty('name').sort().join(', ');
	}.property('sectors').cacheable()

});
