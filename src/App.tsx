import { useState, useEffect, type ReactNode } from "react";

type Tab = "diary" | "home" | "pro" | "profile";
type Detail = "notifications" | "rating" | "offers" | "settings" | "security" | "support" | "logout" | null;

function Icon({
  name,
  size = 24,
}: {
  name: "home" | "book" | "user" | "bell" | "chevron" | "arrow" | "coin" | "star" | "calendar" | "settings" | "shield" | "help" | "lock" | "check" | "crown" | "sparkles" | "bot" | "zap" | "users" | "gift" | "copy" | "share";
  size?: number;
}) {
  const paths: Record<string, ReactNode> = {
    home: <><path d="M3 10.8 12 3l9 7.8" /><path d="M5.5 9.5V21h13V9.5M9 21v-6h6v6" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" /><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    arrow: <><path d="m5 12 14 0" /><path d="m14 7 5 5-5 5" /></>,
    coin: <><circle cx="12" cy="12" r="9" /><path d="M9 8h6M12 8v9M9.5 17h5" /></>,
    star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.6 2.6 0 1 1 4.2 2c-1 .8-1.7 1.2-1.7 2.5M12 17h.01" /></>,
    lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><circle cx="12" cy="16" r="1.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
    check: <polyline points="20 6 9 17 4 12" />,
    crown: <><path d="m3 7 3.5 10h11L21 7l-5 4-4-7-4 7-5-4Z" /><path d="M5 21h14" /></>,
    sparkles: <><path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" /><path d="M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z" /></>,
    bot: <><rect x="4" y="8" width="16" height="12" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" /></>,
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    gift: <><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5C9.5 3 12 8 12 8s2.5-5 4.5-5a2.5 2.5 0 0 1 0 5" /></>,
    copy: <><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>,
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function AssistantAvatar({ id, size = 36 }: { id: string; size?: number }) {
  switch (id) {
    case "jarvis":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Джарвис">
          <circle cx="20" cy="20" r="20" fill="#0b1329" />
          <circle cx="20" cy="20" r="14" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 3" />
          <circle cx="20" cy="20" r="9" fill="#0284c7" fillOpacity="0.4" stroke="#00f0ff" strokeWidth="1.5" />
          <polygon points="20,13 25,23 15,23" fill="#38bdf8" />
          <circle cx="20" cy="20" r="2" fill="#ffffff" />
        </svg>
      );
    case "matroskin":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Кот Матроскин">
          <circle cx="20" cy="20" r="20" fill="#2d3748" />
          <path d="M5 14 C12 11 28 11 35 14" stroke="#ffffff" strokeWidth="2.5" />
          <path d="M4 22 C12 19 28 19 36 22" stroke="#3b82f6" strokeWidth="2.5" />
          <path d="M6 30 C13 27 27 27 34 30" stroke="#ffffff" strokeWidth="2.5" />
          <polygon points="12,14 16,6 20,13" fill="#cbd5e1" />
          <polygon points="20,13 24,6 28,14" fill="#cbd5e1" />
          <circle cx="20" cy="21" r="7.5" fill="#f8fafc" />
          <circle cx="18" cy="20" r="1.5" fill="#1e293b" />
          <circle cx="22" cy="20" r="1.5" fill="#1e293b" />
          <polygon points="19,23 21,23 20,24.5" fill="#f43f5e" />
          <line x1="14" y1="22" x2="11" y2="21" stroke="#64748b" strokeWidth="1" />
          <line x1="26" y1="22" x2="29" y2="21" stroke="#64748b" strokeWidth="1" />
        </svg>
      );
    case "losyash":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Лосяш">
          <circle cx="20" cy="20" r="20" fill="#b45309" />
          <path d="M12 15 C8 11 7 7 11 7 C11 10 15 12 16 14" stroke="#78350f" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M28 15 C32 11 33 7 29 7 C29 10 25 12 24 14" stroke="#78350f" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="20" cy="22" r="10.5" fill="#fbbf24" />
          <circle cx="17" cy="20" r="3.2" stroke="#1f2937" strokeWidth="1.5" fill="#ffffff" />
          <circle cx="23" cy="20" r="3.2" stroke="#1f2937" strokeWidth="1.5" fill="#ffffff" />
          <line x1="19.5" y1="20" x2="20.5" y2="20" stroke="#1f2937" strokeWidth="1.8" />
          <circle cx="17" cy="20" r="1.3" fill="#1f2937" />
          <circle cx="23" cy="20" r="1.3" fill="#1f2937" />
          <ellipse cx="20" cy="25" rx="3.5" ry="2.2" fill="#d97706" />
        </svg>
      );
    case "krosh":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Крош">
          <circle cx="20" cy="20" r="20" fill="#0284c7" />
          <path d="M15 15 C13 6 15 3 17 4 C19 6 18 12 17 15" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
          <path d="M25 15 C27 6 25 3 23 4 C21 6 22 12 23 15" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
          <circle cx="20" cy="23" r="11" fill="#38bdf8" />
          <circle cx="17" cy="21" r="3" fill="#ffffff" />
          <circle cx="23" cy="21" r="3" fill="#ffffff" />
          <circle cx="17.5" cy="21" r="1.5" fill="#0f172a" />
          <circle cx="22.5" cy="21" r="1.5" fill="#0f172a" />
          <circle cx="20" cy="24" r="1.8" fill="#e0f2fe" />
          <rect x="18.8" y="26" width="2.4" height="2.8" rx="0.5" fill="#ffffff" />
        </svg>
      );
    case "pin":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Пин">
          <circle cx="20" cy="20" r="20" fill="#1e293b" />
          <path d="M10 18 C10 10 30 10 30 18 L30 23 L10 23 Z" fill="#78350f" />
          <rect x="12.5" y="15" width="6.5" height="5.5" rx="2" fill="#38bdf8" stroke="#f59e0b" strokeWidth="1.5" />
          <rect x="21" y="15" width="6.5" height="5.5" rx="2" fill="#38bdf8" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="19" y1="17.5" x2="21" y2="17.5" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="20" cy="24" r="8.5" fill="#ffffff" />
          <polygon points="17,24 23,24 20,28.5" fill="#f97316" />
        </svg>
      );
    case "stitch":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Стич">
          <circle cx="20" cy="20" r="20" fill="#1e3a8a" />
          <path d="M10 18 C4 11 6 5 11 8 C14 10 13 16 14 18" fill="#ec4899" opacity="0.85" />
          <path d="M30 18 C36 11 34 5 29 8 C26 10 27 16 26 18" fill="#ec4899" opacity="0.85" />
          <circle cx="20" cy="22" r="10" fill="#2563eb" />
          <ellipse cx="16" cy="20" rx="3.5" ry="4.5" fill="#0f172a" />
          <ellipse cx="24" cy="20" rx="3.5" ry="4.5" fill="#0f172a" />
          <circle cx="16.5" cy="18.5" r="1.3" fill="#ffffff" />
          <circle cx="24.5" cy="18.5" r="1.3" fill="#ffffff" />
          <ellipse cx="20" cy="24" rx="3.5" ry="2" fill="#1e3a8a" />
        </svg>
      );
    case "shrek":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Шрек">
          <circle cx="20" cy="20" r="20" fill="#166534" />
          <path d="M11 16 L6 13 C5 11 8 10 9 12 L13 17" fill="#84cc16" stroke="#166534" strokeWidth="1" />
          <path d="M29 16 L34 13 C35 11 32 10 31 12 L27 17" fill="#84cc16" stroke="#166534" strokeWidth="1" />
          <ellipse cx="20" cy="22" rx="11" ry="10" fill="#84cc16" />
          <circle cx="16" cy="20" r="2.2" fill="#ffffff" stroke="#14532d" strokeWidth="0.8" />
          <circle cx="24" cy="20" r="2.2" fill="#ffffff" stroke="#14532d" strokeWidth="0.8" />
          <circle cx="16.5" cy="20" r="1.1" fill="#78350f" />
          <circle cx="23.5" cy="20" r="1.1" fill="#78350f" />
          <ellipse cx="20" cy="23.5" rx="3" ry="1.8" fill="#65a30d" />
          <path d="M16 26 Q20 28.5 24 26" stroke="#14532d" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "luntik":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Лунтик">
          <circle cx="20" cy="20" r="20" fill="#581c87" />
          <circle cx="9" cy="14" r="3.5" fill="#c084fc" />
          <circle cx="7" cy="21" r="3.5" fill="#c084fc" />
          <circle cx="31" cy="14" r="3.5" fill="#c084fc" />
          <circle cx="33" cy="21" r="3.5" fill="#c084fc" />
          <circle cx="20" cy="22" r="10.5" fill="#a855f7" />
          <circle cx="16" cy="20" r="3" fill="#ffffff" />
          <circle cx="24" cy="20" r="3" fill="#ffffff" />
          <circle cx="16" cy="20" r="1.7" fill="#3b0764" />
          <circle cx="24" cy="20" r="1.7" fill="#3b0764" />
          <circle cx="20" cy="16" r="1.8" fill="#f3e8ff" />
          <path d="M17 25 Q20 27 23 25" stroke="#3b0764" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

