import LeftConteiner from "./sections/LeftConteiner"
import RightConteiner from "./sections/RightConteiner"

export default function App() {
  return (
    <main className="flex">
      <section>
        <LeftConteiner/>
      </section>
      <section>
        <RightConteiner/>
      </section>
    </main>
  )
}