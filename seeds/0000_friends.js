exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {name: 'Brent Parks', address: '5400 Mount Bonnell Rd', city: 'Austin', state: 'TX', phone: 5125551234, email: 'brent@gmail.com', birthday: 'November 30, 1982', sex: 'male', rank: 10, date: 'April 5, 2015', place: 'Restuarant', note: 'I was a grooms man at his wedding', photo: 'https://goo.gl/images/z4K5Sm'},
        {name: 'Chris Jones', address: '5400 Mount Bonnell Rd', city: 'Austin', state: 'TX', phone: 5125551234, email: 'chris@gmail.com', birthday: 'June 6, 1990', sex: 'male', rank: 9, date: 'April 5, 2015', place: 'Restuarant', note: 'fond of him', photo: 'https://goo.gl/images/aBgFBA'},
        {name: 'Krista Smith', address: '811 Bluebonnet' city: 'Edna', state: 'TX', phone: 5125551234, email: 'krista@gmail.com', birthday: 'November 4, 1980', sex: 'female', rank: 10, date: 'Feb 10, 2001', place: 'College', note: 'Bad ass person', photo: '../images/nophoto.png'},
        {name: 'Landon Smith', address: '811 Bluebonnet' city: 'Edna', state: 'TX', phone: 5125551234, email: 'landon@gmail.com', birthday: 'September 4, 2009', sex: 'male', rank: 8, date: 'September 5, 2009', place: 'Hospital', note: 'Cool kid', photo: '../images/landon.JPG'},
        {name: 'Ouida Orsak', address: '811 Bluebonnet' city: 'Edna', state: 'TX', phone: 5125551234, email: 'ouida@gmail.com', birthday: 'October 20', sex: 'female', rank: 7, date: 'September 20, 2001', place: 'Her kitchen', note: 'Makes Cookies', photo: '../images/nophoto.png'},
        {name: 'Mike Yager', address: 'Back alley', city: 'Austin', state: 'TX', phone: 5125551234, email: 'mike@gmail.com', birthday: 'December 6, 1897', sex: 'other', rank: 1, date: 'January 6, 2017', place: 'Crack den', note: 'Whore', photo: 'https://goo.gl/images/PZd7vT'},
        {name: 'Jay Dempsey', address: '1900 Little Elm Trl', city: 'Cedar Park', state: 'TX', phone: 5125551234, email: 'jay@gmail.com', birthday: 'April 3, 1990', sex: 'male', rank: 7, date: 'March 2, 2017', place: 'My house', note: 'Nice guy', photo: 'https://goo.gl/images/BxHJVP'},
        {name: 'Grant Beitinger', address: '1007 South First St', city: 'Austin', state: 'TX', phone: 5125551234, email: 'grant@gmail.com', birthday: 'April 8, 1981', sex: 'male', rank: 6, date: 'October 12, 2011', place: 'Grindr', note: 'cool guy', photo: 'https://goo.gl/images/hMazG3'},
        {name: 'Amy Nickum', address: '101 Main St', city: 'Seattle', state:  'WA', phone: 5125551234, email: 'amy@gmail.com', birthday: 'May 6', sex: 'female', rank: 8, date: 'August 8, 2016', place: 'G.L.A.M. function', note: 'Your wife', photo: 'https://goo.gl/images/hio3rB'},
        {name: 'Andy Baandi', address: '601 Third St', city: 'Austin', state: 'TX', phone: 5125551234, email: 'andy@gmail.com', birthday: 'November 17', sex: 'male', rank: 6, date: 'December 4, 2016', place: 'G.L.A.M. function', note: 'Austrian', photo: 'https://goo.gl/images/txD6rT'},
        {name: 'Blake Luther', address: '123 Fake St', city: 'Austin', state: 'TX', phone: 5125551234, email: 'blake@gmail.com', birthday: 'March 22, 1993', sex: 'male', rank: 4, date: 'April 18, 2016', place: 'G.L.A.M. function', note: 'Built like a brick house', photo: 'https://goo.gl/images/Z5zq7U'},
        {name: 'Ben Zweig', address: '230 Riverside Dr', city: 'Austin', state: 'TX', phone: 5125551234, email: 'ben@gmail.com', birthday: 'April 3, 1990', sex: 'male', rank: 4, date: 'April 18, 2016', place: 'G.L.A.M. function', note: 'Jewish', photo: 'https://goo.gl/images/fqsNfg'},
        {name: 'Daniele Durham', address: '3400 South Congress', city: 'Austin', state: 'TX', phone: 5125551234, email: 'daniele@gmail.com', birthday: 'April 3, 1990', sex: 'female', rank: 5, date: 'April 18, 2016', place: 'G.L.A.M. function', note: 'Sweet person', photo: '../images/nophoto.png'},
        {name: 'Charles Parks', address: '505 Jasper', city: 'Austin', state: 'TX', phone: 5125551234, email: 'charles@gmail.com', birthday: 'November 16', sex: 'male', rank: 5, date: 'April 10, 2016', place: 'His house', note: 'Talks like a loonies toon charachter', photo: 'https://goo.gl/images/oRopFm'}
      ])
    })
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
          {friends_id: 1, groups_name: 'G.L.A.M. Rock Climbing of Texas'},
          {friends_id: 1, groups_name: 'AA'},
          {friends_id: 1, groups_name: 'Austin Front Runners'},
          {friends_id: 2, groups_name: 'G.L.A.M. Rock Climbing of Texas'},
          {friends_id: 6, groups_name: 'G.L.A.M. Rock Climbing of Texas'},
          {friends_id: 6, groups_name: 'AA'},
          {friends_id: 7, groups_name: 'G.L.A.M. Rock Climbing of Texas'},
          {friends_id: 8, groups_name: 'Austin Front Runners'},
          {friends_id: 9, groups_name: 'G.L.A.M. Rock Climbing of Texas'},
          {friends_id: 10, groups_name: 'G.L.A.M. Rock Climbing of Texas'},
          {friends_id: 11, groups_name: 'G.L.A.M. Rock Climbing of Texas'},
          {friends_id: 12, groups_name: 'G.L.A.M. Rock Climbing of Texas'},
          {friends_id: 13, groups_name: 'G.L.A.M. Rock Climbing of Texas'}
        ]);
    })
};
