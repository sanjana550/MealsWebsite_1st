import {Fragment} from 'react';
import mealsImage from '../../Assets/mealsImage.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './headerCartButton';
const Header=(props)=>{
return <Fragment>
    <header className={classes.header}>
     <h1>ReactMeals</h1>
     <HeaderCartButton/>
    </header>

    <div className={classes['main-image']}>
<img src={mealsImage} alt="A table full of delicious meals"/>
    </div>
</Fragment>
}
export default Header;