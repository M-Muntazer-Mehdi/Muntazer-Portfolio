/* Education.
   ------------------------------------------------------------------
   Taken from the previous site's resume section, which Muntazer wrote.
   Spans are real years, and the section renders them proportionally —
   the degree is twice the width of the two stages before it because it
   took twice as long.

   The Teaching Assistant roles sit inside the degree span rather than in
   a list of their own: he taught the subject while he was studying it.
   They also appear in the Experience register, where the dates are
   backed by the signed letters. */

export const EDUCATION = {
  from: 2016,
  to: 2024,
  stages: [
    {
      id: "secondary",
      from: 2016,
      to: 2018,
      award: "Secondary School",
      place: "Govt Farooq High School",
      city: "Faisalabad",
    },
    {
      id: "fsc",
      from: 2018,
      to: 2020,
      award: "FSc Pre-Engineering",
      place: "Kips College",
      city: "Faisalabad",
      note: "Mathematics, physics, chemistry",
      /* Carried over from the previous site's achievements block, which he
         wrote. Sits at the FSc/degree boundary because that is what it is:
         the entrance exam that decided where the degree happened. */
      mark: { label: "UET-ECAT 2020", value: "Ranked 156th \u2014 top 200" },
    },
    {
      id: "bs",
      from: 2020,
      to: 2024,
      award: "BS Software Engineering",
      place: "FAST — National University of Computer and Emerging Sciences",
      city: "Faisalabad",
      lead: true,
      inside: [
        { year: "2022", label: "Lab TA — Database Management" },
        { year: "2023", label: "Teaching Assistant — Mobile & Devices" },
      ],
    },
  ],
};
