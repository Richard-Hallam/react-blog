import React from "react";
import { getByText, render, screen } from '@testing-library/react';
import Projects from "../Components/Projects";

describe("Projects", () => {
    const { asFragment } = render(<Projects />);

    it("renders correctly", ()=>{
        expect(asFragment()).toMatchSnapshot();
    });


});