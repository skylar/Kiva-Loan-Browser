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

	allLoans: null,
	lastCachedLoanIndex: 0,
	loanLoadThreshold: 0,
	loanLoadQueue: [],
	storedLoanTotal: 0,
	totalLoanVolume: 0,

	preFetchLoanObjects: function() {
		var ids = [], last = this.get('lastCachedLoanIndex')
			,volume;
		
		if(!this.get('totalLoanVolume')) {
			volume = Klb.get('allLoans').storeKeys.get('length');
// artificially limit results?
//			if(volume > 1200) { volume = 1200; }
			this.set('totalLoanVolume', volume);
		}
		
		if(this.get('totalLoanVolume') <= last) {
			return;
		}
		
		ids = Klb.get('allLoans').storeKeys.map(function(sk) {
		    return Klb.store.idFor(sk);
		  }, this);
		  
		if(last === 0) {
			// keep first query small to be safe
			Klb.store.retrieveRecords(Klb.Loan, ids.slice(0,20), null, YES);
			this.set('lastCachedLoanIndex', 20);
			this.set('loanLoadThreshold', 20);
		}
		else {
			Klb.store.retrieveRecords(Klb.Loan
				, ids.slice(last,last+500), null, YES);
			this.set('lastCachedLoanIndex', last+500);
		}
	},

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {
    var page;
    
		if(query === Klb.AVAILABLE_PARTNERS_QUERY) {
			// partners come all-at-once in a giant page of data
		 	SC.Request.getUrl("/proxy/api_proxy.rb?method=partners").json()
		 		.notify(this, 'didFetchPartners', store, query)
		 		.send();
		 	
		 	return YES;
		}
		else if(query === Klb.AVAILABLE_LOANS_REMOTE_QUERY) {
			// load a cached list of all available partners
			SC.Request.getUrl("/a/loans/fundraising/ids.json").json()
				.notify(this, 'didFetchAvailableLoans', store, query)
				.send();

			return YES;
		}
		
		else if(query === Klb.AVAILABLE_LOANS_QUERY) {
			// since we can only load a page at a time we initially fire off
			// a batch of requests for this. Eventually, we should trigger one
			// fetch and slowly pull more until we have the complete data set
			// in memory...
			for(page=0;page<=10;page++) {
				SC.Request.getUrl("/proxy/api_proxy.rb?method=loans&page=%@".fmt(page)).json()
					.notify(this, 'didFetchNewestLoans', store, query)
					.send();
				
				// do this to prevent notifying store more than once on query complete
				query=null;
			}
			return YES;
		}
    
    return NO; // we didn't handle the query
  },

	didFetchAvailableLoans: function(response, store, query) {
		console.log("AVAILABLE LOANS fetch did complete.");
		
		if(SC.ok(response) && response.get('body')) {
			var storeKeys = response.get('body').map(function(id) {
	        return Klb.Loan.storeKeyFor(id);
	      }, this);
//	    console.log(storeKeys);
//			console.log(response.get('body'));
	    store.loadQueryResults(query, storeKeys);
			if(query) {
				store.dataSourceDidFetchQuery(query);
			}			
			// check for Kiva-out-of-loans state
			if(storeKeys.get('length') <= 0) {
				Klb.searchController.set('kivaHasLoans', false);
				console.log("NO KIVA LOANS");
			} else {
				this.preFetchLoanObjects();
  			console.log("*** confirmed kiva has lons");
			}
			Klb.sendAction('checkLoadingState', this, null);
  	}
		else {
			store.dataSourceDidErrorQuery(query, response);
		}
		console.log("END didFetchAvailableLoans."); 
	},
	
//	didFetchNewestLoans: function(response, store, query) {
//		console.log("NEW LOANS fetch did complete.");
//		
//		if(SC.ok(response) && response.get('body').loans) {
			// copy country_code to top-level for easy modelling
