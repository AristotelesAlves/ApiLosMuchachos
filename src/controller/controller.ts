import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export default {

    async update (req: Request, res: Response) {
        const {pratoId} = req.params
        const updateCozinha = await prisma.prato.update({
            where:{
                id: Number(pratoId)
            },
            data: {
                state: {}
            }
        });
        res.json(updateCozinha);
    },

    async mesas (req: Request, res: Response) {
        const mesas = await prisma.mesa.findMany({
            include:{
                pratos: true
            }
        })
        return res.json(mesas);
    },

    async Bar (req: Request, res: Response) {
        const mesas = await prisma.prato.findMany({
            where: {
                state: "bar"
            },
            include:{
                mesa: true
            }
        })
        return res.json(mesas);
    },

    async NewPrato (req: Request, res: Response) {
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
    },

    async cozinha (req: Request, res: Response) {
        const mesas = await prisma.prato.findMany({
            where: {
                state: "cozinha"
            },
            include:{
                mesa: true
            }
        })
        return res.json(mesas);
    }
    
}