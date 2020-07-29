var express = require('express');
var router = express.Router();
const Wish = require('../models/wishes');


/* GET users listing. */
router.get('/form', function(req, res, next) {
    res.render('index', { person_name: req.query.person_name })
});

//show user the form
router.get('/completed', function(req, res, next) {
    res.render('completedCard', { person_name: req.query.person_name })
});

router.get('/show', function(req, res, next) {
    Wish.find({}, function(err, wishes) {
        var wishMap = {};

        wishes.forEach(function(wish) {
            wishMap[wish._id] = wish;
        });

        res.send(wishMap);
    });
});


router.post('/submit', function(req, res, next) {

    /*
    //Use the name of the input field (i.e. "background_image") to retrieve the uploaded file
    let image = req.files.background_image;
    let fileName = Date.now() + image.name;

    //Use the mv() method to place the file in upload directory (i.e. "uploads")
    image.mv('./uploads/' + fileName);

*/
    const person_name = req.body.person_name;
    const audio_url = req.body.audio_url;
    //const image_url = "./uploads/" + fileName;
    const image_url = req.body.background_image;
    const wishes = [req.body.wish1, req.body.wish2, req.body.wish3, req.body.wish4, req.body.wish5, req.body.wish6, req.body.wish7]


    var newWish = new Wish({
        person_name: person_name,
        audio_url: audio_url,
        image_url: image_url,
        wishes: wishes
    });


    Wish.findOne({ person_name: person_name }).then(wish => {
        if (wish) {
            Wish.updateOne({ person_name: person_name }, {
                audio_url: audio_url,
                image_url: image_url,
                wishes: wishes
            }, function(err, wish) {
                if (err) return console.error(err);
                console.log("Document updated succussfully!");
            })


        } else {
            newWish.save(function(err, wish) {
                if (err) return console.error(err);
                console.log("Document inserted succussfully!");
            })
        }
    })
    res.render('submitted', { person_name: req.query.person_name })
        /*
            Wish.findOneAndUpdate({ person_name: person_name }, // find a document with that filter
                newWish, // document to insert when nothing was found
                { upsert: true, new: true, runValidators: true }, // options
                function(err, doc) { // callback
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("succesfully added/updated")
                    }
                }
            );*/
});

module.exports = router;