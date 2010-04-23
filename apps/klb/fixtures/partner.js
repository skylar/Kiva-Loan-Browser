// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('models/partner');

Klb.Partner.FIXTURES = [
	{	"id":115,
		"name":"Ameen s.a.l.",
		"status":"active",
		"rating":5,
		"image":{"id":151750,"template_id":1},
		"start_date":"2008-09-16T21:40:18Z",
		"countries":[
			{"iso_code":"LB","region":"Middle East","name":"Lebanon","location":{"geo":{"level":"country","pairs":"33.833333 35.833333","type":"point"}}}
			],
		"delinquency_rate":3.1649298456605,
		"default_rate":0,
		"total_amount_raised":1189400,
		"loans_posted":1120
	},
	{	"id":138,"name":"Small and Micro Enterprise Programme (SMEP)",
		"status":"pilot","rating":2.5,"image":{"id":328197,"template_id":1},"start_date":"2009-07-19T04:50:04Z",
		"countries":[{"iso_code":"KE","region":"Africa","name":"Kenya","location":{"geo":{"level":"country","pairs":"1 38","type":"point"}}}],
		"delinquency_rate":0,
		"default_rate":0,
		"total_amount_raised":177975,
		"loans_posted":370
	},
	{	"id":84,"name":"Pearl Microfinance Limited",
		"status":"active","rating":3.7,"image":{"id":58016,"template_id":1},"start_date":"2007-09-09T15:20:03Z",
		"countries":[{"iso_code":"UG","region":"Africa","name":"Uganda","location":{"geo":{"level":"country","pairs":"2 33","type":"point"}}}],
		"delinquency_rate":0,
		"default_rate":0,
		"total_amount_raised":4006150,
		"loans_posted":1680
	},
	{	"id":106,"name":"Hattha Kaksekar Limited (HKL), a partner of Save the Children",
		"status":"active","rating":5,"image":{"id":168135,"template_id":1},"start_date":"2008-02-14T21:40:06Z",
		"countries":[{"iso_code":"KH","region":"Asia","name":"Cambodia","location":{"geo":{"level":"country","pairs":"13 105","type":"point"}}},{"iso_code":"TH","region":"Asia","name":"Thailand","location":{"geo":{"level":"country","pairs":"15 100","type":"point"}}}],
		"delinquency_rate":0.031157847882936,
		"default_rate":0,
		"total_amount_raised":2074325,
		"loans_posted":3503
	}
];
