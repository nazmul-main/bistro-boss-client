import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user } = useAuth();
    console.log(user);
    const axios = useAxiosSecure();

    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axios.get(`/api/v1/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    });

    return { isAdmin };
};

export default useAdmin;