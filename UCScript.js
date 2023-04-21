//change the multiple forms
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
//calculations
//calculating the length
var input=document.getElementById('fr');
var output=document.getElementById('to');

var select1=document.getElementById('len1');
var select2=document.getElementById('len2');

var inputValue,outputValue;

input.addEventListener("keyup",myoutput);

select1.addEventListener("change",myoutput);
select2.addEventListener("change",myoutput);


inputValue=select1.value;
outputValue=select2.value;


function myoutput()
{
    inputValue=select1.value;
    outputValue=select2.value;
   
    if(inputValue === "M"){
        switch(outputValue)
        {
            case "M1":output.value=Number(input.value)*1;break;
            case "K1":output.value=Number(input.value)*0.001;break;
            case "C1":output.value=Number(input.value)*100;break;
            case "Mm1":output.value=Number(input.value)*1000;break;
            case "Mi1":output.value=Number(input.value)*0.000621371;break;
            case "Y1":output.value=Number(input.value)*1.09361;break;
            case "F1":output.value=Number(input.value)*3.28084;break;
            case "I1":output.value=Number(input.value)*39.3701;break;
        }
    }
    else if(inputValue === "k"){
        switch(outputValue)
        {
            case "M1":output.value=Number(input.value)*1000;break;
            case "K1":output.value=Number(input.value)*1;break;
            case "C1":output.value=Number(input.value)*100000;break;
            case "Mm1":output.value=Number(input.value)*le+6;break;
            case "Mi1":output.value=Number(input.value)*0.621371;break;
            case "Y1":output.value=Number(input.value)*1093.61;break;
            case "F1":output.value=Number(input.value)*3280.84;break;
            case "I1":output.value=Number(input.value)*39370.1;break;
        }
    }
    else if(inputValue === "C"){
        switch(outputValue)
        {
            case "M1":output.value=Number(input.value)*0.01;break;
            case "K1":output.value=Number(input.value)*0.001;break;
            case "C1":output.value=Number(input.value)*1;break;
            case "Mm1":output.value=Number(input.value)*10;break;
            case "Mi1":output.value=Number(input.value)*6.2137e-6;break;
            case "Y1":output.value=Number(input.value)*0.0109361;break;
            case "F1":output.value=Number(input.value)*0.0328084;break;
            case "I1":output.value=Number(input.value)*0.393701;break;
        }
    }
    else if(inputValue === "Mm"){
        switch(outputValue)
        {
            case "M1":output.value=Number(input.value)*0.001;break;
            case "K1":output.value=Number(input.value)*le-6;break;
            case "C1":output.value=Number(input.value)*0.1;break;
            case "Mm1":output.value=Number(input.value)*1;break;
            case "Mi1":output.value=Number(input.value)*6.2137e-7;break;
            case "Y1":output.value=Number(input.value)*0.00109361;break;
            case "F1":output.value=Number(input.value)*0.00328084;break;
            case "I1":output.value=Number(input.value)*0.0393701;break;
        }
    }
    else if(inputValue === "Mi"){
        switch(outputValue)
        {
            case "M1":output.value=Number(input.value)*1609.34;break;
            case "K1":output.value=Number(input.value)*1.60934;break;
            case "C1":output.value=Number(input.value)*160934;break;
            case "Mm1":output.value=Number(input.value)*1.609e+6;break;
            case "Mi1":output.value=Number(input.value)*1;break;
            case "Y1":output.value=Number(input.value)*1760;break;
            case "F1":output.value=Number(input.value)*5280;break;
            case "I1":output.value=Number(input.value)*63360;break;
        }
    }
    else if(inputValue === "Y"){
        switch(outputValue)
        {
            case "M1":output.value=Number(input.value)*0.9144;break;
            case "K1":output.value=Number(input.value)*0.0009144;break;
            case "C1":output.value=Number(input.value)*91.44;break;
            case "Mm1":output.value=Number(input.value)*914.4;break;
            case "Mi1":output.value=Number(input.value)*0.000568182;break;
            case "Y1":output.value=Number(input.value)*1;break;
            case "F1":output.value=Number(input.value)*3;break;
            case "I1":output.value=Number(input.value)*36;break;
        }
    }
    else if(inputValue === "F"){
        switch(outputValue)
        {
            case "M1":output.value=Number(input.value)*0.0003048;break;
            case "K1":output.value=Number(input.value)*0.3048;break;
            case "C1":output.value=Number(input.value)*30.48;break;
            case "Mm1":output.value=Number(input.value)*304.8;break;
            case "Mi1":output.value=Number(input.value)*0.000189394;break;
            case "Y1":output.value=Number(input.value)*0.333333;break;
            case "F1":output.value=Number(input.value)*1;break;
            case "I1":output.value=Number(input.value)*12;break;
        }
    }
    else if(inputValue === "I"){
        switch(outputValue)
        {
            case "M1":output.value=Number(input.value)*0.0254;break;
            case "K1":output.value=Number(input.value)*2.54e-5;break;
            case "C1":output.value=Number(input.value)*2.54;break;
            case "Mm1":output.value=Number(input.value)*25.4;break;
            case "Mi1":output.value=Number(input.value)*1.5783e-5;break;
            case "Y1":output.value=Number(input.value)*0.0277778;break;
            case "F1":output.value=Number(input.value)*0.0833333;break;
            case "I1":output.value=Number(input.value)*1;break;
        }
    }
    
    
}
//calculating the Temperature
var T_input=document.getElementById('fr_t');
var T_output=document.getElementById('to_t');

