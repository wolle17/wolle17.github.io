var x = 0;
var y = 0;
var zielx = Math.floor(Math.random()*28)*20+20;
var ziely = 460;
var siegpunkte = 0;
var spielzeit = 45;
var restzeit = 0;
var startzeit = new Date();
var gegnerpositionen = [1, 10, 60, 100, 150, 296]; 
var gegnerbewegung = [2, 3, -2, 4, 5, -3];


$(document).ready(function() {
	takt = window.setInterval(taktung, 300);
	var spielbrett = document.getElementById('leinwand');
	spielfeld = spielbrett.getContext('2d');
	var spielfigur=new Image();
	spielfigur.src='bilder/biene3.png';
	spielfigur.onload=function() {
		spielfeld.drawImage(spielfigur,x,y);
	}

	function zeichneZielfeld() {
		var zielfeld = new Image();
		zielfeld.src='bilder/zielbereich.png';
		zielfeld.onload=function() {
			spielfeld.drawImage(zielfeld, zielx, ziely);
		}
	}
	zeichneZielfeld();

	function zielfelderreicht() {
		console.log("x: "+x+ "|Ziel x:"+ zielx);
		console.log("y: "+y+ "|Ziel y:"+ ziely);

		if(x==zielx && y==ziely) {
			// Ziel erreicht!
			console.log("Ziel erreicht!");

			// neues Ziel erzeugen
			if (ziely==460) {
				ziely = 0;
			}
			else {
				ziely=460;
			}
			zielx = Math.floor(Math.random()*28)*20+20;
            siegpunkte++;
            $('#punktestand').html('Siegpunkte: '+siegpunkte)
		}
	}	

    function taktung() {
		spielfeld.clearRect(0, 0, 600, 480);
		zeichneZielfeld();
		spielfeld.drawImage(spielfigur,x,y);
		zielfelderreicht();
        kollisionspruefungGegner();
        setzeGegner();

		var aktuellezeit = new Date();
		restzeit = spielzeit - Math.floor((aktuellezeit.getTime()-startzeit.getTime()) / 1000);
		$('#spielzeit').html('Spielzeit: ' + restzeit);
		if (restzeit <= 0) {
			spielende();
		}
	}
    function spielende() {
		clearInterval(takt);
		$('#spielendeanzeige').show();
	}
    function setzeGegner() {
        for (nr = 0; nr < gegnerpositionen.length; nr++) {
            gegnerpositionen[nr] += gegnerbewegung[nr] * 5;
            if (gegnerpositionen[nr] > 580 || gegnerpositionen[nr] < 0) {
                gegnerbewegung[nr] *= -1;
            }
            erzeugeGegner(gegnerpositionen[nr], 360-(nr*40));
        }
    }
    function erzeugeGegner(gx, gy) {
        var img = new Image();
        img.src = 'bilder/gegnerfigur.png';
        img.onload = function() {
            spielfeld.drawImage(img, gx, gy);
        }
    } 
    function kollisionspruefungGegner() {
        for (nr = 0; nr < gegnerpositionen.length; nr++) {
            var ygeg = 360-(nr*40);
            if ( Math.abs(x - gegnerpositionen[nr]) < 20 && y == ygeg ) {
                // Zusammenstoß
                kollisionGegner();
            }
        }
    }
    function kollisionGegner() {
        clearInterval(takt);
        $('#gameover').show();
    }
    
	$(document).bind('keydown', function (evt) {
		// console.log(evt.keyCode);
		switch (evt.keyCode) {
			// Pfeiltaste nach unten
			case 40:
				y += 20;
				if (y >= 480) {
					y = 460;
				}
				// console.log("Wert y: "+y);
				return false;
				break;
			// Pfeiltaste nach oben
			case 38:
				y -= 20;
				if (y <= 0) {
					y = 0;
				}
				// console.log("Wert -y: "+y);
				return false;
				break;
			// Pfeiltaste nach links
			case 37:
				x -= 20;
				if (x <= 0) {
					x = 0;
				}
				// console.log("Wert -x: "+x);
				return false;
				break;
			// Pfeiltaste nach rechts
			case 39:
				x += 20;
				if (x >= 600) {
					x = 580;
				}
				// console.log("Wert x: "+x);
				return false;
				break;
		}		
	});
});