function passvalue()
{
	/*const del = document.querySelectorAll('input[name="yesno"]');
    let storeValue;
    for (const rb of del) 
    {
    	if (rb.checked) 
    	{
            storeValue = rb.value;
                break;
        }
    }*/
    console.log(document.getElementById('animal').value);
            localStorage.setItem('animal', document.getElementById('animal').value);
			localStorage.setItem('anotheranimal', document.getElementById('anotheranimal').value);
			localStorage.setItem('onemoreanimal', document.getElementById('onemoreanimal').value);
			localStorage.setItem('adjective(p.a)', document.getElementById('adjective').value);
			localStorage.setItem('speed', document.getElementById('spd').value);
			localStorage.setItem('dect', document.querySelector('input[name="yesno"]:checked').value);
			localStorage.setItem('quot', document.getElementById('quote').value);
			localStorage.setItem('msz', document.getElementById('msz').value);
			localStorage.setItem('does', document.getElementById('verb').value);
			localStorage.setItem('nummer', document.getElementById('num').value);
	}




function passer()
{
	var x, i;
	x = document.querySelectorAll(".one");
	for (i = 0; i < x.length; i++) 
	{
		x[i].innerHTML = localStorage.getItem('animal');
	}
	var y, j;
	y = document.querySelectorAll(".two");
	for (j = 0; j < y.length; j++) 
	{
		y[j].innerHTML = localStorage.getItem('anotheranimal');
	}
	var z, k;
	z = document.querySelectorAll(".veerb");
	for (k = 0; k < z.length; k++) 
	{
		z[k].innerHTML = localStorage.getItem('does');
	}
	document.getElementById('number').innerHTML=localStorage.getItem('nummer');
	document.getElementById('yess').innerHTML=localStorage.getItem('yes');
	document.getElementById('three').innerHTML=localStorage.getItem('onemoreanimal');
	document.getElementById('quots').innerHTML=localStorage.getItem('quot');
	document.getElementById('rel').innerHTML=localStorage.getItem('speed');
	document.getElementById('adj').innerHTML=localStorage.getItem('adjective(p.a)');
	document.getElementById('message').innerHTML=localStorage.getItem('msz');
	/*localStorage.clear();*/
}