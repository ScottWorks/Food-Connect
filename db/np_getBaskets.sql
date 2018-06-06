SELECT ba.basket_id, ba.pick_up_time, ba.items, bu.business_id, bu.company_name, bu.street_address, bu.city, bu.state, bu.zip_code, bu.phone_number, bu.admin_first_name, bu.admin_last_name, bu.operating_hrs
FROM baskets AS ba
JOIN businesses AS bu
ON ba.business_id = bu.business_id
WHERE pick_up_time > $1 AND ba.business_id = ANY ($2) AND ba.status = 0
ORDER BY pick_up_time DESC