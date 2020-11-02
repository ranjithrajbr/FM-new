<template>
    <Layout :theme="theme">
        <section class="wow ">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6 col-md-6 padding-20px-bottom">
                            <!-- <img :src="require(`../static/home-card/${image}`)" /> -->
                            <!-- <g-image :src="`home-card/${image}`"/> -->
                          <g-image :src="`${$page.event.image}`"/>
                        </div>
                        <div class="col-12 col-lg-6 col-md-6">
                            <h3 class="text-uppercase">{{$page.event.title}}</h3>
                            <p>{{$page.event.description}}</p>
                            
                        </div>
                    </div>
                </div>
            </section>
            <div style="height: 40px;"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
                        <h5 class="alt-font text-extra-dark-gray">Register here!</h5>
                    </div>
                    <ValidationObserver v-slot="{ invalid }">
                        <form id="form-submit" @submit.prevent="onSub">
                            <div class="border-radius-8">
                                <div class="row padding-100px-lr lr-20x-padding-mob">
                                    <div class="col-12 col-lg-6">
                                        <label>Full Name:</label>
                                        <ValidationProvider rules="required|min:3" v-slot="{errors}">
                                            <input type="text" name="Name" placeholder=" Full Name*" v-model="fdata.fullName" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Phone:</label>
                                        <ValidationProvider rules="required|digits:10" v-slot="{errors}">
                                            <input type="number" name="Phone" placeholder="Phone*" v-model="fdata.phoneNumber" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}" />
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Email:</label>
                                        <ValidationProvider rules="required|email" v-slot="{errors}">
                                            <input type="email" name="email" v-model="fdata.emailId" placeholder="Email*
                                " :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Age:</label>
                                        <ValidationProvider rules="required|numeric|max:3" v-slot="{errors}">
                                            <input type="number" name="age" v-model="fdata.age" placeholder="Age*" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Company/Insitution Name:</label>
                                        <ValidationProvider rules="required|min:3" v-slot="{errors}">
                                            <input type="text" name="Company/Insitution Name" placeholder="Company/Insitution Name*" v-model="fdata.company" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Designation:</label>
                                        <ValidationProvider rules="required|min:3" v-slot="{errors}">
                                            <input list="designations" name="designation" v-model="fdata.designation" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
                                            <datalist id="designations">
                                                <option value="Student">Student</option>
                                                <option value="Working Professional">Working Professional</option>
                                                <option value="Entrepreneur">Entrepreneur</option>
                                            </datalist>
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <div><label>Is this your first workshop with us ?</label></div>
                                        <select id="firstTime" v-model="fdata.firstTime">
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>How did you hear about us?:</label>
                                        <ValidationProvider rules="required|min:3" v-slot="{errors}">
                                            <input list="hear-about" id="referral" v-model="fdata.referral" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
                                            <datalist id="hear-about">
                                                <option value="Instagram">Instagram</option>
                                                <option value="Facebook">Facebook</option>
                                                <option value="Word of mouth">Word of mouth</option>
                                            </datalist>
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Referral Code(If any):</label>
                                        <input type="text" name="referralCode" id="referralCode" placeholder="Referral Code" v-model="fdata.referralCode">
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Event:</label>
                                        <input type="text" name="event" id="workshop" :disabled="value" class="input-bg" v-model="fdata.title">
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Date:</label>
                                        <input type="text" name="date" id="date" :disabled="value" class="input-bg" v-model="fdata.date">
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Time:</label>
                                        <input type="text" name="time" id="time" :disabled="value" class="input-bg" v-model="fdata.time">
                                    </div>
                                    <div class="col-12 text-center">
                                        <button type="submit" :disabled="invalid" class="btn btn-fm border-radius-4 btn-large margin-20px-top">Book now</button>
                                    </div>
                                    <div v-if="counter==1" class="'col-12 text-center margin-20px-top alert alert-success">
                                        <p>Thank you for registering for the workshop! An email with the details will be sent to you shortly.</p>
                                    </div>
                                    <div v-else-if="counter==2" class="col-12 text-center margin-20px-top alert alert-danger">
                                        <p><strong>Error!</strong> Something went wrong sending your message.</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </section>
    </Layout>
</template>
<page-query>
query ($id: ID!) {
  event(id: $id) {
    id
    title
    image
    description
    date
  }
}
</page-query>

<script>  
import moment from 'moment'
import results from '@/data/events.json'
import axios from 'axios'
export default {
    name: ' ',
    data() {
        return {
            theme: true,
            value:true,
            fdata: {
                fullName: '',
                emailId: '',
                phoneNumber: '',
                referral: '',
                referralCode: '',
                designation: '',
                company: '',
                age: '',
                firstTime: '',
                title: '',
                date: '',
                time: '',
            },
            dnt:'',
            dt:[],
            results,
            image:'',
            counter:0
        }
    },
    mounted() {
        this.fdata.title = this.$page.event.title
        this.dnt = this.$page.event.date
        var test = moment(this.dnt).format('MMMM Do YYYY, h:mm a')
        this.dt = test.split(',')
        this.fdata.date=this.dt[0]
        this.fdata.time = this.dt[1]
    },
    methods: {
        onSub() {
            axios.post('https://firstmain-backend.herokuapp.com/participants', this.fdata).then(response => {
           this.counter =1
            }).catch((error)=>{
           this.counter = 2
            })
        }

    }
}
</script>
<style lang="css" scoped>
</style>