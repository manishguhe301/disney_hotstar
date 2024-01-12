import logo from '../assets/images/logo.svg';
import home from '../assets/images/home-icon.svg';
import search from '../assets/images/search-icon.svg';
import watchlist from '../assets/images/watchlist-icon.svg';
import originals from '../assets/images/original-icon.svg';
import movies from '../assets/images/movie-icon.svg';
import series from '../assets/images/series-icon.svg';
import styled from 'styled-components';

const NavMenu = styled.div`
  a {
    span {
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: '';
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 h-[70px] bg-[#090b13] flex justify-between items-center px-9 py-0 tracking-[16px] z-[3] '>
      <a
        href='
    '
        className='p-0 w-20 mt-1 max-h-[70px] text-[0px] inline-block '
      >
        <img src={logo} alt='logo' className='block w-full' />
      </a>
      <NavMenu className='flex items-center flow h-full justify-end m-0 p-0 relative mr-auto ml-[25px] hidden md:flex'>
        <a href='/home' className='flex items-center px-3 cursor-pointer'>
          <img src={home} alt='HOME' className='h-5 min-w-5 w-5 z-auto' />
          <span className='text-custom-color text-[13px] tracking-[1.42px] leading-[1.08] py-[2px] whitespace-nowrap relative'>
            HOME
          </span>
        </a>
        <a className='flex items-center px-3 cursor-pointer'>
          <img src={search} alt='SEARCH' className='h-5 min-w-5 w-5 z-auto' />
          <span className='text-custom-color text-[13px] tracking-[1.42px] leading-[1.08] py-[2px] whitespace-nowrap relative'>
            SEARCH
          </span>
        </a>
        <a className='flex items-center px-3 cursor-pointer'>
          <img
            src={watchlist}
            alt='WATCHLIST'
            className='h-5 min-w-5 w-5 z-auto'
          />
          <span className='text-custom-color text-[13px] tracking-[1.42px] leading-[1.08] py-[2px] whitespace-nowrap relative'>
            WATCHLIST
          </span>
        </a>
        <a className='flex items-center px-3 cursor-pointer'>
          <img
            src={originals}
            alt='ORIGINALS'
            className='h-5 min-w-5 w-5 z-auto'
          />
          <span className='text-custom-color text-[13px] tracking-[1.42px] leading-[1.08] py-[2px] whitespace-nowrap relative'>
            ORIGINALS
          </span>
        </a>
        <a className='flex items-center px-3 cursor-pointer'>
          <img src={movies} alt='MOVIES' className='h-5 min-w-5 w-5 z-auto' />
          <span className='text-custom-color text-[13px] tracking-[1.42px] leading-[1.08] py-[2px] whitespace-nowrap relative'>
            MOVIES
          </span>
        </a>
        <a className='flex items-center px-3 cursor-pointer'>
          <img src={series} alt='SERIES' className='h-5 min-w-5 w-5 z-auto' />
          <span className='text-custom-color text-[13px] tracking-[1.42px] leading-[1.08] py-[2px] whitespace-nowrap relative'>
            SERIES
          </span>
        </a>
      </NavMenu>
      <p className='bg-black bg-opacity-60 px-4 py-2 uppercase tracking-wider border border-white rounded transition-all duration-200 ease-in-out hover:bg-white hover:text-black hover:border-transparent cursor-pointer'>
        Login
      </p>
    </div>
  );
};

export default Header;
