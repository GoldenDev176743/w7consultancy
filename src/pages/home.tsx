import { title } from 'process'
import ChartCard from '../components/ChartCard'

const shortCard = [
    {
        width: "310px",
        color: "",
        title: "Faturamento",
        number: "1.5",
        unit: "Milhoes",
        desctiption: "Faturamento bruto geral",
        graph: "Capture",
        height: "26vh",
        display: "block",
        lettercolor: "#00FF00, #003F1C",
        titlecolor: "black",
        displayagain: "none"
    },
    {
        width: "310px",
        color: "",
        title: "Despesas",
        number: "100",
        unit: "mil",
        desctiption: "Faturamento bruto geral",
        graph: "Capture1",
        height: "26vh",
        display: "block",
        lettercolor: "#00FF00, #003F1C",
        titlecolor: "black",
        displayagain: "none"
    },
    {
        width: "310px",
        color: "#00C460",
        title: "Saldo",
        number: "1.5",
        unit: "Milhoes",
        desctiption: "Saldo Liquido",
        graph: "Capture",
        height: "26vh",
        display: "block",
        lettercolor: "white, white",
        titlecolor: "white",
        displayagain: "none"
    }
]

const longCard = [
    {
        width: "639px",
        color: "white",
        title: "QUANTIDADE DE LEADS",
        number: "100",
        unit: "mil",
        desctiption: "Leads geral",
        graph: "Capture",
        height: "277px",
        display: "block",
        lettercolor: "#00FF00, #003F1C",
        titlecolor: "black",
        displayagain: "none"

    },
    {
        width: "639px",
        color: "linear-gradient(#ffffff,#D6C8A7)",
        title: "QUANTIDADE DE CLIENTS",
        number: "1.000",
        unit: "",
        desctiption: "CLIENTS GERAL",
        graph: "Capture",
        height: "277px",
        display: "block",
        lettercolor: "#00FF00, #003F1C",
        titlecolor: "black",
        displayagain: ""
    }
]


const buttonName = ["PIRITUBA", "BUTANTA", "TABOAO DA SERRA", "OSASCO", "FLORIANOPLIS"]
const salesCars = [
    "Janeiro:R$:50.528,00",
    "Fevereiro:R$:50.528,00",
    "Marco:R$:50.528,00",
    "Abril:R$:50.528,00",
    "Maio:R$:50.528,00",
    "Junho:R$:50.528,00",
    "Julho:R$:50.528,00",
    "Agosto:R$:50.528,00",
    "Setembro:R$:50.528,00",
    "Outubro:R$:50.528,00",
    "Novembro:R$:50.528,00",
    "Dezembro:R$:50.528,00"
]

const Home = () => {
    
    return (
        <div className="flex justify-between px-10 py-10 h-[95vh]">
            <div className='w-2/3 h-full flex flex-col justify-between'>
                {/* These are cards show the total profit chart. */}
                <div className='flex h-1/3 justify-between'>
                    {shortCard.map((shortCard) =>
                        <ChartCard
                            width={shortCard.width}
                            title={shortCard.title}
                            number={shortCard.number}
                            color={shortCard.color}
                            unit={shortCard.unit}
                            description={shortCard.desctiption}
                            graph={shortCard.graph}
                            height={shortCard.height}
                            display={shortCard.display}
                            lettercolor={shortCard.lettercolor}
                            titlecolor={shortCard.titlecolor}
                            displayagain={shortCard.displayagain}
                        />
                    )}
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='w-[310px] h-[570px] bg-[#B88500] text-center rounded-[17px] flex flex-col'>
                        <h1 className='border-1 border-solid border-b border-black p-2 text-center text-[30px] font-bold'>FILIAIS</h1>
                        <div className='flex flex-col h-[48vh] justify-between'>
                            <div className='mt-6'>
                                {buttonName.map((name) => <button className='w-60 mt-3 bg-[#D6C8A7] font-bold rounded-full h-10'>{name}</button>)}
                            </div>
                            <div className='pr-8'>
                                <div className='text-6xl text-white font-bold h-20 w-20 pt-2 rounded-full bg-[green] text-center float-right'>+</div>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col justify-between'>
                        {longCard.map((longCard) =>
                            <ChartCard
                                width={longCard.width}
                                title={longCard.title}
                                number={longCard.number}
                                color={longCard.color}
                                unit={longCard.unit}
                                description={longCard.desctiption}
                                graph={longCard.graph}
                                height={longCard.height}
                                display={longCard.display}
                                lettercolor={longCard.lettercolor}
                                titlecolor={longCard.titlecolor}
                                displayagain={longCard.displayagain}

                            />
                        )}
                    </div>
                </div>

            </div>
            <div className='w-1/3 pl-6 h-full flex flex-col justify-between'>

                 {/* A card that displays used cars that have been sold. */}
                <div className='w-full bg-[#c7c6c6] p-5 rounded-[18px]'>
                    <h1 className='text-[#56f756] font-bold text-center'>Faturamento Anual</h1>
                    {salesCars.map((name) => <button className='w-full mt-1 bg-[#b7b1b1] font-bold rounded-full h-10'>{name}</button>)}

                </div>
                <div className='p-2 text-[35px] text-white font-bold bg-green-500 rounded-[18px] text-center'>1.000.000.000,00</div>
                <div>
                    <ChartCard
                        width="w-full"
                        title="CONTATOS PARA REPESCAGEM"
                        number="99.000"
                        color="#D6C8A7"
                        unit=""
                        description="CLIENTS GERAL"
                        graph=""
                        height="15vh"
                        display="none"
                        lettercolor='#00FF00, #003F1C'
                        titlecolor='black'
                        displayagain='none'
                    />

                </div>
            </div>
        </div>
    );
}

export default Home;