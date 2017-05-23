
$(document).ready(function(){
   
 
var str=location.href.toLowerCase();
	$(".nav_bar li a").click(function() {
	
	$(".nav_bar li a").each(function(){
$(this).parent().removeClass("active");
	});

	$(this).parent().addClass("active");


});

	$(".menu").click(function(){
		
$(".nav_bar nav ul li").slideToggle("slow");


	});


	  $( function() {

$('#tabs_projects').tabs({
    hide: {
        effect: "slide",
        duration: 1000
    }
});


  } );

	   $( function() {

    $( "#tabs_experience" ).tabs();
  } );

	      $( function() {

    $( "#skills_experience" ).tabs();
  } );

	         $( function() {

    $( "#education_experience" ).tabs();
  } );


	  

});