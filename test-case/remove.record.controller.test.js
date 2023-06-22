const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const app = require("../app");

chai.use(chaiHttp);

describe("Record Controller", () => {
  describe("DELETE /record/:id", () => {
    it("Should remove the exising record", async () => {
      const id = 33;
      const res = await chai.request(app).delete(`/api/v1/record/${id}`);

      expect(res).to.have.status(200);
      expect(res.body).to.have.property("status").to.equal(true);
      expect(res.body)
        .to.have.property("msg")
        .to.equal("Record deleted successfully");
    });
    it("Should throw 'Record not found' error for non-existent ID in delete api", async () => {
      const recordId = 1;
      const res = await chai.request(app).delete(`/api/v1/record/${recordId}`);

      expect(res).to.have.status(404);
      expect(res.body).to.have.property("msg").to.equal("Record not found");
    });
  });
});
