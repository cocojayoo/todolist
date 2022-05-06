//배열형식으로, 안에는 명언 텍스트와 저자 텍스트 형태의 오브젝트의 형태를 가지고 있다!
const quotes = [
    {
        quote: "진실은 종종 잘 다듬어진 문장을 위해서 희생된다.",
        author: "케네스 클라크",
    },
    {
        quote: "미술이라는 것은 사실상 존재하지 않는다. 다만 미술가들이 있을 뿐이다.",
        author: "E. H. 곰브리치",
    },
    {
        quote: "덧없이 사라지는 시간에서 잡힌 한 순간에 지속적이고 침착한 존재를 부여해 주는 일",
        author: "존 컨스터블",
    },
    {
        quote: "미술에 고유한 경향들, 학파들, 형식성들을 편협하게 선호하는 데서 벗어난 사람만이 미술의 본질을 순수하게 파악할 수 있다.",
        author: "카를 프리드리히 폰 루모르",
    },
    {
        quote: "문서는 오직 문서 없이도 미술 작품을 이해하고 해석할 수 있는 자들의 손에서만 가치가 있다.",
        author: "조반니 모렐리",
    },
    {
        quote: "과거는 풍요로운 미래를 위한 토대가 된다. 단 과거를 신비화하거나 낭만화하지 않았을 경우에만.",
        author: "버나드 베런슨",
    },
    {
        quote: "모든 예술가에게는 시대의 각인이 찍혀 있다. 위대한 예술가는 그러한 각인이 가장 깊이 새겨져 있는 사람이다.",
        author: "앙리 마티스",
    },
    {
        quote: "나쁜 글의 뿌리는 두려움이다.",
        author: "스티븐 킹",
    },
    {
        quote: "지옥으로 가는 길은 부사로 포장되어 있다.",
        author: "스티븐 킹",
    },
    {
        quote: "비평의 목적은 대상에서 실제로 없는 것을 보는 것",
        author: "오스카 와일드",
    },
    {
        quote: "만능인이 된다는 것은 가능한 한 많은 것을 안다는 것이 아니라 가능한 한 많은 것을 사랑한다는 뜻이다.",
        author: "야콥 부르크하르트",
    },
    {
        quote: "다른 사람을 감동시키려면 먼저 자신이 감동하지 않으면 안 된다. 그렇지 못하면 제 아무리 정교한 작품이라도 결코 생명력을 갖지 못한다.",
        author: "장 프랑수아 밀레",
    },
    {
        quote: "다른 시대에는 다른 영감이 있다.",
        author: "프리드리히 빌헬름 셸링",
    },
    {
        quote: "모든 화가는 각자의 방식대로 회화의 역사를 요약한다.",
        author: "질 들뢰즈",
    },
    {
        quote: "무엇을 그리고 싶은지 알려면 그리기 시작해야 한다.",
        author: "파블로 피카소",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;