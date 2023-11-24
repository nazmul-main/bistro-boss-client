import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth()
  const navigate = useNavigate()
  const locaiton = useLocation()
  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart()

  const handleFoodCard = () => {
    if (user && user.email) {
      // TODO: Send cart item to the database
      // console.log(user.email, food);
      const cartItem = {
        menuID: _id,
        email: user.email,
        name,
        recipe,
        image,
        price,
      };

      axiosSecure.post("/api/v1/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} addeed successfully`,
              showConfirmButton: false,
              timer: 1000
            });
            /* Refech cart  to update the cart items count*/
            refetch();

          }
        })

    } else {
      Swal.fire({
        title: "Please SignIn Frist?",
        // text: "Please SignIn to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SignIn"
      }).then((result) => {
        if (result.isConfirmed) {
          // Send the user to the log in page
          navigate('/signin', { state: { from: locaiton } });
          //  Swal.fire({
          //     title: "Deleted!",
          //     text: "Your file has been deleted.",
          //     icon: "success"
          //   });
        }
      });
    }
  };
  return (
    <div className='relative'>
      <div className='relative'>
        <img className="rounded-t-lg" src={image} alt="" />
        <p className='absolute top-5 px-2 py-1 right-10 rounded-md font-semibold   bg-[#111827] text-[#cccccc]'>$ {price}</p>
      </div>
      <div className="p-5 bg-[#F3F3F3]">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold e">{name}</h5>
        </a>
        <p className="mb-3 text-start text-[#737373]">{recipe}</p>
        <button onClick={handleFoodCard} className='text-[#BB8506] border-[#BB8506] border-b-4 bg-slate-200 hover:bg-slate-900 py-1 px-3 rounded-md  '>ADD TO CART</button>
      </div>
    </div>
  );
};

export default FoodCard;
