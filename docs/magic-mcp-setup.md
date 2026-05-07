# Magic MCP Kurulum Notları

Bu proje Magic MCP'ye çalışma zamanı bağımlılığı duymaz. Site normal bir Next.js + Tailwind CSS projesi olarak çalışır. Magic MCP sadece geliştirme sırasında modern UI component üretimini hızlandırmak için kullanılacak yardımcı bir araçtır.

Kaynak repo:

```txt
https://github.com/21st-dev/magic-mcp
```

## 1. API Key Oluştur

21st.dev Magic Console üzerinden bir API key oluştur. API key'i repoya, koda veya GitHub'a yazma.

## 2. CLI ile Kurulum

Kullandığın MCP istemcisine göre komutu çalıştır:

```bash
npx @21st-dev/cli@latest install cursor --api-key YOUR_API_KEY
npx @21st-dev/cli@latest install windsurf --api-key YOUR_API_KEY
npx @21st-dev/cli@latest install cline --api-key YOUR_API_KEY
npx @21st-dev/cli@latest install claude --api-key YOUR_API_KEY
```

`YOUR_API_KEY` yerine gerçek anahtarını sadece lokal terminalde kullan.

## 3. Manuel MCP Config

Kullandığın IDE veya agent aracı manuel MCP config istiyorsa şu yapıyı ekleyebilirsin:

```json
{
  "mcpServers": {
    "@21st-dev/magic": {
      "command": "npx",
      "args": ["-y", "@21st-dev/magic@latest"],
      "env": {
        "API_KEY": "${MAGIC_MCP_API_KEY}"
      }
    }
  }
}
```

Ardından API key'i lokal environment variable olarak tanımla.

PowerShell:

```powershell
[Environment]::SetEnvironmentVariable("MAGIC_MCP_API_KEY", "YOUR_API_KEY", "User")
```

Geçerli terminal oturumu için:

```powershell
$env:MAGIC_MCP_API_KEY="YOUR_API_KEY"
```

## 4. Config Dosyası Konumları

Magic MCP README bilgisinde yaygın config konumları şu şekilde geçer:

```txt
Cursor:   ~/.cursor/mcp.json
Windsurf: ~/.codeium/windsurf/mcp_config.json
Cline:    ~/.cline/mcp_config.json
Claude:   ~/.claude/mcp_config.json
```

Codex Desktop içinde doğrudan bu MCP aracı bu oturumda yüklü değilse site yine çalışmaya devam eder. Componentleri Magic ile üretip sonrasında `src/components/portfolio/` altına normal React componentleri olarak ekleyebilirsin.

## 5. Bu Projedeki Component Hedefleri

Magic MCP ile üretilecek veya iyileştirilecek parçalar için mevcut dosya karşılıkları:

```txt
src/components/portfolio/HeroSection.tsx
src/components/portfolio/PortfolioGrid.tsx
src/components/portfolio/ExperienceTimeline.tsx
src/components/portfolio/EquipmentSection.tsx
src/components/portfolio/ServicesSection.tsx
src/components/portfolio/KnowledgeSections.tsx
src/components/portfolio/ContactSection.tsx
```

Yeni component üretirken:

- Next.js App Router uyumlu React component yaz.
- Tailwind CSS kullan.
- Koyu, sinematik, premium ve responsive tasarım dilini koru.
- Gizli anahtar veya token ekleme.
- Magic MCP çıktısını proje bağımlılığına çevirmeden normal `.tsx` component olarak kaydet.
