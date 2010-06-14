/*globals Klb */

Klb.RegSidebarView = SC.View.extend({
  
  classNames: ['regSidebar'],
 	backgroundColor: 'white',
 	
  render: function(context, firstTime) {
    var content = this.get('content');
    
    context
    	.begin('div')
				.addStyle({top:10, height:30, left:10, right:10})
				.addClass('sc-view')
    		.addClass('regSidebarHeader')
      		.push('_Help'.loc())      		
      .end();

		context
			.begin('div')
				.addStyle({top:50, height:32, left:10, right:10})
				.addClass('sc-view')
				.addClass('regSidebarCaption')
				.push('_Use of the english site'.loc() + ':')    		
			.end();
		
		context
			.begin('ol')
//				.addClass('sc-view')
				.addStyle({top:85, left:10, right:10})
				.begin('li').push('_Enter your first name'.loc()).end()
				.begin('li').push('_Enter your last name'.loc()).end()
				.begin('li').push('_Enter your email address'.loc()).end()
				.begin('li').push('_Re-enter your email address'.loc()).end()
				.begin('li').push('_Choose a password between 6 and 12 characters'.loc()).end()
				.begin('li').push('_Confirm the password you chose'.loc()).end()
				.begin('li').push('_If your friend recommended you to loan on Kiva, please enter their email address so that Kiva can thank them!'.loc()).end()
			.end();
		}
});
