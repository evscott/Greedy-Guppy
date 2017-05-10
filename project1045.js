var canvas1 = document.getElementById("layer1");
var canvas2 = document.getElementById("layer2");
var canvas3 = document.getElementById("layer3");
var canvas4 = document.getElementById("layer4");
var canvas5 = document.getElementById("layer5");
var canvas6 = document.getElementById("layer6");
var canvas7 = document.getElementById("layer7");
var canvas8 = document.getElementById("layer8");
var canvas8 = document.getElementById("layer8");
var bottom = layer1.getContext("2d");
var ctx = layer2.getContext("2d");
var topShelf = layer3.getContext("2d");
var final = layer4.getContext("2d");
var garbage = layer5.getContext("2d");
var health = layer6.getContext("2d");
var tally = layer7.getContext("2d");
var interface = layer8.getContext("2d");

window.addEventListener('keydown', doKeyDown, false);
        var heightMax = canvas2.height - 85;
        var widthMax = canvas2.width - 85;
        var midHeight = canvas2.height / 2;
        var midWidth = canvas2.width / 2;
        var x = midWidth;
        var cutX = 256;
        var cutY = 0;
        var fishW = 256;
        var fishH = 256;

    var score = 0;
    var pace = 10;
    var pace2 = 1;
    var pace3 = 2;


    var y1 = 300,y2 = 400,y3 = 500,y4 = 600,y5= 700,y = 300;
    var x1 = x,x2 = x, x3 = x, x4 = x, x5 = x;
    var s1 = 150,s2 = 150,s3 = 150,s4 = 150,s5 = 150;
    var offSwitch = 0;

    var redFish = new Image();
        redFish.src = "redFish2.png";

    var blueFish = new Image();
        blueFish.src = "blueFish2.png";
        
    var greenFish = new Image();
        greenFish.src = "greenFish2.png";

    var orangeFish = new Image();
        orangeFish.src = "orangeFish2.png";

    var yellowFish = new Image();
        yellowFish.src = "yellowFish2.png";
    
    var background = new Image();
        background.src = "bigBlueSea.png";
    

    var title = new Image();
    title.src = "greedyGuppy.png";

    var collectCoins = new Image();
    collectCoins.src = "collectCoins.png";

    var avoidDanger = new Image();
    avoidDanger.src = "avoidDanger.png";

    var fishPick = new Image();
    fishPick.src = "fishPic2.png";

    var instructions = new Image();
    instructions.src = "instructions.png";

    canvas8.addEventListener("mousemove",detect);

    var e2 = 8;
    function detect(e2){
        selectX2 = e2.offsetX;
        selectY2 = e2.offsetY;
        if(offSwitch == 0){
        highlight();
        }
        if(offSwitch == 4){
        highlight2();
        }
    }

    function highlight(){
        if(selectX2 < x1 + 70 && selectX2 > x1 - 70 && selectY2 < y1 + 70 && selectY2 > y1 - 70){
            x1=735; 
            y1=270;
            s1=210;  
            intro2();
         }
        else if(selectX2 < x2 + 70 && selectX2 > x2 - 70 && selectY2 < y2 + 70 && selectY2 > y2 - 70){
            x2=735; 
            y2=370;
            s2=210;  
            intro2();
         }
         else if(selectX2 < x3 + 70 && selectX2 > x3 - 70 && selectY2 < y3 + 70 && selectY2 > y3 - 70){
            x3=735; 
            y3=470;
            s3=210;  
            intro2();
         }
         else if(selectX2 < x4 + 70 && selectX2 > x4 - 70 && selectY2 < y4 + 70 && selectY2 > y4 - 70){
            x4=735; 
            y4=570;
            s4=210;  
            intro2();
         }
         else if(selectX2 < x5 + 70 && selectX2 > x5 - 70 && selectY2 < y5 + 70 && selectY2 > y5 - 50){
            x5=735; 
            y5=670;
            s5=210;  
            intro2();
         }
        if((selectX2 < x1 + 70 && selectX2 > x1 - 70 && selectY2 < y1 + 70 && selectY2 > y1 - 50) == false){
            x1 = 765;
            y1 = 300;
            s1 = 150;
            intro2();
        }
        if((selectX2 < x2 + 70 && selectX2 > x2 - 70 && selectY2 < y2 + 70 && selectY2 > y2 - 50) == false){
            x2=765; 
            y2=400;
            s2=150;  
            intro2();
         }
         if((selectX2 < x3 + 70 && selectX2 > x3 - 70 && selectY2 < y3 + 70 && selectY2 > y3 - 50) == false){
            x3=765; 
            y3=500;
            s3=150;  
            intro2();
         }
         if((selectX2 < x4 + 70 && selectX2 > x4 - 70 && selectY2 < y4 + 70 && selectY2 > y4 - 50) == false){
            x4=765; 
            y4=600;
            s4=150;  
            intro2();
         }
        if((selectX2 < x5 + 70 && selectX2 > x5 - 70 && selectY2 < y5 + 70 && selectY2 > y5 - 50) == false){
            x5=765; 
            y5=700;
            s5=150;  
            intro2();
         }
        
    }
    
        function highlight2(){
        if(selectX2 < midWidth + 298  && selectX2 > midWidth - 65 && selectY2 < midHeight + 81  && selectY2 > midHeight){
        paWidth = 298 * 1.3;
        paHeight = 81 * 1.3;
        spotOne = 105;
        spotTwo = 50;
         }
         if((selectX2 < midWidth + 298  && selectX2 > midWidth - 65 && selectY2 < midHeight + 81  && selectY2 > midHeight) == false){
        paWidth = 298;
        paHeight = 81;
        spotOne = 65;
        spotTwo = 55;
           
        }
        }
        
        onload = function(){
            intro();
        }
            
        function intro(){
        bottom.drawImage(background,0,0,canvas1.width,canvas1.height); 
        interface.drawImage(title,340,0);
        interface.drawImage(fishPick,480,180);
        interface.drawImage(collectCoins,245,270,305,62);
        interface.drawImage(avoidDanger,1029,270,295,57);
        interface.translate(-50,-50);
        intro2();
    }
        

        function intro2(){
        interface.clearRect(720,275,250,canvas8.height);
        interface.drawImage(greenFish,256,0,256,256,x1,y1,s1,s1); 
        interface.drawImage(greenFish,256,0,256,256,x1,y1,s1,s1); 
        interface.drawImage(orangeFish,256,0,256,256,x2,y2,s2,s2);
        interface.drawImage(yellowFish,256,0,256,256,x3,y3,s3,s3);
        interface.drawImage(redFish,256,0,256,256,x4,y4,s4,s4); 
        interface.drawImage(blueFish,256,0,256,256,x5,y5,s5,s5);  
        }

