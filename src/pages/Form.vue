<template>
    <Layout :theme="theme">
        <section class="wow ">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6 col-md-6 padding-20px-bottom">
                           <!--  <img :src="require(`../assets/images/home-card/${image}`)" /> -->
                            <g-image :src="require(`../assets/images/home-card/${image}`)" />
                        </div>
                        <div class="col-12 col-lg-6 col-md-6">
                            <h3 class="text-uppercase">{{fdata.title}}</h3>
                            <p>{{para1}}</p>
                            <p>{{para2}}</p>
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
                                            <input type="number" name="Phone" placeholder="Phone*" v-model="fdata.phone" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}" />
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Email:</label>
                                        <ValidationProvider rules="required|email" v-slot="{errors}">
                                            <input type="email" name="email" v-model="fdata.email" placeholder="Email*
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
                                            <input type="text" name="Company/Insitution Name" placeholder="Company/Insitution Name*" v-model="fdata.companyName" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
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
                                        <input type="text" name="event" id="workshop" class="input-bg" v-model="fdata.title">
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Date:</label>
                                        <input type="text" name="date" id="date" class="input-bg" v-model="fdata.date">
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Time:</label>
                                        <input type="text" name="time" id="time" class="input-bg" v-model="fdata.time">
                                    </div>
                                    <div class="col-12 text-center">
                                        <button type="submit" :disabled="invalid" class="btn btn-fm border-radius-4 btn-large margin-20px-top">Book now</button>
                                    </div>
                                    <div v-if="flag" class=" col-12 text-center margin-20px-top alert alert-success hidden">
                                        Thank you for registering for the workshop! An email with the details will be sent to you shortly.
                                    </div>
                                    <div v-else class="col-12 text-center margin-20px-top alert alert-danger hidden">
                                        <strong>Error!</strong> Something went wrong sending your message.
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
<script>
import results from '@/data/events.json'
import axios from 'axios'
export default {
    name: ' ',
    data() {
        return {
            theme: true,
            fdata: {
                fullName: 'test',
                email: 'test@d.in',
                phone: '1111111111',
                referral: 'aaa',
                referralCode: 'aaa',
                designation: 'aaa',
                companyName: 'aaa',
                age: '11',
                firstTime: 'yes',
                title: '',
                date: '',
                time: '',
            },
            results,
            image:'',
            para1:'',
             para2:'',
            flag:true
        }
    },
    mounted() {
        var q = this.$route.query.id
        this.fdata.title = this.results[q].title
        this.fdata.date = this.results[q].date
        this.fdata.time = this.results[q].time
        this.image = this.results[q].image
        this.para1 = this.results[q].para1
        this.para2 = this.results[q].para2
    },
    methods: {
        onSub() {
            axios.post('#', this.fdata).then(response => {
              this.flag =  true  
            }).catch((error)=>{
                this.flag= false
            })
        }
    }
}
</script>
<style lang="css" scoped>
</style>