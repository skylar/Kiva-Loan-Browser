// ==========================================================================
// Project:   Klb
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('models/loan');

Klb.Loan.FIXTURES = [
	
	{	"id":128016,
		"name":"Nehme",
		"status":"fundraising",
		"loan_amount":1000,
		"funded_amount":0,
		"basket_amount":0,
		"borrower_count":1,
		"image":{"id":367342,"template_id":1},
		"activity":"Restaurant",
		"sector":"Food",
		"use":" To buy new tools ",
		"location":
			{ "country_code":"LB",
				"country":"Lebanon",
				"geo":{"level":"country","pairs":"33.833333 35.833333","type":"point"}
		  },
		"partner_id":115,
		"posted_date":"2009-08-10T08:20:07Z",
		"description":{"languages":["en"]}
	},
	{	"id":128015,
		"name":"Eunice Lumanya",
		"status":"fundraising",
		"loan_amount":150,
		"funded_amount":0,
		"basket_amount":0,
		"borrower_count":1,
		"image":{"id":367340,"template_id":1},
		"activity":"Poultry",
		"sector":"Agriculture",
		"use":"To purchase chickens",
		"location":{
			"country_code":"KE",
			"country":"Kenya",
			"town":"Harambee-mumias",
			"geo":{"level":"country","pairs":"1 38","type":"point"}},
		"partner_id":138,
		"posted_date":"2009-08-10T08:20:07Z",
		"description":{"languages":["en"]}
	},
	{	"id":128011,
		"name":"Paul Ssengendo's Group",
		"status":"fundraising",
	  "loan_amount":4750,
	  "funded_amount":0,
	  "basket_amount":0,
	  "borrower_count":26,
	  "image":{"id":367329,"template_id":1},
	  "activity":"Motorcycle Transport",
	  "sector":"Transportation",
	  "use":"Repairing his motorcycle for better services.",
	  "location":{
	  	"country_code":"UG",
	  	"country":"Uganda",
	  	"town":"Jinja",
	  	"geo":{"level":"town","pairs":"0.583333 33.25","type":"point"}
	  	},
	  "partner_id":84,
	  "posted_date":"2009-08-10T08:20:07Z",
	  "description":{"languages":["en"]}
	},
	{	"id":128012,
		"name":"Sanaa",
		"status":"fundraising",
		"loan_amount":1200,
		"funded_amount":25
		,"basket_amount":25,
		"borrower_count":1,
		"image":{"id":367333,"template_id":1},
		"activity":"Retail",
		"sector":"Retail",
		"use":"buy more merchandise ",
		"location":{
			"country_code":"LB",
			"country":"Lebanon",
			"geo":{"level":"country","pairs":"33.833333 35.833333","type":"point"}
			},
		"partner_id":115,
		"posted_date":"2009-08-10T08:00:07Z",
		"description":{"languages":["en"]}
	},
  {"id":128005,"name":"Yassine","status":"fundraising","loan_amount":1200,"funded_amount":0,"basket_amount":0,"borrower_count":1,"image":{"id":367319,"template_id":1},"activity":"Services","sector":"Services","use":"buy an air compressor","location":{"country_code":"LB","country":"Lebanon","geo":{"level":"country","pairs":"33.833333 35.833333","type":"point"}},"partner_id":115,"posted_date":"2009-08-10T07:50:06Z","description":{"languages":["en"]}
  },
  {"id":128006,"name":"Mohamad","status":"fundraising","loan_amount":800,"funded_amount":25,"basket_amount":0,"borrower_count":1,"image":{"id":367322,"template_id":1},"activity":"Services","sector":"Services","use":"to buy merchandise ","location":{"country_code":"LB","country":"Lebanon","geo":{"level":"country","pairs":"33.833333 35.833333","type":"point"}},"partner_id":115,"posted_date":"2009-08-10T07:50:06Z","description":{"languages":["en"]}
  },
  {"id":128008,"name":"Tony","status":"fundraising","loan_amount":1200,"funded_amount":0,"basket_amount":25,"borrower_count":1,"image":{"id":367324,"template_id":1},"activity":"Transportation","sector":"Transportation","use":"To perform maintenance on his van","location":{"country_code":"LB","country":"Lebanon","geo":{"level":"country","pairs":"33.833333 35.833333","type":"point"}},"partner_id":115,"posted_date":"2009-08-10T07:50:06Z","description":{"languages":["en"]}
  },
  {"id":128001,"name":"Muon Sokin","status":"fundraising","loan_amount":200,"funded_amount":25,"basket_amount":0,"borrower_count":1,"image":{"id":367278,"template_id":1},"activity":"Transportation","sector":"Transportation","use":"To buy a used motorcar ","location":{"country_code":"KH","country":"Cambodia","town":"Kompong Cham","geo":{"level":"town","pairs":"12 105.5","type":"point"}},"partner_id":106,"posted_date":"2009-08-10T07:40:05Z","description":{"languages":["en"]}
  }
];
