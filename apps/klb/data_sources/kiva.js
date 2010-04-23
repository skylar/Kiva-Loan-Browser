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

Klb.KivaDataSource = SC.DataSource.extend(
/** @scope Klb.KivaDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {
    var page;
    
		if(query === Klb.AVAILABLE_PARTNERS_QUERY) {
			// partners come all-at-once in a giant page of data
		 	SC.Request.getUrl("/v1/partners.json").json()
		 		.notify(this, 'didFetchPartners', store, query)
		 		.send();
		 	
		 	return YES;
		}
		else if(query === Klb.AVAILABLE_LOANS_QUERY) {
			// since we can only load a page at a time we initially fire off
			// a batch of requests for this. Eventually, we should trigger one
			// fetch and slowly pull more until we have the complete data set
			// in memory...
			for(page=0;page<=10;page++) {
				SC.Request.getUrl("/proxy/api_proxy.rb?page=%@".fmt(page)).json()
					.notify(this, 'didFetchNewestLoans', store, query)
					.send();
				
				// do this to prevent notifying store more than once on query complete
				query=null;
			}
			return YES;
		}
    
    return NO; // we didn't handle the query
  },

	didFetchNewestLoans: function(response, store, query) {
		console.log("NEW LOANS fetch did complete.");
		
		if(SC.ok(response)) {
			// copy country_code to top-level for easy modelling
			response.get('body').loans.forEach( 
				function(item, index, enm) {
					item.loc_country_code = item.location.country_code;
				});
		
			store.loadRecords(Klb.Loan, response.get('body').loans);
			if(query) {
				store.dataSourceDidFetchQuery(query);
			}
		}
		else {
			store.dataSourceDidErrorQuery(query, response);
		}
		console.log("END didFetchNewestLoans.");
	},

	didFetchPartners: function(response, store, query) {
		console.log("PARTNERS fetch did complete.");
		
		if(SC.ok(response)) {
			store.loadRecords(Klb.Partner, response.get('body').partners);
			store.dataSourceDidFetchQuery(query);
		}
		else {
			store.dataSourceDidErrorQuery(query, response);
		}
		console.log("END didFetchPartners.");
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
