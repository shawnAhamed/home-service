import HomeHero from "../component/header";
import Formbanner from "../component/form-banner";
import Second from "../component/second";


export default function Home() {
  return (
    <div>
      <HomeHero/>
        <Formbanner/>
        <Second/>
    </div>
  )
}