const schedules = [
  {
    date: "18 МАЯ, ПОНЕДЕЛЬНИК",
    earned: 45,
    average: "4.7",
    note: "Отличная работа на алгебре!",
    lessons: [
      { time: "09:00", title: "Алгебра", room: "302", grade: "5", color: "blue" },
      { time: "10:00", title: "Литература", room: "215", grade: "4", color: "violet" },
      { time: "11:10", title: "Английский язык", room: "410", grade: "", color: "green" },
      { time: "12:10", title: "Физика", room: "311", grade: "", color: "orange" },
      { time: "13:10", title: "Физкультура", room: "Зал", grade: "", color: "green" },
      { time: "14:00", title: "История", room: "206", grade: "", color: "violet" },
    ],
  },
  {
    date: "19 МАЯ, ВТОРНИК",
    earned: 30,
    average: "5.0",
    note: "Сильный ответ у доски по истории.",
    lessons: [
      { time: "08:30", title: "Геометрия", room: "302", grade: "5", color: "blue" },
      { time: "09:30", title: "Русский язык", room: "214", grade: "", color: "violet" },
      { time: "10:40", title: "История", room: "206", grade: "5", color: "orange" },
      { time: "11:40", title: "Биология", room: "315", grade: "", color: "green" },
      { time: "12:40", title: "Информатика", room: "408", grade: "", color: "blue" },
    ],
  },
  {
    date: "20 МАЯ, СРЕДА",
    earned: 15,
    average: "4.0",
    note: "Подготовься к проверочной по физике.",
    lessons: [
      { time: "09:00", title: "Физика", room: "311", grade: "4", color: "orange" },
      { time: "10:00", title: "Английский язык", room: "410", grade: "", color: "green" },
      { time: "11:10", title: "Алгебра", room: "302", grade: "", color: "blue" },
      { time: "12:10", title: "География", room: "205", grade: "", color: "violet" },
      { time: "13:10", title: "Технология", room: "108", grade: "", color: "green" },
      { time: "14:00", title: "Классный час", room: "302", grade: "", color: "orange" },
    ],
  },
  {
    date: "21 МАЯ, ЧЕТВЕРГ",
    earned: 60,
    average: "5.0",
    note: "Лучшая работа в классе по информатике.",
    lessons: [
      { time: "08:30", title: "Русский язык", room: "214", grade: "5", color: "violet" },
      { time: "09:30", title: "Информатика", room: "408", grade: "5", color: "blue" },
      { time: "10:40", title: "Литература", room: "215", grade: "", color: "violet" },
      { time: "11:40", title: "Обществознание", room: "206", grade: "5", color: "orange" },
      { time: "12:40", title: "Физкультура", room: "Зал", grade: "", color: "green" },
    ],
  },
  {
    date: "22 МАЯ, ПЯТНИЦА",
    earned: 30,
    average: "4.5",
    note: "Хорошая неделя — рейтинг вырос на 4 пункта.",
    lessons: [
      { time: "09:00", title: "Геометрия", room: "302", grade: "4", color: "blue" },
      { time: "10:00", title: "Биология", room: "315", grade: "5", color: "green" },
      { time: "11:10", title: "Английский язык", room: "410", grade: "", color: "green" },
      { time: "12:10", title: "Музыка", room: "112", grade: "", color: "orange" },
      { time: "13:10", title: "История", room: "206", grade: "", color: "violet" },
    ],
  },
];

function Header({ title, subtitle, onNotifications }: { title: string; subtitle?: string; onNotifications: () => void }) {
  return (
    <div className="topbar">
      <div>
        {subtitle && <div className="eyebrow">{subtitle}</div>}
        <div className="page-title">{title}</div>
      </div>
      <button className="icon-button" aria-label="Уведомления" onClick={onNotifications}>
        <Icon name="bell" size={22} />
        <span className="notification-dot" />
      </button>
    </div>
  );
}

export interface CardDesignItem {
  id: string;
  name: string;
  isPro: boolean;
  imageSrc: string;
}

export const freeCards: CardDesignItem[] = [
  {
    id: "card-2",
    name: "Т-Банк Космос",
    isPro: false,
    imageSrc: "/cards/card-2.png",
  },
  {
    id: "card-1",
    name: "Классический Мир",
    isPro: false,
    imageSrc: "/cards/card-1.png",
  },
];

export const proCards: CardDesignItem[] = [
  {
    id: "card-3",
    name: "Неон Сити",
    isPro: true,
    imageSrc: "/cards/card-3.png",
  },
  {
    id: "card-4",
    name: "Изумрудный Драйв",
    isPro: true,
    imageSrc: "/cards/card-4.png",
  },
  {
    id: "card-5",
    name: "Кибер Джуниор",
    isPro: true,
    imageSrc: "/cards/card-5.png",
  },
  {
    id: "card-6",
    name: "Премиум Эдишн",
    isPro: true,
    imageSrc: "/cards/card-6.png",
  },
];

export const allCardDesigns: CardDesignItem[] = [...freeCards, ...proCards];

