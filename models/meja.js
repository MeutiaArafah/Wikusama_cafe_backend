'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // mendefinisikan relasi meja -> transaksi
      // relasi: 1 to banyak
      // parent: meja, child: transaksi
      this.hasMany(models.transaksi,{ // hasMany = parent ke child
        foreignKey: `id_transaksi`, as: `transaksi`
      })
    }
  }
  meja.init({
    id_meja: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    nomor_meja: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'meja',
    tableName: 'meja'
  });
  return meja;
};