const AbstractManager = require("./AbstractManager");

class ProduitsManager extends AbstractManager {
  static table = "produits";

  insert(produits) {
    return this.connection.query(
      `insert into ${ProduitsManager.table} (title) values (?)`,
      [produits.title]
    );
  }

  update(produits) {
    return this.connection.query(
      `update ${ProduitsManager.table} set title = ? where id = ?`,
      [produits.title, produits.id]
    );
  }
}

module.exports = ProduitsManager;
