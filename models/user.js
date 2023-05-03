'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // mendefinisikan relasi user -> transaksi
      // relasi: 1 to banyak
      // parent: user, child: transaksi
      this.hasMany(models.transaksi,{ // hasMany = parent ke child
        foreignKey: `id_transaksi`, as: `transaksi`
      })
    }
  }
  user.init({
    id_user: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    nama_user: DataTypes.STRING,
    role: DataTypes.ENUM('admin', 'kasir', 'manajer'),
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'user'
  });
  return user;
};