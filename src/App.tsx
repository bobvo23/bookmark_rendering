import "./styles.css";
import Ramen from "./components/Ramen";
import Sushi from "./components/Sushi";
import Asian from "./components/Asian";
import Bars from "./components/Bars";
import { Menu, MenuItem, Page } from "./components/Helpers";

import {
  useScrollSections,
  ScrollingProvider,
  Section
} from "react-scroll-section";

type SectionType = {
  id: string;
  label: string;
};

type Props = {
  sections: { [x: string]: SectionType };
};

function ProductPageNav({ sections }: Props) {
  const items = useScrollSections();
  return (
    <Menu>
      {items &&
        items.map(({ id, onClick }) => (
          <MenuItem key={id} onClick={onClick}>
            {sections[id]?.label}
          </MenuItem>
        ))}
    </Menu>
  );
}

export default function App() {
  const sections = {
    ramen: {
      id: "ramen",
      label: "Ramen"
    },
    sushi: {
      id: "sushi",
      label: "Sushi"
    },
    asian: {
      id: "asian",
      label: "Asian"
    },
    bars: {
      id: "bars",
      label: "Bars"
    }
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Vancouver Bookmarks</h1>
        <h2>2022 Vancouver City Guide</h2>
      </div>
      <h2>Quick Navigation</h2>
      <ScrollingProvider scrollBehavior="smooth">
        <ProductPageNav sections={sections} />
        <Section id={sections.ramen.id}>
          <h1 id="section1">Ramen </h1>
          <Ramen />
        </Section>
        <Section id={sections.sushi.id}>
          <h1 id="section2">Sushi</h1>
          <Sushi />
        </Section>
        <Section id={sections.asian.id}>
          <h1 id="section3">Asian</h1>
          <Asian />
        </Section>
        <Section id={sections.bars.id}>
          <h1>Bars</h1>
          <Bars />
        </Section>
        <footer>
          <p>Developed by bobvo23</p>
        </footer>
      </ScrollingProvider>
    </div>
  );
}