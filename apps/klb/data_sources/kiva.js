// ==========================================================================
// Project:   Klb.KivaDataSource
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Klb */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/

sc_require('models/loan');
Klb.NEWEST_LOANS_QUERY = SC.Query.local(Klb.Loans,
		{ orderBy: 'name' }
	);

Klb.KivaDataSource = SC.DataSource.extend(
/** @scope Klb.KivaDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

	requestForNewest: function(page) {
	  page = page || 1;
	  return SC.Request.getUrl("/v1/loans/newest.json?page=%@".fmt(page)).json();
  },

  fetch: function(store, query) {
    var page, params;
    
    if (query.get('isRemote') && query.get('recordType') === 'Klb.Loan') {
      
      // get a page number if passed in the parameters
      params = query.get('parameters');
      if (params && params['page']) {
        page = params['page'];
      }
      
      this.requestForNewest(page)
          .notify(this, 'didFetchNewestLoans', store, query)
          .send();
      
      return YES;
    }
    
    return NO; // we didn't handle the query
  },

	didFetchNewestLoans: function(response, store, query) {
		console.log("NEW LOANS fetch did complete.");
		
		if(SC.ok(response)) {
			store.loadRecords(Klb.Loan, response.get('body').loans);
			store.dataSourceDidFetchQuery(query);
			
			// or, for remote results (storeKeys is result from loadRecords() ):
			// store.loadQueryResults(query, storeKeys);
		}
		else {
			store.dataSourceDidErrorQuery(query, response);
		}
		console.log("END didFetchNewestLoans.");
	},

  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;
