import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
    async cozinha (req: Request, res: Response) {
        const mesas = await prisma.prato.findMany({
            where: {
                state: "cozinha"
            }
        })
        return res.json(mesas);
    },
}