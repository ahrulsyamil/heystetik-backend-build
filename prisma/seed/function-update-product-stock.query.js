"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="84260042-2204-5e1f-af66-005913dbd87d")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.functionUpdateProductStockQuerySql = void 0;
exports.functionUpdateProductStockQuerySql = `
CREATE OR REPLACE FUNCTION update_product_stock()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE product
  SET product_stock = product_stock - NEW.qty
  WHERE id = NEW.product_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
`;
//# sourceMappingURL=function-update-product-stock.query.js.map
//# debugId=84260042-2204-5e1f-af66-005913dbd87d
