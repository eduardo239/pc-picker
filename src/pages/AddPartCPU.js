import React, { useState } from "react";
import InputText from "../components/form/InputText";
import { addPart } from "../helper/api_parts";
import InputSelect from "../components/form/InputSelect";
import { PROCESSOR } from "../helper/constants";

const AddPart = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    title: "Processador AMD Ryzen 9 5950X 3.4 GHz 16-Core",
    manufacturer: "AMD",
    model: "Ryzen 9 5950X",
    socket: "AM4",
    frequency: "3.9 GHz",
    frequencyTurbo: "4.9 GHz",
    cores: "16",
    threads: "32",
    query: PROCESSOR,
  });

  const [file, setFile] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const handleImageOnChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <h4>Processador</h4>

      <form>
        <InputText
          id="title"
          label="Título"
          type="text"
          placeholder="Memória Kingston Fury Beast 16 GB (1x16 GB) DDR4-3200"
          onChange={(e) => setData({ ...data, title: e.target.value })}
          value={data.title ? data.title : ""}
        />

        <InputText
          id="manufacturer"
          label="Fabricante"
          type="text"
          placeholder="Gigabyte"
          onChange={(e) => setData({ ...data, manufacturer: e.target.value })}
          value={data.manufacturer ? data.manufacturer : ""}
        />

        <InputSelect
          id="speed"
          label="Socket do processador"
          onChange={(e) => setData({ ...data, socket: e.target.value })}
          items={["AM4", "AM5", "LGA 1700"]}
        />

        <InputText
          id="type"
          label="Frequência"
          type="text"
          placeholder="3.4 GHz"
          onChange={(e) => setData({ ...data, frequency: e.target.value })}
          value={data.frequency ? data.frequency : ""}
        />

        <button
          onClick={(e) => addPart(e, file, data, setLoading, setError, "cpu")}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddPart;
