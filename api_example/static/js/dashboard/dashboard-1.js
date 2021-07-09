(function($) {
    "use strict"


 var dzChartlist = function(){
	
	var screenWidth = $(window).width();
	var donutChart2 = function(){
		$("span.donut2").peity("donut", {
			width: "113",
			height: "113"
		});
	}
	var chartBarRunning = function(){
		
		var options  = {
			  series: [
				{
					name: 'Projects',
					 data: [31, 40, 28, 51, 42, 109, 100]
				}, 
				{
				  name: 'Projects',
				   data: [11, 32, 45, 32, 34, 52, 41]
				}, 
				
			],
			chart: {
			type: 'bar',
			height: 370,
			
			
			toolbar: {
				show: false,
			},
			
		},
		plotOptions: {
		  bar: {
			horizontal: false,
			endingShape:'rounded',
			columnWidth: '45%',
			
		  },
		},
		colors:['#1E33F2', '#FF5045'],
		dataLabels: {
		  enabled: false,
		},
		markers: {
			shape: "circle",
		},
		legend: {
			show: false,
			fontSize: '12px',
			labels: {
				colors: '#000000',
				
				},
			markers: {
			width: 18,
			height: 18,
			strokeWidth: 0,
			strokeColor: '#fff',
			fillColors: undefined,
			radius: 15,	
			}
		},
		stroke: {
		  show: true,
		  width: 6,
		  colors: ['transparent']
		},
		grid: {
			borderColor: '#eee',
		},
		xaxis: {
			
		  categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		  labels: {
		   style: {
			  colors: '#787878',
			  fontSize: '13px',
			  fontFamily: 'poppins',
			  fontWeight: 100,
			  cssClass: 'apexcharts-xaxis-label',
			},
			
		  },
		  crosshairs: {
		  show: false,
		  }
		},
		yaxis: {
			labels: {
				offsetX:-16,
			   style: {
				  colors: '#787878',
				  fontSize: '13px',
				   fontFamily: 'poppins',
				  fontWeight: 100,
				  cssClass: 'apexcharts-xaxis-label',
			  },
		  },
		},
		fill: {
		  opacity: 1,
		  colors:['#1E33F2', '#FF5045'],
		},
		tooltip: {
		  y: {
			formatter: function (val) {
			  return "$ " + val + " thousands"
			}
		  }
		},
		 responsive: [{
			breakpoint: 575,
			options: {
				plotOptions: {
				  bar: {
					columnWidth: '80%',
				  },
				},
				chart:{
					height:250,
				}
			}
		 }]
		};

		var chart = new ApexCharts(document.querySelector("#chartBarRunning"), options);
		chart.render();
			
	}
	var activityLine = function(){
		  var options = {
          series: [{
          name: 'series1',
          data: [20, 60, 30, 51, 42, 60, 50]
        }],
          chart: {
          height: 350,
          type: 'area',
			toolbar: {
				show: false,
			},			
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
			categories: ["S", "M", "T", "W", "T", "F", "S"],
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
        tooltip: {
          
        },
		colors:['#1E33F2'],
        };

        var chart = new ApexCharts(document.querySelector("#activityLine"), options);
        chart.render();
      
	}
	
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				chartBarRunning();
				donutChart2();	
				activityLine();
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