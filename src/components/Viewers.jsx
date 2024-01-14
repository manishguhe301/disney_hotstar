import disney from '../assets/images/viewers-disney.png';
import pixar from '../assets/images/viewers-pixar.png';
import marvel from '../assets/images/viewers-marvel.png';
import starwars from '../assets/images/viewers-starwars.png';
import nationals from '../assets/images/viewers-national.png';
import styled from 'styled-components';
import disneyVid from '../assets/videos/1564674844-disney.mp4';
import marvelVid from '../assets/videos/1564676115-marvel.mp4';
import natGeoVid from '../assets/videos/1564676296-national-geographic.mp4';
import pixarVid from '../assets/videos/1564676714-pixar.mp4';
import starWarsVid from '../assets/videos/1608229455-star-wars.mp4';

const Wrap = styled.div`
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  transition: opacity 500ms ease-in-out 0s;
`;

const Viewers = () => {
  return (
    <div className='mt-[30px] pt-7.5 pb-6.5 grid gap-[25px] grid-cols-5 max-md:grid-cols-1'>
      <Wrap className='pt-[56.25%] rounded-[10px] cursor-pointer overflow-hidden relative'>
        <Img
          src={disney}
          alt='disney'
          className='inset-0 block h-full object-cover opacity-100 absolute w-full z-[1] top-0'
        />
        <video
          className='w-full h-full absolute top-0 opacity-0 z-0'
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}

        >
          <source src={disneyVid} type='video/mp4' />
        </video>
      </Wrap>
      <Wrap className='pt-[56.25%] rounded-[10px] cursor-pointer overflow-hidden relative'>
        <Img
          src={pixar}
          alt='pixar'
          className='inset-0 block h-full object-cover opacity-100 absolute w-full z-[1] top-0'
        />
        <video
          className='w-full h-full absolute top-0 opacity-0 z-0'
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}

        >
          <source src={pixarVid} type='video/mp4' />
        </video>
      </Wrap>{' '}
      <Wrap className='pt-[56.25%] rounded-[10px] cursor-pointer overflow-hidden relative'>
        <Img
          src={marvel}
          alt='marvel'
          className='inset-0 block h-full object-cover opacity-100 absolute w-full z-[1] top-0'
        />
        <video
          className='w-full h-full absolute top-0 opacity-0 z-0'
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}

        >
          <source src={marvelVid} type='video/mp4' />
        </video>
      </Wrap>{' '}
      <Wrap className='pt-[56.25%] rounded-[10px] cursor-pointer overflow-hidden relative'>
        <Img
          src={starwars}
          alt='starwars'
          className='inset-0 block h-full object-cover opacity-100 absolute w-full z-[1] top-0'
        />
        <video
          className='w-full h-full absolute top-0 opacity-0 z-0'
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}

        >
          <source src={starWarsVid} type='video/mp4' />
        </video>
      </Wrap>{' '}
      <Wrap className='pt-[56.25%] rounded-[10px] cursor-pointer overflow-hidden relative'>
        <Img
          src={nationals}
          alt='nationals'
          className='inset-0 block h-full object-cover opacity-100 absolute w-full z-[1] top-0'
        />
        <video
          className='w-full h-full absolute top-0 opacity-0 z-0'
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}

        >
          <source src={natGeoVid} type='video/mp4' />
        </video>
      </Wrap>
    </div>
  );
};

export default Viewers;
