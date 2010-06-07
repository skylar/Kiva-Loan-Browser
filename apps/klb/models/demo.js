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
Klb.Demo = SC.Record.extend(
/** @scope Klb.Country.prototype */ {
  
  primaryKey: 'id',
  
  name:SC.Record.attr(String),
}) ;
