SELECT * 
FROM baskets
WHERE business_id = $1
AND pick_up_time > $2
AND status = 0
ORDER BY pick_up_time