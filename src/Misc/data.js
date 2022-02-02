const jadwal = [
  {
    hari: "Senin",
    mapel: ["SOSIOLOGI","SOSIOLOGI"],
  },
  {
    hari: "Selasa",
    mapel: ["Geografi", "Geografi"],
  },
  {
    hari: "Rabu",
    mapel: [
      "B.INDONESIA",
      "B.INGGRIS"
     ], 

  },
  {
    hari: "Kamis",
    mapel: ["EKONOMI", "EKONOMI"],
  },
  {
    hari: "Jum'at",
    mapel: ["MM", " MM"],
  },
  {
    hari: "Sabtu",
    mapel: ["D RMH AJA"],
  },
];

const longest = jadwal
  .map(({ mapel }) => mapel.length)
  .sort((a, b) => b - a)[0];
const newArray = Array.from(new Array(longest));

export default jadwal;
export const columnRemap = newArray.map((_, idx) =>
  jadwal.map((data) => ({
    mapel: data.mapel[idx],
    index: jadwal.findIndex((x) => x.hari === data.hari) + 1,
  }))
);
