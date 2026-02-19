const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
  settingCategory: {
    type: String,
    required: true,
  },
  settingKey: {
    type: String,
    required: true,
  },
  settingValue: {
    type: mongoose.Schema.Types.Mixed,
  },
  valueType: {
    type: String,
    default: "String",
  },
});

module.exports = mongoose.model("Settings", settingsSchema);
