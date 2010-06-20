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
	  childViews: 'topbarView mainPaneView invisibleFormView'.w(),

    defaultResponder: Klb.mainController,
    
    topbarView: SC.View.design({
	    layout: { top: 0, left: 0, right: 0, height: 74 },
	    childViews: 'logoView buttonBar rightPromo'.w(),
	    classNames: 'klb-header'.w(),
      
			logoView: SC.ImageView.extend(SCUI.SimpleButton).design({
			  layout: { left: 5, top: 5, width: 123, height: 64 },
			  value: sc_static('images/kef_logo_150.png'),
			  classNames: 'simulatedLogoButton',
			  target: 'Klb.mainController',
			  action: 'showPrehome',
			}),
			
			buttonBar: SC.SegmentedView.design({
				layout: { top: 5, height: 65, left: 150, width: 102*4},
				itemTitleKey: 'title',
				valueBinding: 'Klb.mainController.currentSection',
				itemWidthKey: 'width',
				itemValueKey: 'value',
				classNames: 'mainNav',
				items: [
					{	title: "_About".loc(),
						value: Klb.getPath('aboutPage.mainView'),
						width: 90,
					},
					{	title: "_Projects".loc(),
						value:  Klb.getPath('lendingPage.mainView'),
						width: 90,
					},
					{	title: "_Register".loc(),
						value: 'Klb.registerPage.mainView',
						width: 90,
					},
					{	title: "_Demo".loc(),
						value:  'Klb.demoPage.mainView',
						width: 90,
					}
				],
			}),
			
			rightPromo: SC.View.design({
				layout: {centerY:0,height:60,right:20,width:250},
				childViews: 'caption cta'.w(),	
				classNames: 'brandedFontContent ctaPromo',			
				isVisible: YES,
				
				caption: Klb.DisplayTextView.design({
					layout:{top:0,height:30,left:10,right:10},
					color: 'white',
					value: '_Get started now by finding an entrepreneur and making a loan!'.loc(),
					classNames: 'primaryCtaCaption',
					textAlign: SC.ALIGN_CENTER,
				}),
				
				cta: SC.ButtonView.design({
					layout:{bottom:0,height:30,left:0,right:0},
					classNames: 'ctaButton primaryCta'.w(),
					title: "_Choose_A_Loan".loc(),
					target: 'Klb.mainController',
					action: 'showLending',
					controlSize: SC.LARGE_CONTROL_SIZE					
				})
			})						
	  }),
    
    mainPaneView: SC.ContainerView.design({
	    layout: { bottom: 0, left: 0, right: 0, top: 76 },
			nowShowingBinding: "Klb.mainController.currentSection"
	  }),
	  
	  invisibleFormView: SC.View.design({
	  	layout:{top:-20,height:5,left:0,right:0},
	  	layerId:'invisible_form_view',
	  	isVisible: NO
	  }),

	})
});
