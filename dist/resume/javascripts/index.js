require.config({paths:{jquery:"jquery-2.1.4.min"}}),define(["jquery"],function(e){e("aside a").on("mouseover",function(i){var n=e(this);n.children().hide().eq(1).show(),n.stop(!0,!1).animate({width:"110px"},150)}),e("aside a").on("mouseout",function(i){var n=e(this);n.children().hide().eq(0).show(),e(this).stop(!0,!1).animate({width:"80px"},150)})});