import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";

import { addTech } from "~/store/modules/techs/actions";
import TechListTwo from "~/Components/TechListTwo";

jest.mock("react-redux");

describe("TechListTwo component", () => {
  it("should render tech list", () => {
    useSelector.mockImplementation(cb =>
      cb({
        techs: ["Node.js", "ReactJS"]
      })
    );

    const { getByText, getByTestId } = render(<TechListTwo />);

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByTestId("tech-list")).toContainElement(getByText("ReactJS"));
  });

  it("should be able to add new tech", () => {
    const { getByTestId, getByLabelText } = render(<TechListTwo />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    // expect(dispatch).toHaveBeenCalledWith({
    //   type: "ADD_TECH",
    //   payload: { tech: "Node.js" }
    // });

    expect(dispatch).toHaveBeenCalledWith(addTech("Node.js"));
  });
});
