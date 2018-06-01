UPDATE baskets 
SET non_profit_id = $1,
    scheduled_time = $2
WHERE basket_id = $3 