import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counter";
import { useSession, getSession } from "next-auth/react"

const Home = () => {
    // const { value } = useSelector((state) => state.counter);
    // const dispatch = useDispatch();
    const { data: session, status } = useSession()
    return(
        <Layout>
        <h1>{session? `Welcome to Nextjs ${session.user.name}` : `Please login`}</h1>
        {/* <h1>Welcome to Nextjs</h1> */}
        {/* <h1>The count is {value}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button> */}
        </Layout> 
    )
} 

export default Home;