import { findAllClubs } from "../repositories/clubs-repository"
import { badRequest, created, noContent, ok } from "../utils/http-helper"


export const getClubService = async () => {

    const data = await findAllClubs()
    
    const response = ok(data)
    return response


}