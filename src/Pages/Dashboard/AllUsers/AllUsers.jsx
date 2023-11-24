import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSequre = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSequre.get('/api/v1/users')
            return res.data
        },
    })

    const handleMakeAdmin = user => {
        axiosSequre.patch(`/api/v1/users/admin/${user?._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {  
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an admin now!`, 
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSequre.delete(`/api/v1/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="flex justify-evenly py-12">
                <h2 className="text-2xl">All Users</h2>
                <h2 className="text-2xl">Total Users: {users?.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-center">
                        <tr className="bg-[#D1A054] text-black">
                            <th>NO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            users?.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td className="t">
                                    {item.name}

                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td className="text-[#D1A054] text-xl ">
                                    {item?.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(item)}
                                        className="btn  btn-sm cursor-default bg-[#D1A054] py-2">
                                        <FaUsers className=" text-white text"> </FaUsers>
                                    </button>}
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDeleteUser(item)}
                                        className="btn  btn-sm hover:bg-[#b91c1cdb] bg-[#f13838] py-2 ">
                                        <FaTrashAlt className=" text-white "> </FaTrashAlt>
                                    </button>
                                </th>
                            </tr>
                            )
                        }
                        {/* row 1 */}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;