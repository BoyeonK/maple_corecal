const cores = {
  '히어로': {
    sname: ['브랜디쉬', '플래시 슬래시', '파이널 어택', '브레이브 슬래시', '리프 어택/돌진/어퍼 차지', '오라 블레이드', '레이징 블로우', '인사이징', '레이지 업라이징', '발할라'],
    smodi: ['공격', '포스', '최후', '용맹', '진격', '균열', '분노', '검격', '광분', '분격'],
    dft: [false, false, true, false, false, false, true, false, true, true],
  },
  '팔라딘': {
    sname: ['파이널 어택', '페이지 오더', '디바인 스윙', '디바인 차지', '리프어택/돌진/어퍼 차지', '블래스트', '디바인 저지먼트/디바인 스티그마', '생츄어리', '스마이트'],
    smodi: ['최후', '전투', '회전', '신성', '진격', '폭발', '심판', '성역', '강타'],
    dft: [true, false, false, true, false, true, true, true, true],
  },
  '다크나이트': {
    sname: ['파이널 어택', '스피어 풀링', '비홀더', '라만차 스피어', '리프어택/돌진/어퍼 차지', '궁니르 디센트', '다크 임페일', '다크 신서시스'],
    smodi: ['최후', '인력', '충격', '창격', '진격', '마창', '어둠', '합일'],
    dft: [true, false, true, false, true, true, true, true],
  },
  '불독': {
    sname: ['플레임 오브', '포이즌 브레스', '이그나이트', '익스플로전', '펠레포트 마스터리/포이즌 리전', '포이즌 미스트', '플레임 스윕', '미스트 이럽션', '이프리트', '플레임 헤이즈', '메테오', '파이어 오라', '메기도 플레임'],
    smodi: ['불꽃', '맹독', '점화', '폭발', '전이', '독안개', '마비', '침투', '마신', '아지랑이', '운석', '화염', '묵시록'],
    dft: [false, false, true, false, true, false, true, true, true, true, true, true, true]
  },
  '썬콜': {
    sname: ['콜드 빔', '썬더 볼트', '칠링 스텝', '아이스 스트라이크', '클레이셜 월', '썬더 스피어', '체인 라이트닝', '블리자드', '프로즌 오브', '엘퀴네스', '라이트닝 스피어',],
    smodi: ['서리광선', '뇌살', '한기', '빙격', '빙하', '뇌구', '연쇄번개', '눈보라', '구체', '정령', '뇌창'],
    dft: [false, false, false, true, false, true, true, true, true, false, true],
  },
  '비숍': {
    sname: ['힐/엔젤릭 터치', '홀리 애로우', '샤이닝 레이', '빅뱅', '바하뮤트', '엔젤레이', '제네시스/트라이엄프 페더', '헤븐즈 도어/파운틴 포 엔젤'],
    smodi: ['회복', '신성', '빛', '폭발', '환수', '천사', '기원', '천국'],
    dft: [true, false, false, true, true, true, true, true],
  },
  '직업': {
    sname: [],
    smodi: [],
    dft: [],
  },
  '나이트로드': {
    sname: ['마크 오브 어쌔신/나이트로드', '슈리켄 버스트', '윈드 탈리스만', '트리플 스로우', '슈리켄 챌린지', '다크 플레어', '쿼드러플 스로우', '써든레이드', '쇼다운 챌린지', '포 시즌', ],
    smodi: ['암살', '수리검', '풍운', '삼연격', '분영', '흑염', '사연격', '습격', '대결', '합격', ],
    dft: [],
  },
  '섀도어': {
    sname: ['새비지 블로우', '엣지 카니발', '메소 익스플로전', '무스펠 하임', '다크 플레어', '암살', '크루얼 스탭', '써든레이드', '베일 오브 섀도우', ],
    smodi: ['흉포', '칼날', '메소', '화염', '흑염', '암살', '관통', '습격', '그림자', ],
    dft: [],
  },
  '듀얼블레이드': {
    sname: ['샤프 슬래시', '토네이도 스핀', '페이탈 블로우', '슬래시 스톰', '플래시 뱅', '플라잉 어썰터', '블러디 스톰', '사슬지옥', '블레이드 어센션', '팬텀 블로우', '블레이드 퓨리', '파이널 컷', '써든레이드', '히든 블레이드', '아수라', ],
    smodi: ['칼날', '회전', '치명', '칼날폭풍', '섬광', '창공', '혈풍', '사슬', '상승', '유령', '분노', '최후', '습격', '베일', '수라', ],
    dft: [],
  },
  '윈드브레이커': {
    sname: ['브리즈 애로우', '거스트 샷', '스파이럴 볼텍스', '트라이플링 윔/스톰 윔', '핀포인트 피어스', '서리바람의 군무', '페어리 턴', '천공의 노래', '스톰 브링어', '몬순'],
    smodi: ['화살', '돌풍', '나선', '변덕', '관통', '서리', '요정', '천공', '폭풍', '계절풍'],
  },
  '칼리': {
    sname: ['아츠: 크로스컷', '아츠: 듀얼 엣지', '보이드 러쉬', '아츠: 트리플 배쉬', '레조네이트/디시빙 블레이드', '헥스: 차크람 스윕/스플릿/퓨리', '아츠: 플러리/크레센텀', '보이드 블리츠', '데스 블로섬'],
    smodi: ['절단', '양날', '질주', '강습', '공명', '명령', '연격', '기습', '개화'],
  },
  '아란': {
    sname: ['아','란','너프시급','아무튼 너프시급'],
    smodi: [],
  },
  '메카닉': {
    sname: ['메','카','닉','조속한 너프필요','유도미사일','설치기','파티유틸'],
    smodi: [],
  },
  '엔젤릭버스터': {
    sname: ['석세서', '버블 스타', '스팅 익스플로젼', '핑크 스커드', '소울 시커', '스타 크래시', '프라이멀 로어', '피니투라 페투치아', '소울 레조넌스', '트리니티', '슈퍼 노바'],
    smodi: ['계승', '별', '폭발', '분홍', '추적', '고드름', '함성', '숙명', '공명', '삼위', '초신성'],
  },
  '메르세데스': {
    sname: ['스피드 듀얼샷/크로스 피어싱', '하이킥 데몰리션/롤링 문썰트', '스듀샷/파이널어택', '리프 토네이도/거스트다이브', '유니콘 스파이크', '엘리멘탈 나이트', '이슈타르 링', '레전드리 스피어', '라이트닝 엣지', '래쓰 오브 엔릴'],
    smodi: ['쌍격', '응축', '속사', '회오리', '유니콘', '영광', '이슈타르', '전설', '나선', '유령'],
  },
  '스트라이커': {
    sname:['충아', '섬광', '회축', '파도/해파', '승천', '뇌성', '질풍/태풍', '벽력', '섬멸', '해신강림'],
    smodi:['아', '섬광', '각', '파도', '승천', '뇌성', '질풍', '벽력', '극', '해신'],
  },
  '은월': {
    sname:['섬권', '파력권', '파쇄철조', '여우령', '통백권', '소혼 장막', '속박술', '환령 강신', '폭류권', '귀참', '사혼 각인', '분혼 격참', '정령의 화신'],
    smodi:['정권', '파력', '파쇄', '여우령', '통백', '소혼', '속박', '강신', '폭류', '귀참', '각인', '분혼', '정령'],
  },
  'Option 5': {
    sname: ['에러방지용'],
    smodi: [],
  },
}

export default cores