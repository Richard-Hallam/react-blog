import React from "react";
import { render, screen } from '@testing-library/react';
import Navbar from "../Components/NavBar";


describe("Navbar", () => {
    const { asFragment } = render(<Navbar />);

    it("renders correctly", ()=>{
        expect(asFragment()).toMatchSnapshot();
    });
});