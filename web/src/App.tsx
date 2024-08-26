import { FC } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './constants/theme';
import GlobalStyle from './components/GlobalStyle';
import MatchClub from './components/MatchClub/MatchClub';

const App: FC = () => {
  const match_clubs = [
    <MatchClub 
      id={1} 
      name='Arema FC' 
      coach='J. Cornelli' 
      icon={require('./arema-fc.png')} 
      score={"3"} 
      players={[
        {
          id: 1,
          shirt_number: 31,
          shirt_name: 'L. Frigeri',
          club_id: 1,
          club_name: 'Arema FC',
          position: 0,
          yellow_card_count: 1,
        },
        {
          id: 2,
          shirt_number: 19,
          shirt_name: 'A. Maulana',
          club_id: 1,
          club_name: 'Arema FC',
          position: 10,
          subbed_in_at: 40,
          subbed_out_at: 70
        },
        {
          id: 3,
          shirt_number: 4,
          shirt_name: 'S. Anwar',
          club_id: 1,
          club_name: 'Arema FC',
          position: 11,
          red_card_count: 1,
          subbed_in_at: 40,
          goal: 2,
        },
        {
          id: 4,
          shirt_number: 5,
          shirt_name: 'Thales',
          club_id: 1,
          club_name: 'Arema FC',
          position: 12,
          subbed_out_at: 70
        },
        {
          id: 5,
          shirt_number: 87,
          shirt_name: 'A. Farisi',
          club_id: 1,
          club_name: 'Arema FC',
          position: 13
        },
        {
          id: 6,
          shirt_number: 8,
          shirt_name: 'A. Fikri',
          club_id: 1,
          club_name: 'Arema FC',
          position: 20
        },
        {
          id: 7,
          shirt_number: 32,
          shirt_name: 'P. Oliveira',
          club_id: 1,
          club_name: 'Arema FC',
          position: 21,
        },
        {
          id: 8,
          shirt_number: 24,
          shirt_name: 'M. Rafli',
          club_id: 1,
          club_name: 'Arema FC',
          position: 30
        },
        {
          id: 9,
          shirt_number: 10,
          shirt_name: 'W. M. D. S. Marcilio',
          club_id: 1,
          club_name: 'Arema FC',
          position: 31
        },
        {
          id: 10,
          shirt_number: 94,
          shirt_name: 'Dalberto',
          club_id: 1,
          club_name: 'Arema FC',
          position: 32
        },
        {
          id: 11,
          shirt_number: 11,
          shirt_name: 'C. Lokolingoy',
          club_id: 1,
          club_name: 'Arema FC',
          position: 40,
          goal: 1,
        }
      ]}
    />,
    <MatchClub 
      id={2} 
      name='Bali United FC' 
      coach='A. Cugurra Rodrigues' 
      icon={require('./bali-united-fc.png')} 
      score={"2"}
      players={[
        {
          id: 12,
          shirt_number: 1,
          shirt_name: 'Adilson',
          club_id: 2,
          club_name: 'Bali United FC',
          position: 0
        },
        {
          id: 13,
          shirt_number: 33,
          shirt_name: 'A. Wijaya',
          club_id: 2,
          club_name: 'Bali United FC',
          position: 10
        },
        {
          id: 14,
          shirt_number: 4,
          shirt_name: 'E. Dolah',
          club_id: 2,
          club_name: 'Bali United FC',
          position: 11
        },
        {
          id: 15,
          shirt_number: 24,
          shirt_name: 'R. Fajrin',
          club_id: 2,
          club_name: 'Bali United FC',
          position: 12
        },
        {
          id: 16,
          shirt_number: 55,
          shirt_name: 'M. Tito',
          club_id: 2,
          club_name: 'Bali United FC',
          position: 20,
          yellow_card_count: 2,
        },
        {
          id: 17,
          shirt_number: 6,
          shirt_name: 'B. Wilson',
          club_id: 2,
          club_name: 'Bali United FC',
          position: 21
        },
        {
          id: 18,
          shirt_number: 8,
          shirt_name: 'M. Maruoka',
          club_id: 2,
          club_name: 'Bali United FC',
          position: 22
        },
        {
          id: 19,
          shirt_number: 47,
          shirt_name: 'R. A.',
          club_id: 2,
          club_name: 'Bali United FC',
          position: 23
        },
        {
          id: 20,
          shirt_number: 10,
          shirt_name: 'B. Privat',
          club_id: 2,
          club_name: 'Bali United FC',
          position: 30,
          goal: 2,
        },
        {
          id: 21,
          shirt_number: 99,
          shirt_name: 'Everton',
          club_id: 2,
          club_name: 'Bali United FC',
          position: 31
        },
        {
          id: 22,
          shirt_number: 11,
          shirt_name: 'Y. Malaifani',
          club_id: 2,
          club_name: 'Bali United FC',
          position: 32
        }
      ]}
    />
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className='App'>
          {match_clubs}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
