function label1(tagname,attrname,attrvalue,content){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.innerHTML=content;
    return ele1;
}

function linebreak(tagname){
    var br1=document.createElement(tagname);
    return br1;
}
function input(tagname,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var ele2=document.createElement(tagname);
    ele2.setAttribute(attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3);
    return ele2;
}
function button(tagname,content){
    var but=document.createElement(tagname);
    but.innerHTML=content;
    return but;
}
var lab1=label1("label","for","fname","FirstName");
var br1=linebreak("br");
var inp1=input("input","type","text","name","firstname","id","fname");
var lab2=label1("label","for","mname","MiddleName");
var br2=linebreak("br");
var br3=linebreak("br");
var inp2=input("input","type","text","name","middlename","id","mname");
var br4=linebreak("br");
var lab3=label1("label","for","lname","LastName");
var br5=linebreak("br");
var inp3=input("input","type","text","name","lastname","id","lname");
var lab4=label1("label","for","email","Email");
var br6=linebreak("br");
var inp4=input("input","type","email","name","email","id","email");
var br7=linebreak("br");
var br8=linebreak("br");
var lab5=label1("label","for","pass","Password");
var br9=linebreak("br");
var inp5=input("input","type","password","name","password","id","pass");
var br10=linebreak("br");
var but=button("button","Submit");
document.body.append(lab1,br1,inp1,br2,lab2,br3,inp2,br4,lab3,br5,inp3,br6,lab4,br7,inp4,br8,lab5,br9,inp5,br10,but);