// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

// This page describes the main user interface for your application.
Klb.prehomePage = SC.Page.design({

	mainView: SC.ScrollView.design({
		contentView: SC.View.design({
			layout: {top:0,height:1300,right:0,left:0},
			childViews: 'introSlides dividerBar inFigures'.w(),
			
			introSlides: SC.View.design({
				layout:{top:40,height:600,width:950,centerX:0},
				childViews: 'slidesNav slidesContent'.w(),
				
				slidesContent: SC.View.design({
					layout:{left:170,right:0,top:0,bottom:0},
					childViews: 'placeholderGraphic'.w(),
					
					placeholderGraphic: SC.ImageView.design({
						value: sc_static('images/prehome-illustration.png')
					}),
				}),
				
				slidesNav: SC.View.design({
					layout:{top:0,left:0,width:150,bottom:0},
					classNames: 'intro-slides-nav',
					childViews: 'one two three'.w(),
					
					one: SC.View.design({
						layout:{top:0,left:0,right:0,height:50},
						childViews: 'label'.w(),
						backgroundColor:'gray',
						
						label: SC.LabelView.design({
							layout: {top:10,left:5,right:5},
							value: '_What_is_Microfinance?'.loc(),
						}),
					}),
					two: SC.View.design({
						childViews: 'label'.w(),
						layout:{top:1*50,left:0,right:0,height:50},
						
						label: SC.LabelView.design({
							layout: {top:10,left:5,right:5},
							value: '_What_is_Kiva?'.loc(),
						})
					}),
					three: SC.View.design({
						childViews: 'label'.w(),
						layout:{top:2*50,left:0,right:0,height:50},
						
						label: SC.LabelView.design({
							layout: {top:10,left:5,right:5},
							value: '_Why_Kiva_en_Français?'.loc(),
						}),
					}),
				}),
			}),
			
			dividerBar: SC.View.design({
				layout: {left:0,right:0,top:650,height:50},
				backgroundColor: '#006600',
				childViews: 'caption emailCollect'.w(),
				
				caption: SC.LabelView.design({
					layout:{width:950,centerX:0,top:10,bottom:10},
					color: 'white',
					value: 'Kiva connects people through lending for the sake of alleviating poverty.'
				}),
				
				emailCollect: SC.View.design({}),
			}),
			
			inFigures: SC.View.design({
				layout: {top:700, width:950, centerX:0},
				childViews:'mission figures'.w(),
				
				mission: SC.LabelView.design({
					layout:{top:40, right:20, left:20, height:35},
					value: "_The_Mission".loc(),
					controlSize: SC.LARGE_CONTROL_SIZE,
					fontWeight: SC.BOLD_WEIGHT
				}),
				figures: SC.LabelView.design({
					layout:{top:300, right:20, left:20, height:35},
					value: "_Progress_In_Figures".loc(),
					controlSize: SC.LARGE_CONTROL_SIZE,
					fontWeight: SC.BOLD_WEIGHT
				})
			
			}),		
		}),
	}),
});

//({
//	contentView: SC.SceneView.design({
//    layout: { width: 700, height: 500, centerX: 0, centerY: 0 },
//		scenes: "sceneOne".w(),
//		nowShowing: "sceneOne",
//	  classNames: 'sceneViewOfPanel',
//	  styles: 'border:'
//	nowShowingBinding - change to this later...			
//	}),
//}),
//
//sceneOne: SC.View.design({
//  layout: { top:0,bottom:0,left:0,right:0 },
//  childViews: "captionView".w(),
//	backgroundColor: 'white',
//	
//  labelView: SC.LabelView.design({
//    layout: { centerX: 0, centerY: 0, height: 24, width: 200 },
//    textAlign: SC.ALIGN_CENTER,
//    controlSize: SC.HUGE_CONTROL_SIZE,
//    classNames: "center-label",
//    fontWeight: SC.BOLD_WEIGHT,
//    value: "Welcome to the Pre-Home."
//  }),			  
//}),
//
//sceneTwo: null,
