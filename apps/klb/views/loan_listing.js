/*globals Klb */

Klb.LoanListingView = SC.ListItemView.extend({
    
  render: function(context, firstTime) {
    var content = this.get('content'),
        percentage;
    
    // photo
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({
          top: 10, left: 10, width: 100, height: 100,
          backgroundImage: 'url(http://www.kiva.org/img/200/' + content.get('image').id + '.jpg)',
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
        .push(content.get('sector'))
      .end();
      
    // loan use
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ left: 120, top: 60, height: 18 })
        .push('<span style="font-weight: bold;">','_Loan_Use'.loc(),': </span>', content.get('use'))
      .end();
      
    // country
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ left: 120, top: 78, height: 18 })
        .push('<span style="font-weight: bold;">','_Country'.loc(),': </span>', content.get('country').get('name'))
      .end();

    // rating
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ left: 120, top: 96, height: 18 })
        .push('<span style="font-weight: bold;">','_Rating'.loc(),': </span>' , content.get('partner').get('rating') )
      .end();
    
    // remaining amount  
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ right: 10, top: 31, height: 34, width: 150, fontSize: '24px', textAlign: 'right' })
        .push('$', content.get('remainingAmount'))
      .end();
      
    // total amount  
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ right: 10, top: 63, height: 18, width: 150, textAlign: 'right' })
        .push('_Needed_Out_Of'.loc(),' ', content.get('loanAmount'),'$')
      .end();
  
    // progress
    percentage = content.get('fundedPercentage') + '%';
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ right: 10, top: 83, height: 6, width: 75, border: '1px solid #009500', backgroundColor: '#ffffff' })
        .begin('div')
          .addStyle({ position: 'relative', width: percentage, height: '100%', background: '#0f0' })
        .end()
      .end();
      
  }
  
});
