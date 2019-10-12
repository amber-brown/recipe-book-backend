const mongoose = require("mongoose");
const request = require("supertest");
const app = require("./app");
const Recipe = require("./models/recipe");

describe("test", () => {
  const recipe = new Recipe({
    title: "test title",
    ingredients: [{ foo: "bar" }],
    method: ["1", "2", "3"],
    time: { baz: 3 },
    serves: 10,
    self_url: "https://localhost/test",
    image: "/image.jpg"
  });

  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await recipe.save();
  });

  afterAll(async () => {
    await Recipe.drop();
    await mongoose.connection.close();
  });

  it("returns recipes from the database", async () => {
    const res = await request(app).get("/recipes");
    expect(res.status).toEqual(200);
    expect(res.text).toEqual(JSON.stringify([recipe]));
  });

  it("returns a single recipe from the database", async () => {
    const id = recipe._id;
    const res = await request(app).get("/recipes/" + id);
    expect(res.status).toEqual(200);
    expect(res.text).toEqual(JSON.stringify(recipe));
  });
});
