const mongoose = require("mongoose");

const approveTreesSchema = new mongoose.Schema({ 
    radius: {
      type: String,
      required: [true, "radius is required"],
    },
    age: {
      type: String,
      required: [true, "age is required"],
    },
    kindOfTree: {
      type: String,
      required: [true, "kindOfTree is required"],
    },
    condition: {
      type: String,
      required: [true, "condition is required"],
    },
    registrationNumber: {
      type: String,
      required: [true, "registrationNumber is required"],
    },
    necessaryWorks: {
      type: Object,
      default: [],
    },
    location: {
      type: Object,
      default: {
        lat: {
          type: String,
          required: [true, "lat is required"],
        },
        lng: {
          type: String,
          required: [true, "lng is required"],
        },
      },
      required: [true, "location is required"],
    },
    image:{
      type:String,
      required: [true, "image is required"],
    }
 
});

const Trees = mongoose.model("trees", approveTreesSchema);

module.exports = {
  Trees,
};
