exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {name: 'Brent Parks', address: '5400 Mount Bonnell Rd', city: 'Austin', state: 'TX', phone: '5125551234', email: 'brent@gmail.com', birthday: 'November 30, 1982', sex: 'male', rank: 10, date: 'April 5, 2015', place: 'Restuarant', note: 'I was a grooms man at his wedding', photo: 'https://uploads-ssl.webflow.com/59d448bc279f5e0001944944/59e6bcecf0bf1f0001c977e0_brent-2x.jpg'},
        {name: 'Chris Jones', address: '5400 Mount Bonnell Rd', city: 'Austin', state: 'TX', phone: '5125551234', email: 'chris@gmail.com', birthday: 'June 6, 1990', sex: 'male', rank: 9, date: 'April 5, 2015', place: 'Restuarant', note: 'fond of him', photo: 'https://miro.medium.com/fit/c/240/240/0*PoGR79baz58pzuch.'},
        {name: 'Krista Smith', address: '811 Bluebonnet', city: 'Edna', state: 'TX', phone: '5125551234', email: 'krista@gmail.com', birthday: 'November 4, 1980', sex: 'female', rank: 10, date: 'Feb 10, 2002', place: 'College', note: 'Bad ass person', photo: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t31.0-8/10269286_839245849422093_1633634296629853881_o.jpg?_nc_cat=0&oh=7f4809d471cf0cd74453b433e58beb4a&oe=5BD06E69'},
        {name: 'Landon Smith', address: '811 Bluebonnet', city: 'Edna', state: 'TX', phone: '5125551234', email: 'landon@gmail.com', birthday: 'September 4, 2009', sex: 'male', rank: 8, date: 'September 5, 2009', place: 'Hospital', note: 'Cool kid', photo: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/10541967_10152345734432916_1300555564255286989_n.jpg?_nc_cat=0&oh=988538a736853d0fcf62d4161b413e86&oe=5BD78552'},
        {name: 'Ouida Orsak', address: '811 Bluebonnet', city: 'Edna', state: 'TX', phone: '5125551234', email: 'ouida@gmail.com', birthday: 'October 20', sex: 'female', rank: 7, date: 'September 20, 2002', place: 'Her kitchen', note: 'Makes Cookies', photo: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/67186_542531312426883_1912138504_n.jpg?_nc_cat=0&oh=def975a0898ff1afa683c51f087137ad&oe=5BD01838'},
        {name: 'Mike Yager', address: 'Back alley', city: 'Austin', state: 'TX', phone: '5125551234', email: 'mike@gmail.com', birthday: 'December 6, 1897', sex: 'other', rank: 1, date: 'January 6, 2017', place: 'Crack den', note: 'Whore', photo: 'https://i.kym-cdn.com/entries/icons/original/000/021/521/DumpsterFire2.jpg'},
        {name: 'Jay Dempsey', address: '1900 Little Elm Trl', city: 'Cedar Park', state: 'TX', phone: '5125551234', email: 'jay@gmail.com', birthday: 'April 3, 1990', sex: 'male', rank: 7, date: 'March 2, 2017', place: 'My house', note: 'Nice guy', photo: 'https://homoclimbtastic.files.wordpress.com/2016/05/image1.jpg'},
        {name: 'Grant Beitinger', address: '1007 South First St', city: 'Austin', state: 'TX', phone: '5125551234', email: 'grant@gmail.com', birthday: 'April 8, 1981', sex: 'male', rank: 6, date: 'October 12, 2011', place: 'Grindr', note: 'cool guy', photo: 'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/5/a/f/6/92c8-6b9f-46e1-a094-c50a1c2ae10d'},
        {name: 'Amy Nickum', address: '101 Main St', city: 'Seattle', state:  'WA', phone: '5125551234', email: 'amy@gmail.com', birthday: 'May 6', sex: 'female', rank: 8, date: 'August 8, 2016', place: 'G.L.A.M. function', note: 'Your wife', photo: 'https://qph.fs.quoracdn.net/main-thumb-174655419-200-buqywwsxzkqohrlvtbkesbqonwzazvgk.jpeg'},
        {name: 'Andy Baandi', address: '601 Third St', city: 'Austin', state: 'TX', phone: '5125551234', email: 'andy@gmail.com', birthday: 'November 17', sex: 'male', rank: 6, date: 'December 4, 2016', place: 'G.L.A.M. function', note: 'Austrian God', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlBkVoBV7P5FVofqtF9iNEs8tdew8sSq9Qegoxkdc3WW6cBZl8Q'},
        {name: 'Blake Luther', address: '123 Fake St', city: 'Austin', state: 'TX', phone: '5125551234', email: 'blake@gmail.com', birthday: 'March 22, 1993', sex: 'male', rank: 4, date: 'April 18, 2016', place: 'G.L.A.M. function', note: 'Built like a brick house', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJG4v64gOIJkQZXOQvGxBC3ZorQGqHAX7GZ8RuMwPfxfU545n_zQ'},
        {name: 'Ben Zweig', address: '230 Riverside Dr', city: 'Austin', state: 'TX', phone: '5125551234', email: 'ben@gmail.com', birthday: 'April 3, 1990', sex: 'male', rank: 4, date: 'April 18, 2016', place: 'G.L.A.M. function', note: 'Jewish', photo: 'https://qph.fs.quoracdn.net/main-thumb-2765279-200-dgrxatdhdnthnkraakkccelgwbduiqwe.jpeg'},
        {name: 'Daniele Durham', address: '3400 South Congress', city: 'Austin', state: 'TX', phone: '5125551234', email: 'daniele@gmail.com', birthday: 'April 3, 1990', sex: 'female', rank: 5, date: 'April 18, 2016', place: 'G.L.A.M. function', note: 'Sweet person', photo: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/23659319_10154847393161793_2827087396823823105_n.jpg?_nc_cat=0&oh=f0828d3f4bfadefff42e5dffc68d203d&oe=5BCF1940'},
        {name: 'Charles Parks', address: '505 Jasper', city: 'Austin', state: 'TX', phone: '5125551234', email: 'charles@gmail.com', birthday: 'November 16', sex: 'male', rank: 5, date: 'April 10, 2016', place: 'His house', note: 'Sounds like Foghorn Leghorn when he talks', photo: 'http://uploads.webflow.com/57a381467fcc00d8214be428/57a396ac75ab2b3622b1e7d3_57a384395bb0f27322a962d7_charles.jpg'}
      ])
    })
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
          {friends_id: 1, groups_name: 'G.L.A.M. Rock Climbing of Texas'},
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
