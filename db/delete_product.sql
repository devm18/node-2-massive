delete from products
-- select * from products --check
where product_id = $1
returning *;  


