const validateName = name => {
  if (!name.length) {
    return { valid: false, error: "This field is required" };
  }
  if (name.match(/^\s*$/)) {
    return { valid: false, error: "Please, no blanks!" };
  }

  return { valid: true, error: null };
};

const validateEmail = email => {
  if (!email.length) {
    return { valid: false, error: "This field is required" };
  }
  if (!email.match(/^\S+@\S+\.\S+$/)) {
    return { valid: false, error: "Please, enter a valid email." };
  }
  return { valid: true, error: null };
};

const validateMsg = msg => {
  
  if (!msg.length) {
    return { valid: false, error: "This field is required" };
  }
  if (msg.match(/^\s*$/)) {
    return { valid: false, error: "Please, no blanks!" };
  }
  return { valid: true, error: null };
};

  export {validateName};
  export {validateEmail};
  export {validateMsg};