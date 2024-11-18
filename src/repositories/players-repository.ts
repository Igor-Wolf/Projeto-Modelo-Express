import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-models"


const database: PlayerModel[] = [

    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        positon: "Forward",
        statistics: {


            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,

        }


    },
    {
        id: 2,
        name: "David Beckham",
        club: "Retired",
        nationality: "England",
        positon: "Midfielder",
        statistics: {


            Overall: 85,
            Pace: 76,
            Shooting: 82,
            Passing: 90,
            Dribbling: 84,
            Defending: 70,
            Physical: 72,

        }


    }
]



export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    
    return database
}



export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {

    return database.find(player => player.id === id)
}


export const insertPlayer = async (player: PlayerModel ) => {
    
    database.push(player)
    return null
}


export const deleteOnePlayer = async (id: number) => {
    
    const index = database.findIndex(player => player.id === id)
    if (index !== -1) {
        
        database.splice(index, 1)
        return {message: "deleted"}
    }

    return null
}


export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel) => {
    
    //find player
    const playerIndex = database.findIndex(p => p.id === id)
    if (playerIndex !== -1) {
        
        database[playerIndex].statistics = statistics

            }

    return database[playerIndex]

}