// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('models/search');

Klb.Search.FIXTURES = [

	{ guid:1,
		male: false,
		female: true,
		partnerRating: 4.0,
		borrowerCount: 1,
		queryString: ""
		},
	{ guid:2,
		male: true,
		female: true,
		partnerRating: 3.0,
		borrowerCount: 3,
		queryString: ""
		},
	{ guid:3,
		male: true,
		female: true,
		partnerRating: 0.0,
		borrowerCount: 1,
		queryString: "cows"
		}
];
