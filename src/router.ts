import { PrismaClient } from ".prisma/client";
import { Router } from "express";


import pedidosProntoParaEntrega from "./controller/caixarController/pedidosProntoParaEntrega";
import pagamentoPratoDaMesa from "./controller/caixarController/pagamentoPratoDaMesa";
import cozinhaParaGarcom from "./controller/cozinhaController/cozinhaParaGarcom";
import pedidosCozinha from "./controller/caixarController/pedidosCozinha";
import PagamentoMesa from "./controller/caixarController/pagamentoMesa";
import pedidosCaixa from "./controller/caixarController/pedidosCaixa";
import buscarMesas from "./controller/caixarController/buscarMesas";
import pedidosBar from "./controller/caixarController/pedidosBar";
import mesas from "./controller/caixarController/mesas";


import pratos from "./controller/cozinhaController/pratos";
import novoPedido from "./controller/Garçom/novoPedido";

const prisma = new PrismaClient();

const router = Router();

router.post('/newPrato', novoPedido.NewPrato) //ok

router.get("/mesa/:id", buscarMesas.mesa)

router.get("/mesas", mesas.mesas)

router.put("/updateCozinha/:id", cozinhaParaGarcom.updateCozinha)

// router.delete("/prato/:id", ); // ok caso prato seja cancelado!

router.get("/cozinha", pratos.cozinha)

router.get("/pedidos-na-cozinha", pedidosCozinha.cozinha)

router.get("/pedidos-no-bar", pedidosBar.Bar)

router.get("/pronto-para-entrega", pedidosProntoParaEntrega.pronto)

router.get("/pedidos-no-caixa", pedidosCaixa.caixa)

router.put("/pagamento-solo/:id",  pagamentoPratoDaMesa.unidadePaga)

router.put("/mesaPaga/:id", PagamentoMesa.mesaPaga)

router.get("/prontoParaEntrega", pedidosProntoParaEntrega.pronto)

export { router }; 