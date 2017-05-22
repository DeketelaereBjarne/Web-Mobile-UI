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
var showAdminPanel=function(){
    var result="<h2>Overview of orders</h2><ul>";
    for(var i=0;i<orders.length;i++){
        result+="<li>"+orders[i].firstname+" "+orders[i].lastname+"<br/>("+orders[i].email+"): "+orders[i].description+"</li>";
    }
    result+="</ul>";
    $("#adminPanel").html(result);

};
$(document).ready(function(){
    ophalenItem();
    $("#submit").on("click",processForm);
    $("#admin").on("click",showAdminPanel);
});