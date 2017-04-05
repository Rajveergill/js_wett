function weather()
 {
 var xmlhttp = new XMLHttpRequest();
 var url = "http:// api.openweathermap.org/data/2.5/forecast?q=";

 let city = document.getElementById("city").value;
         let country = document.getElementById("country").value;
 var key = "737740dc225bf4db8311c8ab35372b96";
 url += wind + temp + "&appid=" + key;
 xmlhttp.open("GET", url, false);
 xmlhttp.send();
 if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
 {
 var result = xmlhttp.responseText;
 //var jsResult = JSON.parse(result);
 document.getElementById("show").innerHTML = result;
 }
 }