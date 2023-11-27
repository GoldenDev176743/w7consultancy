import { useSelector } from "../store";
import { useState, useEffect } from 'react';

const Header = () => {

    const savedData = useSelector((state) => state.usersInfo);

    // Set Date.

    const [date, setDate] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate()
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
          const date = new Date();
          setDate({
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate()
          })
        }, 1000)
    
        return () => clearInterval(intervalId);
      }, [])

    // Set Time.

    const [time, setTime] = useState({
        minutes: new Date().getMinutes(),
        hours: new Date().getHours(),
        seconds: new Date().getSeconds()
      })
      
      useEffect(() => {
        const intervalId = setInterval(() => {
          const date = new Date();
          setTime({
            minutes: date.getMinutes(),
            hours: date.getHours(),
            seconds: date.getSeconds()
          })
        }, 1000)
    
        return () => clearInterval(intervalId);
      }, [])
    
      const convertToTwoDigit = (number:number) => {
        return number.toLocaleString('en-US', {
          minimumIntegerDigits: 2
        })
      }

    return (
        <div className="flex bg-[#B88500] p-4">
            <div className="w-[15vw]">
                <div className="text-white font-sams font-bold flex flex-row items-center">Nome da Filia Logada: <p className="text-[#2EFE2E] font-sans ">{savedData.name}</p></div>
                <div className="text-white font-sams font-bold flex">Usuario: <p className="text-[#2EFE2E]">{savedData.job}</p></div>
            </div>
            <div>
                <div className="text-white font-sams font-bold flex">Data:<p className="text-[#2EFE2E]">{`${convertToTwoDigit(date.month)}/${convertToTwoDigit(date.date)}/${date.year}`}</p></div>
                <div className="text-white font-sams font-bold flex">Hora:<p className="text-[#2EFE2E]">{`${convertToTwoDigit(time.hours)}-${convertToTwoDigit(time.minutes)}-${convertToTwoDigit(time.seconds)}  ${time.hours >= 12 ? 'PM':'AM'}`}</p></div>
            </div>
        </div>
    );
}

export default Header;