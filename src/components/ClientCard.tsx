import { useNavigate } from "react-router-dom";

// import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

// import IconButton from "../components/IconButton";
// import { LeadsType } from "../types/leads";

export interface Props {
    color: string;
    status: string;
}

// const colors: Record<string, string> = {
//     "Attendant 1": "bg-blue-300",
//     "Attendant 2": "bg-orange-300",
//     "Attendant 3": "bg-yellow-300",
//     "Attendant 4": "bg-green-300",
// };

const ClientCard = ({color, status}: Props) => {
    const navigate = useNavigate();

    // const handleLeadsEdit = (event: React.MouseEvent<Element, MouseEvent>) => {
    //     event.stopPropagation();
    //     navigate('/register', { state: {data: leads} });
    // }

    const handleAgendado = () => {
        if (status === "Agendado") {
            navigate('/agendado');
        }
    }

    return (
        <div
            onClick={handleAgendado}
            className={
                "flex flex-row items-center justify-between h-52 rounded-[30px] transition hover:scale-[1.01] hover:bg-indigo-500 duration-300 cursor-pointer " 
                + color
            }
        >
            <div className="flex flex-col gap-2 pl-16">
                <div className="text-[20px] font-semibold font-mono">Erick Henrique Akamine Leite</div>
                <div className="text-[20px] font-mono">
                    <span className="font-semibold">Contato:</span> (11) 91252-3656
                </div>
                <div className="text-[20px] font-mono">
                    <span className="font-semibold">Endereco: </span> Av.Cardeal motta, 343
                    <br/> City America - 05101-210 Sao Paulo 
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
                <div className="text-[30px] font-mono">{status}</div>
                <div>
                    Data: 00/00/0000
                    <br /> 00hs
                </div>
            </div>
        </div>
    );
};

export default ClientCard;
