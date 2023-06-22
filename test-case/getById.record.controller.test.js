const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const sinon = require("sinon");
const app = require("../app");
const Record = require("../models/record.model");

chai.use(chaiHttp);

describe("Record Controller", () => {
  describe("GET /record/:id", () => {
    it("Should get a record by ID", async () => {
      const recordId = 22;
      const res = await chai.request(app).get(`/api/v1/record/${recordId}`);

      expect(res).to.have.status(200);
      expect(res.body).to.have.property("status").to.equal(true);
      expect(res.body).to.have.property("record");
      expect(res.body.record).to.be.an.instanceof(Object);
    });

    it("Should throw 'Record not found' error for non-existent ID", async () => {
      const recordId = 1;
      const res = await chai.request(app).get(`/api/v1/record/${recordId}`);

      expect(res).to.have.status(404);
      expect(res.body).to.have.property("msg").to.equal("Record not found");
    });

    it("Should handle internal server errors", async () => {
      const recordId = 22;
      sinon.stub(Record, "findByPk").throws(new Error("Database error"));

      const res = await chai.request(app).get(`/api/v1/record/${recordId}`);

      expect(res).to.have.status(500);
      expect(res.body).to.have.property("msg").to.equal("Record fetch failed");

      Record.findByPk.restore();
    });
  });
});
