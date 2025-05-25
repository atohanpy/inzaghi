export default async function handler(req, res) {
  try {
    const r = await fetch("http://api.prymx.fun/apiler/adsoyad.php?ad=roket&soyad=atar&il=bursa");
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "veri alınamadı" });
  }
}
