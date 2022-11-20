/*
 * Перебор через for...in і Object.keys|values|entries
 */

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
  };
  
  // Number Array Boolean Object

  const keys = Object.keys(feedback);
  // console.log(keys);

  // let totalFeedback = 0;

  // for (const key of keys) {
  //   // console.log(feedback[key]);

  //   totalFeedback += feedback[key]
  // }

  // console.log('totalFeedback: ', totalFeedback);

// const values = Object.values(feedback);
//  console.log(values);

//  let totalFeedback = 0;

//   for (const value of values) {
//     console.log(value);

//     totalFeedback +=  value
//    }
//    console.log('totalFeedback: ', totalFeedback);

  //  const arr = Object.entries(feedback);

  //  console.log(arr);