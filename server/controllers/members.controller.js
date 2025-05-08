const Member = require("../models/Member")

const createMember = (req, res) => {
    const memberName = req.body.name;
    
    res.send(memberName)
}

exports.createMember = createMember