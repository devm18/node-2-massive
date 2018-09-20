update products set description = $2 /*req.body*/
-- select * from products --check
where product_id = $1 /*req.params*/
returning *;


/* 
... returning *; === select * from products; 
 */



