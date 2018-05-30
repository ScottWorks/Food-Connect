DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS wishList;
DROP TABLE IF EXISTS businesses;
DROP TABLE IF EXISTS nonProfits;


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
    operating_hrs VARCHAR(45),
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

DROP TABLE IF EXISTS baskets;

CREATE TABLE baskets
(
    basket_id SERIAL PRIMARY KEY,
    business_id INTEGER REFERENCES businesses(business_id),
    pick_up_time INTEGER,
    scheduled_time INTEGER,
    -- STATUS: INTEGER IS USED AS A FLAG TO RECORD STATUS
    -- 0: Pending, 1: Completed, 2: Scheduled, 3: Expired, 4: No Pickup 
    status INTEGER,
    items JSONB
);

INSERT INTO baskets (business_id, pick_up_time, scheduled_time, status, items)
VALUES (1, 1527647113, null, 0, '[{ "item": "Bagel", "weight": 15 }, { "item": "Donuts", "weight": 515 }]');

INSERT INTO baskets (business_id, pick_up_time, scheduled_time, status, items)
VALUES (1, 1527621833, null, 0, '[{ "item": "Croissants", "weight": 65 }, { "item": "Bread", "weight": 45 }]');

INSERT INTO baskets (business_id, pick_up_time, scheduled_time, status, items)
VALUES (2, 1527647844, null, 0, '[{ "item": "Bagel", "weight": 5 }, { "item": "Donuts", "weight": 11 }, { "item": "Bread", "weight": 14 }]');

INSERT INTO baskets (business_id, pick_up_time, scheduled_time, status, items)
VALUES (3, 1527647851, null, 0, '[{ "item": "Bagel", "weight": 25 }, { "item": "Donuts", "weight": 55 }, { "item": "Croissants", "weight": 5 }, { "item": "Bread", "weight": 13 }]');

INSERT INTO baskets (business_id, pick_up_time, scheduled_time, status, items)
VALUES (3, 152764734, null, 0, '[{ "item": "Croissants", "weight": 8 }, { "item": "Bread", "weight": 13 }]');

INSERT INTO baskets (business_id, pick_up_time, scheduled_time, status, items)
VALUES (4, 1527647811, null, 0, '[{ "item": "Bagel", "weight": 225 }, { "item": "Donuts", "weight": 53 }, { "item": "Croissants", "weight": 55 }]');

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
    user_pw VARCHAR(45)
)