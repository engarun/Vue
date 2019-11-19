<script>
    var app = new Vue({
        el: '#product',
        data: {
            image: 'apple.png',
            alt_text: 'This is alt text',
            toolTip: 'This is title',
            product_name: 'Apple Australia Red Fresh',
            inStock: true,
            pcolor: 'red',
            fontsize: '12px',
            details: [
                {
                    detail_id: 1,
                    size: 'Medium',
                    price: '$2.5',
                    weight: '50 Grams',
                    color: 'green',
                    image: 'green_apple.jpg',
                },
                {
                    detail_id: 2,
                    size: 'Large',
                    price: '$2.7',
                    weight: '50 Grams',
                    color: 'red',
                    image: 'red_apple.jpg',
                },
            ],
            cart_total: 0,
            style_object: {
                color: 'blue',
                fontSize: '20px',
            },
            style_array: [
                {
                    color: 'purple',
                    fontSize: '15px',
                },
                {
                    margin: '5px',
                    padding: '10px',
                },
            ],
        },
        methods: {
            addToCart() {
                this.cart_total += 1
            },
            changeImage(image) {
                this.image = image
            }
        },
    })
</script>
