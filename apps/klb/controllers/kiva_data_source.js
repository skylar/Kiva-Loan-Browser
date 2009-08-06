// ==========================================================================
// Project:   Klb.kivaDataSource
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/

Klb.KivaDataSource = SC.DataSource.extend(
/** @scope Klb.KivaDataSource.prototype */ {

	fetchRequest: SC.Request.getUrl("/v1/loans/newest.json").set('isJSON', YES),

	fetch: function(store, fetchKey, params) {
		var ret = [], url;
		var action = {};
		
		console.log("About to fetch.");
		
		this.fetchRequest.notify(this, this.fetchDidComplete, {
			store: store,
			fetchKey: fetchKey,
			storeKeyArray: ret
		}).send();
		
		return ret;
	},
	
	fetchDidComplete: function(r, params) {
		console.log("Fetch did complete.");
	
		var storeKeys = [], store, fetchKey;
		console.log("1");
		console.log(r);
		var response = r.response();
		
		// { loans: Array, paging: {} }
		
		loans = response['loans'];
		for (var i = 0; i < loans.length; i++) {
			loan = loans[i];
			loan['guid'] = loan['id'];
		}
		
		if (response.kindOf ? response.kindOf(SC.Error) : false) {		
			this.requestDidError(r);
		} else {
			fetchKey = params.fetchKey;
			storeKeys = params.store.loadRecords(fetchKey, loans);
			params.storeKeyArray.replace(0, 0, storeKeys);
		}
		console.log("END Fetch did complete.");
		
		return YES;
	},
	
	retrieveRequest: SC.Request.getUrl("http://127.0.0.1/v1/").set('isJSON', YES),
	
	retrieveRecord: function(store, storeKey) {
		var ret = [], url, action = {},
				recordType = SC.Store.recordTypeFor(storeKey),
				id = recordType.idFor(storeKey);
		url = 'loans/' + id + '.json';
		
		this.retrieveRequest.set('address', url);
		this.retrieveRequest.notify(this, this.retrieveRecordDidComplete, {
			store: store,
			storeKey: storeKey,
			id: id
		}).send();
		
		return ret;
	},
	
	retrieveRecordDidComplete: function(r, params) {
		var response, results, dataHash, storeKeys = [], hashes = [];
		response = r.response();
		
		if (response.kindOf ? response.kindOf(SC.Error) : false) {
			this.requestDidError(r);
		} else {
			results = response.content;
			dataHash = results;
			hashes.push(dataHash);
			storeKeys.push(params.storeKey);
			params.store.dataSourceDidComplete(params.storeKey, dataHash, params.id);
		}
		
		return YES;
	},
	
	requestDidError: function(r) {
		var pane = SC.AlertPane.error("There has been an error with your request", r.get('rawResponse').toString(), '', "OK", "Cancel", this);
	
		return YES;
	},

});
