// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('views/grid');

Klb.pickerPanes.countryPicker = SC.Page.design({
  
  mainPane: SC.PanelPane.design({
	    layout: { width: 1010, height: 550, centerX: 0, centerY: 0 },
		contentView: SC.View.design({
			childViews: 'selectButton label buttonGridView'.w(),
			
			label: SC.LabelView.design({
			 layout: { top:10, left:20, right:20, height:24 },
			 value: "_Choose Countries".loc(),
			 controlSize: SC.LARGE_CONTROL_SIZE
			}),
			
			buttonGridView: Klb.GridView.design({
			 layout: { top: 40, left: 18, bottom: 18+24+18, right: 18 },
			 contentBinding: 'Klb.searchController.availableCountries',
			 classNames: 'buttonGridView'.w()
			}),
			
      selectButton: SC.ButtonView.design({
        layout: { centerX: 0, width: 150, height: 24, bottom: 18 },
        title: "_OK".loc(),
        isDefault: YES,
        action: "chooseCountries",
        target: "Klb.searchController"
      })
   	}) 
  })
});

Klb.pickerPanes.sectorPicker = SC.Page.design({

	mainPane: SC.PanelPane.design({
		layout: { width: 300, height: 300, centerX: 0, centerY: 0 },
		contentView: SC.View.design({
			childViews: 'selectButton label scrollView'.w(),
			
			label: SC.LabelView.design({
			 layout: { top: 20, left: 20, right: 20, height: 30 },
			 value: "_Choose Sectors".loc() + ":"
			}),
			
			scrollView: SC.ScrollView.design({
				layout: { top: 40, left: 18, bottom: 18+24+18, right: 18 },
	     	hasHorizontalScroller: NO,
	     	borderStyle: SC.BORDER_GRAY,
	     	
				contentView: SC.ListView.design({
					contentBinding: "Klb.searchController.availableSectors",
					//contentCheckboxKey: 'isSelected',
					contentValueKey: 'name',
					rowHeight: 24
				})
      }),
      
      selectButton: SC.ButtonView.design({
        layout: { centerX: 0, width: 150, height: 24, bottom: 18 },
        title: "_OK".loc(),
        isDefault: YES,
        action: "chooseSectors",
        target: "Klb.searchController"
      })
	  })
	})
});
		 