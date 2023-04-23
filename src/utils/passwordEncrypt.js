import bcrypt from "bcrypt";

const saltRounds = 15;
export const encryptPassowrd = async (orginalpassword) => {
  return await bcrypt.hash(orginalpassword, saltRounds);
};

export const decrytpPassword = (plainPassword, encryptedPassword) => {
  bcrypt.compareSync(plainPassword, encryptedPassword);
};
