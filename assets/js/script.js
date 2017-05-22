/**
 * Created by Bjarne Deketelaere on 22/05/2017.
 */
var orders=[];

var processForm=function(e){
    e.preventDefault();
    var order={};
    order.firstname=$("#firstname").val();
    order.lastname=$("#lastname").val();
    order.email=$("#email").val();
    order.description=$("#details").val();
    orders.push(order);
    opslaanItem();

};


var opslaanItem=function(){
    if((typeof Storage)!==void(0)){
        localStorage.setItem("Orders",JSON.stringify(orders));
    }
};
var ophalenItem=function(){
    if((typeof Storage)!==void(0) && localStorage.getItem("Orders")!==null){
        orders=JSON.parse(localStorage.getItem("Orders"));
    }
};

$(document).ready(function(){
    ophalenItem();
    $("#submit").on("click",processForm);
});