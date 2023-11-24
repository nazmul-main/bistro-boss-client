
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import UseMenu from '../../Hooks/UseMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCaegory/MenuCategory';

const Menu = () => {
    const [menues] = UseMenu()

    const dessert = menues?.filter(item => item.category === 'dessert');
    const salad = menues?.filter(item => item.category === 'salad');
    const pizza = menues?.filter(item => item.category === 'pizza');
    const soup = menues?.filter(item => item.category === 'soup');
    const offered = menues?.filter(item => item.category === 'offered');

    console.log(dessert, salad, soup, pizza, offered);
    return (
        <div >
            <Helmet>
                <title>Bristo | Menu</title>
            </Helmet>

            {/* Main Cover */}
            <Cover img={menuImg} height={'60vh'} title={'Our Menu'} para={"Would you like to try a dish?"} />
            <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"} />
            <MenuCategory items={offered} img={menuImg}></MenuCategory>

            {/* dessert item */}
            <MenuCategory
                items={dessert}
                img={dessertImg}
                title={'dessert'}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                height={'40vh'}
            ></MenuCategory>


            {/* pizza item */}
            <MenuCategory
                items={pizza}
                img={pizzaImg}
                title={'pizza'}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                height={'40vh'}
            ></MenuCategory>


            {/* salad item */}
            <MenuCategory
                items={salad}
                img={saladImg}
                title={'salad'}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                height={'40vh'}
            ></MenuCategory>

            {/* soup item */}
            <MenuCategory
                items={soup}
                img={soupImg}
                title={'soup'}
                para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                height={'40vh'}
            ></MenuCategory>



        </div>
    );
};

export default Menu;