//player color choice
    canvas8.addEventListener("click",storeGuess);

    function storeGuess(event){
        selectX = event.offsetX;
        selectY = event.offsetY;
        if(offSwitch == 0){
        colorChoice();
        }
        else if(offSwitch == 4){
        offSwitch = 0;
        restart();
        }
    }
    
    var colorChosen;

    function colorChoice(){
        if(selectX < x + 70 && selectX > x - 70 && selectY < y1 + 70 && selectY > y1 - 70){
            colorChosen = "green";
            interface.clearRect(0,0,canvas8.width,canvas8.height);
            start();
         }
        else if(selectX < x + 70 && selectX > x - 70 && selectY < y2 + 70 && selectY > y2 - 70){
            colorChosen = "orange";
            y = y2;
            interface.clearRect(0,0,canvas8.width,canvas8.height);
            start();
         }
        else if(selectX < x + 70 && selectX > x - 70 && selectY < y3 + 70 && selectY > y3 - 70){
            colorChosen = "yellow";
            y = y3;
            interface.clearRect(0,0,canvas8.width,canvas8.height);
            start();
         }
        else if(selectX < x + 70 && selectX > x - 70 && selectY < y4 + 70 && selectY > y4 - 70){
            colorChosen = "red";
            y = y4;
            interface.clearRect(0,0,canvas8.width,canvas8.height);
            start();
         }
        else if(selectX < x + 70 && selectX > x - 70 && selectY < y5 + 70 && selectY > y5 - 70){
            colorChosen = "blue";
            y = y5;
            interface.clearRect(0,0,canvas8.width,canvas8.height);
            start();
         }
    }    

