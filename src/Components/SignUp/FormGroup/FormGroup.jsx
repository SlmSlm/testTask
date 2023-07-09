import React, { useEffect, useState } from "react";
import { api } from "../../../API/api";
import Button from "../../Button/Button";
import UploadInput from "../UploadInput/UploadInput";
import styles from "./FormGroup.module.scss";
import TextInput from "../TextInput/TextInput";

const FormGroup = (props) => {
  const [form, setForm] = useState({});
  const [positions, setPositions] = useState();

  const handleChange = (e) => {
    const target = e.target;
    const targetName = target.name;

    if (target.name === "position_id") {
      target.value = target.id;
    }

    setForm((form) => ({ ...form, [targetName]: target.value }));
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
            onChange={handleChange}
          />
          <TextInput
            type="email"
            name="email"
            placeholder="Email"
            value={form.email || ""}
            onChange={handleChange}
          />
          <label htmlFor="phone">
            <TextInput
              type="phone"
              name="phone"
              placeholder="Phone"
              value={form.phone || ""}
              onChange={handleChange}
            />
            <p>+38 (XXX) XXX - XX - XX</p>
          </label>
        </div>

        <div className={styles.positions}>
          <p>Select your position</p>
          {positions &&
            positions.map((position) => {
              return (
                <div className={styles.position} key={position.id}>
                  <input
                    type="radio"
                    name="position_id"
                    id={position.id}
                    value={position.name}
                    onChange={handleChange}
                  />
                  <label htmlFor={position.id}>
                    <p>{position.name}</p>
                  </label>
                </div>
              );
            })}
        </div>

        <UploadInput handleChange={handleChange} setForm={setForm} />
      </form>
      <div onClick={() => signUp()}>
        <Button value={"Sign up"} />
      </div>
    </>
  );
};

export default FormGroup;
