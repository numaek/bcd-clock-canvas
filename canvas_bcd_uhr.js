
	var ncvColorRed   = '#FF0000';
	var ncvColorBlue  = '#00FFFF';
	var ncvColorGreen = '#00FF00';

	function ncv_led(obj, x, y, r, on, color)
	{
		r = ( r == 0 ) ? 3 : r;

		obj.beginPath();

		obj.arc(x, y, r, 0, 2 * Math.PI, true);

		obj.fillStyle = ( on == 1 ) ? color : '#5B5B5B';
		obj.fill();

		obj.closePath();
	}

	function ncv_uhr()
	{
		var ncvUhr = document.getElementById('canvas_uhr');
		if( ncvUhr.getContext )
		{
			var ncvIn2       = new Array(2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59);
			var ncvIn4       = new Array(4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55);

			ncvUhr           = ncvUhr.getContext('2d');

			ncvUhr.fillStyle = '#000000';
			ncvUhr.clearRect(0, 0, 100, 200);
			ncvUhr.fillRect( 0, 0, 100, 200);

			ncvUhr.font      = "normal 8px Arial,sans-serif";

			var ncvDate      = new Date();
			var ncvStunden   = ncvDate.getHours();
			var ncvMinuten   = ncvDate.getMinutes();
			var ncvSekunden  = ncvDate.getSeconds();
			var ncvTag       = ncvDate.getDate();
			var ncvMonat     = ncvDate.getMonth();

			// Steuerung
			// =========
			ncvLedValue = -1;
			if( document.getElementById('ncvPanel1') )
			{
				if( document.getElementById('ncvPanel4').checked == true )
				{
					ncvLedValue = ( ncvSekunden % 2 != 0 ) ? 1 : 0;
				} else
				if( document.getElementById('ncvPanel3').checked == true )
				{
					ncvLedValue = 1;
				} else
				if( document.getElementById('ncvPanel2').checked == true )
				{
					ncvLedValue = 0;
				}
			}

			// Stunden
			// =======
			if( ncvLedValue == -1 )
			{
				ncvOnSt_1        = ( ncvStunden % 2 != 0 ) ? 1 : 0;
				ncvOnSt_2        = ( ncvStunden == 2 || ncvStunden == 3 || ncvStunden == 6 || ncvStunden == 7 || ncvStunden == 10 || ncvStunden == 11 || ncvStunden == 14 || ncvStunden == 15 || ncvStunden == 18 || ncvStunden == 19 || ncvStunden == 22 || ncvStunden == 23 ) ? 1 : 0;
				ncvOnSt_4        = ( ( ncvStunden > 3 && ncvStunden < 8 ) || ( ncvStunden > 11 && ncvStunden < 16 ) || ( ncvStunden > 19 ) ) ? 1 : 0;
				ncvOnSt_8        = ( ncvStunden > 7 && ncvStunden < 16 ) ? 1 : 0;
				ncvOnSt_16       = ( ncvStunden > 15 ) ? 1 : 0;
				ncvOnSt_32       = 0;
			} else
			  {
				ncvOnSt_1        = ncvLedValue;
				ncvOnSt_2        = ncvLedValue;
				ncvOnSt_4        = ncvLedValue;
				ncvOnSt_8        = ncvLedValue;
				ncvOnSt_16       = ncvLedValue;
				ncvOnSt_32       = ncvLedValue;
			  }

			ncv_led(ncvUhr, 20, 80, 0, ncvOnSt_1,  ncvColorGreen);
			ncv_led(ncvUhr, 23, 70, 0, ncvOnSt_2,  ncvColorGreen);
			ncv_led(ncvUhr, 27, 60, 0, ncvOnSt_4,  ncvColorGreen);
			ncv_led(ncvUhr, 32, 51, 0, ncvOnSt_8,  ncvColorGreen);
			ncv_led(ncvUhr, 38, 43, 0, ncvOnSt_16, ncvColorGreen);
			ncv_led(ncvUhr, 45, 36, 0, ncvOnSt_32, ncvColorGreen);

			ncvUhr.fillStyle = ncvColorGreen;

			ncvUhr.fillText("1",  11, 83);
			ncvUhr.fillText("2",  13, 70);
			ncvUhr.fillText("4",  17, 59);
			ncvUhr.fillText("8",  23, 49);
			ncvUhr.fillText("16", 27, 38);
			ncvUhr.fillText("32", 37, 28);

			ncvUhr.fillText("St",  32, 83);

			// Minuten
			// =======
			if( ncvLedValue == -1 )
			{
				ncvOnMin_1       = ( ncvMinuten % 2 != 0 ) ? 1 : 0;
				ncvOnMin_2       = ( ncvIn2.indexOf(ncvMinuten) != -1 ) ? 1 : 0;
				ncvOnMin_4       = ( ncvIn4.indexOf(ncvMinuten) != -1 ) ? 1 : 0;
				ncvOnMin_8       = ( ( ncvMinuten > 7 && ncvMinuten < 16 ) || ( ncvMinuten > 23 && ncvMinuten < 32 ) || ( ncvMinuten > 39 && ncvMinuten < 48 ) || ( ncvMinuten > 55 ) ) ? 1 : 0;
				ncvOnMin_16      = ( ( ncvMinuten > 15 && ncvMinuten < 32 ) || ncvMinuten > 47 ) ? 1 : 0;
				ncvOnMin_32      = ( ncvMinuten > 31 ) ? 1 : 0;
			} else
			  {
				ncvOnMin_1        = ncvLedValue;
				ncvOnMin_2        = ncvLedValue;
				ncvOnMin_4        = ncvLedValue;
				ncvOnMin_8        = ncvLedValue;
				ncvOnMin_16       = ncvLedValue;
				ncvOnMin_32       = ncvLedValue;
			  }

			ncv_led(ncvUhr, 60, 80, 0, ncvOnMin_1,  ncvColorGreen);
			ncv_led(ncvUhr, 63, 70, 0, ncvOnMin_2,  ncvColorGreen);
			ncv_led(ncvUhr, 67, 60, 0, ncvOnMin_4,  ncvColorGreen);
			ncv_led(ncvUhr, 72, 51, 0, ncvOnMin_8,  ncvColorGreen);
			ncv_led(ncvUhr, 78, 43, 0, ncvOnMin_16, ncvColorGreen);
			ncv_led(ncvUhr, 85, 36, 0, ncvOnMin_32, ncvColorGreen);

			ncvUhr.fillStyle = ncvColorGreen;

			ncvUhr.fillText("1",  51, 83);
			ncvUhr.fillText("2",  53, 70);
			ncvUhr.fillText("4",  57, 59);
			ncvUhr.fillText("8",  63, 49);
			ncvUhr.fillText("16", 67, 38);
			ncvUhr.fillText("32", 77, 28);

			ncvUhr.fillText("Min",  73, 83);

			// Sekunden
			// ========
			if( ncvLedValue == -1 )
			{
				ncvOnSek_1       = ( ncvSekunden % 2 != 0 ) ? 1 : 0;
				ncvOnSek_2       = ( ncvIn2.indexOf(ncvSekunden) != -1 ) ? 1 : 0;
				ncvOnSek_4       = ( ncvIn4.indexOf(ncvSekunden) != -1 ) ? 1 : 0;
				ncvOnSek_8       = ( ( ncvSekunden > 7 && ncvSekunden < 16 ) || ( ncvSekunden > 23 && ncvSekunden < 32 ) || ( ncvSekunden > 39 && ncvSekunden < 48 ) || ( ncvSekunden > 55 ) ) ? 1 : 0;
				ncvOnSek_16      = ( ( ncvSekunden > 15 && ncvSekunden < 32 ) || ncvSekunden > 47 ) ? 1 : 0;
				ncvOnSek_32      = ( ncvSekunden > 31 ) ? 1 : 0;
			} else
			  {
				ncvOnSek_1        = ncvLedValue;
				ncvOnSek_2        = ncvLedValue;
				ncvOnSek_4        = ncvLedValue;
				ncvOnSek_8        = ncvLedValue;
				ncvOnSek_16       = ncvLedValue;
				ncvOnSek_32       = ncvLedValue;
			  }

			ncv_led(ncvUhr, 15, 115, 0, ncvOnSek_1,  ncvColorRed);
			ncv_led(ncvUhr, 25, 115, 0, ncvOnSek_2,  ncvColorRed);
			ncv_led(ncvUhr, 35, 115, 0, ncvOnSek_4,  ncvColorRed);
			ncv_led(ncvUhr, 45, 115, 0, ncvOnSek_8,  ncvColorRed);
			ncv_led(ncvUhr, 55, 115, 0, ncvOnSek_16, ncvColorRed);
			ncv_led(ncvUhr, 65, 115, 0, ncvOnSek_32, ncvColorRed);

			ncvUhr.fillStyle = ncvColorRed;

			ncvUhr.fillText("1",  13, 107);
			ncvUhr.fillText("2",  23, 107);
			ncvUhr.fillText("4",  33, 107);
			ncvUhr.fillText("8",  43, 107);
			ncvUhr.fillText("16", 50, 107);
			ncvUhr.fillText("32", 61, 107);

			ncvUhr.fillText("Sek",  72, 118);

			// Tag
			// ===
			if( ncvLedValue == -1 )
			{
				ncvOnT_1         = ( ncvTag % 2 != 0 ) ? 1 : 0;
				ncvOnT_2         = ( ncvTag == 2 || ncvTag == 3 || ncvTag == 6 || ncvTag == 7 || ncvTag == 10 || ncvTag == 11 || ncvTag == 14 || ncvTag == 15 || ncvTag == 18 || ncvTag == 19 || ncvTag == 22 || ncvTag == 23 || ncvTag == 26 || ncvTag == 27 || ncvTag == 30 || ncvTag == 31 ) ? 1 : 0;
				ncvOnT_4         = ( ( ncvTag > 3 && ncvTag < 8 ) || ( ncvTag > 11 && ncvTag < 16 ) || ( ncvTag > 19 && ncvTag < 24 ) || ( ncvTag > 27 ) ) ? 1 : 0;
				ncvOnT_8         = ( ( ncvTag > 7 && ncvTag < 16 ) || ( ncvTag > 23 && ncvTag < 32 ) ) ? 1 : 0;
				ncvOnT_16        = ( ncvTag > 15 ) ? 1 : 0;
				ncvOnT_32        = 0;
			} else
			  {
				ncvOnT_1        = ncvLedValue;
				ncvOnT_2        = ncvLedValue;
				ncvOnT_4        = ncvLedValue;
				ncvOnT_8        = ncvLedValue;
				ncvOnT_16       = ncvLedValue;
				ncvOnT_32       = ncvLedValue;
			  }

			ncv_led(ncvUhr, 17, 160, 0, ncvOnT_1,  ncvColorBlue);
			ncv_led(ncvUhr, 14, 150, 0, ncvOnT_2,  ncvColorBlue);
			ncv_led(ncvUhr, 19, 140, 0, ncvOnT_4,  ncvColorBlue);
			ncv_led(ncvUhr, 28, 140, 0, ncvOnT_8,  ncvColorBlue);
			ncv_led(ncvUhr, 33, 150, 0, ncvOnT_16, ncvColorBlue);
			ncv_led(ncvUhr, 30, 160, 0, ncvOnT_32, ncvColorBlue);

			ncvUhr.fillStyle = ncvColorBlue;

			ncvUhr.fillText("1",   8, 165);
			ncvUhr.fillText("2",   5, 152);
			ncvUhr.fillText("4",  10, 142);
			ncvUhr.fillText("8",  33, 142);
			ncvUhr.fillText("16", 37, 152);
			ncvUhr.fillText("32", 35, 165);

			ncvUhr.fillText("T",  21, 154);

			// Monat
			// =====
			if( ncvLedValue == -1 )
			{
				ncvOnM_1         = ( ncvMonat % 2 != 0 ) ? 0 : 1;
				ncvOnM_2         = ( ncvMonat == 1 || ncvMonat == 2 || ncvMonat == 5 || ncvMonat == 6 || ncvMonat == 9 || ncvMonat == 10 ) ? 1 : 0;
				ncvOnM_4         = ( ( ncvMonat > 2 && ncvMonat < 7 ) || ncvMonat > 10 ) ? 1 : 0;
				ncvOnM_8         = ( ncvMonat > 7 && ncvMonat < 16 ) ? 1 : 0;
				ncvOnM_16        = 0;
				ncvOnM_32        = 0;
			} else
			  {
				ncvOnM_1        = ncvLedValue;
				ncvOnM_2        = ncvLedValue;
				ncvOnM_4        = ncvLedValue;
				ncvOnM_8        = ncvLedValue;
				ncvOnM_16       = ncvLedValue;
				ncvOnM_32       = ncvLedValue;
			  }

			ncv_led(ncvUhr, 62, 160, 0, ncvOnM_1,  ncvColorBlue);
			ncv_led(ncvUhr, 59, 150, 0, ncvOnM_2,  ncvColorBlue);
			ncv_led(ncvUhr, 64, 140, 0, ncvOnM_4,  ncvColorBlue);
			ncv_led(ncvUhr, 73, 140, 0, ncvOnM_8,  ncvColorBlue);
			ncv_led(ncvUhr, 78, 150, 0, ncvOnM_16, ncvColorBlue);
			ncv_led(ncvUhr, 75, 160, 0, ncvOnM_32, ncvColorBlue);

			ncvUhr.fillStyle = ncvColorBlue;

			ncvUhr.fillText("1",  53, 165);
			ncvUhr.fillText("2",  50, 152);
			ncvUhr.fillText("4",  55, 142);
			ncvUhr.fillText("8",  78, 142);
			ncvUhr.fillText("16", 82, 152);
			ncvUhr.fillText("32", 80, 165);

			ncvUhr.fillText("M",  66, 154);

			ncvUhr.fillStyle = '#FFFFFF';
			ncvUhr.font      = "normal 10px Arial,sans-serif";
			ncvUhr.fillText("www.numaek.de", 12, 185);

			window.setTimeout('ncv_uhr()', 1000);
		}
	}

	document.onload = ncv_uhr();