//player controls ------------------------------
 
function doKeyDown(e){ // controler 
   switch(e.keyCode) {
    case 37:
        if(x > 50){
        x-= 40;
        cutX = 0;
        cutY = 0;
        fishW = 256;
        fishH = 256;
        layOver(x,y);
        }
    break;
    case 38:
        if(y > 35){
        y -= 40;
        cutX = 0;
        cutY = 256;
        fishW = 256;
        fishH = 256;
        layOver(x,y);
        }
    break;
    case 39:
        if(x < widthMax){
        x += 40;
        cutX = 256;
        cutY = 0;
        fishW = 256;
        fishH = 256;
        layOver(x,y);
        }
    break;
    case 40:
        if(y < heightMax){
        y += 40;
        cutX = 256;
        cutY = 256;
        fishW = 256;
        fishH = 256;
        layOver(x,y);
        }
}   
}




//fishSelector --------------------------------------
function colorJS() {
    var temp = colorChosen;
    if(temp == "red"){
        drawObject(x,y,redFish);
    }
    if(temp == "blue"){
        drawObject(x,y,blueFish);
    }
    if(temp == "green"){
        drawObject(x,y,greenFish);
    }
    if(temp == "orange"){
        drawObject(x,y,orangeFish);
    }
    if(temp == "yellow"){
        drawObject(x,y,yellowFish);
    }
}
                  //lay over
    
    
    function layOver(x,y){
        colorJS();
    }

                    //sprite creation function ---------------------------
    function drawObject(x,y,z,a,b,c,d){
        ctx.clearRect(x-25,y-25,200,200);
        ctx.drawImage(z,cutX,cutY,fishW,fishH,x,y,150,150); 
    }

                    //coin generator ---------------------------------
        var coinsSoFar = [];

    function generator(){
            this.yAxis = Math.floor(Math.random() * 850) + 1;
            this.xAxis = 1540;
            this.coin = new Image();
            this.coin.src = "coin.png";
            this.cycle = 0;
            this.coinW = 40;
            this.coinH = 40;
        }   

    function engine(){
    var storage = new generator();
    coinsSoFar.push(storage);
}
    function execute(){
         for(var r = 0; r < coinsSoFar.length; r++){
            if(coinsSoFar[r].xAxis <= -10){
                topShelf.clearRect(coinsSoFar[r].xAxis,coinsSoFar[r].yAxis, coinsSoFar[r].coinW*2, coinsSoFar[r].coinH*2); 
                var scout = coinsSoFar[r];
                var hound = coinsSoFar.indexOf(scout);
                coinsSoFar.splice(hound,1);
                break;
            }
            else if(coinsSoFar[r].xAxis <= x + 20 && coinsSoFar[r].xAxis >= x - 30 && coinsSoFar[r].yAxis <= y + 30 && coinsSoFar[r].yAxis >= y - 30){
                topShelf.clearRect(coinsSoFar[r].xAxis,coinsSoFar[r].yAxis, coinsSoFar[r].coinW*2, coinsSoFar[r].coinH*2); 
                var scout = coinsSoFar[r];
                var hound = coinsSoFar.indexOf(scout);
                coinsSoFar.splice(hound,1);
                score++;
                paceDense();
                break;
            }
            else if(coinsSoFar[r].xAxis >= -10){
                coinsSoFar[r].xAxis -= pace;
                 coinsSoFar[r].cycle = (coinsSoFar[r].cycle + 1) % 8;  
                    coinExecute(r);
            }
            else if(coinsSoFar[r].xAxis == "undefined"){
                continue;
            }
    }      
            
            tally.clearRect(1220,0,300,200);
            tally.font = "60px Georgia";
            tally.fillText("Score: " + score,1270,110); 
}
    
      function coinExecute(action){
        topShelf.clearRect(coinsSoFar[action].xAxis,coinsSoFar[action].yAxis, coinsSoFar[action].coinW*2, coinsSoFar[action].coinH*2); 
        topShelf.drawImage(coinsSoFar[action].coin, coinsSoFar[action].cycle * coinsSoFar[action].coinW, 0, coinsSoFar[action].coinW, coinsSoFar[action].coinH, coinsSoFar[action].xAxis, coinsSoFar[action].yAxis, coinsSoFar[action].coinW, coinsSoFar[action].coinH);     
}

                //sea mine generator -------------------------------------------
