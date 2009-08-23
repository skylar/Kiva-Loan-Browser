// ==========================================================================
// Project:   Klb.loansController
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Klb.detailController = SC.ObjectController.create(
/** @scope Klb.loansController.prototype */ {
  
  largeImage: function() {
    if(this.get('image')) return  'https://s3.amazonaws.com/s3.kiva.org/img/w450h360/'+this.get('image').id+'.jpg';
    else return "";
  }.property('image'),
    
  smallImage: function() {
    if(this.get('image')) return  'https://s3.amazonaws.com/s3.kiva.org/img/w200h200/'+this.get('image').id+'.jpg';
    else return "";
  }.property()
  
}) ;
