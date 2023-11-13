import { useNavigate } from "react-router-dom";

const Agendado = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-5 px-10 py-10">
            <div className="flex items-center justify-center h-36 text-white font-semibold text-3xl">Agendamentos</div>
            <div className="flex flex-col rounded-[30px] bg-amber-300 p-5">
                <div className="flex flex-row items-center justify-between gap-5">
                    <div className="flex flex-col gap-2 pl-16">
                        <div className="text-[20px] font-semibold font-mono">Erick Henrique Akamine Leite</div>
                        <div className="text-[20px] font-mono">
                            <span className="font-semibold">Contato:</span> (11) 91252-3656
                        </div>
                        <div className="text-[20px] font-mono">
                            <span className="font-semibold">Endereco: </span> Av.Cardeal motta, 343
                            <br /> City America - 05101-210 Sao Paulo
                        </div>
                        <div className="text-[20px] font-mono">
                            <span className="font-semibold">Valor: </span> R$ 30.000,00
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 pl-16">
                        <div className="text-[20px] font-semibold font-mono">Mercedes GLA 250</div>
                        <div className="text-[20px] font-mono">
                            <span className="font-semibold">Ano:</span> (2015)
                        </div>
                        <div className="text-[20px] font-mono">
                            <span className="font-semibold">Kilometragem: </span> 100.000 km
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-2 pr-16 items-end">
                        <div className="text-[30px] font-mono">Agendado</div>
                        <div>
                            Data: 00/00/0000
                            <br /> 00hs
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-5 mt-10 p-5">
                    <div className="flex flex-col items-center gap-3 px-5">
                        <div className="flex items-center font-semibold rounded-[30px] bg-gray-500 p-10 w-[400px] bg-opacity-50 text-[20px] justify-center">Baixar Contrato</div>
                        <div className="flex justify-center items-center font-semibold rounded-[30px] bg-gray-500 p-10 w-[400px] bg-opacity-50 text-[20px]">Baixar Procuracao S.</div>
                        <div className="flex justify-center items-center font-semibold rounded-[30px] bg-gray-500 p-10 w-[400px] bg-opacity-50 text-[20px]">Baixar Minuta</div>
                    </div>
                    <div className="flex justify-center items-center font-semibold rounded-[30px] bg-sky-500 w-[400px] h-[100px] bg-opacity-30 text-[20px]">Upload Procuracao</div>
                    <div className="flex flex-col justify-end">
                        <div className="flex flex-row justify-end gap-5">
                            <button className="w-[70px] h-[70px]" onClick={() => {navigate(-1)}}>
                                <img className="rounded-full" src="close.png" alt="close" width={70} height={70} />
                            </button>
                            <button className="w-[70px] h-[70px]" onClick={() => {navigate('/schedule')}}>
                                <img className="rounded-full" src="success.png" alt="success" width={70} height={50} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agendado;