import React from "react";
import { getByText, render, screen } from '@testing-library/react';
import Navbar from "../Components/mainPage/NavBar";


describe("Navbar", () => {
    const { asFragment } = render(<Navbar />);

    it("renders correctly", ()=>{
        expect(asFragment()).toMatchSnapshot();
    });


});