import { DataTypes } from "sequelize";
import sequelize from "./db.js";

//define ฟังก์ชันที่ใช้สร้าง Model 
//.define("role" ตรงนี้คือสร้างModelหรือตาราง  ชื่อว่า "role"
const Role = sequelize.define("role", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true, // กำหนดให้เป็น Primary Key
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Role;
