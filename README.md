# 🌍 GezgiNova — Türk Gezginler için Akıllı Seyahat Planlayıcı

**GezgiNova**, Türk pasaportu sahipleri için özel olarak tasarlanmış interaktif bir seyahat keşif ve rota planlama uygulamasıdır.

## ✨ Özellikler

### 🗺️ İnteraktif Vize Haritası
- D3 tabanlı dünya haritası üzerinde tüm ülkelerin vize durumları (Vizesiz, E-Vize, Kapıda Vize, Vize Gerekli)
- Ülkelere tıklayarak detaylı bilgi paneli (başkent, para birimi, günlük bütçe, popüler şehirler)

### 🧭 Akıllı Rota Planlayıcı
- 5 adımlı sihirbaz: Kalkış Şehri → Seyahat Tarzı → Süre & Ay → Bütçe → Vize Tercihi
- **Local** (yerel gibi yaşa) ve **Gezgin** (turist tarzı) olmak üzere 2 bütçe kategorisi
- Mevsimselliğe duyarlı dinamik uçak bileti API simülasyonu
- Tek ülke ve çoklu ülke (küme) rota önerileri
- Gerçek zamanlı USD/TRY döviz kuru entegrasyonu

### 📊 Passport Wrapped
- Yıllık seyahat özeti ve istatistikler
- Rozet sistemi ve gezilen ülke takibi
- Seyahat geçmişi yönetimi

## 🛠️ Teknoloji

- **Framework:** Next.js 16 (App Router)
- **Frontend:** React 19, Lucide Icons, Recharts
- **Harita:** react-simple-maps + D3-geo
- **Auth:** NextAuth.js + Prisma (SQLite)
- **Veri:** 170+ ülke, 2024-2025 güncel maliyet verileri (USD)

## 🚀 Kurulum

```bash
npm install
npx prisma generate
npm run dev
```

## 📁 Proje Yapısı

```
app/              # Next.js App Router sayfaları ve API rotaları
  api/flights/    # Dinamik uçak bileti fiyatlandırma API'si
  api/exchange-rate/ # Canlı döviz kuru
src/
  components/     # React bileşenleri (Map, Planner, Country, Auth, Wrapped)
  data/           # Ülke veritabanı, uçuş fiyatları, kümeler
  utils/          # Maliyet hesaplama ve skorlama algoritmaları
  views/          # Sayfa görünümleri
```

## 📝 Lisans

MIT
