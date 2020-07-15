import React, {Component} from 'react';

class ContentHeaderList extends Component {
    render() {
        return (

                <div className="rows namesrows">
                    <div className="nameProduct item">Название</div>
                    <div className="countProduct item">Количество (шт)</div>
                    <div className="costProduct item">Цена (руб)</div>
                    <div className="dateProduct item">Дата и время добавления</div>
                    <div className="delProduct item">УД</div>
                </div>
        );
    }
}

export default ContentHeaderList;