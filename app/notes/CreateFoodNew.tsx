'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateFoodNew({ pressedFoods, handleRecipeData }: { pressedFoods: string[]; handleRecipeData: (data: string) => void; }) {
	const [type, setType] = useState("");
  
	const basicRequest: string = "Can you provide me with a random recipe using the following ingredients: "
	const defaultOption: string = " ? Please ensure that the recipe doesn't include any main ingredients that I haven't provided."

	const create = (e: React.FormEvent<HTMLFormElement>) => {
	  e.preventDefault();
  
	  fetch("/api/generate-recipe", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ prompt: basicRequest + pressedFoods + defaultOption }),
	  })
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			const result = data.toString();
			handleRecipeData(data);
			//
		});
	};
  
	return (
	  <form>
		<h3 className="text-white">Create a new recipe</h3>
		<textarea
		  placeholder="Type"
		  value={type}
		  onChange={(e) => setType(e.target.value)}
		/>
		<button
		  type="button"
		  className="btn btn-warning"
		  onClick={create}
		>
		  Generate me recipe
		</button>
	  </form>
	);
  }

















// export default function CreateNote() {
// 	const [name, setName] = useState('');
// 	const [type, setType] = useState('');

// 	const router = useRouter();

// 	const create = async () => {
// 		await fetch('http://127.0.0.1:8090/api/collections/ingredients/records', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				name,
// 				type,
// 			}),
// 		});

// 		setName('');
// 		setType('');
// 		router.reload();
// 	};

// 	return (
// 		<form onSubmit={create}>
// 			<h3>Create a new recipe</h3>
// 			{/* <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /> */}
// 			<textarea placeholder="Type" value={type} onChange={e => setType(e.target.value)} />
// 			<button type="submit" className="btn btn-warning">Generate me fkin recipe MOTHERFUCKER</button>
// 		</form>
// 	);
// }
