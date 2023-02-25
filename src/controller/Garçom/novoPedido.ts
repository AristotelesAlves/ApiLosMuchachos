import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
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
}