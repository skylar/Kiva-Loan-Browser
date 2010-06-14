Klb.WebView = SC.WebView.extend({

	didCreateLayer: function() {
	    var f = this.$('iframe');
	    // Attach an onload event to the iframe.
	    SC.Event.add(f, 'load', this, this.iframeDidLoad);
	  },
	  
	iframeDidLoad: function() {}
	
});