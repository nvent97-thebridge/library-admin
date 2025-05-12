const Member = require("../models/Member");

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (password != "messi") {
    res.status(400).send("INCORRECT_PASSWORD");
  }
  const createdMember = await Member.findOne({ where: { name: username } });
  if(!createdMember){
    res.status(404).send("INCORRECT_USERNAME")
  }
  res.status(201).send({ llave: createdMember.id });
};

const createMember = async (req, res) => {
  const memberName = req.body.name;
  const createdMember = await Member.create({
    name: memberName,
    registrationDate: new Date(),
  });
  res.status(201).send({ id: createdMember.id });
};

exports.createMember = createMember;
exports.login = login;
