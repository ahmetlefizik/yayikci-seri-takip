import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = () => {
    const numbers = input
      .split(",")
      .map((n) => n.trim())
      .filter((n) => n !== "");

    const updated = { ...data };

    // Güncelleme
    Object.keys(updated).forEach((num) => {
      if (numbers.includes(num)) {
        updated[num].seri += 1;
        updated[num].lastDate = today;
      } else {
        const last = updated[num].lastDate;
        if (last !== today) {
          updated[num].seri = 0;
        }
      }
    });

    // Yeni gelenler
    numbers.forEach((num) => {
      if (!updated[num]) {
        updated[num] = {
          seri: 1,
          lastDate: today,
        };
      }
    });

    setData(updated);
    setInput("");
  };

  const sorted = Object.entries(data).sort((a, b) => b[1].seri - a[1].seri);

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>🔥 Yayıkçı Seri Takip Sistemi</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <input
          style={{ flex: 1, padding: 8, fontSize: 16 }}
          type="text"
          placeholder="1,2,3,5,7"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{ padding: "8px 16px", fontSize: 16, cursor: "pointer" }}
          onClick={handleSubmit}
        >
          Güncelle
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #000" }}>
            <th style={{ textAlign: "left", padding: 8 }}>#</th>
            <th style={{ textAlign: "left", padding: 8 }}>Numara</th>
            <th style={{ textAlign: "left", padding: 8 }}>Seri (🔥)</th>
            <th style={{ textAlign: "left", padding: 8 }}>Son Katıldığı Gün</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(([num, val], index) => (
            <tr key={num} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: 8 }}>{index + 1}</td>
              <td style={{ padding: 8 }}>{num}</td>
              <td style={{ padding: 8 }}>{val.seri}</td>
              <td style={{ padding: 8 }}>{val.lastDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
