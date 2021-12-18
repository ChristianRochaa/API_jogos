


module.exports = {

  get : (req, res) => {

    res.status(200).send({
      "author" : "Christian Oliveira Rocha",
      "description" : "Api feita para um site de jogos"
    });
  }
}

