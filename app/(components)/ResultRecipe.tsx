
  export default function ResultRecipe({ resultString }: {resultString: any}) {
    const recipe = resultString?.text;

    return (
      <div style={{whiteSpace: "pre-line"}}>
        <h1 className="text-white">Generated Recipe:</h1>
        <p className="text-light reicpeStr animated ">{recipe}</p>
      </div>
    );
  }