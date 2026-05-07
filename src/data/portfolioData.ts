export type MediaType = "drive" | "image" | "video" | "placeholder";

export type Project = {
  title: string;
  category: string;
  description: string;
  role: string;
  tools: string[];
  year: string;
  mediaType: MediaType;
  driveEmbedUrl: string;
  externalUrl: string;
  thumbnailUrl: string;
  tags: string[];
};

export const portfolioCategories = [
  "Tüm İşler",
  "Ajans İşleri",
  "Okul Projeleri",
  "Belgesel",
  "Sosyal Medya İçerikleri",
  "Diş Kliniği Çekimleri",
  "Prefabrik / Fabrika Çekimleri",
  "Büfe / Yemek İçerikleri",
  "T-shirt / E-ticaret İçerikleri",
  "Reels Videoları",
];

export const projects: Project[] = [
  {
    title: "Dijital Çağda Emek: Babadan Oğula Tornacılık",
    category: "Belgesel",
    description:
      "Sanayi ortamında emek, zanaat ve baba-oğul meslek aktarımını dijital çağ perspektifiyle anlatan kısa belgesel.",
    role: "Yönetmenlik, çekim, röportaj, kurgu, görsel anlatı ve proje tasarımı",
    tools: ["Sony A7S3", "Premiere Pro", "Rode / yaka mikrofon", "Google Drive"],
    year: "2026",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["belgesel", "sanayi", "zanaat", "emek"],
  },
  {
    title: "Diş Kliniği Reels Çekim ve Kurgu",
    category: "Diş Kliniği Çekimleri",
    description:
      "Klinik atmosferini güven veren bir dille aktaran, sosyal medya formatına uygun kısa video içerikleri.",
    role: "Çekim, kurgu, reels formatlama ve yayın akışı desteği",
    tools: ["Sony A7S3", "Gimbal", "Premiere Pro", "CapCut"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["reels", "saglik", "klinik", "kurgu"],
  },
  {
    title: "Prefabrik Fabrika Tanıtım Videosu",
    category: "Prefabrik / Fabrika Çekimleri",
    description:
      "Üretim alanı, iş akışı ve marka güvenini öne çıkaran fabrika tanıtım videosu kurgusu.",
    role: "Çekim planı, saha çekimi, kurgu ve marka anlatımı",
    tools: ["Sony A7S3", "24-70mm GM II", "DJI RS serisi", "Premiere Pro"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["fabrika", "tanitim", "uretim", "kurumsal"],
  },
  {
    title: "Büfe Yemek Ürün Çekimi",
    category: "Büfe / Yemek İçerikleri",
    description:
      "Yemek ürünlerini hızlı, istek uyandıran ve sosyal medya akışına uygun ritimde gösteren içerikler.",
    role: "Çekim, ürün kadrajı, kurgu ve sosyal medya uyarlaması",
    tools: ["Işık ekipmanları", "CapCut", "Premiere Pro"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["yemek", "urun", "reels", "sosyal medya"],
  },
  {
    title: "Raptyle T-shirt Ürün Tanıtım İçerikleri",
    category: "T-shirt / E-ticaret İçerikleri",
    description:
      "T-shirt ürünleri için satış odaklı görsel dil, reels kurgusu ve pazaryeri mantığına uygun içerik serisi.",
    role: "Ürün içeriği, reels, görsel hazırlama ve satış odaklı anlatım",
    tools: ["Photoshop", "Canva", "CapCut", "Trendyol"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["e-ticaret", "t-shirt", "urun", "pazaryeri"],
  },
  {
    title: "Sosyal Medya Akış ve İçerik Planlama Çalışması",
    category: "Sosyal Medya İçerikleri",
    description:
      "Marka dili, hedef kitle, paylaşım sıklığı ve kreatif formatları bir araya getiren içerik planı.",
    role: "İçerik fikri, akış planlama, yayın takvimi ve kreatif kurgu",
    tools: ["Meta Business Suite", "Instagram", "Canva", "Google Drive"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["planlama", "instagram", "marka", "icerik"],
  },
  {
    title: "Ajans Dönemi Edit Çalışmaları",
    category: "Ajans İşleri",
    description:
      "Farklı marka ihtiyaçlarına göre hazırlanan hızlı teslim, sosyal medya uyumlu video editleri.",
    role: "Kurgu, revizyon, sosyal medya formatlama ve dosya teslimi",
    tools: ["Premiere Pro", "CapCut", "Google Drive"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["ajans", "edit", "reels", "teslim"],
  },
  {
    title: "Okul İçin Belgesel / Video Projeleri",
    category: "Okul Projeleri",
    description:
      "Yeni Medya ve İletişim eğitimi kapsamında hazırlanan belgesel, video ve dijital anlatı çalışmaları.",
    role: "Proje fikri, çekim, röportaj, kurgu ve sunum",
    tools: ["Premiere Pro", "DaVinci Resolve", "Google Drive"],
    year: "2024 - 2026",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["okul", "belgesel", "video", "dijital anlati"],
  },
];

export const featuredDocumentaries = [
  {
    title: "Dijital Çağda Emek: Babadan Oğula Tornacılık",
    text: "Sanayi, tornacılık, emek ve baba-oğul meslek aktarımı üzerinden geleneksel zanaatin dijital çağda nasıl dönüştüğünü izleyen kısa belgesel.",
    role:
      "Rol: yönetmenlik, çekim, röportaj, kurgu, görsel anlatı ve proje tasarımı.",
  },
  {
    title: "Köy Yaşamı ve Erken Evlilik Üzerine Sözlü Tarih",
    text: "Kişisel hikayeler, aile hafızası ve köy yaşamı üzerinden geliştirilecek belgesel fikri için placeholder alan.",
    role: "Rol bilgisi ve medya linki daha sonra eklenecek.",
  },
  {
    title: "Kişisel Hikaye Odaklı Belgesel Fikri",
    text: "Bireysel deneyimleri, mekan hafızasını ve sosyal dönüşümü merkeze alan yeni belgesel fikirleri için placeholder alan.",
    role: "Proje notları ve araştırma dosyaları daha sonra eklenecek.",
  },
];
