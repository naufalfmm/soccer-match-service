type ClubPlayer = {
    id: number;
    shirt_number: number;
    shirt_name: string;
    club_id: number;
    club_name: string;
    position: number;
    yellow_card_count?: number;
    red_card_count?: number;
    subbed_in_at?: number;
    subbed_out_at?: number;
    goal?: number;
}

export default ClubPlayer;