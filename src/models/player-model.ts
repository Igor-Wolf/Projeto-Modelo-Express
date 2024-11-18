

export interface PlayerModel {

    id: number;
    name: string;
    club: string;
    nationality: string;
    positon: string;
    statistics: {

        Overall: number;
        Pace: number;
        Shooting: number;
        Passing: number;
        Dribbling: number;
        Defending: number;
        Physical: number;

    }

}