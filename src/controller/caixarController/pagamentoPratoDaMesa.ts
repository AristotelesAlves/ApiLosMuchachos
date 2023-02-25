import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
    async unidadePaga (req: Request, res: Response){
        const {id} = req.params;
        const response = await prisma.prato.update({
            where: {
                id: Number(id)
            },
            data:{
                state: 'pago'
            }
        })
        res.json(response)
    },
}