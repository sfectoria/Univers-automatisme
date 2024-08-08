
import { configureStore } from "@reduxjs/toolkit";

import sections from "./sections";

export const store=configureStore({
    reducer:{sections,},
})