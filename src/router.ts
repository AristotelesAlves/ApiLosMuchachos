import { PrismaClient } from ".prisma/client";
import { Router } from "express";
import Controller from "./controller/controller";

const prisma = new PrismaClient();

const router = Router();

router.post('/newPrato', Controller.NewPrato) //ok

router.get("/mesa/:id", Controller.mesa); //ok

router.get("/mesas", Controller.mesas)

router.put("/updateCozinha/:id", Controller.updateCozinha); //ok

router.delete("/prato/:id", Controller.delete); // ok caso prato seja cancelado!

router.get("/cozinha", Controller.cozinha); //ok

router.get("/bar", Controller.Bar); // ok

router.get("/pronto-para-entrega", Controller.pronto)

router.get("/caixa", Controller.caixa)

router.put("/unidade-paga/:id", Controller.unidadePaga)

router.put("/mesaPaga/:id", Controller.mesaPaga)

export { router };