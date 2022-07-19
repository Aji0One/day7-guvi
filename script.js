var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    
    //To get all the countries from the Asia continent /region using the Filter function
    
    var reg=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
    console.log(reg);
    
    //To get all the countries with a population of less than 2 lakhs using Filter function

    var res=result.filter((ele)=>ele.population<100000).map((ele)=>ele.name);
    console.log(res);

    //TO print the following details name, capital, flag using forEach function

    result.forEach(element => {console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    });

    //to print the total population of countries using reduce function

    var total=result.reduce((initial,ele)=>initial+ele.population,0);
    console.log(total);

    //To print the country which uses US Dollars as currency.

    var cur=result.filter((ele)=>ele.currencies==="USD").map((ele)=>ele.name);
    console.log(cur);

}