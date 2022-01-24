const jadwal = [
  {
    hari: "Senin",
    mapel: [null, "Agama ×3", "Sej. Wajib ×2", "Ekonomi ×2", "-"],
  },
  {
    hari: "Selasa",
    mapel: ["BAHASA INGGRIS", "SEJARAH WAJIB", "LINTAS MINAT"],
  },
  {
    hari: "Rabu",
    mapel: [
      "BIOLOGI / SOSIOLOGI",
      "AGAMA"
    ],
  },
  {
    hari: "Kamis",
    mapel: ["MTK WAJIB", "PJOK", "PKW"],
  },
  {
    hari: "Jum'at",
    mapel: [null, "FISIKA / SEJARAH MINAT", "SENI BUDAYA"],
  },
  {
    hari: "Sabtu",
    mapel: [null, "KIMIA / EKONOMI", "PKN"],
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
