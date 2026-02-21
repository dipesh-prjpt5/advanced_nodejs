exports.create = async (Model, req, res) => {
  try {
    // Creating a new document in the collection
    const result = await new Model(req.body).save();
    console.log(result);
    // Returning successfull response
    return res.status(200).json({
      success: true,
      result,
      message: "Successfully Created the document in Model ",
    });
  } catch (err) {
    // If err is thrown by Mongoose due to required validations
    if (err.name == "ValidationError") {
      return res.status(400).json({
        success: false,
        result: null,
        message: "Required fields are not supplied",
      });
    }
  }
};