var tem1=document.getElementById('tem1');
var tem2=document.getElementById('tem2');
var input_t,output_t;

T_input.addEventListener("keyup",myoutput_T);
tem1.addEventListener("change",myoutput_T);
tem2.addEventListener("change",myoutput_T);

input_t=tem1.value;
output_t=tem2.value;
function myoutput_T()
{
    input_t=tem1.value;
    output_t=tem2.value;
    if(input_t === "TC" )
    {
        switch(output_t)
        {
            case "TC1":T_output.value=Number(T_input.value)*1;break;
            case "TK1":T_output.value=Number(T_input.value)*274.15;break;
            case "TF1":T_output.value=Number(T_input.value)*33.8;break;
        }
    }
    else if(input_t === "TK" )
    {
        switch(output_t)
        {
            case "TC1":T_output.value=Number(T_input.value)*-272.15;break;
            case "TK1":T_output.value=Number(T_input.value)*1;break;
            case "TF1":T_output.value=Number(T_input.value)*-457.87;break;
        }
    }
    else if(input_t === "TF" )
    {
        switch(output_t)
        {
            case "TC1":T_output.value=Number(T_input.value)*-17.2222;break;
            case "TK1":T_output.value=Number(T_input.value)*255.928;break;
            case "TF1":T_output.value=Number(T_input.value)*1;break;
        }
    }
}

//claculating the area
var A_input=document.getElementById('fr_A');
var A_output=document.getElementById('to_A');

var Area1=document.getElementById('AR1');
var Area2=document.getElementById('AR2');

var input_a,output_a;

A_input.addEventListener("keyup",myoutput_A);
Area1.addEventListener("change",myoutput_A);
Area2.addEventListener("change",myoutput_A);

input_a=Area1.value;
output_a=Area2.value;

