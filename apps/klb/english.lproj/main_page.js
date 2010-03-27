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
	    layout: { bottom: 0, left: 0, right: 0, height: 40 },
	    classNames: 'klb-chrome'.w()
	  }),
    
	  sidebarView: SC.SplitView.design({
	    layout: { top: 41, left: 0, bottom: 41, width: 300 },
	    backgroundColor: '#DDDDDD',
	    layoutDirection: SC.LAYOUT_VERTICAL,
      defaultThickness: 0.5,
      autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
      canCollapseViews: YES,
      classNames: 'klb-sbv',

      topLeftMinThickness: 10,
      topLeftMaxThickness: 100,
      topLeftView: SC.ScrollView.design({
        
        hasHorizontalScroller: NO, // disable horizontal scrolling
        contentView: SC.SourceListView.design({
          // contentBinding: "TestRunner.sourceController.arrangedObjects",
          //           selectionBinding: "TestRunner.sourceController.selection",
          //           contentValueKey: "displayName",
                    hasContentIcon: YES
          // contentIconKey:  "targetIcon",
          
          // action: 'selectTarget'
        })
      }),
      
      dividerView: SC.SplitDividerView,
      
       bottomRightView: SC.View.design({
        childViews: 'filterTitle searchField locationLabel locationContent locationButton'.w(),
        
// genderLabel sectorLabel groupsLabel resetButton saveButton
        filterTitle: SC.LabelView.design({
  			  layout: { left: 5, top: 5, right: 5, height: 32 },
  			  value: "_Filter Options".loc(),
  			  fontWeight: SC.BOLD_WEIGHT,
  			  controlSize: SC.LARGE_CONTROL_SIZE
  			}),
  			searchField: SC.TextFieldView.design({
  			  layout: { left: 5, top: 35, right: 5, height: 20 },
  			  hint: "_Search".loc()
  			}),
  			locationLabel: SC.LabelView.design({
  			  layout: { left: 5, top: 60, width: 80, height: 22 },
  			  value: "_Country".loc(),
  			  fontWeight: SC.BOLD_WEIGHT,
  			  controlSize: SC.LARGE_CONTROL_SIZE,
  			  classNames: 'filter-subheader'
  			}),
  			locationContent: SC.LabelView.design({
  			  layout: { left: 10, top: 82, width: 200, height: 24 },
  			  valueBinding: 'Klb.searchController.activeSearch.formattedCountries'
				}),
  			locationButton: SC.ButtonView.design({
  			  layout: { right:10, top: 82, width: 55, height: 18 },
  			  title: "_Edit".loc(),
	        action: "showCountryPicker",
	        target: "Klb.searchController",
					controlSize: SC.SMALL_CONTROL_SIZE  			  
  			}),
/*
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
  			  layout: { centerX: -50, bottom: 5, width: 80, height: 24 },
  			  title: "_Reset".loc()
  			}),
*/
  			saveButton: SC.ButtonView.design({
  			  layout: { centerX: 50, bottom: 5, width: 80, height: 24 },
  			  title: "_Save".loc()
  			})
       })
	  }),
	  
	  resultsView: SC.SceneView.design({
      layout: { top: 41, bottom: 41, left: 301, right: 0 },
      scenes: "searchListView loanDetail".w(),
      nowShowingBinding: "Klb.currentScene"
    })
	}),
	
	  loansLoading: SC.View.design({
      childViews: "labelView".w(),

      labelView: SC.LabelView.design({
        layout: { centerX: 0, centerY: 0, height: 24, width: 200 },
        textAlign: SC.ALIGN_CENTER,
        controlSize: SC.HUGE_CONTROL_SIZE,
        classNames: "center-label",
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value: "Loading Loans"
      })
    }),
  
  loanDetail: SC.View.design({
    childViews: "navigationView detailView".w(),

    navigationView: SC.ToolbarView.design({
      classNames: 'navigation-bar',
      
      layout: { top: 0, left: 0, right: 0, height: 30 },
      childViews: "backButton".w(),
      
      backButton: SC.ButtonView.design({
        layout: { top: 5, left: 8, width: 80, height: 24 },
        title: "« Back",
        action: "back"
      })
      
    }),
    
    detailView: SC.View.design({

       layout: { top: 31, left: 0, right: 0, bottom: 0 },
      childViews: "name picture posted statusLabel status loanAmountLabel loanAmount fundedAmountLabel fundedAmount borrowerCountLabel borrowerCount activityLabel activity sectorLabel sectorLabel sector useLabel use loanLabel loan countryLabel country partnerLabel partner".w(),
      
      name: SC.LabelView.design({
        layout: { top: 10, left: 10, width: 230, height: 20 },
        valueBinding: "Klb.detailController.name",
        controlSize: SC.LARGE_CONTROL_SIZE,
  			fontWeight: SC.BOLD_WEIGHT
      }),
      posted: SC.LabelView.design({
        layout: { top: 10, left: 250, width: 150, height: 20 },
        valueBinding: "Klb.detailController.posted_date"
      }),
      picture: SC.ImageView.design({
        layout: { top: 35, left: 10, width: 450, height: 360 },
        valueBinding: "Klb.detailController.largeImage"
      }),
      statusLabel: SC.LabelView.design({
        layout: { top: 35, left: 470, width: 120, height: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Status:"
      }),
      status: SC.LabelView.design({
        layout: { top: 35, left: 600, width: 120, height: 20 },
        valueBinding: "Klb.detailController.status"
      }),
      loanAmountLabel: SC.LabelView.design({
        layout: { top: 60, left: 470, width: 120, height: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Loan Amount:"
      }),
      loanAmount: SC.LabelView.design({
        layout: { top: 60, left: 600, width: 120, height: 20 },
        valueBinding: "Klb.detailController.loan_amount"
      }),
      fundedAmountLabel: SC.LabelView.design({
        layout: { top: 85, left: 470, width: 120, height: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Funded Amount:"
      }),
      fundedAmount: SC.LabelView.design({
        layout: { top: 85, left: 600, width: 120, height: 20 },
        valueBinding: "Klb.detailController.funded_amount"
      }),
      borrowerCountLabel: SC.LabelView.design({
        layout: { top: 110, left: 470, width: 120, height: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Borrowers:"
      }),
      borrowerCount: SC.LabelView.design({
        layout: { top: 110, left: 600, width: 120, height: 20 },
        valueBinding: "Klb.detailController.borrower_count"
      }),
     
      activityLabel: SC.LabelView.design({
        layout: { top: 135, left: 470, width: 120, height: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Activity:"
      }),
      activity: SC.LabelView.design({
        layout: { top: 135, left: 600, width: 120, height: 20 },
        valueBinding: "Klb.detailController.activity"
      }),
      sectorLabel: SC.LabelView.design({
        layout: { top: 160, left: 470, width: 120, height: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Sector:"
      }),
      sector: SC.LabelView.design({
        layout: { top: 160, left: 600, width: 120, height: 20 },
        valueBinding: "Klb.detailController.sector"
      }),
      useLabel: SC.LabelView.design({
        layout: { top: 185, left: 470, width: 120, height: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Use:"
      }),
      use: SC.LabelView.design({
        layout: { top: 185, left: 600, width: 120, height: 20 },
        valueBinding: "Klb.detailController.use"
      }),
      loanLabel: SC.LabelView.design({
        layout: { top: 210, left: 470, width: 120, height: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Loan:"
      }),
      loan: SC.LabelView.design({
        layout: { top: 210, left: 600, width: 120, height: 20 },
        valueBinding: "Klb.detailController.loan"
      }),
      countryLabel: SC.LabelView.design({
        layout: { top: 235, left: 470, width: 120, height: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Country"
      }),
      
      country: SC.LabelView.design({
        layout: { top: 235, left: 600, width: 120, height: 20 },
        valueBinding: "Klb.detailController.country"
      }),
      partnerLabel: SC.LabelView.design({
        layout: { top: 260, left: 470, width: 120, height: 20 },
        fontWeight: SC.BOLD_WEIGHT,
        value: "Partner:"
      }),
      partner: SC.LabelView.design({
        layout: { top: 260, left: 600, width: 120, height: 20 },
        valueBinding: "Klb.detailController.partner_id"
      })
      
    })
  }),
  
  
	searchListView: SC.View.design({
    layout: { top: 0, bottom: 0, left: 0, right: 0 },
    childViews: 'loanView loanViewBar'.w(),
    
    loanView: SC.ScrollView.design({
	    hasHorizontalScroller: NO,
	    layout: { top: 0, bottom: 41, left: 0, right: 0 },
	    backgroundColor: 'white',

			contentView: SC.ListView.design({
			  contentBinding: 'Klb.searchController.activeResults',
//			  selectionBinding: 'Klb.loansController.selection',
				contentValueKey: "name",
				exampleView: Klb.LoanListingView,
				rowHeight: 120,
				 actOnSelect: YES,
          action: "selectLoan"
			})
	  }),
	  
	  
	  loanViewBar: SC.View.design({
	    layout: { bottom: 0, left: 0, right: 0, height: 40 },
			childViews: 'resultsLabel sortLabel sortSelectView viewModeSegmentedView'.w(),
			classNames: 'klb-subchrome'.w(),

			resultsLabel: SC.LabelView.design({
				contentBinding: 'Klb.searchController.activeResultsCount',
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
	
	
});
