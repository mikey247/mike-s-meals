import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailaibleMeals.module.css'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Spaghetti(Stir-Fry)',
      description: 'Finest fish,turkey and veggies',
      price: 2000,
    },
    {
      id: 'm2',
      name: 'Egusi',
      description: 'A Nigerian specialty!',
      price: 1500,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'Spicy, raw, meaty',
      price: 2500,
    },
    {
      id: 'm4',
      name: 'Veggie Salad',
      description: 'Healthy...and green...',
      price: 1800,
    },
  ];

const AvailaibleMeals = () => {
    return ( 
        <section className={classes.meals}>
            <Card>
            <ul>
           { DUMMY_MEALS.map((meal)=>(
               <MealItem key={meal.id} name={meal.name} price={meal.price} description={meal.description} id={meal.id}/>
           ))}
               
            </ul>
        </Card>
        </section>
     );
}
 
export default AvailaibleMeals;