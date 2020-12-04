// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'First Main',
  plugins: [
  	{
        use: 'gridsome-plugin-nprogress',
        options: {
          // Setting a color is optional.
          color: '#000',
          // Disable the loading spinner.
        },
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-184624518-1'
      }
    }
  ]
}
