import connection from "../config/db.config.js";

const register = async (user) => {
  const INSERT = "INSERT INTO users values (null, ?, ?, ?)";
  try {
    const resultat = await connection.query(INSERT, [
      user.nom,
      user.prenom,
      user.age,
    ]);
    user.id = resultat[0].insertId;
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default { register };