function myoutput_A()
{
    input_a=Area1.value;
    output_a=Area2.value;

    if(input_a === "SM")
    {
        switch(output_a)
        {
            case "SM1":A_output.value=Number(A_input.value)*1;break;
            case "SK1":A_output.value=Number(A_input.value)*0.000001;break;
            case "SC1":A_output.value=Number(A_input.value)*10000;break;
            case "SMm1":A_output.value=Number(A_input.value)*1000000;break;
            case "SMi1":A_output.value=Number(A_input.value)*3.861018768E-7;break;
            case "SH1":A_output.value=Number(A_input.value)*le-4;break;
            case "SF1":A_output.value=Number(A_input.value)*10.7639;break;
            case "SI1":A_output.value=Number(A_input.value)*1550.0031;break;
        }
    }
    else if(input_a === "SK")
    {
        switch(output_a)
        {
            case "SM1":A_output.value=Number(A_input.value)*1000000;break;
            case "SK1":A_output.value=Number(A_input.value)*1;break;
            case "SC1":A_output.value=Number(A_input.value)*10000000000;break;
            case "SMm1":A_output.value=Number(A_input.value)*10000000000;break;
            case "SMi1":A_output.value=Number(A_input.value)*0.3861018768;break;
            case "SH1":A_output.value=Number(A_input.value)*100;break;
            case "SF1":A_output.value=Number(A_input.value)*10763910.417;break;
            case "SI1":A_output.value=Number(A_input.value)*1550003100;break;
        }
    }
    else if(input_a === "SC")
    {
        switch(output_a)
        {
            case "SM1":A_output.value=Number(A_input.value)*0.0001;break;
            case "SK1":A_output.value=Number(A_input.value)*1.E-10;break;
            case "SC1":A_output.value=Number(A_input.value)*1;break;
            case "SMm1":A_output.value=Number(A_input.value)*100;break;
            case "SMi1":A_output.value=Number(A_input.value)*3.861018768E-11;break;
            case "SH1":A_output.value=Number(A_input.value)*1.E-8;break;
            case "SF1":A_output.value=Number(A_input.value)*0.001076391;break;
            case "SI1":A_output.value=Number(A_input.value)*0.15500031;break;
        }
    }
    else if(input_a === "SMm")
    {
        switch(output_a)
        {
            case "SM1":A_output.value=Number(A_input.value)*0.000001;break;
            case "SK1":A_output.value=Number(A_input.value)*1.E-12;break;
            case "SC1":A_output.value=Number(A_input.value)*0.01;break;
            case "SMm1":A_output.value=Number(A_input.value)*1;break;
            case "SMi1":A_output.value=Number(A_input.value)*3.861018768E-13;break;
            case "SH1":A_output.value=Number(A_input.value)*9.999999999E-11;break;
            case "SF1":A_output.value=Number(A_input.value)*0.0000107639;break;
            case "SI1":A_output.value=Number(A_input.value)*0.0015500031;break;
        }
    }
    else if(input_a === "SMi")
    {
        switch(output_a)
        {
            case "SM1":A_output.value=Number(A_input.value)*2589990;break;
            case "SK1":A_output.value=Number(A_input.value)*2.58999;break;
            case "SC1":A_output.value=Number(A_input.value)*25899900000;break;
            case "SMm1":A_output.value=Number(A_input.value)*2589990000000;break;
            case "SMi1":A_output.value=Number(A_input.value)*1;break;
            case "SH1":A_output.value=Number(A_input.value)*258.99;break;
            case "SF1":A_output.value=Number(A_input.value)*27878420.34;break;
            case "SI1":A_output.value=Number(A_input.value)*4014492529;break;
        }
    }
    else if(input_a === "SH")
    {
        switch(output_a)
        {
            case "SM1":A_output.value=Number(A_input.value)*10000;break;
            case "SK1":A_output.value=Number(A_input.value)*0.01;break;
            case "SC1":A_output.value=Number(A_input.value)*100000000;break;
            case "SMm1":A_output.value=Number(A_input.value)*10000000000;break;
            case "SMi1":A_output.value=Number(A_input.value)*0.0038610188;break;
            case "SH1":A_output.value=Number(A_input.value)*1;break;
            case "SF1":A_output.value=Number(A_input.value)*107639.10417;break;
            case "SI1":A_output.value=Number(A_input.value)*15500031;break;
        }
    }
    else if(input_a === "SF")
    {
        switch(output_a)
        {
            case "SM1":A_output.value=Number(A_input.value)*0.09290304;break;
            case "SK1":A_output.value=Number(A_input.value)*9290304E-8;break;
            case "SC1":A_output.value=Number(A_input.value)*929.0304;break;
            case "SMm1":A_output.value=Number(A_input.value)*92903.04;break;
            case "SMi1":A_output.value=Number(A_input.value)*3.58700381E-8;break;
            case "SH1":A_output.value=Number(A_input.value)*0.0000092903;break;
            case "SF1":A_output.value=Number(A_input.value)*1;break;
            case "SI1":A_output.value=Number(A_input.value)*144;break;
        }
    }
    else if(input_a === "SI")
    {
        switch(output_a)
        {
            case "SM1":A_output.value=Number(A_input.value)*0.00064516;break;
            case "SK1":A_output.value=Number(A_input.value)*6.4516E-10;break;
            case "SC1":A_output.value=Number(A_input.value)*6.4516;break;
            case "SMm1":A_output.value=Number(A_input.value)*645.16;break;
            case "SMi1":A_output.value=Number(A_input.value)*2.490974868E-8;break;
            case "SH1":A_output.value=Number(A_input.value)*6.4516E-8;break;
            case "SF1":A_output.value=Number(A_input.value)*0.0069444444;break;
            case "SI1":A_output.value=Number(A_input.value)*1;break;
        }
    }
    
}

