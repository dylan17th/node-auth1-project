
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'myusername' , password: 'password1'},
        {id: 2, username: 'myfriendsusername' , password: 'password2'},
        {id: 3, username: 'ausername' , password: 'password3'},
        {id: 4, username: 'theusername' , password: 'password4'},
        {id: 5, username: 'dylan215' , password: 'password5'}
      ]);
    });
};
