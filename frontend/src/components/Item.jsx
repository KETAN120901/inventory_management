import React from "react";
 function Item(props){
    function handleClick(){
        props.onDelete(props.id);

    }
    var path ="itemprofile/"+props.name+props.id;
    return <div className="item-box"><a href={path} ><div>Item-Name : {props.name}</div><div>Price : {props.price}</div><div>Quantity : {props.quantity}</div></a></div>
 }
 export default Item;