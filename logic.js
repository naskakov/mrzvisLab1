function drawTable(rowNumer){  //cоздание таблицы Ковалевич
	var body=document.querySelector("body"),
		table=document.querySelector("table"),
		height=40,
		width=3000,
		rows= rowNumer,
		columns=26,
		tableRow = "",
		tableData = "",
		tableHeader = "",
		firstTable = document.querySelector("table");

	table=document.createElement("table");
	table.setAttribute("width",width);
	table.setAttribute("border","1px")
	table.setAttribute("bordercolor","black");
	table.setAttribute("align","center");

	tableRow=document.createElement("tr");
	tableHeader=document.createElement("th");
	tableHeader.setAttribute("rowspan","2");
	text=document.createTextNode("Tacts");
	tableHeader.appendChild(text);
	tableRow.appendChild(tableHeader);

	for (var i = 0; i < 8; i++){
		tableHeader=document.createElement('th');
		tableHeader.setAttribute("colspan","3");
		text=document.createTextNode('Step '+(i+1));
		tableHeader.appendChild(text);
		tableRow.appendChild(tableHeader);
	}

	tableHeader=document.createElement("th");
	tableHeader.setAttribute("rowspan","2");
	text=document.createTextNode("Answer");
	tableHeader.appendChild(text);
	tableRow.appendChild(tableHeader);

	table.appendChild(tableRow);
	tableRow=document.createElement("tr");

	for (var i=7;i>=0;i--){
		
		tableHeader=document.createElement("th");
		text=document.createTextNode("A*b"+i+"");
		tableHeader.appendChild(text);
		tableRow.appendChild(tableHeader);

		tableHeader=document.createElement("th");
		text=document.createTextNode("Shift");
		tableHeader.appendChild(text);
		tableRow.appendChild(tableHeader);

		tableHeader=document.createElement("th");
		text=document.createTextNode("Summ+A*b"+i+"");
		tableHeader.appendChild(text);
		tableRow.appendChild(tableHeader);
	}

	table.appendChild(tableRow);

	for (var rowNumer = 0; rowNumer < rows; rowNumer++){
		tableRow = document.createElement("tr");
		for (var colNum = 0; colNum < columns; colNum++){
			tableData=document.createElement("td");
			tableData.id = ((rowNumer + 1) + "." + (colNum+1));
			tableRow.appendChild(tableData);
			tableData.setAttribute("height",height);
		}
		table.appendChild(tableRow);
	}

	table.appendChild(tableRow);

	if (firstTable == null) {
		return body.appendChild(table);
	} else {
		var newTable = body.appendChild(table);
		return document.body.replaceChild(newTable, firstTable);
	}
}
//------------------------------------------------------------------------------------------------------------------

function addNulls(number1, number2){ //добавление нулей в начало Ермакович
	var nul="";
	for (var i = 0; i < (number2 - number1.length); i++){

        nul +="0";
        
	}
	return nul + number1;
}
//---------------------------------------------------------------------------------------------------------------------
function addEndNull(number1, number2){ //добавление нулей в конец Ермакович
	var nul="";
	for (var i = 0; i < number2 ; i++){

        nul +="0";
        
	}
	return number1 + nul;
}
//----------------------------------------------------------------------------------------------------------------
function summ(num1, num2){ //вычисление суммы Ермакович

	if (num1.length > num2.length){
		num2 = addNulls(num2, num1.length);
	}
	if (num2.length > num1.length){
		num1 = addNulls(num1, num2.length);
	}
	var output = [];
	var answer = "";
	var toNext= "0";
    for (var i = 0, len = num1.length; i < len; i += 1) {
    output.push(+num1.charAt(i));    
	}
	var output2 = [];
    for (var i = 0, len = num2.length; i < len; i += 1) {
    output2.push(+num2.charAt(i));    
	}
	var i = output.length -1;
	while ( i >= 0){
		if (output[i] == "0" && output2[i] == "0" && toNext== "0")
		{
			answer = "0" + answer;
		}
		else if (output[i] == "1" && output2[i] == "0" && toNext== "0")
		{
			answer = "1" + answer;
		}
		else if (output[i] == "0" && output2[i] == "1" && toNext== "0")
		{
			answer = "1" + answer;
		}
		else if (output[i] == "1" && output2[i] == "1" && toNext== "0")
		{
			answer = "0" + answer;
			toNext= "1";
		}
		else if (output[i] == "0" && output2[i] == "0" && toNext== "1")
		{
			answer = "1" + answer;
			toNext= "0";
		}
		else if (output[i] == "1" && output2[i] == "0" && toNext== "1")
		{
			answer = "0" + answer;
		}
		else if (output[i] == "0" && output2[i] == "1" && toNext== "1")
		{
			answer = "0" + answer;
		}
		else if (output[i] == "1" && output2[i] == "1" && toNext== "1")
		{
			answer = "1" + answer;
		}
		i--;
	}
	if (toNext== "1")
	{
		answer = "1" + answer;
		toNext= "0";
	}
    return answer;
    
}
//-----------------------------------------------------------------------------------------------
function multiply(num1, num2){ //произведение Ковалевич
	
	var answer = "";
   
		if (num2 == "1"){
			answer = num1;
		}

		else{
			answer = "00000000"
		}
	
    return answer;

}
//---------------------------------------------------------------------------------------------------

