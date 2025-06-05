export default function handler(req, res) {
  const { texto } = req.query;
  const resultado = texto.toUpperCase();
  res.status(200).json({ resultado });
}
