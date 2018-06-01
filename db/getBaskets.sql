SELECT *
FROM baskets AS ba
JOIN businesses AS bu
ON ba.business_id = bu.business_id
WHERE pick_up_time > $1 AND ba.business_id = ANY ($2) AND ba.status = 0
ORDER BY pick_up_time DESC