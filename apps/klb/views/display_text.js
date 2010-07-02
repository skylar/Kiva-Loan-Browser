// ==========================================================================
// Project:   Klb
// Copyright: 2010 Kiva en Français
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/** @class

	DisplayTextView is a content-oriented version of a label view (when text is
	more characteristic of traditional web content than app controls/labels).
*/

Klb.DisplayTextView = SC.LabelView.extend({
  isTextSelectable: YES,
  escapeHTML: NO,
  textAlign: null,
  fontWeight: null,

	_TEMPORARY_CLASS_HASH: {},
	
	render: function(context, firstTime) {
	  var value = this.get('displayValue'),
	      icon = this.get('icon'),
	      hint = this.get('hintValue'),
	      classes, stylesHash, text,
	      iconChanged = false, textChanged = false;
	  
	  if (icon) {
	    var url = (icon.indexOf('/')>=0) ? icon : SC.BLANK_IMAGE_URL,
	        className = (url === icon) ? '' : icon ;
	    icon = '<img src="'+url+'" alt="" class="icon '+className+'" />';
	    if(icon!==this._iconCache) {
	      this._iconCache=icon;
	      iconChanged = true;
	    }
	  }
	  
	  if (hint && (!value || value === '')) {
	    text = '<span class="sc-hint">'+hint+'</span>';
	  }else{
	    text = value;
	  }
	  if(text!==this._textCache) {
	    this._textCache=text;
	    textChanged = true;
	  }
	      
	  if(firstTime || textChanged || iconChanged){
	    context.push(icon, text);
	  }
	  
	  // only set styles if set
	  stylesHash = {};
	  if(this.get('textAlign')) { stylesHash['text-align'] = this.get('textAlign'); }
	  if(this.get('fontWeight')) { stylesHash['font-weight'] = this.get('fontWeight'); }
	         
	  // if we are editing, set the opacity to 0
	  if (this.get('isEditing')) stylesHash['opacity']=0;
	  context.addStyle(stylesHash);
	  
	  classes = this._TEMPORARY_CLASS_HASH;
	  classes.icon = !!this.get('icon');
	  context.setClass(classes);
	}
});

Klb.DisplayTextView.classNames = ['sc-view','sc-display-text-view'];
