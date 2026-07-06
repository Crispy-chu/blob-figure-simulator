const RARITIES = [
  { key: "common", name: "일반", chance: 35, color: "#cfcfc8", card: "#d4d2cd" },
  { key: "rare", name: "희귀", chance: 30, color: "#70e95d", card: "#f6d365" },
  { key: "hero", name: "영웅", chance: 25, color: "#5ebcff", card: "#78c9ff" },
  { key: "legendary", name: "전설", chance: 9, color: "#ff9d2e", card: "#ffa63b" },
  { key: "mythic", name: "신화", chance: 1, color: "#ff5fb7", card: "#ffd86c" },
];

const COST_BY_LOCKS = [5, 10, 20, 30];
const RARITY_KEYS = RARITIES.map((rarity) => rarity.key);

const rangeA = ranges([0.1, 2], [2, 4], [4, 6], [6, 8], [8, 10]);
const rangeB = ranges([0.1, 3], [3, 6], [6, 9], [9, 12], [12, 15]);
const rangeCrit = ranges([0.1, 1], [1, 2], [2, 3], [3, 4], [4, 5]);
const rangeBat = ranges([0.01, 0.2], [0.2, 0.4], [0.4, 0.6], [0.6, 0.8], [0.8, 1]);
const rangeFlat15 = ranges([0.1, 3], [3, 6], [6, 9], [9, 12], [12, 15]);
const rangeSherbet = ranges([0.1, 0.5], [0.5, 1], [1, 1.5], [1.5, 2], [2, 2.5]);
const rangeJju = ranges([0.1, 0.3], [0.3, 0.6], [0.6, 0.9], [0.9, 1.2], [1.2, 1.5]);
const rangeBread = ranges([0.01, 0.4], [0.4, 0.8], [0.8, 1.2], [1.2, 1.6], [1.6, 2]);
const rangeBurgerChance = ranges([2, 6], [6, 12], [12, 18], [18, 24], [24, 30]);
const rangeBurgerBonus = ranges([0.01, 0.1], [0.1, 0.2], [0.2, 0.3], [0.3, 0.4], [0.4, 0.5]);
const rangeCola = ranges([1, 5], [5, 10], [10, 15], [15, 20], [20, 25]);
const rangeSoda = ranges([1, 2], [2, 4], [4, 6], [6, 8], [8, 10]);
const rangeSaiyan = ranges([1, 20], [20, 30], [40, 60], [60, 80], [80, 100]);
const rangeMove = ranges([1, 5], [5, 10], [10, 15], [15, 20], [20, 25]);
const rangeHalloween = ranges([0.1, 4], [4, 8], [8, 12], [12, 16], [16, 20]);
const rangeV3 = ranges([0.1, 1], [1, 2], [2, 3], [3, 4], [4, 5]);
const rangeEye = ranges([0.01, 0.1], [0.1, 0.2], [0.2, 0.3], [0.3, 0.4], [0.4, 0.5]);
const rangeSanta = ranges([5, 40], [40, 80], [80, 120], [120, 160], [160, 200]);

