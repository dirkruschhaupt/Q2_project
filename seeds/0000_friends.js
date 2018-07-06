exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {name: 'Brent Parks', address: '', phone: 5125551234, email: 'brent@gmail.com', birthday: '', sex: 'male', rank: 10, relation: '', date: , place: 'Restuarant', note: '', photo: ''},
        {name: 'Chris Jones', address: '', phone: 5125551234, email: 'chris@gmail.com', birthday: '', sex: 'male', rank: , relation: '', date: , place: 'Restuarant', note: '', photo: ''},
        {name: 'Krista Smith', address: '801 Bluebonnet Edna, TX', phone: 5125551234, email: 'krista@gmail.com', birthday: '', sex: 'female', rank: , relation: '', date: , place: 'College', note: '', photo: ''},
        {name: 'Landon Smith', address: '801 Bluebonnet Edna, TX', phone: 5125551234, email: 'landon@gmail.com', birthday: '', sex: 'male', rank: , relation: '', date: , place: 'Hospital', note: '', photo: ''},
        {name: 'Ouida Orsak', address: '801 Bluebonnet Edna, TX', phone: 5125551234, email: 'ouida@gmail.com', birthday: '', sex: 'female', rank: , relation: '', date: , place: 'Her kitchen', note: '', photo: ''},
        {name: 'Mike Yager', address: '', phone: 5125551234, email: 'mike@gmail.com', birthday: '', sex: 'other', rank: , relation: '', date: , place: 'Crack den', note: '', photo: ''},
        {name: 'Jay Dempsey', address: '', phone: 5125551234, email: 'jay@gmail.com', birthday: '', sex: 'male', rank: , relation: '', date: , place: 'My house', note: '', photo: ''},
        {name: 'Grant Beitinger', address: '', phone: 5125551234, email: 'grant@gmail.com', birthday: '', sex: 'male', rank: , relation: '', date: , place: 'Grindr', note: '', photo: ''},
        {name: 'Amy Nickum', address: '', phone: 5125551234, email: 'amy@gmail.com', birthday: '', sex: 'female', rank: , relation: '', date: , place: 'G.L.A.M. function', note: '', photo: ''},
        {name: 'Andy Baandi', address: '', phone: 5125551234, email: 'andy@gmail.com', birthday: '', sex: 'male', rank: , relation: '', date: , place: 'G.L.A.M. function', note: '', photo: ''},
        {name: 'Blake Luther', address: '', phone: 5125551234, email: 'blake@gmail.com', birthday: '', sex: 'female', rank: , relation: '', date: , place: 'G.L.A.M. function', note: '', photo: ''},
        {name: 'Ben Zweig', address: '', phone: 5125551234, email: 'ben@gmail.com', birthday: '', sex: 'male', rank: , relation: '', date: , place: 'G.L.A.M. function', note: '', photo: ''},
        {name: 'Daniele Durham', address: '', phone: 5125551234, email: 'daniele@gmail.com', birthday: '', sex: 'female', rank: , relation: '', date: , place: 'G.L.A.M. function', note: '', photo: ''},
        {name: 'Charles Parks', address: '', phone: 5125551234, email: 'charles@gmail.com', birthday: '', sex: 'male', rank: , relation: '', date: , place: 'His house', note: '', photo: ''},
        {name: 'Collin Findlay', address: '', phone: 5125551234, email: 'collin@gmail.com', birthday: '', sex: 'male', rank: , relation: '', date: , place: 'Grindr', note: '', photo: ''},
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
          {id: 1, relation: ''},
          {id: 1, relation: ''},
          {id: 1, relation: ''},
          {id: 1, relation: ''},
          {id: 1, relation: ''},
          {id: 1, relation: ''},
          {id: 1, relation: ''},
          {id: 1, relation: ''},
          {id: 1, relation: ''},
        ]);
    })
};
