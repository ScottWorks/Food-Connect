UPDATE baskets 
SET non_profit_id = $1,
    scheduled_time = $2,
    status = $3
WHERE basket_id = $4 