UPDATE baskets
SET business_id = $2, pick_up_time = $3, status = $4, items = $5
WHERE basket_id = $1
RETURNING *;