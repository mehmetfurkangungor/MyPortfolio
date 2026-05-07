# MyPortfolio

Modern, koyu temalı kişisel portfolyo sitesi.

## İçerik

- Video prodüksiyon, sosyal medya ve dijital içerik üretimi odaklı hero alanı
- Hakkımda, deneyimler, ekipmanlar ve program bilgisi bölümleri
- Kategori filtreli portfolyo sistemi
- Google Drive medya embed alanları
- Belgesel ve marka iş örnekleri
- Responsive Next.js + Tailwind CSS yapı

## Proje Verisi

Portfolyo kartları tek dosyadan yönetilir:

```txt
src/data/portfolioData.ts
```

Yeni proje eklemek için bu dosyadaki `projects` dizisine yeni kayıt eklemek yeterlidir.

## UI Component Yapısı

Arayüz parçaları component bazlı düzenlenmiştir:

```txt
src/components/portfolio/
```

Bu klasörde hero section, portfolio grid, category filter sistemi, experience timeline, equipment cards, skills/tools section, social media knowledge cards ve contact section ayrı componentler olarak tutulur.

## Magic MCP

21st-dev Magic MCP, bu projede zorunlu runtime bağımlılığı değildir. Geliştirme sırasında modern UI component üretimini hızlandırmak için yardımcı araç olarak kullanılabilir. Kurulum notları:

```txt
docs/magic-mcp-setup.md
```

## Geliştirme

```bash
npm install
npm run dev
```

Production kontrolü:

```bash
npm run build
```
