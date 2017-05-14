jQuery(document).ready(function($){

	$(".confirm").click(function(){
		if(confirm("Are you sure you want to delete this record? ")){
			return true;
		} else {
			return false;	
		}
		
	});

});