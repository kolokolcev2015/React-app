import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className="searchAdd block">
                <div className="search">
                    <input type="text" className="inputSearch" placeholder="Поиск"/>
                </div>
                <div className="btnAdd">
                    <button className="AddProduct btn">Добавить товар</button>
                </div>
            </div>
        );
    }
}

export default Search;