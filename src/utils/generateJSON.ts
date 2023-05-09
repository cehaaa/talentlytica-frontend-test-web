import type { StudentScore } from "../types/StudentScore";

const generateJSON = (students: StudentScore[]) => {
  const assessmentAspect: { [key: string]: { [key: string]: number } } = {
    "aspek-penilaian-1": {},
    "aspek-penilaian-2": {},
    "aspek-penilaian-3": {},
    "aspek-penilaian-4": {},
  };

  students.forEach((student) => {
    student.scores.forEach((score) => {
      assessmentAspect[score.name] = {
        ...assessmentAspect[score.name],
        [student.name]: score.value,
      };
    });
  });

  console.log(assessmentAspect);
};

export default generateJSON;
