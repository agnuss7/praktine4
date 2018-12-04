var win=null;
var z=true;
var x="url('x.png')";
var o="url('o.png')";
var xs=0;
var os=0;
function change (a)
{
    if(a.innerHTML=="c" && win==null)
    {
        if(z==true){
            a.style.backgroundImage=x;
            a.innerHTML="x";
            z=false;
            document.getElementById('no').style.backgroundColor="Salmon";
            document.getElementById('nx').style.removeProperty('background-Color');
        }
        else {
            a.style.backgroundImage = o;
            a.innerHTML="o";
            z = true;
            document.getElementById('nx').style.backgroundColor="Salmon";
            document.getElementById('no').style.removeProperty('background-Color');
        }
        check();
    }
}

function start(){
	    z=true;
    win=null;
    document.getElementById('nx').style.backgroundColor="Salmon";
}


function zaid() {
    z=true;
    win=null;
    document.getElementById('nx').style.backgroundColor="Salmon";
    document.getElementById('no').style.removeProperty('background-Color');
    document.getElementById('x').style.width='0px';
    document.getElementById('o').style.width='0px';
    var u1=document.getElementById('1');
    var u2=document.getElementById('2');
    var u3=document.getElementById('3');
    var u4=document.getElementById('4');
    var u5=document.getElementById('5');
    var u6=document.getElementById('6');
    var u7=document.getElementById('7');
    var u8=document.getElementById('8');
    var u9=document.getElementById('9');
    u1.innerHTML="c";
    u1.style.removeProperty("background-Image");
    u2.innerHTML="c";
    u2.style.removeProperty("background-Image");
    u3.innerHTML="c";
    u3.style.removeProperty("background-Image");
    u4.innerHTML="c";
    u4.style.removeProperty("background-Image");
    u5.innerHTML="c";
    u5.style.removeProperty("background-Image");
    u6.innerHTML="c";
    u6.style.removeProperty("background-Image");
    u7.innerHTML="c";
    u7.style.removeProperty("background-Image");
    u8.innerHTML="c";
    u8.style.removeProperty("background-Image");
    u9.innerHTML="c";
    u9.style.removeProperty("background-Image");
}
function xup(){
    win=1;
    document.getElementById('x').style.width="100%";
    xs+=1;
    document.getElementById('xscore').innerHTML=xs.toString();
    alert(document.getElementById('nx').value+" laimėjo!");
}
function oup() {
    win=2;
    document.getElementById('o').style.width='100%';
    os+=1;
    document.getElementById('oscore').innerHTML=os.toString();
    alert(document.getElementById('no').value+" laimėjo!");
}

function check ()
{
    var u1=document.getElementById('1');
    var u2=document.getElementById('2');
    var u3=document.getElementById('3');
    var u4=document.getElementById('4');
    var u5=document.getElementById('5');
    var u6=document.getElementById('6');
    var u7=document.getElementById('7');
    var u8=document.getElementById('8');
    var u9=document.getElementById('9');

    if(u1.innerHTML=='x' && u2.innerHTML=='x' && u3.innerHTML=='x')
    {
        xup();
    } else if (u1.innerHTML=='o' && u2.innerHTML=='o' && u3.innerHTML=='o')
    {
        oup();
    } else if (u4.innerHTML=='o' && u5.innerHTML=='o' && u6.innerHTML=='o')
    {
        oup();
    } else if (u7.innerHTML=='o' && u8.innerHTML=='o' && u9.innerHTML=='o')
    {
        oup();
    }
    else if (u1.innerHTML=='o' && u5.innerHTML=='o' && u9.innerHTML=='o')
    {
        oup();
    } else if (u3.innerHTML=='o' && u5.innerHTML=='o' && u7.innerHTML=='o')
    {
        oup();
    } else if (u1.innerHTML=='o' && u4.innerHTML=='o' && u7.innerHTML=='o')
    {
        oup();
    } else if (u2.innerHTML=='o' && u5.innerHTML=='o' && u8.innerHTML=='o')
    {
        oup();
    } else if (u3.innerHTML=='o' && u6.innerHTML=='o' && u9.innerHTML=='o')
    {
        oup();
    }
    else if (u4.innerHTML=='x' && u5.innerHTML=='x' && u6.innerHTML=='x')
    {
        xup();
    } else if (u7.innerHTML=='x' && u8.innerHTML=='x' && u9.innerHTML=='x')
    {
        xup();
    }
    else if (u1.innerHTML=='x' && u5.innerHTML=='x' && u9.innerHTML=='x')
    {
        xup();
    } else if (u3.innerHTML=='x' && u5.innerHTML=='x' && u7.innerHTML=='x')
    {
        xup();
    } else if (u1.innerHTML=='x' && u4.innerHTML=='x' && u7.innerHTML=='x')
    {
        xup();
    } else if (u2.innerHTML=='x' && u5.innerHTML=='x' && u8.innerHTML=='x')
    {
        xup();
    } else if (u3.innerHTML=='x' && u6.innerHTML=='x' && u9.innerHTML=='x')
    {
        xup();
    }
}