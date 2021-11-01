
	var x;
	function Dagit()
	{
		x = Math.floor(Math.random() * 3);
	} 

	var kontrol = 0;
	function Kontrol(resim){
		var resimId = resim.substr(3,1);
		if(kontrol < 2){
			kontrol++;
			if(resimId == x){
				kontrol = 2;
				document.getElementById("alanId").style.display = "none";
				document.getElementById("kazandiId").style.display = "inline-block";
				document.getElementById(resim).src = "kedi.jpg";
			}
			else if(kontrol >= 2){
				document.getElementById("alanId").style.display = "none";
				document.getElementById("yenildiId").style.display = "inline-block";
				document.getElementById(resim).src = "kopek.jpg";
			}
			else{
				document.getElementById(resim).src = "kopek.jpg";
			}
		}
	}
