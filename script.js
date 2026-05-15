const PARTS = {
    leftBracket: {
      label: "( left bracket",
      options: ["(", "｢", "【", "〔", "（", "╰", "╭", "[", "＜", "〖", "⌒", "｛"]
    },
    leftArm: {
      label: "✦ left arm",
      options: ["", " ", "ﾉ", "੭", "⊃", "╯", "ʃ", "ᕦ", "ᕙ", "┛", "ง", "ᕗ"]
    },
    leftEye: {
      label: "◉ left eye",
      options: ["˘", "´", "`", "•", "◕", "ó", "ò", "^", "≧", "T", "o", "＾", "ゝ", "≖", "⌒", "×", "☆", "✿", "◠", "◡", "눈", "ꗞ", "·"]
    },
    mouth: {
      label: "ᵕ mouth",
      options: ["ᵕ", "ω", "_", "▽", "ε", "3", "з", "﹏", "益", "ヮ", "▿", "ᴗ", "〜", "ᨓ", "ꈊ", "o", "口", "෴", "ᗜ", "ロ", "w", "‸", "～"]
    },
    rightEye: {
      label: "◉ right eye",
      options: ["˘", "´", "`", "•", "◕", "ó", "ò", "^", "≦", "T", "o", "＾", "ゝ", "≖", "⌒", "×", "☆", "✿", "◠", "◡", "눈", "ꗞ", "·"]
    },
    rightArm: {
      label: "✦ right arm",
      options: ["", " ", "ﾉ", "੭", "⊂", "╯", "ƪ", "ᕤ", "ᕗ", "┗", "ง", "ᕙ"]
    },
    rightBracket: {
      label: "right bracket )",
      options: [")", "｣", "】", "〕", "）", "╯", "╮", "]", "＞", "〗", "⌒", "｝"]
    },
    suffix: {
      label: "✧ suffix",
      options: ["", "☆", "♪", "✦", "~", "♡", "ﾉ", "✿", "!", "?", "✧", "ノシ", "ﾉ*:･ﾟ✧"]
    }
  };
  
  const PART_ORDER = ["leftBracket","leftArm","leftEye","mouth","rightEye","rightArm","rightBracket","suffix"];
  
  const PRESETS = [
    { name: "(˘ᵕ˘)", state: { leftBracket:"(", leftArm:"", leftEye:"˘", mouth:"ᵕ", rightEye:"˘", rightArm:"", rightBracket:")", suffix:"" } },
    { name: "(◕ω◕)", state: { leftBracket:"(", leftArm:"", leftEye:"◕", mouth:"ω", rightEye:"◕", rightArm:"", rightBracket:")", suffix:"" } },
    { name: "(T▽T)", state: { leftBracket:"(", leftArm:"", leftEye:"T", mouth:"▽", rightEye:"T", rightArm:"", rightBracket:")", suffix:"" } },
    { name: "ᕦ(ò益ó)ᕤ", state: { leftBracket:"(", leftArm:"ᕦ", leftEye:"ò", mouth:"益", rightEye:"ó", rightArm:"ᕤ", rightBracket:")", suffix:"" } },
    { name: "╰(˘_˘)╯", state: { leftBracket:"(", leftArm:"╰", leftEye:"˘", mouth:"_", rightEye:"˘", rightArm:"╯", rightBracket:")", suffix:"" } },
    { name: "(✿◠ω◠)", state: { leftBracket:"(", leftArm:"", leftEye:"◠", mouth:"ω", rightEye:"◠", rightArm:"", rightBracket:")", suffix:"✿" } },
    { name: "(≧▽≦)", state: { leftBracket:"(", leftArm:"", leftEye:"≧", mouth:"▽", rightEye:"≦", rightArm:"", rightBracket:")", suffix:"" } },
    { name: "(×ᴗ×)", state: { leftBracket:"(", leftArm:"", leftEye:"×", mouth:"ᴗ", rightEye:"×", rightArm:"", rightBracket:")", suffix:"" } },
    { name: "ヽ(^o^)ノ", state: { leftBracket:"(", leftArm:"ヽ", leftEye:"^", mouth:"o", rightEye:"^", rightArm:"ﾉ", rightBracket:")", suffix:"" } },
    { name: "(˘з˘)♡", state: { leftBracket:"(", leftArm:"", leftEye:"˘", mouth:"з", rightEye:"˘", rightArm:"", rightBracket:")", suffix:"♡" } },
    { name: "(눈_눈)", state: { leftBracket:"(", leftArm:"", leftEye:"눈", mouth:"_", rightEye:"눈", rightArm:"", rightBracket:")", suffix:"" } },
    { name: "(•ᗜ•)", state: { leftBracket:"(", leftArm:"", leftEye:"•", mouth:"ᗜ", rightEye:"•", rightArm:"", rightBracket:")", suffix:"" } },
  ];

  let currentState = {
    leftBracket: "(",
    leftArm: "",
    leftEye: "˘",
    mouth: "ᵕ",
    rightEye: "˘",
    rightArm: "",
    rightBracket: ")",
    suffix: ""
  };
  let activePart = null;
  let history = [];
  
  function renderKaomoji() {
    const row = document.getElementById('kaomoji-row');
    row.innerHTML = '';
  
    PART_ORDER.forEach(partKey => {
      const part = document.createElement('div');
      part.className = 'part' + (activePart === partKey ? ' active' : '');
      part.dataset.part = partKey;
  
      const val = currentState[partKey];
      part.textContent = val || '';
  
      const label = document.createElement('span');
      label.className = 'part-label';
      label.textContent = PARTS[partKey].label.replace(/[^\w\s]/gi, '').trim().split(' ').slice(1).join(' ') || PARTS[partKey].label;
      part.appendChild(label);
  
      part.addEventListener('click', () => selectPart(partKey));
      row.appendChild(part);
    });
  
    const full = PART_ORDER.map(k => currentState[k]).join('');
    document.getElementById('kaomoji-full').textContent = full;
  }
  
  function selectPart(partKey) {
    activePart = partKey;
    renderKaomoji();
    showPicker(partKey);
  }
  
  function showPicker(partKey) {
    const empty = document.getElementById('picker-empty');
    const content = document.getElementById('picker-content');
    const label = document.getElementById('picker-label');
    const grid = document.getElementById('options-grid');
  
    empty.style.display = 'none';
    content.style.display = 'block';
  
    label.textContent = PARTS[partKey].label;
    grid.innerHTML = '';
  
    PARTS[partKey].options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn' + (currentState[partKey] === opt ? ' selected' : '');
      btn.textContent = opt === '' ? '∅' : opt;
      btn.title = opt === '' ? '(empty)' : opt;
      btn.addEventListener('click', () => {
        currentState[partKey] = opt;
        renderKaomoji();
        showPicker(partKey);
        spawnSparkle(btn);
      });
      grid.appendChild(btn);
    });
  }
  
  function spawnSparkle(el) {
    const rect = el.getBoundingClientRect();
    const sparks = ['✦','✧','★','☆','♡','✿','~'];
    const sp = document.createElement('div');
    sp.className = 'sparkle';
    sp.textContent = sparks[Math.floor(Math.random() * sparks.length)];
    sp.style.left = (rect.left + rect.width/2 + window.scrollX) + 'px';
    sp.style.top = (rect.top + window.scrollY) + 'px';
    sp.style.color = ['#c084fc','#f472b6','#38bdf8'][Math.floor(Math.random()*3)];
    document.body.appendChild(sp);
    setTimeout(() => sp.remove(), 650);
  }

  function randomize() {
    PART_ORDER.forEach(key => {
      const opts = PARTS[key].options;
      currentState[key] = opts[Math.floor(Math.random() * opts.length)];
    });
    if (activePart) showPicker(activePart);
    renderKaomoji();
  }
  
  function resetDefault() {
    currentState = {
      leftBracket: "(",
      leftArm: "",
      leftEye: "˘",
      mouth: "ᵕ",
      rightEye: "˘",
      rightArm: "",
      rightBracket: ")",
      suffix: ""
    };
    activePart = null;
    document.getElementById('picker-empty').style.display = 'flex';
    document.getElementById('picker-content').style.display = 'none';
    renderKaomoji();
  }
  
  function saveToHistory() {
    const kao = PART_ORDER.map(k => currentState[k]).join('');
    if (!history.includes(kao)) {
      history.unshift(kao);
      if (history.length > 20) history.pop();
      renderHistory();
    }
  }
  
  function renderHistory() {
    const section = document.getElementById('history-section');
    const grid = document.getElementById('history-grid');
    if (history.length === 0) {
      section.style.display = 'none';
      return;
    }
    section.style.display = 'block';
    grid.innerHTML = '';
    history.forEach(kao => {
      const item = document.createElement('div');
      item.className = 'history-item';
      item.textContent = kao;
      item.title = 'click to copy';
      item.addEventListener('click', () => {
        navigator.clipboard.writeText(kao).then(() => {
          item.style.color = '#4ade80';
          setTimeout(() => item.style.color = '', 1000);
        });
      });
      grid.appendChild(item);
    });
  }
  
  function copyKaomoji() {
    const kao = PART_ORDER.map(k => currentState[k]).join('');
    const btn = document.getElementById('copy-btn');
    navigator.clipboard.writeText(kao).then(() => {
      btn.classList.add('copied');
      btn.innerHTML = '<span>✓</span> copied!';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = '<span>⎘</span> copy';
      }, 2000);
    });
  }

  function renderPresets() {
    const grid = document.getElementById('presets-grid');
    PRESETS.forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'preset-btn';
      btn.textContent = p.name;
      btn.addEventListener('click', () => {
        currentState = { ...p.state };
        activePart = null;
        document.getElementById('picker-empty').style.display = 'flex';
        document.getElementById('picker-content').style.display = 'none';
        renderKaomoji();
      });
      grid.appendChild(btn);
    });
  }
  
  renderKaomoji();
  renderPresets();