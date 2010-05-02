// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

require('views/static_content');

// This page describes the main user interface for your application.
Klb.aboutPage = SC.Page.design({

	mainView: SC.ScrollView.design({
		hasHorizontalScroller: NO,
		layout: {top:0,bottom:0,left:0,right:0},
			
		contentView: Klb.StaticContentView.design({
			content: '<div class="klb-static-content">'
				+ '<h1>' + "_What_is_Kiva?".loc() + '</h1>'
				+ '<img style="float:left;margin-right:25px;margin-bottom:20px" src="http://l3-1.kiva.org/r21681/images/logoLeafy3.gif" height="60" width="113" />'
				+ '*aboutContent'.loc() + '</div>',
		}),
	}),
});