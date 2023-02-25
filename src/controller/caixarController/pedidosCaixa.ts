import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
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