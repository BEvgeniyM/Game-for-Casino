var index=1;
var btn = document.body.querySelectorAll("div");
var canvas = document.getElementById ("canvas");
var ctx = canvas.getContext("2d");
var flaggame,timesetinterval=120;
var incoming={
    first:5,
    second:4,
    third:7,
    fourth:8,
    fifth:8,
    sixth:9
}
var vizualtype = 2;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


btn[0].addEventListener("click", myFunctionbtn1);
btn[1].addEventListener("click", myFunctionbtn2);

function restart(obj) {

    obj.quntity = 0;
    obj.animation = true;
    obj.scen = 0;
    obj.dy =0;
    // slot.time = new time (incoming.first);
    // slot2.time = new time (incoming.second);
    // slot3.time = new time (incoming.third);
    // slot4.time = new time (incoming.fourth);

}
function myFunctionbtn1() {
     index=2;
     btn[0].style.display="none";
     btn[1].style.display="block";
     //functionslot();
     timesetinterval = 2;
     flaggame = true;
}
function myFunctionbtn2() {
     btn[1].classList.add ("wheel");
     restart (slot);
     restart (slot2);
     restart (slot3);
     restart (slot4);
     flaggame = true;
}

function  inimg(path) {
    var image = new Image ();
    var obj = {
        scenes:8,
        coordx:1,
        coordy:1,
        speed:40,
        scale:200,
        time:0,
        animation:true,
        dy:0,
        quntity:0,
        scen:0,
    }

    image.src = path;
    image.onload = function (){
            obj.intiall= true;
    }

    obj.img = image;
    console.log("  obj.img = image;" + obj.img.src);
    return obj

}

function  borderline(x0,y0, x1,y1, quntity,r,flag) {
    var x=x0,y=y0,dpich=0;
    var arr = new Array (quntity);
    var obj = {
        arr:arr,
        quntity:arr.length,
        pich: function  () {
            this.pich = (this.P/this.quntity);
        },
        P:function () {
            this.P=((x1-x0)**2+(y1-y0)**2)**0.5;
        },
        functionline: function (){
            console.log((Math.abs(x1-x0)/this.P)*dpich);
            console.log((Math.abs(y1-y0)/this.P)*dpich);
            return [x0+flag*((Math.abs(x1-x0)/this.P)*dpich),y0+((Math.abs(y1-y0)/this.P)*dpich)];
        },
        quntityfor: function () {
            this.flag==true?this.flag=false:this.flag=true;
            console.log (this.flag);
            for (var i=1 ; i<=this.quntity; i++){
                (this.flag==true && i%2==0 )?circle(this.arr[i][0], this.arr[i][1], r):"";
                (this.flag==false && i%2!==0 )?circle(this.arr[i][0], this.arr[i][1], r):"";
            }
        },
        flag:false,

        }
        obj.P();
        obj.pich();


        console.log ("obj.pich();"+obj.pich);
        console.log ("obj.pich();"+obj.P);

        //console.log("  obj" + obj);

        for (var i=1 ; i<=obj.quntity; i++){

            obj.arr[i] =obj.functionline();
            console.log(" obj.arr[i]=="+ obj.arr[i]+ "    dpich =="+dpich);

            dpich+=obj.pich;

        }
        console.log("i="+i+"  " +obj.arr);
        return obj
}


function  borderligth(x0,y0, x1,y1, quntity,r) {
    var x=x0,y=y0,dpich=0;
    var arr = new Array (quntity);
    var obj = {
        arr:arr,
        quntity:arr.length,
        a:+(-x0+x1),
        b:+(-y0+y1),
        pich: function  () {
            this.pich = (2*(this.a+this.b)/this.quntity);
        },
        P:function () {
            this.P=2*(this.a+this.b)
        },
        quntityfor: function () {
            for (var i=1 ; i<=this.quntity; i++){
                circle(this.arr[i][0], this.arr[i][1], r);
            }
        }

    }

    obj.pich();
    obj.P();
    console.log ("obj.pich();"+obj.pich);
    console.log ("obj.pich();"+obj.P);

    //console.log("  obj" + obj);

    for (var i=1 ; i<=obj.quntity; i++){

        obj.arr[i] =[x, y];
        console.log(" obj.arr[i]"+ obj.arr[i]+ "    dpich =="+dpich);

        dpich+=obj.pich;

        if (dpich <=obj.a){
            x+=obj.pich;
        }
        if (dpich
            >obj.a && dpich<=(obj.a+obj.b) && (dpich<obj.a+obj.pich)){
            y+=Math.abs(obj.a-dpich);
            x=x1;
        }
        if (dpich>obj.a && dpich<=(obj.a+obj.b) && (dpich>=obj.a+obj.pich)){
            y+=obj.pich;
        }

        if  (dpich>(obj.a+obj.b)&& dpich<(2*obj.a+obj.b)&& (dpich<obj.a+obj.b+obj.pich) ){
            x-=Math.abs(obj.a+obj.b-dpich);
            y=y1;
        }
        if  (dpich>(obj.a+obj.b)&& dpich<(2*obj.a+obj.b)){
            x-=obj.pich;
        }

        if (dpich<=obj.P && dpich>=(2*obj.a+obj.b)&& (dpich<2*obj.a+obj.b+obj.pich)){
            y-=Math.abs(2*obj.a+obj.b-dpich);
            x=x0;
        }
        if (dpich<=obj.P && dpich>(2*obj.a+obj.b)){
            y-=obj.pich;
        }

    }
    console.log("i="+i+"  " +obj.arr);
    return obj
}


