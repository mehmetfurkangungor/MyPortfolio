import {
  Aperture,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  Clapperboard,
  Film,
  Megaphone,
  MonitorPlay,
  Share2,
  Target,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Mehmet Furkan Güngör",
  education:
    "Üsküdar Üniversitesi İletişim Fakültesi, Yeni Medya ve İletişim bölümü 4. sınıf öğrencisi.",
  headline:
    "Video prodüksiyon, sosyal medya ve dijital içerik üretimi alanlarında öğrencilikten profesyonelliğe geçiş yapan yaratıcı bir profil.",
  mainMessage:
    "Öğrencilik dönemimde yalnızca teorik bilgiyle kalmayıp, gerçek markalar ve projeler üzerinde üretim yaptım. Video çekimi, kurgu, sosyal medya yönetimi, reklam mantığı ve dijital içerik üretimi alanlarında kendimi geliştirmeye devam ediyorum.",
};

export type IconCard = [string, string, LucideIcon];

export const services: IconCard[] = [
  ["Video Prodüksiyon", "Çekim planı, kamera, ışık, kadraj ve ses düzenini projenin amacına göre kurgularım.", Camera],
  ["Reels / Shorts / TikTok", "İlk saniyeden dikkat çeken, dikey formata uygun, hızlı ama yorucu olmayan kısa video içerikleri üretirim.", MonitorPlay],
  ["Sosyal Medya Yönetimi", "Marka dili, paylaşım takvimi, hedef kitle ve içerik formatlarını birlikte düşünerek hesap akışı hazırlarım.", Share2],
  ["İçerik Planlama", "İçeriğin neden üretildiğini, kime hitap ettiğini ve markaya nasıl katkı sağlayacağını planlarım.", CalendarDays],
  ["Video Kurgu", "Tanıtım, reels, okul projesi ve belgesel formatlarında ritmi güçlü, anlaşılır kurgular hazırlarım.", Clapperboard],
  ["Belgesel Çekimi", "Röportaj, gerçek mekan, emek ve kişisel hikaye odaklı görsel anlatılar geliştiririm.", Film],
  ["Ürün ve Marka Tanıtımı", "Ürün, hizmet veya markanın değerini güven veren, satışa yakın ve sade bir görsel dille anlatırım.", Megaphone],
  ["E-ticaret İçerikleri", "Ürün görseli, satış odaklı video ve pazaryeri mantığına uygun içerikler hazırlarım.", BriefcaseBusiness],
  ["Meta Reklam Kampanyaları", "Hedef kitle, bütçe, kreatif ve kampanya amacı gibi reklam temel bileşenlerini okuyup içerik tarafına uygularım.", Target],
  ["Görsel Hikaye Anlatımı", "Işık, kadraj, ses, kurgu ritmi ve marka hissini aynı üretim dilinde bir araya getiririm.", Aperture],
];

export const experiences = [
  ["Ajans Deneyimi", "Ajans ortamında video edit ve içerik üretimi üzerine çalıştım; farklı marka ihtiyaçlarına göre kurgu, revizyon ve sosyal medya formatlama süreçlerinde yer aldım."],
  ["Okul Projeleri", "Yeni Medya ve İletişim eğitimim boyunca belgesel, kısa video, dijital medya içeriği ve akademik proje üretimleri yaptım."],
  ["Marka İçerikleri", "Diş kliniği, prefabrik üretim / fabrika, büfe / yemek ve t-shirt markası gibi farklı sektörlerde çekim ve kurgu deneyimi edindim."],
  ["Sosyal Medya Yönetimi", "İçerik fikri, görsel dil, paylaşım planı, reels mantığı ve hedef kitleye uygun anlatım üzerinde çalışıyorum."],
  ["E-ticaret / Pazaryeri", "T-shirt satışı ve ürün içerikleri üzerinden ürün açıklaması, ürün görseli, Trendyol mantığı ve sosyal medyadan satışa yönlendirme deneyimi kazandım."],
  ["Belgesel Çekimleri", "Sanayi, emek, zanaat, aile içi meslek aktarımı ve kişisel hikaye odaklı belgesel anlatılarına özel ilgi duyuyorum."],
];

export const equipment = [
  ["Sony A7S3 kamera", "4K video çekimleri ve sinematik prodüksiyonlarda kullandığım ana kamera."],
  ["Sony 24-70mm GM II lens", "Tanıtım, röportaj, ürün ve mekan çekimlerinde esnek kadraj sağlayan ana lens."],
  ["DJI RS3 Pro gimbal", "Hareketli çekimlerde dengeli ve profesyonel görüntü almak için kullandığım stabilizasyon ekipmanı."],
  ["DJI RS4 Pro gimbal", "Daha kontrollü hareket, akıcı planlar ve prodüksiyon kalitesi için kullandığım gimbal sistemi."],
  ["Atomos Ninja monitör / kayıt sistemi", "Çekim sırasında görüntüyü daha doğru takip etmek ve kayıt sürecini güçlendirmek için kullandığım ekipman."],
  ["ND / VND filtreler", "Dış çekimlerde pozlama kontrolü, alan derinliği ve sinematik enstantane hissi için kullandığım filtreler."],
  ["Işık ekipmanları", "Ürün, röportaj ve mekan çekimlerinde temiz ve kontrollü görüntü kurmak için kullandığım ışık setleri."],
  ["Mikrofon ve ses kayıt ekipmanları", "Röportaj ve konuşma içeren projelerde anlaşılır, temiz ses almak için kullandığım ekipmanlar."],
  ["Tripod ve temel prodüksiyon ekipmanları", "Sabit planlar, ürün çekimleri ve düzenli set akışı için kullandığım destek ekipmanları."],
];

export const tools = [
  "Adobe Premiere Pro",
  "Final Cut Pro",
  "CapCut",
  "DaVinci Resolve temel renk düzenleme",
  "Canva",
  "Photoshop temel düzenleme",
  "Meta Business Suite",
  "Instagram içerik yönetimi",
  "Google Drive ile dosya teslimi",
  "Trendyol pazaryeri temel yönetimi",
  "Shopify / e-ticaret site mantığı",
  "Vercel / web yayınlama mantığı",
];

export const contentThinking = [
  "İçerik fikri geliştirme",
  "Hedef kitleye uygun içerik üretme",
  "Reels / TikTok / Shorts mantığı",
  "İlk saniyelerde izleyiciyi tutma",
  "Hızlı tüketilen içerik ortamında dikkat çekme",
  "Sosyal medya akış planı hazırlama",
  "Paylaşım takvimi oluşturma",
  "Görsel dil ve marka bütünlüğü",
  "Doğru kadraj, temiz ses ve iyi ışık kullanımı",
  "Hızlı ama yorucu olmayan kurgu ritmi",
];

export const brandExamples = [
  "Diş kliniği için video çekimi ve edit",
  "Prefabrik fabrikası için çekim ve edit",
  "Büfe ve yemek ürünleri için sosyal medya içerikleri",
  "T-shirt markası için ürün tanıtım videoları ve satış odaklı içerikler",
  "Reels ve kısa video kurguları",
  "Sosyal medya paylaşım planı hazırlama",
  "Marka için görsel dil oluşturma",
  "Ürün ve hizmet tanıtım içerikleri",
  "Okul projeleri ve belgesel çalışmaları",
  "Ajans döneminde edit ve içerik çalışmaları",
];
