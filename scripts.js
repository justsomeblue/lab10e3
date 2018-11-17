
function equals(variableName1, variableName2) {
	var variableName1= Number(document.getElementById("variableName1").value);
	var variableName2= Number(document.getElementById("variableName2").value);
var total = variableName1 + variableName2;
document.getElementById("output").innerHTML= total;
}
