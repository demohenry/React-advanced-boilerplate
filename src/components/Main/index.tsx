import * as S from './styles';

const Main = ({
	title = 'React Avançado',
<<<<<<< HEAD
	description = 'Typescript, ReactJS, NextJS e Styled Components',
=======
	description = 'Typescript, ReactJS, NextJS e Styled Components'
>>>>>>> 6f663fe8f59f82d14c959dc25316d522be9846ab
}) => (
	<S.Wrapper>
		<S.Logo
			src="/img/logo.svg"
			alt="Logo - átomo escrito react avançado ao lado"
		/>
		<S.Title>{title}</S.Title>
		<S.Description>{description}</S.Description>
		<S.Illustration
			src="/img/hero-illustration.svg"
			alt="desenvolvedor de frente para a tela com codigo"
		/>
	</S.Wrapper>
);

export default Main;
