
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItemCard from "../../../Shared/MenuItemCard/MenuItemCard";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {

    const [menues]= UseMenu()
    // console.log(menues);
    const popular = menues?.filter(item => item.category === 'popular'); 
    // console.log(popular);

    // const [menues, setMenues] = useState([]);

    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenues(popularItems);
    //         });
    // }, []);

    return (
        <section className="mb-12 max-w-screen-xl mx-auto">
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="max-w-screen-xl px-4 mx-auto grid md:grid-cols-2 gap-7 md:gap-12 py-12">
                {
                    popular?.map(item => (
                        <MenuItemCard
                            key={item._id}
                            item={item}

                        />
                    ))
                }
            </div>
            <div className="flex justify-center">
                <button className="btn  border-black border-0 border-b-4 px-10">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;
