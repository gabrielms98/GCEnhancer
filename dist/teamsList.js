var styles = `

    section.list-avaliable-teams {
        column-count: 4;
    }

    .kd-ratio {
        width: 45px;
        height: 45px;
        position: relative;
        display: inline-block;
        bottom: -2rem;
    }

    .sala-lineup-player {
        overflow: visible;
        font-size: .75rem;
        min-height: 170px;
    }

    .player-placeholder {
        display: none;
    }

    .kd-ratio span {
        width: 45px !important;
        height: 45px !important;
    }
    
    .LobbyRoomLvlRestriction {
        position: relative !important;
    }
`

var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

const interval = setInterval(run, 1000)

function run() {
    const teamsList = document.querySelector('section.list-avaliable-teams')

    const teams = teamsList.querySelectorAll('.lobby-room-list-item')

    teams.forEach(team => {
        const players = team.querySelectorAll('.sala-lineup-player')

        players.forEach(player => {

            const hasKdDiv = player.querySelector('.kd-ratio')
            if (hasKdDiv) return

            let playerInfo = player.querySelector('.gc-avatar a')
            playerInfo = (playerInfo && playerInfo.title) ? playerInfo.title : ""

            if (playerInfo) {
                let [, kd] = playerInfo.split(" | ")
                kd = kd.split(" ")[1].trim()

                const kdDiv = document.createElement('div')
                kdDiv.innerHTML = "<span>" + kd + "</span>"
                kdDiv.className = "kd-ratio"

                player.appendChild(kdDiv)
            }
            // console.log(player)
        })
    })

    // if (teams && teams.length) clearInterval(interval)
}