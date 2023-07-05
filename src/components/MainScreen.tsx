import React, { Fragment, useContext, useEffect, useState } from 'react';
import '../styles/MainScreen.css'
import axios from 'axios';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore} from 'react-icons/md';
import { ToggleWrapper } from '../App';

const MainScreen = () => {
  const API = ' https://rawg-video-games-database.p.rapidapi.com/games?key=26b107c563694a4d9c6db73b8493d242';
  const [games, setGames] = useState<any>([{}]);
  const [index, setIndex] = useState(0);
  const {themeChange} = useContext(ToggleWrapper);

  const API_Call = async() => {
    const data = await axios.get(API, 
    {
      headers: {
        'X-RapidAPI-Key': '63e54a1352mshb3b59c5f9ca9247p1a8238jsn5662b553c82c',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
      }
    })
    console.log(data);
    setGames(data.data.results);
  };
  useEffect(() => {
    API_Call();
  }, []);

  return (
    <Fragment>
        <div className='container'>
          <div className={themeChange ? 'dark-background' : 'light-background'}>
            <div className='image-and-next-before'>
              <div className='image-and-titlestop'>
                {games && <img className='game-image' src={games[index].background_image} alt='' draggable={false}/>}
                {games && <h2>{games[index].name}</h2>}
              </div>
              <div className='before-and-next'>
                <MdOutlineNavigateBefore id='navigate-before' fontSize={100} cursor='pointer' onClick={() => setIndex(index - 1)} className={index < 1 ? 'disable' : 'active'}/>
                <MdOutlineNavigateNext id='navigate-next' fontSize={100} cursor='pointer' onClick={() =>setIndex(index + 1)} className={index >= 19 ? 'disable' : 'active'}/>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default MainScreen;