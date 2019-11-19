var app = new Vue({
    el: '#product2', 
    data: {
       stock:50,
       product_name: 'Apple Australia Round Green',
       image:"apple.png",
       alt_text: 'This is alt text',
       toolTip: 'This is the Title for this image',
       details:["Color : Green", "Size : Normal", "Packed : Today"],
       daily_details:[
           {
                detail_id:1,
                Stock:30,
                price: '$10',
                Deliverbale:'Yes',
                day: '15',
                color : 'green',
                image:'green_apple.jpg',
           },
           {
                detail_id:2,
                Stock:25,
                price:'$15',
                Deliverbale:'Yes',
                day:'16',
                color: 'red',
                image:'red_apple.jpg',

           },
       ],
       cart_total:0,
    },
    methods:{
        addToCart(){
            this.cart_total += 1
        },
        ChangeImage(image){
            this.image = image
        },
    }
})
