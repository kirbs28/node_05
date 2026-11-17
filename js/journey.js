/* =========================================================
   ABOUT US / ROADMAP. One story per member, shown as a
   scroll-driven road in each portfolio's intro section.
   Each step: tag (after "01 ·"), title (second line), text.
   ========================================================= */
var JOURNEYS = {
  kirby: {
    steps: [
      {tag:"Where It Starts", title:"Napindan, Taguig", text:"My mother is the strongest person I know. She works long hours, cares for our family, and rarely rests, but she still makes sure I never miss a day of school. Every time I feel like giving up, I think of her. Everything I’m working toward is my way of one day giving back what she gave up for me."},
      {tag:"A Door Opens", title:"Becoming a Tzu Chi Scholar", text:"When I got the news that I was accepted as a Tzu Chi scholar, I was both happy and afraid. I wasn’t sure I could carry the extra classes and responsibilities on top of school. I didn’t know then that this would be one of the greatest blessings of my life. Tzu Chi didn’t just help me stay in school. It helped me become someone I’m proud of."},
      {tag:"Learning to Serve", title:"Humanities, Community Service & Chorale", text:"I started copying Jing Si Aphorisms into my notebook as a requirement. Over time they became reminders I live by. In community service, I met people whose smiles and simple “thank you”s stayed with me long after. Singing Chinese with the chorale gave me a way to bring joy to others. Somewhere along the way I learned that service isn’t about giving. It’s about connecting hearts."},
      {tag:"Making It Work", title:"Small Wins, Hard Days", text:"I still remember my first allowance as a scholar. I bought a new uniform and new shoes and saved the rest for projects. It felt like hope I could hold in my hands. There were hard days too: allowances that came late, and a laptop that died when I needed it most. I bought a second-hand one and paid it off little by little. I never had everything, but I learned I didn’t need everything to keep going."},
      {tag:"Stepping Up to Lead", title:"USG Senator → USG President", text:"I started as a University Student Government Senator. Then I served as USG President of TUP Manila, sat on the board of the Federation of Student Governments, and stood as Class Representative of BSIT-4A. Leadership wasn’t always easy. I made mistakes, I owned them, and I learned that serving people means listening even when it’s hard. I’m grateful for every student who trusted me."},
      {tag:"Right Now", title:"4th-Year BSIT, TUP Manila", text:"Today I’m a graduating IT student, leading my thesis team and growing as a developer. I’m also in my last year as a Tzu Chi scholar. I came in full of fear and uncertainty. I’m leaving with gratitude, compassion and the courage to keep moving forward. Wherever I go next, I’ll carry what I learned: study hard, serve sincerely, live mindfully, and be a light for someone else the way others were for me."}
    ]
  },
  kwiz: {
    head: "Somewhere Under the Sun",
    quote: "“Like sunshine after the rain, I’ll keep blooming.”",
    steps: [
      {tag:"A Girl Who Notices Little Things", title:"Pink, Ribbons & Fairytales", text:"I’ve always loved pretty little things: pink and lavender, ribbons and bows, books, poetry, and anything that feels like it came out of a fairytale. I take pictures of ordinary moments because I think they’re worth keeping. I guess I’ve always noticed the little details a little too much. They’re how I make sense of the world."},
      {tag:"Choosing a Path in Tech", title:"BS Information Technology, TUP", text:"When I chose Information Technology at the Technological University of the Philippines, I didn’t have everything figured out, and some days I still don’t. But I found a place where my creativity could meet something real. Every lesson, even the ones I struggled with, taught me that trying is already a kind of progress."},
      {tag:"Turning Ideas Into Something Real", title:"UI/UX & Frontend Development", text:"I fell in love with UI/UX and frontend development because they let me take a random idea and make it something people can see, touch and use. Design is where my love for pretty things and my love for technology finally meet. I still have so much to learn, but I’m learning it one screen at a time."},
      {tag:"Becoming a Mother", title:"My Little Boy", text:"Having my son changed everything: how I see life, how I love, and what I’m working for. Balancing motherhood, school and my own dreams isn’t easy, and some days it’s exhausting. But he taught me that I don’t have to give up one dream just because I’ve been given another. Everything I build now, I build with him in mind."},
      {tag:"Making Something of My Own", title:"Kriz ‘n Bows", text:"I started my small shop, Kriz ‘n Bows, out of my love for fashion, styling and making things beautiful. It’s small, but it’s mine, and it reminds me that creating something with your own hands, no matter its size, is something to be proud of."},
      {tag:"Still Becoming", title:"Right Now", text:"I’m not exactly where I want to be yet, but I’m getting there, slowly. I want to finish my studies, build a career, become independent, give my son a good life, and see more of the world. I’m a girl with too many thoughts, a romantic heart, and a whole lot of dreams. For now, that’s enough. Still becoming, and always a work in progress. ♡"}
    ]
  },
  mel: {
    steps: [
      {tag:"Starting My IT Journey", title:"2021 · BSIT, TUP Manila", text:"I started my BS Information Technology at the Technological University of the Philippines – Manila with one hope: to build a future in technology. I didn’t know yet which part of tech I belonged in. I just knew I wanted to find out, and that first step was enough."},
      {tag:"My First Job", title:"2023 · Customer Service at Alorica", text:"At Alorica, I took my first real step into working life. Each call was a customer with a billing or technical problem, and I learned to solve it carefully and accurately, and to read the data behind every complaint. Without realizing it, I was learning to listen to people and to the numbers at the same time."},
      {tag:"Pausing for My Family", title:"2024–2025 · The Hardest Year", text:"This was the hardest choice I’ve ever made. In school year 2024–2025, I stopped studying for a year because my family needed me. My dreams had to wait while I took care of things at home. I kept working through it, growing at Amazon, where I analyzed account security incidents and traced them to their root causes. I wasn’t in a classroom that year, but I never stopped learning."},
      {tag:"Coming Back Stronger", title:"2025 · Back to School", text:"I came back to my studies with more determination than ever. On my own, I took courses in Google Data Analytics, SQL, Power BI and Google AI Essentials. The pause slowed my degree down, but it never stopped my goals. If anything, it reminded me how much I wanted them."},
      {tag:"Into Cloud and AI", title:"2026 · Cambridge University Press & Assessment", text:"I became a Vendor Master Data Intern at Cambridge University Press & Assessment, working with SAP ERP, Zendesk and dashboards. At the same time, I taught myself AWS and deployed a full-stack app on EC2, Amplify and RDS, with an AI chatbot running on Amazon Bedrock. Learning new tools that fast was a challenge, but seeing a real project go from idea to deployment showed me what I was capable of."},
      {tag:"A New Chapter at Omron", title:"2026 · SAP Ariba Support", text:"Everything I learned as an intern led me to Omron, where I now work in SAP Ariba support. It’s a new system and a new company, so there’s more to learn and more room to grow. When I look back, what I’m proudest of isn’t the job title. It’s that I kept going through the year I had to pause, and here I am, still moving forward in SAP and cloud."}
    ]
  },
  althea: {
    steps: [
      {tag:"The Beginning", title:"Born August 6, 2005 · Metro Manila", text:"I was born in Metro Manila to my parents, Emilia and Aquilino. I started school at Baclaran Elementary School Unit 2, and that’s where my curiosity first grew. I didn’t know it yet, but those small questions about how things work would one day shape my whole path."},
      {tag:"Discovering How Things Work", title:"Parañaque National High School – Baclaran", text:"In high school I became fascinated with electronics: what makes a circuit light up, how a machine actually works. That curiosity slowly turned into a love for coding and technology, and I began to imagine a future where I could build things myself."},
      {tag:"Choosing My Path, and Struggling Through It", title:"BSIT, TUP Manila", text:"I took up BS Information Technology at the Technological University of the Philippines – Manila to follow that passion. Coding didn’t come naturally to me at first. There were nights when my programs wouldn’t run and I wondered if I’d chosen the wrong path. But every error I fixed taught me something I still hold on to: persistence matters more than getting it right the first time."},
      {tag:"Balancing Work and School", title:"Call Center Agent & Student", text:"My biggest challenge came when I started working as a call center agent while studying. Long shifts, tight deadlines and very little sleep tested me in ways I never expected. But they made me disciplined, taught me to manage my time, and showed me how to stay calm under pressure. Even when I was tired, I kept going to IT seminars, because I didn’t want to stop growing."},
      {tag:"The Final Stretch", title:"4th-Year BSIT", text:"Now I’m in my fourth year, closer to graduation than ever. When I need a break, I play gacha games like Genshin Impact or work on cross-stitch. Stitch by stitch, it reminds me that this journey works the same way. Big things are finished one small step at a time."},
      {tag:"What’s Next", title:"Future Quality Assurance Officer", text:"My goal is to become a Quality Assurance Officer at an IT firm. I want to help build software that people can trust and rely on. After all the bugs I’ve fought through myself, I think I know a little about making sure things work the way they should."}
    ]
  },
  carl: {
    steps: [
      {tag:"Where I Come From", title:"A Close-Knit Family", text:"I grew up in a close-knit family that held strong values at home. Those values became my foundation: what I stand on, and what I come back to whenever life gets uncertain."},
      {tag:"Growing Through Challenges", title:"Learning Resilience", text:"Growing up wasn’t always easy. I faced many challenges, and each one asked more of me than I thought I had. But they taught me resilience: that falling down isn’t the end, as long as you choose to stand back up."},
      {tag:"Finding Myself", title:"Independence & Self-Awareness", text:"Those hard moments taught me independence. They also made me look honestly at myself: what I needed to change, which old ways I had to grow past, and who I really was underneath it all. It wasn’t comfortable, but it was where I truly started to grow."},
      {tag:"Choosing Who I Want to Be", title:"Dependable Over Noticed", text:"That journey changed how I show up for others. Instead of looking for attention, I try to be someone people can depend on. I want to be the one who listens with empathy and brings calm when things feel loud."},
      {tag:"Finding Peace in Quiet", title:"Solitude, Stories & Deep Conversations", text:"When I need to recharge, I look for quiet. I spend time in solitude and reflection, with movies and books that explore what it means to be human, and in deep, unhurried conversations with the people closest to me. In those quiet moments I understand myself best."},
      {tag:"Right Now", title:"BSIT Student & Developer", text:"Today I bring those same values into my studies and my work: patience, steadiness, and the wish to understand things deeply. I’m still growing, still reflecting, and still learning who I’m becoming, one quiet step at a time."}
    ]
  }
};
if (typeof TEAM !== "undefined") TEAM.forEach(function (m) {
  var j = JOURNEYS[m.id];
  if (j) { m.journey = j.steps; m.storyHead = j.head || ""; m.storyQuote = j.quote || ""; }
});
