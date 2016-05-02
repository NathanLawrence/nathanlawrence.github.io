var bardata = [Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()];
var height = 300,
	width = 750;
	
var barOffset = .1;

var paddingTop = 40,
	paddingRight = 55,
	paddingBottom = 30,
	paddingLeft = 55;

var yScale = d3.scale.linear()
	.domain([0,d3.max(bardata)])
	.range([0, (height - paddingTop - paddingBottom)]);

var xScale = d3.scale.ordinal()
	.domain(d3.range(0,bardata.length))
	.rangeRoundBands([0,width - paddingRight - paddingLeft],barOffset,0)

var barWidth = (width - paddingLeft - paddingRight - 2*barOffset)/bardata.length;

d3.select('#main-chart').append('svg')
	.attr('width',width)
	.attr('height',height)
	.selectAll('rect')
	.data(bardata)
	.enter().append('rect')
		.style('fill', '#ddd')
		.attr('width', xScale.rangeBand())
		.attr('height', function(d){
			return yScale(d);
		})
		.attr('x', function(d,i){
			return xScale(i) +paddingLeft;
		})
		.attr('y', function(d){
			return height - yScale(d) - paddingTop + paddingBottom;
		});



$(document).ready(function() {
			// Grab the initial top offset of the chart.
		   	var stickyChartTop = $('#main-chart').offset().top;
		   	var stickyChartLeft = $('#main-chart').offset().left;
		   	
		   	// This function will decide if the navigation bar should have "sticky" class or not.
		   	var stickyChart = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // If we've scrolled the chart off the page, even the tiniest bit, change its position to fixed to stick to top.
			    // Otherwise, change it back to relative
			    if (scrollTop > stickyChartTop) { 
			        $('#main-chart').addClass('sticky');
			        $('#main-chart').css('left',stickyChartLeft - 10);
			        $('#main-chart').css('background-color',$('body').css('background-color'));
			        $('#main-chart').css('border-color',$('body').css('background-color'));
			        $('.before-main-chart').css('padding-bottom',$('#main-chart').height());
			    } else {
			        $('#main-chart').removeClass('sticky'); 
			        $('.before-main-chart').css('padding-bottom',0);   
			    }
			};

			stickyChart();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyChart();
			});
		});