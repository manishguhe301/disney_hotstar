import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { selectNewDisney } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const NewDisney = () => {
  const newDisney = useSelector(selectNewDisney);
  const navigate = useNavigate();

  return (
    <div className='pb-[26px]'>
      <h4 className='block text-[1.17em] mt-[1.33em] mb-[1.33em] font-bold'>
        New to Disney+{' '}
      </h4>
      <div className='grid gap-[25px] grid-cols-4 max-md:grid-cols-2'>
        {newDisney &&
          newDisney.map((movie, key) => (
            <Wrap
              key={key}
              onClick={() => navigate(`/detail/${movie.id}`, { state: movie })}
            >
              <img src={movie.cardImg} alt={movie.title} />
            </Wrap>
          ))}
      </div>
    </div>
  );
};

export default NewDisney;
