var endFlipFoxkeh = function(){
	/aaa/
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	/aaa/
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);
	/aaa/

	foxkeh.setAttribute("class", "");
	/aaa/
};

var endSlideinFoxkehAndStartFlipFoxkeh = function(){
	/aaa/
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	/aaa/

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	/aaa/
	foxkeh.addEventListener("animationend", endFlipFoxkeh);
	/aaa/

	foxkeh.setAttribute("class", "flip");
	/aaa/
};

var startSlideinFoxkeh = function(){
	/aaa/
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	/aaa/
	foxkeh.setAttribute("class", "slidein");
	/aaa/

	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	/aaa/
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
/aaa/
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
/aaa/
