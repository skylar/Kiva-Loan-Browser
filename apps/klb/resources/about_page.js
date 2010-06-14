// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('views/static_content');
sc_require('views/display_text');

// This page describes the main user interface for your application.
Klb.aboutPage = SC.Page.design({

	mainView: SC.ScrollView.design({
		hasHorizontalScroller: NO,
		layout: {top:0,bottom:0,left:0,right:0},
		
		contentView: SC.View.design({
			layout: {left:0,right:0,top:0,height:2300},
			childViews: 'pageView'.w(),
			classNames: 'contentBackdrop',

			pageView: SC.View.design({
			layout: {top:0,bottom:50,centerX:0,width:800},
			childViews: 'pageContent'.w(),
			classNames: 'contentPage aboutSection'.w(),
			
			pageContent: SC.View.design({
			layout: {top:20,bottom:20,left:30,right:30},
			childViews: 'mfHow sep1 kivaWhat sep2 kefWhy sep3 contacts sep4 partners'.w(),
			
			mfHow: SC.View.design({
				layout: {top:20,height:640,left:0,right:0},
				childViews: 'title photo content'.w(),
				
				title: Klb.DisplayTextView.design({
					layout: {top:0,height:30,left:0,right:0},
					value: '_How Microfinance Began'.loc(),
					classNames: 'aboutSectionHeader',
					fontWeight: SC.BOLD_WEIGHT,
				}),

				photo: SC.ImageView.design({
					layout: {top:20,height:507,right:0,width:400},
					value: sc_static('images/muhammad_yunus.jpg'),
				}),
				
				content: SC.View.design({
					layout: {top:40,left:0,right:0},
					childViews: 'detailText caption1 caption2'.w(),
					
					detailText: SC.View.design({
						layout: {top:0,left:0,width:300},
						childViews: 'para1 para2 para3 para4'.w(),
						
						para1: Klb.DisplayTextView.design({
							layout: {top:90*0}, value: '*mfHow_para_1'.loc() }),
						para2: Klb.DisplayTextView.design({
							layout: {top:90*1}, value: '*mfHow_para_2'.loc() }),
						para3: Klb.DisplayTextView.design({
							layout: {top:90*2}, value: '*mfHow_para_3'.loc() }),
						para4: Klb.DisplayTextView.design({
							layout: {top:90*3+20}, value: '*mfHow_para_4'.loc() }),							
					}),
					
					caption1: Klb.DisplayTextView.design({
						layout: {top:390,height:100,left:0,width:300},
						classNames: 'caption',
						value: '*about_captionYunus1'.loc(),
					}),					

					caption2: Klb.DisplayTextView.design({
						layout: {top:510,height:80,left:0,width:300},
						classNames: 'caption',
						value: '*about_captionYunus2'.loc(),
					}),					
					
				}),
			}),
			
			sep1: SC.View.design({
				layout: {top:620,height:25,centerX:0,width:680},
				classNames: 'separator',
			}),
				
			kivaWhat: SC.View.design({
				layout: {top:680,left:0,right:0},
				childViews: 'title content'.w(),
				
				title: Klb.DisplayTextView.design({
					layout: {top:0,height:30,left:0,right:0},
					value: '_What Is Kiva?'.loc(),
					classNames: 'aboutSectionHeader',
					fontWeight: SC.BOLD_WEIGHT,
				}),
				content: SC.View.design({
					layout: {top:40,left:0,right:0},
					childViews: 'infographic detailText caption graphicBox'.w(),
					
					infographic: SC.View.design({
						layout:{top:0,height:430,centerX:0,width:763},
						childViews: 'clipview'.w(),
										
						clipview: SC.ImageView.design({
							layout:{top:-35,height:591,centerX:0,width:763},
							value: sc_static('images/prehome-illustration.png'),
						})
					}),
					
					caption: Klb.DisplayTextView.design({
						layout: {top:490,height:80,left:0,width:400},
						classNames: 'caption',
						value: '_Kiva connects people through lending to alleviate poverty.'.loc(),
					}),
					
					detailText: SC.View.design({
						layout: {top:555,left:0,width:400},
						childViews: 'para1 para2 para3 para4'.w(),
						
						para1: Klb.DisplayTextView.design({
							layout: {top:0}, value: '*kivaWhat_para_1'.loc() }),
						para2: Klb.DisplayTextView.design({
							layout: {top:50}, value: '*kivaWhat_para_2'.loc() }),
						para3: Klb.DisplayTextView.design({
							layout: {top:70+50}, value: '*kivaWhat_para_3'.loc() }),
						para4: Klb.DisplayTextView.design({
							layout: {top:70*2+50}, value: '*kivaWhat_para_4'.loc() }),							
					}),
					
					graphicBox: SC.View.design({
						layout: {top:490,right:0,width:350},
						childViews: 'logo data1 data2 data3 data4'.w(),
						
						logo: SC.ImageView.design({
							layout: {top:0,height:90,centerX:0,width:170},
							value: 'http://l3-1.kiva.org/r23214/images/logoLeafy3.gif',
						}),
						
						data1: SC.View.design({
							layout:{top:110,height:100,left:30,width:175},
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
							layout:{top:110,height:100,right:30,width:175},
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
							layout:{top:180,height:100,centerX:0,width:350},
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
							layout:{top:260,height:100,centerX:0,width:350},
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
			
			sep2: SC.View.design({
				layout: {top:1550,height:25,centerX:0,width:680},
				classNames: 'separator',
			}),
			
			kefWhy: SC.View.design({
				layout: {top:1600,left:0,right:0},
				childViews: 'title content'.w(),
				
				title: Klb.DisplayTextView.design({
					layout: {top:0,height:30,left:0,right:0},
					value: '_Why Kiva en Français?'.loc(),
					classNames: 'aboutSectionHeader',
					fontWeight: SC.BOLD_WEIGHT,
				}),
				content: SC.View.design({
					layout: {top:40,left:0,right:0},
					childViews: 'detailText logo'.w(),
					
					detailText: SC.View.design({
						layout: {top:0,left:300,right:0},
						childViews: 'para1 para2 para3'.w(),
						
						para1: Klb.DisplayTextView.design({
							layout: {top:70*0}, value: '*kefWhy_para_1'.loc() }),
						para2: Klb.DisplayTextView.design({
							layout: {top:70*1}, value: '*kefWhy_para_2'.loc() }),
						para3: Klb.DisplayTextView.design({
							layout: {top:70+50}, value: '*kefWhy_para_3'.loc() }),
					}),
					
					logo: SC.ImageView.design({
						layout: {top:14,height:70*1.7,left:30,width:120*1.7},
						value: sc_static('images/kef_logo.png'),
					}),
				}),
			}),
			
			sep3: SC.View.design({
				layout: {top:1815,height:25,centerX:0,width:680},
				classNames: 'separator',
			}),
			
			contacts: SC.View.design({
				layout: {top:1865,left:0,right:0},
				childViews: 'title addresses'.w(),
				
				title: Klb.DisplayTextView.design({
					layout: {top:0,height:30,left:0,right:0},
					value: '_Contact'.loc(),
					classNames: 'aboutSectionHeader',
					fontWeight: SC.BOLD_WEIGHT,
				}),
				addresses: Klb.DisplayTextView.design({
					layout: {top:40,height:30,left:0,right:0},
					value: 'info@kivaenfrancais.org'.loc(),
				}),
			}),

			sep4: SC.View.design({
				layout: {top:1940,height:25,centerX:0,width:680},
				classNames: 'separator',
			}),
			
			partners: SC.View.design({
				layout: {top:1980,left:0,right:0},
				childViews: 'title logo1 logo2 logo3'.w(),
				
				title: Klb.DisplayTextView.design({
					layout: {top:0,height:30,left:0,right:0},
					value: '_Our Partners'.loc(),
					classNames: 'aboutSectionHeader',
					fontWeight: SC.BOLD_WEIGHT,
				}),
				logo1: SC.ImageView.design({
					layout: {top:50,height:53,centerX:0,width:449},
					value: sc_static('partner_danoneCommunities.png'),
				}),
				logo2: SC.ImageView.design({
					layout: {top:115,height:81,left:120,width:183},
					value: sc_static('partner_laser.png'),
				}),
				logo3: SC.ImageView.design({
					layout: {top:120,height:70,right:120,width:224},
					value: sc_static('partner_greenwichConsulting.png'),
				}),
			}),
		
		}),}),}),
	}),
});

//contentView: Klb.StaticContentView.design({
//	content: '<div class="klb-static-content">'
//		+ '<h1>' + "_What_is_Kiva?".loc() + '</h1>'
//		+ '<img style="float:left;margin-right:25px;margin-bottom:20px" src="http://l3-1.kiva.org/r21681/images/logoLeafy3.gif" height="60" width="113" />'
//		+ '*aboutContent'.loc() + '</div>',
//}),
