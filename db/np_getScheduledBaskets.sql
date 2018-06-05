SELECT ba.basket_id, ba.scheduled_time, ba.items, bu.company_name, bu.street_address, bu.city, bu.state, bu.zip_code, bu.phone_number, bu.admin_first_name, bu.admin_last_name
FROM baskets AS ba
JOIN businesses AS bu
ON ba.business_id = bu.business_id
WHERE non_profit_id = $1
ORDER BY scheduled_time DESC