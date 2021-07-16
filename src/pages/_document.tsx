import Document, {
	Html,
	Head,
	Main,
	NextScript,
<<<<<<< HEAD
	DocumentContext,
=======
	DocumentContext
>>>>>>> 6f663fe8f59f82d14c959dc25316d522be9846ab
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
<<<<<<< HEAD
						sheet.collectStyles(<App {...props} />),
=======
						sheet.collectStyles(<App {...props} />)
>>>>>>> 6f663fe8f59f82d14c959dc25316d522be9846ab
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
<<<<<<< HEAD
				),
=======
				)
>>>>>>> 6f663fe8f59f82d14c959dc25316d522be9846ab
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="pt-BR">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
