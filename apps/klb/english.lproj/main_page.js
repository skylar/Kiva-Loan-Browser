// ==========================================================================
// Project:   Klb
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
	  childViews: 'topbarView bottombarView sidebarView resultsView'.w(),

    defaultResponder: Klb,
    
    topbarView: SC.View.design({
	    layout: { top: 0, left: 0, right: 0, height: 40 },
	    childViews: 'kivaName checkoutButton'.w(),
 			classNames: 'klb-chrome'.w(),
      
			kivaName: SC.LabelView.design({
			  layout: { left: 10, top: 10, width: 120, height: 24 },
			  value: "_KlbTitle".loc(),
			  controlSize: SC.LARGE_CONTROL_SIZE,
  			fontWeight: SC.BOLD_WEIGHT
			}),
			
			checkoutButton: SC.ButtonView.design({
			  layout: { right: 10, top: 10, width: 80, height: 24 },
			  title: "_Checkout".loc(),
			  action: "checkout",
			  isEnabledBinding: "Klb.loansController.canCheckout"
			})
	  }),
    
    bottombarView: SC.View.design({
	    layout: { bottom: 0, left: 0, right: 0, height: 40 }
	  }),
    
	  sidebarView: SC.SplitView.design({
	    layout: { top: 41, left: 0, bottom: 41, width: 300 },
	    backgroundColor: '#DDDDDD',
	    layoutDirection: SC.LAYOUT_VERTICAL,
      defaultThickness: 0.5,
      autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
      canCollapseViews: YES,

      topLeftMinThickness: 100,
      topLeftMaxThickness: 200,
      topLeftView: SC.LabelView.design({
        value: "top",
        backgroundColor: 'red'
      }),
      
      dividerView: SC.SplitDividerView,
      
       bottomRightView: SC.View.design({
        childViews: 'filterTitle searchField locationLabel locationButton genderLabel sectorLabel groupsLabel resetButton saveButton'.w(),
        filterTitle: SC.LabelView.design({
  			  layout: { left: 5, top: 5, right: 5, height: 15 },
  			  value: "_Filter Options".loc(),
  			  fontWeight: SC.BOLD_WEIGHT
  			}),
  			searchField: SC.TextFieldView.design({
  			  layout: { left: 5, top: 25, right: 5, height: 20 },
  			  hint: "_Search".loc()
  			}),
  			locationLabel: SC.LabelView.design({
  			  layout: { left: 5, top: 50, width: 80, height: 24 },
  			  value: "_Country".loc() + ":"
  			}),
  			locationButton: SC.ButtonView.design({
  			  layout: { left:100, top: 50, width: 80, height: 24 },
  			  title: "_Country".loc(),
	        action: "showCountryPicker",
	        target: "Klb.searchController"
  			}),
  			genderLabel: SC.LabelView.design({
  			  layout: { left: 5, top: 65, width: 80, height: 24 },
  			  value: "_Gender".loc() + ":"
  			}),
  			sectorLabel: SC.LabelView.design({
  			  layout: { left: 5, top: 80, width: 80, height: 24 },
  			  value: "_Sector".loc() + ":"
  			}),
  			groupsLabel: SC.LabelView.design({
  			  layout: { left: 5, top: 95, width: 80, height: 24 },
  			  value: "_Groups".loc() + ":"
  			}),
  			resetButton: SC.ButtonView.design({
  			  layout: { left: 5, bottom: 5, width: 80, height: 24 },
  			  title: "_Reset".loc()
  			}),
  			saveButton: SC.ButtonView.design({
  			  layout: { right: 5, bottom: 5, width: 80, height: 24 },
  			  title: "_Save".loc()
  			})
       })
	  }),
	  
	  resultsView: SC.View.design({
	    layout: { top: 41, bottom: 41, left: 301, right: 0 },
	    childViews: 'loanView loanViewBar'.w(),
	    
      loanView: SC.ScrollView.design({
		    hasHorizontalScroller: NO,
		    layout: { top: 0, bottom: 41, left: 0, right: 0 },
		    backgroundColor: 'white',

				contentView: SC.ListView.design({
				  contentBinding: 'Klb.searchController.activeResults',
//				  selectionBinding: 'Klb.loansController.selection',
					contentValueKey: "name",
					exampleView: Klb.LoanListingView,
					rowHeight: 120
				})
		  }),
		  
		  loanViewBar: SC.View.design({
  	    layout: { bottom: 0, left: 0, right: 0, height: 40 },
  			childViews: 'resultsLabel sortLabel sortSelectView viewModeSegmentedView'.w(),
 				classNames: 'klb-subchrome'.w(),

  			resultsLabel: SC.LabelView.design({
  				contentBinding: 'Klb.loansController.length',
  			  layout: { left: 10, top: 10, width: 180, height: 24 },
  			  controlSize: SC.REGULAR_CONTROL_SIZE,
	  			fontWeight: SC.BOLD_WEIGHT,
  			  value: ""
  			}),

  			sortLabel: SC.LabelView.design({
  			  layout: { right: 205, top: 9, width: 80, height: 24 },
  			  value: "_Sort by".loc()
  			}),

  			sortSelectView: SC.SelectFieldView.design({
  			  layout: { right: 115, top: 10, width: 120, height: 24 },
  			  objects:["_Popularity".loc(),"_Loan Amount".loc()
  			  	,"_Amount Left".loc(),"_Expiring Soon".loc(),"_Most Recent".loc()]
  			}),

  			viewModeSegmentedView: SC.SegmentedView.design({
  			  layout: { right: 5, top: 5, width: 100, height: 24 },
  			   items: "List Grid".w(), // these not to be localized - use icons
            value: "List"
  			})
  	  })
		})
	})
});
