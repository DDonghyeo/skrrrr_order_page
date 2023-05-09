function up(e){
    var id = e.getAttribute('id');
    var target = id + "_amount";
    var origin = parseInt(document.getElementById(target).innerText);
    document.getElementById(target).innerText = origin + 1;
}

function down(){

}