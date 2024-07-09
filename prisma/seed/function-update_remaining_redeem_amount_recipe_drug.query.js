"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="571c8dc8-a03d-572b-a74a-832dd89459eb")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.functionUpdateRemainingRedeemAmountRecipeDrugQuerySql = void 0;
exports.functionUpdateRemainingRedeemAmountRecipeDrugQuerySql = `
CREATE OR REPLACE FUNCTION update_remaining_redeem_amount_recipe_drug()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE consultation_recipe_drug
  SET remaining_redeem_amount = remaining_redeem_amount - 1
  WHERE product_id = NEW.product_id
    AND customer_id = (
    	SELECT customer_id FROM transaction_product WHERE id = NEW.transaction_product_id LIMIT 1
    )
    AND due_date = (
    	SELECT MIN(due_date) FROM consultation_recipe_drug WHERE product_id = NEW.product_id AND customer_id = (
    		SELECT customer_id FROM transaction_product WHERE id = NEW.transaction_product_id LIMIT 1
    	)
    	AND due_date >= NOW()::DATE
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;   
`;
//# sourceMappingURL=function-update_remaining_redeem_amount_recipe_drug.query.js.map
//# debugId=571c8dc8-a03d-572b-a74a-832dd89459eb
