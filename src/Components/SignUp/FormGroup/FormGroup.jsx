import React, { useEffect, useState } from "react";
import { api } from "../../../API/api";
import Button from "../../Button/Button";
import Preloader from "../../Preloader/Preloader";
import TextInput from "../TextInput/TextInput";
import UploadInput from "../UploadInput/UploadInput";
import styles from "./FormGroup.module.scss";

const FormGroup = (props) => {
  const [form, setForm] = useState({ position_id: 1 });
  const [positions, setPositions] = useState();
  const [validatedInputs, setValidatedInputs] = useState([]);

  const handleChange = (e) => {
    const target = e.target;
    const targetName = target.name;

    if (target.name === "position_id") {
      target.value = target.id;
    }

    setForm((form) => ({ ...form, [targetName]: target.value }));
  };

  const validateForm = (name, action) => {
    if (action === "add" && !validatedInputs.includes(name)) {
      setValidatedInputs((validatedInputs) => [...validatedInputs, name]);
    } else if (action === "remove") {
      const arr = validatedInputs;
      arr.map((item, index) => {
        if (item === name) arr.splice(index, 1);
        return setValidatedInputs(arr);
      });
    }
  };

  const signUp = async () => {
    props.setPreloader(true);
    await api.signUp(form);
    await props.addNewUser();
    props.setRegistered(true);
    props.setPreloader(false);
  };

  useEffect(() => {
    (async function () {
      setPositions(await api.getPositions());
    })();
  }, []);

  return (
    <>
      <h1>Working with POST request</h1>
      {props.loading ? (
        <Preloader />
      ) : (
        <form>
          <div className={styles.textInputGroup}>
            <TextInput
              type="name"
              name="name"
              placeholder="Your name"
              value={form.name || ""}
              helperText="Name"
              onChange={handleChange}
              validateForm={validateForm}
            />
            <TextInput
              type="email"
              name="email"
              placeholder="Email"
              value={form.email || ""}
              helperText="example@gmail.com"
              onChange={handleChange}
              validateForm={validateForm}
            />
            <TextInput
              type="phone"
              name="phone"
              placeholder="Phone"
              value={form.phone || ""}
              helperText="+38 (XXX) XXX - XX - XX"
              onChange={handleChange}
              validateForm={validateForm}
            />
          </div>

          <div className={styles.positions}>
            <p>Select your position</p>
            {positions &&
              positions.map((position, index) => {
                return (
                  <div className={styles.position} key={position.id}>
                    <label htmlFor={position.id} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="position_id"
                        id={position.id}
                        value={position.name}
                        onChange={handleChange}
                        defaultChecked={index === 0}
                      />
                      <span className={styles.customRadio} />
                      {position.name}
                    </label>
                  </div>
                );
              })}
          </div>

          <UploadInput
            handleChange={handleChange}
            setForm={setForm}
            validateForm={validateForm}
          />
        </form>
      )}
      <div onClick={() => signUp()}>
        <Button
          value={"Sign up"}
          disabled={validatedInputs.length !== 4 || props.loading}
        />
      </div>
    </>
  );
};

export default FormGroup;
