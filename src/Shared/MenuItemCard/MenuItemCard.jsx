
const MenuItemCard = ({ item }) => {

    const { name, recipe, image, price } = item;


    return (
        <div className="flex space-x-4">
            <img className="w-[100px] object-cover shadow-slate-600 shadow-md rounded-r-full rounded-b-full" src={image} alt="" />
            <div>
                
                <h3 className="uppercase">{name}---------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">{price}</p>
        </div>
    );
};

export default MenuItemCard;