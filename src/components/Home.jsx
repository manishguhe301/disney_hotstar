import homeBG from '../assets/images/home-background.png';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
// import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import { getDatabase, ref, onValue } from 'firebase/database';

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
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, 'movies');

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const moviesByType = {
        recommend: [],
        new: [],
        original: [],
        trending: [],
      };
      snapshot.forEach((childSnapshot) => {
        const movieData = childSnapshot.val();
        const movieType = movieData.type;
        const movieId = childSnapshot.key;

        if (moviesByType[movieType]) {
          moviesByType[movieType].push({ id: movieId, ...movieData });
        }
      });

      dispatch(setMovies(moviesByType));
    });

    return () => unsubscribe();
  }, [userName]);

  return (
    <Container className='relative overflow-x-hidden block top-[72px]'>
      <ImgSlider />
      <Viewers />
      <Recommends />
      {/* <NewDisney /> */}
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;
