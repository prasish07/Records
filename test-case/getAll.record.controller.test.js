const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const app = require("../app");

chai.use(chaiHttp);

describe("Record Controller", () => {
  describe("Get /record", () => {
    it("Should get all the record of database", async () => {
      const res = await chai.request(app).get("/api/v1/record");

      expect(res).to.have.status(200);
      expect(res.body).to.have.property("status").to.equal(true);
      expect(res.body).to.have.property("records");
      expect(res.body.records).to.be.an.instanceof(Array);
    });
  });
});
