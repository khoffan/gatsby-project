const { resolve } = require('path')
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
    resolve: '@directus/gatsby-source-directus',
    options: {
      url: `https://zw38euv7.directus.app`, // Fill with your Directus instance address
      auth: {
        // token: 'i9qc97kfLAQ5fqoZW4BVFS638ckqkAcV', // You can use a static token from an user

        // Or you can use the credentials of an user
        email: "khoffan222@gmail.com",
        password: "Yaicva9vnK905gmmMklBLjJl",
      },
    },
  },],
}
