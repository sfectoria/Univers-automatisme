import { configureStore } from "@reduxjs/toolkit";
import contents from "./contents";

export const store=configureStore({
    reducer:{contents,},
})