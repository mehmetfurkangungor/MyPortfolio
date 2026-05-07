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
  "Belgesel Projeleri",
  "Reels / Kısa Video",
  "Sosyal Medya Yönetimi",
  "Marka Tanıtım Videoları",
  "Ürün Çekimleri",
  "E-ticaret İçerikleri",
  "Diş Kliniği İçerikleri",
  "Prefabrik / Fabrika İçerikleri",
  "Büfe / Yemek İçerikleri",
  "T-shirt Marka İçerikleri",
];

export const projects: Project[] = [
  {
    title: "Dijital Çağda Emek: Babadan Oğula Tornacılık",
    category: "Belgesel Projeleri",
    description:
      "Sanayi ortamında geleneksel bir mesleğin baba-oğul ilişkisi üzerinden aktarımını, emeği ve zanaatın dijital çağdaki yerini anlatan kısa belgesel.",
    role: "Yönetmenlik, çekim, röportaj, kurgu, proje tasarımı ve görsel anlatı",
    tools: ["Sony A7S3", "Premiere Pro", "Mikrofon / ses kayıt", "Google Drive"],
    year: "2026",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["belgesel", "sanayi", "tornacılık", "emek", "okul"],
  },
  {
    title: "Diş Kliniği Video İçerikleri",
    category: "Diş Kliniği İçerikleri",
    description:
      "Sağlık sektörüne uygun, güven veren ve sosyal medya formatında hızlı anlaşılabilen klinik video içerikleri.",
    role: "Çekim, kurgu, reels hazırlığı ve sosyal medya formatlama",
    tools: ["Sony A7S3", "DJI RS gimbal", "Premiere Pro", "CapCut"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["reels", "sağlık", "klinik", "sosyal medya"],
  },
  {
    title: "Prefabrik Fabrika Tanıtım Videosu",
    category: "Prefabrik / Fabrika İçerikleri",
    description:
      "Üretim alanı, ürün süreci ve kurumsal güven algısını öne çıkaran fabrika tanıtım videosu çalışması.",
    role: "Çekim, kurgu, ürün ve üretim süreci anlatımı",
    tools: ["Sony A7S3", "Sony 24-70mm GM II", "DJI RS3 Pro / RS4 Pro", "Premiere Pro"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["kurumsal", "fabrika", "üretim", "marka tanıtımı"],
  },
  {
    title: "Büfe Yemek İçerikleri",
    category: "Büfe / Yemek İçerikleri",
    description:
      "Yemek ürünlerini iştah açıcı, hızlı tüketilebilir ve sosyal medya akışına uygun şekilde gösteren kısa video içerikleri.",
    role: "Ürün çekimi, reels kurgusu ve sosyal medya paylaşım dili",
    tools: ["Işık ekipmanları", "CapCut", "Premiere Pro", "Google Drive"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["yemek", "ürün çekimi", "reels", "sosyal medya"],
  },
  {
    title: "Raptyle T-shirt Ürün Tanıtım İçerikleri",
    category: "T-shirt Marka İçerikleri",
    description:
      "Streetwear ve e-ticaret mantığına uygun ürün görseli, kısa video ve satış odaklı sosyal medya içerikleri.",
    role: "Ürün görseli, video içerik, satış odaklı sosyal medya üretimi",
    tools: ["Photoshop", "Canva", "CapCut", "Trendyol"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["e-ticaret", "moda", "streetwear", "ürün", "t-shirt"],
  },
  {
    title: "Ajans Dönemi Edit Çalışmaları",
    category: "Ajans İşleri",
    description:
      "Ajans ortamında farklı marka ihtiyaçlarına göre hazırlanan video edit, içerik düzenleme ve sosyal medya formatına uygun kurgu çalışmaları.",
    role: "Video edit, içerik düzenleme, sosyal medya formatına uygun kurgu",
    tools: ["Premiere Pro", "CapCut", "Google Drive"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["ajans", "edit", "reels", "kurgu"],
  },
  {
    title: "Okul Video Projeleri",
    category: "Okul Projeleri",
    description:
      "Yeni Medya ve İletişim eğitimi kapsamında geliştirilen belgesel, kısa video, dijital medya ve sunum projeleri.",
    role: "Konsept geliştirme, çekim, kurgu ve sunum",
    tools: ["Premiere Pro", "DaVinci Resolve", "Google Drive"],
    year: "2024 - 2026",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["okul", "akademik", "video", "belgesel"],
  },
  {
    title: "Sosyal Medya Akış Planı Çalışmaları",
    category: "Sosyal Medya Yönetimi",
    description:
      "Marka dili, paylaşım takvimi, hedef kitle ve içerik türlerini bir araya getiren sosyal medya planlama çalışmaları.",
    role: "İçerik planlama, paylaşım takvimi ve marka dili oluşturma",
    tools: ["Meta Business Suite", "Instagram", "Canva", "Google Drive"],
    year: "2025",
    mediaType: "placeholder",
    driveEmbedUrl: "",
    externalUrl: "",
    thumbnailUrl: "",
    tags: ["planlama", "instagram", "marka dili", "sosyal medya"],
  },
];

export const featuredDocumentaries = [
  {
    title: "Dijital Çağda Emek: Babadan Oğula Tornacılık",
    text: "Sanayi ortamında geleneksel bir mesleğin baba-oğul ilişkisi üzerinden aktarımını ele alan kısa belgesel. Tornacılık mesleğini, emeği, ustalığı, aile içi meslek aktarımını ve dijital çağda zanaatın yerini anlatır.",
    role:
      "Rol: çekim, röportaj, kurgu, anlatı tasarımı, proje tasarımı ve görsel dil.",
  },
  {
    title: "Köy Yaşamı ve Erken Evlilik Üzerine Sözlü Tarih",
    text: "Köy yaşamı, kişisel hafıza ve sözlü tarih yaklaşımı üzerinden geliştirilecek belgesel fikri için ayrılmış proje alanı.",
    role: "Araştırma notları, röportaj planı ve medya bağlantıları daha sonra eklenecek.",
  },
  {
    title: "Kişisel Hikaye Odaklı Belgesel Fikri",
    text: "Bireysel deneyimler, mekan hafızası ve sosyal dönüşüm temalarını merkeze alan yeni belgesel fikirleri için placeholder alan.",
    role: "Proje kapsamı ve görsel referanslar daha sonra eklenecek.",
  },
];
