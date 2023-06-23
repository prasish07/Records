const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");
const app = require("../app");

chai.use(chaiHttp);

describe("Record Controller", () => {
  describe("GET /api/v1/record/search", () => {
    it("should retrieve records based on search criteria", async () => {
      // Define the search criteria
      const name = "john";

      // Send the request to the search endpoint with the query parameters
      const res = await chai
        .request(app)
        .get("/api/v1/record/search")
        .query({ name });

      // Assert the response
      expect(res).to.have.status(200);
      expect(res.body).to.have.property("status").to.equal(true);
      expect(res.body).to.have.property("records");
      expect(res.body.records).to.be.an.instanceof(Array);

      //check if the retrieved records match the search criteria
      for (const record of res.body.records) {
        expect(record.name).to.equal(name);
      }
    });
  });
});
