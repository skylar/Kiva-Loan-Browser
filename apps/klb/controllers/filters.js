// ==========================================================================
// Project:   Klb
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

Klb.filtersController = SC.TreeController.create(SC.CollectionViewDelegate,{

	collectionViewShouldSelectIndexes: function (view, indexes, extend) {
		var contentItem = view.get('content').objectAt(indexes.firstObject());
		if(contentItem && contentItem.get('isSelectable')) {
			return indexes;
		}

	  return null; 
	},
	
});
