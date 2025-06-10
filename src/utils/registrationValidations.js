const validateTeam = (value, validatorFunction) => {
  if (value !== "choose") {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateName = (value, validatorFunction) => {
  if (value !== null && value !== "") {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateEmail = (value, validatorFunction) => {
  if (
    value !== null &&
    value !== "" &&
    value.includes("@") &&
    value.includes(".")
  ) {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validatePhone = (value, validatorFunction) => {
  if (value !== null && value !== "" && value.length === 10) {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateCourse = (value, validatorFunction) => {
  if (value !== null && value !== "") {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateUpesStudent = (value, validatorFunction) => {
  if (value === "yes" || value === "no") {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateCSAMember = (value, validatorFunction, upesStudent) => {
  if (upesStudent === "no") {
    validatorFunction(true);
    return true;
  }

  if (value === "yes" || value === "no") {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateSAPID = (value, validatorFunction, upesStudent) => {
  if (upesStudent === "no" || upesStudent === "select") {
    validatorFunction(true);
    return true;
  }
  if (
    value !== null &&
    value !== "" &&
    value.length === 9 &&
    value.startsWith("5")
  ) {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateCollegeName = (value, validatorFunction, upesStudent) => {
  if (upesStudent === "yes") {
    validatorFunction(true);
    return true;
  }
  if (value !== null && value !== "") {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateCSAID = (value, validatorFunction, csaMember, upesStudent) => {
  if (upesStudent === "no") {
    validatorFunction(true);
    return true;
  }

  if (csaMember === "no" || csaMember === "select") {
    validatorFunction(true);
    return true;
  }
  if (
    value !== null &&
    value !== "" &&
    value.length === 9 &&
    value.toLowerCase().startsWith("csa24")
  ) {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateYearOfStudy = (value, validatorFunction) => {
  const validYears = ["1st", "2nd", "3rd", "4th", "5th", '1', '2', '3', '4', '5'];
  const isValid = validYears.includes(value.trim().toLowerCase());

  validatorFunction(isValid);
  return isValid;
};

const validateCommittee = (value, validatorFunction) => {
  const committees = [
    "technical",
    "events",
    "public relations & sponsorship",
    "social media",
    "photography",
    "design and vfx",
    "logistics",
    "editorial",
    "registrations"
  ];

  const isvalid = committees.includes(value)
  validatorFunction(isvalid);
  return isvalid;
};

const validatepaymentmode = (value, validatorFunction) => {
  const PaymentModes = ["cash", "upi"];

  const isvalid = PaymentModes.includes(value)
  validatorFunction(isvalid);
  return isvalid;

};

const validategender = (value, validatorFunction) => {
  const Genders = ["male", "female", "others"];

  const isvalid = Genders.includes(value)
  validatorFunction(isvalid);
  return isvalid;
};


export {
  validateTeam as VALIDATETEAM,
  validateName as VALIDATENAME,
  validateEmail as VALIDATEEMAIL,
  validatePhone as VALIDATEPHONE,
  validateSAPID as VALIDATESAPID,
  validateCollegeName as VALIDATECOLLEGENAME,
  validateCourse as VALIDATECOURSE,
  validateCSAID as VALIDATECSAID,
  validateYearOfStudy as VALIDATEYEAROFSTUDY,
  validateUpesStudent as VALIDATEUPESSTUDENT,
  validateCSAMember as VALIDATECSAMEMBER,
  validateCommittee as VALIDATECOMMITTEE,
  validatepaymentmode as VALIDATEPAYMENTMODE,
  validategender as VALIDATEGENDER,
};
