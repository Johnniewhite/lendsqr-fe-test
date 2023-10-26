"use client";
import Image from "next/image";
import styles from "./LoginPage.module.css";
import Logo from "@/app/assets/logo.png";
import illustration from "@/app/assets/loginIllustration.svg";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};


const LoginPage = () => {
    const router = useRouter()
    

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();
    
      const onSubmit: SubmitHandler<Inputs> = (data) => {
        
        console.log(data);
        router.push("/dashboard");
      };
    

  return (
    <div className={styles.parentDiv}>
      <div className={styles.firstSection}>
        <Image src={Logo} alt="Logo Image" />
        <div className={styles.illustration}>
          <Image src={illustration} alt="Pablo Sign In" />
        </div>
      </div>

      <div className={styles.secondSection}>

        <div className={styles.textDiv}>
            <h1 className={styles.textBig}>Welcome!</h1>
            <h1 className={styles.textSmall}>Enter details to login.</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              placeholder="Email"
              className={styles.inputFields}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className={styles.inputFields}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
          </div>
              <h1 className={styles.forgotPassword}>FORGOT PASSWORD</h1>
          <button className={styles.loginButton} type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;