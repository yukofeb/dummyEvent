let express = require('express');
let router = express.Router();

router.get('/', function( req, res ) {
    let eventLocate = req.body.eventLocate == null ? 'noFilter' : req.body.eventLocate;
    let eventDate = req.body.eventDate == null ? 'noFilter' : req.body.eventDate;
    let eventFreeword = req.body.eventFreeword == null ? 'noFilter' : req.body.eventFreeword;

    date = new Date("2019-10-01T10:00:00+0900");
    date1 = date.toString();
    date.setHours(date.getHours() + 1).toString();
    date2 = date.toString();
    date.setDate(date.getDate() + 1).toString();
    date3 = date.toString();
    date.setHours(date.getHours() + 1).toString();
    date4 = date.toString();

    res.json([
        {
            eventNo: 'req3',
            eventName: `Event 3`,
            startDate: date1,
            endDate: date2
        },
        {
            eventNo: 'req4',
            eventName: `Event 4`,
            startDate: date3,
            endDate: date4
        }
    ])
})

router.post('/create', function(req, res) {
    let passportId = req.body.passportId == null ? 'defaultId' : req.body.passportId;
    let eventNo = req.body.eventNo == null ? 'defaultNo' : req.body.eventNo;

    res.json({
        passportId: passportId,
        eventNo: eventNo,
        status: 200
    })
})

router.put('/delete', function(req, res) {
    let passportId = req.body.passportId == null ? 'defaultId' : req.body.passportId;
    let eventNo = req.body.eventNo == null ? 'defaultNo' : req.body.eventNo;

    res.json({
        passportId: passportId,
        eventNo: eventNo,
        status: 200
    })
})

module.exports = router;
