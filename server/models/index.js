import sequelize from "./db.js";
import Sequelize from "sequelize";
import User from "./user.model.js";
import Role from "./role.model.js";

//สร้าง object db เพื่อรวมทุกอย่าง
const db = {};

// S ตัวเล็ก
db.sequelize = sequelize; // instance ที่ใช้เชื่อม DB
// S ตัวใหญ่
db.Sequelize = Sequelize; // class Sequelize

db.User = User; // model user
db.Role = Role;  // model role

// Association
db.User.belongsToMany(db.Role, {
  through: "user_roles",   // ใช้ตารางกลางชื่อ user_roles
  foreignKey: "userId",   // คีย์ฝั่ง User
  otherKey: "roleId",   // คีย์ฝั่ง Role
});

db.Role.belongsToMany(db.User, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

export default db;
