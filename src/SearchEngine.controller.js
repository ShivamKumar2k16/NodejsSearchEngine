const CountryJsonData = require('./CountryJsonData');

searchEngineValues = (req, res) => {
    let { search } = req.query;
    let searchEnginData = [];
    if (search) {
        searchEnginData = CountryJsonData.filter((country) => {
            let { name, code } = country;
            if (name.toLowerCase().startsWith(search.toLowerCase()) || code.toLowerCase().startsWith(search.toLowerCase())) {
                return country;
            }
        });
    }
    res.json(searchEnginData);
};

module.exports = {
    searchEngineValues
};