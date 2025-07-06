export default function Home() {
  const [data] = React.useState({
    /* 
    Örnek veri, bu kısmı gerçek veriye bağlamak için backend gerekebilir.
    Şimdilik admin güncellemeleri Vercel üzerinde kalacak,  
    gerçek projede veritabanı veya API gerekir.
    */
    "1": { seri: 3, lastDate: "2025-07-05" },
    "2": { seri: 1, lastDate: "2025-07-05" },
    "5": { seri: 4, lastDate: "2025-07-05" },
  });

  const sorted = Object.entries(data).sort((a, b) => b[1].seri - a[1].seri);

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>🔥 Yayıkçı Seri Takip</h1>
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

