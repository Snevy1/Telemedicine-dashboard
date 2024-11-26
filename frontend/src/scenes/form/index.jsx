import {Box, Button, Textfield} from "@mui/material"
import {Formik} from "formik";
import * as  yup from  "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}
const phoneRegex = "^(?:\+254|254|0)((1|7)(?:(?:[0–9][0–9])|(?:[0–9][0–9][0–9]))[0–9]{6})$"

const Form = ()=>{
    const isMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values)=>{
        console.log(values)
    }

    const userSchema = yup.object().shape({
        firstname: yup.string().required("required"),
         lastname: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
         contact: yup.string().matches(phoneRegex,"Phone Number is not valid").required("required"),
        address1: yup.string().required("required"),
        address2: yup.string().required("required")
    })

    return (
        <Box m="20px">
            <Header title="CREATE USER"  subtitle="Create a New User Profile"/>

            <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
            >
                {({values,errors,touched,handleBlur,handleChange,handleSubmit})=>(
                    <form onSubmit={handleSubmit}>
                        <Box display='grid' gap='30px'
                        gridTemplateColumns='repeat(4, minmax(0,1fr))' sx={{"$ div >": {gridColumn: isNonMobile ?undefined : "span 4"}}}>

                        </Box>

                    </form>
                )}

            </Formik>

        </Box>
    )

}

export default Form;