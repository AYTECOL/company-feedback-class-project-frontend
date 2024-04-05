import { Auth } from "aws-amplify";

//Iniciar sesión
export const loginSession = createAsyncThunk(
  "session/login",
  async ({ username, password }) => {
    try {
      const response = await Auth.signIn({
        username,
        password,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

//Registro
export const signUpAsync = createAsyncThunk(
  "session/register",
  async ({ username, password, email, phone_number }) => {
    try {
      const response = await Auth.signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
            phone_number,
          },
        },
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