function circle (x,y,r) {


    //ctx.strokeStyle = "rgba(226,233,255,1)";
    ctx.beginPath();
    ctx.arc(x, y, r/2, 0, 2*Math.PI, true);
    //ctx.arc(150, 75, 50, 0, 2*Math.PI, false);
    ctx.fillStyle = 'rgb(255, 233, 183)';
    ctx.fill();
    ctx.lineWidth =0;
    ctx.strokeStyle = 'rgb(255, 233, 183)';
    ctx.stroke();
    ctx.shadowColor = "#FFF2C5";
    ctx.shadowBlur = 70;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;


    };


//ctx.fillRect(0,0,canvas.width,canvas.height);
var figure1 = new inimg("./img/index1.png");
var figure2 = new inimg("./img/index2x4.png");
var slot = new inimg("./img/slots_5x.png");
slot.scenes=6;
slot.time = new time (incoming.first); ////!!!!!!
var slot2 = new inimg("./img/slots_5x.png");
slot2.scenes=6;
slot2.time = new time (incoming.second); ////!!!!!!
var slot3 = new inimg("./img/slots_5x.png");
slot3.scenes=6;
slot3.time = new time (incoming.third); ////!!!!!!
var slot4 = new inimg("./img/slots_5x.png");
slot4.scenes=6;
slot4.time = new time (incoming.fourth); ////!!!!!!

//ctx.drawImage(figure2.img,0,0 ,figure1.img.width,figure1.img.height,0,0,canvas.width,canvas.height);

console.log("figure2" + figure1.img.width);

//var figureall = inimg ();
// var figure1 = inimg ()("./FULL.png");
// var figure2 = inimg ()("./FULL.png");

var ligth = borderligth(200,200,400,400,16,25);
//ligth.quntityfor();

var line1 = new borderline(600,392, 1400,390, 14,20,1);
var line3 = new borderline(665,822, 1300,822, 12,20,1);
var line4 = new borderline(545,440, 615,860, 9,20,1);
var line2 = new borderline(1360,440, 1290,860, 9,20,-1);



console.log(ligth);
ctx.drawImage(figure1.img, 0, 0,figure1.img.width,figure1.img.height, 0,0, canvas.width, canvas.height);

function init() {
     document.onmousemove=mousemove;
}
function mousemove(event) {
    var mouse_x = y = 0;
    if (document.attachEvent != null) {
        mouse_x = window.event.clientX;
        mouse_y = window.event.clientY;
    } else if (!document.attachEvent && document.addEventListener) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;
    }
    status="x = " + mouse_x + ", y = " + mouse_y;
    console.log("x = " + mouse_x + ", y = " + mouse_y);
    document.getElementById('xy').innerHTML = "x = " + mouse_x + ", y = " + mouse_y;
}
// init();
//
// setInterval( function () {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.shadowBlur = 0;
//         ctx.shadowOffsetX = 0;
//         ctx.shadowOffsetY = 0;
//         if (index == 1) {
//             canvas.width = figure1.img.width;
//             canvas.height = figure1.img.height;
//             ctx.drawImage(figure1.img, 0, 0, figure1.img.width, figure1.img.height, 0, 0, canvas.width, canvas.height);
//             line1.quntityfor();
//             line2.quntityfor();
//             line3.quntityfor();
//             line4.quntityfor();
//         }
//         if (index==2){
//             canvas.width = figure2.img.width;
//             canvas.height = figure2.img.height;
//             ctx.drawImage(figure2.img, 0, 0, figure2.img.width, figure2.img.height, 0, 0, canvas.width, canvas.height);
//
//         }
//         if (index==2 && flaggame==true){
//             //functionslot();
//             functionslot(slot,330,940,incoming.first);
//             functionslot(slot2,550,940,incoming.second);
//             functionslot(slot3,760,940,incoming.third);
//             functionslot(slot4,975,940,incoming.fourth);
//
//         }
//
//         //init();
//
//
//         }
//
// ,timesetinterval);



