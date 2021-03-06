import { UsernamePasswordInput } from "src/resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  const validEmail = RegExp(
    `/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@
    (([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/`
  );
  if (options.email.match(validEmail)) {
    //TODO add in some regex
    return [
      {
        field: "email",
        message: "Please enter a valid email.",
      },
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "invalid character @",
      },
    ];
  }

  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message:
          "Please enter a valid username. \n Length must be greater than 2.",
      },
    ];
  }

  if (options.password.length <= 6) {
    return [
      {
        field: "password",
        message: `Please enter a valid password.
               Length must be greater than 6.`,
      },
    ];
  }
  return null;
};