var mySeaMines = [];
                   
        function seaMine(){
    this.yLocate = Math.floor(Math.random()*810) + 1;
    this.xLocate = 1530;
    this.hostile = new Image();
    this.hostile.src = "seaMine.png";
    this.cycle = 0;
}


        function motor(){
    var closet = new seaMine();
    mySeaMines.push(closet);
}

        function loader(){
         for(var r = 0; r < mySeaMines.length; r++){
            if(mySeaMines[r].xLocate <= -10){
                final.clearRect(mySeaMines[r].xLocate,mySeaMines[r].yLocate,125,125); 
                var scouter = mySeaMines[r];
                var hounder = mySeaMines.indexOf(scouter);
                mySeaMines.splice(hounder,1);
                break;
            }
            else if(mySeaMines[r].xLocate <= x + 50 && mySeaMines[r].xLocate >= x - 50 && mySeaMines[r].yLocate<= y + 50 && mySeaMines[r].yLocate >= y - 50){
                window.removeEventListener('keydown', doKeyDown, false);
                final.clearRect(mySeaMines[r].xLocate-25,mySeaMines[r].yLocate - 30,145,145);
                var scouter = mySeaMines[r];
                var hounder = mySeaMines.indexOf(scouter);
                mySeaMines.splice(hounder,1);
                tnt = setInterval(banger,75);
                break;
            }
            else if(mySeaMines[r].xLocate >= -10){
                mySeaMines[r].xLocate -= pace2;
                    seaMineExecute(r);
                     mySeaMines[r].cycle+= 0.05;
                        mySeaMines[r].yLocate += Math.round(Math.sin(mySeaMines[r].cycle) * 3);
            }   
    }
}
        
        function seaMineExecute(motion){
        final.clearRect(mySeaMines[motion].xLocate-200,mySeaMines[motion].yLocate-200,500,400);
        final.drawImage(mySeaMines[motion].hostile,mySeaMines[motion].xLocate,mySeaMines[motion].yLocate,120,120);   
}
            //trash generator
var garbageSoFar = [];
                   
        function garbageGen(){
    this.yPlace = Math.floor(Math.random()*810) + 1;
    this.xPlace = 1530;
    this.bad = new Image();
    this.bad.src = "sprite.png";
    this.cycle = 0;
}

        function creator(){
    var drawer = new garbageGen();
    garbageSoFar.push(drawer);
}
        function creation(){
         for(var w = 0; w < garbageSoFar.length; w++){
            if(garbageSoFar[w].xPlace <= -10){
                garbage.clearRect(garbageSoFar[w].xPlace,garbageSoFar[w].yPlace,125,125); 
                var scoutest = garbageSoFar[w];
                var houndest = garbageSoFar.indexOf(scoutest);
                garbageSoFar.splice(houndest,1);
                break;
            }
            else if(garbageSoFar[w].xPlace <= x + 20 && garbageSoFar[w].xPlace >= x - 30 && garbageSoFar[w].yPlace<= y + 30 && garbageSoFar[w].yPlace >= y - 30){
                garbage.clearRect(garbageSoFar[w].xPlace,garbageSoFar[w].yPlace - 25,125,125);   
                var scoutest = garbageSoFar[w];
                var houndest = garbageSoFar.indexOf(scoutest);
                garbageSoFar.splice(houndest,1);
                clear();
                break;
            }
            else if(garbageSoFar[w].xPlace >= -10){
                garbageSoFar[w].xPlace -= pace3;
                    garbageExecute(w);
                     garbageSoFar[w].cycle+= 0.05;
                        garbageSoFar[w].yPlace += Math.round(Math.cos(garbageSoFar[w].cycle) * 3);
            }   
    }
}
        
        function garbageExecute(float){
        garbage.clearRect(garbageSoFar[float].xPlace,garbageSoFar[float].yPlace-200,500,400);
        garbage.drawImage(garbageSoFar[float].bad,garbageSoFar[float].xPlace,garbageSoFar[float].yPlace,75,75);   
}

