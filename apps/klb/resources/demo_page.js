// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('views/static_content');

// This page describes the main user interface for your application.
Klb.demoPage = SC.Page.design({

	mainView: SC.ScrollView.design({
		hasHorizontalScroller: NO,
		layout: {top:0,bottom:0,left:0,right:0},
		
		contentView: Klb.StaticContentView.design({
			content: '<div class="klb-static-content"><center>' +
				'<object width="600" height="320"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=5650393&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=5650393&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="600" height="360"></embed></object>' + '</center></div>',
		}),
	}),
});