import jwt from "jsonwebtoken";

export const generateToken = (
  data,
  tokenExpiration,
  refhreshTokenExpiration
) => {
  const token = jwt.sign({ ...data }, process.env.JWT_SECRET, {
    expiresIn: tokenExpiration,
  });
  const refreshToken = jwt.sign({ ...data }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: refhreshTokenExpiration,
  });
  return {
    token,
    refreshToken,
  };
};
