import React from "react";
import { getByText, render, screen } from '@testing-library/react';
import Home from "../Components/Home";

describe("Projects", () => {
    const { asFragment } = render(<Home />);

    it("renders correctly", ()=>{
        expect(asFragment()).toMatchSnapshot();
    });


});