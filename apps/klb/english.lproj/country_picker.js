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
    layout: { width: 300, height: 300, centerX: 0, centerY: 0 },
    
    contentView: Klb.GridView.design({
      layout: { top: 0, left: 0, bottom: 0, right: 0 },
      content: Klb.Country.FIXTURES
    })
    
  })
});
