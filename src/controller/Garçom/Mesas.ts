import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
    async mesas (req: Request, res: Response) {
        const mesas = await prisma.mesa.findMany({

        })
        res.json(mesas)
    }
}