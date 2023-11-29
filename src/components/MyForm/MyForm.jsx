import React, { useRef } from "react";

//Formik Package
import { Formik } from "formik";

//YUP Package
import * as yup from "yup";

//Sweet Alert 2 Package
import swal from "sweetalert2";

//Material UI Files
import { Box, TextField } from "@mui/material";
import { MyButton } from "../../muiComponentsStyled/MyButton/MyButton";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import emailjs from "@emailjs/browser";
//Styles File
import styles from "./MyForm.module.css";

//Validation Schema With YUP to validate inputs of Contact Form
const validateSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().matches(/^([\w]*[\w\.]*(?!\.)@gmail.com)/,"enter your gmail").required(),
  subject: yup.string(),
  message: yup.string().required(),
});

//Initial Values Of Contact Form
const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const MyForm = () => {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_nqve4wi",
        "template_irbr19d",
        form.current,
        "1nJjrbK2pv9PhyreL"
      )
      .then(
        (result) => {
          swal.fire({
            title: `Success`,
            text: "Thank you on your message",
            icon: "success",
          });
          console.log(result.text);
        },
        (error) => {
          swal.fire({
            title: `Success`,
            text: "Error",
            icon: "success",
          });
          console.log(error.text);
        }
      );
  };
  // //Handle Request to Backend to Work Contact Form and Send Message
  // const handleSubmit = async (values , onSubmitProps)=>{
  //     await axios.post(`${process.env.REACT_APP_BACKEND_URL}/contact/receive`,{
  //         ...values
  //     }).then(async(res)=>{
  //         swal.fire({
  //             title: `Success`,
  //             text: res.data.message,
  //             icon: "success",
  //         })
  //         await axios.post(`${process.env.REACT_APP_BACKEND_URL}/contact/send`,{
  //             ...values
  //         }).then((res)=>{
  //             console.log(res.data.message)
  //         }).catch((err)=>{
  //             console.log(err.response.data.message)
  //         })
  //         onSubmitProps.resetForm()
  //     }).catch((err)=>{
  //         swal.fire({
  //             title: "Error",
  //             text: err.response.data.message,
  //             icon: "error",
  //         })
  //     })
  // }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={sendEmail}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <form
            ref={form}
            className={`grid jcs aic gm`}
            onSubmit={handleSubmit}
          >
            <Box className={`flex jcsb aic gm ${styles.name_and_email_box}`}>
              <TextField
                fullWidth
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                id="name"
                error={Boolean(touched.name) && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                onBlur={handleBlur}
              />
              <TextField
                fullWidth
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                id="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                onBlur={handleBlur}
              />
            </Box>
            <TextField
              placeholder="Subject"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              id="subject"
              error={Boolean(touched.subject) && Boolean(errors.subject)}
              helperText={touched.subject && errors.subject}
              onBlur={handleBlur}
            />
            <TextField
              multiline
              placeholder="Message"
              name="message"
              value={values.message}
              onChange={handleChange}
              id="message"
              error={Boolean(touched.message) && Boolean(errors.message)}
              helperText={touched.message && errors.message}
              onBlur={handleBlur}
              rows={10}
            />
            <Box className={`flex jcfs aic`}>
              <MyButton type="submit" className={`flex jcc aic gs`}>
                <SendRoundedIcon /> Send Message
              </MyButton>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
};

export default MyForm;