const FIGURES = [
  figure("diamond", "다이아블롭", "DI", "#76f2ff", "#fff06d", "공격력 증가", [stat("공격력", rangeA, "%")]),
  figure("gold", "골드블롭", "GO", "#9cf450", "#ffe25d", "공격속도 증가", [stat("공격속도", rangeA, "%")]),
  figure("fire", "파이어블롭", "FI", "#ff6f42", "#ffd15b", "기본공격피해 증가", [stat("기본공격피해", rangeB, "%")]),
  figure("water", "워터블롭", "WA", "#7cecff", "#d6fbff", "보스피해 증가", [stat("보스피해", rangeB, "%")]),
  figure("lava", "용암블롭", "LA", "#ff8a25", "#ffe06c", "스킬피해 증가", [stat("스킬피해", rangeA, "%")]),
  figure("cyborg", "사이보그블롭", "CY", "#a8f0df", "#d8e4ff", "물리피해 증가", [stat("물리피해", rangeA, "%")]),
  figure("skull", "스컬블롭", "SK", "#e7e4d9", "#ffffff", "마법피해 증가", [stat("마법피해", rangeA, "%")]),
  figure("dragon", "드래곤블롭", "DR", "#6dda64", "#ffe287", "치명타 확률 증가", [stat("치명타 확률", rangeCrit, "%")]),
  figure("wizard", "마법사블롭", "WZ", "#936cff", "#ffeb72", "치명타 피해 증가", [stat("치명타 피해", rangeB, "%")]),
  figure("bat", "배트블롭", "BA", "#4b5260", "#b792ff", "내 필드 위 신화 종류당 피해 증가", [stat("현재 보유 신화 종류 ×", rangeBat, "% 피해")]),
  figure("bamba", "밤바블롭", "BB", "#fdc36b", "#ffef7b", "기절한 적에게 주는 피해 증가", [stat("기절 피해", rangeA, "%")]),
  figure("trainer", "교관블롭", "TR", "#5ecb8a", "#f6f1ce", "둔화 효과 증가", [stat("둔화 효과", rangeFlat15, "")]),
  figure("military", "밀리터리블롭", "MI", "#788861", "#f5df8f", "방어력 감소 증가", [stat("방어력 감소", rangeFlat15, "")]),
  figure("coffee", "커피블롭", "CF", "#9a6a45", "#f5d4a0", "희귀 룰렛 소환 확률 증가", [stat("희귀 룰렛 소환 확률", rangeCrit, "%")]),
  figure("sherbet", "셔벗블롭", "SH", "#91f5ff", "#ffd0e8", "영웅 룰렛 소환 확률 증가", [stat("영웅 룰렛 소환 확률", rangeSherbet, "%")]),
  figure("jjujju", "쭈쭈바블롭", "JJ", "#ff77b8", "#ffe680", "전설 룰렛 소환 확률 증가", [stat("전설 룰렛 소환 확률", rangeJju, "%")]),
  figure("bread", "빵블롭", "BR", "#d89b58", "#fff2b0", "스킬 발동 확률 증가", [stat("스킬 발동 확률", rangeBread, "%")]),
  figure("burger", "버거블롭", "BG", "#79da62", "#ffcf5d", "처치 시 일정 확률로 코인 증가", [
    stat("코인 증가 확률", rangeBurgerChance, "%"),
    stat("추가 증가량", rangeBurgerBonus, ""),
  ]),
  figure("cola", "콜라블롭", "CL", "#c65642", "#ffffff", "웨이브마다 코인 지급", [stat("웨이브 코인", rangeCola, " 코인", true)]),
  figure("soda", "사이다블롭", "SD", "#75e8d9", "#ffffff", "웨이브마다 확률로 행운석 1개 지급", [stat("행운석 지급 확률", rangeSoda, "%")]),
  figure("saiyan", "초사이언블롭", "SS", "#f8dc4a", "#fff399", "시작 코인 증가", [stat("시작 코인", rangeSaiyan, "", true)]),
  figure("mamyson", "마미손블롭", "MS", "#ff5f8e", "#ffd1e0", "이동속도 증가", [stat("이동속도", rangeMove, "", true)]),
  figure("halloween", "할로인블롭", "HW", "#8f63ff", "#ffb35d", "마나회복속도 증가", [stat("마나회복속도", rangeHalloween, "")]),
  figure("meat", "고기블롭", "MT", "#e75c55", "#ffd7b0", "궁극기 쿨타임 감소 효과 증가", [stat("궁극기 쿨타임 감소 효과", rangeA, "%")]),
  figure("v3", "V3블롭", "V3", "#39e787", "#e9fff0", "최대 보유 가능한 영웅 수 증가", [stat("최대 영웅 수", rangeV3, "")]),
  figure("mask", "가면블롭", "MK", "#f1f1e6", "#ff6767", "단일 피해 증가", [stat("단일 피해", rangeB, "%")]),
  figure("flat", "짜부블롭", "FL", "#63c7ff", "#fff078", "범위 피해 증가", [stat("범위 피해", rangeB, "%")]),
  figure("oneeye", "외눈블롭", "OE", "#d58cff", "#f7e9ff", "현재 보유 영웅 수 × 수치만큼 피해 증가", [stat("현재 보유 영웅 수 ×", rangeEye, "% 피해")]),
  figure("fat", "비만블롭", "FT", "#f2b37c", "#ffefbf", "영웅 합성 시 확률로 등급업", [stat("등급업 확률", ranges([0.01, 0.2], [0.2, 0.4], [0.4, 0.6], [0.6, 0.8], [0.8, 1]), "%")]),
  figure("santa", "산타블롭", "SA", "#e74747", "#ffffff", "골렘 처치 시 코인 지급", [stat("골렘 처치 코인", rangeSanta, " 코인", true)]),
];

