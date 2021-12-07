let seasonsGreetings = ["days until Santa comes!", "days until present day!", "days until turkey!", "days until family arguments begin!", "days until disaster strikes!"];

export default function randomGreeting(){
    var index = Math.floor(Math.random() * seasonsGreetings.length);
    return seasonsGreetings[index];
}