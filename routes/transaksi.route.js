/** load express library */
const express = require(`express`)
const app = express()

/** load controller of transaksi */
const transaksiController = require(`../controllers/transaksi.controller`)

/** call authorization method */
const { authorization } = require(`../controllers/auth.controller`)

/** allow to read json o body request */
app.use(express.json())

/** create route to get all transaksi */
app.get(`/transaksi`, authorization(["admin","kasir", "manajer"]), transaksiController.getTransaksi)

/** create route to add transaksi */
app.post(`/transaksi`, authorization(["admin","kasir", "manajer"]), transaksiController.addTransaksi)

/** create route to edit transaksi */
app.put(`/transaksi/:id_transaksi`, authorization(["admin","kasir", "manajer"]), transaksiController.updateTransaksi)

/** create route to delete transaksi */
app.delete(`/transaksi/:id_transaksi`, authorization(["admin","kasir", "manajer"]), transaksiController.deleteTransaksi)

/** export app */
module.exports = app