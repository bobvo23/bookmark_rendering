import React from "react";
import { SectionLink } from "react-scroll-section";
import styled from "styled-components";

const Item = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  padding: 40px 10px;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
  color: ${(props) => (props.selected ? "#07689f" : "inherit")};
  border-top: 5px solid
    ${(props) => (props.selected ? "#ff7e67" : "transparent")};
`;

const MenuItem = ({ section, children }) => (
  <SectionLink section={section}>
    {(link) => (
      <div onClick={link.onClick} selected={link.isSelected}>
        {children}
      </div>
    )}
  </SectionLink>
);

export { MenuItem as Item };

export default styled;
