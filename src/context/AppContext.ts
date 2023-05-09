/* eslint-disable @typescript-eslint/no-empty-function */
import { Dispatch, createContext, SetStateAction } from "react";

import type { StudentScore } from "../types/StudentScore";

export type AppContextProps = {
  students: StudentScore[];
  setStudents: Dispatch<SetStateAction<StudentScore[]>>;
};

const AppContext = createContext<AppContextProps>({
  students: [],
  setStudents: () => {},
});

export default AppContext;
