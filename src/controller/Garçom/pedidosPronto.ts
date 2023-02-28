import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
    async pedidos (req: Request, res: Response) {
        const pedidosProntos = await prisma.prato.findMany({
            where: {
                state : "pronto"
            }
        })
    }
}