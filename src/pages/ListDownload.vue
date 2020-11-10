<template>
	<download-csv
    :data= "jsonData"
    :name="dataFile"
    :labels="labels"
    :fields="fields"
    class="btn btn-default">
  </download-csv>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ListDownload',
  data () {
    return {
    	jsonData: [
          {'id': 1, 'fname': 'Jesse', 'lname': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male'},
          {'id': 2, 'fname': 'John', 'lname': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male'},
          {'id': 3, 'fname': 'Tina', 'lname': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female'},
          {'id': 4, 'fname': 'Clarence', 'lname': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male'},
          {'id': 5, 'fname': 'Anne', 'lname': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female'},
          {'id': 6, 'fname': '佟博', 'lname': '能娜', 'date': '2016-12-06 14:38:38', 'gender': 'Male'},
          {'id': 7, 'fname': 'Širůčková', 'lname': 'Tereza', 'date': '2019-12-06 14:38:38', 'gender': 'Female'},
        ],
         dataFile: 'my_export.csv',
        labels: {
          fname: 'First Name',
          lname: 'Last Name'
        },
        fields : ['id', 'fname', 'lname', 'date']

    }
  }
  // created(){
  // 	axios.get('https://firstmain-backend.herokuapp.com/participants').
  // 	then(response=>{
  // 		this.json_data = response.data
  // 		console.log(this.json_data)
  // 	})
  // }
}
</script>

<style lang="css" scoped>
</style>