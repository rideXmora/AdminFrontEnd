import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Register from './pages/Register';


describe('Register', ()=>{
    test("Login function should pass on correct input", ()=>{
        const text = 'text@text.com';
        expect(Register(text).toBe(true));
    });
     test("Login function should pass on incorrect input", ()=>{
        const text = 'text@text.com';
        expect(Register(text).not.toBe(true));
     });
});
