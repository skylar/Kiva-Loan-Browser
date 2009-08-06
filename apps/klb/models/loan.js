// ==========================================================================
// Project:   Klb.Loan
// Copyright: ©2009 My Company, Inc.
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
  name:SC.Record.attr(String),
  fundedName:function(){
    return this.get('name') + ' ' + this.get('fundedAmount');
    
  }.property('name','fundedAmount').cacheable()
  ,
  
  
/*
  id:SC.Record.attr(Integer),
	name:SC.Record.attr(String),
	image_url:SC.Record.attr(String)
*/

}) ;
