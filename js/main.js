
/*
Project: Oakton Assignemt
Date: 5th May 2016
Author: Soumya Hooli
*/

$('.customsearch').click(function(){
   if( $( ".searchDiv" ).hasClass( "hideSearch" )){
       $( ".searchDiv" ).removeClass( "hideSearch" ).addClass( "showSearch" );
   }
    else if($( ".searchDiv" ).hasClass( "showSearch" ))
        {
           $( ".searchDiv" ).removeClass( "showSearch" ).addClass( "hideSearch" ); 
        }
});

$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});
        