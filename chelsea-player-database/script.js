// Let's use mock data first to get the display working
const mockChelsea = {
    squad: [
        {
            name: "Levi Colwill",
            position: "Centre-Back",
            nationality: "England",
            goals: 2,
            assists: 1,
            appearances: 25,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Levi_Colwill_profile_2025-26_avatar-removebg.png"
        },
        {
            name: "Reece James",
            position: "Right-Back",
            nationality: "England",
            goals: 3,
            assists: 8,
            appearances: 22,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Reece_James_2025-26_profile_with_patch_avatar-removebg.png"
        },
        {
            name: "Cole Palmer",
            position: "Attacking Midfield",
            nationality: "England",
            goals: 18,
            assists: 14,
            appearances: 30,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Cole_Palmer_2025-26_profile_with_patch_avatar-removebg.png"
        },
        {
            name: "Pedro Neto",
            position: "Right Winger",
            nationality: "Portugal",
            goals: 11,
            assists: 4,
            appearances: 30,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Pedro_Neto_2025-26_profile_with_patch_avatar-removebg.png"
        },
        {
            name: "Nicolas Jackson",
            position: "Centre-Forward",
            nationality: "Senegal",
            goals: 15,
            assists: 3,
            appearances: 26,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Nicolas_Jackson_profile_2025-26_avatar-removebg.png"
        },
        {
            name: "Enzo Fernández",
            position: "Central Midfield",
            nationality: "Argentina",
            goals: 4,
            assists: 7,
            appearances: 29,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Enzo_Fernandez_2025-26_profile_with_patch_avatar-removebg.png"
        },

        {
            name: "Robert Sanchez",
            position: "Goalkeeper",
            nationality: "Spain",
            goals: 0,
            assists: 0,
            appearances: 28,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Robert_Sanchez_2025-26_profile_with_patch_avatar-removebg.png"
        },

        {
            name: "Wesley Fofana",
            position: "Centre-Back",
            nationality: "France",
            goals: 1,
            assists: 2,
            appearances: 20,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Wesley_Fofana_profile_2025-26_avatar-removebg.png"
        },

        {
            name: "Marc Cucurella",
            position: "Left-Back",
            nationality: "Spain",
            goals: 2,
            assists: 3,
            appearances: 25,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Marc_Cucurella_2025-26_profile_with_patch_avatar-removebg.png"
        },

        {
            name: "Moises Caicedo",
            position: "Defensive Midfield",
            nationality: "Ecuador",
            goals: 3,
            assists: 2,
            appearances: 32,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Moises_Caicedo_2025-26_profile_with_patch_avatar-removebg.png"
        },


        {
            name: "Wesley Fofana",
            position: "Centre-Back",
            nationality: "France",
            goals: 1,
            assists: 2,
            appearances: 20,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Wesley_Fofana_profile_2025-26_avatar-removebg.png"
        },



        {
            name: "Thiago Silva",
            position: "Centre-Back",
            nationality: "Brazil",
            goals: 2,
            assists: 1,
            appearances: 25,
            image: "https://assets.sorare.com/playerpicture/a6d6283f-8d4c-4c14-b688-51fc03959a07/picture/squared-93342c4ecb5f0e73281a882d214a08c4.png"
        },

        {
            name: "Ben Chilwell",
            position: "Left-Back",
            nationality: "England",
            goals: 1,
            assists: 2,
            appearances: 15,
            image: "https://cdn-img.zerozero.pt/img/planteis/new/90/24/8519024_ben_chilwell_20240524143357.jpg"
        },

        {
            name: "Malo Gusto",
            position: "Right-Back",
            nationality: "France",
            goals: 0,
            assists: 4,
            appearances: 22,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVyfW4m3H8gXzeQpU7zKSTZYkGc3KF0IAXyMXwhvTuxbbu56Wq4IwWFz763ssKp3ejs94&usqp=CAU"
        },

        {
            name: "Conor Gallagher",
            position: "Central Midfield",
            nationality: "England",
            goals: 5,
            assists: 9,
            appearances: 30,
            image: "https://i.namu.wiki/i/On-tlWsHgsqiZU7TjgRPFaYlOzDc2ba6wY1ggAGhegODoVMfkCurVOJOdFtPz7U-w_xSxMi-moVeiyNOoWrHhA.webp"
        },

        {
            name: "Raheem Sterling",
            position: "Right Winger",
            nationality: "England",
            goals: 8,
            assists: 4,
            appearances: 31,
            image:"https://media.futbolfantasy.com/thumb/400x400/v202507080254/uploads/images/jugadores/ficha/1141.png" 
        },

        {
            name: "Armando Broja",
            position: "Centre-Forward",
            nationality: "Albania",
            goals: 2,
            assists: 0,
            appearances: 12,
            image: "https://cdn-img.zerozero.pt/img/jogadores/new/31/87/643187_armando_broja_20241019232210.png"
        },

        {
            name: "Djordje Petrovic",
            position: "Goalkeeper",
            nationality: "Serbia",
            goals: 0,
            assists: 0,
            appearances: 15,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96UHeeMoU9F9BYzKUlM4RBl7g4TY3rfwbMw&s"
        },

        {
            name: "Ian Maatsen",
            position: "Left-Back",
            nationality: "Netherlands",
            goals: 0,
            assists: 3,
            appearances: 16,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2yA1oVZZGvJgxkoQD9ADI5zHhuCHQIzKpthbyJYS5iLYEIatjq7K4TxdROc7pUP6Fds&usqp=CAU"
        },

        {
            name: "Carney Chukwuemeka",
            position: "Central Midfield",
            nationality: "England",
            goals: 1,
            assists: 2,
            appearances: 14,
            image: "https://www.footitalia.com/wp-content/uploads/2024/06/chukwuemeka.jpg"
        },

        {
            name: "Noni Madueke",
            position: "Right Winger",
            nationality: "England",
            goals: 11,
            assists: 2,
            appearances: 14,
            image: "https://img.chelseafc.com/image/upload/f_auto,c_fill,w_1200,q_auto:best/editorial/people/first-team/2022-23/3333x3333_Player_header_Madueke-22-23.png"
        },

        {
            name: "Mykhalo Mudryk",
            position: "Left Winger",
            nationality: "Ukraine",
            goals: 11,
            assists: 2,
            appearances: 14,
            image: "https://cdn-img.zerozero.pt/img/planteis/new/31/57/8623157_mykhaylo_mudryk_20240524144906.jpg"
        },

        {
            name: "Trevoh Chalobah",
            position: "Center-Back",
            nationality: "England",
            goals: 1,
            assists: 2,
            appearances: 14,
            image: "https://static.sky.it/editorialstaticimages/5324926443e647efb0cad84edd9faf01/sport/headshots/calcio/club/180736.png?im=Resize,width=270"
        },

        {
            name: "Malo Gusto",
            position: "Right-Back",
            nationality: "France",
            goals: 0,
            assists: 4,
            appearances: 22,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2025-26/Malo_Gusto_2025-26_profile_with_patch_avatar-removebg.png"
        },

        {
            name: "Josh Acheampong",
            position: "Center-Back",
            nationality: "England",
            goals: 1,
            assists: 2,
            appearances: 14,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbtzlLWUdwwgehQUcZ6fIVj4bKmpP1jXCgyTZ8ewYe95d1AP0l-V51YWRh4Ut1QEEJ5MI&usqp=CAU"
        },

        {
            name: "Kiernan Dewsbury-Hall",
            position: "Centre-Midfield",
            nationality: "England",
            goals: 1,
            assists: 6,
            appearances: 14,
            image: "https://assets.sorare.com/playerpicture/75e4ebe6-2ab0-44fb-9093-3d87ac6822ae/picture/squared-147e9c15bfff18fb4b78e79f2c8c168a.png"
        },

        {
            name: "Jadon Sancho",
            position: "Left-Wing",
            nationality: "England",
            goals: 4,
            assists: 8,
            appearances: 14,
            image: "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2024-25/With%20LN/Sancho/Mens_3333x5000_Avatar_Sancho_SF_Home_24_25_RGB.png"
        },

        {
            name: "Joao Felix",
            position: "Attacking-Midfielder",
            nationality: "Portugal",
            goals: 1,
            assists: 2,
            appearances: 14,
            image: "https://cdn-img.zerozero.pt/img/planteis/new/20/16/7482016_joao_felix_20240530115656.jpg"
        },

        {
            name: "Renato Veiga",
            position: "Center-Back",
            nationality: "Portugal",
            goals: 1,
            assists: 2,
            appearances: 14,
            image: "https://assets.sorare.com/playerpicture/d600463d-f83e-44c7-a406-699c80622da3/picture/squared-c9ecc6e4255f59c457ee40bc37e6b584.png"
        },

        {
            name: "Axel Disasi",
            position: "Center-Back",
            nationality: "France",
            goals: 1,
            assists: 2,
            appearances: 14,
            image: "https://i.namu.wiki/i/Eij1LXrZnCWD7zTuB8MmQ5PlUtEcJdpcbyW4am1i52CZJDj2Om2GupEqe0cVaaxELdq-h1Hy-uurY1iIls2NKg.webp"
        },

        {
            name: "Marcus Bettinelli",
            position: "Goalkeeper",
            nationality: "England",
            goals: 0,
            assists: 0,
            appearances: 0,
            image: "https://cdn-img.zerozero.pt/img/planteis/new/84/39/7048439_marcus_bettinelli_20240525131627.jpg"
        },

        {
            name: "Filip Jorgensen",
            position: "Goalkeeper",
            nationality: "Denmark",
            goals: 0,
            assists: 0,
            appearances: 0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYMUMadICSCsLkBPYZF-Wvm3Xd9tUDRAiH_DK9vsxcd7Awfe5MiyzjMG5ry-dZBWD7c8&usqp=CAU"
        },

         {
            name: "Benoit Badiashille",
            position: "Center-Back",
            nationality: "France",
            goals: 1,
            assists: 2,
            appearances: 14,
            image: "https://assets.sorare.com/playerpicture/f55c6025-16b1-43b5-9a94-24b157695125/picture/squared-a3089a60b25816d2ba6eb6aacec02eef.png"
        },

         {
            name: "Tosin Adarabioyo",
            position: "Center-Back",
            nationality: "England",
            goals: 1,
            assists: 2,
            appearances: 14,
            image: "https://assets.sorare.com/playerpicture/637d60c8-a024-4604-85a9-6b911bcf140f/picture/squared-549eb5dd089849d9d8c4c3d9c440f984.png"
        },

         {
            name: "Romeo Lavia",
            position: "Defensive-Midfield",
            nationality: "Belgium",
            goals: 1,
            assists: 2,
            appearances: 14,
            image: "https://cdn-img.zerozero.pt/img/planteis/new/41/81/11534181_romeo_lavia_20240817021405.png"
        },

         {
            name: "Tyrique George",
            position: "Left-Wing",
            nationality: "England",
            goals: 1,
            assists: 2,
            appearances: 14,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCydXRo61ur69zEToFUOMRRRyVwjAz8I0wyw&s"
        },

         {
            name: "Marc Guiu",
            position: "Center-Forward",
            nationality: "Spain",
            goals: 4,
            assists: 2,
            appearances: 14,
            image: "https://assets.sorare.com/playerpicture/f2a66de9-ee4f-4409-9a70-480b2497e7a2/picture/squared-b98bd360f1531641cbe2dee7cbf6b910.png"
        },

        {
            name: "Cesare Casadei",
            position: "Centre-Midfield",
            nationality: "Italy",
            goals: 3,
            assists: 4,
            appearances: 14,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYKpUavEmv-B6gJ_GNJ4MDfZj8f1scq-0uw&s"
        },






    ]
};

