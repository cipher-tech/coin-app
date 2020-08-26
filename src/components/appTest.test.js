import {shallow,mount,render} from "enzyme"
import React from 'react';

import { Navbar } from ".";
// import { isTag } from "postscribe";

it('test navbar', () => {
    expect(shallow(<Navbar/>).length).toEqual(1)
})
// console.log());