// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/** @class

  StaticContentView allows you to display arbitrary HTML content inside your
  view hierarchy.

  Normally, views in SproutCore are absolutely positioned. Their width and
  height are either pre-determined, or specified relative to their enclosing
  view. Occasionally, you may want to display content that is layed out by
  the browser. For example, if you were writing a documentation browser, you
  may want to display the table of contents as an SC.ListView, but the actual
  pages as HTML content.

  This class is most useful when placed inside a ScrollView.

  To use it, simply set the @content@ property to a string of the HTML you
  would like to display.

  @extends SC.View
  @since SproutCore 1.2
  @author Tom Dale
*/

Klb.DisplayTextView = SC.LabelView.extend({
  isTextSelectable: YES
});

Klb.DisplayTextView.classNames = ['sc-view','sc-display-text-view'];
