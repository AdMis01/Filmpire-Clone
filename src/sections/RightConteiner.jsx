import Nav from "./Nav"

const RightConteiner = () => {
  return (
    <section className="flex flex-col h-[100vh]">
        <Nav/>
        <div className="w-[300px] h-[100px]"></div>
        <div className="w-[100vh] h-[100vh] md:pl-[216px]"></div>
    </section>
)
}

export default RightConteiner