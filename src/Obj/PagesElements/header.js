import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header block">
                <div className="Logo">
                    <p>Товары</p>
                </div>
                <div className="Info">
                    <div className="personsInfo">
                        Здравствуйте, Кирилл!
                    </div>
                    <button className="btnLogout btn">Выйти</button>
                </div>
            </div>
        );
    }
}

export default Header;