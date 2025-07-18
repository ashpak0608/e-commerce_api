const validate = (schema) => (req, res, next) => {
  const validation = schema.safeParse(req.body);
  if (!validation.success) {
    const errors = validation.error.errors.map(e => e.message);
    return res.status(400).json({ success: false, errors });
  }
  req.body = validation.data; // sanitized data
  next();
};

module.exports = validate;
