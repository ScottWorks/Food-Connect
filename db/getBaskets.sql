SELECT *
FROM baskets AS ba
JOIN businesses AS bu
ON ba.business_id = bu.business_id
WHERE pick_up_time > $1
ORDER BY pick_up_time DESC