//claculating the volume
var V_input=document.getElementById('fr_V');
var V_output=document.getElementById('to_V');

var Vol1=document.getElementById('VO1');
var Vol2=document.getElementById('VO2');

var input_v,output_v;

V_input.addEventListener("keyup",myoutput_V);
Vol1.addEventListener("change",myoutput_V);
Vol2.addEventListener("change",myoutput_V);

input_v=Vol1.value;
output_v=Vol2.value;
function myoutput_V()
{
    input_v=Vol1.value;
    output_v=Vol2.value;
    if(input_v === "CM")
    {
        switch(output_v)
        {
            case "CM1":V_output.value=Number(V_input.value)*1;break;
            case "CK1":V_output.value=Number(V_input.value)*1.E-9;break;
            case "CC1":V_output.value=Number(V_input.value)*1000000;break;
            case "CMm1":V_output.value=Number(V_input.value)*1000000000;break;
            case "CMi1":V_output.value=Number(V_input.value)*2.399128696E-10;break;
            case "CL1":V_output.value=Number(V_input.value)*1000;break;
            case "CF1":V_output.value=Number(V_input.value)*35.314666721;break;
            case "CI1":V_output.value=Number(V_input.value)*61023.744095;break;
        }
    }
    else if(input_v === "CK")
    {
        switch(output_v)
        {
            case "CM1":V_output.value=Number(V_input.value)*1000000000;break;
            case "CK1":V_output.value=Number(V_input.value)*1;break;
            case "CC1":V_output.value=Number(V_input.value)*1000000000;break;
            case "CMm1":V_output.value=Number(V_input.value)*1000000000000000000;break;
            case "CMi1":V_output.value=Number(V_input.value)*0.2399128636;break;
            case "CL1":V_output.value=Number(V_input.value)*1000000000000;break;
            case "CF1":V_output.value=Number(V_input.value)*35314666721;break;
            case "CI1":V_output.value=Number(V_input.value)*61023744094732;break;
        }
    }
    else if(input_v === "CC")
    {
        switch(output_v)
        {
            case "CM1":V_output.value=Number(V_input.value)*0.000001;break;
            case "CK1":V_output.value=Number(V_input.value)*9.999999999E-16;break;
            case "CC1":V_output.value=Number(V_input.value)*1;break;
            case "CMm1":V_output.value=Number(V_input.value)*1000;break;
            case "CMi1":V_output.value=Number(V_input.value)*2.399128636E-16;break;
            case "CL1":V_output.value=Number(V_input.value)*0.001;break;
            case "CF1":V_output.value=Number(V_input.value)*0.0000353147;break;
            case "CI1":V_output.value=Number(V_input.value)*0.0610237441;break;
        }
    }
    
    else if(input_v === "CMm")
    {
        switch(output_v)
        {
            case "CM1":V_output.value=Number(V_input.value)*1.E-9;break;
            case "CK1":V_output.value=Number(V_input.value)*1.E-18;break;
            case "CC1":V_output.value=Number(V_input.value)*0.001;break;
            case "CMm1":V_output.value=Number(V_input.value)*1;break;
            case "CMi1":V_output.value=Number(V_input.value)*2.399128636E-19;break;
            case "CL1":V_output.value=Number(V_input.value)*0.000001;break;
            case "CF1":V_output.value=Number(V_input.value)*3.531466672E-8;break;
            case "CI1":V_output.value=Number(V_input.value)*0.0000610237;break;
        }
    }
    else if(input_v === "CMi")
    {
        switch(output_v)
        {
            case "CM1":V_output.value=Number(V_input.value)*4168180000;break;
            case "CK1":V_output.value=Number(V_input.value)*4.16818;break;
            case "CC1":V_output.value=Number(V_input.value)*4168180000000000;break;
            case "CMm1":V_output.value=Number(V_input.value)*4168179999999999500;break;
            case "CMi1":V_output.value=Number(V_input.value)*1;break;
            case "CL1":V_output.value=Number(V_input.value)*4168180000000;break;
            case "CF1":V_output.value=Number(V_input.value)*147197887535;break;
            case "CI1":V_output.value=Number(V_input.value)*254357949660781;break;
        }
    }
    else if(input_v === "CL")
    {
        switch(output_v)
        {
            case "CM1":V_output.value=Number(V_input.value)*0.001;break;
            case "CK1":V_output.value=Number(V_input.value)*1.E-12;break;
            case "CC1":V_output.value=Number(V_input.value)*1000;break;
            case "CMm1":V_output.value=Number(V_input.value)*1000000;break;
            case "CMi1":V_output.value=Number(V_input.value)*2.399128636E-13;break;
            case "CL1":V_output.value=Number(V_input.value)*1;break;
            case "CF1":V_output.value=Number(V_input.value)*0.0353146667;break;
            case "CI1":V_output.value=Number(V_input.value)*61.023744095;break;
        }
    }
    else if(input_v === "CF")
    {
        switch(output_v)
        {
            case "CM1":V_output.value=Number(V_input.value)*0.0283168466;break;
            case "CK1":V_output.value=Number(V_input.value)*2.831684659E-11;break;
            case "CC1":V_output.value=Number(V_input.value)*28316.846592;break;
            case "CMm1":V_output.value=Number(V_input.value)*28316846.592;break;
            case "CMi1":V_output.value=Number(V_input.value)*6.793575755E-12;break;
            case "CL1":V_output.value=Number(V_input.value)*28.316846592;break;
            case "CF1":V_output.value=Number(V_input.value)*1;break;
            case "CI1":V_output.value=Number(V_input.value)*1728;break;
        }
    }
    else if(input_v === "CI")
    {
        switch(output_v)
        {
            case "CM1":V_output.value=Number(V_input.value)*0.0000163871;break;
            case "CK1":V_output.value=Number(V_input.value)*1.6387064E-14;break;
            case "CC1":V_output.value=Number(V_input.value)*16.387064;break;
            case "CMm1":V_output.value=Number(V_input.value)*16387.064;break;
            case "CMi1":V_output.value=Number(V_input.value)*3.931467451E-15;break;
            case "CL1":V_output.value=Number(V_input.value)*0.016387064;break;
            case "CF1":V_output.value=Number(V_input.value)*0.0005787037;break;
            case "CI1":V_output.value=Number(V_input.value)*1;break;
        }
    }
}
//claculating the Weight
var W_input=document.getElementById('fr_W');
var W_output=document.getElementById('to_W');

