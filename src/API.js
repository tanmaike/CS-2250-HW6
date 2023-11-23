import React from "react";

const BallDontLieAPI = () => {
    const [teams, setTeams] = React.useState([]);
    const [checkData, setCheckData] = React.useState(false);

    React.useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/teams")
          .then((response) => response.json())
          .then((data) => {
            setTeams(data.data);
            setCheckData(true);
        });
    }, []);

    if (!checkData) {
        return (
            <div>
                <h1> Ball Don't Lie API is still loading. Please wait. </h1>
            </div>
        );
    }

    const conferencedTeams = teams.reduce((conf, team) => {
        const conference = team.conference;
        if (!conf[conference]) {
            conf[conference] = [];
        }
        conf[conference].push(team);
        return conf;
    }, []);

    return (
    <div id="bdlAPI">
        <br/>
        <h1> Ball Don't Lie API </h1>
        {Object.keys(conferencedTeams).map(conference => (
        <div>
            <h2>{conference}</h2>
            <table>
                <tr>
                    <th>Team</th>
                    <th>Division</th>
                </tr>
                <tbody>
                {conferencedTeams[conference].map(team => (
                    <tr key={team.id}>
                        <td>{team.full_name}</td>
                        <td>{team.division}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br/>
        </div>
        ))}
    </div>
    );
}

export default BallDontLieAPI;