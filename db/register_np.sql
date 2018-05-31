INSERT INTO nonprofits
(
    company_name,
    street_address,
    city,
    state,
    zip_code,
    phone_number,
    business_type,
    admin_first_name,
    admin_last_name
)
VALUES
(
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9
)
RETURNING *;