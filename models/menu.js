'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // mendefinisikan relasi menu -> detail_transaksi
      // relasi: 1 to 1
      // parent: menu, child: detail_transaksi
      this.hasOne(models.detail_transaksi,{ // hasMany = parent ke child
        foreignKey: `id_detail_transaksi`, as: `detail_transaksi`
      })
    }
  }
  menu.init({
    id_menu: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    nama_menu: DataTypes.STRING,
    jenis: DataTypes.ENUM('makanan', 'minuman'),
    deskripsi: DataTypes.STRING,
    gambar: DataTypes.STRING,
    harga: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'menu',
    tableName: 'menu'
  });
  return menu;
};