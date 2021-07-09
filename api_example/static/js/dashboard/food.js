(function($) {
    "use strict" 


 var dzChartlist = function(){
	
	var screenWidth = $(window).width();
	var donutChart = function(){
		$("span.donut").peity("donut", {
			width: "80",
			height: "80"
		});
	}
	var peityLine = function(){
		$(".peity-line").peity("line", {
			fill: ["rgba(30, 251, 242, 0)"], 
			stroke: '#1e33f2', 
			strokeWidth: '4', 
			width: "100",
			height: "32"
		});
	}
	
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
					donutChart();
					peityLine();
			},
			
			resize:function(){
			}
		}
	
	}();

	
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dzChartlist.load();
		}, 1000); 
		
	});

	jQuery(window).on('resize',function(){
		
		
	});     

})(jQuery);