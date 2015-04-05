// $('body').vegas({
//     slides: [
//         { src: 'css/images/kai.jpg' },
//         { src: 'css/images/phil.jpg' },
//         { src: 'css/images/mcgrath.jpg' }
//     ]
// });

$(document).ready(function (){
	var bool = false;
	$(".createProfile").click(function (){
		if(bool == false){
			$(".profileBlock").show("normal");
			bool = true;
		} else if (bool == true){
			$(".profileBlock").hide("normal");
			bool = false;
		}
	});
	$(".logInProfile").click(function (){
		if(bool == false){
			$(".logInBlock").show("normal");
			bool = true;
		} else if (bool == true){
			$('body').click(function (){
				$(".logInBlock").hide("normal");
			});	
			bool = false;
		}
	});	
});