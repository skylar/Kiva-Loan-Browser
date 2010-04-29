// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

// This page describes the main user interface for your application.
Klb.aboutPage = SC.Page.design({

	mainView: SC.ScrollView.design({
		hasHorizontalScroller: NO,
		backgroundColor: '#dddddd',
		
		contentView: SC.View.design({
			layout: { top: 0,  left: 0, right: 0, height:800 },
			childViews: 'labelView'.w(),

		  labelView: SC.LabelView.design({
		    layout: { centerX: 0, centerY: 0, height: 24, width: 200 },
		    textAlign: SC.ALIGN_CENTER,
		    controlSize: SC.HUGE_CONTROL_SIZE,
		    classNames: "center-label",
		    fontWeight: SC.BOLD_WEIGHT,
		    value: "We will tell you about Kiva here!"
		  })
		}),

	}),
	

});