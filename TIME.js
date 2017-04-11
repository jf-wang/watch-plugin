/**
 * Created by wangjianfeng on 2017/1/17.
 */

var canvas=document.getElementById("canvas");//获取canvas
var ctx=canvas.getContext('2d');//获取上下文
var unitAng=Math.PI/180;//弧度与角度转换
var numlist=[3,4,5,6,7,8,9,10,11,12,1,2];//数组
var width=canvas.width;//获取canvas的宽
var height=canvas.height;
var r=width/2;//获取r

var timer = setInterval(function(){
    ctx.clearRect(0,0,width,height);
    var now = new Date();
    var hour=now.getHours();
    var min=now.getMinutes();
    var sec=now.getSeconds();
    drewBackground();//刷新背景函数
    drewHour(hour+min/60);//时针函数
    drewMin(min);//分针函数
    drewSec(sec);//秒针函数
},1000);

function drewHour(hour){//时针
    ctx.save();//存盘当前之前的状态
    ctx.translate(r,r);//移动画板
    ctx.rotate(30*hour*unitAng);//旋转角度
    ctx.beginPath();//开始
    ctx.moveTo(0,0);//落笔点
    ctx.lineTo(0,-r*4/9);//抬笔点
    ctx.strokeStyle='#22DCFF';//样式
    ctx.lineWidth='13';//笔宽
    ctx.closePath();//结束
    ctx.stroke();
    ctx.restore();//恢复到最近一次存盘
}
function drewMin(min){//分针
    ctx.save();
    ctx.translate(r,r);
    ctx.rotate(6*min*unitAng);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,-r*2/3);
    ctx.strokeStyle='orange';
    ctx.lineWidth='8';
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}

function drewSec(sec){//秒针
    ctx.save();
    ctx.translate(r,r);
    ctx.rotate(6 * sec * unitAng);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,-r*5/6);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '5';
    ctx.stroke();
    ctx.restore();
}
function drewBackground(){
    ctx.save();
    ctx.beginPath();
    ctx.translate(r,r);
    ctx.arc(0,0,r-5,0,360-unitAng);
    ctx.strokeStyle='yellow';
    ctx.lineWidth='10';
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    drewDot();
    drewNum();
}

function drewDot(){//表盘上的原点
    ctx.save();
    ctx.translate(r,r);
    for(var i=0;i<60;i++){
        var x=(r-20)*Math.cos(6*unitAng*i);
        var y=(r-20)*Math.sin(6*unitAng*i);
        ctx.beginPath();
        ctx.arc(x,y,5,0,360*unitAng);
        if(i%5===0){
            ctx.fillStyle='red';
        }else {
            ctx.fillStyle='pink';
        }
        ctx.fill();
        ctx.closePath();
    }
    ctx.restore();
}

function drewNum(){//表盘上的数字
    ctx.save();
    ctx.translate(r,r);
    for(var i=0;i<12;i++){
        var x=(r-40)*Math.cos(30*unitAng*i);
        var y=(r-40)*Math.sin(30*unitAng*i);
        ctx.beginPath();
        ctx.font='20px arial';
        ctx.textAlign='center'//文字水平方向上基线对齐
        ctx.textBaseline='middle';//文字垂直方向上基线对齐
        ctx.fillText(numlist[i],x,y);
        ctx.closePath();
    }
    ctx.restore();
}









