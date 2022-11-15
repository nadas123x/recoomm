import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">A Restaurant That Provides a Platform Where Users Find Their Nutritious Food According To Their Personal Health Preferences And Build a Behavior Of Living Healthy Life.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Menu</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> Our Menu Contains Differents Ingredients Such Protien, Fiber, Carbohydrates,Calcium According To Differents
Diets such Vegan Diet, Paleo Diet, High.</p>
        <button type="button" className="custom__button">Discover More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
