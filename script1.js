var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
//load response when it is ready.
// the function is triggered when onload is ready with response 
request.onload = function() {
    var data = JSON.parse(this.response);
    //JSON.parse to parse into perfect json object 
    //console.log(data);
    var cityname = data[104].name;
    //console.log(cityname);
    var request1 = new XMLHttpRequest();
    request1.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=47b44896636a4efd9872adfb3047c6c7',true)
    request1.send();
    request1.onload = function() {
        var data1 = JSON.parse(this.response);
        console.log(data1);
        console.log(data1.main.temp);
        data1.weather.forEach((items)=>{
            console.log(items.description);
        });
    }
}