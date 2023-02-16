"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const client_1 = require(".prisma/client");
const express_1 = require("express");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
exports.router = router;
router.get("/mesas", async (req, res) => {
    const mesas = await prisma.mesa.findMany({
        include: {
            pratos: true
        }
    });
    return res.json(mesas);
});
router.get("/cozinha", async (req, res) => {
    const mesas = await prisma.prato.findMany({
        where: {
            state: "cozinha"
        },
        include: {
            mesa: true
        }
    });
    return res.json(mesas);
});
router.get("/bar", async (req, res) => {
    const mesas = await prisma.prato.findMany({
        where: {
            state: "bar"
        },
        include: {
            mesa: true
        }
    });
    return res.json(mesas);
});
router.get("/caixa", async (req, res) => {
    const mesas = await prisma.prato.findMany({
        where: {
            state: "pronto"
        },
        include: {
            mesa: true
        }
    });
    return res.json(mesas);
});
//# sourceMappingURL=router.js.map