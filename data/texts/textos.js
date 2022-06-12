/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Los campos de texto son editables con los tags HTML comunes admitidos por el HTML5.
Ejemplos :
<b></b>
<i></i>
<u></u>
<img src="data/imgs/bt.png">
<br />
<a href="http://www.google.es"></a>

Para introducir una comilla o apostrofe dentro de los textos que saldrán en el interactivos, es decir: dentro de las variables, se debe poner: \’
ejemplo (texto en frances): 
l'autre = l\’autre

El diseño de la carta cubierta se puede cambiar. La imagen está en " data/imgs/caraB.png ". Sin variar formato, nombre ni tamaño.
Así como el diseño de la miniatura de la barra de arriba de la interface, si es que se pone una miniatura " data/imgs/miniatura/mini.png ".
 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */ 

// CONFIGURACIÓN DE LA INTERFACE --------------------------------------------------------------------------------------------------------------------------------------------

// CONFIGURACIÓN DE LA MINIATURA DEL TITULO ---------------------------------------------------------------------------------------------------------------------------------
// 1 = sin miniatura de personaje // 2 = con miniatura (tamaño de la miniatura 40*40 / PNG con transparencia / directorio : "data/imgs/miniatura/mini.png")
var miniatura = '1';

// CONFIGURACIÓN DEL LOGO ---------------------------------------------------------------------------------------------------------------------------------------------------
// 1 = SM // 2 = SMxerme // 3 = ikasmina // 4 = cruilla
var numLogo = '1';

// TEXTOS -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Titulo general
var tituloGeneral = 'El mundo de las bacterias';

// Texto botón jugar
var txtJugar = 'Jugar';

// Texto botón repetir
var txtRepetir = 'Repetir';

// INICIO -------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Texto pantalla de inicio
var txtInicio = 'Vivimos rodeados de bacterias, pero realmente, ¿qué sabes sobre ellas? <br><br>Demuestra tus conocimientos y no te dejes atrapar por la araña.';

/* PREGUNTAS ----------------------------------------------------------------------------------------------------------------------------------------------------------------
 
IMPORTANTE : 
- Las 10 preguntas tienen que estar rellenas. Además con la misma estructura de pregunta y respuestas que está ahora. La actividad expondrá 5 preguntas de las 10 
de forma aleatoria.
- El mode de prueba se usa para la comprobación de la actividad final. Para cargar una pregunta concreta. Para el formato final de la actividad, en el modo de prueba se tiene
que poner un 0;
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// MODO DE PRUEBA : var prueba = 0 == modo final // var prueba = 1 == modo prueba // var preguntaPrueba = el numero de 1 a 10 de la pregunta a cargar -----------------------
var prueba = '0';
var preguntaPrueba = '5';

// FIN DE MODO DE PRUEBA ----------------------------------------------------------------------------------------------------------------------------------------------------

// Pregunta 1
var txtPregunta0 = '<b>¿Qué microorganismos causan la menigitis?</b>';
var txtRespuesta0_1 = '- Los virus.';
var txtRespuesta0_2 = '- Las bacterias.';
var txtRespuesta0_3 = '- Los protozoos.';
var correcto0 = 2;

// Pregunta 2
var txtPregunta1 = '<b>¿Qué microorganismos causan el tétanos?</b>';
var txtRespuesta1_1 = '- Los virus.';
var txtRespuesta1_2 = '- Las bacterias.';
var txtRespuesta1_3 = '- Los protozoos.';
var correcto1 = 2;

// Pregunta 3
var txtPregunta2 = '<b>¿Cuáles de los siguienes organismos no tienen núcleo definido?</b>';
var txtRespuesta2_1 = '- Las bacterias';
var txtRespuesta2_2 = '- Las algas';
var txtRespuesta2_3 = '- Los animales';
var correcto2 = 1;

// Pregunta 4
var txtPregunta3 = '<b>¿Qué microorganismos permiten la transformación de la leche en yogur?</b>';
var txtRespuesta3_1 = '- Las levaduras.';
var txtRespuesta3_2 = '- Los virus.';
var txtRespuesta3_3 = '- Las bacterias.';
var correcto3 = 3;

// Pregunta 5
var txtPregunta4 = '<b>¿Las bacterias son organismos?</b>';
var txtRespuesta4_1 = '- Unicelulares.';
var txtRespuesta4_2 = '- Pluricelulares.';
var txtRespuesta4_3 = '';
var correcto4 = 1;

// Pregunta 6
var txtPregunta5 = '<b>¿Cuáles son los seres más sencillos que existen?</b>';
var txtRespuesta5_1 = '- Los mohos.';
var txtRespuesta5_2 = '- Las algas.';
var txtRespuesta5_3 = '- Las bacterias.';
var correcto5 = 3;

// Pregunta 7
var txtPregunta6 = '<b>Las bacterias no tienen núcleo. ¿Dónde se encuentra el material del núcleo?</b>';
var txtRespuesta6_1 = '- En el núcleo.';
var txtRespuesta6_2 = '- En el plasma.';
var txtRespuesta6_3 = '- En el citoplasma.';
var correcto6 = 3;

// Pregunta 8
var txtPregunta7 = '<b>Los bacilos son...</b>';
var txtRespuesta7_1 = '- protozoos.';
var txtRespuesta7_2 = '- bacterias.';
var txtRespuesta7_3 = '- hongos.';
var correcto7 = 2;

// Pregunta 9
var txtPregunta8 = '<b>Las cianobacterias pueden...</b>';
var txtRespuesta8_1 = '- fabricar su propio alimento.';
var txtRespuesta8_2 = '- se alimentan de otros seres vivos.';
var txtRespuesta8_3 = '- ninguna de las anteriores.';
var correcto8 = 1;

// Pregunta 10
var txtPregunta9 = '<b>Las bacterias pueden causar...</b>';
var txtRespuesta9_1 = '- enfermedades infecciosas.';
var txtRespuesta9_2 = '- enfermedades no infecciosas.';
var txtRespuesta9_3 = '- nunca causan enfermedades.';
var correcto9 = 1;

// TEXTO FINAL -------------------------------------------------------------------------------------------------------------------------------------------

// Texto final
var txtFinal = '¡Genial!<br /><br />Has logrado salir del castillo gracias a tus conocimientos sobre bacterias.<br/><br/>¿Quieres jugar otra vez?';