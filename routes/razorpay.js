var express = require('express');
var router = express.Router();
var Razorpay = require('razorpay');

var instance = new Razorpay({
    key_id: 'rzp_test_LfsyxD8yUUG7it',
    key_secret: 'wwtO10onXX56acQZB7FJ8oIX'
});

//console.log(instance,' ============= instance');
router.get('/', function(req, res, next) {
    res.render('razorpay');
});
router.post('/payment', function(req, res, next) {
    
    console.log(req.body);
    /* instance.payments.fetch(req.body.payment_id).then((data) => {
        // success
        console.log(data);
        res.send('success');
      }).catch((error) => {
        // failure
        console.log(error);
        res.send('failure');
    }) */
    instance.payments.capture(req.body.payment_id, req.body.amount).then((data) => {
        // success
        console.log(data);
        res.send('success');
      }).catch((error) => {
        // error
        console.log(error);
        res.send('failure');
      })
});

module.exports = router;