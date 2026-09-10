let teams = [
    {
        id: 1, 
        tname: "ByteUs", 
        tl: "Arsh", 
        email: "qwerty@gmail.com", 
        tmembers: 6,
    },
    {
        id: 2, 
        tname: "Code Warriors", 
        tl: "Ash", 
        email: "ash@gmail.com", 
        tmembers: 6,
    },
    {
        id: 3, 
        tname: "Bug Busters",
        tl: "Mayank", 
        email: "nobody@gmail.com", 
        tmembers: 6,
    },
]

let nextId = 4

export const getAllTeams = () => teams;

export const getTeamById = (id) => teams.find((team)=>team.id === id);

export const addTeam = (newTeam) => {
    const team = { id: nextId++, ...newTeam }
    teams.push(team)
    return team
}

export const updateTeamById = (id, updatedTeam) => {
    const index = teams.findIndex((team) => team.id === id);
    if(index != -1) {
        teams[index] = {...teams[index], ...updatedTeam}
        return teams[index]
    }
    return null;
}

export const deleteTeam = (id) => {
    const index = teams.findIndex((team) => team.id === id);
    if(index == -1) return null;
    teams.splice(index, 1)
    return true;
}