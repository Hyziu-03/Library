// Run tests with node --experimental-vm-modules node_modules/jest/bin/jest.js --verbose

// Date and time maniplation:

export const getTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (minutes < 10) minutes = "0" + minutes;
  if (hours < 10) hours = "0" + hours;

  const time = hours + " : " + minutes;
  return time;
}

// A11y enhancements:

export const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Common programming utilities:

export const generateRandomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");

export const shuffleArray = (array) => array.sort(function () {
  return Math.random() - 0.5
});

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const validateName = (firstName, lastName) => {
  const rule = /[a-zA-Z]/g;
  if (rule.test(firstName) === false || rule.test(lastName) === false) return false;
  else return !!firstName && !!lastName;
};

export const generateRandomNumberInRange = (minimum, maximum) => {
  const randomNumberInRange = Math.floor(Math.random() * (maximum - minimum) + 1) + minimum;
  return randomNumberInRange;
}

export const reverseString = (string) => {
  return string.split("").reverse().join("");
}

export const getRandomElement = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Firebase shortcuts:

export const handleStorageErrors = (code) => {
  switch (code) {
    case "storage/canceled":
      console.error("The operation has been cancelled. If it was not your intention contact developers");
      break;

    case "storage/object-not-found":
      console.error("The file you are looking for does not exist");
      break;

    case "storage/unauthenticated":
      console.error("You are not authenticated or you do not have the permission to access this data");
      break;

    case "storage/unauthorized":
      console.error("You are not authenticated or you do not have the permission to access this data");
      break;

    case "storage/server-file-wrong-size":
      console.error("An unexpected error occured. Try again");
      break;

    case "storage/retry-limit-exceeded":
      console.error("An unexpected error occured. Try again");
      break;

    case "storage/invalid-checksum":
      console.error("An unexpected error occured. Try again");
      break;

    case "storage/cannot-slice-blob":
      console.error("An unexpected error occured. Try again");
      break;

    case "storage/bucket-not-found":
      console.error("An unexpected error occured. Contact developers for more information");
      break;

    case "storage/no-default-bucket":
      console.error("An unexpected error occured. Contact developers for more information");
      break;

    case "storage/project-not-found":
      console.error("An unexpected error occured. Contact developers for more information");
      break;

    case "storage/quota-exceeded":
      console.error("An unexpected error occured. Contact developers for more information");
      break;

    case "storage/invalid-event-name":
      console.error("An unexpected error occured. Contact developers for more information");
      break;

    case "storage/invalid-url":
      console.error("An unexpected error occured. Contact developers for more information");
      break;

    case "storage/invalid-argument":
      console.error("An unexpected error occured. Contact developers for more information");
      break;

    case "storage/unknown":
      console.error("An unknown error occured");
      break;

    default:
      console.error("An unknown error occured");
      break;
  }
}

export const isLoggedIn = () => !getAuth().currentUser ? console.warn("The user is not logged in") : console.log();

export const googleLogin = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .catch((error) => console.error(error.message));
}

export const facebookLogin = () => {
  const auth = getAuth();
  const provider = new FacebookAuthProvider();

  signInWithPopup(auth, provider)
    .catch((error) => console.error(error));
}

// Password validation:

// Remember to have password-validator installed 

// const schema = new passwordValidator(); schema.is().min(9).has().letters().has().uppercase().has().lowercase().has().digits().has().symbols().has().not().spaces(); export const validatePassword = (password) => schema.validate(password);
