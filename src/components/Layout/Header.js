import mealImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const HeaderComponent = (props) => {
    return ( 
        <>
        <header className={classes.header}>
            <h1>Mike Meals</h1>
            <HeaderCartButton onClick={props.modalHandler}/>
        </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="Foooood" />
            </div>
        </>
     );
}
 
export default HeaderComponent;