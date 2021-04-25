type Props = {
	title: string;
};

export default function Home({ title = 'React Next Boilerplate' }: Props) {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	);
}
