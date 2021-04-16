import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import MenuBar from '../../Shared/MenuBar/MenuBar';

const Header = () => {
    return (
        <div className="header-container">
            <MenuBar></MenuBar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;