// Pagination variables
let currentPage = 1;
const playersPerPage = 6; // Show 3 players per page so you can see pagination working
let currentPlayersList = mockChelsea.squad;

function displayPlayers(playersList) {
    const playersDiv = document.getElementById('players');
    playersDiv.innerHTML = '';

    playersList.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.style.border = "1px solid transparent";
        playerDiv.style.padding = "10px";
        playerDiv.style.margin = "10px 0";
        playerDiv.style.borderRadius = "5px";
        playerDiv.style.backgroundColor = "transparent";

        playerDiv.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <img src="${player.image}" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 15px;">
                <div>
                    <h3 class="player-name">${player.name}</h3>
                    <p>Position: ${player.position}</p>
                    <p>Nationality: ${player.nationality}</p>
                    <p>Goals: ${player.goals} | Assists: ${player.assists}</p>
                </div>
            </div>
        `;
        playersDiv.appendChild(playerDiv);
    });
}

// Main pagination function
function displayPlayersWithPagination(playersList) {
    currentPlayersList = playersList;
    const totalPages = Math.ceil(playersList.length / playersPerPage);

    // Make sure current page is valid
    if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    // Calculate which players to show
    const start = (currentPage - 1) * playersPerPage;
    const end = start + playersPerPage;
    const playersToShow = playersList.slice(start, end);

    // Display the players
    displayPlayers(playersToShow);

    // Update page info
    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;

    // Enable/disable buttons
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages || totalPages === 0;
}

// Search function with pagination
document.getElementById('searchBox').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filtered = mockChelsea.squad.filter(player =>
        player.name.toLowerCase().includes(searchTerm) ||
        player.position.toLowerCase().includes(searchTerm) ||
        player.nationality.toLowerCase().includes(searchTerm)
    );
    currentPage = 1; // Reset to first page when searching
    displayPlayersWithPagination(filtered);
});

// Pagination button events
document.getElementById('prevBtn').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        displayPlayersWithPagination(currentPlayersList);
    }
});

document.getElementById('nextBtn').addEventListener('click', function () {
    const totalPages = Math.ceil(currentPlayersList.length / playersPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayPlayersWithPagination(currentPlayersList);
    }
});

// Initialize with pagination
displayPlayersWithPagination(mockChelsea.squad);