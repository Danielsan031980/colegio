const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.Register = async (req, res) => {
    try {
      
      const user = new User(req.body);
      await user.save();
  
      const jwtToken = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
      
      return res
        .cookie("usertoken", jwtToken, process.env.SECRET_KEY, {
          httpOnly: true,
        })
        .json({ mail: user.mail, _id: user._id });
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  };

  module.exports.Login = async (req, res) => {
    try {   
      
      const user = await User.findOne({ mail: req.body.mail })
      .then(console.log(req.body.mail)
      )
      .catch(err => res.json({ message: "Something went wrong", error: err }));
      if (user === null) {
        res
          .status(400)
          .json({ errors: { error: { message: "El usuario no existe" } } });
      }

      
      const correctPassword = await bcrypt.compare(
        req.body.pass,
        user.pass
      );
  
      if (!correctPassword) {
        res
          .status(400)
          .json({
            errors: { error: { message: "La contraseña es incorrecta" } },
          });
      }
  
      const userToken = jwt.sign({id: user._id},process.env.SECRET_KEY);
  
      res
        .cookie("usertoken", userToken, process.env.SECRET_KEY, {
          httpOnly: true,
        })
        .json({ mail: user.mail, _id: user._id });
    } catch (err) {
      res.status(400).json(err);
    }
  };

  module.exports.Logout = async (req, res) => {
    try {
      res.clearCookie("usertoken");
      res.json({ success: true });
    } catch (e) {
      console.error(e);
      return { success: false, data: e.message };
    }
  };

  module.exports.getAll = (request, response) => {
    User.find({})
      .then((users) => response.json(users))
      .catch((err) => response.json(err));
  };

  module.exports.getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id).exec();
      res.json(user);
    } catch (e) {
      console.error(e);
      return { success: false, data: e.message };
    }
  };


  module.exports.deleteUser= async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id).exec();
      res.json(user);
    } catch (e) {
      console.error(e);
      return { success: false, data: e.message };
    }
  };


  // module.exports.updateUser= async (req, res) => {
  //   try {
  //     console.log("aqui")
  //     const { id } = req.params;
  //     const user = await User.findOneAndUpdate(id, req.body, { new: true }).exec();
  //     res.json(user);
  //     console.log(res.data)
  //   } catch (e) {
  //     console.error(e);
  //     return { success: false, data: e.message };
  //   }
  // };

  module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updateUser => res.json({ api: updateUser }))
      .catch(err => res.status(400).json(err));
  };

