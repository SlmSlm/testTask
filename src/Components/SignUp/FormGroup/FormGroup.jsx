import React, { useEffect, useState } from "react";
import { api } from "../../../API/api";
import styles from "./FormGroup.module.scss";

const FormGroup = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [positions, setPositions] = useState();

  const handleChange = (e) => {
    const target = e.target;
    const targetName = target.name;

    setForm((form) => ({ ...form, [targetName]: target.value }));
  };

  useEffect(() => {
    (async function () {
      setPositions(await api.getPositions());
    })();
  }, []);

  return (
    <form action="">
      <div className={styles.textInputGroup}>
        <input
          type="name"
          name="name"
          placeholder="Your name"
          value={form.name || ""}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email || ""}
          onChange={handleChange}
        />
        <label htmlFor="phone">
          <input
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
                  name="position"
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

      <div className={styles.photoInput} style={{ marginBottom: "50px" }}>
        <label className={styles.fileInputLabel} for="fileUpload">
          Upload
        </label>
        <input type="file" id="fileUpload" />
        
      </div>
    </form>
  );
};

export default FormGroup;
