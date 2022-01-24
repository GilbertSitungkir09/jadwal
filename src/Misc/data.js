const jadwal = [
  {
    hari: "Senin",
    mapel: [null, "AGAMA", "SEJ. WAJIB (MINUM)", "EKONOMI", "PULANG :V"],
  },
  {
    hari: "Selasa",
    mapel: ["GEOGRAFI", "SBK", "SOSIOLOGI", "SEJ. PEMINATAN"],
  },
  {
    hari: "Rabu",
    mapel: [
      "B.ING. PEMINATAN",
      "GEOGRAFI",
      "MM",
      "B.ING. WAJIB"
    ],
  },
  {
    hari: "Kamis",
    mapel: ["MM", "SEJ. PEMINATAN", "EKONOMI", "B.ING. PEMINATAN"],
  },
  {
    hari: "Jum'at",
    mapel: [null, "PENJAS (MINUM)", "PKN", "B.INDONESIA"],
  },
  {
    hari: "Sabtu",
    mapel: [null, "PENJAS", "B.INDONESIA", "PKW", "SOSIOLOGI"],
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
