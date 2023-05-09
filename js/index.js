var order = new Array();

function up(e){
    //수량 +1
    var id = e.getAttribute('id');
    var target = id + "_amount";
    var origin = parseInt(document.getElementById(target).innerText);
    document.getElementById(target).innerText = origin + 1;
}

function down(e){
    //수량 -1
    var id = e.getAttribute('id');
    var target = id + "_amount";
    var origin = parseInt(document.getElementById(target).innerText);
    if (origin-1 == 0){
        alert("1개 이상 주문해 주세요.")
        return
    }
    document.getElementById(target).innerText = origin - 1;
}

function add(e){
    //장바구니 담기
    var id = e.getAttribute('id');
    var id_ = "menu_" + id;
    var parent = document.getElementById(id_).getElementsByClassName('option')[0];
    var name = parent.getElementsByClassName('name')[0].innerText;
    var target = id + "_amount";
    var origin = parseInt(document.getElementById(target).innerText);
    alert(name+ " " + origin + "개를 장바구니에 담았습니다.")

    document.getElementById(target).innerText = 1;

    var total = parseInt(document.getElementById('order_count').innerText)
    total_ = total + origin
    console.log(total)
    document.getElementById('order_count').innerText = total_
}

function order(){
    var data = JSON.stringify(order);
}