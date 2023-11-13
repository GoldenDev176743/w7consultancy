import { useNavigate, useLocation } from "react-router-dom";

// material-ui
import { FormHelperText, Stack, Typography } from '@mui/material';

import UploadAvatar from '../components/dropzone/Avatar';

// third-party
import { Formik } from 'formik';
import * as yup from 'yup';
import { CustomFile } from "../types/dropzone";

//const
const InputStyle1 = "flex justify-center font-mono rounded-[50px] text-[20px] bg-black text-white bg-opacity-30 placeholder-gray-600 px-6 py-3";
const InputStyle2 = "font-mono rounded-[50px] text-[20px] bg-black text-white bg-opacity-30 placeholder-gray-600 px-6 py-3";

export interface Props {
    person: CustomFile[] | null;
    proof: CustomFile[] | null;
    rg_cnh: CustomFile[] | null;
    vehicle: CustomFile[] | null;
}

const initialUpLoadFiles: Props = {
    person: null,
    proof: null,
    rg_cnh: null,
    vehicle: null
}

const Prepare = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const leadsData = location.state.data;

    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-3 pt-28 px-16 text-white">
                <div className="flex justify-center font-bold text-[30px]">
                    INFOMACOES DO CLIENTE
                </div>
                <div className="grid grid-cols-3 gap-5 mb-7">
                    <div className={InputStyle1}>
                        {leadsData.name}
                    </div>
                    <div className={InputStyle1}>
                        {leadsData.email}
                    </div>
                    <div className={InputStyle1}>
                        {leadsData.phone}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className={InputStyle2 + " col-span-2"}>
                        Endereço:
                    </div>
                    <div className={InputStyle2}>
                        Cep:
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className={InputStyle2}>
                        CPF
                    </div>
                    <div className={InputStyle2}>
                        PROSSISSÄO
                    </div>
                    <div className={InputStyle2}>
                        ESTADO CIVIL
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className={InputStyle2}>
                        RECADO 01
                    </div>
                    <div className={InputStyle2}>
                        RECADO 02
                    </div>
                </div>
                <div className="flex justify-center items-center h-24 font-bold text-[30px]">
                    DOCUMENTOS NECESSARIOS
                </div>
                <Formik
                    initialValues={initialUpLoadFiles}
                    onSubmit={(values: any) => {
                        // submit form
                        console.log(values);
                        navigate('/contract', {state: {data: leadsData}});
                    }}
                    validationSchema={
                        yup.object().shape({
                            person: yup.mixed().required('Person Photo is a required.'),
                            proof: yup.mixed().required('Proof is a required.'),
                            rg_cnh: yup.mixed().required('RG/CNH is a required.'),
                            vehicle: yup.mixed().required('Vehicle Photo is a required.'),
                        })}
                >
                    {({ values, handleSubmit, setFieldValue, touched, errors }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-row justify-between px-[250px]">
                                <div>
                                    <Stack spacing={1.5} alignItems="center">
                                        <UploadAvatar type='person' setFieldValue={setFieldValue} file={values.person} error={touched.person && !!errors.person} />
                                        {touched.person && errors.person && (
                                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                                {errors.person.toString()}
                                            </FormHelperText>
                                        )}
                                        <Typography align="center" variant="caption" color="secondary">
                                            FOTO PESSOAL
                                        </Typography>
                                    </Stack>
                                </div>
                                <div>
                                    <Stack spacing={1.5} alignItems="center">
                                        <UploadAvatar type='proof' setFieldValue={setFieldValue} file={values.proof} error={touched.proof && !!errors.proof} />
                                        {touched.proof && errors.proof && (
                                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                                {errors.proof.toString()}
                                            </FormHelperText>
                                        )}
                                        <Typography align="center" variant="caption" color="secondary">
                                            COMPROVANTE DE ENDERECO
                                        </Typography>
                                    </Stack>
                                </div>
                                <div>
                                    <Stack spacing={1.5} alignItems="center">
                                        <UploadAvatar type='rg_cnh' setFieldValue={setFieldValue} file={values.rg_cnh} error={touched.rg_cnh && !!errors.rg_cnh} />
                                        {touched.rg_cnh && errors.rg_cnh && (
                                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                                {errors.rg_cnh.toString()}
                                            </FormHelperText>
                                        )}
                                        <Typography align="center" variant="caption" color="secondary">
                                            RG/CNH
                                        </Typography>
                                    </Stack>
                                </div>
                                <div>
                                    <Stack spacing={1.5} alignItems="center">
                                        <UploadAvatar type='vehicle' setFieldValue={setFieldValue} file={values.vehicle} error={touched.vehicle && !!errors.vehicle} />
                                        {touched.vehicle && errors.vehicle && (
                                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                                {errors.vehicle.toString()}
                                            </FormHelperText>
                                        )}
                                        <Typography align="center" variant="caption" color="secondary">
                                            FOTOS DO VEICULO
                                        </Typography>
                                    </Stack>
                                </div>
                            </div>
                            <div>
                                <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                                    <button onClick={() => {
                                        setFieldValue('person', null);
                                        setFieldValue('proof', null);
                                        setFieldValue('rg_cnh', null);
                                        setFieldValue('vehicle', null);
                                        navigate(-1);
                                    }} className="w-[70px] h-[70px]">
                                        <img className="rounded-full" src="close.png" alt="close" width={70} height={70} />
                                    </button>
                                    <button type="submit" className="w-[70px] h-[70px]">
                                        <img className="rounded-full" src="success.png" alt="success" width={70} height={50} />
                                    </button>
                                </Stack>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Prepare;