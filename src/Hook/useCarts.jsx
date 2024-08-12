import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "./useAuth";


const useCarts = () => {
    const {user} = UseAuth()
  const {data, isLoading, refetch, error} = useQuery({
    queryKey: ['cart'],
    queryFn: async()=>{
        const res = await axios.get(`https://food-sharing-website-server-beta.vercel.app/carts/${user.email}`)
        return res.data;
    }
  })
  return { data, isLoading,refetch, error };
};

export default useCarts;