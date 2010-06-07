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
		childViews: 'selectionList displayArea'.w(),

		selectionList: SC.ScrollView.design({   
			hasHorizontalScroller: NO,
	    layout: { top: 0, bottom: 0, left: 0, width:250 },
	    backgroundColor: 'white',
	
			contentView: SC.ListView.design({
			  contentBinding: 'Klb.demosController.arrangedObjects',
	//			  selectionBinding: 'Klb.loansController.selection',
				contentValueKey: "name",
				rowHeight: 50,
				actOnSelect: YES,
	      action: "selectDemo"
			})
		}),
		
		displayArea: SC.View.design({
	    layout: { top: 0, bottom: 0, left: 250, right:0 },
			childViews: 'videoView'.w(),
			
			videoView: Klb.StaticContentView.design({
				content: '<div class="klb-static-content" ><center>' +
					'<object width="600" height="320" style="border:1px solid gray;"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=5650393&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1" /><embed style="border:1px solid gray;" src="http://vimeo.com/moogaloop.swf?clip_id=5650393&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="600" height="360"></embed></object>' + '</center></div>',
			}),
		}),			
	}),
});