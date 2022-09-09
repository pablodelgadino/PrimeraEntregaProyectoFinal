import React from 'react';
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const onAdd = (quantity) => {
    console.log( `Agregaste ${quantity} unidades al carrito`)
}

export const ItemDetail = ({data}) => {
    return (

<div className='detail_cakes card col-3 mx-auto'>
    <img className='detail_cakes_img' src={data.img} alt="" />
    <h1>{data.title}</h1>
    <h3>{data.description}</h3>
    <h2>${data.price}</h2>
    <h7>{data.id}</h7>
    <ItemCount initial ={1} stock={data.stock} onAdd={onAdd}/>
</div>
    );
}

export default ItemDetail;