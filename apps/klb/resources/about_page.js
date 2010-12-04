// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('views/static_content');
sc_require('views/display_text');
sc_require('views/scroll');

// This page describes the main user interface for your application.
Klb.aboutPage = SC.Page.design({

	mainView: Klb.ScrollView.design({
		hasHorizontalScroller: NO,
		layout: {top:0,bottom:0,left:0,right:0},
		
		contentView: SC.View.design({
			layout: {left:0,right:0,top:0,height:2500},
			childViews: 'pageView'.w(),
			classNames: 'contentBackdrop',

			pageView: SC.View.design({
			layout: {top:0,bottom:50,centerX:0,width:840},
			childViews: 'pageContent'.w(),
			classNames: 'contentPage aboutSection'.w(),
			
			pageContent: SC.View.design({
			layout: {top:20,bottom:20,left:20,right:20},
			childViews: 'mfHow sep1 kivaWhat sep2 kefWhy sep3 contacts sep4 partners'.w(),
			
			mfHow: SC.View.design({
				layout: {top:20,height:640,left:20,right:20},
				childViews: 'title photo content'.w(),
				
				title: Klb.DisplayTextView.design({
					layout: {top:0,height:30,left:0,right:0},
					value: '_How Microfinance Began'.loc(),
					classNames: 'aboutSectionHeader'
				}),

				photo: SC.ImageView.design({
					layout: {top:20,height:507,right:0,width:400},
					value: sc_static('images/muhammad_yunus.jpg')
				}),
				
				content: SC.View.design({
					layout: {top:40,left:0,right:0},
					childViews: 'detailText caption1 caption2'.w(),
					
					detailText: SC.View.design({
						layout: {top:0,left:0,width:330},
						childViews: 'paraText'.w(),
						
						paraText: Klb.DisplayTextView.design({
							layout: {top:0,left:0,right:0}, 
							value: '<div>'
								+'*mfHow_para_1'.loc()
								+'</div><div>&nbsp;</div><div>'
								+'*mfHow_para_2'.loc()
								+'</div><div>&nbsp;</div><div>'
								+'*mfHow_para_3'.loc()
								+'</div><div>&nbsp;</div><div>'
								+'*mfHow_para_4'.loc()
								+'</div>'
						})
					}),
					
					caption1: Klb.DisplayTextView.design({
						layout: {top:395,height:100,left:0,width:330},
						classNames: 'caption',
						value: '*about_captionYunus1'.loc()
					}),					

					caption2: Klb.DisplayTextView.design({
						layout: {top:480,height:80,left:0,width:330},
						classNames: 'caption',
						value: '*about_captionYunus2'.loc()
					})					
				})
			}),
			
			sep1: SC.View.design({
				layout: {top:590,height:25,centerX:0,width:680},
				classNames: 'separator'
			}),
				
			kivaWhat: SC.View.design({
				layout: {top:650,left:0,right:0},
				childViews: 'title content'.w(),
				
				title: Klb.DisplayTextView.design({
					layout: {top:0,height:30,left:20,right:20},
					value: '_What Is Kiva?'.loc(),
					classNames: 'aboutSectionHeader'
				}),
				content: SC.View.design({
					layout: {top:40,left:0,right:0},
					childViews: 'infographic detailText caption graphicBox'.w(),
					
					infographic: SC.View.design({
						layout:{top:0,height:480,centerX:0,width:785},
						childViews: 'diagram borrowerStory'.w(),
										
						diagram: SC.ImageView.design({
							layout:{top:0,height:385,centerX:0,width:785},
							value: sc_static('images/prehome-illustration.jpg')
						}),
						borrowerStory: SC.View.design({
							layout: {top:385,height:100,centerX:0,width:765},
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
						})				
					}),
					
					caption: Klb.DisplayTextView.design({
						layout: {top:500,height:80,left:20,width:400},
						classNames: 'caption',
						value: '_Kiva connects people through lending to alleviate poverty.'.loc()
					}),
					
					detailText: SC.View.design({
						layout: {top:575,left:20,width:400},
						childViews: 'paraText'.w(),
						
						paraText: Klb.DisplayTextView.design({
							layout: {top:0}, 
							value: '<div>'
								+'*kivaWhat_para_1'.loc()
								+'</div><div>&nbsp;</div><div>'
								+'*kivaWhat_para_2'.loc()
								+'</div><div>&nbsp;</div><div>'
								+'*kivaWhat_para_3'.loc()
								+'</div><div>&nbsp;</div><div>'
								+'*kivaWhat_para_4'.loc()
								+'</div>'
						})
					}),
										
					graphicBox: SC.View.design({
						layout: {top:520,right:20,width:350},
						childViews: 'logo data1 data2 data3 data4'.w(),
						
						logo: SC.ImageView.design({
							layout: {top:0,height:90,centerX:0,width:170},
							value: 'http://l3-1.kiva.org/r23214/images/logoLeafy3.gif'
						}),
						
						data1: SC.View.design({
							layout:{top:110,height:100,left:30,width:175},
							childViews: 'figure label'.w(),
							classNames: 'dataFigureHolder',
							
							figure: Klb.DisplayTextView.design({
								layout:{top:0,height:50},
								classNames: 'dataFigure',
								value:'56',
								textAlign:SC.ALIGN_CENTER
							}),
							label: Klb.DisplayTextView.design({
								layout:{top:40,height:24},
								classNames: 'dataFigureLabel',
								value:'_countries'.loc(),
								textAlign:SC.ALIGN_CENTER
							})
						}),

						data2: SC.View.design({
							layout:{top:110,height:100,right:30,width:175},
							childViews: 'figure label'.w(),
							classNames: 'dataFigureHolder',
							
							figure: Klb.DisplayTextView.design({
								layout:{top:0,height:50},
								classNames: 'dataFigure',
								value:'124',
								textAlign:SC.ALIGN_CENTER
							}),
							label: Klb.DisplayTextView.design({
								layout:{top:40,height:24},
								classNames: 'dataFigureLabel',
								value:'_partners'.loc(),
								textAlign:SC.ALIGN_CENTER
							})
						}),
						
						data3: SC.View.design({
							layout:{top:190,height:100,centerX:0,width:350},
							childViews: 'figure label'.w(),
							classNames: 'dataFigureHolder',
							
							figure: Klb.DisplayTextView.design({
								layout:{top:0,height:50},
								classNames: 'dataFigure',
								value:'462,826',
								textAlign:SC.ALIGN_CENTER
							}),
							label: Klb.DisplayTextView.design({
								layout:{top:40,height:24},
								classNames: 'dataFigureLabel',
								value:'_entrepreneurs helped'.loc(),
								textAlign:SC.ALIGN_CENTER
							})
						}),

						data4: SC.View.design({
							layout:{top:270,height:100,centerX:0,width:350},
							childViews: 'figure label'.w(),
							classNames: 'dataFigureHolder',
							
							figure: Klb.DisplayTextView.design({
								layout:{top:0,height:50},
								classNames: 'dataFigure',
								value:'$178,320,635',
								textAlign:SC.ALIGN_CENTER
							}),
							label: Klb.DisplayTextView.design({
								layout:{top:40,height:24},
								classNames: 'dataFigureLabel',
								value:'_in loans'.loc(),
								textAlign:SC.ALIGN_CENTER
							})
						})												
					})
				})
			}),
			
			sep2: SC.View.design({
				layout: {top:1570,height:25,centerX:0,width:680},
				classNames: 'separator'
			}),
			
			kefWhy: SC.View.design({
				layout: {top:1620,left:20,right:20},
				childViews: 'title content'.w(),
				
				title: Klb.DisplayTextView.design({
					layout: {top:0,height:30,left:0,right:0},
					value: '_Why Kiva en Français?'.loc(),
					classNames: 'aboutSectionHeader'
				}),
				content: SC.View.design({
					layout: {top:30,height:250,left:0,right:0},
					childViews: 'detailText logo'.w(),
					
					detailText: SC.View.design({
						layout: {top:0,bottom:0,left:300,right:0},
						childViews: 'paraText'.w(),
						
						paraText: Klb.DisplayTextView.design({
							layout: {top:0}, 
							value: '<div>'
								+'*kefWhy_para_1'.loc()
								+'</div><div>&nbsp;</div><div>'
								+'*kefWhy_para_2'.loc()
								+'</div><div>&nbsp;</div><div>'
								+'*kefWhy_para_3'.loc()
								+'</div>'
						})
					}),
					
					logo: SC.ImageView.design({
						layout: {centerY:-30,height:250*0.4,left:30,width:500*0.4},
						value: sc_static('images/kef_logo_500.png')
					})
				})
			}),
			
			sep3: SC.View.design({
				layout: {top:1900,height:25,centerX:0,width:680},
				classNames: 'separator'
			}),
			
			contacts: SC.View.design({
				layout: {top:1950,left:20,right:20},
				childViews: 'title email twitter'.w(),
				
				title: Klb.DisplayTextView.design({
					layout: {top:0,height:30,left:0,right:0},
					value: '_Contact'.loc(),
					classNames: 'aboutSectionHeader'
				}),
				email: Klb.DisplayTextView.design({
					layout: {top:40,height:30,left:10,right:0},
					classNames: 'aboutContactLink',
					value: 'Email: <a href="mailto:info@kivaenfrancais.org">info@kivaenfrancais.org</a>'.loc()
				}),
				twitter: Klb.DisplayTextView.design({
					layout: {top:40,height:30,left:300,right:0},
					classNames: 'aboutContactLink',
					value: 'Twitter: <a href="http://twitter.com/kivaenfrancais" target="_blank">@kivaenfrancais</a>'.loc()
				})
			}),

			sep4: SC.View.design({
				layout: {top:2020,height:25,centerX:0,width:680},
				classNames: 'separator'
			}),
			
			partners: SC.View.design({
				layout: {top:2070,left:20,right:20},
				childViews: 'title logo1 logo2 logo3 logo4 logo5'.w(),
				
				title: Klb.DisplayTextView.design({
					layout: {top:0,height:30,left:0,right:0},
					value: '_Our Partners'.loc(),
					classNames: 'aboutSectionHeader'
				}),
				logo1: SC.ImageView.design({
					layout: {top:50,height:53,centerX:0,width:449},
					value: sc_static('partner_danoneCommunities.png')
				}),
				logo2: SC.ImageView.design({
					layout: {top:115,height:81,left:120,width:183},
					value: sc_static('partner_laser.png')
				}),
				logo3: SC.ImageView.design({
					layout: {top:120,height:70,right:120,width:224},
					value: sc_static('partner_greenwichConsulting.png')
				}),
				logo4: SC.ImageView.design({
					layout: {top:227,height:52,left:150,width:181},
					value: sc_static('partner_eyeka.png')
				}),
				logo5: SC.ImageView.design({
					layout: {top:210,height:87,right:200,width:111},
					value: sc_static('partner_mtv.png')
				})				
			})
		
		})})})
	})
});

//contentView: Klb.StaticContentView.design({
//	content: '<div class="klb-static-content">'
//		+ '<h1>' + "_What_is_Kiva?".loc() + '</h1>'
//		+ '<img style="float:left;margin-right:25px;margin-bottom:20px" src="http://l3-1.kiva.org/r21681/images/logoLeafy3.gif" height="60" width="113" />'
//		+ '*aboutContent'.loc() + '</div>',
//}),
