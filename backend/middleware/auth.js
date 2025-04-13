
const requireAdmin = (req, res, next) => {
    const userRole = req.headers['role']; // Pretend we're getting the role from the headers
  
    if (userRole === 'admin') {
      next(); // Authorized
    } else {
      res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  };
  
  module.exports = { requireAdmin };
  