import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Category from "./Category";
import "./styles.css";
import "react-tabs/style/react-tabs.css";
import { categoriesRequest } from "../../store/category/actions";

const Categories = ({ filter }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(categoriesRequest());
  }, []);

  return (
    <div className="categories">
      {categories.length ? (
        <Tabs selected={0}>
          <TabList>
            {categories.map((category) => (
              <Tab key={category.id}>{category.nome.toUpperCase()}</Tab>
            ))}
          </TabList>
          {categories.map((category) => (
            <TabPanel key={category.nome}>
              <Category category={category} filter={filter} />
            </TabPanel>
          ))}
        </Tabs>
      ) : (
        "Carregando"
      )}
    </div>
  );
};

export default Categories;
