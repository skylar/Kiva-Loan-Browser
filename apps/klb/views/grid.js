/*globals Klb */

Klb.GridView = SC.View.extend({
  
  awake: function() {
  	sc_super();
  	this.invokeLast(this.generateButtons);
  },
  
  generateButtons: function() {
  	var content = this.get('content');
  	
  	if (content) {
  		console.log("CONTENT DEFINED");
  		
	  	// build new button set for content
	  	var childViews = [];
	    var view,
		  len = content.get('length'),
	    margin = 0,
	    left = margin,
	    top = margin,
	    width = 100,
	    maxWidth = this.get('frame').width,
	    i, item, country;
		  
		  this.optionButtons = [];
		  
	    for (i = 0; i < len; ++i) {
	      item = content.objectAt(i);
	      country = item.get('name');
	      view = SC.ButtonView.create({
	        layout: { top: top, left: left, width: width, height: 24 },
	        classNames: 'align-left'.w(),
	        icon: item.get('icon'),
	        title: country,
	        buttonBehavior: SC.TOGGLE_BEHAVIOR,
	        content: item
	      });
	      childViews.push(view);
	      this.optionButtons.push(view);
	      
	      left += width + 6;      
	      if (left + width + margin > maxWidth) {
	        left = margin;
	        top += 24 + 6;
	      }
	    }
		  
	    this.replaceAllChildren(childViews);

		}    
  }
  
});
