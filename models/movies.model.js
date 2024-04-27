module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
    id: Number,
    title: String,
    release :String,
    genre: String, 
    synopsis: String,
    director: String,
    actors: [String]
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const movies = mongoose.model("movies", schema);
  return movies;
};
