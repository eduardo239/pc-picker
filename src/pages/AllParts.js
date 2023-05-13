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
  const [data, setData] = useState(null);
  const [result, setResult] = useState([]);

  const [manufacturerList, setManufacturerList] = useState([]);
  const [socketList, setSocketList] = useState([]);

  let search = useLocation().search;
  const type = new URLSearchParams(search).get("type");

  const handleQueryBy = async () => {
    const query = await getPartByCustomFields("AMD");
    setResult(query);
  };

  useEffect(() => {
    (async function loadParts() {
      const response = await getAllParts(type);
      setData(response);
    })();

    return () => {};
  }, [type]);

  return (
    <div className="flex">
      <div>
        <InputSearch placeholder="Busca" />
        <button>Buscar</button>

        {/* * * * */}
        <div onChange={handleQueryBy}>
          <GroupCheckbox
            label="Fabricante"
            list={processorByManufacturer}
            checkedList={manufacturerList}
            setCheckedList={setManufacturerList}
          />

          <GroupCheckbox
            label="Socket"
            list={processorBySocket}
            checkedList={socketList}
            setCheckedList={setSocketList}
          />
        </div>
      </div>

      <div className="topping">
        <input type="checkbox" id="topping" name="topping" value="Paneer" />
        Paneer
      </div>

      {/* * * * */}
      <div>
        <h2>All Parts</h2>
        <div>
          <Link to={`/parts?type=${PROCESSOR}`}>Processador</Link>{" "}
          <Link to={`/parts?type=${MOTHERBOARD}`}>PLaca-Mãe</Link>{" "}
          <Link to={`/parts?type=${RAM_MEMORY}`}>Memória Ram</Link>{" "}
        </div>

        <br />
        {result.length}
        {result.length === 0 && (
          <div>
            {data &&
              data.length > 0 &&
              data.map((item) => {
                return <PartItem key={item.id} data={item} />;
              })}
          </div>
        )}

        <div>
          {result &&
            result.length > 0 &&
            data.map((item) => {
              return <PartItem key={item.id} data={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default AllParts;
