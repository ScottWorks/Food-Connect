UPDATE baskets
SET aws_path = $2
WHERE baskets.basket_id = $1