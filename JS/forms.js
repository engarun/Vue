<script>
    Vue.component('feedback', {
        template: `
                <div>
                    <h5 class="text-primary">Feedback System: </h5>
                    <form @submit.prevent="onSubmit">
                        <p v-if="errors.length">
                            <ul>
                                <li class="text-danger" v-for="error in errors">{{error}}</li>
                            </ul>
                        </p>
                        <div class="form-group row">
                            <label  class="col-sm-2 col-form-label col-form-label-sm" for="name">Name:</label>
                            <div class="col-sm-4">
                                <input class="form-control form-control-sm" type="text" v-model="name" name="name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label col-form-label-sm" for="message">Message:</label>
                            <div class="col-sm-4">
                                <textarea class="form-control form-control-sm" v-model="message" name="message" id="message" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label col-form-label-sm" for="rating">Rating:</label>
                            <div class="col-sm-4">
                            <select class="form-control form-control-sm" v-model="rating" name="rating" id="rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label col-form-label-sm" for="like">Did uou like this post?:</label>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="like" id="gridRadios1" v-model="like" value="yes" >
                            <label class="form-check-label" for="gridRadios1">Yes</label>
                            </div>
                            <div class="form-check ml-3">
                            <input class="form-check-input" type="radio" name="like" v-model="like" id="gridRadios2" value="no" >
                            <label class="form-check-label" for="gridRadios2">No</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-2">
                                <button class="form-control  btn-success" type="submit">submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            `,
        data() {
            return {
                name: null,
                message: null,
                rating: null,
                like: null,
                errors: []
            }
        },
        methods: {
            onSubmit() {
                if (this.name && this.message && this.rating && this.like) {
                    let ServiceFeedback = {
                        name: this.name,
                        message: this.message,
                        rating: this.rating,
                        like: this.like
                    }
                    this.$emit('feedback-submitted', ServiceFeedback)
                    this.name = null
                    this.message = null
                    this.rating = null
                    this.like = null
                    this.errors = []
                }
                else {
                    this.errors = []
                    if (!this.name) this.errors.push("Name is Required!")
                    if (!this.message) this.errors.push("Message is Required!")
                    if (!this.rating) this.errors.push("Rating is Required!")
                    if (!this.like) this.errors.push("Choose you like the post or not?")
                }
            }
        }
    })

    var app = new Vue({
        el: '#feedback',
        data: {
            feedback: [],
        },
        methods: {
            AddFeedback(ServiceFeedback) {
                this.feedback.push(ServiceFeedback)
            }
        }
    })

</script>
