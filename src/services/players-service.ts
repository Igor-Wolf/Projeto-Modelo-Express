import { response } from "express"
import { PlayerModel } from "../models/player-model"
import { deleteOnePlayer, findAllPlayers, findAndModifyPlayer, findPlayerById, insertPlayer } from "../repositories/players-repository"
import { badRequest, created, noContent, ok } from "../utils/http-helper"
import { StatisticsModel } from "../models/statistics-models"


export const getPlayerService = async () => {

    const data = await findAllPlayers()

    let response = null 

    if (data) {
        
        response = await ok(data)
    }
    else {
        response = await noContent()
    }
    
    return response

}


export const getPlayerByIdService = async (id: number) => {
    

    const data = await findPlayerById(id)

    let response = null 

    if (data) {
        
        response = await ok(data)
    }
    else {
        response = await noContent()
    }
    
    return response

}




export const createPlayerService = async (player: PlayerModel) => {
    
    let response = null
    
    if (player) {
        
        const data = await insertPlayer(player)
        response = await created()

    } else {
        response = await badRequest()
    }
    return response
}



export const deletePlayerService = async (id: number) => {

    const data = await deleteOnePlayer(id) 
    let response = null 

    if (data) {
        
        response = await ok(data)
    }
    else {
        response = await badRequest()
    }
    
    return response
}




export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {

    const data = await findAndModifyPlayer(id, statistics)

    let response = null 

    if (data) {
        
        response = await ok(data)
    }
    else {
        response = await badRequest()
    }
    
    return response


}