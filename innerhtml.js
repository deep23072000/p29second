let content = document.getElementById('div1').textContent;
console.log(content)

function show(){
    let str = "<h1 id='styling'>hello</h1>";
    let store = document.getElementById('div1');
    store.innerHTML = str;
}

function reset(){
   
    let store = document.getElementById('div1');
    store.innerHTML =  content;

}