const EasyPost = require('node-easypost'); //getting the client library. make sure npm i node-easypost.
const api = new EasyPost('<test api key here>') // if u put it here do not push this shit to github. best to store keys in a dotenv (environment) file.

// i like arrow functions, but i included older syntax for functions too so you can compare.
// req handles all the REQUEST info. such as parameters, body, and queries.
// for example, if you have parameters associated with your endpoint, those can be accessed on req.params

module.exports = {
    createAddress: (req, res) => {
        const { street1, street2, city, state, zip, country, company, phone } = req.body;
        // for testing this stuff you could just hard code in values for those keys in the address object instead of sending them on the body.
        const address = new api.Address({
            street1,
            street2,
            city,
            state,
            zip,
            country,
            company,
            phone,
        });
        address.save().then(addr => {
            res.status(200).send(addr) //res.status will send a http status code to the requester, and res.send will send whatever info you pass in to the requester.
        }).catch(err => console.log(err)); // catch will take in an error if one is sent, and then you can console log the error.
    },
    getAddress: function (req, res) {
        const { addressID } = req.params; //make sure the parameter name matches the one you defined in your url in the index.js file.
        api.Address.retrieve(addressID).then(addr => res.send(addr)).catch(err => console.log(err));
    },
}