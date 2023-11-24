import { Link } from "react-router-dom";
import MenuItemCard from "../../../Shared/MenuItemCard/MenuItemCard";
import Cover from "../../../Shared/Cover/Cover";


const MenuCategory = ({ items, title, img,  height,  para }) => {
    // const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink'];


    return (
        <div>
            {title && <Cover img={img} height={height} title={title} para={para} />}
            <div className="max-w-screen-xl px-4 mx-auto grid md:grid-cols-2 gap-7 md:gap-12 py-12">
                {
                    items?.map(item => (
                        <MenuItemCard
                            key={item._id}
                            item={item}
                        />
                    ))
                }
            </div>
            <Link to={`/ourShop/${title}`}>
                <button className="btn  border-black border-0 border-b-4 px-10 mx-auto ">View Full  Menu</button>
            </Link>
        </div>
    );
};

export default MenuCategory;