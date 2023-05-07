import { AuthData } from "../contexts/Auth";

function signIn(email: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "12345") {
        resolve({
          token: "fake-token",
          email: email,
          name: "Rodrigo Santana",
        });
      } else {
        reject(new Error());
      }
    }, 500);
  });
}

export const authService = { signIn };
