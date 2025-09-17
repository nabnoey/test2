import Restaurant from "../models/restaurant.model.js";
const restaurantController = {};
//Create and save a new restuarants
restaurantController.create = async (req, res) => {
  const { title, type, imageUrl } = req.body;
  //validate data
  if (!title || !type || !imageUrl) {
    res.status(400).send({ message: "title , Type or imgUrl Can't be empty" });
    return;
  }
  await Restaurant.findOne({ where: { title } }).then((restaurant) => {
    if (restaurant) {
      res.status(400).send({ message: "Restaurant already exists" });
      return;
    }
    const newRestaurant = {
      title,
      type,
      imageUrl,
    };
    Restaurant.create(newRestaurant)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({ message: error.message || "Something error" });
      });
  });
};

//get

restaurantController.getAll = async (req, res) => {
  await Restaurant.findAll()
    .then((data) => {
      res.send(data);
    })

    .catch((error) => {
      res.status(500).send({ message: error.message || "Something error" });
    });
};

//getID
restaurantController.getById = async (req, res) => {
  const id = req.params.id;
  await Restaurant.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "No found Restaurant with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: error.message || "Something error" + id });
    });
};

//update

restaurantController.update = async (req, res) => {
  const id = req.params.id;
  const { title, type, imageUrl } = req.body;
  if (!title && !type && !imageUrl) {
    res
      .status(404)
      .send({ message: "Title, Type and ImageUrl can not be empty!" });
    return;
  }

  await Restaurant.update(
    { title: title, type: type, imageUrl: imageUrl },
    {
      where: { id: id },
    }
  ).then((num) => {
    if (num == 1) {
      res.send({ message: "Restaurant update successfully!" });
    } else {
      res.send({
        message:
          "Cannot update restaurant with id " +
          id +
          ".Maybe restaurant was not found or req.body is empty .",
      });
    }
  });
};

//Delete
restaurantController.deleteById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "Id id Missing" });
    return;
  }

  await Restaurant.destroy({ where: { id } }).then((num) => {
    if (num === 1) {
      res.send({ message: "Restaurant was deleted sucessfully!" });
    } else {
      res.status({
        message:
          "Cannot update restaurant with id " +
          id +
          ".Maybe restaurant was not found or req.body is empty .",
      });
    }
  });
};
export default restaurantController;
