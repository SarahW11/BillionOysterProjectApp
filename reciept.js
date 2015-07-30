/*using number of oysters requested*/
function oysters(){
	var theForm=document.forms["adoptform"];
	var quantity=theForm.elements["number"];
	var howmany=0;
	if(quantity.value!=""){
		howmany=parseInt(quantity.value);
	}
	var oprice=howmany*0.25;
	return oprice
}


/*Get price from various packages*/
function extraPrice(){
	var extratotal =0;
	var theForm = document.forms["adoptform"];
	var picture = theForm.elements["picture"];
    	if(picture.checked==true) {
        extratotal=extratotal+2;
   		}
   	var visit = theForm.elements["visit"];
    	if(visit.checked==true) {
        extratotal=extratotal+10;
   		}
   	var splush = theForm.elements["small plush"];
    	if(splush.checked==true) {
        extratotal=extratotal+5;
   		}
   	var jplush = theForm.elements["jumbo plush"];
    	if(jplush.checked==true) {
        extratotal=extratotal+10;
   		}
   	var bag = theForm.elements["bag"];
    	if(bag.checked==true) {
        extratotal=extratotal+2;
   		}
   	var video = theForm.elements["video"];
    	if(video.checked==true) {
        extratotal=extratotal+5;
   		}
    return extratotal;
}

function totalprice(){
	var total=oysters()+extraPrice();
	document.getElementById('totalPrice').innerHTML="Total Price For Adoption$"+total;
}

//totalprice(),


var price = document.getElementById('totalPrice');
price.innerHTML = "$";

console.log(oysters());