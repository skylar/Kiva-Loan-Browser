/**
 * Klb.LoanListingView
 * - a specialized view to render a loan object
 */

/** @class 

	TODO: Document LoanListingView

*/
Klb.LoanListingView = SC.View.extend(
	SC.StaticLayout,SC.Border,
	{
		classNames: ['klb-llv'],
		layout: {top:0,left:0},
		borderStyle: SC.BORDER_BOTTOM,
		
		// Required properties (via SC.CollectionView)
		content: null,
		isEnabled: true,
		isSelected: false,
		
		// Custom properties
		// -NONE
		
		// Overrides
		render: function(context,firstTime) {
			var content = this.get('content'),
				nameLabel, picture, amountLabel;
			
			nameLabel = context.begin('div').addClass('klb-llv-name')
				.push(content.get('name')).end();
			amountLabel = context.begin('div').addClass('klb-llv-amount')
					.push('$').push(content.get('funded_amount')).end();
			
//			this.appendChild(SC.LabelView.create({
//				value:content.get('name')
//				,classNames:'klb-llv-name'
//				}));
//			this.appendChild(SC.LabelView.create({
//				value:content.get('funded_amount')
//				,layout:{top:30}
//				,classNames:'klb-llv-amount'
//				}));
//			this.appendChild(SC.SeparatorView.create());
		}
	}
);