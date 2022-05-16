const AbstractManager = require("./AbstractManager");

class MainProduitsManager extends AbstractManager {
  static table = "MainProductsMen";

  insert(MainProductsMen) {
    return this.connection.query(
      `insert into ${MainProduitsManager.table} (title) values (?)`,
      [MainProductsMen.title]
    );
  }

  update(MainProductsMen) {
    return this.connection.query(
      `update ${MainProduitsManager.table} set title = ? where id = ?`,
      [MainProductsMen.title, MainProductsMen.id]
    );
  }
}

module.exports = MainProduitsManager;
