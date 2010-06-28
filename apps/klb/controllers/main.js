// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

Klb.mainController = SC.ObjectController.create({
	
	currentSection: null,	
	shouldTrackNavigation: false,
	
	showPrehome: function() { 
		this.set('currentSection', Klb.getPath('prehomePage.mainView'));
	},
	
	showLending: function() { 
		this.set('currentSection', Klb.getPath('lendingPage.mainView'));

		// ANALYTICS: track the cta-clicks (promo conversion)
		_gaq.push(['_trackEvent', 'conversion', 'cta-ChooseProject']);
	},
	
	setPrehomeBypassCookie: function() {
		var expireDate, today = new Date();
		today.setTime( today.getTime() );
		expireDate = new Date( today.getTime() + (1000*60*60*24*120));
		document.cookie = "pv=1;path=/;expires=" + expireDate.toGMTString();
	},
	
	checkPrehomeBypassCookie: function() {
		var pvCookie = SC.Cookie.find('pv');
		if(pvCookie && pvCookie.get('value')) { return true; }
		
		return false;
	},
	
	checkSectionStatus: function() {
		var showPromo = NO,
			currentSection = this.get('currentSection'),
			sectionLabel = '(unknown)';
		
		// set the prehome no-show cookie
		if(currentSection === Klb.getPath('lendingPage.mainView') && !this.checkPrehomeBypassCookie()) {
			this.setPrehomeBypassCookie();
		}
		// check if we should show the promo button
		if(currentSection === Klb.getPath('prehomePage.mainView')) {
			showPromo = YES;
		}
		Klb.getPath('mainPage.appPane.topbarView.rightPromo').set('isVisible',showPromo);
		
		// ANALYTICS: track navigation between sections...
		if(this.get('shouldTrackNavigation') && currentSection !== null) {
			if(currentSection === Klb.getPath('lendingPage.mainView')) {
				sectionLabel = 'lending';
			} else if(currentSection === Klb.getPath('aboutPage.mainView')) {
				sectionLabel = 'about';
			} else if(currentSection === Klb.getPath('prehomePage.mainView')) {
				sectionLabel = 'prehome';
			} else if(currentSection === Klb.getPath('registerPage.mainView')) {
				sectionLabel = 'register';
			} else if(currentSection === Klb.getPath('demoPage.mainView')) {
				sectionLabel = 'demo';
			}
			_gaq.push(['_trackEvent', 'navigation', sectionLabel]);		
		}
	}.observes('currentSection'),
	
	getCookie: function(name) {
		// first we'll split this cookie up into name/value pairs
		// note: document.cookie only returns name=value, not the other components
		var a_all_cookies = document.cookie.split( ';' );
		var a_temp_cookie = '';
		var cookie_name = '';
		var cookie_value = '';
		var b_cookie_found = false; // set boolean t/f default f
	
		for ( i = 0; i < a_all_cookies.length; i++ )
		{
			// now we'll split apart each name=value pair
			a_temp_cookie = a_all_cookies[i].split( '=' );
		
			// and trim left/right whitespace while we're at it
			cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
	
			// if the extracted name matches passed check_name
			if ( cookie_name == name )
			{
				b_cookie_found = true;
				// we need to handle case where cookie has no value but exists (no = sign, that is):
				if ( a_temp_cookie.length > 1 )
				{
					cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
				}
				// note that in cases where cookie is initialized but no value, null is returned
				return cookie_value;
			}
			a_temp_cookie = null;
			cookie_name = '';
		}
		if ( !b_cookie_found )
		{
			return null;
		}
	}	
});