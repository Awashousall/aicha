// models/publis.model.js

module.exports = mongoose => {
  const Publi = mongoose.model(
    "Publi", 
    mongoose.Schema(
      {
        type: String,
        title: String,
        pages: {
          start: Number,
          end: Number
        },
        year: Number,
        booktitle: String,
        url: String,
        authors: [String]
        
      },
      { timestamps: true }
    ),
    "publis" 
  );

  return Publi;
};
