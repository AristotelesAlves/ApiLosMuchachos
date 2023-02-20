import { PrismaClient } from ".prisma/client";
import { Router } from "express";
import Controller from "./controller/controller";

const prisma = new PrismaClient();

const router = Router();

router.post('/newPrato', Controller.NewPrato) //ok

router.get("/mesas", Controller.mesas); //mudar para caixa, fazer um where com id da mesa usando parametros na url

router.put(`/update_cozinha/:pratoId`, Controller.update); //ok

router.get("/cozinha", Controller.cozinha); // falta so o put pra mudar o estado de cozinha para pronto!

router.get("/bar", Controller.Bar); // ok

export { router };