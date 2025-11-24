Admin Panel System : ( Next.js & Express)
    Super Admin
        Tenants :
            Admin ( one ) ( has privilages of branch admins on any branch )
            Branches :
                Admin ( one )
                    Employees :
                        Delivery Admin ( many ) ( create order )
                        Delivery ( change order status from under delivery to delivery confirm)
                        Cashier has categories ( many ) ( Password is Numbers only )
                        Kitchen has categories ( many ) ( Password is Numbers only )

                Categories ( has many sizes )
                    Add New Category ( Icon , name )

                Sizes :
                   add new size ( name , abb , category )

                Products : 
                    add new product (  )

                Order ( pick up , delivery , take away , restaurant )

Cashier System ( POS ) ( React & Express ) :
    Access By Cashier User and Kitchen User

    Item :
        Add New Item : ( image , name , description , price , take away price and category)

    Table :
        Add New Table ( name , out/ in door , floor , number of seats )

    Floor : 
     Add Floor ( name )

    Settings : 
        Theme , Langauges , Tax Rate , Discount Rate

    Discount Managment
        Add New Discount ( discount type [ global , client , product , category ] , precentage , target type , start date and end date )

    Client on Table 
        View All Items to place order
    
    Kitchen 
        List of Restaurant Order 
        Change Status of Order Items From Pending to Ready

Ecommerce System ( Next.js )
    Need to Link Client on Table
