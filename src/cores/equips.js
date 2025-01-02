export const accquiredMeso = (accLevel, starforce, ct) => {
    const numerator = [36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 571, 314, 214, 157, 107, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200][starforce]
    const multiplier = (starforce < 10) ? 1 : 2.7
    let meso = 1000 + Math.pow(accLevel, 3)*Math.pow(starforce+1, multiplier)/numerator
    if (ct) meso *= 0.7
    return Math.round(meso/10)*10
}

export const bossAcc = {
    "루즈 컨트롤 머신 마크": 160,
    "마력이 깃든 안대": 160,
    "몽환의 벨트": 200,
    "고통의 근원": 200,
    "거대한 공포": 200,
    "커맨더 포스 이어링": 200,
    "트와일라이트 마크": 160,
    "에스텔라 이어링": 160,
    "여명의 가디언 엔젤 링": 160,
    "가디언 엔젤 링": 160,
    "데이브레이크 펜던드": 160,
    "도미네이터 팬던트": 140,
}

export const Routa = ["하이네스", "트릭스터", "이글아이", "파프니르"]

