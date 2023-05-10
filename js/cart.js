var orders = localStorage.getItem('order');
var order = JSON.parse(orders);

function menu_load(){
    console.log(order)
    console.log(order[0].name)
    console.log(order[0].amount)
    console.log(order[1].name)
    console.log(order[1].amount)
    console.log(order[2].name)
    console.log(order[2].amount)

    var target = document.getElementsByClassName("menu_wrap")[0]
    for (i=0; i<orders.length; i++){
        let j = i+1
        var data = '<div id="menu_'+j+'" class="menu"> <div class="picture"> <img src="/img/example.png" alt=""></div><div class="option"> <div class="name box">'+order[i].name+'</div> <div class="price box">'+8000+'</div> <div class="pack"> <div class="amount box"> <button id="'+j+'" class="down" onclick="down(this)"></button>  <p id="'+j+'_amount">'+order[i].amount+'</p> <button id="'+j+'" class="up" style="float: right;" onclick="up(this)"></button> </div> <button id="'+j+'" class="add_button" onclick="add(this)">담기</button> </div> </div> </div>';
        target.innerHTML += data
    }
}

menu_load();