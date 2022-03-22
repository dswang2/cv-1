var sty = document.getElementById("sty");
var demo = document.querySelector("#demo");
var str = `/*我-的2022，
前端系统学习ING，
接下来我要动态画一个太极图：*/
  #div1 {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 400px;
    height: 400px;
    border: 1px solid red;
  }
  #div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
  }
  #div1 {
    background: rgb(0, 0, 0);
    background: linear-gradient( 90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100% );
  }
  #div1::before {
    content: " ";
    display: block;
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: white;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }
  #div1::after {
    content: " ";
    display: block;
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: black;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }
  #div1::before {
    background: rgb(0, 0, 0);
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 10%,
      rgba(255, 255, 255, 1) 10%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  #div1::after {
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 10%,
      rgba(0, 0, 0, 1) 10%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  /*这是原始方法实现，代码不起作用，仅用于备忘*/
  #div11 {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: white;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }
  #div12 {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: black;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }
  #div110 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: black;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
  }
  #div120 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
  }`;
var srtFinal = "";
var n= 0;
function step(){
    srtFinal = srtFinal + trans(str[n]);
    demo.innerHTML = srtFinal;
    sty.innerHTML = str.substring(0,n);
    window.scrollTo(0,99999); /*这是window的滚动条*/
    demo.scroll(0,99999); /*这是div的滚动条*/
    n += 1;
    if(n >= str.length){
        return;
    }
    setTimeout(()=>{
        step();
    },5);
}
function trans(ch){
    switch(ch){
        case '\n':
            return '<br>';
        case ' ':
            return '&nbsp;';
        default:
            return ch;
    }
}
step();

