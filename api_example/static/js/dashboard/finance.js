(function($) {
     "use strict" 


 var dzChartlist = function(){
	
	var screenWidth = $(window).width();
		var donutChart2 = function(){
		$("span.donut2").peity("donut", {
			width: "90",
			height: "90"
		});
	}
	var areaChart = function(){
		
		 var options = {
			  series: [{
			  name: 'Income',
			 data: [60,80, 60, 80, 20, 60, 10, 60, 20, 80, 10, 20, 10, 20],
			}, {
			  name: 'Expense',
			  data: [40,41, 80, 20, 60, 20, 50, 40, 52, 35, 50, 35, 20, 10],
			}],
			  chart: {
			  height: 350,
			  type: 'area',
			  toolbar: {
					show: false,
				},
			},
			colors:['#1E33F2', '#FF5045'],
			dataLabels: {
			  enabled: false
			},
			fill:{
				type:'solid',
				opacity:0.04
			},
			stroke: {
			  curve: 'smooth'
			},
			xaxis: {
				categories: ["Week 01", "Week 02", "Week 03", "Week 04", "Week 05", "Week 06", "Week 07", "Week 08", "Week 09", "Week 10", "Week 11", "Week 12", "Week 13", "Week 14", "Week 15", "Week 16"],
				labels: {
					show: true,
					style:{
						colors: '#b9bbbd',
					},
				},
			},
			yaxis: {
				labels: {
					show: true,
					style:{
						colors: '#b9bbbd',
					},
				},
			},
			grid:{
				show: true,
				borderColor: '#E2E2E2',
				yaxis: {
					lines: {
						show: false
					}
				}, 
				xaxis: {
					lines: {
						show: true
					}
				},
			},
			tooltip: {
			  x: {
				format: 'dd/MM/yy HH:mm'
			  },
			},
			};

			var chart = new ApexCharts(document.querySelector("#areaChart"), options);
			chart.render();
			
	}
	
	
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				areaChart();
				donutChart2();	
				
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