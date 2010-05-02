// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('controllers/main');

// This page describes the main user interface for your application.
Klb.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  appPane: SC.MainPane.design({
	  childViews: 'topbarView mainPaneView'.w(),

    defaultResponder: Klb.mainController,
    
    topbarView: SC.View.design({
	    layout: { top: 0, left: 0, right: 0, height: 80 },
	    childViews: 'logoView buttonBar'.w(),
	    classNames: 'klb-header'.w(),
      
			logoView: SC.ImageView.design({
			  layout: { left: 10, top: 10, width: 122, height: 60 },
			  value: sc_static('kef_logo.png'),
			}),
			
			buttonBar: SC.SegmentedView.design({
				layout: { left: 180, top: 20, width: 140*5, height: 60 },
				itemTitleKey: 'title',
				valueBinding: 'Klb.mainController.currentSection',
				itemWidthKey: 'width',
				itemValueKey: 'value',
				items: [
					{	title: "_About".loc(),
						value: "Klb.aboutPage.mainView",
						width: 120,
					},
					{	title: "_Choose_A_Loan".loc(),
						value: "Klb.lendingPage.mainView",
						width: 120,
					},
					{	title: "_Learn_More".loc(),
						value: "Klb.prehomePage.mainView",
						width: 120,
					},
					{	title: "_Register".loc(),
						value: "Klb.registerPage.mainView",
						width: 120,
					},
					{	title: "_Demo".loc(),
						value: "Klb.demoPage.mainView",
						width: 120,
					},
				],
			}),
	  }),
    
    mainPaneView: SC.ContainerView.design({
	    layout: { bottom: 0, left: 0, right: 0, top: 82 },
			nowShowingBinding: "Klb.mainController.currentSection"
	  }),
	})
});
