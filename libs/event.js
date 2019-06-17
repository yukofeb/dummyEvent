let express = require('express');
let router = express.Router();

router.get('/:id', function (req, res) {
    date = new Date("2019-10-01T10:00:00+0900");
    startDate = date.toString();
    date.setHours(date.getHours() + 1).toString();
    endDate = date.toString();

    let eid = req.params.id;
    res.json({
        eventNo: eid,
        eventName: `Event ${eid}`,
        startDate: startDate,
        endDate: endDate
    });
});

module.exports = router;
