import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export default {

    async update (req: Request, res: Response) {
        const {id} = req.params
        const updateCozinha = await prisma.prato.update({
            where:{
                id: Number(id)
            },
            data:{
                state: "pronto"
            },
        });
        res.json(updateCozinha);
    },

    async delete (req: Request, res: Response) {
        const { id } = req.params;
        const apagar = await prisma.prato.delete({
            where:{ id: Number(id)}
        });
        res.json(apagar);
    },

    async mesa (req: Request, res: Response) {
        const {id} = req.params
        const mesas = await prisma.prato.findMany({
            where: {
                mesa_id: Number(id),
                state: "pronto"   
            },
            include:{mesa: true}
        })
        return res.json(mesas);
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
    },

    async pronto (req: Request, res: Response) {
        const mesas = await prisma.prato.findMany({
            where: {
                state: "pronto"
            },
            include:{
                mesa: true
            }
        })
        return res.json(mesas);
    },

    async caixa (req: Request, res: Response) {
        const mesas = await prisma.prato.findMany({
            where: {
                state: "caixa"
            },
            include:{
                mesa: true
            }
        })
        return res.json(mesas);
    }

}