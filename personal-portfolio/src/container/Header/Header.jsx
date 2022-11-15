import React from 'react';

import  SubHeading  from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Keep It Healthy !" />
      <h1 className="app__header-h1">Order Your Healthy Food  </h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> Our meals contains different nutrient ingredients:<br></br> Protien,fiber,carbohydrates,calcium etc..</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
