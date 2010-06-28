// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('views/static_content');

// This page describes the main user interface for your application.
Klb.demoPage = SC.Page.design({

	mainView: SC.View.design({
		layout: {top:0,bottom:0,left:0,right:0},
		childViews: 'displayArea'.w(),

//		selectionList: SC.ScrollView.design({   
//			hasHorizontalScroller: NO,
//	    layout: { top: 0, bottom: 0, left: 0, width:250 },
//	    backgroundColor: 'white',
//	
//			contentView: SC.ListView.design({
//			  contentBinding: 'Klb.demosController.arrangedObjects',
	//			  selectionBinding: 'Klb.loansController.selection',
//				contentValueKey: "name",
//				rowHeight: 50,
//				actOnSelect: YES,
//	      action: "selectDemo"
//			})
//		}),
		
		displayArea: SC.View.design({
	    layout: { top: 10, bottom: 0, centerX:0, width:800 },
			childViews: 'videoView'.w(),
			
			videoView: Klb.StaticContentView.design({
				content: '<p><p>'+
					'_Demos coming soon… for now, enjoy this introduction to Kiva through the story of Pedro, a farmer in Boliva:'.loc() +
					'</p>'+
					'<div class="klb-static-content"><center>' +
					'<h2>' +
					'_The Pedro Story'.loc() +
					'</h2><p>'+
					'<object width="601" height="338" style="border:1px solid gray;"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=12893084&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=85B100&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=12893084&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=85B100&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="601" height="338"></embed></object>' + 
					'</center></div>'
			})
		})
	})
});