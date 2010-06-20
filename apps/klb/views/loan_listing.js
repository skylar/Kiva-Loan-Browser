/*globals Klb */

Klb.LoanListingView = SC.ListItemView.extend({
  
  childViews: 'lendButton'.w(),
  
  lendButton: SC.ButtonView.design({
  	layout:{bottom:15,height:20,right:10,width:100},
  	title:'_Lend $25'.loc(),
		action: "lendNow",
		target: "Klb.searchController",
		classNames: 'picker-button lendButton'.w(),
		controlSize: SC.SMALL_CONTROL_SIZE,
		titleMinWidth: 40
  }),
  
  render: function(context, firstTime) {
    var content = this.get('content'),percentage,rating,ratingContext,fullStars,emptyStars,remainder,k;
    
	//	if(firstTime === YES) {
		 this.renderChildViews(context,YES);
	//	}
		
    // photo
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({
          top: 10, left: 10, width: 100, height: 100,
          'backgroundColor':'#dddddd',
          backgroundImage: 'url(http://www.kiva.org/img/w200h200/' + content.get('image').id + '.jpg)',
          '-moz-background-size': 'cover',
          '-webkit-background-size': 'cover',
          '-moz-border-radius': 6,
          '-webkit-border-radius': 6
        })
      .end();
      
    // name
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ fontSize: '18px', left: 120, top: 10, height: 22, fontWeight: 'bold' })
        .push(content.get('name'))
      .end();
      
    // sector
    context
      .begin('div')
      .addClass('sc-view')
      .addStyle({ left: 120, top: 32, height: 18 })
        .push(('_'+content.get('activity')).loc())
      .end();
      
     /* loan use */
//    context
//      .begin('div')
//        .addClass('sc-view')
//        .addStyle({ left: 120, top: 60, height: 18, right:180 })
//        .push('<span style="font-weight: bold;">','_Loan_Use'.loc(),': </span>', content.get('use'))
//      .end();
      
    // country
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ left: 120, width: 330, top: 78, height: 24 })
        .begin('div')
        	.addStyle({
        		background: 'url(' + content.get('country').iconBySize(24)+ ') no-repeat'
        	})
        	.push('<div style="padding:5px 0 3px 30px">',
        	content.get('country').get('name'),'</div>')
        .end()
      .end();

    // rating
		ratingContext = context
		  .begin('div')
		    .addClass('sc-view')
		    .addStyle({ left: 120+340, width:50+(17*5), top: 83, height: 18 })
		    .push('<span style="font-weight: bold;">','_Rating'.loc(),': </span>');

    rating = content.get('partner').get('rating');
    fullStars = Math.floor(rating);
    remainder = rating - fullStars;
    emptyStars = 5 - fullStars;
    
    for(k=0;k<fullStars;k++) {
    	ratingContext.begin('div').addClass('sc-view')
    		.addStyle({left:50 + (k*17),width:17,bottom:0,height:17,
    			border:'0px',
    			backgroundImage:'url('+Klb.imageByName('images/ratingStar_full.png')+')'})
    	.end();
    }
		if(remainder*10 > 5.4) {
			ratingContext.begin('div').addClass('sc-view')
				.addStyle({left:50 + fullStars*17,width:17,bottom:0,height:17,
    			border:'0px',
					backgroundImage:'url('+Klb.imageByName('images/ratingStar_half.png')+')'})
			.end();
			fullStars++;
		}
		for(k=0;k<emptyStars;k++) {
			ratingContext.begin('div').addClass('sc-view')
				.addStyle({left:50+(fullStars+k)*17,width:17,bottom:0,height:17,
    			border:'0px',
					backgroundImage:'url('+Klb.imageByName('images/ratingStar_empty.png')+')'})
			.end();
		}
    ratingContext.end();
    
    // remaining amount  
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ right: 10, top: 10, height: 34, width: 150, fontSize: '24px', textAlign: 'right' })
        .push('$', content.get('remainingAmount'))
      .end();
      
    // total amount  
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ right: 10, top: 43, height: 18, width: 150, textAlign: 'right' })
        .push('_Needed_Out_Of'.loc(),' ','$', content.get('loanAmount'))
      .end();
  
    // progress
    percentage = content.get('fundedPercentage') + '%';
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ right: 10, top: 63, height: 6, width: 75, border: '1px solid #009500', backgroundColor: '#ffffff' })
        .begin('div')
          .addStyle({ position: 'relative', width: percentage, height: '100%', background: '#0f0' })
        .end()
      .end();
  	
  }
  
});
