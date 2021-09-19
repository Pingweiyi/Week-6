
	var aaa = new Vue({
		el: '#aaa',
		data:{
		msg:"Please enter the user ID",
		checked:"false",
		picked:"Gender",
		selected:"Month",
	  }
	});
	
	var bbb = new Vue({
		el: '#bbb',
		data:{
		hobby:"CS:GO, LOL",

	  }
	});



	Vue.createApp({
	  data() {
	    return {
	      hobby:[]
	    }
	  }
	}).mount('#bb')
	


	
