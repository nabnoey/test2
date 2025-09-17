import sequelize from "./db.js";
//import (นำเข้า) สิ่งที่ชื่อว่า DataTypes จากไลบรารีที่ชื่อว่า "sequelize"
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync({ force: false })
  .then(() => {
    console.log("Table created or already exists");
  })
  .catch((error) => {
    console.error("Error creating table", error);
  });

export default User;
