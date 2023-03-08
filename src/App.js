import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useForm } from "react-hook-form";

const App = () => {


  // START REACT-HOOK-FORM

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onTouched" });

  const submit = (value) => {
    console.log(value);
    reset();
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(submit)}>
        <label>Name</label>
        <input
          {...register("name", {
            required: "Enter your name",
            pattern: {
              value: /^[a-zA-Zа-яА-Я]+$/,
              message: "Enter correct name",
            },
            minLength: {
              value: 2,
              message: "Minimum 2 characters",
            },
          })}
          className={errors.name ? "invalid" : ""}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Login</label>
        <input
          {...register("login", {
            required: "Enter your login",
            pattern: {
              value: /^[^\s]+$/,
              message: "Enter correct name",
            },
            minLength: {
              value: 5,
              message: "Minimum 5 characters",
            },
          })}
          className={errors.login ? "invalid" : ""}
        />
        {errors.login && <p>{errors.login.message}</p>}

        <label>Age</label>
        <input
          {...register("age", {
            required: "Enter your age",
            min: {
              value: 18,
              message: "You must be over 18",
            },
            pattern: {
              value: /^[0-9\b]+$/,
              message: "Enter correct age",
            },
          })}
          className={errors.age ? "invalid" : ""}
        />
        {errors.age && <p>{errors.age.message}</p>}

        <label>Email</label>
        <input
          {...register("email", {
            required: "Enter your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter correct email",
            },
          })}
          className={errors.email ? "invalid" : ""}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Sign in</button>
      </form>
    </div>
  );

  // END REACT-HOOK-FORM



  // START FORMIK

  // const validateName = (value) => {
  //   if (!value) {
  //     return "Enter your name";
  //  } else if (value.trim() === "" || !/^[a-zA-Zа-яА-Я]+$/.test(value) || value.length < 2) {
  //     return "Enter correct name";
  //   }
  // };

  // const validateLogin = (value) => {
  //   if (!value) {
  //     return "Enter your login";
  //   } else if (value.trim() === "" || value.length < 5) {
  //     return "Minimum 5 characters";
  //   }
  // };

  // const validateAge = (value) => {
  //   if (!/^\d+$/.test(value)) {
  //     return "Age must be a number";
  //   } else if (value < 18) {
  //     return "You must be over 18";
  //   }
  // };

  // const validateEmail = (value) => {
  //   if (!value) {
  //     return "Enter your email";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
  //     return "Enter correct email";
  //   }
  // };

  // return (
  //   <div className="wrapper">
  //     <Formik
  //       initialValues={{
  //         name: "",
  //         login: "",
  //         age: "",
  //         email: "",
  //       }}
  //       onSubmit={(values) => {
  //         console.log(values);
  //       }}
  //     >
  //       {({ errors, touched }) => (
  //         <Form>
  //           <label>Name</label>
  //           <Field
  //             name="name"
  //             validate={validateName}
  //             className={errors.name && touched.name ? "invalid" : ""}
  //           />
  //           {errors.name && touched.name && <p>{errors.name}</p>}

  //           <label>Login</label>
  //           <Field
  //             name="login"
  //             validate={validateLogin}
  //             className={errors.login && touched.login ? "invalid" : ""}
  //           />
  //           {errors.login && touched.login && <p>{errors.login}</p>}

  //           <label>Age</label>
  //           <Field
  //             name="age"
  //             type="number"
  //             validate={validateAge}
  //             className={errors.age && touched.age ? "invalid" : ""}
  //           />
  //           {errors.age && touched.age && <p>{errors.age}</p>}

  //           <label>Email</label>
  //           <Field
  //             name="email"
  //             validate={validateEmail}
  //             className={errors.email && touched.email ? "invalid" : ""}
  //           />
  //           {errors.email && touched.email && <p>{errors.email}</p>}

  //           <button type="submit">Sign in</button>
  //         </Form>
  //       )}
  //     </Formik>
  //   </div>
  // );

  // END FORMIK



  // const [name, setName] = useState("");
  // const [login, setLogin] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");

  // const [isNameValid, setIsNameValid] = useState(false);
  // const [isLoginValid, setIsLoginValid] = useState(false);
  // const [isAgeValid, setIsAgeValid] = useState(false);
  // const [isEmailValid, setIsEmailValid] = useState(false);

  // const [wasNameTouched, setWasNameTouched] = useState(false);
  // const [wasLoginTouched, setWasLoginTouched] = useState(false);
  // const [wasAgeTouched, setWasAgeTouched] = useState(false);
  // const [wasEmailTouched, setWasEmailTouched] = useState(false);

  // const nameChange = (e) => {
  //   setName(e.target.value);
  //   if (wasNameTouched) {
  //     e.target.value === "" ? setIsNameValid(false) : setIsNameValid(true);
  //   }
  // };

  // const loginChange = (e) => {
  //   setLogin(e.target.value);
  //   if (wasLoginTouched) {
  //     e.target.value === "" ? setIsLoginValid(false) : setIsLoginValid(true);
  //   }
  // };

  // const ageChange = (e) => {
  //   setAge(e.target.value);
  //   if (wasAgeTouched) {
  //     e.target.value < 18 ? setIsAgeValid(false) : setIsAgeValid(true);
  //   }
  // };

  // const emailChange = (e) => {
  //   setEmail(e.target.value);
  //   if (wasEmailTouched) {
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  //       ? setIsEmailValid(false)
  //       : setIsEmailValid(true);
  //   }
  // };

  // const nameLostFocus = () => {
  //   setWasNameTouched(true);
  //   if (name.trim() === "" || !/^[a-zA-Zа-яА-Я]+$/.test(name) || name.length < 2) {
  //     setIsNameValid(false);
  //     return;
  //   }
  //   setIsNameValid(true);
  // };

  // const loginLostFocus = () => {
  //   setWasLoginTouched(true);
  //   if (login.trim() === "" || login.length < 5) {
  //     setIsLoginValid(false);
  //     return;
  //   }
  //   setIsLoginValid(true);
  // };

  // const ageLostFocus = () => {
  //   setWasAgeTouched(true);
  //   if (age < 18) {
  //     setIsAgeValid(false);
  //     return;
  //   }
  //   setIsAgeValid(true);
  // };

  // const emailLostFocus = () => {
  //   setWasEmailTouched(true);
  //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
  //     setIsEmailValid(false);
  //     return;
  //   }
  //   setIsEmailValid(true);
  // };

  // const submit = (e) => {
  //   e.preventDefault();

  //   setWasNameTouched(true);
  //   setWasLoginTouched(true);
  //   setWasAgeTouched(true);
  //   setWasEmailTouched(true);

  //   if (name.trim() === "" || !/^[a-zA-Z]+$/.test(name) || name.length < 2) {
  //     setIsNameValid(false);
  //     return;
  //   }
  //   if (login.trim() === "" || login.length < 5) {
  //     setIsLoginValid(false);
  //     return;
  //   }
  //   if (age < 18) {
  //     setIsAgeValid(false);
  //     return;
  //   }
  //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
  //     setIsEmailValid(false);
  //     return;
  //   }

  //   setIsNameValid(true);
  //   setIsLoginValid(true);
  //   setIsAgeValid(true);
  //   setIsEmailValid(true);

  //   console.log(name, login, age, email);
  // };

  // return (
  //   <div className="wrapper">
  //     <form onSubmit={submit}>
  //       <label>Name</label>
  //       <input
  //         onInput={nameChange}
  //         onBlur={nameLostFocus}
  //         className={!isNameValid && wasNameTouched ? "invalid" : ""}
  //       />
  //       {!isNameValid && wasNameTouched && <p>Enter correct name</p>}
  //       <label>Login</label>
  //       <input
  //         onInput={loginChange}
  //         onBlur={loginLostFocus}
  //         className={!isLoginValid && wasLoginTouched ? "invalid" : ""}
  //       />
  //       {!isLoginValid && wasLoginTouched && <p>Enter correct login</p>}
  //       <label>Age</label>
  //       <input
  //         type="number"
  //         onInput={ageChange}
  //         onBlur={ageLostFocus}
  //         className={!isAgeValid && wasAgeTouched ? "invalid" : ""}
  //       />
  //       {!isAgeValid && wasAgeTouched && <p> You must be over 18 </p>}
  //       <label>Email</label>
  //       <input
  //         onInput={emailChange}
  //         onBlur={emailLostFocus}
  //         className={!isEmailValid && wasEmailTouched ? "invalid" : ""}
  //       />
  //       {!isEmailValid && wasEmailTouched && <p>Enter correct email</p>}
  //       <button type="submit">Sign in</button>
  //     </form>
  //   </div>
  // );
};

export default App;
