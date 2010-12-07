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
    var content = this.get('content'),percentage,rating,ratingContext,fullStars,emptyStars,remainder,k,image,use;

		console.log("RENDER for " + content.get('id'));    
    image = content.get('image');
    if(!image) { image = {id:0,'template_id':1}; }
    
    if(content.get('use_intl') && content.get('use_intl').texts.hasOwnProperty('__INTL__'.loc())) {
    	use = content.get('use_intl').texts['__INTL__'.loc()];
    } else {
    	use = content.get('use');
    }

	if (firstTime === YES) {
		this.renderChildViews(context,firstTime);
		
    // photo
        context
          .begin('div')
            .addClass('sc-view')
            .addStyle({
              top: 10, left: 10, width: 100, height: 100,
              'backgroundColor':'#dddddd',
              backgroundImage: 'url(http://www.kiva.org/img/w200h200/' + image.id + '.jpg)',
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
            .addStyle({ fontSize: '18px', left: 120, top: 10, height: 26, fontWeight: 'bold' })
            .push(content.get('name'))
          .end();
          
        // sector
        context
          .begin('div')
          .addClass('sc-view')
          .addStyle({ left: 120, top: 34, height: 18 })
            .push(('_'+content.get('activity')).loc())
          .end();
          
        //  loan use
        context
          .begin('div')
            .addClass('sc-view')
            .addStyle({ left: 120, top: 60, height: 18, right:180 })
            .push('<span style="font-weight: bold;">','_Loan_Use'.loc(),': </span>', use)
          .end();
          
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
    		    .addStyle({ right: 180, width:160+(17*5), top: 83, height: 18 })
    		    .begin('div')
    		    .addStyle({ right:5*17+10, width:150, top:5,height:18,textAlign:'right'
    		    	,fontWeight:'bold'}).push('_Rating'.loc()).end();
    
        rating = content.get('partner').get('rating');
        fullStars = Math.floor(rating);
        halfStar = ((rating - fullStars) * 10) > 5.4;
        emptyStars = 5 - fullStars;
        if(halfStar) { emptyStars--; }
        
    		for(k=0;k<emptyStars;k++) {
    			ratingContext.begin('div').addClass('sc-view')
    				.addStyle({right:k*17,width:17,bottom:0,height:17,
        			border:'0px',
    					backgroundImage:'url('+Klb.imageByName('images/ratingStar_empty.png')+')'})
    			.end();
    		}
    		if(halfStar) {
    			ratingContext.begin('div').addClass('sc-view')
    				.addStyle({right:emptyStars*17,width:17,bottom:0,height:17,
        			border:'0px',
    					backgroundImage:'url('+Klb.imageByName('images/ratingStar_half.png')+')'})
    			.end();
    			emptyStars++;
    		}
        for(k=0;k<fullStars;k++) {
        	ratingContext.begin('div').addClass('sc-view')
        		.addStyle({right:((emptyStars+k)*17),width:17,bottom:0,height:17,
        			border:'0px',
        			backgroundImage:'url('+Klb.imageByName('images/ratingStar_full.png')+')'})
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
            .addStyle({ right: 10, top: 63, height: 6, width: 75, border: '1px solid #555', backgroundColor: '#ffffff' })
            .begin('div')
              .addStyle({ position: 'relative', width: percentage, height: '100%', background: 'rgb(98,133,37)' })
            .end()
          .end();
  	} else {
	 // @todo: in order to support dynamic updates on content bindings we need to update content in the structure
	// when firstTime === NO (for now, if we refresh records from the datasource they won't get update in these views)
	}
  }
  
});
