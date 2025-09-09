import connection from "../config/db.config.js";

const register = async (user) => {
  const INSERT = "INSERT INTO users (nom, prenom, email, password, role) VALUES (?, ?, ?, ?, ?)"
  try {
    const resultat = await connection.query(INSERT, [
      user.nom,
      user.prenom,
      user.email,
      user.password,
      user.role
    ]);
    user.id = resultat[0].insertId;
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default { register };
