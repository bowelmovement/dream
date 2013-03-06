var imagenumber = 3;
var randomnumber = Math.random() ;
var rand1 = Math.round( (imagenumber-1) * randomnumber) + 1 ;
images = new Array
images[1] = "images/lite_01.jpg"
images[2] = "images/lite_02.jpg"
images[3] = "images/lite_03.jpg"
var image = images[rand1]

alt = new Array
alt[1] = "Refresh for rotating pictures"
alt[2] = "Refresh for rotating pictures"
alt[3] = "Refresh for rotating pictures"
var alto = alt[rand1]