import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
    async mesa (req: Request, res: Response) {
        const {id} = req.params
        const mesas = await prisma.prato.findMany({
            where: {
                number: Number(id),
                state: "caixa"   
            }
        })
        return res.json(mesas);
    },
}