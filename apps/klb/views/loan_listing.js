/*globals Klb */

Klb.LoanListingView = SC.ListItemView.extend({
  
  didCreateLayer: function() {
    var img = this.$('img');
    if (img && img[0]) {
      if (img[0].width > img[0].height) {
        img.css('height', '100%');
      } else {
        img.css('width', '100%');
      }
    }
  },
  
  render: function(context, firstTime) {
    var content = this.get('content'),
        percentage;
    
    // photo
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ top: 10, left: 10, width: 100, height: 100, overflow: 'hidden' })
        .begin('img')
          .attr('src', 'http://www.kiva.org/img/200/' + content.get('image').id + '.jpg')
        .end()
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
        .push('<span style="font-weight: bold;">Loan Use: </span>', content.get('use'))
      .end();
      
    // country
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ left: 120, top: 78, height: 18 })
        .push('<span style="font-weight: bold;">Country: </span>', content.get('country').country)
      .end();

    // rating
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ left: 120, top: 96, height: 18 })
        .push('<span style="font-weight: bold;">Rating: </span>')
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
        .push('needed out of $', content.get('loanAmount'))
      .end();
  
    // progress
    percentage = content.get('fundedPercentage') + '%';
    context
      .begin('div')
        .addClass('sc-view')
        .addStyle({ right: 10, top: 83, height: 6, width: 75, border: '1px solid #009500' })
        .begin('div')
          .addStyle({ position: 'relative', width: percentage, height: '100%', background: '#0f0' })
        .end()
      .end();
      
  }
  
});