function Home({
  onOpenCoins,
  onOpenDetail,
  onOpenCardDesigns,
  onOpenReferral,
  onMessage,
  selectedCardId = "card-2",
}: {
  onOpenCoins: () => void;
  onOpenDetail: (detail: Detail) => void;
  onOpenCardDesigns: () => void;
  onOpenReferral: () => void;
  onMessage: (message: string) => void;
  selectedCardId?: string;
}) {
  const activeCard = allCardDesigns.find((c) => c.id === selectedCardId) || allCardDesigns[0];
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // max rotation 10 degrees
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  return (
    <main className="page fade-in">
      <Header title="Привет, Миша" subtitle="ПОНЕДЕЛЬНИК, 18 МАЯ" onNotifications={() => onOpenDetail("notifications")} />

      <section className="hero-section stagger-1">
        <div className="hero-content">
          <div className="hero-balance">
            <strong>1 357 Т-Коинов</strong>
          </div>
          <div className="hero-topline">
            <span>CoinCard •• 4821</span>
          </div>
          <div className="hero-actions-row">
            <button className="hero-btn-dark" onClick={() => onMessage("Пополнение")}>Пополнить</button>
            <button className="hero-btn-light" onClick={() => onMessage("Перевод")}>Перевести</button>
          </div>
        </div>

        <div className="hero-card-container">
          <div className="hero-card-wrapper">
            <img src={activeCard.imageSrc} alt={activeCard.name} className="hero-card-img" />
          </div>
          <button className="hero-card-settings-btn" onClick={onOpenCardDesigns}>
            <Icon name="settings" size={16} /> Сменить дизайн
          </button>
        </div>
      </section>

      <div className="balance-grid stagger-2">
        <button className="stat-card coins" onClick={onOpenCoins}>
          <div className="stat-icon"><Icon name="coin" size={22} /></div>
          <span>Т‑коины</span>
          <strong>1 357</strong>
          <div className="stat-link">История <Icon name="arrow" size={15} /></div>
        </button>
        <button className="stat-card rating" onClick={() => onOpenDetail("rating")}>
          <div className="stat-icon"><Icon name="star" size={21} /></div>
          <span>Т‑рейтинг</span>
          <strong>86</strong>
          <div className="mini-progress"><i /></div>
          <div className="stat-caption">Топ 12% класса</div>
        </button>
      </div>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">ВАШ ПРОГРЕСС</span>
            <div className="section-title">Ещё немного до награды</div>
          </div>
          <button className="round-arrow" aria-label="Подробнее" onClick={() => onOpenDetail("rating")}><Icon name="chevron" size={18} /></button>
        </div>
        <div className="reward-card">
          <div className="reward-ring">
            <svg viewBox="0 0 52 52">
              <circle cx="26" cy="26" r="22" />
              <circle className="ring-value" cx="26" cy="26" r="22" />
            </svg>
            <span>86</span>
          </div>
          <div className="reward-copy">
            <strong>+100 Т‑коинов</strong>
            <span>Подними рейтинг до 90</span>
          </div>
          <span className="days">12 дней</span>
        </div>

        <div className="referral-strip" onClick={onOpenReferral}>
          <div className="referral-strip-icon">
            <Icon name="users" size={24} />
          </div>
          <div className="referral-strip-info">
            <div className="referral-strip-header">
              <span className="referral-tag">РЕФЕРАЛЬНАЯ ПРОГРАММА</span>
              <span className="referral-bonus-badge">+250 Т‑Коинов</span>
            </div>
            <strong>Зови друзей в Т‑Банк — получайте бонусы вместе</strong>
            <span>+250 тебе, а другу — 2 месяца бесплатного обслуживания и +50 Т‑Коинов</span>
          </div>
          <button
            type="button"
            className="referral-strip-btn"
            onClick={(e) => {
              e.stopPropagation();
              onOpenReferral();
            }}
          >
            <span>Пригласить</span>
            <Icon name="arrow" size={14} />
          </button>
        </div>
      </section>

      <section className="section privileges">
        <div className="section-heading">
          <div className="section-title">Доступно за коины</div>
          <button className="text-button" onClick={() => onOpenDetail("offers")}>Все</button>
        </div>
        <div className="offer-row">
          <button className="offer-card peach-offer" onClick={() => onMessage("Вкусно — и точка: комбо и бургеры за коины")}>
            <span className="offer-tag">ВКУСНО — И ТОЧКА</span>
            <strong>Бургеры<br />и комбо</strong>
            <span>от 250 коинов</span>
            <div className="burger-shape"><span /><span className="patty" /><span /></div>
          </button>
          <button className="offer-card yellow-offer" onClick={() => onMessage("ЛитРес: книги без доплат")}>
            <span className="offer-tag">ЛИТРЕС</span>
            <strong>Книги<br />без доплат</strong>
            <span>от 300 коинов</span>
            <div className="book-shape">A</div>
          </button>
          <button className="offer-card mint-offer" onClick={() => onMessage("Читай-город: манга и комиксы за коины")}>
            <span className="offer-tag">ЧИТАЙ-ГОРОД</span>
            <strong>Комиксы<br />и манга</strong>
            <span>от 280 коинов</span>
            <div className="chitaj-shape"><span /><span /></div>
          </button>
          <button className="offer-card purple-offer" onClick={() => onMessage("Киномакс: билеты в кино за коины")}>
            <span className="offer-tag">КИНОМАКС</span>
            <strong>Билеты<br />в кино</strong>
            <span>от 350 коинов</span>
            <div className="cinema-shape"><span /><span /></div>
          </button>
          <button className="offer-card sport-offer" onClick={() => onMessage("Спортмастер: кроссовки и спорт-экип")}>
            <span className="offer-tag">СПОРТМАСТЕР</span>
            <strong>Спорт<br />и экип</strong>
            <span>от 400 коинов</span>
            <div className="sport-shape"><span /><span /></div>
          </button>
          <button className="offer-card denim-offer" onClick={() => onMessage("Глория Джинс: стильная одежда за коины")}>
            <span className="offer-tag">ГЛОРИЯ ДЖИНС</span>
            <strong>Стильная<br />одежда</strong>
            <span>от 450 коинов</span>
            <div className="denim-shape">GJ</div>
          </button>
          <button className="offer-card amber-offer" onClick={() => onMessage("Леонардо: товары для творчества и хобби")}>
            <span className="offer-tag">ЛЕОНАРДО</span>
            <strong>Всё для<br />хобби</strong>
            <span>от 200 коинов</span>
            <div className="hobby-shape"><span /><span /><span /></div>
          </button>
          <button className="offer-card green-offer" onClick={() => onMessage("Учи.ру: олимпиады и обучающие курсы")}>
            <span className="offer-tag">УЧИ.РУ</span>
            <strong>Курсы и<br />олимпиады</strong>
            <span>от 180 коинов</span>
            <div className="uchi-shape">★</div>
          </button>
          <button className="offer-card cyber-offer" onClick={() => onMessage("Colizeum: часы игры в киберарене")}>
            <span className="offer-tag">COLIZEUM</span>
            <strong>Арена и<br />игры</strong>
            <span>от 220 коинов</span>
            <div className="gaming-shape"><span /><span /></div>
          </button>
          <button className="offer-card blue-offer" onClick={() => onMessage("Скидка на проезд доступна за 150 Т‑коинов")}>
            <span className="offer-tag">ТРАНСПОРТ</span>
            <strong>Проезд<br />со скидкой</strong>
            <span>от 150 коинов</span>
            <div className="bus-shape"><span /><span /></div>
          </button>
        </div>
      </section>

      <Footer onMessage={onMessage} />
    </main>
  );
}

function Footer({ onMessage }: { onMessage: (msg: string) => void }) {
  return (
    <footer className="app-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-title">
            <span className="footer-logo-badge">Т</span>
            <strong>Т‑Банк Джуниор</strong>
          </div>
          <p className="footer-brand-desc">
            Экосистема школьного финтех-банкинга. Интеграция оценок из электронных дневников (МЭШ, РЭШ, Дневник.ру) с бонусной программой накопления Т‑Коинов.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">Лицензия ЦБ РФ № 2673</span>
            <span className="footer-badge">АСВ · Вклады застрахованы</span>
            <span className="footer-badge age-badge">6+</span>
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <span className="footer-col-title">ПРАВОВАЯ ИНФОРМАЦИЯ</span>
            <button className="footer-link" onClick={() => onMessage("Политика конфиденциальности (152-ФЗ)")}>
              Политика конфиденциальности
            </button>
            <button className="footer-link" onClick={() => onMessage("Регламент программы лояльности «Т‑Коины»")}>
              Условия программы «Т‑Коины»
            </button>
            <button className="footer-link" onClick={() => onMessage("Согласие законных представителей несовершеннолетних")}>
              Согласие родителей (опекунов)
            </button>
            <button className="footer-link" onClick={() => onMessage("Правила безопасности и лимитов")}>
              Безопасность и лимиты покупок
            </button>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">КОНТАКТЫ И ПОДДЕРЖКА</span>
            <button className="footer-link contact-highlight" onClick={() => onMessage("Звонок в поддержку: 8 800 555-77-78 (бесплатно по РФ)")}>
              <strong>8 800 555-77-78</strong>
              <small>Бесплатно по РФ • 24/7</small>
            </button>
            <button className="footer-link" onClick={() => onMessage("Почта поддержки: junior@tbank.ru")}>
              junior@tbank.ru
            </button>
            <button className="footer-link" onClick={() => onMessage("Официальный чат с поддержкой в приложении")}>
              Чат поддержки в приложении
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-disclaimer">
          АО «ТБанк». Генеральная лицензия Банка России № 2673. Т‑Коины являются условными единицами бонусной программы лояльности и не являются денежными средствами или криптовалютой. Начисление осуществляется автоматически при подтверждении оценок от верифицированных образовательных систем.
        </p>
        <div className="footer-copyright">
          <span>© 2006–2026, АО «ТБанк». Все права защищены.</span>
          <span>ГОСТ Р 57580.1 • Защита персональных данных</span>
        </div>
      </div>
    </footer>
  );
}

