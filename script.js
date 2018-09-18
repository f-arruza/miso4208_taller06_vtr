function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function randomPalette(hue){
  var palette = [];
  palette.push(hue);

  // Siendo 5 colores la distancia entre ellos siempre será 72º
  for(var i = 0; i < 4; i++) {
    var other = hue + 72;
    if(other > 359) {
      other = other - 359;
    }
    palette.push(other);
    hue = other;
  }
  return palette;
}

function generateRules(){
  var hue = getRandomNumber(0, 359);
  var palette = randomPalette(hue);
  var rgb_colors = [];
  var saturation = Math.random();
  var value = Math.random();

	for(var i = 0; i < 5; i++){
		var rgb_color = hsvToRgb((palette[i]/360), saturation, value);
		rgb_colors.push(rgb_color);
		$("#color"+(i+1)).css("background-color", "rgb(" + Math.trunc(rgb_color[0]) + "," + Math.trunc(rgb_color[1]) + ","+Math.trunc(rgb_color[2])+")");
	}

	$("#css_rules").val("");

	var texto = ".website-background {color: rgb(" + Math.trunc(rgb_colors[0][0]) + "," + Math.trunc(rgb_colors[0][1]) + "," + Math.trunc(rgb_colors[0][2]) + ")}\n";
	texto += ".element-text {color: rgb(" + Math.trunc(rgb_colors[1][0]) + "," + Math.trunc(rgb_colors[1][1]) + "," + Math.trunc(rgb_colors[1][2]) + ")}\n";
	texto += ".element-border {color: rgb(" + Math.trunc(rgb_colors[2][0]) + "," + Math.trunc(rgb_colors[2][1]) + "," + Math.trunc(rgb_colors[2][2]) + ")}\n";
	texto += ".element-background {color: rgb(" + Math.trunc(rgb_colors[3][0]) + "," + Math.trunc(rgb_colors[3][1]) + "," + Math.trunc(rgb_colors[3][2]) + ")}\n";
	texto += ".header {color: rgb(" + Math.trunc(rgb_colors[4][0]) + "," + Math.trunc(rgb_colors[4][1]) + "," + Math.trunc(rgb_colors[4][2]) + ")}\n";

	$("#css_rules").val(texto);
}

function cleanRules(){
  for(var i = 0; i < 5; i++){
		$("#color"+(i+1)).css("background-color", "rgb(255,255,255)");
	}
	$("#css_rules").val("");

  var texto = ".website-background {color: rgb(255,255,255)}\n";
	texto += ".element-text {color: rgb(255,255,255)}\n";
	texto += ".element-border {color: rgb(255,255,255)}\n";
	texto += ".element-background {color: rgb(255,255,255)}\n";
	texto += ".header {color: rgb(255,255,255)}\n";

	$("#css_rules").val(texto);
}

generateRules();

$( document ).ready(function() {
	$("#btnGEN").on('click', generateRules);
	$("#btnCL").on('click', cleanRules);
});
