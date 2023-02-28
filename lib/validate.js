export default function login_validate(values) {
  const errors = {};

  // validate email
  if (!values.email) {
    errors.email = "Required email address";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validate password
  if (!values.password) {
    errors.password = "Required password";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "Must be at least 8 characters and less than 20 characters";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid password";
  }

  return errors;
}

export function registerValidate(values) {
  const errors = {};

  //validate username
  if (!values.username) {
    errors.username = "Required username";
  }

  // validate NIK
  // if (!values.num) {
  //   errors.num = "Required NIK/NIP";
  // } else if (values.num.includes(" ")) {
  //   errors.num = "Invalid username";
  // } else if (!/^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/.test(values.num)) {
  //   // there is error, how to handle there are no start with 0 and can be 0 after first
  //   errors.num = "Input Valid NIK!";
  // }

  // validate telephone number
  if (!values.tel) {
    errors.tel = "Required Number Phone";
  } else if (values.tel.includes(" ")) {
    errors.tel = "Invalid Number Phone";
  } else if (!/^[0a-zA-Z][0-9].{10}$/.test(values.tel)) {
    // there is error, how to handle number between 10 - 13
    errors.tel = "Invalid Number Phone";
  }
  //   } else if (!/^(([0]*)|(([0-9]*)\.([0-9]*)))$/.test(values.tel)) {
  //     errors.tel = "Input Valid Number Phone!";
  //   }

  // validate email address
  if (!values.email) {
    errors.email = "Required email address";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validate password
  if (!values.password) {
    errors.password = "Required password";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "Must be at least 8 characters and less than 20 characters";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid password";
  }

  // validate confirm password
  if (!values.cpassword) {
    errors.cpassword = "Required";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Password not match";
  }

  return errors;
}
