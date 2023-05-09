import React, { useContext } from "react";

import type { StudentScore } from "./../../types/StudentScore";

import Select from "../Select/Select";
import AppContext from "../../context/AppContext";

type StudentRowProps = {
  student: StudentScore;
};

const StudentRow: React.FC<StudentRowProps> = ({ student }) => {
  const { setStudents } = useContext(AppContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStudents((prev) => {
      const newStudents = [...prev];

      const studentIndex = newStudents.findIndex(
        (findStudent) => student.name === findStudent.name
      );

      const scoreIndex = newStudents[studentIndex].scores.findIndex(
        (findScore) => findScore.name === e.target.name
      );

      newStudents[studentIndex].scores[scoreIndex].value = Number(
        e.target.value
      );

      return newStudents;
    });
  };

  const formatName = (name: string) => {
    return `${
      name.split("_")[0].charAt(0).toUpperCase() + name.split("_")[0].slice(1)
    } ${name.split("_")[1]}`;
  };

  return (
    <div className="grid grid-cols-4 items-center gap-x-3 gap-y-2 rounded border p-2 text-sm md:grid-cols-5 lg:gap-y-0">
      <div className="col-span-4 flex items-center lg:col-span-1">
        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="">{formatName(student.name)}</div>
      </div>

      {student.scores.map((score, index) => {
        return (
          <Select
            key={index}
            name={score.name}
            value={score.value}
            onChangeHandler={onChangeHandler}
          />
        );
      })}
    </div>
  );
};

export default StudentRow;