//			response.get('body').loans.forEach( 
//				function(item, index, enm) {
//					if(item.location.country === "South Sudan") {
//						console.log('plugged one SS entry for ' + item.name);
//						item.location.country_code = '_S';
//					}
//					item.loc_country_code = item.location.country_code;
//				});
//		
//			store.loadRecords(Klb.Loan, response.get('body').loans);
//			if(query) {
//				store.dataSourceDidFetchQuery(query);
//			}
//		}
//		else {
//			store.dataSourceDidErrorQuery(query, response);
//		}
//		console.log("END didFetchNewestLoans.");
//	},

	didFetchPartners: function(response, store, query) {
		console.log("PARTNERS fetch did complete.");
		
		if(SC.ok(response)) {
			// copy country_code to top-level for easy modelling
			response.get('body').partners.forEach( 
				function(item, index, enm) {
					if(item.countries[0].name === "South Sudan") {
						console.log('plugged one SS entry for ' + item.name);
						item.countries[0].iso_code = '_S';
					}
					item.country_codes = item.countries.mapProperty('iso_code');
			});
			
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
  
	retrieveRecords: function(store, storeKeys, ids) {

   console.log('******** Called retrieveRecords()');
    // convert storeKeys into id’s sorted by recordType.
    var recordTypes = SC.Set.create(),  // to store record types.
        sortedIds  = {},
        ret=null ; // return value
 
    storeKeys.forEach(function(storeKey) {
      var recordType = SC.Store.recordTypeFor(storeKey);
      recordTypes.add(recordType);
 
      var typeGuid = SC.guidFor(recordType);
      var ids = sortedIds[typeGuid];
      if (!ids) ids = sortedIds[typeGuid] = [];
 
      // map storeKey to ID
      var id = store.idFor(storeKey);
      ids.push(id);
 
    }, this);
 
    // now for each recordType, initiate a request
    recordTypes.forEach(function(recordType) {
 
     // find the URL for the recordType.  if we can’t find one we can’t handle it
     var url;
     if (recordType === Klb.Loan) {
       url = "/a/loans/%@.json";
      } else {
        // handle other types here...
      }
 
      // if url was found - initiate request
      if (url) {
        var ids = sortedIds[SC.guidFor(recordType)],
        	numLoans = ids.get('length'),
        	k = 0, pageSize = 100, idsSubset;
        	
        for(k=0; k<numLoans; k+=pageSize) {
	        idsSubset = ids.slice(k,k+pageSize);
          //console.log('founds some loans...' + ids);
        
	        SC.Request.getUrl(url.fmt(idsSubset.join(','))).json()
	          .notify(this, this.didRetrieveRecords, 
	          	{ store: store, recordType: recordType, storeKeys: storeKeys }).send();
	          	
 				}

        // set the proper return value.  
        ret = (ret===NO) ? SC.MIXED_STATE : (ret===null ? YES : ret);  
 
       // if url was not found, set ret to NO or mixed.
       } else ret = (ret === null) ? NO : SC.MIXED_STATE ;
 
     }, this);
     
     return ret;
  },
 
  // called when a group of records have returns. assume result is array of data hashes
  didRetrieveRecords: function(response, params) {
    var store = params.store,
        recordType = params.recordType,
        storeKeys = params.storeKeys,
        numLoans, item, k;
 
    // normal: load into store...response == dataHash
    if (SC.ok(response) && response.get('body')) {
    	numLoans = response.get('body').get('length');
    	
    	// do some pre-processing on the loan objects
    	//  (kiva bugs, oddly placed data, etc.)
     	for(k=0;k<numLoans;k++) {
    		item = response.get('body').objectAt(k);
				if(item.location.country === "South Sudan") {
//						console.log('plugged one SS entry for ' + item.name);
					item.location.country_code = '_S';
				}
				
				item.loc_country_code = item.location.country_code;
				item.loan_amount = item.terms.loan_amount;

				// disable fields we don't need now to save memory?
				item.description = ''; 
				item.terms = null;
				
				// add every item to a single queue to simplify store load
				this.get('loanLoadQueue').push(item);
			}
			
		  console.log('***got the records back. queue total: ' + this.get('loanLoadQueue').length);
    	// every time we get loans we must decide, load into
    	// the store or queue for later processing?
    	// NOTE: loading into SC's store seems to have a lot of
    	//  overhead for already existing items (re-indexing?)
    	if(this.get('loanLoadQueue').get('length') >= this.get('loanLoadThreshold')
    	 || this.get('loanLoadQueue').get('length') + this.get('storedLoanTotal') >= this.get('totalLoanVolume')) {
    		// TODO: in the future, may need queues based on recordType.
    		//  for now, it works out that they are all for loans.
    		this.storeRecordsFromQueuedResults(recordType,store);
    	}
    	
    	// regardless, load more loans!
			this.preFetchLoanObjects();
 
    // error: indicate as such...response == error
    } else {
		  console.log('***ERROR on retrieve');
    	store.dataSourceDidError(storeKeys, response.get('body')); }
  },

	storeRecordsFromQueuedResults: function(recordType,store) {
		console.log('storing records to the STORE of size' + this.get('loanLoadQueue').length);
		
		//Klb.searchController.beginPropertyChanges();
    store.loadRecords(recordType, this.get('loanLoadQueue'));
		//Klb.searchController.endPropertyChanges();

    // reset threshold/queue
    this.set('storedLoanTotal', this.get('storedLoanTotal') + this.get('loanLoadQueue').length);
    this.set('loanLoadQueue', []);
    this.set('loanLoadThreshold',200);
    
		Klb.searchController.set('storeIsReadyForSearch', true);		
	},
	
/*  retrieveRecord: function(store, storeKey) {
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    // get some details from the store about the desired record
    var recordType = SC.Store.recordTypeFor(storeKey),
    		id = SC.Store.idFor(storeKey),
        url;
    console.log('******** Called retrieveRecord() for ' + id);
        
    // decide on the URL based on the record type
    if (recordType === Klb.Loan) {
      url = "/v1/loans/%@.json";
    } else {
      // handle other types here...
    }
 
    // if no url is found, we don’t know how to handle this record
    if (!url) return NO;
 
    // we can handle it, get the URL.
    SC.Request.getUrl(url.fmt(id)).json()
      .notify(this, this.didRetrieveLoanRecord, {
          store: store,
          storeKey: storeKey
     }).send();
 
    return YES; 
  },
 
  didRetrieveLoanRecord: function(response, params) {
    console.log('******** found loan record.');
    var store = params.store,
        storeKey = params.storeKey;
 
    // normal: load into store...response == dataHash
    if (SC.ok(response)) {
			response.get('body').loans.forEach( 
				function(item, index, enm) {
					if(item.location.country === "South Sudan") {
						item.location.country_code = '_S';
					}
					
					item.loc_country_code = item.location.country_code;
					item.loan_amount = item.terms.loan_amount;
				});
      store.dataSourceDidComplete(storeKey, response.get('body').loans.objectAt(0));
 
    // error: indicate as such...response == error
    } else store.dataSourceDidError(storeKey, response.get('body'));
  },
  */
  
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
