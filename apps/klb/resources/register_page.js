// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

// This page describes the main user interface for your application.
Klb.registerPage = SC.Page.design({

	mainView: SC.View.design({
		layout: { top: 0,  left: 0, right: 0, bottom:0 },
		childViews: 'rightView sidebarView'.w(),
		classNames: 'brandedFontContent',
		
		sidebarView: Klb.RegSidebarView.design({
			layout: { top:0, bottom:0, left:0, right:950,minWidth:120 },
//			childViews: 'header instructionCaption instructionItems'.w(),
//			
//			header: Klb.DisplayTextView.design({
//				layout: {left:0,right:0,top:10,height:30},
//			  textAlign: SC.ALIGN_CENTER,
//			  fontWeight: SC.BOLD_WEIGHT,
//				classNames:'helpSidebarHeader',
//				value: '_Help'.loc(),
//			}),
//			instructionCaption: Klb.DisplayTextView.design({
//				layout: {left:10,right:10,top:50,height:20},
//			  fontWeight: SC.BOLD_WEIGHT,
//				classNames:'helpSidebarCaption',
//				value: '_Use of the english site'.loc(),
//			}),
//			instructionItems: SC.LabelView.design({
//			  layout: { top:70,height:100,left:10,right:10},
//			  textAlign: SC.ALIGN_CENTER,
//			  controlSize: SC.HUGE_CONTROL_SIZE,
//			  classNames: "center-label",
//			  fontWeight: SC.BOLD_WEIGHT,
//			  value: '<ol><li>'+'_Enter your first name'.loc()+'</li><li>'+
//			  	'_Enter your last name'+'</li></ol>',
//			}),
		}),
		
		rightView: SC.View.design({
			layout: { top:0, bottom:0, right:0, width:950,minWidth:950},
			childViews: 'topView webView kivaRegLoading'.w(),
			
			topView: SC.View.design({
				layout: {top:0, left:0, height:80, right: 0},
				backgroundColor: '#F7F3DE',
				classNames: 'regTopView',
				childViews: 'note1 note2'.w(),

				note1: SC.LabelView.design({
				  layout: { top:5, centerX:0, width: 900 },
				  textAlign: SC.ALIGN_CENTER,
				  classNames: "center-label",
				  value: '*reg_disclaimer_text1'.loc(),
				}),

				note2: SC.LabelView.design({
				  layout: { top:40, centerX:0, width: 600 },
				  textAlign: SC.ALIGN_CENTER,
				  classNames: "center-label",
				  value: '*reg_disclaimer_text2'.loc(),
				}),
			}),
			
			kivaRegLoading: SC.View.design({
				layout: {top:81, left:0, bottom:0, right: 0},
			  childViews: "loadingMeter labelView".w(),
			  backgroundColor: '#dddddd',
				
				loadingMeter: SC.ImageView.design({
				  layout: { centerX: 0, centerY: -32, height: 32, width: 32 },
				  value: sc_static('images/animated_loader.gif'),
				}),

			  labelView: SC.LabelView.design({
			    layout: { centerX: 0, centerY: 24, height: 24, width: 300 },
			    textAlign: SC.ALIGN_CENTER,
			    classNames: "center-label",
			    controlSize: SC.LARGE_CONTROL_SIZE,
			    fontWeight: SC.BOLD_WEIGHT,
			    value: 'Loading Kiva website...'.loc()
			  })
			}),

			webView: Klb.WebView.design({
				layout: {top:81, left:0, bottom:0, right: 0},
				value: 'http://www.kiva.org/register',
				
				iframeDidLoad: function() { Klb.registerPage.mainView.rightView.kivaRegLoading.set('isVisible',NO); },
			}),
		}),
	}),
});