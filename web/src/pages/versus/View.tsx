import { FC } from "react";
import styles from "./View.module.css";
import MatchClub from "../../components/MatchClub/MatchClub";
import dayjs from 'dayjs';
import 'dayjs/locale/id';


const View: FC = () => {
    const league_name = "Liga 1";
    const match_date = new Date(2024, 7, 31, 17, 0, 0);
    const stadion = "Soepriadi Kota Blitar"

    return (
        <div className={styles.versus_view}>
            <div className={styles.versus_view__properties}>
                <img src={require('../../assets/png/leagues/bri_liga_1.png')} alt={'bri-liga-1'} className={styles.versus_view__properties__league_icon} />
                <p>{`${league_name} - ${dayjs(match_date).locale('id').format("DD MMMM YYYY HH:mm")}`}</p>
            </div>
            <div className={styles.versus_view__clubs}>
                <MatchClub
                    id={1}
                    name='Arema FC'
                    coach='J. Cornelli'
                    icon={require('../../assets/png/clubs/arema-fc.png')}
                    score={"3"}
                    players={[
                        {
                            id: 1,
                            shirt_number: 31,
                            shirt_name: 'L. Frigeri',
                            club_id: 1,
                            club_name: 'Arema FC',
                            is_captain: false,
                            position: 0,
                            yellow_card_count: 1,
                        },
                        {
                            id: 2,
                            shirt_number: 19,
                            shirt_name: 'A. Maulana',
                            club_id: 1,
                            club_name: 'Arema FC',
                            is_captain: false,
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
                            is_captain: false,
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
                            is_captain: false,
                            position: 12,
                            subbed_out_at: 70
                        },
                        {
                            id: 5,
                            shirt_number: 87,
                            shirt_name: 'A. Farisi',
                            club_id: 1,
                            club_name: 'Arema FC',
                            is_captain: true,
                            position: 13
                        },
                        {
                            id: 6,
                            shirt_number: 8,
                            shirt_name: 'A. Fikri',
                            club_id: 1,
                            club_name: 'Arema FC',
                            is_captain: false,
                            position: 20
                        },
                        {
                            id: 7,
                            shirt_number: 32,
                            shirt_name: 'P. Oliveira',
                            club_id: 1,
                            club_name: 'Arema FC',
                            is_captain: false,
                            position: 21,
                        },
                        {
                            id: 8,
                            shirt_number: 24,
                            shirt_name: 'M. Rafli',
                            club_id: 1,
                            club_name: 'Arema FC',
                            is_captain: false,
                            position: 30
                        },
                        {
                            id: 9,
                            shirt_number: 10,
                            shirt_name: 'W. M. D. S. Marcilio',
                            club_id: 1,
                            club_name: 'Arema FC',
                            is_captain: false,
                            position: 31
                        },
                        {
                            id: 10,
                            shirt_number: 94,
                            shirt_name: 'Dalberto',
                            club_id: 1,
                            club_name: 'Arema FC',
                            is_captain: false,
                            position: 32
                        },
                        {
                            id: 11,
                            shirt_number: 11,
                            shirt_name: 'C. Lokolingoy',
                            club_id: 1,
                            club_name: 'Arema FC',
                            is_captain: false,
                            position: 40,
                            goal: 1,
                        }
                    ]}
                    sub_players={[
                        {
                            id: 23,
                            shirt_number: 4,
                            shirt_name: 'Syaeful Anwar',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false
                        },
                        {
                            id: 24,
                            shirt_number: 6,
                            shirt_name: 'Julián Guevara',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 25,
                            shirt_number: 13,
                            shirt_name: 'Samuel Gideon Balinsa',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 26,
                            shirt_number: 24,
                            shirt_name: 'Muhammad Rafli',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 27,
                            shirt_number: 27,
                            shirt_name: 'Dedik Setiawan',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 28,
                            shirt_number: 7,
                            shirt_name: 'Hamzah Titofani',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 29,
                            shirt_number: 12,
                            shirt_name: 'Rifad Marasabessy',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 30,
                            shirt_number: 22,
                            shirt_name: 'Dicki Agung',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 31,
                            shirt_number: 23,
                            shirt_name: 'Muhammad Anwar Rifai',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 32,
                            shirt_number: 67,
                            shirt_name: 'Mochamad Shulton Fajar',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 33,
                            shirt_number: 72,
                            shirt_name: 'Bayu Setiawan',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 34,
                            shirt_number: 96,
                            shirt_name: 'Muhammad Iksan Lestaluhu',
                            club_id: 1,
                            club_name: 'Arema FC',
                            position: 0,
                            is_captain: false,
                        },
                    ]}
                />
                <MatchClub
                    id={2}
                    name='Bali United FC'
                    coach='A. Cugurra Rodrigues'
                    icon={require('../../assets/png/clubs/bali-united-fc.png')}
                    score={"2"}
                    players={[
                        {
                            id: 12,
                            shirt_number: 1,
                            shirt_name: 'Adilson',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            is_captain: false,
                            position: 0
                        },
                        {
                            id: 13,
                            shirt_number: 33,
                            shirt_name: 'A. Wijaya',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            is_captain: false,
                            position: 10
                        },
                        {
                            id: 14,
                            shirt_number: 4,
                            shirt_name: 'E. Dolah',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            is_captain: false,
                            position: 11
                        },
                        {
                            id: 15,
                            shirt_number: 24,
                            shirt_name: 'R. Fajrin',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            is_captain: true,
                            position: 12
                        },
                        {
                            id: 16,
                            shirt_number: 55,
                            shirt_name: 'M. Tito',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            is_captain: false,
                            position: 20,
                            yellow_card_count: 2,
                        },
                        {
                            id: 17,
                            shirt_number: 6,
                            shirt_name: 'B. Wilson',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            is_captain: false,
                            position: 21
                        },
                        {
                            id: 18,
                            shirt_number: 8,
                            shirt_name: 'M. Maruoka',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            is_captain: false,
                            position: 22
                        },
                        {
                            id: 19,
                            shirt_number: 47,
                            shirt_name: 'R. A.',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            is_captain: false,
                            position: 23
                        },
                        {
                            id: 20,
                            shirt_number: 10,
                            shirt_name: 'B. Privat',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            is_captain: false,
                            position: 30,
                            goal: 2,
                        },
                        {
                            id: 21,
                            shirt_number: 99,
                            shirt_name: 'Everton',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            is_captain: false,
                            position: 31
                        },
                        {
                            id: 22,
                            shirt_number: 11,
                            shirt_name: 'Y. Malaifani',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            is_captain: false,
                            position: 32
                        }
                    ]}
                    sub_players={[
                        {
                            id: 35,
                            shirt_number: 5,
                            shirt_name: 'Bagas Adi Nugroho',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 36,
                            shirt_number: 39,
                            shirt_name: 'Kenzo Nambu',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 37,
                            shirt_number: 41,
                            shirt_name: 'Irfan Jaya',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 38,
                            shirt_number: 71,
                            shirt_name: 'Muhammad Luthfi Kamal',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            position: 0,
                            is_captain: false,
                            yellow_card_count: 1,
                        },
                        {
                            id: 39,
                            shirt_number: 91,
                            shirt_name: 'Muhammad Rahmat',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 40,
                            shirt_number: 7,
                            shirt_name: 'Sidik Saimima',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 41,
                            shirt_number: 17,
                            shirt_name: 'Taufik Hidayat',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 42,
                            shirt_number: 18,
                            shirt_name: 'I Kadek Agung Widnyana',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 43,
                            shirt_number: 22,
                            shirt_name: 'Novri Setiawan',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 44,
                            shirt_number: 26,
                            shirt_name: 'Komang Tri Arta Wiguna',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            position: 0,
                            is_captain: false,
                        },
                        {
                            id: 45,
                            shirt_number: 95,
                            shirt_name: 'Fitrul Dwi Rustapa',
                            club_id: 2,
                            club_name: 'Bali United FC',
                            position: 0,
                            is_captain: false,
                        },
                    ]}
                />
            </div>
            <div className={styles.versus_view__stadion}>{`Tempat: Stadion ${stadion}`}</div>
        </div>
    );
}

export default View