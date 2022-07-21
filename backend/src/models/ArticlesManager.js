const AbstractManager = require("./AbstractManager");

class ArticlesManager extends AbstractManager {
  static table = "articles";

  findAll() {
    return this.connection.query(
      `SELECT n.id, n.name, n.price, n.exclu ,t.stock, t.size,t.img ,t.color FROM articles AS n LEFT JOIN articleVariations AS t ON n.id=n.articleVariations_id;`
    );
  }
}

module.exports = ArticlesManager;
