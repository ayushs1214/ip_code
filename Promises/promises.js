function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Example Data" };
      resolve(data); // Simulating a successful API request
    }, 2000);
  });
}

function processAndDisplayData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.name) {
        resolve(`Processed data: ${data.name}`);
      } else {
        reject("Data processing failed.");
      }
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log("Data received:", data);
    return processAndDisplayData(data);
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