function Diary({ onOpenDetail, onMessage }: { onOpenDetail: (detail: Detail) => void; onMessage: (message: string) => void }) {
  const [selectedDay, setSelectedDay] = useState(0);
  const week = ["Пн|18", "Вт|19", "Ср|20", "Чт|21", "Пт|22"];
  const schedule = schedules[selectedDay];

  return (
    <main className="page fade-in">
      <Header title="Дневник" subtitle={schedule.date} onNotifications={() => onOpenDetail("notifications")} />

      <div className="week-strip stagger-1">
        {week.map((day, index) => {
          const [name, date] = day.split("|");
          return <button className={index === selectedDay ? "day active" : "day"} onClick={() => {
            setSelectedDay(index);
            onMessage(`Расписание обновлено: ${date} мая`);
          }} key={day}><span>{name}</span><strong>{date}</strong></button>;
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '24px 32px', borderRadius: '36px', marginTop: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }} className="stagger-1">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontSize: '15px', color: '#8e8e93', fontWeight: 600 }}>Заработано сегодня</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/wallet.svg" alt="Wallet" width={24} height={24} style={{ opacity: 0.4 }} />
            <strong style={{ fontSize: '32px', color: '#1c1c1e', fontWeight: 800, letterSpacing: '-0.02em' }}>
              +{schedule.earned} <small style={{ fontSize: '18px', opacity: 0.6 }}>Т</small>
            </strong>
          </div>
        </div>
        <div style={{ background: '#f4f5f7', padding: '12px 20px', borderRadius: '20px', fontWeight: 800, fontSize: '18px', color: '#1c1c1e', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/award.svg" alt="Award" width={18} height={18} style={{ opacity: 0.4 }} />
          {schedule.average} <span style={{ fontSize: '14px', fontWeight: 600, color: '#8e8e93' }}>ср. балл</span>
        </div>
      </div>

      <section className="timeline-card stagger-2">
        <div className="timeline-header">
          <div>
            <h3>Расписание</h3>
            <span>На сегодня</span>
          </div>
        </div>

        <div className="timeline-list">
          {schedule.lessons.map((lesson, index) => (
            <div className="timeline-row" key={`${lesson.time}-${lesson.title}`} onClick={() => onMessage(`${lesson.title} · кабинет ${lesson.room}`)}>
              <div className="timeline-time">{lesson.time}</div>
              <div className="timeline-node">
                <span className={`timeline-dot ${lesson.color}`} />
                {index < schedule.lessons.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-content">
                <strong>{lesson.title}</strong>
                <span>Кабинет {lesson.room} • {lesson.title.split(' ')[0]}</span>
              </div>
              {lesson.grade && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#34c759', opacity: 0.9 }}>
                    +{lesson.grade === "5" ? 30 : 15} Т
                  </span>
                  <div className={`timeline-grade grade-${lesson.grade}`}>
                    {lesson.grade}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer onMessage={onMessage} />
    </main>
  );
}

function Profile({ onOpenDetail, onMessage }: { onOpenDetail: (detail: Detail) => void; onMessage: (msg: string) => void }) {
  const items = [
    ["settings", "Настройки"],
    ["shield", "Безопасность"],
    ["help", "Поддержка"],
  ] as const;

  return (
    <main className="page fade-in">
      <Header title="Профиль" onNotifications={() => onOpenDetail("notifications")} />

      <div className="profile-grid stagger-1">
        <section className="profile-card">
          <div className="avatar">М</div>
          <div><strong>Михаил Воронов</strong><span>7 «Б» класс</span></div>
        </section>

        <section className="level-card">
          <div className="level-header"><span>УРОВЕНЬ</span><strong>7</strong></div>
          <div className="level-progress"><i /></div>
        </section>
      </div>

      <section className="menu-card stagger-2">
        {items.map(([icon, label]) => (
          <button className="menu-item" key={label} onClick={() => onOpenDetail(icon === "settings" ? "settings" : icon === "shield" ? "security" : "support")}>
            <span>{label}</span>
            <Icon name="chevron" size={18} />
          </button>
        ))}
      </section>

      <button className="logout stagger-3" onClick={() => onOpenDetail("logout")}>Выйти из профиля</button>

      <Footer onMessage={onMessage} />
    </main>
  );
}

function ProSection({
  isSubscribed,
  setIsSubscribed,
  onOpenCardDesigns,
  onMessage,
}: {
  isSubscribed: boolean;
  setIsSubscribed: (val: boolean) => void;
  onOpenCardDesigns: () => void;
  onMessage: (msg: string) => void;
}) {
  const [selectedAssistant, setSelectedAssistant] = useState(0);

  const assistants = [
    {
      id: "jarvis",
      name: "Джарвис",
      series: "Marvel",
      initials: "AI",
      avatarBg: "#1f2937",
      role: "Аудит аккаунта и автоматизация",
      desc: "Сканирует профиль, находит скрытые бонусы и рассчитывает персональный план достижения максимального лимита Т-Коинов.",
      quote: "«Здесь в алгоритме была неточность, я пересобрал решение — теперь всё работает правильно.»",
      userQuery: "Джарвис, проверь статус лимита. Почему начисления идут медленно?",
      botReply: "Сэр, провёл аудит профиля. Здесь в алгоритме была неточность, я пересобрал решение — теперь всё работает правильно. Лимит расширен до 3 000 Т-Коинов.",
      actionLabel: "Оптимизировать лимит",
      actionFeedback: "Лимит и алгоритм аккаунта оптимизированы!",
    },
    {
      id: "matroskin",
      name: "Кот Матроскин",
      series: "Простоквашино",
      initials: "КМ",
      avatarBg: "#334155",
      role: "Финансовый контроль и копилка",
      desc: "Помогает грамотно распределять Т-Коины, сберегать баланс от импульсивных трат и быстрее накопить на пластиковую карту.",
      quote: "«Средства у нас на аккаунте есть, надо правильно распределить лимит! Отложим 80 Т-Коинов в копилку — и карта в кармане.»",
      userQuery: "Матроскин, как быстрее накопить Т-Коины на новую карту?",
      botReply: "Средства у нас на аккаунте есть, надо правильно распределить лимит! Отложим 80 Т-Коинов в копилку — и карта в кармане. Не трать коины на ерунду!",
      actionLabel: "Отложить 80 Т в копилку",
      actionFeedback: "80 Т-Коинов успешно отправлены в копилку!",
    },
    {
      id: "losyash",
      name: "Лосяш",
      series: "Смешарики",
      initials: "ЛО",
      avatarBg: "#d97706",
      role: "Глубокая аналитика и статистика",
      desc: "Анализирует динамику начислений Т-Коинов, графики успеваемости и прогнозирует переход на следующий уровень Т-Рейтинга.",
      quote: "«Феноменально! Статистика начислений показывает прирост коинов на 24% после устранения просадки. Твой баланс на подъёме!»",
      userQuery: "Лосяш, посмотри статистику моего рейтинга за неделю.",
      botReply: "Феноменально! Статистика начислений показывает прирост коинов на 24% после устранения просадки. Твой баланс на подъёме, прогноз отличный!",
      actionLabel: "Показать тренд рейтинга",
      actionFeedback: "Статистика и графики успеваемости обновлены!",
    },
    {
      id: "krosh",
      name: "Крош",
      series: "Смешарики",
      initials: "КР",
      avatarBg: "#0284c7",
      role: "Преодоление застоев и быстрый буст",
      desc: "Если баланс или рейтинг застряли на месте, моментально находит задания и активности с удвоенным начислением коинов.",
      quote: "«Ёлки-иголки, баланс застрял на 400 коинах? Не кисни, я нашел два крутых челленджа с двойным бонусом, погнали разгонять!»",
      userQuery: "Крош, кажется, баланс совсем застрял на 400 коинах...",
      botReply: "Ёлки-иголки, баланс застрял на 400 коинах? Не кисни, я нашел два крутых челленджа с двойным бонусом, погнали разгонять!",
      actionLabel: "Взять квесты +100 Т",
      actionFeedback: "Бонусные челленджи активированы на аккаунте!",
    },
    {
      id: "pin",
      name: "Пин",
      series: "Смешарики",
      initials: "ПН",
      avatarBg: "#475569",
      role: "Инженерная настройка профиля",
      desc: "Настраивает систему безопасности, устраняет сбои в начислении баллов и калибрует правила рейтинга под твои цели.",
      quote: "«Компрессия! Настройки безопасности и алгоритм лимитов проверены — теперь начисления идут с максимальной отдачей.»",
      userQuery: "Пин, проверь, всё ли в порядке с калибровкой правил?",
      botReply: "Компрессия! Настройки безопасности и алгоритм лимитов проверены — здесь всё пересобрано, начисления идут с максимальной отдачей.",
      actionLabel: "Применить калибровку",
      actionFeedback: "Инженерная калибровка успешно применена!",
    },
    {
      id: "stitch",
      name: "Стич",
      series: "Disney",
      initials: "СТ",
      avatarBg: "#2563eb",
      role: "Поддержка 24/7 и решение проблем",
      desc: "Моментально отвечает на любые вопросы по профилю, помогает при задержках начислений и защищает твои Т-Коины.",
      quote: "«Охана значит семья! Никто не останется без коинов. Я проверил транзакции — баланс в полной безопасности!»",
      userQuery: "Стич, кажется, одно из начислений коинов задержалось!",
      botReply: "Охана значит семья! Никто не останется без коинов. Я проверил транзакции — баланс в полной безопасности, запрос подтвержден!",
      actionLabel: "Проверить транзакции",
      actionFeedback: "Все транзакции проверены, баланс актуален!",
    },
    {
      id: "shrek",
      name: "Шрек",
      series: "DreamWorks",
      initials: "ШР",
      avatarBg: "#166534",
      role: "Охрана лимитов и защита баланса",
      desc: "Оберегает накопленные коины от пустых трат и помогает удерживать максимальный статус Прошки без просадок.",
      quote: "«Что ты делаешь на моём болоте трат? Держи лимит на замке, пока не накопим нужную сумму на физическую карту!»",
      userQuery: "Шрек, хочу спустить 200 коинов на стикеры, стоит ли?",
      botReply: "Что ты делаешь на моём болоте трат? Держи лимит на замке, пока не накопим нужную сумму на физическую карту! Отставить пустые траты!",
      actionLabel: "Защитить лимит трат",
      actionFeedback: "Защита лимита активна — коины сохранены!",
    },
    {
      id: "luntik",
      name: "Лунтик",
      series: "Лунтик",
      initials: "ЛТ",
      avatarBg: "#7c3aed",
      role: "Понятный гид по всем функциям",
      desc: "По-доброму и терпеливо объяснит каждую функцию приложения, правила рейтинга и как быстрее получать бонусы.",
      quote: "«Я родился, чтобы помочь тебе освоиться! Не переживай, я подскажу каждую кнопочку в профиле и помогу поднять Т-Рейтинг.»",
      userQuery: "Лунтик, я только подключил Прошку, что теперь делать?",
      botReply: "Я родился, чтобы помочь тебе освоиться! Не переживай, я подскажу каждую кнопочку в профиле и помогу поднять Т-Рейтинг до максимума.",
      actionLabel: "Запустить гид по фичам",
      actionFeedback: "Обучающие подсказки включены в профиле!",
    },
  ];

  const currentAst = assistants[selectedAssistant];

  return (
    <main className="page pro-page fade-in">
      <div className="topbar">
        <div>
          <div className="eyebrow">ПОДПИСКА</div>
          <div className="page-title">Т-Банк Прошка</div>
        </div>
      </div>

      {/* Top Hero Card: сочный, контрастный, минималистичный Т-Банк стиль */}
      <section className="pro-accent-card stagger-1">
        <div className="pro-card-topbar">
          <div className="pro-badge-pill">
            <Icon name="crown" size={14} />
            <span>ПРОШКА</span>
          </div>
          <span className="pro-trial-badge">30 дней бесплатно</span>
        </div>

        <h2 className="pro-hero-heading">Учись на максимум.<br />Копи Т-Коины.</h2>
        <p className="pro-hero-subtext">
          Расширенный лимит до 3 000 Т-Коинов в месяц, выбор дизайнов карты и персональный ассистент по аккаунту.
        </p>

        <div className="pro-hero-action-box">
          <div className="pro-hero-pricing">
            <div className="pro-hero-main-price">
              <strong>{isSubscribed ? "Прошка активна" : "0 Т-Коинов"}</strong>
              <span>{isSubscribed ? "до 11 ноября" : "первые 30 дней"}</span>
            </div>
            <span className="pro-hero-conditions">Далее 200 Т-Коинов в месяц • Отмена в любой момент</span>
          </div>

          <button
            className={`pro-hero-cta-btn ${isSubscribed ? "active" : ""}`}
            onClick={() => {
              if (isSubscribed) {
                onMessage("Подписка Т-Банк Прошка уже активна");
              } else {
                setIsSubscribed(true);
                onMessage("Подписка Т-Банк Прошка подключена");
              }
            }}
          >
            <Icon name={isSubscribed ? "check" : "crown"} size={17} />
            <span>{isSubscribed ? "Прошка активна" : "Подключить Прошку"}</span>
          </button>
        </div>
      </section>

      {/* Two Subscription Sections: Free vs Прошка */}
      <section className="section stagger-2">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ТАРИФНЫЕ ПЛАНЫ</div>
            <div className="section-title">Выбор уровня подписки</div>
          </div>
        </div>

        <div className="plans-cards-stack">
          {/* Free Standard Plan */}
          <div className="plan-table-card standard">
            <div className="plan-table-header">
              <div className="plan-table-type">Обычная подписка</div>
              <div className="plan-table-price">0 Т-Коинов <span>/ всегда</span></div>
              <div className="plan-table-desc">Базовые возможности для старта в системе Т-Банка</div>
            </div>

            <ul className="plan-features-list">
              <li className="plan-feature-row">
                <span className="feat-check"><Icon name="check" size={15} /></span>
                <span className="feat-text">Накопление Т-Коинов за школьные оценки</span>
              </li>
              <li className="plan-feature-row">
                <span className="feat-check"><Icon name="check" size={15} /></span>
                <span className="feat-text">Электронный дневник с расписанием и оценками</span>
              </li>
              <li className="plan-feature-row">
                <span className="feat-check"><Icon name="check" size={15} /></span>
                <span className="feat-text">Т-Рейтинг и отслеживание успеваемости в классе</span>
              </li>
              <li className="plan-feature-row">
                <span className="feat-check"><Icon name="check" size={15} /></span>
                <span className="feat-text">Трата Т-Коинов у стандартных партнёров</span>
              </li>
              <li className="plan-feature-row restricted">
                <span className="feat-cross">−</span>
                <span className="feat-text">Урезанный лимит накоплений (до 500 Т-Коинов в месяц)</span>
              </li>
              <li className="plan-feature-row locked">
                <span className="feat-cross">−</span>
                <span className="feat-text">Выбор кастомного дизайна карты недоступен</span>
              </li>
              <li className="plan-feature-row locked">
                <span className="feat-cross">−</span>
                <span className="feat-text">Без ИИ-ассистента и анализа аккаунта</span>
              </li>
            </ul>
          </div>

          {/* Прошка Plan */}
          <div className="plan-table-card pro">
            <div className="plan-table-header">
              <div className="plan-pill-pro">ПРОШКА</div>
              <div className="plan-table-type">Прошка</div>
              <div className="plan-table-price highlight">200 Т-Коинов <span>/ в месяц</span></div>
              <div className="plan-table-desc">Максимальный лимит, полная свобода кастомизации и ИИ-помощник</div>
            </div>

            <ul className="plan-features-list">
              <li className="plan-feature-row">
                <span className="feat-check"><Icon name="check" size={15} /></span>
                <span className="feat-text"><strong>Расширенный лимит Т-Коинов</strong> (до 3 000 Т-Коинов в месяц)</span>
              </li>
              <li className="plan-feature-row">
                <span className="feat-check"><Icon name="check" size={15} /></span>
                <div className="feat-with-action">
                  <span className="feat-text"><strong>Выбор карты в приложении</strong> (все темы дизайна)</span>
                  <button className="feat-action-link" onClick={onOpenCardDesigns}>Выбрать карту →</button>
                </div>
              </li>
              <li className="plan-feature-row">
                <span className="feat-check"><Icon name="check" size={15} /></span>
                <span className="feat-text"><strong>Выбор физической карты</strong> (заказ карты за Т-Коины)</span>
              </li>
              <li className="plan-feature-row">
                <span className="feat-check"><Icon name="check" size={15} /></span>
                <span className="feat-text"><strong>ИИ-ассистент</strong>: поможет разобраться с застоями и найти решение проблемы</span>
              </li>
              <li className="plan-feature-row">
                <span className="feat-check"><Icon name="check" size={15} /></span>
                <span className="feat-text"><strong>Уникальный выбор ИИ-ассистента</strong> (Джарвис, Матроскин, Смешарики и др.)</span>
              </li>
              <li className="plan-feature-row">
                <span className="feat-check"><Icon name="check" size={15} /></span>
                <span className="feat-text"><strong>Респект от одноклассников</strong> и золотой статус Прошка</span>
              </li>
              <li className="plan-feature-row">
                <span className="feat-check"><Icon name="check" size={15} /></span>
                <span className="feat-text">IT-лагерь и олимпиады при рейтинге 90+</span>
              </li>
            </ul>

            <button
              className="plan-select-button"
              onClick={() => {
                setIsSubscribed(true);
                onMessage("Подписка Т-Банк Прошка активирована");
              }}
            >
              {isSubscribed ? "Прошка подключена" : "Перейти на Прошку"}
            </button>
          </div>
        </div>
      </section>

      {/* AI Assistant Choice Showcase: Full-height Card + Tall Interactive iPhone Chat */}
      <section className="section stagger-3">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ИИ-АССИСТЕНТ ПО АККАУНТУ</div>
            <div className="section-title">Выбор твоего ассистента</div>
          </div>
          <span className="pro-mini-tag">В ПРОШКЕ</span>
        </div>

        <div className="ast-showcase-grid">
          {/* Left: Table card, matching height of iPhone */}
          <div className="assistant-custom-card full-height">
            <div className="ast-card-top-group">
              <span className="ast-label-title">Выбери персонажа для поддержки и анализа аккаунта:</span>

              {/* Character selection buttons */}
              <div className="ast-roster-grid">
                {assistants.map((ast, index) => (
                  <button
                    key={ast.id}
                    type="button"
                    className={`ast-roster-btn ${selectedAssistant === index ? "active" : ""}`}
                    onClick={() => setSelectedAssistant(index)}
                  >
                    <AssistantAvatar id={ast.id} size={26} />
                    <span className="ast-roster-name">{ast.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Middle: Details of chosen assistant & Quote */}
            <div className="ast-card-middle-group">
              <div className="ast-details-header">
                <AssistantAvatar id={currentAst.id} size={44} />
                <div>
                  <div className="ast-details-row">
                    <strong className="ast-details-name">{currentAst.name}</strong>
                    <span className="ast-details-series">{currentAst.series}</span>
                  </div>
                  <span className="ast-details-role">{currentAst.role}</span>
                </div>
              </div>

              <p className="ast-body-desc">{currentAst.desc}</p>

              <div className="ast-quote-box">
                <span className="ast-quote-kicker">Пример разбора темы:</span>
                <p className="ast-quote-phrase">{currentAst.quote}</p>
              </div>
            </div>

            {/* Bottom: Apply button */}
            <div className="ast-card-bottom-group">
              <button
                className="ast-apply-btn"
                onClick={() => onMessage(`Ассистент ${currentAst.name} закреплён`)}
              >
                Закрепить ассистента
              </button>
            </div>
          </div>

          {/* Right: Tall Interactive iPhone Mockup Chat */}
          <div className="ast-iphone-mockup full-height">
            <div className="iphone-outer-frame">
              {/* Dynamic Island and Status Bar */}
              <div className="iphone-top-sensor-bar">
                <span className="iphone-clock">09:41</span>
                <div className="iphone-dynamic-island" />
                <div className="iphone-status-icons">
                  <span className="iphone-signal">5G</span>
                  <span className="iphone-battery">100%</span>
                </div>
              </div>

              {/* Chat Header inside iPhone */}
              <div className="iphone-chat-header">
                <div className="iphone-chat-user-info">
                  <div className="iphone-avatar-wrapper">
                    <AssistantAvatar id={currentAst.id} size={36} />
                    <span className="iphone-online-dot" />
                  </div>
                  <div className="iphone-ast-meta">
                    <strong className="iphone-ast-name">{currentAst.name}</strong>
                    <span className="iphone-ast-status">ИИ-помощник Прошки • В сети</span>
                  </div>
                </div>
                <span className="iphone-badge-tag">{currentAst.series}</span>
              </div>

              {/* Chat Messages Body - Tall & Rich */}
              <div className="iphone-chat-body">
                <div className="chat-date-chip">Сегодня</div>

                {/* Initial bot check-in message */}
                <div className="chat-msg-row bot">
                  <div className="chat-msg-avatar">
                    <AssistantAvatar id={currentAst.id} size={28} />
                  </div>
                  <div className="chat-bubble bot">
                    <div className="bubble-bot-badge">Т-Банк Прошка</div>
                    <p className="bubble-text">Привет! Я твой ассистент по аккаунту. Проверил статус Т-Коинов и лимитов — всё готово к анализу.</p>
                    <span className="bubble-time">09:40</span>
                  </div>
                </div>

                {/* User Message */}
                <div className="chat-bubble user">
                  <p className="bubble-text">{currentAst.userQuery}</p>
                  <span className="bubble-time">09:41</span>
                </div>

                {/* Bot Response Message with exact quote & role */}
                <div className="chat-msg-row bot">
                  <div className="chat-msg-avatar">
                    <AssistantAvatar id={currentAst.id} size={28} />
                  </div>
                  <div className="chat-bubble bot highlight">
                    <div className="bubble-bot-badge">{currentAst.name} • Аудит</div>
                    <p className="bubble-text">{currentAst.botReply}</p>
                    <span className="bubble-time">09:42</span>
                  </div>
                </div>

                {/* Action Chip Button */}
                <button
                  type="button"
                  className="chat-action-chip"
                  onClick={() => onMessage(currentAst.actionFeedback)}
                >
                  <Icon name="check" size={13} />
                  <span>{currentAst.actionLabel}</span>
                </button>
              </div>

              {/* Simulated Input Bar */}
              <div className="iphone-input-bar">
                <div className="iphone-input-field">
                  <span>Сообщение ассистенту...</span>
                </div>
                <button
                  type="button"
                  className="iphone-send-btn"
                  onClick={() => onMessage(`Отправлено ассистенту ${currentAst.name}`)}
                  aria-label="Отправить"
                >
                  <Icon name="chevron" size={14} />
                </button>
              </div>

              {/* Home Indicator */}
              <div className="iphone-home-bar" />
            </div>
          </div>
        </div>
      </section>

      {/* T-Rating system info */}
      <section className="section stagger-4">
        <div className="rating-rules-card-minimal">
          <div className="eyebrow">СИСТЕМА Т-РЕЙТИНГА</div>
          <div className="section-title">Как начисляется рейтинг</div>
          <div className="rating-rules-grid">
            <div className="rule-box">
              <strong>60 — 80</strong>
              <span>+50 Т-Коинов бонус</span>
            </div>
            <div className="rule-box">
              <strong>80 — 100</strong>
              <span>+100 Т-Коинов бонус</span>
            </div>
            <div className="rule-box highlight">
              <strong>90+ Прошка</strong>
              <span>Путёвка в лагерь и олимпиады</span>
            </div>
          </div>
          <p className="rating-rules-note">
            Двойка даёт минус по рейтингу, но даётся месяц на реабилитацию по системе 2x рейтинга. В вузе высокий рейтинг открывает стажировку в Т-Банке.
          </p>
        </div>
      </section>

      <Footer onMessage={onMessage} />
    </main>
  );
}

function CoinSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="sheet-layer" role="dialog" aria-modal="true" aria-label="История Т-коинов">
      <button className="sheet-backdrop" onClick={onClose} aria-label="Закрыть" />
      <div className="sheet">
        <div className="sheet-handle" />
        <div className="sheet-head">
          <div><span>ТВОЙ БАЛАНС</span><strong>1 357 <small>Т</small></strong></div>
          <button className="sheet-close" onClick={onClose}>×</button>
        </div>
        <div className="coin-summary">
          <div><span>За учёбу</span><strong>+1 537</strong></div>
          <div><span>Потрачено</span><strong>−180</strong></div>
        </div>
        <div className="sheet-title">Последние операции</div>
        {[
          ["5 за алгебру", "Сегодня, 10:45", "+30"],
          ["4 за литературу", "Сегодня, 11:32", "+15"],
          ["Скидка на проезд", "Вчера, 08:10", "−80"],
          ["Недельная серия", "15 мая", "+50"],
        ].map(([title, date, value]) => (
          <div className="transaction" key={title}>
            <div className={value.startsWith("+") ? "transaction-icon plus" : "transaction-icon minus"}>{value.startsWith("+") ? "+" : "−"}</div>
            <div><strong>{title}</strong><span>{date}</span></div>
            <b className={value.startsWith("+") ? "positive" : ""}>{value} Т</b>
          </div>
        ))}
      </div>
    </div>
  );
}

const detailContent: Record<Exclude<Detail, null>, { eyebrow: string; title: string; description: string }> = {
  notifications: {
    eyebrow: "ЦЕНТР СОБЫТИЙ",
    title: "Уведомления",
    description: "Здесь собраны новые оценки, достижения и важные события.",
  },
  rating: {
    eyebrow: "Т‑РЕЙТИНГ",
    title: "86 из 100",
    description: "Рейтинг растёт благодаря хорошим оценкам, сериям без двоек и участию в олимпиадах.",
  },
  offers: {
    eyebrow: "ПАРТНЁРЫ",
    title: "Все привилегии",
    description: "Трать коины с пользой: на книги, обучение, транспорт и спорт.",
  },
  settings: {
    eyebrow: "ПРОФИЛЬ",
    title: "Настройки",
    description: "Управляй профилем, темой приложения и способом получения уведомлений.",
  },
  security: {
    eyebrow: "БЕЗОПАСНОСТЬ",
    title: "Лимиты и контроль",
    description: "Покупки защищены, а дневной лимит согласован с родителем.",
  },
  support: {
    eyebrow: "ПОДДЕРЖКА",
    title: "Чем помочь?",
    description: "Обычно мы отвечаем в чате за несколько минут.",
  },
  logout: {
    eyebrow: "ПРОФИЛЬ",
    title: "Выйти из аккаунта?",
    description: "Чтобы вернуться, потребуется снова ввести код доступа.",
  },
};

function DetailSheet({ detail, onClose, onMessage }: { detail: Exclude<Detail, null>; onClose: () => void; onMessage: (message: string) => void }) {
  const content = detailContent[detail];
  const rows = detail === "notifications"
    ? [["Новая оценка", "5 по алгебре · +30 Т"], ["Рейтинг вырос", "Теперь ты в топ‑12% класса"], ["Новая награда", "Доступна скидка на книги"]]
    : detail === "rating"
      ? [["Учёба", "42 балла"], ["Серия без двоек", "24 балла"], ["Активность", "20 баллов"]]
      : detail === "offers"
        ? [
            ["Вкусно — и точка", "Бургеры и комбо · от 250 Т"],
            ["ЛитРес", "Книги без доплат · от 300 Т"],
            ["Читай-город", "Манга и комиксы · от 280 Т"],
            ["Киномакс", "Билеты в кино · от 350 Т"],
            ["Спортмастер", "Спорт и экип · от 400 Т"],
            ["Глория Джинс", "Стильная одежда · от 450 Т"],
            ["Леонардо", "Всё для хобби · от 200 Т"],
            ["Учи.ру", "Курсы и олимпиады · от 180 Т"],
            ["Colizeum", "Арена и игры · от 220 Т"],
            ["Транспорт", "Скидка на проезд · от 150 Т"]
          ]
        : detail === "security"
          ? [["Дневной лимит", "1 500 Т-Коинов"], ["Покупки в интернете", "Разрешены"], ["Подтверждение родителя", "Свыше 2 000 Т-Коинов"]]
          : detail === "settings"
            ? [["Личные данные", "Михаил Воронов"], ["Уведомления", "Все включены"], ["Тема", "Системная"]]
            : detail === "support"
              ? [["Чат с поддержкой", "Ответим за 2 минуты"], ["Частые вопросы", "12 полезных ответов"]]
              : [];

  const actionLabel = detail === "logout" ? "Да, выйти" : detail === "support" ? "Написать в чат" : "Готово";
  return (
    <div className="sheet-layer" role="dialog" aria-modal="true" aria-label={content.title}>
      <button className="sheet-backdrop" onClick={onClose} aria-label="Закрыть" />
      <div className="sheet detail-sheet">
        <div className="sheet-handle" />
        <div className="detail-heading">
          <span>{content.eyebrow}</span>
          <strong>{content.title}</strong>
          <p>{content.description}</p>
        </div>
        {detail === "rating" && <div className="rating-meter"><i /><span>Ещё 4 балла до награды</span></div>}
        {rows.length > 0 && <div className="detail-list">
          {rows.map(([title, subtitle], index) => (
            <button className="detail-row" key={title} onClick={() => onMessage(`${title}: ${subtitle}`)}>
              <span className="detail-index">{detail === "notifications" ? index + 1 : "✓"}</span>
              <span><strong>{title}</strong><small>{subtitle}</small></span>
              <Icon name="chevron" size={17} />
            </button>
          ))}
        </div>}
        <button className={detail === "logout" ? "primary-action danger-action" : "primary-action"} onClick={() => {
          onClose();
          onMessage(detail === "logout" ? "Это демо — профиль сохранён" : detail === "support" ? "Чат поддержки открыт" : "Изменения сохранены");
        }}>{actionLabel}</button>
      </div>
    </div>
  );
}

function ReferralSheet({
  onClose,
  onMessage,
}: {
  onClose: () => void;
  onMessage: (message: string) => void;
}) {
  const promoCode = "MISHA500";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard?.writeText(promoCode);
    setCopied(true);
    onMessage("Промокод MISHA500 скопирован! Отправь друзьям");
    setTimeout(() => setCopied(false), 2200);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Т-Банк Джуниор — Копи коины за оценки!",
        text: "Оформляй карту Т-Банк с моим промокодом MISHA500: получай 2 месяца бесплатного обслуживания и 50 Т-Коинов!",
        url: window.location.href,
      }).catch(() => handleCopy());
    } else {
      handleCopy();
    }
  };

  return (
    <div className="sheet-layer referral-sheet-layer" role="dialog" aria-modal="true" aria-label="Реферальная программа">
      <button className="sheet-backdrop" onClick={onClose} aria-label="Закрыть" />
      <div className="sheet referral-sheet">
        <div className="sheet-handle" />
        <div className="sheet-head">
          <div>
            <span className="referral-sheet-kicker">РЕФЕРАЛЬНАЯ СИСТЕМА</span>
            <strong>Зови друзей в Т‑Банк</strong>
          </div>
          <button className="sheet-close" onClick={onClose} aria-label="Закрыть">×</button>
        </div>

        <div className="referral-promo-card">
          <div className="referral-promo-header">
            <span>ТВОЙ РЕФЕРАЛЬНЫЙ ПРОМОКОД</span>
            <span className="referral-badge-pill">+250 Т‑Коинов</span>
          </div>
          <div className="referral-code-row">
            <span className="referral-code-text">{promoCode}</span>
            <button className={`referral-copy-btn ${copied ? "copied" : ""}`} onClick={handleCopy}>
              <Icon name={copied ? "check" : "copy"} size={16} />
              <span>{copied ? "Скопировано" : "Скопировать"}</span>
            </button>
          </div>
          <p className="referral-promo-hint">
            Тебе придёт <strong>+250 Т‑Коинов</strong>, а приглашённому другу — <strong>2 месяца бесплатного обслуживания</strong> и <strong>+50 Т‑Коинов</strong>.
          </p>
        </div>

        <div className="referral-steps-container">
          <div className="referral-step-item">
            <div className="referral-step-num">1</div>
            <div className="referral-step-text">
              <strong>Поделись кодом</strong>
              <span>С друзьями и классом</span>
            </div>
          </div>
          <div className="referral-step-item">
            <div className="referral-step-num">2</div>
            <div className="referral-step-text">
              <strong>Привязка дневника</strong>
              <span>Оценки в Т‑Коины</span>
            </div>
          </div>
          <div className="referral-step-item">
            <div className="referral-step-num">3</div>
            <div className="referral-step-text">
              <strong>Бонусы обоим</strong>
              <span>+250 тебе, 50 Т и 2 мес другу</span>
            </div>
          </div>
        </div>

        <div className="referral-partners-banner">
          <span className="referral-partners-label">ПАРТНЁРЫ ДЛЯ СПИСАНИЯ КОИНОВ:</span>
          <div className="referral-partners-tags">
            <span className="partner-tag">Вкусно — и точка</span>
            <span className="partner-tag">ЛитРес</span>
            <span className="partner-tag">Детский мир</span>
            <span className="partner-tag">100балльный репетитор</span>
          </div>
        </div>

        <div className="referral-sheet-actions">
          <button className="referral-primary-btn" onClick={handleShare}>
            <Icon name="share" size={18} />
            <span>Поделиться ссылкой</span>
          </button>
          <button className="referral-secondary-btn" onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

function CardDesignSheet({
  selectedId,
  isSubscribed,
  onSelect,
  onClose,
  onOpenPro,
  onMessage,
}: {
  selectedId: string;
  isSubscribed: boolean;
  onSelect: (id: string) => void;
  onClose: () => void;
  onOpenPro?: () => void;
  onMessage: (message: string) => void;
}) {
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  const renderCard = (card: CardDesignItem) => {
    const isSelected = selectedId === card.id;
    return (
      <button
        key={card.id}
        type="button"
        className={`card-item ${isSelected ? "selected" : ""}`}
        onClick={() => {
          if (card.isPro && !isSubscribed) {
            if (onOpenPro) {
              onOpenPro();
            } else {
              onMessage("Доступно с подпиской ПРОШКА");
            }
          } else {
            onSelect(card.id);
            onMessage(`Выбран дизайн: ${card.name}`);
          }
        }}
      >
        <div className="card-photo-box">
          <img
            src={card.imageSrc}
            alt={card.name}
            className="card-photo-img"
            loading="lazy"
          />
          {card.isPro && !isSubscribed && (
            <div
              className="card-pro-badge-pill"
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenPro) {
                  onOpenPro();
                } else {
                  onMessage("Доступно с подпиской ПРОШКА");
                }
              }}
            >
              <Icon name="lock" size={11} />
              <span>Прошка</span>
            </div>
          )}
          {isSelected && (
            <div className="card-selected-badge">
              <Icon name="check" size={12} />
            </div>
          )}
        </div>

        <div className="card-item-details">
          <div className="card-item-header">
            <span className="card-item-name">{card.name}</span>
            {isSelected && (
              <span className="card-status-badge selected">
                <Icon name="check" size={10} />
                <span>Выбрана</span>
              </span>
            )}
          </div>
          <span className="card-item-category">
            {card.isPro ? "Премиум дизайн" : "Стандартный дизайн"}
          </span>
        </div>
      </button>
    );
  };

  return (
    <div className="sheet-layer card-designs-sheet-layer" role="dialog" aria-modal="true" aria-label="Выбор дизайна карты">
      <button className="sheet-backdrop" onClick={onClose} aria-label="Закрыть" />
      <div className="sheet card-designs-sheet">
        <div className="sheet-handle" />
        <div className="sheet-head">
          <div>
            <span>ПЕРСОНАЛИЗАЦИЯ</span>
            <strong>Дизайн карты</strong>
          </div>
          <button className="sheet-close" onClick={onClose} aria-label="Закрыть">×</button>
        </div>

        <div className="cards-scroll-area">
          <div className="cards-section-label">Базовые темы</div>
          <div className="cards-grid">
            {freeCards.map(renderCard)}
          </div>

          <div className="cards-section-divider">
            <div className="cards-section-label">Премиальные темы</div>
          </div>
          <div className="cards-grid">
            {proCards.map(renderCard)}
          </div>
        </div>

        <button className="card-sheet-action" onClick={onClose}>
          Готово
        </button>
      </div>
    </div>
  );
}

function SchoolNotebookBackground() {
  return (
    <div className="school-bg-layer" aria-hidden="true">
      {/* Полупрозрачные тетрадные листы */}
      <div className="notebook-sheet-decor sheet-top-right">
        <div className="sheet-tape" />
        <div className="sheet-margin-line" />
      </div>

      <div className="notebook-sheet-decor sheet-mid-left">
        <div className="sheet-tape tape-yellow" />
        <div className="sheet-margin-line" />
      </div>

      <div className="notebook-sheet-decor sheet-bottom-right">
        <div className="sheet-tape" />
        <div className="sheet-margin-line" />
      </div>

      {/* Меловые минималистичные смайлики и загагулины */}
      <svg className="doodle doodle-smiley-1" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 2" fill="none" />
        <path d="M16 19c1-1.5 3-1.5 4 0 M28 19c1-1.5 3-1.5 4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M16 27c2.5 4 13.5 4 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>

      <svg className="doodle doodle-plane" viewBox="0 0 60 50">
        <path d="M4 38 L48 8 L30 46 L24 32 Z M24 32 L48 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M4 38 Q-2 44 4 48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      </svg>

      <svg className="doodle doodle-squiggle-1" viewBox="0 0 120 40">
        <path d="M6 24 C20 4, 30 4, 44 22 C58 40, 68 40, 82 22 C96 4, 106 12, 114 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>

      <svg className="doodle doodle-star-1" viewBox="0 0 36 36">
        <path d="M18 3 L22 13 L33 14 L24 21 L27 32 L18 25 L9 32 L12 21 L3 14 L14 13 Z" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      <svg className="doodle doodle-grade" viewBox="0 0 54 54">
        <circle cx="27" cy="27" r="22" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="5 2" fill="none" />
        <path d="M20 18 h11 v7 c0 4 -4 5 -7 5 M35 22 v10 M30 27 h10" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>

      <svg className="doodle doodle-smiley-2" viewBox="0 0 46 46">
        <circle cx="23" cy="23" r="19" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 2" fill="none" />
        <path d="M14 19 l6 0 M26 18 c1 -1.5 3 -1.5 4 0 M15 28 c2.5 3.5 12 3.5 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>

      <svg className="doodle doodle-spiral" viewBox="0 0 44 44">
        <path d="M22 22 A3 3 0 0 1 25 22 A6 6 0 0 1 19 22 A9 9 0 0 1 28 22 A12 12 0 0 1 16 22 A15 15 0 0 1 31 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>

      <svg className="doodle doodle-bulb" viewBox="0 0 36 46">
        <path d="M12 28 C8 24 6 18 8 12 A10 10 0 0 1 28 12 C30 18 28 24 24 28 Z M13 32 h10 M14 36 h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="18" y1="2" x2="18" y2="5" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="6" x2="8" y2="8" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="6" x2="28" y2="8" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <svg className="doodle doodle-sparkle" viewBox="0 0 32 32">
        <path d="M16 2 Q16 16 2 16 Q16 16 16 30 Q16 16 30 16 Q16 16 16 2" stroke="#eab308" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>

      <svg className="doodle doodle-arrow" viewBox="0 0 50 36">
        <path d="M6 24 Q18 6 36 12 Q44 16 46 20 M38 12 L46 20 L38 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      <svg className="doodle doodle-smiley-3" viewBox="0 0 48 48">
        <path d="M15 11 L19 16 L24 10 L29 16 L33 11 L31 19 L17 19 Z" stroke="#eab308" strokeWidth="1.8" fill="none" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="27" r="15" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="19" cy="25" r="1.5" fill="currentColor" />
        <circle cx="29" cy="25" r="1.5" fill="currentColor" />
        <path d="M18 32 c2 2.5 8 2.5 12 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>

      <svg className="doodle doodle-squiggle-2" viewBox="0 0 140 30">
        <path d="M5 15 Q20 2 35 15 T65 15 T95 15 T125 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [coinsOpen, setCoinsOpen] = useState(false);
  const [cardDesignsOpen, setCardDesignsOpen] = useState(false);
  const [referralOpen, setReferralOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState("card-2");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [detail, setDetail] = useState<Detail>(null);
  const [message, setMessage] = useState("");
  const showMessage = (value: string) => {
    setMessage(value);
    window.setTimeout(() => setMessage(""), 2400);
  };
  const tabs: { id: Tab; label: string; icon: "book" | "home" | "crown" | "user" }[] = [
    { id: "diary", label: "Дневник", icon: "book" },
    { id: "home", label: "Главная", icon: "home" },
    { id: "pro", label: "Прошка", icon: "crown" },
    { id: "profile", label: "Профиль", icon: "user" },
  ];

  return (
    <div className="app-shell">
      <SchoolNotebookBackground />
      <div className="phone">
        {tab === "home" && (
          <Home
            onOpenCoins={() => setCoinsOpen(true)}
            onOpenDetail={setDetail}
            onOpenCardDesigns={() => setCardDesignsOpen(true)}
            onOpenReferral={() => setReferralOpen(true)}
            onMessage={showMessage}
            selectedCardId={selectedCardId}
          />
        )}
        {tab === "diary" && <Diary onOpenDetail={setDetail} onMessage={showMessage} />}
        {tab === "pro" && (
          <ProSection
            isSubscribed={isSubscribed}
            setIsSubscribed={setIsSubscribed}
            onOpenCardDesigns={() => setCardDesignsOpen(true)}
            onMessage={showMessage}
          />
        )}
        {tab === "profile" && <Profile onOpenDetail={setDetail} onMessage={showMessage} />}
        <nav className="bottom-nav" aria-label="Основная навигация">
          {tabs.map((item) => (
            <button className={tab === item.id ? "nav-item active" : "nav-item"} onClick={() => {
              setTab(item.id);
              setCoinsOpen(false);
              setCardDesignsOpen(false);
              setReferralOpen(false);
              setDetail(null);
            }} key={item.id}>
              <span className="nav-icon"><Icon name={item.icon} size={23} /></span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        {coinsOpen && <CoinSheet onClose={() => setCoinsOpen(false)} />}
        {referralOpen && <ReferralSheet onClose={() => setReferralOpen(false)} onMessage={showMessage} />}
        {cardDesignsOpen && (
          <CardDesignSheet
            selectedId={selectedCardId}
            isSubscribed={isSubscribed}
            onSelect={setSelectedCardId}
            onClose={() => setCardDesignsOpen(false)}
            onOpenPro={() => {
              setCardDesignsOpen(false);
              setTab("pro");
            }}
            onMessage={showMessage}
          />
        )}
        {detail && <DetailSheet detail={detail} onClose={() => setDetail(null)} onMessage={showMessage} />}
        {message && <div className="toast" role="status">{message}</div>}
      </div>
    </div>
  );
}
