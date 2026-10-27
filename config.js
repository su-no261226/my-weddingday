/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "박순호",
    nameEn: "박순호",
    father: "박종일",
    mother: "김순옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "심은혜",
    nameEn: "심은혜",
    father: "",
    mother: "이숙자",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-26",
    time: "17:00",
    venue: "대전 씨엘드포레",
    hall: "7층 단독홀",
    address: "대전광역시 동구 동서대로 1700 호텔선샤인",
    tel: "0507-1353-6524",
    mapLinks: {
      kakao: "https://place.map.kakao.com/387191162",
      naver: "https://naver.me/x67ywAmF"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "we invite you to be part of our story.",
    message: "서로의 곁에서 같은 방향을 바라보며\n새로운 시작을 하려 합니다.\n\n저희 두 사람의 첫걸음에 함께하시어\n따뜻한 축복으로 자리를 빛내 주세요.\n\n박순호 · 심은혜 드림"
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "박순호", bank: "농협은행", number: "352-3365-0897-03" },
      { role: "아버지", name: "박종일", bank: "농협은행", number: "352-0270-6065-43" },
      { role: "어머니", name: "김순옥", bank: "농협은행", number: "352-1313~1624-73" }
    ],
    bride: [
      { role: "신부", name: "심은혜", bank: "카카오뱅크", number: "3333-05-9301477" },
      { role: "어머니", name: "이숙자", bank: "농협은행", number: "207084-55-000502" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "순호 & 은혜, 우리의 결혼식을 초대합니다.",
    description: ""
  }
};
