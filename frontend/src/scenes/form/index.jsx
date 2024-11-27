import {Box, Button} from "@mui/material"
import { useFormik } from 'formik';
import * as  yup from  "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import {TextField} from "@mui/material";

/* const phoneRegex =  "^(+254|0)([7][0-9]|[1][0-1]){1}[0-9]{1}[0-9]{6}$" */

const Form = ()=>{
    const isMobile = useMediaQuery("(min-width:600px)");
    const userSchema = yup.object({
        firstname: yup.string().required("required"),
        lastname: yup.string().required("required"),
       email: yup.string().email("invalid email").required("required"),
        contact: yup.string().required("required"),
       address1: yup.string().required("required"),
       address2: yup.string().required("required")

    })

        const formik = useFormik({
            initialValues: {
                firstname: "",
                lastname: "",
                email: "",
                contact: "",
                address1: "",
                address2: "",
            },
          validationSchema: userSchema,
          onSubmit: (values) => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
          },
        });

    return (
        <Box m="20px">
            <Header title="CREATE USER"  subtitle="Create a New User Profile"/>
                    <form onSubmit={formik.handleSubmit}>
                        <Box display='grid' gap='30px'
                        gridTemplateColumns='repeat(4, minmax(0,1fr))' sx={{"$ div >": {gridColumn: isMobile ? "span 4" : undefined}}}>
                        <TextField

                       fullWidth={isMobile}
                        variant="filled"
                        type='text'
                        label='First Name'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        name="firstname"
                        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                        helperText={formik.touched.firstname && formik.errors.firstname}
                        sx={{gridColumn: "span 2"}}
                        
                        />
                        <TextField

                       fullWidth={isMobile}
                        variant="filled"
                        type='text'
                        label='Last Name'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        name="lastname"
                        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                        helperText={formik.touched.lastname && formik.errors.lastname}
                        sx={{gridColumn: "span 2"}}
                        
                        />
                        <TextField

                        fullWidth={isMobile}
                        variant="filled"
                        type='text'
                        label='Email'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name="email"
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        sx={{gridColumn: "span 2"}}
                        
                        />
                        <TextField

                        fullWidth={isMobile}
                        variant="filled"
                        type='text'
                        label='Contact Number'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.contact}
                        name="contact"
                        error={formik.touched.contact && Boolean(formik.errors.contact)}
                        helperText={formik.touched.contact && formik.errors.contact}
                        sx={{gridColumn: "span 2"}}
                        
                        />
                        <TextField

                        fullWidth={isMobile}
                        variant="filled"
                        type='text'
                        label='Address 1'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.address1}
                        name="address1"
                        error={formik.touched.address1 && Boolean(formik.errors.address1)}
                        helperText={formik.touched.address1 && formik.errors.address1}
                        sx={{gridColumn: "span 2"}}
                        
                        />
                        <TextField

                        fullWidth={isMobile}
                        variant="filled"
                        type='text'
                        label='Address 2'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.address2}
                        name="address2"
                        error={formik.touched.address2 && Boolean(formik.errors.address2)}
                        helperText={formik.touched.address2 && formik.errors.address2}
                        sx={{gridColumn: "span 2"}}
                        
                        />

                        </Box>

                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create User
                                </Button>
                        </Box>

                    </form>
              

        </Box>
    )

}

export default Form