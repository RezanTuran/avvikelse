import React from 'react';

// interface User {
//   city: string;
//   date: string;
//   driverNumber: number;
//   firstName: string;
//   id: number;
//   loadNumber: number;
//   mileage: number;
//   otherInfo: string;
//   phoneNumber: number;
//   quantity: string;
//   requireTime: number;
//   storeName: string;
//   sureName: string;
//   time: string;
//   waitTimeEmptyGoods: number;
//   waitTimeGuard: number;
//   waitTimePort: number;
//   waitTimeSearchGoods: number;
//   waitTimeUnloader: number;
// }

const makeRequest = (url: any, method: any, formdata: any, callback: any) => {
  fetch(url, {
    method: method,
    body: formdata,
  })
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
};

const getRepports = () => {
  makeRequest('http://localhost:80/get.php/', 'GET', null, (result: any) => {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
  });
};
getRepports();

const Rapports = () => {
  return <div></div>;
};

export default Rapports;
