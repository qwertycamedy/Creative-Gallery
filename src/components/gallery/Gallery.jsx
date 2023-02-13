import React from "react";
import g_img_1 from '../../assets/img/work/1.jpg';
import g_img_2 from '../../assets/img/work/2.jpg';
import g_img_3 from '../../assets/img/work/3.jpg';
import g_img_4 from '../../assets/img/work/4.jpg';
import g_img_5 from '../../assets/img/work/5.jpg';
import g_img_6 from '../../assets/img/work/6.jpg';

const Gallery = ({itemsL, itemsR}) => {
  return (
    <div className="portfolio">
      <div className="container">
        <main className="gallery">
          <div data-speed=".9" className="gallery__left" ref={itemsL}>
            <img className="gallery__item" src={g_img_1} alt="Alt" />

            <div className="text-block gallery__item">
              <h2 className="text-block__h">
                Creative floating scroll with amazing parallax effect
              </h2>
              <p className="text-block__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor amount scrolling.
              </p>
            </div>

            <img className="gallery__item" src={g_img_5}  alt="Alt" />
            <img className="gallery__item" src={g_img_6}  alt="Alt" />
          </div>

          <div data-speed="1.1" className="gallery__right" ref={itemsR}>
            <div className="text-block gallery__item" >
              <h2 className="text-block__h">
                Creative floating scroll with amazing parallax effect
              </h2>
              <p className="text-block__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor amount scrolling.
              </p>
            </div>
            <img className="gallery__item" src={g_img_2}  alt="Alt" />
            <img className="gallery__item" src={g_img_3}  alt="Alt" />
            <img className="gallery__item" src={g_img_4}  alt="Alt" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Gallery;
