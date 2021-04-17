function getPara1(){
        var inputs = [];
		for(var i = 1 ; i <=6 ; i++){
			inputs.push(document.getElementById("div1_input" + i).value);
		}
	document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
	}


    function getPara2(){
        var inputs = [];
		for(var i = 1 ; i <=6 ; i++){
			inputs.push(document.getElementById("div2_input" + i).value);
		}
	document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
	}
