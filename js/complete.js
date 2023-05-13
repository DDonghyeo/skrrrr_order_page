function pay_yes(){
    //데이터 넣기
    var order_final = new Array();
    var data = new Object();
    data.table_num = localStorage.getItem('table_number');
    data.menus = localStorage.getItem('order');
    order_final.push(data)

    //정보 전송
    const request = new XMLHttpRequest();
    request.open('POST', 'localhost:3001/order/create', true);
    //타입 JSON
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(order_final))


    request.onreadystatechange = function(event){
        // 1) 데이터를 다 받았고, 2) 응답코드 200(성공)을 받았는지 체크
        if(request.readyState == 4 && request.status == 200){
            //local storage 초기화
            localStorage.clear();
            location.replace('/complete.html')
        }else{
            alert("주문 정보 전송 실패")
        }
    }

    
    





}

function pay_no(){
    localStorage.clear();
    location.replace('/index.html');
}