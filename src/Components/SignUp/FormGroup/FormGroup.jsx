import React, { useEffect, useState } from "react";
import { api } from "../../../API/api";
import Button from "../../Button/Button";
import TextInput from "../TextInput/TextInput";
import UploadInput from "../UploadInput/UploadInput";
import styles from "./FormGroup.module.scss";

const FormGroup = (props) => {
  const [form, setForm] = useState({});
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
    await api.signUp(form);
    await props.addNewUser();
    props.setRegistered(true);
  };

  useEffect(() => {
    (async function () {
      setPositions(await api.getPositions());
    })();
  }, []);

  return (
    <>
      <h1>Working with POST request</h1>
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
                  <input
                    type="radio"
                    name="position_id"
                    id={position.id}
                    value={position.name}
                    checked={index === 0}
                    onChange={handleChange}
                  />
                  <label htmlFor={position.id}>
                    <p>{position.name}</p>
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
      <div onClick={() => signUp()}>
        <Button value={"Sign up"} disabled={validatedInputs.length !== 4} />
      </div>
    </>
  );
};

export default FormGroup;
