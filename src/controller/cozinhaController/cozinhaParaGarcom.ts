import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
    async updateCozinha (req: Request, res: Response) {
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
}