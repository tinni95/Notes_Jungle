import { shallow } from "enzyme";
import React from "react";
import ItemModule from "./single-item-module.component";

describe("with valid title", () => {
  const title = "title";
  const Item = shallow(<ItemModule title={title} />);
  it("expect to render ", () => {
    expect(Item.isEmptyRender()).toBe(false);
    expect(Item).toMatchSnapshot();
  });
});

describe("with invalid title", () => {
  const title = "";
  const Item = shallow(<ItemModule title={title} />);
  it("expect to render ", () => {
    expect(Item.isEmptyRender()).toBe(true);
    expect(Item).toMatchSnapshot();
  });
});
