INSERT INTO users
(
    user_name,
    user_pw,
    business_id,
    acct_type
)

VALUES
(
    $1,
    $2,
    $3,
    true
)