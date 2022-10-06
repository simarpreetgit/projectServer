const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      require:true  
      // unique: true -> Ideally, should be unique, but its up to you
    },
    password:{type:String,require:true},
    email :{ type : String,unique : true, require:true }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
