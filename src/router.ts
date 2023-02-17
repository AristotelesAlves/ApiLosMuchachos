import { PrismaClient } from ".prisma/client";
import { Router } from "express";

const prisma = new PrismaClient();

const router = Router();

router.post('/newPrato', async (req, res) => {
    const {desc, name, obs, state, valor, mesa_id} = req.body;
    const prato = await prisma.prato.create({
        data:{
            desc,
            name,
            obs,
            state,
            valor,
            mesa_id
        }
    })
    return res.json(prato);
})


router.get("/mesas", async (req, res) => {
    const mesas = await prisma.mesa.findMany({
        include:{
            pratos: true
        }
    })
    return res.json(mesas);
});

router.get("/cozinha", async (req, res) => {
    const mesas = await prisma.prato.findMany({
        where: {
            state: "cozinha"
        },
        include:{
            mesa: true
        }
    })
    return res.json(mesas);
});

router.get("/bar", async (req, res) => {
    const mesas = await prisma.prato.findMany({
        where: {
            state: "bar"
        },
        include:{
            mesa: true
        }
    })
    return res.json(mesas);
});

router.get("/caixa", async (req, res) => {
    const mesas = await prisma.prato.findMany({
        where: {
            state: "pronto"
        },
        include:{
            mesa: true
        }
    })
    return res.json(mesas);
});

export { router };