//testing callbacks allows you to see if a value returns when the callback function activates.
//Jest tests complete when they reach the end of execution--this means that callbacks will fail unless
//you add done() after the expect or what have you for unit testing. 


// test('the data is peanut butter', done => {
//     function callback(data) {
//       expect(data).toBe('peanut butter');
//       done();
//     }
  
//     fetchData(callback);
//   });

// test('the data is peanut butter', () => {
//   expect.assertions(1);
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });

//expect.assertions(1)

// //test('the data is peanut butter', () => {
//   expect.assertions(1);
//   return expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return expect(fetchData()).rejects.toMatch('error');
// });