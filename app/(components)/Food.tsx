export default function Food2({ food }: any) {
	const { id, name, type, created } = food || {};
	console.log(food);
	return (
		<div>
			<h2>{name}</h2>
			<h5>{type}</h5>
			<p>{created}</p>
		</div>

	);
}