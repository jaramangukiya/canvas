
    var products = [];
    products.push({
        id:1,
        name:"Daybed ",
        price:"$799.99",
        image:"assest/img/beds/1.jpg"
    })
    products.push({
        id:2,
        name:"Light Grey tables",
        price:"$799.99",
        image:"assest/img/tables/1.jpg"
    })
    products.push({
        id:3,
        name:"Chesterfield",
        price:"$23",
        image:"assest/img/sofa/7.jpg"
    })
    products.push({
        id:4,
        name:"Nested Table",
        price:"$12.99",
        image:"assest/img/tables/4.jpg"
    }) 
    products.push({
        id:5,
        name:"Hinged Door Wardrobe",
        price:"$1099.99",
        image:"assest/img/wardores/6.jpg"
    })
    products.push({
        id:6,
        name:"Ming Chair",
        price:"$24.99",
        image:"assest/img/chairs/5.jpg"
    })
    products.push({
        id:7,
        name:"Bar Table",
        price:"$524.99",
        image:"assest/img/tables/18.jpg"
    })
    products.push({
        id:8,
        name:"Golden Lamp for Room",
        price:"$524.99",
        image:"assest/img/3.jpg"
    }) 
    products.push({
        id:9,
        name:"Walk-In Wardrobe",
        price:"$804.99",
        image:"assest/img/wardores/3.jpg"
    })
    products.push({
        id:10,
        name:"The ottoman",
        price:"$157.99",
        image:"assest/img/chairs/7.jpg"
    })
    products.push({
        id:11,
        name:"Bridgewater",
        price:"$1502.99",
        image:"assest/img/sofa/13.jpg"
    })
    products.push({
        id:12,
        name:"Divan",
        price:"$157.99",
        image:"assest/img/sofa/12.jpg"
    })
    var products_html = document.getElementById('products');

    function createproduct(){
        for(var item of products){
            var product_items = document.createElement('div');
            product_items.classList.add('item');

            var product_images = document.createElement('img');
            product_images.src = item.image;
            product_images.width = 300;
            product_images.classList.add('border-radius');
            product_items.appendChild(product_images);

            var product_h6 = document.createElement('h6');
            product_h6.textContent = item.name;
            product_h6.classList.add("my-2")
            product_items.appendChild(product_h6);

            var product_p = document.createElement('p');
            product_p.textContent = item.price;
            product_items.appendChild(product_p);
            
            var product_cart = document.createElement('a');
            product_cart.href= "#";
            product_cart.classList.add('arrivals-icon');
            product_cart.setAttribute("data-info",item.name);
            product_cart.setAttribute("data-ptice",item.price);
            product_items.appendChild(product_cart);

            var product_icon = document.createElement('div');
            product_icon.classList.add('arrivals-icon');
            product_cart.appendChild(product_icon);

            var product_sub_icon = document.createElement('div');
            product_sub_icon.classList.add('frist-icon');
            product_icon.appendChild(product_sub_icon);

            products_html.appendChild(product_items)
        }
    }
    createproduct();
