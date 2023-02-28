import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
    async NewPrato (req: Request, res: Response) {
        const {number, name, obs, state, valor} = req.body;
        const prato = await prisma.prato.create({
            data:{
                name,
                obs,
                state,
                valor,
                number
            }
        })
        return res.json(prato);
    },
}