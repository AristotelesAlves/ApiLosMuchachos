import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
    async mesaPaga (req: Request, res: Response){
        const {id} = req.params;
        const mesaPaga = await prisma.prato.updateMany({
            where: {
                number: Number(id),
                state: "caixa" 
            },
            data:{
                state: 'pago'
            }
        })
        res.json(mesaPaga)
    },
}