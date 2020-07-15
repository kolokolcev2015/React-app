import React, {Component} from 'react';
import Item from "./Item";

export default function ItemsProduct(props){
        return (props.list.map(todo => {
                    return <Item name = {todo.name}
                                 count = {todo.count}
                                 cost = {todo.cost}
                                 date = {todo.date}
                                 key={todo.id}/>
                })
        );
    }
