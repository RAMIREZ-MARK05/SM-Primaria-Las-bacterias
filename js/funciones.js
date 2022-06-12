// VARIABLES -----------------------------------------------------------------------------------------------------------------------------

// Divs -----------------------------------------------------------------------------------------
var divLogo;
var divTituloGeneral;
var miniaturaTituloGeneral;
var contenedor;
var divTxtInicio;
var divBt;
var divTxtJugar;
var divEnunciado;
var divRespuesta1;
var ventanaFinal;
var divTxtFinal;
var divBtRepetir;
var divTxtRepetir;
var divBloqueo;

// Out ------------------------------------------------------------------------------------------
var outInicio;
var out1;
var out2;

// TimeOut --------------------------------------------------------------------------------------
var timeOut1;
var timeOut2;

// Vars -----------------------------------------------------------------------------------------
var preguntaElegida = '0';
var contadorPreguntas = 0;
var estadoPreguntas = ['0','0','0','0','0','0','0','0','0','0'];
var numLinkActivo = 0;
var respActivada = 0;
var recarga = 0;

// FUNCIONES -----------------------------------------------------------------------------------------------------------------------------

// CARGA DEL SONIDO -----------------------------------------------------------------------------

var html5_audiotypes =
{
"mp3": "audio/mpeg",
"mp4": "audio/mp4",
"ogg": "audio/ogg",
"wav": "audio/wav"
}

