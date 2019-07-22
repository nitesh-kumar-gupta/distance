const fs = require('fs');
const distance = require('./distance');
exports.inviteUsers = function(file, from, distInKm = 100, sort = 'asce') {
    try {
        let result = [];
        let data = fs.readFileSync(file, 'utf8');
        let dataInLine = data.split('\n');
        for(let d of dataInLine) {
            let obj = JSON.parse(d);
            let dist = distance.getDistance(obj, from);
            if(dist <= distInKm) {
                let res = {
                    user_id: obj.user_id,
                    name: obj.name
                };
                result.push(res);
            }
            if(sort === 'asce')
                result.sort((a, b) => (a.user_id > b.user_id) ? 1 : -1)
            else
                result.sort((a, b) => (a.user_id > b.user_id) ? -1 : 1)
        }
        return result;
    } catch(err) {
        throw err;
    }
}