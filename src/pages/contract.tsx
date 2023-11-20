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

export interface Props {
    contract: CustomFile[] | null;
    powerofattorney: CustomFile[] | null;
    draft: CustomFile[] | null;
}

const initialUpLoadFiles: Props = {
    contract: null,
    powerofattorney: null,
    draft: null
}

const Contract = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const leadsData = location.state.data;

    return (
        <div className="flex flex-col gap-3 pt-28 px-16 text-white">
            <div className="flex justify-center font-bold text-[30px]">
                ANEXAR
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
            <Formik
                initialValues={initialUpLoadFiles}
                onSubmit={(values: any) => {
                    // submit form
                    console.log(values);
                    // navigate('/contract', { state: { data: leadsData } });
                }}
                validationSchema={
                    yup.object().shape({
                        contract: yup.mixed().required('Contrato Photo is a required.'),
                        powerofattorney: yup.mixed().required('PROCURACÄO SIMPLES is a required.'),
                        draft: yup.mixed().required('Minuta is a required.'),
                    })}
            >
                {({ values, handleSubmit, setFieldValue, touched, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-row justify-center gap-20 m-36">
                            <div>
                                <Stack spacing={1.5} alignItems="center">
                                    <UploadAvatar type='contract' setFieldValue={setFieldValue} file={values.contract} error={touched.contract && !!errors.contract} />
                                    {touched.contract && errors.contract && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.contract.toString()}
                                        </FormHelperText>
                                    )}
                                    <Typography align="center" variant="caption" color="secondary">
                                        CONTRATO
                                    </Typography>
                                </Stack>
                            </div>
                            <div>
                                <Stack spacing={1.5} alignItems="center">
                                    <UploadAvatar type='powerofattorney' setFieldValue={setFieldValue} file={values.powerofattorney} error={touched.powerofattorney && !!errors.powerofattorney} />
                                    {touched.powerofattorney && errors.powerofattorney && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.powerofattorney.toString()}
                                        </FormHelperText>
                                    )}
                                    <Typography align="center" variant="caption" color="secondary">
                                        PROCURACÄO SIMPLES
                                    </Typography>
                                </Stack>
                            </div>
                            <div>
                                <Stack spacing={1.5} alignItems="center">
                                    <UploadAvatar type='draft' setFieldValue={setFieldValue} file={values.draft} error={touched.draft && !!errors.draft} />
                                    {touched.draft && errors.draft && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.draft.toString()}
                                        </FormHelperText>
                                    )}
                                    <Typography align="center" variant="caption" color="secondary">
                                        MINUTA
                                    </Typography>
                                </Stack>
                            </div>
                        </div>
                        <div>
                            <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                                <button onClick={() => {
                                    setFieldValue('contract', null);
                                    setFieldValue('powerofattorney', null);
                                    setFieldValue('draft', null);
                                    navigate(-1);
                                }} className="w-[70px] h-[70px]">
                                    <img className="rounded-full" src="close.png" alt="close" width={70} height={70} />
                                </button>
                                <button type="submit" className="w-[70px] h-[70px]" onClick={() => {navigate('/agendado');}}>
                                    <img className="rounded-full" src="success.png" alt="success" width={70} height={50} />
                                </button>
                            </Stack>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Contract;