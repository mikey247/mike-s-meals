import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailaibleMeals.module.css";
import { useEffect, useState } from "react";

const AvailaibleMeals = () => {
  const [meals, setMeals] = useState(null);

  const getMealsHandler = async () => {
    const response = await fetch(
      "https://movies-project-13f43-default-rtdb.firebaseio.com/meals.json"
    );
    const data = await response.json();
    const loadedMeals = [];
    for (const key in data) {
      loadedMeals.push({
        id: data[key].id,
        description: data[key].description,
        name: data[key].name,
        price: data[key].price,
      });
    }
    setMeals(loadedMeals);
    console.log(loadedMeals);
  };
  useEffect(() => {
    getMealsHandler();
  }, []);
  return (
    // <div></div>
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals &&
            meals.map((meal) => (
              <MealItem
                key={meal.id}
                name={meal.name}
                price={meal.price}
                description={meal.description}
                id={meal.id}
              />
            ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailaibleMeals;
