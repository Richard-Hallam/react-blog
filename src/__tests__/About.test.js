import React from "react";
import { getByText, render, screen } from '@testing-library/react';
import About from "../Components/About";

describe("Projects", () => {
    const { asFragment } = render(<About />);

    it("renders correctly", ()=>{
        expect(asFragment()).toMatchSnapshot();
    });


});