/*globals Klb */

Klb.FilterItemView = SC.ListItemView.extend({
  
	classNames: ['klb-filter-item-view'],
	
	render: function(context, firstTime) {
		var content = this.get('content'),
			del = this.displayDelegate,
			level = this.get('outlineLevel'),
			indent = this.get('outlineIndent'),
			key, value, working ;

		// custom handling for root-level selectables
		if(level <= 0) { 
			context.addClass('top-level');
			if(!content.get('isEnabled')) {
				context.setClass('disabled');
			}
		}

		// outline level wrapper
		working = context.begin("div").addClass("sc-outline");
		if (level>=0 && indent>0) working.addStyle("left", indent*(level));		

		// handle label -- always invoke
		key = this.getDelegateProperty('contentValueKey', del) ;
		value = (key && content) ? (content.get ? content.get(key) : content[key]) : content ;
		if (value && SC.typeOf(value) !== SC.T_STRING) value = value.toString();
		if (this.get('escapeHTML')) value = SC.RenderContext.escapeHTML(value);
		this.renderLabel(working, value);

		// handle action 
		key = this.getDelegateProperty('listItemActionProperty', del) ;
		value = (key && content) ? (content.get ? content.get(key) : content[key]) : null ;
		if (value) {
			this.renderAction(working, value);
			context.addClass('has-action');
		}
		
		if(!content.get('isEnabled')) { context.addClass('disabled'); }

		context = working.end();
	}

});
