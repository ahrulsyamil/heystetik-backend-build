export declare const functionUpdateRemainingRedeemAmountRecipeDrugQuerySql = "\nCREATE OR REPLACE FUNCTION update_remaining_redeem_amount_recipe_drug()\nRETURNS TRIGGER AS $$\nBEGIN\n  UPDATE consultation_recipe_drug\n  SET remaining_redeem_amount = remaining_redeem_amount - 1\n  WHERE product_id = NEW.product_id\n    AND customer_id = (\n    \tSELECT customer_id FROM transaction_product WHERE id = NEW.transaction_product_id LIMIT 1\n    )\n    AND due_date = (\n    \tSELECT MIN(due_date) FROM consultation_recipe_drug WHERE product_id = NEW.product_id AND customer_id = (\n    \t\tSELECT customer_id FROM transaction_product WHERE id = NEW.transaction_product_id LIMIT 1\n    \t)\n    \tAND due_date >= NOW()::DATE\n    );\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;   \n";