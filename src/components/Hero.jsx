import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProperties } from "../redux/propertySlice";
import "../styles/hero.css";

const Hero = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.properties.data);
  const status = useSelector((state) => state.properties.status);
  const error = useSelector((state) => state.properties.error);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedType, setSelectedType] = useState("Select a option");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProperties());
    }
  }, [status, dispatch]);

  useEffect(() => {
    setFilteredData(data); // Set initial data to the fetched data
  }, [data]);

  const handleFilter1 = () => {
    const filtered = data.filter((item) => item.price <= 10000);
    setFilteredData(filtered);
  };
  const handleFilter2 = () => {
    const filtered = data.filter((item) => item.price > 10000);
    setFilteredData(filtered);
  };
  const handleFilter3 = () => {
    const filtered = data.filter((item) => item.price > 20000);
    setFilteredData(filtered);
  };
  const removeFilter = () => {
    setFilteredData(data);
    setSelectedType("Select a Option");
  };
  const handleOption = (e) => {
    const option = e.target.value;
    setSelectedType(option);
    if (option) {
      const filtered = data.filter((item) => item.category === option);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div style={{ minHeight: "85vh" }}>
      <div className="heading">
        <h3>
          <center>Our Products on Demand</center>
        </h3>
      </div>
      <div className="main-container">
        <div className="search-buttons">
          <button onClick={handleFilter1}>Under $10,000</button>
          <button onClick={handleFilter2}>Above $10,000</button>
          <button onClick={handleFilter3}>Above $20,000</button>
          <select name="Property" value={selectedType} onChange={handleOption}>
            <option value="">Select a Option</option>
            <option value="Flat">Flat</option>
            <option value="Bunglow">Bunglow</option>
            <option value="Residential">Residential</option>
            <option value="Shop">Shop</option>
            <option value="Commercial">Commercial</option>
          </select>
          <button onClick={removeFilter}>X</button>
        </div>

        {status === "loading" && <div>Loading...</div>}
        {status === "failed" && <div>Error: {error}</div>}
        {status === "succeeded" && (
          <div className="grid-container">
            {filteredData.map((item) => (
              <div key={item.id} className="card-container">
                <Link className="none" to={`/product/${item.id}`}>
                  <div className="card-body">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <p>
                      <center>{item.title}</center>
                    </p>
                    <br />
                    <p>
                      <center>Price:{item.price}$</center>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
