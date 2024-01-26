const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainControllers = {
	index: (req, res) => {
		res.render('index',{userData:""})
		console.log(req.query.user)
	},
	form:(req, res) => {
		let errors = validationResult(req)
		req.session.user = req.body
	if (errors.isEmpty()){
		if(req.body.recuerdame != undefined){
		res.cookie('recuerdame',
		req.session.user,{ maxAge: 900000 })

	}
	res.render('index', {userData: req.session.user})
	console.log(req.session.user)
	}
}


}	
module.exports = mainControllers;
