exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {name: 'Brent Parks', address: '', phone: 5125551234, email: 'brent@gmail.com', birthday: 'November 30, 1982', sex: 'male', rank: 10, relation: '', date: , place: 'Restuarant', note: '', photo: 'https://goo.gl/images/z4K5Sm'},
        {name: 'Chris Jones', address: '', phone: 5125551234, email: 'chris@gmail.com', birthday: 'June 6, 1990', sex: 'male', rank: , relation: '', date: , place: 'Restuarant', note: '', photo: 'https://goo.gl/images/aBgFBA'},
        {name: 'Krista Smith', address: '801 Bluebonnet Edna, TX', phone: 5125551234, email: 'krista@gmail.com', birthday: 'November 4, 1980', sex: 'female', rank: , relation: '', date: , place: 'College', note: '', photo: ''},
        {name: 'Landon Smith', address: '801 Bluebonnet Edna, TX', phone: 5125551234, email: 'landon@gmail.com', birthday: 'September 4, 20', sex: 'male', rank: , relation: '', date: , place: 'Hospital', note: '', photo: ''},
        {name: 'Ouida Orsak', address: '801 Bluebonnet Edna, TX', phone: 5125551234, email: 'ouida@gmail.com', birthday: 'October 20', sex: 'female', rank: , relation: '', date: , place: 'Her kitchen', note: '', photo: ''},
        {name: 'Mike Yager', address: '', phone: 5125551234, email: 'mike@gmail.com', birthday: 'December 6, 1897', sex: 'other', rank: , relation: '', date: , place: 'Crack den', note: '', photo: 'https://goo.gl/images/PZd7vT'},
        {name: 'Jay Dempsey', address: '', phone: 5125551234, email: 'jay@gmail.com', birthday: '', sex: 'male', rank: , relation: '', date: , place: 'My house', note: '', photo: 'https://goo.gl/images/BxHJVP'},
        {name: 'Grant Beitinger', address: '', phone: 5125551234, email: 'grant@gmail.com', birthday: 'April 8, 1981', sex: 'male', rank: , relation: '', date: , place: 'Grindr', note: '', photo: 'https://goo.gl/images/hMazG3'},
        {name: 'Amy Nickum', address: '', phone: 5125551234, email: 'amy@gmail.com', birthday: 'May 6', sex: 'female', rank: , relation: '', date: , place: 'G.L.A.M. function', note: '', photo: 'https://goo.gl/images/hio3rB'},
        {name: 'Andy Baandi', address: '', phone: 5125551234, email: 'andy@gmail.com', birthday: 'November 17', sex: 'male', rank: , relation: '', date: , place: 'G.L.A.M. function', note: '', photo: 'https://goo.gl/images/txD6rT'},
        {name: 'Blake Luther', address: '', phone: 5125551234, email: 'blake@gmail.com', birthday: 'March 22, 1993', sex: 'female', rank: , relation: '', date: , place: 'G.L.A.M. function', note: '', photo: 'https://goo.gl/images/Z5zq7U'},
        {name: 'Ben Zweig', address: '', phone: 5125551234, email: 'ben@gmail.com', birthday: '', sex: 'male', rank: , relation: '', date: , place: 'G.L.A.M. function', note: '', photo: 'https://goo.gl/images/fqsNfg'},
        {name: 'Daniele Durham', address: '', phone: 5125551234, email: 'daniele@gmail.com', birthday: '', sex: 'female', rank: , relation: '', date: , place: 'G.L.A.M. function', note: '', photo: ''},
        {name: 'Charles Parks', address: '', phone: 5125551234, email: 'charles@gmail.com', birthday: 'November 16', sex: 'male', rank: , relation: '', date: , place: 'His house', note: '', photo: 'https://goo.gl/images/oRopFm'},
      ])
    })
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
          {id: 1, groups_name: 'G.L.A.M. Rock Climbing of Texas'},
          {id: 1, groups_name: 'AA'},
          {id: 1, groups_name: 'Austin Front Runners'},
          {id: 1, groups_name: ''},
          {id: 1, groups_name: ''},
          {id: 1, groups_name: ''},
          {id: 1, groups_name: ''},
          {id: 1, groups_name: ''},
          {id: 1, groups_name: ''},
          {id: 1, groups_name: ''},
        ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('relation').insert([
          {id: 1, relation: 'married'},
          {id: 1, relation: 'married'},
          {id: 1, relation: 'parent'},
          {id: 1, relation: 'child'},
          {id: 1, relation: 'parent'},
          {id: 1, relation: ''},
          {id: 1, relation: ''},
          {id: 1, relation: ''},
          {id: 1, relation: ''},
        ]);
    })
};
