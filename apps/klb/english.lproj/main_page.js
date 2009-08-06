// ==========================================================================
// Project:   Klb - mainPage
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('views/loan_listing');

// This page describes the main user interface for your application.  
Klb.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  appPane: SC.MainPane.design({
	  childViews: 'sidebarView mainView'.w(),

    defaultResponder: Klb,
    
	  sidebarView: SC.View.design(SC.Border, {
	    layout: { top: -1, left: -1, right: 0, width: 200 },
	    borderStyle: SC.BORDER_NONE,
			backgroundColor:'#ddffdd'
	  }),

	  mainView: SC.View.design({
			layout: { top: 0, left: 201, right: 0 },
			childViews: 'topView loanView'.w(),
			backgroundColor:'#ddffdd',
	    borderStyle: SC.BORDER_NONE,

		  topView: SC.View.design(SC.Border, {
		    layout: { top: 0, left: 0, right: 0, height: 60 },
		    borderStyle: SC.BORDER_BOTTOM,
				childViews: 'checkoutButton totalMatchesView sortListView'.w(),
				
				checkoutButton: SC.ButtonView.design({
				  layout: { left: 10, top: 10, width: 80, height: 24 },
				  title: "Checkout",
				  action: "checkout",
				  isEnabledBinding: "Klb.loansController.canCheckout"
				}),
				
				totalMatchesView: SC.LabelView.design({
				      layout: { centerY: 0, height: 24, left: 8, width: 300 },
				      controlSize: SC.LARGE_CONTROL_SIZE,
				      fontWeight: SC.BOLD_WEIGHT,
				      value:   '234 Loans Found'
				    }),
				
				sortListView: SC.View.design({
					childViews: 'labelView popupView'.w(),
					layout: {centerY:0, right: 8, width:200,height:50},
					textAlign: SC.ALIGN_RIGHT,
					
					labelView: SC.LabelView.design({
			      layout: { top:0, left:0 },
			      value: 'Sort results by'
			    }),
					popupView: SC.SelectFieldView.design({
						layout: {top:20},
						value: 'Popularity'
					})
				})
		  }),

		  loanView: SC.ScrollView.design({
		    hasHorizontalScroller: NO,
		    layout: { top: 61, bottom: 0, left: 0, right: 0 },
		    backgroundColor: 'white',

				contentView: SC.ListView.design({
				  contentBinding: 'Klb.loansController.arrangedObjects',
				  selectionBinding: 'Klb.loansController.selection',
					contentValueKey: "name",
					exampleView: Klb.LoanListingView,
					rowHeight: 120
				})
		  })
		})

	})
});