var globalID;
var past=0;
// var start = performance.now();
// var progress = timestamp - start;
function repeatOften() {
    // $("<div />").appendTo("body");
    var start = performance.now();



    ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        if (index == 1 ) {
            canvas.width = figure1.img.width;
            canvas.height = figure1.img.height;
            ctx.drawImage(figure1.img, 0, 0, figure1.img.width, figure1.img.height, 0, 0, canvas.width, canvas.height);
            //if (start-past>=400){
                line1.quntityfor();
                line2.quntityfor();
                line3.quntityfor();
                line4.quntityfor();
                past = start;
            //}
        }
        if (index==2){
            canvas.width = figure2.img.width;
            canvas.height = figure2.img.height;
            ctx.drawImage(figure2.img, 0, 0, figure2.img.width, figure2.img.height, 0, 0, canvas.width, canvas.height);

        }
        if (index==2 && flaggame==true){
            //functionslot();
            functionslot(slot,330,940,incoming.first);
            functionslot(slot2,550,940,incoming.second);
            functionslot(slot3,760,940,incoming.third);
            functionslot(slot4,975,940,incoming.fourth);

        }
        console.log();



    globalID = requestAnimationFrame(repeatOften);
}

globalID = requestAnimationFrame(repeatOften);


(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

//var start = window.mozAnimationStartTime;  // Only supported in FF. Other browsers can use something like Date.now().



//console.log(globalID);

// (function repeatOften() {
//     // Do whatever
//     requestAnimationFrame(repeatOften);
// })(60);



// $("#stop").on("click", function() {
//     cancelAnimationFrame(globalID);
// });
// $("#start").on("click", function() {
//     globalID = requestAnimationFrame(repeatOften);
// });

//
// function functionslot() {
//     // var x = document.body.getElementsByTagName("input")[0].value;
//     // var y = document.body.getElementsByTagName("input")[1].value;
//     // var mx = document.body.getElementsByTagName("input")[2].value;
//     // var my = document.body.getElementsByTagName("input")[3].value;
//     x=330;
//     y=940;
//     // slot.animation==true?slot.dy+=5:"";
//     // slot2.animation==true?slot2.dy+=5:"";
//     // slot3.animation==true?slot3.dy+=5:"";
//     // slot4.animation==true?slot4.dy+=5:"";
//
//  if (vizualtype==1) {
//      ctx.drawImage(slot.img, 0, slot.img.height * slot.time() / slot.scenes, slot.img.width, slot.img.height / slot.scenes, +x, y, slot.scale, slot.scale);
//      ctx.drawImage(slot2.img, 0, slot2.img.height * slot2.time() / slot2.scenes, slot2.img.width, slot2.img.height / slot2.scenes, 550, 940, slot2.scale, slot2.scale);
//      ctx.drawImage(slot3.img, 0, slot3.img.height * slot3.time() / slot3.scenes, slot3.img.width, slot3.img.height / slot3.scenes, 760, 940, slot3.scale, slot3.scale);
//      ctx.drawImage(slot4.img, 0, slot4.img.height * slot4.time() / slot4.scenes, slot4.img.width, slot4.img.height / slot4.scenes, 975, 940, slot4.scale, slot4.scale);
//
//  }
//
//  if (vizualtype==2) {
//      slot.time();
//      slot2.time();
//      slot3.time();
//      slot4.time();
//      console.log(slot.dy +"  "+slot2.dy+"  "+slot3.dy+"  "+slot4.dy);
//
//      ctx.drawImage(slot.img, 0, +slot.dy, slot.img.width,slot.img.height/slot.scenes, +x, y, slot.scale, slot.scale);
//      ctx.drawImage(slot2.img, 0, +slot2.dy, slot2.img.width,slot2.img.height/slot2.scenes, 550, 940, slot2.scale, slot2.scale);
//      ctx.drawImage(slot3.img, 0, +slot3.dy, slot3.img.width,slot3.img.height/slot3.scenes, 760, 940,slot3.scale, slot3.scale);
//      ctx.drawImage(slot4.img, 0, +slot4.dy, slot4.img.width,slot4.img.height/slot4.scenes, 975, 940, slot4.scale, slot4.scale);
//      // ctx.drawImage(slot2.img, 0, 1200-dy, slot2.img.width,slot2.img.height/slot2.scenes, 550, 940, slot2.scale, slot2.scale);
//      // ctx.drawImage(slot3.img, 0, 1200-dy, slot3.img.width,slot3.img.height/slot3.scenes, 760, 940, slot3.scale, slot3.scale);
//      // ctx.drawImage(slot4.img, 0, 1200-dy, slot4.img.width,slot4.img.height/slot4.scenes, 975, 940, slot4.scale, slot4.scale);
//
//      // console.log ("dy==="+ dy);
//      if (slot.animation==true){slot.dy>=slot.img.height ?slot.dy=0:slot.dy+=5;}
//      slot2.dy>=slot2.img.height ?slot2.dy=0:slot2.dy+=5;
//      slot3.dy>=slot3.img.height?slot3.dy=0:slot3.dy+=5;
//      slot4.dy>=slot4.img.height?slot4.dy=0:slot4.dy+=5;
//
//
//      if (slot.dy>slot.img.height-slot.img.height/slot.scenes){
//      ctx.drawImage(slot.img, 0, -slot.img.height/slot.scenes+slot.dy-slot.img.height*(slot.scenes - 1)/slot.scenes, slot.img.width,slot.img.height/slot.scenes, +x, y , slot.scale, slot.scale);
//      }
//
//      if (slot2.dy>slot2.img.height-slot2.img.height/slot2.scenes){
//      ctx.drawImage(slot.img, 0, -slot.img.height/slot.scenes+slot.dy-slot.img.height*(slot.scenes - 1)/slot.scenes, slot.img.width,slot.img.height/slot.scenes, 550, 940, slot.scale, slot.scale);
//      }
//
//      if (slot3.dy>slot3.img.height-slot3.img.height/slot3.scenes){
//      ctx.drawImage(slot3.img, 0, -slot3.img.height/slot3.scenes+slot3.dy-slot3.img.height*(slot3.scenes - 1)/slot3.scenes, slot3.img.width,slot3.img.height/slot3.scenes, 760, 940, slot3.scale, slot3.scale);
//      }
//      if (slot4.dy>slot4.img.height-slot4.img.height/slot4.scenes){
//          ctx.drawImage(slot4.img, 0, -slot4.img.height/slot4.scenes+slot4.dy-slot4.img.height*(slot4.scenes - 1)/slot4.scenes, slot4.img.width,slot4.img.height/slot4.scenes, 975, 940, slot4.scale, slot4.scale);
//      }
//  }
//
//     if (slot.animation == false && slot2.animation == false && slot3.animation == false && slot4.animation == false) {
//         btn[1].classList.remove("wheel");
//     }
//
// }
// //-------------------------
console.log (slot);

function functionslot(obj,x,y,quntity) {
    //console.log (obj);

    if (vizualtype==1) {
        ctx.drawImage(obj.img, 0, obj.img.height * obj.time() / obj.scenes, obj.img.width, obj.img.height / obj.scenes, +x, y, obj.scale, obj.scale);
    }


    if (vizualtype==2) {
        //obj.time();
        //console.log(slot.dy +"  "+slot2.dy+"  "+slot3.dy+"  "+slot4.dy);
        ctx.drawImage(obj.img, 0, +obj.dy, obj.img.width,obj.img.height/obj.scenes, +x, y, obj.scale, obj.scale);

        if (obj.animation==true){
            if (obj.dy>=obj.img.height){
                obj.dy=0;
                obj.scen=0;
            }else obj.dy+=obj.speed;
            if  (obj.dy>=obj.img.height/obj.scenes +obj.img.height*obj.scen/obj.scenes){
                obj.scen+=1;
                obj.quntity+=1;
            }
        }

        if (obj.dy>=obj.img.height-obj.img.height/obj.scenes){
            ctx.drawImage(obj.img, 0, -obj.img.height/obj.scenes+obj.dy-obj.img.height*(obj.scenes - 1)/obj.scenes, obj.img.width,obj.img.height/obj.scenes, +x, y , obj.scale, obj.scale);
        }

        if (obj.quntity==quntity){
            obj.animation = false;
        }

        //console.log(timesetinterval);
        if (slot.animation == false && slot2.animation == false && slot3.animation == false && slot4.animation == false) {
            btn[1].classList.remove("wheel");
        }
    }

}


//------------------------


function time(time) {
    var ts=time;
    var scen=0  ;
    return function () {
        ts == 0 ? "" : ts -= 1;

        if (ts != 0) {
            scen == slot.scenes - 1 ? scen = 0 : scen += 1;
        }

        ts == 0 ? flaggame = true : flaggame = true;
        //ts == 0 ?this.animation=false:this.animation=true;
        ///console.log ("this.animation==="+ this.animation);
       //console.log ("scen ==="+ scen+ "ts ==="+ ts);
        return scen

    }
}



