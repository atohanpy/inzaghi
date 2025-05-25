export default async function handler(req, res) {
  try {
    const response = await fetch('http://darknexusapisystems.unaux.com/diger/memolog/log.php?site=exxen.com');
    const text = await response.text();

    // Satırları ayır ve "@MemoxVipOrj" içermeyenleri filtrele
    const hesaplar = text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.includes('@MemoxVipOrj'));

    res.status(200).json({
      message: 'telegram @wazelybaba',
      hesap_sayisi: hesaplar.length,
      hesap: hesaplar.join('\n')
    });
  } catch (error) {
    res.status(500).json({ message: 'Veri çekilemedi' });
  }
              }
