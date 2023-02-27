import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
    async NewPrato (req: Request, res: Response) {
        const {name, obs, state, valor, mesa_id} = req.body;
        const prato = await prisma.prato.create({
            data:{
                name,
                obs,
                state,
                valor,
                mesa_id
            }
        })
        return res.json(prato);
    },
}