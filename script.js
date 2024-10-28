window.originalParse = JSON.parse; JSON.parse = function (a, t) { const n = originalParse(a, t); try { const lessionData = JSON.parse(n.data.assessmentItem.item.itemData); if (lessionData.question && lessionData.question.content && lessionData.question.content[0].match(/[a-z]/i)) { console.log(lessionData); lessionData.question.content=(["Script adaptado por Alguém","Obrigado por usar!"][Math.floor(Math.random() * 2)])+"\n [[☃ radio 1]] [[☃ explanation 1]]"; lessionData.question.widgets = { "radio 1": { "options": { "choices": [{ "content": location.hostname.split(".")[0]==="pt"?"Alternativa Correta":"Correct option", "correct": true },{ "content": location.hostname.split(".")[0]==="pt"?"Alternativa incorreta":"Incorrect option", "correct": false }] } }, "explanation 1": { "options": {"explanation": "Obrigado por usar este script!", hidePrompt: "", showPrompt: "" } } }; n.data.assessmentItem.item.itemData = JSON.stringify(lessionData); console.log(n); } } catch(r) {} return n };

function dragElement(e){var n=0,t=0,o=0,l=0;function u(e){(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=i,document.onmousemove=f}function f(u){(u=u||window.event).preventDefault(),n=o-u.clientX,t=l-u.clientY,o=u.clientX,l=u.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=u:e.onmousedown=u}
let UI = document.createElement("div");
UI.innerHTML = `<div id="Launcher" class="Launcher" style="outline: #14bf96 solid 2px; min-height: 250px;transform: 
translateX(0px) translateY(-32px);opacity: 0.85;font-family: sans-serif;width: 150px;height: 175px;background: 
black;position: absolute;border-radius: 5px;display: grid;place-items: center;color: white;font-size: larger;top: 151px;left: 21px; position:absolute; z-index: 99999;">
<center><h1 class="bottomTitle" ></h1></center>
<img id="nullicon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAEOUExURQAAAAC/vwCzkACyjwCxkACxkAC0lgCykAC5ogCykACykACzkgCyjwC0kQCxkAC5lwCykACxjwCxjwCykAD//wCxkACxkACzkQCyjwCzkQCxjxC1lprg0ub39Jnf0gOxkMju5v7+/sft5kvHr3PUwbDm3N708Lnp4GrRvRa3mBW3mGnRvbjp3/////T7+n3XxQizknzWxaXj18nu53rWxNvz7xG2ltnz7jjCp7fo3wGxj7To3sXt5VbLtFLKs0nHr9fy7dTx7ErHr77r4jLApC+/o7/r4g+1lc/w6XnWxNDw6he4mdjz7aTj16Dh1Qmzkr3q4vX7+n7Xxhu5mobZyc7w6fv9/Yfayhy5mxS3l0Aw3esAAAAadFJOUwAEbt1F1SKvC4X4W+QzxRac/fDeAVzlhrBvnU5KEAAAAAFiS0dELc3aQT0AAAAHdElNRQfnBA4CGxRiopvgAAABUUlEQVQ4y41T6VrCMBAslLPcNwSx3AiSFhEFK4o3KipeoLz/i9gmIU16fDh/kp2Z5MtudgWBhccril6P4AqfH+jw+1zkQBAQBAMOcigsAQopHLLqkSjgEI1wciwObIjHqJxIpoADUskEeXuacuW9SmW/TMM0zidDCbla01GXKZFBBvPSRg2hYTIWQxMbmq6GnTfgN1Rlu6HV7hx02Sx6h/12izF0IISKOtieGxwpOtFnDENo4LiL9V4dhUPGMEIMPDlF1RrjaMQYJpiCZ5oenJNgwmYxJeQFAJdkO+XSnBH2SgPXZHvD1+GW0Hf3ZPNgKdT8EfPqE16f59ZKLl6Q8PqGlvGCqST57qVqVOfdqNnH55L9btowX9+rtaKsVz+/fMOwLadtNpqt5XY3rY5sLs/L+VzWOjgFyZSlgm1wjNErbvWi0+j9Y3iN8S+JYokf/z+HbVkWF7r15gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNC0xNFQwMjoyNzoyMCswMDowMBfSURoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDQtMTRUMDI6Mjc6MjArMDA6MDBmj+mmAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA0LTE0VDAyOjI3OjIwKzAwOjAwMZrIeQAAAABJRU5ErkJggg==" class="center">
    <h1 class="title"><center>KhanHack</center></h1>
    <center><h1 class="bottomTitle" >1.0</h1></center>
<style id="bruh">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Tilt+Neon&display=swap');
.title {
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
    color: white
}
.bottomTitle {
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    margin-top: -0.7rem;
}
.button {
  font-family: 'Nunito', sans-serif;
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  color: white; 
  background-color: black;
}
.button:hover {
  color: black;
  background-color: grey
}
.button:active {
  background-color: black;
}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
</div>`

document.body.appendChild(UI);
dragElement(UI.firstElementChild);
