/** load express library */
const express = require(`express`)
const app = express()

/** load controller of transaksi */
const transaksiController = require(`../controllers/transaksi.controller`)

/** allow to read json o body request */
app.use(express.json())

/** create route to get all transaksi */
app.get(`/transaksi`, transaksiController.getTransaksi)

/** create route to add transaksi */
app.post(`/transaksi`, transaksiController.addTransaksi)

/** create route to edit transaksi */
app.put(`/transaksi/:id_transaksi`, transaksiController.updateTransaksi)

/** create route to delete transaksi */
app.delete(`/transaksi/:id_transaksi`, transaksiController.deleteTransaksi)

/** export app */
module.exports = app