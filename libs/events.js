let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
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
            eventNo: 1,
            eventName: `Event 1`,
            startDate: date1,
            endDate: date2
        },
        {
            eventNo: 2,
            eventName: `Event 2`,
            startDate: date3,
            endDate: date4
        }
    ]);
});

router.get('/search', function( req, res ) {
    let eventLocate = req.query['locate'];
    let eventDate = req.query['date'];
    let eventFreeword = req.query['freeword'];

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
            eventNo: 3,
            eventName: `Event 3`,
            startDate: date1,
            endDate: date2
        },
        {
            eventNo: 4,
            eventName: `Event 4`,
            startDate: date3,
            endDate: date4
        }
    ])
})

module.exports = router;
