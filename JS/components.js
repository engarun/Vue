<script>
    Vue.component('product-terms', {
        props: {
            terms: {
                type: Array,
                required: true
            },
        },
        template: `
                <div>
                    <p class="text-primary">Terms & Conditions</p>
                    <ul>
                        <li v-for="term in terms">{{term}}</li>
                    </ul>
                </div>
            `,
    })

    Vue.component('product', {
        props: {
            promo: {
                type: Boolean,
                required: true
            }
        },
        template: `
            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <p class="text-success">Output:</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col">
                            <img :src="image" alt="apple" title="apple">
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col"> 
                                    <p>Store Location: <span class="text-primary">{{storeInfo}}</span></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h4>{{productName}}</h4>
                                </div>
                            </div> 
                            <div class="row">
                                <div class="col">
                                    <p style="border-bottom:dotted 1px #333">Description</p>
                                    <ul>
                                        <li>Weight: {{weight}} </li>
                                        <li v-if="Deliverable">Deliverbale: Yes</li>
                                        <li v-else>Deliverbale: No</li>
                                        <li>Color: {{color}}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <p>price: <span class="text-danger">{{price}}</span></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <p>Promotion Applied: <span class="text-success h5">{{promo}}</span></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <p>Shipping: <span class="text-success h5">{{shipping}}</span></p>
                                </div>
                            </div>
                            <div class="row">
                                    <p class="ml-3  mr-3">Colors:</p>
                                    <div v-for="(item, index) in products" :key="item.id" :style="{backgroundColor:item.color}" class="colorbox"
                                    @mouseover="changeDetails(index)"></div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <button v-if="inStock" class="btn-success">AddToCart</button>
                                    <button v-else class="text-secondary" disabled="true">OutOfStcok</button>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col">
                                    <p class="small text-primary">Move over the color boxes, the details of the product will change respectively. If stock is 0 then the addToCart button will be disabled and change the color of the button to gray and label as OutOfStcok</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <product-terms :terms="conditions"></product-terms>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `,
        data() {
            return {
                store: 'Lorial Way',
                location: 'Green Park',
                selectedProduct: 0,
                cart_total: 0,
                conditions: ['All the prices including VAT', 'Shipping charges are aditional and varies from place to place', 'Not Delivered during to public holidays', 'items not allowed for return after 24 hours of delivery'],
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
            }
        },
        methods: {
            changeDetails(index) {
                this.selectedProduct = index
            },
            cartTotal() {
                this.cart_total += 1
            }
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
            },
            weight() {
                return this.products[this.selectedProduct].weight
            },
            Deliverable() {
                return this.products[this.selectedProduct].Deliverable
            },
            color() {
                return this.products[this.selectedProduct].color
            },
            shipping() {
                if (this.promo) {
                    return 'Free'
                }
                return '$2.55'
            },

        }
    })

    var app = new Vue({
        el: '#product',
        data: {
            promo: true,
        }
    })
</script>
