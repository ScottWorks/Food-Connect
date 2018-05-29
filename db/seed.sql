DROP TABLE IF EXISTS businesses

CREATE TABLE businesses
(
    business_id SERIAL PRIMARY KEY,
    business_name VARCHAR(45),
    street_address VARCHAR(45),
    city VARCHAR(45),
    state VARCHAR(),
    zip_code VARCHAR(45),
    phone_number VARCHAR(15),
    business_type VARCHAR(45),
    admin_first_name VARCHAR(45),
    admin_last_name VARCHAR(45),
    fein VARCHAR(20),
    latitude VARCHAR(45),
    longitude VARCHAR(45)
)