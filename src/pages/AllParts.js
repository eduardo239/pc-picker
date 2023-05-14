import React, { useEffect, useState } from "react";
import { getAllParts, getPartByCustomFields } from "../helper/api_parts";
import PartItem from "../components/parts/PartItem";
import { MOTHERBOARD, PROCESSOR, RAM_MEMORY } from "../helper/constants";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import InputSearch from "../components/form/InputSearch";
import GroupCheckbox from "../components/form/GroupCheckbox";
import { processorByManufacturer, processorBySocket } from "../helper/lists";

const AllParts = () => {
  const [data, setData] = useState([]);

  const [manufacturerList, setManufacturerList] = useState([]);
  const [socketList, setSocketList] = useState([]);

  let search = useLocation().search;
  const type = new URLSearchParams(search).get("type");

  useEffect(() => {
    if (data.length === 0) {
      (async function loadAllData() {
        const response = await getAllParts(type);
        setData(response ? response : []);
      })();
    } else {
      (async function loadData() {
        if (socketList.length > 0 || manufacturerList.length > 0) {
          const response = await getPartByCustomFields(socketList);
          console.log(response);
        }
      })();
    }
    return () => {};
  }, [type, manufacturerList, socketList]);

  return (
    <div className="flex">
      <div>
        <InputSearch placeholder="Busca" />
        <button>Buscar</button>

        <div>
          <GroupCheckbox
            label="Fabricante"
            list={processorByManufacturer}
            selectedFields={manufacturerList}
            setSelectedFields={setManufacturerList}
          />

          <GroupCheckbox
            label="Socket"
            list={processorBySocket}
            selectedFields={socketList}
            setSelectedFields={setSocketList}
          />
        </div>
      </div>

      <div>
        <h2>Peças: {type ? type : ""}</h2>
        <div>
          <Link to={`/parts?type=${PROCESSOR}`}>Processador</Link>{" "}
          <Link to={`/parts?type=${MOTHERBOARD}`}>PLaca-Mãe</Link>{" "}
          <Link to={`/parts?type=${RAM_MEMORY}`}>Memória Ram</Link>{" "}
        </div>

        <br />

        <div>
          {data && data.length > 0 ? (
            data.map((item) => {
              return <PartItem key={item.id} data={item} />;
            })
          ) : (
            <div>Resultados não encontrados.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllParts;
