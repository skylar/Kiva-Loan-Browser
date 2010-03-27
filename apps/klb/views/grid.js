/*globals Klb */

Klb.LoanListingView = SC.View.extend({
  
  createChildViews: function() {
    var content = this.get('content'),
        len = content.get('length'),
        margin = 3*6,
        left = margin,
        top = margin,
        width = 100,
        maxWidth = this.get('frame').width,
        i, item, country;
    
    this.beginPropertyChanges();
    
    this.childViews = [];
    
    for (i = 0; i < len; ++i) {
      item = content.objectAt(i);
      country = item.name;
      this[country] = this.createChildView(SC.ButtonView, {
        layout: { top: top, left: left, width: width, height: 24 },
        classNames: 'align-left'.w(),
        icon: item.icon,
        title: country
      });
      this.childViews.push(this[country]);
      
      left += width + 6;      
      if (left + width + margin > maxWidth) {
        left = margin;
        top += 24 + 6;
      }
    }
    
    this.endPropertyChanges();
    
    return this;
  }
  
});
