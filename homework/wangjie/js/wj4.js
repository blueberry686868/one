function showPic(whichPic){
				var a=whichPic.getAttribute("href");
				var b=document.getElementById("placeholder");
				b.setAttribute("src",a);
			}
function pre(){
	var links=document.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			showPic(this);
			return false;

		}
		
	}
}
pre();