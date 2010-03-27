// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('views/grid');

// This page describes the main user interface for your application.
Klb.pickerPanes.countryPicker = SC.Page.design({
  
  mainPane: SC.PanelPane.design({
		contentView: SC.View.design({
	    layout: { width: 300, height: 300, centerX: 0, centerY: 0 },
			childViews: 'selectButton label buttonGridView'.w(),

			label: SC.LabelView.design({
			 layout: { top: 20, left: 20, right: 20, height: 20 },
			 value: "_Select Countries".loc() + ":"
			}),
			
			buttonGridView: Klb.GridView.design({
			 layout: { top: 18, left: 18, bottom: 18+24+18, right: 18 },
			 contentBinding: 'Klb.searchController.availableCountries'
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
