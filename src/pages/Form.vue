<template>
    <Layout>
        <section class="wow ">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6 col-md-6 padding-20px-bottom">
                            <g-image class="home-cards" :src="require(`../assets/images/home-card/${$page.events.image}`)"/>
                        </div>
                        <div class="col-12 col-lg-6 col-md-6">
                        <h3 class="text-uppercase">{{$page.events.title}}</h3>
                        <p>{{$page.events.para1}}</p>
                        <p>{{$page.events.para2}}</p>
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
                        <form id="form-submit" @submit.prevent="onSubmit">
                            <div class="border-radius-8">
                                <div class="row padding-100px-lr lr-20x-padding-mob">
                                    <div class="col-12 col-lg-6">
                                        <label>Full Name:</label>
                                        <ValidationProvider rules="required|min:3" v-slot="{errors}">
                                            <input type="text" name="Name" placeholder=" Full Name*" v-model="fullName" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Phone:</label>
                                        <ValidationProvider rules="required|digits:10" v-slot="{errors}">
                                            <input type="number" name="Phone" placeholder="Phone*" v-model="phone" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}" />
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Email:</label>
                                        <ValidationProvider rules="required|email" v-slot="{errors}">
                                            <input type="email" name="email" v-model="email" placeholder="Email*
                                " :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Age:</label>
                                        <ValidationProvider rules="required|numeric|max:3" v-slot="{errors}">
                                            <input type="number" name="age" v-model="age" placeholder="Age*" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Company/Insitution Name:</label>
                                        <ValidationProvider rules="required|min:3" v-slot="{errors}">
                                            <input type="text" name="Company/Insitution Name" placeholder="Company/Insitution Name*" v-model="companyName" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
                                            <div class="text-danger margin-20px-bottom">
                                                {{errors[0]}}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Designation:</label>
                                        <ValidationProvider rules="required|min:3" v-slot="{errors}">
                                            <input list="designations" name="designation" v-model="designation" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
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
                                        <select id="firstTime" v-model="firstTime">
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>How did you hear about us?:</label>
                                        <ValidationProvider rules="required|min:3" v-slot="{errors}">
                                            <input list="hear-about" id="referral" v-model="referral" :class="{'input-bg-error':errors[0],'input-bg':!errors[0]}">
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
                                        <input type="text" name="referralCode" id="referralCode" placeholder="Referral Code" v-model="referralCode">
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Event:</label>
                                        <input type="text" name="event" id="workshop" class="input-bg">
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Date:</label>
                                        <input type="text" name="date" id="date" class="input-bg">
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <label>Time:</label>
                                        <input type="text" name="time" id="time" class="input-bg">
                                    </div>
                                    <div class="col-12 text-center">
                                        <button type="submit" :disabled="invalid" class="btn btn-fm border-radius-4 btn-large margin-20px-top">Book now</button>
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
query  {
   events(id:"2"){
   title
   para1
   para2
   image
  }
}
</page-query>
<script>
import results from '@/data/events.json'
export default {
    name: '	',
    data() {
        return {
      
            fullName: '',
            email: '',
            phone: '',
            referral: '',
            referralCode: '',
            designation: '',
            companyName: '',
            age: '',
            firstTime: '',
           result:'',
           results,
           eventId:''
        }
    },
    mounted (){
         this.eventId = this.$route.query.id;
         console.log(this.eventId)
        
    },
    
    methods:{
    	onSubmit(){
    		alert('sent')
    	}
    },

}
</script>
<style lang="css" scoped>
</style>