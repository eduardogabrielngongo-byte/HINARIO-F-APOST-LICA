// Holy Lyrics - App.js
// Igreja Fé Apostólica Americana

// Database of Hymns
const hymns = [
    {
        id: 1,
        number: 1,
        title: "Graça Divina",
        artist: "Hino Tradicional",
        lyrics: `Graça divina, fonte de vida,
Que nos sustém a cada momento,
Com teu amor, toda jornada,
Se torna bênção e aumento.

Aleluia, graça de Deus,
Que nos redime e perdoa,
Com teu poder, nossas angústias,
Se transformam em vitória.

Graças te damos, Senhor Jesus,
Por tua morte salvadora,
Que nos permite viver em paz,
Em tua presença restauradora.`
    },
    {
        id: 2,
        number: 2,
        title: "Fé Apostólica",
        artist: "Hino da Igreja",
        lyrics: `Sobre a rocha edificada,
Nossa fé apostólica se ergue,
Com os passos de profetas,
E dos apóstolos que a segue.

Firmes na Palavra eterna,
Que não passa, que é verdade,
Vivemos a convicção,
De uma fé e realidade.

Pentecostes se renova,
Em nossos corações cada dia,
O Espírito Santo nos guia,
Para a glória e alegria.

Igreja fiel, testemunha,
Do Evangelho puro e santo,
Que proclamamos com fervor,
E cantamos esse cântico.`
    },
    {
        id: 3,
        number: 3,
        title: "Luz do Mundo",
        artist: "Hino Moderno",
        lyrics: `Somos luz no escurecimento,
Somos sal que preserva,
Somos voz de testemunho,
Que a verdade se conserva.

Jesus é nossa lâmpada,
Que ilumina nosso caminho,
Seus ensinamentos guiam,
Todo aquele que é amigo.

Que nossa luz não se apague,
Mas sempre mais resplandeca,
Para que todos conheçam,
Cristo que nos fortaleça.

Na escuridão deste mundo,
Brilhemos com alegria,
Mostrando o caminho que leva,
Ao Pai, cada noite e dia.`
    },
    {
        id: 4,
        number: 4,
        title: "Ressurreição",
        artist: "Hino Celebrativo",
        lyrics: `Cristo venceu a morte,
Venceu o poder do mal,
Com sua ressurreição gloriosa,
Nos deu vida imortal.

Aleluia! Ressurreição!
Festa da nossa salvação,
Que transforma nossas vidas,
Em eterna comunhão.

A tumba vazia proclama,
A vitória do nosso Rei,
Que desceu e ressurgiu,
Para que em Ele creiamos na fé.

Somos participantes,
Da morte e ressurreição,
Quando em Cristo nos batizamos,
Renascemos na comunhão.`
    },
    {
        id: 5,
        number: 5,
        title: "Pentecostes Ardente",
        artist: "Hino Espiritual",
        lyrics: `Fogo sagrado desceu,
Em dia de Pentecostes,
Encheu os crentes de coragem,
Para vencer todos os postes.

Línguas de fogo, sons do céu,
Poder do Espírito Santo,
Transformou medo em coragem,
Em testemunho e quebranto.

Que venha sobre nós novamente,
O fogo da unção divina,
Para que sigamos firmes,
Na obra que Deus destina.

Batismo no Espírito Santo,
Dom que todo crente espera,
Que nos capacita e transforma,
Para uma vida verdadeira.`
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const hymnsList = document.getElementById('hymnsList');
const lyricsDisplay = document.getElementById('lyricsDisplay');

let currentHymn = null;
let filteredHymns = [...hymns];

// Initialize App
function initApp() {
    renderHymnsList(hymns);
    setupEventListeners();
}

// Setup Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
}

// Render Hymns List
function renderHymnsList(hymnsList) {
    const listContainer = document.getElementById('hymnsList');
    listContainer.innerHTML = '';

    hymnsList.forEach(hymn => {
        const hymnElement = document.createElement('div');
        hymnElement.className = `hymn-item ${currentHymn?.id === hymn.id ? 'active' : ''}`;
        hymnElement.innerHTML = `
            <div class="hymn-info">
                <span class="hymn-title">${hymn.title}</span>
                <span class="hymn-artist">${hymn.artist}</span>
            </div>
            <span class="hymn-number">#${hymn.number}</span>
        `;
        hymnElement.addEventListener('click', () => displayHymn(hymn));
        listContainer.appendChild(hymnElement);
    });
}

// Display Hymn
function displayHymn(hymn) {
    currentHymn = hymn;
    lyricsDisplay.innerHTML = `
        <h3>${hymn.title}</h3>
        <p style="color: #06d6a0; margin-bottom: 20px;">Por: ${hymn.artist}</p>
        <p>${hymn.lyrics}</p>
    `;
    
    // Update active state
    document.querySelectorAll('.hymn-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.hymn-item').classList.add('active');
}

// Search Handler
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        filteredHymns = [...hymns];
    } else {
        filteredHymns = hymns.filter(hymn => 
            hymn.title.toLowerCase().includes(searchTerm) ||
            hymn.artist.toLowerCase().includes(searchTerm) ||
            hymn.number.toString().includes(searchTerm)
        );
    }
    
    renderHymnsList(filteredHymns);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
