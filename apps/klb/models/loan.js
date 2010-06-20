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
Klb.Loan = SC.Record.extend(
/** @scope Klb.Loan.prototype */ {
  
  primaryKey: 'id',
  
  // borrower might need to be a complex property
  //borrower:SC.Record.toOne("Klb.Borrower"),
  loanStatus:SC.Record.attr(String,{key:"status"}),
  fundedAmount:SC.Record.attr(Number,{key:"funded_amount",defaultValue:0}),
  loanAmount:SC.Record.attr(Number,{key:"loan_amount",defaultValue:0}),
  name:SC.Record.attr(String),
  use:SC.Record.attr(String),
  sector:SC.Record.attr(String),
  partner:SC.Record.toOne('Klb.Partner',{key:"partner_id",defaultValue:0}),
  country:SC.Record.toOne('Klb.Country',{key:"loc_country_code",defaultValue:'XX'}),
  image:SC.Record.attr(Object,{key:"image"}),
  postedDate: SC.Record.attr(SC.DateTime, {key:"posted_date"}),
  borrowerCount: SC.Record.attr(Number, {key:"borrower_count"}),
  gender: SC.Record.attr(String, {key:"gender"}),
  
  fundedName:function(){
    return this.get('name') + ' ' + this.get('fundedAmount');
    
  }.property('name','fundedAmount').cacheable(),
  
  remainingAmount: function() {
    return this.get('loanAmount') - this.get('fundedAmount');
  }.property('fundedAmount', 'loanAmount').cacheable(),
  
  fundedPercentage: function() {
      return 100 * this.get('fundedAmount') / this.get('loanAmount');
  }.property('fundedAmount', 'loanAmount').cacheable()
  
}) ;
