"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c72ee92a-e0da-588a-b2e3-778c75f54ae1")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerUpdateProductStockQuerySql = void 0;
exports.triggerUpdateProductStockQuerySql = `
CREATE TRIGGER trigger_update_product_stock
AFTER INSERT ON transaction_product_item
FOR EACH ROW
EXECUTE FUNCTION update_product_stock();
`;
//# sourceMappingURL=trigger-update-product-stock.query.js.map
//# debugId=c72ee92a-e0da-588a-b2e3-778c75f54ae1
