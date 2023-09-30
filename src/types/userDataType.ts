type UserDataType = {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  notes: [];
  forgotPasswordToken: string;
  forgotPasswordTokenExpiration: Date | null;
  verifyToken: string;
  verifyTokenExpiration: Date | null;
};

export default UserDataType;
