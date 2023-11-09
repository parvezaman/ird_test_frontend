import React from "react";
import PropTypes from "prop-types";
import TopBar from "../TopBar/TopBar";
import CategoryLine from "../CategoryLine/CategoryLine";
import DuaBody from "../DuaBody/DuaBody";

function MidSection(props: any) {
  return (
    <div className="w-3/4 ml-28">
      <TopBar />

      <section className="flex justify-between gap-x-4">
        <CategoryLine />
        <DuaBody />
      </section>
    </div>
  );
}

MidSection.propTypes = {};

export default MidSection;
