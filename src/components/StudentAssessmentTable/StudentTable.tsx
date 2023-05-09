import React from "react";

import type { StudentScore } from "./../../types/StudentScore";
import StudentRow from "./StudentRow";

type StudentTableProps = {
  students: StudentScore[];
};

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  return (
    <>
      <div className="mb-3 grid grid-cols-4 gap-x-3 px-3 text-xs md:grid-cols-5 md:text-sm">
        <div className="hidden md:block"></div>
        <div className="text-center">
          Aspek <br /> Penilaian 1
        </div>
        <div className="text-center">
          Aspek <br /> Penilaian 2
        </div>
        <div className="text-center">
          Aspek <br /> Penilaian 3
        </div>
        <div className="text-center">
          Aspek <br /> Penilaian 4
        </div>
      </div>
      <div className="space-y-2.5">
        {students.map((student, index) => {
          return <StudentRow key={index} student={student} />;
        })}
      </div>
    </>
  );
};

export default StudentTable;
