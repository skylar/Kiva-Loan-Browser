// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

//sc_require('views/simple_button');
sc_require('views/display_text');

// This page describes the main user interface for your application.
Klb.prehomePage = SC.Page.design({

	mainView: SC.ScrollView.design({
		contentView: SC.View.design({
			layout: {top:0,height:1300,right:0,left:0},
			childViews: 'introSlides dividerBar inFigures'.w(),
			
			introSlides: SC.View.design({
				layout:{top:15,height:650,width:800,centerX:0},
				childViews: 'caption slidesContent'.w(),
				
				caption: SC.LabelView.design({
					layout:{top:0,height:24,centerX:0,width:760},
					value: "_Kiva. Make a loan, change a life.".loc(),
					classNames: 'prehomeCaption',
					controlSize: SC.LARGE_CONTROL_SIZE,
				}),

				slidesContent: SC.View.design({
					layout:{top:24,bottom:0,centerX:0,width:763},
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
				layout: {top:650,height:70,centerX:0,width:800},
				backgroundColor: '#006600',
				childViews: 'caption chooseCta'.w(),
				
				caption: SC.LabelView.design({
					layout:{left:20,width:400,top:10,bottom:10},
					color: 'white',
					value: 'Get started now by finding an entrepreneur and making a loan!'.loc(),
					classNames: 'primaryCtaCaption',
					controlSize: SC.LARGE_CONTROL_SIZE,
				}),
				
				chooseCta: SC.ButtonView.design({
					layout: {top:20,height:30,right:20,width:200},
					classNames: 'ctaButton ctaMain'.w(),
					controlSize: SC.LARGE_CONTROL_SIZE,
					title: "_Choose_A_Loan".loc(),
					target: 'Klb.mainController',
					action: 'showLending',
				}),
			}),
			
			inFigures: SC.View.design({
				layout: {top:720, width:800, centerX:0},
				childViews:'mission figures'.w(),
				
				mission: SC.LabelView.design({
					layout:{top:40, left:0, right:0, height:35},
					value: "_The Situation".loc(),
					controlSize: SC.LARGE_CONTROL_SIZE,
					fontWeight: SC.BOLD_WEIGHT
				}),
				figures: SC.View.design({
						layout: {top:200,left:0,right:0},
						childViews: 'header data1 data2 data3 data4'.w(),
						
						header: Klb.DisplayTextView.design({
							layout: {top:0,height:30,left:0,right:0},
							value: "_In Numbers".loc(),
							controlSize: SC.LARGE_CONTROL_SIZE,
							fontWeight: SC.BOLD_WEIGHT
						}),
						
						data1: SC.View.design({
							layout:{top:30,height:100,right:175,width:175},
							childViews: 'figure label'.w(),
							classNames: 'dataFigureHolder',
							
							figure: Klb.DisplayTextView.design({
								layout:{top:0,height:50},
								classNames: 'dataFigure',
								value:'56',
								fontWeight: SC.BOLD_WEIGHT,
								textAlign:SC.ALIGN_CENTER,
							}),
							label: Klb.DisplayTextView.design({
								layout:{top:40,height:24},
								classNames: 'dataFigureLabel',
								value:'countries',
								fontWeight: SC.BOLD_WEIGHT,
								textAlign:SC.ALIGN_CENTER,
							}),
						}),

						data2: SC.View.design({
							layout:{top:30,height:100,right:0,width:175},
							childViews: 'figure label'.w(),
							classNames: 'dataFigureHolder',
							
							figure: Klb.DisplayTextView.design({
								layout:{top:0,height:50},
								classNames: 'dataFigure',
								value:'116',
								fontWeight: SC.BOLD_WEIGHT,
								textAlign:SC.ALIGN_CENTER,
							}),
							label: Klb.DisplayTextView.design({
								layout:{top:40,height:24},
								classNames: 'dataFigureLabel',
								value:'partners',
								fontWeight: SC.BOLD_WEIGHT,
								textAlign:SC.ALIGN_CENTER,
							}),
						}),
						
						data3: SC.View.design({
							layout:{top:30,height:100,left:0,width:200},
							childViews: 'figure label'.w(),
							classNames: 'dataFigureHolder',
							
							figure: Klb.DisplayTextView.design({
								layout:{top:0,height:50},
								classNames: 'dataFigure',
								value:'345,978',
								fontWeight: SC.BOLD_WEIGHT,
								textAlign:SC.ALIGN_CENTER,
							}),
							label: Klb.DisplayTextView.design({
								layout:{top:40,height:24},
								classNames: 'dataFigureLabel',
								value:'entrepreneurs helped',
								fontWeight: SC.BOLD_WEIGHT,
								textAlign:SC.ALIGN_CENTER,
							}),
						}),

						data4: SC.View.design({
							layout:{top:30,height:100,left:200,width:300},
							childViews: 'figure label'.w(),
							classNames: 'dataFigureHolder',
							
							figure: Klb.DisplayTextView.design({
								layout:{top:0,height:50},
								classNames: 'dataFigure',
								value:'$138,323,264',
								fontWeight: SC.BOLD_WEIGHT,
								textAlign:SC.ALIGN_CENTER,
							}),
							label: Klb.DisplayTextView.design({
								layout:{top:40,height:24},
								classNames: 'dataFigureLabel',
								value:'in loans',
								fontWeight: SC.BOLD_WEIGHT,
								textAlign:SC.ALIGN_CENTER,
							}),
						}),
				}),
			
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
