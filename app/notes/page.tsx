"use client";
import Link from 'next/link';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
//import Food2 from '../(components)/Food';
import CreateFoodNew from './CreateFoodNew';
//import CreateNote from './CreateFoodNew';
import styles from './notes.module.css';
import ResultRecipe from '../(components)/ResultRecipe';

export default function NotesPage() {
	//const ingredients = await getNotes();

	//console.log({ ingredients });

	const [ingredients, setIngredients] = useState([]);
	const [current, setCurrent] = useState<string[]>([]);
	const [recipe, setRecipe] = useState<string | null>(null);

	const updateRecipe = (newData: string) => {
		setRecipe(newData);
	};

	useEffect(() => {
		async function fetchData() {
			const db = new PocketBase("http://127.0.0.1:8090");
			const data = await db.records.getList("ingredients");
			setIngredients(data?.items || []);
		}

		fetchData();
	}, []);

	const updateCurrentSelection = (foodName: string) => {
		setCurrent(prevPressedFoods => {
			if (prevPressedFoods.includes(foodName)) {
				console.log(prevPressedFoods.filter(name => name !== foodName))
				return prevPressedFoods.filter(name => name !== foodName);
			} else {
				console.log([...prevPressedFoods, foodName])
				return [...prevPressedFoods, foodName];
			}
		});
	};

	return (
		<div>
			<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

			{recipe ? (
				<ResultRecipe resultString={recipe} />
			) : (
				<>
					{ingredients?.map(food => {
						return (
							<div className="card-body gradient-buttons">
							<button type="button" className="btn btn-danger btn-lg btn3d" data-toggle="button" onClick={() => updateCurrentSelection(food.name)}>
								<Food key={food.id} food={food} />
							</button>
							</div>
						);
					})}
					<CreateFoodNew pressedFoods={current} handleRecipeData={updateRecipe} />
				</>
			)
			}
			
		</div>
	);
}

function Food({ food }: any) {
	const { id, name, type, created } = food || {};
	console.log(food);
	return (
		<div>
			<h1>{food?.name}</h1>
			<h5>{food?.type}</h5>
		</div>

	);
}

function Note({ note }: any) {
	const { id, title, content, created } = note || {};
	console.log(note);
	return (
		<Link href={`/notes/${id}`}>
			<div className={styles.note}>
				<h2>{title}</h2>
				<h5>{content}</h5>
				<p>{created}</p>
			</div>
		</Link>
	);
}