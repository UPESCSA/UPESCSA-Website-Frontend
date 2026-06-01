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

// CSA Member IDs from the 2025-26 sheet
const validCSAIds = [
  "CSA25-034",
  "CSA25-035",
  "CSA25-036",
  "CSA25-037",
  "CSA25-038",
  "CSA25-039",
  "CSA25-040",
  "CSA25-041",
  "CSA25-042",
  "CSA25-043",
  "CSA25-044",
  "CSA25-045",
  "CSA25-046",
  "CSA25-047",
  "CSA25-048",
  "CSA25-049",
  "CSA25-050",
  "CSA25-051",
  "CSA25-052",
  "CSA25-053",
  "CSA25-054",
  "CSA25-055",
  "CSA25-056",
  "CSA25-057",
  "CSA25-058",
  "CSA25-059",
  "CSA25-060",
  "CSA25-061",
  "CSA25-062",
  "CSA25-063",
  "CSA25-064",
  "CSA25-065",
  "CSA25-066",
  "CSA25-067",
  "CSA25-068",
  "CSA25-069",
  "CSA25-070",
  "CSA25-071",
  "CSA25-072",
  "CSA25-073",
  "CSA25-074",
  "CSA25-075",
  "CSA25-076",
  "CSA25-077",
  "CSA25-078",
  "CSA25-079",
  "CSA25-080",
  "CSA25-081",
  "CSA25-082",
  "CSA25-083",
  "CSA25-084",
  "CSA25-085",
  "CSA25-086",
  "CSA25-087",
  "CSA25-088",
  "CSA25-089",
  "CSA25-090",
  "CSA25-091",
  "CSA25-092",
  "CSA25-093",
  "CSA25-094",
  "CSA25-095",
  "CSA25-096",
  "CSA25-097",
  "CSA25-098",
  "CSA25-099",
  "CSA25-100",
  "CSA25-101",
  "CSA25-102",
  "CSA25-103",
  "CSA25-104",
  "CSA25-105",
  "CSA25-106",
  "CSA25-107",
  "CSA25-108",
  "CSA25-109",
  "CSA25-110",
  "CSA25-111",
  "CSA25-112",
  "CSA25-113",
  "CSA25-114",
  "CSA25-115",
  "CSA25-116",
  "CSA25-117",
  "CSA25-118",
  "CSA25-119",
  "CSA25-120",
  "CSA25-121",
  "CSA25-122",
  "CSA25-123",
  "CSA25-124",
  "CSA25-125",
  "CSA25-126",
  "CSA25-127",
  "CSA25-128",
  "CSA25-129",
  "CSA25-130",
  "CSA25-131",
  "CSA25-132",
  "CSA25-133",
  "CSA25-134",
  "CSA25-135",
  "CSA25-136",
  "CSA25-137",
  "CSA25-138",
  "CSA25-139",
  "CSA25-140",
  "CSA25-141",
  "CSA25-142",
  "CSA25-143",
  "CSA25-144",
  "CSA25-145",
  "CSA25-146",
  "CSA25-147",
  "CSA25-148",
  "CSA25-149",
  "CSA25-150",
  "CSA25-151",
  "CSA25-152",
  "CSA25-153",
  "CSA25-154",
  "CSA25-155",
  "CSA25-156",
  "CSA25-157",
  "CSA25-158",
  "CSA25-159",
  "CSA25-160",
];

const validateCSAMember = (
  value,
  validatorFunction,
  upesStudent,
  csaId = "",
) => {
  if (upesStudent === "no") {
    validatorFunction(true);
    return true;
  }

  if (value === "yes") {
    // If claiming to be a CSA member, validate the CSA ID
    if (csaId && validCSAIds.includes(csaId.toUpperCase())) {
      validatorFunction(true);
      return true;
    } else {
      validatorFunction(false);
      return false;
    }
  } else if (value === "no") {
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
    validCSAIds.includes(value.toUpperCase())
  ) {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateYearOfStudy = (value, validatorFunction) => {
  const validYears = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "1",
    "2",
    "3",
    "4",
    "5",
  ];
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
    "registrations",
  ];

  const isvalid = committees.includes(value);
  validatorFunction(isvalid);
  return isvalid;
};

const validatepaymentmode = (value, validatorFunction) => {
  const PaymentModes = ["cash", "upi"];

  const isvalid = PaymentModes.includes(value);
  validatorFunction(isvalid);
  return isvalid;
};

const validategender = (value, validatorFunction) => {
  const Genders = ["male", "female", "others"];

  const isvalid = Genders.includes(value);
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
  validCSAIds,
};
