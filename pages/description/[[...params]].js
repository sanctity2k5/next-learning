import { useRouter } from "next/router";
import Layout from "../../components/Layout";

function Description(){
    const router = useRouter();
    const { params = [] } = router.query
    console.log(params)

    if(params.length === 2) {
        return <Layout><h1>Viewing course description for {params[0]} by {params[1]}</h1></Layout>
    } else if(params.length === 1) {
        return  <Layout><h1>Viewing course description for {params[0]}</h1></Layout>
    }
    return <Layout><h1>Course Description</h1></Layout>
}


export default Description;