// import { FeatureToggle } from "./types";

const request = require("supertest");
const baseURL = "http://localhost:3008";

describe("Feature toggle endpoints", () => {
  describe("POST /toggles", () => {
    const newToggle = {
      value: "created_by_test",
      description: "Description here",
      is_on: false,
    };

    it("returns the id of inserted toggle", async () => {
      const response = await request(baseURL)
        .post("/toggles")
        .set("Content-type", "application/json")
        .send(newToggle);

      expect(response.body[0].hasOwnProperty("id")).toBe(true);
    });
  });

  describe("GET /toggles", () => {
    it("returns 200", async () => {
      const response = await request(baseURL).get("/toggles");
      expect(response.statusCode).toBe(200);
    });

    it("returns toggles", async () => {
      const response = await request(baseURL).get("/toggles");
      expect(response.body.length > 0).toBe(true);
    });

    it("returns toggle by id", async () => {
      const { body } = await request(baseURL).get("/toggles");
      const response = await request(baseURL).get(`/toggles/${body[0].id}`);
      expect(response.body.length == 1).toBe(true);
    });
  });

  describe("PATCH /toggles", () => {
    it("modifies existing toggle", async () => {
      const { body } = await request(baseURL).get("/toggles");

      const toggle = { id: body[0].id, is_on: true };

      const response = await request(baseURL)
        .patch("/toggles")
        .set("Content-type", "application/json")
        .send(toggle);

      expect(response.statusCode).toBe(200);
    });
  });

  describe("DELETE /toggles", () => {
    it("deletes toggle by id", async () => {
      const { body } = await request(baseURL).get("/toggles");
      const response = await request(baseURL).delete(
        `/toggles/${body[0].id}`
      );
      expect(response.statusCode).toBe(200);
    });
  });
});