var Wei1=document.getElementById('WT1');
var Wei2=document.getElementById('WT2');

var input_w,output_w;

W_input.addEventListener("keyup",myoutput_W);
Wei1.addEventListener("change",myoutput_W);
Wei2.addEventListener("change",myoutput_W);

input_w=Wei1.value;
output_w=Wei2.value;
function myoutput_W()
{
    input_w=Wei1.value;
    output_w=Wei2.value;
    if(input_w === "WK")
    {
        switch(output_w)
        {
            case "WK1":W_output.value=Number(W_input.value)*1;break;
            case "WG1":W_output.value=Number(W_input.value)*1000;break;
            case "WM1":W_output.value=Number(W_input.value)*0.001;break;
            case "WL1":W_output.value=Number(W_input.value)*0.0009842073;break;
            case "WP1":W_output.value=Number(W_input.value)*2.2046244202;break;
            case "WC1":W_output.value=Number(W_input.value)*5000;break;
            case "WA1":W_output.value=Number(W_input.value)*6.022136652E+26;break;
        }
    }
    else if(input_w === "WG")
    {
        switch(output_w)
        {
            case "WK1":W_output.value=Number(W_input.value)*0.001;break;
            case "WG1":W_output.value=Number(W_input.value)*1;break;
            case "WM1":W_output.value=Number(W_input.value)*0.000001;break;
            case "WL1":W_output.value=Number(W_input.value)*9.842073304E-7;break;
            case "WP1":W_output.value=Number(W_input.value)*0.0022046244;break;
            case "WC1":W_output.value=Number(W_input.value)*5;break;
            case "WA1":W_output.value=Number(W_input.value)*6.022136652E+23;break;
        }
    }
    else if(input_w === "WM")
    {
        switch(output_w)
        {
            case "WK1":W_output.value=Number(W_input.value)*1000;break;
            case "WG1":W_output.value=Number(W_input.value)*1000000;break;
            case "WM1":W_output.value=Number(W_input.value)*1;break;
            case "WL1":W_output.value=Number(W_input.value)*0.9842073304;break;
            case "WP1":W_output.value=Number(W_input.value)*2204.6244202;break;
            case "WC1":W_output.value=Number(W_input.value)*5000000;break;
            case "WA1":W_output.value=Number(W_input.value)*6.022136652E+29;break;
        }
    }
    else if(input_w === "WL")
    {
        switch(output_w)
        {
            case "WK1":W_output.value=Number(W_input.value)*1016.04608;break;
            case "WG1":W_output.value=Number(W_input.value)*1016046.08;break;
            case "WM1":W_output.value=Number(W_input.value)*1.01604608;break;
            case "WL1":W_output.value=Number(W_input.value)*1;break;
            case "WP1":W_output.value=Number(W_input.value)*2240;break;
            case "WC1":W_output.value=Number(W_input.value)*5080230.4;break;
            case "WA1":W_output.value=Number(W_input.value)*6.118768338E+29;break;
        }
    }
    else if(input_w === "WP")
    {
        switch(output_w)
        {
            case "WK1":W_output.value=Number(W_input.value)*0.453592;break;
            case "WG1":W_output.value=Number(W_input.value)*453.592;break;
            case "WM1":W_output.value=Number(W_input.value)*0.000453592;break;
            case "WL1":W_output.value=Number(W_input.value)*0.0004464286;break;
            case "WP1":W_output.value=Number(W_input.value)*1;break;
            case "WC1":W_output.value=Number(W_input.value)*2267.96;break;
            case "WA1":W_output.value=Number(W_input.value)*2.731593008E+26;break;
        }
    }
    else if(input_w === "WC")
    {
        switch(output_w)
        {
            case "WK1":W_output.value=Number(W_input.value)*0.0002;break;
            case "WG1":W_output.value=Number(W_input.value)*0.2;break;
            case "WM1":W_output.value=Number(W_input.value)*2.E-7;break;
            case "WL1":W_output.value=Number(W_input.value)*1.96841466E-7;break;
            case "WP1":W_output.value=Number(W_input.value)*0.0004409249;break;
            case "WC1":W_output.value=Number(W_input.value)*1;break;
            case "WA1":W_output.value=Number(W_input.value)*1.20442733E+23;break;
        }
    }
    else if(input_w === "WA")
    {
        switch(output_w)
        {
            case "WK1":W_output.value=Number(W_input.value)*1.660540199E-27;break;
            case "WG1":W_output.value=Number(W_input.value)*1.660540199E-24;break;
            case "WM1":W_output.value=Number(W_input.value)*1.660540199E-30;break;
            case "WL1":W_output.value=Number(W_input.value)*1.634315837E-30;break;
            case "WP1":W_output.value=Number(W_input.value)*3.660867475E-27;break;
            case "WC1":W_output.value=Number(W_input.value)*8.302700999E-24;break;
            case "WA1":W_output.value=Number(W_input.value)*1;break;
        }
    }
}
//claculating the Time
var TI_input=document.getElementById('fr_tim');
var TI_output=document.getElementById('to_tim');

