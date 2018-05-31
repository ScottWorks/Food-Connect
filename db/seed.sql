DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS wishList;
DROP TABLE IF EXISTS nonProfits;
DROP TABLE IF EXISTS baskets;
DROP TABLE IF EXISTS businesses;


CREATE TABLE businesses
(
    business_id SERIAL PRIMARY KEY,
    company_name VARCHAR(45),
    street_address VARCHAR(45),
    city VARCHAR(45),
    state VARCHAR(2),
    zip_code VARCHAR(45),
    phone_number VARCHAR(15),
    business_type VARCHAR(45),
    admin_first_name VARCHAR(45),
    admin_last_name VARCHAR(45),
    fein VARCHAR(20),
    operating_hrs TEXT,  
    latitude DECIMAL,
    longitude DECIMAL
);

CREATE TABLE nonProfits
(
    non_profit_id SERIAL PRIMARY KEY,
    company_name VARCHAR(45),
    street_address VARCHAR(45),
    city VARCHAR(45),
    state VARCHAR(2),
    zip_code VARCHAR(45),
    phone_number VARCHAR(15),
    business_type VARCHAR(45),
    admin_first_name VARCHAR(45),
    admin_last_name VARCHAR(45),
    fein VARCHAR(20),
    latitude DECIMAL,
    longitude DECIMAL
);

CREATE TABLE baskets
(
    basket_id SERIAL PRIMARY KEY,
    business_id INTEGER REFERENCES businesses(business_id),
    pick_up_time BIGINT,
    scheduled_time BIGINT,
    -- STATUS: INTEGER IS USED AS A FLAG TO RECORD STATUS
    -- 0: Pending, 1: Completed, 2: Scheduled, 3: Expired, 4: No Pickup 
    status INTEGER,
    items JSONB
);

CREATE TABLE wishList
(
    wishlist_id SERIAL PRIMARY KEY,
    non_profit_id INTEGER REFERENCES nonProfits(non_profit_id),
    items text[]
);

CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(45),
    user_pw VARCHAR(45),
    business_id INTEGER REFERENCES businesses(business_id),
    non_profit_id INTEGER REFERENCES nonProfits(non_profit_id),
    acct_type BOOLEAN
);