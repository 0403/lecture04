var endFlipFoxkeh = function(){
	var foxkeh= document.querySelector("#slidein-foxkeh img");
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);
	foxkeh.setAttribute("class", "");	
};
/関数endFlipFoxkehを、id属性がslidein-foxkeh imgの要素を探して関数foxkehと定義し、foxkehがanimationendされたらイベントendFlipFoxkehを取り除き、foxkehのクラス属性を""とするというように定義する/
var endSlideinFoxkehAndStartFlipFoxkeh = function(){	
	var foxkeh = document.querySelector("#slidein-foxkeh img");	
	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);	
	foxkeh.addEventListener("animationend", endFlipFoxkeh);	
	foxkeh.setAttribute("class", "flip");	
};
/関数endSlideinFoxkehAndStartFlipFoxkehを、id属性がslidein-foxkeh imgの要素を探して関数foxkehと定義し、foxkehがanimationendされたらイベントendSlideinFoxkehAndStartFlipFoxkehを取り除き、foxkehがanimationendされたらイベントendFlipFoxkehを追加し、foxkehのクラス属性を"flip"とするというように定義する/
var startSlideinFoxkeh = function(){	
	var foxkeh = document.querySelector("#slidein-foxkeh img");	
	foxkeh.setAttribute("class", "slidein");	
	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);	
};
/関数startSlideinFoxkehを、id属性がslidein-foxkeh imgの要素を探して関数foxkehと定義し、foxkehのクラス属性を"slidein"とし、foxkehがanimationendされたらイベントendSlideinFoxkehAndStartFlipFoxkehを追加するように定義する/
var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
/id属性がslidein-foxkeh buttonの要素を探して関数slideinFoxkehButtonと定義する/
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
/slideinFoxkehButtonがclickされたらイベント startSlideinFoxkehを追加する/
