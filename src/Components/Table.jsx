import styles from "./Table.module.css";
import data, { columnRemap } from "../Misc/data";

const Table = ({ currentDayIndex, nextDay }) => (
  <>
    <div>
      <h1 className={styles.center}>Jadwal Mapel XII IPS 1</h1>
    </div>
    <div className={styles.scrollableHorizontal}>
      <table className={`primary ${styles.table}`}>
        <thead>
          <tr>
            <For each={data.map(({ hari }) => hari)}>
              {(item) => <th className={styles.center}>{item}</th>}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={data.map((_, idx) => idx)}>
            {(index) => (
              <tr className={styles.center}>
                <For each={columnRemap[index]}>
                  {(mataPelajaran) => (
                    <td
                      className={
                        mataPelajaran.index === currentDayIndex()
                          ? styles.highlighted
                          : mataPelajaran.index === nextDay()
                          ? styles.highlightedNextDay
                          : ""
                      }
                    >
                      {mataPelajaran.mapel === null ? "" : mataPelajaran.mapel}
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  </>
);

export default Table;
