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