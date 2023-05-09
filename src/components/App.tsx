import { useState } from "react";

import Container from "./Container";
import StudentAssessmentTable from "./StudentAssessmentTable/StudentAssessmentTable";

import type { StudentScore } from "./../types/StudentScore";

import generateJSON from "../utils/generateJSON";

import AppContext from "../context/AppContext";
import Toast from "./Toast/Toast";

const App = () => {
  const initialStudent = new Array(10).fill(0).map((_, index) => {
    return {
      name: `mahasiswa_${index + 1}` as string,
      scores: [
        {
          name: "aspek-penilaian-1",
          value: 1,
        },
        {
          name: "aspek-penilaian-2",
          value: 1,
        },
        {
          name: "aspek-penilaian-3",
          value: 1,
        },
        {
          name: "aspek-penilaian-4",
          value: 1,
        },
      ],
    };
  });

  const [students, setStudents] = useState<StudentScore[]>(
    initialStudent as unknown as StudentScore[]
  );

  const [isShow, setIsShow] = useState<boolean>(false);

  const appContextValue = {
    students,
    setStudents,
  };

  const onClickHandler = () => {
    setIsShow(true);

    generateJSON(students);
  };

  return (
    <>
      <Toast isShow={isShow} setIsShow={setIsShow} />

      <AppContext.Provider value={appContextValue}>
        <Container>
          <div className="shrink-0 py-3">
            <div className="mb-3 text-2xl font-medium">
              Aplikasi Penilaian Mahasiswa
            </div>

            <StudentAssessmentTable.Table students={students} />

            <div className="mt-3 hidden flex-row-reverse lg:flex ">
              <button
                className="flex items-center justify-center bg-black px-5 py-2 text-white duration-200 hover:bg-gray-600"
                onClick={onClickHandler}
              >
                Simpan
              </button>
            </div>
          </div>
        </Container>

        <div className="sticky bottom-0 border-t bg-white p-3 lg:hidden">
          <button
            className="flex w-full items-center justify-center bg-black px-4 py-2 text-white duration-200 hover:bg-gray-600"
            onClick={onClickHandler}
          >
            Simpan
          </button>
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
