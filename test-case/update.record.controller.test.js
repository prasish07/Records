const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const app = require("../app");
const chaiShallowDeepEqual = require("chai-shallow-deep-equal");
const sinon = require("sinon");
const Record = require("../models/record.model");

chai.use(chaiHttp);
chai.use(chaiShallowDeepEqual);

describe("Record Controller", () => {
  describe("PATCH /record/:id", () => {
    it("Should update the exising record", async () => {
      const recordData = {
        name: "modified",
        email: "examplemodified@gmail.com",
        number: "0000000000",
      };
      const id = 22;
      const res = await chai
        .request(app)
        .patch(`/api/v1/record/${id}`)
        .send(recordData);

      expect(res).to.have.status(200);
      expect(res.body).to.have.property("status").to.equal(true);
      expect(res.body)
        .to.have.property("updatedRecord")
        .to.have.all.keys(
          "id",
          "name",
          "email",
          "number",
          "createdAt",
          "updatedAt"
        );
      expect(res.body.updatedRecord).to.shallowDeepEqual(recordData);
    });
    it("Should throw 'Record not found' error for non-existent ID in update api", async () => {
      const recordId = 1;
      const res = await chai.request(app).patch(`/api/v1/record/${recordId}`);

      expect(res).to.have.status(404);
      expect(res.body).to.have.property("msg").to.equal("Record not found");
    });
    it("Should throw 'Record update failed' error when database update fails", async () => {
      // Simulate a scenario where database update fails
      sinon.stub(Record, "findByPk").resolves({ id: 22 });
      sinon
        .stub(Record.prototype, "update")
        .throws(new Error("Database error"));

      const recordId = 22;
      const recordData = {
        email: "examplemodified@gmail.com",
        number: "0000000000",
      };
      const res = await chai
        .request(app)
        .patch(`/api/v1/record/${recordId}`)
        .send(recordData);

      expect(res).to.have.status(500);
      expect(res.body).to.have.property("msg").to.equal("Record update failed");

      // Restore the stubbed methods
      sinon.restore();
    });
  });
});
