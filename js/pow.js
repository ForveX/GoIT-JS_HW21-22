var customPow = function() {
	var a=prompt("Введите число для возведения в степень:");
	if (a!='' && a!=null) {
		var result=a;
		var b=prompt("укажите степень для возведения:");
		if(b!=''&& b!=null){
			for (var i=1; i<b; i++) {
				result=result*a;
			};
			alert(result);
			}
			else {
				alert ("Необходимо ввести числовое значение выполнение прекращено");
			};
		}
	else {
	alert ("Необходимо ввести числовое значение выполнение прекращено");
	};
};
