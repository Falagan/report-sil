// Import the Chromium browser into our scraper.
import { link } from 'fs';
import { chromium } from 'playwright';

const userAgentStrings = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.2227.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.3497.92 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
];

// Open a Chromium browser. We use headless: false
// to be able to watch the browser window.
const browser = await chromium.launch({
    headless: true
});

const context = await browser.newContext({
    userAgent: userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)],
});

const gameDay = Array.from({ length: 23 }, (e, i) => i).slice(1)
const players = [
    {
        name: 'ALVAREZ LAMUS, JAVIER',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'BOUSSAIRI, MOUAD',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'CASTRO GUTIERREZ, XAVIER',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'DIAZ PEDRIDO, DAVID',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'DIAZ RODRIGUEZ, MANUEL',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'ELAZZOUZI , IMAD',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'FERNANDEZ ALVAREDO, ANGEL',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'GARCIA PEREZ, ISAAC',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'GARCIA RODRIGUEZ, DAVID',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'HARABAZAN HARABAZAN, ANAS',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'LOPEZ LOPEZ, AARON',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'LOPEZ VIANA, CARLOS',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'MARTINEZ MARIÑO, VICTOR',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'MOLINA PEDREIRA, MIGUEL ANGEL',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'PEREZ LOPEZ, HUGO',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'PEREZ OTERO, ELOY',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'RODRIGUEZ GARCIA, BRAIS',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'ROSALES ALMONTE, SMAILY JAVIER',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'RUIZ BALBOA, ADRIAN',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'SERAFIN RODRIGUEZ, OMAR',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'VAZQUEZ MONCAYO, LUCAS',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'ALVAREZ PEDREIRA, MANUEL',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'ALVES DA SILVA, LEONARDO',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },
    {
        name: 'PEREZ PANIZO, ANGEL',
        min: 0,
        goals: 0,
        redCards: 0,
        yellowCards: 0,
        gamesCalled: 0,
        gamesPlayed: 0,
        gamesTitular: 0,
        gamesScrub: 0,
        numSubs: 0,
        numFromScrub: 0,
    },

]

