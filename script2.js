var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    result.map((data)=>{console.log(data.name)})
    result.map((data)=>{console.log(data.population)})
    result.map((data)=>{console.log(data.subregion)})
    result.map((data)=>{console.log(data.languauge)})
    
}    