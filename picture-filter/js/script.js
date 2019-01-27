var image = null;
var imageBw = null;
var imageBlur = null;
var imageRed = null;
var imageRainbow = null;
var imageChecker = null;
var canvas = document.getElementById("can");
var background=document.getElementById("image");

function uploadimg() {
  image = new SimpleImage(background);
  image.drawTo(canvas);
  imageBw=new SimpleImage(background);
  imageBlur=new SimpleImage(background);
  imageRed=new SimpleImage(background);
  imageRainbow=new SimpleImage(background);
  imageChecker=new SimpleImage(background);
}

function doClear(canvas) {
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
  }

  function clearImage() {
    doClear(canvas);
  }

  function grey() {
      if (imageBw == null || ! imageBw.complete()) {
        alert ("Image not loaded!");
      }
      else {
        doClear(canvas);
        for (var pixel of imageBw.values()) {
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
  pixel.setBlue(avg);
    pixel.setGreen(avg);
    pixel.setRed(avg);
}
      }
      imageBw.drawTo(canvas);
  }

function blurry() {
  if (imageBlur == null || ! imageBlur.complete()) {
    alert ("Image not loaded!");
  }
  else {
    var w = imageBlur.getWidth();
    var h = imageBlur.getHeight();
    var imageBlurred = new SimpleImage(w,h);
    for (var pixel of imageBlur.values()) {
      var x = pixel.getX();
      var y = pixel.getY();
      var number = Math.random();
      var number2 = Math.random();
      var number3 = Math.random();
      var newX = x + Math.floor(10*number2);
      var newY = y + Math.floor(10*number3);
      var xpixels = canvas.width-1;
      var ypixels = canvas.height-1;
      if (number>0.5) {
        var oldPixel = imageBlur.getPixel(x,y);
        imageBlurred.setPixel(x,y,oldPixel);
      }
      else {
        if (newX > xpixels) {
          newX=w-1;
        }
        if (newY > ypixels) {
          newY=h-1;
        }
        var newPixel = imageBlur.getPixel(newX,newY);
        imageBlurred.setPixel(x,y,newPixel);
        }
      }
    imageBlurred.drawTo(canvas);
    }
}

function red() {
  if (imageRed == null || ! imageRed.complete()) {
        alert ("Image not loaded!");
      }
      else {
        for (var pixel of imageRed.values()) {
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
  if (avg < 128) {
    pixel.setRed(2*avg);
    pixel.setGreen(0);
    pixel.setBlue(0);
  }
          else {
            pixel.setRed(255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(2*avg-255);
          }
        }
      }
      imageRed.drawTo(canvas);
}

function rainbow() {
if (imageRainbow == null || ! imageRainbow.complete()) {
        alert ("Image not loaded!");
      }
      else {
        for (var pixel of imageRainbow.values()) {
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
  if (pixel.getY() < canvas.height/7) {
          if (avg < 128) {
    pixel.setRed(2*avg);
    pixel.setGreen(0);
    pixel.setBlue(0);
  }
          else {
            pixel.setRed(255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(2*avg-255);
          }
  }
   if (pixel.getY() > canvas.height/7 && pixel.getY() < (2*canvas.height)/7) {
          if (avg < 128) {
    pixel.setRed(2*avg);
    pixel.setGreen(0.8*avg);
    pixel.setBlue(0);
  }
          else {
            pixel.setRed(255);
            pixel.setGreen(1.2*avg-51);
            pixel.setBlue(2*avg-255);
          }
  }
         if (pixel.getY() > (2*canvas.height)/7 && pixel.getY() < (3*canvas.height)/7) {
          if (avg < 128) {
    pixel.setRed(2*avg);
    pixel.setGreen(2*avg);
    pixel.setBlue(0);
  }
          else {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(2*avg-255);
          }
  }
          if (pixel.getY() > (3*canvas.height)/7 && pixel.getY() < (4*canvas.height)/7) {
          if (avg < 128) {
    pixel.setRed(0);
    pixel.setGreen(2*avg);
    pixel.setBlue(0);
  }
          else {
            pixel.setRed(2*avg-255);
            pixel.setGreen(255);
            pixel.setBlue(2*avg-255);
          }
  }
          if (pixel.getY() > (4*canvas.height)/7 && pixel.getY() < (5*canvas.height)/7) {
          if (avg < 128) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(2*avg);
  }
          else {
            pixel.setRed(2*avg-255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
          }
  }
          if (pixel.getY() > (5*canvas.height)/7 && pixel.getY() < (6*canvas.height)/7) {
          if (avg < 128) {
    pixel.setRed(0.8*avg);
    pixel.setGreen(0);
    pixel.setBlue(2*avg);
  }
          else {
            pixel.setRed(1.2*avg-51);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
          }
  }
          if (pixel.getY() > ((6*canvas.height)/7)) {
          if (avg < 128) {
    pixel.setRed(1.6*avg);
    pixel.setGreen(0);
    pixel.setBlue(1.6*avg);
  }
          else {
            pixel.setRed(0.4*avg+153);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(0.4*avg+153);
          }
  }
        }
      }
      imageRainbow.drawTo(canvas);
}
function checker() {
  if (imageChecker == null || ! imageChecker.complete()) {
        alert ("Image not loaded!");
      }
  else {
   for (var pixel of imageChecker.values()) {
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
     var x = pixel.getX();
     var y = pixel.getY();
     var h = imageChecker.getHeight();
     var w = imageChecker.getWidth();
     function turnRed() {
       if (avg < 128) {
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else {
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
     }
     function turnGrey() {
       pixel.setRed(avg);
       pixel.setGreen(avg);
       pixel.setBlue(avg);
     }
  if (y < h/3) {
     if (x < w/3 || x > (2/3)*w) {
    turnRed();
  }
    else {
      turnGrey();
    }
   }
     if (y > h/3 && y < (2/3)*h) {
     if (x < w/3 || x > (2/3)*w) {
    turnGrey();
  }
    else {
      turnRed();
    }
   }
      if (y > (2/3)*h) {
     if (x < w/3 || x > (2/3)*w) {
    turnRed();
  }
    else {
      turnGrey();
    }
   }
   }
  imageChecker.drawTo(canvas);
}
}

function resetImage() {
  if (image == null || ! image.complete()) {
        alert ("Image not loaded!");
      }
      else {
        image=new SimpleImage(background);
        image.drawTo(canvas);
  imageBw = new SimpleImage(background);
  imageBlur = new SimpleImage(background);
  imageRed = new SimpleImage(background);
  imageRainbow = new SimpleImage(background);
  imageChecker = new SimpleImage(background);
      }
}
