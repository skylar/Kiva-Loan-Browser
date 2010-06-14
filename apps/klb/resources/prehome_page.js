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
			layout: {top:0,height:1180,right:0,left:0},
			childViews: 'pageView'.w(),
			classNames: 'contentBackdrop',

			pageView: SC.View.design({
			layout: {top:0,bottom:50,centerX:0,width:800},
			childViews: 'introSlides dividerBar inFigures'.w(),
			classNames: 'contentPage',
			
			introSlides: SC.View.design({
				layout:{top:10,height:600,width:800,centerX:0},
				childViews: 'slidesContent'.w(),
				
				caption: SC.LabelView.design({
					layout:{top:0,height:24,centerX:0,width:760},
					value: "_Kiva. Make a loan, change a life.".loc(),
					classNames: 'prehomeCaption',
					controlSize: SC.LARGE_CONTROL_SIZE,
				}),

				slidesContent: SC.View.design({
					layout:{top:0,bottom:0,centerX:0,width:734},
					childViews: 'placeholderGraphic'.w(),
					
					placeholderGraphic: SC.ImageView.design({
						value: sc_static('images/prehome-illustration.png')
					}),
				}),				
			}),
			
			dividerBar: SC.View.design({
				layout: {top:630,height:70,centerX:0,width:800},
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
				layout: {top:720, width:740, centerX:0},
				childViews:'mission figures'.w(),
				
				mission: SC.View.design({
					childViews: 'header step1 step2 step3'.w(),
					header: SC.LabelView.design({
						layout:{top:0, left:0, right:0, height:35},
						value: "_The Situation".loc(),
						controlSize: SC.LARGE_CONTROL_SIZE,
						fontWeight: SC.BOLD_WEIGHT
					}),
					
					step1: SC.View.design({
						layout:{top:40, height:210, left:0, width:240},
						childViews: 'diagram caption'.w(),
						
						diagram: SC.ImageView.design({
							layout:{top:0, height:144, centerX:0, width:165},
							value: sc_static('images/situation_step1.png'),
						}),
						caption: Klb.DisplayTextView.design({
							layout:{bottom:0, height:50, centerX:0, width:230},
							classNames:'situationStepCaption',
							value: '_3 billion people live on less than $2.50 per day'.loc(),
//							fontWeight: SC.BOLD_WEIGHT
								textAlign:SC.ALIGN_CENTER,
						}),
					}),
					step2: SC.View.design({
						layout:{top:40, height:210, left:240, width:240},
						childViews: 'diagram caption'.w(),
						
						diagram: SC.ImageView.design({
							layout:{top:0, height:144, centerX:0, width:165},
							value: sc_static('images/situation_step2.png'),
						}),
						caption: Klb.DisplayTextView.design({
							layout:{bottom:0, height:50, centerX:0, width:230},
							classNames:'situationStepCaption',
							value: '_Half of these people run small businesses in need of a loan'.loc(),
//							fontWeight: SC.BOLD_WEIGHT
								textAlign:SC.ALIGN_CENTER,
						}),
					}),
					step3: SC.View.design({
						layout:{top:40, height:210, left:480, width:240},
						childViews: 'diagram caption'.w(),
						
						diagram: SC.ImageView.design({
							layout:{top:0, height:144, centerX:0, width:165},
							value: sc_static('images/situation_step3.png'),
						}),
						caption: Klb.DisplayTextView.design({
							layout:{bottom:0, height:50, centerX:0, width:200},
							classNames:'situationStepCaption',
							value: '_Today there are enough loans to help only 10%'.loc(),
//							fontWeight: SC.BOLD_WEIGHT
								textAlign:SC.ALIGN_CENTER,
						}),
					}),
				}),
				figures: SC.View.design({
						layout: {top:280,left:0,right:0},
						childViews: 'header data1 data2 data3 data4'.w(),
						
						header: Klb.DisplayTextView.design({
							layout: {top:0,height:30,left:0,right:0},
							value: "_In Numbers".loc(),
							controlSize: SC.LARGE_CONTROL_SIZE,
							fontWeight: SC.BOLD_WEIGHT
						}),
						
						data1: SC.View.design({
							layout:{top:40,height:100,right:140,width:175},
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
							layout:{top:40,height:100,right:0,width:175},
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
							layout:{top:40,height:100,left:0,width:200},
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
							layout:{top:40,height:100,left:200,width:230},
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
		}),}),
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
