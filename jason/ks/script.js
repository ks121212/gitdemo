var container=document.createElement("div");
container.setAttribute("class","container");

var body=document.createElement("div");
body.setAttribute("class","body");

var div=document.createElement("div");
div.setAttribute("class","row");

var col=document.createElement("div");
col.setAttribute("class","col-md-4");


var h2=document.createElement("h2");
h2.innerHTML="FORM SUBMISSION";



function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
    function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;
    }
    function linebreak(tagname){
      var br=document.createElement(tagname);
      return br;
    }
    var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Submit";
button.style.marginLeft= "5px";
button.addEventListener("click",foo);
    
    var firstname=labels("label","for","firstname","Firstname");
    var br=linebreak("br");
    var input=inputs("input","type","text","name","Firstname","id","firstname");
    var br0=linebreak("br");
    var br1=linebreak("br");
    var lastname=labels("label","for","lastname","Lastname");
    var br2=linebreak("br");
    var input1=inputs("input","type","text","name","Lastname","id","lastname");
    var br3=linebreak("br");
    var address=labels("label","for","address","Address");
    var br4=linebreak("br");
    var input2=inputs("input","type","text","name","Address","id","Address");
    var br5=linebreak("br");
    var br8=linebreak("br");
    var pin=labels("label","for","pin","Pincode");
    var br6=linebreak("br");
    var input3=inputs("input","type","text","name","Pincode","id","pincode");
    var br7=linebreak("br");
    var p=document.createElement("p");
    p.innerHTML="Gender:";
    var br8=linebreak("br");
    var input4=inputs("input","type","radio","name","Male","id","radio");
    var span=document.createElement("span");
    span.innerHTML="Male";
    var input5=inputs("input","type","radio","name","female","id","radio1");
    var span1=document.createElement("span");
    span1.innerHTML="Female";
   var p1=document.createElement("p");
   p1.innerHTML=`<b>Choice of Food:</b>(must choose at least 2 out of 5
    options)`;
    var br9=linebreak("br");
    var input6=inputs("input","type","checkbox","name","check","id","checkbox1");
    var span2=document.createElement("span");
    span2.innerHTML="North Indian"
    var br10=linebreak("br");
    var input7=inputs("input","type","checkbox","name","check","id","checkbox2");
    var span3=document.createElement("span");
    span3.innerHTML="South Indian"
    var br11=linebreak("br");
    var input8=inputs("input","type","checkbox","name","check","id","checkbox3");
    var span4=document.createElement("span");
    span4.innerHTML="Chinese"
    var br12=linebreak("br");
    var input9=inputs("input","type","checkbox","name","check","id","checkbox4");
    var span5=document.createElement("span");
    span5.innerHTML="Japanese"
    var br13=linebreak("br");
    var input10=inputs("input","type","checkbox","name","check","id","checkbox5");
    var span6=document.createElement("span");
    span6.innerHTML="Sea Food"
    var br14=linebreak("br");
    var span7=document.createElement("span");
    span7.innerHTML="State";
    var br15=linebreak("br");
    var input11=inputs("input","type","text","name","state","id","State");
    var br16=linebreak("br");
    var span8=document.createElement("span");
    span8.innerHTML="Country";
    var br17=linebreak("br");
    var input12=inputs("input","type","text","name","Country","id","country");
    var br18=linebreak("br");
    var br19=linebreak("br");
  
    var br21=linebreak("br");
    
    col.append(h2,firstname,br,input,br0,lastname,br1,input1,br2,address,br3,input2,br4,pin,br5,input3,br7,p,input4,span,
     input5,span1,br8,br9,p1,input6,span2,br10,input7,span3,br11,input8,span4,br12,input9,span5,br13,input10,span6 ,br14
    ,span7,br15,input11,br16,span8,br17,input12,br18,br19,button);
  
    var col1=document.createElement("div");
     col1.setAttribute("class","col-md-8");

     var h3=document.createElement("h2");
     h3.innerHTML="TEMPORARY DATABASE";
     var br20=linebreak("br");
     var table=document.createElement("table");
     var thead=document.createElement("thead");
     var tr=document.createElement("tr");
     var th=document.createElement("th");
     th.innerHTML="First Name"
     var th1=document.createElement("th");
     th1.innerHTML="Last Name"
     var th2=document.createElement("th");
     th2.innerHTML="Address"
     var th3=document.createElement("th");
     th3.innerHTML="Pincode"
     var th4=document.createElement("th");
     th4.innerHTML="Gender"
     var th5=document.createElement("th");
     th5.innerHTML="Food"
     var th6=document.createElement("th");
     th6.innerHTML="State"
     var th7=document.createElement("th");
     th7.innerHTML="Country"
     var tbody=document.createElement("tbody");
     tbody.innerHTML=`<tr>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td> 
     <td></td>  
     </tr>`

     tr1.append(td,td1,td2,td3,td4,td5,td6,td7,td8,td9,td10,td11,td12);
     div1.append(tr1);
     async function foo(){
      let res=document.getElementById("firstname").value;
      console.log(res);
      let res1=document.getElementById("lastname").value;
      console.log(res1);
      let res2=document.getElementById("Address").value;
      console.log(res2);
      let res3=document.getElementById("pincode").value;
      console.log(res3);
      let res5=document.getElementById("radio").value="Male";
      console.log(res5);
      let res6=document.getElementById("radio1").value="Female";
      console.log(res6);
      let res7=document.getElementById("checkbox1").value="North Indian";
      console.log(res7);
      let res8=document.getElementById("checkbox2").value="South Indian";
      console.log(res8);
      let res9=document.getElementById("checkbox3").value="Chinese";
      console.log(res9);
      let res10=document.getElementById("checkbox4").value="Japanese";
      console.log(res10);
      let res11=document.getElementById("checkbox5").value="Sea Food";
      console.log(res11);
      let res4=document.getElementById("State").value;
      console.log(res4);
      let res12=document.getElementById("country").value;
      console.log(res12);
      tbody.innerHTML=`<tr>
      <td>r${res}</td>
      <td>${res1}</td>
      <td>${res2}</td>
      <td>${res3}</td>
      <td>${res5} ${res6}</td>
      <td${res7} ${res8}${res9} ${res10}${res11}td>
      <td>${res4}</td>
      <td> ${res12}</td>
    </tr>`

      
    };
    
    
table.append(thead,tbody);
   col1.append(h3,br20,table);   
     div.append(col,col1);
    container.append(div);

body.append(container);
document.body.append(body);