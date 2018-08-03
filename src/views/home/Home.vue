<template>
  <div class="home">
	<h1>11</h1>

  </div>
</template>

<script>
// @ is an alias to /src
// import Head from '@/components/header/Head.vue';
// import { guessCity, hotCity , groupCity } from '../../service/getData.js';

export default {
  name: 'home',
  data(){
  	return {
  		guessCity:"",
  		guessCityId:"",
  		hotCity:"",
  		groupCity:""
  	}
  },
  mounted(){
  	console.log(111);
  	// guessCity().then( res=>{
  	// 	this.guessCity = res.name;
  	// 	this.guessCityId = res.id;
  	// });
  	// hotCity().then( res =>{
  	// 	this.hotCity = res;
  	// });
  	// groupCity().then( res =>{
  	// 	this.groupCity = res;
  	// });
  },
  components: {
    // Head
  }
}
</script>
