$(document).ready(function() {

	//STARTER D3 CODE BEGINS HERE

	var bardata = [Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1];
	var dataSort = bardata.slice().sort();

	var height = $(window).height()/2,
		width = $('#main-chart').width();
		
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

	var barWidth = (width - paddingLeft - paddingRight - 2 * barOffset) / bardata.length;

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

	// STARTER D3 CODE ENDS HERE


	// STARTER JQUERY CODE STARTS HERE
	$('.set-lowest').html(Math.min.apply(Math, bardata));
	$('.set-highest').html(Math.max.apply(Math, bardata));
	$('.set-median').html(dataSort[5]);
	$('.after-main-chart').css('padding-top',height/6);

	// Grab the initial top offset of the chart.
   	var stickyChartTop = $('#main-chart').offset().top;
   	var stickyChartLeft = $('#main-chart').offset().left;
   	var orderChartTop = $('#order-chart').offset().top;
   	var colorMedianTop = $('#color-median').offset().top;
   	var unColorMedianTop = $('#un-color-median').offset().top;
   	var showMeanTop = $('#demonstrate-mean').offset().top;

   	// Initialize Chart State
   	var chartState = 0;
   	
   	// This function will decide if the navigation bar should have "sticky" class or not.
   	var stickyChart = function(){
	    var scrollTop = $(window).scrollTop(); // Current vertical scroll position.
	         
	    // If we've scrolled the chart off the page, even the tiniest bit, change its position to fixed to stick to top.
	    // Otherwise, change it back to relative
	    if (scrollTop > stickyChartTop - 5) { // This 5px add may seem like a lot of extra room, but it creates a kinda neat magnet effect and avoids weird bouncing artifacts.
	        $('#main-chart').addClass('sticky');   
	        $('#main-chart').css('left',stickyChartLeft - 10);
	        $('#main-chart').css('background-color',$('body').css('background-color'));
	        $('#main-chart').css('border-color',$('body').css('background-color'));
	        $('.before-main-chart').css('padding-bottom',height);
	        
	    } else {
	    	$('.before-main-chart').css('padding',0);
	        $('#main-chart').removeClass('sticky');
	        resetChart(); 
	    }
	};

	var orderChart = function(){
		var scrollTop = $(window).scrollTop();
		if (((scrollTop + $(window).height()/2 + 50) > orderChartTop) && chartState === 0){
			d3.selectAll('rect')
				.data(dataSort)
				.each(function(d,i){
					d3.select(this)
					.transition()
					.duration(1000)
					.ease('elastic')
					.attr('height', function(d){
						return yScale(d);
					})
					.attr('y', function(d){
						return height - yScale(d) - paddingTop + paddingBottom;
					});
				});
			chartState = 1;
		}
	};

	var colorMedian = function(){
		var scrollTop = $(window).scrollTop();
		if (((scrollTop + $(window).height()/2 + 50) > colorMedianTop) && chartState === 1){
			d3.selectAll('rect')
				.transition()
				.duration(300)
				.ease('sine')
				.delay(50)
				.style('fill',function(d,i){
					if (i == 4){
						return '#eee';
					} else {
						return '#666';
					}
				});
		}
	};

	var unSort = function(){
		var scrollTop = $(window).scrollTop();
		if (((scrollTop + $(window).height()/2) > unColorMedianTop) && chartState < 3){
			resetChart();
			chartState = 0;
		}
	}

	var showMean = function(){
		var scrollTop = $(window).scrollTop();

		if (((scrollTop + $(window).height()/2 + 50) > showMeanTop) && chartState === 0){
			var mean = d3.mean(bardata);
			var meanAdj = yScale(mean);
			d3.selectAll('rect')
				.each(function(d,i){
					d3.select(this)
					.data(bardata)
					.transition()
					.duration(1000)
					.ease('elastic')
					.attr('height', function(mean){
						return meanAdj;
					})
					.attr('y', function(mean){
						return height - meanAdj - paddingTop + paddingBottom;
					});
				});
			chartState = 3;
		}
	}

	// There is no if statement on this function because it exists for DRY purposes.
	var resetChart = function(){
		d3.selectAll('rect')
			.data(bardata)
			.each(function(d,i){
				d3.select(this)
				.transition()
				.duration(1000)
				.ease('elastic')
				.style('fill','#eee')
				.attr('height', function(d){
					return yScale(d);
				})
				.attr('y', function(d){
					return height - yScale(d) - paddingTop + paddingBottom;
				});
			});
		chartState = 0;
	};


	// Run our functions once on $(document).ready()
	stickyChart();
	orderChart();
		

	// And and run them again every time JQuery feels a scroll. Ideally, there should be some debouncing or throttling here.
	$(window).scroll( $.throttle( 10, true, function(e) {
		stickyChart();
		orderChart();
		colorMedian();
		unSort();
		showMean();
	}));

});