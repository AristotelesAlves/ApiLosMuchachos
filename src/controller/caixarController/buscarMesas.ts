import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
    async mesa (req: Request, res: Response) {
        const {id} = req.params
        const mesas = await prisma.prato.findMany({
            where: {
                mesa_id: Number(id),
                state: "caixa"   
            },
            include:{mesa: true}
        })
        return res.json(mesas);
    },
}