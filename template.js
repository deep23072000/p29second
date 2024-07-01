
function sub(){
    let name = document.getElementById('name').value;
    let college = document.getElementById('college').value;
    console.log(name,college)
    let card = `<section id="card">
        <div id="d1">
            <div>${name}</div>
            <div>
                <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719446400&semt=sph" alt="">
            </div>
    
         </div>
         <div>
            My Name is ${name}.I have done my grduation from ${college} in 2023
         </div>
    </section>`;
    let store = document.getElementById('output');
    store.innerHTML = card

    return false;
}