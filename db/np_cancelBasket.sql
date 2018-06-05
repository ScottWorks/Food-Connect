UPDATE baskets 
SET non_profit_id = NULL,
    scheduled_time = NULL,
    status = $1
WHERE basket_id = $2 