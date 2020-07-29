
		
/*---按鈕換圖---*/
function myFunction1(){
	x=document.getElementById("demo1");
	x.src="img/steak1.png";
}
function myFunction2(){
	x=document.getElementById("demo1");
	x.src="img/steak2.png";
}
function myFunction3(){
	x=document.getElementById("demo1");
	x.src="img/steak3.png";
}
function myFunction4(){
	x=document.getElementById("demo1");
	x.src="img/steak1.png";
}
function myFunction5(){
	x=document.getElementById("demo1");
	x.src="img/steak5.png";
}

/*---猴子旋轉---*/
function monkeyhead(){
  if(document.documentElement.scrollTop>650){
    document.getElementById("roolhead").classList.add("headrun");
  }
}


