import React, {Component} from 'react';
import ItemsProduct from "../Obj/List/ItemsProduct";
import Header from "../Obj/PagesElements/header";
import Search from "../Obj/PagesElements/search";
import ContentHeaderList from "../Obj/PagesElements/ContentHeaderList";
const list = [
    {id: 1, name : "Товар 1", count: "200", cost: "3000", date: "14.07.2020 21:16"},
    {id: 2, name : "Товар 2", count: "300", cost: "4000", date: "14.07.2020 21:16"},
    {id: 3, name : "Товар 3", count: "400", cost: "5000", date: "14.07.2020 21:16"}
]
class Products extends Component {

    render() {
        return (

        <div className="content">
            <Header/>
            <Search/>
            <div className="mainContent block">
            <ContentHeaderList/>
            <ItemsProduct list = {list} />
            </div>
        </div>
        );
    }
}

export default Products;