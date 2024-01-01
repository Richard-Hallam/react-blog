import React from "react";
import { render } from '@testing-library/react';
import BlogPosts from "../Components/blogPosts/BlogPosts";

describe("Projects", () => {
    const { asFragment } = render(<BlogPosts />);

    it("renders correctly", ()=>{
        expect(asFragment()).toMatchSnapshot();
    });


});