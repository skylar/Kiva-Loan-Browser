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
		layout: {top:0,bottom:0,left:0,right:0},
		contentView: SC.View.design({
			layout: {top:0,height:860,right:0,left:0},
			childViews: 'pageView'.w(),
			classNames: 'contentBackdrop',

			pageView: SC.View.design({
				layout: {top:0,bottom:50,centerX:0,width:840},
				childViews: 'illustration borrowerStory lenderStory'.w(),
				classNames: 'contentPage',
				
				illustration: SC.View.design({
					layout:{top:10,height:385,centerX:0,width:785},
					childViews: 'slidesContent'.w(),
					
					slidesContent: SC.View.design({
						childViews: 'placeholderGraphic'.w(),
						
						placeholderGraphic: SC.ImageView.design({
							value: sc_static('images/prehome-illustration.jpg')
						})
					})
				}),
			
				borrowerStory: SC.View.design({
					layout: {top:385,height:100,left:40,right:40},
					childViews: 'step1 step2 step3'.w(),
					
					step1: Klb.DisplayTextView.design({
						layout: {top:10,left:15,width:225},
						value: '_An entrepreneur needs a loan to grow her business'.loc(),
						textAlign: SC.ALIGN_CENTER
					}),
					
					step2: Klb.DisplayTextView.design({
						layout: {top:10,centerX:0,width:225},
						value: '_Kiva works with local partners who specialize in microcredit'.loc(),
						textAlign: SC.ALIGN_CENTER
					}),
					
					step3: Klb.DisplayTextView.design({
						layout: {top:10,right:10,width:225},
						value: '_People from all over the world become lenders, helping in big ways with small amounts of money'.loc(),
						textAlign: SC.ALIGN_CENTER
					})
				}),
				
				lenderStory: SC.View.design({
					layout:{top:500,height:270,left:40,right:40},
					childViews: 'caption step1 step2 step3 cta'.w(),
					classNames: 'lenderStoryBox',
					
					caption: Klb.DisplayTextView.design({
						layout:{top:10,height:24,left:10,right:10},
						value: '_Kiva. Make a loan, change a life.'.loc(),
						classNames: 'prehomeCaption'
					}),
					
					step1: SC.View.design({
						layout: {top:50,left:10,width:240},
						childViews: 'number text'.w(),
						
						number: SC.View.design({
							layout: {top:0,height:21,left:0,width:22},
							classNames: 'lenderPoints itemOne'.w()
						}),
						text: Klb.DisplayTextView.design({
							layout: {top:0,left:30,width:190},
							value: "<div class='lenderPointsCaption'>"
								+"_Make the choice to change a life".loc()
								+"</div><div style='line-height:5px'>&nbsp;</div><div class=''>"
								+"Choisissez un micro entrepreneur. Prêtez. Aidez le à créer son activité tout en améliorant ses conditions de vie.".loc()
								+"</div/>"
						})
					}),
					step2: SC.View.design({
						layout: {top:50,centerX:0,width:240},
						childViews: 'number text'.w(),
						
						number: SC.View.design({
							layout: {top:0,height:21,left:0,width:22},
							classNames: 'lenderPoints itemTwo'.w()
						}),
						text: Klb.DisplayTextView.design({
							layout: {top:0,left:30,right:0},
							value: "<div class='lenderPointsCaption'>"
								+"_Get repaid".loc()
								+"</div><div style='line-height:5px'>&nbsp;</div><div class=''>"
								+"98% des emprunts sont remboursés. Vous avez ensuite le choix de réinvestir votre argent dans d'autres projets.".loc()
								+"</div/>"
						})
					}),
					step3: SC.View.design({
						layout: {top:50,right:10,width:240},
						childViews: 'number text'.w(),
						
						number: SC.View.design({
							layout: {top:0,height:21,left:0,width:22},
							classNames: 'lenderPoints itemThree'.w()
						}),
						text: Klb.DisplayTextView.design({
							layout: {top:0,left:30,right:0},
							value: "<div class='lenderPointsCaption'>"
								+"_Become part of the Kiva community".loc()
								+"</div><div style='line-height:5px'>&nbsp;</div><div class=''>"
								+"Rencontrez et interagissez avec d’autres prêteurs dans le monde entier. Invitez votre entourage à contribuer à leur tour à changer des vies.".loc()
								+"</div/>"
						})
					}),
					cta: SC.View.design({
						layout: {bottom:20,height:38,left:10,width:720},
						childViews: 'caption cta'.w(),	
						classNames: 'brandedFontContent ctaPromo',			
						isVisible: YES,
						
						caption: Klb.DisplayTextView.design({
							layout:{centerY:0,height:14,right:215,left:0},
							color: 'white',
							value: '_Get started now by finding an entrepreneur and making a loan!'.loc(),
							classNames: 'primaryCtaCaption',
							textAlign: SC.ALIGN_RIGHT
						}),
						
						cta: SC.ButtonView.design({
							layout:{centerY:0,height:30,right:0,width:200},
							classNames: 'ctaButton primaryCta'.w(),
							title: "_Choose_A_Loan".loc(),
							target: 'Klb.mainController',
							action: 'showLending',
							controlSize: SC.LARGE_CONTROL_SIZE					
						})											
					})
				})
			})
		})
	})
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
