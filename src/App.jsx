import Table from "./components/table/Table";

const netIncomes = [
	{ brand: "McDonalds", income: 1291283 }, 
	{ brand: "Burger King", income: 1927361 }, 
	{ brand: "KFC", income: 1098463 }
];

function App() {

  return (
    <>
     {/* <MoviesName watchList={watchList} /> */}
	 <Table netIncomes={netIncomes} />
    </>
  )
}

export default App