var time1=document.getElementById('tim1');
var time2=document.getElementById('tim2');

var input_Ti,output_Ti;

TI_input.addEventListener("keyup",myoutput_TI);
time1.addEventListener("change",myoutput_TI);
time2.addEventListener("change",myoutput_TI);

input_Ti=time1.value;
output_Ti=time2.value;
function myoutput_TI()
{
    input_Ti=time1.value;
    output_Ti=time2.value;
    if(input_Ti === "TS")
    {
        switch(output_Ti)
        {
            case "TS1":TI_output.value=Number(TI_input.value)*1;break;
            case "TMs1":TI_output.value=Number(TI_input.value)*1000;break;
            case "TMi1":TI_output.value=Number(TI_input.value)*1000000;break;
            case "TM1":TI_output.value=Number(TI_input.value)*0.0166666667;break;
            case "TH1":TI_output.value=Number(TI_input.value)*0.0002777778;break;
            case "TD1":TI_output.value=Number(TI_input.value)*0.0000115741;break;
            case "TW1":TI_output.value=Number(TI_input.value)*0.0000016534;break;
            case "TMo1":TI_output.value=Number(TI_input.value)*3.802570537E-7;break;
            case "TY1":TI_output.value=Number(TI_input.value)*3.168808781E-8;break;
        }
    }
    else if(input_Ti === "TMs")
    {
        switch(output_Ti)
        {
            case "TS1":TI_output.value=Number(TI_input.value)*0.001;break;
            case "TMs1":TI_output.value=Number(TI_input.value)*1;break;
            case "TMi1":TI_output.value=Number(TI_input.value)*1000;break;
            case "TM1":TI_output.value=Number(TI_input.value)*0.0000166667;break;
            case "TH1":TI_output.value=Number(TI_input.value)*2.777777777E-7;break;
            case "TD1":TI_output.value=Number(TI_input.value)*1.157407407E-8;break;
            case "TW1":TI_output.value=Number(TI_input.value)*1.653439153E-9;break;
            case "TMo1":TI_output.value=Number(TI_input.value)*3.802570537E-10;break;
            case "TY1":TI_output.value=Number(TI_input.value)*3.168808781E-11;break;
        }
    }
    else if(input_Ti === "TMi")
    {
        switch(output_Ti)
        {
            case "TS1":TI_output.value=Number(TI_input.value)*0.000001;break;
            case "TMs1":TI_output.value=Number(TI_input.value)*0.001;break;
            case "TMi1":TI_output.value=Number(TI_input.value)*1;break;
            case "TM1":TI_output.value=Number(TI_input.value)*1.666666666E-8;break;
            case "TH1":TI_output.value=Number(TI_input.value)*2.777777777E-10;break;
            case "TD1":TI_output.value=Number(TI_input.value)*1.157407407E-11;break;
            case "TW1":TI_output.value=Number(TI_input.value)*1.653439153E-12;break;
            case "TMo1":TI_output.value=Number(TI_input.value)*3.802570537E-13;break;
            case "TY1":TI_output.value=Number(TI_input.value)*3.168808781E-14;break;
        }
    }
    else if(input_Ti === "TM")
    {
        switch(output_Ti)
        {
            case "TS1":TI_output.value=Number(TI_input.value)*60;break;
            case "TMs1":TI_output.value=Number(TI_input.value)*60000;break;
            case "TMi1":TI_output.value=Number(TI_input.value)*60000000;break;
            case "TM1":TI_output.value=Number(TI_input.value)*1;break;
            case "TH1":TI_output.value=Number(TI_input.value)*0.0166666667;break;
            case "TD1":TI_output.value=Number(TI_input.value)*0.0006944444;break;
            case "TW1":TI_output.value=Number(TI_input.value)*0.0000992063;break;
            case "TMo1":TI_output.value=Number(TI_input.value)*0.0000228154;break;
            case "TY1":TI_output.value=Number(TI_input.value)*0.0000019013;break;
        }
    }
    else if(input_Ti === "TH")
    {
        switch(output_Ti)
        {
            case "TS1":TI_output.value=Number(TI_input.value)*3600;break;
            case "TMs1":TI_output.value=Number(TI_input.value)*3600;break;
            case "TMi1":TI_output.value=Number(TI_input.value)*3600000000;break;
            case "TM1":TI_output.value=Number(TI_input.value)*60;break;
            case "TH1":TI_output.value=Number(TI_input.value)*1;break;
            case "TD1":TI_output.value=Number(TI_input.value)*0.0416666667;break;
            case "TW1":TI_output.value=Number(TI_input.value)*0.005952381;break;
            case "TMo1":TI_output.value=Number(TI_input.value)*0.0013689254;break;
            case "TY1":TI_output.value=Number(TI_input.value)*0.0001140771;break;
        }
    }
    else if(input_Ti === "TD")
    {
        switch(output_Ti)
        {
            case "TS1":TI_output.value=Number(TI_input.value)*86400;break;
            case "TMs1":TI_output.value=Number(TI_input.value)*86400000;break;
            case "TMi1":TI_output.value=Number(TI_input.value)*86400000000;break;
            case "TM1":TI_output.value=Number(TI_input.value)*1440;break;
            case "TH1":TI_output.value=Number(TI_input.value)*24;break;
            case "TD1":TI_output.value=Number(TI_input.value)*1;break;
            case "TW1":TI_output.value=Number(TI_input.value)*0.1428571429;break;
            case "TMo1":TI_output.value=Number(TI_input.value)*0.0328542094;break;
            case "TY1":TI_output.value=Number(TI_input.value)*0.0027378508;break;
        }
    }
    else if(input_Ti === "TW")
    {
        switch(output_Ti)
        {
            case "TS1":TI_output.value=Number(TI_input.value)*604800;break;
            case "TMs1":TI_output.value=Number(TI_input.value)*604800000;break;
            case "TMi1":TI_output.value=Number(TI_input.value)*604800000000;break;
            case "TM1":TI_output.value=Number(TI_input.value)*10080;break;
            case "TH1":TI_output.value=Number(TI_input.value)*168;break;
            case "TD1":TI_output.value=Number(TI_input.value)*168;break;
            case "TW1":TI_output.value=Number(TI_input.value)*1;break;
            case "TMo1":TI_output.value=Number(TI_input.value)*0.2299794661;break;
            case "TY1":TI_output.value=Number(TI_input.value)*0.0191649555;break;
        }
    }
    else if(input_Ti === "TMo")
    {
        switch(output_Ti)
        {
            case "TS1":TI_output.value=Number(TI_input.value)*2629800;break;
            case "TMs1":TI_output.value=Number(TI_input.value)*2629800000;break;
            case "TMi1":TI_output.value=Number(TI_input.value)*2629800000000;break;
            case "TM1":TI_output.value=Number(TI_input.value)*43830;break;
            case "TH1":TI_output.value=Number(TI_input.value)*730.5;break;
            case "TD1":TI_output.value=Number(TI_input.value)*30.4375;break;
            case "TW1":TI_output.value=Number(TI_input.value)*4.3482142857;break;
            case "TMo1":TI_output.value=Number(TI_input.value)*1;break;
            case "TY1":TI_output.value=Number(TI_input.value)*0.0833333333;break;
        }
    }
    else if(input_Ti === "TY")
    {
        switch(output_Ti)
        {
            case "TS1":TI_output.value=Number(TI_input.value)*31557600;break;
            case "TMs1":TI_output.value=Number(TI_input.value)*31557600000;break;
            case "TMi1":TI_output.value=Number(TI_input.value)*31557600000;break;
            case "TM1":TI_output.value=Number(TI_input.value)*525960;break;
            case "TH1":TI_output.value=Number(TI_input.value)*8766;break;
            case "TD1":TI_output.value=Number(TI_input.value)*8766;break;
            case "TW1":TI_output.value=Number(TI_input.value)*52.178571429;break;
            case "TMo1":TI_output.value=Number(TI_input.value)*12;break;
            case "TY1":TI_output.value=Number(TI_input.value)*1;break;
        }
    }
}