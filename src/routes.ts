import { Router } from "express"
import { deletePlayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "./controllers/players-controller"
import { getClubs } from "./controllers/clubs-controller"

const router = Router()

//rotas dos players
// rota   / controller
router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)


router.post("/players", postPlayer)

router.delete("/players/:id", deletePlayer)

router.patch("/players/:id" , updatePlayer)


//rotas dos clubes

router.get("/clubs", getClubs)


export default router