document.getElementById("demo1").innerHTML = "This is a dynamic message!!";
document.getElementById("demo2").innerHTML = "Hello! JavaScript!!";
document.getElementById("myBtn").onclick = displayDate;

function displayDate()
{
	document.getElementById("mydate").innerHTML = Date();
}

document.write("<h1>Testing...<h1>");
document.write("<h2>Testing...<h2>");

console.log("This is a test file");
console.log(3**2);
document.write(3*2);