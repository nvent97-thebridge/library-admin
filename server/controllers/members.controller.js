const Member = require("../models/Member");

const createMember = async (req, res) => {
  const memberName = req.body.name;
  const createdMember = await Member.create({
    name: memberName,
    registrationDate: new Date(),
  });
  res.status(201).send(createdMember.id);
};

exports.createMember = createMember;
