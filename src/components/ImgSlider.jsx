import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
import SliderScale from '../assets/images/slider-scale.jpg';
import SliderScales from '../assets/images/slider-scales.jpg';
import SliderBadge1 from '../assets/images/slider-badag.jpg';
import SliderBadge2 from '../assets/images/slider-badging.jpg';

const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Link = styled.a`
  box-shadow: rgb(0, 0, 0 / 69%);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  &:hover {
    padding: 0;
    border: 4px solid rgba(249, 249, 249, 0.8);
    transition-duration: 300ms;
  }
`;

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings} className='mt-5'>
      <div className='rounded cursor-pointer relative'>
        <Link className='rounded cursor-pointer block relative p-1'>
          <img
            className='h-full w-full'
            src={SliderBadge2}
            alt='sliderbadge2'
          />
        </Link>
      </div>
      <div className='rounded cursor-pointer relative'>
        <Link className='rounded cursor-pointer block relative p-1'>
          <img className='h-full w-full' src={SliderScale} alt='sliderbadge2' />
        </Link>
      </div>{' '}
      <div className='rounded cursor-pointer relative'>
        <Link className='rounded cursor-pointer block relative p-1'>
          <img
            className='h-full w-full'
            src={SliderScales}
            alt='sliderbadge2'
          />
        </Link>
      </div>{' '}
      <div className='rounded cursor-pointer relative'>
        <Link className='rounded cursor-pointer block relative p-1'>
          <img
            className='h-full w-full'
            src={SliderBadge1}
            alt='sliderbadge2'
          />
        </Link>
      </div>
    </Carousel>
  );
};

export default ImgSlider;
