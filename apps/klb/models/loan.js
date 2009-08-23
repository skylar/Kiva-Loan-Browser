// ==========================================================================
// Project:   Klb.Loan
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
  
  borrower:SC.Record.toOne("Klb.Borrower"),
  
  status:SC.Record.attr(String),
  fundedAmount:SC.Record.attr(Number,{key:"funded_amount",defaultValue:0}),
  loanAmount:SC.Record.attr(Number,{key:"loan_amount",defaultValue:0}),
  name:SC.Record.attr(String),
  use:SC.Record.attr(String),
  sector:SC.Record.attr(String),
  partner_id:SC.Record.attr(Number,{key:"loan_amount",defaultValue:0}),
  country:SC.Record.attr(Object,{key:"location"}),
  image:SC.Record.attr(Object,{key:"image"}),
  
  fundedName:function(){
    return this.get('name') + ' ' + this.get('fundedAmount');
    
  }.property('name','fundedAmount').cacheable()
  
}) ;
