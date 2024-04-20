import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomepageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div>
          <img src="img/themeCarouselImages/themeCarouselImage1.jpg" alt="主题轮播图1"/>
        </div>
        <div>
          <img src="img/themeCarouselImages/themeCarouselImage2.jpg" alt="主题轮播图2"/>
        </div>
        <div>
          <img src="img/themeCarouselImages/themeCarouselImage3.jpg" alt="主题轮播图3"/>
        </div>
      </Slider>
    </div>
  );
}

function HomepageVideo() {
  return (
    <div className="video-container" style={{width: '100%', height: 'auto', overflow: 'hidden'}}>
      <video autoPlay loop muted style={{width: '100%'}}>
        <source src="video/promo_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageCarousel />
      <main>
        <HomepageFeatures />
      </main>
     </Layout>
  );
}
