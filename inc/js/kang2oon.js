/* scroll-spy */
// $('body').scrollspy({
	// target: '#topbar-inner',
	// offset: 58
// });
function menu_position(){
	$('[data-spy="scroll"]').each(function () {
		//console.log('nav: '+this.tagName);
		$(this).scrollspy('refresh');
	});
}
menu_position();

/* smooth scrolling for nav sections */
$('#nav li>a').click(function(){
	var link = $(this).attr('href');
	var posi = $(link).offset().top-58;
	$('body,html').animate({scrollTop:posi},1000);
});

$(document).ready(function(){
	//Main Slider
	$("#mainslider").owlCarousel({
		//navigation : false, // Show next and prev buttons
		//slideSpeed : 300,
		//paginationSpeed : 400,
		//singleItem:true,
		items:1,
		margin:0,
		loop:true,
		center:true,
		nav:false,
		autoplay:true,
		autoplayTimeout:5000
	});
	
	//Education Data
	$.ajax({
		type: "GET",
		dataType: "text",
		url: "/kgoon/data/education.txt",
		success: edu_list
	});
	function edu_list(json){
		var edulist = $.parseJSON(json);
		var edulistCtn = edulist.length;
		var eduContent = "";
		for(var i=0; i<edulistCtn; i++){
			eduContent += "<div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">";
			eduContent += "<p><t>"+edulist[i].ko_nm+"</t><br/>";
			eduContent += ""+edulist[i].en_nm+"<br/>";
			eduContent += "<i>"+edulist[i].period+"</i></p></div>";
			eduContent += "<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">";
			eduContent += "<p class=\"text-right\">"+edulist[i].gday+"</p></div>";
		}
		$("#edulist").append(eduContent);
	}
	
	//Careers Data
	$.ajax({
		type: "GET",
		dataType: "text",
		url: "/kgoon/data/career.txt",
		success: career_list
	});
	function career_list(json){
		var careerlist = $.parseJSON(json);
		var careerlistCtn = careerlist.length;
		var careerContent = "";
		for(var i=0; i<careerlistCtn; i++){
			
			var works = careerlist[i].works;
			var worksCnt = works.length;
			var taskContent ="";
			var taskContent_more ="";
			for(var j=0; j<3; j++){
				if(worksCnt > j)  {
					taskContent += "<li>"+works[j].task+"</li>";
				}
			}
			if (worksCnt > 3){
				for(var j=3; j<worksCnt; j++){
					taskContent_more += "<li class=\"hide\">"+works[j].task+"</li>";
				}
			}

			careerContent += "<li class=\"row\"><div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">";
			careerContent += "<p><t>"+careerlist[i].job+"</t><br/>";
			careerContent += ""+careerlist[i].company+"</p>";
			careerContent += "<div class=\"more\"><ol class=\"task\">" + taskContent + taskContent_more +  "</ol>" + ((worksCnt > 2) ? "<span class=\"btn_more\">+more</span>" : "" ) + "</div></div>";
			careerContent += "<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">";
			careerContent += "<p class=\"text-right\">"+careerlist[i].period+"</p></div></li>";
			$("#careerlist").append(careerContent);

			careerContent  = "";
			taskContent = "";
			taskContent_more = "";
		}
		
		//$("#careerlist li").css("display", "list-item");
		$("div.career_page").jPages({
			containerID : "careerlist",
			perPage     : 3,
			first       : false,
			previous    : false,
			next        : false,
			last        : false,
			minHeight   : false,
			//midRange    : 15,
			links       : "blank"
		});
		
		$("button.career_all").click(function(){
			//$("div.career_page").jPages("destroy");
			$("#careerlist li").css({
				"display":"item-list",
				"opacity":"1"
			}).removeClass("jp-hidden");
			$(".career_more").remove();
		});
			
		$(".btn_more").click(function(){
			$(this).hide();
			$(this).prev().find('li').removeClass('hide');
		});
	}
	
	//Skills Data
	var markupdata = [
		{
			value: 90,
			color:"#1abc9c"
		},
		{
			value: 10,
			color:"#ecf0f1"
		}
	];
	var ct_markup = $("#markup").get(0).getContext("2d");
	var myDoughnutChart = new Chart(ct_markup).Doughnut(markupdata,{
		segmentShowStroke : false,
		percentageInnerCutout : 92,
	});
	
	var bootstdata = [
		{
			value: 75,
			color:"#1abc9c"
		},
		{
			value: 25,
			color:"#ecf0f1"
		}
	];
	var ct_bootst = $("#bootst").get(0).getContext("2d");
	var myDoughnutChart = new Chart(ct_bootst).Doughnut(bootstdata,{
		segmentShowStroke : false,
		percentageInnerCutout : 92
	});
	
	var jvquerydata = [
		{
			value: 60,
			color:"#1abc9c"
		},
		{
			value: 40,
			color:"#ecf0f1"
		}
	];
	var ct_jvquery = $("#jvquery").get(0).getContext("2d");
	var myDoughnutChart = new Chart(ct_jvquery).Doughnut(jvquerydata,{
		segmentShowStroke : false,
		percentageInnerCutout : 92
	});
	
	var adobepsdata = [
		{
			value: 85,
			color:"#1abc9c"
		},
		{
			value: 15,
			color:"#ecf0f1"
		}
	];
	var ct_adobeps = $("#adobeps").get(0).getContext("2d");
	var myDoughnutChart = new Chart(ct_adobeps).Doughnut(adobepsdata,{
		segmentShowStroke : false,
		percentageInnerCutout : 92
	});
	
	var adobeilldata = [
		{
			value: 80,
			color:"#1abc9c"
		},
		{
			value: 20,
			color:"#ecf0f1"
		}
	];
	var ct_adobeill = $("#adobeill").get(0).getContext("2d");
	var myDoughnutChart = new Chart(ct_adobeill).Doughnut(adobeilldata,{
		segmentShowStroke : false,
		percentageInnerCutout : 92
	});
	
	var wpblogdata = [
		{
			value: 75,
			color:"#1abc9c"
		},
		{
			value: 25,
			color:"#ecf0f1"
		}
	];
	var ct_wpblog = $("#wpblog").get(0).getContext("2d");
	var myDoughnutChart = new Chart(ct_wpblog).Doughnut(wpblogdata,{
		segmentShowStroke : false,
		percentageInnerCutout : 92
	});
	
	//Portfolio Data
	$.ajax({
		type: "GET",
		dataType: "text",
		url: "/kgoon/data/portfolio.txt",
		success: pf_list
	});
	function pf_list(json){
		var pflist = $.parseJSON(json);
		var pflistCtn = pflist.length;
		var pfContent = "";
		for(var i=0; i<pflistCtn; i++){
			pfContent += "<li class=\"row\"><div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-12\"><div class=\"img-portfolio\"><div>";
			pfContent += "<a href=\""+pflist[i].img+"\"><img src=\""+pflist[i].img+"\" alt=\""+pflist[i].title+"\" class=\"img-responsive\" /><div class=\"zoom-overlay\"><i class=\"fa fa-search-plus\"></i></div></a></div></div></div>";
			pfContent += "<div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-12\">";
			pfContent += "<h5>"+pflist[i].title+"</h5>";
			pfContent += "<ul class=\"pf_info\"><li><i class=\"fa fa-users\"></i>"+pflist[i].client+"</li>";
			pfContent += "<li><i class=\"fa fa-user\"></i>"+pflist[i].sector+"</li>";
			pfContent += "<li><i class=\"fa fa-calendar\"></i>"+pflist[i].period+"</li></ul>";
			pfContent += "<p>"+pflist[i].description+"</p>";
			pfContent += "<p class=\"tags\"><i class=\"fa fa-tags\"></i>"+pflist[i].tags+"</p>";
			pfContent += "<a class=\"test-popup-link\" href=\""+pflist[i].url+"\" target=\"_blank\"><button class=\"btn btn-sm btn-primary\"><i class=\"fa fa-paper-plane\"></i>LAUNCH</button></a>";
			pfContent += "</div></li>";
		}
		$("#pflist").append(pfContent);
		
		//$("#pflist li").css("display", "list-item");
		$("div.pf_page").jPages({
			containerID : "pflist",
			perPage     : 5,
			first       : false,
			previous    : false,
			next        : false,
			last        : false,
			minHeight   : false,
			//midRange    : 15,
			links       : "blank"
		});
		
		$("button.pf_all").click(function(){
			//$("div.pf_page").jPages("destroy");
			$("#pflist li").css({
				"display":"item-list",
				"opacity":"1"
			}).removeClass("jp-hidden");
			$(".pf_more").remove();
		});
	}
	
	$(".img-portfolio a").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
		helpers: {
			title : {
				type : 'float'
			}
		}
	});
});

// $(function(){
	// $('#careerlist').ajaxSuccess('/data/career.txt', function(){
		// $('[data-spy="scroll"]').each(function () {
			// console.log('nav1: '+this.tagName);
			// $(this).scrollspy('refresh');
		// });
	// });
	// $('#pflist').ajaxComplete('/data/portfolio.txt', function(){
		// $('[data-spy="scroll"]').each(function () {
			// console.log('nav2: '+this.tagName);
			// $(this).scrollspy('refresh');
		// });
	// });
// });
