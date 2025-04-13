// Elementy
const tabButtons = document.querySelectorAll('.tab-button');
const playerCards = document.querySelectorAll('.player-card');
const showMorePlayerBtn = document.getElementById('show-more-player');
const showMoreNewsBtn = document.getElementById('show-more');

let showMoreClicked = false; // zapamiętujemy czy kliknięto "Więcej" zawodników

// Obsługa zakładek
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Dezaktywuj wszystkie zakładki
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const selectedTab = button.getAttribute('data-tab');

    playerCards.forEach(card => {
      const isButton = card.classList.contains('button-wrapper');

      if (selectedTab === 'all') {
        // Jeśli to zakładka "Wszyscy"
        if (!showMoreClicked) {
          // Pokaż tylko pierwszych zawodników (nie .hidden)
          if (card.classList.contains('hidden') && !isButton) {
            card.classList.add('hidden'); // zostaje ukryty
          } else {
            card.classList.remove('hidden');
          }
          // Pokaż przycisk
          if (isButton) {
            card.classList.remove('hidden');
          }
        } else {
          // Jeśli kliknięto "Więcej", pokaż wszystkich zawodników
          card.classList.remove('hidden');
        }
      } else {
        // Inna zakładka – tylko odpowiedni typ graczy, bez przycisku
        if (card.classList.contains(selectedTab)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }

        if (isButton) {
          card.classList.add('hidden');
        }
      }
    });
    
    // Resetowanie przycisku "Więcej" i pokazanie wszystkich zawodników, jeśli wracamy na "Wszyscy"
    if (selectedTab === 'all') {
      showMorePlayerBtn.style.display = 'inline-block'; // pokaż przycisk "Więcej"
      if (!showMoreClicked) {
        document.querySelector('.button-wrapper').classList.remove('hidden'); // przywróć przycisk
      }
    }
  });
});

// Obsługa przycisku "Więcej" zawodników
showMorePlayerBtn.addEventListener('click', () => {
  document.querySelectorAll('.player-card.hidden').forEach(card => {
    if (!card.classList.contains('button-wrapper')) {
      card.classList.remove('hidden');
    }
  });

  showMorePlayerBtn.style.display = 'none';
  document.querySelector('.button-wrapper').classList.add('hidden');
  showMoreClicked = true; // zapamiętujemy kliknięcie
});

// Obsługa przycisku "Więcej" wiadomości
showMoreNewsBtn.addEventListener('click', () => {
  document.querySelectorAll('.news-item.hidden').forEach(item => {
    item.classList.remove('hidden');
  });
  showMoreNewsBtn.style.display = 'none';
});

// Obsługa przycisku "Więcej" wyników
const showMoreResultsBtn = document.getElementById('show-more-results');

showMoreResultsBtn.addEventListener('click', () => {
  document.querySelectorAll('.match-result.hidden').forEach(item => {
    item.classList.remove('hidden');
  });
  showMoreResultsBtn.style.display = 'none';
});