function getValues(){ //получение введенных значений и печать таблицы Ковалевич

    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;
	var t = document.getElementById("inputT").value; 
	var m = document.getElementById("inputM").value;
	
	var vectorA = [];
	var vectorB = [];
	var count = 0;
	for (var i = 0; i < a.length + 1; i++){
		if(a.charAt(i)==="," || i == a.length){
			vectorA.push(a.substring(count ,i));
			count = i + 1;
		}
	}
	count = 0;
	for (var i = 0; i < b.length + 1; i++){
		if(b.charAt(i)==="," || i == b.length){
			vectorB.push(b.substring(count ,i));
			count = i + 1;
		}
	}	
	drawTable(7 + parseInt(m));
	
	for(var i = 1; i < 8 + parseInt(m); i++){
		document.getElementById(i+"."+1).innerHTML="Tact: "+(i*t); 
		}
		fillingTable(vectorA, vectorB);
}


//-----------------------------------------------------------------------------------------------------
   function fillingTable (vectorA,vectorB){  //заполение таблицы Ковалевич
	for (var w = 0; w < vectorA.length; w++){
		if ((+vectorB[w]).toString(2).length != 8){
			var b8 = addNulls((+vectorB[w]).toString(2),8);
		}
		if ((+vectorA[w]).toString(2).length != 8){
			var a8 = addNulls((+vectorA[w]).toString(2),8);
		}
		var Summ = "0000000000000000"; 
		var S; 
		var Mul;
		var output = [];
		for (var i = 0; i < (+vectorB[w]).toString(2).length; i += 1) {
		output.push(+(+vectorB[w]).toString(2).charAt(i)); 
		}
		document.getElementById(1+"."+1).innerHTML += "<p>A<sub>10</sub>="+vectorA[w]+"</p><p>A<sub>2</sub>="+a8+"</p><p>B<sub>10</sub>="+vectorB[w]+"</p></p>B<sub>2</sub>="+b8+"</p>";
		var k = w + 1;
		var step = 1; 
		var bit =7;
		var count = 0;
		for (var i = 2; i < 25; i += 3){
			
			var M = multiply((+vectorA[w]).toString(2), output[output.length -step]);
			document.getElementById(k +"."+i).innerHTML += "<p>A<sub>2</sub> = "+a8+"</p></p>B<sub>2</sub> = "+b8+"</p><p>Summ = "+Summ+"</p></p><p>A*B"+bit+" = "+ M+"</p>";
			Mul = M;
			M = addEndNull(M, count);
			document.getElementById(k +"."+(i + 1)).innerHTML += "<p>A<sub>2</sub> = "+a8+"</p></p>B<sub>2</sub> = "+b8+"</p><p>Summ = "+Summ+"</p></p><p>A*B"+bit+" = "+ Mul+"</p><p>A*B"+bit+" = "+ M+"</p>";
			S = Summ;
			Summ = summ(Summ, M);
			document.getElementById(k +"."+ (i + 2)).innerHTML += "<p>A<sub>2</sub> = "+a8+"</p></p>B<sub>2</sub> = "+b8+"</p><p>Summ = "+S+"</p></p><p>Summ + A*B"+bit+" = "+Summ+"</p>";
			
			if (i == 23){
				document.getElementById(k +"."+ (i+3)).innerHTML += "<p>Answer =  "+parseInt(Summ,2)+"<sub>10</sub> = "+Summ+"<sub>2</sub></p>";
			}
			k++;
			bit--;
			count++;
			step++;
		}
	}	  
}
