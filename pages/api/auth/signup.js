import connectMongo from "@/database/conn";
import Users from "@/model/Schema";
import { hash } from "bcryptjs";
import { trusted } from "mongoose";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  // Only Post Method Accepted
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data" });
    const { username, num, tel, email, password } = req.body;

    // check duplicate user
    const checkExistingUser = await Users.findOne({ email });
    if (checkExistingUser)
      return res.status(422).json({ message: "User Already Exists" });

    // hash Password
    Users.create(
      {
        username,
        num,
        tel,
        email,
        password: await hash(password, 12),
      },
      function (err, data) {
        if (err) return res.status(404).json({ err });
        res.status(201).json({ status: true, user: data });
      }
    );
  } else {
    res.status(500).json({ message: "HTTP method not valid" });
  }
}
