// import { useEffect } from "react";

// import { RootState, dispatch, useSelector } from "../store";
// import { fetchLeads } from "../store/reducers/leads";
import ClientCard from "../components/ClientCard";

const Schedule = () => {
    // const leadsProps = useSelector((state: RootState) => state.leads);

    // useEffect(() => {
    //     dispatch(fetchLeads());
    // }, []);

    // let leadsData = leadsProps.leads;

    return (
        <div className="flex flex-col gap-5 px-10 py-10">
            <div className="flex items-center justify-center h-36 text-white font-semibold text-3xl">Agendamentos</div>
            <ClientCard color = "bg-yellow-300" status = "Agendado" />
            <ClientCard color = "bg-yellow-300" status = "Agendado" />
            <ClientCard color = "bg-green-500" status = "Concluido" />
        </div>
    );
}

export default Schedule;