<script>
    var app = new Vue({
        el: '#product',
        data: {
            store: 'Lorial Way',
            location: 'Green Park',
            selectedProduct: 0,
            products: [
                {
                    id: 1,
                    name: 'Apple Australia Green Fresh',
                    price: '$2.5',
                    stock: 10,
                    weight: '50 Grams',
                    Deliverable: true,
                    image: 'green_apple.jpg',
                    color: 'green',
                },
                {
                    id: 2,
                    name: 'Apple Australia Red Fresh',
                    price: '$3',
                    stock: 0,
                    weight: '65 Grams',
                    Deliverable: false,
                    image: 'red_apple.jpg',
                    color: 'red',
                },
                {
                    id: 3,
                    name: 'Apple Australia Yellow Fresh',
                    price: '$3.5',
                    stock: 20,
                    weight: '55 Grams',
                    Deliverable: true,
                    image: 'yellow_apple.jpg',
                    color: '#FFC300',
                }
            ],
        },
        computed: {
            storeInfo() {
                return this.store + ' - ' + this.location
            },
            image() {
                return this.products[this.selectedProduct].image
            },
            inStock() {
                return this.products[this.selectedProduct].stock
            },
            productName() {
                return this.products[this.selectedProduct].name
            },
            price() {
                return this.products[this.selectedProduct].price
            }
        },
        methods: {
            changeDetails(index) {
                this.selectedProduct = index
            }
        }

    })
</script>