const dom = {
  topSlots: document.querySelector("#topSlots"),
  bottomSlots: document.querySelector("#bottomSlots"),
  resultList: document.querySelector("#resultList"),
  oddsList: document.querySelector("#oddsList"),
  historyList: document.querySelector("#historyList"),
  keyCount: document.querySelector("#keyCount"),
  pityCount: document.querySelector("#pityCount"),
  pityBar: document.querySelector("#pityBar"),
  guaranteeLabel: document.querySelector("#guaranteeLabel"),
  lockCount: document.querySelector("#lockCount"),
  costValue: document.querySelector("#costValue"),
  pullCost: document.querySelector("#pullCost"),
  pullBtn: document.querySelector("#pullBtn"),
  unlockAllBtn: document.querySelector("#unlockAllBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  addKeysBtn: document.querySelector("#addKeysBtn"),
  fillGaugeBtn: document.querySelector("#fillGaugeBtn"),
  statusText: document.querySelector("#statusText"),
};

const state = {
  keys: 706801,
  pity: 419,
  slots: [],
  history: [],
  rolling: false,
};

init();

function init() {
  state.slots = createInitialSlots();
  renderOdds();
  bindEvents();
  render();
  setStatus("준비 완료");
}

function bindEvents() {
  dom.pullBtn.addEventListener("click", pullFigures);
  dom.unlockAllBtn.addEventListener("click", unlockAll);
  dom.resetBtn.addEventListener("click", resetSimulation);
  dom.addKeysBtn.addEventListener("click", () => {
    state.keys += 500;
    setStatus("황금 열쇠 500개 추가");
    render();
  });
  dom.fillGaugeBtn.addEventListener("click", () => {
    state.pity += 500;
    setStatus("확정 게이지 500 증가");
    render();
  });
}

function createInitialSlots() {
  const picked = pickUniqueFigures(5, []);
  return picked.map((pickedFigure, index) => ({
    id: `slot-${index}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    index,
    locked: index >= 1 && index <= 3,
    result: createResult(pickedFigure),
  }));
}

function render() {
  const lockedCount = getLockedCount();
  const cost = getPullCost();
  dom.keyCount.textContent = formatNumber(state.keys);
  dom.pityCount.textContent = `${state.pity}/500`;
  dom.pityBar.style.width = `${Math.min(state.pity, 500) / 5}%`;
  dom.guaranteeLabel.textContent = state.pity >= 500 ? "다음 뽑기" : "신화 확정까지";
  dom.lockCount.textContent = `${lockedCount}/3`;
  dom.costValue.textContent = cost;
  dom.pullCost.textContent = cost;
  dom.pullBtn.disabled = state.rolling || state.keys < cost;
  dom.unlockAllBtn.disabled = state.rolling || lockedCount === 0;
  dom.resetBtn.disabled = state.rolling;
  dom.addKeysBtn.disabled = state.rolling;
  dom.fillGaugeBtn.disabled = state.rolling;
  renderSlots();
  renderResults();
  renderHistory();
}

function renderSlots() {
  const slotMarkup = state.slots.map((slot) => slotTemplate(slot)).join("");
  dom.topSlots.innerHTML = slotMarkup.slice(0, getNthSlotEnd(slotMarkup, 2));
  dom.bottomSlots.innerHTML = slotMarkup.slice(getNthSlotEnd(slotMarkup, 2));
  document.querySelectorAll(".slot").forEach((slotButton) => {
    slotButton.addEventListener("click", () => toggleLock(Number(slotButton.dataset.index)));
  });
}

function renderResults() {
  dom.resultList.innerHTML = state.slots.map((slot) => resultTemplate(slot)).join("");
  document.querySelectorAll(".result-card").forEach((card) => {
    card.addEventListener("click", () => toggleLock(Number(card.dataset.index)));
  });
}

function renderOdds() {
  dom.oddsList.innerHTML = RARITIES.map(
    (rarity) => `
      <div class="odd-row">
        <span class="odd-name"><span class="odd-chip" style="background:${rarity.color}"></span>${rarity.name}</span>
        <span>${rarity.chance}%</span>
      </div>
    `,
  ).join("");
}

function renderHistory() {
  if (state.history.length === 0) {
    dom.historyList.innerHTML = `<div class="history-item"><span class="history-sub">기록 없음</span></div>`;
    return;
  }

  dom.historyList.innerHTML = state.history
    .slice(0, 5)
    .map(
      (item) => `
        <div class="history-item">
          <div class="history-title">
            <span>${item.label}</span>
            <span>${item.cost}개</span>
          </div>
          <div class="history-sub">${item.summary}</div>
        </div>
      `,
    )
    .join("");
}

function slotTemplate(slot) {
  const result = slot.result;
  const rarity = getRarity(result.rarityKey);
  const lockedClass = slot.locked ? " locked" : "";
  const rollingClass = state.rolling && !slot.locked ? " rolling" : "";

  return `
    <button class="slot${lockedClass}${rollingClass}" type="button" data-index="${slot.index}" aria-label="${result.figure.name} ${slot.locked ? "잠금 해제" : "잠금"}">
      <div class="figure" style="--blob-color:${result.figure.color}; --accent:${result.figure.accent}; --rarity-color:${rarity.color}">
        <span class="aura"></span>
        <span class="figure-symbol">${result.figure.symbol}</span>
        <span class="body"><span class="mouth"></span></span>
        <span class="rarity-ring"></span>
      </div>
      <span class="platform"></span>
    </button>
  `;
}

function resultTemplate(slot) {
  const result = slot.result;
  const rarity = getRarity(result.rarityKey);
  const lockText = slot.locked ? "■" : "□";
  return `
    <button class="result-card${slot.locked ? " locked" : ""}" type="button" data-index="${slot.index}" style="--card-bg:${rarity.card}; --rarity-color:${rarity.color}" aria-label="${result.figure.name} ${slot.locked ? "잠금 해제" : "잠금"}">
      <div class="mini-figure" style="--blob-color:${result.figure.color}; --accent:${result.figure.accent}">
        <span class="figure-symbol">${result.figure.symbol}</span>
        <span class="body"><span class="mouth"></span></span>
      </div>
      <div class="card-content">
        <div class="card-head">
          <span class="rarity-badge">${rarity.name}</span>
          <span class="figure-name">${result.figure.name}</span>
          <span class="quality">(${result.quality}%)</span>
        </div>
        <div class="effect-line">${result.effectText}</div>
      </div>
      <span class="lock-pill" aria-hidden="true">${lockText}</span>
    </button>
  `;
}

function pullFigures() {
  if (state.rolling) return;
  const cost = getPullCost();

  if (state.keys < cost) {
    setStatus("황금 열쇠 부족");
    return;
  }

  const unlockedIndexes = state.slots.filter((slot) => !slot.locked).map((slot) => slot.index);
  const lockedFigureIds = state.slots.filter((slot) => slot.locked).map((slot) => slot.result.figure.id);
  const guaranteed = state.pity >= 500;
  const guaranteedIndex = guaranteed ? sample(unlockedIndexes) : null;
  const pickedFigures = pickUniqueFigures(unlockedIndexes.length, lockedFigureIds);

  state.rolling = true;
  setStatus(guaranteed ? "신화 확정 뽑기 진행 중" : "뽑기 진행 중");
  render();

  window.setTimeout(() => {
    unlockedIndexes.forEach((slotIndex, order) => {
      const slot = state.slots[slotIndex];
      const forcedRarity = guaranteed && slotIndex === guaranteedIndex ? "mythic" : null;
      slot.result = createResult(pickedFigures[order], forcedRarity);
    });

    state.keys -= cost;
    state.pity = guaranteed ? state.pity + cost - 500 : state.pity + cost;
    state.history.unshift({
      label: guaranteed ? "신화 확정" : "일반 뽑기",
      cost,
      summary: summarizeRoll(unlockedIndexes),
    });
    state.history = state.history.slice(0, 12);
    state.rolling = false;
    setStatus(guaranteed ? "신화 피규어 등장" : "뽑기 완료");
    render();
  }, 820);
}

function toggleLock(index) {
  if (state.rolling) return;
  const slot = state.slots[index];
  if (!slot) return;

  if (slot.locked) {
    slot.locked = false;
    setStatus(`${slot.result.figure.name} 잠금 해제`);
    render();
    return;
  }

  if (getLockedCount() >= 3) {
    setStatus("최대 3개까지 잠금 가능");
    return;
  }

  slot.locked = true;
  setStatus(`${slot.result.figure.name} 잠금`);
  render();
}

function unlockAll() {
  state.slots.forEach((slot) => {
    slot.locked = false;
  });
  setStatus("전체 잠금 해제");
  render();
}

function resetSimulation() {
  state.keys = 706801;
  state.pity = 419;
  state.history = [];
  state.rolling = false;
  state.slots = createInitialSlots();
  setStatus("초기화 완료");
  render();
}

function getLockedCount() {
  return state.slots.filter((slot) => slot.locked).length;
}

function getPullCost() {
  return COST_BY_LOCKS[getLockedCount()];
}

function createResult(pickedFigure, forcedRarityKey = null) {
  const rarityKey = forcedRarityKey ?? rollRarity();
  const quality = randomInt(1, 100);
  const values = pickedFigure.stats.map((entry) => valueFromRange(entry.ranges[rarityKey], quality, entry.integer));
  return {
    figure: pickedFigure,
    rarityKey,
    quality,
    values,
    effectText: formatEffect(pickedFigure, values),
  };
}

function formatEffect(pickedFigure, values) {
  const first = formatValue(values[0]);

  switch (pickedFigure.id) {
    case "burger":
      return `처치 시 ${first}% 확률로 코인 ${formatValue(values[1])} 추가`;
    case "cola":
      return `웨이브마다 ${first} 코인 지급`;
    case "soda":
      return `웨이브마다 ${first}% 확률로 행운석 1개 지급`;
    case "bat":
      return `현재 보유 신화 종류 × ${first}% 피해 증가`;
    case "oneeye":
      return `현재 보유 영웅 수 × ${first}% 피해 증가`;
    case "fat":
      return `영웅 합성 시 ${first}% 확률로 등급업`;
    case "santa":
      return `골렘 처치 시 ${first} 코인 지급`;
    default:
      break;
  }

  const entry = pickedFigure.stats[0];
  return `${entry.label} ${first}${entry.unit} 증가`;
}

function summarizeRoll(indexes) {
  const rolled = indexes.map((index) => state.slots[index].result);
  const best = rolled.reduce((top, result) => {
    const topRank = RARITY_KEYS.indexOf(top.rarityKey);
    const resultRank = RARITY_KEYS.indexOf(result.rarityKey);
    return resultRank > topRank ? result : top;
  }, rolled[0]);
  const rarity = getRarity(best.rarityKey);
  return `${rarity.name} ${best.figure.name} (${best.quality}%)`;
}

function rollRarity() {
  const roll = Math.random() * 100;
  let cursor = 0;
  for (const rarity of RARITIES) {
    cursor += rarity.chance;
    if (roll < cursor) return rarity.key;
  }
  return "mythic";
}

function pickUniqueFigures(count, excludedIds) {
  const excluded = new Set(excludedIds);
  return shuffle(FIGURES.filter((fig) => !excluded.has(fig.id))).slice(0, count);
}

function getRarity(key) {
  return RARITIES.find((rarity) => rarity.key === key);
}

function valueFromRange([min, max], quality, integer = false) {
  const value = min + (max - min) * (quality / 100);
  return integer ? Math.round(value) : value;
}

function ranges(common, rare, hero, legendary, mythic) {
  return { common, rare, hero, legendary, mythic };
}

function stat(label, rangeSet, unit, integer = false) {
  return { label, ranges: rangeSet, unit, integer };
}

function figure(id, name, symbol, color, accent, effect, stats) {
  return { id, name, symbol, color, accent, effect, stats };
}

function shuffle(items) {
  const copied = [...items];
  for (let index = copied.length - 1; index > 0; index -= 1) {
    const next = Math.floor(Math.random() * (index + 1));
    [copied[index], copied[next]] = [copied[next], copied[index]];
  }
  return copied;
}

function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatValue(value) {
  if (Number.isInteger(value)) return String(value);
  const fixed = value < 1 ? value.toFixed(2) : value.toFixed(1);
  return fixed.replace(/\.0$/, "").replace(/0$/, "");
}

function formatNumber(value) {
  return new Intl.NumberFormat("ko-KR").format(value);
}

function getNthSlotEnd(markup, count) {
  let index = -1;
  for (let found = 0; found < count; found += 1) {
    index = markup.indexOf("</button>", index + 1);
  }
  return index + "</button>".length;
}

function setStatus(message) {
  dom.statusText.textContent = message;
}
