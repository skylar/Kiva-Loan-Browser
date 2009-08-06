// ==========================================================================
// Project:   Klb.Loan Fixtures
// Copyright: ©2009 Kiva Microfunds
// Licensed under MIT License Terms (see license.js)
// ==========================================================================
/*globals Klb */

sc_require('models/loan');

Klb.Loan.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  // { guid: 1,
  //   firstName: "Michael",
  //   lastName: "Scott" },
  //
	{ guid:1,
		name:"Loan One",
		image_url:"http://s3.kiva.org/img/w325h250/325346.jpg",
		loan_amount:500,
		funded_amount:325
		},
	{ guid:2,
		name:"Loan Two",
		image_url:"http://s3.kiva.org/img/w325h250/325345.jpg",
		loan_amount:500,
		funded_amount:325
		},
	{ guid:3,
		name:"Loan Three",
		image_url:"http://s3.kiva.org/img/w325h250/325344.jpg",
		loan_amount:500,
		funded_amount:325
		}

];
