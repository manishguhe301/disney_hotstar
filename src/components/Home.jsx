import homeBG from '../assets/images/home-background.png';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';

const Container = styled.div`
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  &::after {
    background: url(${homeBG}) center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Home = () => {
  return (
    <Container className='relative overflow-x-hidden block top-[72px]'>
      <ImgSlider />
    </Container>
  );
};

export default Home;
