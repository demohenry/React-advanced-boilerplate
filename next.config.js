<<<<<<< HEAD
// eslint-disable-next-line @typescript-eslint/no-var-requires
=======
>>>>>>> 6f663fe8f59f82d14c959dc25316d522be9846ab
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
	pwa: {
		dest: 'public',
<<<<<<< HEAD
		disable: !isProd,
	},
=======
		disable: !isProd
	}
>>>>>>> 6f663fe8f59f82d14c959dc25316d522be9846ab
});