var firstGo = 2;
var lifeArray = [];
var distance = 75;
        function currentHealth(){
            this.xCoord = 0;
            this.yCoord = 20;
            this.life = new Image();
            this.life.src = "heart.png";
        }

        function clear(){
            for(var t = 0; t < firstGo; t++){
            health.clearRect(lifeArray[t].xCoord,lifeArray[t].yCoord,50,50);
        }   
            lifeArray.pop();
            firstGo--;
            stock();    
        }
    
        function stock(){
        endExplosion();
        if(firstGo == 0){
            greyFill();
            fatality();
            
        }
        else if(firstGo !== 0){
            for(var v = 0; v < firstGo; v++){
            var p = new currentHealth();
            p.xCoord += distance;
            distance += 100;
            lifeArray.push(p);
            health.drawImage(lifeArray[v].life,lifeArray[v].xCoord,lifeArray[v].yCoord,50,50);
        }
        }
        }
    var inter1 = 7500;
    var inter2 = 2750;
    var inter3 = 3000;
        
                    //onload execution
    function start(){
        offSwitch++;
        bottom.drawImage(background,0,0,canvas1.width,canvas1.height); 
        ctx.translate(-50,-50);
        colorJS();
        coinInt1 = setInterval(engine,inter3);
        cointInt2 = setInterval(execute,75);
        seaMineInt1 = setInterval(motor,inter1);
        seaMineInt2 = setInterval(loader,20);
        garbageInt1 = setInterval(creator,inter2);
        garbageInt2 = setInterval(creation,20);
        healthInt2 = setInterval(stock,35);
        instructTime = setInterval(timeOut,1000);
        interface.globalAlpha = 0.5;
        interface.drawImage(instructions,400,280);
        tally.translate(-50,-50);
        sharkInt1 = setInterval(sharkCreator,20000);
        sharkInt2 = setInterval(predator,100);
    };
    
    var cycle2 = 0;
    var count3 = 0;
    var paWidth = 298;
    var paHeight = 81;
    var spotOne = 65;
    var spotTwo = 55;
    function fatality(){
        window.removeEventListener('keydown', doKeyDown, false);
        offSwitch = 4;
        fatal = setInterval(function(){
            if(count3 < 1500){
                count3++;
            }
            if(sharkDeath == 0){
            y = y - 0.3;
            cycle2+= 0.01;
            x += Math.round(Math.cos(cycle2));
            colorJS();
            interface.clearRect(0,0,canvas8.width,canvas8.height);
            interface.drawImage(wasted,midWidth-25,midHeight-25);
            clearInterval(coinInt1);
            clearInterval(seaMineInt1);
            clearInterval(garbageInt1);
            clearInterval(sharkInt1);
            clearInterval(sharkInt2);
            }
            else if(sharkDeath == 1){
            interface.clearRect(0,0,canvas8.width,canvas8.height);
            interface.drawImage(wasted,midWidth-25,midHeight-25);
            greyFill();
            clearInterval(coinInt1);
            clearInterval(seaMineInt1);
            clearInterval(garbageInt1);
            clearInterval(sharkInt1);
            clearInterval(sharkInt2);
            }
            if(count3 >= 1500){
                interface.drawImage(reset,midWidth - spotOne,midHeight+spotTwo,paWidth,paHeight);
            }
            
                              },45);
    }

    function greyFill(){
        health.globalAlpha = 0.05;
        health.fillStyle = "grey";
        health.fillRect(0,0,canvas1.width,canvas1.height);
    }

    var wasted = new Image();
    wasted.src = "wasted1.png";
    
    var instructor = 0;

    function timeOut(){
        instructor++;
        if(instructor == 3){
            interface.clearRect(0,0,canvas8.width,canvas8.height);
        }
    }
    
        
    function paceDense(){
       if(score % 2 == 0 && inter2 > 1000){
           pace2+= 0.05;
           pace3+= 0.05;
           inter3-= 75;
           inter1 -= 250;
           inter2 -= 250;
                clearInterval(coinInt1);
                coinInt1 = setInterval(engine,inter3);
                clearInterval(seaMineInt1);
                clearInterval(garbageInt1);
                seaMineInt1 = setInterval(motor,inter1);
                garbageInt1 = setInterval(creator,inter2);
           
       }
        else if(score & 2 == 0 && inter1 > 3000 && inter2 > 500){
                inter1 -= 150;  
                inter2 -= 50;
                inter3 -= 50;
                    clearInterval(coinInt1);
                    coinInt1 = setInterval(engine,inter3);
                    clearInterval(seaMineInt1);
                    clearInterval(garbageInt1);
                    seaMineInt1 = setInterval(motor,inter1);
                    garbageInt1 = setInterval(creator,inter2);
        }
        else if(pace2 < 7 && pace3 < 8){
            var levelUp = score / 2;
            pace2+= levelUp * 0.03;
            pace3+= levelUp * 0.03;
            inter3-= 75;
            clearInterval(coinInt1);
            coinInt1 = setInterval(engine,inter3);
            
        }
        else if(score % 2 == 0 && pace < 20 && inter3 > 1500){
        pace += 2;  
        inter3 -= 300;
        clearInterval(coinInt1);
        coinInt1 = setInterval(engine,inter3);
        }
        
    }
    

    var explosion = new Image();
    explosion.src = "explosion.png";
    

    var cycle2 = 0;
    var cycle3 = 0;
    var cancel = 0;
    function banger(){
        if(cycle3 == 3){
            cancel++;
        }
        interface.clearRect(x-70,y-70,230,230);
        interface.drawImage(explosion,cycle2 *123,cycle3 * 123,123,123,x,y,155,155);
        cycle2++;
        if(cycle2 % 3 == 0){
            cycle3 += 1;
        }
        cycle2 = cycle2 % 4;
        if(cancel==1){
            cancel++;
        }
        if(cancel == 3){
            clear();
        }
    }

    function endExplosion(){
        if(cancel >= 2){
            firstGo = 0;
            health.clearRect(0,0,250,200);
            clearInterval(tnt);
            cycle2 = 0;
            cycle3 = 0;
            cancel = 0;
        }
    }

    var reset = new Image();
    reset.src = "reset.png";
    
    function restart(){
    document.location.href = "";
    }
    function sharkGen(){
        this.shark = new Image();
        this.shark.src = "sharkSheet.png";
        this.width = 350;
        this.height = 275;
        this.x6 = 1560;
        this.y6 = (Math.random() * 550) + 200;
        this.cycle6 = 0;
    }
    var sharksSoFar = [];

    function sharkCreator(){
        var transfer = new sharkGen();
        sharksSoFar.push(transfer);
    }
    var pace4 = 30;
    var sharkDeath = 0;
    function predator(){
    for(var g = 0; g < sharksSoFar.length; g++){
    if(sharksSoFar[g].x6 <= - 500){
    tally.clearRect(sharksSoFar[g].x6-150,sharksSoFar[g].y6,700,400);
    sharksSoFar.shift();
    }
    else if(sharksSoFar[g].x6 < x + 50 && sharksSoFar[g].x6 > x - 65 && sharksSoFar[g].y6 < y + 120 && sharksSoFar[g].y6 > y - 120){
        ctx.clearRect(0,0,canvas1.width,canvas1.height);
        sharkDeath = 1;
        clear();
    }
    else if(sharksSoFar[g].x6 >= - 500){
    tally.clearRect(sharksSoFar[g].x6,sharksSoFar[g].y6,450,300);
    sharksSoFar[g].cycle6 = sharksSoFar[g].cycle6 % 4;
    tally.drawImage(sharksSoFar[g].shark,0,sharksSoFar[g].cycle6 * 260,300,200,sharksSoFar[g].x6,sharksSoFar[g].y6,sharksSoFar[g].width,sharksSoFar[g].height);
    sharksSoFar[g].cycle6++;
    sharksSoFar[g].x6 -= pace4;    
    }
    }
    }
  


    