function createsoundbite(sound)
{
	var html5audio=document.createElement('audio')
	if (html5audio.canPlayType)
	{
		for (var i=0; i<arguments.length; i++)
		{
			var sourceel=document.createElement('source')
			sourceel.setAttribute('src', arguments[i])
			if (arguments[i].match(/.(w+)$/i))
			sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
			html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip = function()
		{
			html5audio.pause()
			html5audio.currentTime=0
			html5audio.play()
		}
		return html5audio
	}
	else
	{
	return {playclip:function(){throw new Error('Su navegador no soporta HTML5')}}
	}
}

var fallo1 = createsoundbite('data/audios/nono.mp3');
var acierto1 = createsoundbite('data/audios/ok.mp3');
var final1 = createsoundbite('data/audios/endok1.mp3');
var final2 = createsoundbite('data/audios/endok2.mp3');
var final3 = createsoundbite('data/audios/endBad.mp3');

// CONSTRUCTORA ----------------------------------------------------------------------------------

function constructora()
{
	// Div del logo
	divLogo = document.createElement('div');
	divLogo.id = 'logo';
	topBarra.appendChild(divLogo);
	
	switch(numLogo)
	{
		case '1': document.getElementById("logo").id= "logoSM";
				  break;
		case '2': document.getElementById("logo").id= "logoXerme";
				  break;
		case '3': document.getElementById("logo").id= "logoIkasmina";
				  break;
		case '4': document.getElementById("logo").id= "logoCruilla";
				  break;
	}
	
	// Gestión de la miniatura y del título general
	divTituloGeneral = document.createElement('div');
	divTituloGeneral.id = 'divTituloGeneral';
	divTituloGeneral.innerHTML = tituloGeneral;
	topBarra.appendChild(divTituloGeneral);
	
	if(miniatura == '2')
	{
		divTituloGeneral.id = 'divTituloGeneral2';
			
		miniaturaTituloGeneral = document.createElement('div');
		miniaturaTituloGeneral.id = 'miniaturaTituloGeneral';
		topBarra.appendChild(miniaturaTituloGeneral);
	}
}


// INICIO -----------------------------------------------------------------------------------------

function cargarIntro()
{
	// Contenedor
	contenedor = document.createElement('div');
	contenedor.id = 'contenedor';
	contenedorPrincipal.appendChild(contenedor);
	
	// Texto
	divTxtInicio = document.createElement('div');
	divTxtInicio.id = 'divTxtInicio';
	divTxtInicio.innerHTML = txtInicio;
	contenedor.appendChild(divTxtInicio);
	
	// Bt
	divBt = document.createElement('div');
	divBt.id = 'divBt';
	divBt.onmouseover = function () { link_over(2); };  
	divBt.onmouseout = function () { link_out(2); };  
	divBt.onclick = function () { link_click(2); };
	contenedor.appendChild(divBt);
	
	divTxtJugar = document.createElement('div');
	divTxtJugar.id = 'divTxtJugar';
	divTxtJugar.innerHTML = txtJugar;
	divBt.appendChild(divTxtJugar);
}

// PANTALLA 1 --------------------------------------------------------------------------------------

function cargarVentanaPregunta()
{
	exportRoot.ventanaPregunta.gotoAndPlay(1);
}

function cargarPregunta()
{
	if(recarga == 0)
	{
		if(prueba == '1')
		{
			preguntaElegida = preguntaPrueba;
			if(preguntaPrueba == '0'){alert('¡Cuidado! No escribiste el número de pregunta de prueba que quieres que se cargue en el documento de configuración (data/texts/texto.js)');}
		}
		if(prueba == '0')
		{
			preguntaElegida = Math.floor(Math.random() * (10));
			
			if(estadoPreguntas[preguntaElegida] == '1')
			{
				return cargarPregunta();
			}
			if(estadoPreguntas[preguntaElegida] == '0')
			{
				estadoPreguntas[preguntaElegida] = '1';
				
				contadorPreguntas ++;
				
				cargaPreguntaElegida();
			}
		}
	}
	else
	{
		out2 = document.getElementById('divBloqueo');
		out2.parentNode.removeChild(out2);
	}
}

function cargaPreguntaElegida()
{	
	// Contenedor
	contenedor = document.createElement('div');
	contenedor.id = 'contenedor';
	contenedorPrincipal.appendChild(contenedor);
	
	// Enunciado
	divEnunciado = document.createElement('div');
	divEnunciado.id = 'divEnunciado';
	divEnunciado.innerHTML = eval('txtPregunta' + preguntaElegida);
	contenedor.appendChild(divEnunciado);
	
	// Respuestas
	divRespuesta1 = document.createElement('div');
	divRespuesta1.id = 'divRespuesta1';
	divRespuesta1.innerHTML = eval('txtRespuesta' + preguntaElegida + '_1');
	divRespuesta1.onmouseover = function () { link_over(3); };  
	divRespuesta1.onmouseout = function () { link_out(3); };  
	divRespuesta1.onclick = function () { link_click(3); };
	contenedor.appendChild(divRespuesta1);
	
	divRespuesta2 = document.createElement('div');
	divRespuesta2.id = 'divRespuesta2';
	divRespuesta2.innerHTML = eval('txtRespuesta' + preguntaElegida + '_2');
	divRespuesta2.onmouseover = function () { link_over(4); };  
	divRespuesta2.onmouseout = function () { link_out(4); };  
	divRespuesta2.onclick = function () { link_click(4); };
	contenedor.appendChild(divRespuesta2);
	
	divRespuesta3 = document.createElement('div');
	divRespuesta3.id = 'divRespuesta3';
	divRespuesta3.innerHTML = eval('txtRespuesta' + preguntaElegida + '_3');
	divRespuesta3.onmouseover = function () { link_over(5); };  
	divRespuesta3.onmouseout = function () { link_out(5); };  
	divRespuesta3.onclick = function () { link_click(5); };
	contenedor.appendChild(divRespuesta3);
}

function cargarPreguntaSiguiente()
{
	if(contadorPreguntas >= 5)
	{
		exportRoot.gotoAndPlay(20);
	}
	else
	{
		exportRoot.animRed.gotoAndStop(0);
		exportRoot.gotoAndPlay(10);
	}
}

function cargarFinal()
{
	final2.playclip();
	
	// Contenedor
	contenedor = document.createElement('div');
	contenedor.id = 'contenedor';
	contenedorPrincipal.appendChild(contenedor);
	
	//Ventana
	ventanaFinal = document.createElement('div');
	ventanaFinal.id = 'ventanaFinal';
	contenedor.appendChild(ventanaFinal);
	
	// Texto
	divTxtFinal = document.createElement('div');
	divTxtFinal.id = 'divTxtFinal';
	divTxtFinal.innerHTML = txtFinal;
	ventanaFinal.appendChild(divTxtFinal);
	
	// Botón Repetir
	divBtRepetir = document.createElement('div');
	divBtRepetir.id = 'divBtRepetir';
	divBtRepetir.onmouseover = function () { link_over(6); };  
	divBtRepetir.onmouseout = function () { link_out(6); };  
	divBtRepetir.onclick = function () { link_click(6); };
	ventanaFinal.appendChild(divBtRepetir);
	
	divTxtRepetir = document.createElement('div');
	divTxtRepetir.id = 'divTxtRepetir';
	divTxtRepetir.innerHTML = txtRepetir;
	divBtRepetir.appendChild(divTxtRepetir);
}

// COMPROBACIÓN DE RESPUESTA -----------------------------------------------------------------------

function comprobarRespuesta(respActivada)
{
	//Div bloqueo de pantalla
	divBloqueo = document.createElement('div');
	divBloqueo.id = 'divBloqueo';
	contenedor.appendChild(divBloqueo);
	
	if(eval('correcto' + preguntaElegida) == respActivada)
	{
		acierto1.playclip();
		
		switch(respActivada)
		{
			case 1: divRespuesta1.style.backgroundColor = '#0db900'; break;
			case 2: divRespuesta2.style.backgroundColor = '#0db900'; break;
			case 3: divRespuesta3.style.backgroundColor = '#0db900'; break;
		}
		
		timeOut1 = window.setTimeout('playAciertoAnim();', 1000);
	}
	else
	{
		fallo1.playclip();
		
		switch(respActivada)
		{
			case 1: divRespuesta1.style.backgroundColor = '#ff0000'; break;
			case 2: divRespuesta2.style.backgroundColor = '#ff0000'; break;
			case 3: divRespuesta3.style.backgroundColor = '#ff0000'; break;
		}
		
		timeOut2 = window.setTimeout('playFalloAnim();', 1000);
	}
}

function playFalloAnim()
{
	window.clearTimeout(timeOut2);
	
	document.getElementById('contenedor').style.visibility = "hidden";
	exportRoot.ventanaPregunta.gotoAndStop(0);
	exportRoot.animRed.gotoAndPlay(9);
}

function cargarAnimBad()
{
	exportRoot.animalitoBad.gotoAndPlay(1);
	exportRoot.animalito.visible = false;
}

function recargaAnimalito()
{
	exportRoot.animalito.visible = true;
	exportRoot.animRed.play();
}

function recargaPregunta()
{
	recarga = 1;
	
	document.getElementById('contenedor').style.visibility = "visible";
	exportRoot.ventanaPregunta.gotoAndStop(4);
}

function playAciertoAnim()
{
	recarga = 0;
	
	window.clearTimeout(timeOut1);
	
	out1 = document.getElementById('contenedor');
	out1.parentNode.removeChild(out1);
	
	exportRoot.ventanaPregunta.gotoAndStop(0);
	exportRoot.animRed.play();
}

// LIMPIEZA ----------------------------------------------------------------------------------------

function limpiarCont()
{
	outInicio = document.getElementById('contenedor');
	outInicio.parentNode.removeChild(outInicio);
	
	exportRoot.play();
}

// FUNCCIONES BOTONERA -----------------------------------------------------------------------------

function link_over(numLinkActivo)
{
	document.body.style.cursor = 'pointer';
	
	switch(numLinkActivo)
	{
		case 1: document.getElementById('divCuadroImg1').style.opacity = '0.5'; break;
		case 2: document.getElementById('divBt').style.backgroundColor = '#000000'; break;
		case 3: document.getElementById('divRespuesta1').style.color = '#999999'; break;
		case 4: document.getElementById('divRespuesta2').style.color = '#999999'; break;
		case 5: document.getElementById('divRespuesta3').style.color = '#999999'; break;
		case 6: document.getElementById('divBtRepetir').style.backgroundColor = '#000000'; break;
	}
}

function link_out(numLinkActivo)
{
	document.body.style.cursor = 'default';
	
	switch(numLinkActivo)
	{
		case 1: document.getElementById('divCuadroImg1').style.opacity = '0'; break;
		case 2: document.getElementById('divBt').style.backgroundColor = '#999999'; break;
		case 3: document.getElementById('divRespuesta1').style.color = '#000000'; break;
		case 4: document.getElementById('divRespuesta2').style.color = '#000000'; break;
		case 5: document.getElementById('divRespuesta3').style.color = '#000000'; break;
		case 6: document.getElementById('divBtRepetir').style.backgroundColor = '#999999'; break;
	}
}

function link_click(numLinkActivo)
{
	document.body.style.cursor = 'default';
	
	switch(numLinkActivo)
	{
		case 1: estadoNav = 1; limpiarInicio(); break;
		case 2: limpiarCont(); break;		
		case 3: comprobarRespuesta(1); break;		
		case 4: comprobarRespuesta(2); break;		
		case 5: comprobarRespuesta(3); break;		
		case 6: location.reload(); break;		
	}
}