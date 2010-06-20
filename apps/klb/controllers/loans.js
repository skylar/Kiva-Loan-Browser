// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('models/loan');

SC.Query.registerQueryExtension('ANY_COUNTRY', {
  reservedWord:     true,
  leftType:         'PRIMITIVE',
  rightType:        'PRIMITIVE',
  evalType:         'BOOLEAN',
  evaluate:         function (r,w) {
                      var prop   = this.leftSide.evaluate(r,w);
                      var values = this.rightSide.evaluate(r,w);
                      var found  = false;
                      var i      = 0;
                      while ( found===false && i<values.length ) {
                        if ( prop === values[i] ) found = true;
                        i++;
                      }
                      return found;
                    }
});

Klb.loansController = SC.ArrayController.create(SC.CollectionViewDelegate,
/** @scope Klb.loansController.prototype */ {
    
  searchControllerQueryDidChange: function() {
    var q = Klb.getPath('searchController.query');
    if (q) {
    	console.log("current query");
	    SC.Logger.dir(q);
      this.set('content', Klb.store.find(SC.Query.create({
        location: SC.Query.LOCAL,
        recordType: Klb.Loan,
        conditions: q.conditions,
        parameters: q.parameters,
        orderBy: q.orderBy })));      
    }
  }.observes('Klb.searchController.query'),
  
	searchResultsCountDidChange: function() {
		Klb.sendAction('updateStateForResultCount', this, null);
	}.observes('Klb.loansController.length'),
	
	lengthNamedForDisplay: function() {
		return this.get('length') + ' ' + '_loans found'.loc();
	}.property('length').cacheable(),
	
	collectionViewShouldSelectIndexes: function (view, indexes, extend) {
	  return null; 
	},
});
