const dummyData = {
  username: "user123",
  password: "password123",
};

function checkCredentials(username, password) {
  return new Promise((resolve, reject) => {
    if (username === dummyData.username && password === dummyData.password) {
      resolve("Credentials are valid");
    } else {
      reject(new Error("Invalid username or password"));
    }
  });
}

function checkBalance(balance, requiredAmount) {
  return new Promise((resolve, reject) => {
    if (balance >= requiredAmount) {
      resolve("Sufficient balance");
    } else {
      reject(new Error("Insufficient balance"));
    }
  });
}

const userBalance = 1000;
const requiredAmount = 500;

checkCredentials("user123", "password123")
  .then((message) => {
    console.log(message);
    return checkBalance(userBalance, requiredAmount);
  })
  .then((balanceMessage) => {
    console.log(balanceMessage);
    console.log("Selamat Anda berhasil");
  })
  .catch((error) => {
    console.log(error.message);
  });

checkCredentials("user123", "wrongpassword")
  .then((message) => {
    console.log(message);
    return checkBalance(userBalance, requiredAmount);
  })
  .then((balanceMessage) => {
    console.log(balanceMessage);
    console.log("Selamat Anda berhasil");
  })
  .catch((error) => {
    console.log(error.message);
  });

checkCredentials("user123", "password123")
  .then((message) => {
    console.log(message);
    return checkBalance(userBalance, 1500);
  })
  .then((balanceMessage) => {
    console.log(balanceMessage);
    console.log("Selamat Anda berhasil");
  })
  .catch((error) => {
    console.log(error.message);
  });
