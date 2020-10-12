
const vm = new Vue({
        el: '#app',
        data: {
          loading : true,
          results: []    
        },
        mounted: function() {
            axios.get('./data_events.json').then(response => { 
            this.results = response.data
            this.loading = false
          })
        }
      });
