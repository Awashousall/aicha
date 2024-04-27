module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id: Number,
      title: String,
      release: String,
      genre: String,
      synopsis: String,
      director: String,
      actors: [String]
    },
    { timestamps: true, collection: 'movies0' } // Spécifiez le nom de la collection ici
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const movies = mongoose.model("movies0", schema); // Utilisez le même nom de collection ici
  return movies;
};
