const jadwal = [
  {
    hari: "Senin",
    mapel: ["AGAMA","SEJ. WAJIB (Minum)", "EKONOMI", "PULANG :v"],
  },
  {
    hari: "Selasa",
    mapel: ["GEOGRAFI", "SBK", "SOSIOLOGI", "SEJ. MINAT"],
  },
  {
    hari: "Rabu",
    mapel: [
      "B.ING. WAJIB",
      "GEOGRAFI", 
      "MM", 
      "B.ING. MINAT"
     ], 

  },
  {
    hari: "Kamis",
    mapel: ["MM", "SEJ. MINAT", "EKONOMI,", "B.ING. MINAT"],
  },
  {
    hari: "Jum'at",
    mapel: ["PENJAS", "PKN", "B.INDONESIA],
  },
  {
    hari: "Sabtu",
    mapel: ["PENJAS", "B.INDONESIA", "PKW", "SOSIOLOGI"],
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
