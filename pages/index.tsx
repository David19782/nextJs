import Head from "next/head"
import Navbar from "@/comps/Navbar"
import Footer from "@/comps/Footer"
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="hopmepage">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae itaque, fugiat aut cupiditate omnis deserunt suscipit facilis, expedita, eveniet non veritatis neque quidem autem commodi. Laborum nulla saepe quis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae itaque, fugiat aut cupiditate omnis deserunt suscipit facilis, expedita, eveniet non veritatis neque quidem autem commodi. Laborum nulla saepe quis?</p>
      </div>
    </>
  )
}
