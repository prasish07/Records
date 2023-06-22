const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const app = require("../app");

chai.use(chaiHttp);

describe("Record Controller", () => {
  describe("POST /record", () => {
    it("Should create a new record", async () => {
      const recordData = {
        name: "someone",
        email: "example@gmail.com",
        number: "1234567890",
      };
      const res = await chai
        .request(app)
        .post("/api/v1/record")
        .send(recordData);

      expect(res).to.have.status(201);
      expect(res.body).to.have.property("status").to.equal(true);
      expect(res.body).to.have.property("record");
      expect(res.body.record)
        .to.have.property("email")
        .to.equal(recordData.email);
      expect(res.body.record)
        .to.have.property("number")
        .to.equal(recordData.number);
    });
    it("Should return a 400 error if name,email or number is not provided", async () => {
      const recordData = {
        email: "example@gmail.com",
      };
      const res = await chai
        .request(app)
        .post("/api/v1/record")
        .send(recordData);

      expect(res).to.have.status(400);
    });
  });
});