async function processGamePlay(day) {
    console.log(`Procesando jornada ${day}...`);
    const page = await context.newPage();
    let gameReportLink = '';
    await page.goto(`https://www.futgal.es/pnfg/NPcd/NFG_CmpJornada?cod_primaria=1000120&CodTemporada=19&CodGrupo=18510262&CodCompeticion=17493260&CodJornada=${day}`);
    await page.waitForTimeout(8000);

    const trContainingText = await page.$('tr:has-text("RIO SIL")');

    if (trContainingText) {
        // Find the button inside the <tr>
        const button = await trContainingText.$('a[title="Acta del partido"]');

        if (button) {
            // Extract the href attribute of the button
            gameReportLink = await button.getAttribute('href');
        } else {
            console.log('Button not found inside the specified <tr>.');
        }
    } else {
        console.log('Element containing "RIO SIL" not found.');
    }

    // Navigate to the page that the button opens
    await page.goto(`https://www.futgal.es${gameReportLink}`);

    const titulares = await page.$$eval('.details:has(.number:has-text("C.D. RIO SIL")) .desc h5:has(strong:has-text("Titulares")) + table tr', rows =>
        rows.map(row => row.querySelectorAll('.font_responsive')[1].textContent.trim())
    );

    const suplentes = await page.$$eval('.details:has(.number:has-text("C.D. RIO SIL")) .desc h5:has(strong:has-text("Suplentes")) + table tr', rows =>
        rows.map(row => row.querySelectorAll('.font_responsive')[1].textContent.trim())
    );

    const substitutions = await page.$$eval('.details:has(.number:has-text("C.D. RIO SIL")) .desc h4:has-text("Sustituciones") ~ table', tables => {
        const substitutions = [];
        for (let table of tables) {
            const isTableEmpty = table.querySelectorAll('tr').length === 0;
            if (!isTableEmpty) {
                const playerInData = table.querySelectorAll('tr')[0];
                const playerOutData = table.querySelectorAll('tr')[1];

                const playerIn = playerInData.querySelectorAll('.font_responsive')[1].textContent.trim();
                const playerOut = playerOutData.querySelectorAll('.font_responsive p')[0].innerHTML.split('</span>')[1].trim();
                const minute = playerOutData.querySelector('.font_responsive p span').textContent.trim().replace(/[()'"]/g, '');
                substitutions.push({ playerIn, playerOut, minute })
                const lastTable = table.nextElementSibling?.innerHTML === 'Tarjetas';
                if (lastTable) break;
            }

        }
        return substitutions;
    }
    );

    const cards = await page.$$eval('.details:has(.number:has-text("C.D. RIO SIL")) .desc h4:has-text("Tarjetas") + table tr', rows =>
        rows.map(row => row.querySelectorAll('.font_responsive')[1].innerHTML.split('</span>')[1].trim())
    )

    const goals = await page.$$eval('.details:has(.number:has-text("Goles")) .desc table tr', rows =>
        rows.map(row => row.querySelector('.font_responsive').innerHTML.split('</span>')[1].trim())
    );

    // Process data
    titulares.forEach((player, index) => {
        const playerIndex = players.findIndex(playerData => playerData.name.trim() === player.trim());
        if (playerIndex !== -1) {
            players[playerIndex].min += 90;
            players[playerIndex].gamesCalled += 1;
            players[playerIndex].gamesPlayed += 1;
            players[playerIndex].gamesTitular += 1;
        }
    }
    );

    suplentes.forEach((player, index) => {
        const playerIndex = players.findIndex(playerData => playerData.name.trim() === player.trim());
        if (playerIndex !== -1) {
            players[playerIndex].gamesCalled += 1;
            players[playerIndex].gamesScrub += 1;
        }
    }
    );

    substitutions.forEach((sub, index) => {
        if (sub.playerIn) {
            const playerInIndex = players.findIndex(player => player.name.trim() === sub.playerIn.trim());
            if (playerInIndex !== -1) {
                players[playerInIndex].numFromScrub += 1;
                const isDiscounted = sub.minute.includes('+');
                if (isDiscounted) {
                    players[playerInIndex].min += (Number(sub.minute.split('+')[1]));
                } else {
                    players[playerInIndex].min += (90 - Number(sub.minute));
                }
                players[playerInIndex].gamesPlayed += 1;
            }
        }
        if (sub.playerOut) {
            const playerOutIndex = players.findIndex(player => player.name.trim() === sub.playerOut.trim());
            if (playerOutIndex !== -1) {
                players[playerOutIndex].numSubs += 1;
                const isDiscounted = sub.minute.includes('+');
                if (isDiscounted) {
                    players[playerOutIndex].min -= (Number(sub.minute.split('+')[1]));
                } else {
                    players[playerOutIndex].min -= (90 - Number(sub.minute));
                }
            }
        }
    });

    let isRedCard = false;
    let lastPlayerIndex = null;

    cards.forEach((card, index) => {
        const playerIndex = players.findIndex(player => player.name.trim() === card.trim());
        if (playerIndex !== -1) {
            isRedCard = lastPlayerIndex === playerIndex;
            lastPlayerIndex = playerIndex;
            if (isRedCard) {
                players[playerIndex].redCards += 1;
                isRedCard = false;
            } else {
                players[playerIndex].yellowCards += 1;
            }
        }
    });

    goals.forEach((goal, index) => {
        const playerIndex = players.findIndex(player => player.name.trim() === goal.trim());
        if (playerIndex !== -1) {
            players[playerIndex].goals += 1;
        }
    });
}

function printReport() {
    console.log('INFORME TEMPORADA 2023/24: CD RIO SIL');
    //order players by minutes
    const playersSortedByMinutes = players.sort((a, b) => b.min - a.min);
    console.log('Jugadores ordenados por minutos jugados:')
    playersSortedByMinutes.forEach(player => console.log(
        `${player.name} - ${player.min} min - ${player.gamesPlayed} partidos jugados - ${player.gamesTitular} partidos titular - ${player.gamesScrub} partidos suplente - ${player.gamesCalled} partidos convocado`
    ));
    console.log('#################################')
    console.log('Jugadores ordenados por amarillas:')
    const playersSortedByYellowCards = players.sort((a, b) => b.yellowCards - a.yellowCards);
    playersSortedByYellowCards.forEach(player => console.log(
        `${player.name} - ${player.yellowCards} amarillas`
    ));
    console.log('#################################')
    console.log('Jugadores ordenados por rojas:')
    const playersSortedByRedCards = players.sort((a, b) => b.redCards - a.redCards);
    playersSortedByRedCards.forEach(player => console.log(
        `${player.name} - ${player.redCards} rojas`
    ));
    console.log('#################################')
    console.log('Jugadores ordenados por goles:')
    const playersSortedByGoals = players.sort((a, b) => b.goals - a.goals);
    playersSortedByGoals.forEach(player => console.log(
        `${player.name} - ${player.goals} goles`
    ));
    console.log('#################################')
    console.log('Jugadores ordenados promedio de goles por minuto:')
    players.map(player => {
        const goalsPerMinute = player.goals / player.min;
        const goalsPerGame = player.goals / player.gamesPlayed;
        player['goalsPerMinute'] = Number.isNaN(goalsPerMinute) ? 0 : goalsPerMinute.toFixed(4);
        player['goalsPerGame'] = Number.isNaN(goalsPerGame) ? 0 : goalsPerGame.toFixed(2);
    });
    const playersSortedByGoalsPerMinute = players.sort((a, b) => b.goalsPerMinute - a.goalsPerMinute);
    playersSortedByGoalsPerMinute.forEach(player => console.log(
        `${player.name} - ${player.goalsPerMinute} goles/min`
    ));
    console.log('#################################')
    console.log('Jugadores ordenados promedio de goles por partido:')
    const playersSortedByGoalsPerGame = players.sort((a, b) => b.goalsPerGame - a.goalsPerGame);
    playersSortedByGoalsPerGame.forEach(player => console.log(
        `${player.name} - ${player.goalsPerGame} goles/partido`
    ));

    console.log('#################################')
    console.log('Jugadores más veces convocados:')
    const [playerWithMostCalls, playerWithMostCalls2, playerWithMostCalls3] = players.sort((a, b) => b.gamesCalled - a.gamesCalled);
    console.log(`${playerWithMostCalls.name} - ${playerWithMostCalls.gamesCalled} partidos convocado`);
    console.log(`${playerWithMostCalls2.name} - ${playerWithMostCalls2.gamesCalled} partidos convocado`);
    console.log(`${playerWithMostCalls3.name} - ${playerWithMostCalls3.gamesCalled} partidos convocado`);
    console.log('#################################')
    console.log('Jugadores más veces titulares:')
    const [playerWithMostStarts, playerWithMostStarts2, playerWithMostStarts3] = players.sort((a, b) => b.gamesTitular - a.gamesTitular);
    console.log(`${playerWithMostStarts.name} - ${playerWithMostStarts.gamesTitular} partidos titular de ${playerWithMostStarts.gamesCalled} convocado`);
    console.log(`${playerWithMostStarts2.name} - ${playerWithMostStarts2.gamesTitular} partidos titular de ${playerWithMostStarts2.gamesCalled} convocado`);
    console.log(`${playerWithMostStarts3.name} - ${playerWithMostStarts3.gamesTitular} partidos titular de ${playerWithMostStarts3.gamesCalled} convocado`);
    console.log('#################################')
    console.log('Jugadores más veces suplentes:')
    const [playerWithMostSubs1, playerWithMostSubs2, playerWithMostSubs3] = players.sort((a, b) => b.gamesScrub - a.gamesScrub);
    console.log(`${playerWithMostSubs1.name} - ${playerWithMostSubs1.gamesScrub} partidos suplente de ${playerWithMostSubs1.gamesCalled} convocado`);
    console.log(`${playerWithMostSubs2.name} - ${playerWithMostSubs2.gamesScrub} partidos suplente de ${playerWithMostSubs2.gamesCalled} convocado`);
    console.log(`${playerWithMostSubs3.name} - ${playerWithMostSubs3.gamesScrub} partidos suplente de ${playerWithMostSubs3.gamesCalled} convocado`);
    console.log('#################################')
    console.log('Juagadores más veces sustituidos:')
    const [playerWithMostSubsMade, playerWithMostSubsMade2, playerWithMostSubsMade3] = players.sort((a, b) => b.numSubs - a.numSubs);
    console.log(`${playerWithMostSubsMade.name} - ${playerWithMostSubsMade.numSubs} veces sustituido`);
    console.log(`${playerWithMostSubsMade2.name} - ${playerWithMostSubsMade2.numSubs} veces sustituido`);
    console.log(`${playerWithMostSubsMade3.name} - ${playerWithMostSubsMade3.numSubs} veces sustituido`);
    console.log('#################################')
    console.log('Juagadores que salen desde el banquillo más veces:')
    const [playerWithMostSubsFromScrub, playerWithMostSubsFromScrub2, playerWithMostSubsFromScrub3] = players.sort((a, b) => b.numFromScrub - a.numFromScrub);
    console.log(`${playerWithMostSubsFromScrub.name} - ${playerWithMostSubsFromScrub.numFromScrub} veces salió desde el banquillo de ${playerWithMostSubsFromScrub.gamesCalled} partidos suplente`);
    console.log(`${playerWithMostSubsFromScrub2.name} - ${playerWithMostSubsFromScrub2.numFromScrub} veces salió desde el banquillo de ${playerWithMostSubsFromScrub2.gamesCalled} partidos suplente`);
    console.log(`${playerWithMostSubsFromScrub3.name} - ${playerWithMostSubsFromScrub3.numFromScrub} veces salió desde el banquillo de ${playerWithMostSubsFromScrub3.gamesCalled} partidos suplente`);
    console.log('#################################')
    console.log('Jugadores con mejor promedio de minutos jugados por partido:')
    const [playerWithBestAverageMinutes, playerWithBestAverageMinutes2, playerWithBestAverageMinutes3] = players.sort((a, b) => b.min / b.gamesPlayed - a.min / a.gamesPlayed);
    console.log(`${playerWithBestAverageMinutes.name} - ${Math.round(playerWithBestAverageMinutes.min / playerWithBestAverageMinutes.gamesPlayed)} min/partido`);
    console.log(`${playerWithBestAverageMinutes2.name} - ${Math.round(playerWithBestAverageMinutes2.min / playerWithBestAverageMinutes2.gamesPlayed)} min/partido`);
    console.log(`${playerWithBestAverageMinutes3.name} - ${Math.round(playerWithBestAverageMinutes3.min / playerWithBestAverageMinutes3.gamesPlayed)} min/partido`);
    console.log('#################################')
    console.log('Jugadores con mejor promedio de goles por minuto:')
    const [playerWithBestAverageGoalsPerMinute, playerWithBestAverageGoalsPerMinute2, playerWithBestAverageGoalsPerMinute3] = players.sort((a, b) => b.goalsPerMinute - a.goalsPerMinute);
    console.log(`${playerWithBestAverageGoalsPerMinute.name} - ${playerWithBestAverageGoalsPerMinute.goalsPerMinute} goles/min`);
    console.log(`${playerWithBestAverageGoalsPerMinute2.name} - ${playerWithBestAverageGoalsPerMinute2.goalsPerMinute} goles/min`);
    console.log(`${playerWithBestAverageGoalsPerMinute3.name} - ${playerWithBestAverageGoalsPerMinute3.goalsPerMinute} goles/min`);
    console.log('#################################')
    console.log('Jugadores con mejor promedio de goles por partido:')
    const [playerWithBestAverageGoalsPerGame, playerWithBestAverageGoalsPerGame2, playerWithBestAverageGoalsPerGame3] = players.sort((a, b) => b.goalsPerGame - a.goalsPerGame);
    console.log(`${playerWithBestAverageGoalsPerGame.name} - ${playerWithBestAverageGoalsPerGame.goalsPerGame} goles/partido`);
    console.log(`${playerWithBestAverageGoalsPerGame2.name} - ${playerWithBestAverageGoalsPerGame2.goalsPerGame} goles/partido`);
    console.log(`${playerWithBestAverageGoalsPerGame3.name} - ${playerWithBestAverageGoalsPerGame3.goalsPerGame} goles/partido`);

}


for (let day of gameDay) {
    await processGamePlay(day);
}
// await processGamePlay(3);
printReport();
await browser.close();