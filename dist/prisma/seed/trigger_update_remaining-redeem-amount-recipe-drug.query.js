"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="76afee80-d5ed-5e81-9555-66d2c3b889c6")}catch(e){}}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerUpdateRemainingRedeemAmountRecipeDrugQuerySql = void 0;
exports.triggerUpdateRemainingRedeemAmountRecipeDrugQuerySql = `
CREATE TRIGGER trigger_update_remaining_redeem_amount_recipe_drug
AFTER INSERT ON transaction_product_item
FOR EACH ROW
EXECUTE FUNCTION update_remaining_redeem_amount_recipe_drug();
`;
//# sourceMappingURL=trigger_update_remaining-redeem-amount-recipe-drug.query.js.map
//# debugId=76afee80-d5ed-5e81-9555-66d2c3b889c6
