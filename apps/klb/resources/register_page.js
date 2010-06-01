// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('views/neutered_web');

// This page describes the main user interface for your application.
Klb.registerPage = SC.Page.design({

	mainView: SC.View.design({
		layout: { top: 0,  left: 0, right: 0, bottom:0 },
		childViews: 'sidebarView rightView'.w(),
		
		sidebarView: SC.View.design({
			layout: { top:0, bottom:0, left:0, width:160 },
			backgroundColor: 'gray',
			childViews: 'labelView'.w(),

			labelView: SC.LabelView.design({
			  layout: { centerX: 0, centerY: 0, height: 20, width: 120 },
			  textAlign: SC.ALIGN_CENTER,
			  controlSize: SC.HUGE_CONTROL_SIZE,
			  classNames: "center-label",
			  fontWeight: SC.BOLD_WEIGHT,
			  value: "Sidebar",
			}),
		}),
		
		rightView: SC.View.design({
			layout: { top:0, right:0, bottom:0, left:160},
			childViews: 'topView webView'.w(),
			
			topView: SC.View.design({
				layout: {top:0, left:0, height:50, right: 0},
				backgroundColor: '#aaddaa',
				childViews: 'labelView'.w(),

				labelView: SC.LabelView.design({
				  layout: { centerX: 0, centerY: 0, height: 20, width: 300 },
				  textAlign: SC.ALIGN_CENTER,
				  controlSize: SC.HUGE_CONTROL_SIZE,
				  classNames: "center-label",
				  fontWeight: SC.BOLD_WEIGHT,
				  value: "We say something about registering here.",
				}),
			}),
			
			webView: Klb.NeuteredWebView.design({
				layout: {top:60, left:0, bottom:0, right: 0},
				value: 'http://www.kiva.org/register',
			}),
		}),
	}),
});