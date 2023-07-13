import styles from "../../styles/Ninjas.module.css"
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: { ninjas: data}
    };
}


const Ninjas = (props :any) => {
    console.log(props);
    const ninjas: any = props.ninjas;
    return ( 
        <>
            <Head>
                <title>List</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            
            <div className = "allNinjas">
                <h2>List</h2>
                {ninjas.map((ninja : any) => {
                    return (
                    <Link href = {"/ninjas/" + ninja.id} key = {ninja.id} className = {styles.single}>
                        
                        <h2>{ninja.name}</h2>
                        
                    </Link>
                    )
                })}
            </div>
        </>
     );
}
 
export default Ninjas;