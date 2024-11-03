const validateBrojSJ = (req, res, next) => {
  const { broj, vrsta_sj_id } = req.body;
  const errors = [];

  if (!broj) errors.push("Broj je obavezan");
  if (!vrsta_sj_id) errors.push("Vrsta SJ je obavezna");

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

const validateVrstaSJ = (req, res, next) => {
  const { naziv } = req.body;
  const errors = [];

  if (!naziv) errors.push("Naziv je obavezan");

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

module.exports = {
  validateBrojSJ,
  validateVrstaSJ,
};
