import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
    async pronto (req: Request, res: Response) {
        const mesas = await prisma.prato.findMany({
            where: {
                state: "pronto"
            }
        })
        return res.json(mesas);
    },
}