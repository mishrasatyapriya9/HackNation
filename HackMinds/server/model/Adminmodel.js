import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    // },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);

//ADMIN DEMO SCHEMA JSON
// [
//   {
//     id: "admin_1",
//     username: "admin_user",
//     email: "admin@example.com",
//     password: "admin_password",
//   },
//   {
//     id: "admin_2",
//     username: "super_admin",
//     email: "super.admin@example.com",
//     password: "super_admin_password",
//   },
//   {
//     id: "admin_3",
//     username: "manager_admin",
//     email: "manager.admin@example.com",
//     password: "manager_admin_password",
//   },
//   {
//     id: "admin_4",
//     username: "support_admin",
//     email: "support.admin@example.com",
//     password: "support_admin_password",
//   },
//   {
//     id: "admin_5",
//     username: "tech_admin",
//     email: "tech.admin@example.com",
//     password: "tech_admin_password",
//   },
// ];
