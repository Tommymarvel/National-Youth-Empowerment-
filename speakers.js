const teamEl = document.querySelector('.speaker');
const teamInfo = [
  {
    name: 'Elon Musk',
    position: 'CEO, Tech',
    description:
      'He is the richest man on earth, ceo of multiple companies including Paypal one of our sponsors ',
    imageUrl: ['./images/Elon-Musk-PNG.png', 'Elon musk'],
  },
  {
    name: 'Mark Zukerberg',
    position: 'CEO, Software Engineer',
    description:
      'Mark Zukerberg is one of the most powerful man in the world, also the founder of Facebook',
    imageUrl: ['./images/mark_zuckerberg.png', 'Mark Zukerberg'],
  },
  {
    name: 'Sundar Pichai',
    position: 'CEO, Software Engineer',
    description:
      'He is a indian-american businessman and the CEO of Alphabet.inc and subsidiaries since 2015',
    imageUrl: ['./images/Sundar-pichai.png', 'Sundar-pichai'],
  },
  {
    name: 'Ariel Camus',
    position: 'CEO',
    description:
      'Ariel has been coding since he was 12. He previously founded Tourist Eye, a travel app with 1M+ users acquired by Lonely Planet.',
    imageUrl: ['./images/ariel.jpg', 'Ariel Camus'],
  },
  {
    name: 'Marvellous Ibironke ',
    position: 'Software Engineer',
    description:
      'Marvellous is a full time student at Microverse, learning Full Stack Web Development.',
    imageUrl: ['./images/tommy-marvel.jpeg', 'Marvellous'],
  },
  {
    name: 'Justine Imasiku',
    position: 'Software Engineer',
    description:
      'Justine is a full time student at Microverse, learning Full Stack Web Development.',
    imageUrl: ['./images/justin.jpg', 'Justine '],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  teamEl.innerHTML = teamInfo.map(
    (member) => `
          <div class="team-member">
    <div class="member-img-main">
      <img class="member-img" src="${member.imageUrl[0]}" alt=${member.imageUrl[1]}"">
    </div>
    <div class="member-content">
      <h4 class="member-name  member1"> ${member.name} </h4>
      <p class="member-job  member1"> ${member.position}</p>
      <p class="member-text  member1">${member.description} </p>
    </div>
  </div>
          `,
  );
});
